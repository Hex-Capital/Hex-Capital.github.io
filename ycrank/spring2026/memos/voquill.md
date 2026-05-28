# Voquill

> The AI coworker that helps pathologists work cases faster

| Field | Value |
|-------|-------|
| Website | https://voquill.com/ |
| YC Page | https://www.ycombinator.com/companies/voquill |
| Batch | Spring 2026 |
| Industry | Healthcare / Healthcare |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, Health Tech |
| YC Partner | David Lieb |
| Emails | hello@voquill.com, michael@voquill.com |

## The Idea

- **Problem:** Pathologists bill $30–40B annually but spend ~1/3 of their time on case reporting and lose ~1/3 of contracted revenue to documentation gaps and billing errors, with current alternatives being legacy LIS systems and traditional dictation (YC company page, 2026).
- **Approach:** Real-time AI scribe that listens via push-to-talk while the pathologist works the case, routes findings into specimen/microscopic/interpretation/comments sections automatically, learns the pathologist's style, and suggests optimal CPT codes (voquill.com product page).
- **Differentiation:** Sits on top of existing LIS/IMS without migration vs. full-platform incumbents PathAI, Paige, and Proscia which provide diagnostic AI/slide management rather than report-generation scribes (voquill.com; CB Insights/Crunchbase competitor profiles).
- **Business Model:** [Inferred]: Per-seat SaaS sold to pathology labs, with "maximizes reimbursement codes" framing suggesting a value-based pitch tied to captured reimbursement; voquill.com does not display a pricing page.
- **TAM/SAM:** Global digital pathology market $1.46B (2025) growing to $2.75B by 2030 (MarketsAndMarkets, 2025); digital pathology workflow software sub-segment $178.9M (2025) at 14.1% CAGR (Technavio, 2025); company-cited pathologist billing pool is $30–40B/year (YC company page).
- **GTM / Distribution:** [Inferred]: Direct outbound to lab leadership via founder networks at Techcyte and a Mayo-deployed AI background, plus YC channel; supported by an existing F500 lab pilot (YC company page) and Calendly demo bookings on voquill.com.

## Defensibility

- **Moat today:** HIPAA compliant, SOC 2 in progress, CAP compliant (voquill.com), and integration with existing LIS/IMS create implementation switching costs; ~20% per-pathologist daily time savings reported across 25 pathologists at a F500 lab (YC company page).
- **Future moat:** [Inferred]: Style-learning data (per-pathologist phrasing and templates) plus CPT-coding optimization data could create per-user and per-lab personalization moats, unproven at current scale.
- **Market structure:** [Inferred]: Incumbent diagnostic-AI platforms (PathAI, Paige, Proscia) monetize via algorithm/platform licensing and could face channel/positioning conflict adding a real-time speech scribe layer that risks commoditizing their UI surface; not a regulatory barrier.
- **Commoditization risk:** Generic medical-scribe vendors (e.g., Abridge, DeepScribe, Nuance DAX) plus open-source dictation tools could enter the pathology niche; the namesake open-source "Voquill" voice-dictation tool already exists on Product Hunt (March 2026) (producthunt.com/products/voquill).

## Market & Traction

- **Traction signals:**
  - 25 pathologists onboarded at a F500 lab, ~20% per-pathologist daily time savings (YC company page, 2026).
  - Customer-reimbursement framing: "$8B+ left on the table" in pathology reimbursement targeted via CPT optimization (YC company page, 2026).
  - Compliance: HIPAA, CAP achieved; SOC 2 in progress (voquill.com).
  - Demo booking flow live via Calendly (voquill.com).
  - No public revenue, press coverage, app-store, Product Hunt rank, or social-follower counts found for the pathology product.
- **Competitors:**
  - PathAI ($255M raised, revenue unknown, Crunchbase 2025): diagnostic image-analysis platform (AISight) for tumor detection/grading, not a real-time report scribe.
  - Paige ($241M raised, revenue unknown, Crunchbase 2025): FDA-cleared diagnostic AI (Paige Prostate Detect), focused on detection/grading rather than report generation.
  - Proscia ($34M raised, revenue unknown, Crunchbase 2025): Concentriq enterprise pathology platform for slide/data management, not voice reporting.
  - Tempus (digital pathology solution, revenue unknown for pathology line): AI-enabled digital pathology integrated with broader oncology data platform (Tempus solutions page).
  - Abridge/DeepScribe/Nuance DAX (raised >$100M each, revenue unknown for pathology): clinician AI scribes built for ambient clinic visits, not pathology sign-out workflows (Lindy 2026 AI scribe roundup).
- **Why now:** [Inferred]: Medical-grade ASR plus LLM extraction crossed accuracy thresholds in 2024–2025 enabling structured pathology report generation, coinciding with U.S. pathologist shortages and CAP-compliant cloud adoption; no analyst statement explicitly tying these to pathology scribes was located.

## Founders & Team

- **Michael Gibson (Co-founder, CEO):**
  - Background: 5 years at Techcyte digital pathology, joined as junior engineer and rose to VP of Engineering managing 55 engineers; led AI team and architected systems deployed at Mayo Clinic and other reference labs (YC company page; theorg.com/org/techcyte).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Co-Founder @ Voquill (YC P26)" at linkedin.com/in/michael--gibson (LinkedIn search snippet).
  - GitHub: No public repos found.
- **Henry Habib (Co-founder, COO):**
  - Background: Principal at Oliver Wyman leading F500 AI/automation deployments; founder of The Intelligent Worker, an AI education platform with 400K Udemy students (Udemy profile; YC company page).
  - Twitter/X: @HenryHabibAI, count not retrievable.
  - LinkedIn: Profile referenced on YC page; headline not retrieved.
  - GitHub: No public repos found.
