# Blueprints

> Agentic harness for financial markets

| Field | Value |
|-------|-------|
| Website | https://useblueprints.ai |
| YC Page | https://www.ycombinator.com/companies/blueprints |
| Batch | Summer 2026 |
| Industry | Fintech / Fintech -> Consumer Finance |
| Team Size | 2 |
| Location | San Francisco (YC page); Dublin, Ireland origin (Silicon Republic, 2026) |
| Tags | Fintech, Generative AI, Consumer |
| YC Partner | Vivian Midha Shen |
| Emails | No public data found |

## The Idea

- **Problem:** Bots already capture the bulk of profits on prediction markets — 14 of the top 20 most profitable Polymarket wallets are automated, and arbitrage bots extracted ~$40M from Polymarket between Apr 2024–Apr 2025 (Yahoo Finance / Finance Magnates, 2026), leaving retail traders structurally disadvantaged.
- **Approach:** Users compose strategies via a visual drag-and-drop block builder or an LLM "Prince" that translates plain-English theses into deployable automation; strategies backtest against Polymarket history since 2022, paper-trade, then deploy to co-located infra with risk gating (useblueprints.ai, 2026).
- **Differentiation:** vs. Polymarket/agents open-source repo — Blueprints provides a managed no-code GUI + hosted execution; vs. TurbineFi — Blueprints emphasizes LLM-to-strategy translation ("Prince"); vs. Polystrat (Olas) — Blueprints is user-built strategies rather than a single autonomous self-custody agent (useblueprints.ai; Olas blog, Feb 2026).
- **Business Model:** Tiered SaaS with credit consumption — Free (2,000 credits/mo, 10 blueprints, 2 running), Pro $20/mo (10,000 credits, 25 running, 7-day trial), Teams custom, Enterprise contact (useblueprints.ai pricing page, 2026).
- **TAM/SAM:** Polymarket alone did $21.5B notional trading volume in 2025; combined Kalshi+Polymarket monthly volume reached ~$24B by April 2026 (Pew Research, May 2026; TRM Labs, 2026). No public SAM data found for automated-strategy tooling specifically.
- **GTM / Distribution:** [Inferred]: Bottom-up self-serve via free tier and Telegram alert integration; founder demo calls booked via cal.com/ryan-morr; Irish press coverage (Silicon Republic, ThinkBusiness, Irish Tech News) and YC S26 Demo Day September 2026 (Silicon Republic, 2026).

## Defensibility

- **Moat today:** Co-located execution infrastructure for low-latency Polymarket order placement and proprietary backtest dataset of Polymarket history since 2022 (useblueprints.ai, 2026); no network-effect or data-network signals found in public sources.
- **Future moat:** [Inferred]: Strategy marketplace / copy-trading network effects could form if user-created blueprints become shareable, and a feedback loop from live PnL outcomes could improve the "Prince" LLM strategist; unproven because no marketplace or shared-strategy feature is documented today.
- **Market structure:** [Inferred]: Polymarket itself has an open-source agents repo (github.com/Polymarket/agents) and Polymarket runs "Build on Polymarket" developer programs — the platform has not signaled vertical integration into hosted no-code tooling, but nothing structurally prevents it from launching first-party tools or favoring a competitor.
- **Commoditization risk:** Multiple funded and unfunded competitors already exist (Polystrat, TurbineFi, Rainmaker, Simmer, Bankr — QuickNode/Finance Magnates, 2026), plus DIY Etsy-sold Polymarket bot templates and a Polymarket-published open-source agents library on GitHub, indicating low technical barrier to building a basic competitor.

## Market & Traction

- **Traction signals:**
  - $500,000+ trading volume processed and 250+ users in public beta (Silicon Republic, 2026, pre-YC S26).
  - Accepted into Y Combinator Summer 2026 (YC company page).
  - Accepted into NDRC (National Digital Research Centre) accelerator (Silicon Republic, 2026).
  - Alumni of Patch, OpenAI- and Stripe-backed community at Dogpatch Labs (Silicon Republic, 2026).
  - Press: Silicon Republic, Irish Tech News, ThinkBusiness coverage (2026).
  - Pro tier published at $20/mo with 7-day free trial (useblueprints.ai, 2026).
  - Legal entity: Carbon Copy Markets Inc. (useblueprints.ai footer, 2026).
  - No public data found on Twitter, LinkedIn, Discord follower counts, or Product Hunt launch.
