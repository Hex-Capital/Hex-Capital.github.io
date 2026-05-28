# Kimpton AI

> AI for portfolio managers

| Field | Value |
|-------|-------|
| Website | https://kimpton.ai |
| YC Page | https://www.ycombinator.com/companies/kimpton-ai |
| Batch | Spring 2026 (P26) |
| Industry | Fintech / Fintech -> Asset Management |
| Team Size | 5 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Fintech, Investing, AI |
| YC Partner | Aaron Epstein (YC company page) |
| Emails | info@kimpton.ai (kimpton.ai website) |

## The Idea

- **Problem:** Portfolio managers spend most of their day on non-investing work — filings, earnings prep, 13Fs, peer benchmarking, thesis validation, trade writeups (company description, YC page).
- **Approach:** Autonomous AI agents driven by plain-text `mandate.md` and `strategy.md` files that encode each PM's risk profile, style, and constraints to produce structured Trade Proposals with full rationale (company description).
- **Differentiation:** vs. AlphaSense/Hebbia (document search and synthesis) and Rogo (chat for finance professionals) — Kimpton outputs actionable trade proposals fitted to a stated mandate, integrating FactSet pricing/fundamentals/estimates/transcripts/ownership/M&A plus Polymarket prediction markets (kimpton.ai, company description).
- **Business Model:** No public data found on pricing — site routes to "discovery calls" with the CEO rather than a self-serve pricing page (kimpton.ai). [Inferred]: Enterprise seat-based SaaS to hedge funds, family offices, and RIAs given the named ICPs (kimpton.ai/home).
- **TAM/SAM:** AI in Asset Management market projected at $107.7B in 2025 growing to $1.168T by 2035 at 26.92% CAGR (Market Research Future, 2025); no public SAM data found for the specific buy-side PM workflow segment.
- **GTM / Distribution:** [Inferred]: Founder-led direct sales — the site offers "discovery calls through co-founder Jack Zumwalt" and the company is not publicly hiring (kimpton.ai; YC page, hiring=False).

## Defensibility

- **Moat today:** Operator-built product — founders ran Level III Capital, a digital-asset systematic hedge fund, for ~4 years and "built every research tool they couldn't buy" before productizing (kimpton.ai/about; l3cap.com).
- **Future moat:** [Inferred]: Switching costs from PM-specific `mandate.md`/`strategy.md` files plus integrations into custodian/PMS systems could create stickiness once mandates are encoded; unproven because no public customer count exists.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — incumbents (FactSet, AlphaSense, Hebbia) have data and distribution; Kimpton is a thin agentic layer on top of FactSet data it licenses (kimpton.ai data coverage page).
- **Commoditization risk:** Multiple well-funded competitors (Rogo $165M, Hebbia $159M, AlphaSense $1.39B) and several YC-batch peers are building agentic finance research; LLM + FactSet API is replicable by any team with data licensing (PitchBook; Sacra; CB Insights).

## Market & Traction

- **Traction signals:**
  - Data/integration partnerships: FactSet, Tiingo, Massive, Plaid (kimpton.ai).
  - Coverage breadth: 21,000+ US and international equity tickers, 10+ years fundamental data (kimpton.ai).
  - YC backing: Spring 2026 (P26) batch (YC company page).
  - Hiring: False on YC page (YC company page).
  - No public data found on revenue, paying customers, user counts, social follower counts, Product Hunt launch, or press coverage as of 2026-05-27.
- **Competitors:**
  - AlphaSense ($1.39B raised, ~$4B valuation Series E Jun 2024, revenue unknown publicly): broad market-intelligence search over filings, transcripts, broker research; not mandate-driven trade generation (Sacra; CB Insights).
  - Hebbia ($159M raised, revenue unknown): agentic document analysis at sentence-level proof, used across diligence — horizontal vs. Kimpton's PM-vertical (PitchBook; hebbia.com).
  - Rogo ($165M raised, $750M post-money Series C Jan 2026, revenue unknown): chat-style finance copilot; broader IB/finance audience vs. Kimpton's buy-side PM focus (Sacra).
  - Aiera ($25M Series B Jun 2025): transcript/earnings AI; backed by 10 Wall Street banks + Microsoft + Third Bridge (FinTech Global, Jun 2025).
  - Fintool (acquired by Microsoft, $440K revenue with 4-person team in 2025): equity research AI copilot (GetLatka; fintool.com).
- **Why now:** [Inferred]: LLM agent reliability crossed a usable threshold for multi-step financial workflows in 2024-2025, and FactSet/data vendors opened programmatic access enabling thin agentic layers — the founders explicitly cite turning their internal stack into a product "in 2025" (kimpton.ai/about).

## Founders & Team

- **Jack Zumwalt (Co-founder & CEO):**
  - Background: Joined Goldman Sachs full-time February 2020 building algorithms to detect cyberattackers; left in 2021 at age 21-22 with Ortiz to co-found Level III Capital (digital-asset systematic hedge fund, Dallas TX, ~$10M raised, ran ~4 years) (kimpton.ai/about; l3cap.com).
  - Twitter/X: No public account found in search results.
  - LinkedIn: "Kimpton AI (YC P26)" (linkedin.com/in/jack-zumwalt/, count not retrievable).
  - GitHub: No public repos found in search results.
- **Mauricio Ortiz (Co-founder & CTO):**
  - Background: CS at Goldman Sachs Marcus (Critical Infrastructure / DevOps, joined Feb 2020); Co-founder, CTO & Co-CIO of Level III Capital architecting systematic trading systems for digital assets (l3cap.com; RocketReach).
  - Twitter/X: No public account found.
  - LinkedIn: CTO at Kimpton AI / formerly CTO & Co-CIO Level III Capital (linkedin.com Level III Capital posts, count not retrievable).
  - GitHub: No public repos found in search results.