- **Josiah Saunders (Co-founder, CTO):**
  - Background: Led forward-deployed AI pathology team at Techcyte; founding engineer at Relay (YC S22); BYU computer science (GitHub profile; YC company page; ZoomInfo).
  - Twitter/X: @josiahsrc, count not retrievable.
  - LinkedIn: linkedin.com/in/josiah-saunders, headline "Techcyte" per snippet.
  - GitHub: @josiahsrc, top public repo "dough" (UI widgets); star counts not retrievable from search.
- **Co-founder relationship:** Michael Gibson and Josiah Saunders both worked at Techcyte on the AI pathology team (YC company page; theorg.com).
- **Founder-market fit:** Two of three founders shipped production digital-pathology AI to large reference labs including Mayo Clinic at Techcyte (YC company page); no advisors, board members, or investors beyond YC found in public sources.

## Key Risks

- **Reimbursement claim dependency:** Core sales pitch leans on capturing "$8B+ left on the table" via CPT code suggestions (YC company page); mis-suggested codes could trigger payer audits and labs may require human-in-loop sign-off, limiting realized uplift. No mitigation language found beyond pathologist sign-out review on voquill.com.
- **Incumbent platform substitution:** PathAI ($255M), Paige ($241M), and Proscia ($34M) own the LIS/diagnostic-AI surface (Crunchbase) and could bundle real-time scribe modules; Voquill's "sits on top without migration" positioning (voquill.com) helps short-term but does not block bundling.
- **Brand and SEO collision:** A separate, unrelated product also branded "Voquill" — an open-source WisprFlow alternative for general voice dictation — launched on Product Hunt March 2026 (producthunt.com/products/voquill), creating buyer-search confusion in the same "voice + AI" keyword space.
- **Single-pilot concentration:** All cited traction (25 pathologists, 20% time savings) sits inside one F500 lab pilot (YC company page); no second customer or signed LOI was located.
- **Technical feasibility at sign-out grade:** Medical-grade ASR for pathology terminology plus structured-field routing must meet sign-out accuracy; no published WER/accuracy benchmarks were located on voquill.com or in press.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Digital pathology $1.46B (2025) → $2.75B (2030) (MarketsAndMarkets, 2025); pathologist billing $30–40B/yr (YC company page, 2026) |
| SAM | Digital pathology workflow software $178.9M (2025), 14.1% CAGR (Technavio, 2025) |
| Traction | 25 pathologists onboarded at F500 lab, ~20% daily time savings (YC company page, 2026); HIPAA/CAP compliant, SOC 2 in progress (voquill.com, 2026) |
| Revenue Signal | No public data found |
| Founders | Michael Gibson (CEO): ex-VP Eng Techcyte managing 55, Mayo Clinic deployments. Henry Habib (COO): ex-Principal Oliver Wyman, founder The Intelligent Worker, 400K Udemy students. Josiah Saunders (CTO): ex-AI lead Techcyte, founding engineer Relay (YC S22), BYU CS. |
| Competitors | PathAI ($255M raised, revenue unknown, diagnostic image AI not scribe); Paige ($241M raised, revenue unknown, FDA-cleared detection AI); Proscia ($34M raised, revenue unknown, Concentriq slide-management platform); Tempus (revenue unknown for pathology line, broader oncology platform); Abridge/DeepScribe/DAX (>$100M raised each, revenue unknown, ambient clinic scribes not pathology) |
| Moat Signals | HIPAA + CAP compliance, SOC 2 in progress (voquill.com); style-learning + CPT-code optimization data loop (YC company page) |
| Risk Factors | Reimbursement-claim audit exposure, incumbent (PathAI/Paige/Proscia) bundling, brand collision with open-source Voquill dictation tool, single-customer concentration |
| Founder Reach | Michael Gibson: Twitter not found, LinkedIn michael--gibson, GitHub not found. Henry Habib: Twitter @HenryHabibAI count not retrievable, LinkedIn present headline not retrieved, GitHub not found. Josiah Saunders: Twitter @josiahsrc count not retrievable, LinkedIn josiah-saunders, GitHub @josiahsrc top repo "dough" stars not retrievable |
| Distribution Signals | Calendly demo booking live (voquill.com); F500 lab pilot active (YC company page, 2026); no Product Hunt, app store, or paid-channel data for pathology product found |
| Emails | hello@voquill.com, michael@voquill.com |

Sources:
- [Voquill product site](https://voquill.com/)
- [Voquill YC profile](https://www.ycombinator.com/companies/voquill)
- [Michael Gibson LinkedIn](https://www.linkedin.com/in/michael--gibson/)
- [Josiah Saunders LinkedIn](https://www.linkedin.com/in/josiah-saunders/)
- [Josiah Saunders GitHub](https://github.com/josiahsrc)
- [Henry Habib Udemy profile](https://www.udemy.com/user/henry-habib-2/)
- [Voquill Product Hunt (open-source dictation namesake)](https://www.producthunt.com/products/voquill)
- [PathAI Crunchbase](https://www.crunchbase.com/organization/pathai)
- [Paige Crunchbase](https://www.crunchbase.com/organization/paige-ai)
- [Proscia Crunchbase](https://www.crunchbase.com/organization/proscia)
- [Digital Pathology Market — MarketsAndMarkets](https://www.marketsandmarkets.com/Market-Reports/digital-pathology-market-844.html)
- [Digital Pathology Workflow Software — Technavio](https://www.technavio.com/report/digital-pathology-workflow-software-market-industry-analysis)
