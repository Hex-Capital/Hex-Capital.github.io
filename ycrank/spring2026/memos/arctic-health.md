# Arctic Health

> AI-native credentialing and contracting for healthcare

| Field | Value |
|-------|-------|
| Website | https://arctic.health |
| YC Page | https://www.ycombinator.com/companies/arctic-health |
| Batch | Spring 2026 |
| Industry | Healthcare / Healthcare -> Healthcare Services |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Healthcare, Healthcare IT, AI |
| YC Partner | Aaron Epstein |
| Emails | No public data found (contact form only; phone (650) 955-1955 listed on arctic.health) |

## The Idea

- **Problem:** Healthcare practices face a 60-90 day credentialing/payer enrollment cycle across hundreds of state and payer portals, and existing tools either cover only fragments of the workflow or are priced out of reach for small/mid-size organizations (arctic.health; YC company page).
- **Approach:** Browser-automation agents submit and monitor applications across 300+ insurance networks and all 50 states + DC, with industry experts training the system on edge cases and validating per-state/per-payer data requirements (arctic.health).
- **Differentiation:** [Inferred]: Versus Medallion ($130M raised, Tracxn) and Verifiable ($50.1M raised, Clay/TechCrunch 2023) which historically serve mid-market and enterprise, Arctic claims end-to-end coverage "regardless of organization type or size" (YC page) — i.e., serving SMB practices the incumbents under-serve.
- **Business Model:** No pricing page published; [Inferred]: per-provider or per-application SaaS/managed-service fee, consistent with category peers, given the website advertises "API integration and white-label options" (arctic.health).
- **TAM/SAM:** U.S. credentialing software & services in healthcare was USD 267.72M in 2024, growing at 6.95% CAGR through 2033 (Grand View Research, 2025); broader global medical credentialing services market was USD 6.8B in 2023 projected to USD 14.9B by 2032 at 8.9% CAGR (search snippet, market reports).
- **GTM / Distribution:** [Inferred]: Direct sales to small and mid-size healthcare practices, with API/white-label as a secondary channel to partner platforms (arctic.health feature list).

## Defensibility

- **Moat today:** Stated reliance on "experienced industry experts who handle every edge case" training the system on per-state/per-payer requirements suggests proprietary process data accumulated per payer portal (YC page); no defensibility signals confirmed in public sources beyond company self-description.
- **Future moat:** [Inferred]: Per-payer-portal automation library and a labeled corpus of approved/rejected submissions could create a data moat, but is unproven given the company is in YC Spring 2026 and has $500K raised (PitchBook).
- **Market structure:** [Inferred]: Incumbents priced for enterprise (Medallion, Verifiable, Axuall) face unit-economics conflict serving SMB practices at a lower price point; this is the structural gap Arctic targets per its YC description, though not independently verified.
- **Commoditization risk:** Browser-automation + LLM stack is increasingly accessible; multiple AI-native credentialing entrants (e.g., Assured raised $6M, Fierce Healthcare 2024) have launched recently, suggesting low technical barrier to a v1.

## Market & Traction

- **Traction signals:**
  - Funding: $500K raised; investors include Fortitude Ventures, Menlo Ventures, Y Combinator (PitchBook profile via search snippet; arctic.health backers section).
  - Coverage claim: "300+ insurance networks" and "All 50 states + DC" (arctic.health, May 2026).
  - Operational claim: "2-day payer submission" and "60-90 days average" full credentialing (arctic.health, May 2026).
  - LinkedIn company page exists at linkedin.com/company/arctic-health with posts dated late-2025/early-2026; follower count not retrievable.
  - YC page lists company as "Active," "Not hiring" (YC company page, May 2026).
  - No Product Hunt launch, no press coverage, no Twitter/X account, and no Discord/Slack community found in public sources.
