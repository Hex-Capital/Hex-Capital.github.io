# Laurence

> RL for performance marketing

| Field | Value |
|-------|-------|
| Website | https://trylaurence.com |
| YC Page | https://www.ycombinator.com/companies/laurence |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Analytics |
| Team Size | 2 |
| Location | New York, NY (LinkedIn company page) |
| Tags | Marketing, Advertising, Trading, AI |

## The Idea

**Problem:** Amazon sellers and brands lose money on PPC advertising after accounting for margins. Advertising on Amazon is managed through manual bid and keyword updates using noisy, delayed data and fixed rules. These rule-based approaches break at scale and do not account for stochastic variance in conversion rates. The company states that overpaying by 10 cents per click compounds to approximately $1M in annual losses across 50 keywords per product at 10 clicks/day (trylaurence.com). Current alternatives include manual management, agencies using offshore labor, and software platforms that rely on deterministic rule-based automation (Perpetua, Pacvue, Teikametrics, Quartile).

**Approach:** Laurence applies reinforcement learning and custom-trained transformer models to automate Amazon PPC advertising. The system continuously recalculates conversion rates across tens of thousands of keywords at different CPC levels and optimizes bids to the cent. Bids are adjusted hourly rather than daily or weekly. When data is sparse for a given keyword, the system borrows signals from similar keywords. The platform uses customers' existing ad copy and runs campaigns on autopilot with explicit profit constraints — described as analogous to how quantitative hedge funds trade markets under stochastic outcomes (YC company page; trylaurence.com). The product includes a full audit trail of all bid changes and an "Ask Laurence" AI reporting agent for on-demand explanations (trylaurence.com).

**Differentiation:** Existing Amazon PPC tools (Perpetua, Pacvue, Teikametrics, Quartile) use rule-based automation — if ACOS exceeds a threshold, lower bid; if ROAS exceeds a target, raise bid. Laurence frames its approach as continuous stochastic optimization rather than threshold-based rules, treating each bid as a decision under uncertainty. The company draws an explicit analogy to quantitative trading, claiming to apply techniques from hedge fund market-making (confidence-weighted position sizing, signal borrowing across correlated instruments) to advertising bids (YC company page). The founding team includes a former Jump Trading researcher, which is the source of this quantitative trading methodology.

**Business Model:** No public pricing page found on trylaurence.com. [Inferred]: Given the competitive landscape (Perpetua at $695/mo, Teikametrics at $149/mo, Pacvue at $500/mo, Quartile at $895–$9,995/mo) and Laurence's claim of "decreasing advertising cost of sales by 40%," the most likely monetization paths are either a percentage of ad spend managed or a flat monthly SaaS fee tiered by ad spend volume.

**TAM/SAM:** Amazon generated $56.2 billion in advertising revenue in 2024, growing approximately 20% year-over-year (Statista, 2024). Amazon's advertising revenue is projected to reach $69 billion in 2025 (Nasdaq, citing WARC estimates). The serviceable market is the subset of Amazon advertising spend managed by third-party brands and sellers using external optimization tools. Quartile alone manages over $2 billion in annual Amazon ad spend, representing approximately 2% of all Amazon advertising spend (Quartile website via search snippet). No specific SAM estimate for the Amazon PPC management software segment was found.

**GTM / Distribution:** The company's YC page lists an ask for "introductions to CPG brands or SMBs selling on Amazon" (YC company page). Matthew Chen's LinkedIn shows Laurence sponsoring the eTail conference in Palm Springs and speaking at The Fortia Group's eCommerce summit in NYC on March 9, 2026 (LinkedIn). [Inferred]: The GTM appears to be a combination of direct outreach to Amazon brand owners, conference-based lead generation, and YC network referrals.

## Defensibility

The core defensibility claim rests on the application of quantitative trading techniques (reinforcement learning, stochastic optimization) to advertising bid management. As the system manages more ad spend and accumulates more conversion data across keywords and categories, the RL models should improve in accuracy — creating a data flywheel where more customers produce better models, which attract more customers.

The hourly optimization cadence and continuous model retraining represent a technical complexity barrier relative to rule-based competitors, though the underlying ML techniques (RL, transformers) are well-known in academic and industry settings. Switching costs are moderate: advertisers who see measurable ROAS improvements have financial incentive to stay, but PPC management tools are generally substitutable with limited data lock-in.

**Market structure:** Incumbents (Pacvue, Teikametrics, Quartile) have built their platforms on rule-based architectures. Rebuilding around a fundamentally different RL-based approach would require rearchitecting core bidding engines and retraining engineering teams — a nontrivial effort that risks disrupting existing customer workflows. However, no structural barrier (business model cannibalization, regulatory moat, or channel conflict) prevents incumbents from eventually adopting similar ML approaches. The primary barrier is organizational inertia and the engineering cost of a paradigm shift from deterministic rules to stochastic optimization.

