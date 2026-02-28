# Verdex

> Helping insurers settle claims without leaving their desks.

| Field | Value |
|-------|-------|
| Website | https://www.verdexai.com/ |
| YC Page | https://www.ycombinator.com/companies/verdex |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Agriculture |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Agriculture, AI |

## The Idea

**Problem:** Agricultural insurers rely on manual field inspections to verify crop conditions and settle claims — a process that is slow, expensive, and does not scale across the approximately 540 million insured acres in the U.S. (USDA RMA, 2024). The Federal Crop Insurance Program covered nearly $200 billion in crops and livestock in 2024 (USDA RMA, 2024 via search snippet), with roughly 89% of major field crop acreage enrolled (USDA ERS, 2024 via search snippet). The current workflow requires adjusters to physically visit farms, creating bottlenecks during peak claim periods (e.g., after weather events) and introducing subjectivity into damage assessments. Existing tools available to insurers include traditional manual surveys (70–80% accuracy in acreage assessment, per Farmonaut blog, 2025 via search snippet) and fragmented satellite data providers that require significant in-house analytics capability.

**Approach:** Verdex fuses high-resolution satellite imagery with weather models to create a persistent, time-anchored record of field conditions on every acre. This enables continuous 24/7 monitoring, allowing insurers to audit crop outcomes objectively and settle claims remotely without dispatching field adjusters. The company describes itself as providing "Asset Intelligence for Farmland" and "Ground Truth for Smarter Insurance Decisions" (verdexai.com, company website). By turning land into a measurable asset with verifiable satellite-based evidence, Verdex aims to replace subjective manual inspections with data-driven claims adjudication.

**Differentiation:** Verdex differentiates from existing players in its positioning as infrastructure specifically built for insurer workflows (claim settlement without leaving desks), rather than as a general-purpose farm analytics or precision agriculture platform. Ceres AI ($86.1M+ raised, per Crunchbase/AgFunderNews via search snippet) focuses on aerial spectral imagery for growers and agronomists with broader crop management applications. EOSDA provides a crop monitoring SaaS platform serving multiple verticals including banks and insurers, but as a horizontal tool rather than purpose-built insurance infrastructure. Aerobotics ($21.7M raised, per Aerobotics blog) uses drone imagery primarily for perennial crop insurance in specialty markets. Layer One AG (L1A) operates as an AI-powered MGA (managing general agent) that underwrites crop insurance directly, rather than providing infrastructure to existing insurers.

**Business Model:** No public pricing page or revenue details were found on the Verdex website. [Inferred]: The most likely monetization path is a SaaS subscription or per-acre monitoring fee charged to crop insurance carriers and adjusters, given the B2B insurer-facing positioning. An alternative model could involve transaction-based fees per claim adjudicated through the platform.

**TAM/SAM:** The global crop insurance market was estimated at $38.70 billion in 2024, projected to reach $53.64 billion by 2030 at a 6.1% CAGR (Grand View Research, 2024 via search snippet). North America accounted for 49.2% of the global market in 2024 (Grand View Research, 2024 via search snippet), implying a North American market of approximately $19 billion. U.S. federal crop insurance premium subsidies alone totaled $10.4 billion in 2024 (USDA GAO, 2024 via search snippet). The serviceable addressable market for Verdex would be the technology spend by crop insurers on claims processing, field monitoring, and risk assessment — a subset of the total premium pool. No public SAM estimate specific to ag-insurance technology infrastructure was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to the 16 USDA-approved crop insurance providers (Approved Insurance Providers / AIPs) in the U.S., given that the company claims to already help insure over 11% of all American farmland (YC company page). This traction claim suggests at least one existing insurer partnership. The B2B sale to a small number of large carriers is a concentrated market that favors direct enterprise sales.

## Defensibility

**Data moat potential:** Verdex's continuous satellite monitoring generates a time-series dataset of field-level conditions across insured acreage. Over time, this accumulating historical record — pairing satellite observations with actual claim outcomes — could create a proprietary training dataset for predictive models that new entrants would not be able to replicate without years of collection. The company's claim of monitoring 11% of U.S. farmland (YC company page), if accurate, suggests an early-stage data accumulation advantage.

**Switching costs:** [Inferred]: If insurers integrate Verdex into their claims workflows and base underwriting decisions on its historical data, switching to a competitor would require rebuilding the historical baseline and retraining internal processes. However, at this stage, switching costs are likely minimal until deep workflow integration is achieved.

