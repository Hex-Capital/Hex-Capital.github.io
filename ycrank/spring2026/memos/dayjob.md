# Dayjob

> AI Agents for Industrial Logistics

| Field | Value |
|-------|-------|
| Website | https://www.getdayjob.ai |
| YC Page | https://www.ycombinator.com/companies/dayjob |
| Batch | Spring 2026 |
| Industry | B2B / Supply Chain and Logistics |
| Team Size | 5 |
| Location | London, England, United Kingdom |
| Tags | Logistics, Transportation, AI |
| YC Partner | Tom Blomfield |
| Emails | info@getdayjob.ai |

## The Idea

**Problem:** Waste management and skip hire operators schedule vehicle routes manually, often using spreadsheets or systems "built originally for parcels, not skips" (LinkedIn post by George Postlethwaite, May 2025). Planners juggle cancellations, urgent jobs, driver changes, and vehicle constraints in real time. The company website claims planning teams lose 65 hours weekly to admin (getdayjob.ai).

**Approach:** An AI scheduling agent that plugs into existing ERP systems (Weighsoft, PurGo, Wastelogics) and continuously re-optimises routes in real time, handling new jobs, driver changes, and exceptions automatically (YC page). The system generates optimal schedules factoring travel times, skip sizes, driver schedules, and live job updates (getdayjob.ai). Setup claims "most businesses operational within one day" (getdayjob.ai).

**Differentiation:** Unlike general-purpose route optimisation tools (Routific, OptimoRoute), Dayjob is purpose-built for skip hire and waste collection operations, addressing domain-specific constraints like delivery stacking and skip size management (LinkedIn post, May 2025). Unlike AMCS, which offers a full-stack waste ERP, Dayjob integrates with existing ERPs rather than replacing them (YC page). VWS Software Solutions (maker of PurGo) announced a partnership with Dayjob for joint integration (VWS blog, Jan 2026).

**Business Model:** No public pricing page found. [Inferred]: Most likely monetization path is a SaaS subscription, possibly per-vehicle or per-route, given the ERP-integration model and B2B waste management customer base.

**TAM/SAM:**
- Route optimisation software market: $8.51B in 2023, projected $21.46B by 2030, CAGR 14.4% (Grand View Research via search snippet)
- Waste management software market: $11.13B in 2025, projected $15.45B by 2029, CAGR 8.5% (Verified Market Reports via search snippet)
- No company-specific SAM estimate found.

**GTM / Distribution:** The VWS/PurGo partnership provides a channel into PurGo's existing customer base of waste operators (VWS blog, Jan 2026). Integrations with Weighsoft and Wastelogics suggest a similar channel strategy via ERP vendors (getdayjob.ai). [Inferred]: Distribution likely follows an ERP-partnership-led model, where waste management ERP vendors refer or co-sell Dayjob to their installed base, supplemented by direct sales in the UK waste sector.

## Defensibility

- **ERP integration depth:** Integrations with three named waste ERPs (Weighsoft, PurGo, Wastelogics) create switching costs once deployed (getdayjob.ai). The VWS partnership formalises the PurGo integration as a co-marketed product (VWS blog, Jan 2026).
- **Domain-specific optimisation:** The scheduling engine is tuned for skip hire operations specifically, not general delivery routing (LinkedIn post, May 2025).
- **Operational data accumulation:** [Inferred]: As the agent handles daily scheduling decisions, it accumulates fleet and route performance data that could improve optimisation over time, though this is unproven at this stage.

**Market structure:** AMCS, the incumbent waste management software provider ($225M raised, Tracxn via search snippet), offers route optimisation as one module within a full-stack ERP. Replacing only the scheduling component with Dayjob avoids a full ERP migration. [Inferred]: AMCS faces business model conflict in unbundling its route optimisation from its ERP suite, as doing so would cannibalise its platform lock-in strategy.

