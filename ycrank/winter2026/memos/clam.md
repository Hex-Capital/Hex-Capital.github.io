# Clam

> Enterprise-grade security for broad-access AI Agents like OpenClaw

| Field | Value |
|-------|-------|
| Website | https://tryclam.com |
| YC Page | https://www.ycombinator.com/companies/clam |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Workflow Automation, Security, AI, AI Assistant |

## The Idea

**Problem:** AI agent frameworks like OpenClaw give broad system access to LLMs -- including the ability to browse the web, execute code, call APIs, and manage files. This creates multiple attack surfaces: the AI may inadvertently leak sensitive data (SSNs, credit cards, private keys) in outbound requests, accept prompt injection attacks from external inputs, execute malicious code (reverse shells, encoded payloads), or expose API credentials stored in its context. Enterprises evaluating agentic AI adoption face a gap between the capabilities these frameworks offer and the security controls their compliance teams require. Current mitigations are ad hoc -- developers hand-roll input/output filters or avoid deploying agents in sensitive environments altogether.

**Approach:** Clam provides a "Semantic Firewall" that operates as a network-level security checkpoint around the AI agent's environment. Rather than modifying the AI framework itself, Clam intercepts all inbound and outbound traffic at the network layer and runs a series of scans: PII detection (SSNs, credit cards, private keys), prompt injection detection (jailbreaks, instruction overrides), and malicious code detection (reverse shells, encoded execution). API keys and secrets are injected at the network level so the AI never sees or stores credentials directly. The product deploys OpenClaw agents in dedicated secure virtual machines with terminal access for debugging, 500+ built-in API integrations, and browser-based automation capabilities (LinkedIn company page, Feb 2026).

**Differentiation:** Unlike application-layer guardrail libraries (e.g., Guardrails AI, NeMo Guardrails) that require developers to instrument their code, Clam operates at the network level and wraps the entire agent environment. Unlike broader AI security platforms (Lakera, Noma Security, Protect AI) that focus on enterprise LLM governance across multiple models and deployment patterns, Clam specifically targets the agentic AI use case -- broad-access agents like OpenClaw that interact with external services and execute code. The managed VM approach with credential injection at the network layer means the AI agent never handles raw secrets, which is architecturally distinct from token-vault solutions that require agent-side integration.

**Business Model:** No pricing information is publicly available on tryclam.com as of research date. [Inferred]: Most likely monetization path is usage-based or per-VM pricing for hosted secure agent environments, given the managed infrastructure component (dedicated VMs per customer). A freemium tier for individual developers with paid enterprise tiers for teams is a common pattern in this category.

**TAM/SAM:** The global AI cybersecurity market was valued at $22.4 billion in 2023 and is projected to grow at a 21.9% CAGR through 2028 (Lakera/industry reports, 2024 via search snippet). The AI content moderation sub-market is projected to grow from $1 billion in 2024 to $2.6 billion by 2029 (industry report via search snippet). No public TAM/SAM data found specific to the AI agent security or agentic firewall sub-segment.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-first adoption -- developers deploying OpenClaw or similar agentic AI frameworks discover Clam through the YC network, social media content (LinkedIn daily use-case posts observed), and word-of-mouth. The "ready in minutes" messaging and managed VM approach suggest a self-serve onboarding motion. The WhatsApp interface for agent interaction (LinkedIn company page, Feb 2026) suggests exploration of non-traditional developer surfaces.

## Defensibility

The network-level interception architecture means Clam sees all agent traffic -- inbound and outbound -- creating a potential data advantage over time as the system encounters more attack patterns, PII formats, and prompt injection techniques across customers. The credential-injection-at-network-level approach creates switching costs once enterprise customers route their API secrets through Clam's infrastructure.

No patents or IP filings were found in public sources. No open-source GitHub repositories were identified for Clam/tryclam.

**Market structure:** Large cybersecurity incumbents (Palo Alto Networks, Check Point, F5) have entered AI security through acquisitions (Protect AI for $500M+, Lakera, CalypsoAI for $180M). However, these acquisitions targeted enterprise LLM governance platforms, not agentic AI deployment security specifically. The agentic AI hosting + security combination requires building infrastructure (managed VMs, network-level interception) that is distinct from the governance-layer products incumbents have acquired. [Inferred]: Incumbents' focus on broad AI governance may leave the narrow agentic-deployment-security niche underserved in the near term, but this structural barrier is weak -- network-level scanning is a well-understood pattern in cybersecurity.

