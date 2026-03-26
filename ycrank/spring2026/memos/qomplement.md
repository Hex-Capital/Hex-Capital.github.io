# qomplement

> AI Agents for Document Filling

| Field | Value |
|-------|-------|
| Website | https://qomplement.com/ |
| YC Page | https://www.ycombinator.com/companies/qomplement |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Documents, Artificial Intelligence, B2B |
| YC Partner | Tom Blomfield |
| Emails | kerim@qomplement.com (Codemix startup directory) |

## The Idea

**Problem:** 90% of enterprise data lives in documents (YC company page). Existing tools focus on extracting data from documents, but in real workflows that data must be filled back into other PDF forms and spreadsheet templates. Operations, legal, HR, and compliance teams do this manually today (qomplement docs, Mar 2026). Target sectors include transportation, healthcare, and financial services (Milenio, Aug 2025).

**Approach:** AI agents that ingest messy source data and populate internal PDF forms and spreadsheet templates. The product offers three Excel fill modes (Smart, Replace, Complete), auto-detection of fillable PDF fields, a visual workflow builder with triggers (schedules, webhooks, email arrivals), and connectors to PostgreSQL, MySQL, SQL Server, MongoDB, Snowflake, BigQuery, and Google Drive (qomplement docs, Mar 2026). The agent runs locally on-device (8–16 GB RAM), keeping data off the cloud; described as 15x more economical than cloud alternatives (Startups Latam, 2025). Development investment of ~$200,000 with ~$60,000/month AWS infrastructure for model training (Expansion Mexico, Sep 2025).

**Product pivot note:** The Product Hunt listing (May 2025) describes qomplement as "The only OS agent that controls your computer… like having the smartest AI built right into your operating system." The current YC page and docs (Mar 2026) focus specifically on document filling. This indicates a narrowing from a general-purpose computer-using agent to a document-filling specialist. Prior-product metrics (Product Hunt followers) predate this pivot.

**Differentiation:** Most competitors (Instabase, Rossum, Nanonets, Reducto) focus on extraction — pulling data out of documents. qomplement targets the reverse: filling data into documents. FormFilling.co (launched Nov 2025, OpenPR) addresses a similar niche but appears very early-stage. The local-first architecture differentiates from cloud-dependent competitors. [Inferred]: The "filling" focus occupies a less crowded niche than extraction, though extraction vendors could extend downstream.

**Business Model:** Listed as "Freemium" (AI Just Better directory, Nov 2025) and "$0 (free)" (AI Startups and Tools directory, Nov 2025). No public pricing page found on qomplement.com (website not renderable at time of research). [Inferred]: Most likely monetization is usage-based or tiered SaaS pricing with a free tier for onboarding and paid plans for enterprise volume.

**TAM/SAM:** The intelligent document processing (IDP) market was valued at $2.30B in 2024, projected to reach $12.35B by 2030 at 33.1% CAGR (Grand View Research, 2024). The broader document automation software market was $9.06B in 2025, projected to reach $28.04B by 2033 at 15.18% CAGR (Global Growth Insights, 2025). U.S. TAM for AI document management SaaS estimated at ~$5.07B in 2026 (Celiveo, 2026). [Inferred]: The "document filling" SAM is a subset of IDP; no analyst has sized it independently.

**GTM / Distribution:** Implemented primarily in the transportation sector, with healthcare and financial services also mentioned (Milenio, Aug 2025). Quote from CEO Kerim Taray: "We wanted AI accessible for Latin American companies without system replacements or disproportionate costs" (Expansion Mexico, Sep 2025). Member of AWS GAIA 2025 cohort for Latin America GenAI (AWS GAIA program). Also went through Platanus Batch 24, a Chilean accelerator. [Inferred]: Initial GTM appears to be direct sales to mid-market Latin American enterprises with expansion to U.S. via YC network.

## Defensibility

- **Local-first architecture:** Data never leaves the user's machine (Startups Latam, 2025). [Inferred]: This creates a compliance advantage for regulated industries (healthcare, finance) where cloud data residency is a barrier.
- **Workflow integration depth:** Connectors to 9+ database types and visual workflow builder with scheduling/webhook triggers (qomplement docs, Mar 2026). [Inferred]: Switching costs increase as customers build workflows around the product.
- No patents, open-source repos, or network effects identified from public sources.

**Market structure:** [Inferred]: Large incumbents (Microsoft, Google, UiPath) focus on extraction and general document AI. Building a dedicated filling product with local execution would require incumbents to invest in a new deployment model that conflicts with their cloud-revenue incentives. This is a business-model conflict, not a technical barrier.

**Commoditization risk:** Document filling from structured templates is technically reproducible. Extraction vendors (Nanonets, Rossum, Reducto) could extend into filling as a feature. Microsoft's Power Platform already offers some form-filling capability. [Inferred]: Defensibility will depend on accuracy, template coverage breadth, and workflow stickiness rather than technical moats.

## Market & Traction

