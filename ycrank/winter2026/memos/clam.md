# Clam (formerly Baseframe)

> Enterprise-grade security for broad-access AI Agents like OpenClaw

| Field | Value |
|-------|-------|
| Website | https://tryclam.com |
| YC Page | https://www.ycombinator.com/companies/clam |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Workflow Automation, Security, AI Assistant |
| YC Partner | Gustaf Alstromer |
| Emails | No public data found |

## The Idea

**Problem:** AI frameworks like OpenClaw enable broad-access AI agents that can interact with external systems, but they create a major data security gap. When AI agents send and receive data across the network, they risk leaking personally identifiable information (SSNs, credit cards, private keys), are vulnerable to prompt injection attacks (jailbreaks, instruction overrides), and can execute malicious code (reverse shells, encoded execution). Enterprises and individuals deploying these agents have no standardized security layer sitting between the agent and the outside world. Current approaches require trusting the AI itself with credentials and sensitive data, creating a single point of failure.

**Approach:** Clam's "Semantic Firewall" operates as a network-level security checkpoint that wraps around the AI agent's environment. Rather than attempting to secure the AI model itself, Clam intercepts all inbound and outbound traffic from the agent and runs a series of scans: PII detection, prompt injection detection, and malicious code scanning. Additionally, API keys and secrets are injected at the network level so the AI agent never sees or stores credentials directly. This architecture means the security layer is model-agnostic and does not depend on the AI following instructions to stay safe (YC company page).

**Differentiation:** Unlike model-layer guardrails that attempt to constrain the AI through prompting or fine-tuning, Clam operates at the network level, making it independent of the underlying model. This positions it differently from acquired competitors like Lakera (acquired by Check Point, Sep 2025) and CalypsoAI (acquired by F5, Sep 2025), which focused more on prompt-layer and cognitive-layer interventions respectively. Clam's network-level approach means it can theoretically protect any AI framework without requiring integration into the model's inference pipeline. The credential injection mechanism — keeping secrets out of the AI's context entirely — is a distinct architectural choice compared to alternatives that allow the AI to handle credentials directly.

**Business Model:** No public pricing page was found on tryclam.com at the time of research; the website displayed only the tagline "Run OpenClaw Securely in Minutes." [Inferred]: Most likely monetization path is usage-based or per-seat SaaS pricing targeting enterprise deployments of AI agents, consistent with the B2B security space and the "enterprise-grade" positioning.

**TAM/SAM:** The AI firewall for LLMs market was valued at $410 million in 2024 and is projected to reach $3.2 billion by 2033 at a 25.4% CAGR (ResearchIntelo, 2024 via search snippet). IT-Harvest estimated the current AI firewall segment at $30 million with 100% expected growth in 2026 (TechTarget, 2025 via search snippet). 360iResearch estimated the market at $260 million in 2025, projecting $800 million by 2032 (TechTarget, 2025 via search snippet). The broader AI cybersecurity market is forecast to reach $134 billion by 2030 (via search snippet). The wide variance in estimates reflects the nascent and still-forming nature of this market category.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-first adoption through the OpenClaw ecosystem — the product name-checks OpenClaw specifically and promises setup "in minutes," suggesting a self-serve onboarding flow targeting developers and teams already building with OpenClaw. Enterprise upsells would follow initial developer adoption.

## Defensibility

Clam is at a very early stage; defensibility signals are limited. The "Semantic Firewall" concept — network-level interception and scanning of AI agent traffic — is an architectural approach rather than a patented technology. No patents were found in public sources.

Potential moat signals that could develop over time: (1) Data advantage — as the firewall processes more agent traffic, Clam could build proprietary detection models for novel prompt injection patterns and data exfiltration techniques; (2) Switching costs — once deployed as a network-level proxy around production AI agents, removing or replacing Clam would require reconfiguring infrastructure and credential management; (3) Integration depth — tight integration with OpenClaw and other AI frameworks could create ecosystem lock-in.

**Market structure:** The major AI security startups that were independent competitors have been acquired by large cybersecurity incumbents in 2025: Lakera by Check Point (~$300M), Protect AI by Palo Alto Networks (~$500M), CalypsoAI by F5 (~$180M), and Prompt Security by SentinelOne (Venturelab; GeekWire; Paladin Capital; SecurityWeek, all 2025 via search snippets). These incumbents may deprioritize or absorb these products into broader platform bundles, potentially creating distribution friction for buyers who want standalone, best-of-breed AI agent security. [Inferred]: This consolidation wave could create an opening for a focused independent player, as incumbent integrations typically take 12-24 months and may dilute product focus.

**Commoditization risk:** The core scanning capabilities (PII detection, prompt injection detection, malicious code detection) are buildable by any well-resourced security team. Open-source tools like LLM Guard already provide some of these capabilities. The barrier is in the integration quality, detection accuracy at low latency, and the network-level credential injection architecture. Multiple startups could build comparable products.

