# Cascade

> AI Platform that finds & wins more projects for architecture & construction firms.

| Field | Value |
|-------|-------|
| Website | https://usecascade.ai/ |
| YC Page | https://speedrun.a16z.com/companies/cascade |
| Batch | a16z Speedrun (specific cohort not confirmed; not a Y Combinator company — see note below) |
| Industry | AI, B2B |
| Team Size | 2 (founders) + at least 1 additional hire (Head of Growth) |
| Location | San Francisco, California, United States of America |
| Tags | AI, B2B |
| YC Partner | Not listed (a16z Speedrun portal page returned 404 at time of research) |
| Emails | hannia@usecascade.ai, joana@usecascade.ai (a16z Speedrun portal) |

**Accelerator clarification:** The company page URL is on a16z Speedrun (speedrun.a16z.com), not Y Combinator. A separate company named "Cascade" exists on ycombinator.com/companies/cascade — that is an AI agent evaluation startup (founders Adam AlSayyad and Haluk Cem Demirhan, website runcascade.com) and is unrelated. a16z Speedrun invests up to $1M per company (speedrun.a16z.com/apply).

## The Idea

**Problem:** Architecture, engineering, and construction (AEC) firms spend weeks finding relevant government and private-sector projects across fragmented RFP portals, then spend additional weeks writing proposals manually. Firms currently monitor 20+ portal sites individually and make go/no-go decisions over days rather than minutes (usecascade.ai). Existing tools are either horizontal RFP platforms lacking AEC-specific context or manual processes.

**Approach:** Cascade scans thousands of state, local, and federal government websites and scores opportunities by fit to each firm's capabilities (usecascade.ai). Three core live features:
- **Government Project Finder:** Automated discovery across public RFP portals
- **Proposal Writing:** Reduces proposal creation from ~4 weeks to days
- **Project Spec Analysis:** Analyzes specifications and flags inconsistencies

Upcoming features include Pre-Bid Intelligence (budget announcements, government meeting minutes), Private Market Signals (permit filings, developer land purchases), Bid Leveling (subcontractor comparison), and Team Up (joint-venture matching) (usecascade.ai). The platform integrates with AEC ERPs — Deltek Vantagepoint, Ajera, Costpoint, and OpenAsset — and generates Davis-Bacon certified payroll reports (usecascade.ai).

**Differentiation:** Unlike horizontal RFP tools (AutogenAI, Inventive.ai), Cascade is purpose-built for AEC workflows: it ingests construction-specific data (specs, BIM context, payroll compliance) and integrates with AEC ERPs. Unlike Joist AI, which focuses on proposal content search and curation, Cascade also handles upstream project discovery and downstream compliance. [Inferred]: The combination of project discovery + proposal generation + compliance tooling in a single vertical platform distinguishes Cascade from point solutions addressing only one piece of the pipeline.

**Business Model:** No pricing publicly visible on the website (usecascade.ai, April 2026). Company reports "$183k cARR" and that "first three companies have more than doubled their spend," suggesting expansion revenue and likely a subscription or usage-based SaaS model (a16z Speedrun portal). [Inferred]: Monetization is most likely per-seat or per-firm SaaS subscriptions, potentially with consumption tiers tied to proposal volume or project-finder usage.

**TAM/SAM:**
- Global construction software market: $11.78B in 2026, projected $24.72B by 2034, 9.70% CAGR (Fortune Business Insights via search snippet)
- AEC software market: ~$11.7B in 2024, 9.5% CAGR to 2031 (Metastat Insight via search snippet)
- No public SAM estimate specific to AEC project-discovery and proposal-writing software found.

**GTM / Distribution:** The company reports 15 signed companies, 11 in the last month (a16z Speedrun portal). Clients include firms that have built JFK and LaGuardia airports, Four Seasons and Ritz hotels, data centers, and nuclear reactors (a16z Speedrun portal). The Head of Growth was ranked #2 sales rep at Procore, where she drove $3M in ARR in 2025 (a16z Speedrun portal). [Inferred]: Direct outbound sales to mid-to-large AEC firms, leveraging the Head of Growth's Procore relationships and industry network. The Procore background also suggests potential future integration or channel partnership with construction management platforms.

## Defensibility