**Commoditization risk:** The individual scanning capabilities (PII detection, prompt injection detection, malicious code detection) are available as open-source libraries and cloud services. Lakera offers a free prompt injection API (Lakera Guard). NVIDIA's NeMo Guardrails is open-source. The combination of these into a managed, network-level firewall for agentic AI is not technically complex to replicate. The competitive moat would need to come from speed of execution, depth of integration with agentic frameworks, and accumulation of proprietary threat data.

## Market & Traction

**Traction signals:**
- YC Winter 2026 batch member (YC company page)
- YC launch announcement via @ycombinator on X, mentioning founders @anshulpaul30 and @vaibagra (X post, Feb 2026)
- LinkedIn company page: 293 followers (LinkedIn, Feb 2026)
- LinkedIn activity: daily use-case posts demonstrating OpenClaw agent applications including terminal access, Linear integration, LinkedIn automation, and WhatsApp-based agent interaction (LinkedIn company page, Feb 2026)
- No public revenue data found
- No public user count data found
- No Product Hunt launch found
- No GitHub organization or public repos found
- No Discord or Slack community found
- No app store or Chrome Web Store presence found

**Competitive landscape:**

1. **Noma Security** ($132M raised: $32M Series A Nov 2024 + $100M Series B Jul 2025; 1,300% ARR growth reported; SecurityWeek, Jul 2025): Full-lifecycle AI security and governance across models and agents. Broader enterprise platform vs. Clam's narrow focus on agentic AI deployment security.

2. **Lakera** ($33.9M raised; $5.7M ARR as of Sep 2025; acquired by Check Point Software Nov 2025; TechCrunch, Jul 2024): Real-time LLM security with Lakera Guard API for prompt injection detection. Application-layer integration vs. Clam's network-level approach.

3. **Lasso Security** ($28M raised per PitchBook; $6M seed led by Entrée Capital Nov 2023; SecurityWeek, Nov 2023): Unified AI security platform with secured gateway for LLMs. Enterprise-focused with broader LLM governance scope.

4. **CalypsoAI** ($43.2M raised; acquired by F5 Networks for $180M Sep 2025; Paladin Capital Group, Jun 2023): AI security platform with red-teaming, protection, and oversight. Now part of F5's application security portfolio.

5. **Protect AI** ($108.5M raised; acquired by Palo Alto Networks for $500M+ Jul 2025; SiliconANGLE, Apr 2025): Comprehensive AI security platform, now integrated into Palo Alto's Prisma AIRS. The broadest enterprise AI security play, acquired before reaching standalone maturity.

**Why now:** The emergence of agentic AI frameworks with broad system access (OpenClaw launched as an open-source project with computer-use capabilities) creates a new attack surface category that did not exist 18 months ago. [Inferred]: The specific catalyst is the shift from conversational AI (chatbots with limited tool access) to autonomous agents that browse, execute code, and call external APIs -- this crosses a security threshold where traditional input/output guardrails are insufficient because the agent's environment itself becomes the attack surface. The wave of AI security acquisitions in 2025 (Protect AI, Lakera, CalypsoAI all acquired within months) validates enterprise demand and simultaneously removes three well-funded independent competitors from the market.

## Founders & Team

**Anshul Paul** -- Co-founder & CEO
- UC Berkeley, Management, Entrepreneurship & Technology (M.E.T.) program -- EECS and Business dual major (LinkedIn)
- First full-time employee and founding engineer at HappyRobot (YC-backed, raised $44M Series B at ~$500M valuation Sep 2025; PYMNTS, Sep 2025). Led AI evaluations and observability (YC company page)
- Prior experience at TE Connectivity, Project RISHI, moontek, and M.E.T Strategy Group (RocketReach via search snippet)
- Twitter/X: @anshulpaul30 -- follower count not retrievable
- LinkedIn: linkedin.com/in/anshulpaul30/ -- 500+ connections
- GitHub: No public repos found

**Vaibhav Agrawal** -- Co-founder
- UC Berkeley, Computer Science (LinkedIn)
- Fellow at Sutter Hill Ventures (LinkedIn)
- Data ingestion infrastructure at Sigma Computing (LinkedIn)
- Remote agents orchestration and containerization at Augment Code (Series B, $227M at $977M valuation, Apr 2024; BusinessWire, Apr 2024) (LinkedIn)
- Twitter/X: @vaibagra -- follower count not retrievable
- LinkedIn: linkedin.com/in/vaibhavag2001/
- GitHub: No public repos found

