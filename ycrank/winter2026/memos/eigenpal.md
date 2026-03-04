# EigenPal

> AI Document Workflows for Enterprises

| Field | Value |
|-------|-------|
| Website | https://www.eigenpal.com/ |
| YC Page | https://www.ycombinator.com/companies/eigenpal |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | No public data found |
| Location | San Francisco, CA, USA |
| Tags | Documents, Artificial Intelligence, Automation |
| YC Partner | Jared Friedman |
| Emails | No public data found |

## The Idea

**Problem:** Enterprises across finance, insurance, manufacturing, and healthcare process high volumes of documents — KYC forms, invoices, claims, shipping documents, contracts, receipts, and loan packages. These documents are frequently messy scans, handwritten forms, or third-party PDFs that break template-based OCR approaches. Current solutions either require rigid templates, deliver inconsistent accuracy, or lack enterprise-grade deployment flexibility. The company claims to be working with "$1B+ revenue enterprises" (eigenpal.com) and lists McKinsey, Elastic, Accenture, and MIT as customer logos on its website (eigenpal.com).

**Approach:** EigenPal provides an AI-powered document processing platform with several components: (1) template-free AI OCR that handles handwritten, scanned, or damaged documents; (2) an agentic workflow builder configurable with natural language; (3) an evaluation-first approach that lets users test workflows on historical documents before deployment; (4) guardrails for understanding, extraction, and validation; and (5) full observability with real-time monitoring of accuracy, costs, and compliance, with exports to Grafana, Datadog, and Elk (eigenpal.com). The platform is available as both SaaS (studio.eigenpal.com) and on-premises deployment.

**Differentiation:** Unlike template-based OCR tools (e.g., traditional ABBYY configurations), EigenPal processes documents without predefined templates. Compared to Rossum, which also uses AI-based extraction without templates, EigenPal emphasizes on-premises deployment readiness and an evaluation-first workflow testing approach. Compared to Hyperscience, which focuses on human-in-the-loop verification, EigenPal positions around agentic workflows with natural language configuration and built-in guardrails. The company claims "99% accuracy" on its homepage (eigenpal.com).

**Business Model:** No public pricing page was found (the /pricing URL returns 404). A free trial is available via studio.eigenpal.com (eigenpal.com). [Inferred]: Given the enterprise focus, on-prem deployment option, and logos shown, the most likely monetization is a SaaS subscription with volume-based pricing and premium pricing for on-premises deployment.

**TAM/SAM:** The global intelligent document processing (IDP) market was valued at USD 2.3 billion in 2024 (GM Insights, 2025 via search snippet) to USD 2.61 billion in 2024 (Precedence Research, 2025 via search snippet), projected to reach USD 12.35 billion by 2030 at a 33.1% CAGR (Grand View Research, 2025 via search snippet). Alternative estimates project the market reaching USD 43.92 billion by 2034 at 33.68% CAGR (Precedence Research, 2025 via search snippet). SAM: No public data found for EigenPal's specific serviceable segment.

**GTM / Distribution:** The YC page notes EigenPal is "already working with 2 large European banks on loan automations" (ycombinator.com/companies/eigenpal). The website lists enterprise logos including McKinsey, Elastic, Accenture, and MIT (eigenpal.com). Demo booking is available via Calendly (eigenpal.com). [Inferred]: The primary distribution path appears to be direct enterprise sales, leveraging the YC network and existing enterprise relationships, with loan processing in banking as a beachhead vertical.

## Defensibility

EigenPal's open-source docx-js-editor project (443 stars on GitHub as of March 2026; github.com/eigenpal/docx-js-editor) demonstrates document-format engineering capability and creates developer community awareness, though it is adjacent to rather than core to the IDP product. The evaluation-first workflow approach and on-premises deployment readiness are product differentiators but not yet proven moats. The company lists SOC II Type 2, AICPA, CCPA, and GDPR compliance (eigenpal.com), which represent meaningful investment for a pre-seed company if verified.

[Inferred]: Potential defensibility could develop via (1) proprietary training data from enterprise document processing at scale, (2) workflow templates and configurations built by customers creating switching costs, and (3) compliance certifications creating barriers for newer entrants. However, these are unproven at this stage.

**Market structure:** Enterprise IDP incumbents (ABBYY, Kofax) built their businesses on template-based OCR and license-heavy on-premises models. [Inferred]: Their migration to AI-native, template-free approaches requires rearchitecting core product offerings and potentially cannibalizing existing per-template licensing revenue. However, newer AI-native competitors like Rossum and Hyperscience face no such structural barrier. No structural barrier identified against well-funded AI-native IDP competitors at this stage.

