# General Legal

> The AI native law firm for growth stage companies

| Field | Value |
|-------|-------|
| Website | https://general.legal |
| YC Page | https://www.ycombinator.com/companies/general-legal |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Legal |
| Team Size | 3 |
| Location | No public data found |
| Tags | Legal, LegalTech |

## The Idea

**Problem:** Growth-stage startup founders need commercial contract review, drafting, and negotiation but face high costs and slow turnaround from traditional law firms. Traditional outside counsel typically charges hourly rates that can reach hundreds to thousands of dollars per contract with multi-day turnarounds. Founders either overpay for BigLaw, accept risk with under-qualified counsel, or attempt to handle contracts themselves. The YC launch page states the company aims to "save founders $100s–$1000s per contract" and deliver "turns in hours instead of days" (YC Launch page, Feb 2026).

**Approach:** General Legal operates as a licensed law firm—not a SaaS tool—that combines proprietary AI workflows with experienced U.S.-barred attorneys to deliver commercial contract review and negotiation. Attorneys use AI to accelerate drafting and review while maintaining legal responsibility for work product. The company guarantees contract turnaround within 3 hours, with typical turns in 1 hour, and claims to operate at "10× the efficiency of traditional attorneys" (YC Launch page, Feb 2026).

**Differentiation:** Unlike AI-only contract tools (e.g., Spellbook, which provides AI-assisted contract review for lawyers), General Legal is a full-service law firm with attorneys who sign off on and negotiate contracts on the client's behalf. Unlike traditional law firms, it offers flat-fee pricing and AI-accelerated workflows. Unlike Harvey AI, which sells AI tools to large law firms, General Legal sells legal services directly to founders. The Artificial Lawyer article categorizes General Legal as a "NewMod" law firm—a hybrid model combining "fixed fees, structured workflows, curated data, extensive AI integration, and qualified legal professionals" (Artificial Lawyer, Feb 4, 2026).

**Business Model:** Flat fee of $500 per commercial contract for review and negotiation services (company website schema markup; YC Launch page, Feb 2026). The company offered free first contract reviews through demo day as a promotional mechanism (YC Launch page, Feb 2026). No subscription tier or other pricing tiers were found in public sources.

**TAM/SAM:** The global legal services market was valued at $1.12 trillion in 2024 with a projected 5.4% CAGR through 2034 (GM Insights via search snippet). Corporate, Financial & Commercial Law represented 32.69% of this market in 2025 (GM Insights via search snippet). The Alternative Legal Service Provider (ALSP) market reached $28.5 billion with an 18% CAGR from 2021–2023 (Thomson Reuters ALSP Report, Jan 2025). The B2B legal services market is tracked separately by Precedence Research but specific figures were behind a paywall. [Inferred]: The SAM for flat-fee commercial contract services to U.S. growth-stage startups is a narrow slice of these markets; no public SAM estimate specific to this segment was found.

**GTM / Distribution:** The YC Launch page reports that "since announcing our private preview, over 20 growth stage companies have moved their commercial contracting to General Legal" (YC Launch page, Feb 2026). The company offered free first contract reviews through demo day as an acquisition mechanism. [Inferred]: Primary distribution likely relies on YC network effects, founder word-of-mouth, and the founders' existing VC/startup relationships from their Cooley, Fenwick & West, and Casetext backgrounds.

## Defensibility

Two of the three founders spent years building legal AI at Casetext, culminating in the $650 million acquisition by Thomson Reuters (TechCrunch, Jun 2023). This gives the team proprietary knowledge of how to build AI workflows for legal text. Ryan Walker's open-source NLP libraries (gsdmm, 357 stars; straw, 102 stars on GitHub) and the team's co-authored academic work on transformer-based legal text retrieval (arXiv:2005.04588) indicate deep technical capability in legal NLP. Being a licensed law firm creates a regulatory barrier—competitors cannot simply ship a software product without attorney oversight for privileged legal advice and negotiations.

