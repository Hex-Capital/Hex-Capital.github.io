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
| YC Partner | Tyler Bosmeny |
| Emails | founders@usebits.com, robbie@usebits.com |

## The Idea

**Problem:** OpenClaw is an open-source autonomous AI agent framework that achieved viral adoption in early 2026, crossing 250,000 GitHub stars in roughly 60 days (Wikipedia; FinancialContent, Mar 2026 via search snippet). However, self-hosting OpenClaw presents acute security and setup challenges. A critical RCE vulnerability (CVE-2026-25253) was disclosed, and the ClawHavoc supply-chain attack poisoned the ClawHub skills marketplace with 341+ malicious skills—later rising to 800+ (~20% of the registry)—primarily delivering the Atomic macOS Stealer (The Hacker News, Feb 2026 via search snippet; CyberPress, Feb 2026 via search snippet). One of OpenClaw's own maintainers warned on Discord that the project is "too dangerous for casual users" (Cisco AI security research team findings, via search snippet). Users today must either self-host with significant security exposure, or use lightweight wrappers that lack hardened defaults.

**Approach:** Bits offers "Klaus," a managed, cloud-hosted OpenClaw instance that comes pre-configured with security features (malware protection, smart permission controls, no access to personal data by default) and pre-installed integrations (Slack, Telegram, Anthropic/OpenAI/Gemini APIs, browser, Molthub, Moltbook, and a dedicated email address). Setup is advertised at 3–5 minutes with no CLI, API key creation, or Docker configuration required (YC Launch page). Klaus is described as an "opinionated, batteries-included distribution" of OpenClaw.

**Differentiation:** Compared to self-hosting or generic VPS providers (Hostinger, DigitalOcean), Klaus abstracts away infrastructure and security configuration. Compared to Emergent ($100M Series B, 104 employees; Tracxn via search snippet), which offers a broader app-building platform with OpenClaw as one "chip," Bits is narrowly focused on secure OpenClaw deployment with a messaging-first UX. Compared to NanoClaw (open-source, containerized, 9.2K GitHub stars; GitHub via search snippet), Klaus is a fully managed service rather than a self-hosted binary. Compared to the wave of "wrapper" startups (SimpleClaw, CloudClaw, etc.), Bits differentiates on security hardening and YC backing, though the core product category is similar.

**Business Model:** The pricing page exists at app.usebits.com/pricing but renders as a JavaScript SPA and was not accessible at time of research. No public pricing tiers were found. [Inferred]: Most likely monetization is a subscription model (monthly per-instance fee), consistent with competitors like xCloud ($24/mo) and Emergent ($20/mo flat), potentially with tiered plans based on compute, integrations, or usage.

**TAM/SAM:** The global AI agents market was estimated at $7.63 billion in 2025 and is projected to reach $10.91 billion in 2026, growing to $182.97 billion by 2033 at a CAGR of 49.6% (Grand View Research, 2025 via search snippet). The narrower OpenClaw hosting/wrapper segment is nascent: 143 OpenClaw-related startups generated approximately $320K in aggregate revenue over 30 days (TrustMRR via search snippet; Phemex via search snippet). No public SAM estimate specific to managed OpenClaw hosting was found.

**GTM / Distribution:** The YC Launch page serves as the primary visible distribution channel. The company has a Twitter/X account (@usebits_inc) and received a mention from Y Combinator's LinkedIn account (LinkedIn post, activity ID 7426021965435453440). [Inferred]: Most likely distribution path is developer community word-of-mouth, YC network, and organic search from users seeking secure OpenClaw hosting, particularly in the wake of ClawHavoc security coverage.

## Defensibility

Klaus's current defensibility rests on its security-first positioning within the OpenClaw ecosystem—pre-configured malware protection, permission controls, and cloud isolation that reduce the attack surface exposed by vanilla OpenClaw deployments (YC Launch page). This is a product-design choice rather than a structural moat.

**Market structure:** Emergent ($100M raised; Tracxn via search snippet) is the largest well-resourced player in managed OpenClaw hosting, but it positions itself as a general-purpose AI app builder rather than a security-focused OpenClaw distribution. [Inferred]: A pure-play security-hardened OpenClaw host may not be a priority for a platform-oriented company like Emergent, creating a niche positioning opportunity—but this is not a structural barrier to entry.

**Commoditization risk:** The OpenClaw wrapper market has demonstrated extremely low barriers to entry. SimpleClaw hit $30K+ MRR in two weeks and was listed for sale shortly after (The Tool Nerd via search snippet; TrustMRR via search snippet). Multiple wrapper startups (YourClaw, CloudClaw, RunClaw) were simultaneously listed for sale on TrustMRR, indicating founders themselves view the moat as thin. NanoClaw (open-source, MIT-licensed) offers a containerized security-first alternative at no cost. Any VPS provider can offer one-click OpenClaw deployment (Hostinger, DigitalOcean, Atlantic.Net, Amazon Lightsail all do so already). The security differentiation could be replicated by a well-resourced competitor with modest effort.

