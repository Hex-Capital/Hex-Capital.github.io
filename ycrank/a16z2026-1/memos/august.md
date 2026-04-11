# August

> AI software to run an autonomous bank; $800K ARR in 3 months

| Field | Value |
|-------|-------|
| Website | https://tryaugust.com |
| YC Page | https://speedrun.a16z.com/companies/august |
| Batch | No public data found |
| Industry | AI, Fintech, B2B / |
| Team Size | 3 |
| Location | Tel Aviv, Israel |
| Tags | AI, Fintech, B2B |
| YC Partner | Not listed (a16z Speedrun page returned 404 at time of research) |
| Emails | bar@tryaugust.com, tom@tryaugust.com |

## The Idea

**Problem:** Commercial banks rely on fragmented, manual workflows for underwriting, loan servicing, risk assessment, and compliance. These processes are labor-intensive and spread across legacy systems. [Inferred]: The primary customer segment is mid-to-large commercial banks whose operating costs are dominated by human-intensive credit and risk workflows.

**Approach:** August provides domain-specific AI that converts core banking operations—underwriting, servicing, and risk—into software-automated workflows (a16z Speedrun profile). The company describes itself as "the platform where banking work runs" (a16z Speedrun profile). The website tagline is "Powering banks of the future" and "Banking's last piece of software" (tryaugust.com, fetched Apr 2026). Usage of the platform compounds a "proprietary context layer," meaning the system accumulates bank-specific knowledge over time (a16z Speedrun profile).

**Differentiation:** Unlike horizontal AI copilots (e.g., general-purpose LLM assistants), August is purpose-built for commercial banking operations. Compared to nCino, which is built on Salesforce and focuses on loan origination workflow management (Backbase blog, 2026 via search snippet), August positions itself as an "autonomous" AI layer across multiple banking functions rather than a workflow tool for a single function. Compared to Temenos or Backbase, which are broad digital banking platforms, August targets the operational work layer specifically (underwriting, servicing, risk) rather than core banking infrastructure or customer-facing digital channels. [Inferred]: The closest positioning is a vertical AI agent for the bank back-office, distinct from front-end digital banking platforms.

**Business Model:** No pricing page was found on tryaugust.com. The company claims $800K ARR achieved in 3 months (a16z Speedrun profile). [Inferred]: Most likely monetization is enterprise SaaS contracts with large commercial banks, potentially consumption-based or per-workflow pricing given the operational nature of the product.

**TAM/SAM:**
- Global AI in banking market: $34.58B in 2025, projected to reach $379.41B by 2034, ~32% CAGR (Precedence Research via search snippet).
- AI agents in financial services: $1.79B in 2025, projected to $6.54B by 2035 (Precedence Research via search snippet).
- No public SAM data found for AI-specific commercial banking operations software.

**GTM / Distribution:** The company reports deployment at a "$170B+ bank" with "pipeline growing" (a16z Speedrun profile). [Inferred]: GTM is direct enterprise sales to large commercial banks, likely leveraging the founding team's Israeli fintech network and the initial $170B+ bank deployment as a reference customer.

## Defensibility

- **Proprietary context layer:** The company explicitly states that "usage compounds a proprietary context layer" (a16z Speedrun profile), suggesting a data flywheel where each deployment accumulates bank-specific operational knowledge that improves the AI over time.
- **Domain complexity:** Commercial banking underwriting and risk operations are governed by dense regulatory frameworks and institution-specific policies. [Inferred]: Building domain-specific AI for this vertical requires deep banking domain expertise and prolonged integration work, creating switching costs once deployed.
- **Early enterprise deployment:** Being deployed at a $170B+ bank (a16z Speedrun profile) provides access to real-world operational data that is difficult for competitors to replicate without equivalent enterprise relationships.

**Market structure:** Large incumbents (Temenos, FIS, Fiserv) own core banking infrastructure but their business models center on transaction processing and core ledger systems. [Inferred]: Building an AI-native autonomous operations layer could cannibalize the professional services revenue these incumbents earn from manual processes, creating a business model conflict. nCino is built on Salesforce (Backbase blog, 2026 via search snippet), which constrains its AI architecture to Salesforce's platform limitations.

