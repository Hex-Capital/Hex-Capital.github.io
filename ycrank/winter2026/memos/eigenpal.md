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

## The Idea

**Problem:** Enterprises across finance, insurance, manufacturing, and healthcare process large volumes of documents — KYC forms, invoices, claims, shipping forms, contracts, receipts, and loan documents — that arrive as messy scans, handwritten forms, or third-party documents. Existing solutions typically require templating for each document type, break down on low-quality or handwritten inputs, and lack end-to-end workflow capabilities. Current alternatives include legacy OCR vendors (ABBYY, Kofax), newer IDP platforms (Hyperscience, Rossum, Docsumo), and manual data entry teams.

**Approach:** EigenPal provides an AI-powered platform combining LLM-based vision OCR (handling handwritten, scanned, and damaged documents without templates), a visual workflow builder for constructing multi-step document processing pipelines, guardrails for data extraction and validation, an evaluation framework for testing on historical data before deployment, and real-time observability with exports to Grafana, Datadog, and ELK (eigenpal.com). The platform claims 99% accuracy without requiring document templates (eigenpal.com). It offers both cloud and on-premises deployment.

**Differentiation:** EigenPal differentiates from legacy IDP vendors (ABBYY, Kofax) by eliminating template requirements — processing arbitrary document types via LLM-powered vision rather than pre-configured templates. Versus newer IDP platforms like Rossum and Hyperscience, EigenPal emphasizes an evaluation-first approach (testing workflows against historical documents before deployment), configurable pipeline components (OCR, VLM, LLM), and on-premises deployment readiness. The company has also released an open-source WYSIWYG DOCX editor (eigenpal/docx-js-editor on GitHub, 396 stars) used for document workflow output templates (GitHub).

**Business Model:** A free trial is available via studio.eigenpal.com, with a "Book a demo" option for enterprise buyers (eigenpal.com). Specific pricing tiers are not publicly listed. [Inferred]: Most likely monetization path is a SaaS subscription model with per-document or per-workflow pricing tiers, with premium pricing for on-premises deployment, given the enterprise focus and SOC II Type 2 certification investment.

**TAM/SAM:** The intelligent document processing (IDP) market was valued at approximately $2.3B in 2024 (GM Insights, 2024 via search snippet), with projections to reach $43.9B by 2034 at a ~24.7% CAGR (Precedence Research, 2025 via search snippet). Grand View Research estimates a 33.1% CAGR from 2025 to 2030 (Grand View Research, 2025 via search snippet). SAM: No public data found for EigenPal's specific serviceable segment.

**GTM / Distribution:** The YC page states EigenPal is "currently working with two large European banks on loan automation projects" (YC page). The website references being "proven with $1B+ revenue enterprises" (eigenpal.com). [Inferred]: Most likely distribution path is direct enterprise sales starting with financial services verticals (banking, insurance), leveraging the existing European bank relationships and expanding via YC network into US enterprise accounts.

## Defensibility

EigenPal's open-source DOCX editor (396 GitHub stars; GitHub) creates a developer community entry point. The platform's SOC II Type 2, GDPR, and CCPA certifications (eigenpal.com) represent compliance investments that create switching costs for regulated enterprise customers. On-premises deployment capability serves as a differentiation point for security-sensitive enterprises.

**Market structure:** Legacy IDP incumbents (ABBYY, Kofax) have built their businesses on template-based document processing. Shifting to template-free LLM-based processing would require rearchitecting their core product and potentially cannibalizing existing per-template licensing revenue. Newer IDP platforms (Hyperscience, Rossum) have significant existing customer bases on their current architectures, creating migration friction. No structural barrier identified at this stage beyond this architecture-cannibalization dynamic.

**Commoditization risk:** LLM-based document processing is becoming more accessible as foundation models improve. Any team with access to commercial vision-language models (GPT-4V, Claude, Gemini) can build basic document extraction. The barrier lies in the workflow orchestration layer, enterprise compliance certifications, accuracy guarantees, and on-premises deployment capabilities, which require sustained engineering investment but are replicable given sufficient resources.