- **Competitors:**
  - Polystrat / Olas (Valory raised $13.8M financing + $4M seed): autonomous self-custody AI agent launched Feb 2026; 4,200+ trades in first month, single-trade returns up to 376% (Olas, Feb 2026; Whalesbook, 2026).
  - TurbineFi (funding unknown, revenue unknown): AI algorithmic trading for Kalshi+Polymarket emphasizing "thousands of bots in seconds" (turbinefi.com, 2026).
  - Rainmaker (funding unknown, revenue unknown): AI agent terminal unifying arbitrage, copy-trading, and analytics across Polymarket and Kalshi (Finance Magnates, 2026).
  - Simmer (funding unknown, revenue unknown): "agent harness" for Polymarket+Kalshi with self-improving loops learning from outcomes — closest positional match to Blueprints' "harness" framing (Finance Magnates, 2026).
  - Polymarket/agents (open-source, github.com/Polymarket): first-party SDK enabling DIY autonomous Polymarket trading agents.
- **Why now:** Polymarket monthly volume crossed $10B for the first time in March 2026 and combined prediction-market monthly volume hit ~$24B by April 2026, while unique wallets reached 840K by Feb 2026 — providing the liquidity threshold required to make automated retail strategies economically viable (TRM Labs, 2026; Pew Research, May 2026).

## Founders & Team

- **Ryan Morrissey (Co-Founder & CEO):**
  - Background: Immersive Software Engineering programme at the University of Limerick (left to pursue Blueprints full-time); prior internship at Stripe in San Francisco; previously associated with Induct (1517 Fund Medici grant recipient) (Silicon Republic, 2026; LinkedIn search snippet).
  - Twitter/X: No public account confirmed for this Ryan Morrissey.
  - LinkedIn: "CEO @ Blueprints (YC S26) | 30u30" (ie.linkedin.com/in/ryan-morrissey-834256271, 500+ connections per search snippet); profile not retrievable via WebFetch.
  - GitHub: No public repo confirmed (multiple "ryan-morris*" accounts exist, none verified as this founder).
- **Bence Redmond (Co-Founder & CTO):**
  - Background: Immersive Software Engineering programme at the University of Limerick; prior SDE Intern at Amazon Web Services; personal site bence.red, "building for the web since 2023" (Silicon Republic, 2026; bence.red, 2026).
  - Twitter/X: No public account confirmed (search returned @bencehalpern, a different person).
  - LinkedIn: "SDE Intern - Amazon Web Services (AWS)" (linkedin.com/in/bence-redmond, count not retrievable).
  - GitHub: No public handle confirmed via search.
- **Co-founder relationship:** Both enrolled in the University of Limerick's Immersive Software Engineering programme and built the first version of Blueprints together before leaving the programme; Morrissey recruited Redmond on returning from his Stripe internship (Silicon Republic, 2026).
- **Founder-market fit:** [Inferred]: Morrissey's Stripe internship provides exposure to payments/financial infrastructure relevant to on-chain settlement, and Redmond's AWS engineering background covers the co-located execution stack; neither founder has a documented prior trading, hedge-fund, or market-making credential, so domain expertise in market microstructure is not publicly evidenced (Silicon Republic, 2026).

## Key Risks

