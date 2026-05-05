# Zibra Labs

> HPC for Quant Trading Firms running backtesting at scale.

| Field | Value |
|-------|-------|
| Website | https://zibralabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/zibra-labs |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Fintech, Cloud Computing, Infrastructure |
| YC Partner | Tom Blomfield (YC page) |
| Emails | founders@zibralabs.ai (zibralabs.ai) |

## The Idea

**Problem:**
- Quant research now generates "hundreds [of signals] per day" via AI vs. "a handful per quarter" historically; bottleneck has shifted from researcher time to backtest compute throughput (zibralabs.ai).
- Target customer: quant trading firms running strategy backtesting (zibralabs.ai; YC page).
- [Inferred]: Today these firms typically run backtests on internal compute clusters, AWS/GCP batch services, or platforms like QuantConnect/QuantRocket — based on competitor landscape surfaced in search.

**Approach:**
- Multi-cloud HPC clusters of 100–50,000 nodes, up to 6.4M parallel tasks in flight, CPU + GPU support, <50ms dispatch/scheduling overhead, running on spot instances across regions/providers (zibralabs.ai).

**Differentiation:**
- vs. QuantConnect: QuantConnect's hosted backtest tier caps at 16GB memory for backtests and 4GB for live trading (QuantRocket alternatives page); Zibra targets unconstrained scale (zibralabs.ai).
- vs. Coiled (Dask-based scaling): [Inferred]: Zibra appears purpose-built for quant backtesting workflows on spot, vs. Coiled's general Python/Dask compute focus (Coiled.io).
- vs. in-house: company positions on cost (spot instances) and developer simplicity (zibralabs.ai).

**Business Model:**
- No public pricing page (zibralabs.ai). Contact gated through founders@zibralabs.ai and a cal.com intro link (zibralabs.ai).
- [Inferred]: Most likely monetization is consumption-based (compute-hour markup over spot) plus enterprise contracts, given the HPC-as-a-service positioning and the lack of a self-serve pricing page.

**TAM/SAM:**
- Backtesting software market: ~$0.4B (2024), projected $0.52B by 2033, ~9.18% CAGR (Business Research Insights, 2024 via search snippet).
- No public SAM data found for the quant-firm HPC backtesting subsegment.
- [Inferred]: Reported backtesting-software TAM understates Zibra's addressable market because it does not include cloud compute spend by hedge funds/prop shops, which is the budget Zibra targets.

**GTM / Distribution:**
- 0 jobs listed on YC page; not actively hiring (YC page).
- [Inferred]: Direct founder-led enterprise sales to quant funds and prop trading firms, leveraging the founders' Anyscale/Ray network (where firms like Bridgewater and Two Sigma are referenced as Ray users on zibralabs.ai).

## Defensibility

- Founder distributed-systems expertise: "25+ combined years building distributed systems" (zibralabs.ai); both founders worked on Ray at Anyscale (LinkedIn, GitHub israbbani bio "Building Ray Core at Anyscale", GitHub ZacAttack bio referencing Ray and VeniceDB).
- No patents, customer logos, or proprietary datasets disclosed publicly (zibralabs.ai; YC page).
- [Inferred]: Defensibility today rests on technical execution (multi-cloud spot scheduling at 6.4M-task scale is non-trivial) and founder credibility with quant infra buyers; switching costs/data moats unproven at this stage.

**Market structure:**
- [Inferred]: No structural barrier identified at this stage. Hyperscalers (AWS Batch, GCP, Azure) and existing Dask/Ray vendors (Coiled, Anyscale) could offer competing managed services; the structural argument would need to be vertical specialization for quant workflows (data formats, latency requirements), which is not yet evidenced publicly.

**Commoditization risk:**
- [Inferred]: Anyscale itself, Coiled, Databricks, and cloud-native batch services could replicate the multi-cloud spot scheduling layer; the Ray framework Zibra's founders helped build is open source (42.4k GitHub stars on ray-project/ray, GitHub).

