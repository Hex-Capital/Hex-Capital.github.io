# Ventura

> AI Employees for Industrial Distributors

| Field | Value |
|-------|-------|
| Website | https://www.ventura.ai |
| YC Page | https://www.ycombinator.com/companies/ventura |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Workflow Automation, Operations |
| YC Partner | Brad Flora |
| Emails | support@ventura.ai |

## The Idea

**Problem:** Industrial distributors and manufacturers rely heavily on manual processes for quoting, order entry, and back-office work. Sales reps spend 2–3 hours per day on data entry — interpreting customer requests arriving via email, images, and phone calls, looking up products in catalogs, cross-referencing ERP pricing and inventory, and keying orders into systems (ventura.ai). The existing workflow is fragmented across email inboxes, ERP terminals, and spreadsheets, and incumbent ERP systems (SAP, Oracle, Epicor, NetSuite) do not automate the intake-to-quote pipeline. Deloitte estimates that applying GenAI to quote generation and order entry could generate 75–100 basis points of EBIT improvement for the average wholesale distributor (Deloitte US, 2025 via search snippet).

**Approach:** Ventura deploys AI agents that read incoming customer requests across formats (emails, images, phone calls), match products from the distributor's catalog using live inventory and customer-specific pricing pulled from ERP, and generate quotes or orders without manual data entry (ventura.ai). A "Phone Agent" joins sales calls as a silent note-taker, transcribes conversations, and auto-creates quotes or orders. The platform integrates with SAP, NetSuite, Oracle, Epicor, Microsoft Dynamics, Infor, Salesforce, DMSI Agility, and RingCentral (ventura.ai). Customers are described as going "live within days" (ventura.ai).

**Differentiation:** Compared to **Distro** (YC, AI sales platform for distributors), Ventura emphasizes multi-format intake including phone calls and images, not just email/RFQ documents. Compared to **Go Autonomous** (Copenhagen, B2B autonomous commerce), Ventura focuses specifically on industrial distribution rather than general B2B commerce. Compared to **Parspec** ($31.5M raised), which specializes in construction supply chain specification matching, Ventura targets broader industrial distribution verticals and positions as a general-purpose "AI employee" rather than a product-selection tool. Compared to **Endeavor AI** ($7M seed), which focuses on unifying siloed data for manufacturers, Ventura is specifically workflow-oriented around the quote-to-order pipeline.

**Business Model:** No pricing page is visible on ventura.ai. [Inferred]: Most likely monetization path is a SaaS subscription model, potentially per-seat or per-transaction, given B2B distribution software norms and the "AI employee" positioning which suggests per-agent pricing.

**TAM/SAM:** The global industrial distribution market was valued at $7.86 trillion in 2024 and is projected to reach $12.48 trillion by 2033 at a 4.97% CAGR (Precedence Research, 2024 via search snippet). The US industrial distribution market was $2.84 trillion in 2023 (Ken Research, 2024 via search snippet). The US B2B distribution market overall is $8–9 trillion (Distribution Technology Substack, 2022 via search snippet). The serviceable segment — software spend on quoting, order entry, and sales automation within industrial distribution — is a fraction of this. No public SAM estimate specific to AI-powered quoting/order-entry software was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to mid-market and enterprise industrial distributors, given the ERP integration requirements, the "get started" demo CTA on the website, and the B2B nature of the product. The "live within days" claim suggests a product-led onboarding approach with rapid deployment. Co-founder Swen Koller's prior experience building and selling B2B SaaS to wholesalers (bravo) provides a distribution playbook for this vertical.

## Defensibility

**Data moat potential:** As Ventura processes more quotes and orders for a given distributor, it accumulates customer-specific pricing history, product matching patterns, and catalog data that improve automation accuracy for that account. This creates per-customer switching costs as the AI learns the distributor's specific catalog, pricing rules, and customer relationships.

**Integration depth:** Deep ERP integrations (nine named systems) create switching costs once deployed, as re-implementing these connections with a competitor requires significant effort.

**Market structure:** Industrial distribution ERP vendors (SAP, Oracle, Epicor) could theoretically build native AI quoting features. However, ERP vendors sell horizontal platforms and have limited incentive to build deep vertical workflow automation for a single industry segment. Their sales and product organizations are structured around broad platform capabilities rather than distributor-specific AI agents. Additionally, their implementation timelines (months to years) conflict with Ventura's "live within days" positioning.

