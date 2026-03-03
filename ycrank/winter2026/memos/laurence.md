# Laurence

> RL for performance marketing

| Field | Value |
|-------|-------|
| Website | https://trylaurence.com |
| YC Page | https://www.ycombinator.com/companies/laurence |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | Not listed |
| Tags | Artificial Intelligence, Marketing, Advertising, Trading |
| YC Partner | Harshita Arora |
| Emails | matthew@trylaurence.com (YC page) |

## The Idea

**Problem:** Consumer packaged goods (CPG) brands selling on Amazon rely on manual, spreadsheet-based bid and budget adjustments for pay-per-click advertising—typically performed weekly by agencies or offshore teams. This process ignores the stochastic nature of consumer behavior, breaks at scale across tens of thousands of keywords, and uses fixed rules applied to noisy, delayed data. The company description compares the status quo to "trading in the 1980s pits: archaic, manual, and iterative guesswork" (YC company page).

**Approach:** Laurence uses reinforcement learning and proprietary LLMs to automate Amazon PPC advertising. The system calculates conversion rates for tens of thousands of keywords at various CPC levels and recalculates bids hourly rather than weekly (trylaurence.com). The approach draws explicitly from quantitative finance: continuous decision-making under stochastic outcomes with explicit profit constraints, harvesting profits when confidence is high and borrowing signals from similar keywords when data is sparse (YC company page). The platform uses customers' existing ad copy and runs ads on autopilot with full transparency and audit trails for every bid change, budget shift, and target adjustment (trylaurence.com).

**Differentiation:** Existing tools such as Pacvue, Perpetua, Quartile, and Teikametrics use rule-based automation or goal-based AI optimization. Laurence differentiates by framing ad bidding as a stochastic optimization problem analogous to quantitative trading, with reinforcement learning rather than static rules or simple ML-based bid suggestions. The team's background in high-frequency trading (Jump Trading) and ML engineering (Google, Meta) distinguishes the technical approach from competitors built primarily by e-commerce software engineers.

**Business Model:** No public pricing page. The website's primary CTA is "Book a Demo" with a form collecting revenue and ad spend information (trylaurence.com). [Inferred]: Most likely monetization path is a percentage-of-ad-spend fee or a SaaS subscription tiered by monthly ad spend, consistent with industry norms (Perpetua charges from $695/month, Quartile from $895/month, both scaled by ad spend).

**TAM/SAM:** Amazon's retail media ad revenue was $60.6 billion in 2025, projected to reach $69.7 billion in 2026 (WARC Media via search snippet). Amazon search ad revenue in the U.S. alone reached $19 billion in 2022, expected to grow to $41 billion by 2026 (eMarketer via search snippet). SAM would be the portion of this spend managed by third-party optimization tools rather than in-house or directly through Amazon's own ad console. No public SAM estimate specific to Amazon PPC management software was found.

**GTM / Distribution:** The company targets Amazon brands, starting with CPG brands. Named clients include Because Market, Finn, and Flings (trylaurence.com). An advisor, Aaron Apple, previously ran a PPC consultancy managing 8 figures of annual ad spend and founded Impresa Products, a top-75 Amazon 3P seller at exit (trylaurence.com/team). [Inferred]: Most likely distribution path is direct sales to Amazon brand owners and agencies, leveraging the advisor network and YC brand for initial deal flow, with demo-based enterprise sales motion.

## Defensibility

The core defensibility claim rests on the technical complexity of applying reinforcement learning to real-time advertising bid optimization. The system trains proprietary models on live ad spend data, which creates a data flywheel: more managed ad spend generates more training data, improving model performance. The team's quantitative trading background (Jump Trading) represents domain expertise that is uncommon in the Amazon advertising software market.

Full audit trails and bid-level transparency (trylaurence.com) create switching costs once a brand has integrated its campaigns and begun relying on Laurence's optimization history and keyword-level intelligence.

**Market structure:** Incumbent Amazon PPC tools (Pacvue, Quartile, Perpetua/Ascential) are built on rule-based or simpler ML optimization frameworks. Rebuilding their core bidding engines around reinforcement learning would require significant R&D investment and would risk disrupting existing customer workflows and expectations. Pacvue, as a bootstrapped company generating $50.8M in revenue (getlatka.com via search snippet), has limited incentive to overhaul a profitable existing architecture. Perpetua, acquired by Ascential in 2021, operates within a larger corporate structure that may slow fundamental technical pivots.

**Commoditization risk:** The reinforcement learning approach to ad bidding is technically reproducible by well-funded competitors or new entrants with quantitative finance backgrounds. The barrier is primarily in execution quality, data accumulation, and the speed of iteration rather than in a proprietary algorithm that cannot be replicated.

## Market & Traction

