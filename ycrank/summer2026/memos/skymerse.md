# Skymerse

> Autopilot for Flight Operations

| Field | Value |
|-------|-------|
| Website | https://skymerse.com |
| YC Page | https://www.ycombinator.com/companies/skymerse |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Aviation and Space |
| Team Size |  |
| Location | San Francisco, CA, USA |
| Tags | Airlines, Aerospace, AI |
| YC Partner | Gustaf Alstromer |
| Emails | hello@skymerse.com |

## The Idea

- **Problem:** Airline dispatchers and flight crews must reconcile NOTAMs, weather, procedures, aircraft limits, and operator requirements across separate systems, with Skymerse stating that flight planning can require three hours per flight ([Skymerse](https://www.skymerse.com/), Jul 2026).
- **Approach:** Skymerse ingests an operator’s schedule and continuously checks each flight against live NOTAMs, weather, runway constraints, aircraft limits, operating manuals, minimum-equipment lists, and company minima to produce flight-specific verdicts and alerts ([Skymerse](https://www.skymerse.com/), Jul 2026).
- **Differentiation:** Unlike source-oriented NOTAM, weather, chart, and flight-planning tools, Skymerse is designed to preserve a common operational context from planning and dispatch through monitoring and cockpit support ([Skymerse launch post](https://www.skymerse.com/blog/introducing-skymerse), Jul 2026).
- **Business Model:** Notamify offers a free Basic plan, a $24.90-per-month Pro subscription with a seven-day trial and 50 included API credits, subsequent credit-based API pricing, and custom Enterprise contracts covering seats, operating volume, data access, integrations, and support ([Notamify pricing](https://www.notamify.com/), Jul 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Skymerse solicits demonstrations with airlines, cargo operators, business-jet operators, and medevac providers and pilots the enterprise product against customers’ airports, volumes, feeds, and workflows ([Skymerse introduction](https://notamify.com/introducing-skymerse), Jul 2026; [Notamify Enterprise](https://www.notamify.com/enterprise), Jul 2026).

## Defensibility

- **Moat today:** Skymerse reports a custom aeronautical model, AIP extraction agents, structured NOTAM interpretation, client-specific operating data, and more than three million NOTAMs processed through Notamify ([Skymerse](https://www.skymerse.com/), Jul 2026; [Notamify blog](https://notamify.com/blog), May 2026).
- **Future moat:** [Inferred]: Repeated processing of operator-specific manuals, flight constraints, corrections, and operational decisions could create proprietary evaluation data, but no public evidence establishes its scale or exclusivity.
- **Market structure:** No structural barrier identified at this stage, as airline-planning incumbents already control operational integrations and can add decision-oriented data services.
- **Commoditization risk:** Boeing’s Jeppesen/ForeFlight introduced Airflow for serving aeronautical data to AI agents, while Flightkeys and Air Space Intelligence already apply optimization software or machine learning to airline flight operations ([industry commentary](https://www.linkedin.com/posts/sam-chandra_jeppesen-enters-the-arena-activity-7479668548139704320-u5lP), Jul 2026; [Flightkeys](https://www.flightkeys.com/index.html); [Andreessen Horowitz](https://a16z.com/announcement/investing-in-air-space-intelligence/)).

## Market & Traction

- **Traction signals:**
  - Notamify had more than 3,500 registered users ([Notamify](https://www.notamify.com/), Jul 2026).
  - Skymerse states that Notamify serves thousands of users daily and is in production with airline customers ([Skymerse](https://www.skymerse.com/), Jul 2026).
  - LOT Polish Airlines uses Notamify for network-airport NOTAM monitoring and automated operational alerts ([Notamify for airlines](https://www.notamify.com/enterprise), Jul 2026).
  - Baldwin Safety and Compliance is displayed as a Notamify partner ([Notamify](https://www.notamify.com/), Jul 2026).
  - Skymerse’s LinkedIn company page had 134 followers and listed a company-size range of 2–10 employees ([LinkedIn](https://www.linkedin.com/company/skymerse), Jul 2026).
  - YC listed zero active Skymerse jobs ([Y Combinator](https://www.ycombinator.com/companies/skymerse), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Air Space Intelligence ($34M raised, revenue unknown): Flyways applies machine learning to route selection using traffic, weather, and airport conditions, while Skymerse also covers NOTAM interpretation, company procedures, and cockpit support ([Aviation Week](https://aviationweek.com/defense/budget-policy-operations/air-space-intel-raises-34m-machine-learning-run-flight-ops), Dec 2023).
  - Flightkeys (funding amount undisclosed, revenue unknown): its 5D platform concentrates on flight planning, trajectory optimization, cost, emissions, and air-traffic-management integration rather than Skymerse’s stated end-to-end operational decision context ([Flightkeys](https://www.flightkeys.com/index.html); [Insight Partners announcement](https://www.prnewswire.com/news-releases/flightkeys-announces-strategic-growth-investment-from-insight-partners-302253741.html), Sep 2024).
  - Portside (more than $70M raised, revenue unknown): its platform manages schedules, dispatch, financial, maintenance, and ownership data for business aviation, whereas Skymerse targets aeronautical constraint interpretation across airline flights ([TechCrunch](https://techcrunch.com/2023/02/01/portside-50m-business-aviation-startup/), Feb 2023).
  - Assaia ($26.6M raised, revenue unknown): its AI platform monitors airport turnaround and apron operations rather than planning-to-cockpit flight decisions ([Assaia](https://www.globenewswire.com/news-release/2025/12/09/3202401/0/en/assaia-raises-26-6-million-in-series-b-funding-to-enhance-global-ai-leadership-in-airport-operations.html), Dec 2025).
- **Why now:** [Inferred]: Jeppesen’s 2026 Airflow launch and Skymerse’s contemporaneous launch indicate that aeronautical data is being packaged for AI-agent consumption, enabling software to interpret operational inputs rather than only display them ([industry commentary](https://www.linkedin.com/posts/sam-chandra_jeppesen-enters-the-arena-activity-7479668548139704320-u5lP), Jul 2026).

## Founders & Team

- **Damian Szumski (Founder):**
  - Background: Szumski is a licensed flight dispatcher who previously owned Flightradar24’s API product and worked at FLYR, LOT Polish Airlines, and Lufthansa Systems; he holds an advanced-analytics master’s from SGH Warsaw School of Economics and an aeronautics and space-technology engineering degree from Rzeszow University of Technology ([Y Combinator](https://www.ycombinator.com/companies/skymerse); [The Org](https://theorg.com/org/flightradar24/org-chart/damian-szumski)).
  - Twitter/X: No public personal account found; count not retrievable.
  - LinkedIn: “Founder at Skymerse (YC S26); Licensed Flight Dispatcher; previously Product Owner at Flightradar24 API” ([Y Combinator-linked profile](https://www.linkedin.com/in/damian-szumski/)).
  - GitHub: No public personal repos found; the @skymerse organization has four public FAA SWIM forks with zero stars each ([GitHub](https://github.com/skymerse), Jul 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Szumski’s dispatcher license, aeronautics education, airline-operations roles at LOT and FLYR, aeronautical-chart work at Lufthansa Systems, and API product role at Flightradar24 document experience across the workflows and data sources Skymerse targets ([Y Combinator](https://www.ycombinator.com/companies/skymerse); [The Org](https://theorg.com/org/flightradar24/org-chart/damian-szumski)).

## Key Risks

- **Safety-critical output risk:** Notamify’s terms state that its outputs cannot be the sole or authoritative basis for flight planning, navigation, or safety-critical decisions and must be checked against official sources, limiting the scope of unattended automation ([Notamify Terms](https://notamify.com/terms), Jul 2026).
- **Incumbent overlap:** Jeppesen/ForeFlight launched Airflow for supplying aeronautical data to AI agents, creating product overlap from a provider already embedded in aviation workflows ([industry commentary](https://www.linkedin.com/posts/sam-chandra_jeppesen-enters-the-arena-activity-7479668548139704320-u5lP), Jul 2026).
- **Data-source dependency:** Skymerse’s decisions depend on third-party and public aeronautical data, while its terms disclaim guaranteed accuracy, completeness, and timeliness because NOTAM information changes dynamically ([Notamify Terms](https://notamify.com/terms), Jul 2026).
- **Product-transition attribution:** Public traction figures primarily refer to Notamify, the first product, rather than deployments of Skymerse’s broader planning-to-cockpit system ([Skymerse launch post](https://www.skymerse.com/blog/introducing-skymerse), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 3,500+ registered Notamify users (Notamify, Jul 2026); thousands of daily users and airline customers in production (Skymerse, Jul 2026); LOT Polish Airlines deployment (Notamify Enterprise, Jul 2026) |
| Revenue Signal | Free Basic plan; Pro at $24.90/month with seven-day trial and 50 API credits; custom Enterprise pricing (Notamify pricing, Jul 2026) |
| Founders | Damian Szumski (Founder): licensed flight dispatcher, former Flightradar24 API Product Owner, advanced-analytics and aeronautics graduate (Y Combinator; The Org, Jul 2026) |
| Competitors | Air Space Intelligence ($34M raised, revenue unknown, AI route optimization; Aviation Week, Dec 2023); Flightkeys (funding undisclosed, revenue unknown, trajectory and flight-planning optimization; Insight Partners, Sep 2024); Portside ($70M+ raised, revenue unknown, business-aviation operations platform; TechCrunch, Feb 2023); Assaia ($26.6M raised, revenue unknown, airport-turnaround AI; Assaia, Dec 2025) |
| Moat Signals | Custom aeronautical model, AIP extraction agents, client-specific operating data, and 3M+ processed NOTAMs (Skymerse; Notamify blog, May–Jul 2026) |
| Risk Factors | Safety-critical outputs require independent verification (Notamify Terms, Jul 2026), Jeppesen product overlap (LinkedIn industry commentary, Jul 2026), reliance on dynamic third-party data (Notamify Terms, Jul 2026) |
| Founder Reach | No public data found |
| Distribution Signals | 134 LinkedIn followers (LinkedIn, Jul 2026); zero active YC job listings (Y Combinator, Jul 2026) |
| Emails | hello@skymerse.com (Skymerse contact page, Jul 2026) |