## Market & Traction

**Traction signals:**
- Company Twitter/X: @usebits_inc (handle confirmed; follower count not retrievable due to JavaScript rendering)
- Y Combinator LinkedIn mention: YC posted about Klaus's launch (LinkedIn, activity ID 7426021965435453440)
- YC Launch page: "Klaus: Get Your OpenClaw Personal Assistant in 5 minutes" (YC Launches)
- No public user counts, revenue figures, download counts, app store ratings, Product Hunt launches, Discord/Slack community sizes, or web traffic estimates were found
- No job postings found beyond the two founders
- Website (usebits.com) redirects to app.usebits.com, a JavaScript SPA; no traction metrics visible
- An unauthorized Solana memecoin token named "KLAUS" / "Use Bits Inc" trades at ~$0.00003 with $3.47K market cap and ~$8/day trading volume (OKX, CoinMarketCap, DEX Screener, Feb 2026 via search snippet). A third-party tweet references this token and claims a developer "replied to the bags coin saying he loved the idea of it" (X/@richtardio via search snippet), though this is unverified.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Bits |
|---|---|---|---|
| **Emergent** (emergent.sh) | $100M Series B (Lightspeed, SoftBank; Tracxn via search snippet) | Revenue unknown | Full-stack AI app builder; OpenClaw is one component of a broader platform. 104 employees. |
| **NanoClaw** (Qwibit) | No public funding data | Revenue unknown | Open-source (MIT), containerized security model, 9.2K GitHub stars (GitHub via search snippet). Self-hosted, not managed. |
| **SimpleClaw** | Bootstrapped | ~$30K+ MRR at peak, declined; listed for sale (The Tool Nerd via search snippet) | Fastest-to-market wrapper; sub-1-minute deployment. Listed for sale at $225K, signaling founder exit. |
| **Toyo** | $4.3M seed (Frontline Ventures, Inovia Capital; Sifted via search snippet) | Revenue unknown | Positioned as "OpenClaw for founders"—specifically targets startup use cases with Cloudflare integration. |
| **xCloud** | No public funding data | Revenue unknown | Managed OpenClaw hosting at $24/mo; broader hosting platform (xCloud via search snippet). |

**Why now:** OpenClaw launched in November 2025 and crossed 250,000 GitHub stars by March 2026 (FinancialContent, Mar 2026 via search snippet). The ClawHavoc supply-chain attack in February 2026 compromised 9,000+ installations and exposed systemic security weaknesses in OpenClaw's architecture (The Hacker News, CyberPress, Security Boulevard, Feb 2026 via search snippets). [Inferred]: The combination of explosive adoption and a concurrent security crisis created demand for a managed, security-hardened OpenClaw deployment—the specific gap Bits/Klaus targets.

## Founders & Team

**Robbie Thompson** — Co-founder & CEO
- Stanford University, Mathematics and Computer Science (robbiewmthompson.com)
- Previously: Bond trader at Jane Street; FDE (Field Development Engineer) at Console (YC page; personal website)
- Twitter/X: @robbiethompson_ (count not retrievable)
- LinkedIn: linkedin.com/in/robert-thompson-133469175 — headline: "Taming the claw" (LinkedIn via search snippet)
- GitHub: github.com/robbiethompson18 — 8 public repos, 2 followers; projects include deep-learning-practice-mnist, email_agent, leverage_and_kelly (GitHub)
- Substack: robbiethompson.substack.com (personal website)
- Email: robbie@usebits.com (personal website)

**Bailey Wickham** — Co-founder
- Cal Poly, undergraduate research in pure mathematics (non-commutative algebra, category theory) under Dr. Eric Brussel through the Frost program (baileywickham.com; search snippet)
- Previously: First employee at Console; Software Engineer at Metaculus; Junior Developer at Amazon (Indie Publishing Experience / KDP team) (ZoomInfo via search snippet; baileywickham.com)
- Twitter/X: No public account found
- LinkedIn: Profile found but specific URL not confirmed beyond directory listing
- GitHub: github.com/baileywickham — 102 repos, 35 followers; pinned projects include a Markov-chain fuzzer (Go), DNS client (Rust), container implementation (C), API key management tool (Python); Arctic Code Vault Contributor (GitHub)
- Currently working on browser use models (baileywickham.com)

**Co-founder relationship:** Robbie Thompson and Bailey Wickham both worked at Console—Robbie as an FDE and Bailey as the first employee (YC page). They met while building AI agents at Console (YC page).

