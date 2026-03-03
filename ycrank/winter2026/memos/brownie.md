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
| YC Partner | Diana Hu |
| Emails | founders@incidentfox.ai |

## The Idea

**Problem:** Engineering teams running production systems face incident fatigue — alerts fire, on-call engineers context-switch into Slack, manually query logs, metrics, and deployment history across dozens of tools to identify root causes, then coordinate remediation. The current workflow is largely manual, requiring deep institutional knowledge of each company's unique infrastructure. Existing incident management platforms (PagerDuty, incident.io, Rootly, FireHydrant) orchestrate the human process but do not autonomously investigate or remediate. According to IncidentFox's website, "Most AI SREs don't work because they lack context about your specific systems and ask you to spend weeks building integrations" (incidentfox.ai).

**Approach:** IncidentFox deploys an AI SRE agent that operates natively within Slack. It auto-discovers a team's infrastructure by analyzing codebases and past incidents, then automatically generates integrations with 40+ observability and infrastructure tools (Datadog, PagerDuty, AWS, Prometheus, Grafana, GitHub, Kubernetes, Elasticsearch, Sentry, Jira, Linear, and others) (incidentfox.ai). The agent performs autonomous alert triage by querying logs, metrics, and deployment history to identify root causes ("Auto-Investigation"), supports thread-based interactive follow-up where teams share screenshots and logs for deeper investigation, and offers one-click remediation with human-approved execution of fix scripts and full audit logging (incidentfox.ai). Credentials are isolated via a secure proxy so the agent never sees raw API keys, and execution is sandboxed (incidentfox.ai).

**Differentiation:** Unlike incident management platforms such as incident.io, Rootly, and FireHydrant — which coordinate humans during incidents — IncidentFox acts as an autonomous investigative agent that performs the debugging itself. Compared to other AI SRE startups (Neubird, Cleric, Resolve, Causely), IncidentFox differentiates on two axes: (1) automatic integration discovery requiring no manual MCP server building, and (2) an open-source core (Apache 2.0) with self-host and on-prem deployment options, which is relevant for regulated industries (incidentfox.ai). The OSS approach is uncommon among AI SRE startups listed in the landscape survey by Bobby Tables (bobbytables.io).

**Business Model:** No pricing page is published. The website lists three deployment tiers: SaaS (hosted), On-Prem/VPC for regulated industries, and Self-Host (OSS open core) (incidentfox.ai). Enterprise features include SOC 2 compliance (audit in progress), SSO/OIDC, RBAC, and audit logs (YC page). The license is dual: Apache 2.0 for the core platform and Business Source License 1.1 for the security/enterprise layer, converting to Apache 2.0 on February 18, 2030 (GitHub repo). [Inferred]: Most likely monetization is an open-core model where the self-hosted core is free and enterprise features (SSO, RBAC, SOC 2, VPC deployment) are paid, following the pattern of companies like GitLab and PostHog.

**TAM/SAM:** The global AIOps platform market was estimated at $14.60 billion in 2024 and is projected to reach $36.07 billion by 2030 at a 15.2% CAGR (Grand View Research, 2025 via search snippet). A narrower estimate from Research and Markets valued the AIOps market at $8.91 billion in 2024 growing to $11.16 billion in 2025 (Research and Markets, 2025 via search snippet). [Inferred]: The serviceable segment — AI-assisted incident investigation and remediation for engineering teams — is a subset of the broader AIOps market. No public SAM estimate specific to AI SRE tooling was found.

**GTM / Distribution:** The website states the company is "Accepting 2 Pilot Partners for Q1" (incidentfox.ai), indicating an early-stage design-partner sales motion. A demo booking link via Calendly is available (YC page). The open-source GitHub repository (413 stars as of research date) provides a developer-led distribution channel. [Inferred]: The likely GTM path is bottom-up developer adoption via the OSS repo and Slack trial, converting design partners into paid enterprise accounts. The Slack-native interface reduces adoption friction by meeting SRE teams in their existing incident workflow.

## Defensibility

The open-source repository (413 stars, 1,003 commits, Apache 2.0 core) creates community lock-in and a distribution moat if adoption scales (GitHub). The product's automatic learning of each customer's unique system architecture — codebases, past incidents, infrastructure topology — builds a customer-specific data advantage that deepens over time and increases switching costs. Credential isolation via secure proxy and sandboxed execution address enterprise security requirements that create compliance-driven switching costs once adopted.

