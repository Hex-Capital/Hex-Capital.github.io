# Rhizome AI

> Always know what the FDA thinks

| Field | Value |
|-------|-------|
| Website | https://rhizomeai.com/ |
| YC Page | https://www.ycombinator.com/companies/rhizome-ai |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 1 |
| Location | Jersey City, NJ, USA; Remote |
| Tags | SaaS, Biotech |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found (website contact form is obfuscated; demo scheduling via Calendly at mishrachetan) |

## The Idea

**Problem:** Regulatory affairs teams at pharmaceutical, biotech, and medical device companies need to understand FDA (and other health authority) expectations before and during drug/device submissions. This research is manual, time-consuming, and error-prone. Customer testimonials describe work that previously took "weeks" or "months" of combing through regulatory documents (Fondo blog; rhizomeai.com). The current workflow relies on legacy subscription databases (e.g., Cortellis, IQVIA) that function as document repositories requiring manual search and synthesis, or on general-purpose LLMs that hallucinate citations and draw from unreliable sources (Data Innovation Q&A, Feb 2026).

**Approach:** Rhizome Ask is a question-answering interface backed by a 2.5 TB corpus spanning 30 regulatory and clinical datasets across 6 markets (rhizomeai.com). Users pose a natural-language question; the system retrieves and reads up to 1,000 documents per query, synthesizes an answer, and accompanies each statement with a citation pointing to a specific paragraph and source document. Data sources include FDA premarket/postmarket databases, EMA EPARs/guidelines/CTIS, MHRA, PMDA (Japan), and global clinical trial registries (Data Innovation Q&A, Feb 2026). The system uses fine-tuning, grounding, and inference-time verification to prevent hallucinations, with zero reported hallucinations throughout 2025 (rhizomeai.com).

**Differentiation:** Legacy platforms such as Cortellis (Clarivate) and IQVIA Regulatory Intelligence are document repositories that require users to manually search, read, and synthesize findings. Rhizome positions itself as an "intelligence layer" that analyzes global precedent and compares regulatory decisions across regions in a single query (Data Innovation Q&A, Feb 2026). Unlike general-purpose LLMs (e.g., ChatGPT), Rhizome limits its corpus to authoritative regulatory/clinical databases, reads orders of magnitude more documents per query, and provides traceable citations to source material (YC Launch page).

**Business Model:** Publicly listed pricing tiers (rhizomeai.com):
- **Project:** $400/month (month-to-month)
- **Professional:** $3,500/year (single seat, all FDA/EMA databases)
- **Business:** $20,000/year (5 seats, monthly office hours)
- **Enterprise:** Custom pricing (5+ seats, global access including Korea, China, Japan; biweekly support)

Revenue signal: "Rhizome's first product, Rhizome Ask, went from launch to six-figures in revenue during 2025" (YC company page).

**TAM/SAM:** The global AI in regulatory affairs market was estimated at $1.83 billion in 2026 and is projected to reach $8.86 billion by 2035, growing at a CAGR of 18.65% (Straits Research via search snippet). A separate estimate valued the AI in healthcare regulatory affairs market at $1.2 billion in 2024, projecting $6.5 billion by 2035 at a 16.7% CAGR (Transparency Market Research via search snippet). The broader regulatory information management (RIM) system market had North America accounting for 37.1% share in 2023 (Grand View Research via search snippet). No company-specific SAM estimate found.

**GTM / Distribution:** The YC Launch page explicitly asks for "introductions to regulatory affairs, quality, or R&D leaders in life sciences companies" (YC Launch page). [Inferred]: The pricing tiers suggest a land-and-expand model starting with individual regulatory professionals ($400/mo or $3,500/yr) and expanding to team-wide deployments ($20K+/yr). The founder's prior experience closing enterprise deals at Instabase ($7M as technical lead) suggests a founder-led sales motion targeting mid-market and large pharma/biotech.

## Defensibility

**Data moat:** Rhizome has assembled a 2.5 TB corpus from 30 regulatory and clinical datasets across 6 markets, directly sourced from health authority portals and normalized into consistent structures (Data Innovation Q&A, Feb 2026; rhizomeai.com). Regulatory documents vary in structure, formatting, and quality — many exist only as scanned PDFs with inconsistent metadata — and Rhizome's proprietary ingestion and normalization pipeline addresses this (Data Innovation Q&A, Feb 2026).

**Switching costs:** As teams integrate Rhizome into their regulatory workflows and build institutional knowledge around its Q&A interface, switching to an alternative would require re-establishing confidence in citation accuracy. The zero-hallucination track record (2025, rhizomeai.com) contributes to trust that a new entrant would need to match.

**Market structure:** Incumbent regulatory intelligence vendors (Clarivate, IQVIA, Veeva) sell subscriptions to document repositories. Rebuilding their platforms as AI-native Q&A systems would require rearchitecting their core product, retraining customers on a new interaction paradigm, and potentially cannibalizing existing high-margin subscription revenue. [Inferred]: This creates a business model conflict — incumbents profit from access to documents, while Rhizome profits from synthesized answers that reduce time spent in documents.

