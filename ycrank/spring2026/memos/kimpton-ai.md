# Kimpton AI

> The IDE for investors

| Field | Value |
|-------|-------|
| Website | https://kimpton.ai |
| YC Page | https://www.ycombinator.com/companies/kimpton-ai |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech -> Asset Management |
| Team Size | 5 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Fintech |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

**Note:** LinkedIn lists the company address as Dallas, Texas, and shows 11 employees — both differ from the YC page (San Francisco; team size 5) (LinkedIn company page). The website tagline reads "The superagent for financial markets" rather than "The IDE for investors" used on the YC page (kimpton.ai; YC page).

## The Idea

**Problem:** Active investors and portfolio managers rely on fragmented tools — terminals, spreadsheets, multiple data vendors, and manual research workflows — to source edge and manage risk. Bloomberg Terminal costs ~$24,000/year (Kimpton AI LinkedIn post). Retail and smaller institutional investors lack access to integrated, institutional-grade research infrastructure.

**Approach:** Kimpton is an agentic AI platform that orchestrates 27 financial tools across a unified interface (KimptonAI X post). It ingests real-time and historical data on 120,000+ assets (equities, futures, ETFs, crypto), connects to user portfolios via Plaid across 2,500+ brokerages, and runs sandboxed Python analyses autonomously (YC page; WebCatalog listing). The platform offers 11 pre-built "Skills" — Morning Brief, Portfolio Health Check, Deep Dive, Earnings Preview, Thesis Stress Test, Comp Table, Sector Rotation, Weekly Wrap, Rebalance Planner, Dividend Scorecard, and What Just Happened — plus Deep Research, Trade Proposals, a Prediction Engine, Charts, and Watchlist features (kimpton.ai). Each prompt currently takes ~2 minutes to complete (Jack Zumwalt LinkedIn launch post, November 2025).

**Differentiation:** Unlike AlphaSense ($4B valuation, enterprise-focused NLP on documents), Kimpton emphasizes agentic computation — backtesting, Monte Carlo simulations, and structured trade proposals tied to the user's actual portfolio (YC page). Unlike Composer (automated strategy execution), Kimpton positions as a research co-pilot where "humans make the decisions, AI does everything else" rather than auto-executing trades (YC page). Unlike Reflexivity/Toggle AI (AI analytics layer), Kimpton integrates brokerage connectivity and portfolio-aware recommendations. The founding team describes it as "Cursor for investing" — an IDE metaphor emphasizing developer-like control over financial workflows (KimptonAI X post).

**Business Model:** A free trial/tier is available at app.kimpton.ai (Jack Zumwalt LinkedIn post, November 2025). WebCatalog lists the app as free ($0 USD) (WebCatalog). One social media reference mentions a "$200 plan" in the context of users maxing out credits (social media, October 2025). No formal pricing page with tier details was found on the website. [Inferred]: Likely a freemium model with usage-based credit limits and a paid tier at ~$200/month, consistent with prosumer fintech SaaS positioning.

**TAM/SAM:** The AI in asset management market was valued at $3.5B in 2023 and is projected to reach $14.1B by 2030 at 22.1% CAGR (ResearchAndMarkets, 2024 via search snippet). Grand View Research estimates the same market at $3.68B (2022) growing to $17.0B by 2030 at 24.5% CAGR (Grand View Research, 2023 via search snippet). The robo-advisory market was valued at $8.39B in 2024, projected to reach $69.32B by 2032 at 30.3% CAGR (Fortune Business Insights via search snippet). [Inferred]: Kimpton's SAM is the subset of active individual and small institutional investors willing to pay for AI-augmented research tools — likely a fraction of the broader AI asset management TAM.

**GTM / Distribution:** The product launched publicly on November 10, 2025 via a LinkedIn post by the CEO (81 likes, 13 comments) (Jack Zumwalt LinkedIn). The company Twitter/X account (@KimptonAI) had 571 followers; the LinkedIn company page had 1,251 followers (search results, March 2026). [Inferred]: Current distribution appears organic/founder-led via social media and the YC network, targeting sophisticated retail investors and small fund operators.

## Defensibility

- **Data integration moat (developing):** Portfolio connectivity to 2,500+ brokerages via Plaid creates personalized context that generic research tools lack (YC page). Each user's portfolio data enables tailored trade proposals and risk profiling.
- **Workflow lock-in (developing):** The 11 Skills and agentic research workflows create habitual usage patterns. [Inferred]: Switching costs increase as users build portfolio history, watchlists, and research context within the platform.
- **Proprietary stack origin:** The platform was built internally at Level III Capital over multiple years as production trading infrastructure before being spun out (Level III Capital blog post). [Inferred]: This gives Kimpton a head start over teams building from scratch, though the advantage is time-based rather than structural.

