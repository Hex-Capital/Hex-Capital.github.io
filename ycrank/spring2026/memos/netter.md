# Netter

> Data Science Autopilot for the real economy. 

| Field | Value |
|-------|-------|
| Website | https://netter.ai |
| YC Page | https://www.ycombinator.com/companies/netter |
| Batch | Spring 2026 (YC profile) |
| Industry | B2B / B2B -> Analytics |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Workflow Automation, Big Data, AI, ML |
| YC Partner | Nicolas Dessaigne (YC profile) |
| Emails | samuel@netter.ai (netter.ai homepage) |

## The Idea

- **Problem:** Mid-market operators in healthcare, logistics, retail, manufacturing, and real estate have scattered data across SaaS, ERPs, TMS, IoT, and files, and lack internal data engineers to operationalize it (netter.ai homepage; YC profile).
- **Approach:** Netter ingests via 120+ native connectors, structures sources into a "living ontology," and lets non-engineers build analytics, workflows, and ML pipelines through a chat interface, with Python escape hatches and observability/replay (netter.ai homepage).
- **Differentiation:** Versus Palantir Foundry (ontology-driven but enterprise-priced and integrator-heavy per G2/TrustRadius listings) and Databricks/Snowflake (require data engineers per LatentView comparison), Netter pitches "build with your data, not your engineers" and ~4-hour to ~30-minute time-to-value (netter.ai homepage; StartupHub.ai).
- **Business Model:** [Inferred]: SaaS subscription tied to connectors/workflows/seats; no public pricing page surfaced on netter.ai homepage fetch (netter.ai homepage).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Direct sales via founder-led demos (Calendly link for samuel@netter.ai on homepage) with named deployments at European retailers Carrefour FR, Tesco UK, Auchan ES (netter.ai homepage).

## Defensibility

- **Moat today:** 120+ native connectors plus an ontology layer that accumulates customer-specific schemas across SaaS/ERP/IoT (netter.ai homepage); depth of those connectors is not independently verified.
- **Future moat:** [Inferred]: Per-customer ontology and workflow templates per vertical (nursing homes, logistics, retail) could create switching costs once operational workflows depend on Netter; unproven absent retention data.
- **Market structure:** [Inferred]: Mid-market accounts are too small for Palantir Foundry's enterprise services motion and too operationally specific for horizontal warehouses like Snowflake, leaving a serviceable wedge (per Palantir competitor coverage on i4C and TrustRadius).
- **Commoditization risk:** Databricks, Snowflake, Microsoft Fabric, DataWalk, and Astera all offer no-code/low-code pipeline tooling (IBTimes, DataWalk, Astera listings), and LLM-driven "chat with your data" features are being added by every major warehouse vendor.

## Market & Traction

- **Traction signals:**
  - Named customer logos: Carrefour FR, Tesco UK, Auchan ES (netter.ai homepage).
  - Customer testimonial: dormant receivables recovery cited at ~10% recovery rate (netter.ai homepage).
  - Total funding listed as $12M, most recent round "Seed," round date/lead not disclosed (StartupHub.ai profile); inconsistent with YC standard $500K pre-seed deal and unverified by primary source.
  - Hiring: company_data field lists Hiring=False; YC jobs page not separately verified.
  - Product Hunt / press: No public data found.
  - Twitter, LinkedIn, Discord, app/extension installs: No public data found.
- **Competitors (5):**
  - Palantir Foundry (public company, FY24 revenue $2.87B per Palantir 10-K coverage on i4C): ontology-driven enterprise platform; Netter targets mid-market with self-serve chat builder vs. Palantir's FDE-heavy delivery.
  - Databricks ($14B+ raised across rounds per IBTimes 2026 ranking; revenue unknown publicly precise): lakehouse + Mosaic AI; requires data engineering skills that Netter abstracts (LatentView).
  - Snowflake (public; revenue unknown precise figure here): cloud data warehouse; Netter layers workflow/ML execution on top of operational data rather than analytics warehousing (i4C).
  - DataWalk (funding unknown, revenue unknown): no-code ontology/knowledge-graph platform overlapping Netter's ontology pitch (DataWalk site).
  - Alteryx (taken private by Clearlake/Insight 2024, ~$4.4B deal per public filings; revenue unknown current): no-code analytics workflows for analysts, overlapping the "no-engineer pipelines" pitch (G2 Palantir competitor list).
- **Why now:** [Inferred]: LLM-driven natural-language interfaces crossed a usability threshold in 2024–2025, making "chat to build pipelines" feasible for non-engineers without the brittle results of prior NL-to-SQL attempts (general industry context; not stated by company).

## Founders & Team

- **Samuel Ladroue (Co-Founder & CEO):**
  - Background: Mathematics and Computer Science at Mines Paris (LinkedIn fr.linkedin.com/in/samuel-ladroue); listed as CEO of Netter P26 (YC profile); no prior exits surfaced in public search.
  - Twitter/X: No public account found in search.
  - LinkedIn: fr.linkedin.com/in/samuel-ladroue — headline not retrievable via WebFetch (JS-rendered).
  - GitHub: No public repos found in search.
