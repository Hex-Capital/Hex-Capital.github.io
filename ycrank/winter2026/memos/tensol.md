# Tensol

> AI Employees for your Business, Powered by OpenClaw

| Field | Value |
|-------|-------|
| Website | https://www.tensol.ai |
| YC Page | https://www.ycombinator.com/companies/tensol |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Productivity, Enterprise Software |
| YC Partner | Gustaf Alstromer |
| Emails | founders@tensol.ai (YC page) |

## The Idea

**Problem:** Businesses rely on repetitive operational workflows — monitoring Slack channels, triaging Sentry errors, updating CRMs, following up on leads, responding to support tickets — that consume significant employee time. These tasks are currently handled by human workers or fragmented automation tools (Zapier, custom scripts, siloed chatbots) that lack persistent context, proactive behavior, and enterprise-grade security. The customer segment spans startups and mid-market teams across engineering, sales, and support functions.

**Approach:** Tensol is a managed hosting platform for OpenClaw, the open-source AI agent framework (265,000+ GitHub stars as of March 2026, surpassing React to become the most-starred non-aggregator software project on GitHub — star-history.com, March 2026 via search snippet). Each "AI employee" runs 24/7 in its own isolated VM with full company context. Tensol handles infrastructure, security, credential injection (at network level, never touching disk), and deployment. Users connect existing tools (Slack, GitHub, Sentry, HubSpot, Linear, Gmail, Notion, Jira, Zendesk, LinkedIn, WhatsApp, Telegram, Discord — 40+ integrations via OAuth) with one-click setup. The platform offers 13,000+ installable skills from a "ClawHub" marketplace, persistent memory across months of interactions, sandboxed browser automation with live view, and a 24/7 heartbeat system for autonomous monitoring (tensol.ai). Deployment takes approximately 5 minutes with no terminal, Docker, or DevOps required.