**Traction signals:**
- Managing "$10 million in live ad spend" (Y Combinator LinkedIn post, circa early 2026). An earlier figure of "$2.5 million in live ad spend" appeared on the YC company page (via search snippet), suggesting growth from the initial YC application to the LinkedIn announcement.
- 15–20% increases in advertising profits for clients (Y Combinator LinkedIn post).
- 40% decrease in advertising cost of sales (ACoS) while increasing gross sales (YC company page).
- Customer testimonial: 2x total sales growth (Cleaning & Repairs Brand) (trylaurence.com).
- Customer testimonial: 50% total sales growth (Cleaning & Repairs Brand) (trylaurence.com).
- Customer testimonial: 2x to 5.78x ROAS improvement (Photo & Video Supplies Brand) (trylaurence.com).
- Named clients: Because Market, Finn, Flings (trylaurence.com).
- YC LinkedIn announcement received 377 likes and 100 comments (LinkedIn).
- Twitter/X: @trylaurence — follower count not retrievable (JavaScript rendering required).
- LinkedIn: company/laurence-ai — follower count not retrievable.
- GitHub: Laurence-AI organization — no public repositories (GitHub).
- No Product Hunt launch found.
- No app store or Chrome extension presence found.

**Competitive landscape:**

| Competitor | Funding | Revenue/Scale | Key Differentiator vs. Laurence |
|---|---|---|---|
| Pacvue | Bootstrapped | $50.8M revenue, 462 employees (getlatka.com, July 2025 via search snippet) | Full commerce acceleration platform spanning retail media, commerce management, and measurement across multiple marketplaces; broader scope beyond PPC |
| Quartile | $31.4M raised (Wellfound via search snippet) | Manages $2B+ annual ad spend for 5,300+ brands (quartile.com via search snippet) | Scale of existing customer base and cross-marketplace coverage; ML-based but not RL-based |
| Teikametrics | $65M raised (Tracxn via search snippet) | Revenue not public | Flywheel SaaS platform covering Amazon + Walmart; established brand with agency partnerships |
| Perpetua | $11.5M raised; acquired by Ascential April 2021 (Crunchbase via search snippet) | $1.2M revenue in 2021 (getlatka.com via search snippet) | Goal-based campaign creation with automated bidding; part of Ascential's broader commerce intelligence suite |
| Skai (formerly Kenshoo) | ~$52M raised (PitchBook via search snippet) | Revenue not public | Omnichannel platform beyond Amazon (search, social, retail media); founded 2006 with deep enterprise relationships |

**Why now:** [Inferred]: Several converging factors: (1) Amazon's advertising revenue has grown rapidly, reaching $60.6 billion in 2025 (WARC Media via search snippet), creating a large and expanding market for optimization tools; (2) advances in reinforcement learning infrastructure and transformer models have made it feasible to apply quantitative trading techniques to advertising bidding at scale; (3) the increasing keyword and campaign complexity on Amazon has outstripped the capacity of manual management and simple rule-based tools, creating demand for more sophisticated optimization.

## Founders & Team

**Matthew Chen** — Co-founder & CEO
- BS Math and Computer Science with AI research, Cornell University (trylaurence.com/team, LinkedIn via search snippet).
- Previously at Google: built the Data Science Agent (trylaurence.com/team via search snippet).
- Previously at Meta: grew Facebook new user retention by 18% while tuning the friending model (trylaurence.com/team via search snippet).
- Spent 3 months developing software tools for Amazon Ads agencies prior to founding Laurence (trylaurence.com/team).
- Trained ML models to rank in the top 1,000 out of 11 million (0.009%) at Fantasy Soccer (trylaurence.com/team via search snippet).
- Twitter/X: @mlaurencechen — account existence confirmed from YC page; follower count not retrievable.
- LinkedIn: linkedin.com/in/matthew-l-chen — 500+ connections (LinkedIn via search snippet).
- GitHub: No public personal repos found.

**Leo Gierhake** — Co-founder & Chief Scientist
- Previously at Jump Trading: led research overseeing billions in live trading volume (trylaurence.com/team).
- $250,000 in lifetime earnings as a high-stakes poker pro (trylaurence.com/team).
- Published LinkedIn article on DeFi trades (March 2021) (LinkedIn via search snippet).
- Education details not found in public sources.
- Twitter/X: @LGierhake — account exists (YC page, Sotwe via search snippet); follower count not retrievable.
- LinkedIn: Profile exists; headline not retrievable.
- GitHub: No public repos found.

