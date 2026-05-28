# Zolvo

> AI that automates servicing for commercial lenders

| Field | Value |
|-------|-------|
| Website | https://zolvo.com/ |
| YC Page | https://www.ycombinator.com/companies/zolvo |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech -> Credit and Lending |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags |  |
| YC Partner | Tom Blomfield |
| Emails | isa@zolvo.com |

## The Idea

- **Problem:** Commercial lenders (factoring and asset-based lenders) service billion-dollar portfolios using spreadsheets, legacy software, and manual reconciliation teams (YC page; zolvo.com header, May 2026).
- **Approach:** Platform syncs with bank accounts, communication channels, and loan management systems to automate reconciliation, verification, collections, and reporting, surfacing only exceptions for human review (marcelvanoostfintechlatam.substack.com, Mar 2026).
- **Differentiation:** [Inferred]: Vertical AI focus on factoring/ABL back-office workflows distinguishes Zolvo from horizontal loan management systems like LoanPro (LoanPro Series A press, 2021) and bank-focused platforms like nCino (nCino solutions page); no public head-to-head comparison published.
- **Business Model:** First client paid an annual contract before product existed (YC page, Mar 2026); [Inferred]: annual SaaS subscription priced against headcount displacement, given company's claim of replacing "work of 14 people" (marcelvanoostfintechlatam.substack.com).
- **TAM/SAM:** US factoring services market USD 197.8B (2025), projected USD 300.59B by 2030 at 8.73% CAGR (Mordor Intelligence, 2025); global asset-based lending USD 418.47B (2025) (360iresearch, 2025).
- **GTM / Distribution:** [Inferred]: Founder-led direct sales to US commercial lenders, leveraging CEO's prior GTM track record at Domu where she closed first $1M with enterprise clients including Chubb (search snippet, RocketReach/LinkedIn).

## Defensibility

- **Moat today:** Customer-conversion-to-investor signal — first paying client became angel investor two weeks in (YC page, Mar 2026); [Inferred]: workflow integration depth across bank feeds + loan management systems creates switching costs once deployed.
- **Future moat:** [Inferred]: Proprietary training data from reconciliation/collections exception handling across multiple lenders could compound model accuracy; unproven now because client base is reportedly single-digit.
- **Market structure:** [Inferred]: Incumbents like Finastra Loan IQ and Fiserv LoanServ (loanpro.io competitor list, 2026) carry per-seat enterprise pricing tied to back-office headcount, creating revenue cannibalization if they ship AI that eliminates that headcount.
- **Commoditization risk:** [Inferred]: Foundation-model providers and horizontal loan platforms (LoanPro, nCino) could ship AI servicing modules; LoanPro already markets "automated servicing" with "receivables factoring" features (loanpro.io/use-cases/business-lending, 2026).

## Market & Traction

- **Traction signals:**
  - First client signed annual contract pre-product and became angel investor (YC page, Mar 2026).
  - Operational cost reduction claim: "over 60%" (marcelvanoostfintechlatam.substack.com, Mar 2026).
  - Customer testimonial: replaced "work that would have required a team of 14 people" (search snippet attributed to YC page).
  - Launched on YC March 12, 2026 (YC page).
  - Press: Forbes Colombia social post (facebook.com/ForbesColombia) and Marcel van Oost Fintech LATAM Substack coverage (Mar 2026).
  - No public Product Hunt, Twitter, LinkedIn follower, or web traffic data found.
  - Job postings: company listed as "not hiring" (YC page).
- **Competitors:**
  - LoanPro ($100M Series A from FTV Capital, Jul 2021; ~$24.3M ARR per getlatka.com): horizontal API-first servicing platform spanning origination/servicing/collections vs. Zolvo's AI-native factoring/ABL focus.
  - nCino (NASDAQ: NCNO; $144.1M Q1 FY26 revenue per SEC 8-K): bank-of-record cloud platform for commercial lending vs. Zolvo's lender back-office automation.
  - Finvi ($6.52M total raised per Crunchbase): collections and revenue-recovery enterprise software vs. Zolvo's end-to-end servicing automation.
  - Finastra Fusion Loan IQ (private subsidiary of Finastra; revenue unknown): syndicated/commercial loan management for global banks (loanpro.io competitor list) vs. Zolvo's SMB/mid-market lender focus.
  - Nortridge Software (revenue unknown; nortridge.com): legacy loan servicing system for complex portfolios vs. Zolvo's AI-first architecture.
- **Why now:** [Inferred]: Voice-AI and document-extraction reliability crossed production threshold in 2024-2025, evidenced by Tony Montes's prior Domu voice-AI scaling to 100K+ calls/day (search snippet, LinkedIn).

## Founders & Team

- **Isabela Rodriguez (Co-founder, CEO):**
  - Background: BBA Universidad de los Andes with exchange program 2020-2024 (RocketReach/LinkedIn snippet); first GTM hire at Domu (YC S24), where she closed first $1M in revenue and brought in clients including Chubb (search snippet); prior roles at Endeavor and Stealth (LinkedIn snippet).
  - Twitter/X: No public account found.
  - LinkedIn: "Zolvo" — linkedin.com/in/isabela-rodriguez-438785170 (YC page).
  - GitHub: No public repos found.
- **Tony Montes (Co-founder, CTO):**
  - Background: Founding AI engineer at Domu (YC S24), built voice-AI infrastructure scaling to 100K+ calls/day for enterprise fintech clients (LinkedIn snippet); publications at ACL and EMNLP; generative-models work at Cornell (search snippet); described as ex-Nvidia/Tesla and prior YC-backed founder who raised $2.7M (LinkedIn snippet).
  - Twitter/X: No public account found.
  - LinkedIn: "NLP & GenAI | Founding AI Engineer @ Domu YC S24" — linkedin.com/in/t-montes (YC page).
  - GitHub: @t-montes — personal site t-montes.github.io (search result); star counts not retrievable.