## Market & Traction

**Traction signals:**
- No public revenue, customer count, or paying customer figures found (zibralabs.ai; YC page; web search).
- No press coverage of Zibra Labs found in search; results conflated with unrelated "Zibra AI" (3D/VFX company, $2.2M raised, Crunchbase via search snippet).
- Twitter/X: no official Zibra Labs handle found in search; @ZibraAI is a separate VFX company (X.com).
- LinkedIn company page: "ZibraLabs ApS" exists but appears to be a separate Danish entity (LinkedIn search results); no follower count retrievable for the YC company.
- GitHub: organization "Zibra Labs" listed on Zac Policzer's GitHub profile (github.com/ZacAttack); no public org repos/star counts surfaced.
- YC jobs: 0 active postings (YC page).
- Discord/Slack community: no public data found.
- Reference customers: zibralabs.ai mentions Ray (the prior open-source project) is used by xAI, Cursor, Bridgewater, Two Sigma — these are Ray users, not confirmed Zibra customers.

**Competitive landscape:**
- **QuantConnect** — total funding ~$9.7M (PitchBook via search snippet); 2023 revenue $1.15M (Tracxn via search snippet); 300,000+ investors, 375,000+ live strategies, $45B/mo notional (quantconnect.com). Differentiator vs. Zibra: hosted retail/prosumer platform with capped compute (16GB backtest limit per QuantRocket comparison page); Zibra targets uncapped institutional scale.
- **Coiled** — $26M total raised including a $21M Series A led by Bessemer (PRNewswire, May 2021); revenue/ARR not public. Differentiator: Dask-on-cloud for general Python/data workloads; not vertical to quant.
- **QuantRocket** — funding/ARR not public (quantrocket.com). Differentiator: Python/Docker self-hosted platform; claims "up to 75x faster than QuantConnect for data-intensive strategies" (quantrocket.com).
- **Anyscale** (adjacent) — commercial Ray vendor; founders' former employer (LinkedIn). [Inferred]: Adjacent rather than direct competitor; Anyscale is general AI compute, but could expand into the same quant niche.
- **Hyperscaler batch services** (AWS Batch / Coiled-on-AWS pattern) — AWS published a backtesting-with-Coiled reference architecture (amazonaws.cn blog).

**Why now:**
- [Inferred]: Catalyst is AI-generated alpha research increasing candidate-strategy throughput "from a handful of signals per quarter to hundreds per day" (zibralabs.ai), shifting the bottleneck to backtest compute. The enabling change is LLM-assisted strategy generation crossing a usability threshold in 2024–2025; not independently sourced beyond company framing.

## Founders & Team

**Ibrahim Rabbani** — Co-founder & CEO
- LinkedIn headline: associated with Anyscale (LinkedIn search snippet; GitHub bio "Building Ray Core at Anyscale").
- Prior: Anyscale (Ray Core engineer); peer commentary references "KubeRay v1.4" releases (search snippet from his LinkedIn).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/israbbani (URL surfaced in search; direct fetch returned 404, count not retrievable).
- GitHub: github.com/israbbani — 9 followers, 5 repos, contributor to ray-project/ray (42.4k stars, GitHub).

**Zac Policzer** — Co-founder & CTO
- LinkedIn headline: "Databases, Distributed systems, AI Infra…" (search snippet, linkedin.com/in/zac-policzer-41160157).
- Education: UCLA (search snippet).
- Prior: LinkedIn (Tech Lead / Manager on Venice — derived data platform; LinkedIn engineering blog author page); Anyscale (Ray); VMware (Software Engineer) (search snippets).
- Twitter/X: @ZacAttackFTW (x.com/zacattackftw). Follower count not retrievable.
- LinkedIn: linkedin.com/in/zac-policzer-41160157 (direct fetch returned 404, count not retrievable).
- GitHub: github.com/ZacAttack — 9 followers, 18 repos; pinned forks include linkedin/venice (1 star on his fork; upstream linkedin/venice is the LinkedIn open-source derived-data platform, GitHub).

