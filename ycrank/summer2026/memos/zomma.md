# Zomma

> Computer Use Agents for back offices in finance

| Field | Value |
|-------|-------|
| Website | https://zommalabs.com |
| YC Page | https://www.ycombinator.com/companies/zomma |
| Batch | Summer 2026 |
| Industry | B2B / B2B |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Robotic Process Automation, Finance, B2B, Workflow Automation |
| YC Partner | Brad Flora |
| Emails | hello@zommalabs.com |

## The Idea

- **Problem:** Hedge funds, asset managers, and fintech firms perform repetitive manual screen work — logging into custodian portals, pulling reports, reconciling books, KYC refresh, filling investor forms — across legacy systems that will never expose APIs (YC page; zommalabs.com).
- **Approach:** Computer Use Agents that operate the same GUI screens ops teams use today, gated by an "Agent Trust Framework" providing scoped identity, approval chains, and SEC-ready audit trails before any action submits (zommalabs.com).
- **Differentiation:** Versus traditional RPA (UiPath, Automation Edge) Zomma uses vision-based LLM agents rather than brittle DOM scripts (zommalabs.com); versus finance-native LLM tools like Rogo and Hebbia (research/analysis focused per Hebbia comparison blog, 2026) Zomma targets operational execution across portals rather than document Q&A.
- **Business Model:** No pricing disclosed on the site — CTA is a "/call" demo request (zommalabs.com). [Inferred]: Enterprise per-agent or per-seat annual contracts, standard for finance ops automation given the SEC-audit-trail positioning targeting regulated buyers.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent RPA-in-banking is cited as a fast-ROI category especially for firms with 30+ ops/compliance staff (AutomationEdge, 2026).
- **GTM / Distribution:** [Inferred]: Founder-led direct enterprise sales to hedge funds/asset managers, based on the "/call" demo-only funnel, prior JPMorgan/Goldman/Arrowpoint team relationships (zommalabs.com), and inclusion in the 2026 Vercel AI Accelerator Cohort (Vercel blog, 2026) that provides infra distribution.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond a stated "Agent Trust Framework" with scoped permissions and audit trails (zommalabs.com); no customer count, retention, or proprietary data disclosed.
- **Future moat:** [Inferred]: Workflow-specific training data captured from hedge-fund portal interactions plus embedded human-approval logs could compound into a switching-cost moat, unproven now given no disclosed customers.
- **Market structure:** [Inferred]: Incumbent fund administrators (SS&C, iCapital, Juniper Square — cited in FundCount, 2026) monetize managed services and would cannibalize outsourced-ops revenue by shipping self-serve agents; classic services-vs-software conflict.
- **Commoditization risk:** Anthropic shipped 10 ready-to-run finance agent templates including KYC and month-end close in May 2026 and launched a $1.5B JV with Blackstone, Goldman Sachs, H&F to build an AI-native financial services firm (Fortune, May 2026; Anthropic news, May 2026), meaning the foundation model provider is directly competing in this workflow layer.

## Market & Traction

- **Traction signals:**
  - Backed by Y Combinator, Summer 2026 batch (YC page).
  - Selected for the 2026 Vercel AI Accelerator Cohort (Vercel blog, 2026).
  - Team described as ex-Goldman Sachs, JP Morgan, Apple, Arrowpoint, GovTech Singapore, Modern Intelligence (zommalabs.com).
  - Developer API integrations named for Hermes and Claude (zommalabs.com).
  - No revenue, customer count, Product Hunt launch, Twitter/LinkedIn follower counts, or press coverage found in public sources.
- **Competitors (adjacent set — direct GUI-agent-for-finance-ops competitors are few):**
  - Rogo ($160M Series D, TAMradar 2026; revenue unknown): finance-native agentic platform for investment banking research/deal workflows, not portal operations.
  - Hebbia (revenue unknown; used by 40%+ of largest asset managers by AUM per Hebbia site, 2026): document-analysis agent using ISD, not GUI operation.
  - Qurrent (funding unknown): autonomous AI BPO for CFO back-office ops with SLA-backed outcomes (XLR8 AI, 2026), overlaps on outcome delivery.
  - Anthropic Finance Agents ($1.5B JV, Fortune May 2026): 10 pre-built KYC/close/audit agent templates from the model vendor itself.
  - UiPath / AutomationEdge (public co / private, revenue unknown): incumbent RPA for KYC and reconciliation using script-based automation.
- **Why now:** [Inferred]: Vision-capable LLMs (Anthropic Computer Use released late 2024, OpenAI Operator early 2025) crossed the threshold for reliable multi-step GUI navigation, making non-API portal automation feasible for the first time — same catalyst cited by Anthropic's May 2026 finance push (Anthropic news, 2026).

## Founders & Team

- **Varun Arumugam (Co-founder):**
  - Background: UT Austin ECE per LinkedIn results; prior YC-backed founder with a stated exit and $10–12M in sales, ex-J.P. Morgan, previously signaled a Google SWE role (LinkedIn search snippet via search snippet).
  - Twitter/X: No public account found in searches.
  - LinkedIn: "making work feel less annoying @ …" (linkedin.com/in/varunarumugam, via search snippet).
  - GitHub: No public repos found.
- **Cashel Fitzgerald (Co-founder):**
  - Background: BS Cockrell/UT Austin, Cornell CS Master's, ML Engineer at Modern Intelligence (defense AI, Austin), prior SWE at AffiniPay, Favor, and Voyant (financial planning software) (ZoomInfo/LinkedIn via search snippet).
  - Twitter/X: No public account found.
  - LinkedIn: "Modern Intelligence" (linkedin.com/in/cashelfitzgerald, via search snippet).
  - GitHub: No public repos found.
