# Minicor

> Managed, self healing desktop automation at scale

| Field | Value |
|-------|-------|
| Website | https://minicor.com |
| YC Page | https://www.ycombinator.com/companies/minicor |
| Batch | Spring 2026 (X26) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, B2B, Infrastructure |
| YC Partner | Tom Blomfield |
| Emails | connect@minicor.com, faiz@minicor.com |

## The Idea

**Problem:** AI companies selling into legacy industries (healthcare, automotive, supply chain, financial services) cannot go live because their customers' systems of record are Windows desktop applications with no writable APIs (YC page). Target systems include EHRs (Athena, Epic, Cerner, PS Suite), dental PMS (Open Dental, Dental Vision), automotive DMS (CDK Global), supply chain (SAP, HighJump), and home health platforms (Wellsky, Home Care HomeBase) (minicor.com). Some vendors are actively restricting third-party API access, making UI-level automation the only integration path (LinkedIn search snippet via Minicor description). The current alternatives are traditional RPA tools that require 4+ months to deploy and break constantly when vendor UIs change (minicor.com).

**Approach:** Minicor deploys AI computer-use agents on Windows VMs that interact with desktop applications through the UI. A reflection agent verifies every action against the on-screen state and self-corrects before errors cascade (minicor.com). The platform claims 93–96% click accuracy vs. 80–85% for competing approaches (minicor.com). Users can define automations via natural language through an MCP interface or by recording a human workflow video; the platform generates a triggerable API endpoint (YC page, minicor.com). Deployment supports on-premise, cloud, or Citrix environments (minicor.com). Built-in observability includes full video recordings of every run, Slack failure notifications, and screenshot-level debug context (minicor.com).

**Differentiation:** Versus **UiPath** and **Automation Anywhere**: Minicor stores automation as deterministic code and uses the AI agent only for recovery and edge cases, rather than retrofitting AI onto rule-based RPA (minicor.com). Versus **Automat** (YC, $19.25M raised; American Bazaar Online, Nov 2025): Automat targets general computer-operating agents across banking and B2B software; Minicor focuses specifically on legacy desktop applications with no API, emphasizing managed infrastructure (VMs, Citrix) and compliance certifications. Versus **Microsoft Power Automate**: Power Automate is optimized for Microsoft-native environments, not third-party legacy desktop apps.

**Business Model:** No public pricing page found on minicor.com. The legal entity is Laminar Run, Inc. (minicor.com footer). [Inferred]: Most likely monetization is consumption-based or per-VM pricing given the managed infrastructure model (API calls triggering Windows VM workflows), possibly with tiered plans for cloud vs. on-premise vs. Citrix deployments.

**TAM/SAM:** The global RPA market was estimated at $28.31B in 2025, projected to reach $247.34B by 2035 at a 24.2% CAGR (Precedence Research, Dec 2025 via GlobeNewswire). Alternative estimates: $6.31B in 2025 growing at 28.66% CAGR through 2031 (Mordor Intelligence, 2026 via search snippet). No public SAM estimate specific to legacy-desktop-only automation was found.

**GTM / Distribution:** Minicor offers an MCP interface that integrates with coding agents, positioning it as infrastructure for AI companies building on top of legacy systems (YC page). A demo is bookable at calendly.com/faiz-laminar/minicor-demo (YC page). [Inferred]: Primary distribution is likely direct sales to AI companies and system integrators that need legacy system connectivity, with the MCP/API-first approach enabling developer-led adoption.

## Defensibility

- **Compliance certifications:** SOC 2 Type II certified and HIPAA compliant (minicor.com). These certifications represent non-trivial time and cost investments, particularly relevant for healthcare and financial services customers.
- **Self-healing accuracy:** Claimed 93–96% click accuracy vs. 80–85% for competitors (minicor.com). [Inferred]: If validated at scale, proprietary training data from production workflows across specific legacy systems could compound into a data advantage over time.
- **Switching costs:** On-premise containerized deployments within customer networks (minicor.com) create integration depth. [Inferred]: Once embedded in production workflows handling thousands of daily transactions, migration costs increase.

**Market structure:** UiPath ($13B+ market cap) and Automation Anywhere derive revenue from broad enterprise RPA suites. [Inferred]: Serving AI-company intermediaries (rather than end enterprises directly) is a different sales motion that incumbents' existing enterprise sales channels do not naturally reach; however, UiPath has shipped an AI Healing Agent feature (Auxis, 2026 via search snippet), indicating incumbents are moving toward self-healing capabilities.

