# Userlens

> AI agents that predicts churn months before it happens.

| Field | Value |
|-------|-------|
| Website | https://userlens.io |
| YC Page | https://www.ycombinator.com/companies/userlens |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Operations |
| Team Size | 4 |
| Location | Helsinki, Finland |
| Tags | SaaS, Customer Success, Enterprise Software, AI Assistant |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

**Problem:** B2B SaaS customer success teams detect churn too late — after champions have disengaged and key features went unadopted (userlens.io). Current tools (Amplitude, Mixpanel, PostHog) are built for product teams, not GTM teams, requiring analyst support to extract actionable account-level insights (wudpecker.io/blog). Gainsight and ChurnZero serve the market but are enterprise-grade platforms with high implementation overhead.

**Approach:** AI agents continuously monitor every user at every account, tracking feature adoption, usage trends, champion engagement, sentiment shifts in Slack and Intercom, and open support issues (YC page). When a risk signal fires, the system auto-generates talking points and QBR decks based on the team's approved templates and playbooks (YC page). Integrates with Mixpanel, Amplitude, PostHog, Salesforce, HubSpot, Snowflake, Stripe, and Intercom (userlens.io).

**Differentiation:** Positioned as an "AI CSM" rather than a dashboard — it generates deliverables (decks, talking points), not just alerts (YC page). Compared to Gainsight and ChurnZero, which require configuration of health scorecards, Userlens uses adaptive intelligence that learns what healthy adoption looks like across the customer base without manual rule setup (userlens.io). Compared to Amplitude/PostHog, Userlens provides company-level and cohort-level views purpose-built for CSMs rather than product managers (wudpecker.io/blog).

**Business Model:** Two tiers — Growth starting at $500/month (unlimited tracked users and events, 50 tracked companies) and Enterprise with custom pricing, SSO/OKTA, and assigned account manager (userlens.io/pricing). [Inferred]: At $500/month base with 50 companies, the implied ACV for mid-market customers is $6K–$12K+, scaling with company count on Enterprise plans.

**TAM/SAM:** The customer success platforms market was estimated at $2.2–2.9B in 2025, growing at 22–23% CAGR, projected to reach $8.3B by 2030 (Grand View Research, 2025 via search snippet; Research and Markets, 2026 via search snippet). [Inferred]: The SAM — AI-native churn prediction tools targeting B2B SaaS with <500 employees — is a fraction of this, likely in the hundreds of millions.

**GTM / Distribution:** Free 3-month trial offered to YC companies (YC page). Named customers include Linear, Deel, Calendly, Framer, McDonald's, TrueClicks, Luminovo, Gymshark, and Homie (userlens.io). Case studies published for Quartr and Smartly (userlens.io, YC page). [Inferred]: Distribution appears product-led with demo-booking as primary CTA, supplemented by content marketing via blog (hosted on wudpecker.io/blog).

## Defensibility

- **Data advantage:** Each deployment learns account-specific healthy adoption patterns; this trained model becomes more valuable over time (userlens.io). Switching would require retraining on historical data.
- **Integration depth:** Connects product analytics (Mixpanel, Amplitude, PostHog), CRM (Salesforce, HubSpot), billing (Stripe), and communication (Intercom, Slack) — multi-source integration creates switching costs (userlens.io).
- **SOC 2 Type 2 in progress, GDPR compliant** — enterprise compliance requirements raise the bar for new entrants (userlens.io).

**Market structure:** Gainsight (acquired by Vista Equity Partners, ~$200M revenue per Getlatka, 2025) and ChurnZero ($180.8M revenue per Getlatka, 2024) are incumbent platforms built on manual health score configuration and broad CS workflows. [Inferred]: Rebuilding as AI-native would require cannibalizing their existing professional services revenue and reconfiguring their sales motion around a lower-touch, lower-ACV model — a classic innovator's dilemma.

