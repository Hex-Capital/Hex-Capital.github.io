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
| YC Partner | Garry Tan (per YC page) |
| Emails | sales@clawvisor.com (clawvisor.com) |

## The Idea

**Problem:** AI agents acting on user data via apps like Gmail, Slack, Google Drive, GitHub, Stripe, and Notion require credentials/OAuth tokens to call APIs (clawvisor.com). Today, agent runtimes typically receive tokens directly, expanding the blast radius of prompt injection or scope creep. Industry survey data states that for agent-to-agent interactions teams rely on API Keys (45.6%) and Generic Tokens (44.4%); secure standards like mTLS are used by only 17.8% (Gravitee "State of AI Agent Security Report" via search snippet).

**Approach:** Clawvisor positions as an "AI Agent Gatekeeper" / API gateway for purpose-based authorization (clawvisor.com; github.com/clawvisor README). Mechanism: user approves a task once; Clawvisor enforces purpose verification on every API call, vaults credentials so the agent never sees them, runs risk assessment for anomalies/scope creep, blocks prompt injection attempts, and writes a full audit trail of requests, approvals, and credential injections (clawvisor.com features list).

**Differentiation:** Adapters published for 14+ services — Gmail, Google Calendar/Drive/Contacts, GitHub, Slack, Notion, Linear, Stripe, Twilio, Dropbox, Granola, Perplexity, iMessage bridge — with SendGrid, Jira, Salesforce, Airtable listed "coming soon" (clawvisor.com). Vs. Composio (500+ integrations + auth, composio.dev) and Nango (700+ APIs, nango.dev/blog): broader tool catalogs but integration-first framing. Vs. Arcade.dev: closest comp — Arcade markets itself as "MCP runtime" with task-time authorization (arcade.dev; dev.to/composiodev "4 Best AI Agent Authentication platforms 2026"). Vs. Anon: SDK-based authentication layer for agents (TechCrunch, Apr 24 2024). Vs. Auth0 for AI Agents Token Vault and WorkOS FGA: incumbent identity vendors shipping agent-specific auth modules (auth0.com/ai; workos.com/blog).

**Business Model:** No pricing tiers disclosed on the site; free trial available with no credit card required (clawvisor.com). [Inferred]: Likely usage- or seat-based SaaS with an enterprise tier, given gateway/audit-trail framing and the open-source core repo (github.com/clawvisor/clawvisor) suggesting an open-core model.

**TAM/SAM:** Agentic AI in cybersecurity market estimated at $22.56B in 2024, projected to $322.39B by 2033 at 34.4% CAGR (Grand View Research via search snippet). Broader agentic AI market grew from $5.25B (2024) to $7.84B (2025), projected $52.62B by 2030 (aifundingtracker.com via search snippet). No SAM data found for the agent-authorization sub-segment specifically.

**GTM / Distribution:** [Inferred]: Open-source repo (86 stars, github.com/clawvisor/clawvisor) + Discord community + direct dev outreach as top-of-funnel; sales@clawvisor.com indicates direct enterprise sales motion. A "Clawvisor" skill is published on Termo with 247 downloads, last updated 2026-03-16 (termo.ai/skills/clawvisor via search snippet), and "Official Clawvisor plugins for Claude Code" repo exists (github.com/clawvisor/cowork-plugins).

## Defensibility

- **Code/early traction:** Public Go repo at 86 stars / 11 forks (github.com/clawvisor/clawvisor, last updated May 6 2026).
- **Adapter breadth:** 14+ shipped integrations (clawvisor.com).
- **Founder network:** Solo founder is a YC alum (Berbix S18) and former YC Visiting Group Partner (ycombinator.com/people/eric-levine).

**Market structure:** [Inferred]: No structural barrier identified at this stage. Auth0 (Okta), WorkOS, and HashiCorp Vault are all shipping AI-agent auth/credential products (auth0.com/ai; workos.com/blog; developer.hashicorp.com); their distribution and identity-graph data are competitive advantages. Clawvisor's potential structural lever is purpose-based per-call enforcement at the gateway layer — but this is an architecture choice, not a regulatory/data moat.

**Commoditization risk:** Adapter integrations are replicable; Composio (500+) and Nango (700+) already have larger libraries (composio.dev; nango.dev). [Inferred]: Defensibility, if any, would derive from policy/audit data (proprietary risk-scoring corpus) accumulated over time — not present today.

## Market & Traction

