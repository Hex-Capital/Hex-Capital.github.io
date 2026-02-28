# Hex Security

> Agentic Offensive Security at Scale

| Field | Value |
|-------|-------|
| Website | https://hex.co |
| YC Page | https://www.ycombinator.com/companies/hex-security |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Reinforcement Learning, Cybersecurity |

## The Idea

**Problem:** Organizations face continuous cybersecurity exposure but rely on penetration tests conducted once a year or less, because traditional pentesting is manual, expensive, and slow (YC company page). By the time a company receives the pentest report, the codebase has changed, rendering results partially stale. The company's YC page claims "companies lose $10T+ annually to preventable vulnerabilities" (YC company page). The customer segment is engineering and security teams at companies running web applications and infrastructure who need ongoing vulnerability validation.

**Approach:** Hex Security builds AI agents that autonomously and continuously perform penetration testing against customers' applications and infrastructure. Rather than delivering a static PDF after a point-in-time engagement, the agents operate 24/7 to discover and verify critical vulnerabilities—including exploit chaining—so teams can remediate before attackers exploit them (YC company page). The YC page states the agents have "found critical vulnerabilities in dozens of YC companies, including SQL injection exposing billions of records" and "demonstrated a PoC worm that could infect entire networks" (YC company page).

**Differentiation:** The market includes several funded competitors pursuing autonomous pentesting (see Competitive Landscape below). Hex Security emphasizes continuous, agentic offensive security using reinforcement learning (per YC tags), as distinct from:
- **Pentera**, which focuses on automated security validation for enterprise IT networks at scale ($100M+ ARR, 1,100+ customers) (Ctech, Mar 2025 via search snippet).
- **XBOW**, which achieved #1 on HackerOne's global leaderboard and focuses on web application pentesting on-demand at $6,000+ per engagement (Help Net Security, Jun 2025 via search snippet).
- **Horizon3.ai (NodeZero)**, which has a strong federal/defense market presence via the NSA's CAPT program and has completed 100,000+ pentests (BusinessWire, Feb 2025 via search snippet).

Specific technical differentiation claims beyond "continuous" and "agentic" are not publicly detailed on the Hex Security website or YC page.

**Business Model:** No public pricing page was found. The hex.co website rendered primarily as CSS/JavaScript with no visible pricing tiers. [Inferred]: Most likely monetization path is a SaaS subscription model (per-application or per-asset pricing), consistent with the PTaaS (Penetration Testing as a Service) model adopted by competitors like XBOW ($6,000+ per engagement) and Pentera (average deal size ~$100,000).

**TAM/SAM:** The global penetration testing market was valued at approximately $2.74 billion in 2025 and is projected to reach $6.25 billion by 2033, at a 12.5% CAGR (Straits Research, 2025 via search snippet). The Penetration Testing-as-a-Service (PTaaS) sub-segment is growing at 29.1% CAGR (Grand View Research, 2024 via search snippet). No company-specific SAM estimate was found.

**GTM / Distribution:** The YC page states the agents have been used against "dozens of YC companies" (YC company page), suggesting an initial distribution path through the YC network. [Inferred]: Most likely distribution path is bottom-up sales to startups and mid-market companies through the YC ecosystem and direct outreach, potentially expanding to enterprise via channel partnerships—consistent with the GTM playbook of competitors like XBOW (which partnered with Vanta to reach startups).

## Defensibility

No defensibility signals were found in public sources beyond the use of reinforcement learning (per YC tags). [Inferred]: A potential moat could develop via proprietary vulnerability data accumulated from continuous pentesting engagements across many customers, which could improve agent accuracy over time through a data flywheel effect. However, this is unproven at this stage.

**Market structure:** Multiple well-funded incumbents (Pentera, XBOW, Horizon3.ai) are already building autonomous pentesting platforms with significant head starts in funding and customer traction. No structural barrier was identified that would prevent these incumbents from replicating a continuous, agentic approach. [Inferred]: One possible structural advantage is that traditional manual pentesting firms (e.g., Bishop Fox, NCC Group) face business model cannibalization risk—automating pentesting undercuts their consulting revenue model—but this does not apply to the AI-native competitors listed above.

**Commoditization risk:** The autonomous pentesting space is crowded and well-funded. XBOW ($117M raised), Horizon3.ai ($178.5M raised), Novee ($51.5M raised), and Terra Security ($38M raised) are all building AI agents for autonomous penetration testing. Open-source tools like HexStrike AI (found on GitHub) also provide LLM-integrated security tooling. The barrier to building a basic AI pentesting wrapper is relatively low given available LLM APIs and open-source security tooling; the barrier to building a high-accuracy, low-false-positive autonomous system is higher but is being cleared by multiple teams simultaneously.

