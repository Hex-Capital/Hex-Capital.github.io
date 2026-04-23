# Humwork

> Connect AI agents to human experts in 30 seconds

| Field | Value |
|-------|-------|
| Website | https://humwork.ai |
| YC Page | https://www.ycombinator.com/companies/humwork |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | Remote (US) (YC job posting) |
| Tags | |
| YC Partner | Tyler Bosmeny |
| Emails | founders@humwork.ai |

## The Idea

**Problem:** AI agents (coding assistants, legal research agents, marketing agents) frequently stall on edge cases requiring human judgment — "the agent gets 80% of the way there, then loops on the same bug, makes the same bad architectural guess five times" (YC Launch page, April 2026). Users must manually rescue stuck agents, breaking workflow. [Inferred]: The current alternative is the user themselves intervening, consulting colleagues, or hiring freelancers through traditional marketplaces with multi-hour turnaround.

**Approach:** Humwork operates an MCP (Model Context Protocol) server that intercepts agent failures and routes them to a vetted human expert within 30 seconds (humwork.ai). The expert receives full agent context — code, errors, previous attempts — with PII redacted, communicates directly with the agent (not the user), and pushes the solution back into the agent's context (YC Launch page). Integration requires 60 seconds of MCP setup (humwork.ai). Compatible platforms: Claude Code, Cursor, Codex, Lovable, ChatGPT, Gemini, OpenClaw, Replit, and any MCP-compatible agent (humwork.ai).

**Differentiation:** vs. Tendem (Toloka/Nebius): Tendem offers a similar MCP-based expert network with 10,000+ experts and $72M in backing (Nebius blog, 2025), but positions primarily around research, data tasks, and general business workflows. Humwork targets real-time agent debugging specifically — coding agents, legal agents, marketing agents — with a 30-second matching SLA vs. Tendem's broader task orientation. vs. Invisible Technologies: Invisible ($144M raised, $134M revenue 2024; BusinessWire, Sep 2025) focuses on enterprise workflow automation with human-AI pipelines, not real-time MCP-native agent escalation. vs. traditional expert networks (Braintrust, Upwork): These marketplaces operate on hourly/project timelines, not sub-minute agent-to-expert handoffs.

**Business Model:** No public pricing page found on humwork.ai. The legal entity is Orange AI Inc. (copyright notice, humwork.ai). [Inferred]: Most likely monetization path is per-resolution or per-minute billing to agent operators, given the real-time transactional nature of the service and the two-sided marketplace structure (separate signup flows for clients at app.humwork.ai and experts at expert.humwork.ai).

**TAM/SAM:**
- Human-in-the-loop AI market: $5.4B (2025) → $6.73B (2026), projected $16.4B by 2030 at 24.9% CAGR (EIN Presswire via search snippet)
- AI agent market: $5.25B (2024) → $7.84B (2025), projected $52.62B by 2030 (search snippet, source unspecified)
- [Inferred]: SAM is the intersection — agent operators willing to pay for real-time expert escalation — which is a fraction of both markets. No public SAM estimate found.

**GTM / Distribution:** Active job posting for "Founding GTM Lead (AI-Native Outbound & Sales)" at $30K–$50K, remote US (YC page). [Inferred]: Initial distribution is likely developer-led via MCP server installation in coding tools (Claude Code, Cursor), leveraging YC network and demo-day visibility. The separate expert signup portal (expert.humwork.ai) suggests a supply-side acquisition motion in parallel.

## Defensibility

- **Expert supply network:** 1,000+ verified, skills-assessed, domain-tested experts across engineering, design, marketing, strategy, finance (humwork.ai). [Inferred]: Supply-side density and quality create a potential network effect — more experts enable faster matching, which attracts more agent operators, generating more demand for experts.
- **Resolution data:** 87% resolution rate, 130% net retention in software engineering (humwork.ai). [Inferred]: Accumulated resolution data could train matching algorithms and build institutional knowledge over time, but this moat is nascent.

**Market structure:** Tendem (Toloka) has structural advantages in expert supply (10,000+ experts, global multilingual coverage; toloka.ai) and $72M in funding (Nebius blog). [Inferred]: Incumbents like Upwork or Fiverr would face business model cannibalization in offering sub-minute, per-resolution pricing that undercuts their hourly/project fee structure. AI platform companies (Anthropic, OpenAI) could build first-party expert escalation, creating platform dependency risk.

