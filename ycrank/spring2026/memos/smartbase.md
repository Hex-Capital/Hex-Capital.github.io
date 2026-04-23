# Smartbase

> Automated order entry for manufacturers

| Field | Value |
|-------|-------|
| Website | https://www.smartbase.so/ |
| YC Page | https://www.ycombinator.com/companies/smartbase |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Workflow Automation, Manufacturing, Automation |
| YC Partner | Harj Taggar |
| Emails | sam@smartbase.so |

## The Idea

**Problem:** Incoming purchase orders at manufacturers are manually entered into ERP systems by hand. This requires multiple full-time employees even at small manufacturers (company website). POs arrive in heterogeneous formats — paper, email, fax, handwritten — making automation non-trivial (YC page). The company's ROI calculator illustrates a scenario of 500 POs/month at 15 minutes each, projecting 113 hours and ~$33,750/year saved per facility (company website).

**Approach:** Smartbase converts incoming POs into ERP orders through a four-step workflow: (1) PO import via file upload or email inbox connection, (2) AI-powered data extraction using custom business rules, (3) dashboard-based review and approval, (4) automatic order creation and traveler printing in the ERP (company website). Integrations listed include Acumatica, Epicor, Infor, Microsoft Dynamics 365, NetSuite, QuickBooks, SAP, SYSPRO, and Sage X3 (company website).

**Differentiation:** Conexiom ($170M total raised, ~$75M annual revenue, 600+ clients) is the incumbent in sales order automation for manufacturers and distributors (VentureBeat, Sep 2021; Prospeo, 2024). Workist (€9M Series A, 50+ customers, seven-figure revenue) automates B2B document processing for large enterprises like Deutsche Bahn and PepsiCo, primarily in Europe (EU-Startups, Sep 2022). OrderEase ($1.15M raised, founded 2014) focuses on wholesale order management connecting retailers and wholesalers (OrderEase website). Buddy (usebuddy.io) targets brands and manufacturers with order-to-cash automation but has no public funding data. [Inferred]: Smartbase differentiates by targeting small-to-mid-sized U.S. manufacturers with a lighter-weight, AI-native product at a lower price point than Conexiom's enterprise platform, and by building deep ERP-specific integrations across nine named systems.

**Business Model:** No pricing page is publicly available (company website). The YC profile states the company is "onboarding first customers onto five-figure annual contracts" (YC page). [Inferred]: SaaS subscription model with annual contracts likely in the $10K–$50K range based on the "five-figure" statement.

**TAM/SAM:** The company claims a $26 billion clerical labor market in U.S. manufacturing (YC page); this figure was not independently verified via public sources. The Purchase Order Software Market was valued at $3.6B in 2024 and is projected to reach $8.2B by 2033 at 9.8% CAGR (Verified Market Reports, 2024 via search snippet). The broader procurement software market was estimated at $8.65B in 2024 (Mordor Intelligence, 2024 via search snippet).

**GTM / Distribution:** [Inferred]: Direct sales to U.S. manufacturers, starting with SMBs. The founders' described approach of working on factory floors and sitting side-by-side with employees suggests a hands-on, high-touch onboarding model typical of vertical SaaS selling into manufacturing.

## Defensibility

- **Switching costs:** Once integrated with a manufacturer's ERP system and configured with their custom business rules, switching costs are high due to workflow dependency and retraining (company website describes custom business rules configuration).
- **Data advantage:** [Inferred]: Each deployment trains the AI extraction model on manufacturer-specific PO formats and business rules, creating a compounding data advantage per customer over time.
- No patents, network effects, or regulatory barriers were identified in public sources.

**Market structure:** Conexiom, the closest incumbent, targets enterprise-scale distributors and manufacturers (16 of top 20 industrial distributors) with a pricing model and sales motion built for large accounts (Conexiom website). [Inferred]: This creates a structural gap — Conexiom's enterprise sales team and pricing are misaligned with the SMB manufacturing segment, making downmarket expansion unattractive due to unit economics. ERP vendors (SAP, NetSuite) could build native PO ingestion but historically treat order entry as a customer workflow problem rather than a product feature.

