# Bits

> Fast and Safe OpenClaw on the cloud

| Field | Value |
|-------|-------|
| Website | https://usebits.com |
| YC Page | https://www.ycombinator.com/companies/bits-2 |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Deep Learning |

## The Idea

**Problem:** OpenClaw is an open-source autonomous AI personal assistant that gained over 214,000 GitHub stars within weeks of launch in late January 2026 (GitHub, Feb 2026). It integrates with 13+ messaging platforms and can browse the web, manage email, run shell commands, and perform agentic tasks. However, self-hosting OpenClaw requires configuring a VPS, managing Docker, setting up API keys, wiring messaging platform integrations, and handling security hardening. Multiple hosting guides and comparison articles document the complexity of this setup (xCloud, cybernews.com, boostedhost.com, Feb 2026). The target customer is any individual or team wanting a personal AI agent running 24/7 but lacking the DevOps capability or willingness to manage infrastructure.

**Approach:** Bits operates under the product name "Klaus." It provides a fully managed cloud-hosted OpenClaw instance that deploys in 3 minutes with pre-configured Slack, Telegram, email, and browser access; integration with Anthropic, OpenAI, and Gemini models; built-in malware protection; and access to the MoltHub/Moltbook skill ecosystem (YC Launch page). Users interact via usebits.com without needing to configure API keys or manage servers. The positioning emphasizes security-by-default and ease of setup — "an OpenClaw instance so robust that even your parents will use it safely, so easy to set up that they'll do it on their own" (YC Launch page).

**Differentiation:** The managed OpenClaw hosting market already has multiple entrants. Klaus differentiates on speed of setup (3 minutes vs. 5 minutes for competitors like ClawTrust and xCloud) and bundled security features as a first-class concern. ClawTrust ($79/mo) positions on enterprise-grade security, founded by a Palo Alto Networks/SentinelOne veteran (clawtrust.ai). MyClaw ($9–$39/mo) competes on price with three tiers (myclaw.ai). LobsterTank ($2/mo) uses Firecracker microVMs for extreme cost efficiency (lobstertank.me). Clowdbot charges $0.50 per instance launch plus token costs (clowd.bot). Traditional VPS providers like Hostinger, DigitalOcean, and OVHcloud offer one-click OpenClaw deploys at $5–$15/mo but without managed security or integration layers (various provider sites, Feb 2026). Klaus's YC backing and emphasis on "batteries-included" security are its primary positioning differentiators.

**Business Model:** The app.usebits.com/pricing page exists but did not render content at time of research (JavaScript-rendered page). No public pricing tiers were retrievable. [Inferred]: Most likely monetization is a monthly subscription model (consistent with all competitors in this space charging $2–$79/mo), potentially with tiered plans based on uptime, model access, or number of connected channels.

**TAM/SAM:** The broader agentic AI market was valued at $9.89 billion in 2026, projected to reach $57.42 billion by 2031 at a 42.14% CAGR (Mordor Intelligence, 2026 via search snippet). The AI agents market is projected at $11.78 billion in 2026, growing to $251.38 billion by 2034 at 46.61% CAGR (Fortune Business Insights, 2026 via search snippet). No public data found for the specific managed OpenClaw hosting sub-segment TAM. TrustMRR lists 97 startups built with OpenClaw ranked by verified revenue (trustmrr.com, Feb 2026), indicating the ecosystem's size.

**GTM / Distribution:** The YC Launch page serves as the primary public distribution event, garnering 16 upvotes (YC Launch page, Feb 2026). Y Combinator's official LinkedIn account posted about Klaus (LinkedIn, Feb 2026). The Twitter/X account @usebits_inc describes Klaus as "the fastest, most secure way to use OpenClaw on a VM. Built by usebits.com and backed by YC" (x.com/usebits_inc). [Inferred]: Primary distribution likely relies on the OpenClaw community (214K+ GitHub stars represents a large organic audience), YC network effects, and direct-to-consumer sign-ups via the web app. The Slack integration focus suggests potential for team/enterprise expansion.

## Defensibility

No defensibility signals found in public sources at this stage. The product wraps an open-source project (OpenClaw, MIT-licensed) with managed hosting and security layers. There is no proprietary model, dataset, or protocol disclosed.

