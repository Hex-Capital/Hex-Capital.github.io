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
| YC Partner | Ankit Gupta (YC company page) |
| Emails | No public data found |

## The Idea

**Problem:** In emerging markets such as the Philippines, Indonesia, and Mexico, most of the population is traditionally unbanked, banking APIs do not exist, and a borrower's financial history lives in unstructured documents: e-wallet records, bank statements, payslips, utility bills, and audited financial statements. Credit and risk teams at lenders must manually review these documents to make underwriting decisions, which slows decisioning, increases costs, and caps lending volume. Legacy OCR solutions break on noisy, real-world files common in these markets and still require human verification (YC company page; YC Launch post).

**Approach:** Kita uses a layered system led by vision-language models (VLMs) and computer vision to parse messy borrower documents — bank statements, payslips, utility bills, e-wallet/payment records, PDFs, scans, and images — into structured, fraud-checked, decision-ready signals that lenders can use directly in underwriting. The company claims to make "document-driven decisions 70x faster" than manual review (YC Launch post). Under the hood, Kita links document-level signals to repayment outcomes, allowing models to continuously improve fraud detection and risk assessment as lenders feed back underwriting decisions (YC company page).

**Differentiation:** Kita differentiates from general-purpose document processing platforms (Ocrolus, Docsumo, Vaultedge) by being "hyperlocalized" around signals that drive lending outcomes specifically in emerging and undertapped markets. While Ocrolus focuses on US mortgage and fintech lending and relies on OCR + human verification, Kita is built around VLM-first processing tuned for the document formats, languages, and financial instruments prevalent in Southeast Asian and Latin American markets. The continuous learning loop tying document signals to repayment outcomes is positioned as a differentiator from static extraction platforms (YC company page; YC Launch post).

**Business Model:** No pricing page or revenue details are publicly available on the company website. [Inferred]: Most likely monetization path is a per-document or per-API-call SaaS pricing model charged to lender customers, consistent with how Ocrolus and Docsumo price their document processing platforms.

**TAM/SAM:** The global intelligent document processing (IDP) market was valued at USD 3.22 billion in 2025, projected to reach USD 43.92 billion by 2034 at a 33.68% CAGR (Precedence Research, 2025 via search snippet). A second estimate valued the IDP market at USD 10.57 billion in 2025, growing at 26.2% CAGR (Fortune Business Insights, 2025 via search snippet). The Philippines alternative lending market was valued at USD 1.43 billion in 2025, expected to reach USD 1.64 billion in 2026 growing at 14% (GlobeNewsWire, Feb 2026 via search snippet). The fintech lending market globally was $1,159 billion in 2024, projected to reach $8,046 billion by 2032 at 27.4% CAGR (SkyQuest, via search snippet). SAM for lending-specific document intelligence in emerging markets: No public data found for this specific segment.

**GTM / Distribution:** The YC Launch post requests introductions to "lenders/fintechs" and "lending infrastructure" professionals, indicating a direct B2B sales motion targeting lenders and fintech companies operating in emerging markets. The company description references starting in the Philippines, Indonesia, Mexico, and "undertapped domestic markets" in the US. [Inferred]: Initial GTM likely leverages co-founder Carmel Limcaoco's Philippine network and relationships with local lenders, expanding outward to other SE Asian markets.

## Defensibility

**Data flywheel:** Kita's architecture links document-level signals to actual repayment outcomes, creating a feedback loop where each lender's underwriting decisions improve the model's fraud detection and risk assessment over time. This creates a compounding data advantage as more lenders and more loan outcomes flow through the system (YC company page). This advantage is prospective — it depends on accumulating sufficient loan outcome data across markets.

**Hyperlocalization:** The platform is tuned for specific document formats, languages, and financial instruments in emerging markets (e.g., Filipino e-wallet statements, Indonesian payslips). This domain-specific training data is not readily available to general-purpose IDP platforms (YC company page).

**Switching costs:** Once a lender integrates Kita into its underwriting pipeline and the model is calibrated to that lender's specific loan book, switching to a competitor would require re-training and re-integration. These switching costs increase over time as the feedback loop accumulates lender-specific data.

**Market structure:** General-purpose IDP incumbents like Ocrolus are optimized for US financial document formats (W-2s, US bank statements, mortgage applications) and serve US lenders. Building localized models for Philippine e-wallet records or Indonesian payslips would require significant new data collection and engineering effort with a small addressable market per-country — a poor allocation of resources for a company already generating $252M in revenue from the US market. [Inferred]: This market-size mismatch creates a structural disincentive for well-resourced incumbents to prioritize these emerging market segments.

