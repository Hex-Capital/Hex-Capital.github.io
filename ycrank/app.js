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
    loading: true,
    view: 'dashboard', // dashboard | company | analytics

    // Dashboard state
    search: '',
    acOpen: false,
    acIndex: -1,
    sortCol: 'avg',
    sortDir: -1,

    // Company detail state
    companyData: null,
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
      'strong-invest': { cls: 'score-claude-deepgreen score-bg-deepgreen', hex: '#2d8a4e', label: 'Strong Invest', suffix: 'deepgreen' },
      'invest':        { cls: 'score-claude-green score-bg-green',         hex: '#4a9e4a', label: 'Invest',        suffix: 'green' },
      'neutral':       { cls: 'score-claude-orange score-bg-orange',       hex: '#d9923a', label: 'Neutral',       suffix: 'orange' },
      'pass':          { cls: 'score-claude-red score-bg-red',             hex: '#cc3838', label: 'Pass',          suffix: 'red' },
      'strong-pass':   { cls: 'score-claude-deepred score-bg-deepred',     hex: '#8b2525', label: 'Strong Pass',   suffix: 'deepred' },
    },

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
        window.location.href = 'login.html';
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
          this.currentBatch = this.batches[0]; // newest (sorted chronologically)
          await this.loadBatch(this.currentBatch);
        } else {
          this.noBuildData = true;
        }

        // Load user state (watchlist, etc.)
        await this.loadUserState();

        // Reset mobile card index on search change
        this.$watch('search', (val) => { this.mobileCardIndex = 0; this.acIndex = -1; this.acOpen = val.length > 0; });

        // Handle initial route
        this.handleRoute();
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
      this.currentBatch = batchName;
      if (this.view === 'company') this.navigate('dashboard');
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
        if (previousEvaluators.some(p => p.abbr === this.sortCol) && !this.evaluators.some(p => p.abbr === this.sortCol)) {
          this.sortCol = 'avg';
          this.sortDir = -1;
        }

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
        this._graphScaleMin = gMin > gMax ? 0 : Math.max(Math.floor(gMin - gPad), 0);
        this._graphScaleMax = gMin > gMax ? 100 : Math.min(Math.ceil(gMax + gPad), 100);

        // Clear caches
        this.mdCache = {};
        this._mdCacheSize = 0;
        this.mobileCardIndex = 0;
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

    handleRoute() {
      const hash = window.location.hash.slice(1) || 'dashboard';
      const parts = hash.split('/');

      if (parts[0] === 'company' && parts[1]) {
        this.showCompany(parts[1]);
      } else if (parts[0] === 'analytics') {
        this.view = 'analytics';
      } else {
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
          // Unranked companies always sort last regardless of direction
          va = a.tractionRank != null ? a.tractionRank : Infinity;
          vb = b.tractionRank != null ? b.tractionRank : Infinity;
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
      // Watchlist filter
      if (this.watchlistFilter) {
        rows = rows.filter(r => this.watchlist.includes(r.slug));
      }
      return [...rows].sort((a, b) => (b.avg ?? -1) - (a.avg ?? -1));
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
      this.search = '';
      this.acOpen = false;
      this.acIndex = -1;
      this.navigate('company/' + slug);
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
      if (!card || !this.evaluators.length) return '';
      // Measure the actual graph container to match the viewBox aspect ratio
      const graphEl = document.querySelector('.mobile-score-graph');
      const cw = graphEl?.offsetWidth || 280;
      const ch = graphEl?.offsetHeight || 140;
      const vbW = 280;
      const vbH = Math.max(Math.round(vbW * ch / cw), 80);

      const count = this.evaluators.length;
      const yTop = 16;                // room for score text above top dot
      const yBottom = vbH - 6;        // dots can go near the bottom (labels are HTML)
      const xStart = 25, xEnd = 255;
      const xStep = count > 1 ? (xEnd - xStart) / (count - 1) : 0;

      // Use global min/max score range for consistent scale across all cards
      const scaleMin = this._graphScaleMin;
      const scaleMax = this._graphScaleMax;
      const scaleRange = scaleMax - scaleMin || 1;

      const pts = this.evaluators.map((p, i) => {
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
      // Evaluation labels positioned at bottom
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
        // Default ascending for rank/name/tractionRank, descending for scores/avg
        this.sortDir = (col === 'rank' || col === 'name' || col === 'ycPartner' || col === 'tractionRank') ? 1 : -1;
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

    async showCompany(slug) {
      const loadId = ++this._companyLoadId;
      this._tabLoadId++;
      this.view = 'company';
      this.activeTab = 'memo';
      this.tabContent = '';
      this.companyData = null;

      try {
        const resp = await fetch(`data/${this.currentBatch}/companies/${slug}.json`);
        if (!resp.ok) throw new Error('Company not found');
        const company = await resp.json();
        if (loadId !== this._companyLoadId) return;
        this.companyData = company;
        // Load memo content
        await this.loadTabContent('memo');
        if (loadId !== this._companyLoadId) return;
        // Load annotations
        await this.loadAnnotations(slug);
      } catch (e) {
        console.error('Failed to load company:', e);
        if (loadId === this._companyLoadId) this.companyData = null;
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

    async loadTabContent(tab) {
      if (!this.companyData) return;
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
        const html = DOMPurify.sanitize(marked.parse(md));
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
      const rows = this.manifest?.table;
      if (!this.companyData || !rows) return null;
      const index = rows.findIndex(row => row.slug === this.companyData.slug);
      return index < 0 ? null : rows[index + offset]?.slug;
    },

    hasPrevCompany() {
      return Boolean(this.adjacentCompany(-1));
    },

    hasNextCompany() {
      return Boolean(this.adjacentCompany(1));
    },

    prevCompany() {
      const slug = this.adjacentCompany(-1);
      if (slug) this.navigate('company/' + slug);
    },

    nextCompany() {
      const slug = this.adjacentCompany(1);
      if (slug) this.navigate('company/' + slug);
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
      const entry = this.COLOR_PALETTE[this.getTierCategory(tier)];
      return entry ? entry.hex : '#d9923a';
    },

    avgTierLabel(avg) {
      const cat = this.avgTierCategory(avg);
      const entry = cat ? this.COLOR_PALETTE[cat] : null;
      return entry ? entry.label : '--';
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

    avgTierClass(avg) {
      const cat = this.avgTierCategory(avg);
      const entry = cat ? this.COLOR_PALETTE[cat] : null;
      return entry ? entry.suffix : 'dim';
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
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'Escape') {
        e.preventDefault();
        if (this.councilOpen && this.$refs.councilPanel?.getClientRects().length) {
          this.toggleCouncil();
        } else if (this.view !== 'dashboard') {
          this.navigate('dashboard');
        }
      }
      if (this.view === 'dashboard') {
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          this.mobileCardNav(-1);
        } else if (e.key === 'ArrowRight') {
          e.preventDefault();
          this.mobileCardNav(1);
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
