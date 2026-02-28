# Ritivel

> AI-native platform for regulatory document submission

| Field | Value |
|-------|-------|
| Website | https://www.ritivel.com |
| YC Page | https://www.ycombinator.com/companies/ritivel |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare IT |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, Compliance, Enterprise Software, Regtech, Biotechnology |
| YC Partner | Gustaf Alstromer |
| Emails | pavan@ritivel.com, founders@ritivel.com (YC page) |

## The Idea

**Problem:** Regulatory and medical writing teams at life sciences companies (pharma, biotech, medtech, CROs, CDMOs) face months-long processes to produce regulatory submissions — Clinical Study Reports (CSRs), Common Technical Documents (CTDs), Investigational New Drug applications (INDs), and Biologics License Applications (BLAs). These teams must synthesize thousands of pages of clinical data, locate correct source documents across SharePoint and Veeva systems, chase colleagues for inputs, and manually draft documents following strict FDA formatting. The company estimates that each month a drug is delayed from reaching market costs pharma companies ~$45M in lost revenue (company website). Existing workflows rely on manual document authoring in Microsoft Word and outsourced medical writing services from CROs and specialized writing agencies. McKinsey has documented that end-to-end CSR authoring cycles take ~180 hours for a first draft (McKinsey, 2024 via search snippet).

**Approach:** Ritivel deploys AI agents that generate comprehensive first drafts of regulatory documents directly in Microsoft Word, following FDA formatting requirements and drawing from the customer's existing clinical data and prior submissions. Every data point includes word-level citations linked back to the original source document. The platform integrates with SharePoint and Veeva to automatically source the right documents and with Outlook to handle reminder emails and follow-ups. The company emphasizes 100% local deployment with no cloud storage and zero data retention, addressing pharma's data security concerns (company website). A free "Regulatory Search" tool provides instant answers from FDA and ICH guidelines without requiring signup (company website).

**Differentiation:** Versus incumbent regulatory writing service firms and CROs, Ritivel offers software-based automation rather than outsourced human labor. Versus Certara's CoAuthor (launched October 2023), which is a template-based GenAI writing tool within a large public company's portfolio, Ritivel positions as an AI-native workspace with deeper integrations (Veeva, SharePoint, Outlook) and word-level traceability. Versus Yseop, which uses NLG (natural language generation) for clinical document automation and has served 150+ clinical trials (Yseop press release, September 2025 via search snippet), Ritivel emphasizes local deployment and zero data retention. Versus Deep Intelligent Pharma (DIP), which is a broader AI clinical trials platform with $110M+ in funding, Ritivel is more narrowly focused on the regulatory writing and submission bottleneck.

**Business Model:** No pricing is publicly listed on the company website. [Inferred]: Most likely monetization path is enterprise SaaS licensing (per-seat or per-submission) given the enterprise B2B nature of the product, the regulatory sensitivity of the workflow, and the "Book a Demo" CTA on the website indicating sales-led motion.

**TAM/SAM:** The global AI in medical writing market was valued at $868.99 million in 2024, projected to reach $1.76 billion by 2030 at a 12.52% CAGR (Grand View Research, 2025 via search snippet). The broader pharmaceutical regulatory affairs market was estimated at $9.47 billion in 2024, projected to reach $14.34 billion by 2030 at a 7.17% CAGR (Grand View Research, 2024 via search snippet). [Inferred]: The SAM is the AI-powered regulatory writing software segment within the broader regulatory affairs market, likely a subset of the $869M AI medical writing market focused on enterprise software rather than services.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to pharma/biotech regulatory writing teams, starting with mid-size companies where decision cycles are shorter. The free Regulatory Search tool may serve as a top-of-funnel acquisition mechanism. The YC description references "50+ conversations with pharma professionals" during discovery, suggesting founder-led sales. The Microsoft Word and SharePoint integrations lower adoption friction for teams already working in the Microsoft ecosystem.

## Defensibility

Ritivel operates in a space where data access and domain-specific accuracy create potential moat mechanisms. The local-deployment/zero-data-retention architecture addresses a genuine barrier to AI adoption in pharma, where clinical trial data is highly sensitive and regulated. Over time, accumulated templates, FDA formatting rules, and customer-specific regulatory submission patterns could create switching costs.

**Market structure:** Large incumbents in the regulatory submissions space (Veeva, IQVIA, Oracle Health Sciences) are primarily document management and clinical data systems, not AI-native writing tools. Their business models center on data management licenses and services revenue. Building an AI writing agent that generates compliant first drafts requires specialized domain training data and deep understanding of regulatory formatting requirements (CTD/eCTD standards, ICH guidelines) that is adjacent to but distinct from what existing platforms provide. Certara, as a public company (Nasdaq: CERT) with broad biosimulation and regulatory services, has launched CoAuthor but regulatory writing is not its core revenue driver. [Inferred]: Incumbents face the challenge that AI-native writing tools could reduce demand for their existing regulatory writing services revenue.

