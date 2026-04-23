# Cohesion

> Your public equities agentic teammate

| Field | Value |
|-------|-------|
| Website | https://cohesionplatform.com/ |
| YC Page | https://www.ycombinator.com/companies/cohesion |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Finance and Accounting |
| Team Size | 3 |
| Location | No public data found |
| Tags | Fintech, SaaS, Investing |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

**Problem:** Hedge fund analysts covering public equities spend hours per week manually monitoring earnings releases, transcripts, podcasts, and social media (e.g., X/Twitter) for investing signals relevant to their coverage universe (YC company page). Despite this effort, analysts still miss relevant signals due to the volume and velocity of non-traditional data sources. Current workflows rely on manual monitoring or broad-scope platforms like AlphaSense and Bloomberg terminals that require significant analyst curation.

**Approach:** Cohesion deploys AI agents that autonomously monitor the companies an analyst covers, tracking earnings data and non-traditional datasets including podcasts and X/Twitter posts, then surface differentiated insights (YC company page). The product is described as an "agentic teammate" — agents operate continuously rather than responding to one-off queries, generating alerts and analysis without manual prompting.

**Differentiation:** Versus AlphaSense ($500M+ ARR, Fortune Apr 2024; acquired Tegus for $930M, PR Newswire 2024): AlphaSense is a search-and-retrieval platform requiring analyst-driven queries across filings and transcripts. Cohesion is agent-first — autonomous monitoring vs. search-initiated workflows. Versus Hebbia ($130M Series B, $700M valuation, TechCrunch Jul 2024): Hebbia focuses on document analysis (10-Ks, legal docs) rather than real-time signal tracking from non-traditional sources. Versus Trata (YC W25): Trata interviews analysts at other funds and distributes anonymized research as a subscription product; Cohesion provides tooling directly to the analyst for their own coverage.

**Business Model:** No pricing page found on cohesionplatform.com at time of research. The YC page references "limited early trial access" during earnings season. [Inferred]: Most likely monetization path is a SaaS subscription (per-seat or per-fund) given the B2B/SaaS tags and hedge fund target customer, potentially with a usage-based component for data coverage breadth.

**TAM/SAM:** The AI in investment management market was valued at $2.9 billion in 2022 and is projected to reach $7.4 billion by 2030 at 14.2% CAGR (Gitnux, 2026 via search snippet). The generative AI market in finance is projected to reach $64 billion by 2028 at 39% CAGR (Gitnux, 2026 via search snippet). Global hedge fund assets totaled approximately $5 trillion in 2025, with over 70% of global hedge funds using ML models somewhere in their pipeline (Hedgeweek, 2025 via search snippet). [Inferred]: The SAM — fundamental equity hedge funds willing to pay for AI research tooling — is a subset of the broader AI-in-investment-management market, likely in the low hundreds of millions given the narrow initial focus on long/short and long-only equity funds.

**GTM / Distribution:** Cohesion reports being live with 10+ long/short and long-only fundamental equity funds managing a combined $10Bn+ AUM (YC company page). The company offered "limited early trial access" timed to earnings season (YC company page). [Inferred]: Distribution is likely founder-led direct sales leveraging Devon Krapcho's 5+ year network at Long Path Partners and the broader fundamental equity fund community. The earnings-season trial timing suggests a land-and-expand motion tied to high-value workflow moments.

## Defensibility

- **Data advantage (potential):** As agents process fund-specific coverage universes, Cohesion could accumulate proprietary mappings of which non-traditional sources yield actionable signals for specific sectors/companies. This advantage does not exist today in a meaningful form at pre-seed scale.
- **Switching costs:** If agents are tuned to an analyst's specific coverage universe and workflow preferences, migration costs increase over time. [Inferred]: This is weak at current stage — switching costs accrue only after sustained usage.
- **Domain expertise:** The founding team combines 5+ years of buy-side equity research (Devon Krapcho at Long Path Partners, YC page) with AI/ML engineering at T. Rowe Price (Matt Munns, YC page) and infrastructure engineering at AWS (Matthew McBrien, YC page). This combination is not easily replicated but is not a structural barrier.

