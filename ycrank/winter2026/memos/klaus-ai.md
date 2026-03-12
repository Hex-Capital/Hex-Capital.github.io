# Klaus AI

> Fast and Safe OpenClaw on the cloud

| Field | Value |
|-------|-------|
| Website | https://klausai.com |
| YC Page | https://www.ycombinator.com/companies/klaus-ai |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Deep Learning |
| YC Partner | Tyler Bosmeny |
| Emails | founders@usebits.com, robbie@usebits.com |

## The Idea

**Problem:** OpenClaw is an open-source autonomous AI agent with 68,000+ GitHub stars (Milvus blog; some sources cite 80K+) that runs on local machines and connects to messaging platforms like Slack, Telegram, and WhatsApp. However, self-hosting OpenClaw requires DevOps expertise: configuring Docker, managing servers, integrating LLM API keys, and hardening security. OpenClaw's broad system permissions have drawn cybersecurity scrutiny (Wikipedia), creating additional risk for non-expert users. Today, individuals and teams wanting a personal AI assistant must either self-host (complex and insecure if misconfigured) or use one of several emerging managed-hosting providers.

**Approach:** Klaus provides a fully managed OpenClaw instance on the cloud, deployable in 3–5 minutes. Each instance comes pre-configured with integrations (Slack, Telegram, Moltbook), LLM provider connections (Anthropic, OpenAI, Gemini), browser access, malware protection, and a fresh email address (YC page, LinkedIn company page). The product is accessed via app.usebits.com.

**Differentiation:** Klaus emphasizes security and speed of setup relative to competitors. While MyClaw offers similar managed hosting at $19–79/month (MyClaw pricing page) and SimpleOpenClaw starts at $14.99/month (SimpleOpenClaw website), Klaus's YC backing and pre-installed security features are positioning differentiators. Klaus also bundles "common skills" — pre-configured OpenClaw skill packages — reducing time to a productive agent. The company operates under the "usebits" brand (usebits.com), distinguishing its corporate identity from the consumer-facing "Klaus" product name.

**Business Model:** No public pricing page was accessible at time of research (website rendered only a Google Tag Manager script). [Inferred]: Based on competitor pricing (MyClaw $19–79/month, SimpleOpenClaw $14.99+/month), Klaus likely follows a monthly subscription model for managed hosting tiers, potentially differentiated by compute, integrations, or number of agent instances.

**TAM/SAM:** The global agentic AI market was valued at $7.55 billion in 2025 and is projected to reach $199.05 billion by 2034 at a 43.84% CAGR (Precedence Research, 2025). The AI agents market is projected to reach $52.62 billion by 2030 (MarketsandMarkets). The specific managed OpenClaw hosting subsegment is a fraction of this: TrustMRR data shows the OpenClaw ecosystem generated approximately $358,600 in monthly revenue across 153 recorded projects, with managed deployment contributing ~$120,100/month or 34.5% of that total (TrustMRR via search snippet). No public TAM/SAM data found specific to managed OpenClaw hosting.

**GTM / Distribution:** Klaus was featured in a Y Combinator LinkedIn post ("Klaus sets up your OpenClaw personal assistant...") (LinkedIn, Y Combinator post). The YC launch post was titled "Klaus: Get Your OpenClaw Personal Assistant in 5 minutes" (YC page). [Inferred]: Primary distribution is likely through the OpenClaw community (developer forums, GitHub, social media), YC network, and organic search from users seeking OpenClaw hosting solutions.

## Defensibility

No strong moat signals found in public sources at this stage. The managed OpenClaw hosting market has low barriers to entry — multiple competitors (MyClaw, SimpleOpenClaw, xCloud, LobsterDesk) offer similar one-click deployment products at comparable price points.

[Inferred]: Potential moat could develop via (1) proprietary security tooling layered on top of OpenClaw that becomes difficult to replicate, (2) a curated skills marketplace that creates ecosystem lock-in, or (3) enterprise compliance certifications (SOC 2, HIPAA) that raise the bar for competitors. None of these are demonstrated in public sources.