**Traction signals:**
- Customer testimonial: One transport client automated 5,000–10,000+ monthly invoices, saving $15,000/month (Milenio, Aug 2025). This is the customer's cost savings, not qomplement's revenue.
- Product Hunt: 108 followers, 0 reviews, 1 post, created May 1, 2025 (Product Hunt). Note: this predates the pivot to document filling.
- Press coverage: Grupo Milenio (Aug 16, 2025), Expansion Mexico (Sep 12, 2025), Startups Latam (2025) — all Spanish-language Mexican publications.
- Twitter/X: @qomplementai (YC page); follower count not retrievable.
- LinkedIn: linkedin.com/company/qomplement, listed as "YC X26"; follower count not retrievable.
- No Discord/Slack community found. No app store listings found. 0 open job postings (YC page).

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. qomplement |
|---|---|---|---|
| Nanonets | $42M across 5 rounds (TechCrunch, Mar 2024) | $100M (GetLatka, Sep 2025) | Autonomous AI agents for full back-office ops, not just documents |
| Rossum | $104.6M (GetLatka) | $44.9M (GetLatka, Oct 2024) | Template-free extraction focused on AP/invoices; cloud-only |
| Reducto | $108M total incl. $75M Series B (PRNewswire, Oct 2025) | Revenue undisclosed | API-first infrastructure layer for other AI companies; extraction focus |
| Extend | $17M (BusinessWire, Jun 2025) | "Multi-millions ARR," cash-flow positive (SiliconAngle, Jun 2025) | LLM-native document processing cloud; strong enterprise logos (Brex, Square) |
| Docsumo | $3.7M (GetLatka) | $10.3M (GetLatka, Oct 2024) | Extremely capital-efficient; strong in real estate/finance verticals |

**Why now:** [Inferred]: LLM capabilities crossed a performance threshold in 2024–2025 enabling accurate multi-field document filling without template-specific training. Simultaneously, local inference (e.g., quantized models on 8–16 GB RAM) became viable, enabling qomplement's on-device architecture. The company's emphasis on Latin American enterprise access suggests rising AI adoption demand in that region as a secondary catalyst.

## Founders & Team

**Kerim Taray** — Co-founder & CEO
- BS Computer Science, Tecnologico de Monterrey (2020–2024); Mercersburg Academy (PA) for high school (kerimtaray.com)
- Previously: Co-founder of Growsphere (2024, nearshoring/manufacturing platform, bootstrapped, 5 people); role at Contalink (YC S21, Mexican accounting fintech); roles at Movana and one stealth startup (RocketReach, LinkedIn)
- Twitter/X: @kerimtaray — count not retrievable
- LinkedIn: linkedin.com/in/kerim-taray — "Co-Founder and CEO @ qomplement" (RocketReach extraction)
- GitHub: No public repos found

**Andres Garza Garcia** — Co-founder & CTO
- Engineering degree, Tecnologico de Monterrey (graduation ~2024) (Milenio, Aug 2025)
- No prior roles found in public sources. qomplement appears to be his first venture.
- Twitter/X: Probable handle @AndresFerGarzaG — count not retrievable
- LinkedIn: No public profile URL found
- GitHub: No public repos found

**Co-founder relationship:** Both founders graduated from Tecnologico de Monterrey in the same approximate timeframe (2020–2024) and are both described as "ingenieros regiomontanos" (engineers from Monterrey) (Milenio, Aug 2025).

**Founder-market fit:** Kerim Taray's experience at Contalink (YC S21, accounting/fintech) exposed him to enterprise document workflows in Latin American businesses. His Growsphere venture (sourcing/manufacturing) involved document-heavy supply chain processes. Both founders' Tec de Monterrey CS backgrounds provide technical grounding. [Inferred]: The team's direct experience with Latin American enterprise document pain points informs the product's local-first, cost-conscious design.

## Key Risks

**1. Product pivot recency:** The company pivoted from a general-purpose computer-using agent (Product Hunt, May 2025) to document filling (YC page, 2026). The current product positioning is less than a year old, and prior traction metrics may not transfer.

**2. Competitive encroachment from extraction vendors:** Nanonets ($100M revenue, GetLatka Sep 2025), Rossum ($44.9M, GetLatka Oct 2024), and Reducto ($108M raised, PRNewswire Oct 2025) already process the same document types. Adding a "fill" step downstream is an incremental feature for these funded incumbents.

**3. Local-first deployment friction:** On-device execution (8–16 GB RAM requirement, Startups Latam 2025) limits deployment to machines meeting hardware specs and creates support complexity at scale. Enterprise IT teams may prefer cloud-managed solutions.

**4. Geographic concentration:** All press coverage is from Mexican publications (Milenio, Expansion Mexico, Startups Latam). Named customer use case is in Latin American transport. U.S. enterprise traction is undemonstrated in public sources.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $12.35B by 2030, 33.1% CAGR for IDP (Grand View Research, 2024); $28.04B by 2033 for document automation software (Global Growth Insights, 2025) |
| SAM | No public data found |
| Traction | 108 Product Hunt followers (Product Hunt, May 2025); customer testimonial: 10K+ invoices/mo automated, $15K/mo savings for one transport client (Milenio, Aug 2025); 3 Spanish-language press articles (Milenio Aug 2025, Expansion Mexico Sep 2025, Startups Latam 2025) |
| Revenue Signal | No public data found |
| Founders | Kerim Taray (CEO): Tec de Monterrey CS, co-founded Growsphere, ex-Contalink (YC S21). Andres Garza Garcia (CTO): Tec de Monterrey engineering, no prior ventures found. |
| Competitors | Nanonets ($42M raised, $100M revenue, full back-office AI agents); Rossum ($104.6M raised, $44.9M revenue, AP-focused extraction); Reducto ($108M raised, revenue unknown, API infrastructure for document parsing); Extend ($17M raised, multi-millions ARR, document processing cloud); Docsumo ($3.7M raised, $10.3M revenue, real estate/finance verticals) |
| Moat Signals | No public data found |
| Risk Factors | Recent pivot from general CUA to document filling, competitive encroachment from funded extraction vendors, geographic concentration in Latin America |
| Founder Reach | Kerim Taray: Twitter @kerimtaray (count not retrievable), LinkedIn 500+ connections. Andres Garza Garcia: Twitter @AndresFerGarzaG (unverified, count not retrievable), LinkedIn not found. |
| Distribution Signals | Product Hunt 108 followers (May 2025); AWS GAIA 2025 cohort; Platanus Batch 24 accelerator |
| Emails | kerim@qomplement.com (Codemix startup directory) |
