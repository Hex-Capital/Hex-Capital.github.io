# IncidentFox

> AI SRE agent that triages, coordinates, and fixes production incidents

| Field | Value |
|-------|-------|
| Website | https://incidentfox.ai |
| YC Page | https://www.ycombinator.com/companies/brownie |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Artificial Intelligence, Developer Tools |

## The Idea

**Problem:** Engineering teams face high-stakes production incidents that require rapid diagnosis and remediation. On-call engineers must manually query logs, metrics, traces, and deployment history across fragmented tooling, often under time pressure and at odd hours. Current AI SRE tools require months of setup to build integrations and configure for each team's specific infrastructure (IncidentFox website; YC page). The customer segment is engineering and SRE teams at companies running production infrastructure with observability stacks (Datadog, Grafana, Prometheus, etc.).

**Approach:** IncidentFox is an AI SRE agent that operates natively within Slack (with Microsoft Teams and Google Chat support). On setup, it analyzes the customer's codebase, Slack history, and past incidents to automatically discover and generate the integrations needed — no manual MCP server building required (YC page). During an incident, it queries logs, metrics, and deployment history to identify root causes, generates fix scripts, and presents them for human-in-the-loop approval before execution (IncidentFox website). The platform supports 300+ pre-built integrations and claims setup time under one day (YC page). It uses a multi-agent orchestration architecture, alert correlation (claiming 85-95% noise reduction), anomaly detection using Meta's Prophet algorithm, and RAPTOR-style hierarchical retrieval for processing large documents (GitHub README; HN post, Jan 2026).

**Differentiation:** Unlike established incident management platforms (incident.io, Rootly, FireHydrant) that primarily coordinate human workflows, IncidentFox focuses on autonomous investigation and root-cause analysis. Unlike Resolve AI which relies on external observability platforms, IncidentFox auto-discovers and generates integrations from the codebase itself (YC page). Unlike Cleric which operates as a read-only diagnosis layer, IncidentFox offers human-in-the-loop remediation with fix execution capabilities (IncidentFox website). The platform is open-source under Apache 2.0, contrasting with competitors like Resolve AI and incident.io which are proprietary (GitHub).

**Business Model:** No pricing page is publicly available. The website mentions SaaS, on-premise/VPC, and open-source self-hosting deployment options (IncidentFox website). The company is actively seeking 2 pilot partners for Q1 2026 (IncidentFox website). [Inferred]: Most likely monetization path is an open-core model with a free self-hosted tier and paid enterprise tiers adding multi-team RBAC, SSO/OIDC, compliance features, and managed hosting, based on the explicit differentiation between open-source and enterprise features in the GitHub README.

**TAM/SAM:** The AIOps market was estimated at $11.16 billion in 2025 with a 25.3% CAGR (Research and Markets, 2025 via search snippet). Alternative estimates range from $2.23 billion (Fortune Business Insights, 2025 via search snippet) to $17 billion (SkyQuest, 2025 via search snippet), reflecting different scope definitions. No SAM estimate specific to AI SRE agents was found.

**GTM / Distribution:** The company has two Show HN posts on Hacker News (Feb 2026 and Jan 2026) and an open-source GitHub repository as initial distribution channels. The website actively recruits pilot partners. [Inferred]: Most likely distribution path is bottom-up developer adoption via the open-source project and Slack integration, converting to paid enterprise tiers as teams scale, based on the Apache 2.0 licensing and Slack-native UX.

## Defensibility

The open-source repository (305 stars, 27 forks as of Feb 2026; GitHub) represents an early community signal. The platform's auto-discovery of customer infrastructure and learning from past incidents creates a per-customer data advantage — each deployment accumulates organizational context (codebase structure, incident history, team patterns) that would need to be rebuilt with a competitor (IncidentFox website). The 300+ pre-built integrations represent engineering effort that creates a breadth-of-coverage barrier (YC page). The OpenRag repository (34 stars; GitHub) demonstrates proprietary RAG techniques (74% Recall@10 on MultiHop-RAG benchmark) that underpin the retrieval system.