**Commoditization risk:** The core capability — applying LLMs to product usage data for churn scoring — is technically reproducible. Amplitude, PostHog, and Mixpanel could add AI-driven account health scoring as a feature. Gainsight announced AI features in its platform (Gainsight blog via search snippet). The barrier is integration breadth and GTM-team-specific UX, not algorithms.

## Market & Traction

**Traction signals:**
- $660K revenue in 2025 with 6 employees (Getlatka, 2025) — note: may include prior-product (Wudpecker) revenue; treat with caution
- Named customers on website: Linear, Deel, Calendly, Framer, McDonald's, TrueClicks, Luminovo, Gymshark, Homie (userlens.io, Apr 2026)
- Customer testimonial (Quartr case study, userlens.io): 60% reduction in prep time, 31% increase in accounts per CSM, 152% increase in upsell/cross-sell pipeline, $30K average value added per FTE annually
- Customer testimonial (Smartly, YC page): predicted 23 six-figure churn deals
- Customer testimonial (Quartr, YC page): scaled from 40 to 200 accounts per CSM, 18% increase in NRR in 3 months
- Twitter/X: @userlens handle exists; follower count not retrievable (X.com)
- LinkedIn: linkedin.com/company/userlens — follower count not retrievable (LinkedIn)
- Product Hunt: No Userlens-specific launch found. Prior product Wudpecker launched May 23, 2023: 4th place daily, 544 upvotes, 174 comments, 200 new users (wudpecker.io/blog)
- $761K funding announced March 24, 2026 (Signalbase)
- 0 open job postings (YC page, Apr 2026)

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. Userlens |
|---|---|---|---|
| Gainsight | ~$187M raised (Crunchbase via search snippet); acquired by Vista Equity | ~$200M (Getlatka, 2025) | Full-suite CS platform with health scorecards, journey orchestration, community; enterprise-focused with high implementation overhead |
| ChurnZero | $35.1M raised (Crunchbase via search snippet) | $180.8M (Getlatka, 2024) | Real-time CS platform with in-app messaging and journey automation; broader workflow tool vs. Userlens's prediction focus |
| Vitally | $40.2M raised, Series B led by Next47 (TechCrunch, Feb 2023) | Revenue unknown | Lightweight CS platform combining project management with customer data; targets startups/SMBs |
| Pecan AI | Funding unknown | Revenue unknown | Horizontal predictive analytics platform using AutoML; not CS-specific |

**Why now:** [Inferred]: LLM capabilities crossed a threshold in 2023–2024 enabling natural-language querying of product data and automated generation of customer-facing deliverables (decks, talking points) — previously requiring analyst time. Simultaneously, the SaaS downturn of 2023–2024 shifted company focus from growth-at-all-costs to retention and NRR, increasing demand for churn prediction tools.

## Founders & Team

**Ankur Dahama** — Co-founder & CEO
- Master's in Industrial Management, Tampere University (2020–2022) (LinkedIn)
- Previously: Fortum, Mercedes, Haiilo, Treon, Catapult International, Startup Catapult (Nordic9, RocketReach via search snippet)
- Co-founded Wudpecker in 2022 with Hai Ta and Joona Jokivuori; Wudpecker raised €330K pre-seed (Tech.eu, Oct 2023)
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/ankurdahama — 500+ connections (LinkedIn)
- GitHub: github.com/AnkurDahama — projects include Unity games and ML algorithm implementations; star counts not retrievable (GitHub)

**Hai Ta** — Co-founder & CGO (Chief Growth Officer)
- Educated at Tampere University (Accelerace)
- Background in sales, marketing, and UX design (Tech.eu, Oct 2023)
- Co-founded Wudpecker in 2022 (Tech.eu, Oct 2023)
- Product Hunt profile: producthunt.com/@hai_ta1 (Product Hunt)
- Twitter/X: No public account found
- LinkedIn: Profile not confirmed among multiple "Hai Ta" results
- GitHub: No public repos found

