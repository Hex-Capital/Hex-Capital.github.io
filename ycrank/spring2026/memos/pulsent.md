# Pulsent

> AI Agents that watch, engage and convert your users.

| Field | Value |
|-------|-------|
| Website | https://pulsent.ai/ |
| YC Page | https://www.ycombinator.com/companies/pulsent |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Sales |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, B2B, Sales Enablement, Monitoring |
| YC Partner | David Lieb |
| Emails | No public data found |

## The Idea

**Problem:** As B2B SaaS companies scale, founders, account managers, and customer success teams can only personally attend to a small fraction of users (YC company description). The rest receive generic, poorly timed communication; opportunities are missed, customers churn, and revenue is lost. User behavior data is fragmented across tools like PostHog, Stripe, and Salesforce, making real-time understanding of individual users impractical (YC company description). Current solutions fall into two camps: analytics platforms (PostHog, Mixpanel, Heap) that observe but do not act, and engagement platforms (Intercom, Customer.io) that act but lack behavioral context (pulsent.ai).

**Approach:** Pulsent unifies behavioral data from analytics tools (PostHog, Mixpanel, Amplitude), data warehouses (Snowflake, BigQuery), and CRMs (Attio) into a single view, then deploys AI agents that autonomously monitor user sessions, detect expansion and churn signals, prioritize high-value accounts, and generate hyper-personalized messages delivered through Intercom, Loops, and Customer.io (pulsent.ai). The company states this was enabled by advances in visual AI (December 2025) that allow agents to watch sessions and understand behavior "at human or better level" (YC company description). The agents also execute across email, LinkedIn, and WhatsApp (YC company description).

**Differentiation:** Unlike analytics-only tools (PostHog, Heap, Mixpanel), Pulsent closes the loop from observation to action. Unlike engagement platforms (Intercom, Customer.io), it builds behavioral understanding from unified data before acting. Unlike Pendo/Userpilot, which focus on in-app guides and onboarding flows, Pulsent operates across external channels (email, LinkedIn, WhatsApp) and targets conversion/retention rather than product adoption (pulsent.ai). The closest defunct comparables—Toplyne ($17.5M raised, shut down; TechCrunch, May 2022) and Correlated ($8.3M seed; TechCrunch, March 2023)—focused on PLG signal identification for human sales reps rather than autonomous agent execution.

**Business Model:** No pricing is publicly disclosed on the website (pulsent.ai). [Inferred]: Most likely monetization is SaaS subscription, potentially consumption-based (per event or per user monitored), given the data-pipeline-heavy architecture and the "hundreds of millions of events daily" claim.

**TAM/SAM:** The global customer engagement solutions market was valued at approximately $25.5–29.4B in 2025, growing at ~10–11% CAGR (Mordor Intelligence, 2025; Precedence Research, 2025 via search snippet). No public SAM estimate specific to AI-powered PLG conversion tools was found.

**GTM / Distribution:** Three customer testimonials on the website reference B2B SaaS co-founders (Pletor, Leadbay/YC F25, Basalt) (pulsent.ai). The YC description states "strong demand from PLG B2B Clients" (YC company description). [Inferred]: Primary distribution is likely founder-led sales into the YC network and PLG SaaS companies, leveraging the YC S26 cohort and adjacent batches.

## Defensibility

- **Data unification layer:** Integrating behavioral data across PostHog, Mixpanel, Amplitude, Snowflake, BigQuery, Stripe, Salesforce, and Attio creates a switching cost once configured, as customers would need to re-map data pipelines (pulsent.ai).
- **Feedback loop:** The company claims continuous learning and optimization of message timing and content (pulsent.ai). [Inferred]: If the agent improves per-account over time, accumulated behavioral models could create a data moat, but this is unproven at this stage.