**Commoditization risk:** The underlying techniques (reinforcement learning, transformer models) are broadly accessible. Other ML-focused Amazon PPC entrants could build similar systems. The defensibility depends on execution speed, the depth of proprietary training data accumulated from live ad spend, and the quality of the team's quantitative modeling relative to competitors.

## Market & Traction

**Traction signals:**
- Managing $10 million in live ad spend (YC company page)
- LinkedIn company page states managing $2M+ in annual Amazon Ads spend (LinkedIn, accessed Feb 2026) — this may represent a subset or earlier figure compared to the $10M YC claim
- Increasing advertising profits by 15-20% (YC company page)
- Decreasing advertising cost of sales by 40% (YC company page)
- Customer testimonial: 2x total sales growth (trylaurence.com)
- Customer testimonial: 50% total sales growth (trylaurence.com)
- Customer testimonial: 2.17x → 5.78x ROAS improvement (trylaurence.com)
- Customer testimonial: Achieved 28% ACOS for an $8M/year seller vs. 40% ACOS previously (LinkedIn post)
- Approximately 11 named clients visible on website: Because, Bayelon, Berkland, Alton, Auralux, Sylvan, VitalRoot, Escentile, Samorillo, Recover+, Culver (trylaurence.com)
- LinkedIn company page: 377 followers, 6 employees listed (LinkedIn, accessed Feb 2026)
- Twitter/X: @trylaurence (handle confirmed; follower count not retrievable due to JavaScript rendering)
- Sponsoring eTail conference in Palm Springs; speaking at The Fortia Group eCommerce summit in NYC, March 9, 2026 (Matthew Chen LinkedIn)
- No Product Hunt launch found
- No press coverage in named publications found
- No app store or browser extension presence found

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. Laurence |
|------------|---------|---------|--------------------------------|
| Pacvue | $476M total (acquired by Assembly, Oct 2021) (Crunchbase via search snippet) | $50.8M (Jul 2025, getlatka.com via search snippet) | Broader omnichannel platform spanning 90+ marketplaces; merged with Helium 10 for full-stack Amazon seller suite. Rule-based automation vs. Laurence's RL approach. |
| Teikametrics | $65M total ($40M Series B, Jul 2021, Intel Capital-led) (VentureBeat) | $45.1M in 2024 (getlatka.com via search snippet) | Founded 2011; longer track record and established brand. AI-powered but rule-based bid optimization. Pricing starts lower at $149/mo. |
| Perpetua | $11.5M raised pre-acquisition; acquired by Ascential for up to $162M in Apr 2021 (Osler; Morningstar via search snippet) | Revenue unknown | Goal-based campaign creation across Amazon, Walmart, Instacart. Now part of Ascential's digital commerce division. |
| Quartile | Undisclosed (PE from Rockbridge Growth Equity, 2020) (Crunchbase via search snippet) | Revenue unknown | Manages $2B+ annually (~2% of Amazon ad spend). ML-driven at scale. Pricing $895–$9,995/mo (Quartile website via search snippet). |
| Intentwise | Unfunded / bootstrapped (Crunchbase via search snippet) | Revenue unknown | Analytics and reporting focus; purpose-built for brands, sellers, and agencies. Founded 2015. |

**Why now:** [Inferred]: Several converging factors: (1) Amazon advertising revenue has grown from ~$31B in 2022 to $56B in 2024, creating a larger addressable market with more sophisticated advertisers feeling margin pressure; (2) Advances in reinforcement learning and transformer architectures (2023–2025) have made it feasible to apply continuous stochastic optimization to high-dimensional bid spaces at low latency; (3) Rising Amazon CPCs are compressing seller margins, making the difference between optimal and suboptimal bidding increasingly consequential; (4) The incumbent tools were architected in the rule-based era and face technical debt in transitioning to modern ML-native approaches.

## Founders & Team

**Matthew Chen** — Co-founder & CEO
- Education: Cornell University (2009–2018) (LinkedIn)
- Previously: ML Engineer at Google (built the Data Science Agent); ML Engineer at Meta (grew Facebook new user retention by 18%); Boston Consulting Group; Jump Trading; third engineer at a health-tech startup (YC company page; LinkedIn)
- Languages: English, German, French, Indonesian, Chinese (LinkedIn)
- Speaking at eTail conference and The Fortia Group eCommerce summit (LinkedIn)
- Twitter/X: No confirmed personal account found
- LinkedIn: linkedin.com/in/matthew-l-chen/ — 2,000+ followers, 500+ connections (LinkedIn, accessed Feb 2026)
- GitHub: No public repos found