**Market structure:** The U.S. crop insurance market is administered through only 16 USDA-approved insurance providers (AIPs), creating a concentrated buyer base. Incumbents in this space (the AIPs themselves) face regulatory constraints and process inertia — their claims processes are built around physical field inspection protocols codified in federal program rules. Building satellite-based claims infrastructure requires both technical capability (satellite data pipelines, weather model fusion, ML for damage assessment) and domain expertise in federal crop insurance program regulations. Large satellite data providers (e.g., Planet, Airbus) have the imagery but lack the insurance-specific analytics and workflow integration. Existing insurance software vendors lack the remote sensing capabilities.

**Commoditization risk:** Satellite imagery itself is increasingly commoditized, with multiple providers (Planet, Sentinel, Airbus, EOSDA's EOS SAT-1) offering high-resolution data. The differentiation lies in the analytics layer — fusing imagery with weather models, building crop-specific damage assessment algorithms, and integrating with insurer workflows. Companies like Ceres AI, EOSDA, and Farmonaut all have satellite-based crop analytics capabilities and could pivot toward insurance-specific use cases. A well-funded competitor with existing insurer relationships could replicate the technical approach.

## Market & Traction

**Traction signals:**
- "Currently helping to insure over 11% of all American farmland" (YC company page, as of Winter 2026 batch). Given that 540 million acres were insured under the FCIP in 2024 (USDA RMA), 11% would equate to approximately 59 million acres.
- Jad Bousselham received a $2,000 Founder Grant from Dartmouth's Magnuson Center for Entrepreneurship for Verdex during the Spring 2025 grant cycle (Magnuson Center, Dartmouth, 2025).
- Company LinkedIn page: linkedin.com/company/verdexai — follower count not retrievable.
- No Product Hunt launch found.
- No press coverage in named publications found.
- No app store presence or Chrome extension found.
- No Discord or Slack community found.
- 0 active job postings (YC company page).
- Company Twitter/X account: No public account confirmed as belonging to this specific Verdex (YC W26). Multiple unrelated entities use the "Verdex" name on X/Twitter.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Verdex |
|------------|---------|-------------------------------|
| **Ceres AI** (formerly Ceres Imaging) | $86.1M+ total (Series D) (AgFunderNews, SiliconANGLE via search snippets) | Broader precision agriculture platform using aerial spectral imagery for growers and agronomists, not purpose-built for insurer claim settlement. Revenue unknown. |
| **Aerobotics** | $21.7M total (Series B led by Naspers) (Aerobotics blog via search snippet) | Drone-based imagery focused on perennial/specialty crops; launched its own crop insurance agency (Aerobotics Crop Insurance Services), acting as an agent rather than infrastructure provider. Based in Cape Town, South Africa. Revenue unknown. |
| **EOSDA (EOS Data Analytics)** | No public funding data found | Horizontal satellite crop monitoring SaaS platform serving insurers, banks, and agribusinesses globally. Launched proprietary satellite EOS SAT-1 in 2023. Deployed by FANCAMPO in Mexico for claims assessment (EOSDA blog). Revenue unknown. |
| **Farmonaut** | Funding from Indigram Labs and Ministry of Electronics & IT (Crunchbase via search snippet); amount undisclosed | India-headquartered satellite-based farm analytics platform. Claims 95%+ accuracy in acreage assessment (Farmonaut blog, 2025 via search snippet). 19 employees. Revenue unknown. |
| **Layer One AG (L1A)** | Funding amount undisclosed | AI-powered MGA that underwrites crop insurance directly, rather than providing tools to existing insurers. Focused on underserved specialty crops. Based in Iowa. Revenue unknown. |

**Why now:**
- The USDA Federal Crop Insurance Program has grown to cover 540 million acres and nearly $200 billion in liability (USDA RMA, 2024 via search snippet), creating massive scale pressure on manual inspection processes.
- Satellite imagery resolution and revisit frequency have improved while costs have declined — commercial providers like Planet now offer daily global coverage, and the EU's free Sentinel-2 program provides 10m-resolution imagery every 5 days.
- [Inferred]: The convergence of higher-resolution, higher-frequency satellite data with advances in computer vision and weather modeling has crossed a technical threshold where remote damage assessment can approach or exceed the accuracy of manual field inspection, making desk-based claim settlement feasible for the first time at scale.

## Founders & Team

**Jad Bousselham** — Co-Founder
- Guarini '25, Dartmouth College. Math + CS degree (YC company page). From Morocco (YC company page).
- Received $2,000 Magnuson Center Founder Grant for Verdex, Spring 2025 (Magnuson Center, Dartmouth).
- Previously interviewed at YC S25 with a project called "SignPact" (LinkedIn snippet via search).
- Twitter/X: No public account confirmed.
- LinkedIn: linkedin.com/in/jad-bousselham/ — Co-Founder @ Verdex (YC W26). 500+ connections (LinkedIn via search snippet).
- GitHub: No public repos found.

**Evan Rankin** — Co-Founder
- Dartmouth '25. From Maine (YC company page).
- Won the Dartmouth Society of Engineers Prize for his ENGS capstone project using modern ML and data processing to objectively diagnose ASD (autism spectrum disorder) (LinkedIn via search snippet).
- Previously joined Meta's NYC Global Business Group as a Client Solutions Manager on the Wayfair team (LinkedIn via search snippet).
- Twitter/X: No public account confirmed for this individual matching the Verdex co-founder.
- LinkedIn: linkedin.com/in/evan-rankin-/ — follower/connection count not retrievable.
- GitHub: No confirmed public repos found.

**Co-founder relationship:** Both founders attended Dartmouth College as members of the Class of 2025 (Jad in the Guarini program, Evan in Engineering), indicating they overlapped as students for their undergraduate/graduate period.

**Founder-market fit:** Jad Bousselham's Math + CS background and prior work on a "real-time agriculture intelligence platform" (Magnuson Center description) suggest technical capability in data fusion and analytics relevant to satellite-based monitoring. Evan Rankin's engineering capstone applying ML to diagnostic assessment demonstrates applied machine learning experience, and his time at Meta in a client solutions role provides enterprise sales exposure. The team's specific prior experience in agriculture insurance is not documented in public sources. No advisors, board members, or notable investors beyond YC were found.

## Key Risks

**Regulatory dependency on USDA/RMA program rules:** The Federal Crop Insurance Program operates under specific regulatory frameworks that govern how claims are verified and settled. If USDA/RMA regulations require physical field inspection for certain claim types or do not accept satellite-based evidence as sufficient, Verdex's core value proposition (settling claims without leaving desks) would be constrained. Any regulatory change to the FCIP could materially affect the company's addressable workflow.

**Concentrated buyer base:** Only 16 USDA-approved insurance providers (AIPs) participate in the federal crop insurance program. Losing a single large AIP customer — or failing to win initial contracts — would have outsized impact on revenue. Conversely, if one or two large AIPs build in-house satellite analytics capabilities, the addressable market contracts rapidly.

**Brand disambiguation:** Multiple unrelated companies use the "Verdex" name, including Verdex Construction (West Palm Beach), Verdex Technologies (nanofiber technology, Richmond, VA — sold IP in 2025), Verdex Capital (investment firm), and Verdex Australia (materials handling). This creates potential brand confusion in search results and market presence, complicating customer discovery and marketing efforts.

**Traction claim verification:** The claim of "helping to insure over 11% of all American farmland" (~59 million acres) is sourced only from the company's own YC profile. No independent confirmation, named insurer partnership, or press coverage corroborates this figure. The nature of the relationship (monitoring, analytics, pilot, or full deployment) is not specified publicly.

**Thin domain experience documentation:** Neither founder has publicly documented prior experience in agriculture, insurance, or the federal crop insurance program. The intersection of satellite remote sensing, actuarial science, and USDA regulatory compliance represents a specialized domain where relationships and institutional knowledge matter for sales cycles and product design.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $38.70B global crop insurance market (Grand View Research, 2024 via search snippet, 6.1% CAGR to 2030); North America ~$19B (49.2% share) |
| SAM | No public data found for ag-insurance technology infrastructure specifically |
| Traction | "Helping to insure over 11% of all American farmland" (YC company page, W26 batch); $2K Magnuson Center Founder Grant (Dartmouth, Spring 2025) |
| Revenue Signal | No public data found |
| Founders | Jad Bousselham (Co-Founder): Dartmouth Guarini '25, Math + CS, from Morocco. Evan Rankin (Co-Founder): Dartmouth '25, Engineering, Dartmouth Society of Engineers Prize (ML capstone), ex-Meta Client Solutions Manager |
| Competitors | Ceres AI ($86.1M+ raised, broader precision ag platform vs. insurer-focused); Aerobotics ($21.7M raised, drone-based specialty crop insurance agency vs. satellite infrastructure); EOSDA (funding undisclosed, horizontal satellite SaaS vs. insurer-specific); Layer One AG (funding undisclosed, MGA underwriting directly vs. insurer tooling) |
| Moat Signals | Potential data moat from accumulating time-series satellite + claims outcome data across 11% of U.S. farmland (if traction claim verified); concentrated buyer market (16 AIPs) favors early entrant with workflow integration |
| Risk Factors | USDA regulatory dependency on accepted claim verification methods, concentrated 16-AIP buyer base, unverified traction claim |
| Founder Reach | Jad Bousselham: Twitter not found, LinkedIn 500+ connections, GitHub not found. Evan Rankin: Twitter not found, LinkedIn profile exists (count not retrievable), GitHub not found |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no community channels identified) |