## Market & Traction

### Traction Signals

**Prior product (BaseFrame):** The company originally launched as BaseFrame, an AI-powered hardware design validation platform, on January 16, 2026 via a Y Combinator LinkedIn post that received 351 likes and 71 comments (YC LinkedIn post, Jan 2026).

**Current product (Clam):** Y Combinator tweeted about Clam's launch, announcing the "Semantic Firewall" product (@ycombinator on X, 2026). No user counts, revenue figures, customer names, or download metrics were found in public sources for the Clam product.

- **Company LinkedIn:** linkedin.com/company/tryclam — listed as "Clam (YC W26)" (LinkedIn via search snippet). Follower count not retrievable.
- **Founder Twitter/X handles:** @anshulpaul30 (Anshul Paul), @vaibagra (Vaibhav Agrawal) — referenced in YC's launch tweet. Follower counts not retrievable due to JavaScript rendering.
- **Product Hunt:** No Product Hunt listing found for Clam or Baseframe.
- **GitHub:** No public GitHub repos found for tryclam or semantic-firewall.
- **Discord/Slack community:** No public data found.
- **App store/extension:** Not applicable (network-level proxy product).

### Competitive Landscape

| Competitor | Key Differentiator vs. Clam | Funding | Status |
|---|---|---|---|
| **Lakera** (now Check Point) | Broad GenAI security platform with prompt-layer protection (Lakera Guard); focused on enterprise compliance and data loss prevention. Clam differentiates with network-level interception vs. Lakera's API-layer approach. | $30M raised; acquired by Check Point for ~$300M (Sep 2025) (Venturelab, 2025 via search snippet) | Acquired |
| **Protect AI** (now Palo Alto Networks) | Comprehensive AI security platform covering the full ML pipeline (model scanning, supply chain risk). Broader scope than Clam's agent-focused firewall. | $60M Series B; acquired by Palo Alto Networks for ~$500M (Apr 2025) (GeekWire, 2025 via search snippet) | Acquired |
| **CalypsoAI** (now F5) | Cognitive-layer intervention that analyzes and reshapes agent "thoughts" before execution. Clam operates at network level rather than the cognitive layer. | $43.2M raised; acquired by F5 for ~$180M (Sep 2025) (Paladin Capital, 2025 via search snippet) | Acquired |
| **Prompt Security** (now SentinelOne) | Secures AI across browsers, copilots, coding assistants, and apps. Broader surface area than Clam's agent-focused approach. | $23M raised; acquired by SentinelOne (Aug 2025) (SecurityWeek, 2025 via search snippet) | Acquired |
| **Pillar Security** | Unified AI security platform with AI fingerprinting, asset inventory, adversarial testing, and adaptive guardrails across the full AI lifecycle. Independent and active. | $9M seed (Apr 2025) (SecurityWeek, 2025 via search snippet) | Active |

### Why Now

[Inferred]: Several specific catalysts have converged: (1) The rapid proliferation of broad-access AI agent frameworks like OpenClaw in 2025-2026, which give AI agents the ability to execute code, browse the web, and call APIs autonomously — creating an urgent new attack surface; (2) The wave of acquisitions of standalone AI security startups by large incumbents (Lakera, Protect AI, CalypsoAI, Prompt Security all acquired in 2025), which has cleared the field of independent competitors and may leave a gap as these products are integrated into larger platforms; (3) Enterprise adoption of AI agents is moving from experimentation to production deployment, creating demand for security tooling purpose-built for agent workflows rather than retrofitted from traditional application security.

## Founders & Team

**Anshul Paul** — Co-founder & CEO
- EECS and Business, UC Berkeley (M.E.T. program) (YC company page)
- First full-time employee and founding engineer at HappyRobot, a YC-backed logistics AI company that raised a $44M Series B led by Base10 Partners at ~$500M valuation (Sep 2025) (Upstarts Media, Sep 2025 via search snippet). At HappyRobot, Anshul led AI evals, observability, and enterprise integrations (YC company page).
- Previously worked on robotics startups (YC LinkedIn post, Jan 2026 via WebFetch)
- Twitter/X: @anshulpaul30 — count not retrievable (referenced in YC launch tweet)
- LinkedIn: linkedin.com/in/anshulpaul30 — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found under "anshulpaul30"

**Vaibhav Agrawal** — Co-founder
- CS, UC Berkeley (YC company page)
- Fellow at Sutter Hill Ventures (YC company page)
- Worked on data ingestion infrastructure at Sigma Computing (YC company page)
- Worked on remote agents orchestration and containerization at Augment Code (YC company page)
- Previously worked on robotics startups (YC LinkedIn post, Jan 2026 via WebFetch)
- Twitter/X: @vaibagra — count not retrievable (referenced in YC launch tweet)
- LinkedIn: linkedin.com/in/vaibagra — headline: "BaseFrame (YC W26)" (LinkedIn via search snippet)
- GitHub: No public repos found under "vaibagra"