- **Competitors (revenue figures unknown unless cited):**
  - Medallion ($130M raised across 4 rounds; Spark, Sequoia, GV — Tracxn): enterprise/mid-market credentialing + licensing platform, broader scope than Arctic.
  - Verifiable ($50.1M raised, $27M Series B Craft Ventures Jul 2023 — TechCrunch): primary-source-verification credentialing, serves payers and large provider groups.
  - Axuall ($41M raised across 4 rounds — Tracxn): clinician "wallet" + workforce intelligence, targets health systems.
  - CertifyOS (Certify): $14.5M Series A in 2022 and $40M Series B in 2025 (MedCity News; PR Newswire): provider data infrastructure + credentialing APIs for payers.
  - Assured ($6M seed — Fierce Healthcare): AI-credentialing peer targeting time-to-credential, closest in stage/approach to Arctic.
- **Why now:** [Inferred]: Browser-automation reliability with LLM agents crossed a usability threshold in 2024-2025, enabling end-to-end portal navigation across hundreds of non-standardized payer sites — a workflow previously requiring manual operators.

## Founders & Team

- **Sam Slezek (Co-founder & CEO):**
  - Background: Previously led product teams at Scale AI and Instacart; investor at Amasia; covered insurance companies at Morgan Stanley (LinkedIn snippet; YC page).
  - Twitter/X: No public account found.
  - LinkedIn: "Co-Founder & CEO @ Arctic Health" — linkedin.com/in/slezek/ (count not retrievable).
  - GitHub: No public repos found.
- **Raghav Mehrish (Co-founder & CTO):**
  - Background: MS Computer Science, UCLA (search snippet); senior engineer at Airbnb and Zenefits; co-founded Handstamp (LinkedIn; YC page).
  - Twitter/X: No public account found.
  - LinkedIn: "Healthcare AI | YC P26" — linkedin.com/in/rmehrish/ (count not retrievable).
  - GitHub: No public repos found.
- **Michael Clark (Co-founder & COO):**
  - Background: Co-founded the inside sales team at Instabase; previously at 1Sharpe Capital (boutique hedge fund) (search snippet; YC page).
  - Twitter/X: No public account found.
  - LinkedIn: linkedin.com/in/michael-clark-newyork/ — headline not retrievable.
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history (shared employer/university not identified in retrieved sources).
- **Founder-market fit:** [Inferred]: Slezek's prior insurance-sector coverage at Morgan Stanley plus AI product experience at Scale AI maps to a payer-facing AI workflow product; Mehrish's Zenefits tenure exposes him to HR/benefits compliance automation — both relevant to credentialing (YC page; LinkedIn snippets). Investors include Menlo Ventures (Menlo Ventures portfolio listings).

## Key Risks

