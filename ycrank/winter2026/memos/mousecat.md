# MouseCat

> The AI Toolkit for Risk Teams

| Field | Value |
|-------|-------|
| Website | https://www.mousecat.ai |
| YC Page | https://www.ycombinator.com/companies/mousecat |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | New York, NY, USA |
| Tags | Artificial Intelligence, Fintech, Fraud Detection |
| YC Partner | Jared Friedman (YC company page) |
| Emails | No public data found |

## The Idea

**Problem:** Fraud and risk teams at financial institutions face a growing volume of AI-enabled fraud. Current workflows require analysts to manually investigate cases across disparate data sources, then hand off findings to ML/data science teams who must separately build rules and models for production deployment. This investigation-to-production loop is slow and resource-intensive. Existing tools tend to stop at recommendations or alerts, requiring manual implementation of rules and models (mousecat.ai).

**Approach:** MouseCat provides AI agents that automate the full fraud investigation lifecycle — from initial case research (connecting disparate data sources, analyzing websites and social graphs) through to generating production-ready rules, models, and decisions. For risk operations, the platform automates research into users and businesses, draws connections between data sources, and produces explainable decisions with complete audit logs. For ML/data science teams, it extracts features from unstructured data, automatically explores and backtests new features and rules, and generates synthetic labels before ground-truth data arrives (mousecat.ai). The platform integrates with data infrastructure providers (Databricks, Snowflake) and identity/compliance vendors (Middesk, Sardine, Socure, Persona, Ekata, LexisNexis, Seon) (mousecat.ai). On-premise deployment is available, with customer data remaining in the client environment (mousecat.ai).

**Differentiation:** MouseCat's stated differentiator is closing the loop from investigation to production rules, models, and decisions — whereas competitors typically stop at recommendations requiring manual implementation (mousecat.ai). Compared to Sardine or Feedzai, which are full-stack fraud platforms serving enterprise customers with established rule engines, MouseCat positions as an AI-native toolkit that augments existing risk team workflows rather than replacing them. Compared to Unit21's no-code rule-building approach, MouseCat emphasizes automated ML feature extraction and synthetic label generation. Compared to Inscribe, which focuses specifically on document fraud, MouseCat covers broader fraud typologies including KYB, ATO, and payments fraud (mousecat.ai).

**Business Model:** No public pricing page was found; the website features "Book a demo" CTAs throughout, indicating a sales-led enterprise model (mousecat.ai). [Inferred]: Most likely monetization path is a SaaS subscription (annual contract, possibly consumption-based or tiered by volume of investigations/decisions processed), typical for B2B fraud infrastructure sold to risk teams.

**TAM/SAM:** The global AI in fraud management market was valued at $14.72 billion in 2025 and is projected to reach $65.35 billion by 2034 at a CAGR of 18.06% (Precedence Research, 2025 via search snippet). The broader fraud detection and prevention market is projected to grow from $32 billion in 2025 to $65.68 billion by 2030 at a CAGR of 15.5% (MarketsandMarkets, 2025 via search snippet). No public SAM estimate specific to MouseCat's segment (AI investigation-to-production tooling for risk teams) was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to fraud/risk teams at fintechs and financial institutions, starting with mid-market companies where the pain of manual investigation workflows is acute but budgets for large enterprise platforms (Feedzai, Sardine) are constrained. The integrations with compliance vendors and data platforms suggest a land-and-expand strategy through existing vendor ecosystems.

## Defensibility

MouseCat's CEO Nicholas Aldridge is a core maintainer of the Model Context Protocol (MCP) and contributed to the Agent2Agent protocol (LinkedIn post by Nicholas Aldridge, 2026). This positions the team at the frontier of AI agent infrastructure standards. The platform's on-premise deployment option and integration with customer data environments create switching costs once embedded in a risk team's workflow (mousecat.ai). The feedback loop from investigations to production rules could generate proprietary data advantages over time as the system learns from each customer's fraud patterns.

**Market structure:** Large incumbent fraud platforms (Feedzai, NICE Actimize, FICO) sell full-stack solutions to enterprise compliance and fraud teams. Their product architecture and go-to-market are oriented around replacing existing workflows end-to-end. [Inferred]: A toolkit approach that augments existing workflows — rather than requiring wholesale platform replacement — may face less direct sales channel conflict with incumbents. However, no structural barrier (regulatory, IP, or business model) was identified that would prevent incumbents from building similar AI investigation agents as add-on features.