**Co-founder relationship:** Anshul and Vaibhav are former Berkeley roommates who were partners during a Computer Security course at Berkeley (YC company page; YC LinkedIn post via WebFetch). Both have backgrounds in robotics startups.

**Founder-market fit:** Anshul's experience leading AI evals and observability at HappyRobot (a production AI agent company serving enterprises like DHL and Schneider) gives him direct exposure to the security challenges of deploying AI agents in enterprise environments. Vaibhav's work on remote agent orchestration at Augment Code and infrastructure at Sigma Computing provides systems-level engineering experience relevant to building a network-level proxy. Their shared Computer Security coursework at Berkeley and the fact that they previously built together (BaseFrame) demonstrates technical alignment on security problems. No advisors, board members, or notable angel investors were found in public sources beyond the YC standard deal and Gustaf Alstromer as YC Group Partner.

## Key Risks

**Pivot recency:** The company pivoted from BaseFrame (hardware design validation) to Clam (AI agent security) during the W26 batch. The BaseFrame launch post appeared on January 16, 2026, and the Clam product launched subsequently. This rapid pivot means the current product is extremely early, with limited time to validate product-market fit. The prior product's traction (351 likes, 71 comments on YC LinkedIn) does not transfer to the new product.

**Incumbent integration risk:** All four major standalone AI security competitors were acquired by large cybersecurity platforms (Check Point, Palo Alto Networks, F5, SentinelOne) in 2025. These incumbents have massive sales teams and existing enterprise relationships. If they successfully integrate AI agent security into their platforms as bundled features, Clam faces distribution disadvantage as a standalone product competing against bundled security suites.

**OpenClaw dependency:** The product messaging is tightly coupled to OpenClaw ("Run OpenClaw Securely in Minutes"). If OpenClaw's market share shifts, or if OpenClaw itself builds native security features, Clam's positioning weakens. Broadening to support multiple AI agent frameworks would mitigate this but requires additional engineering investment.

**Brand disambiguation:** "Clam" is a common English word shared by multiple businesses (Clam Corporation, Clam Outdoors, The Clam restaurant). This creates SEO challenges and brand confusion that could impede organic discovery and increase customer acquisition costs.

**Commoditization of core scanning capabilities:** PII detection, prompt injection detection, and malicious code scanning are individually addressable by open-source tools (e.g., LLM Guard) and by any team with security engineering expertise. The bundled network-level approach is differentiated but the individual components are not proprietary.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI Firewall for LLMs market: $410M in 2024, projected $3.2B by 2033 at 25.4% CAGR (ResearchIntelo, 2024 via search snippet). Broader AI cybersecurity: $134B by 2030 (via search snippet). IT-Harvest: $30M current, 100% growth expected in 2026 (TechTarget, 2025 via search snippet). |
| SAM | No public data found for the specific AI agent security sub-segment. |
| Traction | YC launch tweet from @ycombinator (2026). Prior product (BaseFrame) YC LinkedIn post: 351 likes, 71 comments (Jan 16, 2026). No user/customer metrics found for Clam. |
| Revenue Signal | No public data found. No pricing page visible on tryclam.com. |
| Founders | Anshul Paul (CEO): UC Berkeley M.E.T., founding engineer at HappyRobot (Series B, ~$500M valuation). Vaibhav Agrawal (Co-founder): UC Berkeley CS, Sutter Hill Ventures Fellow, Sigma Computing, Augment Code. |
| Competitors | Lakera ($30M raised, acquired by Check Point ~$300M, revenue unknown, prompt-layer GenAI security); Protect AI ($60M raised, acquired by Palo Alto ~$500M, revenue unknown, full ML pipeline security); CalypsoAI ($43.2M raised, acquired by F5 ~$180M, revenue unknown, cognitive-layer intervention); Prompt Security ($23M raised, acquired by SentinelOne, revenue unknown, cross-surface AI security); Pillar Security ($9M seed, active, full-lifecycle AI security platform) |
| Moat Signals | No public data found. [Inferred]: Potential data advantage from firewall traffic over time; switching costs from network-level deployment. |
| Risk Factors | Pivot recency (BaseFrame → Clam during batch), incumbent integration risk (4 major competitors acquired by large cybersecurity platforms in 2025), OpenClaw framework dependency |
| Founder Reach | Anshul Paul: Twitter @anshulpaul30 (count not retrievable), LinkedIn 500+ connections. Vaibhav Agrawal: Twitter @vaibagra (count not retrievable), LinkedIn profile exists (count not retrievable). |
| Distribution Signals | YC launch tweet (2026). No Product Hunt listing, no GitHub repos, no app store presence, no Chrome extension found. |
| Emails | No public data found |