**Commoditization risk:** Anthropic released its Computer Use API in public beta in October 2024 (Anthropic docs), and Claude Opus 4.6/Sonnet 4.6 support computer_20251124 tool versions (Anthropic docs). Any team with access to these APIs can build desktop automation. The open-source ecosystem (e.g., Browser Use) is also advancing. [Inferred]: Minicor's differentiation rests on the managed infrastructure layer (VMs, scaling, observability, compliance) rather than the AI model itself, which mitigates but does not eliminate commoditization risk.

## Market & Traction

**Traction signals:**
- Production deployment scale: "25,000 patients/day at same architecture scale" (minicor.com). Exact customer count not disclosed.
- "Thousands of workflows a week across healthcare EHRs and other legacy systems" (Minicor description via LinkedIn search snippet).
- Company Twitter/X: @minicor_ (YC page). Follower count not retrievable.
- LinkedIn: Company page exists (search results confirm). Follower count not retrievable.
- GitHub org: github.com/laminar-run — 5 public repositories (GitHub search snippet). Star counts not retrieved.
- Product Hunt: No listing found.
- No app store presence (desktop/server product).
- 0 open job postings on YC page.
- Founded 2024 (YC page).
- No press coverage in named publications found.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Minicor |
|-----------|---------|-------------------------------|
| **UiPath** | Public ($13B+ market cap) | Full enterprise RPA suite with broad workflow orchestration; recently added AI Healing Agent. Minicor is API-first for AI companies, not a full enterprise platform. (Auxis, 2026 via search snippet) |
| **Automat** (YC) | $19.25M total ($15.5M Series A led by Felicis; American Bazaar Online, Nov 2025) | General-purpose computer-operating agents across banking/B2B software. Minicor focuses on managed infrastructure for legacy desktop apps specifically. |
| **Automation Anywhere** | Private, Gartner #2 | Cognitive automation with AARI agents and IQ Bot. Enterprise-focused with broader process mining. Minicor targets the AI-company-as-customer segment. (Auxis, 2026 via search snippet) |
| **Microsoft Power Automate** | Microsoft subsidiary | Optimized for Microsoft-native environments with cost advantages in M365 stack. Limited capability for third-party legacy desktop apps without APIs. |
| **Decisional** (YC) | $125K from YC (Tracxn, 2025 via search snippet) | Natural-language self-healing automation for spreadsheets/workflows. Broader scope, less focused on legacy desktop systems. |

**Why now:** Anthropic released Computer Use in public beta in October 2024, making AI-driven desktop interaction commercially viable at the model layer (Anthropic docs). [Inferred]: This created a new infrastructure layer opportunity — the AI models can now "see" and interact with screens, but productionizing this for legacy enterprise systems requires managed VMs, compliance, observability, and self-healing orchestration that model APIs alone do not provide. Simultaneously, AI companies expanding into legacy industries (healthcare, automotive) need system-of-record integration that APIs cannot provide, creating demand-side pull.

## Founders & Team

**Faizaan Chishtie** — Co-Founder & CEO
- BASc from University of Ottawa (implied from co-founder overlap and Software For Love connection).
- Next 36 alum; Antler VC alum (inaugural cohort, Jan 2022) (LinkedIn search snippet).
- Previously Software Engineer at Phoenix (YC W21) (LinkedIn search snippet).
- Founder/Director at Software For Love, a non-profit software organization in Ottawa (Canadian federal corporation records via search snippet; LinkedIn).
- Twitter/X: @minicor_ (company account; personal handle not confirmed).
- LinkedIn: linkedin.com/in/fchishtie — "Minicor (YC X26)" headline (LinkedIn).
- GitHub: github.com/FaizChishtie — 49 repositories (GitHub). No repos with notable star counts found.

