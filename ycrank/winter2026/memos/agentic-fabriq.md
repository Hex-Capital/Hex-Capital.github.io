# Agentic Fabriq

> Okta for Agents.

| Field | Value |
|-------|-------|
| Website | https://www.agenticfabriq.com |
| YC Page | https://www.ycombinator.com/companies/agentic-fabriq |
| Batch | Fall 2025 (F25) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | Sunnyvale, CA, USA |
| Tags | AIOps, DevSecOps, SaaS, API, Infrastructure |

## The Idea

**Problem:** As enterprises deploy AI agents that act on behalf of employees — querying databases, executing workflows, accessing SaaS tools — there is no standardized way to ensure that an agent cannot exceed the permissions of the human using it. Existing identity and access management (IAM) systems like Okta, Microsoft Entra ID, and Auth0 were designed for human-to-application authentication, not for delegated agent-to-tool access on a per-employee basis. Agents today routinely hold 10x more privileges than required, and 90% of agents are over-permissioned (Microsoft Security Blog, Feb 2026 via search snippet). The customer segment is IT administrators and security teams at enterprises deploying agentic AI internally or externally.

**Approach:** Agentic Fabriq provides a single control plane for data permissioning across an organization's AI agents and employees. The platform offers per-user tool connections (no shared credentials), organization-wide access controls defining which agents can access which data per employee, least-privilege access by default, full audit logging for compliance, and prebuilt connectors for rapid tool integration (YC launch page, Nov 2025). Admins configure which tools and data each employee can access via agents, and the platform handles authentication, integration, and permission enforcement.

**Differentiation:** Unlike traditional IAM platforms (Okta, Microsoft Entra ID) that authenticate humans to applications, Agentic Fabriq is purpose-built for the agent-to-tool delegation layer, scoping access per employee using the agent. Unlike non-human identity (NHI) security platforms such as Oasis Security, Astrix Security, and Entro Security — which focus on managing machine identities like API keys, service accounts, and secrets — Agentic Fabriq frames the problem as employee-centric: mapping agent permissions to the specific human's clearance level. Okta has begun addressing this space with its Auth for GenAI and Cross App Access (XAA) protocol (Okta newsroom, Sep 2025), but these are add-on features to an existing platform rather than a purpose-built control plane. WorkOS offers agent auth features via its Pipes product (launched Dec 2025), but WorkOS is developer-facing infrastructure, not an admin-facing permissions control plane.

**Business Model:** No pricing page or revenue data is publicly available. [Inferred]: Most likely monetization path is SaaS subscription pricing based on number of employees/agents under management or number of tool connections, given the "Okta for Agents" positioning and B2B infrastructure category.

**TAM/SAM:** The global identity and access management (IAM) market was valued at $25.96 billion in 2025 and is projected to reach $42.61 billion by 2030 at a 10.4% CAGR (MarketsandMarkets, 2025 via search snippet). An alternative estimate places it at $22.99 billion in 2025, growing to $65.70 billion by 2034 at a 12.4% CAGR (Precedence Research, 2025 via search snippet). No public TAM/SAM data found for the specific agent-level IAM sub-segment. [Inferred]: The serviceable market would be a fraction of the broader IAM TAM, constrained to enterprises actively deploying agentic AI, which is growing rapidly — by 2026, 40% of enterprise applications are projected to feature embedded agents, up from less than 5% in early 2025 (Microsoft Security Blog, Feb 2026 via search snippet).

**GTM / Distribution:** The YC launch page provides a Calendly booking link for Paulina Xu and an email (founders@agenticfabriq.com), suggesting direct founder-led sales (YC launch page, Nov 2025). YC partner Harj Taggar is listed as the primary partner (YC page). [Inferred]: Most likely distribution path is founder-led enterprise sales to IT/security teams at companies adopting agentic AI, potentially leveraging YC's network for initial customers. The product can be used internally (for employee-facing agents) or externally (for customer-facing agents), suggesting two potential go-to-market motions.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) switching costs as enterprises configure per-employee permission policies, tool connections, and audit logs that become entrenched in compliance workflows; (2) a data advantage from aggregating permission patterns across organizations, enabling better default policies; and (3) a connector/integration network effect where each new tool connector increases platform value. However, none of these are proven at this stage.

**Market structure:** Okta is the primary incumbent risk. Okta has already launched Auth for GenAI (GA October 2025) and the Cross App Access (XAA) protocol (Okta newsroom, Sep 2025). However, [Inferred]: Okta's platform is architecturally oriented around human SSO and directory-based identity; retooling it for per-employee agent permission scoping requires a fundamentally different data model. Additionally, Okta's pricing model (per-user seat licensing) may create tension with a per-agent or per-connection model. The structural barrier is thin — Okta is actively pursuing this market.