[Inferred]: Potential moat could develop via: (1) accumulated user preference/memory data that makes switching costly (OpenClaw's memory persists between runs); (2) proprietary security tooling and skills built on top of OpenClaw; (3) enterprise integrations and compliance certifications. None of these are proven at this stage.

**Market structure:** No structural barrier identified at this stage. OpenClaw is MIT-licensed and any hosting provider can offer managed instances. Large cloud providers (DigitalOcean, Hostinger, OVHcloud, Alibaba Cloud) already offer one-click OpenClaw deployments (various provider sites, Feb 2026). The structural challenge for incumbents is that managed OpenClaw hosting is a low-margin, high-touch product that may not justify attention from hyperscalers focused on larger IaaS revenue streams. [Inferred]: This creates a window for specialized startups, but not a durable structural barrier.

**Commoditization risk:** High. At least six direct competitors and multiple VPS providers already offer OpenClaw hosting at price points ranging from $2/mo to $79/mo (various sources, Feb 2026). The underlying software is open-source and MIT-licensed. The barrier to entry for a new managed hosting provider is a VPS, Docker configuration, and a payment gateway. Differentiation depends on execution in security, UX, and community trust rather than technical exclusivity.

## Market & Traction

**Traction signals:**
- YC Launch page: 16 upvotes (YC Launch page, Feb 2026)
- Twitter/X: @usebits_inc — account exists; follower count not retrievable due to JavaScript rendering (x.com, Feb 2026)
- LinkedIn: Company page at linkedin.com/company/usebits — follower count not retrievable (LinkedIn, Feb 2026)
- Y Combinator LinkedIn posted about Klaus (LinkedIn activity post, Feb 2026)
- GitHub organization: github.com/bobbiecorp returned 404 at time of research
- No Product Hunt launch found
- No app store presence found
- No public revenue or user count data found
- No Discord or Slack community found

**Competitive landscape:**

1. **ClawTrust** — $79/mo starter plan with 5-day free trial. Founded by Chris DiYanni (ex-Palo Alto Networks, SentinelOne, PagerDuty). Differentiator vs. Bits: enterprise security pedigree of founder, higher-touch security positioning, exportable agent configuration. No public funding data found (clawtrust.ai).

2. **MyClaw** — $9/mo (Lite), $19/mo (Pro), $39/mo (Max). Differentiator vs. Bits: three-tier pricing with always-on uptime, automatic updates, daily backups. No public funding data found (myclaw.ai).

3. **LobsterTank** — $2/mo ($20/yr). Uses Firecracker microVM isolation with KVM-based hardware isolation per agent. "Buy one, give one" model. Differentiator vs. Bits: extreme cost efficiency (~$0.002/agent at rest via memory page swapping) and hardware-level isolation. No public funding data found (lobstertank.me; Hacker News).

4. **Clawi.ai** — Product Hunt launch completed. Zero-setup OpenClaw in the cloud, 24/7 on WhatsApp, Telegram, Discord. Differentiator vs. Bits: multi-messenger focus. No public funding data found (producthunt.com/products/clawi-ai).

5. **xCloud** — $24/mo managed hosting. 10,000+ servers across 30+ locations. Differentiator vs. Bits: infrastructure scale and geographic distribution. No public funding data found (xcloud.host).

**Why now:** OpenClaw launched in late January 2026 and accumulated over 214,000 GitHub stars in under a week, becoming one of the fastest-growing open-source repositories in GitHub history (GitHub, Feb 2026; Milvus Blog via search snippet). On February 14, 2026, OpenClaw creator Peter Steinberger announced he was joining OpenAI and the project would move to an open-source foundation (multiple sources, Feb 2026). [Inferred]: The explosive growth of OpenClaw created immediate demand for managed hosting. The creator's departure to OpenAI and the project's move to a foundation may increase demand for trusted, managed providers as users seek stability and support that the open-source community alone may not provide. The broader agentic AI wave — with the market growing at 42%+ CAGR — provides the macro tailwind.

## Founders & Team

**Robbie Thompson** — Co-founder & CEO
- BS Mathematics and Computer Science, Stanford University (robbiewmthompson.com)
- Previously: Bond trader (Quant) at Jane Street (YC page; robbiewmthompson.com)
- Previously: FDE (Founding Developer Engineer) at Console, an AI-for-IT startup that raised $22M from DST and Thrive (YC page; Upstarts Media)
- Twitter/X: No personal public account found (note: @rthompson1138 is a different Robbie Thompson — a comic book writer)
- LinkedIn: linkedin.com/in/robert-thompson-133469175 — "Taming the claw" headline (LinkedIn via search snippet)
- GitHub: github.com/robbiethompson18 — 8 repos, 2 followers; repos include deep-learning-practice-mnist (Python), email_agent (Python), leverage_and_kelly (Python) (GitHub)
- Substack: robbiethompson.substack.com (robbiewmthompson.com)

**Bailey Wickham** — Co-founder
- Undergraduate research in non-commutative algebra (central simple algebras, generalized quaternions) and category theory under Dr. Eric Brussel via the Frost Research Program, likely at Cal Poly (baileywickham.com; search results referencing Cal Poly and PolySat)
- Previously: First employee / Founding AI Engineer at Console (baileywickham.com; ZoomInfo)
- Previously: Junior Developer at Amazon (Indie Publishing Experience team) (search results via search snippet)
- Previously: Software Engineer at Metaculus (search results via search snippet)
- Member of PolySat (Cal Poly satellite lab) (GitHub)
- Twitter/X: @baileyywickham — follower count not retrievable (twitter.com/baileyywickham)
- LinkedIn: Profile exists but URL not directly confirmed; listed among 6 "Bailey Wickham" profiles (LinkedIn directory)
- GitHub: github.com/baileywickham — 102 repos, 35 followers, 134 stars; pinned repos include a Go-based markov chain fuzzer, a Rust DNS client, a Python secrets management tool, and a C minimal container implementation (GitHub)

**Co-founder relationship:** Both Robbie Thompson and Bailey Wickham worked together at Console, an AI-for-IT startup, where they built AI agents. Robbie was an FDE and Bailey was the first employee / Founding AI Engineer (YC page; baileywickham.com). This indicates direct prior working experience as early-stage colleagues.

**Founder-market fit:** Both founders have direct experience building AI agents at Console, which provides domain knowledge in deploying and managing autonomous AI systems. Robbie's quantitative finance background (Jane Street) and Stanford CS/Math education provide technical depth. Bailey's systems-level programming experience (Rust DNS client, C containers, Go fuzzer on GitHub) and research in abstract algebra suggest strong infrastructure engineering capability. Their shared experience at an AI agent startup that raised $22M (Console, per Upstarts Media) means they have observed the challenges of AI agent deployment at scale firsthand.

## Key Risks

**Crowded and rapidly commoditizing market:** At least six direct managed OpenClaw hosting competitors launched within weeks of OpenClaw's release, plus multiple VPS providers offering one-click deploys (xCloud, ClawTrust, MyClaw, LobsterTank, Clawi.ai, Clowdbot — various sources, Feb 2026). Price points range from $2/mo to $79/mo, suggesting a race to the bottom is already underway. The MIT license on OpenClaw means no proprietary lock on the underlying technology.

**OpenClaw platform dependency:** The entire product is built on a single open-source project. On February 14, 2026, OpenClaw creator Peter Steinberger announced he was joining OpenAI and the project would transfer to an open-source foundation (multiple sources, Feb 2026). Changes in project governance, licensing, or technical direction could directly impact Klaus's product. If OpenAI incorporates OpenClaw capabilities natively, the need for third-party hosting may diminish.

**Brand disambiguation:** The name "Bits" is shared by at least two other companies in the YC database (a credit card startup and a Swedish compliance infrastructure company that raised €12M), plus multiple unrelated technology companies (BITS Technology Group, BITS Systems, etc.) found on LinkedIn. The product name "Klaus" is also generic. This creates SEO and brand recognition challenges.

**LLM cost pass-through uncertainty:** Managed OpenClaw hosting requires underlying LLM API calls (Anthropic, OpenAI, Gemini). Users typically pay $5–$30/mo in API costs on top of hosting fees (thecaio.ai, Feb 2026 via search snippet). Whether Bits absorbs, marks up, or passes through these costs affects unit economics. No pricing data was retrievable to assess this.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $9.89B agentic AI market in 2026, 42.14% CAGR to $57.42B by 2031 (Mordor Intelligence, 2026 via search snippet); $11.78B AI agents market in 2026, 46.61% CAGR to $251.38B by 2034 (Fortune Business Insights, 2026 via search snippet) |
| SAM | No public data found for managed OpenClaw hosting sub-segment |
| Traction | 16 upvotes on YC Launch page (YC, Feb 2026); Y Combinator LinkedIn post about Klaus (LinkedIn, Feb 2026) |
| Revenue Signal | No public data found (pricing page exists at app.usebits.com/pricing but did not render) |
| Founders | Robbie Thompson (CEO): Stanford Math/CS, ex-Jane Street quant, ex-Console FDE. Bailey Wickham (Co-founder): Cal Poly math research, ex-Console first employee, ex-Amazon, ex-Metaculus |
| Competitors | ClawTrust ($79/mo, enterprise security focus, no public funding data); MyClaw ($9–$39/mo, tiered pricing, no public funding data); LobsterTank ($2/mo, Firecracker microVM isolation, no public funding data); Clawi.ai (Product Hunt launch, zero-setup, no public funding data); xCloud ($24/mo, 10K+ servers, no public funding data) |
| Moat Signals | No public data found |
| Risk Factors | Crowded commoditizing market (6+ direct competitors within weeks), OpenClaw platform dependency (creator joined OpenAI Feb 2026), brand disambiguation (multiple "Bits" companies) |
| Founder Reach | Robbie Thompson: Twitter not found, LinkedIn linkedin.com/in/robert-thompson-133469175, GitHub 8 repos / 2 followers. Bailey Wickham: Twitter @baileyywickham (count not retrievable), GitHub 102 repos / 35 followers / 134 stars |
| Distribution Signals | YC Launch page 16 upvotes (Feb 2026); YC LinkedIn post (Feb 2026); No Product Hunt launch found |
