// YCRank Dashboard - Application Logic

// Open all markdown-rendered links in new tabs
const renderer = new marked.Renderer();
renderer.link = function({ href, title, tokens }) {
  const text = this.parser.parseInline(tokens);
  const titleAttr = title ? ` title="${title}"` : '';
  return `<a href="${href}"${titleAttr} target="_blank" rel="noopener">${text}</a>`;
};
marked.setOptions({ renderer });

function formatRevenue(val, hasSlide) {
  if (hasSlide === false) return 'no slide';
  if (val == null) return '-';
  if (val >= 1_000_000) return '$' + (val / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (val >= 1_000) return '$' + Math.round(val / 1_000) + 'K';
  return '$' + val;
}

const MONTH_ABBR = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
function formatMemoDate(iso) {
  if (!iso) return '-';
  const [y, m, d] = iso.split('-');
  return `${MONTH_ABBR[parseInt(m, 10) - 1]} ${parseInt(d, 10)}`;
}

function app() {
  return {
    // State
    batches: [],
    currentBatch: '',
    manifest: null,
    _batchLoadId: 0,
    _routeLoadId: 0,
    loading: true,
    view: 'dashboard', // dashboard | company | analytics

    // Dashboard state
    search: '',
    acOpen: false,
    acIndex: -1,
    desktopSort: { col: 'avg', dir: -1 },
    mobileSort: { col: 'tractionRank', dir: 1 },
    listReturn: null,

    // Company detail state
    companyData: null,
    companyError: '',
    activeTab: 'memo',
    tabContent: '',
    tabLoading: false,
    councilChatEnabled: false,
    councilChatThreads: {},
    _companyLoadId: 0,
    _tabLoadId: 0,
    mdCache: {}, // path -> rendered html
    _mdCacheSize: 0, // approximate total bytes in mdCache

    // Council state
    councilOpen: false,
    councilProvider: 'codex',
    councilModel: 'balanced',

    // Static mode (set by config.json)
    staticMode: false,

    // No build data flag (set when manifest.json returns 404)
    noBuildData: false,

    // Build metadata
    buildMeta: null,

    // Watchlist state
    watchlist: [],
    watchlistFilter: false,

    // Pipeline state
    pipeline: {},

    // Annotations state
    annotations: [],
    annotationInput: '',
    annotationsLoading: false,

    // Color palette: single source of truth for tier-based styling
    COLOR_PALETTE: {
      'strong-invest': { cls: 'score-claude-deepgreen score-bg-deepgreen' },
      'invest':        { cls: 'score-claude-green score-bg-green' },
      'neutral':       { cls: 'score-claude-orange score-bg-orange' },
      'pass':          { cls: 'score-claude-red score-bg-red' },
      'strong-pass':   { cls: 'score-claude-deepred score-bg-deepred' },
    },

    // Disagreement lookup
    disagreementSet: new Set(),

    mobileLayout: false,
    expandedCompanySlug: null,

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
      // Sticky offsets must follow the rendered chrome, including font scaling,
      // wrapped footer text, orientation changes and phone safe areas.
      this.$nextTick(() => {
        const root = document.documentElement;
        const chrome = [
          [document.querySelector('nav[aria-label="Main navigation"]'), '--nav-h'],
          [document.querySelector('.sticky-search'), '--search-h'],
          [document.querySelector('.status-footer'), '--footer-h'],
        ];
        const measure = () => {
          for (const [element, property] of chrome) {
            const height = element?.getBoundingClientRect().height;
            if (height > 0) root.style.setProperty(property, `${Math.ceil(height)}px`);
          }
        };
        measure();
        const observer = new ResizeObserver(measure);
        for (const [element] of chrome) if (element) observer.observe(element);
      });
      const mobileViewport = window.matchMedia('(max-width: 639px)');
      this.mobileLayout = mobileViewport.matches;
      mobileViewport.addEventListener('change', event => { this.mobileLayout = event.matches; });

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

      if (!this.staticMode) {
        try {
          const llmResp = await fetch('/api/llm/config');
          if (llmResp.ok) {
            const llmConfig = await llmResp.json();
            if (llmConfig.provider) this.councilProvider = llmConfig.provider;
            if (llmConfig.model) this.councilModel = llmConfig.model;
            this.councilChatEnabled = llmConfig.councilChat?.available === true;
            this.councilOpen = this.councilChatEnabled;
          }
        } catch (e) { /* keep local defaults */ }
      }

      // Auth gate in static mode
      if (this.staticMode && !localStorage.getItem('ycrank_auth')) {
        window.location.href = 'login.html' + window.location.hash;
        return;
      }

      try {
        // Load batches
        const batchesResp = await fetch('data/batches.json');
        if (!batchesResp.ok) {
          this.noBuildData = true;
          return;
        }
        this.batches = await batchesResp.json();

        // Load default batch
        if (this.batches.length > 0) {
          const { batch } = this.readRoute();
          this.currentBatch = this.batches.includes(batch) ? batch : this.batches[0];
          await this.loadBatch(this.currentBatch);
        } else {
          this.noBuildData = true;
        }

        // Load user state (watchlist, etc.)
        await this.loadUserState();

        this.$watch('search', (val) => {
          this.acIndex = -1;
          this.acOpen = Boolean(val) && document.activeElement === this.$refs.companySearch;
        });

        // Handle initial route
        await this.handleRoute();
      } catch (e) {
        console.error('Init failed:', e);
      } finally {
        this.loading = false;
      }
    },

    async loadUserState() {
      if (this.staticMode) return;
      try {
        const resp = await fetch('/api/user/state');
        if (resp.ok) {
          const state = await resp.json();
          this.watchlist = Array.from(state.watchlist || []);
          this.pipeline = state.pipeline || {};
        }
      } catch (e) { /* ignore - user state is optional */ }
    },

    isWatchlisted(slug) {
      return this.watchlist.includes(slug);
    },

    async toggleWatchlist(slug, event) {
      if (event) event.stopPropagation();
      if (this.staticMode) return;
      const starred = !this.watchlist.includes(slug);
      // Optimistic update
      if (starred) {
        this.watchlist = [...this.watchlist, slug];
      } else {
        this.watchlist = this.watchlist.filter(s => s !== slug);
      }
      try {
        await fetch('/api/user/watchlist', {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ slug, starred })
        });
      } catch (e) {
        // Revert on failure
        if (starred) {
          this.watchlist = this.watchlist.filter(s => s !== slug);
        } else {
          this.watchlist = [...this.watchlist, slug];
        }
      }
    },

    getPipelineStage(slug) {
      return this.pipeline[slug] || '';
    },

    async setPipelineStage(slug, stage) {
      if (this.staticMode) return;
      const prev = this.pipeline[slug] || null;
      // Optimistic update
      if (stage) {
        this.pipeline[slug] = stage;
      } else {
        delete this.pipeline[slug];
      }
      this.pipeline = { ...this.pipeline }; // force reactivity
      try {
        await fetch(`/api/user/pipeline/${slug}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ stage: stage || null })
        });
      } catch (e) {
        // Revert
        if (prev) {
          this.pipeline[slug] = prev;
        } else {
          delete this.pipeline[slug];
        }
        this.pipeline = { ...this.pipeline };
      }
    },

    pipelineColor(stage) {
      const colors = {
        'interested': 'text-claude-blue',
        'researching': 'text-claude-amber',
        'meeting': 'text-claude-purple',
        'committed': 'text-claude-green',
        'passed': 'text-claude-red',
      };
      return colors[stage] || 'text-claude-dim';
    },

    pipelineBadge(stage) {
      if (!stage) return '';
      const labels = {
        'interested': 'INT',
        'researching': 'RES',
        'meeting': 'MTG',
        'committed': 'CMT',
        'passed': 'PAS',
      };
      return labels[stage] || stage.slice(0, 3).toUpperCase();
    },

    get evaluators() {
      return this.manifest?.evaluators ?? [];
    },

    evaluatorName(abbr) {
      return this.evaluators.find(evaluator => evaluator.abbr === abbr)?.fullName || abbr;
    },

    evaluatorScoreLabel(label) {
      if (!label) return '';
      const abbr = label.split(' (', 1)[0];
      return this.evaluatorName(abbr) + label.slice(abbr.length);
    },

    selectBatch(batchName) {
      this._routeLoadId++;
      this.listReturn = null;
      this.currentBatch = batchName;
      if (this.readRoute().view === 'company') this.navigate('dashboard');
      return this.loadBatch(batchName);
    },

    async loadBatch(batchName) {
      const loadId = ++this._batchLoadId;
      const previousEvaluators = this.evaluators;
      this._companyLoadId++;
      this._tabLoadId++;
      this.loading = true;
      this.buildMeta = null;
      this.companyData = null;
      this.activeTab = 'memo';
      this.tabContent = '';
      this.tabLoading = false;
      try {
        const resp = await fetch(`data/${batchName}/manifest.json`);
        if (loadId !== this._batchLoadId) return;
        if (!resp.ok) {
          this.noBuildData = true;
          this.manifest = null;
          this.disagreementSet = new Set();
          return;
        }
        const manifest = await resp.json();
        if (loadId !== this._batchLoadId) return;
        this.noBuildData = false;
        this.manifest = manifest;
        if (previousEvaluators.some(p => p.abbr === this.desktopSort.col) && !this.evaluators.some(p => p.abbr === this.desktopSort.col)) {
          this.desktopSort = { col: 'avg', dir: -1 };
        }
        this.mobileSort = { col: this.hasMobileTraction ? 'tractionRank' : 'name', dir: 1 };

        // Load build metadata
        try {
          const metaResp = await fetch(`data/${batchName}/buildMeta.json`);
          if (metaResp.ok) {
            const buildMeta = await metaResp.json();
            if (loadId !== this._batchLoadId) return;
            this.buildMeta = buildMeta;
          }
        } catch (e) { /* optional */ }
        if (loadId !== this._batchLoadId) return;

        // Build disagreement set
        this.disagreementSet = new Set(this.manifest.disagreements.map(d => d.company));

        // Clear caches
        this.mdCache = {};
        this._mdCacheSize = 0;
        this.expandedCompanySlug = null;
      } catch (e) {
        if (loadId !== this._batchLoadId) return;
        this.manifest = null;
        this.disagreementSet = new Set();
        this.noBuildData = true;
        console.error('Failed to load batch:', e);
      } finally {
        if (loadId === this._batchLoadId) this.loading = false;
      }
    },

    // --- Routing ---

    navigate(route) {
      window.location.hash = '#' + route;
    },

    companyHash(slug, tab = 'memo') {
      return `#company/${this.currentBatch}/${slug}${tab === 'memo' ? '' : '/' + tab}`;
    },

    openCompany(slug) {
      this.rememberCompanyList(slug);
      window.location.hash = this.companyHash(slug);
    },

    followCompanyLink(event, slug) {
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      this.openCompany(slug);
    },

    rememberCompanyList(slug) {
      if (!this.mobileLayout || this.view !== 'dashboard' || this.listReturn) return;
      this.listReturn = {
        batch: this.currentBatch, slug, search: this.search,
        scrollTop: this.$refs.dashboardLayout?.scrollTop || 0,
        slugs: this.filteredTable.map(row => row.slug)
      };
    },

    readRoute() {
      const [view, first, second, third] = window.location.hash.slice(1).split('/');
      if (view === 'company' && first) {
        return second ? { view, batch: first, slug: second, tab: third }
          : { view, slug: first };
      }
      return { view: view === 'analytics' ? 'analytics' : 'dashboard' };
    },

    async handleRoute() {
      const routeId = ++this._routeLoadId;
      const { view, batch, slug, tab = 'memo' } = this.readRoute();
      const scroller = this.$refs.dashboardLayout;
      this.acOpen = false;
      if (view === 'company') {
        if (batch && !this.batches.includes(batch)) {
          this._companyLoadId++;
          this._tabLoadId++;
          this.view = 'company';
          this.companyData = null;
          this.companyError = 'The requested batch is unavailable.';
          return;
        }
        if (routeId > 1 && this.mobileLayout && this.view === 'dashboard' && (!batch || batch === this.currentBatch)) {
          this.rememberCompanyList(slug);
        }
        if (batch && batch !== this.currentBatch) {
          this.listReturn = null;
          this.currentBatch = batch;
          await this.loadBatch(batch);
          if (routeId !== this._routeLoadId) return;
        }
        if (this.view === 'company' && this.companyData?.slug === slug) {
          if (tab !== this.activeTab) await this.loadTabContent(tab);
          return;
        }
        scroller?.scrollTo(0, 0);
        await this.showCompany(slug, tab);
        return;
      }
      this._companyLoadId++;
      this._tabLoadId++;
      this.view = view;
      const saved = this.listReturn;
      this.listReturn = null;
      if (view === 'dashboard' && this.mobileLayout && saved?.batch === this.currentBatch) {
        this.search = saved.search;
        await this.$nextTick();
        await new Promise(resolve => requestAnimationFrame(resolve));
        if (routeId !== this._routeLoadId) return;
        scroller?.scrollTo(0, saved.scrollTop);
        document.getElementById(`mobile-company-${saved.slug}`)?.focus({ preventScroll: true });
      } else {
        scroller?.scrollTo(0, 0);
      }
    },

    // --- Dashboard ---

    get activeSort() {
      return this.mobileLayout ? this.mobileSort : this.desktopSort;
    },

    get sortCol() { return this.activeSort.col; },
    get sortDir() { return this.activeSort.dir; },

    get mobileEvaluators() {
      return this.evaluators.filter(thesis => this.manifest?.table.some(row => row.scores?.[thesis.abbr] != null));
    },

    get hasMobileTraction() {
      return this.manifest?.table.some(row => row.tractionRank != null) ?? false;
    },

    get mobileSortOptions() {
      return [
        ...(this.hasMobileTraction ? [['tractionRank:1', 'Traction · #1 first'], ['tractionRank:-1', 'Traction · #1 last']] : []),
        ['name:1', 'Company · A–Z'], ['name:-1', 'Company · Z–A'],
        ...this.mobileEvaluators.flatMap(({ abbr, fullName }) => [
          [abbr + ':-1', fullName + ' · Highest first'], [abbr + ':1', fullName + ' · Lowest first']
        ])
      ];
    },

    selectMobileSort(value) {
      const [col, dir] = value.split(':');
      this.mobileSort = { col, dir: Number(dir) };
      this.acOpen = false;
      this.$refs.dashboardLayout?.scrollTo(0, 0);
    },

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

      // Watchlist filter
      if (this.watchlistFilter) {
        rows = rows.filter(r => this.watchlist.includes(r.slug));
      }

      // Sort
      const col = this.sortCol;
      const dir = this.sortDir;
      const isEvaluationColumn = this.evaluators.some(evaluator => evaluator.abbr === col);
      rows = [...rows].sort((a, b) => {
        let va, vb;
        if (col === 'name') {
          va = a.name.toLowerCase();
          vb = b.name.toLowerCase();
          return va < vb ? -dir : va > vb ? dir : 0;
        } else if (col === 'avg') {
          va = a.avg;
          vb = b.avg;
          if (va == null || vb == null) return Number(va == null) - Number(vb == null);
        } else if (col === 'revenue') {
          va = a.revenue != null ? a.revenue : -1;
          vb = b.revenue != null ? b.revenue : -1;
        } else if (col === 'teamSize') {
          va = a.teamSize != null ? a.teamSize : -1;
          vb = b.teamSize != null ? b.teamSize : -1;
        } else if (col === 'memoDate') {
          va = a.memoDate || '';
          vb = b.memoDate || '';
          return va < vb ? -dir : va > vb ? dir : 0;
        } else if (col === 'ycPartner') {
          va = (a.ycPartner || '').toLowerCase();
          vb = (b.ycPartner || '').toLowerCase();
          return va < vb ? -dir : va > vb ? dir : 0;
        } else if (col === 'tractionRank') {
          va = a.tractionRank;
          vb = b.tractionRank;
          if (va == null || vb == null) return Number(va == null) - Number(vb == null);
        } else if (isEvaluationColumn) {
          // Evaluation score column
          va = a.scores?.[col];
          vb = b.scores?.[col];
          if (va == null || vb == null) return Number(va == null) - Number(vb == null);
        } else {
          va = a[col] || 0;
          vb = b[col] || 0;
        }
        return (va - vb) * dir;
      });

      return rows;
    },

    get autocompleteResults() {
      if (!this.manifest || !this.search) return [];
      const q = this.search.toLowerCase();
      return this.manifest.table.filter(r =>
        r.name.toLowerCase().includes(q) ||
        (r.oneLiner && r.oneLiner.toLowerCase().includes(q))
      ).slice(0, 8);
    },

    selectAutocomplete(slug) {
      if (!this.mobileLayout || this.view === 'company') this.search = '';
      this.acOpen = false;
      this.acIndex = -1;
      this.openCompany(slug);
    },

    handleSearchKeydown(e) {
      const results = this.autocompleteResults;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (!this.acOpen && this.search) this.acOpen = true;
        this.acIndex = results.length ? (this.acIndex + 1) % results.length : -1;
        this.$nextTick(() => {
          const el = document.querySelector('.ac-item-active');
          if (el) el.scrollIntoView({ block: 'nearest' });
        });
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (!this.acOpen && this.search) this.acOpen = true;
        this.acIndex = results.length ? (this.acIndex - 1 + results.length) % results.length : -1;
        this.$nextTick(() => {
          const el = document.querySelector('.ac-item-active');
          if (el) el.scrollIntoView({ block: 'nearest' });
        });
      } else if (e.key === 'Enter') {
        if (this.acIndex >= 0 && results[this.acIndex]) {
          e.preventDefault();
          this.selectAutocomplete(results[this.acIndex].slug);
        } else if (this.view === 'company' && results.length > 0) {
          e.preventDefault();
          this.selectAutocomplete(results[0].slug);
        }
      } else if (e.key === 'Escape') {
        if (this.acOpen) {
          e.preventDefault();
          e.stopPropagation();
          this.acOpen = false;
          this.acIndex = -1;
        } else {
          e.target.blur();
        }
      }
    },

    toggleCompanyPreview(slug) {
      this.expandedCompanySlug = this.expandedCompanySlug === slug ? null : slug;
    },

    reportedArr(tractionReason) {
      // Keep the qualifiers on explicit ARR figures. General revenue and run rates are separate metrics.
      const match = tractionReason?.match(/^((?:(?:reported|nearly|over|more than|at least|about|approximately|roughly) )*[$€£]\d[\d,.]*[KMB]?\+?(?: (?:enterprise|committed|contracted|realized|reported|founder-reported))*) (?:ARR|annual recurring (?:contract )?revenue)\b/i);
      return match?.[1] || '';
    },

    sortBy(col) {
      const sort = this.activeSort;
      if (sort.col === col) {
        sort.dir *= -1;
      } else {
        sort.col = col;
        // Default ascending for rank/name/tractionRank, descending for scores/avg
        sort.dir = (col === 'rank' || col === 'name' || col === 'ycPartner' || col === 'tractionRank') ? 1 : -1;
      }
    },

    isDisagreement(name) {
      return this.disagreementSet.has(name);
    },

    getKeyTension(name) {
      if (!this.manifest) return '';
      const d = this.manifest.disagreements.find(d => d.company === name);
      return d ? d.keyTension || '' : '';
    },

    getScoreTip(slug, evaluatorAbbr) {
      if (!this.manifest) return '';
      const row = this.manifest.table.find(r => r.slug === slug);
      return row?.scoreTips?.[evaluatorAbbr] || '';
    },

    // --- Company Detail ---

    async showCompany(slug, tab = 'memo') {
      const loadId = ++this._companyLoadId;
      this._tabLoadId++;
      this.view = 'company';
      this.activeTab = 'memo';
      this.tabContent = '';
      this.companyData = null;
      this.companyError = '';

      try {
        if (!this.manifest?.table.some(row => row.slug === slug)) throw new Error('Company not found');
        const resp = await fetch(`data/${this.currentBatch}/companies/${slug}.json`);
        if (!resp.ok) throw new Error('Company not found');
        const company = await resp.json();
        if (loadId !== this._companyLoadId) return;
        this.companyData = company;
        await this.loadTabContent(tab);
        if (loadId !== this._companyLoadId) return;
        // Load annotations
        await this.loadAnnotations(slug);
      } catch (e) {
        console.error('Failed to load company:', e);
        if (loadId === this._companyLoadId) this.companyError = 'This company could not be opened in the selected batch.';
      }
    },

    get councilCompany() {
      return this.view === 'company' ? this.companyData : null;
    },

    get councilChatThread() {
      if (!this.currentBatch || this.loading || (this.view === 'company' && !this.companyData)) return null;
      const key = `${this.currentBatch}/${this.councilCompany?.slug || ''}`;
      if (!this.councilChatThreads[key]) {
        this.councilChatThreads[key] = { messages: [], input: '', asking: false, error: '' };
      }
      return this.councilChatThreads[key];
    },

    async sendCouncilChat() {
      const thread = this.councilChatThread;
      const question = thread?.input.trim();
      if (!question || thread.asking) return;
      const history = thread.messages.slice(-12).map(m => ({ role: m.role, content: m.content }));
      const batch = this.currentBatch;
      const company = this.councilCompany?.slug ?? null;
      thread.messages.push({ role: 'user', content: question });
      thread.input = '';
      thread.asking = true;
      thread.error = '';
      this.scrollCouncilChat();
      try {
        const response = await fetch('/api/council/chat', {
          method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({ batch, company, question, history }),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.error || 'Unable to get an answer.');
        thread.messages.push({ role: 'assistant', content: result.answer });
      } catch (error) {
        thread.messages.pop();
        if (!thread.input) thread.input = question;
        thread.error = error.message;
      } finally {
        thread.asking = false;
        this.scrollCouncilChat();
      }
    },

    scrollCouncilChat() {
      this.$nextTick(() => {
        const pane = this.$refs.councilChatMessages;
        if (pane) pane.scrollTop = pane.scrollHeight;
      });
    },

    clearCouncilChat() {
      const thread = this.councilChatThread;
      if (!thread || thread.asking) return;
      thread.messages = [];
      thread.error = '';
    },

    renderChatAnswer(content) {
      return DOMPurify.sanitize(marked.parse(content));
    },

    renderCompanyDocument(markdown, tab) {
      const html = DOMPurify.sanitize(marked.parse(markdown));
      if (tab !== 'memo') return html;

      const template = document.createElement('template');
      template.innerHTML = html;
      const table = template.content.querySelector('table');
      const headers = table?.querySelectorAll('thead th');
      if (headers?.length !== 2 || headers[0].textContent.trim() !== 'Field' || headers[1].textContent.trim() !== 'Value') return html;

      const facts = document.createElement('details');
      facts.className = 'mobile-memo-facts';
      const summary = document.createElement('summary');
      summary.textContent = 'Company facts';
      facts.append(summary, table.cloneNode(true));
      table.classList.add('desktop-memo-facts');
      table.after(facts);
      return template.innerHTML;
    },

    async loadTabContent(tab) {
      if (!this.companyData) return;
      if (tab !== 'memo' && !Object.hasOwn(this.companyData.paths.evals, tab)) tab = 'memo';
      const loadId = ++this._tabLoadId;
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
        if (loadId !== this._tabLoadId) return;
        // Strip BOM
        md = md.replace(/^\uFEFF/, '');
        const html = this.renderCompanyDocument(md, tab);
        // Cap cache: evict oldest entries if over 5MB or 50 entries
        const htmlLen = html.length;
        this._mdCacheSize += htmlLen;
        const maxCacheBytes = 5 * 1024 * 1024;
        const keys = Object.keys(this.mdCache);
        while ((this._mdCacheSize > maxCacheBytes || keys.length >= 50) && keys.length > 0) {
          const evicted = keys.shift();
          this._mdCacheSize -= this.mdCache[evicted].length;
          delete this.mdCache[evicted];
        }
        this.mdCache[mdPath] = html;
        this.tabContent = html;
      } catch (e) {
        if (loadId !== this._tabLoadId) return;
        this.tabContent = '<p class="text-claude-red">Failed to load content.</p>';
        console.error(e);
      } finally {
        if (loadId === this._tabLoadId) this.tabLoading = false;
      }
    },

    adjacentCompany(offset) {
      if (!this.companyData) return null;
      const saved = this.listReturn;
      const slug = this.companyData.slug;
      const slugs = this.mobileLayout && saved?.batch === this.currentBatch && saved.slugs.includes(slug)
        ? saved.slugs : (this.manifest?.table ?? []).map(row => row.slug);
      const index = slugs.indexOf(slug);
      return index < 0 ? null : slugs[index + offset];
    },

    hasPrevCompany() {
      return Boolean(this.adjacentCompany(-1));
    },

    hasNextCompany() {
      return Boolean(this.adjacentCompany(1));
    },

    prevCompany() {
      const slug = this.adjacentCompany(-1);
      if (slug) this.openCompany(slug);
    },

    nextCompany() {
      const slug = this.adjacentCompany(1);
      if (slug) this.openCompany(slug);
    },

    selectCompanyTab(tab) {
      window.location.hash = this.companyHash(this.companyData.slug, tab);
    },

    handleCompanyTabsKeydown(event) {
      const tabs = [...event.currentTarget.querySelectorAll('[role="tab"]')];
      const index = tabs.indexOf(event.target);
      const offsets = { ArrowLeft: -1, ArrowRight: 1 };
      if (index < 0 || !(event.key in offsets) && event.key !== 'Home' && event.key !== 'End') return;
      event.preventDefault();
      event.stopPropagation();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
        : (index + offsets[event.key] + tabs.length) % tabs.length;
      tabs[next].focus();
      tabs[next].click();
    },

    // --- Council ---

    toggleCouncil() {
      this.councilOpen = !this.councilOpen;
      this.$nextTick(() => {
        const target = this.councilOpen ? this.$refs.councilChatInput : this.$refs.councilDock;
        target?.focus();
      });
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
        batch: this.currentBatch,
        provider: this.councilProvider,
        model: this.councilModel
      });
      window.open(`/api/email/draft?${params}`, '_blank');
    },

    generateMeetingNotes() {
      if (!this.companyData || this.staticMode) return;
      const params = new URLSearchParams({
        companySlug: this.companyData.slug,
        batch: this.currentBatch,
        provider: this.councilProvider,
        model: this.councilModel
      });
      window.open(`/api/meetingnotes/generate?${params}`, '_blank');
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
      if (avg >= 85) return 'strong-invest';
      if (avg >= 65) return 'invest';
      if (avg >= 40) return 'neutral';
      if (avg >= 25) return 'pass';
      return 'strong-pass';
    },

    // --- Helpers ---

    tierColor(tier) {
      if (!tier) return 'text-claude-dim';
      const entry = this.COLOR_PALETTE[this.getTierCategory(tier)];
      return entry ? entry.cls : 'text-claude-dim';
    },

    avgColor(avg) {
      const cat = this.avgTierCategory(avg);
      const entry = cat ? this.COLOR_PALETTE[cat] : null;
      return entry ? entry.cls.split(' ')[0] : 'text-claude-dim';
    },

    // Color the traction stack-rank cell: top ranks green, mid orange, tail dim.
    tractionRankColor(rank) {
      if (rank == null) return 'text-claude-dim';
      if (rank <= 10) return this.COLOR_PALETTE['strong-invest'].cls.split(' ')[0];
      if (rank <= 25) return this.COLOR_PALETTE['invest'].cls.split(' ')[0];
      if (rank <= 60) return this.COLOR_PALETTE['neutral'].cls.split(' ')[0];
      return 'text-claude-dim';
    },

    corrColor(val) {
      if (val == null) return 'text-claude-dim corr-none';
      if (val > 0.80) return 'corr-high';
      if (val > 0.60) return 'corr-medium';
      if (val > 0.40) return 'corr-low';
      return 'text-claude-dim corr-none';
    },

    // --- Annotations ---

    async loadAnnotations(slug) {
      if (this.staticMode) return;
      this.annotationsLoading = true;
      try {
        const resp = await fetch(`/api/annotations/${slug}`);
        if (resp.ok) {
          this.annotations = await resp.json();
        }
      } catch (e) { /* ignore */ }
      finally { this.annotationsLoading = false; }
    },

    async addAnnotation() {
      if (this.staticMode || !this.companyData) return;
      const text = this.annotationInput.trim();
      if (!text) return;
      this.annotationInput = '';
      try {
        await fetch(`/api/annotations/${this.companyData.slug}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text })
        });
        // Reload annotations
        await this.loadAnnotations(this.companyData.slug);
      } catch (e) {
        console.error('Failed to add annotation:', e);
      }
    },

    formatAnnotationTime(ts) {
      if (!ts) return '';
      const d = new Date(ts);
      const now = new Date();
      const diffMs = now - d;
      const diffMins = Math.floor(diffMs / 60000);
      if (diffMins < 1) return 'just now';
      if (diffMins < 60) return diffMins + 'm ago';
      const diffHours = Math.floor(diffMins / 60);
      if (diffHours < 24) return diffHours + 'h ago';
      const diffDays = Math.floor(diffHours / 24);
      if (diffDays < 7) return diffDays + 'd ago';
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    },

    // --- Keyboard shortcuts ---

    handleKeydown(e) {
      if (e.target.matches('input, textarea, select, [contenteditable]')) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        if (this.councilOpen && this.$refs.councilPanel?.getClientRects().length) {
          this.toggleCouncil();
        } else if (this.view !== 'dashboard') {
          this.navigate('dashboard');
        }
      }
      if (this.view === 'company') {
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