**Commoditization risk:** The underlying technology — LLM-based document extraction — is increasingly commoditized. Cloud providers (Google Document AI, AWS Textract, Azure Document Intelligence) offer document processing APIs. Rossum ($114.5M raised; Crunchbase via search snippet), Hyperscience (~$300M raised; CB Insights via search snippet), and Nanonets ($29M raised; TechFinitive via search snippet) are well-funded direct competitors. The workflow builder and evaluation-first approach provide differentiation but could be replicated.

## Market & Traction

**Traction signals:**
- Working with 2 large European banks on loan automations (YC page, ycombinator.com/companies/eigenpal)
- Customer logos on website: McKinsey, Elastic, Accenture, MIT (eigenpal.com)
- Claims to serve "$1B+ revenue enterprises" (eigenpal.com)
- Open-source: eigenpal/docx-js-editor — 443 stars, 23 forks on GitHub (github.com/eigenpal/docx-js-editor, March 2026)
- Hacker News Show HN post for docx-js-editor: 130 points, 44 comments (news.ycombinator.com, ~February 2026)
- Twitter/X: @eigenpal (follower count not retrievable due to JavaScript rendering)
- LinkedIn: linkedin.com/company/eigenpal (follower count not retrievable)
- SOC II Type 2, AICPA, CCPA, GDPR compliance listed (eigenpal.com)
- YC Launch post with 2-minute demo video (ycombinator.com)
- No Product Hunt listing found
- No public revenue figures found
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. EigenPal |
|---|---|---|---|
| **Rossum** | $114.5M total, $100M Series A from General Catalyst (Oct 2021) (Crunchbase, VentureBeat via search snippet) | $44.9M revenue (GetLatka, 2024 via search snippet) | Cloud-native B2B document gateway; ~7 years in market with deeper enterprise penetration |
| **Hyperscience** | ~$300M total, $100M Series E (Dec 2021) (CB Insights, Tracxn via search snippet) | $4.6M revenue reported in 2020 (GetLatka via search snippet) | Human-in-the-loop verification emphasis; strong handwriting recognition; longer track record |
| **Nanonets** | $29M Series B (TechFinitive via search snippet) | No public data found | Developer-friendly API-first approach; focuses on SMB-to-midmarket |
| **Docsumo** | $3.5M seed (Docsumo blog via search snippet) | ~$963K annual revenue (CB Insights, March 2025 via search snippet) | SMB focus; simpler document types (invoices, bank statements) |
| **ABBYY** | Private, founded 1989 | No public data found | Established incumbent with broad enterprise install base; legacy template-based approach transitioning to AI |

**Why now:** [Inferred]: The convergence of several factors has opened the IDP opportunity in the past 12-24 months: (1) LLM capabilities crossed a performance threshold enabling template-free document understanding with high accuracy on messy, handwritten, and damaged documents — a task previously requiring custom ML models per document type; (2) enterprise comfort with AI-in-the-loop processing has increased following widespread LLM adoption; (3) regulatory requirements (SOC II, GDPR, CCPA) drive demand for auditable, observable AI document processing rather than ad-hoc LLM API calls; and (4) the cost of running inference for document extraction has declined, making AI-native approaches economically viable compared to manual processing at scale.

## Founders & Team

**Jedrzej (Jedr) Blaszyk** — Co-Founder
- MEng in Computing (AI focus) from Imperial College London; master's thesis on Geometric Deep Learning for Subcortical Brain Shape Analysis (personal website, j.blaszyk.me via search snippet)
- Previously: Engineer at Elastic and Yelp (YC page)
- Maintains a personal tech blog on software engineering, search, and AI (j.blaszyk.me)
- Twitter/X: @jedr_blaszyk (follower count not retrievable)
- LinkedIn: linkedin.com/in/jedrzej-blaszyk
- GitHub: github.com/jedrazb — 36 public repos, 28 followers. Pinned repos include contributions to Yelp/nrtsearch (306 stars), elastic/mcp-server-elasticsearch (616 stars), eigenpal/docx-js-editor (443 stars), and python-tsp-simulated-annealing (61 stars) (GitHub)

**Matej Novak** — Co-Founder
- Computer Science at Imperial College London (starting ~2016) and Massachusetts Institute of Technology (~2019) (YC page, Highperformr, MIT SuperUROP)
- MIT SuperUROP Scholar (2019-2020), EECS department, advised by Alex Pentland (MIT Media Lab); research on refugee migration data analysis (MIT SuperUROP page)
- MIT Lightweight Crew team member, 2019-20 (MIT Athletics)
- Previously: Business Analyst Intern at McKinsey & Company (2018), Software Engineer at Improbable (2019), Undergraduate Research Assistant at MIT (2019-2020), Project Analyst Intern at Accenture (2016) (Highperformr)
- Co-Founder & CEO of Assetario (2020-present), a revenue optimization SaaS engine for mobile apps, headquartered in Cambridge, MA (Tracxn, The Org via search snippet)
- Described as "3-time founder of B2B AI companies" (YC page)
- Twitter/X: No public account found linked to EigenPal
- LinkedIn: linkedin.com/in/novak-matej
- GitHub: No confirmed public GitHub profile found

