# Pollinate

> AI Agents for the supply chain.

| Field | Value |
|-------|-------|
| Website | https://www.pollinate.tech/ |
| YC Page | https://www.ycombinator.com/companies/pollinate |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Supply Chain and Logistics |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Logistics, Supply Chain |
| YC Partner | Ankit Gupta |
| Emails | adeep@pollinate.tech (company website) |

## The Idea

**Problem:** Supply chain teams waste an estimated 40% of their time on manual work that their ERP should handle (pollinate.tech). ERPs are rigid and supply chain data is messy, so procurement, vendor management, and invoice processing still run on spreadsheets and email inboxes. The initial customer segment was food wholesalers and manufacturers; the company has since expanded to hard tech and deep tech manufacturing customers in the US (Business News Australia, Jan 2026 via search snippet). Current alternatives include manual spreadsheet workflows, legacy ERP built-in modules, and enterprise AP automation platforms like Basware and SAP.

**Approach:** Pollinate connects to a customer's existing ERP, ingests and enriches the data, and builds a structured ontology on top of it. AI agents then operate within this ontology to automate workflows. The initial wedge is three-way match automation: extracting supplier invoices from email and matching them to the correct purchase order and goods receipt across ERPs. Beyond invoice matching, the platform offers vendor management/search, PCB procurement tracking against lead times, ECO (engineering change order) management that propagates BOM changes to RFQs and POs, and a live receiving tracker for inbound shipments (pollinate.tech). The company claims its platform is 80% complete out-of-the-box for each customer, with the remaining 20% deployed as bespoke, customized solutions via AI agents (Business News Australia, Jan 2026 via search snippet).

**Differentiation:** Unlike legacy AP automation tools (e.g., Basware) that require lengthy implementation cycles and operate within a single system, Pollinate positions itself as deploying in days rather than quarters by connecting across multiple ERPs and building custom agents per workflow. Compared to broader procurement platforms like Levelpath or Order.co, Pollinate is narrower in scope—focused specifically on the supply chain execution layer and ERP integration rather than end-to-end procurement. Compared to Ovlo (YC, also pre-seed), which offers a no-code AI platform for supply chain workflows, Pollinate differentiates by building a structured data ontology layer on top of existing ERPs rather than providing a no-code agent builder.

**Business Model:** No pricing page is publicly available on pollinate.tech. [Inferred]: Given the platform's ERP integration, custom agent deployment model, and enterprise customer base (hardware/deep tech manufacturers), the most likely monetization path is a SaaS subscription with potential per-workflow or per-agent pricing tiers, possibly combined with implementation fees for the bespoke 20% customization.

**TAM/SAM:** The AI Purchase Order Matching market was valued at $1.59B in 2024 and is projected to reach $4.85B by 2029 at a 24.8% CAGR (Research & Markets, Jan 2026 via search snippet). The broader procurement software market was valued at $8.89B in 2025 and is projected to reach $20.75B by 2034 at a 9.70% CAGR (Fortune Business Insights via search snippet). The AI in Procurement market was valued at $3.32B in 2025 and is projected to reach $39.20B by 2035 at a 28% CAGR (Precedence Research via search snippet). No company-provided SAM estimate was found.

**GTM / Distribution:** The company's website emphasizes booking demos and speaking directly with founders, indicating a founder-led sales motion. [Inferred]: Given the 2-person team, ERP integration complexity, and enterprise customer profile (hardware/deep tech manufacturers), the most likely distribution path is direct founder-led sales to mid-market hardware companies, potentially leveraging YC network introductions for initial pipeline.

## Defensibility

The company is building a structured data ontology on top of existing ERP systems, which could create a data advantage over time as the ontology incorporates more workflows and more supplier/vendor data across customers. The ERP integration layer itself creates switching costs once deployed, as customer workflows become dependent on Pollinate's agents. The 80/20 model (80% platform, 20% bespoke customization) could build customer-specific lock-in through tailored configurations.

No patents or IP filings were found in public sources. No network effects are evident at this stage.

**Market structure:** Large ERP vendors (SAP, Oracle, NetSuite) have built-in procurement modules but these are part of monolithic systems designed for broad enterprise needs. Adding AI-agent-based automation that works across heterogeneous ERP environments would require these incumbents to support integration with competitors' systems, which conflicts with their platform lock-in business models. AP automation incumbents like Basware are optimized for high-volume enterprise invoice processing within standardized workflows and may face difficulty adapting to the bespoke, agent-per-workflow model that smaller hardware manufacturers require.