**Traction signals:**
- GitHub: clawvisor/clawvisor 86 stars, 11 forks, Go (github.com, May 6 2026); 4 public repos in org.
- Termo skill: 247 downloads, updated 2026-03-16 (termo.ai via search snippet).
- Twitter/X: @clawvisor account exists (x.com/clawvisor); follower count not retrievable (WebFetch HTTP 402).
- Discord community linked from clawvisor.com; member count not retrievable.
- LinkedIn company page: not retrievable in search results — no public data found on follower count.
- Product Hunt: no public data found for a "Clawvisor" launch.
- Press / funding announcement: no public data found beyond YC directory listing.
- Revenue, paying customers, customer logos: none disclosed (clawvisor.com).
- Job postings: hiring=false per company_data; no postings on YC jobs page found.

**Competitive landscape:**
- **Arcade.dev** — $12M seed Mar 2025, led by Laude Ventures (BusinessWire, Mar 18 2025); revenue unknown. Differentiator: positions as MCP runtime with task-time authorization, Linux Foundation Agentic AI Foundation Gold member (BusinessWire, Dec 9 2025).
- **Composio** — $25M Series A Jul 2025 led by Lightspeed, $29M total (PRNewswire, Jul 22 2025; composio.dev/blog/series-a); revenue unknown. Differentiator: 500+ integrations and a reinforcement-learning "skills" layer (composio.dev).
- **Nango** — $7.5M seed led by Gradient (nango.dev/blog), prior $2M seed (W23 batch, ycombinator.com/companies/nango); revenue unknown. Differentiator: 700+ APIs, open-source unified API + OAuth (nango.dev).
- **Anon** — $6.5M seed Apr 2024 led by Union Square Ventures and Abstract Ventures (TechCrunch, Apr 24 2024; finsmes.com); revenue unknown. Differentiator: SDK-based automated authentication layer for AI agents.
- **Auth0 / WorkOS / HashiCorp Vault** — incumbents shipping agent-specific auth (Auth0 Token Vault for AI Agents, auth0.com/ai; WorkOS FGA, workos.com/blog; HashiCorp Vault dynamic secrets, developer.hashicorp.com). Funding: parent companies are mature/public.

**Why now:** [Inferred]: The 2024–2026 surge in production AI agent deployments (Composio raise Jul 2025; Arcade raise Mar 2025; Auth0 launching agent-specific Token Vault) reflects MCP standardization and growing tool-use reliability in frontier LLMs (Claude, GPT-5 era). McKinsey and Insight Partners both published 2025–2026 pieces flagging agentic-AI security as a new budget category (mckinsey.com "Securing the agentic enterprise"; insightpartners.com/ideas/securing-agentic-ai). Surveys cite that "existing identity and authorization frameworks [are] not built for autonomous, agentic systems" (CSA, cloudsecurityalliance.org via search snippet).

## Founders & Team

**Eric Levine** — Solo Founder
- BS Computer Science, UC San Diego (linkedin.com/in/levineericj via search snippet).
- Software Engineer, Google (2010–2012); Software Engineer / Engineering Manager, Trust & Safety at Airbnb (2012–2017) (search snippets, theorg.com, linkedin.com/in/levineericj).
- Co-Founder & CEO, Berbix (YC S18); Berbix acquired by Socure for ~$70M in June 2023 (BusinessWire, Jun 27 2023; bankinfosecurity.com).
- Post-acquisition: SVP and Head of DocV at Socure (BusinessWire, Jun 2023).
- Visiting Group Partner at Y Combinator (ycombinator.com/people/eric-levine).
- Twitter/X: @ericlevine (x.com/ericlevine); follower count not retrievable.
- LinkedIn: linkedin.com/in/levineericj — headline "Previously Co-Founder & CEO at Berbix (acq'd by Socure)"; connection count not retrievable.
- GitHub: github.com/ericlevine — 70 followers, repos include dubiosity (JS), attic (Go), berbix-android-prealpha (Java), bash-git-prompt (Shell); individual repo star counts not retrievable in search snippets.
- Clawvisor org: github.com/clawvisor — main `clawvisor` Go repo at 86 stars, 11 forks (May 6 2026).

**Co-founder relationship:** Solo founder; not applicable.