- **Platform dependency on Polymarket:** Entire product currently routes orders to Polymarket (useblueprints.ai, 2026); Polymarket publishes an open-source agents library (github.com/Polymarket/agents) and runs a builders program (builders.polymarket.com), creating direct first-party substitution risk if Polymarket launches managed no-code tooling.
- **Crowded automation layer with funded incumbents:** Polystrat (backed by Valory/Olas with $13.8M financing) launched Feb 2026 and reportedly already outperforms 37% of human Polymarket participants on PnL (Whalesbook, 2026); Simmer, TurbineFi, Rainmaker, and Bankr occupy adjacent positions (Finance Magnates, 2026).
- **Retail PnL outcomes are zero-sum vs. faster bots:** Arbitrage bots extracted ~$40M Apr 2024–Apr 2025 on execution speed not predictive accuracy (Yahoo Finance, 2026); Blueprints customers competing against latency-advantaged bots may underperform, damaging retention.
- **Regulatory exposure:** Prediction-market access is jurisdictionally restricted (Kalshi/Polymarket dual U.S./offshore footprint per KuCoin / Pew, 2025–2026); product enabling automated trading on Polymarket inherits CFTC and state-level regulatory uncertainty, with no public compliance disclosure on the Blueprints site.
- **Technical-feasibility / LLM accuracy:** Core "Prince" feature converts natural-language theses into trading code; no public benchmark of strategy-translation accuracy or live-PnL outcomes from Prince-generated strategies has been published (useblueprints.ai, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Polymarket alone $21.5B 2025 notional volume; combined Polymarket+Kalshi ~$24B monthly volume by April 2026 (Pew Research, May 2026; TRM Labs, 2026) |
| SAM | No public data found |
| Traction | $500K+ trading volume processed, 250+ public beta users (Silicon Republic, 2026); YC S26 accepted (YC, 2026); NDRC accepted (Silicon Republic, 2026); Patch alum (Silicon Republic, 2026) |
| Revenue Signal | Pro tier $20/mo with 7-day free trial; Free (2K credits/mo); Teams + Enterprise custom (useblueprints.ai pricing page, 2026) |
| Founders | Ryan Morrissey (CEO): ex-Stripe intern, University of Limerick ISE programme, prior Induct. Bence Redmond (CTO): ex-AWS SDE intern, University of Limerick ISE programme. |
| Competitors | Polystrat/Olas (Valory $13.8M + $4M seed, revenue unknown, autonomous self-custody agent); TurbineFi (funding/revenue unknown, multi-bot deployment); Rainmaker (funding/revenue unknown, arbitrage+copy-trading terminal); Simmer (funding/revenue unknown, self-improving agent harness — closest positional match); Polymarket/agents (open-source, first-party SDK) |
| Moat Signals | Co-located execution infra and Polymarket backtest dataset since 2022 (useblueprints.ai, 2026) |
| Risk Factors | Polymarket platform dependency, crowded funded competition (Polystrat/Olas), regulatory exposure on prediction markets |
| Founder Reach | Ryan Morrissey: Twitter not found, LinkedIn 500+ connections, GitHub not found. Bence Redmond: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | Irish press coverage in Silicon Republic, Irish Tech News, ThinkBusiness (2026); demo bookings via cal.com/ryan-morr (useblueprints.ai); YC S26 Demo Day September 2026 (Silicon Republic, 2026); no Product Hunt launch found |
| Emails | No public data found |

Sources:
- [Blueprints website](https://useblueprints.ai/)
- [YC company page](https://www.ycombinator.com/companies/blueprints)
- [Silicon Republic: Two Irish start-ups accepted into Y Combinator's summer batch](https://www.siliconrepublic.com/start-ups/two-irish-start-ups-accepted-into-y-combinators-summer-batch)
- [Irish Tech News: Four Irish Founders YC S2026](https://irishtechnews.ie/four-irish-founders-accepted-into-y-combinators-summer-2026-batch/)
- [ThinkBusiness: Irish founders YC S26](https://www.thinkbusiness.ie/articles/irish-founders-y-combinator-summer-2026-blueprints-provenmetal/)
- [Ryan Morrissey LinkedIn](https://ie.linkedin.com/in/ryan-morrissey-834256271)
- [Bence Redmond LinkedIn](https://www.linkedin.com/in/bence-redmond/)
- [Bence Redmond personal site](https://bence.red/)
- [Olas: Introducing Polystrat](https://olas.network/blog/introducing-polystrat-an-autonomous-ai-prediction-agent-on-polymarket)
- [Finance Magnates: Prediction Markets Bot Playground](https://www.financemagnates.com/trending/prediction-markets-are-turning-into-a-bot-playground/)
- [Yahoo Finance: Arbitrage bots dominate Polymarket](https://finance.yahoo.com/news/arbitrage-bots-dominate-polymarket-millions-100000888.html)
- [Pew Research: Prediction markets volume](https://www.pewresearch.org/short-reads/2026/05/27/trading-volume-on-prediction-markets-has-soared-in-recent-months/)
- [TRM Labs: Prediction markets $21B monthly volume](https://www.trmlabs.com/resources/blog/how-prediction-markets-scaled-to-usd-21b-in-monthly-volume-in-2026)
- [QuickNode: Top 10 Polymarket Trading Bots](https://www.quicknode.com/builders-guide/best/top-10-polymarket-trading-bots)
- [Polymarket/agents GitHub](https://github.com/Polymarket/agents/)