**Co-founder relationship:**
- Both founders' bios reference Anyscale/Ray (zibralabs.ai; GitHub israbbani bio; GitHub ZacAttack bio) — likely prior coworkers at Anyscale.

**Founder-market fit:**
- [Inferred]: Strong technical fit — both founders have direct distributed-systems pedigree (Ray Core at Anyscale; Venice at LinkedIn) directly applicable to building multi-cloud HPC schedulers. No public quant-domain experience surfaced for either founder; market access to hedge funds is the open question, partially mitigated by Anyscale's existing relationships with Bridgewater and Two Sigma referenced on zibralabs.ai.
- No advisors, board members, or named investors disclosed publicly beyond the standard YC investment (YC page).

## Key Risks

**Domain access vs. quant buyers:** Both founders' documented careers are in general distributed systems (Ray, Venice), with no public history at hedge funds or prop trading firms (LinkedIn search snippets). Quant infra is a relationship-driven sales motion; absent a quant-native founder or advisor, sales cycles may extend.

**Hyperscaler / Anyscale substitution:** AWS Batch + Coiled is a published reference architecture for the same backtesting workload (AWS/Coiled blog). Anyscale itself, where both founders trained, is a direct adjacent vendor that could enter this niche. No public technical moat (patents, proprietary scheduler benchmarks vs. Ray) disclosed.

**Performance claim verification:** Headline figures of 50,000-node clusters and 6.4M parallel tasks at <50ms scheduling overhead (zibralabs.ai) are unverified by third parties; no published benchmarks, customer case studies, or load test data found.

**Brand confusion:** Multiple "Zibra" entities exist — Zibra AI (VFX, $2.2M raised, Crunchbase via search snippet); ZibraLabs ApS (Denmark, LinkedIn); Zibra Corporation (Crunchbase). Search visibility for the YC company is currently dominated by these others.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Backtesting software ~$0.4B (2024) → $0.52B by 2033, 9.18% CAGR (Business Research Insights, 2024 via search snippet) |
| SAM | No public data found |
| Traction | 0 YC job postings (YC page); reference to Ray's 12M weekly downloads cited as founder credibility (zibralabs.ai) — Ray is a prior project, not Zibra traction |
| Revenue Signal | No public data found (no pricing page on zibralabs.ai) |
| Founders | Ibrahim Rabbani (CEO): ex-Anyscale Ray Core (LinkedIn/GitHub). Zac Policzer (CTO): ex-Anyscale (Ray), ex-LinkedIn (Venice tech lead), ex-VMware, UCLA (LinkedIn search snippet, GitHub) |
| Competitors | QuantConnect ($9.7M raised PitchBook via search snippet, $1.15M 2023 revenue Tracxn via search snippet, retail/capped-compute platform); Coiled ($26M raised, PRNewswire May 2021, revenue unknown, Dask-on-cloud generalist); QuantRocket (funding unknown, revenue unknown, self-hosted Python/Docker); Anyscale (adjacent, general Ray commercial vendor) |
| Moat Signals | Founders' Ray/Venice distributed-systems pedigree (zibralabs.ai; GitHub bios); no patents, customers, or data moats disclosed |
| Risk Factors | Hyperscaler/Anyscale substitution, no quant-domain founder, unverified performance claims |
| Founder Reach | Ibrahim Rabbani: Twitter not found, LinkedIn count not retrievable, GitHub 9 followers / contributor to ray (42.4k stars upstream). Zac Policzer: Twitter @ZacAttackFTW count not retrievable, LinkedIn count not retrievable, GitHub 9 followers / 18 repos |
| Distribution Signals | No public data found (no Product Hunt launch, no press, no public Twitter/Discord/Slack for Zibra Labs) |
| Emails | founders@zibralabs.ai (zibralabs.ai) |
