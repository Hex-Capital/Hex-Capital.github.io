# Proximitty

> Autonomous loan servicing and collections

| Field | Value |
|-------|-------|
| Website | https://proximitty.ai |
| YC Page | https://www.ycombinator.com/companies/proximitty |
| Batch | Winter 2026 |
| Industry | Fintech / Credit and Lending |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | FinOps, Fintech, SaaS, B2B, Lending |

## The Idea

**Problem:** Banks, credit unions, and fintechs manage loan servicing and debt collections using fragmented systems — separate LMS platforms, dialers, email tools, and internal applications — requiring manual workflows for skip tracing, borrower outreach, compliance monitoring, and payment processing. Collections agents handle repetitive, high-volume tasks (right-party contact verification, hardship plan negotiation, regulatory compliance checks across FDCPA, CFPB, TCPA, FCRA, SCRA, and state-level rules) with limited borrower context, resulting in low first-contact and collection rates. Existing solutions typically automate narrow slices of the workflow (e.g., dialer optimization or compliance monitoring) without unifying the underlying data layer.

**Approach:** Proximitty builds a unified lending data layer that centralizes data from LMS, dialer, email, and internal tools, providing full borrower context. On top of this layer, it deploys three categories of AI agents: (1) a Right Party Contact Agent that uses 50+ data sources to optimize borrower reachability, claiming 20 percentage points improvement in first-contact rates (proximitty.ai); (2) a Collections Agent that conducts voice and omni-channel outreach trained on collection best practices with full borrower context; and (3) a Compliance & QA Agent that monitors communications across channels and flags regulatory risks in real time. Additionally, Proximitty offers no-code browser-based agents using proprietary computer vision that convert SOPs and screen recordings into automated workflows, claiming automation of 90% of manual workflows without APIs or engineering resources (proximitty.ai).

**Differentiation:** Unlike point solutions that address individual pieces of the collections workflow (e.g., Sedric AI for compliance monitoring, or Prodigal for conversation intelligence), Proximitty positions itself as a full-stack "AI-native loan management system" combining the data layer, risk scoring, agent orchestration, and compliance monitoring in a single platform. The no-code browser agent capability — converting screen recordings into automated workflows via computer vision — is a distinct mechanism from API-based integrations used by most competitors (proximitty.ai). Compared to LoanPro, which is an API-first loan lifecycle management platform focused on configurability, Proximitty emphasizes autonomous AI agent execution rather than developer-configurable workflows.

**Business Model:** No pricing page is publicly available on proximitty.ai. [Inferred]: Given the B2B SaaS positioning targeting banks, credit unions, and fintechs, the most likely monetization path is a platform fee (potentially per-seat or per-account-under-management) combined with usage-based pricing for AI agent interactions (voice minutes, messages sent, workflows automated).

**TAM/SAM:** The loan servicing software market was estimated at $3.7B–$4.0B in 2024, growing to $4.3B in 2025 at a 16.7% CAGR (The Business Research Company, 2025 via search snippet). The debt collection software market was estimated at $5.2B–$5.98B in 2025 (Mordor Intelligence, 2025 via search snippet; Fortune Business Insights, 2025 via search snippet), projected to reach $13.77B by 2034 at a 9.72% CAGR (Fortune Business Insights via search snippet). The combined loan servicing + debt collection software TAM is approximately $9B–$10B in 2025. [Inferred]: Proximitty's SAM likely focuses on the subset of this market represented by institutions with $1B+ in loan portfolios actively seeking AI-driven automation, but no public SAM estimate was found.

**GTM / Distribution:** The company states it is "trusted by publicly traded fintechs and banks globally" (YC company page), though no specific customer names are disclosed. [Inferred]: Most likely distribution path is direct enterprise sales to lending operations and collections leadership at mid-to-large financial institutions, potentially leveraging the YC network and founder backgrounds in fintech (Taptap Send) and financial services consulting (McKinsey) for warm introductions.

## Defensibility

**Data moat potential:** Proximitty's unified lending data layer creates a potential data advantage: as the platform processes more borrower interactions across channels, the personalized risk scoring models and collection strategies can improve. This data flywheel does not exist today at pre-seed scale but could develop as customer deployments grow.

**Switching costs:** Once a financial institution integrates its LMS, dialer, email, and internal tools into Proximitty's unified data layer and trains browser agents on its specific SOPs, switching costs would be material due to re-integration effort and loss of institution-specific model training.

**Technical complexity:** The combination of a unified data layer, real-time multi-regulation compliance monitoring (FDCPA, CFPB, TCPA, FCRA, SCRA, and state-level), voice AI agents, and computer-vision-based browser automation represents a broad technical surface area that is difficult to replicate as a single integrated product.