**Commoditization risk:** The core technology — LLM-based document parsing, product matching, and ERP integration — uses generally available AI capabilities. Other startups (Distro, Endeavor, Go Autonomous) are building adjacent solutions. The barrier is less in the AI itself and more in the depth of ERP integrations, catalog-specific training data, and distributor workflow knowledge. A well-funded competitor with distribution expertise could replicate the approach within 12–18 months. [Inferred]: The primary defensibility will likely come from accumulating distributor-specific data and building deep ERP connector coverage rather than from proprietary AI techniques.

## Market & Traction

**Traction signals:**
- Website claims: 3x productivity gains, +3–5% higher win rate, 25% error reduction, 95%+ automation rate (ventura.ai). These are presented as general product claims, not attributed to specific named customers.
- LinkedIn company page (linkedin.com/company/getventura): 15 followers (LinkedIn, as of research date).
- No Product Hunt launch found.
- No public revenue, ARR, or customer count data found.
- No press coverage in named publications found.
- No Discord or Slack community found.
- No app store presence found.
- No job postings found beyond the YC page (which lists hiring as false).

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Ventura |
|------------|---------|-------------------------------|
| **Distro** (YC) | $500K (YC seed, 2024) (Tracxn via search snippet) | Also YC-backed, focused on counter/inside sales reps at wholesale distributors with chatbot-style AI (RepBot, CustomerBot); narrower focus on HVAC/R, plumbing, electrical verticals |
| **Endeavor AI** | $7M seed (Craft Ventures, Oct 2024) (WebWire) | Broader manufacturing AI platform unifying siloed data across sales, operations, and supply chains; less focused on the specific quote-to-order workflow |
| **Go Autonomous** | $13.4M total (~€10M Series A, Feb 2024) (EU-Startups) | Copenhagen-based; general B2B autonomous commerce across sectors; enterprise customers including Grundfos and Saint-Gobain |
| **Parspec** | $31.5M total ($20M Series A, Jul 2025) (PRNewswire) | Focused on construction supply chain (MEP products); 288 customers; multimodal AI for specification documents; more vertical-specific to construction |

**Why now:** [Inferred]: The convergence of three factors: (1) LLM capabilities reached sufficient accuracy for parsing unstructured commercial documents (emails, handwritten POs, phone transcripts) in 2023–2025, making automated quote generation viable where OCR/rule-based approaches previously failed; (2) industrial distributors face labor shortages and margin pressure, increasing urgency for automation; (3) ERP vendors have opened APIs (e.g., SAP Business Technology Platform, Oracle Cloud APIs) that enable third-party integrations without the legacy middleware costs that previously blocked startups from connecting to distributor systems.

## Founders & Team

**Jack Collins** — Co-founder
- MSc Computing (Machine Learning) with distinction, Imperial College London; first-class physics degree; diploma in French (LinkedIn, Irish Insights via search snippet)
- Founding Engineer at Develop Health, which scaled to $7M ARR in 14 months with 5 employees and raised a $14.3M Series A (Irish Insights via search snippet; FinancialContent, Aug 2025 via search snippet)
- Previously at Parexel: redesigned ML model storage and serving (10x cost reduction), led company-wide CI/CD and Terraform upgrades (GetProg via search snippet)
- Creator of **magentic**, an open-source Python LLM framework — 2.4K GitHub stars, 120 forks, 358 commits (GitHub)
- Nine years of experience building production NLP and ML systems (GetProg via search snippet)
- Twitter/X: @jackjcollins found but may not be the same person (unverified); count not retrievable
- LinkedIn: linkedin.com/in/jackmpcollins/
- GitHub: github.com/jackmpcollins — magentic (2.4K stars)

**Swen Koller** — Co-founder
- MS Engineering Science/MBA, Harvard University (Harvard John A. Paulson School of Engineering and Applied Sciences + Harvard Business School) (LinkedIn, swenkoller.com)
- Research in AI/ML at Imperial College London and Tsinghua University; published paper on arXiv (swenkoller.com)
- Former BCG consultant, Private Equity practice (Commercial Due Diligence) (LinkedIn, swenkoller.com)
- Co-founded **bravo**: B2B SaaS for food wholesalers in Switzerland; grew to 1,000+ active restaurant users ordering CHF 20M+ in goods from dozens of wholesalers; exited — acquired by Sensational AG as a 100% subsidiary (LinkedIn, Startupticker via search snippet)
- Co-founded **Aramis**: AI/LLM product lab focused on e-commerce (swenkoller.com)
- Born in Switzerland; has lived in eight countries across four continents (swenkoller.com)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/swenkoller/
- GitHub: No public repos found

