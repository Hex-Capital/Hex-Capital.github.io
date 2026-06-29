# FlowManual

> AI for Construction's Back Office.

| Field | Value |
|-------|-------|
| Website | https://flowmanual.com/ |
| YC Page | https://www.ycombinator.com/companies/flowmanual |
| Batch | Summer 2026 (YC company page) |
| Industry | Real Estate and Construction / Real Estate and Construction -> Construction |
| Team Size | 2 |
| Location |  |
| Tags | SaaS, Construction, Workflow Automation |
| YC Partner | Gustaf Alstromer (YC company page) |
| Emails | founders@flowmanual.com (flowmanual.com), david@flowmanual.com (search snippet) |

## The Idea

- **Problem:** Construction contractors spend hundreds of hours per month manually reviewing bids, specs, RFIs, submittals, and change orders for scope, price, deadline, and exclusion discrepancies (flowmanual.com).
- **Approach:** An AI document engine that compares bids vs. contracts and analyzes spec/scope packages with color-coded margin labels, clause references, and line-item links back to exact page locations (flowmanual.com).
- **Differentiation:** Versus Trunk Tools (project document Q&A, trunktools.com) and Document Crunch (contract risk/compliance, documentcrunch.com), FlowManual emphasizes cross-document delta detection across the full bid→closeout workflow and offers air-gapped on-prem deployment with "files never leave your server" (flowmanual.com).
- **Business Model:** [Inferred]: SaaS subscription with a free trial (no credit card) and demo-booking sales motion shown on the site (flowmanual.com); no public pricing page found.
- **TAM/SAM:** Construction management software market estimated at $10.62B–$17.35B in 2025 with ~10.3% CAGR through 2032 (Coherent Market Insights / Mordor Intelligence, 2025); no public SAM data found for the back-office sub-segment.
- **GTM / Distribution:** [Inferred]: Direct sales and demo-driven outbound to mid-market GCs and specialty contractors, with on-prem/air-gapped option targeting security-sensitive buyers (flowmanual.com product page).

## Defensibility

- **Moat today:** On-prem/air-gapped containerized deployment with AES-256-GCM encryption and SHA-256 audit digests is rare among AI construction tools and addresses a buyer constraint that cloud-only competitors do not (flowmanual.com).
- **Future moat:** [Inferred]: Proprietary corpus of contractor-labeled bid/contract deltas could create a data moat for clause-level extraction, unproven because customer count and labeled-data volume are not public.
- **Market structure:** [Inferred]: Incumbents like Procore are cloud-multi-tenant by design, which makes air-gapped/on-prem distribution a unit-economics conflict for them; not a strong barrier against AI-native peers like Trunk Tools or Document Crunch.
- **Commoditization risk:** Document Crunch and Trunk Tools already apply frontier LLMs (OpenAI, Anthropic) to construction contracts and documents (documentcrunch.com); any well-funded competitor with prompt engineering and retrieval architecture could replicate the bid-vs-contract diff feature.

## Market & Traction

- **Traction signals:**
  - Featured customer case study: Cedar Ridge Mechanical (flowmanual.com).
  - YC Summer 2026 batch participation (ycombinator.com/companies/flowmanual).
  - Free trial with no-credit-card sign-up live on site (flowmanual.com).
  - No public revenue, user count, Product Hunt launch, or press coverage found.
- **Competitors:**
  - Trunk Tools ($70M total raised — $40M Series B Jul 2025 led by Insight Partners + $20M Series A Aug 2024 led by Redpoint, trunktools.com; ARR not public, "scaled revenue 5x over past six months" per CNBC Aug 2025): AI document agent across drawings/specs/RFIs but cloud-first, not delta-comparison focused.
  - Document Crunch ($30.5M total — $9M Series A Feb 2024 led by Navitas + $21.5M Series B led by Titanium Ventures, businesswire.com Oct 2024; ARR unknown, "tripled revenue annually past three years" per documentcrunch.com): Contract risk/compliance review, not bid-vs-contract diffing.
  - Buildots ($45M round May 2025, techcrunch.com; total raised and ARR not public in snippet): 360° site monitoring vs. BIM model — adjacent (field, not back office).
  - Constructable (YC company, funding not retrieved; ARR unknown, constructable.ai): Procore-alternative project management covering RFIs/submittals/drawings, broader scope than FlowManual.
  - Hammr (funding not retrieved): Construction payroll/crew compliance integrated with QuickBooks (peopleops.solutions, Oct 2025) — adjacent back-office function, not document AI.
- **Why now:** [Inferred]: Frontier LLM accuracy on long-form construction documents crossed a usable threshold in 2024–2025, evidenced by Trunk Tools' $40M Series B (Jul 2025) and Document Crunch's $21.5M Series B (Oct 2024) on AI document workflows.

## Founders & Team

- **David Shijoon Bae (Co-founder & CEO):**
  - Background: Harvard dropout, Class of 2029 admit; 2024-25 National President of California Association of Student Councils; from Irvine, CA; Orange County School of the Arts Class of 2025 (linkedin.com/in/shijoonbae, casc.net, OCDE newsroom).
  - Twitter/X: No public account found.
  - LinkedIn: "California Association of Student Councils" (linkedin.com/in/shijoonbae) — full headline not captured.
  - GitHub: No public repos found.