**Saheed Akinbile** — Co-Founder & CTO
- BASc Computer Software Engineering (Technology Management & Entrepreneurship option), University of Ottawa (2016–2020) (personal website, LinkedIn).
- Born and raised in Lagos, Nigeria (personal website via search snippet).
- Senior Software Engineer at Ford Motor Company (2022–2025) (LinkedIn).
- Previously at Morgan Stanley and Kinaxis (LinkedIn).
- Software For Love — Software Engineering Advisor (2020–2023) (LinkedIn).
- Built a lottery system in Nigeria and created a payment processor (LinkedIn search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/saheed-akinbile — "CTO & Co-Founder at Laminar | Ex-Morgan Stanley / Ex-Ford" (LinkedIn).
- GitHub: github.com/sakin070 — 43 repositories (GitHub). No repos with notable star counts found.

**Co-founder relationship:** Faizaan and Saheed met in 2019 in a UX class at the University of Ottawa, built Software For Love (non-profit) together during the pandemic, and began working on Minicor in 2023 (LinkedIn search snippet via Minicor company description). Both were affiliated with Software For Love in Ottawa.

**Founder-market fit:** Both founders started their careers building bespoke/legacy system integrations — Faizaan at Phoenix (YC W21) connecting systems together, and Saheed at Ford and Morgan Stanley working within large-enterprise legacy environments (LinkedIn). Their direct experience with the pain of legacy system integration in enterprises maps to Minicor's core problem. No advisors, board members, or notable angel investors found beyond YC Partner Tom Blomfield.

## Key Risks

**Platform dependency on frontier AI models:** Minicor's self-healing capability relies on computer-use AI models (likely Anthropic Claude or similar). Model API pricing changes, capability regressions, or rate limits could directly impact unit economics and reliability. Mitigant: deterministic code path with AI used only for recovery (minicor.com).

**Incumbent convergence:** UiPath has shipped an AI Healing Agent feature (Auxis, 2026 via search snippet), directly targeting the self-healing value proposition. UiPath's installed base of enterprise customers and existing integrations give it distribution advantages if its AI capabilities reach parity.

**Name collision / brand confusion:** "Minicor" shares a name with Utilicor's Minicor-3 coring attachment (equipment product) and NASA's MiniCOR coronagraph mission (ADS, 2024). The legal entity "Laminar Run, Inc." shares a namespace with at least two other YC-backed companies named "Laminar" (one in AI observability, YC S24; one in DeFi). This may cause confusion in search, media, and investor due diligence.

**Accuracy ceiling in production:** The claimed 93–96% click accuracy (minicor.com) means 4–7% of actions may fail. At scale (25,000 patients/day), this could produce hundreds of daily errors in sensitive contexts (healthcare records, financial data). Self-healing recovery loops must handle these reliably; failure in healthcare workflows carries regulatory and patient-safety implications.

**Narrow initial customer segment:** The current positioning targets AI companies that need legacy system access — a segment that is itself nascent. If AI-company adoption in legacy industries grows slowly, Minicor's addressable market in the near term may be constrained.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $28.31B in 2025, projected $247.34B by 2035 at 24.2% CAGR (Precedence Research, Dec 2025 via GlobeNewswire) |
| SAM | No public data found |
| Traction | "25,000 patients/day at same architecture scale" (minicor.com); "thousands of workflows a week" (Minicor LinkedIn description via search snippet); founded 2024 (YC page) |
| Revenue Signal | No public data found |
| Founders | Faizaan Chishtie (CEO): Next 36 alum, ex-Phoenix (YC W21), Software For Love founder. Saheed Akinbile (CTO): BASc U of Ottawa, ex-Ford Sr. SWE, ex-Morgan Stanley. |
| Competitors | UiPath (public, $13B+ mkt cap, revenue $1.3B+ ARR, full enterprise RPA suite vs. Minicor's API-first approach); Automat ($19.25M raised, revenue unknown, general computer-use agents vs. Minicor's legacy-desktop focus; American Bazaar Online, Nov 2025); Automation Anywhere (private, Gartner #2, revenue unknown, broad cognitive RPA vs. Minicor's AI-company segment); Decisional ($125K YC, revenue unknown, NL workflow agents vs. Minicor's managed desktop infra; Tracxn, 2025) |
| Moat Signals | SOC 2 Type II + HIPAA certifications (minicor.com); claimed 93–96% click accuracy (minicor.com) |
| Risk Factors | Incumbent convergence (UiPath AI Healing Agent), frontier model dependency, accuracy ceiling at scale |
| Founder Reach | Faizaan Chishtie: LinkedIn 500+ (LinkedIn), GitHub 49 repos (GitHub), Twitter count not retrievable. Saheed Akinbile: LinkedIn profile active (LinkedIn), GitHub 43 repos (GitHub), Twitter not found. |
| Distribution Signals | MCP integration for coding agents (YC page); demo booking via Calendly (YC page); no Product Hunt listing, no app store presence |
| Emails | connect@minicor.com (minicor.com), faiz@minicor.com (YC page) |
