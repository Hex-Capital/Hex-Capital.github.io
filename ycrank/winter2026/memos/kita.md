# Kita

> Turn documents into signals for lenders

| Field | Value |
|-------|-------|
| Website | https://www.usekita.com/ |
| YC Page | https://www.ycombinator.com/companies/kita |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Fintech, SaaS, Emerging Markets |

## The Idea

**Problem:** In emerging markets such as the Philippines, Indonesia, and Mexico, open finance infrastructure is nascent. Over 60% of transactions in the Philippines now happen via e-wallets, yet approximately 50% of the population remains traditionally unbanked (Carmel Limcaoco LinkedIn post, 2025). A borrower's financial history lives in unstructured documents — e-wallet records, bank statements, utility bills, payslips — rather than accessible via banking APIs. Credit and risk teams at lending institutions must manually review these documents for underwriting, which slows decisioning, increases costs, and caps lending volume. Legacy OCR solutions break on noisy, real-world files from these markets and still require human verification (YC company page).

**Approach:** Kita uses a layered system combining vision-language models (VLMs) and computer vision to transform messy borrower documents into fraud-checked, structured, decision-ready signals that lenders can use directly in underwriting. The platform is hyperlocalized for each target market, built around the specific document types and signals that drive lending outcomes in those geographies. Under the hood, Kita functions as a learning system: it links document-level signals to repayment outcomes, allowing models to continuously improve fraud detection and risk assessment as lenders' underwriting decisions feed back into the system (YC company page).

**Differentiation:** Kita positions itself as "the first document intelligence platform built specifically for lending" in emerging markets (YC company page). Existing IDP incumbents such as Ocrolus (focused on US financial services), Hyperscience (general enterprise document automation), and Docsumo (broad document AI) primarily serve developed-market lenders with standardized document formats. Kita's differentiation centers on hyperlocalization — building models trained on the specific document types, formats, and fraud patterns found in Southeast Asian and Latin American lending markets — and on its feedback loop linking document signals to loan repayment outcomes.

**Business Model:** No public pricing page or pricing tiers were found on the company website. [Inferred]: Most likely monetization path is a SaaS or per-document/per-transaction API pricing model sold to lending institutions, consistent with the document intelligence vertical.

**TAM/SAM:** The global intelligent document processing (IDP) market was estimated at $2.30 billion in 2024 and is projected to reach $12.35 billion by 2030, at a 33.1% CAGR (Grand View Research, 2025 via search snippet). The BFSI segment accounts for approximately 31.7% of IDP spending (Docsumo IDP Market Report, 2025 via search snippet), which would imply a BFSI IDP segment of roughly $730M in 2024. The Philippines alternative lending market alone is projected to reach $1.64 billion in 2026, growing at 14% annually (GlobeNewsWire/ResearchAndMarkets, Feb 2026 via search snippet). No company-published SAM estimate was found.

**GTM / Distribution:** The company secured a six-figure paid pilot with a Philippine lender upon building its prototype and has since expanded to customers across multiple Southeast Asian markets, growing roughly 30% month-over-month (YC company page via search snippet). [Inferred]: Distribution is likely direct B2B sales to lending institutions in the Philippines and Southeast Asia, leveraging co-founder Carmel Limcaoco's Manila roots and local network as an initial wedge.

## Defensibility

**Data feedback loop:** Kita's architecture links document-level extraction signals to downstream loan repayment outcomes, creating a compounding data advantage over time as each lender's underwriting decisions feed back into model training (YC company page). This feedback loop could create a moat that strengthens with volume — more documents processed leads to better fraud detection and risk assessment, which in turn attracts more lenders.

**Hyperlocalization:** The platform is purpose-built for document types specific to emerging markets (e-wallet records, local bank statements, utility bills in various formats). This localization effort across the Philippines, Indonesia, Mexico, and other markets creates a barrier that generalist IDP providers must replicate market by market (YC company page).

**Market structure:** US-focused incumbents like Ocrolus are optimized for standardized US financial documents (W-2s, pay stubs, US bank statements) and serve US lenders. Expanding to emerging markets would require building new document models for each country's unique formats, fraud patterns, and lending norms — a significant localization investment that may not align with their existing customer base's priorities. [Inferred]: The structural barrier is that the training data, document formats, and fraud typologies in emerging markets are sufficiently different from developed markets that incumbents cannot simply extend their existing models.

