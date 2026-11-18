# Terse

> Durable state for AI agents

| Field | Value |
|-------|-------|
| Website | https://www.useterse.ai/ |
| YC Page | https://www.ycombinator.com/companies/useterse |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/useterse)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | New York City, NY, USA |
| Tags | API, Infrastructure, AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/useterse)) |
| Emails | founders@useterse.ai, shared founder inbox ([Terse website](https://www.useterse.ai/)), support@useterse.ai, service support ([Terse terms](https://www.useterse.ai/terms)), privacy@useterse.ai, privacy requests ([Terse privacy policy](https://www.useterse.ai/privacy)) |

## The Idea

- **Problem:** Teams building collaborative AI apps have to coordinate concurrent writes and live updates, and Karatzas reports that stale PostgreSQL reads caused agents working on a shared CSV to duplicate work ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WbG-durable-actors-the-perfect-primitive-for-multiplayer-ai-and-agent-coordination)).
- **Approach:** Each Durable Actor has its own SQLite database and WebSocket server, serializes calls by default, and can go dormant while retaining state ([Terse website](https://www.useterse.ai/), [Durable Actors GitHub](https://github.com/TerseAI/durable-actors)).
- **Differentiation:** Terse supports self-hosting where Cloudflare Durable Objects runs on Workers, and commits persisted fields and SQLite writes together on successful calls by default where Rivet throttles automatic state saves and offers an explicit immediate save ([Terse vs. Cloudflare](https://www.useterse.ai/blog/terse-vs-cloudflare-durable-objects), [Terse vs. Rivet](https://www.useterse.ai/blog/terse-vs-rivet-actors)).
- **Business Model:** The MIT-licensed runtime is available for self-hosting, and Terse Cloud bills requested resources by the second at $0.00001971 per CPU-second and $0.00000667 per GiB-second of RAM ([Durable Actors GitHub](https://github.com/TerseAI/durable-actors), [Terse pricing, Nov 2026](https://www.useterse.ai/pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment
- **GTM / Distribution:** Terse distributes Durable Actors through GitHub, a CLI quickstart, Launch YC, Product Hunt, and the Haunted Hacks developer event it co-hosted with Agent Relay ([Terse quickstart](https://docs.useterse.ai/quickstart), [Launch YC](https://www.ycombinator.com/launches/WbG-durable-actors-the-perfect-primitive-for-multiplayer-ai-and-agent-coordination), [Product Hunt](https://www.producthunt.com/products/terse-durable-actors), [YC Haunted Hacks](https://events.ycombinator.com/haunted-hacks-2026)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Applications that embed Terse’s typed client and actor-specific state could incur migration work as usage grows, with no public evidence of retention or switching costs ([Terse website](https://www.useterse.ai/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Rivet already offers self-hosted actors with per-actor SQLite and WebSockets, and Cloudflare bundles those capabilities into its Workers platform ([Rivet](https://rivet.dev/), [Cloudflare Durable Objects documentation](https://developers.cloudflare.com/durable-objects/)).

## Market & Traction

- **Traction signals:**
  - Earlier product, Terse’s TypeScript workflow builder, was in early access by mid-2026, followed by the Durable Actors Launch YC announcement in October and the hosted Terse Cloud announcement on November 3 ([Karatzas LinkedIn, via search snippet](https://www.linkedin.com/in/thomas-karatzas-a3015a94), [Terse workflow tooling, Jul 2026](https://www.skills.sh/terseai/terse/terse-self-host), [Launch YC, Oct 2026](https://www.ycombinator.com/launches/WbG-durable-actors-the-perfect-primitive-for-multiplayer-ai-and-agent-coordination), [Karatzas on X, mirrored, Nov 3, 2026](https://teapawt.org/karatzas_thomas)).
  - Karatzas reported 1.4M requests processed on November 1 and a 60.1% reduction in cold-start latency, measured through code loading, SQLite loading, and a stateful read ([Karatzas on X, mirrored, Nov 2, 2026](https://teapawt.org/karatzas_thomas/status/2117370986567962940)).
  - Munito Sandboxes used Terse to coordinate 32,752 VM launches in a pixel-art demo, according to Terse’s CTO ([Simard-Morissette on X, mirrored, Nov 5, 2026](https://teapawt.org/oliviersm199/status/2118366278188777752), [Munito demo](https://www.youtube.com/watch?v=SMX05lhj4wg)).
  - Doop creator Kevin Goedecke reported a migration to Durable Actors in progress ([Goedecke on X, mirrored, Nov 2026, via search snippet](https://www.teapawt.org/kgoedecke)).
  - Durable Actors had 366 GitHub stars ([GitHub, Nov 2026](https://github.com/TerseAI/durable-actors)).
  - Product Hunt daily rank #23, 78 launch points, and 49 product followers ([Product Hunt, Nov 2026](https://www.producthunt.com/products/terse-durable-actors?launch=terse-durable-actors)).
  - Show HN post with 53 points and 25 comments ([Hacker News, Nov 2026 snapshot](https://news.ycombinator.com/item?id=49980399)).
  - Company LinkedIn had 152 followers, and @IncTerse had 147 X followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/terse-inc), [X profile mirror, Nov 2026](https://teapawt.org/IncTerse)).
  - Zero open roles on YC Jobs ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/useterse/jobs)).
  - Launch coverage in Reveneau and Founderland ([Reveneau, Oct 2026](https://reveneau.com/ainews/terse-yc-fall-2026-durable-objects-open-source-alternative), [Founderland, Nov 2026](https://www.founderland.ai/articles/terse-launches-durable-actors-to-give-ai-agents-shared-memor-mw8e2apf)).
  - CB Insights lists a $500K YC financing dated October 1 and names Articulate as another investor ([CB Insights, Oct 2026](https://www.cbinsights.com/company/terse/financials), [YC batch listing](https://www.ycombinator.com/companies/useterse)).
- **Competitors (minimum 3, up to 5):**
  - **Cloudflare Durable Objects** ($2.5B in convertible notes issued Aug 2026, $782.5M company-wide Q3 2026 revenue, Durable Objects revenue unknown): stateful objects integrated into Workers ([Cloudflare 8-K](https://www.sec.gov/Archives/edgar/data/1477333/000095010326012340/dp251721_8k.htm), [Cloudflare Q3 results](https://www.sec.gov/Archives/edgar/data/1477333/000147733326000060/q326exhibit991.htm), [Cloudflare documentation](https://developers.cloudflare.com/durable-objects/)).
  - **Rivet Actors** (funding amount and revenue unknown, YC-led pre-seed listed): state-and-actions API with managed, bring-your-own-cloud, and self-hosted deployment options ([Crunchbase](https://www.crunchbase.com/funding_round/rivet-d09f-pre-seed--b100e6c7), [Rivet](https://rivet.dev/), [Terse comparison](https://www.useterse.ai/blog/terse-vs-rivet-actors)).
  - **Restate** ($27M raised, including a $20M Series A led by Singular in Sep 2026, revenue unknown): journals execution so interrupted workflows can resume ([Restate funding announcement](https://restate.dev/blog/announcing-series-a), [Restate press release](https://www.streetinsider.com/Business%2BWire/Restate%2BRaises%2B%2420M%2BSeries%2BA%2Bto%2BDefine%2Bthe%2BInfrastructure%2BLayer%2Bfor%2BAI%2BAgents%2Band%2BWorkflows/27126702.html)).
- **Why now:** [Inferred]: The September 2026 release of OpenAI’s Agents API with parallel subagents makes coordinating concurrent work and shared state an application infrastructure problem for more developers ([OpenAI, Sep 2026](https://openai.com/index/introducing-the-agents-api/), [Launch YC, Oct 2026](https://www.ycombinator.com/launches/WbG-durable-actors-the-perfect-primitive-for-multiplayer-ai-and-agent-coordination)).

## Founders & Team

- **Thomas Elias Karatzas (Founder/CEO):**
  - **Background:** McGill software engineering graduate, seven years at Apple working on Siri and Apple Intelligence, and founder of Know Your VC, acquired by RateMyInvestor ([Y Combinator](https://www.ycombinator.com/companies/useterse)); direct business email — No public data found.
  - **Twitter/X:** @karatzas_thomas, 1.7K followers ([X profile mirror, Nov 2026](https://teapawt.org/karatzas_thomas)).
  - **LinkedIn:** Public headline unavailable, 1K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/thomas-karatzas-a3015a94)).
  - **GitHub:** @tekaratzas, RustGPT with 3.2K stars ([GitHub, Nov 2026](https://github.com/tekaratzas)).
- **Olivier Simard-Morissette (Founder/CTO):**
  - **Background:** Attended McGill, was principal software engineer at Pigeon, and worked on data pipelines at Squarespace and The New York Times ([Y Combinator](https://www.ycombinator.com/companies/useterse)); direct business email — No public data found.
  - **Twitter/X:** @oliviersm199, 205 followers ([X profile mirror, Nov 2026](https://teapawt.org/oliviersm199)).
  - **LinkedIn:** Public headline unavailable, 876 followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/olism)).
  - **GitHub:** @oliviersm199, pinned TerseAI/durable-actors with 366 stars ([GitHub, Nov 2026](https://github.com/oliviersm199)).
- **Co-founder relationship:** The founders met at McGill, won hackathons together, and report that a shared pre-Terse project reached 15K monthly active users ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WbG-durable-actors-the-perfect-primitive-for-multiplayer-ai-and-agent-coordination)).
- **Founder-market fit:** Karatzas worked on Apple’s assistant infrastructure and describes using Swift actors there, while Simard-Morissette led data pipeline work at Squarespace and The New York Times ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WbG-durable-actors-the-perfect-primitive-for-multiplayer-ai-and-agent-coordination)).

## Key Risks

- **Incumbent substitution:** Cloudflare already provides persistent state and WebSockets inside Workers, while Terse offers self-hosting for teams that need deployment control ([Cloudflare documentation](https://developers.cloudflare.com/durable-objects/), [Terse comparison](https://www.useterse.ai/blog/terse-vs-cloudflare-durable-objects)).
- **Per-actor queueing:** Calls to the same actor run serially by default, so a slow operation can delay other callers, while Terse’s `@Interleave` option allows other calls to proceed during an asynchronous wait ([Durable Actors GitHub](https://github.com/TerseAI/durable-actors)).
- **External side effects:** Actor-local rollback cannot undo a payment or email already sent, and Terse documents using idempotency keys and application-level reconciliation for ambiguous outcomes ([Terse persistence comparison](https://www.useterse.ai/blog/terse-vs-rivet-actors)).
- **Name collision:** [Inferred]: Searches for Terse can surface a separate desktop wallpaper product at terseai.org, creating a risk of misattributing reviews or downloads ([terseai.org](https://www.terseai.org/), [Terse company website](https://www.useterse.ai/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 1.4M requests on Nov 1 ([Karatzas on X, mirrored, Nov 2026](https://teapawt.org/karatzas_thomas/status/2117370986567962940)), 32,752 VMs coordinated in Munito’s demo ([Simard-Morissette on X, mirrored, Nov 2026](https://teapawt.org/oliviersm199/status/2118366278188777752)), 366 GitHub stars ([GitHub, Nov 2026](https://github.com/TerseAI/durable-actors)) |
| Revenue Signal | $0.00001971 per CPU-second and $0.00000667 per GiB-second of RAM ([Terse pricing, Nov 2026](https://www.useterse.ai/pricing)) |
| Founders | Thomas Elias Karatzas (CEO), McGill software engineering, Apple Siri and Apple Intelligence, Know Your VC exit. Olivier Simard-Morissette (CTO), Pigeon principal engineer, Squarespace and New York Times data pipelines ([Y Combinator](https://www.ycombinator.com/companies/useterse)) |
| Competitors | Cloudflare Durable Objects ($2.5B Aug 2026 note issuance, $782.5M company-wide Q3 2026 revenue, Workers integration) ([Cloudflare 8-K](https://www.sec.gov/Archives/edgar/data/1477333/000095010326012340/dp251721_8k.htm), [Cloudflare Q3 results](https://www.sec.gov/Archives/edgar/data/1477333/000147733326000060/q326exhibit991.htm), [Cloudflare docs](https://developers.cloudflare.com/durable-objects/)), Rivet Actors (funding and revenue unknown, state-and-actions API) ([Crunchbase](https://www.crunchbase.com/organization/rivet-d09f), [Rivet](https://rivet.dev/)), Restate ($27M raised, revenue unknown, journal-based recovery) ([Restate press release](https://www.streetinsider.com/Business%2BWire/Restate%2BRaises%2B%2420M%2BSeries%2BA%2Bto%2BDefine%2Bthe%2BInfrastructure%2BLayer%2Bfor%2BAI%2BAgents%2Band%2BWorkflows/27126702.html)) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent substitution ([Cloudflare documentation](https://developers.cloudflare.com/durable-objects/)), per-actor queueing ([Durable Actors GitHub](https://github.com/TerseAI/durable-actors)), external side effects outside the local transaction ([Terse persistence comparison](https://www.useterse.ai/blog/terse-vs-rivet-actors)) |
| Founder Reach | Karatzas: X 1.7K, LinkedIn 1K, RustGPT 3.2K stars ([X mirror](https://teapawt.org/karatzas_thomas), [LinkedIn, via search snippet](https://www.linkedin.com/in/thomas-karatzas-a3015a94), [GitHub](https://github.com/tekaratzas)). Simard-Morissette: X 205, LinkedIn 876, pinned TerseAI/durable-actors 366 stars ([X mirror](https://teapawt.org/oliviersm199), [LinkedIn, via search snippet](https://www.linkedin.com/in/olism), [GitHub](https://github.com/oliviersm199)) |
| Distribution Signals | Product Hunt #23 and 78 points ([Product Hunt, Nov 2026](https://www.producthunt.com/products/terse-durable-actors?launch=terse-durable-actors)), Show HN 53 points and 25 comments ([Hacker News, Nov 2026 snapshot](https://news.ycombinator.com/item?id=49980399)), Haunted Hacks co-hosted with Agent Relay ([YC event, Oct 2026](https://events.ycombinator.com/haunted-hacks-2026)) |
| Emails | founders@useterse.ai, shared founder inbox ([Terse website](https://www.useterse.ai/)), support@useterse.ai, service support ([Terse terms](https://www.useterse.ai/terms)), privacy@useterse.ai, privacy requests ([Terse privacy policy](https://www.useterse.ai/privacy)) |