**Commoditization risk:** The core capability — AI agents conducting fraud investigations and generating rules — could be replicated by well-funded competitors with access to LLM infrastructure and fraud domain expertise. Sardine ($145M raised), Feedzai ($347M raised), and DataVisor ($94.5M+ raised) all have resources and domain knowledge to build overlapping features. Open-source LLM agent frameworks lower the barrier to building investigation agents. The defensibility would depend on the depth of domain-specific fine-tuning, integration density with customer data environments, and accumulated investigation feedback data.

## Market & Traction

**Traction signals:**
- Y Combinator Winter 2026 batch member (YC company page)
- 2nd highest-rated company of the YC W26 product showcase (Nicholas Aldridge LinkedIn, via search snippet)
- Nicholas Aldridge's departure announcement from AWS received 654 likes and 66 comments on LinkedIn (LinkedIn post, 2026)
- Company Twitter/X: @MouseCatAI — follower count not retrievable
- Company LinkedIn: linkedin.com/company/mousecat — follower count not retrievable
- Company GitHub: github.com/MouseCatAI — no public repositories (GitHub, accessed March 2026)
- W26 Demo Day scheduled for March 24, 2026 (YC website)
- No public revenue, user counts, or customer names found
- No Product Hunt launch found
- No press coverage in named publications found

**Competitive landscape:**

| Competitor | Key Differentiator vs. MouseCat | Funding | Revenue/ARR |
|---|---|---|---|
| **Sardine** | Full-stack AI risk platform for fraud, credit, and compliance; real-time transaction scoring; 70+ country coverage | $145M total; $70M Series C (Feb 2025, Crunchbase) | 130% YoY ARR growth in 2024; $660M valuation (BusinessWire, Feb 2025) |
| **Feedzai** | Enterprise-scale platform processing 70B events/year; $8T in payments secured; digital euro ECB contract | $347M total; $75M Series E (Oct 2025, SiliconAngle) | ~$123.8M revenue (ZoomInfo via search snippet); $2B valuation |
| **DataVisor** | Patented unsupervised ML (UML) technology; unified fraud & AML; Forrester Wave Leader (AML, Q2 2025) | $94.5M+ total (Tracxn via search snippet) | ~$35M revenue (Tracxn, Jun 2025 via search snippet) |
| **Inscribe** | Specialized in AI document fraud detection for banks and lenders; YC alumnus | $38M total; $25M Series B (TechCrunch, Jan 2023) | 3x YoY ARR growth reported in 2022 (Inscribe blog) |
| **Unit21** | No-code platform for risk & compliance operations; 200 customers in 90 countries | $92M total (Tracxn via search snippet) | Revenue not disclosed |

**Why now:** [Inferred]: Several converging factors opened this opportunity in 2024-2025: (1) Generative AI and LLM agents reached sufficient capability to automate complex, multi-step investigation workflows that previously required senior human analysts; (2) AI-enabled fraud attacks (synthetic identities, deepfakes, automated social engineering) have accelerated, increasing case volumes beyond what manual teams can handle — 74% of senior fraud leaders cite AI-driven fraud as a top threat (DataVisor report, 2025 via search snippet); (3) The maturation of agent protocols (MCP, Agent2Agent) provides standardized infrastructure for building AI agents that can interact with multiple data sources and tools programmatically.

## Founders & Team

