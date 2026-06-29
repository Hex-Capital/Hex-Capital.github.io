# Insurf

> The AI-Native Decision Infrastructure for Health Insurance

| Field | Value |
|-------|-------|
| Website | https://www.insurf.io |
| YC Page | https://www.ycombinator.com/companies/insurf |
| Batch | Summer 2026 |
| Industry | Healthcare / Healthcare |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Health Tech, Automation |
| YC Partner | Gustaf Alstromer |
| Emails | investors@insurf.io (insurf.io homepage) |

## The Idea

- **Problem:** Healthcare practices lose revenue to denied claims and prior-authorization rejections; insurers fully or partially denied 3.2M prior-authorization requests in 2023, and prior auth accounts for ~$35B of US healthcare administrative spending (Health Affairs Scholar, 2024) (AMA, 2025) with current alternatives being manual physician/staff appeal drafting at $20–$30 per submission (MGMA, 2025).
- **Approach:** Inveto reads the chart from the EHR and turns a denial into a source-cited, physician-attested appeal packet in minutes, auto-fills prior-auth forms, and tracks outcomes as structured data (insurf.io homepage).
- **Differentiation:** Counterforce Health (free, patient-facing nonprofit) and Claimable ($50/case patient tool) target patients directly, while Insurf targets specialty practices and aggregates resolved-claim outcomes into a "coverage-decision graph" used to power a second product, Surely, for plan-cost pricing (insurf.io homepage); Tennr ($101M Series C) focuses on referral/document parsing rather than appeals (Fortune, Jun 2025).
- **Business Model:** No pricing page is published; insurf.io describes a "90-day Access Recovery pilot" for specialty practices (insurf.io homepage). [Inferred]: Likely contingency or per-recovered-claim fee given the framing "recovering revenue practices lose today," consistent with provider RCM economics.
- **TAM/SAM:** Prior authorization accounts for ~$35B in US administrative spending (Health Affairs Scholar, 2024), with denial-handling at $11,000 per clinician per year (MGMA, 2025); no SAM data found for AI-appeals software specifically.
- **GTM / Distribution:** Direct pilot enrollment with specialty practices via calendly.com/chang-insurf/30min booking flow on the homepage (insurf.io homepage). [Inferred]: Bottom-up sales to specialty clinics first, with cross-sell of Surely to brokers/employers once the coverage-decision dataset has scale.

## Defensibility

- **Moat today:** [Inferred]: Proprietary "coverage-decision graph" built from resolved claims is the stated moat (insurf.io homepage), but unproven at this stage with no disclosed data volume.
- **Future moat:** [Inferred]: Two-sided data flywheel — each Inveto appeal generates payer-behavior data that improves Surely's plan-cost predictions and Inveto's appeal targeting; unproven because graph density and predictive lift have not been disclosed.
- **Market structure:** [Inferred]: Incumbent RCM vendors (e.g., Waystar, R1) monetize claim volume and would cannibalize denial-cycle revenue by reducing denial rates; structural cannibalization may slow incumbent build, though not verified in public sources.
- **Commoditization risk:** Multiple AI-appeals entrants already exist — Counterforce Health, Claimable ($10M raised, Mark Cuban-backed), Fight Health Insurance, PenguinAI, Aegis Health (PYMNTS, 2026; Stateline, Nov 2025) — indicating low technical barrier to a baseline appeal-generation product.

## Market & Traction

- **Traction signals:**
  - 90-day Access Recovery pilot program actively recruiting specialty practices (insurf.io homepage).
  - Company status: Pre-Demo Day, Summer 2026 YC batch (insurf.io homepage; YC page).
  - No revenue, user counts, customer logos, press coverage, Product Hunt presence, Discord/Slack community, app store, or Chrome Web Store presence found in public sources.
  - No company Twitter/X or LinkedIn follower counts retrievable via search.
  - No YC jobs page postings found.
- **Competitors:**
  - Counterforce Health (grant-funded nonprofit, revenue unknown; PennAITech grant from $2.47M program): patient-facing free appeal generator, 70% reported success rate (Counterforce Health site; Axios Raleigh, Aug 2025).
  - Claimable ($10M raised, revenue unknown; Mark Cuban among investors): patient-facing $50/case appeals tool, 3-in-4 reversal rate (PYMNTS, 2026).
  - Tennr ($162M total raised, $605M valuation, revenue unknown; IVP-led Series C Jun 2025): AI for referrals/document parsing, adjacent rather than direct (Fortune, Jun 2025).
  - Fight Health Insurance (founding 2023, revenue unknown): free patient AI appeal service (Stateline, Nov 2025).
  - PenguinAI, Aegis Health (funding/revenue unknown): provider-side denial-management automation (Stateline, Nov 2025).
- **Why now:** [Inferred]: 2025 PBS, NBC, Stateline, and ProPublica coverage of AI-vs-AI appeals (PBS NewsHour; NBC News; Stateline Nov 2025; ProPublica) reflects a recent inflection in LLM capability to ingest EHR charts and produce payer-grade appeal packets at sub-manual cost.

## Founders & Team

- **Chang Lu (Co-founder):**
  - Background: LinkedIn URL linkedin.com/in/changxianlu listed on YC page; demo booking link is calendly.com/chang-insurf/30min (insurf.io homepage). LinkedIn profile content not retrievable (WebFetch blocked by LinkedIn, status 999); no public data found on prior companies or education.
  - Twitter/X: No public account found via search.
  - LinkedIn: linkedin.com/in/changxianlu (YC page); headline not retrievable.
  - GitHub: No public repos found.
