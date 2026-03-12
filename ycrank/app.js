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
    sortCol: 'avg',
    sortDir: -1,

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

    // Mobile card state
    mobileCardIndex: 0,
    mobileSwipeX: 0,
    mobileSwiping: false,
    _touchStartX: 0,
    _touchStartY: 0,
    _touchStartTime: 0,
    _touchLocked: false,   // true once we commit to horizontal swipe
    _touchCancelled: false, // true if vertical movement detected first
    _swipeConsumed: false,  // true if swipe gesture occurred (prevents tap navigation)
    _animating: false,     // true during carousel slide animation
    _graphScaleMin: 0,     // global min score across all companies
    _graphScaleMax: 100,   // global max score across all companies

    formatBatch(b) {
      const m = b.match(/^([a-z]+)(\d{4})$/);
      if (!m) return b;
      return m[2] + ' ' + m[1].charAt(0).toUpperCase() + m[1].slice(1);
    },

    formatDate(iso) {
      if (!iso) return '';
      const d = new Date(iso);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: 'numeric', minute: '2-digit' });
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

      // Auth gate in static mode
      if (this.staticMode && !localStorage.getItem('ycrank_auth')) {
        window.location.href = 'login.html';
        return;
      }

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

        // Reset mobile card index on search change
        this.$watch('search', () => { this.mobileCardIndex = 0; });

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

        // Compute global min/max scores across all companies for consistent graph scale
        let gMin = 100, gMax = 0;
        for (const row of this.manifest.table) {
          if (!row.scores) continue;
          for (const key of Object.keys(row.scores)) {
            const s = row.scores[key];
            if (s != null) { if (s < gMin) gMin = s; if (s > gMax) gMax = s; }
          }
        }
        const gPad = Math.max((gMax - gMin) * 0.02, 1);
        this._graphScaleMin = Math.max(Math.floor(gMin - gPad), 0);
        this._graphScaleMax = Math.min(Math.ceil(gMax + gPad), 100);

        // Clear caches
        this.mdCache = {};
        this.companyData = null;
        this.tractionData = null;
        this.mobileCardIndex = 0;
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
        } else if (col === 'ycPartner') {
          va = (a.ycPartner || '').toLowerCase();
          vb = (b.ycPartner || '').toLowerCase();
          return va < vb ? -dir : va > vb ? dir : 0;
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

    get mobileCards() {
      if (!this.manifest) return [];
      let rows = this.manifest.table;
      if (this.search) {
        const q = this.search.toLowerCase();
        rows = rows.filter(r =>
          r.name.toLowerCase().includes(q) ||
          (r.oneLiner && r.oneLiner.toLowerCase().includes(q))
        );
      }
      return [...rows].sort((a, b) => (b.avg || 0) - (a.avg || 0));
    },

    // Returns [prevIdx, currentIdx, nextIdx] for the 3-card carousel (-1 = empty slot)
    get mobileVisibleSlides() {
      const cards = this.mobileCards;
      if (cards.length === 0) return [-1, -1, -1];
      const idx = this.mobileCardIndex;
      return [
        idx > 0 ? idx - 1 : -1,
        idx,
        idx < cards.length - 1 ? idx + 1 : -1
      ];
    },

    mobileTrackStyle() {
      const transition = this.mobileSwiping
        ? 'none'
        : 'transform 0.35s cubic-bezier(0.22, 1, 0.36, 1)';
      const swipe = this.mobileSwipeX;
      // Base offset: -33.333% of track width = -1 viewport width (shows center slide)
      // Swipe pixels added on top via calc() so it works even before ref is laid out
      return swipe === 0
        ? `transform:translateX(-33.333%);transition:${transition}`
        : `transform:translateX(calc(-33.333% + ${swipe}px));transition:${transition}`;
    },

    scoreGraphSVG(card) {
      if (!card) return '';
      // Measure the actual graph container to match the viewBox aspect ratio
      const graphEl = document.querySelector('.mobile-score-graph');
      const cw = graphEl?.offsetWidth || 280;
      const ch = graphEl?.offsetHeight || 140;
      const vbW = 280;
      const vbH = Math.max(Math.round(vbW * ch / cw), 80);

      const count = this.personas.length;
      const yTop = 16;                // room for score text above top dot
      const yBottom = vbH - 6;        // dots can go near the bottom (labels are HTML)
      const xStart = 25, xEnd = 255;
      const xStep = count > 1 ? (xEnd - xStart) / (count - 1) : 0;

      // Use global min/max score range for consistent scale across all cards
      const scaleMin = this._graphScaleMin;
      const scaleMax = this._graphScaleMax;
      const scaleRange = scaleMax - scaleMin || 1;

      const pts = this.personas.map((p, i) => {
        const score = card.scores[p.abbr];
        return {
          x: Math.round(xStart + i * xStep),
          y: score != null ? Math.round(yBottom - ((score - scaleMin) / scaleRange) * (yBottom - yTop)) : yBottom,
          label: p.abbr,
          value: score != null ? score : null,
          color: this.tierBarBg(card.tiers[p.abbr])
        };
      });
      const linePoints = pts.filter(p => p.value !== null).map(p => `${p.x},${p.y}`).join(' ');
      const svgH = 'calc(100% - 18px)';
      // SVG: line only (dots and text are HTML to avoid stretch distortion)
      let out = `<svg viewBox="0 0 ${vbW} ${vbH}" preserveAspectRatio="none" style="position:absolute;top:0;left:0;width:100%;height:${svgH}">`;
      if (linePoints) out += `<polyline points="${linePoints}" fill="none" stroke="var(--c-accent)" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>`;
      out += `</svg>`;
      // HTML dots: positioned to match SVG coordinates but stay circular
      for (const pt of pts) {
        const xPct = (pt.x / vbW * 100).toFixed(2);
        const yFrac = pt.y / vbH;
        const yAdj = (yFrac * 18).toFixed(1);
        out += `<span style="position:absolute;left:${xPct}%;top:calc(${(yFrac * 100).toFixed(2)}% - ${yAdj}px);transform:translate(-50%,-50%);width:9px;height:9px;border-radius:50%;background:${pt.color};border:1.5px solid var(--c-card)"></span>`;
      }
      // HTML score values: positioned above or below each dot
      // Place below if this point is a local dip (lower score than both neighbors)
      for (let i = 0; i < pts.length; i++) {
        const pt = pts[i];
        const val = pt.value != null ? pt.value : '-';
        const xPct = (pt.x / vbW * 100).toFixed(2);
        const yFrac = pt.y / vbH;
        const yPct = (yFrac * 100).toFixed(2);
        // A point is a dip if its score is lower than both neighbors (use raw scores, not y-coords)
        const prevScore = i > 0 ? pts[i-1].value : null;
        const nextScore = i < pts.length-1 ? pts[i+1].value : null;
        const s = pt.value;
        const isDip = s != null
          && ((prevScore != null && nextScore != null && s < prevScore && s < nextScore)
            || (prevScore == null && nextScore != null && s < nextScore - 5)
            || (nextScore == null && prevScore != null && s < prevScore - 5));
        if (isDip) {
          // Below the dot
          const yOffset = (yFrac * 18 - 6).toFixed(1);
          out += `<span style="position:absolute;left:${xPct}%;top:calc(${yPct}% - ${yOffset}px);transform:translateX(-50%);font:700 13px 'JetBrains Mono',monospace;color:${pt.color}">${val}</span>`;
        } else {
          // Above the dot
          const yOffset = (yFrac * 18 + 20).toFixed(1);
          out += `<span style="position:absolute;left:${xPct}%;top:calc(${yPct}% - ${yOffset}px);transform:translateX(-50%);font:700 13px 'JetBrains Mono',monospace;color:${pt.color}">${val}</span>`;
        }
      }
      // HTML persona labels: positioned at bottom
      out += `<div style="position:absolute;bottom:0;left:0;right:0;display:flex;justify-content:space-between;padding:0 9%;line-height:1">`;
      for (const pt of pts) {
        out += `<span style="font:600 12px 'JetBrains Mono',monospace;color:var(--c-gray)">${pt.label}</span>`;
      }
      out += `</div>`;
      return out;
    },

    sortBy(col) {
      if (this.sortCol === col) {
        this.sortDir *= -1;
      } else {
        this.sortCol = col;
        // Default ascending for rank/name, descending for scores/avg
        this.sortDir = (col === 'rank' || col === 'name' || col === 'ycPartner') ? 1 : -1;
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
        const html = DOMPurify.sanitize(marked.parse(md));
        // Cap cache at 50 entries, evict oldest on overflow
        const keys = Object.keys(this.mdCache);
        if (keys.length >= 50) {
          delete this.mdCache[keys[0]];
        }
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

    logout() {
      if (this.staticMode) {
        localStorage.removeItem('ycrank_auth');
        window.location.href = 'login.html';
      } else {
        window.location.href = '/logout';
      }
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

    generateMeetingNotes() {
      if (!this.companyData || this.staticMode) return;
      const params = new URLSearchParams({
        companySlug: this.companyData.slug,
        batch: this.currentBatch,
        model: this.councilModel
      });
      window.open(`/api/meetingnotes/generate?${params}`, '_blank');
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

    // --- Tier helpers ---

    // Canonical tier detection from a tier string like "Strong Invest", "Invest", "Neutral", "Pass", "Strong Pass"
    getTierCategory(tier) {
      if (!tier) return 'neutral';
      const t = tier.toLowerCase();
      if (t.includes('strong') && t.includes('invest')) return 'strong-invest';
      if (t.includes('invest')) return 'invest';
      if (t.includes('neutral')) return 'neutral';
      if (t.includes('strong') && t.includes('pass')) return 'strong-pass';
      if (t.includes('pass')) return 'pass';
      return 'neutral';
    },

    // Canonical tier detection from a numeric average
    avgTierCategory(avg) {
      if (avg == null) return null;
      if (avg >= 70) return 'strong-invest';
      if (avg >= 55) return 'invest';
      if (avg >= 40) return 'neutral';
      if (avg >= 25) return 'pass';
      return 'strong-pass';
    },

    // --- Card helpers ---

    fmtLocation(loc) {
      if (!loc) return '';
      // take first segment before semicolons, strip parenthetical source citations
      let s = loc.split(';')[0].replace(/\s*\([^)]*\)/g, '').trim();
      if (/^(not listed|not specified|no public data found|unknown)$/i.test(s)) return '';
      // strip "/ Remote" suffix
      s = s.replace(/\s*\/\s*Remote\s*$/i, '');
      // strip ", USA" or ", United States"
      s = s.replace(/,\s*(USA|United States)\s*$/i, '');
      // strip postal codes (e.g. 94404)
      s = s.replace(/\s+\d{5}(-\d{4})?\b/, '');
      // full state names → abbreviations
      const st = {Alabama:'AL',Alaska:'AK',Arizona:'AZ',Arkansas:'AR',California:'CA',Colorado:'CO',Connecticut:'CT',Delaware:'DE',Florida:'FL',Georgia:'GA',Hawaii:'HI',Idaho:'ID',Illinois:'IL',Indiana:'IN',Iowa:'IA',Kansas:'KS',Kentucky:'KY',Louisiana:'LA',Maine:'ME',Maryland:'MD',Massachusetts:'MA',Michigan:'MI',Minnesota:'MN',Mississippi:'MS',Missouri:'MO',Montana:'MT',Nebraska:'NE',Nevada:'NV','New Hampshire':'NH','New Jersey':'NJ','New Mexico':'NM','New York':'NY','North Carolina':'NC','North Dakota':'ND',Ohio:'OH',Oklahoma:'OK',Oregon:'OR',Pennsylvania:'PA','Rhode Island':'RI','South Carolina':'SC','South Dakota':'SD',Tennessee:'TN',Texas:'TX',Utah:'UT',Vermont:'VT',Virginia:'VA',Washington:'WA','West Virginia':'WV',Wisconsin:'WI',Wyoming:'WY'};
      for (const [full, abbr] of Object.entries(st)) {
        const re = new RegExp(',\\s*' + full + '\\s*$', 'i');
        if (re.test(s)) { s = s.replace(re, ', ' + abbr); break; }
      }
      return s.trim();
    },

    tierBarBg(tier) {
      const hexByTier = {
        'strong-invest': '#2d8a4e',
        'invest': '#4a9e4a',
        'neutral': '#d9923a',
        'pass': '#cc3838',
        'strong-pass': '#8b2525',
      };
      return hexByTier[this.getTierCategory(tier)] || '#d9923a';
    },

    avgTierLabel(avg) {
      const labels = {
        'strong-invest': 'Strong Invest',
        'invest': 'Invest',
        'neutral': 'Neutral',
        'pass': 'Pass',
        'strong-pass': 'Strong Pass',
      };
      const cat = this.avgTierCategory(avg);
      return cat ? labels[cat] : '--';
    },

    // --- Helpers ---

    tierColor(tier) {
      if (!tier) return 'text-claude-dim';
      const classByTier = {
        'strong-invest': 'score-claude-deepgreen score-bg-deepgreen',
        'invest': 'score-claude-green score-bg-green',
        'neutral': 'score-claude-orange score-bg-orange',
        'pass': 'score-claude-red score-bg-red',
        'strong-pass': 'score-claude-deepred score-bg-deepred',
      };
      return classByTier[this.getTierCategory(tier)] || 'text-claude-dim';
    },

    avgColor(avg) {
      const classByTier = {
        'strong-invest': 'score-claude-deepgreen',
        'invest': 'score-claude-green',
        'neutral': 'score-claude-orange',
        'pass': 'score-claude-red',
        'strong-pass': 'score-claude-deepred',
      };
      const cat = this.avgTierCategory(avg);
      return cat ? classByTier[cat] : 'text-claude-dim';
    },

    corrColor(val) {
      if (val == null) return 'text-claude-dim corr-none';
      if (val > 0.80) return 'corr-high';
      if (val > 0.60) return 'corr-medium';
      if (val > 0.40) return 'corr-low';
      return 'text-claude-dim corr-none';
    },

    avgTierClass(avg) {
      const suffixByTier = {
        'strong-invest': 'deepgreen',
        'invest': 'green',
        'neutral': 'orange',
        'pass': 'red',
        'strong-pass': 'deepred',
      };
      const cat = this.avgTierCategory(avg);
      return cat ? suffixByTier[cat] : 'dim';
    },

    tractionTierColor(tierName) {
      if (tierName.toLowerCase().includes('strong')) return 'text-claude-green';
      if (tierName.toLowerCase().includes('moderate')) return 'text-claude-amber';
      return 'text-claude-gray';
    },

    // --- Mobile card swipe ---

    mobileCardTouchStart(e) {
      if (this._animating) return;
      const t = e.touches[0];
      this._touchStartX = t.clientX;
      this._touchStartY = t.clientY;
      this._touchStartTime = Date.now();
      this._touchLocked = false;
      this._touchCancelled = false;
      this._swipeConsumed = false;
      this.mobileSwiping = true;
    },

    mobileCardTouchMove(e) {
      if (this._touchCancelled) return;
      const t = e.touches[0];
      const dx = t.clientX - this._touchStartX;
      const dy = t.clientY - this._touchStartY;

      // Axis lock: first significant movement decides
      if (!this._touchLocked && (Math.abs(dx) > 8 || Math.abs(dy) > 8)) {
        if (Math.abs(dy) > Math.abs(dx)) {
          // Vertical — cancel swipe, let browser scroll
          this._touchCancelled = true;
          this.mobileSwipeX = 0;
          this.mobileSwiping = false;
          return;
        }
        this._touchLocked = true;
      }

      if (this._touchLocked) {
        e.preventDefault();
        this._swipeConsumed = true;
        const cards = this.mobileCards;
        const atStart = this.mobileCardIndex === 0 && dx > 0;
        const atEnd = this.mobileCardIndex === cards.length - 1 && dx < 0;
        this.mobileSwipeX = (atStart || atEnd) ? dx * 0.3 : dx;
      }
    },

    mobileCardTouchEnd(e) {
      if (this._touchCancelled || !this.mobileSwiping) {
        this.mobileSwiping = false;
        return;
      }
      const dx = this.mobileSwipeX;
      const elapsed = Date.now() - this._touchStartTime;
      const velocity = Math.abs(dx) / (elapsed || 1);
      const cards = this.mobileCards;
      const vw = this.$refs.cardViewport?.offsetWidth || 300;

      let newIndex = this.mobileCardIndex;
      if ((Math.abs(dx) > 50 || velocity > 0.3) && cards.length > 1) {
        if (dx < 0 && this.mobileCardIndex < cards.length - 1) {
          newIndex = this.mobileCardIndex + 1;
        } else if (dx > 0 && this.mobileCardIndex > 0) {
          newIndex = this.mobileCardIndex - 1;
        }
      }

      if (newIndex !== this.mobileCardIndex) {
        // Animate carousel to next/prev card
        const dir = newIndex > this.mobileCardIndex ? -1 : 1;
        this.mobileSwiping = false; // enable CSS transition
        this.mobileSwipeX = dir * vw;
        this._animating = true;

        setTimeout(() => {
          this.mobileSwiping = true; // suppress transition for instant reset
          this.mobileCardIndex = newIndex;
          this.mobileSwipeX = 0;
          // Double-rAF: ensure browser paints the no-transition state
          // before re-enabling transitions (prevents ghost second animation)
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              this.mobileSwiping = false;
              this._animating = false;
            });
          });
        }, 380);
      } else {
        // Snap back
        this.mobileSwipeX = 0;
        this.mobileSwiping = false;
      }
    },

    mobileCardNav(dir) {
      const cards = this.mobileCards;
      const newIndex = this.mobileCardIndex + dir;
      if (newIndex < 0 || newIndex >= cards.length) return;
      if (this._animating) return;

      this._animating = true;
      const vw = this.$refs.cardViewport?.offsetWidth || 300;

      // Animate carousel slide
      this.mobileSwiping = false; // enable CSS transition
      this.mobileSwipeX = dir > 0 ? -vw : vw;

      setTimeout(() => {
        this.mobileSwiping = true; // suppress transition for instant reset
        this.mobileCardIndex = newIndex;
        this.mobileSwipeX = 0;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.mobileSwiping = false;
            this._animating = false;
          });
        });
      }, 380);
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
      if (this.view === 'dashboard' && !this.councilOpen) {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.mobileCardNav(-1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.mobileCardNav(1);
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
