# AutoSitu

> Regulatory infrastructure for the built world

| Field | Value |
|-------|-------|
| Website | https://autositu.com/ |
| YC Page | https://www.ycombinator.com/companies/autositu |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Legal |
| Team Size | 2 |
| Location | United States |
| Tags | Generative AI, GovTech, Real Estate, LegalTech |
| YC Partner | Gustaf Alstromer |
| Emails | founders@autositu.com |

## The Idea

**Problem:** Municipal development review — encompassing site plan analysis, zoning compliance verification, building code checking, and permit application review — is slow, fragmented across city departments, and heavily manual. Cities process plans through multiple departments with different code requirements, and reviews that could take minutes currently take weeks. Design firms and developers face 2–3 resubmittal cycles on average due to issues caught late in the process (YC company page). The regulatory environment is increasingly complex, with every municipality structuring its code differently (AutoSitu website).

**Approach:** AutoSitu deploys coordinated AI agents that sit inside cities' cross-department development review workflows. The agents analyze uploaded plan sets (currently PDF; CAD and BIM support rolling out) against local zoning codes and building ordinances in parallel, identifying compliance issues in minutes. The system operates as a "copilot" — final discretionary decisions and subjective design reviews remain with qualified human professionals (AutoSitu website). The company claims to reduce city comments by 50–70% and cut resubmittal cycles from 2–3 down to 0–1 (YC company page).

**Differentiation:** Unlike PermitFlow, which focuses on the developer/contractor side of permit applications and logistics, AutoSitu targets the municipal reviewer workflow directly — embedding AI agents within the city's internal cross-department review process. Unlike CivCheck (now acquired by Clariti), which provides guided plan review for individual code checks, AutoSitu emphasizes multi-department coordination with escalation of judgment calls to staff. Unlike Archistar, which focuses on pre-application feasibility and design compliance primarily in Australia, AutoSitu targets the U.S. municipal plan review process with agentic workflows.

**Business Model:** No public pricing page found on the AutoSitu website. [Inferred]: Most likely monetization path is SaaS subscriptions to municipal agencies and/or per-plan-set fees, based on comparable competitors (e.g., CodeComply.Ai charges $3,000/seat/year per Refresh Miami).

**TAM/SAM:** The global GovTech market was valued at approximately $746 billion in 2025 with a CAGR of 14.91% (IndustryResearch.biz via search snippet). No public TAM/SAM data found for the specific municipal plan review automation segment. [Inferred]: The serviceable market is a subset of GovTech spending on permitting and development services across ~19,000 U.S. municipalities and ~39,000 general-purpose local governments.

**GTM / Distribution:** AutoSitu's website lists partnerships or engagements with Sterling Heights, SWA (Sasaki), Bonner Advisory Group, and NVIDIA (AutoSitu website). City customers mentioned on the website include San José, Seattle, Long Beach, Boston, Coral Gables, Los Angeles, Dallas, San Mateo, Clark County, Honolulu, and San Francisco (AutoSitu website). The company describes itself as "a strategic partner to forward-thinking public agencies and design teams across the country" (YC company page). [Inferred]: GTM appears to be direct sales to municipalities and design firms, leveraging pilot deployments with high-profile cities.

## Defensibility

AutoSitu's primary defensibility signal is its accumulation of jurisdiction-specific regulatory knowledge. The company has checked 1,500+ plans/drawing sets (AutoSitu website), which builds a proprietary dataset of local code interpretations and compliance patterns across multiple jurisdictions. Switching costs increase as the system is embedded into municipal cross-department workflows — cities that integrate AutoSitu's agents into their review processes face operational disruption if switching. The fragmented nature of local codes (each municipality has unique ordinances) creates a data moat that grows with each new jurisdiction onboarded.

**Market structure:** Large incumbent permitting platforms (e.g., Accela, Tyler Technologies) focus on permit management and workflow tracking rather than AI-powered code compliance review. Adding AI plan review would require these incumbents to build jurisdiction-specific regulatory intelligence from scratch, which conflicts with their existing business model of selling horizontal workflow software. Additionally, municipal procurement cycles and existing vendor relationships create channel friction for incumbents pivoting into AI review.

**Commoditization risk:** Multiple startups are already building AI plan review tools (PermitFlow, CivCheck/Clariti, CodeComply.Ai, Blitz AI, Archistar). The core technology (LLM-based document analysis against regulatory text) is reproducible. Differentiation depends on depth of jurisdiction-specific code coverage, accuracy of compliance checking, and integration into municipal workflows. The barrier is more data/operational than technological.

