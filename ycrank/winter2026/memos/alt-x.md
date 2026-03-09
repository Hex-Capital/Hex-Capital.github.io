# Alt-X

> Automation for institutional-grade financial modeling in Excel

| Field | Value |
|-------|-------|
| Website | https://alt-x.co |
| YC Page | https://www.ycombinator.com/companies/alt-x |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Fintech, AI |
| YC Partner | Garry Tan |
| Emails | No public data found |

## The Idea

**Problem:** Private-market investing — venture capital, real estate, and private equity — runs on Excel. Trillions of dollars in capital are underwritten annually through manual spreadsheet work: copying data from PDFs, CIMs, and data rooms into brittle models cell by cell. The company claims $25–30B is spent globally on diligence and analytics, nearly all of it manual and Excel-based (YC company description). Analysts spend 30–50 hours per deal rebuilding spreadsheets. The customer segment is analysts and investment teams at family offices, private funds, and PE/RE firms.

**Approach:** Alt-X builds an AI infrastructure layer that operates inside Excel (not a replacement for it). It ingests unstructured deal materials (PDFs, CIMs, data room documents) and automatically extracts and maps KPIs — ARR, growth, NOI, IRR, leverage, cap rate — into clean, auditable Excel models. It generates institutional-grade models, sensitivity analyses, and IC-ready outputs that remain fully editable and transparent. The initial wedge is real estate and private equity underwriting.

**Differentiation:** Unlike general-purpose Excel AI tools (e.g., Endex, Shortcut), Alt-X is specifically built for alternative-asset underwriting workflows. Unlike FP&A platforms (e.g., Datarails, Vena), it targets deal-level underwriting rather than corporate financial planning. Unlike standalone AI modeling tools that generate proprietary-format outputs, Alt-X outputs remain native Excel — fully editable and auditable — which matters for IC approval processes where fund managers require cell-level transparency. Compared to Apers, the closest direct competitor in real estate, Alt-X spans real estate and private equity rather than focusing solely on real estate.

**Business Model:** SaaS pricing starting at $30/month, with higher tiers for teams and advanced workflows (YC company description). No public details on higher-tier pricing or per-seat structure. No public revenue figures found.

**TAM/SAM:** The company claims over $1.4T in private-market deals are underwritten globally each year, with $25–30B spent on diligence and analytics (YC company description). No independent third-party TAM/SAM estimate was found for AI-powered private-market underwriting specifically. The broader financial modeling software market and FP&A market are adjacent but not directly comparable. [Inferred]: The SAM would be the subset of that $25–30B diligence spend attributable to Excel-based modeling work at firms small enough to adopt a SaaS tool (family offices, mid-market PE/RE firms), likely a single-digit-billion figure.

**GTM / Distribution:** The company is piloting with family offices and private funds managing over $200M in assets (YC company description). [Inferred]: The initial GTM is likely direct sales and founder-led outreach to mid-market PE and RE firms, leveraging Ryan Samadi's network from Citadel and the Stanford finance community. The $30/month entry price suggests a bottom-up adoption path starting with individual analysts.

## Defensibility

At this stage, Alt-X has limited proven moat. Potential defensibility signals include:

- **Domain-specific extraction models:** Financial document extraction for alternative assets requires understanding of asset-class-specific KPIs (cap rates, NOI for real estate; IRR, MOIC for PE). Training data and model accuracy improve with deal volume.
- **Switching costs:** Once a firm's analysts integrate Alt-X into their underwriting workflow and build templated models, switching to another tool requires re-training and re-templating.
- **Data flywheel:** [Inferred]: Each deal processed could improve extraction accuracy and model templates, creating a compounding advantage over time.

**Market structure:** Large incumbents in financial data (Bloomberg, S&P Capital IQ, PitchBook) sell data and analytics but do not operate inside Excel at the cell level for deal-specific underwriting. Their business models center on data subscriptions, not workflow automation. Building an Excel-native underwriting tool would represent a different product line and sales motion. Microsoft itself could integrate AI more deeply into Excel, but its horizontal approach would lack the alternative-assets domain specificity. [Inferred]: The structural barrier is that incumbents' sales channels target enterprise-wide data subscriptions, not deal-team-level workflow SaaS at $30/month.

