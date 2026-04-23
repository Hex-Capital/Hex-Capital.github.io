# Trellis

> Autonomous Agents for Short Term Rentals

| Field | Value |
|-------|-------|
| Website | https://trellistech.com |
| YC Page | https://www.ycombinator.com/companies/trellistech |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 6 |
| Location | San Francisco, CA, USA |
| Tags | |
| YC Partner | Nicolas Dessaigne |
| Emails | hello@trellistech.com |

## The Idea

**Problem:** Short-term rental (STR) property managers face exponentially increasing operational complexity as listing counts grow (YC company page). Most managers are stuck between 10 and 50 listings, using 5–10 disconnected software tools with no unified data layer (YC company page). This fragmentation causes reactive operations, declining reviews, lower rates, and homeowner churn (YC company page). The target customer is professional STR operators managing portfolios of 10–150+ units.

**Approach:** Trellis provides a unified platform giving AI agents complete context over operations — communications, tasks, workforce, smart homes, bookings, accounting, and revenue management — to orchestrate work end-to-end (YC company page). Agents monitor multi-channel messages (Airbnb, VRBO, WhatsApp, email), coordinate cleaning and maintenance, file claims, handle guest communication, and manage the full guest journey autonomously (trellistech.com). The platform integrates with 200+ tools including Airbnb, VRBO, Guesty, Hostaway, Breezeway, Stripe, QuickBooks, and PriceLabs (trellistech.com). Mobile apps are available on iOS and Android (trellistech.com).

**Differentiation:** Existing PMS tools (Guesty, Hostaway) are workflow-specific SaaS products without cross-operational AI orchestration. Conduit (YC W24) focuses primarily on AI guest messaging across 77,000+ properties (conduit.ai) but does not unify the full operational stack. Boom offers an AI-powered PMS with agentic features ("BAM") but is structured as a traditional PMS replacement (boomnow.com). Trellis positions itself not as SaaS with AI bolted on, but as "AI that builds your software" — agents that dynamically generate workflows and interfaces per customer (YC launch post). The company claims it reached feature parity with competitors in two weeks (YC company page).

**Business Model:** No pricing information is published on trellistech.com. [Inferred]: Most likely monetization is per-listing SaaS subscription, consistent with STR software industry norms (Guesty, Hostaway, and Boom all use per-listing or tiered pricing).

**TAM/SAM:**
- Global Vacation Rental Software Market: $8.6B in 2024, projected to reach $14.1B by 2034 at 5.10% CAGR (Scoop Market, 2024 via search snippet).
- Alternate estimate: $3.32B in 2024, projected to reach $10.25B by 2033 at 13.5% CAGR (Market Reports World, 2024 via search snippet).
- Overall global STR market: $140B+ in 2025 (Research Nester, 2025 via search snippet).
- [Inferred]: SAM for AI-native operational platforms targeting professional managers with 10–200 listings is a subset of the software TAM; no public SAM estimate found for this specific niche.

**GTM / Distribution:** The company is currently onboarding design partners (YC company page). Jan Sahagun founded STR Tech Report (strtechreport.com), a media platform for STR operators, which provides a direct distribution channel into the target buyer persona (LinkedIn post). [Inferred]: Initial GTM is likely founder-led sales leveraging both founders' deep STR industry networks — Lodovico's operator relationships and Jan's vendor-side and media relationships across EMEA, LATAM, and the US.

## Defensibility

- **Cross-operational data advantage:** The platform's value proposition depends on aggregating context across communications, tasks, workforce, smart homes, bookings, and accounting (YC company page). [Inferred]: As agents process more operations across more companies, the system accumulates resolution patterns, SOPs, and guest intelligence that improve recommendations — a data network effect. This does not exist today but could compound with customer count.
- **Switching costs:** Deep integration across 200+ tools (trellistech.com) and AI agent customization per operator creates operational lock-in once adopted. [Inferred]: Migration cost increases with the number of integrated tools and customized workflows.
- **Network learning:** The company describes a cross-company knowledge network where "every workflow that works, every SOP that survives contact with guests, every resolution pattern" feeds back into the system (YC company page). This network effect is aspirational at the current stage.