**Co-founder relationship:** Both Ankur Dahama and Hai Ta studied at Tampere University and co-founded Wudpecker together in 2022, indicating a multi-year working relationship (Tech.eu, Oct 2023). A third Wudpecker co-founder, Joona Jokivuori, is not listed on the Userlens YC page.

**Founder-market fit:** The founders experienced the churn problem firsthand — at Wudpecker (25K users, 1,000+ customers per YC page), they had no visibility into which customers were about to churn. This direct experience motivated the pivot to Userlens. Ankur's engineering background provides technical capability to build the product; Hai's sales/marketing/UX background addresses GTM and product design.

## Key Risks

**Product pivot recency:** Userlens is a pivot from Wudpecker (AI meeting assistant). The Wudpecker domain (wudpecker.io) still hosts Userlens content and blog posts. The $660K revenue figure (Getlatka, 2025) may include or entirely represent prior-product revenue. Current-product traction on the Userlens platform specifically is unconfirmed by independent sources.

**Name collision:** A separate company called "User Lens" (UX consultancy, San Francisco) exists on Crunchbase and ZoomInfo (Crunchbase, ZoomInfo via search snippet). This creates brand confusion in search results and may complicate domain/trademark positioning.

**Incumbent feature absorption:** Gainsight has announced AI features for its platform (Gainsight blog via search snippet). Amplitude, PostHog, and Mixpanel — Userlens's data sources — could add account-level health scoring as native features, eliminating the need for a separate tool. The integration layer that creates switching costs also creates platform dependency.

**Customer logo credibility gap:** The website displays logos of Linear, Deel, Calendly, Framer, and McDonald's (userlens.io). For a pre-seed company with 4–6 employees, the presence of these enterprise logos without published case studies (only Quartr and testimonials from TrueClicks, Luminovo, Homie) warrants verification of engagement depth (free trials vs. paid contracts).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.2–2.9B in 2025, 22–23% CAGR, projected $8.3B by 2030 (Grand View Research, 2025 via search snippet; Research and Markets, 2026 via search snippet) |
| SAM | No public data found |
| Traction | Named customer logos: Linear, Deel, Calendly, Framer, McDonald's, TrueClicks, Luminovo, Gymshark, Homie (userlens.io, Apr 2026); Quartr case study: 60% prep time reduction, 31% more accounts/CSM (userlens.io); Wudpecker prior product: 25K users, 1K+ customers (YC page) |
| Revenue Signal | $500/mo Growth tier (userlens.io/pricing, Apr 2026); $660K revenue in 2025 (Getlatka, 2025 — may include prior-product revenue) |
| Founders | Ankur Dahama (CEO): MS Industrial Management Tampere, prev. Fortum/Mercedes/Haiilo. Hai Ta (CGO): Tampere Univ., sales/marketing/UX background |
| Competitors | Gainsight (~$187M raised, ~$200M rev, full-suite enterprise CS platform); ChurnZero ($35.1M raised, $180.8M rev 2024, CS platform with in-app messaging); Vitally ($40.2M raised, revenue unknown, lightweight CS for startups) |
| Moat Signals | Multi-source integration depth across analytics/CRM/billing/comms (userlens.io); adaptive ML models trained per-deployment (userlens.io); SOC 2 Type 2 in progress (userlens.io) |
| Risk Factors | Pivot recency (Wudpecker → Userlens), incumbent feature absorption (Gainsight AI, analytics platforms), customer logo verification |
| Founder Reach | Ankur Dahama: Twitter not found, LinkedIn 500+ (LinkedIn), GitHub repos present but stars not retrievable (GitHub). Hai Ta: Twitter not found, LinkedIn not confirmed, Product Hunt profile exists (Product Hunt) |
| Distribution Signals | Wudpecker Product Hunt #4 daily, 544 upvotes (wudpecker.io/blog, May 2023); YC P26 free trial offer for YC companies (YC page); no Userlens-specific PH launch found |
| Emails | No public data found |