**Commoditization risk:** The three-way match automation problem is well-understood, and multiple companies (Basware, Rossum, Itemize, Zimply) already offer AI-powered PO matching. The ontology-plus-agents approach could be replicated by other AI startups (Ovlo offers a directly comparable positioning). The defensibility will likely depend on the depth of ERP integrations built and the volume of customer-specific workflow data accumulated, rather than on the core matching algorithms.

## Market & Traction

**Traction signals:**
- First paying customer secured in June 2025 (Business News Australia, Jan 2026 via search snippet)
- Processing $100k+ in purchasing volume through automated workflows (YC company page)
- YC W26 batch acceptance with US$500,000 standard deal (Business News Australia, Jan 2026 via search snippet)
- ilab Accelerator 2025 participant; received $15,000 SAFE note via UniQuest Extension Fund (UQ Ventures, Dec 2025)
- Won EiR Choice Award at 2025 ilab Pitch Night (UQ Ventures, Dec 2025)
- Company LinkedIn page: linkedin.com/company/getpollinate (follower count not retrievable)
- Adeep Mitra Twitter/X: @adeepmi (follower count not retrievable)
- No Product Hunt launch found
- No app store presence found
- No Discord/Slack community found

Note: The company website displays logos of Google, Apple, Microsoft, Figma, GitHub, Slack, Vercel, Stripe, Discord, and Notion. These could not be independently verified as customers and may be template/placeholder imagery.

**Competitive landscape:**

1. **Levelpath** ($100M+ total raised, $55M Series B led by Battery Ventures, Jun 2025; revenue unknown; TechCrunch, Jun 2025): AI-native procurement platform built for enterprise. Broader end-to-end procurement platform vs. Pollinate's narrower ERP-agent automation focus.

2. **Order.co** ($118M total raised; $29M revenue as of Nov 2024; Latka via search snippet): B2B e-commerce integrated with PO and AP automation. Combines marketplace with procurement vs. Pollinate's pure software agent approach.

3. **Basware** (publicly traded, taken private via buyout Dec 2025; 6,500+ customers, 2B+ invoices processed; revenue not publicly disclosed post-buyout; Basware press release, Jan 2025 via search snippet): 40-year-old enterprise AP automation incumbent. High-volume enterprise focus vs. Pollinate's mid-market, multi-ERP agent approach.

4. **Ovlo** (YC batch, pre-seed, funding amount undisclosed; Crunchbase): No-code AI platform for supply chain teams automating workflows including invoice reconciliation. Directly comparable positioning; differentiates via no-code builder vs. Pollinate's ontology-based approach.

5. **Lighthouz AI** (YC S24, ~$500K raised; Tracxn via search snippet): AI-powered AP/AR automation specifically for freight brokers. Vertically focused on freight logistics vs. Pollinate's broader supply chain / hardware manufacturing focus.

**Why now:** [Inferred]: The convergence of several factors in 2024-2025 opened this opportunity: (1) LLM capabilities crossed a threshold enabling reliable extraction from unstructured documents (invoices, emails, POs) without extensive custom ML model training, reducing the cost and time to build document processing pipelines; (2) hardware manufacturing supply chains grew more complex post-COVID, with increased demand for multi-supplier visibility and risk management; (3) the emergence of AI agent frameworks (LangChain, AutoGen, etc.) in 2023-2024 made it technically feasible for small teams to build multi-step automated workflows that previously required enterprise-scale engineering.

## Founders & Team

**Adeep Mitra** — Co-founder
- University of Queensland (did not complete degree; dropped out to pursue Pollinate) (Business News Australia, Jan 2026 via search snippet)
- Started a protein bar company in 2018 (Business News Australia, Jan 2026 via search snippet)
- Built and scaled a marketing agency to five figures monthly (Business News Australia, Jan 2026 via search snippet)
- Operated crypto/NFT projects with ~800 ETH in lifetime volume (LinkedIn post via search snippet)
- Participated in UQ Ventures Food Innovation Challenge and ilab Accelerator 2025 (UQ Ventures, Dec 2025)
- Twitter/X: @adeepmi (follower count not retrievable)
- LinkedIn: linkedin.com/in/adeep-mitra-b71030277/ — "Pollinate (YC W26)"
- GitHub: No public repos found

