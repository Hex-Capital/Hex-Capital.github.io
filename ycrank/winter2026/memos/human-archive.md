# Human Archive

> Multimodal data provider for robotics learning

| Field | Value |
|-------|-------|
| Website | https://www.humanarchive.ai/ |
| YC Page | https://www.ycombinator.com/companies/human-archive |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Robotics, Data Labeling, AI |
| YC Partner | Jared Friedman |
| Emails | team@humanarchive.ai (company website) |

## The Idea

**Problem:** Frontier labs developing robotics foundation models and general-purpose robotics companies need massive volumes of real-world, multimodal training data — egocentric video, force-feedback, and teleoperation data — captured across diverse environments. Current robotics datasets are limited in scale, modality alignment, and environmental diversity. Labs either collect data in-house (expensive, slow, narrow environments) or use simulation (limited fidelity transfer to real-world tasks). The company's YC page states that "to build dexterous and perceptive robots that generalize robustly, we need massive amounts of real-world data across multiple modalities and environments" (YC company page).

**Approach:** Human Archive designs and deploys custom sensor hardware across residential and manufacturing settings, then post-processes the resulting data through internal QA, anonymization, and annotation pipelines. The company captures aligned multimodal data — including egocentric, force-feedback, and teleoperation data — of humans performing everyday tasks in household and industrial environments (YC company page; LinkedIn company page). The team relocated to Asia to execute data collection at scale, with operations in India (Ahmedabad, Goa per LinkedIn). Job postings for videographers and operations managers in India (YC jobs page) confirm active on-the-ground collection operations.

**Differentiation:** Unlike Scale AI, which entered robotics data collection in September 2025 by hiring contractors to record point-of-view demonstrations (TechCrunch via search snippet), Human Archive builds and deploys its own custom hardware for capture. Unlike Generalist AI, which collects data as an input to its own foundation model (GEN-0 blog post, Nov 2025), Human Archive is a pure data provider — selling datasets rather than training proprietary models. Unlike simulation-based approaches, the company focuses on real-world environments with multiple aligned modalities, emphasizing its research into "the fine line between biomimicry and its application to humanoid systems" (YC company page).

**Business Model:** No public pricing page found. [Inferred]: Most likely monetization path is enterprise dataset licensing or per-hour/per-task data contracts with frontier robotics labs, given the company's stated focus on delivering datasets "at scale to frontier labs developing robotics foundation models and general-purpose robotics companies."

**TAM/SAM:** The embodied AI market is projected at $4.44B in 2025, growing to $23.06B by 2030 at 39.0% CAGR (MarketsandMarkets, 2025 via search snippet). The global AI-in-robotics market was estimated at $12.77B in 2023, projected to reach $124.77B by 2030 at 38.5% CAGR (Grand View Research via search snippet). The robot training data market specifically is projected to exceed $30B by 2035 (Quasa.io, Dec 2025 via search snippet). No public SAM estimate specific to third-party multimodal robotics data provision was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to frontier robotics labs and foundation model companies (e.g., Physical Intelligence, Generalist AI, Figure AI), given the company's description of delivering data "to frontier labs developing robotics foundation models." Job postings in India for operations roles suggest the supply side is scaling through a managed workforce in lower-cost geographies.

## Defensibility

**Data asset moat:** The company's core defensibility claim is a proprietary multimodal dataset collected via custom hardware. The YC description states the founders "moved to Asia to collect the world's largest annotated multimodal dataset" (YC company page). If accurate, this represents a data scale advantage that compounds over time — each additional hour of annotated, aligned multimodal data increases the asset's value to customers. The custom hardware design for capture creates a secondary barrier, as competitors would need to replicate both the hardware and the operational infrastructure.

**Market structure:** Scale AI ($2B revenue in 2025 per Getlatka via search snippet) entered robotics data in September 2025 but approaches it as a contractor-based extension of its labeling business, not a custom-hardware-first operation. Large robotics labs (Physical Intelligence, Generalist AI) collect data primarily to train their own models, creating a business model conflict in selling that data to competitors. Tesla's Optimus program leverages its car fleet for passive data but is vertically integrated. These incumbents face structural conflicts in becoming pure-play data providers to rival labs.

**Commoditization risk:** Data collection for robotics is labor-intensive but not technically prohibitive. Any well-funded competitor could deploy cameras and sensors in residential/manufacturing settings. Scale AI's entry into this space in September 2025 with contractor-based collection demonstrates the low technical barrier. Differentiation depends on data quality, modality alignment, annotation depth, and hardware-specific capture capabilities — all of which require sustained execution rather than a single technical breakthrough.

## Market & Traction

**Traction signals:**
- LinkedIn company page: 779 followers (LinkedIn, fetched Feb 2026)
- LinkedIn employee count: 7 (LinkedIn, fetched Feb 2026)
- Active job postings: 2 roles in India — Operations Manager (₹1.5M–₹3M) and Videographer (₹1.25M–₹2.49M) (YC jobs page)
- Samay Maini Twitter/X: @samay_maini15 (GitHub profile link; follower count not retrievable)
- No Product Hunt launch found
- No public revenue figures found
- No app store presence (B2B data product)
- No Discord/Slack community found

