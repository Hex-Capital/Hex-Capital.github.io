# Inviscid AI

> Real-time Building Simulations to Optimize Energy and Operational?

| Field | Value |
|-------|-------|
| Website | https://inviscidai.com/ |
| YC Page | https://www.ycombinator.com/companies/inviscid-ai |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Warehouse Management Tech, IoT, Sustainability, Proptech |
| YC Partner | Ankit Gupta |
| Emails | kabir@inviscidai.com |

Note: The company website also lists Singapore as a secondary location (company website). The Extruct AI profile lists "Singapore" as the primary location (Extruct AI profile). The GitHub organization also lists Singapore (GitHub).

## The Idea

**Problem:** Commercial buildings, data centers, and industrial facilities face persistent challenges in optimizing HVAC, airflow, and energy performance. Traditional computational fluid dynamics (CFD) simulation — the standard tool for modeling how air, heat, and energy move through buildings — takes days to weeks per simulation run, making iterative design and real-time operational optimization impractical. Facilities managers typically rely on rule-based building management systems (BMS) or purely data-driven approaches that optimize against historical patterns rather than physics-based understanding. This results in dead zones in airflow, excessive HVAC power consumption, suboptimal cooling, and reactive rather than predictive maintenance. Data centers are particularly affected as AI workloads drive higher compute density and thermal loads.

**Approach:** Inviscid AI builds physics-informed neural networks that replicate CFD simulations at approximately 1,000x the speed of traditional solvers while maintaining 95%+ accuracy (company website). The platform ingests real-time IoT sensor data, integrates with building management systems, and creates digital twins that simulate building performance in real time. This enables autonomous optimization of airflow patterns, ventilation strategies, HVAC power consumption, and equipment scheduling. The physics-first approach means the neural networks respect fundamental physical laws (conservation of mass, momentum, energy), producing physically plausible predictions rather than purely statistical correlations (company website).

**Differentiation:** Traditional CFD vendors (Cadence, ANSYS, SimScale) provide high-fidelity simulation but at computational costs that preclude real-time use. Purely data-driven building AI platforms (BrainBox AI / Trane Technologies, 75F) optimize against historical patterns without physics-based modeling of airflow dynamics. EkkoSense uses AI for data center cooling optimization but focuses on sensor-driven analytics rather than CFD-grade digital twins. PassiveLogic builds physics-based digital twins for building automation but focuses on autonomous control across all building systems rather than specifically on CFD-accelerated airflow and thermal simulation. Inviscid AI's specific niche — replacing full CFD solvers with physics-informed neural networks for real-time building operations — sits at the intersection of these approaches.

**Business Model:** No pricing page or revenue information is publicly available. The website features a "Schedule Demo" call-to-action and a contact form (company website), suggesting a sales-led enterprise motion. [Inferred]: Most likely monetization path is SaaS licensing per building/facility or consumption-based pricing tied to sensor streams and simulation runs, given the B2B enterprise nature of the product and the demo-first GTM approach.

**TAM/SAM:**
- Building automation systems market: $101.74B (2025) → $191.13B (2030), CAGR 13.4% (MarketsandMarkets, 2025 via search snippet).
- AI in smart buildings and infrastructure market: $52.04B (2025) (Precedence Research via search snippet).
- Data center cooling market: $22.13B (2024) → $56.15B (2030), CAGR 16.4% (Grand View Research via search snippet).
- HVAC optimization segment holds ~32% of the building automation market (MarketsandMarkets via search snippet).

**GTM / Distribution:** The website features case studies across three domains — HVAC vent optimization, coastal infrastructure, and storm surge forecasting (company website) — suggesting an initial multi-vertical approach. The "Schedule Demo" flow and direct contact email indicate a direct sales model. [Inferred]: Most likely distribution path is direct sales to facilities managers, data center operators, and engineering firms, potentially leveraging the YC network for early enterprise introductions. The Singapore presence may provide access to the fast-growing Asia-Pacific smart building market.

## Defensibility

The core technical moat is the physics-informed neural network architecture that encodes domain-specific fluid dynamics knowledge. Building accurate surrogate models for CFD requires deep expertise at the intersection of computational physics, numerical methods, and machine learning — a relatively narrow talent pool. Each deployment generates proprietary sensor data and building-specific simulation models that improve over time, creating a data flywheel per customer.

However, no patents were found in public records, and the physics-informed neural network (PINN) approach is an active area of academic research with publications from multiple groups, meaning the underlying methodology is not proprietary.

**Market structure:** Traditional CFD software vendors (Cadence, ANSYS, Siemens) have physics expertise but their business models are built around high-margin perpetual/subscription licenses for design-time simulation tools sold to engineers. Pivoting to real-time operational optimization sold to facilities managers would require different sales channels, pricing models (per-building SaaS vs. per-seat engineering licenses), and product architecture (continuous IoT integration vs. batch simulation). This sales channel and business model mismatch is the primary structural barrier. Large HVAC OEMs (Trane, Carrier, Johnson Controls) have distribution but lack deep CFD/ML technical capability — Trane's acquisition of BrainBox AI for $103M+ signals they prefer buy-to-build (Crunchbase via search snippet).