## Market & Traction

**Traction signals:**
- The company's agents have "found critical vulnerabilities in dozens of YC companies" and "prevented an estimated $3B+ in potential damages" (YC company page). These are self-reported claims; "potential damages prevented" is not independently verified revenue or customer count data.
- No public user count, revenue, waitlist size, app store listing, Chrome extension, or download metrics were found.
- Twitter/X company account: No dedicated company account found (distinct from founders' personal accounts).
- LinkedIn company page: No public data found for follower count.
- Product Hunt: No Hex Security launch found on Product Hunt. (Note: Product Hunt results for "Hex" return the Hex data analytics platform at hex.tech, not this company.)
- Discord/Slack community: No public data found.
- Job postings: The company is listed as not currently hiring (YC company page).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Hex Security |
|-----------|---------|-------------|-------------------------------------|
| **Pentera** | $250M total, $1B+ valuation (TechCrunch, Mar 2025 via search snippet) | $100M+ ARR (Ctech, Jan 2026 via search snippet) | Broad enterprise security validation platform covering network, cloud, and application layers; 1,100+ customers with $100K avg deal size |
| **XBOW** | $117M total, $75M Series B (Help Net Security, Jun 2025 via search snippet) | Revenue unknown; pricing from $6,000/engagement (BusinessWire, Nov 2025 via search snippet) | First AI to reach #1 on HackerOne global leaderboard; founded by ex-GitHub engineers including Oege de Moor; partnered with Vanta for startup distribution |
| **Horizon3.ai** | $178.5M total, $100M Series D (SecurityWeek, Jun 2025 via search snippet) | 100%+ YoY ARR growth; 2,900%+ revenue growth since 2021 (BusinessWire, Jun 2025 via search snippet) | Strongest federal/defense presence (NSA CAPT program); 3,000+ customers; 100,000+ pentests conducted |
| **Novee** | $51.5M total (VentureBeat, Jan 2026 via search snippet) | Revenue unknown | Founded by Unit 8200/Talpiot veterans; fastest Series A in offensive security (4 months from founding); full attack lifecycle simulation |
| **Terra Security** | $38M total, $30M Series A (SecurityWeek, Sep 2025 via search snippet) | Revenue unknown | Multiple Fortune 500 enterprise customers; former Google CISO on board; dozens of fine-tuned AI agents with human supervision |

**Why now:** [Inferred]: Several converging factors opened this opportunity in 2024–2026: (1) LLM and reinforcement learning capabilities crossed a performance threshold enabling autonomous multi-step exploit chaining that was previously infeasible for automated tools; (2) CVE volume is projected to exceed 59,000 in 2026, the first time surpassing 50,000 (FIRST.org via X post, 2026 via search snippet), overwhelming manual security teams; (3) regulatory and compliance pressure (SOC 2, ISO 27001, PCI DSS) increasingly requires continuous security validation rather than point-in-time assessments; (4) the proliferation of AI-generated code may be introducing vulnerabilities faster than manual pentesting can detect them.

## Founders & Team

**Huzaifa Ahmad** — Co-founder
- BA, University of California, Berkeley (RocketReach via search snippet)
- Previously: Member of Technical Staff at Lilac Labs (YC-backed voice AI startup for drive-thru automation) (YC company page for Lilac Labs); positions at PlayAI, Amazon, Founders Inc., Capital One (RocketReach via search snippet)
- Founded Talently (RocketReach via search snippet)
- Won 1st place and $10,000 international prize at a health hackathon for a skin cancer detection app (LinkedIn via search snippet)
- Twitter/X: @huzaifaxahmad — follower count not retrievable
- LinkedIn: linkedin.com/in/ahmadhuzaifa012 — "Hex Security" (LinkedIn via search snippet)
- GitHub: github.com/Huzaifa-Ahmad — 13 public repos; star counts not retrievable

**Ahmad Khan** — Co-founder
- IIT Delhi (dropped out); age 22 (LinkedIn via search snippet)
- Background in robotics and world models research (YC company page). The YC page states his robot "became the first in history to ring the NASDAQ bell" (YC company page); independent confirmation of this specific claim was not found in search results.
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ahmad-khan-b6584b225 — "Co-Founder @ Hex Security (YC W26)" (LinkedIn via search snippet)
- GitHub: No public repos found

**Prama Yudhistira** — Co-founder
- Computer Science, Georgia Institute of Technology (LinkedIn via search snippet)
- Previously at Codegen (LinkedIn via search snippet)
- Twitter/X: @sweatbuilder — follower count not retrievable
- LinkedIn: linkedin.com/in/pramayudhistira — 500+ connections (LinkedIn via search snippet)
- Portfolio: prama.dev
- GitHub: No public repos found

**Co-founder relationship:** No shared prior employer or university was identified among the three founders based on the background data gathered. Huzaifa Ahmad attended UC Berkeley, Ahmad Khan attended IIT Delhi, and Prama Yudhistira attended Georgia Tech. No overlapping company employment was found.

**Founder-market fit:** Huzaifa Ahmad brings experience from security-adjacent enterprise roles (Capital One, Amazon) and YC-backed startup experience (Lilac Labs). Ahmad Khan brings robotics and AI/world models research background, which may translate to the reinforcement learning approach the company uses. Prama Yudhistira brings software engineering experience from Codegen and a CS background from Georgia Tech. The team has YC ecosystem familiarity through prior involvement. No advisors, board members, or notable investors beyond the standard YC deal were found in public sources.

## Key Risks

**Brand and domain confusion with Hex Technologies (hex.tech):** Hex Technologies is a well-established, venture-backed data analytics platform that actively promotes its brand as simply "Hex." Hex Security operates at hex.co. Search results for "Hex" on Product Hunt, Google, and social media predominantly return the analytics company. This creates SEO competition, customer confusion, and potential trademark friction. Hex Technologies has raised significant funding (Crunchbase profile found) and has an established brand presence.

**Heavily funded competitive field:** At least five direct competitors (Pentera, XBOW, Horizon3.ai, Novee, Terra Security) have collectively raised over $635M and have years of head start in product development, enterprise sales, and customer acquisition. XBOW's AI has demonstrably achieved #1 on HackerOne's global leaderboard (Help Net Security, Jun 2025 via search snippet), establishing a public benchmark that new entrants must match or exceed.

**Unverified traction claims:** The company's primary traction claim—"found critical vulnerabilities in dozens of YC companies" and "prevented $3B+ in potential damages"—is self-reported on the YC page without independent verification. The "$3B+ in potential damages prevented" figure is an estimate of hypothetical impact, not a measure of actual revenue, customers, or contracted engagements.

**Founder domain experience gap:** None of the three founders have publicly documented prior professional experience specifically in offensive security, penetration testing, or cybersecurity operations. The team's backgrounds span software engineering, robotics/AI, and data analytics. Competing founding teams include Unit 8200 veterans (Novee), ex-GitHub security engineers (XBOW), and former Google CISOs on boards (Terra Security).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.74B penetration testing market in 2025, projected $6.25B by 2033 at 12.5% CAGR (Straits Research, 2025 via search snippet); PTaaS sub-segment at 29.1% CAGR (Grand View Research, 2024 via search snippet) |
| SAM | No public data found |
| Traction | "Found critical vulnerabilities in dozens of YC companies" (YC company page, self-reported); no independently verified user/customer counts |
| Revenue Signal | No public data found |
| Founders | Huzaifa Ahmad (Co-founder): UC Berkeley, ex-Amazon/Capital One/Lilac Labs. Ahmad Khan (Co-founder): IIT Delhi dropout, robotics/AI research. Prama Yudhistira (Co-founder): Georgia Tech CS, ex-Codegen |
| Competitors | Pentera ($250M raised, $100M+ ARR, broad enterprise security validation); XBOW ($117M raised, revenue unknown, #1 HackerOne AI); Horizon3.ai ($178.5M raised, 100%+ YoY ARR growth, federal/defense focus); Novee ($51.5M raised, revenue unknown, Unit 8200 founders); Terra Security ($38M raised, revenue unknown, Fortune 500 customers) |
| Moat Signals | No public data found. Reinforcement learning approach noted in YC tags but no published benchmarks or proprietary data assets disclosed |
| Risk Factors | Brand confusion with Hex Technologies (hex.tech), heavily funded competitive field ($635M+ raised by top 5 competitors), unverified traction claims, no documented offensive security domain expertise on founding team |
| Founder Reach | Huzaifa Ahmad: Twitter @huzaifaxahmad (count not retrievable), LinkedIn 500+, GitHub 13 repos. Ahmad Khan: Twitter not found, LinkedIn present, GitHub not found. Prama Yudhistira: Twitter @sweatbuilder (count not retrievable), LinkedIn 500+, GitHub not found |
| Distribution Signals | No Product Hunt launch found; no app store or Chrome extension presence; initial distribution through YC network (self-reported) |