**Commoditization risk:** General-purpose route optimisation vendors (Routific, FarEye, Descartes) could add waste-management-specific features. The core AI scheduling technology is not inherently defensible; the moat depends on ERP integration depth and domain-specific tuning accumulated over deployments.

## Market & Traction

**Traction signals:**
- $450K+ ARR as of approximately March 2026, seven months after first sales in August 2025 (YC page)
- **Prior product (Gaea):** $150K in revenue from ERP and inventory software for waste/recycling before pivoting to Dayjob in January 2025 (YC page, Pre-Seed Now article on Gaea, Mar 2024)
- Named customers: Allstone, Coastal Recycling (getdayjob.ai)
- Customer testimonial: "5-10% increase in jobs per driver hour" — Marc Williamson, Transport Manager, Coastal Recycling (VWS blog)
- Customer testimonial: "Best route-planning software I've used in 10 years" — Stuart Pearce, Transport Planner, Coastal Recycling (VWS blog)
- Website claims: 11% annual revenue boost, 66% fewer late deliveries, 25% less admin time, £100K additional yearly revenue potential (getdayjob.ai)
- VWS Software Solutions partnership announced (VWS blog, Jan 2026)
- LinkedIn company page: uk.linkedin.com/company/dayjob-ai (follower count not retrievable)
- No Product Hunt launch found
- No Discord/Slack community found
- No mobile app found (desktop-only per website FAQ)

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. Dayjob |
|---|---|---|---|
| AMCS | $225M (Tracxn via search snippet) | Revenue unknown | Full-stack waste ERP with embedded route optimisation; requires platform commitment vs. Dayjob's ERP-agnostic overlay |
| Routific | $1.8M (Crunchbase via search snippet) | $100K–$5M est. (Owler via search snippet) | General-purpose delivery route optimisation; not waste-management-specific |
| Vorto | Undisclosed (Tracxn via search snippet) | ~$210.6M (Growjo, 2026 via search snippet) | End-to-end supply chain automation for trucking/commodities; targets different segment (long-haul/procurement) |
| FarEye | $152M (Tracxn via search snippet) | ~$23.7M FY25 (Getlatka via search snippet) | Last-mile delivery management for enterprise (DHL, UPS); broader delivery focus, not waste-specific |

**Why now:** [Inferred]: Two enabling changes — (1) LLM and AI agent capabilities reached a threshold in 2024–2025 that makes real-time, autonomous rescheduling feasible at low cost; (2) waste management operators, historically slow technology adopters, are under increasing margin pressure from fuel costs and labour shortages, creating urgency to optimise fleet utilisation.

## Founders & Team

**George Postlethwaite** — Co-founder & CEO
- University of Oxford (Pre-Seed Now, Mar 2024)
- 5 years at Deliveroo, where he launched the grocery business in the UK (LinkedIn via search snippet)
- Head of Sales at Otta, a job search startup (LinkedIn)
- Co-founded Gaea (waste/recycling ERP) in late 2023 with Fred Fooks, pivoted to Dayjob in Jan 2025 (Pre-Seed Now, Mar 2024; YC page)
- Twitter/X: No confirmed public account found (the @georgepos6 handle belongs to a different individual based on biographical mismatch)
- LinkedIn: linkedin.com/in/georgepos
- GitHub: No public repos found

**Fred Fooks** — Co-founder & CTO
- Engineering Science, University of Oxford (Pre-Seed Now, Mar 2024)
- Manager at Deloitte UK, ESG & Supply Chain Analytics — leadership roles in data science, product, and strategy (Pre-Seed Now, Mar 2024)
- Co-founded Gaea with George Postlethwaite (Pre-Seed Now, Mar 2024)
- Twitter/X: @fredskoof (count not retrievable)
- LinkedIn: linkedin.com/in/frederic-fooks
- GitHub: No public repos found

**Joe Walton** — Lead Engineer (getdayjob.ai). LinkedIn: linkedin.com/in/joetwalton. No additional background data gathered.