**Commoditization risk:** The competitive landscape is active. Endex ($14M raised, OpenAI Startup Fund backing) and Shortcut by Fundamental Research Labs ($78M+ total funding, Sequoia-backed) are building general-purpose Excel AI agents that could move into alternative-asset verticals. Apers targets real estate specifically. The core AI capabilities (document extraction, Excel generation) use foundation models that are broadly available. Differentiation depends on domain-specific training data, template quality, and depth of KPI mapping for alternative assets.

## Market & Traction

**Traction signals:**
- Piloting with family offices and private funds managing over $200M in assets (YC company description). No named customers or specific pilot counts disclosed.
- No Product Hunt launch found.
- No press coverage in named publications found.
- No app store or Chrome Web Store presence found.
- Company website returned a JavaScript-only page with no rendered content at time of research.
- Ryan Samadi Twitter/X: @SamadiRyan — follower count not retrievable (JavaScript rendering required).
- Michael Wachsman LinkedIn: linkedin.com/in/michael-wachsman-a0912a1ab — follower/connection count not retrievable.
- Ryan Samadi LinkedIn: linkedin.com/in/ryan-samadi/ — follower/connection count not retrievable.
- No Discord or Slack community found.
- No public GitHub repositories for the product found.
- No active job postings found (consistent with 2-person team, not currently hiring per YC page).

**Competitive landscape:**

1. **Endex** ($14M raised led by OpenAI Startup Fund, with Neo and executives from Palantir, Two Sigma, and Coatue; TechCrunch, Aug 2025): Excel-native AI agent built on OpenAI's reasoning models. Executes multi-step tasks including DCF modeling and memo writing. Broader financial modeling focus, not alternative-assets specific. Currently invite-only. Founded by Tarun Amasa (Thiel Fellow).

2. **Shortcut by Fundamental Research Labs** ($45M Series B led by Sequoia; total $78M+ raised; valued at $300M+; TechCrunch, Aug 2025): Excel AI agent from MIT-founded team. Scored >80% on Excel World Championship cases. General-purpose Excel automation, not specifically targeting alternative-asset underwriting. Co-founded by Dr. Robert Yang (ex-MIT faculty).

3. **Apers** (Pre-seed, Valuepoint investor; Crunchbase via search snippet): AI for institutional real estate investors. Automates underwriting, valuation, and asset management. Builds actual Excel formulas and audit trails. Most direct competitor in the real estate vertical. Revenue and user counts not publicly available.

4. **Datarails** ($175M total raised; $70M Series C at $550M valuation, Jan 2026; Calcalist, Jan 2026): FP&A platform for Excel users. 70% YoY revenue growth in 2025, approaching ~$100M revenue (CEO estimate via Calcalist). Over 400 employees. Targets CFO offices and FP&A teams rather than deal underwriting. Different customer segment but validates Excel-native AI demand.

5. **o11** (funding not publicly available): AI financial modeling tool that generates fully linked, formula-based 3-statement Excel models. Handles circular references and debt schedules. General financial modeling focus rather than alternative-asset-specific (o11.ai blog).

**Why now:** [Inferred]: Two catalysts converged in 2024–2025. First, foundation model capabilities (GPT-4, Claude 3.5, etc.) crossed a performance threshold in document understanding and structured data extraction from unstructured PDFs — a task that was unreliable with pre-2023 models. Second, private-market deal volume has grown substantially while analyst headcount has not scaled proportionally, creating acute pressure on deal evaluation bandwidth. The emergence of well-funded competitors (Endex, Shortcut) in 2025 validates that the technology is now capable enough for institutional-grade financial work inside Excel.

## Founders & Team

**Ryan Samadi** — Co-Founder & CEO
- Stanford University, BS in Computer Science (AI track / Biocomputation) (Stanford Profiles)
- Previously: Analyst at Citadel Global Equities hedge fund (LinkedIn via search snippet)
- Previously: Fixed Income Trading Analyst at Bank of America Merrill Lynch (LinkedIn via search snippet)
- Previously: Private Equity Analyst at IIFG, Los Angeles (LinkedIn via search snippet)
- CIO at Stanford Kudla Fund, a student-managed long/short equities fund (LinkedIn post)
- Author at The Stanford Review (Stanford Review)
- Twitter/X: @SamadiRyan — count not retrievable (JavaScript rendering required)
- LinkedIn: linkedin.com/in/ryan-samadi/ — headline: Co-Founder & CEO at Alt-X
- GitHub: No public repos found

