# Terse

> Durable state for AI agents

| Field | Value |
|-------|-------|
| Website | https://www.useterse.ai/ |
| YC Page | https://www.ycombinator.com/companies/useterse |
| Batch | Fall 2026 ([YC profile](https://www.ycombinator.com/companies/useterse)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | New York City, NY, USA |
| Tags | API, Infrastructure, AI |
| YC Partner | Aaron Epstein ([YC profile](https://www.ycombinator.com/companies/useterse)) |
| Emails | founders@useterse.ai ([website](https://www.useterse.ai/)); support@useterse.ai ([Terms](https://www.useterse.ai/terms)); privacy@useterse.ai ([Privacy Policy](https://www.useterse.ai/privacy)) |

## The Idea

- **Problem:** Developers building multiplayer agents need persistent state and coordinated concurrent access; Terse identifies centralized databases, WebSocket servers, and Cloudflare Durable Objects as existing approaches ([Terse website](https://www.useterse.ai/), accessed Oct 27, 2026).
- **Approach:** Each named actor handles requests serially, owns SQLite storage, and exposes generated clients and WebSocket connections through an MIT-licensed, self-hostable runtime ([GitHub README](https://github.com/TerseAI/durable-actors), Oct 2026).
- **Differentiation:** Terse offers self-hosting versus Cloudflare’s managed platform, and actor classes with decorated persisted fields versus Rivet’s state-and-actions API ([Cloudflare comparison](https://www.useterse.ai/blog/terse-vs-cloudflare-durable-objects), [Rivet comparison](https://www.useterse.ai/blog/terse-vs-rivet-actors), Oct 17, 2026).
- **Business Model:** [Inferred]: Hosting or support could monetize the self-hostable runtime, but current pricing tiers and company revenue could not be verified from public sources.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Public distribution uses GitHub, a counter demo, technical comparison articles, and a founder-authored Show HN launch ([website](https://www.useterse.ai/), [Hacker News](https://news.ycombinator.com/item?id=49980399), accessed Oct 27, 2026).

## Defensibility

- **Moat today:** Public technical assets include the runtime and generated Python/TypeScript clients, but these are MIT-licensed rather than exclusively controlled implementations ([GitHub](https://github.com/TerseAI/durable-actors), Oct 2026).
- **Future moat:** [Inferred]: Applications embedding actor identities, persisted state, and generated clients could accumulate migration costs, although customer retention and migration evidence are not public.
- **Market structure:** [Inferred]: No structural barrier is identified at this stage because Cloudflare and Rivet already offer overlapping stateful actor primitives.
- **Commoditization risk:** Rivet supplies open-source actors and Cloudflare supplies managed Durable Objects, while Terse’s MIT license permits reuse of its implementation ([Rivet](https://rivet.dev/), [Cloudflare documentation](https://developers.cloudflare.com/durable-objects/), [Terse GitHub](https://github.com/TerseAI/durable-actors)).

## Market & Traction

- **Traction signals:**
  - Durable Actors: 256 GitHub stars and 19 forks ([GitHub](https://github.com/TerseAI/durable-actors), observed Oct 27, 2026).
  - Show HN launch: 53 points and 25 comments ([Hacker News](https://news.ycombinator.com/item?id=49980399), observed Oct 27, 2026).
  - Company LinkedIn: 67 followers ([LinkedIn](https://www.linkedin.com/company/terse-inc), observed Oct 27, 2026).
  - Company X account @IncTerse: 113 followers reported by a profile mirror ([Sotwe](https://www.sotwe.com/IncTerse?lang=id), via search snippet, retrieved Oct 27, 2026).
  - Investors named: Articulate and Y Combinator; company-specific investment amounts were not disclosed ([Terse website](https://www.useterse.ai/), accessed Oct 27, 2026).
  - Active YC job postings: 0 ([YC profile](https://www.ycombinator.com/companies/useterse), accessed Oct 27, 2026).
- **Product history:** LinkedIn retains an earlier code-first workflow-platform description, while company articles describe Durable Actors by October 17, 2026; the exact transition date is undisclosed ([LinkedIn](https://www.linkedin.com/company/terse-inc), [Terse blog](https://www.useterse.ai/blog/terse-vs-cloudflare-durable-objects)).
- **Competitors:**
  - **Cloudflare Durable Objects ($332.2M historical disclosed funding; $2,167.9M company-wide FY2025 revenue):** Managed compute/storage versus Terse’s self-hostable runtime; its last private round was $150M Series E in March 2019, backed by Franklin Resources ([aVenture](https://aventure.vc/companies/cloudflare-san-francisco-ca-us/fundraising), [Cloudflare results](https://www.cloudflare.com/press/press-releases/2026/cloudflare-announces-fourth-quarter-and-fiscal-year-2025-financial-results/), [product documentation](https://developers.cloudflare.com/durable-objects/)).
  - **Rivet ($0.5M reported raised; revenue unknown):** Offers managed and self-hosted actors with a state-and-actions API; CB Insights records a $0.5M YC convertible note dated January 2023 ([CB Insights](https://www.cbinsights.com/company/rivet/financials), [Terse comparison](https://www.useterse.ai/blog/terse-vs-rivet-actors)).
  - **Restate ($27M across disclosed rounds; revenue unknown):** Provides durable execution and keyed Virtual Objects; disclosed rounds comprise $7M seed and $20M Series A led by Singular on September 30, 2026 ([seed announcement](https://restate.dev/blog/announcing-restate-1.0-restate-cloud-and-our-seed-funding-round), [Series A announcement](https://restate.dev/blog/announcing-series-a)).
- **Why now:** Restate’s founder attributes increased durability requirements to AI agents making long-running asynchronous programs mainstream, including tool calls, retries, callbacks, and human approvals ([Stephan Ewen, Restate](https://restate.dev/blog/announcing-series-a), Sep 30, 2026).

## Founders & Team

- **Thomas Elias Karatzas (Founder/CEO):**
  - Background: McGill software-engineering graduate; previously spent seven years at Apple working on Siri and Apple Intelligence, and founded Know Your VC, acquired by RateMyInvestor ([YC profile](https://www.ycombinator.com/companies/useterse)).
  - Twitter/X: @karatzas_thomas; approximately 1.5K followers reported by a mirror ([teapawt](https://teapawt.org/karatzas_thomas), via search snippet, retrieved Oct 27, 2026).
  - LinkedIn: Profile lists Terse Inc; headline not retrievable; 1K followers ([LinkedIn](https://www.linkedin.com/in/thomas-karatzas-a3015a94), via search snippet, retrieved Oct 27, 2026).
  - GitHub: @tekaratzas; RustGPT, a Rust implementation of a transformer-based language model, displays 3.2K stars ([GitHub](https://github.com/tekaratzas/RustGPT), observed Oct 27, 2026).
- **Olivier Simard-Morissette (Founder/CTO):**
  - Background: Attended McGill University during 2013–2018; previously principal software engineer at Pigeon and senior software engineer at Squarespace and The New York Times ([LinkedIn](https://www.linkedin.com/in/olism), via search snippet; [YC profile](https://www.ycombinator.com/companies/useterse)).
  - Twitter/X: @oliviersm199, linked from his own LinkedIn post; count not retrievable ([LinkedIn post](https://www.linkedin.com/posts/olism_we-built-this-context-engine-with-terse-and-activity-7497752337873276929-OvXs)).
  - LinkedIn: Profile lists Terse Inc; headline not retrievable; 876 followers ([LinkedIn](https://www.linkedin.com/in/olism), via search snippet, retrieved Oct 27, 2026).
  - GitHub: @oliviersm199; pins TerseAI/durable-actors with 256 stars and publishes project releases ([profile](https://github.com/oliviersm199), [releases](https://github.com/TerseAI/durable-actors/releases), Oct 2026).
- **Co-founder relationship:** Both attended McGill University; no public account of how they met was found ([Thomas’s résumé](https://s3.us-east-2.amazonaws.com/thomaskaratzasresume/Resume_February_2018.pdf), [Olivier’s LinkedIn](https://www.linkedin.com/in/olism), via search snippet).
- **Founder-market fit:** [Inferred]: Their documented assistant and backend engineering experience relates to agent infrastructure; the company names Articulate and YC as investors ([YC](https://www.ycombinator.com/companies/useterse), [website](https://www.useterse.ai/)).

## Key Risks

- **Message delivery:** Release 0.12.3 states that socket messages can arrive out of order and a send immediately followed by close can be dropped, creating application-level delivery risks ([release notes](https://github.com/TerseAI/durable-actors/releases), Oct 26, 2026).
- **Persistence semantics:** Nested object/array mutations are not persisted automatically, and introducing interleaving changes rollback behavior, requiring developers to follow the documented state-update rules ([TypeScript guide](https://github.com/TerseAI/durable-actors/blob/main/docs/reference/typescript-guide.md)).
- **Substitution:** Cloudflare and Rivet already provide actor storage and realtime capabilities, reducing exclusivity of the underlying primitive; Terse differentiates through deployment and programming semantics ([Cloudflare documentation](https://developers.cloudflare.com/durable-objects/), [Terse comparison](https://www.useterse.ai/blog/terse-vs-rivet-actors)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 256 stars, 19 forks ([GitHub](https://github.com/TerseAI/durable-actors), Oct 27, 2026); 53 points, 25 comments ([Hacker News](https://news.ycombinator.com/item?id=49980399), Oct 27, 2026) |
| Revenue Signal | No public data found |
| Founders | Thomas Elias Karatzas, CEO: Apple Siri/Apple Intelligence, McGill, prior acquisition; Olivier Simard-Morissette, CTO: Pigeon, Squarespace, NYT ([YC](https://www.ycombinator.com/companies/useterse)) |
| Competitors | Cloudflare: $332.2M historical funding, managed runtime ([aVenture](https://aventure.vc/companies/cloudflare-san-francisco-ca-us/fundraising)); Rivet: $0.5M reported, revenue unknown, state/actions API ([CB Insights](https://www.cbinsights.com/company/rivet/financials), [comparison](https://www.useterse.ai/blog/terse-vs-rivet-actors)); Restate: $27M disclosed rounds, revenue unknown, durable execution ([seed](https://restate.dev/blog/announcing-restate-1.0-restate-cloud-and-our-seed-funding-round), [Series A](https://restate.dev/blog/announcing-series-a)) |
| Moat Signals | Published runtime, generated clients, MIT license ([GitHub](https://github.com/TerseAI/durable-actors)) |
| Risk Factors | Socket ordering/delivery limitations ([releases](https://github.com/TerseAI/durable-actors/releases)); persistence/interleaving requirements ([guide](https://github.com/TerseAI/durable-actors/blob/main/docs/reference/typescript-guide.md)) |
| Founder Reach | Thomas: LinkedIn 1K followers ([LinkedIn](https://www.linkedin.com/in/thomas-karatzas-a3015a94), via search snippet), RustGPT 3.2K stars ([GitHub](https://github.com/tekaratzas/RustGPT)); Olivier: LinkedIn 876 followers ([LinkedIn](https://www.linkedin.com/in/olism), via search snippet; retrieved Oct 27, 2026) |
| Distribution Signals | GitHub repository and public demo ([website](https://www.useterse.ai/)); Show HN launch ([Hacker News](https://news.ycombinator.com/item?id=49980399)); LinkedIn 67 followers ([LinkedIn](https://www.linkedin.com/company/terse-inc), Oct 27, 2026) |
| Emails | founders@useterse.ai ([website](https://www.useterse.ai/)), support@useterse.ai ([Terms](https://www.useterse.ai/terms)), privacy@useterse.ai ([Privacy Policy](https://www.useterse.ai/privacy)) |