- **Bryan Chung (Co-founder):**
  - Background: LinkedIn URL linkedin.com/in/bryan-chung-21b531265/ listed on YC page; LinkedIn profile content not retrievable (WebFetch blocked, status 999); no public data found on prior companies or education (searches surfaced unrelated "Bryan Ye-Chung").
  - Twitter/X: No public account found via search.
  - LinkedIn: linkedin.com/in/bryan-chung-21b531265/ (YC page); headline not retrievable.
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history found.
- **Founder-market fit:** [Inferred]: No verifiable domain expertise found in public sources; founder-market fit cannot be assessed from available data, and no advisors, board members, or named investors other than YC are disclosed.

## Key Risks

- **Crowded entrant field:** At least five AI-appeals products are already in market (Counterforce, Claimable, Fight Health Insurance, PenguinAI, Aegis Health) per Stateline Nov 2025 and PYMNTS 2026, with Claimable already at $10M raised; differentiation depends on the unproven coverage-decision-graph thesis (insurf.io homepage).
- **Two-product execution risk:** Surely depends on Inveto generating sufficient claim-resolution volume to populate the coverage-decision graph (insurf.io homepage), but no disclosed pilot count or claim volume exists; second-product viability is contingent on first-product scale that has not been demonstrated.
- **Regulatory / HIPAA exposure:** Reading EHR charts and submitting physician-attested appeals invokes HIPAA business-associate obligations and physician-attestation accuracy standards; no public data on Insurf's BAA posture, attestation workflow, or compliance certifications was found.
- **Payer countermeasure risk:** Payers are deploying AI-driven denial systems (Stateline, Nov 2025); appeal-success rates reported by competitors (Counterforce 70%, Claimable ~75%) may compress as payer counter-AI improves, with no Insurf-specific success rate yet disclosed.
- **Founder signal opacity:** No public founder background, prior exits, GitHub repos, or Twitter presence retrievable from search; due-diligence on founder-market fit is blocked at this time.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $35B US prior-auth administrative spending (Health Affairs Scholar, 2024); 3.2M prior-auth denials in 2023 (AMA, 2025) |
| SAM | No public data found |
| Traction | 90-day Access Recovery pilot recruiting specialty practices (insurf.io homepage, 2026); Pre-Demo Day Summer 2026 (insurf.io homepage) |
| Revenue Signal | No public data found |
| Founders | Chang Lu (Co-founder): LinkedIn linkedin.com/in/changxianlu; demo contact via calendly.com/chang-insurf/30min. Bryan Chung (Co-founder): LinkedIn linkedin.com/in/bryan-chung-21b531265/ |
| Competitors | Counterforce Health (grant-funded, revenue unknown, patient-facing free nonprofit); Claimable ($10M raised, revenue unknown, patient-facing $50/case); Tennr ($162M raised, $605M valuation, revenue unknown, adjacent referral automation); Fight Health Insurance (funding unknown, revenue unknown, free patient tool); PenguinAI / Aegis Health (funding unknown, revenue unknown, provider-side denial mgmt) |
| Moat Signals | Stated proprietary "coverage-decision graph" dataset (insurf.io homepage); no measured signals public |
| Risk Factors | Crowded AI-appeals entrant field, two-product sequencing dependency, payer counter-AI escalation |
| Founder Reach | Chang Lu: Twitter not found, LinkedIn linkedin.com/in/changxianlu (count not retrievable), GitHub not found. Bryan Chung: Twitter not found, LinkedIn linkedin.com/in/bryan-chung-21b531265/ (count not retrievable), GitHub not found |
| Distribution Signals | Calendly booking funnel on homepage (insurf.io, 2026); no Product Hunt, Chrome Web Store, or app store presence found |
| Emails | investors@insurf.io (insurf.io homepage) |

Sources:
- [Insurf homepage](https://www.insurf.io/)
- [Insurf YC company page](https://www.ycombinator.com/companies/insurf)
- [Health Affairs Scholar — Prior authorization burden](https://academic.oup.com/healthaffairsscholar/article/2/9/qxae096/7727862)
- [AMA — Prior authorization burden grows](https://www.ama-assn.org/practice-management/prior-authorization/prior-authorization-burden-grows-so-does-momentum-change)
- [MGMA — Prior authorization landscape 2025](https://www.mgma.com/articles/the-prior-authorization-landscape-in-2025)
- [PYMNTS — Insurance Denials Meet Their Match (2026)](https://www.pymnts.com/artificial-intelligence-2/2026/insurance-denials-meet-their-match-in-ai-powered-appeals/)
- [Stateline — AI vs. AI patients deploy bots (Nov 2025)](https://stateline.org/2025/11/20/patients-deploy-bots-to-battle-health-insurers-that-deny-care/)
- [PBS NewsHour — How patients use AI to fight denials](https://www.pbs.org/newshour/show/how-patients-are-using-ai-to-fight-back-against-denied-insurance-claims)
- [Axios Raleigh — Counterforce Health (Aug 2025)](https://www.axios.com/local/raleigh/2025/08/20/using-ai-to-fight-back-against-insurance-denials-counteforce)
- [Counterforce Health](https://www.counterforcehealth.org/)
- [Claimable](https://www.getclaimable.com/)
- [Fortune — Tennr Series C (Jun 2025)](https://fortune.com/2025/06/18/tennr-health-tech-ai-patient-referral-ivp-a16z-lightspeed-iconiq-series-c/)
- [Fierce Healthcare — Tennr $101M](https://www.fiercehealthcare.com/health-tech/tennr-clinches-101m-build-out-ai-automates-patient-referral-workflows)
