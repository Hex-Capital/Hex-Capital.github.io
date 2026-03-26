# Korso

> The Intelligence Layer for Manufacturing.

| Field | Value |
|-------|-------|
| Website | https://korsoai.com/ |
| YC Page | https://www.ycombinator.com/companies/korso |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, Manufacturing |
| YC Partner | Andrew Miklas |
| Emails | support@korsoai.com |

## The Idea

**Problem:** Manufacturers receive RFQs via email, WhatsApp, and other channels, then manually extract line items, look up pricing history, generate quotes, and track resulting purchase orders (YC company page). This quote-to-order workflow is labor-intensive and error-prone. Only ~35% of enterprise procurement teams currently leverage AI for RFQs (SpiralScout, 2024 via search snippet). Existing solutions range from spreadsheets to legacy ERP quoting modules and newer point tools like Paperless Parts.

**Approach:** Korso automates the full quote-to-order workflow: ingesting RFQs from email and WhatsApp, extracting and classifying documents, generating professional quotes, and tracking purchase orders through production (korsoai.com, structured data). A RAG-powered AI assistant understands business documents, pricing history, and customer relationships, enabling natural-language queries and instant analysis (korsoai.com). The platform is built on "frontier AI research" per the website (korsoai.com).

**Differentiation:** Korso covers the end-to-end quote-to-order lifecycle including multi-channel ingestion (email + WhatsApp), whereas Paperless Parts focuses primarily on quoting for machine shops and fabricators (paperlessparts.com). Uptool targets quoting time reduction but does not emphasize purchase order tracking or supplier communication (Fabricating & Metalworking, 2024 via search snippet). DigiFabster offers email-to-order RFQ ingestion but is positioned for digital manufacturing (digifabster.com). [Inferred]: Korso's bundling of RFQ ingestion, quoting, PO tracking, and a conversational AI assistant in a single platform differentiates it from point solutions that address only one step.

**Business Model:** The website lists a "Pricing" link and a "Contact Sales" button but no visible pricing tiers or figures (korsoai.com). [Inferred]: Most likely monetization is SaaS subscription, possibly per-seat or per-facility, given the B2B manufacturing operations context and the "Contact Sales" motion.

**TAM/SAM:** The global Manufacturing Operations Management (MOM) software market was USD 17.46B in 2024 and is projected to reach USD 76.71B by 2033 at 19.1% CAGR (Grand View Research, 2024 via search snippet). AI in manufacturing was expected to exceed USD 2B by 2025 at 40%+ CAGR (Astra Canyon, 2024 via search snippet). [Inferred]: The SAM for AI-powered quoting/RFQ automation within manufacturing operations is a subset of the MOM market; no specific segment estimate was found.

**GTM / Distribution:** The website features a "Contact Sales" button, suggesting a sales-led motion (korsoai.com). [Inferred]: Most likely distribution path is direct outbound sales to small-to-mid-size manufacturers, given the quote-to-order workflow focus and contact-sales model.

## Defensibility

- **Data moat potential:** The platform ingests pricing history, customer relationships, and business documents per manufacturer (YC company page). [Inferred]: Over time, accumulated historical pricing and customer data could create switching costs, as the AI assistant's usefulness grows with data volume. This moat does not exist at launch.
- **Workflow integration:** Multi-channel ingestion (email, WhatsApp) and PO tracking create touchpoints across the manufacturer's operations (korsoai.com). [Inferred]: Deeper workflow integration increases switching costs once adopted.
- **No patents, open-source repos, or regulatory barriers found in public sources.**

**Market structure:** [Inferred]: Legacy ERP vendors (SAP, Oracle, Microsoft Dynamics) could add AI quoting features but face business model friction — their revenue depends on broad ERP platform sales, not point-solution quoting tools, and their sales cycles target IT departments rather than operations teams. Paperless Parts (Series B) has distribution but pre-dates the frontier LLM wave. No structural barrier identified beyond execution speed.

**Commoditization risk:** Multiple startups are building AI quoting for manufacturing: Uptool ($6M seed, Khosla/Eclipse/Bessemer/KP — Fabricating & Metalworking, 2024 via search snippet), Gendra (gogendra.com), Mercura AI (mercura.ai), Endeavor AI (endeavor.ai). The underlying LLM/RAG technology is broadly available. [Inferred]: Differentiation will depend on depth of manufacturing-domain training, integration quality, and speed of customer acquisition rather than proprietary model architecture.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- No Product Hunt listing found.
- No press coverage in named publications found.
- No app store presence, Chrome extension, or download counts found.
- No Discord or Slack community found.
- Company Twitter/X listed as @korsoai (YC company page); follower count not retrievable.
- LinkedIn company page not found via search; founder Alex Liu's profile references "Korso (YC X26)" (LinkedIn).
- 0 open job postings (YC company page).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Korso |
|-----------|---------|-------------|------------------------------|
| Paperless Parts | $30M, Series B (OpenView) (Startup Savant) | Revenue unknown | Established market leader in cloud quoting for machine shops/fabricators; lacks AI assistant and multi-channel ingestion |
| Uptool | $6M seed (Khosla, Eclipse, Bessemer, KP) (Fabricating & Metalworking, 2024 via search snippet) | Revenue unknown | AI quoting for SMB manufacturers; founded 2024; does not emphasize PO tracking or supplier communication |
| Mercura AI | No public data found | Revenue unknown | AI quote-and-order automation for distributors and manufacturers; broader distribution focus (mercura.ai) |
| Gendra | No public data found | Revenue unknown | AI quoting analyzing material costs, quantities, complexity; does not emphasize RFQ ingestion (gogendra.com) |
| Endeavor AI | No public data found | Revenue unknown | Broader AI platform for manufacturing and distribution workflows (endeavor.ai) |

