# Taxnova

> AI infrastructure to streamline the $10B R&D tax market

| Field | Value |
|-------|-------|
| Website | https://taxnova.ai |
| YC Page | https://speedrun.a16z.com/companies/taxnova |
| Batch | a16z Speedrun (not a Y Combinator batch; the company is part of the a16z Speedrun accelerator) |
| Industry | AI, B2B |
| Team Size | 5 |
| Location | San Francisco, California, United States of America (note: multiple sources describe the company as London-based (The SaaS News, Feb 2026; Fintech Global, Feb 2026); website states EU-hosted on Google Cloud) |
| Tags | AI, B2B |
| YC Partner | Not listed (a16z Speedrun page returned 404 at time of research) |
| Emails | george@taxnova.ai, mari@taxnova.ai (a16z Speedrun portal) |

## The Idea

**Problem:** Technology companies eligible for R&D tax credits face a claim preparation process that takes 3–6 months, with data collection accounting for approximately 75% of that time (Fintech Global, Feb 2026). The process typically requires engineer interviews and timesheets, disrupting engineering teams. In the UK, HMRC inquiry rates on R&D claims increased from 0.5% to 20% over three years starting in 2022 (Fintech Global, Feb 2026), raising the stakes for audit-defensible documentation. Current solutions range from manual advisory firms (EY, BDO, Grant Thornton) to semi-automated platforms that still require significant human input.

**Approach:** Taxnova integrates read-only with engineering and financial tools — Jira, Linear, GitHub, GitLab, Bitbucket, Azure DevOps, Confluence, Notion, Google Docs, Slack, Xero, QuickBooks, NetSuite (taxnova.ai) — to automatically identify qualifying R&D projects, generate technical narratives linked to source evidence, calculate eligible cost percentages, and produce audit-ready documentation. Setup takes ~30 minutes (taxnova.ai). The company describes itself as "advisor-agnostic," meaning it works alongside existing tax advisors rather than replacing them (a16z Speedrun portal).

**Differentiation:** Compared to Neo.Tax and SPRX/Onshore, which focus primarily on the US market, Taxnova positions as "global-first" with live UK (HMRC-compliant) coverage and US support (a16z Speedrun portal; taxnova.ai). The advisor-agnostic model differentiates from Boast.ai, which acts as a full-service provider. The company completed a pilot with a Top 5 R&D tax advisory firm (Fintech Global, Feb 2026), suggesting a channel strategy through existing advisors rather than displacing them.

**Business Model:** No pricing page is published (taxnova.ai). The company reports $100K ARR including incident.io and Paddle as customers, with an enterprise pilot at $200K+ ACV potential (a16z Speedrun portal). [Inferred]: The ACV figure and advisor-agnostic positioning suggest a SaaS subscription model priced for mid-market and enterprise tech companies, likely with annual contracts.

**TAM/SAM:** The global R&D tax credit software market was valued at $1.45B in 2025, projected to reach $3.28B by 2034 at 9.7% CAGR (Intel Market Research, 2026). The broader R&D tax relief market: UK companies claimed £7.6B in 2023–24; US federal R&D tax credits exceed $32B annually across 30+ state schemes (Fintech Global, Feb 2026). The company's own materials reference a "$10B R&D tax market" (a16z Speedrun portal).

**GTM / Distribution:** The company has a completed pilot partnership with a Top 5 R&D tax advisory firm (Fintech Global, Feb 2026). Named customers include incident.io and Paddle (a16z Speedrun portal). [Inferred]: Primary distribution appears to be a dual strategy — direct sales to tech companies and a channel strategy through tax advisory firms, leveraging the advisor-agnostic positioning. The integration with developer tools (GitHub, Jira) creates a bottom-up adoption path within engineering organizations.

## Defensibility

- **Data accumulation:** Each claim processed generates structured mappings between engineering activity and R&D tax eligibility across specific jurisdictions (taxnova.ai). [Inferred]: Over time this builds a proprietary dataset of qualification patterns that improves accuracy and reduces setup time for new customers.
- **Multi-jurisdiction complexity:** Supporting multiple tax regimes (UK HMRC, US federal/state) requires jurisdiction-specific logic (taxnova.ai). [Inferred]: Each new country added compounds the barrier to replication.
- **Integration depth:** Read-only connections across 15+ engineering and finance tools (taxnova.ai) create switching costs once embedded in a customer's workflow.
- **Team domain expertise:** Team members have backgrounds from EY, BDO, Grant Thornton, and IRS (a16z Speedrun portal), providing regulatory knowledge difficult to replicate with engineering talent alone.