**Co-founder relationship:** Both attended UC Berkeley and were partners during a Computer Security course (YC company page via search snippet). Anshul studied in the M.E.T. program (EECS + Business) while Vaibhav studied Computer Science.

**Founder-market fit:** Both founders have direct experience with the problem domain. Anshul built AI evaluation and observability infrastructure at HappyRobot, an AI agent company processing enterprise workflows -- giving him firsthand experience with the security gaps in deployed AI agents. Vaibhav worked on agent orchestration and containerization at Augment Code, a near-unicorn AI coding agent company, and on data infrastructure at Sigma Computing -- relevant to both the agent-runtime and network-infrastructure aspects of Clam's product. Gustaf Alstromer is listed as their primary YC partner (YC company page).

## Key Risks

**Name confusion with ClamAV:** "Clam" shares its name with ClamAV, the widely-used open-source antivirus engine maintained by Cisco Talos (GitHub: Cisco-Talos/clamav). Search results for "Clam security" frequently return ClamAV content. This creates a brand disambiguation challenge for SEO, developer discovery, and enterprise procurement. The "tryclam.com" domain partially mitigates this but does not resolve it for organic search.

**Platform dependency on OpenClaw:** Current messaging and product positioning are tightly coupled to OpenClaw ("Run OpenClaw Securely in Minutes"). If OpenClaw loses momentum to competing agentic frameworks, or if OpenClaw itself adds native security features, Clam's addressable market narrows significantly. The 500+ API integrations and VM infrastructure may generalize to other frameworks, but this has not been publicly demonstrated.

**Acquisition-driven market consolidation:** Three of the most prominent AI security startups (Protect AI, Lakera, CalypsoAI) were acquired by major cybersecurity incumbents (Palo Alto Networks, Check Point, F5) in 2025. Noma Security raised $100M in Series B. This consolidation means Clam competes against well-resourced platform companies rather than independent startups. However, these incumbents focus on broader AI governance, potentially leaving the agentic-specific niche open.

**Commoditization of core scanning capabilities:** PII detection, prompt injection detection, and malicious code scanning are available as open-source tools and cloud APIs (Lakera Guard, NeMo Guardrails, Amazon Bedrock Guardrails). The network-level wrapping approach is architecturally straightforward for cybersecurity teams to replicate. Defensibility depends on execution speed and framework-specific integration depth rather than proprietary technology.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $22.4B global AI cybersecurity market in 2023, 21.9% CAGR to 2028 (Lakera/industry reports, 2024 via search snippet) |
| SAM | No public data found for the AI agent security sub-segment specifically |
| Traction | YC W26 batch; 293 LinkedIn followers (LinkedIn, Feb 2026); YC launch tweet (@ycombinator, Feb 2026) |
| Revenue Signal | No public data found |
| Founders | Anshul Paul (CEO): UC Berkeley M.E.T., founding engineer at HappyRobot (YC, $44M Series B). Vaibhav Agrawal: UC Berkeley CS, Sutter Hill Ventures Fellow, Augment Code ($227M Series B) |
| Competitors | Noma Security ($132M raised, 1300% ARR growth, full AI security platform); Lakera ($33.9M raised, $5.7M ARR, acquired by Check Point Nov 2025, LLM guardrails); Lasso Security ($28M raised, unified AI security gateway); CalypsoAI ($43.2M raised, acquired by F5 for $180M, AI security platform); Protect AI ($108.5M raised, acquired by Palo Alto Networks for $500M+, AI security platform) |
| Moat Signals | No public data found. Network-level traffic visibility could create data advantage over time |
| Risk Factors | Name confusion with ClamAV, platform dependency on OpenClaw, market consolidation by well-funded incumbents |
| Founder Reach | Anshul Paul: Twitter @anshulpaul30 (count not retrievable), LinkedIn 500+, GitHub not found. Vaibhav Agrawal: Twitter @vaibagra (count not retrievable), LinkedIn (count not retrievable), GitHub not found |
| Distribution Signals | No public data found (no Product Hunt launch, no GitHub repos, no app store presence) |
