# Condor Energy

> Energy OS enabling reliable, cheap and sustainable electricity supply.

| Field | Value |
|-------|-------|
| Website | https://www.condor.energy |
| YC Page | https://www.ycombinator.com/companies/condor-energy |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 3 |
| Location | France and United States (Nordic 9, Jan 2026) |
| Tags | B2B, Energy |
| YC Partner | Jared Friedman (YC page) |
| Emails | founders@condor.energy (company website), jean@condor.energy (YC page) |

## The Idea

**Problem:** Large electricity consumers — C&I companies, retail chains, and data centers — spending over €1M annually on electricity face increasing complexity in managing procurement, hedging, and investment decisions as grids shift toward intermittent renewables. The traditional approach involves fragmented tools, manual spreadsheet-based analysis, and reliance on external energy consultants or traders who lack real-time integration with operational data. The YC page states Condor helps these businesses "cut electricity bills by up to 20%" (YC page). The company's own research involved "interviews with 200+ companies spending millions of euros per year on power" (Crunchbase/YC search snippet via search snippet).

**Approach:** Condor provides an AI-powered "Energy OS" that aggregates consumption data, power purchase agreements (PPAs), solar PV systems, battery energy storage systems (BESS), and wholesale market data into unified dashboards (condor.energy). The platform offers three core capabilities: (1) real-time monitoring and forecasting of energy costs by facility, tracking "every kilowatt-hour and every euro" (condor.energy); (2) price risk management with hedging strategy modeling and board-ready reporting (condor.energy); and (3) asset investment analysis (capex screening) that sizes behind-the-meter assets (EV chargers, hybrid furnaces, batteries) and quantifies ROI with NPV/IRR calculations (condor.energy).

**Differentiation:** Unlike demand response platforms such as Voltus, which focus on monetizing load flexibility for grid services, Condor focuses on the buyer side — helping large consumers optimize procurement, hedging, and investment decisions holistically. Unlike Pexapark, which serves renewable energy sellers and developers with PPA pricing and risk analytics, Condor serves energy buyers. Unlike Granular Energy, which provides hourly energy certificate tracking for utilities, Condor targets the C&I consumer directly with operational cost management. Condor combines procurement analytics, forecasting, hedging, and capex screening into a single integrated platform rather than offering point solutions.

**Business Model:** No pricing information is publicly visible on the website (condor.energy). [Inferred]: Most likely monetization path is SaaS subscription fees charged to large electricity consumers, potentially tiered by number of sites or consumption volume, given the B2B enterprise nature of the product and the focus on companies spending >€1M/year on electricity.

**TAM/SAM:** The global energy management software market was estimated at $16.2B in 2025 and is projected to reach $31.17B by 2032 at a 9.7% CAGR (Research and Markets, 2025 via search snippet). The energy portfolio management market — a more specific sub-segment covering procurement and hedging — was estimated at $2.95B in 2025 and projected to reach $8.67B by 2035 (Precedence Research, 2025 via search snippet). No company-specific SAM estimate was found.

**GTM / Distribution:** The company is "live with a leading data center operator, large retail chains and European industrial companies" in Europe and is "launching in the US" (YC page via search snippet). Target customers are businesses in the US and France spending over €1M annually on electricity (YC page). [Inferred]: Direct enterprise sales to large C&I customers, likely starting in France given the founders' location and network, with US expansion enabled by YC connections and the data center opportunity.

## Defensibility

The platform integrates granular consumption data, PPA contracts, behind-the-meter asset data, and wholesale market feeds into a unified system. Over time, accumulating site-level load profiles, market data, and hedging outcomes across multiple customers creates a proprietary data asset that improves forecasting and investment recommendations. Switching costs increase as clients embed Condor into their procurement workflows and investment decision-making processes.

**Market structure:** Traditional energy consultants and brokers operate on transaction-based fee models (commissions per MWh traded), creating a structural misalignment with an ongoing SaaS subscription that optimizes the buyer's total cost. Utility and energy supplier incumbents face a channel conflict: recommending a tool that reduces customer spend directly conflicts with their revenue model. Large enterprise software vendors (e.g., SAP, Schneider Electric EMS) have energy management modules, but these are designed primarily for facility-level monitoring rather than procurement optimization and hedging — entering this space would require building financial trading and risk management capabilities outside their core competency.

