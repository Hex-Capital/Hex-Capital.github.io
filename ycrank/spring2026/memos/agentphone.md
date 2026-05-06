# AgentPhone

> Phone Numbers for AI Agents

| Field | Value |
|-------|-------|
| Website | https://www.agentphone.to/ |
| YC Page | https://www.ycombinator.com/companies/agentphone |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, API, Telecommunications |
| YC Partner | David Lieb (YC page) |
| Emails | No public data found (website lists a Discord and a mailto placeholder; no operational business email confirmed) |

## The Idea

**Problem:** AI agents (voice receptionists, autonomous outbound workers, on-call alert handlers, coding agents) need to make and receive phone calls and SMS, but legacy telephony APIs (Twilio, Bandwidth) were built for human-developer-facing IVR flows, not for LLM agent loops with single-webhook event streams (agentphone.to website).

**Approach:** Provisions US/Canadian phone numbers on demand via API that route both voice and SMS through one unified webhook, with real-time voice-to-text transcription streamed to that webhook (agentphone.to website). Ships SDKs for Python and Node.js, a REST API, and an MCP server for native integration with Claude Code, Cursor, OpenClaw, and Windsurf (agentphone.to website).

**Differentiation:** Vapi, Retell AI, and Bland AI provide full voice-agent platforms (LLM + TTS + telephony bundled); AgentPhone instead provides the telephony layer with a developer-agent-native interface (single webhook, MCP server, SDK integrations with CrewAI and OpenAI Agents SDK per its GitHub org). Twilio is the underlying-style alternative but lacks MCP/agent-framework integrations (agentphone.to website; github.com/AgentPhone-AI).

**Business Model:** No public pricing. The website navigation links to a `/pricing` page that returned no extractable content on WebFetch. [Inferred]: Most likely consumption-based pricing (per-number monthly + per-minute voice + per-message SMS) given the telephony-infrastructure category and competitor norms (Vapi at ~$0.05/min per Lindy review).

**TAM/SAM:** Global Voice AI Agents market estimated at $2.4B in 2024 growing to $47.5B by 2034 at 34.8% CAGR (market.us, 2025 via search snippet). Conversational AI market $13.64B in 2025 → $42.51B by 2030 at 25.5% CAGR (Research and Markets via search snippet). No public SAM data found for the agent-telephony-infrastructure sub-segment.

**GTM / Distribution:** [Inferred]: Bottom-up developer adoption via MCP server in Claude Code/Cursor/Windsurf and SDK integrations with agent frameworks (CrewAI, OpenAI Agents SDK), evidenced by the published repos at github.com/AgentPhone-AI. No paid GTM data found.

## Defensibility

No defensibility signals found in public sources beyond early ecosystem placement (MCP integrations into 4 AI coding environments, GitHub org with 6 repos including framework-specific SDKs — github.com/AgentPhone-AI). [Inferred]: Potential moat could develop via switching costs (phone numbers tied to agent identities once provisioned and trusted by callers), regulatory carrier relationships (10DLC SMS registration, A2P compliance), and an integration network across agent frameworks — but none are proven at this stage.

**Market structure:** No structural barrier identified at this stage. Twilio, Vonage, and Bandwidth own the underlying carrier relationships and could ship agent-native SDKs and MCP servers. [Inferred]: The structural question is whether agent-native packaging is a thin wrapper over Twilio (commoditizable) or a different product surface (webhook unification, transcription, MCP) that incumbents are slow to ship because their APIs are rate-card commitments to enterprise customers.

**Commoditization risk:** High. The MCP server (13 stars, github.com/AgentPhone-AI/agentphone-mcp) is a thin protocol layer that any telephony provider or independent developer could replicate. Vapi, Retell, and Bland could add per-number provisioning APIs.

## Market & Traction

**Traction signals:**
- GitHub org github.com/AgentPhone-AI: 10 followers; flagship `agentphone-mcp` repo 13 stars / 1 fork; `skills` (Claude Code plugin) 2 stars; additional repos `crewai-agentphone`, `openai-agents-agentphone` (github.com/AgentPhone-AI, fetched May 2026).
- Discord community at discord.gg/tmF9ZqcuFj (agentphone.to website); member count not retrievable.
- No Product Hunt launch found in searches.
- No press coverage found in TechCrunch, The Information, or other named publications via search.
- Company Twitter/X, LinkedIn page: no public data found via search.
- No revenue, user count, or paying customer data disclosed publicly.
- Active job postings: no public data found.

**Competitive landscape:**
- **Vapi** ($20M Series A Dec 2024 at ~$130M post-money valuation, Sacra/Crunchbase via search snippet; 100K+ developers as of Dec 2024 per Vapi blog via search snippet) — full voice-agent platform bundling LLM+TTS+telephony; AgentPhone differentiates as telephony-only with agent-framework SDKs.
- **Retell AI** ($5.1M+ raised as of early 2026 per search snippet; $50M ARR 2025, 50M+ calls/month per AgentMarketCap, Apr 2026 via search snippet) — voice agent platform focused on appointment scheduling and IVR navigation.
- **Bland AI** ($40M Series B Jan 2025 per search snippet) — developer-first platform supporting self-hosted models; competes on infra control.
- **Twilio** (NYSE: TWLO; revenue unknown specific to agent segment) — incumbent telephony API; lacks MCP/agent-framework integrations but owns carrier relationships.
- **telli** (YC company; funding unknown) — AI phone agents focused on conversion; YC-portfolio adjacent (ycombinator.com/companies/telli).

**Why now:** [Inferred]: Three enabling shifts in 12-24 months: (1) MCP protocol standardization (Anthropic, late 2024) making telephony-as-tool callable from agent IDEs; (2) AI agent frameworks (CrewAI, OpenAI Agents SDK released 2025) creating a developer surface that needs telephony primitives; (3) Voice AI agent market growing from $2.4B (2024) toward $47.5B (2034) at 34.8% CAGR (market.us via search snippet). No company-stated "why now" found.