**Founder-market fit:** Levine's Airbnb tenure was specifically on Trust & Safety engineering (search snippets), and Berbix's product was identity-document verification with a forensics engine for spoofed/AI-generated IDs (BusinessWire, Jun 27 2023) — both adjacent to the credential-handling and abuse-detection problems Clawvisor targets. Berbix-to-Socure $70M exit demonstrates one prior outcome at YC scale (BusinessWire). YC Visiting Group Partner role (ycombinator.com/people/eric-levine) gives Garry Tan — listed as the company's Group Partner (ycombinator.com/companies/clawvisor) — direct prior context on the founder.

No public data found on advisors, board members, or named investors beyond the standard YC deal.

## Key Risks

**Well-funded direct competitors with larger feature surfaces:** Composio ($29M total, 500+ integrations, composio.dev) and Nango ($7.5M+, 700+ APIs, nango.dev) ship broader catalogs; Arcade ($12M seed, BusinessWire Mar 2025) is the closest positioning twin marketing "secure auth for AI agents." Clawvisor's 14+ adapters trail materially.

**Incumbent platform encroachment:** Auth0 launched Token Vault for AI Agents (auth0.com/ai), WorkOS launched FGA for agents (workos.com/blog), HashiCorp Vault published an agent-identity validated pattern (developer.hashicorp.com). These vendors have existing identity-platform distribution into the same enterprise buyer.

**Solo-founder execution bandwidth:** Team size is 1 (ycombinator.com/companies/clawvisor); hiring=false per company_data. Building gateway adapters across 14+ APIs while maintaining policy/audit infrastructure against multi-engineer competitors is execution-heavy. [Inferred]: This is calibration-relevant only insofar as competitors are 10–50+ headcount, not as a baseline pre-seed concern.

**Standardization risk from MCP:** Anthropic's Model Context Protocol is gaining adoption (Arcade authored "Core MCP Capability," BusinessWire Nov 25 2025). [Inferred]: If MCP runtimes standardize an authorization spec, custom gateway approaches may be commoditized into protocol-level features.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI in cybersecurity: $22.56B (2024) → $322.39B (2033) at 34.4% CAGR (Grand View Research, 2024 via search snippet); broader agentic AI: $5.25B (2024) → $52.62B (2030) (aifundingtracker.com via search snippet) |
| SAM | No public data found |
| Traction | GitHub clawvisor/clawvisor 86 stars, 11 forks (github.com, May 6 2026); 4 public repos in org; Termo skill 247 downloads (termo.ai via search snippet, Mar 16 2026); 14+ shipped service adapters (clawvisor.com); Twitter @clawvisor exists, count not retrievable |
| Revenue Signal | No public data found (no pricing page disclosed; free trial, no credit card per clawvisor.com) |
| Founders | Eric Levine (Solo Founder): Co-founder/CEO Berbix YC S18, acq. by Socure ~$70M Jun 2023 (BusinessWire); ex-Airbnb Trust & Safety eng/EM 2012–2017; ex-Google SWE 2010–2012; YC Visiting Group Partner (ycombinator.com/people/eric-levine) |
| Competitors | Arcade.dev ($12M seed Mar 2025, BusinessWire; revenue unknown; MCP runtime/task-time authz), Composio ($29M total incl. $25M Series A Jul 2025 Lightspeed, PRNewswire; revenue unknown; 500+ integrations + skills RL), Nango ($7.5M seed Gradient + $2M prior YC W23, nango.dev/ycombinator.com; revenue unknown; 700+ APIs OSS), Anon ($6.5M seed Apr 2024 USV/Abstract, TechCrunch; revenue unknown; SDK auth layer), Auth0 Token Vault for AI Agents (auth0.com/ai; incumbent), WorkOS FGA (workos.com/blog; incumbent) |
| Moat Signals | No public data found (open-source core github.com/clawvisor/clawvisor 86 stars; no proprietary data, patents, or named enterprise customers disclosed) |
| Risk Factors | Well-funded direct competitors (Composio $29M, Arcade $12M), incumbent encroachment (Auth0/WorkOS/HashiCorp), solo-founder bandwidth |
| Founder Reach | Eric Levine: Twitter @ericlevine count not retrievable (x.com/ericlevine); LinkedIn linkedin.com/in/levineericj count not retrievable; GitHub github.com/ericlevine 70 followers, individual repo stars not retrievable |
| Distribution Signals | GitHub OSS repo 86 stars (github.com/clawvisor/clawvisor, May 6 2026); Termo skill 247 downloads (termo.ai via search snippet, Mar 16 2026); Discord linked (clawvisor.com); Claude Code plugins repo published (github.com/clawvisor/cowork-plugins) |
| Emails | sales@clawvisor.com (clawvisor.com) |
