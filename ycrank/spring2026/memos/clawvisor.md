# Clawvisor

> The Authorization Layer for AI Agents

| Field | Value |
|-------|-------|
| Website | https://clawvisor.com |
| YC Page | https://www.ycombinator.com/companies/clawvisor |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Security, Open Source |
| YC Partner | Garry Tan |
| Emails | sales@clawvisor.com |

## The Idea

- **Problem:** AI agents being given access to apps like Gmail, Slack, and Google Drive can "go rogue" or expose user credentials, and currently require direct credential or OAuth token handoff to the agent itself (YC page; clawvisor.com).
- **Approach:** API gateway that vaults credentials so the agent never sees them, performs purpose-based verification on every request, scores anomalous parameters, detects injection attacks, and routes approvals via Telegram/dashboard before execution (clawvisor.com, May 2026).
- **Differentiation:** Versus Arcade.dev and Composio (tool/integration layers with built-in auth) — Clawvisor positions as a separate "authorization gateway" enforcing per-request purpose checks; versus Permit.io/Oso (general policy engines) — ships pre-built adapters for 14+ end-user SaaS apps (Gmail, GitHub, Slack, Notion, Linear, Stripe) (clawvisor.com).
- **Business Model:** Free trial, no credit card required; no public tier pricing on site (clawvisor.com, May 2026). [Inferred]: usage- or seat-based SaaS gateway pricing, given the per-request enforcement model.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Open-source core repo on GitHub (202 stars, github.com/clawvisor) plus direct sales via sales@clawvisor.com (clawvisor.com). [Inferred]: developer-led / OSS-to-paid motion, given Go codebase and public repo.

## Defensibility

- **Moat today:** 14+ pre-built service adapters and an open-source core with 202 GitHub stars (github.com/clawvisor, May 2026); founder is ex-YC Visiting Group Partner and prior YC founder (Berbix S18, acquired by Socure for $70M, 2023) (LinkedIn; Crunchbase).
- **Future moat:** [Inferred]: switching costs from accumulated per-customer purpose/approval policies and audit logs, plus a growing adapter library; unproven because the customer base and policy depth are not publicly disclosed.
- **Market structure:** [Inferred]: identity/OAuth incumbents (Okta, Auth0) target human SSO and lack per-request, purpose-scoped enforcement for agent traffic; rebuilding would require a new gateway product line rather than a feature extension.
- **Commoditization risk:** Adjacent funded players (Arcade.dev $12M seed, Composio $29M total, Permit.io $14M total) ship overlapping agent-auth functionality and could extend into purpose-based enforcement (BusinessWire, Mar 2025; SiliconANGLE, Jul 2025; Crunchbase).

## Market & Traction

- **Traction signals:**
  - GitHub: 202 stars, 27 forks on `clawvisor/clawvisor` (github.com/clawvisor, May 2026); website previously cited 186 stars (clawvisor.com).
  - 14+ service adapters live (clawvisor.com, May 2026).
  - Twitter/X: @clawvisor account exists (YC page); follower count not retrievable.
  - Founder Twitter @ericlevine: 419 followers (X.com via search, May 2026).
  - No public revenue, customer count, press coverage, or Product Hunt launch found.
- **Competitors:**
  - Arcade.dev ($12M seed, Mar 2025, led by Laude Ventures; revenue unknown): hundreds of pre-built agent tools across Gmail/Slack/GitHub/Salesforce; positions as agent action layer rather than separate authorization gateway (BusinessWire, Mar 2025).
  - Composio ($29M total, $25M Series A led by Lightspeed, Jul 2025; $1M+ ARR, 200+ paying customers, 100K developers): 500+ integrations exposed as agent actions; broader integration scope (SiliconANGLE, Jul 2025).
  - Permit.io ($14M total, $8M Series A led by Scale Venture Partners, Feb 2024; revenue unknown): policy-based fine-grained authorization built on OPA/OPAL; general-purpose vs. Clawvisor's agent-specific app adapters (BusinessWire, Feb 2024; Crunchbase).
  - Oso (revenue/raise not retrieved in this research): developer-friendly authorization platform, microservices-first; general authz vs. agent-specific (osohq.com).
  - Nango (revenue/raise not retrieved): open-source integration/credential vault, self-hosted option; lacks purpose-based per-request enforcement layer (Composio comparison, 2026).
- **Why now:** [Inferred]: 2024–2026 deployment of AI agents with write-access to Gmail/Slack/Drive (e.g., Composio's 100K developers, Jul 2025; Arcade.dev's $12M seed thesis, Mar 2025) created acute demand for credential isolation and per-request scoping that existing IAM/OAuth stacks do not provide.

## Founders & Team