**Leo Gierhake** — Co-founder & Chief Scientist
- Former quantitative researcher at Jump Trading (YC company page)
- Professional poker player with $250K in winnings (YC company page)
- Founded a crypto investing platform at age 18 (YC company page)
- Published on DeFi trading strategies on LinkedIn (LinkedIn Pulse, Mar 2021)
- Twitter/X: No public account found
- LinkedIn: Profile exists but full details not publicly accessible; published DeFi Trades article (LinkedIn Pulse)
- GitHub: No public repos found

**Co-founder relationship:** Both Matthew Chen and Leo Gierhake have Jump Trading in their backgrounds — Matthew Chen lists Jump Trading as a prior employer (LinkedIn), and Leo Gierhake was a Jump Trading researcher (YC company page). This shared employer suggests a prior professional connection.

**Founder-market fit:** The founding team combines quantitative trading experience (Jump Trading) with big-tech ML engineering (Google, Meta) and direct Amazon selling experience. The YC page describes the team as "engineers and 8-figure Amazon sellers with experience at Google, Meta, Jump Trading, and BCG." The quantitative trading background is directly relevant to the company's core thesis of applying stochastic optimization to advertising bids, while the ML engineering experience at Google and Meta provides the technical foundation for building production RL and transformer systems.

## Key Risks

**Platform dependency on Amazon:** The entire product is built on top of Amazon's Advertising API. Changes to API access, rate limits, data availability, or Amazon's own advertising algorithm could directly impair Laurence's ability to operate. Amazon has a history of restricting third-party access when it competes with its own tools (e.g., Amazon's own "Bid+" and automated campaign features).

**Incumbent response with deeper data access:** Pacvue ($50.8M revenue) and Teikametrics ($45.1M revenue) have large existing customer bases generating substantial bid and conversion data. If these incumbents invest in RL-based optimization, they have both the capital and proprietary data volume to potentially build comparable or superior models, with distribution advantages from their existing customer relationships.

**Metric ambiguity across ad spend claims:** The YC page states "$10 million in live ad spend," LinkedIn states "$2M+ in annual Amazon Ads spend," and an earlier search snippet referenced "$2.5M." These inconsistent figures make it difficult to assess the actual scale of the platform's current deployment. This could reflect different measurement periods or scopes, but it introduces uncertainty.

**Narrow initial market segment:** Focusing exclusively on Amazon PPC limits the addressable market to one channel within one marketplace. Competitors like Pacvue (90+ marketplaces), Perpetua (Amazon, Walmart, Instacart), and Skai (omnichannel) offer broader coverage. Brands seeking unified advertising management may prefer a single-platform solution.

**Brand disambiguation:** "Laurence" is a common proper name. Web searches return substantial noise from unrelated individuals and organizations named Laurence, which could create challenges in organic discovery and SEO.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Amazon advertising revenue: $56.2B in 2024, ~20% YoY growth (Statista, 2024); projected $69B in 2025 (Nasdaq, citing WARC) |
| SAM | No public data found for the Amazon PPC management software sub-segment specifically |
| Traction | $10M in live ad spend managed (YC company page); ~11 named clients on website (trylaurence.com); 377 LinkedIn followers (LinkedIn, Feb 2026); 6 employees on LinkedIn (LinkedIn, Feb 2026) |
| Revenue Signal | No public data found |
| Founders | Matthew Chen (CEO): Cornell, ex-Google ML Engineer, ex-Meta ML Engineer, ex-Jump Trading, ex-BCG. Leo Gierhake (Chief Scientist): ex-Jump Trading researcher, professional poker player ($250K winnings), founded crypto platform at 18. |
| Competitors | Pacvue ($476M raised, $50.8M revenue, omnichannel 90+ marketplaces vs. Amazon-only); Teikametrics ($65M raised, $45.1M revenue, rule-based vs. RL-based); Perpetua ($11.5M raised pre-acq, acquired for up to $162M by Ascential, goal-based campaign tool); Quartile (undisclosed PE funding, $2B+ ad spend managed, ML-driven at scale); Intentwise (unfunded, analytics-focused) |
| Moat Signals | Proprietary RL models trained on live ad spend data; quantitative trading methodology applied to bidding; hourly optimization cadence vs. daily/weekly for competitors |
| Risk Factors | Amazon API platform dependency, incumbent response with larger data and capital, narrow single-channel focus |
| Founder Reach | Matthew Chen: Twitter not found, LinkedIn 2,000+ followers, GitHub not found. Leo Gierhake: Twitter not found, LinkedIn profile exists (details not accessible), GitHub not found. Company: Twitter @trylaurence (count not retrievable), LinkedIn 377 followers |
| Distribution Signals | eTail conference sponsorship (LinkedIn, Feb 2026); The Fortia Group eCommerce summit speaker (LinkedIn, Mar 2026); YC W26 network |