**Differentiation:** Unlike self-hosted OpenClaw, Tensol eliminates setup friction — the main barrier cited for OpenClaw adoption. Unlike horizontal agent builders such as Lindy AI (1,600+ integrations, no-code workflow builder), Tensol positions each agent as a persistent "employee" with its own dedicated identity, sandboxed environment, and enterprise-grade audit trail rather than a triggered workflow. Unlike sales-vertical players such as Artisan AI ($2,000–$7,000/month, sales-focused) or 11x AI (outbound SDR agents), Tensol supports multiple roles across engineering, sales, support, marketing, and operations from a single platform. Unlike Kimi Claw (Moonshot AI's managed OpenClaw implementation), Tensol targets B2B teams rather than individual consumers. Each AI employee gets enterprise security features: AES-256 encryption, SOC 2 compliance, SSO, role-based access controls, and full audit logging (tensol.ai).

**Business Model:** Tensol offers a free trial with no credit card required. Paid plans are described as "a fraction of the cost of a full-time hire," with the website stating that "most startups deploy 2-3 AI employees for less than the cost of one junior hire" (tensol.ai). No specific pricing tiers or per-unit costs are publicly disclosed. [Inferred]: Most likely monetization is per-agent or per-seat SaaS subscription, potentially with usage-based components for compute and API calls, given the isolated VM infrastructure model.

**TAM/SAM:** The AI agent market was valued at approximately $8 billion in 2025 and is projected to reach $47–100 billion by 2030, depending on source, at a CAGR of 44–50% (MarketsandMarkets, Grand View Research, DemandSage — 2026 via search snippets). The agentic AI market specifically is projected to expand from $7.06 billion in 2025 to $93.20 billion by 2032 at a CAGR of 44.6% (MarketsandMarkets via search snippet). [Inferred]: Tensol's SAM is the subset of this market focused on managed AI employee platforms for B2B teams, likely in the single-digit billions currently.

**GTM / Distribution:** Tensol leverages the OpenClaw ecosystem (265K+ GitHub stars, large developer community) as a top-of-funnel acquisition channel, positioning itself as the managed/enterprise deployment layer for users who want OpenClaw without self-hosting. The YC Launch post received 215 upvotes (YC Launches, ~Feb 11, 2026). The company is backed by Y Combinator and Afore Capital (@tensol_ai X bio). [Inferred]: Primary distribution is likely product-led growth via the OpenClaw community, supplemented by direct sales to teams already using or evaluating OpenClaw.

## Defensibility

**Platform lock-in via integrations and organizational memory:** Each AI employee accumulates persistent context about the company's workflows, team preferences, and tool configurations over months. Switching costs increase with deployment duration as organizational knowledge is embedded in the system. The 13,000+ skill marketplace (ClawHub) creates an ecosystem effect if third-party skill developers build for the platform (tensol.ai).

**Market structure:** OpenClaw is open-source (MIT license), which means any company can build a managed hosting layer. However, the OpenClaw creator (Peter Steinberger) announced joining OpenAI in February 2026 and moving the project to an open-source foundation (Wikipedia, Feb 2026 via search snippet), which removes a single-company control advantage and levels the playing field for managed providers. No structural barrier prevents well-resourced incumbents (cloud providers, existing agent platforms) from offering managed OpenClaw hosting. [Inferred]: The primary barrier is speed-to-market and depth of enterprise features (audit trails, credential injection, SOC 2) rather than a structural moat.

**Commoditization risk:** Multiple managed OpenClaw implementations already exist or are emerging: Kimi Claw (Moonshot AI, launched Feb 15, 2026), TrustClaw (enterprise-focused), and Perplexity Computer (autonomous agent product). Large cloud providers (AWS, GCP, Azure) could offer managed OpenClaw hosting as a service. The open-source nature of OpenClaw means the underlying technology is freely available. Differentiation depends on enterprise features, integration depth, and the ClawHub skill ecosystem rather than proprietary technology.

## Market & Traction

**Traction signals:**
- YC Launch: 215 upvotes (~Feb 11, 2026) (YC Launches page)
- Twitter/X: @tensol_ai — 894 followers, account created November 2024 (X.com via search snippet)
- LinkedIn: linkedin.com/company/tensolai — follower count not retrievable
- Website claims: 4.8/5 stars from 50 reviews (tensol.ai; review source not specified)
- Website claims: "80%+ reduction in alert noise" for engineering teams, "95% CRM accuracy" for sales teams, "2-3 hours saved per person per day" (tensol.ai; these are described as aggregate outcomes, not independently verified)
- Customer testimonial: Stacksync (caught data sync regression at 3 AM), Arda (inventory analysis) (tensol.ai). Note: Oliviero Pinotti previously worked at Stacksync (YC W24).
- Investors: Y Combinator, Afore Capital (X bio for @tensol_ai)
- No public revenue figures, user counts, or download data found
- No Product Hunt launch found
- No app store or Chrome extension presence found

**Pivot note:** The company previously operated as Solstis (YC W26), described as "AI Agents for ERPs" and later "AI Agents for ERPs for Manufacturers." solstis.ai now returns a 307 redirect to tensol.ai (confirmed via WebFetch). The Solstis Twitter account (@solstis_ai) and LinkedIn page (linkedin.com/company/solstis-ai) remain live. Solstis won the $50,000 top prize in the Graduate Track at Carnegie Mellon's McGinnis Venture Competition (CMU Swartz Center, 2025). Prior Solstis traction and metrics (if any) should not be conflated with current Tensol product traction.

**Competitive landscape:**

| Competitor | Funding | ARR | Key Differentiator vs. Tensol |
|-----------|---------|-----|-------------------------------|
| Lindy AI | $54M total (Clay, Wellfound) | $5.1M (GetLatka, Oct 2024) | No-code workflow builder with 1,600+ integrations; not built on OpenClaw; positioned as build-your-own agent platform rather than managed employee model |
| Artisan AI | $46M incl. $25M Series A (Apr 2025) (TeamDay.ai) | $5M (TeamDay.ai) | Sales-vertical only (Ava BDR); 300M+ contact database; $2K–$7K/month annual contracts; single-function vs. Tensol's multi-role approach |
| 11x AI | $74M (a16z, Benchmark) (TeamDay.ai) | ~$3M disputed (TeamDay.ai) | Sales agents (Alice SDR, Julian phone agent); exposed by TechCrunch (Mar 2025) for fake customer logos and inflated metrics; CEO stepped down May 2025 |
| Relevance AI | $37M Series B (Bessemer, May 2025) (TeamDay.ai) | $2.9M (TeamDay.ai) | GTM-focused agent platform; "Workforce" multi-agent orchestration; designed specifically for go-to-market teams |
| Sintra AI | $17M Seed (TeamDay.ai) | $12M (TeamDay.ai) | Lowest price point ($97/month); 40K+ customers; 12 themed AI helpers; but independent testing rated output quality "2 out of 10" (TeamDay.ai) |

Adjacent: Sierra AI ($350M Series B, $100M ARR — TeamDay.ai) operates in enterprise CX at $150K+/year, a different segment. Manus was acquired by Meta for ~$2–2.5B in December 2025 (TechCrunch, Dec 2025), having reached $125M+ revenue run rate within 8 months of launch (CNBC via search snippet).

**Why now:** [Inferred]: Three converging catalysts opened this opportunity: (1) OpenClaw's explosive growth (0 to 265K GitHub stars in ~4 months, becoming the most-starred software project on GitHub) created a massive user base seeking managed deployment; (2) the February 2026 announcement that OpenClaw's creator is joining OpenAI and the project is moving to a foundation created a vacuum for enterprise-grade managed providers; (3) LLM capabilities crossed a reliability threshold enabling autonomous agents to execute multi-step business workflows (CRM updates, error triage, lead enrichment) with sufficient accuracy for production use. An NBER study (Feb 2026) found 90% of firms report zero measurable productivity impact from AI agents (TeamDay.ai), which suggests the market remains very early and outcomes are uncertain.

## Founders & Team

**Oliviero Pinotti** — Co-founder
- Education: BS International Hospitality Business Management, EHL Hospitality Business School (2021–2025); also attended École 42; dropped out of NUS Computer Science (LinkedIn, olivieropinotti.com via search snippet)
- Experience: Engineer at Stacksync (YC W24) — designed and shipped the Workflows product described as "used by Fortune 500s" (YC Launch post); co-founded EQOLUX with Marine Formet, building AI-powered finance solutions for hospitality (LinkedIn via search snippet)
- Self-taught programmer since 2017 (started with Bubble/no-code); Italian-Swiss-German background (olivieropinotti.com via search snippet)
- SwissHacks 2024 first-place winner (GitHub profile)
- Twitter/X: @olivieropinotti — follower count not retrievable
- LinkedIn: linkedin.com/in/olivieropinotti — headline: "Tensol (YC W26)"
- GitHub: github.com/olivieropinotti — 22 public repos, 14 followers; no repos with significant star counts

**Pratik Satija** — Co-founder
- Education: MS in Artificial Intelligence in Engineering, Carnegie Mellon University; undergraduate in mechanical engineering (YC page, pratiksatija.com via search snippet)
- Experience: Prior roles at Rivian, Magna International, and DFCI at Harvard University (YC page, LinkedIn via search snippet)
- Won $50,000 top prize at Carnegie Mellon McGinnis Venture Competition (Graduate Track) with Solstis (CMU Swartz Center, 2025)
- Twitter/X: @pratik_satija — follower count not retrievable; account created May 2019
- LinkedIn: linkedin.com/in/pratik-satija — headline: "Tensol (YC W26)" (previously listed as Solstis)
- GitHub: github.com/satijapratik — 11 public repos, 5 followers, 6 stars total; Arctic Code Vault Contributor badge

**Co-founder relationship:** Both founders were associated with Solstis (YC W26) before pivoting to Tensol. No shared prior employer or university overlap is visible from publicly available data — Oliviero attended EHL/École 42/NUS while Pratik attended Carnegie Mellon. Their connection likely formed through the YC network or the AI agent space.

**Founder-market fit:** Oliviero brings repeat YC experience (Stacksync W24) and hands-on engineering of workflow automation products used by enterprise customers, combined with hospitality-industry domain knowledge from EHL and EQOLUX. Pratik brings formal AI/ML training from Carnegie Mellon and engineering experience at automotive manufacturers (Rivian, Magna), providing technical depth in autonomous systems. Together they cover the business/GTM and AI engineering halves of the company. The pivot from Solstis (vertical ERP agents) to Tensol (horizontal managed OpenClaw platform) suggests adaptability, though it also means the current product direction is recent.

## Key Risks

**OpenClaw platform dependency:** Tensol's core value proposition is built entirely on OpenClaw, an open-source project now transitioning to a foundation after its creator joined OpenAI (Wikipedia, Feb 2026 via search snippet). Changes to OpenClaw's architecture, licensing, governance, or community direction could directly impact Tensol's product. If the foundation imposes restrictive policies or a dominant managed provider emerges with foundation backing, Tensol's position could erode.

**Crowded managed-OpenClaw market:** Multiple managed OpenClaw implementations are already live or launching: Kimi Claw (Moonshot AI, Feb 2026), TrustClaw (enterprise), Perplexity Computer (autonomous agent). Cloud providers could enter trivially. With OpenClaw open-source under MIT license, the barrier to replicating Tensol's managed layer is low, and differentiation relies on execution speed and enterprise feature depth rather than proprietary technology.

**Recent pivot from Solstis:** The company entered YC W26 as Solstis (AI Agents for ERPs for Manufacturers) and pivoted to Tensol (managed OpenClaw AI employees) during the batch. solstis.ai now redirects to tensol.ai. This means the current product direction is weeks to months old, with limited time to validate product-market fit, build enterprise features, and accumulate customer traction under the new thesis.

**AI agent efficacy uncertainty:** An NBER study (Feb 2026) found that 90% of firms report zero measurable productivity impact from AI agents (TeamDay.ai). Gartner predicts 40%+ of agentic AI projects will be canceled by 2027 (TeamDay.ai). If autonomous agents fail to deliver reliable business outcomes at scale, the entire category faces headwinds regardless of Tensol's execution. The website's claimed metrics (80%+ alert noise reduction, 95% CRM accuracy) are unverified by independent sources.

**Brand disambiguation:** "Tensol" shares its name with Tensol Rail SA, a railway equipment company with an established LinkedIn presence (311 followers — LinkedIn via search snippet). This creates potential confusion in search results and brand recognition.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI agent market ~$8B in 2025, projected $47–100B by 2030 at 44–50% CAGR (MarketsandMarkets, Grand View Research, DemandSage via search snippets) |
| SAM | No public data found for the managed OpenClaw hosting sub-segment specifically |
| Traction | 215 YC Launch upvotes (~Feb 2026, YC Launches); 894 Twitter followers (X.com via search snippet); 50 reviews at 4.8/5 (tensol.ai, source of reviews unspecified); Stacksync and Arda as named customer testimonials (tensol.ai) |
| Revenue Signal | No public data found. Free trial offered; paid plans described as "fraction of cost of a full-time hire" (tensol.ai). No pricing tiers disclosed. |
| Founders | Oliviero Pinotti (Co-founder): EHL, École 42; engineer at Stacksync (YC W24); SwissHacks 2024 winner. Pratik Satija (Co-founder): MS AI Engineering, Carnegie Mellon; Rivian, Magna; $50K McGinnis Venture Competition winner. |
| Competitors | Lindy AI ($54M raised, $5.1M ARR, horizontal no-code agent builder); Artisan AI ($46M raised, $5M ARR, sales-vertical BDR agent); 11x AI ($74M raised, ~$3M ARR disputed, sales agents, scandal); Relevance AI ($37M raised, $2.9M ARR, GTM-focused); Sintra AI ($17M raised, $12M ARR, low-cost AI helpers) |
| Moat Signals | Built on OpenClaw (265K+ GitHub stars); ClawHub marketplace with 13,000+ skills; persistent organizational memory as switching cost; enterprise security features (SOC 2, SSO, RBAC, audit trails). All are early-stage and replicable. |
| Risk Factors | OpenClaw platform dependency with governance transition; crowded managed-OpenClaw market with low barriers; recent mid-batch pivot from Solstis; unproven AI agent efficacy at scale |
| Founder Reach | Oliviero: Twitter @olivieropinotti (count not retrievable), LinkedIn in/olivieropinotti, GitHub 14 followers. Pratik: Twitter @pratik_satija (count not retrievable), LinkedIn in/pratik-satija, GitHub 5 followers. Company: Twitter @tensol_ai 894 followers. |
| Distribution Signals | YC Launch 215 upvotes (~Feb 2026); OpenClaw ecosystem (265K+ GitHub stars) as upstream funnel; no Product Hunt launch found; no app store or Chrome extension presence found |
| Emails | founders@tensol.ai (YC page) |