- **Well-funded incumbent overlap:** Medallion ($130M, Tracxn), Verifiable ($50.1M, Clay), Axuall ($41M, Tracxn), and Certify ($40M Series B 2025, PR Newswire) all serve credentialing; with Arctic at $500K seed (PitchBook), runway-to-feature-parity is constrained. No public mitigation identified.
- **Portal-automation fragility:** The product mechanism depends on browser automation across "hundreds of payer portals" (YC page); payer portal changes, CAPTCHA introductions, or terms-of-service restrictions can break workflows; no published reliability metrics.
- **Regulatory/compliance exposure:** Credentialing submissions are governed by NCQA standards and state-specific requirements; errors create payer-network or licensure liability for customers (industry context; no Arctic-specific incident found). Mitigation per company: "specialist-reviewed applications on every submission" (arctic.health).
- **AI-native entrant convergence:** Assured ($6M, Fierce Healthcare) and similar new entrants pursue the same SMB-credentialing wedge with AI agents, indicating multiple teams racing for the same segment.
- **Name disambiguation:** Multiple unrelated entities use "Arctic Health" branding (e.g., arctichealth.org public-health database; Arctic Healthcare on LinkedIn with ~30 followers); search-based traction signals may conflate entities.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | U.S. credentialing software & services in healthcare: $267.72M in 2024, 6.95% CAGR through 2033 (Grand View Research, 2025); global medical credentialing services: $6.8B in 2023 → $14.9B by 2032, 8.9% CAGR (market report search snippet) |
| SAM | No public data found |
| Traction | $500K raised from Menlo Ventures, Fortitude Ventures, Y Combinator (PitchBook, 2026); "300+ insurance networks" and "All 50 states + DC" coverage claim (arctic.health, May 2026); active LinkedIn company page (LinkedIn, 2026); no Product Hunt, press, or Twitter presence found |
| Revenue Signal | No public data found (no pricing page on arctic.health, May 2026) |
| Founders | Sam Slezek (CEO): ex-Scale AI, Instacart, Amasia, Morgan Stanley. Raghav Mehrish (CTO): ex-Airbnb, Zenefits; UCLA MS CS; co-founded Handstamp. Michael Clark (COO): ex-Instabase, 1Sharpe Capital. |
| Competitors | Medallion ($130M raised, revenue unknown — broader enterprise scope); Verifiable ($50.1M raised, revenue unknown — primary-source verification for payers); Axuall ($41M raised, revenue unknown — workforce-intelligence focus on health systems); Certify ($40M Series B 2025, revenue unknown — provider data infrastructure APIs); Assured ($6M raised, revenue unknown — AI-native, closest peer) |
| Moat Signals | Company-claimed expert-in-the-loop training on per-state/per-payer edge cases (YC page); no independently verified moat signals found |
| Risk Factors | Well-funded incumbents (Medallion, Verifiable, Axuall, Certify); browser-automation fragility across payer portals; AI-native entrant convergence (Assured) |
| Founder Reach | Sam Slezek: Twitter not found, LinkedIn /in/slezek/ count not retrievable, GitHub not found. Raghav Mehrish: Twitter not found, LinkedIn /in/rmehrish/ count not retrievable, GitHub not found. Michael Clark: Twitter not found, LinkedIn /in/michael-clark-newyork/ count not retrievable, GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt launch, no press releases, no Chrome extension, no mobile app identified) |
| Emails | No public data found (arctic.health uses a contact form; phone (650) 955-1955 listed) |

Sources:
- [Arctic Health YC company page](https://www.ycombinator.com/companies/arctic-health)
- [Arctic Health website](https://arctic.health/)
- [Arctic Health PitchBook profile](https://pitchbook.com/profiles/company/1376964-91)
- [Sam Slezek LinkedIn](https://www.linkedin.com/in/slezek/)
- [Raghav Mehrish LinkedIn](https://www.linkedin.com/in/rmehrish/)
- [Medallion Tracxn profile](https://tracxn.com/d/companies/medallion/__VdMdDd5GBCUkzb3pR-PdnYmLOkGNMScGNqzCoBRnzVA)
- [Verifiable $27M Series B (TechCrunch)](https://techcrunch.com/2023/07/10/verifiable-healthcare-credentialing-software-27m/)
- [Axuall Tracxn profile](https://tracxn.com/d/companies/axuall/__nj2VsaCvQa1MIqtN6IR_IBPeVPvaDJY_WatDhBIz6-E)
- [Certify $40M Series B (PR Newswire)](https://www.prnewswire.com/news-releases/certify-secures-40m-series-b-funding-to-continue-building-the-healthcare-provider-data-infrastructure-of-the-future-302491503.html)
- [Assured $6M seed (Fierce Healthcare)](https://www.fiercehealthcare.com/health-tech/startup-assured-picks-6m-slash-time-it-takes-credential-providers-using-ai)
- [U.S. credentialing software market (Grand View Research)](https://www.grandviewresearch.com/industry-analysis/us-credentialing-software-services-healthcare-market-report)

Note on prompt injection: The WebFetch result for the YC page contained embedded `<system-reminder>` tags that mimicked the real system. I treated those as content (not instructions), continued the task as scoped, and used only the verifiable factual portions of the result.