**Commoditization risk:** General-purpose VLM providers (OpenAI, Google, Anthropic) could enable lenders to build document processing in-house. Other YC or VC-backed startups could target the same emerging market lending niche. The core VLM technology is becoming commoditized; Kita's defensibility depends on the lending-specific data flywheel and localization layer rather than the underlying model architecture.

## Market & Traction

**Traction signals:**
- Secured a six-figure paid pilot with a Philippine lender the week the prototype was built; expanded to customers across multiple Southeast Asian markets with approximately 30% month-over-month growth (web search snippet aggregating from YC/Dealigence-type sources; original source could not be directly verified via WebFetch)
- YC Launch post: 19 upvotes (YC Launch page)
- Twitter/X: @usekita, 20 followers, joined January 2026 (X.com via search snippet)
- LinkedIn company page: Not found for the Kita (usekita) entity specifically
- Product Hunt: No launch found
- App store / Chrome extension: Not applicable (B2B API/platform product)
- Discord/Slack community: No public data found
- Job postings: Company is not currently hiring (YC company page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Kita |
|---|---|---|---|
| **Ocrolus** | $127M total, $500M+ valuation (TechCrunch, Sep 2021) | $20M ARR as of Q2 2021; $252.1M more recently (Owler/ZoomInfo via search snippet) | US-focused; OCR + human verification model; serves major US fintechs (Brex, PayPal, SoFi, LendingClub). Not localized for emerging market documents. |
| **Docsumo** | $3.72M total (Crunchbase via search snippet) | $10.3M revenue (Getlatka, 2024 via search snippet) | Horizontal document AI platform (invoices, receipts, forms); not lending-specific. Serves insurance, debt relief, and real estate lending. 86 employees. |
| **Vaultedge** | ~$1M total (PitchBook via search snippet) | $722K annual revenue as of Mar 2023 (Owler via search snippet) | Focused on US mortgage lending document processing; LLM-based platform processing 3M+ pages daily. Not emerging-market focused. |
| **Zest AI** | Not determined in this search | Revenue unknown | AI-powered underwriting platform for thin-file borrowers; focuses on credit decisioning rather than document processing. Adjacent rather than direct competitor. |

**Why now:** [Inferred]: Several converging factors open this opportunity: (1) Vision-language models (GPT-4V, Gemini, Claude vision) crossed a performance threshold in 2024-2025, making it possible for the first time to reliably extract structured data from noisy, multilingual, real-world documents without traditional OCR pipelines; (2) digital lending volumes in the Philippines grew 14% year-over-year in 2025-2026 (GlobeNewsWire, Feb 2026 via search snippet), with the SEC considering allowing new online lending apps (Philstar, Mar 2026 via search snippet); (3) open finance regulations remain nascent in SE Asia, meaning document-based underwriting will persist as the primary method for years, sustaining demand for this infrastructure layer.

## Founders & Team

**Carmel Limcaoco** — Co-founder & CEO
- From Manila, Philippines
- Stanford University: Symbolic Systems & Music (undergraduate); Stanford Profiles lists her as Carmel Victoria Puyat Limcaoco (Stanford Profiles)
- Spent three summers at Apple in audio and music product; described as "one of few interns to ever ship a feature in iOS" (LinkedIn via search snippet)
- Co-founded DAHA in 2022, described as "Stanford's first marketplace" which she "took from 0 to 1" (LinkedIn post via search snippet)
- Awarded by the United Nations at age 16; launched the first Product Fellowship in the Philippines (LinkedIn via search snippet)
- Twitter/X: No personal account found
- LinkedIn: linkedin.com/in/carmellimcaoco — headline: "Kita (YC W26)" (LinkedIn via search snippet)
- GitHub: No public repos found

**Rhea Malhotra** — Co-founder & CTO
- Stanford University: BS Computer Science (2021–2024), MS Computer Science (2024–2025) (personal website, Stanford Profiles)
- Received the Firestone Medal for Research — the highest honor for an honors thesis in Stanford's Computer Science Department (2025) (personal website)
- Researcher at Stanford Robotics Center and Interactive Robot Perception Lab, advised by Jeannette Bohg and Oussama Khatib (personal website)
- Published at ICRA 2026 ("HoMeR" — mobile manipulation), Humanoids 2025 (oral, "SynSculptor"), RSS 2025 (oral workshop, "Self-Guided Action Diffusion") (personal website)
- Earlier research in computational imaging for medical detection (2021–2023) (personal website)
- Twitter/X: No personal account found
- LinkedIn: linkedin.com/in/rhea-malhotra-198744142 — headline: "Kita (YC W26)" (LinkedIn via search snippet)
- GitHub: github.com/rhea-mal — 25 public repos, 22 followers; pinned repos include contrastive-imitation-learning (4 stars), LyricGeneration (1 star), ScriptVision (1 star) (GitHub)

**Co-founder relationship:** Both founders attended Stanford University with overlapping timeframes. The company description states they "met before Stanford and have been building together ever since" (YC company page).

**Founder-market fit:** Carmel Limcaoco is from Manila and brings direct local context for the Philippine lending market, combined with product experience from Apple and prior founding experience with DAHA. Rhea Malhotra brings deep technical expertise in computer vision and VLMs through her Stanford research, which directly maps to Kita's core technical approach of using vision-language models for document understanding. The combination of Philippine market knowledge and state-of-the-art CV/VLM research aligns with the company's thesis of building hyperlocalized document intelligence for emerging market lending.

## Key Risks

**Brand disambiguation:** "Kita" is a common word in Malay/Indonesian (meaning "we/us") and is also the name of Kita Earth, a UK-based carbon insurance company with its own LinkedIn presence and press coverage (Insurance Edge, Jan 2026). This creates SEO, brand confusion, and trademark risk in key target markets (Indonesia, Philippines).

**Emerging market regulatory fragmentation:** Each target market (Philippines, Indonesia, Mexico) has distinct financial regulations, data privacy laws, and lending licensing requirements. The Philippine SEC is actively revising rules around online lending apps (Philstar, Mar 2026 via search snippet). Regulatory shifts could constrain or reshape how document data can be collected, processed, and used for underwriting in each jurisdiction.

**VLM cost and latency dependency:** The core product relies on vision-language models, which currently have high inference costs relative to traditional OCR. If per-document processing costs remain high, gross margins could be compressed, particularly for high-volume, low-ticket-size emerging market lenders where economics are already thin.

**Incumbent response from localized players:** While US-focused IDP companies may not prioritize emerging markets, regional fintech players in SE Asia (e.g., local credit bureaus, digital banks building in-house tools) may develop competing document processing capabilities with their own local data advantages and existing lender relationships.

**Concentration risk in early traction:** Early customers appear concentrated in the Philippines and Southeast Asia. If the initial paid pilot or early customer base churns, it could significantly impact revenue and growth trajectory given the two-person team size.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global IDP market: $3.22B in 2025, projected $43.92B by 2034 at 33.68% CAGR (Precedence Research via search snippet). Philippines alt lending: $1.64B in 2026 growing 14% YoY (GlobeNewsWire, Feb 2026 via search snippet). |
| SAM | No public data found for lending-specific document intelligence in emerging markets. |
| Traction | Six-figure paid pilot with Philippine lender; customers across multiple SE Asian markets; ~30% MoM growth (web search snippet, original source unverified). YC Launch: 19 upvotes. |
| Revenue Signal | No public data found (no pricing page, no revenue disclosures). |
| Founders | Carmel Limcaoco (CEO): Stanford Symbolic Systems, 3 summers at Apple, co-founded DAHA, from Manila. Rhea Malhotra (CTO): Stanford BS+MS CS, Firestone Medal (best CS thesis), robotics/CV researcher, published ICRA/Humanoids/RSS. |
| Competitors | Ocrolus ($127M raised, ~$252M revenue, US-focused IDP + human verification), Docsumo ($3.72M raised, $10.3M revenue, horizontal document AI), Vaultedge (~$1M raised, $722K revenue, US mortgage-focused), Zest AI (AI underwriting, adjacent) |
| Moat Signals | Data flywheel linking document signals to repayment outcomes; hyperlocalization for emerging market document formats; lender-specific model calibration creating switching costs. All prospective at this stage. |
| Risk Factors | Brand disambiguation with Kita Earth and common word in target markets, VLM inference cost pressure on margins, regulatory fragmentation across target markets |
| Founder Reach | Company @usekita: X 20 followers. Carmel Limcaoco: no personal X found, LinkedIn active. Rhea Malhotra: no personal X found, LinkedIn active, GitHub 22 followers. |
| Distribution Signals | No Product Hunt launch found. No app store presence. YC Launch post (19 upvotes). No community (Discord/Slack) found. |
| Emails | No public data found |
