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
| YC Partner | Aaron Epstein |
| Emails | demo@kimpton.ai, info@kimpton.ai (kimpton.ai website) |

## The Idea

**Problem:** Buy-side portfolio managers spend the majority of their working hours on non-investment tasks: SEC filings review, earnings prep, 13F analysis, peer benchmarking, thesis validation, and trade writeups (kimpton.ai). Current workflows require stitching together 6+ data vendor contracts and 3–5 quants/data engineers at an annual cost of $1–3M+ to build comparable tooling in-house (kimpton.ai, "Build vs. Buy" section). Testimonials on the website from PMs at hedge funds and mutual funds describe fragmented tooling, hallucination-prone general LLMs, and limited bandwidth for deep dives (kimpton.ai).

**Approach:** Kimpton runs autonomous agentic workflows across the PM's full research cycle and delivers structured Trade Proposals fitted to the PM's mandate and strategy, which are stored in plain-text `mandate.md` and `strategy.md` files (kimpton.ai). The platform integrates FactSet pricing, fundamentals, estimates, transcripts, ownership, and M&A data, plus Polymarket prediction markets (kimpton.ai). Features include Deep Research cited to source, natural-language Dashboards, Agentic Charting & Backtests, scheduled Skills for recurring workflows, and auto-generated Reports (kimpton.ai). Portfolio connectivity is provided via Plaid across 2,500+ brokerages (kimpton.ai).

**Differentiation:** Unlike general-purpose AI research tools (AlphaSense, Hebbia), Kimpton is purpose-built for the investment decision workflow — it produces structured trade proposals with targets, stops, and conviction levels rather than search results or document summaries (kimpton.ai). Unlike Bloomberg Terminal or FactSet workstations, Kimpton wraps data in an agentic layer that executes multi-step research autonomously. The founders' four years operating a hedge fund with this stack as internal tooling differentiates from teams building from outside the buy-side workflow (L3cap.com launch post, Oct 2025).

**Business Model:** No pricing is publicly disclosed on the website (kimpton.ai). The "Build vs. Buy" comparison positions Kimpton's cost as "a fraction of one quant hire" against the $1–3M+ annual cost of building in-house (kimpton.ai). [Inferred]: Most likely monetization path is a SaaS subscription (per-seat or per-fund) given the PM-centric product design, FactSet data licensing costs, and enterprise security positioning (SOC 2 Type II in review).

**TAM/SAM:** The global AI in asset management market was valued at $4.62B in 2024 and is projected to reach $38.94B by 2034 at a 23.76% CAGR (Precedence Research, 2025). The U.S. segment was $1.65B in 2024, projected to reach $14.17B by 2034 at 23.99% CAGR (Precedence Research, 2025). [Inferred]: The serviceable market narrows to buy-side PMs at hedge funds, mutual funds, and asset managers actively using AI-augmented research — a subset of the broader AI-in-asset-management TAM.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to hedge funds and asset managers, leveraging the founders' buy-side network from operating Level III Capital. The website offers a "Request Demo" flow (kimpton.ai). Testimonials reference PMs at hedge funds, mutual funds, and a $40B+ sustainable equity fund, suggesting early enterprise engagement (kimpton.ai).

## Defensibility

- **Data integration moat (developing):** FactSet, Plaid (2,500+ brokerages), Massive, and Polymarket integrations create a unified data layer across 120K+ assets (kimpton.ai). Each additional data vendor contract increases switching costs.
- **Workflow lock-in (developing):** PM mandates and strategies stored in plain-text files (`mandate.md`, `strategy.md`) create personalized context that deepens over time (kimpton.ai).
- **Domain-specific tooling:** 27 financial tools and agentic orchestration purpose-built for investment research workflows (x.com/KimptonAI).
- **Founder domain knowledge:** Four years operating a hedge fund with $10M AUM produced proprietary understanding of PM workflows that is difficult to replicate without equivalent operating experience (L3cap.com).

**Market structure:** [Inferred]: Bloomberg and FactSet face business model cannibalization risk — their revenue model is built on terminal/data subscriptions, not autonomous research agents that reduce the need for analyst headcount. Building an agentic layer that automates PM workflows could undercut their existing product value proposition. Additionally, their sales channel is oriented toward data delivery rather than workflow automation.

