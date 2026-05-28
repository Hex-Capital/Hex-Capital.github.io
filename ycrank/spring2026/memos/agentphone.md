# AgentPhone

> Phone Numbers for AI Agents

| Field | Value |
|-------|-------|
| Website | https://agentphone.ai/ |
| YC Page | https://www.ycombinator.com/companies/agentphone |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, API, Telecommunications |
| YC Partner | David Lieb (YC company page) |
| Emails | No public data found (contact form only at agentphone.ai/contact) |

## The Idea

- **Problem:** AI agents have no phone identity, so they cannot place/receive voice calls or SMS to humans and businesses; developers currently stitch together Twilio + STT + TTS + LLM orchestration (company website; agentphone.ai, May 2026).
- **Approach:** Single API/SDK + MCP server that provisions US/Canada numbers and routes both voice (auto-transcribed) and SMS into one unified webhook, with TTS handled on the egress side (agentphone.ai, May 2026).
- **Differentiation:** vs. Twilio — agent-native unified webhook with built-in transcription/TTS rather than raw telephony primitives (agentphone.ai); vs. Vapi/Retell/Bland — focuses on giving an agent a persistent phone-number identity for inbound/outbound voice + SMS rather than orchestrating outbound voice-only call campaigns (competitor positioning per retellai.com, superdupr.com, May 2026).
- **Business Model:** [Inferred]: Consumption-based per-number + per-minute/per-message pricing, standard for telephony APIs; no pricing page is publicly exposed (agentphone.ai, May 2026).
- **TAM/SAM:** Company cites "$2T global telecom industry" (agentphone.ai, May 2026); global telecom services market estimated at $2.10T in 2025 (Grand View Research, 2025); no public TAM/SAM data found for agent-specific telephony segment.
- **GTM / Distribution:** Developer-led — Python/Node SDKs, REST API, and native MCP integration with Claude Code/Cursor; early users include teams at Google's Agent Development Kit, Replit, LangChain, Alchemy, Sim AI, and YC (agentphone.ai; YC company page, May 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond customer-logo concentration in agent-tooling vendors (Google ADK, LangChain, Replit per agentphone.ai).
- **Future moat:** [Inferred]: Regulatory/compliance posture (KYC, A2P 10DLC registration, anti-fraud controls for autonomous callers) and an agent-identity reputation graph across carriers could harden over time; unproven now because the agent-calling category lacks established carrier policies.
- **Market structure:** [Inferred]: Incumbents (Twilio) can replicate the unified webhook quickly, but carrier-level rules treating autonomous AI calls as a distinct compliance class would create a barrier that favors a purpose-built provider; no current regulation cited.
- **Commoditization risk:** Bland AI ($65M raised, school of marketing, 2024), Vapi ($20M Series A, $130M valuation, bvp.com, Dec 2024), Retell AI ($5.1M raised, $50M ARR, arr.club), and Twilio (NYSE:TWLO, $5.1B FY25 revenue, futurumgroup.com) can all extend into agent-number provisioning using existing telephony stacks.

## Market & Traction

- **Traction signals:**
  - Spring 2026 YC batch company, launched via YC Launch page "QNE-agentphone" (ycombinator.com/launches, 2026).
  - Customer logos: Google Agent Development Kit, Replit, Y Combinator, Sim AI, LangChain, Alchemy building on AgentPhone (agentphone.ai; YC page, May 2026).
  - Founder X follower counts not retrievable via WebFetch; handles @manav2modi and @themeetmodi confirmed (YC page, May 2026).
  - No public revenue, user count, GitHub star count, Discord member count, or Product Hunt rank found.
  - Hiring status listed as Not Hiring (YC page, May 2026).
- **Competitors:**
  - Bland AI ($65M total raised across 3 rounds incl. $40M Series B led by Emergence Capital; $3.8M revenue June 2024, getlatka.com): outbound voice-call platform with proprietary in-house speech models, not focused on agent-as-phone-identity.
  - Vapi ($20M Series A led by Bessemer, $130M valuation, Dec 2024, bvp.com; "millions in revenue within 6 months"): bring-your-own-LLM/TTS/telephony orchestration layer, not a number-issuing identity layer.
  - Retell AI ($5.1M seed led by Alt Capital, Crunchbase; $50M ARR per arr.club, $7.2M revenue per getlatka.com 2025): drag-and-drop voice agent builder integrating with Twilio for telephony rather than provisioning its own agent-identity numbers.
  - Twilio (public, $5.1B FY25 revenue, +14% YoY; voice AI revenue +60% YoY in Q4 FY25, futurumgroup.com): underlying telephony incumbent and likely supplier, not agent-native.
  - Synthflow (in-house telephony, sub-100ms latency claim, synthflow.ai/blog): full-stack voice agent platform overlapping on inbound voice.
- **Why now:** [Inferred]: 2024–2026 emergence of agent runtimes (Google ADK, Claude Code/MCP, Cursor agents) crossed a usability threshold for agents to autonomously take real-world actions — Twilio reported voice AI revenue up 60% YoY in Q4 FY25 (futurumgroup.com), signaling production-scale agent telephony demand.

## Founders & Team

- **Manav Modi (Co-founder):**
  - Background: BS Computer Engineering, UIUC Grainger College (graduated 2023); engineer at Rokmetro shipping the Vogue app revamp that grew users from ~100K to 1M+, including Met Gala livestream feature credited in a Webby Award (manav2modi.com; YC page, 2026); also worked on GrayKea alumni-giving project (manav2modi.com).
  - Twitter/X: @manav2modi (YC page); count not retrievable.
  - LinkedIn: "AgentPhone" (linkedin.com/in/manav2modi/, headline per Bing snippet).
  - GitHub: No public repo with notable star count found.
