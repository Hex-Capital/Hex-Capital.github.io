# RentAHuman

> Marketplace for AI agents to hire humans.

| Field | Value |
|-------|-------|
| Website | https://rentahuman.ai |
| YC Page | https://www.ycombinator.com/companies/rentahuman |
| Batch | Spring 2026 |
| Industry | Consumer / Consumer -> Job and Career Services |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Marketplace |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

- **Problem:** AI agents (Claude, GPT-class assistants) can transact online but cannot physically perform real-world tasks such as deliveries, in-person verification, package pickup, or document signing (Built In, 2026; Gizmodo, 2026).
- **Approach:** A two-sided marketplace where humans ("meatworkers") list skills, location, and hourly rates, and AI agents discover and hire them via an MCP server, REST API, with stablecoin escrow payments released on proof-of-completion (rentahuman.ai/mcp; Inc., 2026).
- **Differentiation:** TaskRabbit (IKEA-owned) assumes a human client and focuses on domestic tasks; Mechanical Turk/Surge AI/Scale AI target digital data labeling rather than physical-world tasks; MeatLayer is the closest direct competitor positioning as "the layer AI needs to get things done in the real world" (TechRadar, 2026; Prolific blog, 2026).
- **Business Model:** Platform takes a 15-20% commission deducted from worker payments after task verification; reported worker rates of $50-$175/hr paid in stablecoins held in escrow (aigearbase.com review, 2026; blockchain-council.org, 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment (AI-agent-to-human task marketplaces are a newly emerging category).
- **GTM / Distribution:** Founder-led viral launch on social media in February 2026 driving press coverage in WIRED, Forbes, Business Insider, Futurism, Gizmodo, Inc. (Inc., 2026; Futurism, 2026; The Information on X, 2026); MCP-server distribution to plug directly into Claude and other agent runtimes (rentahuman.ai/mcp).

## Defensibility

- **Moat today:** Two-sided liquidity — 500k user signups and $20k MRR within 2 weeks of launch, growing to 700k+ signups and a reported "530k humans available" by spring 2026 (DNYUZ, Feb 2026; Crunchbase; TheOutpost.ai, 2026).
- **Future moat:** [Inferred]: Network effects from worker supply density and a verification/reputation graph could become defensible if the company accumulates a proprietary corpus of completed-task outcomes; unproven because there is no public data on retention or repeat-hire rates.
- **Market structure:** [Inferred]: TaskRabbit's product, matching algorithm, and reputation system are built around a human requester UX and IKEA's home-services strategy, creating channel/UX conflict that disincentivizes pivoting to serve AI-agent buyers (TechRadar quoting MeatLayer founder, 2026).
- **Commoditization risk:** MeatLayer is building the same concept (TechRadar, 2026); the technical stack (MCP server + escrow + listings) is replicable, so defensibility depends on supply density and brand rather than IP.

## Market & Traction

- **Traction signals:**
  - 500k users and $20k MRR within 2 weeks of launch (DNYUZ, Feb 2026; multiple press).
  - 700k+ signups to receive jobs from AI (letsdatascience.com, 2026).
  - "4 million visits" and "over a half million users" (search snippet, Feb 2026).
  - Reported 377,000 workers signed up (TheOutpost.ai, 2026).
  - Mobile app live on Google Play (play.google.com/store/apps/details?id=com.cbstudio.rentahuman); install count not retrievable.
  - Press: WIRED, Forbes, Business Insider, Futurism, Gizmodo, Inc., The Information, Built In, TechRadar, spiked, 36Kr; "30+ publications" (DNYUZ, Feb 2026).
  - Featured on Product Hunt (producthunt.com/products/rentahuman-ai, 2026).
  - LinkedIn company page exists (linkedin.com/company/rentahuman-ai); follower count not retrievable.
  - Twitter/X follower count not retrievable.
- **Competitors:**
  - MeatLayer (funding unknown, revenue unknown): direct competitor explicitly positioning as "marketplace where AI hires humans" (TechRadar, 2026).
  - TaskRabbit (acquired by IKEA 2017, revenue undisclosed since acquisition): adjacent — human-to-human local task marketplace, not AI-agent-native (G2, 2026).
  - Amazon Mechanical Turk (Amazon subsidiary, revenue unknown): adjacent — digital microtasks, not physical-world (G2, 2026).
  - Surge AI ($1.2B 2024 revenue, undisclosed funding/bootstrapped): adjacent — RLHF/data-labeling vendor to AI labs, not agent-initiated hiring (Gun.io, Dec 2025).
  - Scale AI ($870M 2024 revenue, $13.8B valuation): adjacent — enterprise data labeling (Gun.io, Dec 2025).
- **Why now:** Launch of Anthropic's Model Context Protocol in late 2024 and broad adoption by agent frameworks in 2025-2026 created a standard plug-in surface that lets agents discover and call external services like a human-task marketplace (rentahuman.ai/mcp); [Inferred]: stablecoin rails and agent-initiated payments became sufficiently mature in 2025-2026 to enable autonomous AI payment to humans.

## Founders & Team

- **Alexander Liteplo (Founder):**
  - Background: Computer Science, University of British Columbia; previously Software Engineer at LayerZero Labs and crypto engineer at UMA Protocol (futurism.com, 2026; DNYUZ, Feb 2026); cites a Japan trip observing human-rental services as inspiration (search snippet).
  - Twitter/X: handle not confirmed in research; count not retrievable.
  - LinkedIn: No public profile directly indexed under his name in search results (count not retrievable).
  - GitHub: No public repos found.
- **Patricia Tani (Co-Founder):**
  - Background: Studied at University of British Columbia and Emily Carr University of Art and Design (art student); previously "Chief Builder and Yapper" at Lemon AI (sunsetted); declined a Vercel offer to join RentAHuman (Crunchbase person profile; DNYUZ, Feb 2026).
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found in search results.
  - GitHub: No public repos found.
- **Third team member:** YC lists team size of 3 (ycombinator.com/companies/rentahuman); only Liteplo and Tani are identified in public coverage — third member not publicly identified.
- **Co-founder relationship:** Liteplo and Tani met as students at the University of British Columbia (DNYUZ, Feb 2026; futurism.com, 2026).
- **Founder-market fit:** Liteplo's prior roles at LayerZero Labs and UMA Protocol provide direct expertise in stablecoin/escrow rails that underpin the platform's payment layer (Crunchbase; futurism.com, 2026); Tani's prior Lemon AI work provides AI-agent product context (Crunchbase).

## Key Risks

- **Direct competitor with same thesis:** MeatLayer is publicly building "a marketplace where AI hires humans to do jobs" with identical positioning (TechRadar, 2026); no mitigation visible in public sources beyond RentAHuman's first-mover supply lead.
- **Regulatory and safety exposure of AI dispatching humans to physical tasks:** Coverage in spiked, Futurism, and 36Kr raises dystopia/safety framings, and one published critique ("RentAHuman Inflection Exposes Agent Economy Gap Between Hype and Execution," The Meridiem, Feb 2026) flags execution gaps; potential liability if an AI-dispatched task harms workers or third parties; no public T&Cs or insurance scheme found.
- **Brand/imposter confusion with a "RENT" cryptocurrency token:** A "rentahuman (RENT) Coin" is listed on WEEX/Bitget exchanges, and a 36Kr article asks whether "Rentahuman" is a crypto scam (36Kr, 2026); risk of association damage even though the YC company itself uses stablecoins, not its own token. No public denial or clarification by the company found.
- **Quality and verification risk:** Platform relies on worker-submitted proof of completion to release stablecoin escrow (blockchain-council.org, 2026); [Inferred]: fraud vectors (fake proofs, identity fraud) are inherent to anonymous on-chain payouts and could erode agent-buyer trust if not solved.
- **Monetization durability:** Reported $20k MRR within 2 weeks (DNYUZ, Feb 2026) is based on a 15-20% take rate on early gigs; [Inferred]: retention and repeat-hire dynamics for AI-initiated work are unproven and not disclosed in public sources.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 500k users + $20k MRR in 2 weeks (DNYUZ, Feb 2026); 700k+ signups (letsdatascience.com, 2026); 377k workers (TheOutpost.ai, 2026); ~4M site visits (search snippet, Feb 2026); Google Play app live; Product Hunt feature (2026); press in WIRED, Forbes, Business Insider, Futurism, Gizmodo, Inc., The Information, Built In (Feb 2026) |
| Revenue Signal | 15-20% platform commission on worker payments; reported worker rates $50-$175/hr in stablecoins (aigearbase.com, 2026; blockchain-council.org, 2026); $20k MRR within 2 weeks of launch (DNYUZ, Feb 2026) |
| Founders | Alexander Liteplo (Founder): ex-LayerZero Labs, ex-UMA Protocol, UBC CS. Patricia Tani (Co-Founder): ex-Lemon AI, UBC/Emily Carr, declined Vercel offer. Third team member not publicly identified. |
| Competitors | MeatLayer (funding unknown, revenue unknown, direct AI-hires-humans marketplace); TaskRabbit (IKEA-owned, revenue unknown, human-to-human local tasks); Amazon Mechanical Turk (Amazon, revenue unknown, digital microtasks); Surge AI ($1.2B 2024 revenue, bootstrapped, AI data labeling); Scale AI ($870M 2024 revenue, $13.8B valuation, enterprise labeling) |
| Moat Signals | 500k+ user signups in 2 weeks (DNYUZ, Feb 2026); MCP-server integration into agent runtimes (rentahuman.ai/mcp); stablecoin escrow payment rail (blockchain-council.org, 2026) |
| Risk Factors | MeatLayer direct competition; regulatory/safety exposure of AI dispatching humans; brand confusion with "RENT" token and scam allegations |
| Founder Reach | Alexander Liteplo: Twitter count not retrievable, LinkedIn not retrievable, GitHub not found. Patricia Tani: Twitter not found, LinkedIn not found, GitHub not found. |
| Distribution Signals | Press in WIRED/Forbes/Business Insider/Futurism/Gizmodo/Inc./The Information/Built In (Feb 2026); Product Hunt feature (2026); Google Play app live; LinkedIn company page exists (follower count not retrievable); MCP-server distribution (rentahuman.ai/mcp) |
| Emails | No public data found |

Sources:
- [RentAHuman | Y Combinator](https://www.ycombinator.com/companies/rentahuman)
- [rentahuman.ai](https://rentahuman.ai/)
- [Man Letting AI Rent Human Bodies Says Elon Musk Is His Hero | Futurism](https://futurism.com/artificial-intelligence/rentahuman-musk-ai)
- [How Two Zoomers Created RentAHuman | DNYUZ](https://dnyuz.com/2026/02/18/how-two-zoomers-created-rentahuman-the-first-marketplace-for-bots-to-hire-humans/)
- [Alexander Liteplo | Crunchbase](https://www.crunchbase.com/person/alexander-liteplo)
- [Patricia Tani | Crunchbase](https://www.crunchbase.com/person/patricia-tani-fabe)
- [RentAHuman.ai | Crunchbase](https://www.crunchbase.com/organization/rentahuman-ai)
- [What Is RentAHuman? | Built In](https://builtin.com/articles/what-is-rentahuman)
- [Rent-a-Human Site Lets AI Agents Hire an IRL Set of Opposable Thumbs | Gizmodo](https://gizmodo.com/rent-a-human-site-lets-ai-agents-hire-an-irl-set-of-opposable-thumbs-2000717958)
- [It Seems AI Agents Can Now Rent Human Bodies | Inc.](https://www.inc.com/maria-jose-gutierrez-chavez/it-seems-ai-agents-can-now-rent-human-bodies/91298692)
- [MeatLayer | TechRadar](https://www.techradar.com/pro/were-the-layer-that-ai-needs-to-get-things-done-in-the-real-world-meatlayer-is-building-a-marketplace-where-ai-hires-humans-to-do-jobs)
- [RentAHuman Inflection | The Meridiem](https://www.themeridiem.com/ai/2026/2/12/rentahuman-inflection-exposes-agent-economy-gap-between-hype-and-execution)
- [RentAHuman.ai Review 2026 | aigearbase](https://aigearbase.com/tool/rentahumanai)
- [Rent a Human | Blockchain Council](https://www.blockchain-council.org/ai/rent-a-human/)
- [RentAHuman | Product Hunt](https://www.producthunt.com/products/rentahuman-ai)
- [RentAHuman | LinkedIn](https://www.linkedin.com/company/rentahuman-ai)
- [RentAHuman | Google Play](https://play.google.com/store/apps/details?id=com.cbstudio.rentahuman)
- [TheOutpost.ai coverage](https://theoutpost.ai/news-story/rent-a-human-flooded-with-377-000-desperate-workers-as-ai-agents-hire-humans-for-gig-work-23745/)
- [Scale AI alternatives | Gun.io](https://gun.io/news/2025/12/scale-ai-alternatives-for-enterprise-ai-teams/)
- [spiked coverage](https://www.spiked-online.com/2026/02/19/rentahuman-are-we-really-descending-into-ai-dystopia/)
