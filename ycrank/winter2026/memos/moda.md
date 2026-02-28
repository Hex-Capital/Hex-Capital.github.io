# Moda

> The monitoring & analytics layer your AI agents need.

| Field | Value |
|-------|-------|
| Website | https://usemoda.ai |
| YC Page | https://www.ycombinator.com/companies/moda |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, Analytics, Infrastructure |
| YC Partner | Ankit Gupta |
| Emails | pranav.bedi@uwaterloo.ca (GitHub profile); no official business email found on website or YC page |

## The Idea

**Problem:** Companies building AI agents face a blind spot in understanding how their agents behave in production. Traditional application logging captures request/response data but misses behavioral failures such as hallucinations, dropped context, tool misuse, deflection/laziness, and broken promises (e.g., an agent promising a refund without calling the required API). These failure modes are semantic in nature and are not surfaced by conventional observability stacks. The customer segment is engineering and product teams shipping LLM-based agent products. Today, teams rely on manual conversation review, generic LLM logging tools, or custom-built monitoring scripts.

**Approach:** Moda automatically scans agent conversations and detects behavioral failure patterns with confidence scores (87–94% cited on the product landing page, usemoda.ai). It provides pre-built detectors for specific failure types — tool misuse, agent forgetfulness, laziness/deflection, and user frustration escalation — as well as custom signal creation in plain language (no code or regex). Integration is via lightweight Python and Node.js SDKs (`pip install moda-ai` / `npm install moda-ai`) or direct API telemetry, supporting OpenAI, Anthropic, and AWS Bedrock providers (docs.modaflows.com). Alerts are dispatched in real time via Slack, email, or webhooks with threshold-based severity.

**Differentiation:** Existing LLM observability tools (LangSmith, Langfuse, Helicone, Braintrust) focus primarily on tracing, cost tracking, latency monitoring, and evaluation/evals. Moda positions itself as specifically targeting *behavioral* failure detection in agents — hallucinations, laziness, forgetfulness — rather than infrastructure-level observability. Additionally, Moda provides product analytics signals (user frustration, NPS, retention, churn) alongside agent monitoring, blending observability with product analytics in a single layer. Most competitors require manual configuration of evaluation criteria, whereas Moda emphasizes automatic detection with plain-language custom signal creation.

**Business Model:** No pricing is publicly listed. The product is in private beta with access via demo booking (usemoda.ai, modaflows.com). [Inferred]: Most likely monetization path is usage-based SaaS pricing (per conversation or per event volume), consistent with the dominant model in the LLM observability space (Helicone charges $25/month flat; Langfuse offers open-source self-hosted plus cloud tiers; Braintrust offers tiered plans).

**TAM/SAM:** The LLM observability platform market was valued at $1.44B in 2024 and projected to reach $1.97B by 2025 at 36.5% CAGR (The Business Research Company via search snippet). An alternative estimate sizes it at $510.5M in 2024 growing to $8.08B by 2034 at 31.8% CAGR (Market.us via search snippet). The broader observability market is valued at $3.35B in 2026 (Mordor Intelligence via search snippet). [Inferred]: Moda's serviceable market is the subset of LLM observability focused on agent-specific behavioral monitoring and product analytics, which is a narrower wedge within these broader figures.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-led bottom-up adoption via SDK integration, demo-based onboarding during private beta, and expansion within YC network companies building AI agents. The lightweight SDK integration ("add analytics in under 5 minutes" per docs.modaflows.com) suggests a PLG-oriented approach. No public GTM data found beyond the private beta signup.

## Defensibility

No strong defensibility signals found in public sources at this stage. The product is in private beta with no disclosed user base.

[Inferred]: Potential moat could develop via (1) data flywheel — as more agent conversations are analyzed, Moda's behavioral detection models improve in accuracy and coverage of failure patterns; (2) switching costs — once integrated into an agent's monitoring stack and teams rely on Moda's alerting workflows, migration cost increases; (3) proprietary taxonomy of agent failure modes built from real production data. However, none of these are proven at this stage.

**Market structure:** LangSmith (LangChain) is tightly coupled to the LangChain framework, which creates a distribution advantage for LangChain users but limits its appeal to non-LangChain stacks. Braintrust, Helicone, and Langfuse focus on general LLM observability (tracing, cost, latency) and may face business model friction in narrowing to agent-specific behavioral detection, as it would require building specialized ML-based classifiers rather than log/trace aggregation pipelines. General-purpose observability incumbents (Datadog, New Relic) would need to build LLM-specific semantic analysis capabilities from scratch. No structural barrier identified at this stage beyond execution speed.