**Market structure:** [Inferred]: Bloomberg's business model depends on $24K+/year terminal revenue from institutional clients; building a $200/month prosumer product would cannibalize their pricing power and channel relationships. Incumbents like FactSet and Refinitiv face similar downmarket cannibalization risk. However, no structural barrier prevents well-funded startups from replicating Kimpton's approach.

**Commoditization risk:** LLM-based financial chat interfaces are proliferating (Reflexivity, Composer's Trade With AI, FinChat/Fiscal.ai, Mezzi). The agentic orchestration layer, brokerage connectivity, and backtesting engine add technical complexity, but none constitute a durable moat individually. [Inferred]: The primary differentiation risk is that foundation model providers (OpenAI, Anthropic) or large fintech platforms (Robinhood, Interactive Brokers) could build similar agentic research features natively.

## Market & Traction

**Traction signals:**
- Product launched publicly November 10, 2025 (Jack Zumwalt LinkedIn post — 81 likes, 13 comments)
- Twitter/X: @KimptonAI — 571 followers (search results, March 2026)
- LinkedIn: 1,251 followers (LinkedIn company page, March 2026)
- Desktop app available via WebCatalog for Mac, Windows, Linux — listed as free (WebCatalog)
- No Product Hunt listing found
- No app store listings found (iOS/Android)
- No Chrome extension found
- No Discord/Slack community found
- No revenue figures, user counts, or download counts publicly disclosed
- No job postings found on YC's Work at a Startup

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Kimpton |
|---|---|---|---|
| AlphaSense | ~$1.4B raised; $4B valuation (Series F, June 2024) | $500M+ ARR (AlphaSense press release, Oct 2025) | Enterprise-focused; NLP on documents/transcripts rather than agentic computation; no brokerage integration |
| Reflexivity (fka Toggle AI) | $40.5–48.7M (Series B $30M, Oct 2024; Greycroft, Interactive Brokers) | $3.2M (GetLatka, 2024) | AI co-pilot for institutional analysts; backed by Stanley Druckenmiller; more established distribution |
| Composer | $16.7M ($6M last round, Sep 2022) | Not disclosed | Automated strategy execution and backtesting; "Trade With AI" launched Oct 2025; focuses on auto-execution vs. Kimpton's research-first approach |
| Mezzi | ~$1.76M (PitchBook) | Not disclosed | AI wealth management; SEC-registered RIA; $199–$499/year pricing; portfolio optimization focus |
| FinChat/Fiscal.ai | $1.75M ($1.5M seed from Social Leverage) | Not disclosed | Conversational AI for financial data queries; simpler chat interface vs. Kimpton's multi-tool orchestration |

**Why now:**
- [Inferred]: The enabling catalyst is the maturation of agentic AI frameworks (multi-step tool use, code execution sandboxing) in 2024–2025, making autonomous financial computation feasible at consumer-grade latency and cost.
- [Inferred]: Plaid's expanding brokerage coverage (2,500+ institutions) provides the connectivity layer that makes portfolio-aware AI research possible without proprietary integrations.
- Reflexivity's $30M Series B (October 2024) and Composer's "Trade With AI" launch (October 2025) indicate growing investor and user appetite for AI-native investment tools (GlobeNewsWire; BusinessWire).

## Founders & Team

**Jack Zumwalt** — Co-founder & CEO
- B.S. Computer Science, University of Texas at Dallas (2016–2020); attended University of Oxford (2017) (LinkedIn)
- Goldman Sachs: Detection Engineering, Technology Risk division; then DevOps Engineer, Critical Infrastructure (Marcus) (LinkedIn; Level III Capital website)
- Co-founded Level III Capital (2021), a quantitative fund focused on volatility management and automated trading in digital assets; served as CEO & Co-CIO (Crunchbase; Level III Capital website)
- Twitter/X: @jackzumwalt — follower count not retrievable (YC page)
- LinkedIn: linkedin.com/in/jack-zumwalt — 500+ connections (LinkedIn)
- GitHub: No public repos found

**Mauricio Ortiz** — Co-founder & CTO
- B.S. Computer Science, University of Texas Rio Grande Valley (2017–2019) (LinkedIn)
- Goldman Sachs: CIMD Software Engineer (2019); Consumer Wealth Management, Critical Infrastructure DevOps Engineer maintaining Marcus (2020–2021) (LinkedIn; Level III Capital website)
- Co-founded Level III Capital (2021); CTO & Co-CIO, architecting systematic trading systems (Level III Capital website)
- Listed on Toptal as a top AWS developer (Toptal profile)
- Twitter/X: @ortizmauricio_ — follower count not retrievable (YC page)
- LinkedIn: linkedin.com/in/ortizmauricio01 (YC page)
- GitHub: No public repos found

**Adrian Del Bosque** — Co-founder & Founding Engineer
- B.S. Computer Science, University of Texas Rio Grande Valley (2018–2020) (LinkedIn)
- SpaceX: Automation and Controls Intern (2020) (LinkedIn)
- Vistra Corp.: Cloud and Platform Engineer (2023–2024), then Senior Cloud Engineer (2024–2025) (LinkedIn)
- Level III Capital: Partner & Principal Engineer (2021–present), leading trading infrastructure and data processing systems (Level III Capital website)
- Twitter/X: @adriandelb — 5 followers, protected tweets (YC page; search results)
- LinkedIn: linkedin.com/in/adriandelbosque — 361 connections (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Jack Zumwalt and Mauricio Ortiz overlapped at Goldman Sachs (~2019–2021) before co-founding Level III Capital in 2021 (LinkedIn profiles). Mauricio Ortiz and Adrian Del Bosque both attended UT Rio Grande Valley with overlapping years (2018–2019) (LinkedIn profiles). All three have worked together at Level III Capital since 2021 — approximately 4 years of collaboration prior to Kimpton's public launch.

**Founder-market fit:** All three founders built and operated quantitative trading infrastructure at Level III Capital, giving them direct experience with the problem Kimpton addresses. Jack and Mauricio's Goldman Sachs tenure provides institutional finance context. Kimpton originated as Level III Capital's internal tech stack, meaning the founders were their own first users (Level III Capital blog post). Adrian's cloud infrastructure experience at Vistra Corp. and SpaceX adds platform engineering depth.

## Key Risks

**Name confusion with Kimpton Hotels:** "Kimpton" is primarily associated with Kimpton Hotels & Restaurants (IHG brand). This creates SEO competition and potential brand confusion in search results, making organic discovery harder.

**Regulatory exposure:** Proposing structured trades and running a prediction engine may trigger SEC or FINRA scrutiny depending on whether recommendations constitute investment advice. Mezzi has addressed this by registering as an SEC RIA (Mezzi website). No regulatory registration for Kimpton AI was found in public records. If the platform is deemed to be providing personalized investment advice, it may need RIA registration or a broker-dealer relationship.

**LLM reliability in financial computation:** The platform runs sandboxed Python analyses driven by LLM-generated code. Errors in code generation, data interpretation, or Monte Carlo parameterization could produce materially misleading trade proposals. The CEO noted each prompt takes ~2 minutes (LinkedIn launch post, November 2025), suggesting computational complexity that increases the surface area for errors.

**Concentration in founding team's network:** All three founders share a Texas/Goldman Sachs/Level III Capital background. The company LinkedIn lists Dallas as the address despite the YC page listing San Francisco. [Inferred]: The team's professional network may be concentrated in quantitative trading circles, potentially limiting early distribution to a narrow user segment.

**Platform dependency on Plaid:** Brokerage connectivity relies on Plaid for 2,500+ integrations (YC page). Changes to Plaid's API, pricing, or data access policies would directly impact Kimpton's core portfolio-connectivity feature.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.5B (2023) growing to $14.1B by 2030 at 22.1% CAGR (ResearchAndMarkets, 2024 via search snippet) |
| SAM | No public data found |
| Traction | 571 Twitter followers (search results, Mar 2026); 1,251 LinkedIn followers (LinkedIn, Mar 2026); launched Nov 10, 2025 (Jack Zumwalt LinkedIn post) |
| Revenue Signal | No public data found |
| Founders | Jack Zumwalt (CEO): Goldman Sachs, co-founded Level III Capital. Mauricio Ortiz (CTO): Goldman Sachs, co-founded Level III Capital, Toptal AWS developer. Adrian Del Bosque (Founding Engineer): SpaceX intern, Vistra Corp. Sr. Cloud Engineer, Level III Capital partner. |
| Competitors | AlphaSense (~$1.4B raised, $500M+ ARR, enterprise NLP focus); Reflexivity ($40.5–48.7M raised, $3.2M revenue, institutional AI co-pilot); Composer ($16.7M raised, revenue unknown, automated strategy execution); Mezzi (~$1.76M raised, revenue unknown, SEC-registered RIA); FinChat/Fiscal.ai ($1.75M raised, revenue unknown, conversational financial AI) |
| Moat Signals | No public data found |
| Risk Factors | Brand confusion with Kimpton Hotels, regulatory exposure (no RIA registration found), LLM reliability in financial computation |
| Founder Reach | Jack Zumwalt: Twitter @jackzumwalt (count not retrievable), LinkedIn 500+ connections. Mauricio Ortiz: Twitter @ortizmauricio_ (count not retrievable), LinkedIn profile found. Adrian Del Bosque: Twitter @adriandelb 5 followers, LinkedIn 361 connections. (YC page; LinkedIn; search results) |
| Distribution Signals | LinkedIn launch post 81 likes/13 comments (Nov 2025); no Product Hunt listing; no app store presence; no Chrome extension (search results, Mar 2026) |
| Emails | No public data found |
