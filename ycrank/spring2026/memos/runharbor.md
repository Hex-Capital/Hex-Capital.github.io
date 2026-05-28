# Harbor

> AI system-of-record for clinical trial data

| Field | Value |
|-------|-------|
| Website | https://runharbor.com/ |
| YC Page | https://www.ycombinator.com/companies/runharbor |
| Batch | Spring 2026 |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Diego, CA, USA |
| Tags | SaaS, Health Tech, B2B, Healthcare |
| YC Partner | Nicolas Dessaigne |
| Emails | hello@runharbor.com, albert@runharbor.com |

## The Idea

- **Problem:** Medical device and pharma sponsors spend months setting up custom EDCs and research sites spend hours per subject per day on manual data entry, with data management consuming ~30% of total clinical trial budgets (YC company description, 2026).
- **Approach:** "Magic Build" parses a protocol PDF and auto-generates eCRFs and source documents in under 5 minutes, while "Magic Capture" uses LLM/document extraction to pull data from uploaded source documents into the EDC, cutting transcription time 90% (runharbor.com, 2026).
- **Differentiation:** Versus Medidata Rave, Veeva Vault EDC, Oracle Clinical One, Castor EDC, and Medrio — Harbor advertises a flat-fee model with "no per-subject, per-site, or per-CRF charges" and 1-week database builds vs. 2–3 month industry standard (runharbor.com pricing page, 2026).
- **Business Model:** Free for Academic & Non-Profit (unlimited users/patients); Commercial Study starting at $2,000/month; Enterprise/CRO volume pricing with MSA (runharbor.com pricing, 2026).
- **TAM/SAM:** Global eClinical solutions market projected to grow from $13.88B in 2026 to $39.75B by 2034 (Fortune Business Insights, 2025); EDC-specific subsegment ~$1.7B in 2022 with 10.6% CAGR through 2032 (Global Market Insights).
- **GTM / Distribution:** [Inferred]: Direct sales to medical-device and biotech sponsors plus academic sites, evidenced by named customers including Biolinq, BioDynamik, NOVA Genomics, Apollon, Attuned HealthTech, Kalevala Therapeutics, and University Hospitals (runharbor.com customer list, 2026); founder Albert Cai's prior Biolinq tenure is a likely warm-intro channel.

## Defensibility

