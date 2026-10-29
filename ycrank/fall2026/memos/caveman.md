# Caveman

> Caveman cuts what AI agents cost without making them dumber.

| Field | Value |
|-------|-------|
| Website | https://caveman.so |
| YC Page | https://www.ycombinator.com/companies/caveman |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/caveman)) |
| Industry | B2B / B2B |
| Team Size | 1 |
| Location | Amsterdam, NH, Netherlands |
| Tags | Developer Tools, Open Source, Infrastructure, AI |
| YC Partner | Max Kolysh ([YC](https://www.ycombinator.com/companies/caveman)) |
| Emails | contact@caveman.so ([website](https://caveman.so/privacy)); support@caveman.so ([company GitHub](https://github.com/caveman-ai)); juliusbrussee@gmail.com ([founder CV](https://www.juliusbrussee.com/cv-julius-brussee.pdf)) |

## The Idea

- **Problem:** Teams running AI agents repeatedly pay to process context and tool outputs, while uncertainty about cheaper models leads them to retain expensive configurations ([Caveman documentation](https://docs.caveman.so/)).
- **Approach:** Caveman records workloads, proposes optimizations, replays them against evaluations, and stages deployment through shadow testing and canaries with user approval ([Caveman documentation](https://docs.caveman.so/why-caveman)).
- **Differentiation:** Caveman emphasizes optimization proposals with workload-specific evidence, whereas LiteLLM emphasizes a unified gateway and governance, and Edgee combines coding-agent compression, routing, and employee-level attribution ([Caveman](https://docs.caveman.so/why-caveman), [LiteLLM](https://www.litellm.ai/about), [Edgee](https://www.edgee.ai/blog/posts/edgee-has-become-our-governance-layer-for-ai-usage-an-interview-with-qontos-kevin-prettre)).
- **Business Model:** Cloud offers Free, consumption-based Pay-as-you-go, and contracted Enterprise plans without seat charges, plus governance packages at $250/month and $750/month ([billing documentation, accessed Oct 27, 2026](https://docs.caveman.so/governance/billing)).
- **TAM/SAM:** Market.us estimates broader LLM cost optimization at $863.7M with 26.7% forecast CAGR, but inconsistently labels the base year 2024 versus 2025; no Caveman-specific SAM was found ([Market.us, accessed Oct 27, 2026](https://market.us/report/llm-cost-optimization-market/)).
- **GTM / Distribution:** Distribution includes GitHub, Product Hunt, a browser extension, and GreenPT’s API integration, whose referral arrangement pays Caveman a share when referred users become paying customers ([Product Hunt](https://www.producthunt.com/products/caveman), [Caveman, Aug 3, 2026, via search snippet](https://caveman.so/news/caveman-live-on-greenpt)).

## Defensibility

- **Moat today:** The public adoption asset is approximately 115.5K stars on the main repository; stars establish developer attention rather than exclusive technology or customer lock-in ([GitHub, Oct 27, 2026](https://github.com/JuliusBrussee/caveman)).
- **Future moat:** [Inferred]: Customer-specific workload histories and evaluation suites could increase migration effort, although documentation describes the mechanism rather than demonstrated switching costs ([Caveman](https://docs.caveman.so/why-caveman)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, because existing gateways already mediate model traffic and Caveman publishes its core repository under Apache-2.0 ([LiteLLM](https://www.litellm.ai/about), [Caveman GitHub](https://github.com/JuliusBrussee/caveman)).
- **Commoditization risk:** [Inferred]: Gateway providers or customer engineering teams could reproduce overlapping functionality using the published code, although maintaining agent compatibility remains ongoing work ([Caveman GitHub](https://github.com/JuliusBrussee/caveman), [Edgee customer interview, Sep 2026](https://www.edgee.ai/blog/posts/edgee-has-become-our-governance-layer-for-ai-usage-an-interview-with-qontos-kevin-prettre)).

## Market & Traction

- **Traction signals:**
  - Open-source toolkit: approximately 115.5K GitHub stars and 6.7K forks, spanning the original skill and subsequent infrastructure ([GitHub, Oct 27, 2026](https://github.com/JuliusBrussee/caveman)).
  - Earlier browser product, Caveman Mode: 20,000 users and 4.6/5 from 67 ratings ([Chrome Web Store, retrieved Oct 27, 2026](https://chromewebstore.google.com/detail/caveman-mode-%E2%80%94-chatgpt-cl/dljfndmkapffcbcjpabcmclgbppbgfjm?hl=en-US)).
  - Local proxy launch: Product Hunt daily rank #8 and 163 upvotes ([Product Hunt, retrieved Oct 27, 2026](https://www.producthunt.com/products/caveman)).
  - Company LinkedIn: 1,767 followers ([LinkedIn, Oct 27, 2026](https://www.linkedin.com/company/caveman-so/)).
  - Original skill: GreenPT API integration announced August 3, 2026, with production savings explicitly unmeasured ([Caveman, via search snippet](https://caveman.so/news/caveman-live-on-greenpt)).
  - Original skill: coverage on BNR’s *De Grote Tech Show* on May 21, 2026 ([BNR episode listing](https://podcasts.apple.com/nl/podcast/google-ai-ficeert-nu-%C3%A9cht-alles-ook-search-caveman/id667453866?i=1000768861068)).
  - Current product transition: Caveman Cloud and version 4.0 announced October 13, 2026; these launches postdate the original skill’s adoption ([founder announcement, via search snippet](https://teapawt.org/julius_brussee)).
- **Competitors:**
  - **Edgee ($2.9M disclosed raised, revenue unknown):** Agent gateway combining compression, routing, and employee attribution; disclosed pre-seed in October 2024 backed by Serena and VentureFriends ([funding announcement](https://www.edgee.ai/blog/posts/accelerating-funding), [product deployment, Sep 2026](https://www.edgee.ai/blog/posts/edgee-has-become-our-governance-layer-for-ai-usage-an-interview-with-qontos-kevin-prettre)).
  - **Portkey ($18M raised, revenue unknown):** Gateway emphasizing governance and runtime security; last financing was $15M Series A led by Elevation in February 2026, followed by acquisition by Palo Alto Networks in May 2026 ([funding report](https://india.entrepreneur.com/news-and-trends/portkey-raises-usd-15-mn-in-series-a-led-by-elevation/502850), [acquirer announcement](https://www2.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-acquisition-of-portkey-to-secure-ai-agents)).
  - **LiteLLM ($1.6M disclosed seed, revenue unknown):** Self-hosted gateway emphasizing provider compatibility, budgets, and access controls; backers include YC, Gravity Fund, and Pioneer Fund, while seed date and lead investor have no public data found ([company, Oct 2026](https://www.litellm.ai/about)).
- **Why now:** Not Diamond attributes increased inference spending during the preceding six months to adoption of long-running, parallel agent workloads, creating demand for optimization across entire sessions ([Not Diamond, Aug 4, 2026](https://www.notdiamond.ai/blog/not-diamond-code-intelligent-model-routing-for-coding-agents)).

## Founders & Team

- **Julius Brussee (Founder):**
  - Background: Studies Data Science and Artificial Intelligence at Leiden University; his CV lists Stacklink agent infrastructure, Revu Labs, and Locked In, with no documented exit ([founder CV](https://www.juliusbrussee.com/cv-julius-brussee.pdf)).
  - Twitter/X: @julius_brussee; approximately 1.2K followers reported by a mirror, while direct X retrieval failed ([teapawt, Oct 2026, via search snippet](https://teapawt.org/julius_brussee)).
  - LinkedIn: Headline not retrievable; About begins “I’m building Caveman,” with approximately 6K followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/julius-brussee)).
  - GitHub: @JuliusBrussee; main repository `caveman` has approximately 115.5K stars ([GitHub, Oct 27, 2026](https://github.com/JuliusBrussee/caveman)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Documented experience building agent runtimes, retrieval systems, and token-efficiency tooling overlaps Caveman’s product, and YC confirms backing through its Fall 2026 batch ([CV](https://www.juliusbrussee.com/cv-julius-brussee.pdf), [YC](https://www.ycombinator.com/companies/caveman)).

## Key Risks

- **Savings depend on workload:** JetBrains measured 8.5% lower output tokens for the earlier skill, while aggregate billed cost increased 11.6% because of an outlier; Caveman advises comparing provider-billed totals ([JetBrains, Jul 2026](https://blog.jetbrains.com/ai/2026/07/speak-to-ai-agents-like-cavemen-tosave-tokens/), [benchmark notes](https://github.com/JuliusBrussee/caveman/blob/main/docs/HONEST-NUMBERS.md)).
- **Technical fidelity:** [Inferred]: Context filtering can remove relevant evidence; Caveman reports 94% evidence retention with 89% token removal on long-document benchmarks, while deployment gates provide a mitigation ([company LinkedIn, Oct 2026](https://www.linkedin.com/company/caveman-so/), [documentation](https://docs.caveman.so/why-caveman)).
- **Cloud data exposure:** Free-plan routing may retain submitted context to improve routing; disabling routing stops that transmission ([repository privacy disclosure](https://github.com/JuliusBrussee/caveman)).
- **Name ambiguity and source access:** Website not accessible at time of research through direct retrieval, so indexed pages were used; unrelated Caveman accounts require domain-based disambiguation ([company identity](https://www.ycombinator.com/companies/caveman), [unrelated account](https://www.sotwe.com/CavemanPolemos)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader LLM cost optimization: $863.7M, 26.7% CAGR; base year inconsistently 2024/2025 ([Market.us, retrieved Oct 2026](https://market.us/report/llm-cost-optimization-market/)) |
| SAM | No public data found |
| Traction | Toolkit: 115.5K stars ([GitHub, Oct 2026](https://github.com/JuliusBrussee/caveman)); earlier extension: 20,000 users ([Chrome Web Store, Oct 2026](https://chromewebstore.google.com/detail/caveman-mode-%E2%80%94-chatgpt-cl/dljfndmkapffcbcjpabcmclgbppbgfjm?hl=en-US)) |
| Revenue Signal | Free allowances: 100K events, 600 agent minutes, 100K routing decisions monthly; initial overage rates $0.00035/event, $0.012/minute, $0.0001/decision ([Caveman billing, Oct 2026](https://docs.caveman.so/governance/billing)) |
| Founders | Julius Brussee: Leiden Data Science/AI student; Stacklink infrastructure developer; Caveman creator ([CV](https://www.juliusbrussee.com/cv-julius-brussee.pdf)) |
| Competitors | Edgee ($2.9M, revenue unknown, agent gateway; [company](https://www.edgee.ai/blog/posts/accelerating-funding)); Portkey ($18M, revenue unknown, governance; [Entrepreneur](https://india.entrepreneur.com/news-and-trends/portkey-raises-usd-15-mn-in-series-a-led-by-elevation/502850)); LiteLLM ($1.6M disclosed, revenue unknown, self-hosted gateway; [company](https://www.litellm.ai/about)) |
| Moat Signals | 115.5K repository stars; Apache-2.0 code ([GitHub, Oct 2026](https://github.com/JuliusBrussee/caveman)) |
| Risk Factors | Workload-dependent savings ([benchmark notes](https://github.com/JuliusBrussee/caveman/blob/main/docs/HONEST-NUMBERS.md)); context-retention errors ([company LinkedIn](https://www.linkedin.com/company/caveman-so/)) |
| Founder Reach | Julius: X approximately 1.2K ([mirror, via search snippet](https://teapawt.org/julius_brussee)); LinkedIn approximately 6K ([LinkedIn, via search snippet](https://www.linkedin.com/in/julius-brussee)); Caveman repository 115.5K stars ([GitHub, Oct 2026](https://github.com/JuliusBrussee/caveman)) |
| Distribution Signals | Product Hunt #8 daily ([Product Hunt, retrieved Oct 2026](https://www.producthunt.com/products/caveman)); GreenPT integration ([Caveman, Aug 2026, via search snippet](https://caveman.so/news/caveman-live-on-greenpt)) |
| Emails | contact@caveman.so ([website](https://caveman.so/privacy)); support@caveman.so ([company GitHub](https://github.com/caveman-ai)); juliusbrussee@gmail.com ([CV](https://www.juliusbrussee.com/cv-julius-brussee.pdf)) |