## Founders & Team

**Manav Modi** — Co-founder
- BS in Computer Engineering, University of Illinois Urbana-Champaign (UIUC) (YC page).
- Per YC bio: led a major redesign of the Vogue app, scaling its user base from ~100K to over 1M (ycombinator.com/companies/agentphone).
- Twitter/X: No public account found via search.
- LinkedIn: linkedin.com/in/manavmodi1629 (associated with ROKMETRO per search snippet); headline not retrievable directly.
- GitHub: github.com/manav2modi — 0 followers, 4 pinned repos, all contributions to UIUC's Rokwire/Rokmetro mobile platform (Illinois App, NEOM U app, in Dart/Go); personal site listed as www.manav2modi.com (returned ECONNREFUSED on fetch). Location listed: NYC.
- Org GitHub: github.com/AgentPhone-AI/agentphone-mcp 13 stars (sole listed member: manav2modi).

**Meet Modi** — Co-founder
- YC bio: limited biographical details provided (ycombinator.com/companies/agentphone).
- Twitter/X: No public account found via search.
- LinkedIn: No public profile confirmed via search (multiple "Meet Modi" results not verifiable as this person).
- GitHub: No public profile confirmed.

**Co-founder relationship:** Shared surname "Modi"; no public data confirms whether they are siblings, relatives, or unrelated. No public data on co-founder history beyond shared listing as 2-person Spring 2026 YC team.

**Founder-market fit:** [Inferred]: Manav Modi's documented experience scaling the Vogue consumer app 10x and working on UIUC's Rokwire mobile/services platform (Go backend, Flutter front-end) provides full-stack consumer-mobile and platform engineering background relevant to building telephony SDKs and webhook infrastructure. No domain-specific telephony or carrier-industry experience documented for either founder. No advisors, board members, or notable investors disclosed publicly beyond YC.

## Key Risks

**Incumbent commoditization (Twilio, Vonage, Bandwidth):** The agent-native packaging (MCP server, unified webhook, framework SDKs) is a thin protocol layer over carrier APIs. Twilio could ship a competing MCP server in weeks. No structural carrier moat identified for AgentPhone (github.com/AgentPhone-AI repos are all open-source, MIT-style).

**Voice-agent platform encroachment:** Vapi ($20M Series A, 100K developers per search snippet) and Retell ($50M ARR per search snippet) could expose phone-number-only APIs and use existing distribution to attack the telephony-infra segment. AgentPhone's per-number-only positioning may be squeezed between full-stack platforms above and Twilio below.

**Telecom regulatory exposure:** US 10DLC SMS registration, STIR/SHAKEN voice attestation, and A2P compliance create operational overhead that scales with customer count. [Inferred]: A 2-person team will face capacity constraints managing carrier relationships, spam/fraud abuse, and emergency service compliance as volume grows. No public data on AgentPhone's compliance posture.

**Founder name disambiguation / public footprint:** Meet Modi has no verifiable public footprint (LinkedIn, GitHub, Twitter) found in research. Manav Modi's GitHub shows 0 followers and prior work limited to UIUC platform projects, not telephony or AI infrastructure (github.com/manav2modi). Limited public technical track record on the agent/telephony domain.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.4B (2024) → $47.5B (2034) at 34.8% CAGR — Voice AI Agents Market (market.us, 2025 via search snippet); Conversational AI $13.64B (2025) → $42.51B (2030) at 25.5% CAGR (Research and Markets via search snippet) |
| SAM | No public data found |
| Traction | GitHub org 10 followers, agentphone-mcp 13 stars / 1 fork (github.com/AgentPhone-AI, May 2026); skills repo 2 stars (github.com/AgentPhone-AI/skills); Discord community present, member count not retrievable (agentphone.to) |
| Revenue Signal | No public data found (pricing page exists at /pricing but content not extractable on WebFetch) |
| Founders | Manav Modi (Co-founder): BS Computer Engineering UIUC, led Vogue app redesign 100K→1M users (YC page). Meet Modi (Co-founder): no public bio details (YC page). |
| Competitors | Vapi ($20M Series A Dec 2024 at ~$130M post-money, ARR unknown, 100K+ developers — Sacra via search snippet; full voice-agent platform); Retell AI ($5.1M+ raised, $50M ARR 2025 — search snippets; voice-agent platform for scheduling/IVR); Bland AI ($40M Series B Jan 2025, ARR unknown — search snippet; self-hosted voice infra); Twilio (NYSE: TWLO; agent-segment revenue unknown; incumbent telephony API); telli (YC; funding unknown; AI phone agents for conversion) |
| Moat Signals | No public data found (early MCP integrations with Claude Code/Cursor/Windsurf/OpenClaw and SDKs for CrewAI/OpenAI Agents SDK per github.com/AgentPhone-AI, but no defensibility evidence) |
| Risk Factors | Incumbent commoditization by Twilio/Vonage; voice-agent platform encroachment from Vapi/Retell/Bland; thin co-founder public technical footprint |
| Founder Reach | Manav Modi: Twitter not found, LinkedIn linkedin.com/in/manavmodi1629 (count not retrievable), GitHub manav2modi 0 followers / agentphone-mcp 13 stars. Meet Modi: No public data found across Twitter, LinkedIn, GitHub. |
| Distribution Signals | No Product Hunt launch found; no press coverage found in named publications; Discord community present (agentphone.to); MCP server published on GitHub for Claude Code/Cursor/Windsurf integration (github.com/AgentPhone-AI/agentphone-mcp, 13 stars) |
| Emails | No public data found |