**Market structure:** AlphaSense and Bloomberg are the dominant incumbents. AlphaSense's architecture is search-and-retrieval oriented, and its $500M+ ARR business (Fortune, Apr 2024) is built on per-seat enterprise licenses for broad research platforms. [Inferred]: Building autonomous agents for a narrow workflow (earnings + alternative data monitoring) may not justify AlphaSense cannibalizing its existing product UX, though AlphaSense could add agent features as an extension. Bloomberg's terminal economics similarly disincentivize unbundling narrow workflows. No structural regulatory or IP barrier identified at this stage.

**Commoditization risk:** The core technology (LLM agents monitoring public data sources) has low technical barriers. Open-source projects like the ai-hedge-fund repo on GitHub (github.com/virattt/ai-hedge-fund) demonstrate that basic investment research agents can be assembled from commodity LLM APIs. Differentiation must come from domain-specific tuning, data source integrations, and UX tailored to fundamental equity analysts rather than from the underlying agent architecture.

## Market & Traction

**Traction signals:**
- Live with 10+ long/short and long-only fundamental equity funds managing combined $10Bn+ AUM (YC company page)
- Offering limited early trial access during earnings season (YC company page)
- Website (cohesionplatform.com) displays tagline "Modern Intelligence for Finance" but no detailed product pages, pricing, or traction metrics visible at time of research
- No Product Hunt launch found
- No press coverage in named publications found
- No company Twitter/X account found; no company LinkedIn page confirmed (search returned unrelated Cohesion companies)
- No Discord/Slack community found
- No app store or Chrome Web Store presence found
- Company is not currently hiring (YC page, is_hiring: false)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Cohesion |
|-----------|---------|-------------|-------------------------------|
| AlphaSense | $650M Series F at $4B valuation (PR Newswire, 2024) | >$500M ARR (Fortune, Oct 2025 via search snippet) | Broad search-and-retrieval platform across filings, transcripts, expert calls; acquired Tegus ($930M) and Sentieo; analyst-driven queries vs. Cohesion's autonomous agents |
| Hebbia | $130M Series B at $700M valuation (TechCrunch, Jul 2024) | $13M profitable revenue (TechCrunch, Jul 2024) | Document analysis (10-Ks, legal) via "Matrix" platform; OpenAI integration; focuses on deep document workflows vs. Cohesion's real-time signal monitoring |
| Trata (YC W25) | $500K seed (Tracxn, 2025 via search snippet) | No public data found | Interviews analysts at other funds, anonymizes and distributes research as subscription; complementary rather than directly competing model |
| Standard Signal (YC P26) | No public data found beyond YC standard deal | No public data found | Fully autonomous AI hedge fund — trades autonomously rather than serving as tooling for human analysts; different business model (fund vs. SaaS) |

**Why now:**
- LLM capabilities crossed a quality threshold in 2024-2025 enabling reliable extraction and synthesis from unstructured sources (podcasts, social media posts, earnings transcripts) that previously required manual analyst review. [Inferred]: GPT-4-class models and their successors made it feasible to parse nuanced financial commentary with sufficient accuracy for professional use.
- Over 35% of new hedge fund launches in 2025 branded themselves as AI-driven or AI-enhanced (Hedgeweek, 2025 via search snippet), indicating broad buy-side receptivity to AI tooling.
- YC included "AI-Native Hedge Funds" as a specific Request for Startups category for Spring 2026 (YC RFS page), signaling institutional validation of the category.

## Founders & Team

**Devon Krapcho** — Co-Founder & CEO
- BBA in Finance and Economics, University of Notre Dame (Notre Dame NDIGI event page, Oct 2020)
- Hedge fund analyst for 5+ years at Long Path Partners covering software companies (YC page)
- Prior: Investment Banking Analyst at DBO Partners (San Francisco boutique IB); Summer Analyst at BIP Capital and Raymond James (SignalHire, The Org)
- Twitter/X: @dkrapcho — 108 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/devon-krapcho-439a7498 — listed as Analyst at Long Path Partners
- GitHub: No public repos found

**Matthew McBrien** — Co-Founder
- MS Electrical and Computer Engineering, Georgia Institute of Technology (2019-2020); BS Computer Engineering, Georgia Tech (2015-2018) (LinkedIn via search snippet)
- Previously at AWS working on Lambda and Security at Amazon — described as having "multiple years of experience building and maintaining one of the largest compute platforms in the world" (mmcbrien.com resume via search snippet)
- Twitter/X: No confirmed public account found
- LinkedIn: linkedin.com/in/matthew-mcbrien-784b32116
- GitHub: No public profile found via search

