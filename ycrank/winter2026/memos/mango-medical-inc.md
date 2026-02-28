# Mango Medical

> We simulate orthopedic surgeries based on CT scans

| Field | Value |
|-------|-------|
| Website | https://mangomedical.io |
| YC Page | https://www.ycombinator.com/companies/mango-medical-inc |
| Batch | Winter 2026 |
| Industry | Healthcare / Healthcare IT |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Robotic Surgery, Healthcare IT, AI |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

## The Idea

**Problem:** Orthopedic surgeons performing fracture reconstruction and joint procedures rely on preoperative planning that is labor-intensive, often taking days to produce 3D surgical plans from CT scans. Current workflows involve manual segmentation and planning using tools like Brainlab's TraumaCad or Materialise's OrthoView, which require significant technician time and specialist input. Surgeon demand for orthopedic procedures is high relative to the number of available orthopedic surgeons, creating bottleneck pressure on planning workflows (Enhatch blog, 2024 via search snippet).

**Approach:** Mango Medical uses agentic AI to automate the transformation of CT scans into surgeon-ready 3D preoperative plans in minutes rather than days (YC company page). The system produces patient-specific reconstructed bone models and surgical plans for fractured or trauma-affected areas (LinkedIn company posts via search snippet). The company has described itself as an "Invisalign for complex bone fracture surgeries," indicating a standardized, AI-driven workflow that replaces bespoke manual planning (LinkedIn via search snippet).

**Differentiation:** Existing solutions fall into two categories: (1) legacy templating tools like Brainlab TraumaCad (acquired 2012) and Materialise OrthoView (acquired 2014), which are primarily 2D or semi-automated; and (2) newer AI-driven entrants like Formus Labs (focused on hip replacement planning, FDA-cleared) and Enhatch (focused on patient-specific instrumentation with 3D Systems partnership). Mango Medical's stated differentiator is speed — minutes instead of days — and the use of "agentic" AI, suggesting a more autonomous planning pipeline versus semi-automated tools that still require significant human input. The company originally spun off from the Technical University of Munich (LinkedIn via search snippet), giving it a research-rooted technical foundation.

**Business Model:** No public pricing page was found (website returned only metadata/JavaScript framework at time of research). The company's YC description references a "$10M ARR LOI from a top orthopedic company" (YC company page), suggesting a B2B enterprise model selling to orthopedic device companies or hospital systems. [Inferred]: The most likely monetization path is per-case SaaS licensing or enterprise platform licensing to orthopedic device companies, who would bundle the planning software with their implant offerings — consistent with how Formus Labs and Enhatch distribute through partnerships with Zimmer Biomet and Smith+Nephew respectively.

**TAM/SAM:** The global preoperative surgical planning software market was valued at USD 113.92 million in 2024 and is projected to reach USD 215.35 million by 2034, at a CAGR of 6.6% (Polaris Market Research, 2024 via search snippet). The U.S. orthopedic surgical planning software market was estimated at USD 24.63 million in 2024, growing at a 6.05% CAGR through 2030 (Grand View Research, 2024 via search snippet). The broader AI in orthopedic surgery market was USD 307.58 million in 2024, projected to reach USD 2.7 billion by 2032 at a 32.03% CAGR (MarketsandData via search snippet). The orthopedic surgery segment held a valuation of USD 0.55 billion in 2023 within preoperative surgical planning, with an anticipated increase to USD 1.39 billion by 2032 (SkyQuest, 2024 via search snippet).

**GTM / Distribution:** The company's YC description mentions a "$10M ARR LOI from a top orthopedic company" (YC company page), suggesting a channel strategy through orthopedic device OEMs. [Inferred]: Most likely distribution path is through partnerships with major orthopedic device manufacturers (e.g., Stryker, Zimmer Biomet, Smith+Nephew, DePuy Synthes), who would integrate Mango Medical's planning software into their implant ecosystem — mirroring the Formus Labs/Zimmer Biomet and Enhatch/Smith+Nephew partnership models.

## Defensibility

