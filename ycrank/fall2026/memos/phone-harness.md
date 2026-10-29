# Phone Harness

> Let your agent control your phone

| Field | Value |
|-------|-------|
| Website | https://phone-harness.com/ |
| YC Page | https://www.ycombinator.com/companies/phone-harness |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/phone-harness)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Open Source, API, Automation, AI |
| YC Partner | Andrew Miklas ([Y Combinator](https://www.ycombinator.com/companies/phone-harness)) |
| Emails | support@phone-harness.com ([Pricing](https://phone-harness.com/pricing)) |

## The Idea

- **Problem:** [Inferred]: Developers building agents for mobile workflows otherwise need manual phone interaction or device-automation infrastructure, particularly when applications lack usable APIs ([Phone Harness](https://phone-harness.com/), [iphone-use documentation](https://github.com/leeguooooo/iphone-use)).
- **Approach:** The harness reads iPhone screens through iPhone Mirroring and OCR, reads Android screens through accessibility information, and supplies tap, type, and scroll controls to an external agent ([Phone Harness](https://phone-harness.com/)).
- **Differentiation:** Phone Harness offers personal iPhone control without Xcode or phone-side installation, whereas iphone-use installs an XCTest runner, while Droidrun/Mobilerun documents a Portal installation in its Android setup ([Phone Harness README](https://github.com/ShawnPana/phone-harness), [iphone-use](https://github.com/leeguooooo/iphone-use), [Mobilerun](https://github.com/droidrun/mobilerun)).
- **Business Model:** Personal-device use is free, shared cloud phones cost $0.05 per phone-minute, new accounts receive $5 promotional credit, and dedicated phones have custom workload pricing ([Pricing, retrieved Oct 27, 2026](https://phone-harness.com/pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The website directs developers to GitHub and an agent setup prompt, offers self-service cloud signup, and routes dedicated-phone buyers to demos ([Website](https://phone-harness.com/), [Cloud](https://phone-harness.com/cloud), [Pricing](https://phone-harness.com/pricing)).

## Defensibility

- **Moat today:** [Inferred]: Public repository adoption provides a developer-distribution asset, with approximately 4,000 stars and 403 forks, although those counts do not establish proprietary technology or customer lock-in ([GitHub, retrieved Oct 27, 2026](https://github.com/ShawnPana/phone-harness)).
- **Future moat:** [Inferred]: Persistent customer logins, app state, and dedicated device configurations could create migration work if customers embed them in recurring workflows; measured switching costs: No public data found ([Dedicated-phone features](https://phone-harness.com/pricing)).
- **Market structure:** [Inferred]: MIT licensing and existing competing implementations leave no identified structural barrier to replication at this stage ([Phone Harness](https://phone-harness.com/), [Mobilerun](https://github.com/droidrun/mobilerun)).
- **Commoditization risk:** Developers can modify the MIT-licensed harness, while Droidrun/Mobilerun already supplies alternative phone-control infrastructure, reducing exclusivity of the control layer ([Phone Harness](https://phone-harness.com/), [Mobilerun](https://github.com/droidrun/mobilerun)).

## Market & Traction

- **Traction signals:**
  - Approximately 4,000 GitHub stars and 403 forks ([GitHub, retrieved Oct 27, 2026](https://github.com/ShawnPana/phone-harness)).
  - Company X account @phone_harness: 555 followers in an indexed third-party snapshot, with the live count not retrievable ([Sotwe, retrieved Oct 27, 2026, via search snippet](https://www.sotwe.com/phone_harness)).
  - Cloud product publicly available in open beta ([Company cloud page, retrieved Oct 27, 2026](https://phone-harness.com/cloud)).
  - Zero jobs listed on YC ([Y Combinator, retrieved Oct 27, 2026](https://www.ycombinator.com/companies/phone-harness)).
- **Competitors:**
  - **Droidrun/Mobilerun (€2.1M disclosed funding; revenue unknown):** Latest identified financing announced July 23, 2025, led by Merantix Capital; its framework includes Android Portal control and USB-connected iPhones, compared with Phone Harness’s iPhone Mirroring route ([Funding announcement](https://droidrun.ai/blog/we-raised-2-1m-to-unlock-mobile-for-ai/), [Product documentation](https://github.com/droidrun/mobilerun)).
  - **Minitap ($4.1M disclosed funding; revenue unknown):** Seed announced December 1, 2025, co-led by Moxxie Ventures and Mercuri; its mobile-use framework and commercial product emphasize mobile development and QA, compared with Phone Harness’s general phone-control positioning ([Company announcement](https://rss.globenewswire.com/news-release/2025/12/01/3196935/0/en/minitap-raises-4-1m-to-make-mobile-development-10x-faster-with-ai.html), [Minitap](https://www.minitap.ai/blog/raise-announcement)).
  - **iphone-use, leeguooooo project (funding: No public data found; revenue unknown):** Uses an installed XCTest runner, requires Xcode for setup, and offers replayable flows rather than relying on iPhone Mirroring ([Project documentation, retrieved Oct 27, 2026](https://github.com/leeguooooo/iphone-use)).
- **Why now:** [Inferred]: Improved mobile-agent execution makes phone-control infrastructure more usable, illustrated by Minitap’s February 2026 research reporting completion of all 116 AndroidWorld tasks, a competitor benchmark rather than Phone Harness performance evidence ([Research paper, Feb 8, 2026](https://arxiv.org/abs/2602.07787)).

## Founders & Team

- **Shawn Pana (Founder/CEO):**
  - Background: Studied Mathematics and Computer Science at UC San Diego and previously led growth at Browser Use, including product launches and developer partnerships; prior exits: No public data found ([Y Combinator](https://www.ycombinator.com/companies/phone-harness)).
  - Twitter/X: @shawn_pana, approximately 3.1K followers in a third-party snapshot; live count not retrievable ([Teapawt, retrieved Oct 27, 2026](https://teapawt.net/shawn_pana)).
  - LinkedIn: Profile linked publicly; headline and follower count not retrievable ([GitHub profile](https://github.com/ShawnPana), [LinkedIn profile](https://www.linkedin.com/in/shawnpana)).
  - GitHub: @ShawnPana; phone-harness approximately 4,000 stars, with smux also listed at approximately 1,500 stars ([GitHub profile, retrieved Oct 27, 2026](https://github.com/ShawnPana)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Pana’s documented experience launching agent tooling and managing developer partnerships at Browser Use is relevant to distributing Phone Harness to developers ([Y Combinator](https://www.ycombinator.com/companies/phone-harness)).

## Key Risks

- **Platform dependency:** Personal iPhone control requires a compatible Mac, paired iPhone Mirroring, and screen-recording/accessibility permissions, while Android requires debugging access; hosted devices provide an alternative deployment route ([Installation guide](https://github.com/ShawnPana/phone-harness/blob/main/install.md)).
- **Task-completion limitations:** The README excludes multitouch, camera, and Face ID flows and states that unlabeled controls require a vision-capable model, limiting workflows achievable through OCR alone ([README](https://github.com/ShawnPana/phone-harness)).
- **Sensitive-data telemetry:** An open issue reports that default telemetry in the reviewed version transmitted scripts, OCR output, and unredacted typing arguments; the installation guide documents disabling telemetry, while independent verification of current remediation: No public data found ([Issue report, Sep 16, 2026](https://github.com/ShawnPana/phone-harness/issues/68), [Installation guide](https://github.com/ShawnPana/phone-harness/blob/main/install.md)).
- **Permitted-use restrictions:** Cloud terms require target services to permit automated access and prohibit spam, ban evasion, and prohibited bulk account creation, constraining acceptable workloads and allowing account suspension ([Terms, Sep 16, 2026](https://phone-harness.com/terms)).
- **Name ambiguity:** Search results also surface an academic “PhoneHarness” by Chenxin Li and coauthors, whose affiliation with this startup could not be verified, so its performance figures are excluded ([arXiv, Jun 2026](https://arxiv.org/abs/2606.14832)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Approximately 4,000 stars, 403 forks ([GitHub, Oct 27, 2026](https://github.com/ShawnPana/phone-harness)); cloud open beta ([Company website, Oct 27, 2026](https://phone-harness.com/cloud)) |
| Revenue Signal | Personal phones free; cloud $0.05/phone-minute; dedicated phones custom-priced; realized revenue: No public data found ([Pricing, Oct 27, 2026](https://phone-harness.com/pricing)) |
| Founders | Shawn Pana, Founder/CEO: former Browser Use Head of Growth; UC San Diego Mathematics/Computer Science studies ([Y Combinator](https://www.ycombinator.com/companies/phone-harness)) |
| Competitors | Droidrun (€2.1M disclosed, revenue unknown, Portal/USB control) ([Company](https://droidrun.ai/blog/we-raised-2-1m-to-unlock-mobile-for-ai/)); Minitap ($4.1M disclosed, revenue unknown, development/QA focus) ([Company](https://www.minitap.ai/blog/raise-announcement)); iphone-use (funding: No public data found, revenue unknown, XCTest runner) ([GitHub](https://github.com/leeguooooo/iphone-use)) |
| Moat Signals | Approximately 4,000 stars and 403 forks; MIT-licensed code ([GitHub, Oct 27, 2026](https://github.com/ShawnPana/phone-harness)) |
| Risk Factors | Platform dependencies, unsupported authentication/camera flows, reported sensitive-data telemetry ([README](https://github.com/ShawnPana/phone-harness), [Issue report](https://github.com/ShawnPana/phone-harness/issues/68)) |
| Founder Reach | Shawn Pana: X approximately 3.1K, third-party snapshot ([Teapawt, Oct 27, 2026](https://teapawt.net/shawn_pana)); GitHub phone-harness approximately 4,000 stars ([GitHub, Oct 27, 2026](https://github.com/ShawnPana)) |
| Distribution Signals | Public GitHub and agent setup prompt ([Website](https://phone-harness.com/)); company X 555 followers, indexed snapshot ([Sotwe, retrieved Oct 27, 2026, via search snippet](https://www.sotwe.com/phone_harness)) |
| Emails | support@phone-harness.com ([Company pricing page](https://phone-harness.com/pricing)) |