**Commoditization risk:** The core technology — OCR/AI extraction from documents and ERP API integration — is technically reproducible. Workist, Buddy, and OrderEase already offer overlapping capabilities. [Inferred]: The moat depends on depth of ERP integration across nine systems and manufacturer-specific business rule configuration rather than on the AI extraction itself, which is increasingly commoditized via LLM APIs.

## Market & Traction

**Traction signals:**
- "Onboarding first customers onto five-figure annual contracts" (YC page, Spring 2026)
- Backed by Y Combinator, Spring 2026 batch (YC page)
- LinkedIn company page: linkedin.com/company/smartbase-ai/ — follower count not retrievable (LinkedIn)
- Sam Goldman Twitter/X: @samgoldman0 — follower count not retrievable (YC page)
- Taira Fujioka Twitter/X: @tairabun — follower count not retrievable (YC page)
- No Product Hunt launch found
- No press coverage found
- No app store or Chrome Web Store presence
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Smartbase |
|---|---|---|---|
| Conexiom | $170M total (Warburg Pincus-led $130M round, Sep 2021) (VentureBeat) | ~$75M est. annual revenue (Prospeo, 2024) | Enterprise-grade platform for large distributors; 600+ clients; 20-year track record |
| Workist | $11.6M total ($8.72M Series A, Sep 2022) (Crunchbase) | Seven-figure revenue, 50+ customers (EU-Startups, Sep 2022) | Europe-focused; serves large enterprises (Deutsche Bahn, PepsiCo); broader B2B document types |
| OrderEase | $1.15M total (seed rounds, last Nov 2019) (OrderEase press release) | Revenue unknown | Canada-based; wholesale/retail order management focus rather than manufacturing PO entry |
| Buddy | No public funding data | Revenue unknown | Targets brands/manufacturers with full order-to-cash workflow (usebuddy.io) |

**Why now:** [Inferred]: The convergence of two factors likely opens this opportunity: (1) LLM-based document understanding has reached sufficient accuracy in 2024–2025 to reliably extract structured data from heterogeneous PO formats (handwritten, faxed, emailed) at costs viable for SMBs — prior OCR/ML approaches required extensive per-customer template configuration; (2) ERP vendors have expanded API ecosystems (e.g., Acumatica's REST API, NetSuite's SuiteTalk), reducing the integration cost that historically made this automation uneconomical for small manufacturers.

## Founders & Team

**Prior company — Anytrace (YC S25):** Sam Goldman and Taira Fujioka were previously co-founders of Anytrace, described as "The AI support engineering agent" (YC page for Anytrace). Anytrace was in the YC Summer 2025 batch. The pivot to Smartbase and reentry in Spring 2026 indicates the team moved to a new problem within approximately one year.

**Sam Goldman** — Co-Founder & CEO
- UC Berkeley graduate (company website)
- Previously CEO and co-founder of Sphinx Labs, a DevOps platform for smart contract deployments, co-founded with Ryan Pate. Sphinx raised $2M in funding (YC page description; Crunchbase). The Sphinx GitHub repo (sphinx-labs/sphinx) has 241 stars and 19 forks (GitHub).
- Prior to Smartbase, co-founded Anytrace (YC S25) (YC Anytrace page)
- Twitter/X: @samgoldman0 — count not retrievable (YC page link)
- LinkedIn: linkedin.com/in/sam-goldman (LinkedIn)
- GitHub: github.com/sam-goldman — 39 public repos, 24 followers (GitHub)

**Taira Fujioka** — Co-Founder & CTO
- Former youngest SDE 2 at AWS SageMaker Inference; built and operated scalable inference infrastructure for enterprises including Salesforce, JP Morgan, and Qualtrics (YC page; LinkedIn)
- Prior to Smartbase, co-founded Anytrace (YC S25) (YC Anytrace page)
- Twitter/X: @tairabun — count not retrievable (YC page link)
- LinkedIn: linkedin.com/in/taira-fujioka1999420 (LinkedIn)
- GitHub: No public repos found matching this individual