**Commoditization risk:** The individual components — energy dashboards, price forecasting, hedging analytics — are not technically unique. Energy trading firms, management consultancies, and enterprise software vendors could build similar features. The barrier is the integrated workflow combining real-time consumption data, market feeds, hedging execution, and capex screening into a single platform purpose-built for the C&I buyer, plus domain expertise in European and US power markets. At this stage, commoditization risk is material.

## Market & Traction

1. **Traction signals:** The company is "live with a leading data center operator, large retail chains and European industrial companies" (YC page via search snippet). No specific customer names, revenue figures, user counts, or growth metrics are publicly disclosed. Condor received $500,000 in funding from Y Combinator (Nordic 9, Jan 10, 2026). The company website shows a demo account with illustrative portfolio data (12,847 MWh consumption, €930K total spend, 68% hedging coverage) but these are demo figures, not confirmed customer metrics (condor.energy). No Product Hunt launch was found. No Twitter/X account was found for the company. LinkedIn company page exists at linkedin.com/company/condorenergy (condor.energy); follower count not retrievable. No Discord or Slack community found. No app store or Chrome extension presence found.

2. **Competitive landscape:**

   - **Voltus** ($121M raised, ~$35M annual revenue as of Aug 2025; Crunchbase/Owler via search snippet): Focuses on demand response and distributed energy resource (DER) monetization, helping C&I customers earn revenue from grid services. Differs from Condor in that Voltus monetizes flexibility on the sell side, while Condor optimizes procurement costs on the buy side.
   - **Pexapark** (~€41.65M raised, ~$15.5M revenue in 2023; CB Insights/Crunchbase via search snippet): Provides renewable energy sales software and advisory for PPA pricing, risk analytics, and portfolio management. Serves energy sellers/developers rather than energy buyers. Headquartered in Switzerland.
   - **Granular Energy** (€10.5M total raised; energystartups.org via search snippet): Paris-based startup providing hourly energy certificate tracking software for utilities, used by 25 utilities across 9 countries (granular-energy.com via search snippet). Focuses on transparency and certificate management rather than procurement optimization and hedging for C&I buyers.
   - **Gridmatic** (~$40M raised; Crunchbase via search snippet): Offers retail energy supply service with optimized clean energy purchasing and automated contracts for C&I customers, initially in Texas. More focused on energy supply/retail rather than enterprise-grade procurement analytics and hedging.

3. **Why now:** [Inferred]: Several converging factors have opened this opportunity. The rapid expansion of intermittent renewables (solar and wind) on European and US grids has increased wholesale price volatility, making sophisticated hedging and forecasting critical for large consumers. The explosion in data center construction driven by AI workloads has created a new class of very large electricity buyers who need procurement tools. The EU's energy crisis of 2022-2023 heightened awareness among C&I buyers of electricity cost risk, driving demand for active procurement management. Additionally, regulatory changes around hourly energy matching and granular certificates in Europe create demand for tools that track consumption at granular time resolutions.

## Founders & Team