- **Amin Hamzaoui (Co-Founder & CTO):**
  - Background: Student at Mines Paris and ENS Ulm per LinkedIn headline (linkedin.com/in/amin-hamzaoui/); Co-Founder & CTO at Netter (YC profile).
  - Twitter/X: No public account found.
  - LinkedIn: "Student at Mines Paris and ENS Ulm" (linkedin.com/in/amin-hamzaoui).
  - GitHub: No public repos found in search.
- **Co-founder relationship:** Both founders attended Mines Paris (LinkedIn profiles of each).
- **Founder-market fit:** [Inferred]: Quantitative training at Mines Paris / ENS Ulm aligns with building ML/ontology tooling; no prior data-platform operating experience surfaced in public sources, and no advisors or investors are publicly named beyond YC.

## Key Risks

- **Incumbent commoditization:** Snowflake, Databricks, and Microsoft Fabric are all adding LLM-driven "chat with your data" and no-code pipeline features (IBTimes 2026 ranking; LatentView), which could absorb the wedge before Netter establishes switching costs.
- **Reference-customer verification:** netter.ai lists Carrefour FR, Tesco UK, Auchan ES as customers, but no press release, case study URL, or contract value is publicly cited; logo-on-site does not confirm paid production deployments.
- **Funding figure inconsistency:** StartupHub.ai reports "$12M raised, Seed" while YC Spring 2026 batch companies receive the standard $500K deal (YC stablecoin announcement re Spring 2026); the $12M figure is not corroborated by Crunchbase, TechCrunch, or a company announcement located in this research.
- **Geographic-market mismatch:** Founders are Mines Paris/ENS Ulm-trained with named customers in Europe (Carrefour FR, Tesco UK, Auchan ES per homepage) while the company is HQ'd in San Francisco (YC profile), creating a sales/operations split that may dilute either GTM motion.
- **Technical feasibility of chat-built ML pipelines:** Reliability of LLM-generated workflows on enterprise SaaS/ERP/IoT data is unproven at mid-market scale; no published benchmarks, uptime data, or third-party validation found.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Customer logos: Carrefour FR, Tesco UK, Auchan ES (netter.ai homepage); receivables recovery ~10% customer outcome (netter.ai homepage) |
| Revenue Signal | No public data found (no pricing page surfaced on netter.ai homepage fetch) |
| Founders | Samuel Ladroue (CEO): Mines Paris Math/CS. Amin Hamzaoui (CTO): Mines Paris and ENS Ulm. |
| Competitors | Palantir Foundry (public, FY24 ~$2.87B revenue per i4C, enterprise FDE-heavy vs. Netter mid-market self-serve); Databricks (>$14B raised per IBTimes, revenue unknown precise, requires data engineers); Snowflake (public, revenue unknown precise here, warehouse vs. operational workflows); DataWalk (funding unknown, revenue unknown, no-code ontology overlap); Alteryx (taken private ~$4.4B 2024, revenue unknown current, analyst no-code workflows) |
| Moat Signals | 120+ native connectors plus ontology layer (netter.ai homepage); depth unverified |
| Risk Factors | Incumbent commoditization by Snowflake/Databricks/Fabric, unverified customer references, $12M funding figure not corroborated |
| Founder Reach | Samuel Ladroue: Twitter not found, LinkedIn fr.linkedin.com/in/samuel-ladroue (count not retrievable), GitHub not found. Amin Hamzaoui: Twitter not found, LinkedIn linkedin.com/in/amin-hamzaoui (count not retrievable), GitHub not found. |
| Distribution Signals | Founder-led demo booking via Calendly link on netter.ai homepage; No public Product Hunt, app store, or Chrome Web Store data found |
| Emails | samuel@netter.ai (netter.ai homepage) |

Sources:
- [Netter homepage](https://netter.ai)
- [Netter YC profile](https://www.ycombinator.com/companies/netter)
- [StartupHub.ai – Netter profile](https://www.startuphub.ai/startups/netter)
- [Samuel Ladroue – LinkedIn](https://fr.linkedin.com/in/samuel-ladroue)
- [Amin Hamzaoui – LinkedIn](https://www.linkedin.com/in/amin-hamzaoui/)
- [Y Combinator Spring 2026 directory](https://www.ycombinator.com/companies?batch=Spring+2026)
- [Top 5 Palantir Competitors 2026 – IBTimes](https://www.ibtimes.com.au/top-5-best-palantir-competitors-2026-led-databricks-snowflake-microsoft-fabric-data-ai-platforms-1865435)
- [Palantir vs Snowflake vs Databricks – i4C](https://www.i4c.com/palantir-vs-snowflake-vs-databricks-which-one-fits-your-business/)
- [Databricks vs Palantir – LatentView](https://www.latentview.com/blog/databricks-vs-palantir/)
- [Palantir Foundry alternatives – G2](https://www.g2.com/products/palantir-foundry/competitors/alternatives)
- [YC stablecoin funding (Spring 2026) – The Block](https://www.theblock.co/post/388230/y-combinator-stablecoin-funding)
