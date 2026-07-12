# Definite

> The most accurate financial agents

| Field | Value |
|-------|-------|
| Website | https://www.usedefinite.com |
| YC Page | https://www.ycombinator.com/companies/definite |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Fintech, SaaS, Finance |
| YC Partner | Ankit Gupta |
| Emails | contact@usedefinite.com |

## The Idea

- **Problem:** Financial back-office AI agent pilots demo well but fail to graduate to production because teams cannot trust the outputs enough to stop re-checking every number (company description, YC page).
- **Approach:** A verification engine that recomputes agent outputs from source documents (contracts, rate tables, ledger records) and returns wrong outputs to the agent with a compiler-style error before anything ships (usedefinite.com; YC page).
- **Differentiation:** Vs. LLM-as-judge (misses what agent missed) and hand-written deterministic rules (only cover what someone wrote down) — Definite's verifier is independent of the model doing the work and recomputes rather than grades (YC company description).
- **Business Model:** [Inferred]: Enterprise SaaS to banks/credit unions with single-tenant VPC or self-hosted deployment tiers, pricing not disclosed on site (usedefinite.com — deployment options page); no public pricing page found.
- **TAM/SAM:** No public TAM/SAM data found for AI verification for financial back office; adjacent close-management/AI-accounting category reference: Numeric raised $51M Series B to "expand beyond close management" (PR Newswire, 2026).
- **GTM / Distribution:** [Inferred]: Direct sales into US banks/credit unions given product surface area (Call Reports, NCUA 5300, HMDA, legal lending limits) which are US regulatory artifacts (usedefinite.com feature list).

## Defensibility

- **Moat today:** [Inferred]: Domain-specific verification engine encoding US bank/credit union regulatory edit checks (Call Report, 5300, HMDA) is the primary asset, but no proprietary data, customer count, or contract evidence is public (usedefinite.com).
- **Future moat:** [Inferred]: Switching costs could accrue once a verifier is embedded as the pre-execution gate for AP, ledger, and regulatory filings ("nothing lands" without it — company positioning on YC page); unproven now because no customers are named publicly.
- **Market structure:** [Inferred]: Incumbent risk/compliance platforms (Ncontracts, Abrigo) sell workflow modules, not model-independent verification of agent outputs, and re-architecting their stack around "recompute-before-execute" would cannibalize existing review-tool revenue (Ncontracts profile, ncontracts.com; company positioning on YC page).
- **Commoditization risk:** Any AI-accounting or close-management vendor (Numeric, Trullion, Puzzle) could add a verification layer; Trullion already ships "Financial Statement Validation" that checks statements for math accuracy and cross-statement alignment (trullion.com).

## Market & Traction

- **Traction signals:**
  - Backed by Y Combinator, Summer 2026 batch (YC page).
  - Company previously listed on YC as "Bylaw" with identical description and founders; now rebranded to "Definite" within the same S26 batch (ycombinator.com/companies/bylaw; ycombinator.com/companies/definite).
  - No public revenue, customer count, user count, press coverage, Product Hunt listing, or social follower counts found in searches.
  - Hiring flag: False (company_data).
- **Competitors:**
  - Numeric ($89M total raised, $51M Series B led by IVP in 2026, revenue undisclosed): AI close-management platform for controllers, auto-tags GL transactions and surfaces anomalies (PR Newswire, 2026; numeric.io).
  - Trullion ($34M total raised, $15M Series A co-led by Aleph and Third Point Ventures, revenue undisclosed): AI validation of financial statements plus lease accounting and revenue recognition (trullion.com; Startup Nation Finder).
  - Puzzle (revenue unknown, private funding not cited in retrieved sources): AI accounting keeping cash and accrual books with human-in-the-loop approval (puzzle.io).
  - Ncontracts (private, funding not cited in retrieved sources; serves 4,000+ FIs): enterprise risk/compliance and Call Report KPIs for banks and credit unions (ncontracts.com).
  - Auditoria.AI / Vic.ai / DataSnipper: adjacent agentic-finance vendors named in market roundups (cygnet.one, 2026).
- **Why now:** [Inferred]: Enterprise deployment of LLM agents in 2024-2026 exposed a systematic "middle" verification gap between deterministic rules and human sampling (company thesis on YC page); no independent analyst citation for the timing found.

## Founders & Team

- **Gurshabd Singh Varaich (Founder & CEO):**
  - Background: Studied at University of Waterloo (CS/Statistics per differing sources); prior SWE roles at Meta (Instagram Reels recommendation) and BitGo (pre-execution wallet policy/approval controls); additional intern stints at Ford and theScore (RocketReach; LinkedIn snippet via search).
  - Twitter/X: No public account found in searches.
  - LinkedIn: linkedin.com/in/gvaraich/ (headline not retrievable — WebFetch returned 999).
  - GitHub: No public repos found in searches.
- **Mazin Al-Ani (Co-founder):**
  - Background: CS at University of Waterloo; SWE intern at Optiver; additional internships cited in search snippet include Point72 Macro Technology, Wealthsimple, and Amazon; awards include 2021 International Earth Science Olympiad Finalist/Medalist (LinkedIn headline "cs @ uw, swe @ optiver"; search snippet from LinkedIn).
  - Twitter/X: No public account found.
  - LinkedIn: "cs @ uw, swe @ optiver" (linkedin.com/in/mazinalani/ via search snippet).
  - GitHub: No public repos found.