- **Jihyun Kim (Co-founder):**
  - Background: No confirmed public profile disambiguated from other "Jihyun Kim" LinkedIn results; team page attributes ex-Goldman Sachs / Apple / Arrowpoint / GovTech Singapore backgrounds collectively (zommalabs.com).
  - Twitter/X: count not retrievable.
  - LinkedIn: No public profile found (disambiguation failed).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history; Varun and Cashel share UT Austin as an educational connection (LinkedIn snippets via search snippet).
- **Founder-market fit:** [Inferred]: Ex-JPMorgan (Arumugam) and finance-software SWE background at Voyant (Fitzgerald) provide direct exposure to the reconciliation/onboarding workflows Zomma targets; no advisors, board members, or lead investors beyond YC named in public sources.

## Key Risks

- **Foundation-model vendor encroachment:** Anthropic — whose Claude is named as a supported agent on Zomma's site (zommalabs.com) — shipped 10 finance agent templates including KYC and month-end close and launched a $1.5B financial-services JV with Goldman/Blackstone/H&F in May 2026 (Fortune, May 2026; Anthropic news, May 2026), directly overlapping Zomma's use cases with no mitigation disclosed.
- **Regulated-buyer sales cycle:** Hedge funds and asset managers require SEC-grade audit and vendor risk review, and Zomma's "Agent Trust Framework" is marketing copy with no SOC 2, ISO, or customer logos disclosed (zommalabs.com); founder finance backgrounds partially mitigate.
- **Technical feasibility of unattended GUI reliability:** Every action "stops for human approval before anything submits" (zommalabs.com), which caps labor-savings ROI versus fully-autonomous alternatives and reflects current limits of computer-use agents on legacy custodian portals.
- **No disclosed traction:** No customers, revenue, waitlist, or press coverage were located in public sources at the time of research, leaving GTM velocity unverified.
- **Name disambiguation:** "Zomma Group LLP" (Coral Gables CPA firm) and unrelated "Jihyun Kim" LinkedIn profiles surface in searches (LinkedIn results), risking SEO confusion and founder-profile mis-identification.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC Summer 2026 backing (YC page); 2026 Vercel AI Accelerator Cohort (Vercel blog, 2026); team ex-Goldman/JPMorgan/Apple/Arrowpoint/GovTech Singapore/Modern Intelligence (zommalabs.com) |
| Revenue Signal | No public data found (no pricing page; "/call" demo CTA only, zommalabs.com) |
| Founders | Varun Arumugam (Co-founder): UT Austin ECE, prior YC founder with exit, ex-JPMorgan. Cashel Fitzgerald (Co-founder): UT Austin BS + Cornell CS MS, ML Engineer at Modern Intelligence, prior Voyant/AffiniPay/Favor SWE. Jihyun Kim (Co-founder): profile not disambiguated in public sources. |
| Competitors | Rogo ($160M Series D, revenue unknown, IB research agents not GUI ops); Hebbia (funding undisclosed here, revenue unknown, document analysis for 40%+ of largest AMs); Qurrent (funding unknown, revenue unknown, CFO back-office BPO with SLAs); Anthropic Finance Agents ($1.5B JV, revenue unknown, 10 pre-built KYC/close templates); UiPath / AutomationEdge (public/private, revenue unknown, script-based RPA for KYC/reconciliation) |
| Moat Signals | No public data found beyond stated "Agent Trust Framework" with scoped identity and audit trails (zommalabs.com) |
| Risk Factors | Foundation-model vendor encroachment (Anthropic finance agents + $1.5B JV, May 2026); regulated-buyer sales cycle with no security certs disclosed; no disclosed customer/revenue traction |
| Founder Reach | Varun Arumugam: Twitter not found, LinkedIn present (count not retrievable), GitHub not found. Cashel Fitzgerald: Twitter not found, LinkedIn present (count not retrievable), GitHub not found. Jihyun Kim: No public data found. |
| Distribution Signals | 2026 Vercel AI Accelerator Cohort (Vercel blog, 2026); YC S26 directory listing (YC page); no Product Hunt, Chrome Web Store, or app-store presence found |
| Emails | hello@zommalabs.com (zommalabs.com) |

Sources:
- [Zomma company site](https://zommalabs.com/)
- [Y Combinator — Zomma](https://www.ycombinator.com/companies/zomma)
- [2026 Vercel AI Accelerator Cohort](https://vercel.com/blog/2026-vercel-ai-accelerator-cohort)
- [Cashel Fitzgerald LinkedIn](https://www.linkedin.com/in/cashelfitzgerald/)
- [Varun Arumugam LinkedIn](https://www.linkedin.com/in/varunarumugam/)
- [Anthropic — Agents for financial services](https://www.anthropic.com/news/finance-agents)
- [Fortune — Anthropic Wall Street push](https://fortune.com/2026/05/05/anthropic-wall-street-financial-services-agents-jamie-dimon/)
- [Rogo Series D — TAMradar](https://www.tamradar.com/funding-rounds/rogo-series-d-160m)
- [Hebbia — Rogo competitors](https://www.hebbia.com/resources/rogo-competitors)
- [XLR8 AI — Autonomous Agent Platforms for Back-Office Ops](https://tryxlr8.ai/blogs/top-autonomous-ai-agent-platforms-back-office-ops)
- [AutomationEdge — RPA in banking 2026](https://automationedge.com/blogs/top-rpa-use-cases-in-banking-industry-in-2026/)
