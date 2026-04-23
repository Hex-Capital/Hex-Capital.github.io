# Kinro

> AI sales agents for insurance. Sell everywhere your buyers are.

| Field | Value |
|-------|-------|
| Website | https://www.kinro.ai/ |
| YC Page | https://www.ycombinator.com/companies/kinro |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Sales |
| Team Size | 3 |
| Location | San Francisco, CA, US (kinro.ai; YC page) |
| Tags |  |
| YC Partner | Nicolas Dessaigne (YC page) |
| Emails | No public data found |

## The Idea

**Problem:** Insurance distribution is fragmented and high-friction. Buyers increasingly research via AI assistants (ChatGPT, Gemini), but insurers lack infrastructure to sell through these channels. The existing sales process requires licensed human agents, strict regulatory compliance (NAIC, state-level US, EU), and deep carrier integrations. Insurers pay roughly $100B+ in commissions annually and distributors spend $10B+ on advertising to acquire customers (kinro.ai). Conversion and satisfaction rates suffer under legacy workflows.

**Approach:** Kinro builds AI sales agents that manage the end-to-end insurance sales process — qualification, question answering, personalized coverage explanations, real-time quoting, and policy binding (kinro.ai). Agents are deployed across multiple channels: ChatGPT, Gemini, websites, calls, WhatsApp, comparison sites, and broker channels (kinro.ai). The platform includes built-in regulatory guardrails (NAIC, state-level US, EU), factuality grounding with auditable attribution, and continuous evaluation via a proprietary optimization platform (kinro.ai). The company is SOC 2 Type II certified and GDPR compliant (kinro.ai).

**Differentiation:** Unlike general-purpose AI platforms (OpenAI, Google), Kinro provides vertical infrastructure for regulated insurance distribution: carrier integrations, compliance guardrails, and sales-optimized conversational flows (kinro.ai). Unlike WaniWani (Hexa-backed), which provides AI distribution infrastructure primarily for embedding quotes inside AI platforms (fintech.global, Feb 2026), Kinro emphasizes multi-channel deployment and end-to-end sales optimization. Unlike Insurify ($140.6M raised; TechCrunch, Sep 2021), which is a consumer-facing comparison agent, Kinro sells B2B infrastructure to brokers and carriers. Pierre-Alexandre Kamienny's LinkedIn post describes Kinro's multi-turn GEO optimization strategy — optimizing for conversational turns 3-4 when purchase recommendations actually occur, not just initial awareness (LinkedIn, PA Kamienny).

**Business Model:** No public pricing page found. [Inferred]: Most likely monetization is SaaS fees to brokers/carriers, potentially with a per-quote or revenue-share component given the commission-driven industry economics.

**TAM/SAM:** Generative AI in insurance market: $1.11B in 2025, projected to reach $14.35B by 2035 at 29.11% CAGR (Astute Analytica, Jan 2026 via GlobeNewsWire). Broader AI in insurance: $10.36B in 2025 (Fortune Business Insights via search snippet). The company cites $100B+ in annual insurance commissions and $10B+ in annual distributor advertising spend as the addressable distribution market (kinro.ai).

**GTM / Distribution:** Kinro serves brokers and direct-to-consumer carriers across the US and Europe (YC page). Named "Trusted By" clients on the website: Tuio, Lovys, Dalma, WTW, Assurland, Quartz (kinro.ai). Corentin Hugot announced Kinro would submit its first ChatGPT apps built on existing client buyer-journey data (LinkedIn, ~Feb 2026). [Inferred]: GTM combines direct B2B sales to insurance companies with a platform distribution play through AI assistants (ChatGPT, Claude, Gemini).

## Defensibility

- **Regulatory compliance infrastructure:** Insurance sales require compliance with NAIC, state-level US regulations, and EU requirements. Kinro has built guardrails and achieved SOC 2 Type II certification (kinro.ai). This creates a barrier to entry for horizontal AI tooling companies.
- **Carrier integrations:** End-to-end quoting and binding requires deep integrations with insurance carriers' systems (kinro.ai). [Inferred]: Each carrier integration adds switching cost and serves as a compounding moat.
- **Multi-turn conversational data:** Kinro's proprietary platform continuously evaluates and improves agents (kinro.ai). Pierre-Alexandre Kamienny describes building multi-turn optimization from observed buyer journeys (LinkedIn), which creates a data flywheel as more conversations generate training signal.

