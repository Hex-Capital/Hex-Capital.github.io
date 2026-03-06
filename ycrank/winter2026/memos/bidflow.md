# Bidflow

> AI Copilot for Electrical Estimating

| Field | Value |
|-------|-------|
| Website | https://usebidflow.com |
| YC Page | https://www.ycombinator.com/companies/bidflow |
| Batch | Winter 2026 |
| Industry | Real Estate and Construction / Real Estate and Construction -> Construction |
| Team Size | 2 |
| Location | New York, NY, USA |
| Tags | SaaS, Construction, Infrastructure, AI Assistant |
| YC Partner | Ankit Gupta |
| Emails | founders@tryghostship.dev (YC page) |

## The Idea

**Problem:** Electrical contractors must submit RFPs (requests for proposals) to win contracts for projects such as data center electrical infrastructure. The estimating process — the core of each RFP — involves reading through PDFs that can exceed 500 pages, manually counting hundreds of small electrical symbols per page across 50+ pages of circuit diagrams, and entering thousands of data points into legacy software. This process can take hours to months per project, and estimators frequently lose bids by narrow margins despite estimation consuming a majority of their working time (YC launch post, ~Jan 2026). The incumbent workflow requires switching between multiple legacy software tools.

**Approach:** Bidflow is an AI copilot that automates the repetitive document review and takeoff counting in electrical estimation. The platform uses a custom-trained AI model achieving 83.5% accuracy on electrical takeoff counting (company website). It processes project drawings and specifications, generates estimate tables, and provides "proof of work" so estimators review and correct the AI's output rather than blindly trusting it. Features include: AI-powered takeoffs, estimate generation with NECA labor unit citations, live material pricing from suppliers, bill of materials export (Excel/PDF), drawing markup and annotation, specification analysis, and automated RFI generation (company website). The company positions Bidflow as "an assistant not a replacement," designed with context to think like an electrician (YC launch post).

**Differentiation:** Bidflow's direct competitor Drawer AI (Austin, $5M seed) focuses specifically on electrical takeoff and estimating but is built by founders with 25 years of construction industry experience; Drawer AI analyzes PDFs to detect and quantify electrical devices, route circuits, and generate material lists (Commercial Observer, Oct 2024 via search snippet). Togal.AI (Miami, ~$17–22M total funding) offers broader construction takeoff with 97% accuracy claims but is not electrical-specific (Togal.AI website via search snippet). Beam AI / Attentive.ai ($48M total) serves 1,200+ contractors with automated takeoffs but targets general construction, not electrical specifically (BusinessWire, Nov 2025 via search snippet). Bidflow differentiates by combining electrical-specific AI estimation with an all-in-one platform that consolidates features from multiple legacy tools, and by positioning as an estimator copilot with explicit proof-of-work transparency.

**Business Model:** No public pricing page was found on the Bidflow website. Xkey AiEstimation, a competitor in the electrical estimating space, prices its product at $1,499/year (Xkey website via search snippet). [Inferred]: Most likely monetization path is a SaaS subscription model, potentially per-seat or tiered by project volume, given the vertical SaaS positioning and industry norms.

**TAM/SAM:** The global construction estimating software market was valued at approximately $1.5 billion in 2024, projected to reach $2.62 billion by 2030 at a CAGR of 10.2% (Grand View Research via search snippet). Mordor Intelligence estimates $2.73 billion in 2025 growing to $5.01 billion by 2030 at 12.89% CAGR (Mordor Intelligence via search snippet). [Inferred]: The electrical-specific SAM would be a subset of these figures; with electrical representing roughly 15–20% of commercial construction activity, the SAM for AI-powered electrical estimating tools could be in the range of $200–500M, but no public source provides an electrical-specific estimate.

**GTM / Distribution:** The company website lists geographic focus areas: Tri-State Area, Mid-Atlantic, New England, and Great Lakes (company website). Named customers include Bass Electric, Infinity Electric, and Checkmate Electric (company website). The YC launch post cites data center construction demand as a market driver. [Inferred]: Most likely distribution path is direct sales to electrical contractors, leveraging in-person demonstrations and word-of-mouth within regional contractor networks, starting with the U.S. Northeast corridor.

## Defensibility

Bidflow's current defensibility signals are limited at this stage. The company reports a custom-trained AI model with 83.5% accuracy on electrical takeoff counting (company website), which represents domain-specific training data that would require time and industry relationships to replicate. The company has named electrical contractor customers (Bass Electric, Infinity Electric, Checkmate Electric) whose usage could generate proprietary data on electrical estimation patterns and pricing. Over time, accumulated estimation data across projects could create a data advantage for model accuracy improvements.

**Market structure:** The electrical estimating workflow is deeply fragmented across multiple legacy software tools, and incumbents (e.g., Accubid, ConEst) are built on older architectures. [Inferred]: Legacy incumbents may face difficulty adopting AI-native approaches due to technical debt in their existing platforms and business model risk from potentially cannibalizing their per-seat licensing revenue with efficiency-improving AI that reduces the number of seats needed. However, no structural barrier is clearly identified from public evidence at this stage.