**Michael Wachsman** — Co-Founder & CTO
- Leads engineering and architecture at Alt-X (YC page)
- Previous roles: ZoomInfo listings indicate prior positions as Software Engineer at Upwind (cloud security platform) and Pricing Analyst at Opendoor (ZoomInfo via search snippet) — note: multiple individuals share this name; these roles are not independently confirmed as belonging to the Alt-X co-founder
- Education: No confirmed public data found
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/michael-wachsman-a0912a1ab — headline: CTO, Co-Founder at Alt-X (YC F25)
- GitHub: No public repos found

**Co-founder relationship:** No shared employer or university overlap is visible from publicly available data. Ryan Samadi's Stanford/Citadel background and Michael Wachsman's listed engineering roles do not show an obvious prior connection. No public data on co-founder history.

**Founder-market fit:** Ryan Samadi brings direct experience in institutional investing — equity analysis at Citadel, fixed income at BofA, PE at IIFG, and running a student hedge fund at Stanford — giving him firsthand knowledge of the underwriting pain point Alt-X addresses. His CS/AI education at Stanford provides technical grounding for an AI product. Michael Wachsman's engineering background positions him to build the product. No advisors, board members, or notable investors beyond YC were found in public sources.

## Key Risks

**Well-funded direct competition:** Endex ($14M, OpenAI-backed) and Shortcut ($78M+, Sequoia-backed) are building Excel-native AI agents with significantly more capital and engineering resources. Either could add alternative-asset-specific templates and KPI extraction, directly competing with Alt-X's positioning. Mitigation: Alt-X's narrow focus on alternative assets may allow deeper domain specialization, but the funding gap is substantial.

**Platform dependency on Microsoft Excel:** Alt-X's value proposition is built entirely inside Excel. Changes to Excel's add-in architecture, introduction of native AI features by Microsoft (Copilot for Excel is already expanding), or shifts in how institutional investors model deals could undermine the product's foundation. Microsoft's own AI roadmap for Excel represents an ongoing ambient threat.

**Narrow initial wedge with small TAM slice:** The $30/month entry price targeting family offices and small private funds implies low ACV. Scaling revenue requires either significant volume of small accounts or rapid upmarket movement to larger funds with higher willingness to pay. The initial pilot base (funds managing >$200M) represents the smaller end of institutional capital.

**Brand disambiguation:** Multiple entities use the "Alt-X" or "AltX" name — including AltX (a South African exchange), ALT-X Labs (GitHub organization), and various LinkedIn company pages. This creates potential confusion in search, marketing, and domain authority. The company uses alt-x.co rather than altx.com.

**Regulatory and compliance sensitivity:** Financial models used for investment committee decisions at regulated funds may face scrutiny around AI-generated outputs. Institutional investors may require extensive validation before trusting AI-generated models for deploying capital, potentially lengthening sales cycles.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $25–30B global spend on private-market diligence and analytics annually; $1.4T in deals underwritten (company claim, YC description) — no independent third-party estimate found |
| SAM | No public data found |
| Traction | Piloting with family offices and private funds managing >$200M in assets (YC company description). No user counts, revenue figures, or independent traction metrics found. |
| Revenue Signal | SaaS starting at $30/month with higher tiers for teams (YC company description). No disclosed revenue. |
| Founders | Ryan Samadi (CEO): Stanford CS/AI, Citadel Global Equities, BofA, IIFG PE, Stanford Kudla Fund CIO. Michael Wachsman (CTO): Engineering lead, prior roles unconfirmed. |
| Competitors | Endex ($14M raised, revenue unknown, Excel-native AI agent — broader financial modeling focus vs. Alt-X's alternative-assets focus). Shortcut/FRL ($78M+ raised, $300M+ valuation, revenue unknown, general Excel AI — broader scope vs. Alt-X's vertical focus). Apers (pre-seed, revenue unknown, real estate AI modeling — most direct competitor in RE vertical). Datarails ($175M raised, ~$100M revenue, $550M valuation, FP&A platform — different customer segment). o11 (funding unknown, revenue unknown, 3-statement model generation — general modeling focus). |
| Moat Signals | No proven moat at this stage. Potential: domain-specific extraction models for alternative-asset KPIs, workflow switching costs, data flywheel from deal volume. |
| Risk Factors | Well-funded direct competitors (Endex, Shortcut), Microsoft Excel platform dependency/Copilot threat, brand disambiguation challenges |
| Founder Reach | Ryan Samadi: Twitter @SamadiRyan (count not retrievable), LinkedIn linkedin.com/in/ryan-samadi/. Michael Wachsman: LinkedIn linkedin.com/in/michael-wachsman-a0912a1ab, no Twitter found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