**Market structure:** Traditional BigLaw firms face business model cannibalization if they adopt flat-fee pricing: their revenue model depends on hourly billing, and offering $500 flat-fee contract reviews would undercut their core economics. AI-only tools (Spellbook, Harvey) sell to lawyers rather than replacing them, creating a channel conflict if they tried to become law firms themselves. Thomson Reuters, which acquired Casetext, is a legal technology vendor, not a law firm, and regulatory barriers prevent it from practicing law directly.

**Commoditization risk:** The combination of "licensed law firm + AI workflows + flat-fee pricing" is replicable in principle. Other attorneys could adopt similar AI tools and offer flat-fee commercial contract work. Lawhive ($60M Series B, Feb 2026; Fortune) operates a similar hybrid model in the UK and is expanding to the U.S. New entrants from YC W26 batch (LegalOS, Arcline) also pursue AI-native law firm models in adjacent practice areas (Artificial Lawyer, Feb 4, 2026). The AI tooling itself (LLMs for contract review) is broadly available and not proprietary to General Legal.

## Market & Traction

**Traction signals:**
- 20+ growth-stage companies moved commercial contracting to the firm since private preview (YC Launch page, Feb 2026)
- 56 upvotes on YC Launch page (YC Launch page, Feb 2026)
- Press coverage: Artificial Lawyer (Feb 4, 2026), mentioned in Fortune's Lawhive article (Feb 5, 2026)
- Twitter/X: @gen_legal_inc — account exists, follower count not retrievable
- LinkedIn: Company page exists at linkedin.com/company/general-legal, follower count not retrievable
- No Product Hunt listing found
- No app store or Chrome extension presence (the company operates as a law firm, not a software product)
- No public revenue figures disclosed

**Competitive landscape:**