**Why now:** [Inferred]: Frontier LLMs (GPT-4-class and beyond) crossed a capability threshold in 2024-2025 for reliably extracting structured data from unstructured manufacturing documents (drawings, RFQ emails, WhatsApp messages) and reasoning over pricing history — tasks that prior NLP could not handle with sufficient accuracy. Only ~35% of procurement teams use AI for RFQs (SpiralScout, 2024 via search snippet), indicating the adoption window is early.

## Founders & Team

**Daichi Hiraoka** — Co-founder
- Electrical Engineering, University of Pennsylvania (LinkedIn: linkedin.com/in/daichihiraoka/)
- Electrical Hardware Engineer, Penn Electric Racing — led redesign of accumulator charger system, circuit design and PCB layout in Altium (Penn Electric Racing website)
- Research with Dr. Hongcheng Liu on ML for radiation therapy treatment planning — reduced dose prediction discrepancies by 97% (search snippet via UPenn)
- Test Engineering intern at Rockwell Automation (search snippet)
- From Irvine, California (Penn Electric Racing website)
- Twitter/X: No public account found
- GitHub: No public repos found

**Alex Liu** — Co-founder
- LinkedIn: linkedin.com/in/alexdliu7/ — title "Korso (YC X26)"
- Dropped out of school; LinkedIn bio states he has "read more research papers after dropping out than while in school" (LinkedIn snippet via search)
- No prior companies or education institution identified in public sources
- Twitter/X: No public account found
- GitHub: No public repos found

**Martin Pan** — Co-founder
- BSE Mechanical Engineering + MSE Robotics, University of Pennsylvania (2024-2028) (RocketReach)
- Automations Engineer at General Motors (2025) (RocketReach)
- Mechanical member, Penn Electric Racing (2024-2025) (RocketReach)
- Research Assistant, University of Michigan NeuRRo Lab (2023-2024) (RocketReach)
- Research Assistant, UCI Sustainability Decathlon Team (2022-2023) (RocketReach)
- From Irvine, California (Penn Electric Racing website)
- Twitter/X: No public account found
- GitHub: No public repos found

**Co-founder relationship:** Daichi Hiraoka and Martin Pan both served on Penn Electric Racing at UPenn (Electrical and Mechanical teams respectively) and are both from Irvine, California (Penn Electric Racing website). No shared-history data found linking Alex Liu to the other founders.

**Founder-market fit:** Daichi brings electrical hardware engineering and ML research experience; Martin brings mechanical engineering, robotics, and direct manufacturing experience via General Motors (RocketReach). [Inferred]: The combination of manufacturing-domain experience (GM, Penn Electric Racing) and ML/AI research provides relevant technical grounding for building AI tools for manufacturers. No advisors, board members, or notable investors beyond YC were found.

## Key Risks

**Name confusion risk:** "Korso" returns results for Kore.ai, Korro AI, korzo AI, and individuals named "Korso" across search engines. This may hamper organic discoverability and SEO. The domain korsoai.com mitigates this partially.

**Crowded competitive field:** At least five funded startups (Paperless Parts at $30M, Uptool at $6M, plus Gendra, Mercura AI, Endeavor AI) target AI quoting/RFQ automation for manufacturers (multiple sources cited above). Paperless Parts has Series B funding and an established customer base.

**Founder experience depth:** All three founders appear to be current or recent UPenn undergraduates with internship-level industry experience (LinkedIn, RocketReach, Penn Electric Racing website). No prior startup exits or senior industry roles were found in public sources.

**Enterprise sales cycle:** Manufacturing operations purchasing decisions typically involve IT, operations, and finance stakeholders. [Inferred]: Long enterprise sales cycles could slow early traction for a 3-person pre-seed team without dedicated sales hires.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | USD 17.46B in 2024, projected USD 76.71B by 2033 at 19.1% CAGR (Grand View Research, 2024 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Daichi Hiraoka (Co-founder): EE at UPenn, Penn Electric Racing, ML research. Alex Liu (Co-founder): dropped out, software. Martin Pan (Co-founder): ME/Robotics at UPenn, GM Automations Engineer. |
| Competitors | Paperless Parts ($30M raised, revenue unknown, established cloud quoting leader), Uptool ($6M seed, revenue unknown, AI quoting for SMB mfg), Mercura AI (funding unknown, revenue unknown, quote-order automation), Gendra (funding unknown, revenue unknown, AI quoting), Endeavor AI (funding unknown, revenue unknown, broad mfg AI platform) |
| Moat Signals | No public data found |
| Risk Factors | Crowded competitor field with better-funded players, founder experience limited to internship-level, enterprise sales cycle challenge |
| Founder Reach | No public data found |
| Distribution Signals | No public data found |
| Emails | support@korsoai.com (korsoai.com) |