**Jean Costa de Beauregard** — Co-founder & CEO
- Education: X-HEC Entrepreneurs (MSc program jointly run by École Polytechnique and HEC Paris) (LinkedIn via search snippet)
- Previously worked on hydropower plants in France alongside co-founder Clément Grivel (YC page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/jean-costa-de-beauregard — "Condor Energy (YC W26)" (LinkedIn via search snippet), 500+ connections
- GitHub: No public repos found

**Clément Grivel** — Co-founder & CTO
- Education: UCL (University College London) (LinkedIn via search snippet); also attended X-HEC Entrepreneurs (LinkedIn via search snippet)
- Previously worked on hydropower plants in France alongside co-founder Jean Costa de Beauregard (YC page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/clément-grivel — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Florian Pérocheau** — Co-founder & CPO
- Education: Audencia Grande École (2018-2020) (LinkedIn via search snippet)
- Former equity quant and power trader (LinkedIn via search snippet); previously at Voltalis (a French demand-response company) as Power Markets Engineer (LinkedIn/RocketReach via search snippet); prior experience at BDL Capital Management (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/florian-perocheau — listed with Voltalis affiliation (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Jean Costa de Beauregard and Clément Grivel both attended X-HEC Entrepreneurs and worked together on hydropower plants in France (YC page). They met Florian Pérocheau in France, where Florian was trading power (YC page).

**Founder-market fit:** The team combines direct operational experience in energy infrastructure (Jean and Clément on hydropower) with quantitative trading and power market expertise (Florian as a former power trader and equity quant). This combination of energy systems engineering and financial trading experience maps directly to Condor's product, which bridges operational energy management with financial hedging and investment analysis. The team's European energy market background is relevant to their initial customer base of European C&I companies.

## Key Risks

**Brand disambiguation with multiple "Condor Energy" entities:** At least three other companies share the "Condor Energy" name — Condor Energies Inc. (TSX-listed, Calgary, Central Asian gas assets), Condor Energy Ltd (ASX-listed, Australian oil & gas), and Condor Energy Services Limited (Australia). This creates search confusion and potential brand challenges for the YC startup, particularly when seeking press coverage or customer trust.

**European-to-US market expansion complexity:** The team's experience and initial customer base are in European power markets (YC page mentions France). US electricity markets are structurally different — fragmented across ISOs/RTOs, with different regulatory regimes, tariff structures, and procurement norms. Adapting the product and go-to-market for the US market requires substantial market-specific development. The company lists both France and US as locations (Nordic 9, Jan 2026).

**Long enterprise sales cycles with large C&I buyers:** Targeting businesses spending >€1M/year on electricity means selling to procurement teams and CFOs at large organizations. These deals typically involve extended evaluation periods, security reviews, and integration requirements. With a 3-person team, managing parallel enterprise sales processes across two geographies is resource-intensive.

**Incumbent energy consultants and trading desks:** Large C&I customers often have existing relationships with energy brokers, consultants, and their utility providers' key account managers. Displacing entrenched advisory relationships requires demonstrating clear, quantifiable superiority — the "up to 20%" savings claim (YC page) would need to be substantiated in practice to overcome inertia.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $16.2B energy management software market in 2025, projected $31.17B by 2032 at 9.7% CAGR (Research and Markets via search snippet); $2.95B energy portfolio management sub-segment in 2025 (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | Live with "a leading data center operator, large retail chains and European industrial companies" (YC page via search snippet); no specific customer names, user counts, or revenue disclosed |
| Revenue Signal | No public data found |
| Founders | Jean Costa de Beauregard (CEO): X-HEC Entrepreneurs, ex-hydropower operations. Clément Grivel (CTO): UCL, X-HEC Entrepreneurs, ex-hydropower operations. Florian Pérocheau (CPO): Audencia, ex-power trader, ex-Voltalis, ex-BDL Capital Management |
| Competitors | Voltus ($121M raised, ~$35M ARR, demand response/DER monetization vs. Condor's buyer-side procurement optimization); Pexapark (~$41.65M raised, ~$15.5M revenue 2023, serves energy sellers vs. Condor's energy buyers); Granular Energy (€10.5M raised, revenue unknown, utility-facing certificate tracking vs. Condor's C&I buyer-facing cost management); Gridmatic (~$40M raised, revenue unknown, retail energy supply vs. Condor's analytics/hedging platform) |
| Moat Signals | Integrated data asset potential from aggregating client consumption, PPA, and market data; switching costs from workflow embedding; domain expertise in European power markets |
| Risk Factors | Brand disambiguation with multiple "Condor Energy" entities, European-to-US market expansion complexity, long enterprise sales cycles with 3-person team, incumbent energy consultant displacement |
| Founder Reach | Jean Costa de Beauregard: Twitter not found, LinkedIn 500+, GitHub not found. Clément Grivel: Twitter not found, LinkedIn 500+, GitHub not found. Florian Pérocheau: Twitter not found, LinkedIn handle found, GitHub not found |
| Distribution Signals | No Product Hunt launch found; no app store or extension presence; LinkedIn company page exists (follower count not retrievable) |
| Emails | founders@condor.energy (company website), jean@condor.energy (YC page) |