1. **Harvey AI** (~$1.1B+ total raised; $190M ARR end-2025 per CEO's LinkedIn post; $8–11B valuation per TechCrunch, Dec 2025 and Feb 2026). Harvey sells AI tools to large law firms (AmLaw 100), not directly to startup founders. It is an AI vendor to law firms, not a law firm itself. General Legal differentiates by providing end-to-end legal services directly to founders at flat fees.

2. **Lawhive** (~$100M total raised; $60M Series B, Feb 2026; $35M annual revenue per Fortune, Feb 2026). UK-based AI-native law firm focused on consumer/individual legal needs (housing, employment, family law). Expanding to U.S. General Legal differentiates by focusing specifically on commercial contracts for growth-stage startups rather than consumer legal matters.

3. **Spellbook** ($80M+ total raised; $50M Series B, Oct 2025 per BusinessWire; $350M valuation). AI contract review tool used by ~4,000 law firms across 80 countries, 10M+ contracts reviewed. Spellbook is a software tool for lawyers, not a law firm; it does not provide attorney sign-off or negotiation. General Legal differentiates by being a full-service firm that handles negotiations directly.

4. **Robin AI** ($70.9M total raised; $10M ARR as of Nov 2024 per Fortune; acquired by Scissero, Dec 2025). AI-powered contract automation platform. Was a SaaS tool for legal teams before acquisition. Different model from General Legal's full-service law firm approach.

5. **LegalOS** (YC W26 batchmate). AI-native law firm focused on complex work visas/immigration, not commercial contracts. Operates a similar "AI + attorneys" model but in a different practice area (YC company page).

**Why now:** [Inferred]: The confluence of several factors opened this opportunity: (1) LLM capabilities (GPT-4 and successors) crossed a performance threshold for legal text understanding in 2023–2024, enabling the "10× efficiency" claims; (2) Casetext's $650M acquisition by Thomson Reuters in August 2023 validated AI-native legal technology at scale; (3) The ALSP market grew to $28.5B with 18% CAGR (Thomson Reuters, Jan 2025), reflecting accelerating willingness of legal buyers to use non-traditional providers; (4) legal tech funding reached $6B in 2025 (Artificial Lawyer, Jan 2026), creating a capital environment supportive of new entrants.

## Founders & Team

**J.P. Mohler** — Co-founder
- BA summa cum laude, College of William and Mary; JD, Harvard Law School (ABA Techshow speaker bio)
- At Harvard: President of the Harvard Law and Technology Society, Editor on the Harvard Journal of Law and Technology, Google Policy Fellow (ABA Techshow speaker bio)
- Previously: Attorney in the venture capital corporate group at Cooley LLP, Palo Alto and Washington, D.C. (ABA Techshow speaker bio; YC Launch page mentions WilmerHale as well)
- Most recently: Senior Machine Learning and Applied Research Scientist, Innovation team at Casetext/Thomson Reuters (ABA Techshow speaker bio)
- Led "the first known application of large scale artificial intelligence in a federal investigation" and "the first known AI tool adopted by a judicial system to expedite appellate review" (ABA Techshow speaker bio)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/jp-mohler/
- GitHub: github.com/JPMoh — 7 repositories; relevance to this J.P. Mohler unconfirmed

**Javed Qadrud-Din** — Co-founder
- JD, Harvard Law School, 2008–2011 (LinkedIn via search snippet)
- Attorney at Fenwick & West, 2011–2014 — advised startup and tech companies on venture financings, M&A, and IPOs (LinkedIn via search snippet)
- Casetext: Director of Machine Learning, Principal Research Scientist, Director of R&D, 2018–2021+ (The Org; LinkedIn via search snippet). Note: The YC company page describes Javed as having "co-founded Casetext," while other sources (The Org, Stanford Lawyer Magazine) list Jake Heller and Pablo Arredondo as Casetext's co-founders and show Javed joining in 2018, five years after Casetext's 2013 founding.
- Meta: Machine Learning Engineer, 2021 (Weekday.works via search snippet)
- Co-authored "Transformer Based Language Models for Similar Text Retrieval and Ranking" (arXiv:2005.04588) with Ryan Walker
- Twitter/X: @Javed_Qadruddin — account exists, no visible posts, follower count not retrievable
- LinkedIn: linkedin.com/in/javed-qadrud-din/
- GitHub: No public account found

**Ryan Walker** — Co-founder & CTO
- PhD Mathematics, University of Kentucky (Crunchbase; LinkedIn via search snippet)
- CTO of Casetext (YC S13), which was acquired by Thomson Reuters for $650M cash in August 2023 (TechCrunch, Jun 2023; PR Newswire, Aug 2023)
- VP Technology, CoCounsel at Thomson Reuters post-acquisition (RocketReach via search snippet)
- Expertise: backend engineering, ML, NLP, search (LinkedIn via search snippet)
- Co-authored "Transformer Based Language Models for Similar Text Retrieval and Ranking" (arXiv:2005.04588) with Javed Qadrud-Din
- Twitter/X: No confirmed account found
- LinkedIn: linkedin.com/in/ryanwalkerdata/ — headline references General Legal (YC26)
- GitHub: github.com/rwalk — 27 repos, 35 followers. Pinned repos: gsdmm (357 stars), straw (102 stars), gsdmm-rust (24 stars)

**Co-founder relationship:** All three founders worked together at Casetext/Thomson Reuters. J.P. Mohler and Javed Qadrud-Din both attended Harvard Law School (Mohler graduating ~2020, Qadrud-Din ~2011). Ryan Walker and Javed Qadrud-Din co-authored an academic paper together (arXiv:2005.04588) and worked on ML/NLP at Casetext concurrently.

**Founder-market fit:** The team combines practicing attorney credentials (two Harvard Law JDs, experience at top venture capital law firms Cooley and Fenwick & West) with deep legal AI engineering (CTO of Casetext through its $650M exit, senior ML research roles at Casetext/Thomson Reuters). J.P. Mohler bridges both domains as both a former Cooley VC attorney and a legal ML researcher. This combination of legal practice experience and legal AI engineering directly maps to the challenge of building an AI-accelerated law firm for commercial contracts.

## Key Risks

**Brand disambiguation:** "General Legal" is a highly generic name that overlaps with Legal & General (a $50B+ UK financial services company) and "general legal counsel" as a common term. Search results consistently returned Legal & General and generic legal content rather than the startup. This creates SEO, advertising, and brand-building challenges.

**$500 flat-fee unit economics at scale:** At $500 per contract with a guaranteed 3-hour turnaround by U.S.-barred attorneys, the firm must maintain extremely high throughput per attorney to sustain viable margins. If AI efficiency gains plateau or complex contracts require significantly more attorney time, per-contract profitability could compress. No public data on attorney headcount or contracts-per-attorney throughput is available.

**Lawhive U.S. expansion:** Lawhive, with $100M+ in total funding and $35M in annual revenue (Fortune, Feb 2026), announced U.S. expansion plans funded by its $60M Series B. While currently focused on consumer legal services, Lawhive's AI-native law firm model and capital base could enable rapid expansion into commercial contract work for SMBs.

**Regulatory and malpractice exposure:** As a licensed law firm (not a SaaS tool), General Legal bears professional liability for its legal advice and attorney work product. AI-assisted errors in contract review or negotiation could create malpractice claims. The firm's scale aspirations (high volume, fast turnaround, flat fees) increase the volume of potential exposure points versus a traditional firm model.

**AI tooling commoditization:** The underlying LLM capabilities used for contract review are broadly accessible. Competing firms or new entrants could adopt similar AI workflows without needing to build proprietary technology. The technical differentiation may reside more in the founders' domain expertise and workflow design than in defensible IP.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.12T global legal services market (GM Insights, 2024, 5.4% CAGR); $28.5B ALSP market (Thomson Reuters, Jan 2025, 18% CAGR 2021–2023) |
| SAM | No public data found for flat-fee commercial contract services to growth-stage startups specifically |
| Traction | 20+ growth-stage companies as clients since private preview (YC Launch page, Feb 2026); 56 upvotes on YC Launch (Feb 2026); press in Artificial Lawyer (Feb 4, 2026) |
| Revenue Signal | $500 flat fee per commercial contract review (company website; YC Launch page, Feb 2026). No public revenue figures disclosed. |
| Founders | J.P. Mohler: Harvard Law, ex-Cooley attorney, ex-Casetext/Thomson Reuters ML scientist. Javed Qadrud-Din: Harvard Law, ex-Fenwick & West, ex-Casetext Director of R&D, ex-Meta ML. Ryan Walker (CTO): PhD Math, ex-CTO Casetext ($650M exit to Thomson Reuters), ex-VP Technology Thomson Reuters. |
| Competitors | Harvey AI (~$1.1B+ raised, $190M ARR, AI tools for BigLaw vs. General Legal's direct-to-founder law firm); Lawhive (~$100M raised, $35M revenue, consumer-focused UK AI law firm expanding to U.S.); Spellbook ($80M+ raised, revenue unknown, SaaS for lawyers vs. full-service firm); Robin AI ($70.9M raised, $10M ARR, acquired by Scissero Dec 2025, contract automation SaaS) |
| Moat Signals | Team built and exited Casetext ($650M); licensed law firm status creates regulatory barrier; proprietary legal AI workflow knowledge from years at Casetext/Thomson Reuters |
| Risk Factors | Generic brand name creating SEO/disambiguation challenges, flat-fee unit economics under attorney cost pressure, Lawhive U.S. expansion with $100M+ funding |
| Founder Reach | J.P. Mohler: Twitter not found, LinkedIn linkedin.com/in/jp-mohler/, GitHub github.com/JPMoh (unconfirmed). Javed Qadrud-Din: Twitter @Javed_Qadruddin (count not retrievable), LinkedIn linkedin.com/in/javed-qadrud-din/. Ryan Walker: Twitter not found, LinkedIn linkedin.com/in/ryanwalkerdata/, GitHub github.com/rwalk (357 stars top repo) |
| Distribution Signals | YC W26 batch network; free first contract offer through demo day; 20+ clients from private preview (YC Launch page, Feb 2026). No Product Hunt listing found. |