**Commoditization risk:** The underlying approach — running LLM-based classifiers over agent conversation logs to detect behavioral patterns — is technically reproducible. Any well-funded competitor (Braintrust at $121M raised, LangChain at $260M raised) could build similar detectors. The open-source Langfuse (acquired by ClickHouse in Jan 2026) could add behavioral detection as a feature. The barrier is primarily execution speed and depth of the failure-pattern taxonomy.

## Market & Traction

**Traction signals:**
- Product status: Private beta, access via demo booking (usemoda.ai, modaflows.com)
- 12,847 conversations analyzed (Extruct AI company profile via search snippet — this figure may include demo/test data; no date provided)
- Twitter/X: @modaflows (YC page); follower count not retrievable
- LinkedIn: linkedin.com/company/modaflows (YC page); follower count not retrievable
- No Product Hunt launch found for this Moda (the "Moda" Product Hunt listings correspond to unrelated companies: an eCommerce marketing platform and an AI design tool)
- No app store listings, Chrome extension, or download counts found
- No Discord or Slack community found for this company
- 0 open job postings (YC page)
- No press coverage found in named publications

**Competitive landscape:**

| Competitor | Key Differentiator vs. Moda | Funding | Revenue/ARR |
|---|---|---|---|
| **Braintrust** | Broader evaluation-first platform for production AI; serves Notion, Replit, Cloudflare, Ramp, Dropbox. General-purpose observability + evals vs. Moda's agent behavioral focus | $121M total ($80M Series B, Feb 2026, at $800M valuation) (SiliconANGLE, Feb 2026) | Revenue unknown |
| **LangSmith (LangChain)** | Tightly integrated with LangChain framework; tracing and debugging focus; large existing user base. Framework-coupled vs. Moda's framework-agnostic approach | $260M total ($125M Series B, Oct 2025, at $1.25B valuation) (Fortune, Oct 2025) | ~$16M ARR in 2025 (GetLatka via search snippet) |
| **Langfuse** | Open-source, self-hostable LLM observability; 20K+ GitHub stars and 26M+ monthly SDK installs pre-acquisition. Acquired by ClickHouse in Jan 2026 | $4.5M total ($4M seed, Nov 2023) (Langfuse blog) | $1.1M revenue in 2024 (GetLatka via search snippet) |
| **Helicone** | Open-source proxy-based LLM observability with built-in caching; $25/month flat pricing. Cost/latency focused vs. Moda's behavioral focus | ~$1.5M–$2M total (Tracxn/Crunchbase via search snippet) | ~$1M revenue in 2024 (GetLatka via search snippet) |
| **AgentOps** | Agent-specific monitoring with 400+ LLM/framework integrations; Python SDK focus. Closest direct competitor to Moda's agent behavioral monitoring positioning | $2.6M total (Crunchbase via search snippet) | Revenue unknown |

**Why now:** [Inferred]: The catalyst is the rapid proliferation of production AI agents in 2024–2025, driven by improvements in LLM capabilities (GPT-4, Claude 3/3.5/4, open-source models), the emergence of agent frameworks (LangChain, CrewAI, AutoGen, OpenAI Agents SDK), and increasing enterprise deployment of agentic AI. As agents move from demos to production with real users, behavioral failures become a product-quality problem rather than a research curiosity. The shift from LLM-as-API to agent-as-product creates a new category of monitoring needs that traditional LLM observability (tracing, cost) does not address.

## Founders & Team

**Mohammed Al-Rasheed** — Co-founder
- University of Waterloo, double major in Statistics and Combinatorics & Optimization (LinkedIn, GitHub)
- Previously: Software Engineering Intern at Shopify (multiple terms, 4–8 months) (LinkedIn via search snippet)
- Interests: machine learning, human-computer interactions, cryptography, development (personal website moalr.com via search snippet)
- Twitter/X: No public account found under his name; not linked on YC page to a personal handle
- LinkedIn: linkedin.com/in/moalrs — 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/MohammedAl-Rasheed — 46 repos, 49 total stars, 41 followers. Pinned projects include Insider Unlocked (stock trading data aggregator for US senator transactions, 3 stars), VentureTracker (crypto venture investment tracker, 2 stars), CCC Solutions (1 star)