- **Meet Modi (Co-founder):**
  - Background: BS Computer Science & Linguistics, UCLA; All India Rank #1 in Computer Science; previously built AI Agent infrastructure on WhatsApp serving 280M+ businesses at Meta (YC company page, May 2026).
  - Twitter/X: @themeetmodi (YC page); count not retrievable.
  - LinkedIn: "AgentPhone" (linkedin.com/in/meetmodi-/).
  - GitHub: No public repo with notable star count found.
- **Co-founder relationship:** Brothers (per manav2modi.com personal site, "building AgentPhone with my co-founder (and brother) Meet").
- **Founder-market fit:** Meet's prior role building AI-agent infrastructure on WhatsApp at Meta covers the messaging/agent-platform side; Manav's consumer-app scaling at Vogue covers the developer-product/scaling side (YC page; manav2modi.com, 2026); no advisors or named investors beyond YC found.

## Key Risks

- **Incumbent substitution by Twilio:** Twilio supplies the underlying numbers and reported voice AI revenue +60% YoY in Q4 FY25 (futurumgroup.com); a Twilio-issued "agent number" SKU with a unified webhook would directly substitute the product. No mitigation cited.
- **Crowded well-funded competitive set:** Bland ($65M), Vapi ($20M Series A at $130M), and Retell ($50M ARR) are already in market with overlapping telephony+agent offerings (sources above) and can extend into agent-identity numbering before AgentPhone establishes share.
- **Regulatory/compliance exposure for autonomous calling:** US A2P 10DLC, STIR/SHAKEN, and carrier anti-spam rules treat unsolicited automated voice/SMS as high-risk; agent-driven outbound at scale risks number deregistration or carrier blocks. No mitigation publicly described on agentphone.ai.
- **Name collision / brand ambiguity:** Multiple unrelated products use "AgentPhone" / "AI Phone Number" branding (e.g., AgenticCalling AI, PollyReach on Product Hunt; agentph.one, agentphone.to domains seen in search), creating SEO and trademark contention. No mitigation found.
- **Pricing opacity / unproven monetization:** No public pricing or revenue figures available (agentphone.ai, May 2026), so unit economics and willingness-to-pay vs. Twilio passthrough costs are unverified.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.10T global telecom services market 2025 (Grand View Research, 2025); company cites "$2T global telecom industry" (agentphone.ai, May 2026) |
| SAM | No public data found |
| Traction | Customer logos: Google Agent Development Kit, Replit, Y Combinator, Sim AI, LangChain, Alchemy (agentphone.ai; YC page, May 2026); Spring 2026 YC Launch page live (ycombinator.com/launches/QNE, 2026) |
| Revenue Signal | No public data found (no pricing page; agentphone.ai, May 2026) |
| Founders | Manav Modi (Co-founder): UIUC CompE 2023, Vogue app 100K→1M+ users at Rokmetro, Webby. Meet Modi (Co-founder): UCLA CS & Linguistics, All India Rank #1 CS, ex-Meta WhatsApp AI agent infra for 280M+ businesses. |
| Competitors | Bland AI ($65M raised, $3.8M revenue June 2024, outbound voice with proprietary speech models); Vapi ($20M Series A at $130M val, voice-agent orchestration layer); Retell AI ($5.1M raised, $50M ARR, drag-and-drop voice agent builder); Twilio (public, $5.1B FY25 revenue, telephony incumbent); Synthflow (in-house telephony, voice-agent platform) |
| Moat Signals | No public data found |
| Risk Factors | Twilio substitution, crowded funded competitors (Bland/Vapi/Retell), A2P/STIR-SHAKEN compliance for autonomous calls |
| Founder Reach | Manav Modi: X @manav2modi (count not retrievable), LinkedIn /in/manav2modi (count not retrievable), GitHub not found; Meet Modi: X @themeetmodi (count not retrievable), LinkedIn /in/meetmodi- (count not retrievable), GitHub not found |
| Distribution Signals | YC Launch page "QNE-agentphone" (ycombinator.com/launches, 2026); Python SDK, Node SDK, REST API, MCP server (agentphone.ai); Discord and GitHub linked from site (counts not retrievable); no Product Hunt page for AgentPhone itself found |
| Emails | No public data found |

Sources:
- [AgentPhone YC company page](https://www.ycombinator.com/companies/agentphone)
- [AgentPhone YC Launch page](https://www.ycombinator.com/launches/QNE-agentphone-phone-numbers-for-ai-agents)
- [agentphone.ai](https://agentphone.ai/)
- [Manav Modi personal site](https://manav2modi.com/)
- [Bland AI Series B announcement](https://www.bland.ai/blogs/bland-raises-a-40m-series-b)
- [Getlatka — Bland AI revenue](https://getlatka.com/companies/bland.com)
- [Bessemer — Vapi Series A](https://www.bvp.com/news/our-investment-in-vapi-the-voice-ai-developer-platform)
- [Vapi $20M Series A blog](https://vapi.ai/blog/vapi-secures-20m-to-start-the-voice-revolution-2)
- [Retell AI seed announcement](https://www.retellai.com/blog/seed-announcement)
- [Retell AI $50M ARR](https://www.arr.club/retell/retell-scales-to-50m-arr-with-a-team-of-30-people)
- [Getlatka — Retell AI revenue](https://getlatka.com/companies/retellai.com)
- [Futurum — Twilio Q4 FY25](https://futurumgroup.com/insights/twilio-q4-fy-2025-revenue-beat-margin-expansion-ai-voice-momentum/)
- [Grand View Research — telecom services market](https://www.grandviewresearch.com/industry-analysis/global-telecom-services-market)