**Commoditization risk:** Physics-informed neural networks for CFD acceleration are an active research area with published methodologies. Well-funded competitors like PassiveLogic ($125M+ raised) are building physics-based digital twins (PR Newswire, Sep 2025 via search snippet). Cadence's Reality Digital Twin Platform already combines CFD with AI for data center digital twins (Cadence website). Cloud compute providers (NVIDIA, with its Omniverse/Modulus platforms) could commoditize the inference layer. The risk is mitigated by the integration complexity of connecting real-time IoT data with physics models for specific building types.

## Market & Traction

**Traction signals:**
- Case studies on company website showing technical benchmarks: 240x faster HVAC vent optimization with 40% better airflow; 150+ design iterations for coastal infrastructure with 13% less stress; 600x faster storm surge forecasting with 3x accuracy improvement (company website). No named customers are disclosed.
- Company LinkedIn page: https://www.linkedin.com/company/inviscid-ai — follower count not retrievable.
- Company GitHub: https://github.com/InviscidAI — 1 follower, 1 public repository (PyMesh fork, 0 stars) (GitHub).
- Kabir Jain Twitter/X: @kabirj_ — follower count not retrievable due to JavaScript rendering.
- No Product Hunt listing found.
- No press coverage in named publications found.
- No Discord or Slack community found.
- No app store listings or Chrome extensions (not applicable to this product type).
- No job postings found (consistent with team size of 2 and is_hiring: false).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Inviscid AI |
|-----------|---------|-------------|-----------------------------------|
| **PassiveLogic** | $125M+ total ($74M Series C, Sep 2025) (PR Newswire via search snippet) | Revenue unknown | Full autonomous building platform across all systems (HVAC, lighting, fire, security), not CFD-specific; hardware+software play with proprietary sensors |
| **BrainBox AI** (acquired by Trane Technologies, Jan 2025) | $103M total (Crunchbase via search snippet) | Revenue unknown | Autonomous HVAC control via edge AI; data-driven (not physics-based); now backed by Trane's global distribution and installed base |
| **EkkoSense** | $50.9M total (Crunchbase via search snippet) | $6.1M (2025) (GetLatka via search snippet) | Data center cooling-specific; sensor-driven analytics without CFD; deployed at 300+ datacenter sites (company website via search snippet) |
| **75F** | $45M Series B (Feb 2025) (GlobeNewsWire via search snippet) | Revenue unknown | IoT-first HVAC automation with cloud-based controls; focuses on commercial buildings; investors include Carrier and Breakthrough Energy Ventures |
| **Cadence Reality Digital Twin** | N/A (public company, market cap ~$80B+) | N/A | Full physics-based digital twin for data centers using proprietary CFD solvers; incumbent with deep engineering customer relationships |

**Why now:**
- [Inferred]: The explosion in AI/ML workloads has driven rapid growth in data center power density, creating acute thermal management challenges that legacy cooling approaches cannot address. Data center cooling spend is projected to grow at 16.4% CAGR through 2030 (Grand View Research via search snippet).
- [Inferred]: Advances in physics-informed neural networks (PINNs) over the past 2-3 years — including NVIDIA's Modulus framework for physics-ML — have reached a performance threshold where real-time CFD surrogate models are technically feasible at production scale. This enables a new category of real-time digital twins that was computationally impractical before.
- Trane Technologies' acquisition of BrainBox AI (Jan 2025) and PassiveLogic's $74M Series C (Sep 2025) signal growing enterprise demand and M&A interest in AI-driven building optimization, validating the category.

## Founders & Team

**Kabir Jain** — Co-founder
- Self-described as someone who "like[s] physics and AI" (YC page).
- Contact: kabir@inviscidai.com, +1 408 303 9627 (company website).
- Education: No public data found. A ZoomInfo result links to a "Kabir Jain" as Research Assistant at University of Illinois Chicago (ZoomInfo via search snippet), but this has not been confirmed as the same individual.
- Prior companies/exits: No public data found.
- Twitter/X: @kabirj_ — follower count not retrievable.
- LinkedIn: https://sg.linkedin.com/in/kabir-jain-inviscid-ai-yc — headline not retrievable (LinkedIn returned 999 error).
- GitHub: No personal public repos found.