**Commoditization risk:** The MCP integration layer is technically replicable — any company with an expert network could build an MCP server. Tendem has already done so (toloka.ai). [Inferred]: The defensibility hinges on expert supply quality, matching speed, and resolution rate rather than proprietary technology.

## Market & Traction

**Traction signals:**
- 1,000+ verified experts on the platform (humwork.ai, April 2026)
- 87% resolution rate (humwork.ai)
- 130% net retention in software engineering domain (humwork.ai)
- Avg. first reply: <2 minutes (humwork.ai)
- YC Launch page: 11 upvotes (YC Launch, April 2026)
- YC official tweet promoting launch (X.com/@ycombinator, April 2026) — engagement metrics not retrievable
- Press coverage: Analytics Drift article covering the launch (analyticsdrift.com, April 2026)
- YouTube intro video published (youtube.com, April 2026)
- Company Twitter/X: @humworkai — follower count not retrievable
- LinkedIn: linkedin.com/company/humwork — follower count not retrievable
- No Product Hunt listing found
- No Discord/Slack community found
- No public revenue figures disclosed

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Humwork |
|-----------|---------|-------------|-------------------------------|
| Tendem (Toloka/Nebius) | $72M (Bezos Expeditions, 2025; Nebius blog) | Revenue unknown | 10x larger expert network (10,000+), broader task scope beyond agent debugging, enterprise positioning |
| Invisible Technologies | $144M total ($100M growth, Sep 2025; BusinessWire) | $134M (2024; BusinessWire) | Enterprise workflow automation platform, acquired by Perplexity Aug 2025; not MCP-native or real-time agent escalation |
| Surge AI | Bootstrapped until 2025; seeking $1B raise at $15B+ valuation (Bloomberg, Jul 2025) | $1.2B (2024; Latka) | RLHF/data labeling for AI labs; not real-time agent-to-expert routing |
| Braintrust | $242.5M ($80M Series B, Feb 2026; Crunchbase) | $1M+/mo freelancer payouts (Crunchbase) | Decentralized freelancer marketplace with 50K+ members; traditional project/hourly model, not MCP-native |

**Why now:** Anthropic released the Model Context Protocol in late 2024 (anthropic.com), creating a standardized integration layer for AI agent tooling. [Inferred]: MCP adoption across Claude Code, Cursor, and other agents created a new distribution channel — a single MCP server install can reach users across multiple agent platforms simultaneously. The YC Spring 2026 batch was "dominated by autonomous agent pitches" (Analytics Drift, April 2026), reflecting a surge in agent deployment that increases demand for expert fallback mechanisms.

## Founders & Team

**Yash Goenka** — Co-founder & CEO
- UC Berkeley, BS Computer Science & Statistics/Data Science (yashgoenka.com)
- Repeat YC founder: Qualify.bot (YC S25) — AI phone agents for commercial lenders that boosted loan conversion 4x (YC Launch page). Co-founded under Orange AI Inc.
- Previously: AI engineer at EcoMap Technologies, leading GPT-based chatbot development (yashgoenka.com)
- Additional startups: Instawrite.ai, Jarvys.ai, Iris BCI (assistive tech for Locked-in Syndrome), Phonecall.bot (yashgoenka.com)
- Patent holder for graphene supercapacitor manufacturing (YC page)
- Built first LLM startup in 2021 (YC page)
- UC Berkeley rocketry team: avionics software for rocket reaching 11,193 ft altitude, Mach 1.2 (yashgoenka.com)
- Twitter/X: @theyashgoenka — follower count not retrievable
- LinkedIn: linkedin.com/in/yashvg/
- GitHub: github.com/yashgoenka — 25 public repos, 719 total stars, 12 followers (GitHub profile). Notable: chat-apple-notes (RAG for Apple Notes, 13 stars)