**Market structure:** Guesty ($409M raised, $900M valuation; TechCrunch, Apr 2024) and Hostaway ($543M raised, $1B valuation; TechCrunch, Dec 2024) are incumbents built as traditional SaaS PMS platforms. [Inferred]: Rebuilding these platforms as AI-native from the ground up would require cannibalizing existing per-listing subscription revenue and re-architecting legacy codebases — a classic innovator's dilemma. However, both are actively adding AI features, and Boom ($12.7M raised; boomnow.com, 2025) is already positioned as AI-native.

**Commoditization risk:** The company acknowledges that "software is being commoditized" and claims AI agents can replicate SaaS features rapidly (YC company page). This argument cuts both ways — if Trellis can reach feature parity in two weeks, competitors with larger engineering teams and existing customer bases could build similar AI agent layers. Conduit, Boom, and the incumbent PMS platforms are all investing in agentic AI capabilities.

## Market & Traction

**Traction signals:**
- Currently operating one property management company's operations "with 1 person" (YC launch post, Spring 2026)
- Claims 84.5% AI automation rate referenced in analytics dashboard screenshot (trellistech.com)
- Claims operators running 100+ units save ~20 hours weekly (trellistech.com)
- No public revenue, user count, or customer count data found
- Company X/Twitter: @usetrellis — follower count not retrievable
- Company LinkedIn: linkedin.com/company/trellis-str — follower count not retrievable
- Company Instagram: @usetrellis — follower count not retrievable
- Company YouTube: @usetrellis — follower count not retrievable
- No Product Hunt launch found
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. Trellis |
|---|---|---|
| **Guesty** | $409M total, $900M valuation (TechCrunch, Apr 2024) | Enterprise-scale PMS for large portfolios; comprehensive channel management; AI features added incrementally rather than AI-native |
| **Hostaway** | $543M total, $1B valuation (TechCrunch, Dec 2024) | First STR PMS unicorn; all-in-one PMS + channel manager; 50%+ growth since Dec 2024 round (The Host Report, 2025) |
| **Boom** | $12.7M raised (boomnow.com, 2025) | AI-first PMS founded 2023; launched "BAM" agentic AI manager; operates in 20 countries (boomnow.com); closest positioning to Trellis |
| **Conduit** (fka HostAI) | $3.1M seed, YC W24 (TechFundingNews, 2025) | AI guest messaging across 77,000+ properties (conduit.ai); expanding to hotels and long-term rentals; Trellis co-founder Lodovico previously worked here |

**Why now:** [Inferred]: The convergence of LLM capabilities reaching production-grade reliability for multi-step agentic workflows (2024–2025) and the fragmented state of STR operational tooling creates an opening for an AI-native platform that can orchestrate across tool boundaries rather than replacing individual tools. The proliferation of API-first STR tools (200+ integrations on trellistech.com) provides the connective tissue that an agentic layer requires.

## Founders & Team

**Lodovico Benvenuti** — Co-founder
- Previously built AI customer service agents at Conduit (YC W24, formerly HostAI) (YC launch post)
- Scaled a property management company to ~$2M revenue and 150+ listings (YC launch post)
- Featured on AI Rebels podcast discussing GuestAI and AI in STR operations (AI Rebels/Buzzsprout, May 2024)
- Twitter/X: @LodoBenve77 — follower count not retrievable
- LinkedIn: linkedin.com/in/lodovico-benvenuti-11678224a — connections count not retrievable
- GitHub: No public repos found