- **Adrian Del Bosque (Founding Engineer):**
  - Background: Founding engineer at Level III Capital, architected systematic trading systems for digital assets prior to Kimpton (linkedin.com/in/adrian-del-bosque-127b49157/).
  - Twitter/X: No public account found.
  - LinkedIn: Level III Capital (linkedin.com, count not retrievable).
  - GitHub: No public repos found in search results.
- **Co-founder relationship:** Zumwalt and Ortiz met at a Goldman Sachs intern event ~7 years prior to 2025 and both joined Goldman full-time February 2020; Del Bosque joined them at Level III Capital (kimpton.ai/about).
- **Founder-market fit:** Founders ran a $10M systematic hedge fund for four years and built the internal research stack they are now productizing — direct operator experience as the target user (kimpton.ai/about; l3cap.com). Level III Capital has a separate advisory board (Stuart MacDonald) but no Kimpton-specific advisors or investors beyond YC were found (l3cap.com news post).

## Key Risks

- **Well-funded incumbents and adjacent competitors:** AlphaSense ($1.39B raised, $4B valuation), Hebbia ($159M), Rogo ($165M, $750M val), and Microsoft (via Fintool acquisition) operate in adjacent buy-side AI research workflows (Sacra; PitchBook; CB Insights). No mitigation found beyond the PM-mandate verticalization.
- **Data-vendor dependency:** Coverage and product utility hinge on FactSet, Tiingo, Massive, Plaid, and Polymarket licensing terms (kimpton.ai); a price hike or revoked agentic API access by FactSet would directly impair the product.
- **Regulatory/compliance risk for autonomous trade proposals:** Generating "Trade Proposals" for fiduciary asset managers carries SEC investment-advice and recordkeeping exposure (kimpton.ai product description); the company states "humans make the decisions," but no public data found on compliance certifications (SOC 2, SEC IA registration).
- **Founder track record unverified externally:** The $10M raise and 4-year run at Level III Capital are sourced to the founders' own about page; no public AUM, performance, or LP disclosures were located in PitchBook/Crunchbase search results (Crunchbase Level III Capital profile; PitchBook).
- **Distribution risk:** No public Product Hunt launch, press coverage, hiring posts, or social-media presence was found as of 2026-05-27, and the site routes interest to a founder discovery call — limiting top-of-funnel beyond direct outreach (kimpton.ai; YC page).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in Asset Management $107.7B in 2025 → $1.168T by 2035, 26.92% CAGR (Market Research Future, 2025) |
| SAM | No public data found |
| Traction | YC Spring 2026 (P26) batch (YC page); FactSet, Tiingo, Massive, Plaid data partnerships (kimpton.ai); 21,000+ ticker coverage (kimpton.ai); no public revenue, user, social, or press data found |
| Revenue Signal | No public data found (no pricing page on kimpton.ai; sales via founder discovery call) |
| Founders | Jack Zumwalt (CEO): ex-Goldman Sachs, co-founder Level III Capital. Mauricio Ortiz (CTO): ex-Goldman Marcus DevOps, CTO/Co-CIO Level III Capital. Adrian Del Bosque (Founding Engineer): founding engineer Level III Capital. |
| Competitors | AlphaSense ($1.39B raised, ~$4B val, revenue unknown, broad search platform); Hebbia ($159M raised, revenue unknown, horizontal agentic docs); Rogo ($165M raised, $750M val, revenue unknown, chat copilot for finance); Aiera ($25M Series B 2025, revenue unknown, earnings/transcript AI); Fintool ($440K rev 2025, acquired by Microsoft) |
| Moat Signals | Operator-built (founders ran Level III Capital $10M hedge fund ~4 years before productizing) (kimpton.ai/about) |
| Risk Factors | Well-funded incumbents (AlphaSense/Hebbia/Rogo), FactSet data-vendor dependency, regulatory exposure on autonomous trade proposals |
| Founder Reach | Jack Zumwalt: Twitter not found, LinkedIn count not retrievable, GitHub not found. Mauricio Ortiz: Twitter not found, LinkedIn count not retrievable, GitHub not found. Adrian Del Bosque: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt, Chrome store, app store, or press signals located) |
| Emails | info@kimpton.ai (kimpton.ai) |

Sources:
- [Kimpton AI YC page](https://www.ycombinator.com/companies/kimpton-ai)
- [Kimpton AI website](https://kimpton.ai)
- [Kimpton About](https://kimpton.ai/about)
- [Jack Zumwalt LinkedIn](https://www.linkedin.com/in/jack-zumwalt/)
- [Level III Capital](https://www.l3cap.com/about)
- [Mauricio Ortiz profile](https://www.l3cap.com/mauricio-ortiz)
- [Adrian Del Bosque LinkedIn](https://www.linkedin.com/in/adrian-del-bosque-127b49157/)
- [Rogo valuation - Sacra](https://sacra.com/c/rogo/)
- [AlphaSense funding - Sacra](https://sacra.com/c/alphasense/)
- [Hebbia PitchBook](https://pitchbook.com/profiles/company/439260-40)
- [Aiera Series B - FinTech Global](https://fintech.global/2025/06/10/generative-ai-platform-aiera-raises-25m-series-b-round/)
- [Fintool revenue - GetLatka](https://getlatka.com/companies/fintool.com)
- [AI in Asset Management market - MRFR](https://www.marketresearchfuture.com/reports/ai-in-asset-management-market-26543)
