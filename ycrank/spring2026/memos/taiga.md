# Taiga

> Full-stack Medical Billing Services

| Field | Value |
|-------|-------|
| Website | https://usetaiga.com |
| YC Page | https://www.ycombinator.com/companies/taiga |
| Batch | Spring 2026 |
| Industry | Healthcare / Healthcare Services |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AI |
| YC Partner | Nicolas Dessaigne |
| Emails | founders@usetaiga.com |

## The Idea

**Problem:** Independent and small medical practices in the U.S. face significant administrative burden from medical billing. The U.S. healthcare system loses over $265 billion per year to billing errors, denied claims, and administrative overhead (usetaiga.com). Practices must manually generate ICD-10 and CPT codes from clinical notes, submit claims to payers, manage denials and appeals, and handle patient statements — processes that are error-prone and time-consuming. Today, practices either employ in-house billing staff, outsource to traditional revenue cycle management (RCM) companies, or use fragmented software tools. The company's legal entity is Bayes AI, Inc. (usetaiga.com).

**Approach:** Taiga positions itself as an AI-native medical billing agency that handles the full revenue cycle from clinical notes to payment collection (usetaiga.com). Core capabilities include:
- **Coding validation:** AI generates ICD-10 and CPT codes from clinical notes, with physician review/approval (usetaiga.com)
- **Denial prevention:** Claims are scrubbed against payer-specific rules pre-submission using a denial-prediction engine that cross-references clinical documentation against coding rules in real time (usetaiga.com)
- **Claims & appeals:** Automated claim submission (CMS-1500) and denial appeal letter generation grounded in clinical evidence, payer policy, and precedent (usetaiga.com)
- **Patient billing:** Automated statement generation, balance tracking, and patient follow-up (usetaiga.com)
- **Revenue dashboard:** Real-time visibility into collections, denials, and payer performance (usetaiga.com)
- **EHR integrations:** Athenahealth, eClinicalWorks, NextGen Healthcare, AdvancedMD, Tebra, Elation Health, and Epic (usetaiga.com)
- **Payer coverage:** Commercial carriers, Medicare, Medicaid, and TRICARE (usetaiga.com)
- **Onboarding:** Live implementation within two weeks, no workflow changes required (usetaiga.com)

**Differentiation:** Unlike traditional RCM outsourcers (e.g., R1 RCM, Waystar), Taiga uses post-trained AI models for coding, denial prediction, and appeals rather than human billing teams or rules-based automation (usetaiga.com). Compared to Candid Health (a YC-backed RCM SaaS platform), Taiga markets itself as a full-service agency rather than a software tool — the provider uploads visit data and Taiga handles everything downstream (YC company page). Compared to LunaBill (YC F25), which focuses specifically on AI voice agents for insurance follow-up calls, Taiga covers the entire billing workflow end-to-end (usetaiga.com). Compared to AKASA, which targets large health systems, Taiga targets small and independent practices (usetaiga.com, LinkedIn).

**Business Model:** No pricing page or pricing tiers are publicly listed on usetaiga.com. [Inferred]: The most likely monetization path is a percentage-of-collections model (standard for medical billing agencies, typically 4-10% of collected revenue) or a per-claim fee, given the company's positioning as a full-service billing agency rather than a SaaS tool.

**TAM/SAM:** The global RCM market was valued at $163.72 billion in 2025, projected to grow to $472.42 billion by 2034 at 12.70% CAGR (Fortune Business Insights, 2025). North America accounted for approximately $90.46 billion in 2025 (Fortune Business Insights, 2025). Alternative estimate: $86.45 billion globally in 2025 at 10.15% CAGR (Mordor Intelligence, 2025). [Inferred]: Taiga's serviceable market is the U.S. small/independent practice segment — there are approximately 200,000+ physician-owned practices in the U.S., but no public SAM figure specific to this sub-segment was found.