**Co-founder relationship:** Both founders studied Computer Science at Imperial College London (Blaszyk for MEng, Novak beginning ~2016), indicating they likely overlapped at Imperial before Novak transferred to or also attended MIT.

**Founder-market fit:** Blaszyk brings direct engineering experience in search and AI from Elastic (an enterprise data company) and Yelp, with demonstrated expertise in document processing evidenced by the docx-js-editor open-source project. Novak brings enterprise consulting exposure from McKinsey and Accenture, prior founding experience with Assetario (a B2B AI SaaS company), and MIT AI research under Alex Pentland. The combination of deep document/search engineering (Blaszyk) and B2B AI startup experience with enterprise sales exposure (Novak) is relevant to building an enterprise document automation company.

## Key Risks

**Well-funded AI-native competitors:** Rossum ($114.5M raised; Crunchbase via search snippet) and Hyperscience (~$300M raised; CB Insights via search snippet) are direct competitors with established enterprise customer bases, mature products, and significantly more capital. Rossum reported $44.9M in revenue in 2024 (GetLatka via search snippet). EigenPal must differentiate on product (evaluation-first, on-prem) rather than sales force or brand.

**Cloud provider platform risk:** Google Document AI, AWS Textract, and Azure Document Intelligence offer document extraction APIs that are bundled with broader cloud contracts enterprises already hold. These providers can undercut standalone IDP vendors on price and integration convenience, particularly as their AI capabilities improve. Mitigation: EigenPal's on-premises deployment and workflow orchestration layer extend beyond simple extraction APIs.

**Unverified enterprise claims:** The website lists McKinsey, Elastic, Accenture, and MIT as customer logos and references "$1B+ revenue enterprises" (eigenpal.com), but no independent verification (case studies, press releases, or named testimonials) was found. The claim of working with "2 large European banks" comes only from the YC page. The nature and depth of these relationships (pilot vs. paid contract vs. advisory) is unclear.

**Commoditization of LLM-based extraction:** As foundation models improve, the core extraction capability becomes increasingly available via API calls to general-purpose LLMs (GPT-4, Claude, Gemini) without specialized IDP tooling. EigenPal's differentiation lies in the workflow layer, guardrails, and observability — but these are features, not fundamental technology barriers.

**Prior startup unclear outcome:** Novak's prior company Assetario (founded 2020) appears still listed as active on multiple directories (Tracxn, The Org via search snippet). The relationship between this ongoing venture and full-time commitment to EigenPal is not publicly clarified.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | USD 2.3–2.6B in 2024, projected USD 12.35B by 2030 at 33.1% CAGR (Grand View Research, GM Insights, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 2 large European bank customers for loan automations (YC page); customer logos: McKinsey, Elastic, Accenture, MIT (eigenpal.com); docx-js-editor: 443 GitHub stars (GitHub, March 2026); Hacker News Show HN: 130 points (HN, ~Feb 2026) |
| Revenue Signal | No public data found |
| Founders | Jedrzej Blaszyk (Co-Founder): Imperial College MEng CS, ex-Elastic, ex-Yelp. Matej Novak (Co-Founder): Imperial + MIT CS, ex-McKinsey, ex-Improbable, 3x founder (Assetario prior) |
| Competitors | Rossum ($114.5M raised, $44.9M revenue, AI-native template-free IDP with 7-year head start); Hyperscience (~$300M raised, $4.6M revenue in 2020, human-in-the-loop verification focus); Nanonets ($29M raised, revenue unknown, developer-first API approach); Docsumo ($3.5M raised, ~$963K revenue, SMB-focused) |
| Moat Signals | SOC II Type 2 / GDPR / CCPA compliance (eigenpal.com); on-prem deployment capability; evaluation-first workflow testing; open-source docx-js-editor (443 stars) for developer community awareness |
| Risk Factors | Well-funded direct competitors (Rossum, Hyperscience), cloud provider platform risk (Google/AWS/Azure doc AI), LLM-based extraction commoditization |
| Founder Reach | Blaszyk: Twitter @jedr_blaszyk (count not retrievable), GitHub jedrazb (28 followers, pinned repos totaling 1,400+ stars), LinkedIn in/jedrzej-blaszyk. Novak: LinkedIn in/novak-matej, no Twitter/GitHub found |
| Distribution Signals | YC Launch post with demo video (ycombinator.com); Hacker News Show HN: 130 points, 44 comments (~Feb 2026); no Product Hunt listing found |
| Emails | No public data found |