**Market structure:** Large observability incumbents (Datadog, PagerDuty) are adding AI SRE features to their existing platforms (Datadog's Bits AI, PagerDuty SRE Agents). However, these features are tied to their own data platforms — Datadog's Bits AI requires deep Datadog adoption, while IncidentFox integrates across multiple observability vendors (Dash0 comparison, 2026). [Inferred]: The structural barrier is that incumbents' AI SRE features serve as lock-in mechanisms for their core platforms, making vendor-agnostic investigation a difficult feature for them to prioritize, as it would reduce platform switching costs.

**Commoditization risk:** The AI SRE space is crowded and rapidly growing. Well-funded startups (Resolve AI at $160M+, incident.io at $96M+) and incumbents (Datadog, PagerDuty, Microsoft Azure) are all building in this space. Open-source licensing means the codebase itself is replicable. The core LLM-based investigation capabilities use publicly available models and techniques. Differentiation depends on integration breadth, per-customer learning quality, and UX execution rather than proprietary technology.

## Market & Traction

**Traction signals:**
- GitHub: 305 stars, 27 forks, 943 commits, 4 contributors (github.com/incidentfox/incidentfox, Feb 2026)
- Hacker News: Show HN post "Debug prod incidents without leaving Slack" — 3 points (HN, ~Feb 5, 2026); Show HN post "open-source AI SRE with log sampling and RAPTOR retrieval" — 1 point, 1 comment (~Jan 20, 2026)
- GitHub organization: 9 followers (github.com/incidentfox, Feb 2026)
- LinkedIn company page exists at linkedin.com/company/incidentfox; follower count not retrievable
- Tracxn and PitchBook company profiles created (Tracxn, 2026; PitchBook, 2026)
- Actively seeking 2 pilot partners for Q1 2026 (IncidentFox website)
- No Product Hunt launch found
- No Twitter/X company account found
- No press coverage in named publications found
- No public revenue data found

**Competitive landscape:**

1. **Resolve AI** — $160M+ total raised, $1B valuation, ~$4M ARR (TechCrunch, Feb 2026; finsmes.com, Feb 2026). Founded by co-creators of OpenTelemetry with prior exits to Splunk and VMware. Multi-agent autonomous incident response. Key differentiator vs. IncidentFox: deeper autonomous remediation capabilities, significantly more funding, enterprise customer base, proprietary platform vs. IncidentFox's open-source approach.

2. **incident.io** — $96M+ total raised, $400M valuation, $9M revenue (TechCrunch, Apr 2025; getlatka.com, 2025). $62M Series B led by Insight Partners. Full incident lifecycle management platform with AI SRE features added. Key differentiator vs. IncidentFox: broader incident workflow management (status pages, post-mortems, on-call scheduling) vs. IncidentFox's investigation-first focus.

3. **Rootly** — $15.2M raised, Series A led by Renegade Partners and Google Gradient Ventures (TechCrunch, Aug 2023). AI-native incident management with root cause analysis and confidence scores. Key differentiator vs. IncidentFox: more mature product with 75,000+ incidents managed on-platform; optimized for post-incident analysis vs. IncidentFox's real-time investigation focus.

4. **Cleric** — $9.8M seed raised, led by Vertex Ventures US (BusinessWire, Dec 2025). Self-learning AI SRE with alert-triggered diagnosis via Slack. Key differentiator vs. IncidentFox: read-only analysis layer (no remediation execution) vs. IncidentFox's human-in-the-loop fix execution.

5. **NeuBird** — $44.5M raised across 2 seed rounds, led by M12/Microsoft (BusinessWire, Feb 2026). AI SRE agent with enterprise adoption in healthcare, banking, retail. Key differentiator vs. IncidentFox: enterprise-focused with Microsoft Azure integration and established vertical adoption vs. IncidentFox's open-source, vendor-agnostic approach.

**Why now:** [Inferred]: The convergence of several factors in 2024-2025 created the opening for AI SRE tools: (1) LLM capabilities crossed the threshold needed for reliable multi-step reasoning across fragmented log and metric data, enabling investigation quality that was not possible with earlier ML approaches; (2) the OpenTelemetry standard reached broad adoption, creating a more uniform data surface for AI agents to work with across heterogeneous infrastructure; (3) engineering team sizes have contracted relative to infrastructure complexity, increasing on-call burden and creating urgency for automation. A blog post titled "Lots of AI SRE, no AI incident management" (Surfing Complexity, Feb 2026) suggests the AI SRE category is in an early evaluation phase compared to AI coding tools which have reached adoption phase.

## Founders & Team

**Jimmy Wei (Chiehmin Wei)** — Co-founder & CEO
- MS Computer Science, Cornell University (YC page)
- Previously: Software Engineer at Roblox, building social communication features (in-experience calling for 100M+ DAU) (YC page)
- Previously: Meta FAIR, working on multiparty conversational AI with published research (YC page)
- Previously: CTO at a startup in Outlier Ventures' DeFi accelerator (YC page via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/chiehmin-wei/ — "IncidentFox" headline (LinkedIn via search snippet)
- GitHub: github.com/chiehminwei (HN posts authored as "chiehminwei"); no public star count retrieved for personal repos

**Long Yi** — Co-founder & CTO
- BS Computer Science, Neuroscience, and Business, Brandeis University (Class of 2023) (LinkedIn via search snippet)
- Accepted to Harvard Business School MBA (2+2 program) (LinkedIn via search snippet)
- Previously: Software Engineer on Stateful Infra team at Roblox, building database infrastructure supporting 100M+ DAU (YC page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/long-yi-b221b2183/ — "Software Programmer - Roblox" headline (LinkedIn via search snippet)
- GitHub: No public repos found under personal account

**Co-founder relationship:** Both founders worked at Roblox prior to founding IncidentFox (YC page). The YC page describes Long Yi as having "experienced the chaos of on-call firsthand" at Roblox, suggesting direct shared experience with the problem domain.

**Founder-market fit:** Both founders have direct experience operating infrastructure at Roblox-scale (100M+ DAU). Jimmy Wei's Meta FAIR background in conversational AI is relevant to building an LLM-powered agent that operates through chat interfaces. Long Yi's SRE and database infrastructure experience at Roblox provides firsthand domain expertise in the incident response workflow the product aims to automate. No advisors, board members, or notable investors beyond Y Combinator were identified in public sources.

## Key Risks

**Crowded, well-funded competitive landscape:** At least five funded competitors are building AI SRE agents, with Resolve AI alone having raised $160M+ at a $1B valuation (TechCrunch, Feb 2026). Incumbents (Datadog, PagerDuty, Microsoft) are also shipping AI SRE features bundled with their existing platforms, creating distribution advantages IncidentFox cannot match at current scale.

**Trust barrier for autonomous remediation:** Hacker News community feedback on IncidentFox's launch identified "the trust barrier" as a critical adoption obstacle — experienced on-call engineers prioritize verification over automation during high-stakes incidents and may resist ceding control to an AI agent (HN discussion, Jan 2026). This could limit adoption to pre-investigation and triage rather than the full investigation-to-remediation loop.

**Open-source monetization challenge:** The Apache 2.0 license permits unrestricted commercial use, forking, and self-hosting. Converting open-source users to paid enterprise customers is a well-documented challenge. With enterprise features (RBAC, SSO, compliance) as the primary upsell, larger competitors could bundle equivalent features into their platforms.

**YC URL slug "brownie" suggests prior pivot:** The YC company page URL (ycombinator.com/companies/brownie) uses a different name than the current product, suggesting the team may have pivoted from a prior product. No public information was found about the "Brownie" product or any prior-product traction that would need to be separated from IncidentFox metrics.

**Pilot-stage product maturity:** The company is actively seeking its first 2 pilot partners for Q1 2026 (IncidentFox website), indicating the product has not yet achieved production deployment with paying customers. The Hacker News Show HN posts received minimal engagement (3 points and 1 point respectively), suggesting limited early developer awareness.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.16B AIOps market (Research and Markets, 2025, 25.3% CAGR via search snippet); estimates range $2.2B–$17B depending on scope definition |
| SAM | No public data found for AI SRE agent sub-segment |
| Traction | 305 GitHub stars, 27 forks (github.com/incidentfox/incidentfox, Feb 2026); 2 Show HN posts (3 pts, 1 pt; Feb & Jan 2026); seeking 2 pilot partners Q1 2026 (website) |
| Revenue Signal | No public data found; no pricing page; actively seeking pilot partners |
| Founders | Jimmy Wei (CEO): Cornell MS CS, ex-Meta FAIR, ex-Roblox SWE. Long Yi (CTO): Brandeis BS CS/Neuro/Business, ex-Roblox Stateful Infra, HBS 2+2 admit |
| Competitors | Resolve AI ($160M+ raised, ~$4M ARR, autonomous multi-agent SRE); incident.io ($96M+ raised, $9M revenue, full incident lifecycle); Rootly ($15.2M raised, revenue unknown, post-incident analysis); Cleric ($9.8M raised, revenue unknown, read-only diagnosis); NeuBird ($44.5M raised, revenue unknown, enterprise Azure-focused) |
| Moat Signals | 305 GitHub stars (open-source community); per-customer infrastructure learning; 300+ pre-built integrations; OpenRag retrieval system (74% Recall@10 on MultiHop-RAG) |
| Risk Factors | Heavily funded competitors (Resolve AI $160M+), trust barrier for autonomous remediation, open-source monetization challenge, pilot-stage product maturity |
| Founder Reach | Jimmy Wei: Twitter not found, LinkedIn linkedin.com/in/chiehmin-wei/, GitHub chiehminwei. Long Yi: Twitter not found, LinkedIn linkedin.com/in/long-yi-b221b2183/, GitHub not found |
| Distribution Signals | 2 Show HN posts (3 pts, 1 pt; Feb & Jan 2026); 305 GitHub stars (Feb 2026); no Product Hunt launch found; no app store presence |
