# Humwork

> Connect AI agents to human experts in 30 seconds

| Field | Value |
|-------|-------|
| Website | https://humwork.ai |
| YC Page | https://www.ycombinator.com/companies/humwork |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags |  |
| YC Partner | Tyler Bosmeny (YC company page) |
| Emails | founders@humwork.ai (humwork.ai contact) |

## The Idea

- **Problem:** AI coding/research/marketing agents (Claude Code, Cursor, Lovable, Replit, Cline, OpenClaw) "get 80% of the way there, then loop on the same bug, make the same bad architectural guess five times, hallucinate an important legal nuance, or quietly produce something that looks right but is subtly wrong" — affecting AI-first developers, engineering teams, and founders building with agentic tools (YC launch post, Apr 15 2026).
- **Approach:** Humwork ships an MCP server that, when an agent hits a wall, routes the agent (not the user) to a verified human domain expert in under 30 seconds, sharing context (code, docs, errors) with PII redaction, and pushes the answer back into the agent's context window (humwork.ai; theagenttimes.com, Apr 2026).
- **Differentiation:** Positioned as the "first Agent-to-Person (A2P) marketplace" vs. HumanLayer (human-approval/in-the-loop SDK for agents, not an expert marketplace — humanlayer.dev), Skills.sh and Agensi (paid skill/package marketplaces for agents, not live human experts — kdnuggets, 2026), and traditional Upwork-style platforms (human-to-human, not agent-initiated handoff) (testingcatalog.com, Apr 2026).
- **Business Model:** Credit-based packages billed in advance in fixed time increments with a minimum credit charge per consultation; expert rate set by platform assessment plus expert input and disclosed before the consultation begins (humwork.ai/terms via search). [Inferred]: Humwork takes a marketplace take-rate spread between agent-paid credits and expert payout, given the A2P framing of "AI agents will pay you to chat with them" (YC tweet, Apr 15 2026).
- **TAM/SAM:** Freelance platforms market $6.37B (2025) → $24.16B (2033) at 18.6% CAGR (Grand View Research, 2025); broader gig economy $674.1B in 2026 at 15.79% CAGR (DemandSage, 2026); 47% of freelancers (~30M) provide knowledge services (Upwork, 2024). No public TAM/SAM data found for the agent-to-person sub-segment specifically.
- **GTM / Distribution:** Single-integration MCP server "plug and play in 60 seconds" embedded inside agent surfaces (Claude Code, Cursor, Lovable, Replit, Cline, OpenClaw) — distribution rides on top of those agent ecosystems (humwork.ai); reinforced by YC launch coverage in TestingCatalog, Analytics Drift, The Agent Times, blockchain.news, and the YC @ycombinator launch tweet (Apr 15 2026).

## Defensibility

- **Moat today:** Two-sided marketplace liquidity — 3,000+ verified experts on the supply side and 2,858 questions resolved in beta on the demand side, with an 87% resolution rate and <2-min first-reply SLA cited at launch (humwork.ai; theagenttimes.com, Apr 2026).
- **Future moat:** [Inferred]: Expert performance/routing data (which expert resolves which agent failure mode fastest) could compound into a proprietary matching dataset; unproven now because the marketplace is roughly six weeks post public launch (launch Apr 15 2026 vs. current date May 27 2026).
- **Market structure:** [Inferred]: Vertical incumbents (Upwork, Toptal, Catalant) sell human-to-human contracted engagements priced in hours/projects; rebuilding for sub-30-second agent-initiated, credit-metered, MCP-routed consultations would cannibalize their existing per-project take-rate and SLA model, creating a unit-economics conflict rather than a feature-parity gap.
- **Commoditization risk:** HumanLayer already ships an open-source SDK for agent ↔ human channels (github.com/humanlayer/humanlayer) and could add an expert pool; Upwork/Toptal/Fiverr could expose MCP endpoints over existing freelancer networks; expert-network incumbents (GLG, Silverlight) could productize per-minute consults for agents (humanlayer.dev; silverlightresearch.com).