- **Michael Lin (Co-Founder & CTO):**
  - Background: Harvard dropout studying Math & Computer Science, involvement in HCS Tech for Social Good (linkedin.com/in/itsmichaellin).
  - Twitter/X: @immichaellin (YC profile); follower count not retrievable.
  - LinkedIn: "Computer Science & Statistics @ Harvard" (linkedin.com/in/itsmichaellin).
  - GitHub: No public account confirmed for this Michael Lin.
- **Co-founder relationship:** [Inferred]: Both founders are Harvard dropouts per YC company page; no public data on specific shared classes, clubs, or prior employment.
- **Founder-market fit:** [Inferred]: Engineering background applied to construction back office, but no public construction-industry employment or domain experience documented for either founder; no advisors or named angels found.

## Key Risks

- **Founder-market fit gap:** Neither founder has public construction-industry employment history (linkedin.com/in/shijoonbae, linkedin.com/in/itsmichaellin); enterprise GCs are slow-cycle buyers and domain credibility matters. No mitigation (e.g., named construction advisors) found in public sources.
- **Well-funded direct competition:** Trunk Tools ($70M raised, trunktools.com, Jul 2025) and Document Crunch ($30.5M raised, businesswire.com, Oct 2024) already sell AI document workflows to GCs and have multi-year head starts on data, integrations, and customer references.
- **Feature commoditization:** Bid-vs-contract diffing relies on frontier LLMs that competitors also access (Document Crunch uses OpenAI + Anthropic per documentcrunch.com); without a proprietary data or workflow advantage, the feature can be replicated.
- **Air-gapped deployment cost:** On-prem/air-gapped distribution (flowmanual.com) implies high-touch installation and support, which conflicts with a 2-person team scaling self-serve free trials; no public data on services revenue or implementation playbook.
- **Single named customer:** Only Cedar Ridge Mechanical is referenced on the site (flowmanual.com); no public count of paying customers, ARR, or pipeline.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Construction management software $10.62B–$17.35B in 2025, ~10.3% CAGR to $34.49B by 2032 (Coherent Market Insights / Mordor Intelligence, 2025) |
| SAM | No public data found |
| Traction | Cedar Ridge Mechanical case study (flowmanual.com); YC Summer 2026 batch (ycombinator.com); free trial live (flowmanual.com) |
| Revenue Signal | No public data found |
| Founders | David Shijoon Bae (CEO): Harvard dropout, CASC National President 2024-25. Michael Lin (CTO): Harvard dropout, CS & Statistics. |
| Competitors | Trunk Tools ($70M raised, ARR unknown, project document AI agent); Document Crunch ($30.5M raised, ARR unknown, contract risk/compliance); Buildots ($45M May 2025 round, ARR unknown, field site monitoring); Constructable (funding unknown, ARR unknown, Procore alternative); Hammr (funding unknown, ARR unknown, construction payroll) |
| Moat Signals | Air-gapped/on-prem containerized deployment with AES-256-GCM and SHA-256 audit digests (flowmanual.com) |
| Risk Factors | No construction-industry founder experience, well-funded direct competitors (Trunk Tools, Document Crunch), feature commoditization on frontier LLMs |
| Founder Reach | David Shijoon Bae: Twitter not found, LinkedIn count not retrievable, GitHub none found. Michael Lin: Twitter @immichaellin count not retrievable, LinkedIn count not retrievable, GitHub none confirmed. |
| Distribution Signals | Free trial no-credit-card on flowmanual.com; demo-booking CTA on flowmanual.com; no Product Hunt, Chrome Web Store, or app store presence found |
| Emails | founders@flowmanual.com (flowmanual.com), david@flowmanual.com (search snippet) |

Sources:
- [FlowManual product site](https://flowmanual.com/)
- [FlowManual YC company page](https://www.ycombinator.com/companies/flowmanual)
- [David Shijoon Bae LinkedIn](https://www.linkedin.com/in/shijoonbae/)
- [Michael Lin LinkedIn](https://www.linkedin.com/in/itsmichaellin/)
- [Trunk Tools Series B announcement](https://trunktools.com/resources/company-updates/trunk-tools-closes-40m-series-b-construction-ai-transformation/)
- [Trunk Tools Series A](https://trunktools.com/resources/in-the-news/trunk-tools-series-a/)
- [Document Crunch Series B](https://www.businesswire.com/news/home/20241010294924/en/Document-Crunch-Raises-%2421.5M-Series-B-to-Ensure-Construction-Stays-Compliant-During-Project-Execution)
- [Document Crunch Series A](https://www.documentcrunch.com/news-archive/series-a)
- [Buildots $45M (TechCrunch)](https://techcrunch.com/2025/05/29/buildots-raises-45m-to-help-companies-track-construction-progress/)
- [Constructable YC page](https://www.ycombinator.com/companies/constructable)
- [Coherent Market Insights — Construction Management Software](https://www.coherentmarketinsights.com/market-insight/construction-management-software-market-4566)
- [Mordor Intelligence — Construction Management Software](https://www.mordorintelligence.com/industry-reports/construction-management-software-market)
- [Hammr / PeopleOps writeup](https://peopleops.solutions/2025/10/24/adaptive-redhammer-hammr-filling-qbos-construction-gaps/)
- [CASC board profile — Shijoon Bae](https://www.casc.net/board-of-directors-1/shijoon(david)-bae)
- [OCDE newsroom — student leadership](https://newsroom.ocde.us/four-orange-county-high-school-students-selected-for-bank-of-americas-student-leadership-program/)