**Nicholas Aldridge** — Co-founder & CEO
- 6.5 years as Principal Engineer at AWS AI; helped launch and lead Amazon Bedrock Knowledge Bases, Agents, and AgentCore (LinkedIn, mousecat.ai)
- Core maintainer of the Model Context Protocol (MCP); contributed to the Agent2Agent protocol alongside David Soria Parra and Todd Segal (LinkedIn post, 2026)
- Presented at the MCP Developers Summit on multi-agent collaboration strategies (Geeky Gadgets via search snippet)
- Education: University of Chicago (LinkedIn via search snippet)
- Twitter/X: No personal account found; company account @MouseCatAI
- LinkedIn: [linkedin.com/in/nicholas-aldridge-341162a4](https://www.linkedin.com/in/nicholas-aldridge-341162a4/) — headline "Co-Founder & CEO at MouseCat (YC W26)"
- GitHub: No personal public repos found

**Joseph McAllister** — Co-founder & CTO
- 4 years at Coinbase as Senior ML Engineer on the ML Platform team; built ML and risk infrastructure, focusing on streaming systems, large-scale data processing, ATO and ACH risk models (LinkedIn, mousecat.ai)
- Previously Software Engineer at Microsoft on Azure Data Factory (josephmcallister.com)
- Founded Roo Storage while at Cornell; acquired by Handled in 2020 (Crunchbase via search snippet, josephmcallister.com)
- Education: BS Computer Science, Cornell University (josephmcallister.com)
- Twitter/X: No personal account found
- LinkedIn: [linkedin.com/in/joseph-mcallister](https://www.linkedin.com/in/joseph-mcallister/) — headline "Coinbase" (at time of research)
- GitHub: [github.com/joseph-mcallister](https://github.com/joseph-mcallister) — 32 public repos, 15 followers; projects include smart-shell (1 star), trailcam, hello-pi (GitHub)

**Co-founder relationship:** Aldridge described McAllister as a "long-time friend" in his LinkedIn departure announcement (LinkedIn post, 2026). No shared employer or university overlap is visible from the data gathered (Aldridge: University of Chicago / AWS; McAllister: Cornell / Coinbase / Microsoft).

**Founder-market fit:** Aldridge brings deep AI/ML infrastructure expertise from building the core agent and knowledge base products at AWS (Bedrock), and his role as an MCP core maintainer places him at the center of the AI agent ecosystem that MouseCat leverages. McAllister brings direct fraud domain expertise from building ML risk models at Coinbase (ATO, ACH fraud) and production ML platform experience, plus a prior startup exit. Together they combine AI infrastructure depth with hands-on fraud/risk ML experience. McAllister's prior exit (Roo Storage, acquired 2020) demonstrates entrepreneurial execution capability.

## Key Risks

**Well-funded competitor encroachment:** Sardine ($145M raised), Feedzai ($347M, $2B valuation), and DataVisor ($94.5M+) are all actively investing in AI-powered investigation and automation features. Sardine specifically markets to fraud and compliance teams with AI automation (Sardine website). These companies have existing customer bases, data moats, and sales teams that could rapidly ship overlapping capabilities.

**Enterprise sales cycle for a 2-person team:** MouseCat targets risk teams at financial institutions — a buyer persona that typically requires SOC 2 compliance, security reviews, procurement processes, and long evaluation cycles. Executing enterprise sales with a 2-person team pre-Demo Day, without disclosed sales or GTM hires, creates a timing mismatch between product readiness and buyer requirements.

**LLM reliability in high-stakes fraud decisions:** Automated fraud investigation and rule generation using AI agents must meet explainability and accuracy standards required by financial regulators. Hallucinated connections or incorrect rule generation in production could result in false positives (blocking legitimate customers) or false negatives (missing actual fraud), with direct financial and regulatory consequences for customers.

**Platform dependency on third-party LLMs:** The AI agent capabilities depend on underlying LLM infrastructure (likely foundation model APIs). Changes in pricing, performance, or terms of service from model providers could affect product economics and capability.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $14.72B (2025) → $65.35B (2034), CAGR 18.06% — AI in Fraud Management (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 2nd highest-rated at YC W26 product showcase (LinkedIn via search snippet); YC W26 batch member; W26 Demo Day March 24, 2026 |
| Revenue Signal | No public data found |
| Founders | Nicholas Aldridge (CEO): Principal Engineer at AWS AI 6.5yr, launched Amazon Bedrock products, MCP core maintainer, U of Chicago. Joseph McAllister (CTO): Sr ML Engineer at Coinbase 4yr (risk/ML platform), Microsoft Azure, founded Roo Storage (acquired 2020), Cornell CS. |
| Competitors | Sardine ($145M raised, 130% YoY ARR growth 2024, full-stack fraud/compliance platform); Feedzai ($347M raised, ~$123.8M revenue, enterprise-scale transaction scoring); DataVisor ($94.5M+ raised, ~$35M revenue, patented UML); Inscribe ($38M raised, revenue unknown, document fraud specialist); Unit21 ($92M raised, revenue unknown, no-code risk/compliance) |
| Moat Signals | CEO is MCP core maintainer; on-premise deployment creates switching costs; investigation feedback loop could build data advantage over time |
| Risk Factors | Well-funded competitor encroachment, enterprise sales cycle with 2-person team, LLM reliability in regulated fraud decisions |
| Founder Reach | Nicholas Aldridge: LinkedIn 654 likes on departure post; Joseph McAllister: GitHub 15 followers, 32 repos |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no Chrome extension) |
| Emails | No public data found |