## Market & Traction

- **Traction signals:**
  - 3,000+ verified experts currently (humwork.ai homepage, May 2026); 1,000+ experts at launch (theagenttimes.com, Apr 15 2026).
  - 83% resolution rate (humwork.ai, May 2026); 87% resolution rate cited at launch beta (theagenttimes.com, Apr 15 2026).
  - Average first reply <2 minutes (humwork.ai; testingcatalog.com).
  - 2,858 questions resolved in beta pre-launch (theagenttimes.com, Apr 15 2026).
  - 130% net retention cited for Software Engineering domain (humwork.ai homepage).
  - Press: TestingCatalog, Analytics Drift, The Agent Times, blockchain.news, Medium "Bootcamp" (analyticsdrift.com; theagenttimes.com; medium.com, Apr 2026).
  - Y Combinator launch tweet from @ycombinator quoting @humworkai and @theyashgoenka (x.com/ycombinator/status/2044445649538809985, Apr 15 2026).
  - Hiring: Founding Engineer ($120–150K, ~5% equity) and GTM Engineer ($20–40K, 0.10–1.00% equity) actively listed on YC jobs (ycombinator.com/companies/humwork).
  - Company Twitter @humworkai (referenced in YC tweet, Apr 15 2026); follower count not retrievable.
  - Discord/Slack community: No public data found.
- **Competitors:**
  - HumanLayer (~$500K raised per Crunchbase; $660K revenue per Getlatka, 6-person team): SDK/API for human-in-the-loop approval and channels for agents — does not provide a marketplace of paid domain experts on demand (crunchbase.com/organization/humanlayer; getlatka.com/companies/humanlayer.dev).
  - Skills.sh (Vercel-backed; revenue unknown): npm-style installable agent skill packages across Claude Code/Codex/Cursor/OpenClaw — code/skills, not live humans (kdnuggets, 2026).
  - Agensi (revenue unknown): security-reviewed paid skill marketplace, 80% creator payout — packaged software skills, not synchronous human consults (agensi.io, 2026).
  - Upwork (public; ~$760M FY24 revenue per Upwork filings via search snippet): human-to-human contracted freelance work, not agent-initiated MCP routing.
  - GLG / expert networks (revenue unknown for Humwork-overlap segment): per-minute domain consults but priced for institutional research, no MCP/agent integration (silverlightresearch.com, 2026).
- **Why now:** Mass adoption of MCP as a cross-tool standard across Claude Code, Cursor, Lovable, Replit, Cline, and OpenClaw in the past 6–12 months created a uniform integration substrate that lets a single server expose human experts to every agent surface — Humwork itself frames the launch around MCP availability (testingcatalog.com, Apr 2026; theagenttimes.com, Apr 2026).

## Founders & Team

- **Yash Goenka (Co-founder & CEO):**
  - Background: UC Berkeley, B.A. Data Science / CS / Statistics; previously co-founder/CEO Qualify.bot (YC S25, AI phone agents for commercial lenders) and co-founder Orange AI / Phonecall.bot and Instawrite.ai; software engineer at EcoMap Technologies (GPT-3 chatbot) and AllSides (NLP); patent holder for graphene supercapacitor manufacturing; built first LLM startup in 2021; "2x founder" (YC page; yashgoenka.com/about; ycombinator.com/launches/O4z; theorg.com). Humwork is registered under Orange AI Inc. (humwork.ai footer).
  - Twitter/X: @theyashgoenka (referenced in YC launch tweet, Apr 15 2026) and @yashgoenka; follower count not retrievable.
  - LinkedIn: "Co-founder at Humwork (YC P26)" — linkedin.com/in/yashvg/.
  - GitHub: @yashgoenka, 25 public repos; no top-repo star count retrievable (github.com/yashgoenka).