**Jan Sahagun** — Co-founder
- Industry veteran with sales experience at multiple STR tech companies (YC launch post)
- Account Manager EMEA & LATAM at Besty AI — achieved 116% of sales target in FY25 Q4 (Himalayas.app)
- Previously at Guestway, a hospitality property automation startup (Himalayas.app)
- Previously at Boom (per LinkedIn headline; boomnow.com)
- Founded STR Tech Report (strtechreport.com), a media platform for STR operators (LinkedIn post)
- Education: Grenoble Ecole de Management (2019–2023) (Himalayas.app)
- Previous experience at McGill Investment Club, Mazars (Himalayas.app)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/jan-sahagun-escosa — 500+ connections (search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Both founders have deep STR industry experience. Lodovico worked at Conduit (YC W24) while Jan worked at Besty AI and Boom — all STR technology companies. [Inferred]: Their paths likely crossed through the small STR tech vendor ecosystem, though no specific shared employer or institution was identified.

**Founder-market fit:** Lodovico brings both operator experience (scaling a PM company to 150+ listings and ~$2M revenue) and AI engineering experience (building AI agents at Conduit/YC W24). Jan brings commercial and go-to-market expertise from sales roles at three STR tech vendors (Besty AI, Guestway, Boom) and owns an STR media property (STR Tech Report) that provides direct access to the target buyer. The combination covers product/engineering, operations, and distribution within the STR vertical.

## Key Risks

**Competitor provenance and IP exposure:** Lodovico previously built AI agents at Conduit (YC W24), a direct competitor also building AI for STR operations; Jan previously worked at Boom, another AI-first STR competitor (YC launch post; LinkedIn). This raises potential non-compete, IP contamination, or relationship friction risks with former employers operating in the same market.

**Name collision:** Multiple companies operate under the "Trellis" brand across SaaS, legal tech, healthcare, and real estate (search results return 10+ distinct entities). This creates SEO competition, brand confusion, and potential trademark challenges as the company scales.

**Crowded and well-funded competitive landscape:** The AI-for-STR space has attracted significant capital: Guesty ($409M; TechCrunch, Apr 2024), Hostaway ($543M; TechCrunch, Dec 2024), Boom ($12.7M; boomnow.com), and Conduit ($3.1M; TechFundingNews). All are actively investing in AI/agentic features, compressing the window for differentiation.

**Self-acknowledged commoditization dynamic:** The company states "software is being commoditized" and claims feature parity with competitors in two weeks (YC company page). If true, this same dynamic means competitors or new entrants could replicate Trellis's features with similar speed, making durable differentiation dependent on data network effects that have not yet been demonstrated.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $8.6B vacation rental software market in 2024, projected $14.1B by 2034 at 5.10% CAGR (Scoop Market, 2024 via search snippet) |
| SAM | No public data found |
| Traction | Operating one PM company's operations "with 1 person" (YC launch post, Spring 2026); 84.5% AI automation rate claimed (trellistech.com dashboard); no public user/customer counts |
| Revenue Signal | No public data found |
| Founders | Lodovico Benvenuti (Co-founder): scaled PM company to ~$2M rev/150+ listings, built AI agents at Conduit (YC W24). Jan Sahagun (Co-founder): sales at Besty AI/Guestway/Boom, founded STR Tech Report, Grenoble Ecole de Management |
| Competitors | Guesty ($409M raised, revenue unknown, enterprise PMS); Hostaway ($543M raised, revenue unknown, first STR PMS unicorn); Boom ($12.7M raised, revenue unknown, AI-first PMS); Conduit ($3.1M raised, revenue unknown, AI guest messaging) |
| Moat Signals | Cross-operational data network effect (aspirational, per YC company page); 200+ integrations creating switching costs (trellistech.com) |
| Risk Factors | Founder provenance from direct competitors (Conduit, Boom), name collision with 10+ "Trellis" entities, well-funded competitive field |
| Founder Reach | Lodovico: X @LodoBenve77 (count not retrievable), LinkedIn (count not retrievable), no GitHub. Jan: no X found, LinkedIn 500+ connections (search snippet), no GitHub |
| Distribution Signals | STR Tech Report media platform founded by Jan Sahagun (strtechreport.com; LinkedIn post); no Product Hunt launch found; no app store ratings found |
| Emails | hello@trellistech.com (trellistech.com) |