**Market structure:** Incumbent incident management platforms (PagerDuty at $467.5M FY2025 revenue, incident.io at $400M valuation) have business models built around orchestrating human processes — status pages, on-call rotations, runbooks, and post-mortems. Building an autonomous AI agent that replaces portions of the human workflow risks cannibalizing their core product narrative (humans-in-the-loop incident management). PagerDuty charges extra for AI features layered on top of its existing platform (incident.io blog, 2026 via search snippet), suggesting a bolt-on rather than native AI architecture. [Inferred]: This architectural bolt-on approach may limit incumbents' ability to deliver deeply integrated autonomous investigation, creating a window for purpose-built AI SRE agents.

**Commoditization risk:** The AI SRE startup landscape is crowded. A December 2025 survey by Bobby Tables (bobbytables.io) identified at least 10 dedicated AI SRE startups including Neubird ($22.5M from M12), Cleric ($4.3M seed), Resolve, Causely, SRE.ai, Tierzero, Traversal, Phoebe, Vibranium Labs, and Wildmoose. Foundation model providers (OpenAI, Anthropic, Google) could enable any engineering team to build ad hoc investigation agents. The barrier to building a basic "query logs and summarize" agent is low; the barrier to building one that auto-discovers integrations, maintains customer-specific context across incidents, and executes remediation safely is higher.

## Market & Traction

**Traction signals:**
- GitHub: 413 stars, 43 forks, 1,003 commits on main branch (GitHub, at time of research)
- Pilot status: "Accepting 2 Pilot Partners for Q1" (incidentfox.ai)
- YC launch tweet by @ycombinator referencing @jimmyweiiiii and @LongYi1207 (X/Twitter)
- Company Twitter/X: @incidentfox (handle confirmed; follower count not retrievable)
- Company LinkedIn: https://www.linkedin.com/company/incidentfox/ (follower count not retrievable)
- No Product Hunt launch found
- No press coverage in named publications found
- No app store or Chrome Web Store presence
- No Discord/Slack community member counts found
- No revenue or paying customer data found publicly

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. IncidentFox |
|---|---|---|---|
| **PagerDuty** (public) | Public company | $467.5M revenue FY2025, $494M ARR (PagerDuty newsroom, 2025) | Full-stack operations platform with on-call, alerting, and automation; AI features are add-on rather than core; charges extra for AIOps |
| **incident.io** | $96M+ total; $62M Series B at $400M valuation (TechCrunch, Apr 2025) | Revenue not disclosed; 250K+ incidents powered (incident.io blog) | Incident coordination and communication platform with AI bolt-on; founded by ex-Monzo engineers; strong in post-incident learning |
| **Rootly** | $15.2M total; $12M Series A (TechCrunch, Aug 2023) | Revenue not disclosed | Slack-native incident management; AI-native architecture; strong in automated workflows and retrospectives |
| **FireHydrant** | $32.5M total; $23M Series B (TechCrunch, Aug 2021) | Revenue not disclosed | Service catalog mapping services, dependencies, and ownership for context-aware incident response |
| **Neubird** | $22.5M seed from M12/Microsoft (bobbytables.io, Dec 2025 via search snippet) | Revenue not disclosed | AI SRE with Microsoft backing; direct competitor in autonomous investigation |

**Why now:** [Inferred]: Several catalysts converged in 2024-2025: (1) Foundation model capability crossed a threshold where agents can reliably parse logs, correlate alerts, and reason about distributed systems — enabling autonomous investigation rather than mere summarization. (2) The MCP (Model Context Protocol) and tool-use paradigm matured, allowing AI agents to programmatically interact with dozens of infrastructure APIs. (3) The explosion of microservices and cloud-native architectures increased incident complexity beyond what on-call engineers can manually investigate in SLA windows. (4) incident.io's $62M Series B at a $400M valuation in April 2025 validated market appetite for modern incident tooling, while simultaneously signaling that the "coordinate humans" approach is being challenged by "automate the investigation" approaches.

## Founders & Team

**Jimmy Wei (Chiehmin Wei)** — Co-founder & CEO
- MS, Cornell University; BS, Bucknell University (LinkedIn via search snippet)
- Previously: Software Engineer at Roblox, building social communication features (in-experience calling for 100M+ DAU) (incidentfox.ai, YC page)
- Previously: Research at Meta FAIR on multiparty conversational AI, with published research (search snippet from ZoomInfo/LinkedIn)
- Twitter/X: @jimmyweiiiii (referenced in YC launch tweet; follower count not retrievable)
- LinkedIn: linkedin.com/in/chiehmin-wei/ (headline: "Software Engineer @ Roblox" at time of indexing)
- GitHub: No public repos found under this name