**Additional team members (per trylaurence.com/team):**
- **Aaron Apple** — Advisor. Founded and sold Impresa Products, a ~$40M LTM revenue Amazon FBA business (top 75 Amazon 3P seller at exit, sold to strategic acquirer April 2021) (trylaurence.com/team; LinkedIn via search snippet). Previously ran a PPC consultancy managing 8 figures of annual ad spend.
- **Justin Xiang** — Founding Engineer. Previously at Meta, built fraud and spam detection algorithms; created AI systems for autonomous aircraft operations (trylaurence.com/team).
- **Gaspard Loeillot** — Founding Engineer. Previously at BCG, consulted for Fortune 500 companies on 9-figure growth initiatives (trylaurence.com/team).
- **Daniel Weiner** — Founding Engineer. Co-founded PARES AI (YC S25), a CRE broker automation startup. Lectured at Cornell University beginning at age 18 (trylaurence.com/team; YC page for PARES AI).

Note: The YC page lists team size as 2 (founders only), but the team page shows 4 additional team members beyond the two co-founders.

**Co-founder relationship:** Both Matthew Chen (Cornell) and Leo Gierhake (Jump Trading) have backgrounds at the intersection of quantitative methods and technology. No shared employer or university overlap is visible from available public data.

**Founder-market fit:** Matthew Chen's ML engineering experience at Google and Meta, combined with his direct pre-founding work building software tools for Amazon Ads agencies, provides both technical depth and domain-specific context. Leo Gierhake's experience leading quantitative research at Jump Trading—managing billions in live trading volume—maps directly to the company's thesis of treating ad bidding as a stochastic trading problem. The advisory relationship with Aaron Apple (who built and exited a top-75 Amazon 3P seller business and ran a PPC consultancy) provides deep Amazon marketplace expertise and potential channel access to Amazon brand owners.

## Key Risks

**Platform dependency on Amazon:** Laurence's current product is built entirely on Amazon's advertising ecosystem. Changes to Amazon's Advertising API, bid auction mechanics, or data access policies could disrupt the core product. Amazon has historically restricted third-party access to advertising data and could choose to build competing native optimization features.

**"Common name" brand disambiguation:** "Laurence" is a common English name, making SEO, social media discoverability, and brand search difficult. Search results for "Laurence" return primarily unrelated results (C.R. Laurence, individuals named Laurence, etc.), which may impede organic customer acquisition.

**Incumbent response at scale:** Pacvue ($50.8M revenue), Quartile ($2B+ managed ad spend), and Teikametrics ($65M+ raised) have established customer bases, marketplace integrations, and sales teams. If reinforcement learning proves to deliver measurably superior results, these incumbents have the resources to acquire or replicate the approach.

**Narrow initial market segment:** Starting exclusively with Amazon PPC for CPG brands limits the addressable market in the near term. Expansion to other marketplaces (Walmart, Instacart) or other ad channels (Google, Meta) would require significant additional model development and integration work.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Amazon retail media ad revenue: $60.6B in 2025, projected $69.7B in 2026 (WARC Media via search snippet). U.S. Amazon search ads: $19B (2022), expected $41B by 2026 (eMarketer via search snippet). |
| SAM | No public data found for the specific Amazon PPC management software segment. |
| Traction | $10M in live managed ad spend (YC LinkedIn post, early 2026); 15–20% advertising profit increases for clients (YC LinkedIn post); 40% ACoS reduction (YC company page); named clients: Because Market, Finn, Flings (trylaurence.com). |
| Revenue Signal | No public data found. No pricing page visible; demo-based sales model (trylaurence.com). |
| Founders | Matthew Chen (CEO): Google Data Science Agent builder, Meta friending growth, Cornell Math/CS. Leo Gierhake (Chief Scientist): Jump Trading quant research lead, high-stakes poker pro. |
| Competitors | Pacvue (bootstrapped, $50.8M revenue, broad commerce platform), Quartile ($31.4M raised, $2B+ managed spend, 5,300+ brands), Teikametrics ($65M raised, revenue unknown, Flywheel SaaS), Perpetua ($11.5M raised, acquired by Ascential 2021, goal-based automation), Skai (~$52M raised, revenue unknown, omnichannel platform) |
| Moat Signals | Reinforcement learning approach from quantitative trading domain; hourly bid recalculation vs. competitors' less frequent optimization; full audit trail transparency creating switching costs; data flywheel from managed ad spend. |
| Risk Factors | Amazon platform dependency, brand name disambiguation difficulty, incumbent replication risk, narrow initial market segment |
| Founder Reach | Matthew Chen: Twitter @mlaurencechen (count not retrievable), LinkedIn 500+ connections. Leo Gierhake: Twitter @LGierhake (count not retrievable), LinkedIn profile exists (headline not retrievable). Company: Twitter @trylaurence (count not retrievable). |
| Distribution Signals | YC LinkedIn announcement: 377 likes, 100 comments (LinkedIn). No Product Hunt launch found. No app store or Chrome extension presence found. |
| Emails | matthew@trylaurence.com (YC page) |