**Co-founder relationship:** Both founders attended the University of Oxford (Pre-Seed Now, Mar 2024). Pre-Seed Now describes Fred Fooks as a "long-time friend" of Postlethwaite (Pre-Seed Now, Mar 2024).

**Founder-market fit:** George Postlethwaite's 5 years at Deliveroo (logistics operations, grocery launch) provide direct domain experience in fleet scheduling and last-mile delivery. Fred Fooks' background in supply chain analytics at Deloitte and data science gives technical grounding in optimisation. Their prior company Gaea gave them 18+ months of direct exposure to waste industry operations, ERP systems, and customer relationships before pivoting to Dayjob.

## Key Risks

**ERP vendor dependency:** Distribution relies on partnerships with waste management ERP providers (VWS/PurGo, Weighsoft, Wastelogics). If any partner builds native scheduling or signs an exclusive with a competitor, Dayjob loses a channel and integration surface. Mitigation: multiple ERP integrations reduce single-vendor risk (getdayjob.ai).

**Narrow vertical entry point:** Initial product is purpose-built for skip hire within waste management — a small subsegment of the broader logistics market. Expansion to adjacent verticals (general waste collection, recycling, bulk haulage) requires new domain-specific tuning and ERP integrations. The prior pivot from Gaea (waste ERP) to Dayjob (scheduling agent) already represents one scope change (YC page).

**Incumbent response from AMCS:** AMCS ($225M raised, Tracxn via search snippet) already offers route optimisation within its waste management ERP suite. If AMCS invests in AI-driven real-time rescheduling as a feature upgrade, Dayjob's differentiation narrows to ERP-agnostic deployment — which matters less for AMCS's own installed base.

**UK geographic concentration:** All named customers and ERP partners are UK-based. Expansion to other European markets or North America would require new ERP integrations, regulatory knowledge, and sales infrastructure (getdayjob.ai, VWS blog).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Route optimisation software: $8.51B in 2023, projected $21.46B by 2030, CAGR 14.4% (Grand View Research via search snippet); Waste management software: $11.13B in 2025 (Verified Market Reports via search snippet) |
| SAM | No public data found |
| Traction | $450K+ ARR ~7 months post-launch (YC page); named customers: Allstone, Coastal Recycling (getdayjob.ai); VWS partnership (VWS blog, Jan 2026) |
| Revenue Signal | $450K+ ARR (YC page); prior product Gaea: $150K revenue (YC page). No public pricing page found |
| Founders | George Postlethwaite (CEO): Oxford, 5yr Deliveroo, Head of Sales at Otta. Fred Fooks (CTO): Oxford Engineering Science, Deloitte ESG & Supply Chain Analytics |
| Competitors | AMCS ($225M raised, revenue unknown, full-stack waste ERP with route optimisation; Tracxn via search snippet); Routific ($1.8M raised, $100K–$5M est. revenue, general delivery routing; Crunchbase/Owler via search snippet); Vorto (funding undisclosed, ~$210.6M revenue, supply chain automation; Growjo via search snippet); FarEye ($152M raised, ~$23.7M FY25 revenue, last-mile delivery; Tracxn/Getlatka via search snippet) |
| Moat Signals | Three named ERP integrations (getdayjob.ai); VWS co-marketing partnership (VWS blog, Jan 2026); domain-specific skip hire optimisation (LinkedIn post, May 2025) |
| Risk Factors | ERP vendor dependency, narrow vertical entry point, AMCS incumbent response, UK geographic concentration |
| Founder Reach | George Postlethwaite: Twitter not confirmed, LinkedIn linkedin.com/in/georgepos. Fred Fooks: Twitter @fredskoof (count not retrievable), LinkedIn linkedin.com/in/frederic-fooks. No public GitHub repos found for either founder |
| Distribution Signals | VWS/PurGo partnership (VWS blog, Jan 2026); ERP integrations with Weighsoft, PurGo, Wastelogics (getdayjob.ai). No Product Hunt launch, app store, or Chrome extension found |
| Emails | info@getdayjob.ai (getdayjob.ai) |