**Commoditization risk:** The core technology (LLM-based document generation) is available to any team with access to foundation models. Differentiation depends on regulatory domain expertise (FDA/ICH formatting, CTD structure), depth of enterprise integrations (Veeva, SharePoint), and trust built through accuracy and traceability. Well-funded competitors like Deep Intelligent Pharma ($110M+ raised) and Yseop (~$22.6M+ raised) are already in market. Large consulting firms (McKinsey co-developed an AI CSR platform with Merck that reduced first-draft time from 180 to 80 hours (McKinsey, 2024 via search snippet)) could also enter directly.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- No Product Hunt launch found.
- No press coverage in named publications found.
- Twitter/X: Company account @ritivel exists (YC page); follower count not retrievable.
- LinkedIn: Company page exists at linkedin.com/company/ritivel (YC page); follower count not retrievable.
- Job postings: 0 open positions listed on YC (YC page, February 2026).
- The company states it conducted "50+ conversations with pharma professionals" during discovery (YC company description).
- Ritivel AI Private Limited (India entity) was incorporated on December 10, 2025, in Bangalore, Karnataka (Falcon Ebiz, CIN U62011KA2025PTC212044).
- Y Combinator featured Ritivel in a LinkedIn post (LinkedIn, YC account, via search snippet).

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Ritivel |
|---|---|---|
| **Yseop** | ~$22.6M+ raised including €10M from Claret Capital Partners (September 2025) (Yseop press release via search snippet) | NLG-based approach; 150+ clinical trials powered; TIME Best Inventions 2025 in Medical & Healthcare category; longer track record. Revenue unknown. |
| **Certara (CoAuthor)** | Public company (Nasdaq: CERT); 2,400+ clients across 66 countries (Certara SEC filing via search snippet) | Broader biosimulation platform; CoAuthor launched October 2023 with next-gen update June 2024; regulatory writing is one product within large suite. Revenue not broken out for CoAuthor. |
| **Deep Intelligent Pharma (DIP)** | ~$110M+ total ($50M Series D + $60M additional round) (Startup Researcher; Unspoiled News via search snippets) | Broader AI clinical trials platform; headquartered in Singapore/Beijing; focused on global pharma R&D. Revenue unknown. |
| **RegDesk** | ~$50-100K raised (PitchBook; CB Insights via search snippets) | Focused on regulatory information management (RIMS) for medtech; AI for compliance tracking rather than document generation; founded 2014. Revenue unknown. |

**Why now:** [Inferred]: The convergence of several factors in 2023–2025 created this opportunity: (1) Large language models reached sufficient quality for domain-specific first-draft generation in regulated contexts, as evidenced by McKinsey's reported 55% reduction in CSR authoring time using AI (McKinsey, 2024 via search snippet); (2) FDA has begun engaging with AI/ML in regulatory processes; (3) approximately 80% of top pharma companies are modernizing their Regulatory Information Management Systems (McKinsey, 2024 via search snippet), creating institutional readiness for AI writing tools.

## Founders & Team

**Pavan Kalyan (PK) Tankala** — Co-founder & CEO
- BS from Manipal Institute of Technology (2020); MS in Computer Science at Columbia University (personal website: pavan-kalyan.dev)
- Previously: SDE-II at Hevo Data; intern at Microsoft (personal website)
- Research publications: "Data Ambiguity Strikes Back: How Documentation Improves GPT's Text-to-SQL" at NeurIPS '23 and TRL '23; two papers at SIGMOD/PODS '23 (DaMoN '23 and HILDA '23 workshops) (pavan-kalyan.dev/publications/)
- Research interests: databases & distributed systems, artificial intelligence, health analytics (personal website)
- Open-source contributions to Jackson, Depscloud, Trickster, GoCity (personal website)
- Twitter/X: @pavantankala — follower count not retrievable
- LinkedIn: linkedin.com/in/tankalapavankalyan/
- Google Scholar: profile exists (scholar.google.com, user ID 11_GsJAAAAAJ)
- GitHub: pavan-kalyan.dev references contributions; no standalone GitHub profile URL found in search results

