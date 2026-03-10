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
| Emails | kerim@qomplement.com (Codemix startup profile) |

## The Idea

**Problem:** Enterprise data overwhelmingly lives in documents — qomplement states that 90% of enterprise data is document-bound (YC company page). Existing intelligent document processing (IDP) tools focus on extracting data from documents, but in real workflows the extracted data must then be filled back into other internal forms — PDF forms, spreadsheet templates, and other structured documents that teams already use. This second half of the workflow — the "filling" step — remains largely manual. Customer segments include any enterprise teams handling high-volume document workflows (finance, insurance, logistics, compliance).

**Approach:** qomplement builds AI agents that take messy, unstructured data and fill it into internal PDF forms and spreadsheet templates (YC company page). The Codemix profile describes the broader vision as "turning companies into multi-agent systems" (Codemix startup profile). Their X/Twitter bio references "turning invoices and POs into system-ready data" (X/@qomplementai via search snippet), indicating an initial focus on accounts payable and procurement document workflows.

**Differentiation:** Most IDP competitors (Rossum, Nanonets, Reducto, Sensible) focus on the extraction side — converting unstructured documents into structured data or JSON. qomplement's stated differentiation is addressing the downstream step: taking extracted data and populating it into the specific internal templates and forms organizations already use. This positions the product as complementary to or downstream of extraction tools, rather than a direct substitute.

**Business Model:** No public pricing page was found (website not fully accessible at time of research — appears to rely on JavaScript rendering). [Inferred]: Most likely monetization path is per-document or per-agent SaaS pricing, given the B2B enterprise focus and the consumption-based patterns common in document processing tools.

**TAM/SAM:** The global intelligent document processing market was valued at USD 2.30 billion in 2024 and is projected to reach USD 12.35 billion by 2030, at a CAGR of 33.1% (Grand View Research, 2025 via search snippet). The broader AI-powered enterprise automation market is projected to reach USD 135.06 billion by 2034 at a CAGR of 23.5% (Polaris Market Research via search snippet). qomplement targets the document-filling subset of this market. No public SAM estimate specific to document filling (as opposed to extraction) was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to mid-market and enterprise teams with high-volume document workflows (AP/AR, procurement, compliance), potentially starting with invoice and purchase order use cases given the X/Twitter bio language. The YC network and Spring 2026 batch Demo Day provide initial distribution leverage.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) accumulated template libraries and mapping logic for customer-specific internal forms, which create switching costs as each deployment is customized to the customer's document ecosystem; (2) accuracy improvements from processing volume, as AI agents trained on real-world form-filling corrections would build a data advantage over time. Neither is proven at this stage.

**Market structure:** [Inferred]: Incumbent IDP vendors (ABBYY, UiPath, Kofax) have focused primarily on extraction pipelines and RPA workflows. Adding a form-filling layer would require these vendors to build template-mapping intelligence and handle the diversity of internal document formats, which is adjacent to but distinct from their core extraction technology. However, there is no structural barrier (such as regulatory or business model conflict) preventing them from doing so — the barrier is primarily one of product focus and engineering investment.

**Commoditization risk:** Large language models (GPT-4, Claude, Gemini) increasingly handle document understanding tasks out of the box. Any team with access to frontier LLMs can build basic PDF form-filling capabilities. The risk of commoditization is high at the model layer. Differentiation would need to come from workflow integration, accuracy on complex enterprise forms, template management, and enterprise compliance features rather than raw AI capability.

## Market & Traction

**Traction signals:**
- Twitter/X: @qomplementai — 16 followers, joined April 2025 (X search snippet). A second handle @qomplement_ai was also found (X search result) but details not retrievable.
- LinkedIn: linkedin.com/company/qomplement/ (YC company page)
- Pre-seed stage, last funding date listed as May 1, 2025 (Codemix startup profile)
- No Product Hunt launch found.
- No press coverage found in named publications.
- No app store listings, Chrome extension installs, or web traffic estimates found.
- No Discord or Slack community found.
- No revenue or customer count publicly disclosed.
- No job postings found beyond the team of 4.
- Website not fully accessible at time of research (JavaScript-rendered content did not load).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. qomplement |
|---|---|---|---|
| **Rossum** | $111M total ($100M Series A from General Catalyst, 2023) (Tracxn via search snippet) | $44.9M revenue in 2024 (Latka via search snippet) | End-to-end transactional document automation platform focused on extraction + validation for 275+ enterprise customers; does not specifically market form-filling agents |
| **Nanonets** | $42M total ($29M Series B led by Accel, 2024) (TechCrunch, Mar 2024) | Revenue not disclosed; 10,000+ customers, 3x annual revenue growth reported (TechCrunch, Mar 2024) | AI-powered IDP and workflow automation with strong AP/reconciliation focus; broader workflow automation beyond just document filling |
| **Reducto** | $108M total ($75M Series B led by a16z, Oct 2025) (Reducto blog, Oct 2025) | Revenue not disclosed; processed 1B+ pages (Reducto blog) | API-first document parsing converting unstructured files to structured JSON; focused on extraction rather than filling |
| **Sensible** | ~$8M+ total ($6.5M seed from Craft and Clocktower) (Sensible blog) | Revenue not disclosed | Developer-focused document extraction API using SenseML; focused on extraction side, not form filling |
| **Anvil** | $10M total Series A (Gradient Ventures, Craft Ventures) (Anvil blog; TechCrunch, Jun 2020) | $1.8M annual revenue (Growjo via search snippet) | Low-code paperwork automation platform and document SDK; focused on PDF generation and e-signatures rather than AI-driven filling |