- **Rohan Datta (Co-founder & CTO):**
  - Background: UC Berkeley BS and MS in Civil Engineering — Energy, Civil Infrastructure and Climate (2019–2020); Data Scientist at MicroGrid Labs; drone-imagery research at Berkeley; previously built an AI voice-calling platform that automated >1M call minutes (YC page; linkedin.com/in/rohan-datta-2500).
  - Twitter/X: No public account found.
  - LinkedIn: "Humwork (YC P26)" — linkedin.com/in/rohan-datta-2500.
  - GitHub: No public account found in search results.
- **Co-founder relationship:** Yash and Rohan have been friends for 16 years and both attended UC Berkeley (YC company page; analyticsdrift.com, 2026).
- **Founder-market fit:** Both founders have shipped prior production AI/voice systems at scale (Yash: Qualify.bot YC S25 phone agents; Rohan: >1M-minute AI voice platform) — directly applicable to building real-time, low-latency agent ↔ human routing over MCP (YC page; ycombinator.com/launches/O4z). No public data found on advisors, board members, or named angel investors beyond YC's standard deal.

## Key Risks

- **Marketplace cold-start on the demand side:** Supply is currently 3,000+ experts (humwork.ai) but public demand metric is 2,858 beta resolutions cumulatively (theagenttimes.com, Apr 15 2026), implying <1 resolution per expert pre-launch — expert utilization and retention will compress payouts and could collapse supply if demand does not scale.
- **MCP platform dependency:** Distribution and integration depend entirely on the Model Context Protocol surface inside third-party agent products (Claude Code, Cursor, Lovable, Replit, Cline, OpenClaw) (humwork.ai). If Anthropic, OpenAI, or Cursor ship a first-party "ask a human" provider or restrict third-party MCP servers, Humwork's wedge narrows.
- **Latency/quality SLA at scale:** The "<30 seconds to match, <2 minutes to first reply" claim is from beta volume of 2,858 questions (theagenttimes.com, Apr 15 2026); maintaining sub-2-minute response across legal/marketing/strategy domains under load is unproven technically and operationally.
- **Founder bandwidth across two YC companies:** Yash Goenka is publicly listed as Co-founder & CEO of Qualify.bot (YC S25) and Co-founder & CEO of Humwork (YC S26) (theorg.com; ycombinator.com/launches/O4z; ycombinator.com/companies/humwork). Status of Qualify.bot relative to Humwork is not publicly clarified.
- **Liability and trust on expert advice:** Routing legal, financial, and engineering judgments from agents to humans creates downstream liability if an expert's answer is wrong and ingested by the agent's automated workflow — humwork.ai/terms requires per-consultation acceptance but no public data found on insurance/indemnity structure.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Freelance platforms $6.37B (2025) → $24.16B (2033), 18.6% CAGR (Grand View Research, 2025); gig economy $674.1B (2026), 15.79% CAGR (DemandSage, 2026) |
| SAM | No public data found |
| Traction | 3,000+ verified experts (humwork.ai, May 2026); 1,000+ experts at launch (The Agent Times, Apr 15 2026); 87% resolution rate, <2-min first reply, 2,858 questions resolved in beta (The Agent Times, Apr 15 2026); 130% NRR for Software Engineering domain (humwork.ai); YC launch tweet from @ycombinator (x.com, Apr 15 2026); press in TestingCatalog, Analytics Drift, The Agent Times, blockchain.news (Apr 2026) |
| Revenue Signal | Credit-package pricing billed in fixed time increments; expert rate set per-consultation by platform + expert and disclosed pre-call (humwork.ai/terms via search, 2026); specific tier prices not publicly listed |
| Founders | Yash Goenka (CEO): UC Berkeley Data Science; prior Qualify.bot (YC S25), Phonecall.bot/Orange AI, Instawrite; graphene supercapacitor patent. Rohan Datta (CTO): UC Berkeley BS+MS Civil Engineering; ex-MicroGrid Labs DS; prior AI voice platform >1M minutes |
| Competitors | HumanLayer ($500K seed per Crunchbase, $660K revenue per Getlatka — HITL SDK, not human marketplace); Skills.sh (Vercel-backed, revenue unknown — agent skill packages, not humans); Agensi (revenue unknown — paid skill marketplace, not humans); Upwork (~$760M FY24 revenue via search snippet — human-to-human, not agent-MCP); GLG/expert networks (revenue unknown — no MCP/agent integration) |
| Moat Signals | Two-sided marketplace with 3,000+ verified experts (humwork.ai); first mover on A2P framing per launch press (testingcatalog.com, Apr 2026); MCP-native single-integration distribution across major agent surfaces (humwork.ai) |
| Risk Factors | MCP platform/distribution dependency, marketplace cold-start (low pre-launch demand per expert), founder bandwidth across Qualify.bot and Humwork |
| Founder Reach | Yash Goenka: Twitter @theyashgoenka / @yashgoenka count not retrievable, LinkedIn /in/yashvg/ count not retrievable, GitHub @yashgoenka 25 repos. Rohan Datta: Twitter not found, LinkedIn /in/rohan-datta-2500/ count not retrievable, GitHub not found |
| Distribution Signals | YC launch Apr 15 2026 (ycombinator.com/launches/PxH); YC official tweet @ycombinator (x.com, Apr 15 2026); press in TestingCatalog, Analytics Drift, The Agent Times, blockchain.news, Medium Bootcamp (Apr 2026); 2 open jobs on YC jobs board (ycombinator.com/companies/humwork) |
| Emails | founders@humwork.ai (humwork.ai; YC page) |