**Pranav Bedi** — Co-founder
- University of Waterloo, Computer Science and Business Administration (double degree with Wilfrid Laurier University) (GitHub profile)
- Previously: Software Engineering at Shopify (LinkedIn via search snippet); Member of Technical Staff at Cerebral Valley, focused on agentic deep web scraping and LLM observability (GitHub bio)
- Created Squeak, a language learning application with 1,000+ users (GitHub profile)
- Created Detox Dot, a physical tool for managing screen time (GitHub profile via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/pranavbedi — "Co-founder @ Moda (YC W26)" (LinkedIn)
- GitHub: github.com/pranavbedi — 12 repos, 11 followers. Notable: LiveStory (4 stars), wordware-math-videos (4 stars)

**Co-founder relationship:** Both founders attended the University of Waterloo and both worked at Shopify, indicating prior acquaintance through shared university and employer.

**Founder-market fit:** Both founders have hands-on experience building with LLMs — Pranav Bedi's role at Cerebral Valley specifically focused on LLM observability and agentic systems, directly relevant to Moda's product. Both have software engineering backgrounds from Shopify (a company known for developer tooling culture). Mohammed Al-Rasheed's statistics background is relevant to the analytics layer of the product. Their combined experience as LLM practitioners positions them as users of the type of tool they are building.

**Note on Extruct data discrepancy:** The Extruct AI company profile page lists three founders (Sean McGuire as CEO, Pranav Bedi, Svetlana Zhavoronkova), which differs from the YC page listing (Mohammed Al-Rasheed, Pranav Bedi). The YC page is treated as the authoritative source. This discrepancy may reflect a prior iteration of the team or a data aggregation error on Extruct.

## Key Risks

**Crowded and rapidly consolidating LLM observability market:** Braintrust ($121M raised, $800M valuation), LangChain/LangSmith ($260M raised, $1.25B valuation), and ClickHouse (acquiring Langfuse) are well-funded incumbents that could add behavioral detection features. AgentOps occupies a similar agent-monitoring niche with $2.6M raised. Moda must establish differentiation before these players expand their feature sets.

**Brand disambiguation challenge:** Multiple companies use the name "Moda" — an eCommerce growth marketing platform (Product Hunt listing), an AI design tool (Product Hunt listing), Moda Technologies (IT infrastructure monitoring for MSPs on LinkedIn), and others. This creates SEO competition and potential brand confusion, particularly problematic for a developer-tools company relying on organic discovery. The company already uses three domains/handles (usemoda.ai, modaflows.com, @modaflows).

**Platform dependency on LLM provider APIs:** Moda's behavioral detection relies on analyzing conversations from OpenAI, Anthropic, and Bedrock. Changes to these providers' APIs, output formats, or introduction of native monitoring features could impact Moda's product. OpenAI and Anthropic could build competing behavioral analytics into their own dashboards.

**Pre-revenue, pre-product-market-fit stage with private beta:** No public revenue, pricing, user count, or customer logos disclosed. The "12,847 conversations analyzed" figure (Extruct) lacks context on whether these are from paying users, beta testers, or internal testing. The company must convert private beta interest into recurring revenue in a market where well-funded alternatives already have paying customers.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.44B LLM observability platform market in 2024, growing at 36.5% CAGR (The Business Research Company via search snippet); alternative estimate $510.5M in 2024 at 31.8% CAGR to $8.08B by 2034 (Market.us via search snippet) |
| SAM | No public data found |
| Traction | Private beta, 12,847 conversations analyzed (Extruct AI profile, no date); 0 job postings (YC page) |
| Revenue Signal | No public data found |
| Founders | Mohammed Al-Rasheed: UWaterloo Statistics & C&O, ex-Shopify intern. Pranav Bedi: UWaterloo CS & BBA, ex-Shopify, ex-Cerebral Valley (LLM observability), built Squeak (1K+ users) |
| Competitors | Braintrust ($121M raised, revenue unknown, broader eval+observability platform); LangSmith/LangChain ($260M raised, ~$16M ARR, framework-coupled); Langfuse ($4.5M raised, $1.1M revenue 2024, open-source, acquired by ClickHouse Jan 2026); Helicone (~$1.5–2M raised, ~$1M revenue 2024, proxy-based); AgentOps ($2.6M raised, revenue unknown, agent-specific) |
| Moat Signals | No public data found |
| Risk Factors | Crowded/consolidating LLM observability market with well-funded incumbents, brand disambiguation across multiple "Moda" companies, LLM provider platform dependency |
| Founder Reach | Mohammed Al-Rasheed: Twitter not found, LinkedIn 500+, GitHub 49 stars. Pranav Bedi: Twitter not found, LinkedIn not retrievable, GitHub 11 followers |
| Distribution Signals | No public data found |
| Emails | pranav.bedi@uwaterloo.ca (GitHub profile); no official business email found |