- **Farhan Ur Rehman (Co-founder):**
  - Background: Bachelor of Statistics, University of Waterloo; prior experience at Meta (Instagram Reels recommendation), AutoTrader.ca, Senso, and Malleum (RocketReach; LinkedIn snippet via search).
  - Twitter/X: No public account found.
  - LinkedIn: linkedin.com/in/farhan-ur-rehman/ (headline not retrievable — WebFetch returned 999).
  - GitHub: No public repos found.
- **Co-founder relationship:** All three met in first year studying computer science at University of Waterloo (YC company description).
- **Founder-market fit:** [Inferred]: Prior work at Meta, Optiver, and BitGo — environments where an unverified number moving through a production system has real financial consequences — maps to the verification-before-execution thesis (YC company description; RocketReach snippets); no advisor or investor names beyond YC found.

## Key Risks

- **Regulated-buyer sales cycle:** Product surface (Call Reports, 5300, HMDA, legal lending limits) targets US banks and credit unions, buyers with long procurement cycles and SOC2/vendor-review gates (usedefinite.com feature list); no signed customer or design partner is publicly named. Mitigation: phased onboarding starts with zero-access analysis of public filings before read-only shadow mode (usedefinite.com).
- **Positioning volatility mid-batch:** Company appears to have rebranded from "Bylaw" to "Definite" and narrowed messaging from horizontal "AI agent verification" to bank compliance and reporting during the S26 batch (ycombinator.com/companies/bylaw vs. ycombinator.com/companies/definite; usedefinite.com). Mitigation: none identified in public sources.
- **Technical feasibility of model-independent verification:** Claim is that verification must recompute from source documents rather than grade with a model, but extracting clean, structured facts from heterogeneous contracts and rate tables at bank-audit precision is itself an unsolved parsing problem (YC company description; no benchmark or accuracy figure published).
- **Incumbent substitution:** Ncontracts already ships Call Report KPIs to 4,000+ financial institutions, and Trullion ships AI financial-statement validation — either could bolt on agent-output verification as a feature (ncontracts.com; trullion.com).
- **Commoditization by well-funded neighbors:** Numeric ($89M raised) and Trullion ($34M raised) sit adjacent with capital to move into verification (PR Newswire, 2026; Startup Nation Finder).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC Summer 2026 backing (ycombinator.com/companies/definite); rebrand from Bylaw within S26 (ycombinator.com/companies/bylaw) |
| Revenue Signal | No public data found |
| Founders | Gurshabd Singh Varaich (CEO): Waterloo CS, ex-Meta Instagram, ex-BitGo. Mazin Al-Ani: Waterloo CS, ex-Optiver, ex-Point72. Farhan Ur Rehman: Waterloo Statistics, ex-Meta Instagram, ex-AutoTrader.ca. |
| Competitors | Numeric ($89M raised, revenue unknown, AI close-management for controllers); Trullion ($34M raised, revenue unknown, AI financial-statement validation and lease accounting); Puzzle (funding not cited, revenue unknown, AI accounting with human-in-loop); Ncontracts (funding not cited, 4,000+ FI customers, incumbent risk/Call Report vendor); Auditoria.AI / Vic.ai (adjacent agentic-finance vendors named in cygnet.one 2026 roundup) |
| Moat Signals | No public data found |
| Risk Factors | Regulated-buyer sales cycle, mid-batch rebrand/positioning volatility, incumbent substitution by Ncontracts/Trullion |
| Founder Reach | Gurshabd Varaich: LinkedIn linkedin.com/in/gvaraich/ (count not retrievable), Twitter not found, GitHub not found. Mazin Al-Ani: LinkedIn linkedin.com/in/mazinalani/ (count not retrievable), Twitter not found, GitHub not found. Farhan Ur Rehman: LinkedIn linkedin.com/in/farhan-ur-rehman/ (count not retrievable), Twitter not found, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | contact@usedefinite.com (usedefinite.com/contact) |

Sources:
- [Definite YC page](https://www.ycombinator.com/companies/definite)
- [Bylaw YC page (prior name)](https://www.ycombinator.com/companies/bylaw)
- [Definite website](https://www.usedefinite.com)
- [Numeric $51M Series B (PR Newswire)](https://www.prnewswire.com/news-releases/numeric-raises-51m-series-b-expanding-from-close-management-to-comprehensive-finance-platform-302619774.html)
- [Trullion Series A funding](https://trullion.com/newsroom/trullion-raises-15m-in-series-a-funding/)
- [Ncontracts Call Report KPIs](https://www.ncontracts.com/nsight-blog/ncontracts-launches-new-call-report-kpis-for-leading-enterprise-risk-management-software)
- [Trullion Financial Statement Validation](https://trullion.com/products/financial-statement-validation/)
- [Best Agentic AI Tools for Finance Teams 2026 (Cygnet)](https://www.cygnet.one/feeds/blog/agentic-ai-tools-finance-teams)
- [Mazin Al-Ani LinkedIn](https://www.linkedin.com/in/mazinalani/)
- [Farhan Ur Rehman LinkedIn](https://ca.linkedin.com/in/farhan-ur-rehman)
- [Gurshabd Varaich LinkedIn](https://www.linkedin.com/in/gvaraich/)
- [Farhan Rehman RocketReach](https://rocketreach.co/farhan-rehman-email_434949585)
