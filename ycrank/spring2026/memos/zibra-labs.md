# Zibra Labs

> HPC for Quant Trading Firms running backtesting at scale.

| Field | Value |
|-------|-------|
| Website | https://zibralabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/zibra-labs |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Fintech, Cloud Computing, Infrastructure |
| YC Partner | Tom Blomfield |
| Emails | founders@zibralabs.ai (zibralabs.ai) |

## The Idea

- **Problem:** Quant research firms generate AI-driven candidate strategies orders of magnitude faster than backtest infrastructure can evaluate them — "from a handful of signals per quarter to hundreds per day" — shifting the bottleneck from researcher time to compute throughput (YC company page, 2026).
- **Approach:** Multi-cloud HPC clusters spanning 100–50,000 nodes that orchestrate up to 6.4M parallel tasks on spot instances with sub-50ms dispatch/scheduling overhead, across CPU and GPU (zibralabs.ai, 2026).
- **Differentiation:** [Inferred]: Versus retail/quant platforms like QuantConnect (LEAN engine, event-driven retail-scale backtests per forextester.com, 2026) Zibra targets institutional-scale parallel sweep workloads; versus rolling Ray/Anyscale in-house, Zibra is delivered as managed multi-cloud spot orchestration purpose-built for backtesting (zibralabs.ai, 2026).
- **Business Model:** No public data found — pricing page absent on zibralabs.ai (May 2026); [Inferred]: consumption-based pricing on compute-hours given spot-instance multi-cloud architecture.
- **TAM/SAM:** Quant trading sector projected at 12.5% CAGR through 2028 (AMBCrypto, 2026); no public TAM/SAM data found for the specific backtesting-HPC subsegment.
- **GTM / Distribution:** [Inferred]: Direct founder-led outbound to quant funds — YC page invites outreach on "simulation workloads," cal.com scheduler ("intro-to-zibra-labs") is the primary CTA, and founders' Ray network already includes Bridgewater, P72, Man Group, and Two Sigma (zibralabs.ai, 2026).

## Defensibility

- **Moat today:** Founder technical depth on the exact substrate — Ibrahim Rabbani was tech-lead on Ray (~12M weekly downloads, PyTorch Foundation project) and Zac Policzer was a LinkedIn Senior Staff engineer on Venice/Liquid/Espresso databases (YC page, 2026; LinkedIn Engineering blog).
- **Future moat:** [Inferred]: Multi-cloud spot-bidding optimization and scheduler tuning across 6.4M parallel tasks could become a data/learning moat as workload telemetry accumulates; unproven now because no customer deployments are publicly disclosed.
- **Market structure:** [Inferred]: Large quant funds operate proprietary in-house grids (e.g., the customer set Ray cites — Two Sigma, Bridgewater, P72) and may resist outsourcing core compute; conversely, public-cloud HPC offerings (AWS ParallelCluster, Azure CycleCloud) are not specialized for backtesting workflow ergonomics, leaving a niche but unproven structural gap.
- **Commoditization risk:** Any team combining Ray/Dask/Kubernetes with spot orchestration could build similar plumbing; Ray itself is open source (ray-project/ray on GitHub, PyTorch Foundation).

## Market & Traction

- **Traction signals:**
  - YC Spring 2026 batch backing (YC company page, 2026)
  - Founders publicly tied to Ray ecosystem already used by xAI, Cursor, Bridgewater, P72, Man Group, Two Sigma — note: these are Ray users, not disclosed Zibra customers (zibralabs.ai, 2026)
  - Company Twitter/X, LinkedIn, Discord/Slack: No public data found
  - Active job postings on YC: No public data found (Hiring flag: False per company_data)
  - Press coverage: No public data found
- **Competitors (closest adjacent set; direct institutional-HPC-for-backtesting competitors are sparse):**
  - QuantConnect ($8.6M total raised, $1.09M 2022 revenue per Crunchbase / Wefunder): retail-and-quant-fund backtesting on LEAN engine, not 50K-node spot HPC.
  - Anyscale ($281M total raised, $1B valuation Dec 2021, Series C led by a16z + Addition per Intel Capital, BusinessWire 2021): commercial Ray platform — the substrate Zibra's CEO previously led; horizontal, not quant-specific.
  - QuantRocket (funding not publicly disclosed per available sources): Python/JupyterLab quant research environment with Zipline/Moonshot backtesters, single-node scale (forextester.com, 2026).
  - Hyperscaler-native HPC (AWS ParallelCluster, Azure CycleCloud, Google Batch — parent revenues not relevant): general-purpose HPC, not optimized for backtest sweeps with sub-50ms dispatch.
  - WorldQuant BRAIN / Numerai (funding not publicly disclosed for direct comparison): crowdsourced alpha platforms, different model from infrastructure sale.
- **Why now:** [Inferred]: AI-generated alpha candidates have shifted quant research from a researcher-limited to a compute-limited regime in the last 12–24 months, while spot-instance availability across multiple clouds has matured enough to make 6.4M-task fan-out economically tractable (zibralabs.ai, 2026).

## Founders & Team

- **Ibrahim Rabbani (Founder & CEO):**
  - Background: Tech-lead on Ray at Anyscale (Ray ~12M weekly downloads, PyTorch Foundation); prior engineer at LinkedIn working on infrastructure (YC page, 2026; github.com/israbbani; linkedin.com/in/israbbani).
  - Twitter/X: No public account found via search.
  - LinkedIn: "Anyscale" (linkedin.com/in/israbbani) — count not retrievable.
  - GitHub: @israbbani, 5 public repositories listed; no single notable starred repo identified in search snippets (github.com/israbbani).