**Ziming Qiu (Qiu Ziming)** — Co-founder
- Self-described as "I make simulations :)." (YC page).
- Education: Listed as a student at NYU Tandon School of Engineering (NYU Tandon website via search snippet). Personal academic website describes a "5th-year Ph.D. student in the ECE department at NYU" with research interests in computer vision, machine learning, and image analysis (ziming-qiu.github.io). Earlier search results also mention study at the National University of Singapore (search snippet), possibly for undergraduate education.
- Publications: Listed on Google Scholar (scholar.google.com/citations?user=qaCIB_QAAAAJ) and DBLP (dblp.org/pid/190/7442.html); specific publications include work on camera pose estimation (arXiv:2111.14741) and medical image analysis (IEEE) (personal website).
- Prior companies/exits: No public data found.
- Twitter/X: No public account found.
- LinkedIn: https://www.linkedin.com/in/qiu-ziming/ — headline not retrievable.
- GitHub: Personal account at github.com/ziming-qiu (personal website); no star counts retrievable. Company org at github.com/InviscidAI has 1 forked repo (PyMesh, 0 stars).

**Co-founder relationship:** Both founders are linked to Singapore — the company GitHub organization lists Singapore as its location, Kabir Jain's LinkedIn is on the sg.linkedin.com domain, and Ziming Qiu's LinkedIn lists a Singapore URL. [Inferred]: The co-founders likely share a Singapore connection, possibly through university or professional networks there.

**Founder-market fit:** Ziming Qiu brings academic research credentials in machine learning and computational methods through a PhD at NYU, with published work in IEEE and arXiv. The company's core technology — physics-informed neural networks for CFD acceleration — directly aligns with ML research applied to physics simulation. Kabir Jain's specific domain background is not publicly documented beyond a self-described interest in physics and AI. No advisors, board members, or notable investors (beyond YC) were found in public sources.

## Key Risks

**Technical performance at production scale:** The company claims 1,000x speedup with 95%+ accuracy on its website, but the case studies (HVAC vents, coastal infrastructure, storm surge) appear to be proof-of-concept demonstrations rather than deployed production systems. No named customers or production deployments are disclosed. Bridging the gap from benchmark demonstrations to reliable 24/7 autonomous building control in diverse real-world environments is a distinct engineering challenge.

**Multi-vertical focus diffusion:** The three case studies span building HVAC, coastal infrastructure engineering, and storm surge forecasting — three different verticals requiring different sales channels, domain expertise, and customer relationships. For a 2-person team, this breadth risks spreading resources too thin and delaying product-market fit in any single vertical.

**Well-funded competitive field:** PassiveLogic has raised $125M+ for physics-based building digital twins with backing from NVIDIA Ventures, Prologis Ventures, and Johnson Controls (PR Newswire, Sep 2025 via search snippet). Trane Technologies acquired BrainBox AI and has global HVAC distribution. EkkoSense is deployed at 300+ data center sites. Cadence offers production-grade CFD digital twins for data centers. Inviscid AI enters this market as a 2-person pre-seed startup competing against well-capitalized incumbents and scale-ups.

**Geographic complexity:** The company lists both San Francisco and Singapore as locations (company website, GitHub), with founder LinkedIn profiles on the Singapore domain. Managing operations across two geographies with a 2-person team adds coordination overhead and may create ambiguity about primary market focus.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Building automation: $191.13B by 2030, CAGR 13.4% (MarketsandMarkets, 2025 via search snippet); Data center cooling: $56.15B by 2030, CAGR 16.4% (Grand View Research via search snippet) |
| SAM | AI in smart buildings: $52.04B (2025) (Precedence Research via search snippet); HVAC optimization ~32% of building automation market (MarketsandMarkets via search snippet) |
| Traction | Three case study benchmarks on website (240x faster HVAC, 150+ iterations coastal, 600x faster storm surge); no named customers or production deployments disclosed |
| Revenue Signal | No public data found |
| Founders | Kabir Jain (Co-founder): physics + AI background, details not publicly documented. Ziming Qiu (Co-founder): PhD student NYU Tandon ECE, published ML researcher (IEEE, arXiv) |
| Competitors | PassiveLogic ($125M+ raised, revenue unknown, full autonomous building platform); BrainBox AI ($103M raised, acquired by Trane Jan 2025, data-driven HVAC AI); EkkoSense ($50.9M raised, $6.1M revenue 2025, data center cooling analytics); 75F ($45M Series B, revenue unknown, IoT HVAC automation); Cadence (public co., CFD digital twins for data centers) |
| Moat Signals | Physics-informed neural network expertise; integration of real-time IoT with CFD-grade simulation; per-deployment data flywheel. No patents found. |
| Risk Factors | Technical proof-of-concept to production gap, multi-vertical focus diffusion, well-funded competitive field |
| Founder Reach | Kabir Jain: Twitter @kabirj_ (count not retrievable), LinkedIn (sg.linkedin.com/in/kabir-jain-inviscid-ai-yc). Ziming Qiu: Twitter not found, LinkedIn (linkedin.com/in/qiu-ziming/), GitHub (github.com/ziming-qiu) |
| Distribution Signals | No public data found (no Product Hunt, no press coverage, no app store listings) |
| Emails | kabir@inviscidai.com |
