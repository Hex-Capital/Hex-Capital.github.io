# Prototyping.io

> Autonomous manufacturing for mechanical parts

| Field | Value |
|-------|-------|
| Website | https://www.prototyping.io |
| YC Page | https://www.ycombinator.com/companies/prototypingio |
| Batch | Spring 2026 (YC company page) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | Sunnyvale, CA, USA |
| Tags | Artificial Intelligence, Hardware, Manufacturing, Automation |
| YC Partner | Nicolas Dessaigne (YC company page) |
| Emails | No public data found |

## The Idea

**Problem:** Mechanical engineers face slow, fragmented workflows moving from CAD design to a usable prototype part (Prerit Oberai, via search snippet of YC profile). Per the YC Spring 2026 RFS framing referenced by Group Partner Nicolas Dessaigne, "the next generation of great hardware companies will be built on much faster iteration loops" and the underlying infrastructure does not yet exist (search snippet from YC RFS coverage). Today, hardware teams source CNC parts via brokers/marketplaces (Xometry, Fictiv, Protolabs Network) or local job shops, with quote and DFM cycles often taking days.

**Approach:** A platform that ingests a CAD upload and runs an AI-driven workflow: design-intent capture, manufacturability review, automated process/machine selection, and automated machine programming with QC (prototyping.io homepage). Stated capabilities: 3/4/5-axis milling, turning, and EDM; 40+ materials including aluminum alloys, stainless, titanium, plastics; tolerances down to ±0.0001"; no minimum order quantity (prototyping.io homepage).

**Differentiation:** Versus marketplace incumbents (Xometry, Fictiv, Hubs) that route jobs to a partner-shop network, Prototyping.io positions itself as an "AI-native manufacturing platform" automating the full design→production pipeline (search snippet, Prerit Oberai bio). Versus vertically integrated AI-factory operators like Hadrian and VulcanForms, the public site does not disclose whether Prototyping.io owns its production floor or operates an asset-light model. [Inferred]: Based on the "no minimums" and software-first language on the homepage, the company likely runs a hybrid model coordinating partner CNC shops with proprietary DFM/CAM software, but this is not confirmed.

**Business Model:** No pricing page is published (prototyping.io homepage; site uses a contact/waitlist form). [Inferred]: Most likely monetization is per-part transactional pricing (quote-to-order) consistent with peers Xometry/Fictiv, with margin captured between customer quote and shop-floor cost.

**TAM/SAM:** Online CNC Machining Service Market estimated at USD 1.77B in 2026, projected USD 3.56B by 2035 at 7.4% CAGR (Business Research Insights / market report, via search snippet). Broader global CNC machine tool market USD 79–108B in 2026 (Mordor Intelligence; Cognitive Market Research, via search snippets). US Machine Shop Services industry covered by IBISWorld 2026 report (no figure retrieved).

**GTM / Distribution:** No public GTM data. [Inferred]: Likely inbound waitlist + founder-led outbound to hardware startups and prototyping engineers, given YC P26 timing, the waitlist-only website, and Nicolas Dessaigne's public RFS targeting hardware-iteration infrastructure (YC RFS, via search snippet).

## Defensibility

No defensibility signals (patents, proprietary data, exclusive supply) found in public sources. [Inferred]: Potential moats could develop via (a) a proprietary DFM/CAM dataset built from accumulated CAD uploads and shop outcomes, (b) lock-in with a managed shop network, or (c) automated machine programming reducing per-part variable cost — none are validated at this stage.

**Market structure:** No structural barrier identified at this stage. Marketplace incumbents (Xometry $686.6M FY2025 revenue, Xometry investor release via search snippet) and vertically-integrated AI-factory operators (Hadrian, $730M raised, $1.6B valuation, The Robot Report / TechCrunch July 2025) operate adjacent models that could expand into the AI-native quoting/automation segment without channel conflict.

**Commoditization risk:** AI-driven DFM and instant-quoting features have been launched by multiple incumbents (e.g., MakerVerse "AI price calculation with manual engineering review," via search snippet). [Inferred]: A two-person team can build a CAD-upload + LLM-DFM frontend in months; durable advantage will depend on shop integration and pricing accuracy, neither of which is publicly demonstrated.

## Market & Traction

