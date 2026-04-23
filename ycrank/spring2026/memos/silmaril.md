# Silmaril

> Prompt injection defense that is self-healing

| Field | Value |
|-------|-------|
| Website | https://silmaril.dev |
| YC Page | https://www.ycombinator.com/companies/silmaril |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Security |
| YC Partner | Garry Tan |
| Emails | aum@silmaril.dev |

## The Idea

**Problem:** AI-native applications and agents are vulnerable to prompt injection attacks — adversarial inputs that hijack model behavior to exfiltrate data, execute unauthorized actions, or bypass safety controls. Current defenses (pattern-matching guardrails) catch "at best, 61% of real-world attacks" (YC LinkedIn post, 2026). Attacks span direct injection, indirect injection via tool calls, multi-turn chains, context poisoning, and confused-deputy patterns. Customers today use static guardrail layers (e.g., Lakera Guard, Prompt Security) that rely on input-pattern matching and do not adapt to novel attack vectors autonomously.

**Approach:** Silmaril uses a "multihead classifier" that evaluates user intent, application context, and execution states together, rather than screening inputs alone (Extruct AI profile). The system asks "does this execution lead to a harmful outcome?" instead of "does this input look malicious?" (LinkedIn search snippet). Silmaril deploys autonomous agents that continuously probe customer applications to discover and verify attack chains, generating synthetic attack data via "simulations and nested RL environments" to train a compact classifier (Aum Upadhyay comment on YC LinkedIn post). The system blocks novel attack patterns "in under an hour" (YC LinkedIn post). Coverage extends to inputs, tool calls, MCP, connectors, and internal agents (YC LinkedIn post). Integration requires 5 lines of code into agentic frameworks such as LangGraph (YC company description). Deployment options include managed SaaS and self-hosted (Extruct AI profile).

**Differentiation:** Silmaril claims 99% attack detection rate versus ~50% for "leading guardrails," with 20ms latency overhead — described as 10x lower latency than current SOTA (YC page; YC LinkedIn post). Lakera Guard, prior to its acquisition by Check Point, reported 98%+ detection with sub-50ms latency (Lakera blog). Silmaril's self-healing mechanism — autonomous red-teaming that continuously generates new threat intelligence — differs from static or periodically updated classifier approaches. The open-source GreenDragon project (github.com/Silmaril-Security/GreenDragon, 10 stars) functions as an intentionally vulnerable AI application for security training, inspired by OWASP Juice Shop (GitHub).

**Business Model:** No public pricing page was accessible at time of research (website returned HTTP 429). [Inferred]: Most likely monetization is usage-based or tiered SaaS pricing for API calls/protected endpoints, consistent with B2B developer infrastructure norms in the guardrails space. Competitors like Prompt Security and Lakera used per-API-call or per-seat enterprise pricing.

**TAM/SAM:**
- AI in cybersecurity market: $34.09B in 2025, projected to $213.17B by 2034 (Fortune Business Insights, 2025).
- Generative AI cybersecurity segment: $8.65B in 2025, projected to $35.50B by 2031 at 26.5% CAGR (MarketsandMarkets, 2025).
- Only 13 companies focus specifically on securing AI systems, LLMs, and agentic applications, with combined funding of $414M (Software Strategies Blog, Dec 2025).
- [Inferred]: Silmaril's SAM is the prompt injection / runtime AI guardrails sub-segment within generative AI cybersecurity — likely low single-digit billions today, given the small vendor count and early market formation.

**GTM / Distribution:**
- Cal.com booking page (cal.com/silmaril/15min) indicates founder-led sales (Cal.com listing).
- 5-line SDK integration into LangGraph targets bottom-up developer adoption (YC company description).
- [Inferred]: Primary GTM is developer-led adoption via SDK integration, converting to enterprise contracts as usage scales — a PLG-to-sales motion common in developer infrastructure.

## Defensibility

- **Data flywheel:** Silmaril's autonomous red-teaming agents generate proprietary attack data from each customer deployment, which trains the classifier. [Inferred]: Over time this creates a compounding data advantage — more deployments yield more diverse attack patterns, improving detection for all customers.
- **Switching costs:** Once integrated into agentic frameworks and tuned to application-specific context, replacing Silmaril requires re-integration and loss of accumulated threat intelligence. [Inferred]: Switching costs are moderate — the 5-line integration is lightweight in both directions.
- **Open-source community building:** GreenDragon (GitHub, 10 stars) is early-stage but positions Silmaril as a thought leader in AI security education.