**Market structure:** [Inferred]: Incumbent loan servicers (e.g., Black Knight/ICE Mortgage Technology, Fiserv) are built on legacy architectures optimized for batch processing and regulatory reporting, not real-time AI agent orchestration. Rebuilding their core platforms around AI agents would require fundamental re-architecture that risks disrupting existing revenue streams and long-standing enterprise contracts. Additionally, compliance-heavy regulated environments create friction for incumbents experimenting with autonomous AI agents on live borrower interactions.

**Commoditization risk:** Individual components (voice AI, collections dialers, compliance monitoring) are available from multiple vendors. The differentiation lies in the integration of all components into a single AI-native system with a unified data layer. As large language model capabilities become more commoditized, competitors with strong distribution (e.g., LoanPro with $100M in funding) could build similar agent capabilities on top of their existing platforms.

## Market & Traction

**Traction signals:**
- Y Combinator Winter 2026 batch member (YC company page)
- Company claims to be "trusted by publicly traded fintechs and banks globally" (YC company page); no specific customers named
- Claims 20 percentage point improvement in first-contact rates and 90% manual workflow automation (proximitty.ai); no independent verification found
- Twitter/X: @proximittyce handle identified; follower count not retrievable due to JavaScript rendering
- LinkedIn company page: No public page found matching "Proximitty" with this exact spelling
- Product Hunt: No listing found
- No press coverage found in named publications
- No app store, Chrome Web Store, or web traffic data found
- No Discord or Slack community found

**Competitive landscape:**

1. **LoanPro** — $100M raised (Series A, FTV Capital, July 2021); $24.3M revenue as of September 2025 (Latka via search snippet). API-first, composable loan management platform. Differentiator vs. Proximitty: broader loan lifecycle management with deep API configurability, but focused on developer-driven customization rather than autonomous AI agents. More mature and well-funded.

2. **Prodigal** — $14.2M raised (Series A led by Menlo Ventures, July 2021; YC-backed) (Crunchbase via search snippet). AI platform for consumer finance operations including loan servicing and collections. Differentiator vs. Proximitty: focused on conversation intelligence, QA automation, and payment scoring rather than full autonomous agent execution. Prodigal launched proAgent in 2025 (prodigaltech.com via search snippet), moving closer to Proximitty's agent-based approach.

3. **Sedric AI** — $22M total raised ($18.5M Series A, September 2024, led by Foundation Capital) (PR Newswire, September 2024 via search snippet). AI-based compliance platform for financial institutions. Differentiator vs. Proximitty: pure-play compliance monitoring and communication surveillance, not collections execution. Revenue reportedly grew 5x in the year prior to its Series A (TechCrunch, September 2024 via search snippet).

4. **Kolleno** — $5.3M raised (Seed, March 2022, Eurazeo and Stride.vc) (Tracxn via search snippet). AI-powered accounts receivable and debt collection automation. Differentiator vs. Proximitty: focused on B2B accounts receivable rather than consumer loan servicing and collections. London-based.

**Why now:** [Inferred]: Several converging factors open this market window: (1) Large language models crossed a performance threshold in 2023–2025 enabling voice and text AI agents capable of nuanced, regulation-compliant borrower conversations — a capability that did not exist at production quality two years ago; (2) the expansion of BNPL portfolios and non-traditional lending products has dramatically increased the volume of accounts entering collections pipelines, straining manual workforce capacity; (3) the CFPB's Regulation F (effective November 2021) and subsequent enforcement actions have increased compliance complexity, making manual compliance monitoring increasingly untenable at scale; (4) the emergence of computer-use and browser-automation capabilities in AI models (2024–2025) enables the no-code workflow automation that is central to Proximitty's approach.

## Founders & Team

**Wye Yew Ho** — Co-founder & CEO
- Education: The London School of Economics and Political Science (LSE) (LinkedIn via search snippet)
- Previously Business Analyst at McKinsey & Company (LinkedIn via search snippet)
- Led Growth at Taptap Send, a VC-backed international remittance fintech backed by Spark Capital, Canaan Partners, and Reid Hoffman (LinkedIn via search snippet)
- Scored in the top 5% of physicists in the Olympiad worldwide (LinkedIn via search snippet)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/wyeyew (headline references "Stealth Startup" / Taptap Send)
- GitHub: No public repos found

