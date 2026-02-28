# Terminal Use

> Vercel for background agents

| Field | Value |
|-------|-------|
| Website | https://www.terminaluse.com/ |
| YC Page | https://www.ycombinator.com/companies/terminal-use |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, Workflow Automation, Infrastructure, AI |

## The Idea

**Problem:** Developers building AI agents that run as long-lived background processes (e.g., coding agents, data processing agents) face fragmented tooling across the agent lifecycle. Production-grade orchestration for agents that use filesystems is lacking. Per the company's messaging, issues include memory usage variations, crashes requiring retry logic, and state management in local filesystems when working with tools like the Claude Agent SDK (LinkedIn post by Gustaf Alströmer, YC Partner). Current general-purpose cloud platforms (AWS, GCP, Vercel) are optimized for request-response web workloads, not persistent agent processes that interact with filesystems.

**Approach:** Terminal Use provides an orchestration platform purpose-built for background agents that use filesystems. The platform is CLI-first: developers use `tu init` to initialize an agent project and `tu deploy` to deploy it. Deployment automates Docker image building, pushes to a container registry, and activates a live agent endpoint (company website). The platform handles messaging, filesystem management, and enterprise data isolation (YC company page). It supports any SDK and custom dependencies.

**Differentiation:** Compared to general sandbox providers like E2B (cloud sandboxes for code execution) and Daytona (programmatic stateful sandboxes), Terminal Use focuses specifically on the full agent lifecycle — build, evaluate, deploy, A/B test, and generate evals from production (LinkedIn post via search snippet). Compared to Vercel (which is expanding into agent hosting via Fluid compute), Terminal Use is purpose-built for filesystem-heavy background agents rather than adapted from a web deployment platform. Compared to Modal Labs (serverless GPU/compute infrastructure), Terminal Use targets the agent orchestration layer rather than raw compute.

**Business Model:** No pricing page or tiers are publicly visible on the company website. The site offers a free trial via a login page and a demo booking link. [Inferred]: Most likely monetization path is consumption-based pricing (per agent-hour or per compute unit), consistent with infrastructure-as-a-service norms in this segment.

**TAM/SAM:** The global agentic AI market is valued at $7.55 billion in 2025 and projected to reach $199.05 billion by 2034 (Precedence Research via search snippet). The AI agents market is valued at $8.03 billion in 2025 and projected to grow to $251.38 billion by 2034 at a CAGR of 46.61% (Fortune Business Insights via search snippet). MarketsandMarkets estimates the agentic AI market at $7.06 billion in 2025, growing to $93.20 billion by 2032 at a CAGR of 44.6% (MarketsandMarkets via search snippet). No SAM estimate specific to agent hosting infrastructure was found.

**GTM / Distribution:** [Inferred]: The CLI-first design and developer-focused positioning suggest a bottom-up developer adoption model similar to Vercel's. The company promotes its own internal dogfooding — "the team uses Terminal Use internally to ship Terminal Use itself" (LinkedIn post via search snippet) — as a credibility signal. Gustaf Alströmer, a YC Group Partner, shared the company on LinkedIn (LinkedIn, 2026), which may provide network-driven early distribution within the YC ecosystem.

## Defensibility

No defensibility signals found in public sources at this stage. The GitHub organization (github.com/terminaluse) has 3 public repositories, all with minimal star counts (0–1 stars as of February 2026).

[Inferred]: Potential moat could develop via workflow lock-in — once teams build their agent deployment, evaluation, and A/B testing pipelines on Terminal Use's CLI and platform, switching costs increase. Data advantages could emerge from aggregated agent performance telemetry across customers. However, these are unproven at this stage.

**Market structure:** Vercel has entered the agent hosting space with Fluid compute, agent SDKs, and the Skills.sh open ecosystem (InfoQ, Feb 2026). However, Vercel's architecture is optimized for web application deployments (Next.js, serverless functions), and adapting it for long-running, filesystem-heavy background agents may require fundamental architectural changes. [Inferred]: The structural barrier for Vercel specifically is that their serverless model, while extended with Fluid compute, was not designed from first principles for persistent filesystem-bound agent workloads. For cloud providers (AWS, GCP), the barrier is the developer experience gap — they provide raw primitives rather than an opinionated agent lifecycle platform.

**Commoditization risk:** E2B ($21M raised), Daytona ($31M total), Blaxel ($7.3M raised), and Modal Labs (~$111M raised) all operate in adjacent or overlapping segments of agent infrastructure. All are better funded. The core technical components — container orchestration, filesystem isolation, CLI tooling — are well-understood infrastructure patterns. The differentiation lies in the specific opinionated combination and agent lifecycle integration, which is replicable by well-resourced competitors.

## Market & Traction