**Market structure:** Traditional advisory firms (Big 4, mid-tier) derive significant revenue from manual R&D tax services. [Inferred]: Building a competing software product would cannibalize their own advisory fees, creating a structural disincentive. Taxnova's advisor-agnostic model avoids triggering this response by positioning as infrastructure for advisors rather than a replacement.

**Commoditization risk:** Neo.Tax ($13M raised), SPRX/Onshore ($46M raised), and Boast.ai ($30M raised) are well-funded competitors in the US market (see Competitive Landscape below). LLM-based document generation is becoming commoditized; the defensible layer is jurisdiction-specific tax logic and integration infrastructure. [Inferred]: A generalist AI company could build surface-level claim generation, but audit-defensible output requires deep domain expertise in each jurisdiction's tax code.

## Market & Traction

**Traction signals:**
- $100K ARR, customers include incident.io and Paddle (a16z Speedrun portal)
- Enterprise pilot with $200K+ ACV potential (a16z Speedrun portal)
- Pilot completed with a Top 5 R&D tax advisory firm (Fintech Global, Feb 2026)
- "Supported dozens of early customers" (Fintech Global, Feb 2026)
- Customer testimonial: incident.io — "made R&D tax claims effortless and audit-ready" (taxnova.ai)
- Customer testimonial: causaLens — "caught missed R&D projects — and saved weeks" (taxnova.ai)
- $1M pre-seed raised from a16z Speedrun, s16vc, Karaoke Club, and 20 technology operators (Fintech Global, Feb 2026)
- Twitter/X: @taxnovaai — account exists but follower count not retrievable
- LinkedIn: https://www.linkedin.com/company/taxnova-ai/ — follower count not retrievable
- GitHub: https://github.com/TaxNova-AI — no public repositories found
- Product Hunt: no launch found
- Launched publicly Feb 4, 2026 (Fintech Global, Feb 2026)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Taxnova |
|---|---|---|
| **Neo.Tax** | $13M total ($3M seed 2020, $10M Series A 2022 led by Infinity Ventures; TechCrunch, Feb 2022) | US-focused; integration with Mercury; no multi-jurisdiction support |
| **SPRX/Onshore** | $46M total ($12M Series A, $31M Series B Feb 2026; BusinessWire, Feb 2026) | Broader tax credit scope (R&D, 179D, Cost Seg); YC-backed; US-only |
| **Boast.ai** | $30M from Radian Capital (BetaKit, 2020); eight-figure revenue; 1,000+ customers | Full-service model (not advisor-agnostic); US and Canada only |
| **TaxCredit.ai** | No public funding data found | US-focused; accountant-channel model (taxcredit.ai) |

**Why now:**
- UK HMRC inquiry rates on R&D claims rose from 0.5% to 20% over 2022–2025 (Fintech Global, Feb 2026), increasing demand for audit-ready documentation.
- US Section 174 changes restoring immediate expensing for domestic R&E costs starting in 2025 (Intel Market Research, 2026) create new compliance complexity.
- [Inferred]: LLM capabilities crossing a quality threshold for generating technical narratives from engineering artifacts (commits, tickets) made automation of the most labor-intensive step feasible within the last 12–18 months.

## Founders & Team

