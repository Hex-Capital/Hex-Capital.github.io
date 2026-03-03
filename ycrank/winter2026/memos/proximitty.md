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
| YC Partner | Diana Hu |
| Emails | No public data found |

## The Idea

**Problem:** Banks, credit unions, and fintechs rely on fragmented loan servicing and collections workflows spread across multiple systems — loan management systems, dialers, email platforms, and internal tools. Servicing agents perform manual, repetitive tasks (skip tracing, right-party contact, payment negotiation, compliance checking) using siloed data. Current solutions require heavy engineering effort to integrate and lack personalization at the borrower level. The company's website describes the status quo as "90% of manual servicing and collection workflows" handled by human agents (proximitty.ai).

**Approach:** Proximitty builds an AI-native loan management system with three core components: (1) a unified lending data layer that aggregates context across LMS, dialer, email, and internal tools into a single source of truth; (2) personalized risk scoring models that learn per-borrower; and (3) no-code browser and voice AI agents that execute servicing and collections workflows end-to-end. The browser agents use proprietary computer vision to operate across existing platforms without requiring API integrations — users can convert SOPs and screen recordings into custom AI agents. Voice agents handle omni-channel outbound collections with real-time adaptation. A compliance layer monitors all interactions (voice, SMS, email) in real time against FDCPA, CFPB, TCPA, and state regulations (proximitty.ai).

**Differentiation:** Compared to traditional loan management systems like LoanPro or Peach Finance, Proximitty does not require API integration or engineering resources — it uses computer vision to operate on top of existing browser-based tools. Compared to AI collections-focused players like Prodigal Technologies or TrueAccord, Proximitty bundles servicing and collections into one system rather than layering analytics or digital outreach onto existing workflows. Compared to Skit.ai (voice-focused AI collections), Proximitty is omni-channel with browser automation. The "no-code, no-API" deployment model differentiates from most competitors that require integration projects.

**Business Model:** No public pricing page found on proximitty.ai. [Inferred]: Most likely monetization path is SaaS subscription pricing (per-seat or per-account) to lending institutions, potentially with usage-based components for agent interactions, given the B2B SaaS tags and enterprise customer base described.

**TAM/SAM:** The global loan servicing software market was valued at approximately $3.3 billion in 2024 (IMARC Group via search snippet) and is projected to reach $7.89 billion by 2029 at a 16.3% CAGR (Research and Markets via search snippet). The global debt collection software market was estimated at $4.8 billion in 2025, expected to reach $11.3 billion by 2033 at an 8.89% CAGR (via search snippet, source unnamed). The broader lending technology (LendTech) market was sized at $21.04 billion in 2025, growing to $26.73 billion in 2026 at 27% CAGR (Research and Markets via search snippet). [Inferred]: The serviceable addressable market for AI-native loan servicing and collections software targeting banks, credit unions, and fintechs in the US is a subset of the $3.3B–$4.8B loan servicing and debt collection software markets.

**GTM / Distribution:** The company website states it is "Trusted by publicly traded fintechs and banks globally" (proximitty.ai), indicating existing enterprise customers. A demo booking link is available via cal.com/team/proximitty/proximitty-demo (proximitty.ai). [Inferred]: Most likely distribution path is direct enterprise sales to banks, credit unions, and fintechs, leveraging the CEO's McKinsey credit risk advisory network and fintech operating background.

## Defensibility

**Data moat potential:** As Proximitty deploys across lending institutions, the personalized risk scoring models accumulate borrower-level performance data (which contact strategies, negotiation approaches, and timing yield higher collection rates). This data feedback loop could compound over time, improving model accuracy for each customer. However, this moat is nascent at pre-seed stage and unproven at scale.

**Switching costs:** Once an institution converts its SOPs and workflows into Proximitty's no-code agent format, re-creating them on another platform represents meaningful switching friction. The unified data layer connecting disparate systems (LMS, dialer, email) also creates integration lock-in without requiring traditional API integration.