- **Moat today:** 21 CFR Part 11, HIPAA, and GDPR compliance with included validation package and audit trails (runharbor.com, 2026) — regulatory validation is a switching-cost barrier for any sponsor mid-trial.
- **Future moat:** [Inferred]: Accumulated trial-protocol-to-CRF training data from each onboarded study could compound the "Magic Build" model's accuracy; unproven because only ~5 studies are live (YC description, 2026).
- **Market structure:** [Inferred]: Incumbents like Medidata and Veeva monetize per-subject/per-site/per-CRF (industry standard referenced by Harbor's pricing page); a flat-fee model would cannibalize existing book-of-business, creating channel-conflict friction for direct copy.
- **Commoditization risk:** [Inferred]: Document-extraction LLM pipelines are widely available; any well-funded EDC incumbent (Veeva, Medidata, Oracle, IQVIA) or AI-clinical entrant could ship a comparable "protocol-to-CRF" feature.

## Market & Traction

- **Traction signals:**
  - 5 clinical studies live on platform (LinkedIn/YC post, Nov 2025 via search snippet).
  - 1,600-subject randomized trial database configured in 1 week vs. months quoted by legacy vendors (YC description, 2026).
  - 90% reduction in transcription time (runharbor.com, 2026).
  - Named customers: BioDynamik, NOVA Genomics, Biolinq, Apollon, Attuned HealthTech, Kalevala Therapeutics, University Hospitals (runharbor.com, 2026).
  - Partner/program affiliations: Y Combinator, Google Cloud Partner, NVIDIA Inception Program, Octane Launchpad (runharbor.com, 2026).
  - Engineering blog active: posts on software validation (Sep 2025) and React performance (Oct 2025) (runharbor.com/blog).
  - No public Product Hunt launch, Twitter/LinkedIn follower count, Discord, or active job posting found.
- **Competitors:**
  - Medidata (Dassault Systèmes subsidiary, $5.8B acquisition 2019; revenue inside Dassault Life Sciences ~$1B+ segment): incumbent enterprise EDC, per-subject pricing (Dassault filings, 2019).
  - Veeva Vault EDC (NYSE: VEEV, public, FY revenue ~$2.7B): unified Vault Clinical Suite, enterprise CRO/pharma standard (Veeva FY filings via search snippet).
  - Oracle Clinical One (Oracle Life Sciences, revenue unknown segment): legacy pharma EDC bundled with broader Oracle Health stack (Towards Healthcare report, 2025).
  - Florence Healthcare ($116.5M raised, $27M Series C-1 led by Insight Partners Jun 2022; revenue unknown): focused on eISF/remote site monitoring rather than EDC core (Crunchbase/Florence press release).
  - Castor EDC ($65M raised, Series B Jul 2021; revenue unknown): cloud EDC for academic and decentralized trials (Tracxn, 2025).
  - Medrio ($33.6M raised, $30M from Questa Capital; revenue unknown): SMB/early-phase EDC (Fierce Biotech).
  - Medable ($580M raised; revenue unknown): decentralized clinical trial / eCOA platform, adjacent rather than direct EDC (PitchBook, 2026).
- **Why now:** [Inferred]: LLM and document-extraction accuracy/traceability has crossed the threshold required by 21 CFR Part 11 audit standards within the last 12–24 months, which Harbor cites as the enabling shift (YC description, 2026).

## Founders & Team

- **Albert Cai (Co-founder, CEO):**
  - Background: BS Biomedical Engineering, University of Michigan, May 2019 (Close Concerns alumni page); Summer Associate 2018 and Full-Time Associate 2019 at Close Concerns covering diabetes technology (Close Concerns/DiaTribe profile); ran clinical trials and regulatory strategy at Biolinq through its FDA De Novo authorization for the Biolinq Shine intradermal CGM (YC page; MedTech Dive, 2024).
  - Twitter/X: No public account found.
  - LinkedIn: "Founder @ Harbor" — linkedin.com/in/ac-ai (YC page).
  - GitHub: No public account found.
- **Nathan Leung (Co-founder, CTO):**
  - Background: Pure math at UCLA and computer science at University of Michigan (YC page); Google and Ramp engineering tenures (Ramp Engineering blog "Lessons from my internship at Ramp"); employee #1 at a prior YC S19 startup; wrote smart contracts at a blockchain infrastructure company (YC page; natecation.com).
  - Twitter/X: @nathanhleung — count not retrievable.
  - LinkedIn: "Harbor" / linkedin.com/in/nathanhleung (YC page).
  - GitHub: @nathanhleung — github.com/nathanhleung; specific top-repo star count not retrievable from search results.
- **Co-founder relationship:** Both attended University of Michigan (Albert BME; Nathan CS) — shared university overlap (YC page; Close Concerns alumni page).
- **Founder-market fit:** Albert lived the EDC pain point at Biolinq through De Novo clearance, and Nathan brings zero-to-one engineering from Ramp/Google and a prior YC company (YC page, 2026); no public advisors or board members found.

## Key Risks

- **Incumbent substitution risk:** Veeva, Medidata, and Oracle dominate enterprise pharma EDC procurement (Towards Healthcare 2025 vendor analysis); any of them shipping a protocol-to-CRF LLM feature would eliminate Harbor's core differentiation, and no IP moat is publicly disclosed.
- **Regulatory/validation risk:** 21 CFR Part 11 audit defects or any LLM-extraction error in a regulatory-submission dataset could trigger FDA inspection findings and customer churn; Harbor's Sep 2025 blog post on "Compliance Without Compromise" describes their continuous-validation approach (runharbor.com/blog) but no third-party audit attestation is publicly disclosed.
- **Concentration risk:** A single 1,600-subject trial appears to be Harbor's largest customer (YC description, 2026); loss of that account would materially affect reported traction.
- **Technical feasibility risk:** LLM document extraction at the accuracy required for clinical trial primary endpoints is unproven at scale; Harbor cites 90% transcription-time reduction (runharbor.com) but no published accuracy/error-rate benchmark vs. human entry was found.
- **Name disambiguation risk:** "Harbor" is shared with an unrelated local-LLM CLI tool on Product Hunt (producthunt.com/products/habor) and other entities; press monitoring requires the "runharbor" qualifier.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global eClinical solutions $13.88B in 2026 → $39.75B by 2034 (Fortune Business Insights, 2025) |
| SAM | EDC systems ~$1.7B in 2022, 10.6% CAGR 2023–2032 (Global Market Insights) |
| Traction | 5 clinical studies live (YC/LinkedIn, Nov 2025); 1,600-subject trial DB built in 1 week (YC, 2026); 90% transcription-time reduction (runharbor.com, 2026); 7 named customer logos (runharbor.com, 2026) |
| Revenue Signal | Academic/Non-Profit: free; Commercial Study: from $2,000/month; Enterprise/CRO: volume MSA (runharbor.com pricing, 2026) |
| Founders | Albert Cai (CEO): U Michigan BME 2019, Close Concerns, Biolinq clinical/regulatory through FDA De Novo. Nathan Leung (CTO): UCLA math + Michigan CS, Google, Ramp, employee #1 at prior YC S19 startup. |
| Competitors | Medidata (Dassault sub, $5.8B acq 2019, enterprise EDC); Veeva Vault EDC (public ~$2.7B FY rev, unified Vault Clinical); Oracle Clinical One (revenue unknown, legacy pharma EDC); Florence Healthcare ($116.5M raised, eISF focus); Castor EDC ($65M raised, cloud EDC); Medrio ($33.6M raised, SMB EDC); Medable ($580M raised, DCT/eCOA adjacent) |
| Moat Signals | 21 CFR Part 11 / HIPAA / GDPR compliance with included validation package (runharbor.com, 2026); NVIDIA Inception + Google Cloud Partner programs (runharbor.com) |
| Risk Factors | Incumbent substitution by Veeva/Medidata/Oracle, regulatory/validation defect risk, single-customer concentration |
| Founder Reach | Albert Cai: Twitter not found, LinkedIn ac-ai, GitHub not found. Nathan Leung: Twitter @nathanhleung (count not retrievable), LinkedIn nathanhleung, GitHub nathanhleung (stars not retrievable) |
| Distribution Signals | YC Spring 2026 batch (YC page); YC LinkedIn launch post (Nov 2025); Google Cloud Partner + NVIDIA Inception + Octane Launchpad (runharbor.com); no Product Hunt launch found |
| Emails | hello@runharbor.com, albert@runharbor.com |

Sources:
- [Harbor company site](https://runharbor.com/)
- [Harbor YC page](https://www.ycombinator.com/companies/runharbor)
- [Harbor compliance blog](https://runharbor.com/blog/2025-09-19-software-validation)
- [YC LinkedIn Harbor launch post](https://www.linkedin.com/posts/y-combinator_harbor-is-a-new-electronic-data-capture-activity-7439339730967707648-CWwC)
- [Albert Cai – Close Concerns](https://www.closeconcerns.com/contributors-and-alumni)
- [Albert Cai – DiaTribe](https://diatribe.org/author/albert-cai)
- [Biolinq FDA De Novo – MedTech Dive](https://www.medtechdive.com/news/biolinq-de-novo-diabetes-clearance-cgm/761303/)
- [Nathan Leung – Ramp Engineering](https://engineering.ramp.com/post/lessons-from-my-internship-at-ramp)
- [Nathan Leung GitHub](https://github.com/nathanhleung)
- [Florence Healthcare Series C-1](https://www.florencehc.com/press-release/florence-healthcare-announces-27-million-series-c-1-round-led-by-high-growth-scaleup-investor-insight-partners/)
- [Castor EDC funding – Tracxn](https://tracxn.com/d/companies/castor/__eK1ABgCqIllRUDFza0r8MeKakP04lhfM7y4SDzGS5qE)
- [Medrio funding – Fierce Biotech](https://www.fiercebiotech.com/cro/eclinical-specialist-medrio-receives-30m-equity-investment-from-questa-capital)
- [Medable PitchBook](https://pitchbook.com/profiles/company/87555-61)
- [eClinical Solutions market – Fortune Business Insights](https://www.fortunebusinessinsights.com/eclinical-solutions-market-105464)
- [EDC market – Global Market Insights](https://www.gminsights.com/industry-analysis/electronic-data-capture-systems-market)