**Why now:** [Inferred]: The enabling catalyst is the rapid improvement in LLM document understanding capabilities (2023–2025), which crossed a threshold where AI can reliably parse messy, unstructured data and map it to specific form fields. Prior IDP solutions relied on OCR + rules or narrow ML models that handled extraction but lacked the flexibility to perform the contextual reasoning required for accurate form filling. The availability of multimodal models capable of understanding both source documents and target form layouts makes an AI-agent approach to document filling newly feasible.

## Founders & Team

**Kerim Taray** — Co-founder & CEO
- BS Computer Science, Tecnológico de Monterrey (2020–2024) (RocketReach via search snippet; kerimtaray.com via search snippet)
- Previous experience at Stealth, Movana, and Contalink (RocketReach via search snippet)
- Co-founded Growsphere in 2024, a bootstrapped Monterrey-based nearshoring platform connecting businesses with Mexican manufacturers (Runway newsletter via WebFetch)
- Self-describes as "engineer, techno-optimist, and contrarian" (kerimtaray.com via search snippet)
- Twitter/X: No personal public account confirmed (the YC page lists company handle @qomplementai)
- LinkedIn: linkedin.com/in/kerim-taray/ — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Andres Garza Garcia** — Co-founder & CTO
- Listed as CTO on the YC company page (YC company page via WebFetch)
- No public LinkedIn profile positively identified (multiple "Andres Garza" profiles exist; none confirmed as the qomplement CTO)
- Twitter/X: No public account found
- GitHub: No public repos found
- Education and prior work history: No public data found

**Co-founder relationship:** Both founders appear to have ties to Mexico (Kerim Taray attended Tecnológico de Monterrey and co-founded Growsphere in Monterrey; "Garza Garcia" is a common surname pattern from the Monterrey metropolitan area). [Inferred]: They likely share a Tecnológico de Monterrey connection, but no direct confirmation of shared employer or university was found in public sources.

**Founder-market fit:** Kerim Taray's CS background and prior startup experience (Growsphere, plus roles at Contalink — a cloud accounting automation platform — and Movana) suggest familiarity with B2B software and workflow automation. Contalink specifically operates in accounting/document automation in the Mexican market, which is directly adjacent to qomplement's document-filling focus. No information was found on Andres Garza Garcia's specific domain expertise.

## Key Risks

**LLM commoditization and low technical barriers:** Document filling via LLMs is increasingly achievable with off-the-shelf models and API calls. Competitors like Reducto ($108M funded) and Nanonets ($42M funded) could add form-filling features as natural extensions of their extraction platforms, compressing the window for a standalone form-filling product to gain traction.

**Well-funded competitive field:** The IDP market has attracted significant capital — Rossum ($111M), Reducto ($108M), Nanonets ($42M) — with several players already serving enterprise customers at scale. qomplement's differentiation (filling vs. extraction) may not constitute a standalone product category if incumbents bundle filling into their existing platforms.

**Limited public founder track record in enterprise software:** Kerim Taray's prior ventures (Growsphere, a bootstrapped manufacturing marketplace; Contalink, a Mexican accounting platform) are early-stage and adjacent but not direct experience selling AI-powered enterprise software to US companies. No public data was found on the CTO's background, making it difficult to assess the team's technical depth for building production-grade document AI.

**Brand discoverability:** "qomplement" is a non-standard spelling that may create search and discoverability challenges. The company website did not render content at time of research (JavaScript-dependent), which could limit organic discovery and inbound leads.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | USD 12.35B by 2030 at 33.1% CAGR for IDP market (Grand View Research via search snippet) |
| SAM | No public data found for document-filling-specific segment |
| Traction | No public data found (no disclosed users, customers, or revenue) |
| Revenue Signal | No public data found |
| Founders | Kerim Taray (CEO): BS CS Tecnológico de Monterrey, prior roles at Contalink/Movana/Stealth, co-founded Growsphere. Andres Garza Garcia (CTO): No public background data found. |
| Competitors | Rossum ($111M raised, $44.9M revenue 2024, end-to-end IDP), Nanonets ($42M raised, revenue unknown, 10K+ customers, IDP + workflow), Reducto ($108M raised, revenue unknown, API document parsing), Sensible (~$8M+ raised, revenue unknown, developer extraction API), Anvil ($10M raised, $1.8M revenue, document SDK) |
| Moat Signals | No public data found |
| Risk Factors | LLM commoditization, well-funded IDP competitors, limited public founder track record |
| Founder Reach | Kerim Taray: LinkedIn 500+, Twitter not confirmed, GitHub not found. Andres Garza Garcia: No public profiles confirmed. |
| Distribution Signals | Twitter/X @qomplementai 16 followers (joined Apr 2025 via search snippet). No Product Hunt, app store, or other distribution signals found. |
| Emails | kerim@qomplement.com (Codemix startup profile) |