**Zi Zhang (ZiXuan Zhang)** — Co-founder & CTO
- Previously Senior Software Engineer at Bloomberg for five years, working on security infrastructure including the Bloomberg Secrets Management solution and data streaming pipelines using Kafka Streams (LinkedIn via search snippet)
- Open source maintainer of ACI.dev, an open-source tool-calling platform integrating 600+ tools for AI agents — 4,700 GitHub stars, 458 forks, 30 contributors (github.com/aipotheosis-labs/aci). ACI.dev as a company raised $3M from DIG Ventures, Meridian Ventures, and Project A Ventures (PitchBook via search snippet).
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/zixuanzhang-x (headline: "I go by just Zi. Open Source Maintainer of ACI | Senior Software Engineer at Bloomberg") and linkedin.com/in/zizixcm (headline: "Stealth AI Startup")
- GitHub: Contributor to github.com/aipotheosis-labs/aci (4,700 stars)

**Co-founder relationship:** Both founders list London-affiliated backgrounds (Ho attended LSE; Zhang's LinkedIn profiles reference London/UK). No shared employer or university overlap is visible from public sources.

**Founder-market fit:** Ho brings fintech growth experience from Taptap Send (a regulated money transfer service) and financial services consulting from McKinsey, providing domain knowledge of lending operations and go-to-market in financial services. Zhang brings infrastructure engineering from Bloomberg (security, data streaming) and demonstrated open-source AI tooling experience from ACI.dev, directly relevant to building agent infrastructure and MCP-based integrations. The combination of fintech domain + AI/infrastructure engineering maps to the product's core requirements.

## Key Risks

**Prodigal convergence:** Prodigal, a YC-backed competitor with $14.2M in funding and existing lender relationships, launched proAgent in 2025 — an AI agent specifically for consumer finance. This directly overlaps with Proximitty's core offering, and Prodigal has a multi-year head start in building lender trust and collecting training data from production environments (prodigaltech.com via search snippet).

**Regulated-industry sales cycle:** Banks and credit unions have extended procurement timelines (6–18 months) involving compliance, legal, security, and vendor management reviews. Autonomous AI agents making borrower-facing communications face heightened scrutiny under FDCPA, TCPA, and state consumer protection laws. A two-person team must navigate these cycles while simultaneously building product.

**Compliance liability exposure:** If Proximitty's AI agents violate FDCPA, TCPA, or CFPB regulations during borrower interactions, the lender customer bears regulatory liability. Any compliance failure could result in rapid customer churn and reputational damage. The company's compliance-first claims are central to its value proposition but unvalidated by third-party audit or regulatory endorsement.

**Broad technical surface area:** The product spans a unified data layer, risk scoring models, voice AI agents, omni-channel collections agents, real-time compliance monitoring, and computer-vision browser automation. Delivering production-quality performance across all these capabilities simultaneously with a two-person team requires significant execution discipline and likely requires rapid team growth.

**Brand disambiguation:** The name "Proximitty" is visually similar to "Proxymity" (an investor communications platform on LinkedIn) and "Proximity" (multiple companies). Search results frequently surface unrelated companies, which could complicate organic discoverability and brand building.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Loan servicing software: $4.3B (The Business Research Company, 2025 via search snippet, 16.7% CAGR); Debt collection software: $5.2B–$5.98B (Mordor Intelligence / Fortune Business Insights, 2025 via search snippet, ~9.7% CAGR). Combined ~$9B–$10B. |
| SAM | No public data found |
| Traction | YC W26 batch member; claims "publicly traded fintechs and banks globally" as customers (YC page, no names disclosed); no independently verified metrics |
| Revenue Signal | No public data found |
| Founders | Wye Yew Ho (CEO): LSE, ex-McKinsey BA, ex-Growth lead at Taptap Send. Zi Zhang (CTO): ex-Bloomberg SWE (5 yrs, security infra), open source maintainer of ACI.dev (4,700 GitHub stars) |
| Competitors | LoanPro ($100M raised, $24.3M revenue, API-first loan management vs. AI-agent-native); Prodigal ($14.2M raised, revenue unknown, conversation intelligence + newly launched proAgent vs. full-stack agent platform); Sedric AI ($22M raised, revenue unknown, compliance-only vs. full servicing + collections); Kolleno ($5.3M raised, revenue unknown, B2B AR-focused vs. consumer loan collections) |
| Moat Signals | Unified data layer creating potential switching costs; multi-regulation compliance engine; no-code browser automation via computer vision (proximitty.ai). No network effects or proprietary data advantage demonstrated at current stage. |
| Risk Factors | Prodigal convergence with proAgent launch, regulated-industry sales cycles for 2-person team, compliance liability exposure from autonomous borrower-facing AI agents |
| Founder Reach | Wye Yew Ho: Twitter not found, LinkedIn linkedin.com/in/wyeyew, GitHub not found. Zi Zhang: Twitter not found, LinkedIn linkedin.com/in/zixuanzhang-x, GitHub 4,700 stars (ACI.dev contributor) |
| Distribution Signals | No public data found (no Product Hunt listing, no app store presence, no Chrome Web Store listing, no community channels identified) |