**Market structure:** Four major AI security startups were acquired by incumbents in 2024–2025: Protect AI by Palo Alto Networks for $500M (GeekWire, Apr 2025), Robust Intelligence by Cisco for $400M (Crunchbase, Aug 2024), Prompt Security by SentinelOne for $180M (Yahoo Finance, Aug 2025), and Lakera by Check Point (SecurityWeek, Sep 2025), and CalypsoAI by F5 for $180M (SiliconANGLE, Sep 2025). These acquisitions removed four independent competitors from the market, creating a window for a new standalone entrant. [Inferred]: Incumbents acquiring rather than building suggests the technical complexity of real-time, adaptive prompt injection defense is high enough that build-vs-buy favors buy — but once integrated into platform security suites, these acquirers become potential competitors to standalone vendors like Silmaril.

**Commoditization risk:** LLM providers (OpenAI, Anthropic, Google) could embed native guardrails. Cloud security platforms (Palo Alto, CrowdStrike, SentinelOne) now own acquired AI security capabilities. Open-source alternatives (e.g., LLM Guard) exist but lack the self-healing/adaptive component. [Inferred]: The self-healing, RL-based approach adds technical complexity that raises the bar for commoditization, but the core classification task is well-understood in ML and could be replicated by well-resourced teams.

## Market & Traction

**Traction signals:**
- Customer testimonial: "prevented 8 breaches, blocking $28M in damages" in two months (YC LinkedIn post, 2026). This reflects customer-side outcomes, not Silmaril's own revenue.
- YC LinkedIn launch post: 1,250 reactions, 235 comments (LinkedIn, 2026).
- Garry Tan (YC CEO) shared a separate post about Silmaril (LinkedIn, 2026).
- GitHub: Silmaril-Security/GreenDragon — 10 stars, 0 forks (GitHub).
- Twitter/X: @aumup001 (Aum Upadhyay, handle from YC page — follower count not retrievable). @EduardoVel36291 (Eduardo Velasco, handle from YC page — follower count not retrievable).
- LinkedIn: Eduardo Velasco — 2,000+ followers, 500+ connections (LinkedIn). Aum Upadhyay — 1,000+ followers, 500+ connections (LinkedIn).
- Revenue signal: No public pricing or revenue data found.
- No Product Hunt launch found. No app store or Chrome extension presence found.

**Competitive landscape:**

| Competitor | Key Differentiator vs. Silmaril | Funding | Revenue/ARR |
|---|---|---|---|
| Prompt Security (acq. SentinelOne) | Broader GenAI security platform; now part of endpoint security suite | $23M raised; acquired for ~$180M (Yahoo Finance, Aug 2025) | "Multi-million ARR" (Calcalist, 2025) |
| Lakera (acq. Check Point) | 100K+ adversarial samples/day training data; 98%+ detection; network firewall integration | $30M raised; acquired by Check Point (SecurityWeek, Sep 2025) | Revenue unknown |
| Straiker AI | Dual product (Ascend AI attack simulation + Defend AI runtime); targets frontier AI labs | $21M seed (Lightspeed, Bain Capital Ventures; SecurityWeek, Mar 2025) | Revenue unknown |
| HiddenLayer | Model-level security (MLDR); noninvasive monitoring of model inputs/outputs | $56M raised (TechCrunch, Sep 2023) | Revenue unknown |
| Protect AI (acq. Palo Alto Networks) | ML supply-chain security (model scanning, dependency auditing) | $108.5M raised; acquired for $500M (Bloomberg/GeekWire, 2025) | Revenue unknown |

**Why now:**
- Wave of incumbent acquisitions in 2024–2025 removed four independent AI security vendors from the market, creating a gap for new standalone entrants (multiple sources cited above).
- Agentic AI adoption accelerated in 2025–2026 with frameworks like LangGraph, CrewAI, and AutoGen, expanding the attack surface beyond simple chatbots to multi-step tool-calling agents (YC LinkedIn post references MCP, connectors, internal agents).
- [Inferred]: The shift from single-turn LLM calls to multi-agent workflows with tool access (MCP, function calling) creates novel attack vectors (confused deputy, indirect injection via tool results) that static input-pattern guardrails were not designed to address, opening a market for context-aware, execution-state-monitoring defenses.

## Founders & Team

**Aum Upadhyay** — Co-Founder & CEO
- Built the security and privacy framework at AWS that "prevented over $1.8B in damages" (YC page).
- Ex-Amazon, Expedia Group (LinkedIn headline).
- Listed as Egleston Scholar at Columbia Engineering (Columbia Engineering website — page returned 403, details not accessible).
- Twitter/X: @aumup001 (YC page) — follower count not retrievable.
- LinkedIn: linkedin.com/in/aumupadhyay — 1,000+ followers, 500+ connections (LinkedIn).
- GitHub: aumupadhyay.github.io exists (GitHub Pages) — no public repos with notable star counts found.