- **Zac Policzer (Founder & CTO):**
  - Background: Senior Staff Software Engineer at LinkedIn from Sept 2022; at LinkedIn since 2014; co-authored LinkedIn Engineering posts on Venice (derived data platform), worked on Liquid and Espresso databases (LinkedIn Engineering blog; linkedin.com/in/zac-policzer-41160157).
  - Twitter/X: No public account found via search.
  - LinkedIn: "Zibra Labs" (linkedin.com/in/zac-policzer-41160157) — count not retrievable.
  - GitHub: No public handle surfaced in search snippets.
- **Co-founder relationship:** Shared LinkedIn employer history — Rabbani previously built databases at LinkedIn and Policzer was Senior Staff engineer on LinkedIn's Venice/Liquid/Espresso (YC page, 2026; LinkedIn Engineering blog).
- **Founder-market fit:** [Inferred]: Direct overlap between Rabbani's Ray Core leadership (used by Bridgewater, P72, Man Group, Two Sigma per zibralabs.ai) and Policzer's planet-scale LinkedIn distributed-systems experience maps onto the exact technical stack quant HPC requires; YC Group Partner Tom Blomfield is listed advisor (YC page, 2026).

## Key Risks

- **Customer concentration in a small named-account market:** Institutional quant funds number in the dozens; zibralabs.ai's referenced users (Bridgewater, Two Sigma, P72, Man Group) are Ray users, not disclosed Zibra customers, and no Zibra customer logos or LOIs are publicly listed (zibralabs.ai, 2026).
- **In-house substitution risk:** Tier-1 quant funds historically build proprietary grids; Two Sigma's "Cook" cluster and Bridgewater's in-house infrastructure are well-known (Ray's own cited users per zibralabs.ai), meaning the addressable buyers may prefer to extend internal stacks over adopting Zibra.
- **Substrate dependency on Ray/Anyscale:** Anyscale ($281M raised, $1B valuation per Intel Capital 2021) sells the commercial Ray product the CEO previously led; if Anyscale moves toward quant-vertical packaging, Zibra faces direct overlap from a far better-funded incumbent.
- **Spot-instance reliability for long-horizon backtests:** [Inferred]: Spot interruptions can invalidate or extend large backtest sweeps; the company's 6.4M-task / sub-50ms dispatch claims (zibralabs.ai, 2026) presume robust checkpoint/restart, which is unverified in public material.
- **No public revenue, customer, or funding-round data:** No press, Product Hunt presence, or social footprint located in Phase 2 searches (May 2026), limiting external validation of demand.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Quant trading sector CAGR 12.5% through 2028 (AMBCrypto, 2026); no segment-specific TAM dollar figure publicly available |
| SAM | No public data found |
| Traction | YC Spring 2026 batch (YC company page); Ray ecosystem references include xAI, Cursor, Bridgewater, P72, Man Group, Two Sigma — these are Ray users, not confirmed Zibra customers (zibralabs.ai, 2026) |
| Revenue Signal | No public data found (no pricing page on zibralabs.ai as of May 2026) |
| Founders | Ibrahim Rabbani (CEO): ex-tech-lead Ray Core at Anyscale, ex-LinkedIn infra. Zac Policzer (CTO): ex-Senior Staff SWE LinkedIn (2014–2025), Venice/Liquid/Espresso databases. |
| Competitors | QuantConnect ($8.6M raised per Crunchbase, $1.09M 2022 revenue per Wefunder, retail/quant LEAN backtester); Anyscale ($281M raised, $1B valuation per Intel Capital 2021, horizontal Ray platform); QuantRocket (funding not disclosed, single-node Python quant env); AWS ParallelCluster / Azure CycleCloud (hyperscaler HPC, not backtest-specialized) |
| Moat Signals | Founder track record on Ray (~12M weekly downloads, PyTorch Foundation per zibralabs.ai) and LinkedIn Venice/Liquid/Espresso (LinkedIn Engineering blog) |
| Risk Factors | Substrate dependency on Ray/Anyscale, in-house substitution by tier-1 quant funds, no public revenue/customer validation |
| Founder Reach | Ibrahim Rabbani: Twitter not found, LinkedIn @israbbani count not retrievable, GitHub @israbbani 5 repos. Zac Policzer: Twitter not found, LinkedIn @zac-policzer-41160157 count not retrievable, GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt listing, no Chrome store, no app store presence) |
| Emails | founders@zibralabs.ai (zibralabs.ai) |

Sources:
- [Zibra Labs YC company page](https://www.ycombinator.com/companies/zibra-labs)
- [Zibra Labs website](https://zibralabs.ai/)
- [Ibrahim Rabbani LinkedIn](https://www.linkedin.com/in/israbbani/)
- [israbbani on GitHub](https://github.com/israbbani)
- [Zac Policzer LinkedIn](https://www.linkedin.com/in/zac-policzer-41160157/)
- [Zac Policzer on LinkedIn Engineering blog](https://engineering.linkedin.com/blog/authors/z/zac-policzer)
- [QuantConnect Crunchbase profile](https://www.crunchbase.com/organization/quantconnect)
- [Anyscale Series C announcement (Intel Capital)](https://www.intelcapital.com/anyscale-secures-100m-series-c-at-1b-valuation-to-radically-simplify-scaling-and-productionizing-ai-applications/)
- [10 Best Backtesting Platforms for Quant Funds 2026 (Zerve)](https://www.zerve.ai/blog/backtesting-platforms-for-quant-funds)
- [QuantConnect Alternatives (Forextester)](https://forextester.com/blog/quantconnect-alternatives/)
- [6 best quant trading platforms 2026 (AMBCrypto)](https://ambcrypto.com/6-best-quant-trading-platforms-in-2026-boost-your-returns-with-ai-trading-bots/)