**Commoditization risk:** Drawer AI ($5M seed, founded 2021) is directly building AI-powered electrical estimating with founders who have 25 years of construction experience (CRETI, Oct 2024 via search snippet). Togal.AI and Beam AI could extend their general construction AI takeoff tools into electrical-specific verticals. Large construction software incumbents (Trimble, Autodesk) could develop or acquire AI electrical estimating capabilities. The core approach — applying vision AI to construction drawings — is a technique accessible to well-resourced teams with domain data.

## Market & Traction

**Traction signals:**
- Named customers: Bass Electric, Infinity Electric, Checkmate Electric (company website)
- Customer testimonial: Bass Electric (owner Jeff Yee Jr.) reports 5x reduction in average estimate time and elimination of hours of document searching (company website)
- YC Launch post (Bidflow): 14 upvotes (YC Launch, ~Jan 2026)
- LinkedIn company page (@bidflowai): 86 followers (LinkedIn, Mar 2026)
- Twitter/X: Company account not found; CEO Jesse Choe personal account @jesse_choe10 exists (count not retrievable)
- GitHub: Jesse Choe (jessechoe10), 51 followers (GitHub via search snippet)
- Product Hunt: No listing found
- App store / Chrome Web Store: No listings found
- Press coverage: No coverage found for Bidflow specifically
- Job postings: Company is not currently hiring (YC page)

*Prior product context:* The same team previously built Ghostship (QA agents for bug testing) under YC S25. Ghostship's YC Launch post received 131 upvotes (~Aug 2025), and its Hacker News "Launch HN" post received 53 points (HN, ~Aug 2025). The Ghostship product charged $5 per test run (HN comments). The pivot from Ghostship to Bidflow occurred between approximately mid-2025 and late 2025. The legal entity remains Ghostship AI Inc. (company website footer).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Bidflow |
|-----------|---------|-------------|-------------------------------|
| Drawer AI | $5M seed (Brick & Mortar Ventures, Oct 2024) | Revenue unknown | Electrical-specific like Bidflow but with founders who have 25 years of construction experience; analyzes PDFs for automated circuit routing and material lists |
| Togal.AI | ~$17–22M total (most recent: $10.4M convertible note, Aug 2025) | $2.2M (Dec 2023, GetLatka) | Broader construction takeoff, not electrical-specific; claims 97% accuracy; Miami-based |
| Beam AI (Attentive.ai) | $48M total ($30.5M Series B, Nov 2025, Insight Partners) | Revenue unknown; 1,200+ contractors | General construction takeoff/estimating with full-cycle bid management; significantly larger and better funded |
| Xkey AiEstimation | No public data found | Revenue unknown; priced at $1,499/yr | Electrical-specific; Edmonton, Canada; entry-level tool for small contractors |
| Articulate (YC F25) | YC standard deal (~$500K) | Revenue unknown | Adjacent: construction drawing clash detection and RFI generation, not estimation |

**Why now:** [Inferred]: Several converging factors open this opportunity. First, the data center construction boom has created surging demand for electrical infrastructure work, increasing the volume of RFPs electrical contractors must process (cited by founders in YC launch post). Second, advances in AI vision models (particularly post-2023 multimodal LLMs) have made it technically feasible to extract structured data from complex engineering drawings with useful accuracy — a capability that was not reliable at production quality in prior years. Third, a widely reported skilled labor shortage in the construction trades means fewer experienced estimators are available, increasing pressure to augment their productivity with software.

## Founders & Team

**Jesse Choe** — Co-founder & CEO
- Education: Attended Thomas Jefferson High School for Science and Technology (TJHSST); enrolled at University of Maryland, dropped out (search results via LinkedIn, TJ Today)
- Competitive programming: USACO Platinum competitor, described as "top 1% competitive coder in the US," first high schooler to write competitive coding questions (YC page, Devpost via search snippet)
- Prior experience: Jane Street extern at age 18 (YC page); founded CerealCodes, a nonprofit competitive coding competition platform (search results via Fondo, HN)
- Prior startup: Co-founded Ghostship (YC S25), AI QA agents for bug detection
- Twitter/X: @jesse_choe10 (count not retrievable)
- LinkedIn: linkedin.com/in/jc10/ — "Bidflow (YC S25)" (LinkedIn)
- GitHub: github.com/jessechoe10 — 51 followers, profile bio references "building ghostship" (GitHub via search snippet)