## Market & Traction

**Traction signals:**
- 1,500+ plans/drawing sets checked (AutoSitu website, as of time of research)
- Up to 90% faster reviews claimed; up to 80% cost reduction claimed (AutoSitu website)
- 50–70% reduction in city comments; resubmittal cycles reduced from 2–3 to 0–1 (YC company page)
- Named city engagements: San José, Seattle, Long Beach, Boston, Coral Gables, Los Angeles, Dallas, San Mateo, Clark County, Honolulu, San Francisco (AutoSitu website)
- Named partners: Sterling Heights, SWA (Sasaki), Bonner Advisory Group, NVIDIA (AutoSitu website)
- Twitter/X: @AutoSitu (handle listed on website; follower count not retrievable)
- LinkedIn: linkedin.com/company/autositu (follower count not retrievable)
- Product Hunt: No listing found
- No public revenue figures found
- 0 open job postings (YC company page)

**Competitive landscape:**

1. **PermitFlow** — $91M total raised including $54M Series B (BusinessWire, Dec 2025); 10x revenue growth since Series A (Initialized Capital blog, Dec 2025 via search snippet); revenue not publicly disclosed. Focuses on the developer/contractor side of permitting with AI agents for permit logistics. Differentiator vs. AutoSitu: PermitFlow serves builders and developers navigating permits, while AutoSitu targets the municipal reviewer side.

2. **CivCheck (acquired by Clariti)** — Acquired by Clariti in October 2025 (BusinessWire, Oct 2025); Clariti raised $10M prior to acquisition (GovTech via search snippet). Claims 97%+ accuracy and 80%+ reduction in permit approval times. Differentiator vs. AutoSitu: CivCheck provides guided plan review for individual code checks; AutoSitu emphasizes multi-department coordination and agentic workflows.

3. **CodeComply.Ai** — $2M seed raised led by Govo Venture Partners (Refresh Miami); $3,000/seat/year pricing; 15–20 pilot organizations; 4x YoY growth. Based in Miami. Differentiator vs. AutoSitu: CodeComply focuses on building code compliance checking for individual plan reviewers; AutoSitu targets cross-department workflow integration.

4. **Archistar** — $22.7M total raised; $6.7M revenue with 61-person team (GetLatka, 2025 via search snippet); $2.7M Australian government grant in 2024. Partnerships with City of Vancouver, City of Surrey, City of Los Angeles, and City of Austin. Differentiator vs. AutoSitu: Archistar is Australia-based and broader in scope (feasibility, design, compliance); AutoSitu focuses specifically on U.S. municipal plan review workflows.

5. **Blitz AI** — Funding amount not publicly disclosed; deployed across cities and counties in five U.S. states (Blitz AI website via search snippet). Described as "most widely adopted AI plan review platform in American local government." Differentiator vs. AutoSitu: Blitz focuses on application screening and code compliance diagnostics; AutoSitu emphasizes multi-department agentic coordination.

**Why now:** [Inferred]: Several converging catalysts opened this opportunity. First, LLM capabilities crossed a threshold in 2023–2024 enabling reliable extraction and reasoning over complex regulatory documents (zoning codes, building ordinances). Second, the U.S. housing crisis has created political pressure to accelerate permitting — Seattle Mayor Bruce Harrell signed an executive order in June 2025 directing AI review of all development applications (HousingWire via search snippet), and the City of Austin launched an AI zoning review pilot with Archistar (KXAN). Third, municipalities face staffing shortages in planning departments post-COVID, creating acute demand for automation of review workflows.

## Founders & Team

**Xuanshu Lin** — Co-Founder
- Education: University of Michigan (Urban Planning & Architecture); Harvard GSD (LinkedIn via search snippet); M.U.R.P. '25
- Experience: Policy and design work on projects in Champaign–Urbana and Detroit's Joe Louis Greenway (AutoSitu about page). Leads product strategy focused on zoning and site plan compliance.
- Recognition: APA Planning and Design Competition Honorable Mention (AutoSitu about page)
- Twitter/X: No public account found under his name
- LinkedIn: linkedin.com/in/linxis01 — "Founder at AutoSitu (YC W26)"
- GitHub: No public repos found