**Commoditization risk:** General-purpose AI providers (OpenAI, Anthropic) and large platforms (Bloomberg, FactSet) could add agentic investment research features. AlphaSense ($500M+ ARR) and Hebbia ($161M raised) are well-funded adjacent competitors expanding into buy-side workflows (AlphaSense press release, Oct 2025; TechCrunch, Jul 2024). The data vendor integrations are licensable by any competitor with capital.

## Market & Traction

**Traction signals:**
- Platform launched October 28, 2025 (L3cap.com)
- Accepted into YC Spring 2026 batch, announced March 4, 2026 (kimpton.ai/news)
- Twitter/X @KimptonAI: 571 followers, joined October 2025 (x.com/KimptonAI via search snippet)
- LinkedIn company page: linkedin.com/company/kimptonai (LinkedIn)
- 120K+ assets covered, 21K+ tickers tracked (kimpton.ai)
- Regular product updates from October 2025 through March 2026 (kimpton.ai/news): portfolio integration (Jan 2026), chart workspace (Feb 2026), context references (Feb 2026)
- Customer testimonials from PMs at a hedge fund, mutual fund, and $40B+ sustainable equity fund (kimpton.ai) — no specific user count or revenue disclosed
- SOC 2 Type II certification in review (kimpton.ai)
- No Product Hunt listing found
- No public Discord/Slack community found
- No public download counts, app store listings, or web traffic estimates found

**Competitive landscape:**

| Competitor | Key differentiator vs. Kimpton | Funding | Revenue/ARR |
|---|---|---|---|
| AlphaSense | Broad market intelligence search across 10K+ sources; serves both buy-side and sell-side, corporates | $1.63B total, $650M Series F (Jun 2024) | $500M+ ARR (AlphaSense press release, Oct 2025) |
| Hebbia | AI knowledge work platform for finance & legal; document analysis focus; not trade-proposal-oriented | $161.1M total, $130M Series B at $700M valuation (TechCrunch, Jul 2024) | $13M ARR (TechCrunch, Jul 2024) |
| Fintool (acquired by Microsoft, Jan 2026) | Agentic financial document analysis with Excel/PowerPoint/Word output; YC-backed | $7.24M total (Tracxn) | $440K revenue (GetLatka, Sep 2025) |
| Milemarker Navigator | Wealth management data unification platform; serves RIAs/advisors, not hedge fund PMs | Not disclosed | Not disclosed |
| Bloomberg Terminal | Incumbent data/analytics terminal; breadth of data but no agentic research automation | N/A (public company) | N/A |

**Why now:**
- [Inferred]: The enabling catalyst is the maturation of LLM reasoning capabilities (GPT-4 class and beyond, 2023–2025) sufficient to perform multi-step financial analysis — prior LLM generations could not reliably handle quantitative reasoning, as referenced by the mutual fund PM testimonial on hallucination (kimpton.ai).
- [Inferred]: FactSet and similar data providers have made their data available via APIs, enabling startups to build integrated platforms without the capital expenditure historically required for data licensing.
- Microsoft's acquisition of Fintool in January 2026 signals large-platform interest in agentic financial AI, validating the category (fintool.com).

## Founders & Team

**Jack Zumwalt** — Co-founder & CEO
- BS, University of Texas at Dallas; studied Computer Science at University of Oxford (L3cap.com)
- Summer Analyst at Goldman Sachs (May–Aug 2019); Technology Risk Analyst at Goldman Sachs (Feb 2020–Feb 2021) (search results via Crunchbase, L3cap.com)
- Founded Level III Capital as CEO & Co-CIO (March 2021), a systematic digital asset trading firm that ran for four years with $10M AUM (L3cap.com, YC page)
- Twitter/X: @jackszumwalt — follower count not retrievable (x.com)
- LinkedIn: linkedin.com/in/jack-zumwalt/ (LinkedIn)
- GitHub: No public repos found

**Mauricio Ortiz** — Co-founder & CTO
- Engineer on the Critical Infrastructure team at Goldman Sachs, Consumer Wealth Management division (Marcus) (L3cap.com)
- Co-founded Level III Capital as CTO & Co-CIO; directed development of trading systems and systematic investment strategies (L3cap.com)
- Twitter/X: No public account found
- LinkedIn: Not directly confirmed in search results
- GitHub: No public repos found

