# Lab0

> Automated forward-deployed engineers (AI FDEs)

| Field | Value |
|-------|-------|
| Website | https://lab0.ai |
| YC Page | https://www.ycombinator.com/companies/lab0 |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Enterprise, Enterprise Software, AI |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

## The Idea

- **Problem:** Enterprise software rollouts (ERP, AI systems) require months of manual integration, configuration, and tuning by armies of system integrators and forward-deployed engineers (YC company page, 2026).
- **Approach:** Agentic AI FDE that automates entire post-sales delivery — joins discovery calls, generates handoffs/design docs/test plans, configures the product, writes custom integrations, and tests workflows before sign-off (lab0.ai / YC page, 2026).
- **Differentiation:** [Inferred]: Versus traditional SI firms (Accenture, Deloitte, Infosys) the difference is automated vs. human-labor delivery; versus OpenAI Deployment Company (acquired Tomoro with ~150 FDEs, OpenAI, 2026) the difference is multi-vendor SI-style automation rather than first-party LLM deployment.
- **Business Model:** No pricing data found on lab0.ai (WebFetch, May 2026); [Inferred]: enterprise SaaS / per-implementation contract sold to ISVs and system integrators given current Adobe + SI partnerships (YC page, 2026).
- **TAM/SAM:** System integration market $451.6B in 2024 projected to $847.5B by 2033 at 6.88% CAGR (Fortune Business Insights, 2024); narrower Enterprise Application Integration segment $17.67B in 2025 → $36.56B by 2030 at 15.65% CAGR (Mordor Intelligence, 2025).
- **GTM / Distribution:** Direct partnerships with software vendors and system integrators — currently working with Adobe and "a couple of system integrators" (YC company description, via search snippet, 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond early enterprise pilot with Adobe (YC page, 2026).
- **Future moat:** [Inferred]: Continuous learning from every rollout could accumulate proprietary configuration data across ERP/CRM/AI deployments (lab0.ai product description, 2026); unproven because the dataset has not been disclosed and the company has 3 employees (YC page, 2026).
- **Market structure:** [Inferred]: Incumbent SIs (Accenture, Deloitte) face revenue cannibalization — their billable-hours model depends on the manual labor Lab0 automates, creating a sales-channel/business-model conflict if they adopt similar tooling.
- **Commoditization risk:** OpenAI launched the OpenAI Deployment Company and acquired Tomoro to embed ~150 FDEs at enterprises (OpenAI announcement, 2026); foundation-model labs and large SIs could ship overlapping agentic implementation tooling.

## Market & Traction

- **Traction signals:**
  - Customer/pilot: working with Adobe and "a couple of system integrators" (YC page, via search snippet, 2026).
  - Twitter (company @lab0_ai): handle confirmed (YC page, 2026); follower count not retrievable.
  - LinkedIn (company /lab0-hq, "Lab0 (YC P26)"): handle confirmed (LinkedIn search result, 2026); follower count not retrievable.
  - No Product Hunt launch found (WebSearch, May 2026).
  - No press coverage found in named publications (WebSearch, May 2026).
  - Hiring: company listed as not hiring (company_data field, 2026).
- **Competitors:**
  - OpenAI Deployment Company (parent OpenAI, valuation undisclosed for this unit; acquired Tomoro with ~150 FDEs, OpenAI, 2026): first-party LLM deployment arm vs. Lab0's vendor-agnostic SI automation.
  - Accenture (public, ~$64B revenue FY2024, public filings): human-labor SI at global scale vs. Lab0's agentic automation.
  - Deloitte / Infosys / TCS (revenue unknown for this specific service line): traditional ERP/SaaS implementation services vs. Lab0's automated delivery.
  - Rocketlane (revenue unknown publicly, raised ~$45M total per prior coverage via search snippet): customer-onboarding/PSA software for implementation teams vs. Lab0 replacing the engineering work itself.
  - Modal ($355M Series C, $4.65B valuation, ~$300M ARR run rate, May 2026, via search snippet): AI infrastructure adjacent, not direct.
- **Why now:** [Inferred]: Agentic coding models crossed a usability threshold in 2025-2026 (evidenced by OpenAI's Deployment Company launch and Google Cloud FDE hiring push, MarkTechPost, May 2026) enabling automation of implementation work previously requiring human FDEs.

## Founders & Team

- **Onkar Borade (Co-founder):**
  - Background: CS, IIT Bombay (2024); prior experience at Oracle where "the implementation team was bigger than the dev team" — origin of the problem insight; also InvoicEase, Hostel 17, Resoenix (WebSearch, 2026).
  - Twitter/X: @onkar_borade_10 (YC page, 2026); follower count not retrievable.
  - LinkedIn: "Lab0 (YC P26)" (linkedin.com/in/onkar-borade, 2026).
  - GitHub: No public repos found.
- **Lakshya Gupta (Co-founder):**
  - Background: CS, IIT Bombay; early engineer at Emergent Labs where he reportedly scaled the Agent platform from 0 to $100M ARR with 5M+ users (WebSearch snippet, 2026).
  - Twitter/X: @heat_bender (YC page, 2026); follower count not retrievable.
  - LinkedIn: profile confirmed (linkedin.com/in/lakshyagupta-, 2026); headline not retrievable.
  - GitHub: No public repos found.
- **Sujay Srivastava (Co-founder):**
  - Background: Quantum computing, IIT Madras; previously building an AI startup for BFSI "where every rollout felt like its own custom project" (WebSearch snippet, 2026).
  - Twitter/X: @SujaySriv (YC page, 2026); follower count not retrievable.
  - LinkedIn: "Co-founder, Lab0 (YC P26)" (linkedin.com/in/sujaysriv, 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** [Inferred]: Two of three founders (Borade, Gupta) hold CS degrees from IIT Bombay (WebSearch, 2026); no public statement on the specific shared lab/cohort.
- **Founder-market fit:** Borade observed the implementation-vs-dev headcount imbalance at Oracle and Srivastava lived custom BFSI rollouts; Gupta scaled an agent platform at Emergent Labs (WebSearch snippets, 2026) — combining direct enterprise-implementation pain with agentic-platform engineering experience.

## Key Risks

- **Hyperscaler/foundation-model substitution:** OpenAI launched the OpenAI Deployment Company and acquired Tomoro (~150 FDEs) to provide first-party deployment services (OpenAI, 2026); Google Cloud is also "doubling down on FDEs" (MarkTechPost, May 2026), creating direct substitution risk for Lab0's vendor-agnostic offering.
- **Customer concentration / pilot-to-revenue gap:** Only one named customer (Adobe) plus unnamed SIs are public (YC page, 2026); no disclosed contracted ARR or paid pilots found in public sources.
- **Technical feasibility at enterprise scale:** Automating "discovery → solution design → config → testing → go-live" across heterogeneous ERPs/CRMs is unproven at the autonomy level described on lab0.ai (May 2026); no public benchmark or case study found.
- **Channel conflict with SIs:** Lab0's stated buyer set includes system integrators whose core revenue model is the billable hours Lab0 automates; sustainable SI distribution requires aligning incentives ([Inferred] from product positioning, lab0.ai, 2026).
- **Name disambiguation:** "Lab0"/"Lab Zero" returns unrelated entities (e.g., Lab Zero Games); cross-checked all data points against founder names and YC URL.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | System integration market $451.6B (2024) → $847.5B by 2033, 6.88% CAGR (Fortune Business Insights, 2024) |
| SAM | Enterprise Application Integration $17.67B (2025) → $36.56B by 2030, 15.65% CAGR (Mordor Intelligence, 2025) |
| Traction | Working with Adobe and "a couple of system integrators" (YC page, 2026); no Product Hunt, no press in named publications found |
| Revenue Signal | No public data found |
| Founders | Onkar Borade (Co-founder): IIT Bombay CS 2024, ex-Oracle. Lakshya Gupta (Co-founder): IIT Bombay CS, ex-early engineer at Emergent Labs. Sujay Srivastava (Co-founder): IIT Madras quantum computing, prior BFSI AI startup. |
| Competitors | OpenAI Deployment Company (parent OpenAI, acquired Tomoro ~150 FDEs, first-party LLM deployment); Accenture (public, ~$64B FY2024 revenue, manual-labor SI); Rocketlane (~$45M raised per search snippet, revenue unknown, customer-onboarding PSA); Deloitte/TCS/Infosys (revenue for service-line unknown, traditional ERP/SaaS implementation) |
| Moat Signals | No public data found |
| Risk Factors | Hyperscaler substitution (OpenAI Deployment Company), SI channel conflict, technical feasibility at enterprise scale |
| Founder Reach | Onkar Borade: Twitter @onkar_borade_10 (count not retrievable), LinkedIn confirmed, GitHub none found. Lakshya Gupta: Twitter @heat_bender (count not retrievable), LinkedIn confirmed, GitHub none found. Sujay Srivastava: Twitter @SujaySriv (count not retrievable), LinkedIn confirmed, GitHub none found. |
| Distribution Signals | Company Twitter @lab0_ai (YC page, 2026); LinkedIn company page /lab0-hq (LinkedIn, 2026); direct enterprise partnership with Adobe (YC page, 2026) |
| Emails | No public data found |

Sources:
- [Lab0 YC Company Page](https://www.ycombinator.com/companies/lab0)
- [lab0.ai](https://lab0.ai/)
- [Onkar Borade LinkedIn](https://www.linkedin.com/in/onkar-borade/)
- [Lakshya Gupta LinkedIn](https://www.linkedin.com/in/lakshyagupta-/)
- [Sujay Srivastava LinkedIn](https://www.linkedin.com/in/sujaysriv/)
- [Lab0 LinkedIn Company](https://www.linkedin.com/company/lab0-hq)
- [Fortune Business Insights — System Integration Market](https://www.fortunebusinessinsights.com/industry-reports/system-integration-market-101432)
- [Mordor Intelligence — Enterprise Application Integration](https://www.mordorintelligence.com/industry-reports/enterprise-application-integration-market)
- [OpenAI Deployment Company](https://openai.com/index/openai-launches-the-deployment-company/)
- [MarkTechPost — Forward Deployed Engineer 2026](https://www.marktechpost.com/2026/05/20/what-is-a-forward-deployed-engineer-the-ai-role-openai-anthropic-and-google-are-hiring-in-2026/)