## Market & Traction

1. **Traction signals:**
   - Working with two large European banks on loan automation projects (YC page)
   - Proven with "$1B+ revenue enterprises" (eigenpal.com)
   - SOC II Type 2 certified (eigenpal.com)
   - Open-source repo eigenpal/docx-js-editor: 396 GitHub stars (GitHub)
   - Jedrzej Blaszyk contributed to elastic/mcp-server-elasticsearch (612 stars) and Yelp/nrtsearch (305 stars) — these are employer repos, not EigenPal projects (GitHub)
   - LinkedIn company page exists at linkedin.com/company/eigenpal; follower count not retrievable
   - Twitter/X: @jedr_blaszyk (co-founder account); follower count not retrievable
   - Product Hunt: No launch found
   - Discord/Slack community: No public data found
   - App store / Chrome extension: Not applicable

2. **Competitive landscape:**

   | Competitor | Funding | Revenue/ARR | Key Differentiator vs. EigenPal |
   |-----------|---------|-------------|-------------------------------|
   | **Hyperscience** | $439M total (Tracxn via search snippet) | Revenue unknown | Proprietary ML models for structured and unstructured documents; more mature enterprise customer base; no template-free LLM approach |
   | **Rossum** | ~$104–114M total, $100M Series A led by General Catalyst in 2021 (Rossum blog) | $44.9M revenue in 2024 (GetLatka via search snippet) | AI-native platform with agent-based automation for transactional documents; 450+ enterprise customers; 276-language support |
   | **Docsumo** | $3.7M total (Tracxn via search snippet) | $10.3M revenue in 2024 (GetLatka via search snippet) | Pre-trained API models for structured/semi-structured documents; agentic approach with prompt-based validations; lower price point |
   | **ABBYY Vantage** | Private company (no VC funding disclosed) | 60% new ARR growth in 2023 (ABBYY press release, Feb 2024) | Market leader with large skills marketplace; process intelligence with Timeline product; IDC MarketScape and Gartner leader |

3. **Why now:** [Inferred]: The emergence of production-ready vision-language models (GPT-4V, Claude Vision, Gemini) in 2023–2024 crossed a capability threshold for processing messy, handwritten, and unstructured documents without templates — a task that was previously unreliable with traditional OCR. This reduces the engineering effort needed to handle the "long tail" of document types that legacy template-based IDP could not efficiently support.

## Founders & Team

**Jedrzej (Jedr) Blaszyk** — Co-founder
- BSc Computer Science, Imperial College London (YC page)
- Previously: Engineer at Elastic; Engineer at Yelp (YC page, LinkedIn)
- Contributor to open-source search infrastructure (Yelp/nrtsearch, elastic/mcp-server-elasticsearch)
- Twitter/X: @jedr_blaszyk; follower count not retrievable
- LinkedIn: linkedin.com/in/jedrzej-blaszyk — 246 connections (LinkedIn via search snippet)
- GitHub: github.com/jedrazb — 36 repos, 84 stars total, 28 followers. Pinned repos include Yelp/nrtsearch (305 stars), elastic/mcp-server-elasticsearch (612 stars), eigenpal/docx-js-editor (396 stars) (GitHub)
- Medium blog at medium.com/@jedrzejblaszyk covering software engineering, search, and AI

**Matej Novak** — Co-founder
- BSc Computer Science, MIT; also studied at Imperial College London (YC page, MIT SuperUROP)
- 3-time B2B AI founder (YC page)
- Previously: CEO & Co-Founder at Assetario (2020–present), a revenue optimization SaaS for mobile apps that raised $4M Series A in April 2022 from Credo Ventures and Hoxton Ventures (Crunchbase via search snippet)
- Intern experience at McKinsey, Improbable, Accenture (Highperformr via search snippet)
- MIT SuperUROP scholar: analyzed refugee migration data for Inter-American Development Bank (MIT SuperUROP)
- Received the Morgan Stanley Award at Imperial College London (Highperformr via search snippet)
- Twitter/X: Multiple possible handles found (@MatejNovak3, @novak_matej, @matejnovak); confirmed account not determinable; follower counts not retrievable
- LinkedIn: linkedin.com/in/novak-matej — 500+ connections (LinkedIn via search snippet)
- GitHub: No confirmed public profile found