The company spun off from the Technical University of Munich (LinkedIn via search snippet), suggesting a foundation in academic research that may confer IP advantages. The pursuit of FDA 510(k) clearance (YC company page) constitutes a regulatory barrier that, once obtained, creates a compliance moat against new entrants. The agentic AI pipeline trained on CT scan data could develop a data advantage over time as more surgical plans are generated and validated against outcomes.

**Market structure:** Large orthopedic device incumbents (Stryker, Zimmer Biomet, Smith+Nephew) have historically acquired planning software capabilities (Brainlab acquired TraumaCad in 2012; Materialise acquired OrthoView in 2014) rather than building them internally. The incumbents' core business is implant sales, and their planning tools serve as enablers for implant adoption rather than standalone revenue centers. This creates a structural incentive for incumbents to partner with or acquire best-in-class planning software rather than invest in building autonomous AI planning from scratch. Additionally, FDA regulatory requirements for software as a medical device create a 12-24 month clearance timeline that slows competitive entry.

**Commoditization risk:** Multiple startups are building AI-powered orthopedic planning tools (Formus Labs, Enhatch, Pixee Medical, CustoMED), and large incumbents have existing planning platforms. The underlying technology stack (CT scan segmentation, 3D reconstruction, surgical simulation) uses well-documented computer vision and deep learning techniques. However, the specific domain expertise required for fracture-specific planning (as opposed to the more common joint replacement planning) narrows the competitive set. The quality of training data and clinical validation provides a potential differentiator that is difficult to replicate quickly.

## Market & Traction

**Traction signals:**
- $10M ARR letter of intent from an unnamed "top orthopedic company" (YC company page, Winter 2026 batch listing). This is described as an LOI, not a signed contract or recognized revenue.
- Pursuing FDA 510(k) clearance (YC company page). No public record of submission or clearance found in FDA databases.
- Company LinkedIn page: https://www.linkedin.com/company/mangomedical (LinkedIn via search snippet). Follower count not retrievable.
- Adrian Kilian Twitter/X: @thegadak — 830 followers (X.com profile via search snippet).
- Jorge Padilla Perez Twitter/X: @padilla_peres (YC page). Follower count not retrievable.
- No Product Hunt listing found.
- No press coverage found in named publications.
- No app store presence or Chrome extension found.
- No Discord or Slack community found.
- Website not fully accessible at time of research (returned only JavaScript framework metadata).
- The company participated in a podcast episode: "Bringing Disruptive Tech to Surgery with Adrian Kilian (#14)" on The Strong Startup podcast (Podbean via search snippet).
- Partnership with Extra Horizon Medical Backend-as-a-Service for regulatory-compliant infrastructure (LinkedIn post via search snippet).
- Participated in Plug and Play Tech Center (plugandplaytechcenter.com via search snippet).
- No funding rounds publicly recorded on Crunchbase or Tracxn as of research date (Tracxn 2025 profile via search snippet).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Mango Medical |
|---|---|---|---|
| **Formus Labs** (New Zealand) | $10.9M total (PitchBook, 2025 via search snippet) | $2.9M revenue in 2024 (Getlatka via search snippet) | FDA-cleared (510(k) for Formus Hip, 2023); focused on hip replacement planning with Zimmer Biomet distribution partnership; built on 20 years of Auckland Bioengineering Institute research; 3,000+ hip replacements planned (OrthoFeed, 2023 via search snippet) |
| **Enhatch** (Hoboken, NJ) | $13.4–$15M total (PitchBook/Tracxn via search snippet) | Revenue not disclosed | Broader platform covering patient-specific instrumentation and surgical guides; FDA 510(k)-cleared; strategic partnerships with 3D Systems and Smith+Nephew; founded 2012 with longer market presence |
| **Pixee Medical** (France) | $17.3M total (Tracxn via search snippet) | Revenue not disclosed | Focused on augmented reality intraoperative navigation rather than preoperative planning; FDA-cleared Knee+ AR navigation system; 5,000+ patients treated; expanding to shoulder with Shoulder+ (Business Wire, Feb 2024) |
| **CustoMED** (Israel) | $6M seed (PR Newswire, Oct 2025) | Revenue not disclosed | End-to-end platform from AI planning to 3D-printed patient-specific implants and guides; originated from Sheba Medical Center; hundreds of surgeries completed (company claim); regulatory approvals anticipated 2026 |
| **Brainlab / TraumaCad** (incumbent) | Brainlab is privately held (est. >$500M revenue) | Revenue not separately disclosed | Legacy market position with template library of ~4,000 implant families; integrated with Brainlab navigation systems; acquired by Brainlab in 2012; primarily 2D templating rather than AI-driven 3D planning |