**Gautham Ramachandran** — Co-founder & CTO
- Education: High school graduate (search results via Fondo, YC launch)
- Research: 3 preprints related to reinforcement learning at ICML conference; developed RLEEGNet algorithm for classifying brain signals using reinforcement learning with DQN and 1D-CNN-LSTM architecture, featured on local news (search results via GoatStack.ai, Fondo)
- Prior entrepreneurship: "Bootstrapped to $120K at 16" (YC page); described as "top 5% competitive coder in the US" (YC launch post)
- Prior startup: Co-founded Ghostship (YC S25)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/gautham-ramachandran-74b5712a4/ — "CTO @ bidflow (YC S25)" (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Jesse and Gautham met in an introductory coding class in middle school (YC Ghostship launch post via Fondo). They collaborated on CerealCodes, where Gautham once pulled an all-nighter to fix bugs during a mid-competition crisis (YC Ghostship launch post). They co-founded Ghostship together before pivoting to Bidflow.

**Founder-market fit:** Both founders have strong competitive programming and AI/ML backgrounds but no documented prior experience in the electrical contracting or construction industries. Their technical capabilities — particularly in AI model training, computer vision (Gautham's research), and rapid product iteration — are relevant to building the AI-powered document analysis core of Bidflow. No advisors, board members, or notable investors beyond the YC standard deal and YC Group Partner Ankit Gupta were found in public sources.

## Key Risks

**Recent pivot with no domain background:** The team pivoted from Ghostship (QA testing agents, YC S25) to Bidflow (electrical estimating) within approximately 6 months. Neither founder has documented experience in electrical contracting or construction. Drawer AI, their closest direct competitor, was founded by a former construction estimator with 25 years of industry experience (CRETI, Oct 2024 via search snippet). The speed of pivot and lack of domain background creates risk around product-market understanding and customer trust in a relationship-driven industry.

**Well-funded direct competitor in same niche:** Drawer AI raised a $5M seed round in October 2024 specifically for AI-powered electrical estimating — the identical use case (Commercial Observer, Oct 2024 via search snippet). Drawer AI has a multi-year head start (founded 2021) and domain-experienced founders. Adjacent competitors Togal.AI ($17–22M) and Beam AI ($48M) could enter the electrical-specific segment.

**Brand confusion and entity mismatch:** Multiple unrelated businesses use the "Bidflow" name: an auction platform (bidflow.com), a government contracting tool (bidflow.pro), an estimating services company (bidflowestimation.com), and a cryptocurrency scam (bidflow.one, flagged by MalwareTips). The company's legal entity is Ghostship AI Inc. with the email domain tryghostship.dev, creating potential confusion between current and prior product identity.

**AI accuracy at current level:** The company reports 83.5% accuracy on electrical takeoff counting (company website). In construction estimation, errors can translate directly into financial losses on bids. Competitor Togal.AI claims 97% accuracy on its general construction takeoff (Togal.AI website via search snippet). Improving from 83.5% to production-grade accuracy (95%+) may require significant domain-specific training data that is difficult to obtain at scale.

**Customer concentration and early traction uncertainty:** Three named customers are listed (Bass Electric, Infinity Electric, Checkmate Electric) with no revenue figures, contract values, or user counts disclosed. No public information on whether these are paid customers, pilot users, or beta testers. Geographic focus is limited to U.S. Northeast regions.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Construction estimating software: $1.5B in 2024, projected $2.62B by 2030 at 10.2% CAGR (Grand View Research via search snippet); alternate estimate $2.73B in 2025 growing to $5.01B by 2030 at 12.89% CAGR (Mordor Intelligence via search snippet) |
| SAM | No public data found for electrical-specific estimating software segment |
| Traction | 3 named customers: Bass Electric, Infinity Electric, Checkmate Electric (company website); 14 upvotes on YC Launch post (~Jan 2026); 86 LinkedIn followers (Mar 2026) |
| Revenue Signal | No public data found |
| Founders | Jesse Choe (CEO): USACO Platinum, Jane Street extern, UMD dropout, CerealCodes founder. Gautham Ramachandran (CTO): 3 RL preprints (ICML), bootstrapped $120K at 16, RLEEGNet brain signal research |
| Competitors | Drawer AI ($5M seed, revenue unknown, electrical-specific with 25yr domain-expert founders); Togal.AI ($17–22M raised, $2.2M revenue Dec 2023, broader construction takeoff 97% accuracy); Beam AI/Attentive.ai ($48M raised, revenue unknown, 1,200+ contractors, full-cycle estimating); Xkey AiEstimation (funding unknown, $1,499/yr pricing, electrical-specific entry-level) |
| Moat Signals | Custom-trained electrical takeoff AI model (83.5% accuracy); domain-specific training data accumulation potential |
| Risk Factors | Recent pivot from unrelated product with no construction domain experience; well-funded direct competitor (Drawer AI, $5M); brand name confusion with multiple unrelated entities |
| Founder Reach | Jesse Choe: Twitter @jesse_choe10 (count not retrievable), LinkedIn linkedin.com/in/jc10/, GitHub jessechoe10 51 followers. Gautham Ramachandran: Twitter not found, LinkedIn linkedin.com/in/gautham-ramachandran-74b5712a4/, GitHub not found |
| Distribution Signals | No Product Hunt launch found; no app store listings; no press coverage; YC Launch post 14 upvotes (~Jan 2026) |
| Emails | founders@tryghostship.dev (YC page) |