**Long Yi** — Co-founder & CTO
- BS Computer Science, Neuroscience, and Business, Brandeis University (class of 2023) (LinkedIn via search snippet)
- Previously: Software Engineer at Roblox, building database infrastructure on the Stateful Infra team supporting 100M+ DAU (incidentfox.ai, YC page)
- Experienced on-call SRE challenges firsthand at Roblox, which motivated founding IncidentFox (YC page)
- Twitter/X: @LongYi1207 (referenced in YC launch tweet; follower count not retrievable)
- LinkedIn: linkedin.com/in/long-yi-b221b2183/ (headline: "Software Programmer - Roblox" at time of indexing)
- GitHub: No public repos found under this name

**Co-founder relationship:** Both founders worked at Roblox, with Jimmy on social communication features and Long on database infrastructure/SRE. Their overlapping tenure at Roblox is the visible shared connection.

**Founder-market fit:** Both founders experienced large-scale production infrastructure at Roblox (100M+ DAU), giving them direct exposure to the on-call and incident response pain points their product addresses. Long Yi's SRE background on the Stateful Infra team provides domain-specific operational experience, while Jimmy Wei's AI research at Meta FAIR and conversational AI work provides the ML/agent engineering foundation. The combination of SRE domain expertise and AI research experience maps directly to the product's core challenge: building an AI agent that understands production systems.

## Key Risks

**Crowded AI SRE landscape:** At least 10 dedicated AI SRE startups were identified in a December 2025 landscape survey (bobbytables.io), several with significantly more funding — Neubird ($22.5M), Cleric ($4.3M) — and incumbent platforms (incident.io, PagerDuty) are adding AI capabilities. Differentiation via auto-generated integrations and OSS may not be durable if competitors adopt similar approaches.

**Incumbent platform expansion:** incident.io raised $62M at a $400M valuation in April 2025 specifically to build "AI agents that resolve incidents" (TechCrunch, Apr 2025). PagerDuty was named AIOps Platform of the Year in 2025 (search snippet). Well-funded incumbents with existing customer bases and integration ecosystems could replicate autonomous investigation features as add-ons to their established platforms.

**Enterprise trust barrier for autonomous remediation:** IncidentFox's "one-click remediation" feature requires customers to grant an AI agent write access to production infrastructure. Even with human-in-the-loop approval, sandboxed execution, and credential isolation, enterprises may adopt investigation-only use cases while resisting remediation authority — limiting the product's full value proposition and differentiation.

**Open-source monetization challenge:** The dual-license model (Apache 2.0 core + BSL 1.1 enterprise layer) must thread the needle between community adoption and revenue capture. If the open core is sufficiently capable, enterprise conversion rates may be low. The BSL 1.1 conversion date (February 18, 2030) means enterprise features become fully open in ~4 years, compressing the monetization window.

**Pre-pilot stage with no public traction beyond GitHub stars:** The website indicates the company is still seeking its first two pilot partners ("Accepting 2 Pilot Partners for Q1"), meaning product-market fit is unvalidated. The 413 GitHub stars represent developer interest but not enterprise adoption or revenue.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AIOps platform market: $14.60B in 2024, projected $36.07B by 2030 at 15.2% CAGR (Grand View Research, 2025 via search snippet) |
| SAM | No public data found for AI SRE-specific segment |
| Traction | 413 GitHub stars, 43 forks (GitHub); "Accepting 2 Pilot Partners for Q1" (incidentfox.ai); YC W26 batch |
| Revenue Signal | No public data found |
| Founders | Jimmy Wei (CEO): MS Cornell, Ex-Meta FAIR, Ex-Roblox SWE. Long Yi (CTO): BS Brandeis, Ex-Roblox SRE/Infra. |
| Competitors | PagerDuty (public, $467.5M rev FY2025, full-stack ops platform), incident.io ($96M+ raised, $400M valuation, incident coordination + AI), Rootly ($15.2M raised, revenue unknown, Slack-native incident mgmt), FireHydrant ($32.5M raised, revenue unknown, service catalog focus), Neubird ($22.5M raised, revenue unknown, AI SRE with Microsoft backing) |
| Moat Signals | Open-source repo (413 stars); customer-specific system learning; credential isolation architecture |
| Risk Factors | Crowded AI SRE landscape with well-funded competitors, incumbent platform AI expansion (incident.io $62M for AI agents), enterprise trust barrier for autonomous remediation |
| Founder Reach | Jimmy Wei: Twitter @jimmyweiiiii (count not retrievable), LinkedIn linkedin.com/in/chiehmin-wei/. Long Yi: Twitter @LongYi1207 (count not retrievable), LinkedIn linkedin.com/in/long-yi-b221b2183/. No public GitHub repos found for either founder. |
| Distribution Signals | GitHub 413 stars (GitHub); YC launch tweet by @ycombinator (X/Twitter); free Slack trial on website; Calendly demo booking (incidentfox.ai). No Product Hunt launch found. |
| Emails | founders@incidentfox.ai |