**George Nichkov** — CEO & Co-founder
- BSc Economics, University College London; Specialist degree in Finance, Financial University under the Government of the Russian Federation (2008–2013) (RocketReach; LinkedIn via search snippet)
- Senior Consultant at Oliver Wyman (management consulting) (LinkedIn via search snippet)
- Product Lead / Global BA Team Lead at Gett (B2B ride-hailing); managed corporate portal, APIs, carpooling products (LinkedIn via search snippet)
- Founder Fellow at Grishin Robotics (LinkedIn via search snippet)
- Twitter/X: No dedicated public account found (company account: @taxnovaai)
- LinkedIn: linkedin.com/in/nichkov — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Maria Malykh** — CTO & Co-founder
- Novosibirsk State University (Crunchbase; LinkedIn via search snippet)
- Program Manager at Criteo (2023): led cross-functional project coordinating 9 R&D teams for CGrid Commerce Experiences prototypes (LinkedIn via search snippet)
- Previous roles: software engineer, B2B customer solutions engineer, research scientist (LinkedIn via search snippet)
- Co-founded awaitly (prior startup) (Crunchbase)
- Substack: gomalykh.substack.com — documents building-in-public journey (Substack via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/maria-malykh-ilyina (LinkedIn)
- GitHub: No public repos found

**Additional team:** 3 additional team members (team size 5 per a16z Speedrun portal). Team includes domain expertise from EY, BDO, Grant Thornton, and IRS (a16z Speedrun portal). Revolut's Head of Tax is listed as an advisor/operator backer (a16z Speedrun portal).

**Co-founder relationship:** Both founders are London-based (LinkedIn via search snippet). No shared prior employer or university identified from available data. Both have B2B product backgrounds — Nichkov at Gett and Oliver Wyman, Malykh at Criteo and as a B2B customer solutions engineer.

**Founder-market fit:** Nichkov's consulting background (Oliver Wyman) and B2B product leadership (Gett) provide enterprise sales and product experience. Malykh's engineering background across program management and R&D team coordination (Criteo, 9 R&D teams) maps directly to understanding how engineering teams work — the primary data source for R&D tax claims. The broader team's Big 4/mid-tier accounting firm and IRS experience (EY, BDO, Grant Thornton) provides the tax domain expertise required for audit-defensible output.

## Key Risks

**Regulatory divergence across jurisdictions:** R&D tax rules differ materially between UK, US, and other markets. The UK's merged scheme (effective April 2024) and the US Section 174 changes create ongoing compliance complexity. Each new jurisdiction requires bespoke tax logic and potentially local regulatory partnerships, limiting speed of geographic expansion.

**Well-funded competitors in the US market:** SPRX/Onshore ($46M raised; BusinessWire, Feb 2026), Neo.Tax ($13M; TechCrunch, Feb 2022), and Boast.ai ($30M; BetaKit, 2020) have significantly more capital and established US customer bases. Taxnova's US support is listed as "coming soon" on the website (taxnova.ai), meaning it is entering a market where incumbents have multi-year head starts.

**Advisor-channel dependency:** The completed pilot with a Top 5 advisory firm (Fintech Global, Feb 2026) and advisor-agnostic positioning suggest heavy reliance on tax advisory firms as a distribution channel. If major advisory firms build or acquire competing internal tools, the channel could close. Mitigation: direct-to-customer sales to incident.io and Paddle demonstrate an alternative path (a16z Speedrun portal).

**Name confusion risk:** "Nova" is a common element in tax-related brand names (NOVA Tax Group exists on X/Twitter). This could create SEO competition and brand confusion in market discovery.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | R&D tax credit software market: $1.45B in 2025, projected $3.28B by 2034 at 9.7% CAGR (Intel Market Research, 2026). Company references "$10B R&D tax market" as broader opportunity (a16z Speedrun portal). |
| SAM | No public data found |
| Traction | $100K ARR (a16z Speedrun portal); enterprise pilot $200K+ ACV potential (a16z Speedrun portal); pilot with Top 5 advisory firm (Fintech Global, Feb 2026); "dozens of early customers" (Fintech Global, Feb 2026); public launch Feb 4, 2026 (Fintech Global, Feb 2026) |
| Revenue Signal | $100K ARR including incident.io and Paddle (a16z Speedrun portal). No public pricing page (taxnova.ai). |
| Founders | George Nichkov (CEO): Oliver Wyman consultant, Gett product lead, UCL economics. Maria Malykh (CTO): Criteo program manager, Novosibirsk State Univ., prior co-founder (awaitly). |
| Competitors | Neo.Tax ($13M raised, revenue unknown, US-only; TechCrunch 2022); SPRX/Onshore ($46M raised, revenue unknown, broader tax scope; BusinessWire 2026); Boast.ai ($30M raised, eight-figure revenue, full-service model; BetaKit 2020) |
| Moat Signals | Multi-jurisdiction tax logic (UK live, US launching) (taxnova.ai); 15+ tool integrations (taxnova.ai); team with EY/BDO/Grant Thornton/IRS domain expertise (a16z Speedrun portal); advisor-channel pilot with Top 5 firm (Fintech Global, Feb 2026) |
| Risk Factors | Well-funded US competitors (SPRX $46M, Neo.Tax $13M, Boast $30M), regulatory divergence across jurisdictions, advisor-channel dependency |
| Founder Reach | George Nichkov: LinkedIn 500+ connections (LinkedIn via search snippet), Twitter not found. Maria Malykh: LinkedIn present (linkedin.com/in/maria-malykh-ilyina), Twitter not found. Company: @taxnovaai on X (count not retrievable). |
| Distribution Signals | No Product Hunt launch found. No app store presence. No public community (Discord/Slack) found. Company LinkedIn and X accounts exist but follower counts not retrievable. |
| Emails | george@taxnova.ai, mari@taxnova.ai (a16z Speedrun portal) |