**Why now:** [Inferred]: Several converging factors have opened this opportunity in the last 12–24 months: (1) Advances in deep learning for medical image segmentation, particularly transformer-based architectures, have crossed a performance threshold enabling automated 3D reconstruction from CT scans that approaches clinical-grade accuracy; (2) FDA's evolving framework for AI/ML-based software as a medical device (SaMD) has provided clearer regulatory pathways, with Formus Labs obtaining 510(k) clearance in 2023 as a precedent; (3) Growing surgeon shortages and rising orthopedic procedure volumes — driven by an aging population — are creating urgency for workflow automation tools that reduce planning bottlenecks.

## Founders & Team

**Adrian Kilian** — Co-founder & CEO
- Background in dentistry; previously worked at dental practices in Berlin (Dr. med. dent. Bodo Stuhlmann Zahnarzt and Zahnarztquartett Berlin) (Weekday.works via search snippet)
- German voice actor (IMDB, Wikidata via search snippet — appears to be the same individual based on nationality and age)
- Executive education: Stanford Ignite (Part-Time, 2022) at Stanford University Graduate School of Business (LinkedIn via search snippet)
- Participated in XPRENEURS Incubator for HighTech Startups (Technical University of Munich ecosystem) (LinkedIn via search snippet)
- Participated in MedInnovate Graduate Program at Technical University of Munich (search snippet)
- Founded Mango Medical in 2020, spinning off from Technical University of Munich (Tracxn via search snippet)
- Twitter/X: [@thegadak](https://x.com/thegadak) — 830 followers (X.com via search snippet). Bio: "solving surgeries with embodied AI // e/acc evangelist & freedom advocate // Founder @ mangomedical.io (YC W26)"
- LinkedIn: [linkedin.com/in/adrian-kilian](https://www.linkedin.com/in/adrian-kilian/) — 500+ connections
- GitHub: [github.com/devadk](https://github.com/devadk) — 1 public repository (GitHub via search snippet)

**Jorge Padilla Pérez** — Co-founder
- Background in AI, XR, and robotics in medicine (YC page)
- AI Engineer at Mango Medical, developing advanced AI solutions for surgical planning using deep learning (LinkedIn via search snippet)
- Education at Technical University of Munich (LinkedIn via search snippet)
- Based in Munich (LinkedIn via search snippet)
- Twitter/X: @padilla_peres (YC page) — follower count not retrievable
- LinkedIn: [linkedin.com/in/jorge-padilla-pérez](https://www.linkedin.com/in/jorge-padilla-p%C3%A9rez-871b52195/) — 500+ connections
- GitHub: No public repos found

**Co-founder relationship:** Both Adrian Kilian and Jorge Padilla Pérez share a connection to the Technical University of Munich — Kilian through the MedInnovate Graduate Program and XPRENEURS incubator, and Padilla Pérez through his education and AI research there.

**Founder-market fit:** Adrian Kilian brings clinical experience from dentistry (a surgical specialty requiring preoperative planning), combined with Stanford business education and experience in the TU Munich medtech ecosystem. Jorge Padilla Pérez contributes deep technical expertise in AI, XR, and robotics applied to medicine, with education from TU Munich's engineering programs. The combination of clinical understanding and AI/robotics expertise is directly relevant to building automated surgical planning software. The company's origin as a TU Munich spinoff suggests access to academic research and clinical validation networks in the German/European orthopedic community.

Note: The YC page listed the founding team as Adrian Kilian and Jorge Padilla Perez. A RocketReach org chart also listed Fernando Pérez Lozano as Lead Software Engineer and Julien Schmidt as Co-Founder and COO (RocketReach via search snippet), suggesting the team may be larger than the 3 reported on YC.

## Key Risks

**FDA 510(k) clearance uncertainty:** The company is "pursuing" FDA 510(k) clearance (YC company page) but has no public record of submission or clearance. Formus Labs, a direct competitor, took years from founding (2016) to obtaining 510(k) clearance (2023). Until clearance is obtained, Mango Medical cannot market its product as a medical device in the U.S. The regulatory timeline could delay commercialization.

**LOI-to-revenue conversion risk:** The $10M ARR LOI from a "top orthopedic company" (YC company page) is a letter of intent, not a binding contract or recognized revenue. LOIs in medtech are often contingent on regulatory clearance, clinical validation, and integration milestones. The unnamed partner's commitment level and the conditions attached to the LOI are unknown.

**Competitive incumbency in orthopedic planning:** Formus Labs has FDA clearance, a Zimmer Biomet distribution partnership, $2.9M in 2024 revenue, and 3,000+ surgeries planned (Getlatka, OrthoFeed via search snippet). Enhatch has $13.4–$15M in funding, FDA clearance, and partnerships with 3D Systems and Smith+Nephew. Mango Medical must differentiate against funded, FDA-cleared competitors who are further along commercially.

**Brand disambiguation:** Multiple companies share similar names in the medical/health space — Mango Health (medication adherence, acquired), MangoRx (telemedicine TRT), Mango Clinic, and an unrelated Mango Medical family practice in Hawaii (Wheree.com via search snippet). This creates potential confusion for customers, investors, and in search/SEO visibility.

**Technical University of Munich spinoff to U.S. market transition:** The company originated in Germany (Freising/Munich) and is now listed in San Francisco (YC page). Navigating both FDA (U.S.) and CE marking (EU) regulatory pathways simultaneously, while transitioning the company's operational base, introduces complexity. The founding team appears distributed between the U.S. (Kilian in Menlo Park) and Germany (Padilla Pérez in Munich).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $307.58M AI in orthopedic surgery market in 2024, projected $2.7B by 2032 at 32.03% CAGR (MarketsandData via search snippet); $113.92M preoperative surgical planning software market in 2024, projected $215.35M by 2034 at 6.6% CAGR (Polaris Market Research via search snippet) |
| SAM | $24.63M U.S. orthopedic surgical planning software market in 2024, 6.05% CAGR through 2030 (Grand View Research via search snippet) |
| Traction | $10M ARR LOI from unnamed top orthopedic company (YC company page, W26); pursuing FDA 510(k) (YC company page); Extra Horizon backend partnership (LinkedIn via search snippet); Plug and Play Tech Center participant (plugandplaytechcenter.com via search snippet) |
| Revenue Signal | No recognized revenue found; $10M ARR LOI is a letter of intent, not revenue (YC company page) |
| Founders | Adrian Kilian (CEO): ex-dentist, Stanford Ignite 2022, TU Munich spinoff founder. Jorge Padilla Pérez (Co-founder): AI/XR/robotics, TU Munich, deep learning for surgical planning |
| Competitors | Formus Labs ($10.9M raised, $2.9M revenue 2024, FDA-cleared hip planning with Zimmer Biomet partnership); Enhatch ($13.4–$15M raised, revenue unknown, FDA-cleared PSI platform with 3D Systems/Smith+Nephew); Pixee Medical ($17.3M raised, revenue unknown, AR navigation focus); CustoMED ($6M raised, revenue unknown, AI planning + 3D-printed implants); Brainlab/TraumaCad (incumbent, 2D templating with ~4,000 implant families) |
| Moat Signals | TU Munich academic spinoff origin; pursuing FDA 510(k) clearance; domain-specific AI for fracture reconstruction (narrower focus than most competitors targeting joint replacement) |
| Risk Factors | FDA clearance not yet obtained, $10M LOI is non-binding, funded/cleared competitors ahead commercially, brand disambiguation challenges |
| Founder Reach | Adrian Kilian: Twitter @thegadak 830 followers, LinkedIn 500+, GitHub 1 repo. Jorge Padilla Pérez: Twitter @padilla_peres count not retrievable, LinkedIn 500+, GitHub not found |
| Distribution Signals | No Product Hunt listing found; no app store presence; no Chrome extension; podcast appearance on The Strong Startup (Podbean via search snippet) |
| Emails | No public data found |