**GTM / Distribution:** Taiga targets small and independent practices across the U.S., including family medicine, internal medicine, and specialty practices (LinkedIn company page). [Inferred]: Most likely initial distribution path is founder-led sales leveraging personal networks (both founders' parents are physicians with independent practices), followed by EHR integration partnerships and referral-based growth among practice owners.

## Defensibility

- **Data advantage (potential):** As Taiga processes claims across multiple payers and specialties, its denial-prediction models could improve with volume, creating a data flywheel. This is a potential future moat, not a current one.
- **EHR integrations:** Seven named EHR integrations (usetaiga.com) create switching costs once a practice is live, as re-integrating with a competitor requires implementation effort.
- **Full-stack lock-in:** By handling the entire revenue cycle rather than a single step, Taiga creates higher switching costs than point solutions.

No defensibility signals found in public sources related to patents, proprietary datasets, or regulatory moats.

**Market structure:** [Inferred]: Large incumbents like Waystar (publicly traded, ~$8B valuation) and R1 RCM focus on hospital systems and large health networks with enterprise sales motions. Serving small independent practices with a lean AI-first approach may be economically unattractive for these incumbents, whose cost structures are built around large-contract, high-touch service delivery. The structural barrier is unit economics incompatibility — incumbents' per-account costs make small practices unprofitable under their model.

**Commoditization risk:** LLM-based medical coding and claims scrubbing are technically reproducible. Multiple startups (Candid Health, AKASA, LunaBill, Medbill AI) are building AI-powered RCM solutions (web search results, 2025-2026). The core AI capabilities (coding from notes, denial prediction) rely on foundation models accessible to any well-funded competitor. Differentiation depends on payer-specific data accumulation, EHR integration depth, and service quality — all buildable but slow to replicate at scale.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or customer metrics disclosed (usetaiga.com, YC page)
- LinkedIn: 63 followers, 4 employees listed (LinkedIn, April 2026)
- GitHub (github.com/useTaiga): 3 public repositories, all forks or profile repos; no original repositories with meaningful star counts (GitHub, April 2026)
- No Product Hunt launch found for usetaiga.com medical billing product (Product Hunt search returned only results for the unrelated Taiga.io project management tool)
- Twitter/X: No company or founder accounts found
- 0 open job postings (YC page)
- No press coverage found in named publications
- No app store presence found

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Taiga |
|-----------|---------|------------------------------|
| **Candid Health** (YC) | $99.5M total; $52.5M Series C (Feb 2025, TechCrunch) | SaaS platform for provider billing teams rather than full-service agency; revenue grew ~250% in 2024 (TechCrunch, Feb 2025); targets larger provider organizations |
| **AKASA** | $205M total; $120M Series C (June 2024, Crunchbase) | Enterprise-focused AI automation for large health systems; claims 13% decrease in A/R days and $30M gross yield increase for clients (akasa.com) |
| **LunaBill** (YC F25) | $100K seed (SignalBase) | Narrow focus on AI voice agents for insurance follow-up calls only, not full-cycle billing; $764K contracted ARR, $428K live revenue since July launch (YC launch page) |
| **Medbill AI** | $16.3M total (Tracxn) | Revenue unknown; direct AI medical billing competitor |

**Why now:**
- [Inferred]: The primary catalyst is the maturation of large language models capable of parsing unstructured clinical notes and mapping them to billing codes (ICD-10, CPT) with sufficient accuracy, a capability that crossed a practical threshold in 2023-2024 with GPT-4-class models.
- AI-enabled healthcare startups captured 62% of all digital health venture funding in the U.S. in H1 2025, raising an average of $34.4M per round — an 83% premium over non-AI startups (web search result citing industry data, 2025).
- [Inferred]: CMS regulatory changes and increasing payer complexity (prior authorization requirements, documentation standards) continue to raise the administrative burden on small practices, creating urgency for automation.

## Founders & Team

**Nanda Guntupalli** — Co-founder
- Education: University of Pennsylvania, Computer Science (YC page: "Penn CS"; LinkedIn)
- Board Member, Penn Engineering Student Activities Council (LinkedIn)
- No prior companies or exits found
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/nanda-guntupalli/ — 500+ connections (LinkedIn)
- GitHub: No personal public account found; organization account github.com/useTaiga has no original repos

**Adam Wax** — Co-founder
- Education: Lehigh University, Computer Science and Mathematics (LinkedIn search results)
- Previous: SWE internship experience; accepted Goldman Sachs 2025 Possibilities Summit; accepted Summer 2025 Field Engineer Internship with Weeks Marine (LinkedIn search results)
- Won "Best Visual Design" award at Lehigh Valley Hackathon; QuizWiz project won best overall at Lehigh Valley Collegiate Hackathon (LinkedIn search results)
- Built an AI-powered study assistant using AWS Textract and AWS Bedrock (LinkedIn search results)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/adam-wax-20a6012aa/ — ~2,000 followers (LinkedIn via WebFetch)
- GitHub: No personal public account found

**Co-founder relationship:** Both founders have been friends since 3rd grade (YC page). They attended different universities (Penn and Lehigh), so the relationship predates college. Both founders' parents are physicians who own independent practices (YC page).

**Founder-market fit:** Both founders grew up in households where medical billing was a direct source of stress and lost revenue for their physician parents (YC page). This provides firsthand exposure to the problem from the practice-owner perspective. Nanda's Penn CS background and Adam's CS + Math background with AI project experience (AWS Bedrock/Textract) provide technical capability for building ML-based billing systems. Neither founder has prior healthcare industry work experience or previous startup exits found in public records.

## Key Risks

**Name collision risk:** "Taiga" is shared with Taiga.io, a well-established open-source agile project management tool with significant presence on Product Hunt, G2, Capterra, and Software Advice (web search results). This creates SEO competition and brand confusion in search results, potentially hindering organic discovery. Additionally, Taiga Health (gotaiga.com) and The Taiga Group (taigahealth.com) operate in adjacent healthcare spaces, compounding the naming collision.

**Well-funded direct competitors:** Candid Health ($99.5M raised, ~250% revenue growth in 2024) and AKASA ($205M raised) are pursuing AI-driven RCM with significantly more capital and established customer bases (TechCrunch, Feb 2025; Crunchbase). Even within YC, LunaBill (F25) is building AI voice agents for healthcare billing with reported traction ($764K contracted ARR) (YC launch page). Taiga enters a market with multiple well-capitalized competitors already demonstrating traction.

**Regulatory and compliance exposure:** Medical billing involves HIPAA-protected health information, payer-specific compliance requirements, and potential liability for coding errors that could trigger fraud investigations (e.g., upcoding). AI-generated billing codes that are inaccurate could expose both Taiga and its practice clients to legal and financial risk. Taiga notes HIPAA compliance (usetaiga.com) but the regulatory surface area is broad.

**Founder experience gap:** Neither founder has prior healthcare industry work experience, prior startup founding experience, or a prior exit found in public records (LinkedIn, web search). Both appear to be recent or current university students. The domain expertise is indirect — via their parents' practices rather than direct operational billing experience.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $163.72B global RCM market in 2025, 12.70% CAGR to $472.42B by 2034 (Fortune Business Insights, 2025) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Nanda Guntupalli (Co-founder): Penn CS. Adam Wax (Co-founder): Lehigh CS + Math, hackathon wins, AI project experience. |
| Competitors | Candid Health ($99.5M raised, ~250% rev growth 2024, SaaS platform vs. Taiga's agency model) (TechCrunch, Feb 2025); AKASA ($205M raised, enterprise health systems focus) (Crunchbase); LunaBill ($100K seed, $764K contracted ARR, voice-only billing calls) (YC/SignalBase); Medbill AI ($16.3M raised, revenue unknown) (Tracxn) |
| Moat Signals | No public data found |
| Risk Factors | Name collision with Taiga.io and Taiga Health, well-funded direct competitors (Candid Health $99.5M / AKASA $205M), regulatory/HIPAA compliance exposure |
| Founder Reach | Nanda Guntupalli: Twitter not found, LinkedIn 500+, GitHub not found. Adam Wax: Twitter not found, LinkedIn ~2,000, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | founders@usetaiga.com |
