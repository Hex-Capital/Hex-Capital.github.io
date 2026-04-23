# Benchspan

> Real-time threat detection for AI agents in production

| Field | Value |
|-------|-------|
| Website | https://www.benchspan.com |
| YC Page | https://www.ycombinator.com/companies/benchspan |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Analytics, Security, Infrastructure, AI |
| YC Partner | David Lieb |
| Emails | No public data found |

## The Idea

**Problem:** AI agents in production are vulnerable to indirect prompt injection — adversarial instructions embedded in documents, emails, tool outputs, and RAG retrieval results that manipulate agent behavior from the inside. Prompt injection appeared in 73% of production AI deployments in 2025 (Startup Defense, RSAC 2026 report via search snippet). Existing generic guardrails miss these indirect attacks, leaving enterprises exposed to data exfiltration, unauthorized tool access, and behavioral drift. [Inferred]: Current mitigations are either overly broad (high false-positive rates) or too narrow (pattern-matching on known attack strings), creating a gap for a specialized classifier.

**Approach:** Benchspan operates as an inline prompt injection firewall. It evaluates every LLM call, tool invocation, and RAG retrieval in real-time, blocking threats before agents act on malicious content (benchspan.com). The company claims its indirect prompt injection classifier achieves 99.9% catch rate on AgentDojo, 94% on InjecAgent, and a 0.19% false-alarm rate with 0.931 weighted F1 across benchmarks (benchspan.com). The system ingests traces from observability platforms (Langfuse, Braintrust, Arize/Phoenix, OpenTelemetry), learns per-agent behavioral baselines, and retrains custom models every 4 hours on labeled production samples (benchspan.com). A compliance module auto-maps monitoring data to EU AI Act, NIST AI RMF, and OWASP standards, generating evidence artifacts for audits (benchspan.com).

**Differentiation:** The core claim is classifier accuracy trained by the team behind Microsoft Prompt Shields, which secures 20 billion requests/year (YC profile). Lakera Guard (now Check Point) also claims 99%+ accuracy on prompt injection (lakera.ai) but operates as part of a large enterprise security suite post-acquisition. Promptfoo (now OpenAI) focused on red-teaming and testing rather than runtime enforcement. HiddenLayer focuses on model-level attacks (adversarial ML, model supply chain) rather than prompt injection specifically. Benchspan combines runtime blocking with observability-driven behavioral learning and compliance reporting in a single product.

**Business Model:** Free tier of 50,000 requests/month with no credit card required (benchspan.com). [Inferred]: Paid tiers likely based on request volume/consumption, following the pattern of similar API-based security products.

**TAM/SAM:** The cybersecurity agentic AI market was $1.83B in 2025, projected to reach $7.84B by 2030 at 33.83% CAGR (Mordor Intelligence via search snippet). The broader GenAI cybersecurity market is estimated at $8.65B in 2025, projected to $35.5B by 2031 at 26.5% CAGR (MarketsandMarkets via search snippet). [Inferred]: SAM is the subset of enterprises running autonomous AI agents in production requiring runtime security — a fraction of the broader AI cybersecurity TAM but the fastest-growing subcategory.

**GTM / Distribution:** Integrations with major agent frameworks (LangChain, CrewAI, OpenAI, Anthropic, Vercel AI SDK, Google ADK) and observability platforms (Langfuse, Braintrust, Arize/Phoenix, OpenTelemetry) serve as distribution channels (benchspan.com). [Inferred]: PLG motion via free tier, converting to paid as agent traffic scales. The compliance module (EU AI Act, NIST) may serve as an enterprise upsell lever.

## Defensibility

- **Data moat potential:** The system retrains custom classifiers every 4 hours on production threat data (benchspan.com). [Inferred]: Each customer deployment generates labeled training data that could improve classifier accuracy over time, creating a compounding data advantage — but this is unproven at current scale.
- **Founder IP:** Avi Arora trained Microsoft's Prompt Shields model securing 20B requests/year (YC profile). [Inferred]: This domain expertise and proprietary training methodology represent tacit knowledge not easily replicated.
- **Switching costs:** [Inferred]: Once integrated into an agent's request path as an inline firewall, switching requires re-instrumentation and re-establishing behavioral baselines.

**Market structure:** Three of the four major independent LLM security startups have been acquired: Lakera by Check Point (~$300M, Venturelab 2025), Prompt Security by SentinelOne ($250-300M, SecurityBuzz 2025), CalypsoAI by F5 (BankInfoSecurity 2025), and Promptfoo by OpenAI (TechCrunch, Mar 2026). [Inferred]: Incumbents are acquiring rather than building, validating market demand but also consolidating the competitive landscape. The acquirers (Check Point, SentinelOne, F5, OpenAI) may face integration friction and business model conflicts when selling standalone AI security to multi-vendor enterprises — a structural opening for an independent vendor.