**Founder-market fit:** Both founders have direct experience building AI agent infrastructure at Console, which is directly relevant to deploying and securing OpenClaw instances. Robbie's quantitative background (Jane Street, Stanford Math/CS) and Bailey's systems engineering background (AWS infrastructure at Cal Poly, Rust/Go/C systems projects on GitHub, Console infrastructure work) provide complementary skills for building a cloud-hosted, security-hardened product. No advisors, board members, or notable angel investors were identified in public sources beyond the YC partnership with Tyler Bosmeny.

## Key Risks

**OpenClaw platform dependency:** Bits is entirely dependent on the OpenClaw open-source project, which has undergone two forced rebrandings in weeks (Clawdbot → Moltbot → OpenClaw) due to Anthropic trademark complaints (Wikipedia via search snippet). The project's creator, Peter Steinberger, announced he is joining OpenAI and transferring the project to an open-source foundation (Wikipedia via search snippet). Changes in OpenClaw's governance, licensing, architecture, or community direction could directly impact Klaus's product.

**Commoditization and wrapper bubble:** The OpenClaw hosting space has demonstrated near-zero barriers to entry—SimpleClaw reached $30K MRR in two weeks, then was listed for sale within a month (The Tool Nerd via search snippet). Multiple wrapper founders are simultaneously exiting, and industry commentary describes a "90-day wrapper window" (The Tool Nerd via search snippet). VPS providers (Hostinger, DigitalOcean, Amazon Lightsail) and Cloudflare (via Moltworker) offer one-click OpenClaw deployment as a feature, not a standalone product.

**Well-funded incumbent competition:** Emergent has raised $100M and employs 104 people, offering managed OpenClaw hosting as part of a broader platform (Tracxn via search snippet). Toyo has raised $4.3M specifically for "OpenClaw for founders" (Sifted via search snippet). NanoClaw offers a free, open-source, containerized alternative with 9.2K GitHub stars that directly addresses the same security concerns (GitHub via search snippet).

**Unauthorized crypto token:** A Solana memecoin named "KLAUS" / "Use Bits Inc" (contract: 6sbud8r...) trades on decentralized exchanges using the company's brand (OKX, Phantom, DEX Screener via search snippets). A third-party tweet suggests a developer may have acknowledged the token (X/@richtardio via search snippet). This creates brand confusion, potential regulatory exposure, and reputational risk.

**OpenClaw security surface area:** While Bits positions on security, the underlying OpenClaw codebase is 430,000+ lines with known architectural weaknesses including plaintext credential storage and no skill sandboxing (Composio via search snippet; Conscia via search snippet). Bits's security layer sits atop this codebase, meaning upstream vulnerabilities (like CVE-2026-25253) flow through to Klaus instances.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $10.91B AI agents market in 2026, growing to $182.97B by 2033 at 49.6% CAGR (Grand View Research via search snippet) |
| SAM | No public data found for managed OpenClaw hosting specifically. OpenClaw ecosystem: ~$320K/month across 143 startups (TrustMRR via search snippet) |
| Traction | No public data found (no user counts, revenue, or growth metrics disclosed) |
| Revenue Signal | Pricing page exists (app.usebits.com/pricing) but not accessible; no public pricing or revenue data found |
| Founders | Robbie Thompson (Co-founder/CEO): Stanford Math/CS, Jane Street bond trader, Console FDE. Bailey Wickham (Co-founder): Cal Poly math research, first employee at Console, Amazon, Metaculus. |
| Competitors | Emergent ($100M raised, revenue unknown, broad AI app platform); NanoClaw (no funding disclosed, revenue unknown, open-source containerized alternative); SimpleClaw (bootstrapped, ~$30K MRR peak then listed for sale, fastest wrapper); Toyo ($4.3M seed, revenue unknown, "OpenClaw for founders"); xCloud (no funding disclosed, revenue unknown, $24/mo managed hosting) |
| Moat Signals | Security-hardened OpenClaw distribution with pre-configured malware protection and permission controls; YC backing. No structural moat identified. |
| Risk Factors | OpenClaw platform dependency and governance uncertainty, commoditization/wrapper bubble dynamics, well-funded incumbent competition (Emergent $100M), unauthorized KLAUS crypto token |
| Founder Reach | Robbie Thompson: Twitter @robbiethompson_ (count not retrievable), LinkedIn robert-thompson-133469175, GitHub robbiethompson18 (2 followers). Bailey Wickham: Twitter not found, LinkedIn found (URL unconfirmed), GitHub baileywickham (35 followers) |
| Distribution Signals | YC Launch page live; Y Combinator LinkedIn post; Twitter @usebits_inc active. No Product Hunt launch, app store presence, or community size data found. |
| Emails | founders@usebits.com, robbie@usebits.com |