**Market structure:** General-purpose AI platforms (OpenAI, Google, Anthropic) are unlikely to build the vertical infrastructure for regulated insurance sales — carrier integrations, compliance engines, and binding workflows — because it requires deep domain-specific partnerships and regulatory expertise that don't scale across their horizontal platform strategies (YC page description). [Inferred]: Incumbent insurers and brokers face channel-conflict risk in building AI distribution that cannibalizes existing agent networks.

**Commoditization risk:** WaniWani (Hexa-backed, founded 2026) directly competes on AI-native insurance distribution infrastructure (fintech.global, Feb 2026). Twelve additional insurance AI apps are in the OpenAI approval pipeline (Reinsurance News, Feb 2026). Aviva has launched its own ChatGPT insurance app (Aviva press release, Mar 2026). The compliance and carrier-integration barriers provide some protection, but the competitive space is forming rapidly.

## Market & Traction

**Traction signals:**
- Named clients: Tuio, Lovys, Dalma, WTW (Willis Towers Watson — one of the world's three largest insurance brokers), Assurland, Quartz (kinro.ai "Trusted By" section)
- Performance metrics from website (no date, no sample size disclosed): time to quote 48 seconds, quote to bind 1 hour, CSAT improvement 68%→92%, conversion rate improvement 20%→40%, agent hours saved 60% (kinro.ai)
- Investors: Y Combinator and Crystal (kinro.ai)
- Hiring: 1 open role — Founding AI Engineer, $120K-$300K salary, 0.75%-2.00% equity (YC jobs page)
- Twitter/X: @kinroai (Tracxn); follower count not retrievable
- LinkedIn: linkedin.com/company/kinro-labs; follower count not retrievable
- Tracxn score: 16/100, ranked 56/57 in their (poorly-matched) competitive category (Tracxn, 2026)
- No Product Hunt launch found. No app store presence found. No Discord/Slack community found.

**Competitive landscape:**

| Competitor | Funding | Differentiation vs. Kinro |
|---|---|---|
| **WaniWani** (Hexa-backed) | Hexa portfolio; amount not disclosed | AI distribution infrastructure; powered Tuio's ChatGPT app (fintech.global, Feb 2026). Most direct competitor — similar vertical focus on insurance distribution via AI platforms. |
| **Insurify** | $140.6M total (TechCrunch, Sep 2021) | Consumer-facing virtual insurance agent for quote comparison. D2C model, not B2B infrastructure. |
| **Avallon AI** (YC S25) | $4.6M seed (BusinessWire, Nov 2025) | AI agents for insurance claims operations, not sales/distribution. Adjacent, not directly competitive. |
| **RiskCube** (YC F24) | $500K seed (search snippet) | AI-native insurance broker for startups. Acts as broker, not infrastructure provider. |

**Why now:**
- OpenAI opened app submissions inside ChatGPT, enabling insurance quoting directly within the platform; first apps approved February 2026 (Reinsurance News, Feb 2026).
- Anthropic's Claude and Google's Gemini are expected to follow with similar third-party app standards (Reinsurance News, Feb 2026).
- [Inferred]: The emergence of AI assistants as a buyer research and purchase channel creates a new distribution surface that didn't exist 18 months ago, shifting insurance distribution from SEO/advertising to conversational AI presence.

## Founders & Team

**Pierre-Alexandre Kamienny** — Co-founder & CEO
- PhD in Reinforcement Learning, Meta AI / Sorbonne University (thesis: "Efficient adaptation of RL agents to unseen tasks," defended 2023) (personal website; HAL thesis repository)
- BSc Computer Science, University of Oxford (Keble College); studies at CentraleSupélec (personal website)
- Led research improving Gemini for financial services at Google DeepMind (YC page)
- Internships at Facebook AI Research Paris, Nokia Bell Labs, Neoxia (personal website)
- Publications at ICML 2022, ICML 2023, NeurIPS 2021, NeurIPS 2022, ICLR 2022 (personal website)
- Twitter/X: @pa_kamienny; follower count not retrievable
- LinkedIn: linkedin.com/in/pakamienny — Google DeepMind (LinkedIn search snippet)
- GitHub: pakamienny.github.io (personal site); repo star counts not retrievable

**Parth Ainampudi** — Co-founder
- MS, The University of Texas at Austin; BS (Hons), IIT Bombay (search snippet via ZoomInfo)
- Led infrastructure for training and inference at Zoox (Amazon) — autonomous vehicles (YC page; LinkedIn)
- Robotics Software Engineer at Samsung; intern at Mitsubishi Electric Research Labs (search snippet)
- Filed patents with USPTO on robotics systems (Justia Patents)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/partha42 — Software Engineer at Zoox (LinkedIn)
- GitHub: github.com/parthos; repo details not retrievable

**Corentin Hugot** — Co-founder & COO
- First employee at an insurance startup; worked directly with brokers and carriers (YC page)
- InsurTech domain expertise across US and European markets (YC page; LinkedIn)
- Twitter/X: @hugot_core5462 (X search result); follower count not retrievable
- LinkedIn: linkedin.com/in/corentin-hugot — COO @Kinro.ai (YC 26) (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Pierre-Alexandre and Parth both have ML/AI engineering backgrounds, and Corentin brings insurance domain expertise. No shared prior employer or university overlap is visible from Phase 3 research.

**Founder-market fit:** Pierre-Alexandre's DeepMind work on Gemini for financial services provides direct experience building LLMs for regulated verticals. Parth's infrastructure experience at Zoox (training/inference systems for safety-critical autonomous vehicles) maps to building reliable, production-grade AI systems. Corentin's experience as first employee at an insurance startup and direct relationships with brokers and carriers provides domain expertise and distribution network. The team combines ML research (ICML/NeurIPS), production ML infrastructure, and insurance industry knowledge.

## Key Risks

**AI platform dependency:** Kinro's distribution strategy relies on ChatGPT, Gemini, and Claude continuing to allow third-party insurance apps. OpenAI could change app policies, increase revenue-share requirements, or launch native insurance features. Twelve additional insurance apps are already in the OpenAI pipeline (Reinsurance News, Feb 2026), and Aviva has launched its own app (Aviva, Mar 2026), potentially commoditizing the channel.

**WaniWani direct competition:** WaniWani, backed by Hexa (eFounders), provides nearly identical AI distribution infrastructure for insurance on ChatGPT/Claude/Gemini and already powered the first approved insurance app (Tuio) on ChatGPT (fintech.global, Feb 2026). Hexa's studio model provides operational support and capital access.

**Regulatory fragmentation:** Insurance regulation varies by US state and EU country. Maintaining compliance across jurisdictions requires ongoing legal and engineering investment. A compliance failure could result in license revocation or fines, particularly acute for a 3-person team operating across US and Europe simultaneously.

**Customer concentration signal:** Six named clients with WTW being a major broker (kinro.ai). Loss of WTW or another anchor client at this stage could materially impact revenue and credibility. No public revenue figures disclosed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Generative AI in insurance: $1.11B (2025), projected $14.35B by 2035 at 29.11% CAGR (Astute Analytica, Jan 2026 via GlobeNewsWire). Company cites $100B+ annual insurance commissions (kinro.ai). |
| SAM | No public data found |
| Traction | 6 named "Trusted By" clients including WTW (kinro.ai). Website claims: 48s time-to-quote, 20%→40% conversion, 68%→92% CSAT (kinro.ai). 1 open job posting (YC jobs). |
| Revenue Signal | No public data found |
| Founders | Pierre-Alexandre Kamienny (CEO): PhD Meta AI/Sorbonne, Oxford, DeepMind Gemini financial services, 5 top-venue ML publications. Parth Ainampudi: MS UT Austin, BS IIT Bombay, Zoox ML infra, USPTO patents. Corentin Hugot (COO): First employee at insurance startup, US/EU broker-carrier relationships. |
| Competitors | WaniWani (Hexa-backed, amount undisclosed, revenue unknown, most direct — same AI-native insurance distribution). Insurify ($140.6M raised, revenue unknown, consumer-facing comparison). Avallon AI ($4.6M seed, revenue unknown, claims not sales). RiskCube ($500K seed, revenue unknown, broker for startups). |
| Moat Signals | SOC 2 Type II certification (kinro.ai). Regulatory compliance engine for NAIC/state/EU (kinro.ai). Carrier integrations for real-time quoting and binding (kinro.ai). Multi-turn conversational optimization from client data (LinkedIn, PA Kamienny). |
| Risk Factors | AI platform policy dependency, direct competition from Hexa-backed WaniWani, regulatory fragmentation across US states and EU |
| Founder Reach | Pierre-Alexandre Kamienny: Twitter @pa_kamienny (count not retrievable), LinkedIn 500+ connections. Parth Ainampudi: Twitter not found, LinkedIn linkedin.com/in/partha42. Corentin Hugot: Twitter @hugot_core5462 (count not retrievable), LinkedIn linkedin.com/in/corentin-hugot. |
| Distribution Signals | No Product Hunt launch found. ChatGPT app submissions announced ~Feb 2026 (Corentin Hugot LinkedIn). Company Twitter @kinroai (Tracxn). LinkedIn linkedin.com/company/kinro-labs. |
| Emails | No public data found |