**Matt Munns** — Co-Founder
- Previously built AI for investors at T. Rowe Price (YC page)
- GitHub bio: "Machine Learning Engineer"; previously listed company as Layr (withlayr.com) (GitHub profile)
- GitHub: github.com/Matt-Munns — 1 public repo (forked PyTorch computer vision library)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/matthew-munns-98727b138

**Co-founder relationship:** Devon Krapcho (Notre Dame, finance background) and Matthew McBrien (Georgia Tech, AWS engineering) and Matt Munns (T. Rowe Price, ML engineering) do not share overlapping employers or universities based on Phase 3 findings. No public data on co-founder history.

**Founder-market fit:** The team combines direct buy-side experience (Krapcho's 5+ years as a fundamental equity analyst at Long Path Partners, covering software companies) with institutional-grade ML engineering (Munns building AI for investors at T. Rowe Price, a $1.5T+ AUM asset manager) and large-scale infrastructure engineering (McBrien's AWS Lambda experience). Krapcho is the target user persona — a former fundamental equity analyst — which provides first-hand understanding of the workflow pain points. No advisors, board members, or notable angel investors identified in public sources beyond YC Group Partner Tom Blomfield.

## Key Risks

**Name collision and discoverability:** "Cohesion" is shared by at least three other funded companies: Cohesion IB (smart building platform, raised $6.5M seed, Built In Chicago 2020), Cohesion LLC, and multiple EU policy initiatives. LinkedIn searches and general web queries return these other entities first. This creates SEO/discoverability challenges and potential customer confusion.

**Narrow initial wedge in a winner-take-all market:** AlphaSense (>$500M ARR, Fortune Oct 2025 via search snippet) is actively expanding its platform with acquisitions (Tegus, Sentieo, Carousel) and is seeking additional hundreds of millions in funding (Bloomberg, Mar 2026 via search snippet). If AlphaSense adds autonomous agent capabilities to its existing platform, Cohesion's differentiation as a standalone agent tool narrows against an incumbent with deep enterprise relationships and comprehensive data licensing.

**Data source dependency:** Monitoring X/Twitter and podcasts depends on API access policies controlled by third parties. X's API pricing has changed multiple times since 2023, and podcast transcription depends on feed availability. Any restriction to these data sources directly impacts core product functionality.

**Commoditization of LLM-based financial agents:** Open-source frameworks for AI-driven investment research (e.g., github.com/virattt/ai-hedge-fund) lower the barrier for hedge funds to build in-house solutions or for new entrants to replicate the agent approach. The underlying technology (LLM + structured data extraction) is not proprietary.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in investment management: $2.9B in 2022 growing to $7.4B by 2030 at 14.2% CAGR (Gitnux, 2026 via search snippet) |
| SAM | No public data found |
| Traction | Live with 10+ fundamental equity funds managing combined $10Bn+ AUM (YC company page) |
| Revenue Signal | No public data found |
| Founders | Devon Krapcho (CEO): 5+ yr hedge fund analyst at Long Path Partners, Notre Dame BBA. Matthew McBrien: AWS Lambda engineer, Georgia Tech MS ECE. Matt Munns: ML engineer, built AI at T. Rowe Price. |
| Competitors | AlphaSense ($650M raised, >$500M ARR, broad search platform); Hebbia ($161M raised, $13M revenue, document analysis); Trata ($500K raised, revenue unknown, anonymized analyst research); Standard Signal (YC P26, revenue unknown, autonomous AI hedge fund) |
| Moat Signals | No public data found |
| Risk Factors | Name collision with other "Cohesion" companies, AlphaSense platform expansion threat, third-party data source API dependency |
| Founder Reach | Devon Krapcho: Twitter 108 followers, LinkedIn profile confirmed, no GitHub. Matthew McBrien: no Twitter found, LinkedIn confirmed, no GitHub. Matt Munns: no Twitter found, LinkedIn confirmed, GitHub 1 public repo. |
| Distribution Signals | No public data found |
| Emails | No public data found |