**Traction signals:**
- Backed by Y Combinator, Spring 2026 batch (YC company page).
- Mentioned in YC RFS coverage as an example of P26 hardware-manufacturing infrastructure: "Hlabs building actuators, Prototyping.io turning designs into mechanical parts in days" (search snippet, YC RFS coverage).
- Website is in waitlist mode; no customer logos, testimonials, or revenue figures disclosed (prototyping.io homepage).
- No Product Hunt launch found ("Prototyping.io" Product Hunt search returned unrelated results).
- No press coverage found in TechCrunch, The Information, or trade press as of search date.
- Twitter/X follower counts and LinkedIn company-page follower counts: not retrievable via search.
- No active job postings located on YC jobs.
- No Discord/Slack community found.

**Competitive landscape:**
- **Xometry** ($200M raised over 11 rounds, latest $250M Feb 2022, Tracxn via search snippet; FY2025 revenue $686.6M, +25.9% YoY, Xometry investor release via search snippet) — public marketplace routing jobs to partner shops; broadest material/process coverage. Differs from Prototyping.io by relying on shop-side quoting rather than AI-native automation.
- **Hadrian** ($730M total raised across 8 rounds; $260M round July 2025, TechCrunch; $1.6B valuation Jan 2026, The Robot Report; ~$3M revenue 2024, search snippet) — vertically integrated autonomous factories for aerospace/defense parts via "Opus" software stack. Differs by owning physical factories and targeting regulated end-markets.
- **Fictiv** — partner-shop marketplace; "premium pricing model with higher costs but closer support for complex projects" (Unionfab/Haizol comparisons via search snippet). Funding/revenue: no public data found in this search.
- **Protolabs / Protolabs Network (Hubs)** — incumbent rapid-prototyping operator with public-company financials; CNC, injection molding, 3D printing in days (search snippet).
- **VulcanForms** — additive-manufacturing focused; "secured the most recent funding round in February 2026" (search snippet, no figure retrieved).
- **MakerVerse** — "combines AI price calculation with manual engineering review" (search snippet); Europe-centric.

**Why now:** [Inferred]: Specific catalysts cited indirectly via YC's Spring 2026 RFS framing — (1) LLM/multimodal models reaching a threshold where geometric DFM analysis from CAD is tractable without per-part human engineering, (2) renewed US industrial-policy interest in domestic hardware manufacturing reflected in Hadrian's $260M July 2025 round and Mesa expansion (TechCrunch July 2025), (3) Nicolas Dessaigne explicitly soliciting startups that "produce parts dramatically faster" in the YC RFS (search snippet). Not stated as causal by the company itself.

## Founders & Team

**Revanth Bodepudi** — Founder & CEO
- MS Aerospace Engineering, University of Texas at Austin, May 2019, advised by Dr. Kenneth Liechti (UT Austin AE news; UT MRSEC profile via search snippet).
- Graduate research at NSF MRSEC on Germanium Nanowire Membrane/Aerogel mechanical properties; developed bulge-test experiment for porous nanonetwork structures (UT MRSEC profile, via search snippet).
- Originally from India; undergraduate at IIT Bhubaneswar (IITBBS Alumni Network listing, via search snippet).
- Previously at Schlumberger, Houston after UT graduation (search snippet).
- Twitter/X: @revanth279 — follower count not retrievable (YC profile).
- LinkedIn: linkedin.com/in/revanth279 — headline not retrievable (YC profile).
- GitHub: github.com/Revanth listed in search results — notable repo / star count not retrievable.
- Personal blog: revanthp.github.io (search snippet).

**Prerit Oberai** — Cofounder & CTO
- Education: University of Illinois at Urbana-Champaign (search snippet of LinkedIn). One secondary aggregator (getprog.ai via search snippet) lists BS Electrical & Computer Engineering at CU Boulder, MS Electrical Engineering, and PhD work in Computer Engineering at UIUC; cross-source consistency not verified.
- Previously: Software Engineer at Microsoft, including AI systems work; prior roles cited at Arista and University of Colorado (search snippets).
- Self-describes as a mechanical engineer who has "worked across different industries" observing fragmented hardware-build processes (search snippet of YC bio).
- Twitter/X: @ThePreritOberai — follower count not retrievable (YC profile).
- LinkedIn: linkedin.com/in/preritoberai — headline "Prototyping.io" (search snippet).
- GitHub: github.com/PreritO — notable repo / star count not retrievable.
- Personal site: prerit.website (search snippet).