**Market structure:** No structural barrier identified at this stage. OpenClaw is open-source, and deploying it on cloud infrastructure is a well-understood DevOps task. The underlying infrastructure providers (AWS, GCP, etc.) do not currently offer first-party managed OpenClaw hosting, but could. The competitive field is fragmented with many small entrants and no dominant player.

**Commoditization risk:** High. The core offering — managed OpenClaw deployment — can be replicated by any team with cloud infrastructure experience. The OpenClaw ecosystem already has 129+ startups (Phemex News via search snippet), many offering hosting. Differentiation depends on execution: security features, UX polish, reliability, and community trust.

## Market & Traction

**Traction signals:**
- LinkedIn: 529 followers (LinkedIn company page, as of research date)
- Featured in Y Combinator LinkedIn post (LinkedIn, activity ID 7426021965435453440)
- Twitter/X: @usebits_inc — handle confirmed, follower count not retrievable (JavaScript-rendered page)
- Product Hunt: No launch found
- No public revenue, user count, or download data found
- Website (klausai.com) not fully accessible at time of research — rendered only tracking scripts

**Competitive landscape:**

1. **MyClaw** — Managed OpenClaw hosting with plans at $19–79/month; positions as "world's first one-click deployment OpenClaw platform" (Yahoo Finance press release). Funding: no public data found. Revenue: no public data found. Differentiator vs. Klaus: first-mover positioning and public pricing transparency.

2. **SimpleOpenClaw** — One-click OpenClaw deployment from $14.99/month with Telegram, Discord, Slack, and WhatsApp integrations (SimpleOpenClaw website). Funding: no public data found. Revenue: no public data found. Differentiator vs. Klaus: lower entry price point.

3. **LobsterDesk** — Managed hosting with sandboxed execution and agent automation (LobsterDesk website). Funding: no public data found. Revenue: no public data found. Differentiator vs. Klaus: broader agent automation features beyond OpenClaw.

4. **Moltworker** — Runs OpenClaw in Cloudflare's sandbox, ensuring the agent cannot access the user's local system (search results via eesel.ai). Funding: no public data found. Revenue: no public data found. Differentiator vs. Klaus: security-first architecture via Cloudflare isolation.

5. **Nanobot** — Lightweight alternative delivering OpenClaw core features in 4,000 lines of Python (search results via eesel.ai). Not a hosting provider but a competing framework. Differentiator: simplicity and auditability of codebase.

**Why now:** OpenClaw reached mass-adoption scale (68K+ GitHub stars) and became the de facto open-source personal AI agent framework. [Inferred]: The enabling changes are (1) OpenClaw's rapid community growth creating demand for managed hosting from non-technical users, (2) the maturation of LLM APIs (Claude, GPT-4, Gemini) making agent capabilities dramatically more useful, and (3) growing enterprise interest in AI assistants creating a pathway from individual users to team deployments.

## Founders & Team

**Robbie Thompson** — Co-founder & CEO
- BS Mathematics and Computer Science, Stanford University (personal website)
- Previously: Trading intern at Jane Street (Substack post, "Jane Street Archives"); Founding Design Engineer (FDE) at Console, an AI-for-IT startup that raised $22M Series A from DST Global and Thrive Capital (UpstartMedia)
- Studied Donald Knuth's "The Art of Computer Programming" during a gap year (Substack)
- Twitter/X: No personal public account found; company account @usebits_inc
- LinkedIn: linkedin.com/in/robert-thompson-133469175/ (personal website)
- GitHub: github.com/robbiethompson18 — 8 public repos, 2 followers; repos include deep-learning-practice-mnist (PyTorch), email_agent, leverage_and_kelly (Kelly Criterion for trading) (GitHub)
- Substack: robbiethompson.substack.com