- **Data layer compounding:** Cascade positions itself as "the data layer for all construction projects" (a16z Speedrun portal). As firms connect ERPs and build proposal history in the platform, switching costs rise. [Inferred]: Over time, the accumulated project data, firm capability profiles, and proposal templates create a proprietary dataset that improves AI matching quality — a data flywheel that new entrants cannot replicate without similar client penetration.
- **Vertical integration:** Combining discovery, proposals, spec analysis, compliance, and ERP sync in a single AEC-specific platform creates switching costs that horizontal tools lack (usecascade.ai).
- **No patents or published IP found** beyond the general product approach.

**Market structure:** [Inferred]: Horizontal RFP incumbents (AutogenAI, Responsive) face a vertical-specific challenge: building AEC-domain features (Davis-Bacon compliance, BIM awareness, ERP integrations with Deltek/Ajera) requires specialized engineering investment that their broader customer base does not justify. Procore, the closest construction-specific incumbent, focuses on project execution rather than pre-bid pursuit, and expanding into RFP/proposal tools would require building a new product line outside its core value proposition.

**Commoditization risk:** General-purpose LLM providers and horizontal RFP tools could add AEC templates and integrations. AutogenAI ($65.3M raised) has the capital to expand vertically. AEC-specific competitors Joist AI ($4M raised) and Workorb AI ($2.6M raised) are building similar propositions. The technical moat rests on domain-specific data integrations and accumulated client data rather than fundamental AI breakthroughs.

## Market & Traction

**Traction signals:**
- $183k cARR, up from $0 in 3 months (a16z Speedrun portal)
- 15 companies signed, 11 in the last month (a16z Speedrun portal)
- First three clients more than doubled their spend (a16z Speedrun portal)
- $120M+ in extra opportunities surfaced monthly for clients (usecascade.ai)
- 5 minutes to first opportunities; zero integrations needed to start (usecascade.ai)
- Backed by a16z Speedrun (usecascade.ai)
- LinkedIn company page exists at linkedin.com/company/usecascade (LinkedIn search); follower count not retrievable
- No Product Hunt launch found specific to usecascade.ai (the Product Hunt "Cascade" page is cascade.io, a different product)
- No public Twitter/X account found for the company
- No Discord/Slack community found
- No app store presence found

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. Cascade |
|---|---|---|
| AutogenAI | $65.3M total, $39.5M Series B (VentureBeat, Dec 2023) | Horizontal proposal platform; not AEC-specific; stronger in government/defense verticals |
| Joist AI | $4M seed, Building Ventures & SignalFire (Crunchbase) | AEC-focused content search and curation; lacks project discovery and compliance features |
| Inventive.ai | $4M seed, Sierra Ventures & YC S23 (Yahoo Finance, Aug 2024) | General RFP workflow automation; not AEC-specific |
| Workorb AI | $2.6M total, $1.87M convertible note Nov 2024, Metavallon VC (PRWeb) | AEC-specific proposal automation; Toronto-based; closest direct competitor |

**Why now:**
- [Inferred]: The maturation of large language models in 2023–2025 crossed a quality threshold enabling reliable automated proposal drafting from technical specifications — a task that was previously too error-prone for AI to handle in compliance-sensitive AEC contexts.
- [Inferred]: Construction industry digitization accelerated post-COVID, with AEC firms increasingly adopting cloud ERPs (Deltek, Procore), creating integration surfaces that did not exist at scale 3–5 years ago.

## Founders & Team