**Eduardo Velasco** — Co-Founder & CTO
- Ex-Amazon tech lead; specialized in "low latency ML models that generated $400M in annual revenue" (YC page via search snippet).
- Education: University of Texas at Arlington (LinkedIn).
- Native Spanish speaker (LinkedIn).
- Twitter/X: @EduardoVel36291 (YC page) — follower count not retrievable.
- LinkedIn: linkedin.com/in/ejvelasco — 2,000+ followers, 500+ connections (LinkedIn).
- GitHub: No public repos found.

**Co-founder relationship:** Both founders have Amazon as a shared prior employer (YC page, LinkedIn). Both have ties to Texas-based universities — UT Arlington (Eduardo) and possibly UT Dallas (Aum, per one LinkedIn profile interpretation). [Inferred]: The shared Amazon tenure likely provided the working relationship and domain exposure to cloud security that motivated the company.

**Founder-market fit:** Aum's claim of building AWS's security/privacy framework directly maps to the problem space of defending AI applications at scale. Eduardo's low-latency ML model experience at Amazon is directly relevant to building a fast classifier that adds minimal overhead (20ms) to production AI workloads. The YC page notes "$2.2B in combined impact" across both founders' prior work at AWS and Amazon (YC page).

## Key Risks

**Post-acquisition incumbent competition:** Five AI security startups were acquired by major cybersecurity platforms (Palo Alto Networks, Cisco, SentinelOne, Check Point, F5) in 2024–2025 for a combined $1.4B+ (multiple sources cited above). These acquirers now have AI security capabilities integrated into existing enterprise security suites with established sales channels. Silmaril must compete as a standalone point solution against bundled platform offerings. Mitigation: Silmaril's self-healing/adaptive approach may differentiate from acquired-and-integrated products that slow innovation post-acquisition.

**LLM provider native guardrails:** OpenAI, Anthropic, and Google are investing in built-in safety layers. If model providers ship effective native prompt injection defense, the need for a third-party guardrail layer diminishes. [Inferred]: This risk is partially mitigated by the multi-model, multi-framework nature of enterprise deployments — a vendor-neutral defense layer retains value in heterogeneous environments.

**Validation methodology concerns:** Security professionals raised concerns in the YC LinkedIn post comments about "validation methodology and deterministic reproducibility in an adaptive system" (LinkedIn, 2026). The claimed 99% detection rate vs. 50% for competitors lacks independent third-party verification. Mitigation: The GreenDragon open-source project may serve as a public benchmarking vehicle over time.

**Name disambiguation:** "Silmaril" is a common word (Tolkien's *The Silmarillion*). Multiple unrelated entities share the name across Twitter, GitHub, and web search, which may complicate brand discovery and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in cybersecurity: $34.09B in 2025, projected $213.17B by 2034 (Fortune Business Insights, 2025). GenAI cybersecurity: $8.65B in 2025, projected $35.50B by 2031 at 26.5% CAGR (MarketsandMarkets, 2025). |
| SAM | No public data found |
| Traction | Customer testimonial: 8 breaches prevented, $28M damages blocked in 2 months (YC LinkedIn post, 2026). YC LinkedIn post: 1,250 reactions, 235 comments (LinkedIn, 2026). GreenDragon GitHub: 10 stars (GitHub, 2026). |
| Revenue Signal | No public data found |
| Founders | Aum Upadhyay (CEO): Ex-AWS, built security framework preventing $1.8B in damages (YC page). Eduardo Velasco (CTO): Ex-Amazon tech lead, low-latency ML models generating $400M revenue (YC page). |
| Competitors | Prompt Security ($23M raised, ~$180M acq. by SentinelOne, "multi-million ARR," broad GenAI security; Yahoo Finance 2025). Lakera ($30M raised, acq. by Check Point, revenue unknown, 98%+ detection; TechCrunch 2024). Straiker AI ($21M raised, revenue unknown, dual attack-sim + runtime defense; SecurityWeek 2025). HiddenLayer ($56M raised, revenue unknown, model-level MLDR; TechCrunch 2023). Protect AI ($108.5M raised, $500M acq. by Palo Alto Networks, revenue unknown, ML supply-chain; Bloomberg 2024). |
| Moat Signals | Proprietary attack data from autonomous red-teaming per deployment (YC LinkedIn post, 2026). 20ms latency overhead claimed (YC page). |
| Risk Factors | Post-acquisition incumbent bundling, LLM provider native guardrails, unverified detection benchmarks |
| Founder Reach | Aum Upadhyay: Twitter @aumup001 (count not retrievable), LinkedIn 1,000+ followers. Eduardo Velasco: Twitter @EduardoVel36291 (count not retrievable), LinkedIn 2,000+ followers. (YC page; LinkedIn) |
| Distribution Signals | YC LinkedIn launch post 1,250 reactions (LinkedIn, 2026). Garry Tan shared post (LinkedIn, 2026). Cal.com founder booking page (Cal.com). No Product Hunt launch found. |
| Emails | aum@silmaril.dev (YC page) |