**Rohan Datta** — Co-founder & CTO
- UC Berkeley, BS & MS Civil Engineering (YC Launch page)
- Data Scientist at Microgrid Labs for ~5 years, building EV charging optimization systems (YC page; LinkedIn)
- Drone imaging research at UC Berkeley (YC page)
- Built AI voice platform automating 1M+ phone call minutes (YC page); conversational AI handling 100K+ calls/month (LinkedIn/YC S25 context)
- HL7 Fellow and Engineering Teaching Faculty at UC Berkeley (search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/rohan-datta-2500/
- GitHub: github.com/Rohan-Datta — 19 public repos, 3 total stars, 2 followers (GitHub profile). Repos in knowledge distillation, NLP, recommender systems.

**Co-founder relationship:** 16-year friendship; both UC Berkeley alumni and former roommates (YC page; YC Launch page).

**Founder-market fit:** Yash brings repeat YC experience (S25 → P26), serial AI/LLM product building since 2021, and conversational AI expertise from Phonecall.bot/Qualify.bot. Rohan brings data science depth, AI voice platform engineering (1M+ call minutes), and ML research experience. Their prior product (Qualify.bot) involved real-time AI-to-human interaction in a time-sensitive domain (loan qualification), which is structurally similar to Humwork's agent-to-expert matching problem.

## Key Risks

**Direct, well-funded competitor:** Tendem (Toloka/Nebius) offers the same core product — MCP-based human expert access for AI agents — with 10x the expert supply (10,000+ vs. 1,000+) and $72M in funding (Nebius blog, 2025). Toloka has existing relationships with Anthropic and Shopify (toloka.ai). Mitigation: Humwork's narrower focus on real-time agent debugging may enable faster iteration in that niche.

**Platform dependency:** Distribution depends on MCP adoption by agent platforms (Claude Code, Cursor, etc.). If a major platform builds native expert escalation or deprecates third-party MCP servers, Humwork loses its integration channel. Anthropic, which created MCP, could build first-party expert escalation into Claude. No mitigation found.

**Founder pivot pattern:** Yash pivoted from Qualify.bot (YC S25, launched July 2025) to Humwork (YC P26, launched April 2026) within ~9 months. While pivots are common, the rapid transition raises questions about conviction and product-market fit iteration speed. Both companies operate under Orange AI Inc. (humwork.ai copyright). Mitigation: acceptance into a second YC batch suggests YC partner confidence.

**Expert supply-side liquidity:** Matching quality depends on maintaining a sufficiently deep bench of experts across multiple domains and time zones. At 1,000+ experts (humwork.ai), thin domains (e.g., niche legal specialties) may have limited coverage, leading to match failures that erode the resolution rate. No mitigation found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $16.4B by 2030, 24.9% CAGR — human-in-the-loop AI market (EIN Presswire via search snippet) |
| SAM | No public data found |
| Traction | 1,000+ verified experts, 87% resolution rate, 130% net retention in software engineering, <2 min avg first reply (humwork.ai, April 2026); 11 upvotes on YC Launch (YC, April 2026) |
| Revenue Signal | No public data found |
| Founders | Yash Goenka (CEO): repeat YC founder (S25, P26), serial AI/LLM builder since 2021, UC Berkeley CS. Rohan Datta (CTO): 5yr data scientist at Microgrid Labs, built AI voice platform (1M+ call minutes), UC Berkeley BS/MS. |
| Competitors | Tendem/Toloka ($72M raised, revenue unknown, 10K+ expert network with MCP integration); Invisible Technologies ($144M raised, $134M revenue 2024, enterprise AI+human workflows); Surge AI (bootstrapped, $1.2B revenue 2024, RLHF data labeling); Braintrust ($242.5M raised, $1M+/mo payouts, decentralized freelancer marketplace) |
| Moat Signals | 1,000+ verified experts, 87% resolution rate, 130% net retention in software engineering (humwork.ai) |
| Risk Factors | Well-funded direct competitor (Tendem/Toloka, $72M), MCP platform dependency, rapid founder pivot from prior YC company |
| Founder Reach | Yash Goenka: Twitter @theyashgoenka (count not retrievable), LinkedIn linkedin.com/in/yashvg/, GitHub 719 stars. Rohan Datta: Twitter not found, LinkedIn linkedin.com/in/rohan-datta-2500/, GitHub 3 stars. |
| Distribution Signals | YC Launch 11 upvotes (YC, April 2026); YC official tweet (X.com/@ycombinator, April 2026); Analytics Drift article (analyticsdrift.com, April 2026); YouTube intro video (YouTube, April 2026) |
| Emails | founders@humwork.ai (humwork.ai) |