**Gunin Gupta** — Co-founder
- IIT Bombay (Weekday.works profile; LinkedIn via search snippet)
- Previously: Business Analyst at Kearney (management consulting); Summer Associate at Nomura Research Institute (ZoomInfo via search snippet)
- Overall Coordinator at NSS IIT Bombay, the largest student volunteer body at IIT Bombay (ZoomInfo via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/gunin-gupta-3a5775194/
- GitHub: No public repos found

**Nirmit Arora** — Co-founder
- IIT Dharwad (GitHub profile; search snippets)
- Connection to Microsoft Research mentioned in search results but specific role not confirmed
- Twitter/X: @nirmit11 — follower count not retrievable
- LinkedIn: linkedin.com/in/nirmitarora/
- GitHub: github.com/i-was-here — 12 repositories, 8 followers; pinned repos include a deep learning framework implementation ("nnet"), brain tumor ML classifier, and face mask detection neural network (GitHub profile)
- Listed as director of Ritivel AI Private Limited (India entity) alongside Pavan Kalyan Tankala (Falcon Ebiz, CIN data)

**Co-founder relationship:** Pavan Kalyan Tankala attended Manipal Institute of Technology and Columbia University; Gunin Gupta attended IIT Bombay; Nirmit Arora attended IIT Dharwad. No shared university is evident. The YC company description states the founders "previously built AI copilots at Microsoft Research," suggesting Microsoft Research as a shared employer, though individual-level verification was only partially possible — Pavan Kalyan lists a Microsoft internship on his personal website, and Nirmit Arora has a connection to Microsoft Research mentioned in search results. No Microsoft connection was found for Gunin Gupta in public sources.

**Founder-market fit:** Pavan Kalyan Tankala's research in NLP (NeurIPS '23 on text-to-SQL), databases (SIGMOD '23), and health analytics directly applies to building AI systems that parse clinical data and generate structured regulatory documents. His publications demonstrate technical depth in exactly the kind of AI-meets-structured-data challenge that regulatory writing represents. Nirmit Arora's ML background (neural network implementations, health-related ML projects on GitHub) and potential Microsoft Research experience contribute AI engineering capability. Gunin Gupta's management consulting background at Kearney provides enterprise sales and strategy orientation relevant to selling to pharma companies. No advisors, board members, or notable investors beyond YC were found in public sources.

## Key Risks

**Pharma enterprise sales cycle length:** Life sciences companies have lengthy procurement and compliance review processes, often 6–18 months for new software vendors. Ritivel must sustain itself through extended sales cycles while demonstrating regulatory-grade reliability. The zero-data-retention local deployment model may partially mitigate security review timelines.

**Regulatory accuracy liability:** Errors in AI-generated regulatory submissions could delay drug approvals or trigger FDA compliance issues. If a generated CSR or CTD contains inaccuracies that pass through review, the consequences for the pharma customer (and by reputational extension, Ritivel) could be severe. The word-level citation and traceability features are a mitigation, but the risk remains that reviewers may over-rely on AI-generated content.

**Well-funded incumbent competition:** Yseop (~$22.6M+ raised, 150+ clinical trials powered, TIME Best Inventions 2025), Certara (public company with CoAuthor), and Deep Intelligent Pharma ($110M+ raised) are already in market with regulatory writing AI products. McKinsey has co-developed a CSR writing platform with Merck. These competitors have established pharma relationships and validated products.

**Unverified Microsoft Research claim:** The YC description states the founders "previously built AI copilots at Microsoft Research," but public sources only partially verify this — Pavan Kalyan Tankala's personal website lists a Microsoft internship (not specifically Research), and Nirmit Arora has an unspecified Microsoft Research connection. Gunin Gupta's public background shows management consulting at Kearney, with no Microsoft connection found.

**Validation gap:** No public evidence of paying customers, pilots, LOIs, or revenue was found. The company references "50+ conversations with pharma professionals" in discovery but no publicly confirmed customer relationships.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $869M AI in medical writing market (Grand View Research, 2024 via search snippet, 12.52% CAGR to $1.76B by 2030); $9.47B broader pharma regulatory affairs market (Grand View Research, 2024 via search snippet, 7.17% CAGR) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Pavan Kalyan Tankala (CEO): Manipal BS, Columbia MS CS, ex-Microsoft intern, ex-Hevo Data, NeurIPS/SIGMOD publications. Gunin Gupta: IIT Bombay, ex-Kearney consulting. Nirmit Arora: IIT Dharwad, Microsoft Research connection (unconfirmed role). |
| Competitors | Yseop (~$22.6M+ raised, revenue unknown, NLG-based medical writing with 150+ clinical trials); Certara/CoAuthor (public co Nasdaq: CERT, revenue unknown for CoAuthor, broader biosimulation suite); Deep Intelligent Pharma ($110M+ raised, revenue unknown, broader AI clinical trials platform); RegDesk (~$50-100K raised, revenue unknown, RIMS for medtech) |
| Moat Signals | Local-deployment/zero-data-retention architecture addressing pharma security concerns; word-level citation traceability; Veeva/SharePoint/Outlook integrations |
| Risk Factors | Extended pharma sales cycles, well-funded incumbent competitors already in market, unverified founding team Microsoft Research claims |
| Founder Reach | Pavan Kalyan Tankala: Twitter @pavantankala (count not retrievable), LinkedIn linkedin.com/in/tankalapavankalyan/, Google Scholar profile. Gunin Gupta: Twitter not found, LinkedIn linkedin.com/in/gunin-gupta-3a5775194/. Nirmit Arora: Twitter @nirmit11 (count not retrievable), LinkedIn linkedin.com/in/nirmitarora/, GitHub 12 repos/8 followers. |
| Distribution Signals | No public data found |
| Emails | pavan@ritivel.com, founders@ritivel.com (YC page) |