**Commoditization risk:** Vision-language models are rapidly improving and becoming more accessible. A well-funded competitor or a general-purpose AI platform could, in principle, build document extraction for emerging-market lending documents. The defensibility depends on the pace at which Kita accumulates proprietary training data tied to lending outcomes and builds lender integrations across multiple markets. Open-source VLMs and cloud-hosted LLMs lower the barrier to entry for document extraction, though the lending-specific outcome feedback loop and market-by-market localization add complexity that commoditized tools would not replicate out of the box.

## Market & Traction

**Traction signals:**
- Six-figure paid pilot secured with a Philippine lender upon prototype completion (YC company page via search snippet)
- Customers across multiple Southeast Asian markets (YC company page via search snippet)
- Approximately 30% month-over-month growth (YC company page via search snippet)
- Company Twitter/X: @usekita (follower count not retrievable)
- Company LinkedIn: linkedin.com/company/kitafi (follower count not retrievable)
- No Product Hunt launch found
- No app store presence found
- No Discord or Slack community found
- No job postings listed (YC company page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Kita |
|---|---|---|---|
| **Ocrolus** | $142M total, $500M+ valuation at Series C (TechCrunch, Sep 2021) | $20M ARR as of Q2 2021 (TechCrunch, Sep 2021) | US-focused; serves US fintechs/banks (Brex, LendingClub, PayPal, SoFi) with 99%+ accuracy on standardized US documents. Does not focus on emerging market document types. |
| **Hyperscience** | $439M total through Series E (Hyperscience press release, Dec 2021) | 3x YoY revenue growth reported in 2021; exact ARR not disclosed (Hyperscience press release) | General-purpose enterprise document automation across government and insurance, not lending-specific or emerging-market-focused. |
| **Docsumo** | $3.72M total (Crunchbase via search snippet) | $10.3M revenue (Latka, 2024 via search snippet) | Broad document AI for invoices, receipts, and forms; has lending use cases but is not hyperlocalized for emerging markets. |
| **Vaultedge** | ~$1M total (Tracxn via search snippet) | Revenue unknown | US mortgage document processing specialist; focused entirely on US market with LOS integrations. |

**Why now:** [Inferred]: Several converging factors open this opportunity: (1) e-wallet adoption has surged in emerging markets — over 60% of Philippine transactions now occur via e-wallets (Carmel Limcaoco LinkedIn post, 2025) — creating a new corpus of digital financial documents that lenders need to process; (2) vision-language models have reached a performance threshold where they can reliably extract structured data from noisy, non-standardized documents, an advance over legacy OCR that previously made automated processing infeasible for these formats; (3) regulatory push toward financial inclusion across Southeast Asia and Latin America is driving lender demand for scalable underwriting infrastructure to serve unbanked populations.

## Founders & Team

**Carmel Limcaoco** — Co-founder & CEO
- From Manila, Philippines
- Stanford University: BS in Symbolic Systems & Music; MS in Computer Science (Stanford Profiles)
- Three summers at Apple in audio and music product; described as one of few interns to ship a feature in iOS (YC company page via search snippet)
- Co-founded DAHA in 2022, described as Stanford's first marketplace (YC company page via search snippet)
- Awarded by the United Nations at age 16; launched the first Product Fellowship in the Philippines (YC company page via search snippet)
- Described as a "repeat founder" (YC company page)
- Twitter/X: @carmelkita (listed on YC page; follower count not retrievable)
- LinkedIn: linkedin.com/in/carmellimcaoco — headline: "Kita (YC W26)"
- GitHub: No public repos found

**Rhea Malhotra** — Co-founder & CTO
- Stanford University: BS and MS in Computer Science (Stanford Profiles)
- Firestone Medal for Research — awarded for best honors thesis in the Stanford CS department, 2025 (personal website)
- Researcher at Stanford Robotics Center and Interactive Robot Perception Lab, advised by Jeannette Bohg and Oussama Khatib (personal website)
- Publications at ICRA 2026, Humanoids 2025 (oral), RSS 2025 (oral workshop), plus co-author on Nature Genetics (2023) and PLOS Computational Biology (2025) (personal website)
- Research focus: humanoids, mobile manipulation, long-horizon robot learning, computer vision (personal website)
- Twitter/X: @_rheamalhotra_ (listed on YC page; follower count not retrievable)
- LinkedIn: linkedin.com/in/rhea-malhotra-198744142 — headline: "Kita (YC W26)"
- GitHub: github.com/rhea-mal — 25 public repos, 21 followers; pinned repos include contrastive-imitation-learning (4 stars), LyricGeneration (1 star), ScriptVision (1 star) (GitHub)

**Co-founder relationship:** Both founders attended Stanford University as undergraduates. Per the company description, they met during their gap year before Stanford and have been building together since (YC company page). Carmel's LinkedIn post describes them meeting "over COVID while we were undergrads at Stanford" (LinkedIn via search snippet).

**Founder-market fit:** Carmel Limcaoco is from Manila and brings direct local context for the Philippines, Kita's initial target market. Her product experience at Apple and prior founding experience at DAHA provide product-building and startup execution background. Rhea Malhotra brings deep technical expertise in computer vision and machine learning, including Stanford's highest CS thesis honor and published research in vision-language models and robotics — directly relevant to Kita's core technology of extracting structured data from unstructured documents using VLMs.

## Key Risks

**Emerging-market regulatory complexity:** Lending regulations differ significantly across the Philippines, Indonesia, and Mexico. Each market may require compliance with local data privacy laws, financial licensing requirements, and document standards. Expansion requires navigating distinct regulatory regimes, which could slow geographic growth and increase operational costs.

**VLM technology commoditization:** Kita's core technical advantage relies on vision-language models for document extraction. As foundation model capabilities improve rapidly and become widely accessible (e.g., GPT-4V, Gemini, open-source alternatives), general-purpose AI platforms or competitors could replicate document extraction capabilities without the multi-year localization effort Kita has undertaken. The defensibility hinges on the lending-outcome feedback loop and localized training data, which are still early-stage.

**Customer concentration risk:** The company reports a six-figure paid pilot as its initial customer and has expanded to "multiple Southeast Asian markets" (YC page via search snippet), but specific customer count is not disclosed. At this stage, revenue may be concentrated among a small number of lending clients, creating dependency risk if any major customer churns.

**Brand disambiguation:** Multiple unrelated entities share the "Kita" name, including Kita Earth (a Lloyd's of London carbon insurance coverholder), KITA PH (a Philippine social eCommerce platform), and the Korea International Trade Association (KITA). This creates potential confusion in brand searches, SEO, and market positioning.

**Lender sales cycle and integration depth:** Selling document processing infrastructure to lending institutions typically involves long enterprise sales cycles, security and compliance reviews, and deep integration with existing loan origination systems. As a two-person team, managing multi-market enterprise sales alongside product development could constrain growth velocity.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.30B global IDP market in 2024, projected $12.35B by 2030 at 33.1% CAGR (Grand View Research, 2025 via search snippet); BFSI segment ~31.7% of IDP market (Docsumo IDP Market Report, 2025 via search snippet) |
| SAM | No public data found |
| Traction | Six-figure paid pilot with Philippine lender at prototype stage; customers across multiple SE Asian markets; ~30% MoM growth (YC company page via search snippet) |
| Revenue Signal | Six-figure paid pilot reported (YC company page via search snippet); no pricing page or ARR figures disclosed |
| Founders | Carmel Limcaoco (CEO): Stanford BS Symbolic Systems + MS CS, 3 summers at Apple, repeat founder (DAHA). Rhea Malhotra (CTO): Stanford BS+MS CS, Firestone Medal (best CS thesis), published CV/robotics researcher. |
| Competitors | Ocrolus ($142M raised, $20M ARR as of 2021, US-focused document processing); Hyperscience ($439M raised, revenue undisclosed, general enterprise doc automation); Docsumo ($3.72M raised, $10.3M revenue, broad document AI); Vaultedge (~$1M raised, revenue unknown, US mortgage-specific) |
| Moat Signals | Lending-outcome feedback loop linking document signals to repayment data; hyperlocalized models per emerging market (YC company page) |
| Risk Factors | VLM technology commoditization, emerging-market regulatory complexity, brand disambiguation with multiple "Kita" entities |
| Founder Reach | Carmel Limcaoco: Twitter @carmelkita (count not retrievable), LinkedIn linkedin.com/in/carmellimcaoco. Rhea Malhotra: Twitter @_rheamalhotra_ (count not retrievable), LinkedIn linkedin.com/in/rhea-malhotra-198744142, GitHub 25 repos / ~6 stars |
| Distribution Signals | No Product Hunt launch found; no app store presence; no community channels found |
| Emails | carmel@usekita.com (LinkedIn post, 2025) |