**Commoditization risk:** The agent identity/permission management space is attracting significant capital and attention. Well-funded startups include Oasis Security ($75M raised), Astrix Security ($85M raised), Entro Security ($24M raised), and SGNL (acquired by CrowdStrike for $740M). Okta, Microsoft, and CrowdStrike are all building agent identity features into existing platforms. The specific "employee-scoped agent permissions" framing is somewhat differentiated, but the underlying technical components (OAuth delegation, policy engines, audit logging) are well-understood building blocks that multiple teams could assemble.

## Market & Traction

**Traction signals:**
- YC batch: Fall 2025 (F25) (YC page)
- YC LinkedIn launch post: 188 likes, 43 comments (LinkedIn, Nov 8, 2025)
- Featured in Menlo Times "Y Combinator Launches of the Week" roundup (Menlo Times via search snippet)
- Funding: $500K from Y Combinator (Crunchbase via search snippet)
- Twitter/X: @agenticfabriq, joined October 2025; follower count not retrievable due to JavaScript rendering
- LinkedIn: Company page exists at linkedin.com/company/agentic-fabriq; follower count not retrievable
- YouTube: Launch video at youtu.be/V4dTw58ZeTQ (YC page)
- Product Hunt: No listing found
- No public user counts, revenue figures, customer names, or app download data found
- Company website requires JavaScript to render; no pricing or traction data extractable from static page

**Competitive landscape:**

1. **Okta** (public company, ~$2.5B annual revenue) — Launched Auth for GenAI (via Auth0 platform, GA Oct 2025) and the Cross App Access (XAA) protocol for agent-to-app delegation (Okta newsroom, Sep 2025). Key difference: Okta is extending a legacy IAM platform to cover agents as an add-on; Agentic Fabriq is purpose-built for agent permission scoping. Okta's pricing for agentic features is not publicly disclosed.

2. **Oasis Security** ($75M raised — $40M seed/Series A led by Sequoia Capital and Accel, plus $35M Series A extension; TechCrunch, Jan 2024 / AccessNewsWire, 2024 via search snippet) — Introduced Agentic Access Management (AAM) as the first identity solution designed for governing AI agents (Oasis blog, 2025 via search snippet). Key difference: Oasis focuses on non-human identity management across IaaS/SaaS/PaaS broadly; Agentic Fabriq focuses specifically on employee-scoped agent permissions. Revenue not publicly disclosed.

3. **Astrix Security** ($85M raised — $45M Series B led by Menlo Ventures; PRNewswire, 2024 via search snippet) — NHI security platform for API keys, service accounts, and secrets. Fortune 500 customer base including Figma, NetApp, Priceline, and Workday (PRNewswire via search snippet). Has grown 5x since Series A. Key difference: Astrix focuses on securing machine-to-machine NHIs; Agentic Fabriq focuses on the human-agent-tool permission chain. Revenue not publicly disclosed.

4. **SGNL** ($42M raised — $30M Series A in Feb 2025; acquired by CrowdStrike for $740M in Jan 2026; CNBC, Jan 2026) — Real-time identity security with dynamic access decisions. Founded by Scott Kriz and Erik Gustavson (prior exit to Google in 2017). Key difference: SGNL was a broader identity governance platform now subsumed into CrowdStrike's platform; Agentic Fabriq is standalone and agent-specific.

5. **WorkOS** ($199M raised; $30M ARR as of Oct 2025; Getlatka via search snippet) — Developer-facing API platform for enterprise auth features including SSO, directory sync, and recently Pipes for third-party OAuth token management (Dec 2025). Key difference: WorkOS is developer infrastructure for building auth into SaaS products; Agentic Fabriq is an admin-facing control plane for agent permissions. Over 1,000 paying customers (Getlatka via search snippet).

**Why now:** [Inferred]: The specific catalyst is the rapid enterprise adoption of agentic AI in 2025-2026. By 2026, 40% of enterprise applications are projected to feature embedded task-specific agents, up from less than 5% in early 2025 (Microsoft Security Blog, Feb 2026 via search snippet). 80% of Fortune 500 companies now use active AI agents (Microsoft Security Blog, Feb 2026 via search snippet). This creates a sudden, specific need for agent-level permission scoping that did not exist before agents gained tool-use capabilities. The OAuth/authentication standards were designed for human-to-app flows and do not natively support delegated agent-to-tool access scoped to individual employee clearance levels — Okta's XAA protocol is an attempt to bridge this gap but was only announced in September 2025.

## Founders & Team

**Paulina Xu** — Co-Founder
- Studied AI + Physics at MIT; dropped out before second year (age 19) (YC page)
- CS/ML research at MIT Kavli Institute, MIT Haystack Observatory, and INAF Padua (YC launch page)
- Twitter/X: No personal public account found; company account @agenticfabriq
- LinkedIn: linkedin.com/in/paulina-xu-5bba0821b — "Co-Founder @ Agentic Fabriq (YC F25)" (LinkedIn via search snippet)
- Personal website: paulinaxu.com (search result)
- GitHub: No public repos found

