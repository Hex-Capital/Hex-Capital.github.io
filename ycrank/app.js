// YCRank Dashboard - Application Logic

function app() {
  return {
    // State
    batches: [],
    currentBatch: '',
    manifest: null,
    personas: [],
    loading: true,
    view: 'dashboard', // dashboard | company | analytics | traction

    // Dashboard state
    search: '',
    sortCol: 'rank',
    sortDir: 1,

    // Company detail state
    companyData: null,
    activeTab: 'memo',
    tabContent: '',
    tabLoading: false,
    mdCache: {}, // path -> rendered html

    // Traction state
    tractionData: null,

    // Council state
    councilOpen: false,
    councilInput: '',
    councilAsking: false,
    councilMessages: [],
    councilPersonas: new Set(),
    councilModel: 'sonnet',
    councilCost: 0,
    councilSessionId: '',

    // Static mode (set by config.json)
    staticMode: false,

    // Disagreement lookup
    disagreementSet: new Set(),

    formatBatch(b) {
      const m = b.match(/^([a-z]+)(\d{4})$/);
      if (!m) return b;
      return m[2] + ' ' + m[1].charAt(0).toUpperCase() + m[1].slice(1);
    },

    async init() {
      // Listen for hash changes
      window.addEventListener('hashchange', () => this.handleRoute());
      window.addEventListener('keydown', (e) => this.handleKeydown(e));

      // Detect static mode via config.json
      try {
        const cfgResp = await fetch('config.json');
        if (cfgResp.ok) {
          const cfg = await cfgResp.json();
          this.staticMode = cfg.static === true;
        }
      } catch (e) { /* default false */ }

      try {
        // Load batches
        const batchesResp = await fetch('data/batches.json');
        this.batches = await batchesResp.json();

        // Load personas
        const personasResp = await fetch('data/personas.json');
        this.personas = await personasResp.json();

        // Load default batch
        if (this.batches.length > 0) {
          this.currentBatch = this.batches[this.batches.length - 1]; // latest
          await this.loadBatch(this.currentBatch);
        }

        // Initialize council: all personas active, generate session ID
        this.councilSessionId = crypto.randomUUID();
        this.personas.forEach(p => this.councilPersonas.add(p.slug));

        // Handle initial route
        this.handleRoute();
      } catch (e) {
        console.error('Init failed:', e);
      } finally {
        this.loading = false;
      }
    },

    async loadBatch(batchName) {
      this.loading = true;
      try {
        const resp = await fetch(`data/${batchName}/manifest.json`);
        this.manifest = await resp.json();
        this.personas = this.manifest.personas;

        // Build disagreement set
        this.disagreementSet = new Set(this.manifest.disagreements.map(d => d.company));

        // Clear caches
        this.mdCache = {};
        this.companyData = null;
        this.tractionData = null;
      } catch (e) {
        console.error('Failed to load batch:', e);
      } finally {
        this.loading = false;
      }
    },

    // --- Routing ---

    navigate(route) {
      window.location.hash = '#' + route;
    },

    handleRoute() {
      const hash = window.location.hash.slice(1) || 'dashboard';
      const parts = hash.split('/');

      if (parts[0] === 'company' && parts[1]) {
        this.councilOpen = false;
        this.showCompany(parts[1]);
      } else if (parts[0] === 'analytics') {
        this.councilOpen = false;
        this.view = 'analytics';
      } else if (parts[0] === 'traction') {
        this.councilOpen = false;
        this.showTraction();
      } else {
        this.councilOpen = false;
        this.view = 'dashboard';
      }
    },

    // --- Dashboard ---

    get filteredTable() {
      if (!this.manifest) return [];
      let rows = this.manifest.table;

      // Text filter
      if (this.search) {
        const q = this.search.toLowerCase();
        rows = rows.filter(r =>
          r.name.toLowerCase().includes(q) ||
          (r.oneLiner && r.oneLiner.toLowerCase().includes(q))
        );
      }

      // Sort
      const col = this.sortCol;
      const dir = this.sortDir;
      rows = [...rows].sort((a, b) => {
        let va, vb;
        if (col === 'name') {
          va = a.name.toLowerCase();
          vb = b.name.toLowerCase();
          return va < vb ? -dir : va > vb ? dir : 0;
        } else if (col === 'avg') {
          va = a.avg || 0;
          vb = b.avg || 0;
        } else if (col === 'revenue') {
          va = a.revenue != null ? a.revenue : -1;
          vb = b.revenue != null ? b.revenue : -1;
        } else if (col === 'teamSize') {
          va = a.teamSize != null ? a.teamSize : -1;
          vb = b.teamSize != null ? b.teamSize : -1;
        } else if (a.scores && a.scores[col] !== undefined) {
          // Persona abbreviation column (CB, EG, NR, PG, PT, SL, VK)
          va = a.scores[col] != null ? a.scores[col] : -1;
          vb = b.scores[col] != null ? b.scores[col] : -1;
        } else {
          va = a[col] || 0;
          vb = b[col] || 0;
        }
        return (va - vb) * dir;
      });

      return rows;
    },

    sortBy(col) {
      if (this.sortCol === col) {
        this.sortDir *= -1;
      } else {
        this.sortCol = col;
        // Default ascending for rank/name, descending for scores/avg
        this.sortDir = (col === 'rank' || col === 'name') ? 1 : -1;
      }
    },

    isDisagreement(name) {
      return this.disagreementSet.has(name);
    },

    // --- Company Detail ---

    async showCompany(slug) {
      this.view = 'company';
      this.activeTab = 'memo';
      this.tabContent = '';

      try {
        const resp = await fetch(`data/${this.currentBatch}/companies/${slug}.json`);
        if (!resp.ok) throw new Error('Company not found');
        this.companyData = await resp.json();
        // Load memo content
        await this.loadTabContent('memo');
      } catch (e) {
        console.error('Failed to load company:', e);
        this.companyData = null;
      }
    },

    async loadTabContent(tab) {
      if (!this.companyData) return;
      this.tabLoading = true;
      this.activeTab = tab;

      let mdPath;
      if (tab === 'memo') {
        mdPath = this.companyData.paths.memo;
      } else {
        mdPath = this.companyData.paths.evals[tab];
      }

      if (!mdPath) {
        this.tabContent = '<p class="text-claude-dim">No data available.</p>';
        this.tabLoading = false;
        return;
      }

      // Check cache
      if (this.mdCache[mdPath]) {
        this.tabContent = this.mdCache[mdPath];
        this.tabLoading = false;
        return;
      }

      try {
        // Fetch from original markdown files (served from repo root)
        const resp = await fetch((this.staticMode ? '' : '../') + mdPath);
        if (!resp.ok) throw new Error('Failed to fetch ' + mdPath);
        let md = await resp.text();
        // Strip BOM
        md = md.replace(/^\uFEFF/, '');
        const html = marked.parse(md);
        this.mdCache[mdPath] = html;
        this.tabContent = html;
      } catch (e) {
        this.tabContent = '<p class="text-claude-red">Failed to load content.</p>';
        console.error(e);
      } finally {
        this.tabLoading = false;
      }
    },

    hasPrevCompany() {
      if (!this.companyData || !this.manifest) return false;
      const rank = this.companyData.consolidatedRank;
      return rank && rank > 1;
    },

    hasNextCompany() {
      if (!this.companyData || !this.manifest) return false;
      const rank = this.companyData.consolidatedRank;
      return rank && rank < this.manifest.table.length;
    },

    prevCompany() {
      if (!this.hasPrevCompany()) return;
      const rank = this.companyData.consolidatedRank;
      const prev = this.manifest.table.find(r => r.rank === rank - 1);
      if (prev && prev.slug) this.navigate('company/' + prev.slug);
    },

    nextCompany() {
      if (!this.hasNextCompany()) return;
      const rank = this.companyData.consolidatedRank;
      const next = this.manifest.table.find(r => r.rank === rank + 1);
      if (next && next.slug) this.navigate('company/' + next.slug);
    },

    // --- Traction ---

    async showTraction() {
      this.view = 'traction';
      if (this.tractionData) return;

      try {
        const resp = await fetch(`data/${this.currentBatch}/slides/traction.json`);
        if (!resp.ok) throw new Error('Traction data not found');
        this.tractionData = await resp.json();
      } catch (e) {
        console.error('Failed to load traction data:', e);
        this.tractionData = null;
      }
    },

    // --- Council ---

    openCouncil() {
      this.councilOpen = true;
    },

    // --- Email Draft ---

    draftEmail() {
      if (!this.companyData || this.staticMode) return;
      const params = new URLSearchParams({
        companySlug: this.companyData.slug,
        batch: this.currentBatch
      });
      window.open(`/api/email/draft?${params}`, '_blank');
    },

    selectAllCouncilPersonas() {
      if (this.councilPersonas.size === this.personas.length) {
        this.councilPersonas = new Set([this.personas[0].slug]);
      } else {
        this.councilPersonas = new Set(this.personas.map(p => p.slug));
      }
    },

    toggleCouncilPersona(slug) {
      if (this.councilPersonas.has(slug)) {
        // Don't allow deselecting all
        if (this.councilPersonas.size > 1) {
          this.councilPersonas.delete(slug);
        }
      } else {
        this.councilPersonas.add(slug);
      }
      // Force reactivity by reassigning
      this.councilPersonas = new Set(this.councilPersonas);
    },

    async askCouncil() {
      if (this.staticMode) return;
      const question = this.councilInput.trim();
      if (!question || this.councilAsking) return;

      this.councilAsking = true;
      this.councilInput = '';

      // Add user question to messages
      this.councilMessages.push({ type: 'question', text: question });

      // Add placeholder "thinking" messages for each active persona
      const activeList = [...this.councilPersonas];
      const placeholders = {};
      for (const slug of activeList) {
        const p = this.personas.find(x => x.slug === slug);
        if (!p) continue;
        const idx = this.councilMessages.length;
        this.councilMessages.push({
          type: 'response',
          persona: slug,
          fullName: p.fullName,
          abbr: p.abbr,
          text: '',
          cost: '',
          elapsed: '',
          loading: true
        });
        placeholders[slug] = idx;
      }

      // Scroll to bottom
      this.$nextTick(() => {
        if (this.$refs.councilMessages) {
          this.$refs.councilMessages.scrollTop = this.$refs.councilMessages.scrollHeight;
        }
      });

      try {
        const resp = await fetch('/api/council/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            question,
            companySlug: this.companyData ? this.companyData.slug : null,
            personas: activeList,
            sessionId: this.councilSessionId,
            model: this.councilModel,
            batch: this.currentBatch
          })
        });

        const reader = resp.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';

        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          // Process complete SSE lines
          const lines = buffer.split('\n');
          buffer = lines.pop(); // keep incomplete line in buffer

          for (const line of lines) {
            if (!line.startsWith('data: ')) continue;
            try {
              const data = JSON.parse(line.slice(6));

              if (data.type === 'result' || data.type === 'error') {
                const idx = placeholders[data.persona];
                if (idx !== undefined && this.councilMessages[idx]) {
                  this.councilMessages[idx].text = data.text;
                  this.councilMessages[idx].cost = data.cost || '';
                  this.councilMessages[idx].elapsed = data.elapsed || '';
                  this.councilMessages[idx].loading = false;
                }
                // Scroll on each response
                this.$nextTick(() => {
                  if (this.$refs.councilMessages) {
                    this.$refs.councilMessages.scrollTop = this.$refs.councilMessages.scrollHeight;
                  }
                });
              }

              if (data.type === 'done') {
                const cost = parseFloat(data.totalCost);
                if (!isNaN(cost)) this.councilCost += cost;
              }
            } catch (e) {
              // skip malformed SSE
            }
          }
        }
      } catch (e) {
        console.error('Council ask failed:', e);
        // Mark all loading placeholders as errored
        for (const slug of Object.keys(placeholders)) {
          const idx = placeholders[slug];
          if (this.councilMessages[idx] && this.councilMessages[idx].loading) {
            this.councilMessages[idx].text = 'Request failed.';
            this.councilMessages[idx].loading = false;
          }
        }
      } finally {
        this.councilAsking = false;
      }
    },

    async clearCouncilHistory() {
      this.councilMessages = [];
      this.councilCost = 0;
      try {
        await fetch(`/api/council/session/${this.councilSessionId}`, { method: 'DELETE' });
      } catch (e) { /* ignore */ }
      this.councilSessionId = crypto.randomUUID();
    },

    personaColor(slug) {
      const colors = {
        'cyan-banister': 'persona-terracotta',
        'elad-gil': 'persona-sage',
        'naval-ravikant': 'persona-blue',
        'paul-graham': 'persona-amber',
        'peter-thiel': 'persona-purple',
        'sam-lessin': 'persona-rose',
        'vinod-khosla': 'persona-cream',
      };
      return colors[slug] || 'text-claude-dim';
    },

    // --- Helpers ---

    renderMarkdown(text) {
      if (!text) return '';
      return marked.parse(text);
    },

    tierColor(tier) {
      if (!tier) return 'text-claude-dim';
      const t = tier.toLowerCase();
      if (t.includes('strong') && t.includes('invest')) return 'score-claude-deepgreen score-bg-deepgreen';
      if (t.includes('invest')) return 'score-claude-green score-bg-green';
      if (t.includes('neutral')) return 'score-claude-orange score-bg-orange';
      if (t.includes('strong') && t.includes('pass')) return 'score-claude-deepred score-bg-deepred';
      if (t.includes('pass')) return 'score-claude-red score-bg-red';
      return 'text-claude-dim';
    },

    avgColor(avg) {
      if (avg == null) return 'text-claude-dim';
      if (avg >= 70) return 'score-claude-deepgreen';
      if (avg >= 55) return 'score-claude-green';
      if (avg >= 40) return 'score-claude-orange';
      if (avg >= 25) return 'score-claude-red';
      return 'score-claude-deepred';
    },

    corrColor(val) {
      if (val == null) return 'text-claude-dim corr-none';
      if (val > 0.80) return 'corr-high';
      if (val > 0.60) return 'corr-medium';
      if (val > 0.40) return 'corr-low';
      return 'text-claude-dim corr-none';
    },

    tractionTierColor(tierName) {
      if (tierName.toLowerCase().includes('strong')) return 'text-claude-green';
      if (tierName.toLowerCase().includes('moderate')) return 'text-claude-amber';
      return 'text-claude-gray';
    },

    // --- Keyboard shortcuts ---

    handleKeydown(e) {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'Escape') {
        e.preventDefault();
        if (this.councilOpen) {
          this.councilOpen = false;
        } else if (this.view !== 'dashboard') {
          this.navigate('dashboard');
        }
      }
      if (this.view === 'company' && !this.councilOpen) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.prevCompany();
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.nextCompany();
        }
      }
    }
  };
}