**Corey Berther** — Co-founder
- University of Queensland (physics degree, did not complete; dropped out to build Pollinate's tech) (Business News Australia, Jan 2026 via search snippet)
- Attended coding camps from age 12 (Business News Australia, Jan 2026 via search snippet)
- Ran an electrical business and a software/marketing agency, both to five figures monthly (Business News Australia, Jan 2026 via search snippet)
- Twitter/X: No public account found
- LinkedIn: au.linkedin.com/in/corey-berther-1b0827147 — "Co-founder @ Pollinate (YC W26)"
- GitHub: No public repos found

**Co-founder relationship:** Adeep Mitra and Corey Berther are high school friends who both knew how to code (Business News Australia, Jan 2026 via search snippet). Both attended the University of Queensland and went through UQ Ventures programs together. At age 18, they spent their life savings to fly across Australia to talk to customers (Business News Australia, Jan 2026 via search snippet).

**Founder-market fit:** Both founders have direct operational supply chain experience, having spent time shadowing manufacturers' facility staff and delivering wholesale vegetables to restaurants during their initial hospitality-focused phase (Business News Australia, Jan 2026 via search snippet). This hands-on exposure to supply chain pain points informed their pivot from hospitality to supply chain ERP automation. Both have prior entrepreneurial experience running agencies and small businesses, though neither has a prior exit or enterprise software background. No advisors, board members, or notable angel investors were found in public sources beyond the YC standard deal and UQ Ventures ecosystem.

## Key Risks

**Brand disambiguation:** Multiple established companies share the "Pollinate" name, including Pollinate Media Group (influencer marketing), Pollinate Networks (fintech/payments), Pollinate Group/Impact (social enterprise), and Pollinate International (banking platform). This creates SEO, brand recognition, and trademark challenges as the company scales. The domain pollinate.tech (rather than pollinate.com) reflects this constraint.

**Pivot history and product-market fit uncertainty:** The company was founded in 2024 as a hospitality app connecting partygoers with clubs/restaurants, then pivoted to food wholesale/manufacturer supply chain, and has since expanded to US hard tech and deep tech manufacturing (Business News Australia, Jan 2026 via search snippet). While pivoting is normal at pre-seed, two significant domain shifts in under two years suggest the current product-market fit is still being validated. Prior-product traction (hospitality) should not be conflated with current-product traction (supply chain ERP automation).

**Direct YC-batch competitor:** Ovlo, also a YC-backed startup, offers a directly comparable product—a no-code AI platform for supply chain teams that automates invoice reconciliation, demand forecasting, and other workflows (YC company page). Operating in the same accelerator network with an overlapping value proposition could create competition for the same early customers and investor attention.

**ERP integration complexity and scalability:** The 80/20 model (80% platform, 20% bespoke customization) could limit scalability. Each new customer requires custom integration work with their specific ERP system and workflows, which may create consulting-like delivery constraints for a 2-person team. The breadth of ERP systems in the market (SAP, Oracle, NetSuite, Microsoft Dynamics, and many others) means each new ERP integration is a meaningful engineering investment.

**Customer concentration risk:** With the first paying customer secured in June 2025 and only $100k+ in purchasing volume processed (YC company page), the company likely has a very small number of customers. Loss of any single customer at this stage would represent a significant revenue impact.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.85B AI Purchase Order Matching market by 2029, 24.8% CAGR (Research & Markets, Jan 2026 via search snippet); $8.89B procurement software market in 2025, 9.70% CAGR to $20.75B by 2034 (Fortune Business Insights via search snippet) |
| SAM | No public data found |
| Traction | First paying customer Jun 2025 (Business News Australia, Jan 2026 via search snippet); $100k+ purchasing volume processed (YC company page); EiR Choice Award at 2025 ilab Pitch Night (UQ Ventures, Dec 2025) |
| Revenue Signal | No public data found |
| Founders | Adeep Mitra (Co-founder): UQ, prior agency + crypto projects, supply chain operations experience. Corey Berther (Co-founder): UQ physics, coding since 12, prior electrical + software agency businesses |
| Competitors | Levelpath ($100M+ raised, revenue unknown, broader AI-native procurement platform); Order.co ($118M raised, $29M revenue Nov 2024, B2B e-commerce + procurement); Basware (established incumbent, 6,500+ customers, enterprise AP automation); Ovlo (YC, pre-seed, no-code AI supply chain agents); Lighthouz AI (YC S24, ~$500K raised, freight-specific AP/AR) |
| Moat Signals | ERP integration switching costs; proprietary data ontology layer across customer workflows (both nascent) |
| Risk Factors | Brand disambiguation with multiple "Pollinate" companies, two pivots in <2 years, direct YC-batch competitor (Ovlo), ERP integration scalability constraints |
| Founder Reach | Adeep Mitra: Twitter @adeepmi (count not retrievable), LinkedIn 500+. Corey Berther: Twitter not found, LinkedIn profile found (count not retrievable). GitHub: no public repos found for either founder |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no community) |
| Emails | adeep@pollinate.tech (company website) |