**Commoditization risk:** LLM providers (OpenAI, Anthropic, Google) ship native content safety filters. Open-source tools (LLM Guard by Protect AI, NeMo Guardrails by NVIDIA, PyRIT by Microsoft) provide free alternatives. [Inferred]: The commoditization risk is real — Benchspan's defense is classifier accuracy on indirect injection specifically, which requires specialized training data and domain expertise beyond what generic guardrails provide.

## Market & Traction

**Traction signals:**
- 34 agents monitored across 5 environments (benchspan.com, Apr 2026)
- 84,291 traces processed in 24 hours (benchspan.com, Apr 2026)
- Free tier: 50,000 requests/month (benchspan.com)
- Product Hunt launch (prior benchmarking product): 89 upvotes, #24 Day Rank, ~late March 2026 (Product Hunt)
- LinkedIn launch announcement: 233 reactions, 39 comments (LinkedIn, ~early April 2026)
- Twitter/X: Avi Arora @c0delemons (count not retrievable)
- No company Twitter/X account found
- No Discord/Slack community found
- 0 job postings (YC page, Apr 2026)

**Product pivot note:** Benchspan was originally an agent benchmarking platform ("Run agent benchmarks in minutes, not hours") before pivoting to AI agent security. The Product Hunt listing (89 upvotes, #24 Day Rank) and the prior YC URL path (/companies/oddpool) reflect earlier product iterations. Current traction metrics on benchspan.com relate to the security product. The founders also co-authored "PredictionMarketBench" (Google Scholar, 2026) and maintained an "Awesome-Prediction-Market-Tools" GitHub repo (github.com/aarora4), suggesting an even earlier prediction-market focus.

**Competitive landscape:**

| Competitor | Funding | Status | Differentiator vs. Benchspan |
|---|---|---|---|
| Lakera | ~$20M raised; acquired by Check Point for ~$300M (Venturelab, 2025) | Acquired | Broader platform (jailbreak + content moderation); now part of Check Point Infinity suite — no longer independent |
| Prompt Security | $23M raised; acquired by SentinelOne for $250-300M (SecurityBuzz, 2025) | Acquired | Enterprise-focused; shadow AI detection; integrated into SentinelOne EDR platform |
| HiddenLayer | $56M raised ($50M Series A, TechCrunch Sep 2023) | Independent | Model-level security (adversarial ML, model supply chain), not prompt injection-specific |
| CalypsoAI | $43.2M raised; acquired by F5 (BankInfoSecurity, Sep 2025) | Acquired | LLM firewall with government/defense focus; now F5 product |
| Promptfoo | $23M raised, $86M valuation; acquired by OpenAI (TechCrunch, Mar 2026) | Acquired | Open-source red-teaming/testing, not runtime enforcement; now OpenAI-internal |

**Why now:** [Inferred]: The wave of acquisitions in 2025-2026 (Lakera, Prompt Security, CalypsoAI, Promptfoo) removed independent LLM security vendors from the market, creating a gap for enterprises using multi-vendor AI stacks who need vendor-neutral security. Simultaneously, the shift from LLM chat applications to autonomous AI agents (with tool use, multi-step reasoning, and external data retrieval) introduced indirect prompt injection as a distinct and more dangerous attack surface than direct jailbreaking. Enterprise agentic AI spending is projected to reach $201.9B in 2026 (Startup Defense, RSAC 2026 report via search snippet), expanding the attack surface faster than existing security tools can address.

## Founders & Team

**Avi Arora** — Co-founder
- ML Engineer II / Research Scientist at Microsoft; trained the Prompt Shields model securing 20B classifications/year (YC profile)
- Prior: Capital One (anomaly detection neural networks, Turing REST API for tokenization), Perforce Software (ML for static code analysis), Rocket Software, Agileaxis, Basis Technology (ZoomInfo via search snippet)
- Co-authored "SetupBench: Assessing Software Engineering Agents' Ability to Bootstrap Development Environments" (2025, 10 citations) and "PredictionMarketBench" (2026, 1 citation) (Google Scholar)
- Twitter/X: @c0delemons (count not retrievable)
- LinkedIn: linkedin.com/in/avi-arora — "Co-founder @ Benchspan | YC P26"
- GitHub: github.com/aarora4 — 29 repositories (via search snippet)

**Ritesh Malpani** — Co-founder
- SWE at Bloomberg and Amazon; architected systems processing 100K+ TPS across trading infrastructure (YC profile)
- Education: BS/MS from Georgia Institute of Technology (YC profile, ZoomInfo via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ritesh-malpani — "Co-founder @Benchspan (YC P26)"
- GitHub: No public repos found

**Co-founder relationship:** College roommates 8 years ago; currently still roommates (LinkedIn post, ~Apr 2026, 233 reactions). Arora focused on AI agent development; Malpani on distributed computing infrastructure (LinkedIn post).

**Founder-market fit:** Arora's direct experience building Microsoft Prompt Shields — the production indirect prompt injection classifier securing 20B requests/year — provides domain-specific expertise in the exact problem Benchspan addresses. Malpani's background building high-throughput trading infrastructure (100K+ TPS) at Bloomberg is relevant to the low-latency inline evaluation requirement (14ms average, P99 42ms per benchspan.com). Their co-authored research on agent benchmarking frameworks demonstrates shared technical context in the AI agent ecosystem.

## Key Risks

**Post-acquisition competitive re-entry:** Four major competitors were acquired in 2025-2026, but their technology continues to develop inside well-resourced acquirers (Check Point, SentinelOne, F5, OpenAI). These acquirers may bundle AI security into existing platform offerings at zero marginal cost, making standalone pricing difficult. Mitigation: vendor-neutral positioning for multi-vendor AI stacks.

**LLM provider commoditization:** OpenAI (which acquired Promptfoo), Anthropic, and Google already ship native content safety filters and are investing in agent-level security. If LLM providers build sufficiently accurate indirect prompt injection detection into their APIs, the standalone firewall value proposition diminishes. Mitigation: Benchspan's cross-provider, observability-integrated approach targets multi-model deployments.

**Product pivot recency:** The company has iterated through at least two prior product directions — prediction market tooling (Oddpool/PredictionMarketBench paper, 2026) and agent benchmarking (Product Hunt launch, Mar 2026) — before arriving at the current AI agent security product. Multiple pivots in a short timeframe may indicate product-market fit is still being validated.

**Name collision risk:** "Benchspan" also refers to Benchspan LLC, a well-established HR/compensation benchmarking firm (unrelated). This may create SEO and brand confusion challenges.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Cybersecurity agentic AI market: $1.83B in 2025, projected $7.84B by 2030 at 33.83% CAGR (Mordor Intelligence via search snippet) |
| SAM | No public data found |
| Traction | 34 agents monitored, 84,291 traces/24hr (benchspan.com, Apr 2026); LinkedIn launch post: 233 reactions, 39 comments (LinkedIn, Apr 2026); Product Hunt (prior benchmarking product): 89 upvotes, #24 Day Rank (Product Hunt, Mar 2026) |
| Revenue Signal | Free tier: 50,000 requests/month (benchspan.com, Apr 2026); no paid pricing disclosed |
| Founders | Avi Arora (Co-founder): ML Engineer at Microsoft, built Prompt Shields (20B req/yr). Ritesh Malpani (Co-founder): SWE at Bloomberg/Amazon, BS/MS Georgia Tech, 100K+ TPS systems |
| Competitors | Lakera (~$20M raised, acquired by Check Point ~$300M, revenue unknown, broader platform now embedded in Check Point); Prompt Security ($23M raised, acquired by SentinelOne $250-300M, revenue unknown, enterprise shadow AI); HiddenLayer ($56M raised, revenue unknown, model-level security not prompt injection); CalypsoAI ($43.2M raised, acquired by F5, revenue unknown, gov/defense LLM firewall); Promptfoo ($23M raised, acquired by OpenAI, revenue unknown, open-source red-teaming) |
| Moat Signals | Founder built Microsoft Prompt Shields (20B req/yr) (YC profile); custom classifier retraining every 4 hours on production data (benchspan.com) |
| Risk Factors | LLM provider commoditization of safety filters, post-acquisition competitor re-entry, multiple recent product pivots |
| Founder Reach | Avi Arora: Twitter @c0delemons (count not retrievable), LinkedIn "Co-founder @ Benchspan \| YC P26", GitHub aarora4 29 repos. Ritesh Malpani: Twitter not found, LinkedIn "Co-founder @Benchspan (YC P26)", GitHub not found |
| Distribution Signals | Product Hunt #24 Day Rank with 89 upvotes (prior benchmarking product) (Product Hunt, Mar 2026); integrations with LangChain, CrewAI, OpenAI, Anthropic, Vercel AI SDK, Google ADK, Langfuse, Braintrust, Arize/Phoenix, OpenTelemetry (benchspan.com) |
| Emails | No public data found |