**Commoditization risk:** General-purpose LLM providers (OpenAI, Anthropic, Google) could theoretically build regulatory-specific tools, though they would need to replicate the specialized data ingestion pipeline and citation architecture. Competitors like Sorcero ($59M raised; Sorcero press release, Nov 2025) operate in adjacent life sciences AI but focus on medical affairs rather than regulatory Q&A specifically. A well-funded startup with regulatory domain expertise and a strong data engineering team could replicate the approach, though the corpus assembly and normalization work represents a meaningful time investment.

## Market & Traction

**Traction signals:**
- Six-figure revenue during 2025 (YC company page)
- 20+ customers (rhizomeai.com)
- 18 organizations mentioned in YC W26 announcement tweet (Chetan Mishra, @chetanfs on X)
- 2,800+ questions answered (rhizomeai.com)
- Zero reported hallucinations in 2025 (rhizomeai.com)
- Total funding of $585K over 2 rounds — first round Nov 19, 2025; latest Seed round Jan 1, 2026 (Tracxn via search snippet)
- YC Launch page: 11 upvotes (YC Launches, ~late Jan 2026)
- Customer testimonial: VP of Regulatory Affairs at a clinical-stage biotech: "Last time we did this research, we spent weeks. Rhizome found the answer immediately" (rhizomeai.com)
- Customer testimonial: RA Manager at a drug delivery device company: "I would cry if I lost access to Rhizome" (Fondo blog)
- Customer testimonial: Director at a top-5 pharma company stated a month-long task was completed in two days (rhizomeai.com)
- No Product Hunt listing found
- Twitter/X: @chetanfs (founder personal account; follower count not retrievable)
- LinkedIn company page: linkedin.com/company/rhizomeai (follower count not retrievable)
- No Discord or Slack community found
- 0 open job postings (YC page)

**Competitive landscape:**

1. **Cortellis Regulatory Intelligence (Clarivate)** — Comprehensive global regulatory database tracking drug/biologic applications, approvals, and labeling changes across 80+ jurisdictions. Used by 100% of the top 20 pharmaceutical companies (Clarivate website). Clarivate is publicly traded with $2.36B FY2024 total revenue (Clarivate Wikipedia via search snippet). Cortellis is a document repository; key differentiator vs. Rhizome is that it lacks AI-native Q&A with synthesized answers and per-statement citations.

2. **IQVIA Regulatory Intelligence** — Part of IQVIA (publicly traded), offers AI-enabled regulatory compliance and information management. Broad life sciences data/analytics platform with consulting services. Key differentiator vs. Rhizome: IQVIA is a full-service CRO with regulatory intelligence as one module within a broad offering; Rhizome is purpose-built for question-answering with citation traceability.

3. **Sorcero** — AI-powered language intelligence for life sciences. $59M total raised including $42.5M Series B led by NewSpring Capital (Nov 2025; Sorcero press release). Used by one-third of the top 30 global pharma companies (Sorcero website via search snippet). Revenue not public. Key differentiator vs. Rhizome: Sorcero focuses on medical affairs insights, publication monitoring, and systematic literature reviews rather than regulatory Q&A specifically.

4. **RegDesk** — AI-enabled RIMS platform for medical devices, pharmaceuticals, and IVDs covering 120+ markets. Named a Gartner Representative Vendor for RIM and Regulatory Intelligence (RegDesk website). Funding amount not public. Key differentiator vs. Rhizome: RegDesk focuses on regulatory information management and submission automation rather than regulatory intelligence Q&A.

5. **Veeva Vault RIM** — Part of Veeva Systems ($2.36B FY2024 revenue; Veeva financials via search snippet). Cloud-based regulatory information management suite adopted by 350+ companies (Veeva press release via search snippet). Key differentiator vs. Rhizome: Veeva is a document management and submission workflow tool, not an AI Q&A intelligence layer.

**Why now:** [Inferred]: The convergence of several factors creates the opening: (1) LLM capabilities reached a threshold in 2023-2024 where retrieval-augmented generation over large document corpora became reliable enough for regulated use cases; (2) FDA's own adoption of AI systems for regulatory review (FDA/DLA Piper, 2023) signals institutional acceptance of AI in regulatory workflows; (3) the growth of AI drug discovery companies (noted by the founder as the inspiration) is creating a wave of new therapies entering the regulatory pipeline, increasing demand for regulatory intelligence.

## Founders & Team

**Chetan Mishra** — Founder & CEO
- BS in Systems and Information Engineering and Statistics, University of Virginia (Data Innovation Q&A, Feb 2026; GitHub academic repos)
- IBM: Research Engineer / Machine Learning Engineer (2016–2018) (search snippet via ContactOut/Clay)
- Instabase: Employee #16; Software Engineer — ML/Algorithms → Tech Lead — Application Engineering → AppX Tech Lead (Nov 2018–Nov 2021); closed $7M as technical lead for bank document processing (YC company page)
- EvolutionaryScale: Sole founding product engineer; launched developer-scientist platform scaling to tens of thousands of users and billions of API calls; co-author on ESM3 protein language model paper published in Science (YC company page; bioRxiv; Google Scholar)
- South Park Commons member (LinkedIn search snippet)
- Twitter/X: @chetanfs — follower count not retrievable (JavaScript-rendered page)
- LinkedIn: linkedin.com/in/chemishra/
- GitHub: github.com/cmishra — 32 repositories, 4 followers; primarily academic projects in R, Python, Java from UVA coursework; no high-star-count repos (GitHub profile)
- Google Scholar: Publications listed (scholar.google.com/citations?user=lekefNcAAAAJ)