**Competitive landscape:**

1. **Scale AI** — $1.6B total funding, $13.8B valuation (TechCrunch, May 2024), $2B revenue in 2025 (Getlatka via search snippet). Expanded into robotics data collection in September 2025 using contractor-based point-of-view demonstrations (search snippet). Key differentiator vs. Human Archive: Scale operates as a general-purpose data labeling platform across many AI verticals; Human Archive is specialized in multimodal robotics data with custom hardware.

2. **Generalist AI** — Seed round from Boldstart Ventures and NVentures (Nvidia), amount undisclosed (Crunchbase via search snippet, Mar 2025). Built a 270,000-hour manipulation dataset growing at 10,000 hours/week (GEN-0 blog, Nov 2025). Key differentiator vs. Human Archive: Generalist AI collects data to train its own foundation model (GEN-0), not as a data-for-sale business.

3. **RLWRLD** — $41M total seed funding ($14.8M Seed 1 per TechCrunch, Apr 2025; $26M Seed 2 per GlobeNewsWire, Feb 2026). Trains foundation models directly in active warehouses and factories via strategic partnerships (CJ Logistics, Lotte). Key differentiator vs. Human Archive: RLWRLD is a model company that collects its own operational data through logistics partners, not a third-party data provider.

4. **Physical Intelligence** — $1.1B total funding, $5.6B valuation (Bloomberg, Nov 2025). Builds general-purpose robot foundation models. Key differentiator vs. Human Archive: Physical Intelligence is a downstream customer archetype — a model developer that needs data, not a data provider.

5. **Qualia Studios** — ~$2.1M raised from Wave Ventures, Florent Venture Partners (Nordic9 via search snippet). Provides a platform for training and deploying VLA models. Key differentiator vs. Human Archive: Qualia focuses on model training infrastructure (compute, APIs), not raw data collection and annotation.

**Why now:** [Inferred]: Several converging catalysts opened this opportunity in 2024–2025. Physical Intelligence raised $1.1B (Bloomberg, Nov 2025), Generalist AI secured Nvidia backing (TechCrunch, Mar 2025), and RLWRLD raised $41M (GlobeNewsWire, Feb 2026) — all signaling massive capital inflows into robotics foundation models that require training data at unprecedented scale. Goldman Sachs projects 50,000–100,000 humanoid robot shipments in 2026 (via search snippet). Scale AI's entry into robotics data in September 2025 validates the demand signal. The gap between available real-world robotics datasets and the data needs of these well-funded model companies creates a supply-demand mismatch that a specialized data provider can address.

## Founders & Team

**Rushil Agarwal** — Co-founder
- UC Berkeley Management, Entrepreneurship & Technology (MET) program — IEOR + Business (YC company page)
- Previously: Product at Coinbase (LinkedIn headline via search snippet)
- Berkeley dropout to found Human Archive
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/rushilagarwal261205/ — "Product at Coinbase | UC Berkeley M.E.T. (Eng + Business)"
- GitHub: No public repos found

**Samay Maini** — Co-founder
- UC Berkeley EECS (LinkedIn via search snippet)
- Machine Learning Engineer at Machine Learning at Berkeley (ML@B) (LinkedIn via search snippet)
- Co-author of "ShabbyPages: A Reproducible Document Denoising and Binarization Dataset" (arXiv:2303.09339)
- Contributor to Augraphy, an open-source document image augmentation library (GitHub, ResearchGate via search snippet)
- Specializations: computer vision, NLP, robotic perception, machine learning (LinkedIn via search snippet)
- Berkeley dropout to found Human Archive
- Twitter/X: @samay_maini15 (GitHub profile link; follower count not retrievable)
- LinkedIn: linkedin.com/in/samaymaini — "Co-Founder @ Human Archive (YC W26)"
- GitHub: github.com/samaymaini — 4 repos, 1 follower; notable fork of Augraphy (star count on personal repos not retrievable)

**Raj Patel** — Co-founder
- UC Berkeley (dropout) (YC company page; LinkedIn via search snippet)
- Background includes farming — "sold mangoes & planted trees" (LinkedIn via search snippet)
- Strategic Operations at Human Archive (LinkedIn post title via search snippet)
- Twitter/X: No confirmed public account found (multiple "Raj Patel" accounts exist on X; none confirmed as this founder)
- LinkedIn: linkedin.com/in/raj-patel2004/
- GitHub: No public repos found

**Shloke Patel** — Co-founder
- Stanford University, School of Engineering, Mechanical Engineering (undergraduate) (Stanford Profiles)
- 2 academic publications, 18 citations (Semantic Scholar via search snippet)
- Publication at CHI '25 (Conference on Human Factors in Computing Systems) (ACM Digital Library via search snippet)
- Stanford dropout to found Human Archive
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/shloke-patel/
- GitHub: No public repos found