**Co-founder relationship:** No public data on prior shared employer or university overlap from the Phase 3 evidence (Bodepudi: UT Austin / Schlumberger; Oberai: UIUC / Microsoft).

**Founder-market fit:** Bodepudi brings mechanical/aerospace research credentials (UT Austin MS, MRSEC nanomaterials) and oilfield-services hardware experience (Schlumberger), aligned with the CAD-to-CNC problem domain. Oberai contributes software/AI engineering depth from Microsoft alongside a mechanical-engineering background. The pairing maps to the company's "AI-native manufacturing" positioning. No advisors, board members, or named angels disclosed in public sources beyond YC.

## Key Risks

**Incumbent feature replication:** Xometry (FY2025 revenue $686.6M, investor release via search snippet) and MakerVerse (search snippet) already ship AI-driven instant quoting and DFM. Prototyping.io's stated automation surface (DFM + machine programming + QC) overlaps with capabilities incumbents have been building since 2022; no public differentiator (proprietary dataset, exclusive shop network, patents) was identified.

**Capital intensity vs. peers:** If the company chooses vertical integration, Hadrian's $730M raised and $200M Mesa facility (Arizona Commerce, July 2025) sets a steep capital bar. If asset-light, the company competes on margin against Xometry's mature shop network. The chosen model is not disclosed publicly.

**Technical feasibility of full automation:** Public claim is "automated machine programming and quality control" with ±0.0001" tolerance across 3/4/5-axis milling, turning, and EDM (prototyping.io homepage). End-to-end CAM automation across multi-axis processes at production tolerance is unproven publicly by the team; no demos, case studies, or part galleries are shown on the site.

**No public traction signal:** Site is in waitlist state with no customers, revenue, press, or community footprint identified — limits ability to validate demand at the time of research.

**Founder execution scope:** Two founders covering CAD ingestion, CAM/DFM ML, shop-floor integration, sales, and operations. [Inferred]: Likely requires near-term hiring across mechanical and ML engineering; YC profile lists "Hiring: False" at time of capture.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Online CNC Machining Service Market $1.77B in 2026 → $3.56B by 2035 at 7.4% CAGR (Business Research Insights via search snippet); broader CNC machine tool market $79–108B in 2026 (Mordor Intelligence; Cognitive Market Research, via search snippets) |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC company page); referenced in YC RFS coverage as P26 example (search snippet); waitlist-only homepage with no customer logos (prototyping.io); no Product Hunt launch found; social follower counts not retrievable |
| Revenue Signal | No public data found (no pricing page; waitlist signup only — prototyping.io homepage) |
| Founders | Revanth Bodepudi (CEO): MS Aerospace Engineering UT Austin 2019, ex-Schlumberger, IIT Bhubaneswar undergrad. Prerit Oberai (CTO): UIUC (and per aggregator CU Boulder undergrad), ex-Microsoft software/AI engineer. |
| Competitors | Xometry ($200M raised, $686.6M FY2025 revenue — Tracxn / Xometry investor release via search snippets; partner-shop marketplace), Hadrian ($730M raised, $1.6B valuation Jan 2026, ~$3M revenue 2024 — TechCrunch / The Robot Report via search snippets; vertically integrated autonomous factories), Fictiv (funding/revenue: no public data found; partner-shop marketplace with premium positioning per Unionfab via search snippet), Protolabs (public co; rapid prototyping incumbent per search snippet), VulcanForms (Feb 2026 funding round — amount not retrieved per search snippet; additive focus) |
| Moat Signals | No public data found |
| Risk Factors | Feature replication by Xometry/MakerVerse, capital-intensity vs. Hadrian, unproven full multi-axis CAM automation at ±0.0001" |
| Founder Reach | Revanth Bodepudi: Twitter @revanth279 count not retrievable, LinkedIn /in/revanth279 count not retrievable, GitHub github.com/Revanth stars not retrievable. Prerit Oberai: Twitter @ThePreritOberai count not retrievable, LinkedIn /in/preritoberai count not retrievable, GitHub github.com/PreritO stars not retrievable (all per YC profile and search snippets) |
| Distribution Signals | No public data found (no Product Hunt launch, no press coverage, no Discord/Slack community, no active YC job postings located) |
| Emails | No public data found |