- **Co-founder relationship:** Both worked at Domu (YC S24), Isabela in GTM and Tony as founding AI engineer (search snippets from both founder profiles).
- **Founder-market fit:** CTO built production voice-AI for fintech at Domu and CEO sold $1M of that product to enterprise clients, aligning with Zolvo's AI-plus-enterprise-sales motion in lending (search snippets, LinkedIn).

## Key Risks

- **Single-customer concentration:** Only one paying customer publicly disclosed (YC page, Mar 2026); customer-becomes-investor structure creates correlated risk if the design partner churns. No mitigation found.
- **Incumbent feature-parity risk:** LoanPro already markets automated servicing with factoring-specific features (loanpro.io/use-cases/business-lending, 2026) and holds $100M Series A capital (Finovate, 2021) to build AI modules; Zolvo must outpace the incumbent on AI velocity. No mitigation found.
- **Regulated-data integration risk:** [Inferred]: Reconciliation requires read/write access to bank accounts and loan management systems under bank-grade security and audit standards; commercial lenders typically require SOC 2 Type II and bank-sponsorship reviews before production deployment. No public evidence of compliance certifications.
- **Technical feasibility at exception-handling threshold:** [Inferred]: "Review only exceptions" workflow requires the AI to be correct at high enough accuracy that residual exception load is lower than current manual ops; founder claim of replacing a 14-person team (marcelvanoostfintechlatam.substack.com) is unverified outside the single design partner.
- **Name disambiguation:** "Zolve" (neobank, $251M raised per FintechFutures, Mar 2025) is a distinct company; Tracxn and Crunchbase results for "Zolvo" funding ($106M across 5 rounds per Tracxn snippet) appear to conflate the two entities — those figures should not be attributed to this YC company.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | US factoring services USD 197.8B in 2025, USD 300.59B by 2030 at 8.73% CAGR (Mordor Intelligence, 2025); global asset-based lending USD 418.47B in 2025 (360iresearch, 2025) |
| SAM | No public data found |
| Traction | First client signed annual contract pre-product and became angel investor (YC page, Mar 2026); "over 60%" operating-cost cut claim (marcelvanoostfintechlatam.substack.com, Mar 2026); launched Mar 12, 2026 (YC page) |
| Revenue Signal | One annual contract signed pre-product, value undisclosed (YC page, Mar 2026); no pricing page found |
| Founders | Isabela Rodriguez (CEO): ex-Domu first GTM hire, closed Domu's first $1M revenue, BBA Universidad de los Andes. Tony Montes (CTO): ex-Domu founding AI engineer, voice-AI to 100K+ calls/day, ACL/EMNLP publications, ex-Nvidia/Tesla, prior YC founder raised $2.7M |
| Competitors | LoanPro ($100M Series A Jul 2021 from FTV Capital, ~$24.3M ARR per getlatka, horizontal API-first servicing); nCino (public, $144.1M Q1 FY26 revenue per SEC, bank-of-record platform); Finvi ($6.52M total per Crunchbase, collections/recovery); Finastra Fusion Loan IQ (revenue unknown, syndicated loans for global banks); Nortridge (revenue unknown, legacy servicing) |
| Moat Signals | First customer became angel investor (YC page, Mar 2026) |
| Risk Factors | Single-customer concentration, incumbent feature-parity risk (LoanPro), regulated-data integration/compliance |
| Founder Reach | Isabela Rodriguez: Twitter not found, LinkedIn 500+ connections (search snippet), GitHub not found. Tony Montes: Twitter not found, LinkedIn present (count not retrievable), GitHub @t-montes (stars not retrievable) |
| Distribution Signals | YC Spring 2026 launch Mar 12, 2026 (YC page); Forbes Colombia social coverage (facebook.com/ForbesColombia); Marcel van Oost Fintech LATAM Substack (Mar 2026) |
| Emails | isa@zolvo.com (YC page) |

Sources:
- [Zolvo YC Company Profile](https://www.ycombinator.com/companies/zolvo)
- [Zolvo — AI Servicing Infrastructure for Commercial Lenders](https://zolvo.com/)
- [Marcel van Oost Fintech LATAM Substack on Zolvo](https://marcelvanoostfintechlatam.substack.com/p/zolvo-develops-an-ai-powered-operating)
- [Isabela Rodriguez LinkedIn](https://www.linkedin.com/in/isabela-rodriguez-438785170/)
- [Tony Montes LinkedIn](https://www.linkedin.com/in/t-montes/)
- [Tony Montes homepage](https://t-montes.github.io/)
- [US Factoring Services Market — Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-factoring-services-market)
- [Asset-Based Lending Market — 360iresearch](https://www.360iresearch.com/library/intelligence/asset-based-lending)
- [LoanPro Series A — Finovate](https://finovate.com/loanpro-scores-100-million-in-series-a-funding/)
- [LoanPro revenue — getlatka](https://getlatka.com/companies/loanpro.io)
- [Finvi Crunchbase](https://www.crunchbase.com/organization/finvi)
- [nCino Q1 FY26 8-K — SEC](https://www.sec.gov/Archives/edgar/data/0001902733/000190273325000074/firstquarterfy26earningspr.htm)
- [Forbes Colombia post on Zolvo](https://www.facebook.com/ForbesColombia/posts/isabela-rodr%C3%ADguez-y-tony-montes-fundaron-zolvo-hace-apenas-unos-meses-ya-tienen-/1404328191708924/)
- [Bilbaos.co — Isabela Rodriguez, founding team de Makers](https://www.bilbaos.co/p/isabela-rodriguez-founding-team-de)