**Compliance layer:** Real-time regulatory monitoring across FDCPA, CFPB, TCPA, and state regulations is a non-trivial technical and legal undertaking that creates a barrier to entry for lightweight competitors.

**Market structure:** Traditional loan management system vendors (e.g., Black Knight/ICE, Fiserv) have invested heavily in API-first architectures and integration ecosystems. Proximitty's computer-vision-based, no-API approach is architecturally orthogonal — incumbents would need to build an entirely different technology stack (browser automation, computer vision for UI interaction) that conflicts with their existing API integration business model. [Inferred]: Additionally, incumbents selling to the same customers have limited incentive to cannibalize existing integration services revenue by offering a no-code overlay that bypasses their own APIs.

**Commoditization risk:** The core technologies — LLM-powered voice agents, browser automation via computer vision, and risk scoring models — are becoming increasingly accessible through open-source frameworks and cloud APIs. Well-resourced competitors like Prodigal Technologies (YC-backed, $14.2M raised) already operate in AI-powered loan servicing. Browser automation specifically (via tools like Anthropic's computer use, OpenAI Operator, etc.) is an active area of development by large platform players, which could lower the barrier to replicating Proximitty's no-code agent approach.

## Market & Traction

**Traction signals:**
- YC Winter 2026 batch participant (YC page)
- Company claims to be "Trusted by publicly traded fintechs and banks globally" (proximitty.ai) — no specific customer names disclosed
- Claims "improving first-contact rates by 20pp" for its Right Party Contact Agent using 50+ data sources (proximitty.ai)
- Twitter/X handle: @proximityww (search result link; follower count not retrievable)
- No Product Hunt launch found
- No LinkedIn company page found in search results
- No Discord/Slack community found
- No app store presence found
- No press coverage in named publications found
- No publicly disclosed revenue, user counts, or growth metrics found
- Hiring status: not currently hiring (YC page)

**Competitive landscape:**

1. **Prodigal Technologies** ($14.2M raised over 3 rounds; YC-backed; revenue unknown via public sources): AI intelligence layer for consumer finance — focuses on conversation analytics, intent-to-pay scoring, and agent coaching across loan servicing and collections. Offers "ProAgent" AI agent for servicing and collections. Key differentiator vs. Proximitty: Prodigal layers analytics and AI on top of existing workflows rather than replacing them with no-code browser agents; serves adjacent verticals including healthcare RCM and auto finance (Tracxn via search snippet; prodigaltech.com via search snippet).

2. **LoanPro** ($100M Series A, Jul 2021, led by FTV Capital; revenue $10–50M range per Growjo via search snippet): API-first composable loan management system covering origination through servicing, collections, and payments. Key differentiator vs. Proximitty: LoanPro is a full-lifecycle platform requiring API integration, targeting institutions that want to build custom lending stacks; Proximitty overlays existing systems without APIs (Tracxn, Growjo via search snippets).

3. **TrueAccord** (~$78M total raised over 6 rounds per Tracxn; $49.1M Series C in Jun 2022; $280M post-money valuation at Series B; revenue unknown via public sources): AI-driven digital-first collections agency using machine learning for personalized outreach across email, SMS, and other channels. Key differentiator vs. Proximitty: TrueAccord operates as a collections agency (outsourced collections), not a software platform for in-house teams; Proximitty provides software for institutions to run their own AI-powered collections (Tracxn, CB Insights via search snippets).

4. **Skit.ai** ($47.6M raised over 5 rounds; $22.4M revenue in 2024 per Getlatka via search snippet): AI-powered voice agents for debt collection, trusted by 120+ collection teams. Key differentiator vs. Proximitty: Skit.ai is primarily voice-focused for collections agencies; Proximitty combines voice, browser automation, and servicing workflows for in-house teams at banks and fintechs (Tracxn, Getlatka via search snippets).

5. **Peach Finance** (~$35.8M raised over 3 rounds; $6.4M revenue in Oct 2024 per Getlatka via search snippet): API-first SaaS loan servicing platform with automated compliance. Key differentiator vs. Proximitty: Peach provides infrastructure-level loan servicing software requiring API integration; Proximitty's no-code browser agents work on top of existing systems including competitors' platforms (Tracxn, Getlatka via search snippets).

**Why now:**
- [Inferred]: The emergence of production-grade LLMs with tool-use capabilities (2023–2025) crossed a performance threshold enabling reliable autonomous browser agents and voice agents that can handle nuanced financial conversations (hardship negotiations, compliance-aware collections).
- [Inferred]: Computer vision for browser automation became viable at production quality with the release of models like Anthropic's computer use (Oct 2024) and similar capabilities, making the "no-API, no-code" agent approach technically feasible for the first time.
- CFPB Regulation F (effective Nov 2021) modernized debt collection rules to explicitly address digital communications, creating both compliance complexity (favoring automated monitoring) and regulatory cover for AI-mediated outreach channels.
- [Inferred]: Rising consumer debt levels and delinquency rates in 2024–2025 increased urgency for lenders to improve collection efficiency, expanding the market for AI-powered solutions.

## Founders & Team

**Wye Yew Ho** — Co-founder & CEO
- Education: The London School of Economics and Political Science (LSE) (LinkedIn)
- Previously: Business Analyst at McKinsey & Company, where he advised on credit risk strategy (YC page, LinkedIn)
- Previously: Growth role at Taptap Send, a cross-border remittance fintech that raised $65M Series B (TechCrunch, Dec 2021); the YC page states he "scaled from $75M to $200M ARR" at Taptap Send (YC page)
- Academic: Top 5% worldwide in Physics Olympiad (LinkedIn via search snippet)
- Twitter/X: @hoo_yew found via search result but unverified as belonging to this individual; follower count not retrievable
- LinkedIn: linkedin.com/in/wyeyew — listed as "Stealth Startup" (LinkedIn)
- GitHub: No public repos found

**Zi Zhang (ZiXuan Zhang)** — Co-founder & CTO
- Education: Recipient of National Scholarship from Chinese Ministry of Education, described as awarded only to top students at top Chinese universities (LinkedIn via search snippet)
- Previously: Senior Software Engineer at Bloomberg for 5 years, where he architected the Bloomberg Secrets Management solution and security infrastructure serving 300,000+ terminals; built data streaming pipelines using Kafka Streams, Spring Ecosystem, and Java (YC page, LinkedIn via search snippet)
- Previously: Led engineering at ACI.dev, an open-source tool-calling platform for AI agents with 4.7k GitHub stars and 459 forks under Apache 2.0 license (GitHub); ACI.dev was included in Creandum's Euro Seed 50 list (LinkedIn via search snippet)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/zixuanzhang-x (listed as "Open Source Maintainer of ACI | Senior Software Engineer at Bloomberg") and/or linkedin.com/in/zizixcm (listed as "Stealth AI Startup") (LinkedIn)
- GitHub: github.com/aipotheosis-labs/aci — 4.7k stars, 459 forks (GitHub)

**Co-founder relationship:** Both founders' LinkedIn profiles previously listed "Stealth Startup" as their current position, suggesting concurrent involvement pre-launch. No shared prior employer or university is visible from the gathered data — Ho attended LSE and worked at McKinsey/Taptap Send, while Zhang was at Bloomberg and ACI.dev.

**Founder-market fit:** Ho brings direct domain experience in credit risk advisory (McKinsey) and high-growth fintech operations (Taptap Send, a lending-adjacent remittance business). Zhang brings enterprise-grade security infrastructure engineering (Bloomberg, 300k+ terminals) and demonstrated open-source AI agent tooling expertise (ACI.dev, 4.7k stars). The combination of lending domain knowledge with AI agent engineering aligns with the product's positioning as an AI-native loan management system.

## Key Risks

**Browser automation fragility:** Proximitty's core differentiation — no-code, no-API browser agents using proprietary computer vision — depends on reliably interacting with third-party web UIs that change without notice. Loan management systems, dialers, and banking portals frequently update their interfaces. Each UI change could break automated workflows, creating an ongoing maintenance burden that scales with the number of supported platforms. No public data found on how Proximitty handles UI change resilience.

**Regulatory and liability exposure:** AI agents conducting debt collections via voice, SMS, and email on behalf of regulated financial institutions face direct regulatory scrutiny under FDCPA, TCPA, CFPB rules, and state-level regulations. A compliance failure by an AI agent could expose both Proximitty and its banking clients to legal liability. While the company advertises real-time compliance monitoring, no third-party audit or certification has been publicly disclosed.

**Prodigal Technologies direct overlap:** Prodigal Technologies, also YC-backed with $14.2M in funding, operates in the same AI-for-loan-servicing-and-collections space and has had several more years to build customer relationships, training data, and product maturity (founded 2018). Prodigal's "ProAgent" directly competes with Proximitty's collections and servicing agents.

**Platform risk from foundation model providers:** Anthropic (computer use), OpenAI (Operator), and Google have all shipped or announced browser automation capabilities built into their foundation models. If these capabilities become commoditized and directly accessible to lending institutions or integrated into existing LMS platforms, Proximitty's computer-vision-based browser agent layer could be disintermediated.

**Enterprise sales cycle in banking:** Banks and credit unions have lengthy procurement cycles (often 6–18 months) involving security reviews, compliance assessments, and vendor due diligence. A 2-person team may face capacity constraints in simultaneously serving existing customers, running sales cycles, and iterating on the product.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Loan servicing software: ~$3.3B in 2024, projected $7.89B by 2029 at 16.3% CAGR (Research and Markets via search snippet). Debt collection software: $4.8B in 2025, projected $11.3B by 2033 at 8.89% CAGR (via search snippet, source unnamed). |
| SAM | No public data found |
| Traction | YC W26 batch; claims "publicly traded fintechs and banks globally" as customers (proximitty.ai); no named customers, revenue, or user counts disclosed |
| Revenue Signal | No public data found |
| Founders | Wye Yew Ho (CEO): McKinsey credit risk advisor, scaled Taptap Send growth ($75M→$200M ARR per YC page), LSE. Zi Zhang (CTO): Bloomberg Sr. Engineer (5 yrs, 300k+ terminal security infra), ACI.dev engineering lead (4.7k GitHub stars), National Scholarship (China). |
| Competitors | Prodigal Technologies ($14.2M raised, revenue unknown, AI analytics layer for loan servicing/collections). LoanPro ($100M raised, $10–50M revenue range, API-first full-lifecycle LMS). TrueAccord (~$78M raised, revenue unknown, AI-driven outsourced collections agency). Skit.ai ($47.6M raised, $22.4M revenue 2024, voice AI for collections). Peach Finance (~$35.8M raised, $6.4M revenue Oct 2024, API-first loan servicing SaaS). |
| Moat Signals | Proprietary computer vision for browser automation (no-API deployment); accumulating borrower-level collections data for personalized risk models; compliance monitoring layer across multiple regulatory frameworks |
| Risk Factors | Browser automation fragility against third-party UI changes, regulatory/liability exposure for AI-conducted collections, direct competition from better-funded Prodigal Technologies, platform risk from foundation model providers shipping browser automation |
| Founder Reach | Wye Yew Ho: Twitter @hoo_yew (unverified, count not retrievable), LinkedIn linkedin.com/in/wyeyew. Zi Zhang: Twitter not found, LinkedIn linkedin.com/in/zixuanzhang-x, GitHub 4.7k stars (ACI.dev). |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no Chrome extension, no community channels identified) |
| Emails | No public data found |