**Matthew Xu** — Co-Founder & CSO
- Studied AI + Math at MIT; dropped out before second year (YC page)
- CS/Econ research at MIT FutureTech Lab; computational biology research at MIT CSAIL (RocketReach via search snippet; YC launch page)
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/matthew-xu-b32a36271 — "Agentic Fabriq (YC F25)" (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Paulina and Matthew Xu met at MIT admit weekend and have been friends since before dropping out (YC launch page). They share a surname and MIT background, and both dropped out before their second year to co-found Agentic Fabriq.

**Founder-market fit:** Both founders have direct AI/ML research backgrounds from MIT labs (CSAIL, Kavli Institute, Haystack Observatory), giving them technical grounding in the AI systems that require permission management. Their experience is research-oriented rather than enterprise security or IAM-specific. No prior startup exits, enterprise security experience, or advisory board members were found in public sources. YC partner Harj Taggar (Triplebyte founder, former YC partner with identity/hiring platform experience) is their assigned partner (YC page).

## Key Risks

**Incumbent convergence from Okta:** Okta has already shipped Auth for GenAI (GA Oct 2025) and the Cross App Access (XAA) protocol specifically for agent-to-app delegation (Okta newsroom, Sep 2025). Okta has distribution to the exact buyer persona (IT admins, security teams) that Agentic Fabriq targets. If Okta's agent features prove sufficient, the standalone market for a purpose-built agent permission platform may not materialize. Mitigation: Okta's agent features are early and add-on rather than purpose-built; Agentic Fabriq can iterate faster on the specific agent permission use case.

**Heavily capitalized competitive field:** The non-human identity and agent security space has attracted over $200M in dedicated startup funding (Oasis $75M, Astrix $85M, Entro $24M, SGNL $42M before $740M acquisition) plus attention from CrowdStrike, Microsoft, and Okta. Agentic Fabriq has $500K and a 2-person team against competitors with 10-100x more capital and established enterprise customer bases. The window to establish a differentiated position before well-funded competitors expand into employee-scoped agent permissions is narrow.

**No disclosed traction or customers:** No public user counts, revenue figures, customer names, or pilot programs were found. The company's website requires JavaScript rendering and does not expose pricing or customer evidence. For a product targeting enterprise IT/security buyers, demonstrable customer adoption and compliance certifications are critical to sales cycles. No evidence of SOC 2, ISO 27001, or other certifications was found.

**Technical surface area breadth:** The product requires building and maintaining prebuilt connectors to enterprise tools (similar to an iPaaS), a policy engine for least-privilege enforcement, per-user OAuth delegation, and audit logging — a wide technical surface for a 2-person team. Each connector integration creates maintenance burden as third-party APIs change.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $25.96B IAM market in 2025, projected $42.61B by 2030 at 10.4% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found for the agent-specific IAM sub-segment |
| Traction | Featured in YC Launches of the Week (Menlo Times, 2025 via search snippet); YC LinkedIn launch post: 188 likes, 43 comments (LinkedIn, Nov 8, 2025) |
| Revenue Signal | No public data found |
| Founders | Paulina Xu (Co-Founder): MIT AI+Physics, ML research at MIT Kavli/Haystack/INAF Padua, dropped out at 19. Matthew Xu (Co-Founder & CSO): MIT AI+Math, research at MIT CSAIL and FutureTech Lab, dropped out before 2nd year. |
| Competitors | Oasis Security ($75M raised, revenue unknown, broader NHI management vs. employee-scoped agent permissions); Astrix Security ($85M raised, revenue unknown, NHI security for API keys/secrets vs. human-agent-tool permission chain); SGNL ($42M raised, acquired by CrowdStrike for $740M, broader identity governance vs. agent-specific); WorkOS ($199M raised, $30M ARR, developer-facing auth API vs. admin-facing agent control plane); Okta (public, ~$2.5B revenue, Auth for GenAI and XAA as add-on features vs. purpose-built) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent convergence from Okta (Auth for GenAI already GA), heavily capitalized competitors ($200M+ in NHI/agent security funding), no disclosed customers or traction |
| Founder Reach | Paulina Xu: Twitter not found, LinkedIn profile exists (connection count not retrievable), GitHub not found. Matthew Xu: Twitter not found, LinkedIn profile exists (connection count not retrievable), GitHub not found. Company: Twitter @agenticfabriq (follower count not retrievable) |
| Distribution Signals | YC F25 batch membership; YC LinkedIn launch post (188 likes, 43 comments, Nov 2025); Menlo Times YC roundup feature. No Product Hunt listing, app store presence, or Chrome extension found. |