**George Zhai** — Co-Founder
- Education: Georgia Tech (YC company page); Master's degree at UIUC (search snippet)
- Experience: General Motors and McLaren Automotive — worked in Autonomous, Connected Mobility, and AI organization (LinkedIn via search snippet). 2,000+ hours of experience in autonomous systems; 7 patents. Expertise in hardware, cameras, sensors, ROS, Android, web development, ML models, and LLM fine-tuning. Work showcased at CES and Investor Day (search snippet via LinkedIn).
- Twitter/X: No public account found under his name
- LinkedIn: linkedin.com/in/george-zhai-213373141 — "Founder @ AutoSitu (YC W26)"
- GitHub: No public repos found

**Co-founder relationship:** Both founders have connections to the University of Michigan ecosystem — Xuanshu Lin studied Urban Planning there, and both worked on projects in the Champaign–Urbana area (Lin at UIUC, Zhai with a master's at UIUC). Their shared UIUC connection suggests a possible prior acquaintance.

**Founder-market fit:** Xuanshu Lin brings direct domain expertise in urban planning, zoning compliance, and site plan review from his education at Michigan and Harvard GSD and his hands-on project work. George Zhai brings engineering depth in AI, autonomy, and robotics from Georgia Tech, UIUC, General Motors, and McLaren, with 7 patents and production-level AI system deployment experience. The combination of deep regulatory domain knowledge with production AI engineering experience positions them to build a technically credible product for a domain that requires both planning expertise and AI capability.

## Key Risks

**Government procurement cycle risk:** Municipal sales cycles are typically 6–18 months with complex procurement requirements (RFPs, council approvals, budget cycles). For a 2-person pre-seed team, sustaining operations through long sales cycles while servicing multiple pilot customers is operationally demanding. Mitigation: YC backing provides runway, and the website lists engagements with multiple cities suggesting some traction through these cycles.

**Accuracy and liability risk:** Errors in automated code compliance checking could result in buildings that violate safety codes or zoning requirements. The company positions itself as a "copilot" with human-in-the-loop, but municipalities may face legal exposure if they rely on AI recommendations that prove incorrect. No public information found on liability frameworks or insurance arrangements.

**Competitive density risk:** At least five funded competitors (PermitFlow, CivCheck/Clariti, CodeComply.Ai, Archistar, Blitz AI) are pursuing overlapping segments of AI-powered plan review. PermitFlow alone has raised $91M. The space is attracting significant capital, and incumbent permitting platforms (Accela, Tyler Technologies) could acquire or build competing capabilities.

**Customer concentration risk:** The website lists multiple city names, but the nature of these engagements (paid contracts vs. pilots vs. informal discussions) is not publicly disclosed. If early revenue depends on a small number of municipal contracts, loss of a single customer could have outsized impact.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global GovTech market ~$746B in 2025, CAGR 14.91% (IndustryResearch.biz via search snippet). No specific TAM for municipal plan review segment found. |
| SAM | No public data found |
| Traction | 1,500+ plans/drawing sets checked (AutoSitu website); engagements with 11+ named cities (AutoSitu website) |
| Revenue Signal | No public data found |
| Founders | Xuanshu Lin (Co-Founder): UMich, Harvard GSD, urban planning domain expert. George Zhai (Co-Founder): Georgia Tech, UIUC, GM/McLaren AI engineer, 7 patents. |
| Competitors | PermitFlow ($91M raised, revenue undisclosed, developer-side permitting), CivCheck/Clariti (acquired Oct 2025, guided plan review), CodeComply.Ai ($2M raised, $3K/seat/yr, building code compliance), Archistar ($22.7M raised, $6.7M revenue, Australia-based feasibility + compliance), Blitz AI (funding undisclosed, 5-state deployment, application screening) |
| Moat Signals | Jurisdiction-specific regulatory data accumulation across 1,500+ plan reviews; cross-department workflow integration creates switching costs |
| Risk Factors | Long government procurement cycles, accuracy/liability exposure, competitive density with well-funded rivals |
| Founder Reach | Xuanshu Lin: Twitter not found, LinkedIn linkedin.com/in/linxis01. George Zhai: Twitter not found, LinkedIn linkedin.com/in/george-zhai-213373141. GitHub: not found for either. |
| Distribution Signals | 11+ named city engagements listed on website (AutoSitu website); NVIDIA partnership listed (AutoSitu website); no Product Hunt listing found |
| Emails | founders@autositu.com |