Sources:
- [Humwork — YC company page](https://www.ycombinator.com/companies/humwork)
- [Humwork.ai homepage](https://humwork.ai)
- [Launch YC: Humwork](https://www.ycombinator.com/launches/PxH-humwork-connect-ai-agents-with-human-experts-in-30-seconds)
- [The Agent Times — Humwork launches A2P marketplace](https://theagenttimes.com/articles/humwork-launches-agent-to-person-marketplace-so-we-never-deb-65cd81b5)
- [TestingCatalog — Humwork A2P marketplace](https://www.testingcatalog.com/humwork-a2p-marketplace-connects-ai-agents-with-experts/)
- [Analytics Drift — Inside the Humwork YC Launch](https://analyticsdrift.com/an-ai-agent-will-pay-you-inside-the-humwork-yc-launch/)
- [blockchain.news — AI Agents Hiring Humans business model](https://blockchain.news/ainews/ai-agents-hiring-humans-y-combinator-backs-humwork-s-30-second-expert-hand-off-business-model-analysis)
- [Y Combinator launch tweet](https://x.com/ycombinator/status/2044445649538809985)
- [Yash Goenka — LinkedIn](https://www.linkedin.com/in/yashvg/)
- [Yash Goenka — personal site](https://www.yashgoenka.com/about)
- [Yash Goenka — GitHub](https://github.com/yashgoenka)
- [Rohan Datta — LinkedIn](https://www.linkedin.com/in/rohan-datta-2500/)
- [Qualify.bot YC launch (Yash Goenka)](https://www.ycombinator.com/launches/O4z-qualify-bot-ai-phone-agents-for-commercial-lenders)
- [HumanLayer — Crunchbase](https://www.crunchbase.com/organization/humanlayer)
- [HumanLayer — Getlatka revenue profile](https://getlatka.com/companies/humanlayer.dev)
- [Grand View Research — Freelance Platforms Market](https://www.grandviewresearch.com/industry-analysis/freelance-platforms-market-report)
- [DemandSage — Gig Economy Statistics 2026](https://www.demandsage.com/gig-economy-statistics/)