**Market structure:** Incumbent analytics platforms (PostHog, Mixpanel) have no native engagement execution capability and would need to build or acquire it; incumbent engagement platforms (Intercom) have recently added AI features (Fin AI Agent, approaching ~$100M ARR; Sacra, 2024) but these focus on reactive support, not proactive conversion from behavioral signals. [Inferred]: The structural gap is that analytics vendors risk channel conflict by becoming engagement senders, while engagement vendors lack deep product-analytics data pipelines.

**Commoditization risk:** The core components—LLM-powered message generation, event stream ingestion, session replay analysis—are accessible via commercial APIs and open-source tools. Pendo, Intercom, and Userpilot all have engineering teams 100x+ larger. [Inferred]: The integration layer is reproducible; defensibility depends on execution speed and accumulated training data per customer.

## Market & Traction

**Traction signals:**
- Paying customers exist (YC company description; no count or revenue figure disclosed)
- "Hundreds of millions of events daily" processed (YC company description)
- Three named customer testimonials: Pletor (Maxime Fonsale, co-founder), Leadbay/YC F25 (Ludovic Granger, co-founder), Basalt (Guillaume Marquis, co-founder) (pulsent.ai)
- No Product Hunt launch found
- No press coverage in named publications found
- Company Twitter/X account: not found
- Company LinkedIn page: not found via search
- Discord/Slack community: not found
- Nicolò Magnante Twitter: @NicoloMagnante, ~7 followers (X.com via search snippet)
- Arseniy Shishaev Twitter: @arseniyswish, follower count not retrievable (YC page)
- No app store or Chrome Web Store listings found
- No job postings found; company is not currently hiring (YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Pulsent |
|---|---|---|---|
| **Intercom** | $242M+ raised, $1.28B valuation (Sacra, 2024) | ~$343M revenue (Getlatka, 2024) | Comprehensive messaging platform with Fin AI agent; reactive customer support focus rather than proactive PLG conversion |
| **Pendo** | $469.6M raised, $2.6B valuation (Getlatka, 2025) | ~$300M revenue (Getlatka, 2025) | In-app guides + product analytics; no autonomous cross-channel outbound engagement |
| **Userpilot** | $4.73M raised (Crunchbase) | ~$15M revenue (Getlatka, Jul 2025) | PLG onboarding + analytics; limited to in-app, no email/LinkedIn/WhatsApp execution |
| **Toplyne** (shut down) | $17.5M raised (TechCrunch, May 2022) | N/A—returned capital to investors (Indian Startup News) | Identified PLG conversion signals for human reps; did not autonomously execute; failed to reach PMF |

**Why now:** The company cites advances in visual AI (December 2025) as the enabling catalyst, allowing agents to watch user sessions and understand behavior at a level previously impossible (YC company description). [Inferred]: The convergence of multimodal LLMs capable of interpreting screen recordings, falling inference costs, and the maturation of product analytics APIs (PostHog, Mixpanel) collectively made real-time behavioral-to-action loops technically and economically feasible in late 2025.

## Founders & Team

**Nicolò Magnante** — Founder & CEO
- Education: HEC Paris, Startup Launchpad program 2024 (HEC Paris)
- Career: Consultant at Bain & Company; BrightHouse division at BCG Milan; "CEO Right Hand" at OVRSEA (RocketReach via search snippet)
- Prior startup: Co-founded Bluco (AI recruitment, 2024), which won £25K AXA Startup Angel grant, had clients including Porsche, Trenord railways, and Free Telecoms (AXA UK, 2024; STATION F, Jan 2025)
- YC description states he "scaled two startups to millions in ARR" (YC company description)
- Twitter/X: @NicoloMagnante — ~7 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/nicolò-magnante/ — "Pulsent (YC P26) | Ex BCG | Ex Bluco" (LinkedIn via search snippet)
- GitHub: No public repos found

**Arseniy Shishaev** — Co-Founder & CTO
- Education: 42 engineering school, Paris (2019–2022) (arseniy.wtf)
- Career: Software Engineer at Datadog (2021–2024), built tools for internal Data & Analytics platform managing "hundreds of millions of data assets using complex recursive queries" (arseniy.wtf)
- Prior startup: Co-founded Bluco with Nicolò (STATION F, Jan 2025)
- Twitter/X: @arseniyswish — follower count not retrievable (YC page)
- LinkedIn: linkedin.com/in/arseniy-shishaev/ — "Swish" (LinkedIn via search snippet)
- GitHub: github.com/dd-ashishaev — 3 forked repos (Luigi, apigentools, tax-helper), 1 follower (GitHub)

**Co-founder relationship:** Nicolò and Arseniy co-founded Bluco together in 2024 alongside a third co-founder, Francisco Shirazi (STATION F, Jan 2025). They were both at STATION F in Paris. The YC description states they have "worked together for 3+ years" (YC company description).

**Founder-market fit:** Arseniy's Datadog tenure (2021–2024) handling large-scale data pipelines maps directly to Pulsent's event-processing core (arseniy.wtf). Nicolò's consulting background (Bain, BCG) and claim of scaling two prior startups to millions in ARR provides go-to-market experience (YC company description). Their prior startup Bluco involved AI-powered engagement via messaging apps (STATION F, Jan 2025), providing transferable product intuition for Pulsent's multi-channel agent approach.

## Key Risks

**Product pivot recency:** The team pivoted from Bluco (AI recruitment) to Swish/Pulsent (AI user engagement) in early 2026. Nordic 9 lists the company as formerly "Swish" (Nordic 9). Rapid pivots can indicate market learning but also mean current product maturity and PMF are very early. The "hundreds of millions of events" claim from the YC description may predate the current Pulsent product form.

**Toplyne precedent:** Toplyne, the closest comparable (PLG conversion signals for B2B SaaS), raised $17.5M from Tiger Global and Sequoia, then shut down and returned capital after failing to reach product-market fit (Indian Startup News). This suggests the PLG-conversion category has structural challenges around buyer willingness to pay and integration complexity.

**Incumbent encroachment:** Intercom's Fin AI agent is approaching ~$100M ARR (Sacra, 2024) and the company added predictive engagement scores in 2026 that highlight expansion-ready accounts (Demandbase, 2026 via search snippet). Pendo surpassed $200M ARR and is adding AI features (Pendo.io, 2025). Both could extend into proactive conversion without Pulsent's data-unification step.

**Integration dependency:** The product's value depends on customer data flowing from PostHog, Mixpanel, Amplitude, Stripe, Salesforce, Snowflake, and BigQuery (pulsent.ai). API changes, rate limits, or competing integrations from these platforms could disrupt the pipeline. Each new customer requires multi-tool configuration, creating onboarding friction.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$25.5–29.4B customer engagement solutions market in 2025, ~10–11% CAGR (Mordor Intelligence, 2025; Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | Paying customers, "hundreds of millions of events daily" (YC company description, 2026); 3 named customer testimonials (pulsent.ai) |
| Revenue Signal | No public data found |
| Founders | Nicolò Magnante (CEO): ex-Bain, ex-BCG, HEC Paris, co-founded Bluco. Arseniy Shishaev (CTO): ex-Datadog (2021–2024), 42 school, co-founded Bluco. |
| Competitors | Intercom ($242M+ raised, ~$343M revenue, broad messaging platform); Pendo ($469.6M raised, ~$300M revenue, in-app analytics/guides); Userpilot ($4.73M raised, ~$15M revenue, PLG onboarding); Toplyne ($17.5M raised, shut down, PLG signal identification) |
| Moat Signals | No public data found |
| Risk Factors | Product pivot recency, Toplyne category precedent, incumbent AI feature expansion |
| Founder Reach | Nicolò: Twitter ~7 followers (X.com via search snippet), LinkedIn listed. Arseniy: Twitter @arseniyswish count not retrievable, LinkedIn listed, GitHub 3 forked repos / 1 follower (GitHub). |
| Distribution Signals | No public data found |
| Emails | No public data found |