**Co-founder relationship:** Rushil Agarwal, Samay Maini, and Raj Patel all attended UC Berkeley, with Rushil in the MET program and Samay in EECS. Shloke Patel attended Stanford. The YC description refers to the team as having "dropped out of Stanford and Berkeley," confirming contemporaneous enrollment. Raj and Shloke share the surname Patel but no public data confirms a familial relationship.

**Founder-market fit:** The team combines UC Berkeley ML/robotics expertise (Samay's ML@B work in computer vision and robotic perception, Rushil's IEOR background) with Stanford mechanical engineering research (Shloke's CHI '25 publication and engineering background). Rushil's product experience at Coinbase provides operational scaling perspective. The team's willingness to relocate to Asia for data collection operations demonstrates execution commitment to the labor-intensive data collection model. No public advisors, board members, or notable angel investors beyond YC have been identified.

## Key Risks

**Scale AI competitive entry:** Scale AI entered robotics data collection in September 2025, hiring hundreds of contractors globally for point-of-view demonstrations for startups training AI-powered robots (search snippet). Scale's $2B revenue base (Getlatka via search snippet, 2025), existing relationships with Physical Intelligence, Generalist AI, and other robotics customers, and massive annotation workforce create direct competitive overlap. Mitigation: Human Archive's custom hardware approach and multimodal alignment may produce qualitatively different data than Scale's contractor-recorded video.

**Customer concentration in a nascent market:** The number of frontier robotics labs with budget for large-scale third-party training data is small — Physical Intelligence, Generalist AI, Figure AI, and a handful of others. Revenue dependency on a few large customers creates concentration risk, and these customers may vertically integrate their own data collection as they scale.

**Data collection operations in India:** Both open job postings are based in India with entry-level compensation (₹1.25M–₹3M, roughly $15K–$36K USD). Operating data collection at scale across residential and manufacturing environments in India introduces execution risks around quality control, data privacy/consent compliance across jurisdictions, and logistical complexity of hardware deployment and maintenance.

**Vertical integration by model companies:** Generalist AI already collects 10,000+ hours of manipulation data per week internally (GEN-0 blog, Nov 2025). If model companies determine that proprietary data collection is core to their competitive advantage, they may not outsource this function, shrinking Human Archive's addressable customer base.

**Brand disambiguation:** "Human Archive" shares naming proximity with "HUMAN Archive" (an Irish literary magazine archive on X) and "humanarchive.us" (an unrelated entity). This creates potential confusion in discovery and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.44B embodied AI market in 2025, projected $23.06B by 2030 at 39% CAGR (MarketsandMarkets via search snippet); robot training data market projected >$30B by 2035 (Quasa.io, Dec 2025 via search snippet) |
| SAM | No public data found |
| Traction | 779 LinkedIn followers (LinkedIn, Feb 2026); 7 employees on LinkedIn (Feb 2026); 2 active job postings in India (YC jobs page) |
| Revenue Signal | No public data found |
| Founders | Rushil Agarwal (Co-founder): UC Berkeley MET, ex-Coinbase Product. Samay Maini (Co-founder): UC Berkeley EECS, ML@B, CV/robotics perception researcher. Raj Patel (Co-founder): UC Berkeley dropout, operations. Shloke Patel (Co-founder): Stanford ME undergrad, CHI '25 publication |
| Competitors | Scale AI ($1.6B raised, $2B revenue 2025, broad data labeling platform entering robotics); Generalist AI (seed from NVentures, revenue unknown, builds own 270K-hr dataset for proprietary model); RLWRLD ($41M raised, revenue unknown, trains models in real factories); Physical Intelligence ($1.1B raised, revenue unknown, downstream model company/potential customer); Qualia Studios (~$2.1M raised, revenue unknown, VLA training platform not data collection) |
| Moat Signals | Custom hardware design for multimodal capture; claim of building "world's largest annotated multimodal dataset" (YC company page); operational infrastructure in Asia for low-cost, high-volume collection |
| Risk Factors | Scale AI competitive entry into robotics data (Sep 2025), customer concentration in nascent market, vertical integration risk from model companies |
| Founder Reach | Samay Maini: Twitter @samay_maini15 (count not retrievable), LinkedIn "Co-Founder @ Human Archive (YC W26)". Rushil Agarwal: Twitter not found, LinkedIn "Product at Coinbase | UC Berkeley M.E.T.". Raj Patel: Twitter not confirmed, LinkedIn linkedin.com/in/raj-patel2004/. Shloke Patel: Twitter not found, LinkedIn linkedin.com/in/shloke-patel/ |
| Distribution Signals | No Product Hunt launch found; no app store presence; no Chrome extension; no Discord/Slack community found |
| Emails | team@humanarchive.ai (company website) |