**Traction signals:**
- Company Twitter/X: @terminaluse (handle confirmed from company website; follower count not retrievable due to JavaScript rendering)
- Company LinkedIn: No dedicated company page found in search results
- GitHub organization (github.com/terminaluse): 3 public repositories with 0–1 stars each (GitHub, Feb 2026)
- Gustaf Alströmer (YC Group Partner) shared the company on LinkedIn (LinkedIn, 2026)
- No Product Hunt launch found
- No Discord or Slack community found
- No press coverage in named publications found
- No public revenue, user count, or waitlist data found

**Competitive landscape:**

1. **E2B** ($21M Series A, led by Insight Partners, July 2025; revenue described as adding "seven figures" in new business monthly): Open-source sandbox protocol for AI agents. Differentiator vs. Terminal Use: focused on ephemeral code execution sandboxes rather than persistent background agent orchestration with filesystem management. Claims 88% of Fortune 100 signed up (E2B blog, July 2025).

2. **Daytona** ($24M Series A, led by FirstMark Capital, Feb 2026; $31M total; $1M forward revenue run rate achieved in <3 months per AlleyWatch, Feb 2026): Programmatic stateful sandboxes with sub-90ms creation. Differentiator vs. Terminal Use: sandbox-centric with snapshot/fork/resume primitives, rather than an end-to-end agent lifecycle platform (build → eval → deploy → A/B test).

3. **Modal Labs** ($87M Series B, led by Lux Capital, Sep 2025; ~$111M total; $1.1B valuation; in talks for new round at ~$2.5B per TechCrunch, Feb 2026): Serverless cloud compute for data and AI workloads. Differentiator vs. Terminal Use: general-purpose compute infrastructure, not specifically designed for agent orchestration or filesystem-heavy background agents.

4. **Blaxel** ($7.3M seed, led by First Round Capital, July 2025; $7.8M total): Serverless agent deployment with automatic scaling. Differentiator vs. Terminal Use: API-first serverless deployment rather than CLI-first filesystem-oriented orchestration. Positions as "AWS for AI agents" (VentureBeat, July 2025).

5. **Vercel** ($250M+ total funding; entering agent space): Expanding into agent hosting via Fluid compute, agent SDKs, and Skills.sh ecosystem. Differentiator vs. Terminal Use: broad web deployment platform adapting to agents, whereas Terminal Use is purpose-built for background agents. Vercel Agent is available in Beta on Enterprise and Pro plans (Vercel docs, 2026).

**Why now:** [Inferred]: The catalyst is the rapid maturation of coding agents (Claude Code, Cursor, Codex) and autonomous agents in 2024–2025, which created demand for infrastructure to deploy these agents as persistent background processes rather than interactive sessions. Deloitte's 2026 Software Industry Outlook notes that "established software players are expected to focus on becoming full-stack, end-to-end agentic platforms" in 2026 (Deloitte, 2026 via search snippet). The emergence of agent SDKs (Claude Agent SDK, OpenAI Agents SDK) lowered the barrier to building agents but left a gap in production deployment infrastructure specifically for long-running, filesystem-dependent workloads.

## Founders & Team

**Filip Balucha** — Co-founder
- BSc (Hons) Artificial Intelligence & Computer Science, University of Edinburgh; exchange at University of Toronto (University of Edinburgh blog, Feb 2021)
- Previously: Teaching Support at University of Edinburgh School of Informatics; Software Engineering Intern at Slido (Medium, Slido dev blog); Software Engineer at Palantir working on Ontology / frontend for Foundry's most-used app (YC company page)
- Twitter/X: @tbalucha (handle found via search; follower count not retrievable)
- LinkedIn: linkedin.com/in/filip-balucha
- GitHub: github.com/filipbalucha — 2 public repos (both forks), 10 followers