**Co-founder relationship:** Both founders studied Computer Science at Imperial College London (YC page), indicating a shared educational background and likely prior acquaintance.

**Founder-market fit:** Blaszyk brings deep search and data infrastructure experience from Elastic and Yelp — directly relevant to document indexing, retrieval, and processing pipelines. Novak brings serial B2B AI founding experience (3-time founder) with an MIT CS background and enterprise consulting exposure (McKinsey, Accenture). The combination of infrastructure engineering depth and B2B go-to-market experience aligns with building and selling an enterprise document automation platform. The website references that the team has backgrounds from McKinsey, Elastic, Accenture, and MIT (eigenpal.com).

## Key Risks

**LLM cost and latency at scale:** Processing high volumes of enterprise documents through vision-language models incurs per-page API costs that may compress margins. As document volume scales, the unit economics depend heavily on model pricing trends and the ability to use smaller, fine-tuned models. No public data on EigenPal's cost structure or model architecture choices.

**Incumbent response in IDP:** ABBYY, Hyperscience, and Rossum are all actively incorporating LLM and agentic AI capabilities into their platforms (ABBYY press releases, 2024; Rossum Aurora 1.5 announcement). These incumbents have established enterprise relationships, compliance certifications, and larger engineering teams. The template-free LLM approach that differentiates EigenPal today may become table stakes within 12–18 months.

**Co-founder attention split:** Matej Novak is listed as CEO & Co-Founder of Assetario (2020–present) alongside his role at EigenPal (ContactOut, RocketReach via search snippet). The status of Assetario and whether Novak is fully committed to EigenPal is unclear from public sources.

**Enterprise sales cycle length:** Targeting "$1B+ revenue enterprises" and large European banks as a pre-seed startup with a small team requires navigating extended procurement cycles, security reviews, and compliance requirements. SOC II Type 2 certification mitigates some of this, but sales velocity risk remains for a capital-constrained team.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.3B IDP market in 2024, projected $43.9B by 2034 at ~24.7% CAGR (GM Insights / Precedence Research, 2024–2025 via search snippets) |
| SAM | No public data found |
| Traction | Two large European bank customers for loan automation (YC page); proven with "$1B+ revenue enterprises" (eigenpal.com); 396 GitHub stars on eigenpal/docx-js-editor (GitHub) |
| Revenue Signal | No public data found; free trial available, demo-based enterprise sales (eigenpal.com) |
| Founders | Jedrzej Blaszyk (Co-founder): Imperial College CS, ex-Elastic, ex-Yelp. Matej Novak (Co-founder): MIT CS, 3x B2B AI founder, ex-Assetario CEO ($4M raised), ex-McKinsey intern |
| Competitors | Hyperscience ($439M raised, revenue unknown, proprietary ML vs. LLM-based); Rossum (~$104M raised, $44.9M revenue 2024, agent-based automation); Docsumo ($3.7M raised, $10.3M revenue 2024, pre-trained API models); ABBYY (private, 60% new ARR growth 2023, market leader with skills marketplace) |
| Moat Signals | SOC II Type 2, GDPR, CCPA certifications (eigenpal.com); open-source docx-js-editor (396 stars); on-premises deployment capability |
| Risk Factors | LLM cost/latency at scale, incumbent IDP vendors adding LLM capabilities, co-founder attention split (Assetario), enterprise sales cycle length |
| Founder Reach | Jedrzej Blaszyk: Twitter @jedr_blaszyk (count not retrievable), LinkedIn 246 connections, GitHub 84 stars (personal) + 396 stars (eigenpal org). Matej Novak: Twitter handle unconfirmed, LinkedIn 500+, GitHub not found |
| Distribution Signals | No Product Hunt launch found; no app store or Chrome extension presence; LinkedIn company page exists (follower count not retrievable) |