**Co-founder relationship:** N/A — solo founder.

**Founder-market fit:** Chetan Mishra's career arc spans ML research (IBM), document intelligence for regulated industries (Instabase, serving banks with document/imaging processing), and AI for life sciences (EvolutionaryScale, building protein design tools alongside scientists). The Instabase experience provided direct exposure to building AI products for compliance-heavy enterprises, while EvolutionaryScale placed him inside the life sciences AI ecosystem where he observed the gap between AI drug discovery and AI regulatory intelligence. His track record includes scaling a platform to tens of thousands of users at EvolutionaryScale and closing $7M in enterprise deals at Instabase as a solo technical lead.

## Key Risks

**Solo founder execution risk:** The company is operated by a single founder with no co-founder or listed employees (YC page team size: 1; hiring status: not hiring). Scaling sales, product development, data pipeline maintenance, and customer support simultaneously presents a capacity constraint, particularly for an enterprise SaaS product serving regulated industries that may require dedicated support.

**Brand disambiguation:** A separate, better-funded company called "Rhizome" (Rhizome Data, rhizomedata.com) operates in the energy/grid resilience space and has raised $6.5M in seed funding (GlobeNewsWire, May 2025). The @RhizomeAI Twitter handle belongs to this other company. This creates potential confusion in search results, press coverage, and customer outreach. The YC Rhizome AI uses linkedin.com/company/rhizomeai while the grid resilience Rhizome uses linkedin.com/company/rhizomedata.

**Incumbent response:** Clarivate (Cortellis) and IQVIA have existing relationships with the majority of large pharmaceutical companies. Both have begun incorporating AI capabilities into their platforms (IQVIA blog, Sep 2025). If incumbents add AI-native Q&A features on top of their existing data assets, they could leverage their installed base to compete directly.

**Regulatory data access dependency:** The platform relies on publicly available health authority databases. Changes to data access policies by the FDA, EMA, or other agencies — or degradation of data quality in source portals — could disrupt the ingestion pipeline. Additionally, data from some regions (e.g., China, Japan) may be less accessible or structured, limiting global expansion.

**Enterprise sales cycle in pharma:** Life sciences companies have lengthy procurement and validation cycles, particularly for tools used in regulatory submissions. Converting free trials or small "Project" tier accounts ($400/mo) into multi-seat enterprise contracts ($20K+/yr) requires navigating IT security reviews, compliance approvals, and multi-stakeholder buy-in.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.83B AI in regulatory affairs market in 2026, projected $8.86B by 2035 at 18.65% CAGR (Straits Research via search snippet) |
| SAM | No public data found |
| Traction | 20+ customers (rhizomeai.com); 2,800+ questions answered (rhizomeai.com); 18 organizations cited in Jan 2026 tweet (@chetanfs on X); 11 upvotes on YC Launch (~late Jan 2026) |
| Revenue Signal | Six-figure revenue during 2025 (YC company page); published pricing: $400/mo to $20K/yr to custom Enterprise (rhizomeai.com) |
| Founders | Chetan Mishra (Founder & CEO): UVA BS, ex-IBM Research, Instabase #16 ($7M closed as tech lead), EvolutionaryScale founding product engineer (ESM3 co-author in Science) |
| Competitors | Cortellis/Clarivate (public, $2.36B parent revenue, document repository vs. AI Q&A); IQVIA Regulatory Intelligence (public, broad CRO platform); Sorcero ($59M raised, medical affairs focus vs. regulatory Q&A); RegDesk (Gartner-recognized, funding not public, RIMS/submission automation focus); Veeva Vault RIM ($2.36B parent revenue, document management vs. AI Q&A) |
| Moat Signals | 2.5 TB proprietary normalized corpus from 30 datasets across 6 markets (rhizomeai.com); zero hallucinations reported in 2025 (rhizomeai.com); data ingestion/normalization pipeline for inconsistent regulatory documents (Data Innovation Q&A, Feb 2026) |
| Risk Factors | Solo founder with team size of 1; brand confusion with Rhizome Data (grid resilience, $6.5M raised); incumbent AI adoption (IQVIA, Clarivate) |
| Founder Reach | Chetan Mishra: Twitter @chetanfs (count not retrievable), LinkedIn linkedin.com/in/chemishra/ (count not retrievable), GitHub github.com/cmishra (4 followers, 32 repos) |
| Distribution Signals | YC Launch page with 11 upvotes (~late Jan 2026); no Product Hunt listing found; no app store presence |
| Emails | No public data found |