**Stavros Filosidis** — Co-founder
- Electrical & Computer Engineering, Aristotle University of Thessaloniki, majoring in Computer Science (LinkedIn via search snippet)
- Won first prize in EESTech Challenge in Munich (European student technology competition) as part of the SmartClass team (Invest In Thessaloniki)
- Previously: Software Engineer at Palantir working on infrastructure for dev tooling (YC company page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/stavrosfilosidis — headline: "Software Engineer - Palantir Technologies"
- GitHub: github.com/Stavrosfil — 11 public repos, 36 followers; pinned repos include distributed-knn (5 stars), old-dotfiles (7 stars), pymt (7 stars)

**Vivek Raja** — Co-founder
- BSc Mathematics and Computer Science, University of Edinburgh (LinkedIn via search snippet)
- Head of Perception for Edinburgh University Formula Student; led team to victory in Formula Student AI UK in 2019 and 2020 (search snippet)
- Previously: Software Engineer at Invert (bioprocess data solutions); Forward Deployed Engineer → Technical Lead at Palantir, where he led technical delivery of one of the largest agent use cases across US hospitals (YC company page, ZoomInfo via search snippet)
- Twitter/X: No confirmed account linked to this Vivek Raja at Terminal Use
- LinkedIn: linkedin.com/in/v-raja
- GitHub: No public repos found under a confirmed handle

**Co-founder relationship:** Filip Balucha and Vivek Raja both attended the University of Edinburgh and subsequently both worked at Palantir. Per the YC company page: "Vivek and Filip went to University together, and they became close friends when they worked together at Palantir." Stavros Filosidis also worked at Palantir, providing a shared employer with both other co-founders.

**Founder-market fit:** All three co-founders worked at Palantir, where they gained direct experience with large-scale data infrastructure and agent deployment. Vivek Raja specifically led the technical delivery of one of the largest agent use cases at Palantir across US hospitals, providing firsthand exposure to the challenges of deploying agents in production environments. Stavros Filosidis worked on infrastructure for developer tooling at Palantir, relevant to building a CLI-first developer platform. Filip Balucha's background in Ontology and Foundry frontend gives product-side perspective.

## Key Risks

**Well-funded direct competitors:** E2B ($21M), Daytona ($31M), Blaxel ($7.8M), and Modal Labs (~$111M) are all building adjacent or overlapping agent infrastructure products with significantly more capital. Daytona reported reaching $1M ARR in under three months (AlleyWatch, Feb 2026), demonstrating rapid market traction by a competitor. E2B claims 88% of Fortune 100 signed up (E2B blog, July 2025).

**Vercel platform expansion:** Vercel has launched Agent capabilities in Beta with Fluid compute, agent SDKs, and the Skills.sh open ecosystem (InfoQ, Feb 2026). Terminal Use explicitly positions itself as "Vercel for background agents," making Vercel's own expansion into this space a direct threat to the positioning and value proposition. Vercel has an established developer distribution channel that Terminal Use lacks.

**Brand disambiguation:** "Terminal Use" is a common English phrase, and multiple unrelated projects share the name on GitHub (e.g., CursorTouch/Terminal-Use, chaokunyang/browser-terminal-use). This may impede organic search discoverability and brand building. The company's GitHub organization repos currently have minimal visibility (0–1 stars).

**Narrow technical wedge:** The platform's differentiation centers on filesystem-heavy background agents specifically. If the agent ecosystem evolves toward stateless, API-based architectures or if major SDKs abstract away filesystem dependencies, the core use case may narrow. The company's tagline ("purpose-built for agents that use filesystems") ties its value proposition to a specific architectural pattern.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.55B agentic AI market in 2025, projected $199.05B by 2034 (Precedence Research via search snippet); $8.03B AI agents market in 2025, projected $251.38B by 2034 at 46.61% CAGR (Fortune Business Insights via search snippet) |
| SAM | No public data found |
| Traction | No public user, revenue, or waitlist data found. GitHub org: 3 repos, 0–1 stars (GitHub, Feb 2026) |
| Revenue Signal | No public data found |
| Founders | Filip Balucha: U of Edinburgh AI & CS, ex-Palantir (Ontology). Stavros Filosidis: Aristotle U of Thessaloniki ECE, ex-Palantir (dev tooling infra). Vivek Raja: U of Edinburgh Math & CS, ex-Palantir Technical Lead (led largest agent use case across US hospitals) |
| Competitors | E2B ($21M raised, "seven figures" monthly new business, open-source sandbox protocol vs. Terminal Use's full lifecycle orchestration); Daytona ($31M raised, $1M ARR in <3 months, stateful sandbox focus vs. Terminal Use's CLI-first agent lifecycle); Modal Labs (~$111M raised, $1.1B valuation, general compute infra vs. agent-specific orchestration); Blaxel ($7.8M raised, revenue unknown, serverless API-first vs. CLI-first filesystem focus); Vercel (entering agent space with Fluid compute, established developer distribution vs. Terminal Use's purpose-built approach) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded direct competitors (E2B, Daytona, Modal, Blaxel), Vercel platform expansion into agent hosting, brand disambiguation challenges with common-phrase name |
| Founder Reach | Filip Balucha: Twitter @tbalucha (count not retrievable), LinkedIn linkedin.com/in/filip-balucha, GitHub 10 followers. Stavros Filosidis: Twitter not found, LinkedIn linkedin.com/in/stavrosfilosidis, GitHub 36 followers. Vivek Raja: Twitter not found, LinkedIn linkedin.com/in/v-raja, GitHub not found |
| Distribution Signals | No Product Hunt launch found. No app store or extension presence. Gustaf Alströmer (YC Group Partner) shared company on LinkedIn (2026) |