**Adrian Del Bosque** — Co-founder & Founding Engineer
- Partner & Principal Engineer at Level III Capital; leads trading infrastructure and data processing systems (L3cap.com)
- Prior experience at SpaceX and Vistra Corp (search results via L3cap.com)
- Education: University of Texas Rio Grande Valley (search results via L3cap.com)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/adriandelbosque (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** All three co-founders worked together at Level III Capital from its founding (~2021) through the launch of Kimpton (2025) (L3cap.com, YC page). Zumwalt and Ortiz met at a Goldman Sachs intern event approximately 7 years prior to founding Level III (search results via L3cap.com).

**Founder-market fit:** The team spent four years building and operating a quantitative hedge fund (Level III Capital), during which they built the internal technology stack that became Kimpton (L3cap.com launch post, Oct 2025). Zumwalt and Ortiz both held engineering roles at Goldman Sachs. Del Bosque brings infrastructure experience from SpaceX and energy (Vistra Corp). The combination of hands-on PM workflow experience and engineering backgrounds positions the team to build for the buy-side user they previously were.

## Key Risks

**Name collision with Kimpton Hotels & Restaurants:** "Kimpton" is a well-known IHG hotel brand. Search results consistently surface Kimpton Hotels Twitter, LinkedIn, and web pages alongside the AI company. This creates SEO/brand confusion and may increase customer acquisition costs or cause trademark friction (observed in Twitter/X search results returning @Kimpton hotel account).

**FactSet data dependency:** Core product functionality relies on FactSet for pricing, fundamentals, estimates, transcripts, ownership, and M&A data (kimpton.ai). FactSet could restrict API access, raise licensing costs, or build competing agentic features. A single data-vendor dependency creates both pricing risk and feature-parity risk.

**Well-funded competitive encroachment:** AlphaSense ($1.63B raised, $500M+ ARR) and Hebbia ($161M raised, a]16 Horowitz-backed) are expanding AI capabilities for buy-side users (AlphaSense press release, Oct 2025; TechCrunch, Jul 2024). Microsoft's acquisition of Fintool signals intent to embed agentic financial AI into Office 365 (fintool.com, Jan 2026). Bloomberg and FactSet have the data assets and distribution to add agentic layers.

**Regulatory and compliance risk in agentic trade proposals:** Generating structured Trade Proposals with targets, stops, and conviction levels may trigger investment adviser registration requirements or fiduciary obligations under SEC/FINRA rules, depending on how the output is framed and used (kimpton.ai). The "Humans make the decisions" positioning mitigates but does not eliminate this risk.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.62B in 2024, projected $38.94B by 2034, 23.76% CAGR (Precedence Research, 2025) |
| SAM | No public data found |
| Traction | 571 Twitter followers (x.com/KimptonAI via search snippet, Apr 2026); YC P26 acceptance (kimpton.ai/news, Mar 2026); platform launched Oct 28, 2025 (L3cap.com); testimonials from PMs at hedge fund, mutual fund, $40B+ equity fund (kimpton.ai) |
| Revenue Signal | No public data found |
| Founders | Jack Zumwalt (CEO): Goldman Sachs, Oxford CS, 4-yr hedge fund operator. Mauricio Ortiz (CTO): Goldman Sachs infra engineer, 4-yr hedge fund operator. Adrian Del Bosque (Founding Engineer): SpaceX, Vistra Corp, Level III Capital principal engineer. |
| Competitors | AlphaSense ($1.63B raised, $500M+ ARR, broad market intelligence vs. Kimpton's PM-specific trade proposals); Hebbia ($161.1M raised, $13M ARR, document analysis vs. Kimpton's agentic workflow); Fintool ($7.24M raised, $440K revenue, acquired by Microsoft Jan 2026, Office-native output vs. Kimpton's standalone platform); Bloomberg Terminal (incumbent, no agentic automation) |
| Moat Signals | No public data found |
| Risk Factors | Name collision with Kimpton Hotels brand, FactSet data-vendor dependency, well-funded competitive encroachment from AlphaSense/Hebbia/Microsoft |
| Founder Reach | Jack Zumwalt: Twitter @jackszumwalt (count not retrievable), LinkedIn linkedin.com/in/jack-zumwalt/. Mauricio Ortiz: no public social accounts found. Adrian Del Bosque: LinkedIn linkedin.com/in/adriandelbosque, no Twitter found. |
| Distribution Signals | No public data found |
| Emails | demo@kimpton.ai, info@kimpton.ai (kimpton.ai website) |