**Bailey Wickham** — Co-founder
- Education: Associated with PolySat (Cal Poly student satellite program) (GitHub organization membership)
- Previously: Software Engineer at Amazon; Software Engineer at Metaculus; Founding Engineer at Console (ZoomInfo, GitHub profile)
- GitHub: github.com/baileywickham — 102 public repos, 35 followers; pinned repos include a Go-based fuzzer, Rust DNS client, Python API key manager, and a minimal container implementation in C (GitHub)
- Twitter/X: No public account found
- LinkedIn: Profile referenced but not directly accessible; listed on ZoomInfo as Founding Engineer at Console (ZoomInfo)

**Co-founder relationship:** Both Robbie Thompson and Bailey Wickham worked at Console, where they met while building AI agents (YC page). Console is an AI-for-IT startup that raised a $6M seed led by Thrive Capital and a $22M Series A led by DST Global Partners and Thrive Capital (UpstartMedia).

**Founder-market fit:** Both founders have direct experience building and deploying AI agents at Console, giving them firsthand knowledge of the infrastructure challenges in agent deployment. Thompson's quantitative background (Jane Street, Stanford math/CS) and Wickham's systems engineering experience (Amazon, Rust/Go/C projects, containerization) provide complementary skills for building secure, reliable cloud infrastructure for AI agents.

## Key Risks

**Brand confusion with Zendesk's "Klaus":** Zendesk acquired a customer service QA company also named "Klaus" (formerly klausapp) in February 2024 (X/@klausapp). Multiple crypto tokens also use the "Klaus AI" name (@KlausAIonSol, @KlausEthereum on X). This creates SEO competition, brand dilution, and potential trademark challenges.

**OpenClaw platform dependency:** The entire product is built on top of an open-source project (OpenClaw) maintained by a single creator (Peter Steinberger). Changes to OpenClaw's architecture, licensing, security model, or community direction could materially affect Klaus's product. If OpenClaw's maintainer commercializes the project directly or a major cloud provider offers first-party hosting, Klaus's value proposition narrows.

**Low-barrier competitive field:** The OpenClaw ecosystem already contains 129+ startups (Phemex News via search snippet), with multiple direct competitors offering managed hosting at low price points ($14.99–79/month). No competitor has established market dominance, but the crowding increases customer acquisition costs and compresses margins.

**Security liability exposure:** Klaus's core value proposition is "safe" OpenClaw hosting, but OpenClaw requires broad system permissions (email, calendar, messaging, shell commands) by design (Wikipedia). A security breach on Klaus's infrastructure could expose customer data across all integrated services, creating outsized liability relative to revenue.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Agentic AI market: $7.55B in 2025, projected $199.05B by 2034, 43.84% CAGR (Precedence Research, 2025 via search snippet). OpenClaw managed hosting subsegment: ~$120K/month across ecosystem (TrustMRR via search snippet) |
| SAM | No public data found for managed OpenClaw hosting specifically |
| Traction | 529 LinkedIn followers (LinkedIn company page); featured in YC LinkedIn post; no public user/revenue data found |
| Revenue Signal | No public data found |
| Founders | Robbie Thompson (CEO): Stanford math/CS, Jane Street trading intern, Console FDE. Bailey Wickham (Co-founder): Amazon SWE, Metaculus SWE, Console Founding Engineer |
| Competitors | MyClaw ($19–79/mo, funding unknown, revenue unknown, first-mover claim); SimpleOpenClaw ($14.99+/mo, funding unknown, revenue unknown, lowest price point); LobsterDesk (funding unknown, revenue unknown, broader automation); Moltworker (funding unknown, revenue unknown, Cloudflare sandbox security) |
| Moat Signals | No public data found |
| Risk Factors | Brand confusion with Zendesk's Klaus and crypto tokens, OpenClaw platform dependency, crowded low-barrier competitive field |
| Founder Reach | Robbie Thompson: GitHub 2 followers, LinkedIn profile found. Bailey Wickham: GitHub 35 followers, LinkedIn referenced. Company: Twitter @usebits_inc (count not retrievable), LinkedIn 529 followers |
| Distribution Signals | YC LinkedIn feature post; no Product Hunt launch found; no app store or extension presence found |
| Emails | founders@usebits.com, robbie@usebits.com |