**Co-founder relationship:** Both founders have research backgrounds connected to Imperial College London — Jack Collins holds an MSc from Imperial, and Swen Koller conducted AI/ML research there. This suggests a possible shared institutional connection.

**Founder-market fit:** The team combines deep technical AI/ML engineering (Collins: 9 years of production NLP/ML, created a 2.4K-star LLM framework, founding engineer at a $7M ARR AI company) with direct B2B wholesale distribution experience (Koller: built and exited a B2B SaaS product serving food wholesalers, with BCG consulting background in due diligence). Koller's prior company bravo addressed the same fundamental problem — digitizing ordering for wholesalers still using phone, email, and fax — in the food vertical, providing direct domain knowledge transferable to industrial distribution.

## Key Risks

**Name disambiguation / brand confusion:** "Ventura" is a common word (city in California, multiple existing companies including Ventura Foods, Ventura Therapeutics, AIM Ventura Capital, and VenturusAI). Search results for the company are heavily polluted by unrelated entities. This creates SEO and brand-building challenges in a B2B context where discoverability matters for inbound leads.

**Direct YC-batch competitor overlap:** Distro, also a YC-backed company, targets the same core market — AI sales automation for wholesale distributors — with overlapping features (automated quoting, ERP integration, RFQ processing). Both companies are competing for the same distributor customer base with similar value propositions, and Distro has a head start as a 2024 YC company.

**ERP integration fragility:** Ventura claims integration with nine ERP systems. Maintaining reliable bi-directional integrations across SAP, Oracle, Epicor, NetSuite, Microsoft Dynamics, Infor, Salesforce, DMSI Agility, and RingCentral — each with version-specific APIs and customer-specific configurations — is a significant ongoing engineering burden for a 2-person team. Any integration breakage directly disrupts customer operations.

**Well-funded competitors in adjacent space:** Parspec ($31.5M raised, 288 customers) and Endeavor AI ($7M seed, Craft Ventures backing) have more capital and are expanding into overlapping territory. Go Autonomous ($13.4M raised) has enterprise customers (Grundfos, Saint-Gobain) and a 2-year head start in AI-driven B2B order automation.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global industrial distribution: $7.86T in 2024, projected $12.48T by 2033 at 4.97% CAGR (Precedence Research, 2024 via search snippet). US: $2.84T in 2023 (Ken Research, 2024 via search snippet). |
| SAM | No public data found for AI quoting/order-entry software spend within industrial distribution specifically. |
| Traction | Website claims 3x productivity, 95%+ automation rate (ventura.ai). LinkedIn: 15 followers (LinkedIn). No named customers, revenue, or user counts publicly disclosed. |
| Revenue Signal | No public data found |
| Founders | Jack Collins: MSc ML Imperial College, Founding Engineer at Develop Health ($7M ARR), creator of magentic (2.4K GitHub stars). Swen Koller: MS Eng/MBA Harvard, ex-BCG, co-founded bravo (B2B SaaS for wholesalers, exited to Sensational AG). |
| Competitors | Distro ($500K raised, YC, revenue unknown, overlapping distributor AI quoting). Endeavor AI ($7M seed, revenue unknown, broader manufacturing AI platform). Go Autonomous ($13.4M raised, revenue unknown, general B2B autonomous commerce). Parspec ($31.5M raised, revenue unknown, 288 customers, construction supply chain focus). |
| Moat Signals | Per-customer data accumulation from processing quotes/orders; deep ERP integrations across 9 systems creating switching costs. No proprietary IP or patents found. |
| Risk Factors | Brand disambiguation challenge, direct YC-batch competitor (Distro), ERP integration maintenance burden for 2-person team, well-funded adjacent competitors |
| Founder Reach | Jack Collins: LinkedIn linkedin.com/in/jackmpcollins/, GitHub 2.4K stars (magentic), Twitter unverified. Swen Koller: LinkedIn linkedin.com/in/swenkoller/, Twitter not found, GitHub not found. |
| Distribution Signals | No Product Hunt launch found. No app store presence. LinkedIn: 15 followers. No other distribution signals found. |
| Emails | support@ventura.ai |