- **Eric Levine (Founder, sole founder):**
  - Background: BS Computer Science, UC San Diego; Software Engineer at Google 2010–2012; Engineering Manager, Trust & Safety at Airbnb 2012–2017; Co-founder/CEO of Berbix (YC S18), acquired by Socure in June 2023 for $70M; Visiting Group Partner at Y Combinator (LinkedIn; Crunchbase; YC).
  - Twitter/X: @ericlevine — 419 followers (X.com via search, May 2026).
  - LinkedIn: "Clawvisor" (linkedin.com/in/levineericj).
  - GitHub: @ericlevine exists (github.com/ericlevine); top repo / star count not retrieved in this research.
- **Co-founder relationship:** Solo founder; no co-founders listed on YC page.
- **Founder-market fit:** Levine led Trust & Safety engineering at Airbnb (2012–2017) and built Berbix, an identity verification company acquired by Socure for $70M (2023), giving direct identity/security domain background relevant to AI agent authorization (LinkedIn; Crunchbase). No public advisors or external investors beyond YC standard deal disclosed.

## Key Risks

- **Well-funded direct competition:** Arcade.dev ($12M seed, Mar 2025) and Composio ($29M total, $1M+ ARR, 200+ paying customers, Jul 2025) are shipping overlapping agent-auth/integration features with materially larger teams and capital (BusinessWire; SiliconANGLE); no public mitigation found.
- **Solo founder execution risk:** Team size of 1 (YC page) against multi-engineer competitors with 25+ headcount (Composio headcount via SiliconANGLE, Jul 2025); mitigation is founder's prior exit and YC partner experience (LinkedIn).
- **Category overlap with general authz platforms:** Permit.io ($14M raised, Crunchbase) and Oso position as general-purpose policy engines and could extend to AI-agent purpose-based enforcement, eroding Clawvisor's differentiation.
- **Distribution dependence on third-party SaaS APIs:** Product value depends on adapter coverage for Gmail, Slack, Google Drive, Stripe, etc. (clawvisor.com); upstream API/policy changes from those providers (e.g., native agent-permission features) could displace gateway middleware.
- **Unproven enforcement layer:** Purpose-based verification and injection-attack scoring are advertised on clawvisor.com but no public benchmarks, third-party audits, or customer deployments are disclosed.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 202 GitHub stars, 27 forks (github.com/clawvisor, May 2026); 14+ service adapters live (clawvisor.com, May 2026); @ericlevine 419 X followers (X.com, May 2026) |
| Revenue Signal | Free trial, no credit card required; no public pricing tiers (clawvisor.com, May 2026) |
| Founders | Eric Levine (Founder): Co-founder/CEO Berbix (YC S18, acq. Socure $70M, 2023); Airbnb Trust & Safety Eng Mgr; ex-Google; YC Visiting Group Partner |
| Competitors | Arcade.dev ($12M seed Mar 2025, revenue unknown, agent tool layer); Composio ($29M raised, $1M+ ARR, broader integration platform); Permit.io ($14M raised, revenue unknown, general policy engine); Oso (raise/revenue unknown, general authz); Nango (raise/revenue unknown, OSS integration/credential vault) |
| Moat Signals | 202-star OSS repo (github.com/clawvisor); 14+ adapter library (clawvisor.com); founder prior $70M exit (Berbix → Socure, 2023, Crunchbase) |
| Risk Factors | Well-funded direct competitors (Arcade.dev, Composio); solo founder vs. larger teams; commoditization by general authz platforms |
| Founder Reach | Eric Levine: Twitter 419 (X.com); LinkedIn linkedin.com/in/levineericj; GitHub @ericlevine, stars not retrieved |
| Distribution Signals | OSS repo 202 stars (github.com/clawvisor, May 2026); no Product Hunt launch found; no press coverage found |
| Emails | sales@clawvisor.com |

Sources:
- [Clawvisor – YC Company Page](https://www.ycombinator.com/companies/clawvisor)
- [Clawvisor website](https://clawvisor.com)
- [Clawvisor GitHub org](https://github.com/clawvisor)
- [Eric Levine – LinkedIn](https://www.linkedin.com/in/levineericj)
- [Eric Levine – Crunchbase](https://www.crunchbase.com/person/eric-levine-766e)
- [Berbix – YC](https://www.ycombinator.com/companies/berbix)
- [Arcade.dev $12M seed – BusinessWire](https://www.businesswire.com/news/home/20250318815130/en/Arcade.dev-Scores-$12M-to-Solve-the-Biggest-Security-Problem-with-AI-Agents)
- [Composio $25M Series A – SiliconANGLE](https://siliconangle.com/2025/07/22/composio-raises-25m-funding-ease-ai-agent-development/)
- [Permit.io $8M Series A – BusinessWire](https://www.businesswire.com/news/home/20240213359627/en/Permit.io-Raises-$8-Million-to-Free-Engineers-to-Write-Code-Not-Policies)
- [Permit.io – Crunchbase](https://www.crunchbase.com/organization/permit-io)
- [Eric Levine – X](https://x.com/ericlevine)