**Co-founder relationship:** Sam Goldman and Taira Fujioka co-founded Anytrace together (YC S25) before pivoting to Smartbase, indicating at least ~1 year of working together prior to the current venture (YC pages for both companies).

**Founder-market fit:** Sam Goldman has prior startup founding experience (Sphinx, $2M raised; Anytrace, YC S25), demonstrating ability to build and ship products, though neither prior venture was in manufacturing (Sphinx was web3/DevOps, Anytrace was AI support engineering). Taira Fujioka's AWS SageMaker Inference background provides direct AI/ML infrastructure expertise relevant to building document extraction systems. The founders describe extensive primary research — "worked on factory floors" and "slept at a factory" (YC page) — but no prior manufacturing industry experience is documented. No advisors, board members, or notable investors beyond YC were identified.

## Key Risks

**ERP integration fragility:** Smartbase lists nine ERP integrations (company website). Each requires ongoing maintenance as ERP vendors update APIs, deprecate endpoints, or change data schemas. At a 2-person team, maintaining parity across nine integration surfaces creates engineering bandwidth risk. Conexiom, with ~$75M revenue, has dedicated integration teams per ERP (Prospeo, 2024).

**Pivot pattern:** The founders pivoted from Anytrace (YC S25, AI support engineering) to Smartbase (YC Spring 2026, manufacturing PO automation) within approximately one year (YC pages). Sam Goldman's earlier venture Sphinx (smart contract DevOps) was in yet another domain (Crunchbase). Three distinct problem domains across three ventures suggests the team has not yet found sustained founder-market fit in a single vertical.

**Name collision:** Multiple established companies use the "Smartbase" name: SmartBase Solutions (Minneapolis, data security), SmartBase (Slovakia, software development), Smartbase Group (Latin America, platform services), SmartBase UK (co-working), Smartbase Technologies (Bangalore, IT services) (LinkedIn search results). This creates SEO competition and potential brand confusion.

**Incumbent response from Conexiom:** Conexiom launched an "AI-Powered Ideal Order Platform" in early 2025 (PR Newswire, Jan 2025), indicating active investment in AI capabilities. If Conexiom moves downmarket with an SMB-priced tier, Smartbase's positioning erodes.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Purchase Order Software Market: $3.6B in 2024, projected $8.2B by 2033 at 9.8% CAGR (Verified Market Reports, 2024 via search snippet). Company claims $26B clerical labor TAM (YC page, unverified). |
| SAM | No public data found |
| Traction | "Onboarding first customers onto five-figure annual contracts" (YC page, Spring 2026) |
| Revenue Signal | Five-figure annual contracts with first customers (YC page, Spring 2026) |
| Founders | Sam Goldman (CEO): UC Berkeley, prev. CEO of Sphinx Labs ($2M raised), co-founded Anytrace (YC S25). Taira Fujioka (CTO): prev. youngest SDE 2 at AWS SageMaker Inference, co-founded Anytrace (YC S25). |
| Competitors | Conexiom ($170M raised, ~$75M revenue, enterprise incumbent) (VentureBeat; Prospeo). Workist ($11.6M raised, seven-figure revenue, Europe-focused) (Crunchbase; EU-Startups). OrderEase ($1.15M raised, revenue unknown, wholesale focus) (OrderEase). Buddy (funding unknown, revenue unknown, brand/manufacturer focus) (usebuddy.io). |
| Moat Signals | Nine named ERP integrations and custom business rule configuration create switching costs (company website) |
| Risk Factors | ERP integration maintenance burden at 2-person scale, two pivots across three domains, incumbent Conexiom investing in AI/SMB |
| Founder Reach | Sam Goldman: Twitter @samgoldman0 (count not retrievable), LinkedIn in/sam-goldman, GitHub 24 followers (GitHub). Taira Fujioka: Twitter @tairabun (count not retrievable), LinkedIn in/taira-fujioka1999420, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | sam@smartbase.so (company website) |