**Commoditization risk:** General-purpose AI providers (OpenAI, Anthropic, Google) could enable banks to build in-house solutions. Horizontal enterprise AI platforms could also extend into banking. However, the regulatory domain knowledge, banking-specific workflow logic, and integration complexity create meaningful barriers to generic solutions. A Q1 2026 Accenture survey found only 23% of banking executives have moved AI beyond pilot programs into production (Backbase, 2026 via search snippet), suggesting execution difficulty in this vertical.

## Market & Traction

**Traction signals:**
- $800K ARR reached within 3 months of operations (a16z Speedrun profile).
- Deployed at a $170B+ bank (a16z Speedrun profile).
- "Pipeline growing" (a16z Speedrun profile).
- Company website (tryaugust.com) is live but minimal—no feature pages, pricing, or detailed product information visible at time of research.
- No Product Hunt launch found.
- No Twitter/X company account found.
- No LinkedIn company page found in search results.
- No Discord/Slack community found.
- No app store or Chrome extension presence found.
- No press coverage in named publications found.
- No job postings found.

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. August |
|-----------|---------|---------|-------------------------------|
| **nCino** | Public (IPO 2020) | $500M+ revenue (public filings) | Salesforce-based commercial lending workflow platform; focuses on loan origination rather than autonomous AI across multiple banking functions (Backbase blog, 2026 via search snippet) |
| **Heron Finance** | $16M Series A (Insight Partners, Jul 2025) (PR Newswire, Jul 2025 via search snippet) | Revenue unknown; 150+ customers, 350K docs/week (PR Newswire, Jul 2025 via search snippet) | AI workflow automation for business lending and insurance; broader than banking-only but less deep in commercial bank operations |
| **Numerated** | $32M total (acquired by Moody's, Nov 2024) (Tracxn via search snippet) | Revenue unknown | Data-driven commercial lending automation; now part of Moody's analytics ecosystem rather than standalone |
| **FundMore.ai** | Funding amount not confirmed | Revenue unknown; 1,504% three-year revenue growth (Globe and Mail, 2025 via search snippet) | AI underwriting automation focused on mortgage/consumer lending in Canada; less focused on full commercial banking operations |

**Why now:**
- A Q1 2026 Accenture survey found 91% of banking executives consider AI a strategic priority (Backbase, 2026 via search snippet), indicating strong demand pull.
- [Inferred]: The catalyst is the maturation of large language models in 2023-2025 enabling domain-specific AI systems that can handle the unstructured document processing and reasoning required in commercial banking (credit memos, financial statements, risk assessments). Prior rule-based automation could not handle the complexity and variability of these workflows.
- Global fintech investment rose 21% in 2025 to $53B across 5,918 deals (fintech.global, Jan 2026 via search snippet).

## Founders & Team

**Bar Ittah** — Co-Founder & CEO
- Award-winning ex-Unit 8200 officer (a16z Speedrun profile).
- Founding team at Xperiti, an AI-powered B2B research platform acquired by Ipsos in February 2023 (PR Newswire, Feb 2023 via search snippet). Xperiti was founded in 2019 and focused on fraud prevention infrastructure (a16z Speedrun profile).
- First employee at OnFire AI, which raised $20M in seed/Series A co-led by Grove Ventures and TLV Partners (TechCrunch, Oct 2025). Built the AI evaluation team and scaled growth across the US and Europe (a16z Speedrun profile).
- Education: The College of Management Academic Studies (LinkedIn via search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/bar-ittah — listed as "Product Manager - Stealth Startup" at time of search (LinkedIn via search snippet).
- GitHub: No public repos found.

**Tom Tankilevitch** — Co-Founder & CTO
- Ex-Unit 8200 / IDF: served as MLOps Engineer, Data Architect, and Oracle DBA (Feb 2018–Nov 2021) (The Org via search snippet). Built the "AI backbone of a national intelligence unit" (a16z Speedrun profile).
- Backend Engineer at Iguazio (Nov 2021–Jul 2023), an MLOps platform acquired by McKinsey for ~$50M in January 2023 (TechCrunch, Jan 2023 via search snippet; Calcalist via search snippet).
- Software Team Lead at Port (Jul 2023–onwards), which raised $158M total at an $800M valuation, Series C led by General Atlantic (TechCrunch, Dec 2025 via search snippet). Led ~20-person engineering group building AI infrastructure (a16z Speedrun profile).
- Twitter/X: @ptankilevitch found but unconfirmed; count not retrievable.
- LinkedIn: linkedin.com/in/tanki — 500+ connections (LinkedIn via search snippet).
- GitHub: No public repos found.

**Co-founder relationship:** Both founders served in IDF Unit 8200, though specific overlapping dates are not confirmed from public sources. Both are based in Israel's tech ecosystem. Tom's employer Port listed OnFire AI (Bar's employer) as an early customer (TechCrunch, Oct 2025 via search snippet), suggesting possible professional network overlap.

**Founder-market fit:** Both founders have direct experience building and deploying AI systems in high-stakes, data-intensive environments—military intelligence (Unit 8200) and enterprise AI infrastructure (Iguazio/McKinsey, Port, OnFire AI). Bar Ittah's experience scaling fraud prevention infrastructure at Xperiti is directly relevant to financial services risk operations. Tom Tankilevitch's background leading AI infrastructure engineering at Port ($800M valuation) and Iguazio (acquired by McKinsey) provides technical depth in ML deployment at scale. Both founders have been part of successful exits (Xperiti → Ipsos; Iguazio → McKinsey).

## Key Risks

**Single-customer concentration:** The only named deployment is at one $170B+ bank (a16z Speedrun profile). Revenue concentration in a single large enterprise customer creates fragility—loss of that account would represent a significant portion of the reported $800K ARR.

**Name ambiguity:** "August" is an extremely common word, making SEO, brand discovery, and investor research difficult. Web searches return unrelated results (smart locks, calendar month references, other companies). This complicates inbound marketing and press discoverability.

**Regulatory and compliance risk in banking AI:** Autonomous AI decision-making in underwriting and risk assessment faces evolving regulatory scrutiny (e.g., EU AI Act, US OCC/FDIC guidance on model risk management). Banks may face internal compliance barriers to deploying AI-driven underwriting that limits adoption velocity.

**Geopolitical risk for Israel-based fintech:** The company is headquartered in Tel Aviv while targeting global commercial banks. Geopolitical tensions in the Middle East could affect enterprise sales cycles, particularly with risk-averse banking institutions subject to board-level scrutiny of vendor geography.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $34.58B in 2025, projected $379.41B by 2034, ~32% CAGR (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | $800K ARR in 3 months (a16z Speedrun profile); deployed at $170B+ bank (a16z Speedrun profile); "pipeline growing" (a16z Speedrun profile) |
| Revenue Signal | $800K ARR in 3 months (a16z Speedrun profile) |
| Founders | Bar Ittah (CEO): ex-8200, Xperiti founding team (acq. Ipsos 2023), 1st employee OnFire AI ($20M raised). Tom Tankilevitch (CTO): ex-8200, Iguazio (acq. McKinsey 2023), engineering lead Port ($158M raised, $800M val). |
| Competitors | nCino (public, $500M+ rev, Salesforce-based lending workflow); Heron ($16M Series A, revenue unknown, AI lending workflow); Numerated ($32M raised, acq. by Moody's Nov 2024, commercial lending AI); FundMore.ai (funding unknown, 1,504% 3yr rev growth, AI mortgage underwriting) |
| Moat Signals | Proprietary context layer compounding with usage (a16z Speedrun profile); deployed at $170B+ bank (a16z Speedrun profile) |
| Risk Factors | Single-customer concentration, name ambiguity / discoverability, banking AI regulatory scrutiny |
| Founder Reach | Bar Ittah: Twitter not found, LinkedIn linkedin.com/in/bar-ittah. Tom Tankilevitch: Twitter @ptankilevitch (unconfirmed), LinkedIn linkedin.com/in/tanki. No public GitHub repos found for either founder. |
| Distribution Signals | No public data found |
| Emails | bar@tryaugust.com, tom@tryaugust.com (a16z Speedrun profile) |