**Hannia Zia** — Co-founder & CEO
- BS Computer Science & Psychology, Yale University (Entrepreneurs of Pakistan)
- Google: Chrome OS team (Pixelbook launch, patented stylus solution); Google Maps (data tools); Google Pay India (scaled 0→100M users); Google Pay Singapore launch (a16z Speedrun portal, Forbes 30 Under 30 profile)
- Patent for payment authentication design; White Paper with the World Bank on open API payment systems (a16z Speedrun portal)
- Founding member of Digital Pakistan (PM's Office); sole PM of Pakistan's pandemic tech response; launched COVID WhatsApp bot reaching 500,000 users; grew Health Ministry Facebook page to 1.8M followers (Forbes 30 Under 30 Asia 2021 profile via Pakistan Observer)
- Award from Prime Minister Imran Khan (Pakistan Observer)
- Forbes 30 Under 30 Asia 2021 (Pakistan Observer, Global Village Space)
- Product Lead @ UnlikelyAI ($20M raised), AI for banks & insurance (a16z Speedrun portal)
- Twitter/X: @Hannia_zia (x.com/hannia_zia); follower count not retrievable
- LinkedIn: linkedin.com/in/hanniazia — "CEO @ Cascade (a16z speedrun)" (LinkedIn)
- GitHub: No public profile found

**Joana Ferreira** — Co-founder & CTO
- Early engineer at Freetrade, the UK's largest trading app (a16z Speedrun portal; confirmed via freetrade.io author page)
- ML systems for Google Search and Amazon (a16z Speedrun portal)
- AI Platform Lead @ UnlikelyAI (a16z Speedrun portal)
- Grew up in a family of carpenters (a16z Speedrun portal)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/joanaferreira0011 (LinkedIn)
- GitHub: No public profile found

**Head of Growth** (name not publicly disclosed):
- Ranked #2 sales rep at Procore; drove $3M in ARR in 2025 (a16z Speedrun portal)

**Co-founder relationship:** Both Hannia Zia and Joana Ferreira worked together at UnlikelyAI "for many years" before starting Cascade (a16z Speedrun portal).

**Founder-market fit:** Hannia Zia's experience scaling Google Pay from 0→100M users and leading product at an AI startup demonstrates ability to build and scale AI-driven B2B products. Joana Ferreira brings ML engineering depth from Google Search and Amazon, plus a personal connection to construction through her family's carpentry background (a16z Speedrun portal). The Head of Growth's #2 ranking at Procore (the dominant construction management platform) provides immediate AEC sales network and domain credibility.

## Key Risks

**Brand confusion / name collision:** "Cascade" is used by Windsurf (coding IDE feature), Cascade.io (workflow tool), Cascade Strategy (G2-listed), and a separate YC W26 company called Cascade (runcascade.com, AI agent evaluation). This creates SEO competition and potential customer confusion. Mitigation: the company uses "usecascade.ai" as its domain.

**AEC adoption speed:** Construction firms are historically slow to adopt new software. The 15-company sign-up pace is strong, but scaling beyond early adopters into the conservative mid-market may require significant customer education and proof-of-ROI cycles.

**Horizontal platform encroachment:** AutogenAI ($65.3M raised) could add AEC-specific features and leverage its existing proposal-writing infrastructure and Salesforce Ventures relationship. Procore could build native RFP/proposal tools as a natural extension of its construction management platform.

**Government data fragility:** The core project-finder depends on scanning government RFP portals. Format changes, access restrictions, or consolidation of these portals could disrupt the data pipeline without warning.

**Key-person sales risk:** GTM appears concentrated through the Head of Growth's Procore network. Departure of this hire before building a broader sales team would significantly impair growth trajectory.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.78B construction software market in 2026, 9.70% CAGR to $24.72B by 2034 (Fortune Business Insights via search snippet) |
| SAM | No public data found |
| Traction | $183k cARR from $0 in 3 months; 15 companies signed, 11 in last month; first 3 clients doubled spend (a16z Speedrun portal) |
| Revenue Signal | $183k cARR (a16z Speedrun portal); no public pricing page |
| Founders | Hannia Zia (CEO): Yale CS, Google Pay 0→100M users, Forbes 30u30 Asia 2021, UnlikelyAI Product Lead. Joana Ferreira (CTO): Freetrade early eng, Google Search ML, UnlikelyAI AI Platform Lead |
| Competitors | AutogenAI ($65.3M raised, revenue unknown, horizontal not AEC-specific); Joist AI ($4M seed, revenue unknown, AEC content curation); Workorb AI ($2.6M raised, revenue unknown, closest AEC competitor); Inventive.ai ($4M seed, revenue unknown, horizontal RFP) |
| Moat Signals | Vertical AEC data integrations (Deltek, Ajera, Costpoint ERPs); combined discovery + proposal + compliance platform (usecascade.ai) |
| Risk Factors | Brand name collision, AEC adoption speed, horizontal platform encroachment |
| Founder Reach | Hannia Zia: Twitter @Hannia_zia (count not retrievable), LinkedIn 500+ (LinkedIn). Joana Ferreira: LinkedIn linkedin.com/in/joanaferreira0011 (LinkedIn). GitHub: no public profiles found |
| Distribution Signals | No Product Hunt launch found; no app store presence; LinkedIn company page exists (linkedin.com/company/usecascade) |
| Emails | hannia@usecascade.ai, joana@usecascade.ai (a16z Speedrun portal) |
