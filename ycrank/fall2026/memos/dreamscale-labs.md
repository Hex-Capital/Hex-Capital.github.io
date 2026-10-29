# Dreamscale Labs

> Real-time cloud inference for robotics.

| Field | Value |
|-------|-------|
| Website | https://dreamscalelabs.com |
| YC Page | https://www.ycombinator.com/companies/dreamscale-labs |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/dreamscale-labs)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Robotics, Infrastructure, AI |
| YC Partner | David Lieb ([YC](https://www.ycombinator.com/companies/dreamscale-labs)) |
| Emails | founders@dreamscalelabs.com ([website](https://www.dreamscalelabs.com/)); contact@dreamscalelabs.com ([company blog](https://www.dreamscalelabs.com/blog/why/)) |

## The Idea

- **Problem:** Robotics developers must fit increasingly compute-intensive models onto constrained onboard GPUs or configure cloud inference servers themselves, including loading weights for each model ([Product Hunt, Oct 2026](https://www.producthunt.com/products/dreamscale-labs)).
- **Approach:** Robots transmit camera frames and joint positions to cloud GPUs and receive actions, with optimization spanning model architecture, GPU kernels, networking, and geographically allocated compute ([documentation](https://docs.dreamscalelabs.com/), [YC launch](https://www.ycombinator.com/companies/dreamscale-labs)).
- **Differentiation:** Against local NVIDIA Jetson execution, Dreamscale offers remote model execution; against general infrastructure alternatives such as Modal and Runpod, it packages robot-model integration and action delivery through its robotics CLI and SDK ([Dreamscale documentation](https://docs.dreamscalelabs.com/), [Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [Runpod](https://www.runpod.io/press/runpod-raises-100m-summit-partners)).
- **Business Model:** The founder’s launch description specifies flat hourly pricing, while Product Hunt labels the offering “Free Options”; numerical rates were not publicly disclosed in the retrieved materials ([Product Hunt, Oct 2026](https://www.producthunt.com/products/dreamscale-labs)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes developer documentation, a Python package, Product Hunt, direct collaboration with robotics teams, and an evaluation integration with HUD ([documentation](https://docs.dreamscalelabs.com/), [PyPI](https://pypi.org/project/dreamscale/), [Product Hunt](https://www.producthunt.com/products/dreamscale-labs), [HUD announcement](https://www.dreamscalelabs.com/blog/hud/)).

## Defensibility

- **Moat today:** Technical implementation signals include disaggregated model execution, stream batching, coordinated client requests, and scheduling that prioritizes robots nearing action-buffer exhaustion; these are company-described mechanisms rather than evidence of exclusive IP ([Dreamscale, Oct 16, 2026](https://www.dreamscalelabs.com/blog/hud/)).
- **Future moat:** [Inferred]: Robot-specific integrations and accumulated deployment configurations could increase switching costs, but the public materials do not establish retention or migration costs.
- **Market structure:** [Inferred]: No structural barrier identified at this stage; general GPU platforms already provide inference and training infrastructure ([Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [Runpod](https://www.runpod.io/press/runpod-raises-100m-summit-partners)).
- **Commoditization risk:** [Inferred]: Modal, Baseten, or Runpod could extend their infrastructure into robotics-specific serving, although reproducing Dreamscale’s claimed latency requires additional integration and optimization work ([Modal](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [Baseten](https://www.baseten.co/blog/announcing-our-series-f/), [Runpod](https://www.runpod.io/press/runpod-raises-100m-summit-partners)).

## Market & Traction

- **Traction signals:**
  - Company-reported benchmarks: 40–50% lower tail latency than unnamed cloud providers, 320 ms DreamZero 14B inference, and 8+ simultaneous robots per H100 ([website, accessed Oct 27, 2026](https://www.dreamscalelabs.com/)).
  - HUD partnership demonstrated 128 concurrent simulated robots and physical robot rollouts; these are experiment counts, not customer counts ([Dreamscale, Oct 16, 2026](https://www.dreamscalelabs.com/blog/hud/)).
  - Named deployment example: Munari used Dreamscale to run π0.5 on a YAM setup; payment status was not disclosed ([company LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/dreamscale-labs/)).
  - Selected for a $100,000 equity-free Latitude 37 grant, with currency unspecified in the announcement ([Latitude 37, Aug 28, 2026](https://latitude37.org/field-notes/2026-cohort)).
  - Product Hunt showed 50 followers, 80 points, and day rank #23 ([Product Hunt, accessed Oct 27, 2026](https://www.producthunt.com/products/dreamscale-labs)).
  - Company LinkedIn showed 1,096 followers ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/dreamscale-labs/)).
  - Company X account @dreamscalelabs had 259 followers in a third-party snapshot ([Frontrun, Oct 12, 2026](https://www.frontrun.vc/c/dreamscalelabs/)).
  - Coverage included the grant announcement in Startup Daily ([Aug 31, 2026](https://www.startupdaily.net/topic/funding/airwallex-tips-1-million-into-10-ai-startups/)).
  - YC listed zero job openings ([YC, accessed Oct 27, 2026](https://www.ycombinator.com/companies/dreamscale-labs)).
- **Competitors:**
  - **Modal** (~$1,215M raised; $1,000M annualized revenue run rate): adjacent general compute platform supporting robotics training; latest financing was a $750M Series D led by Accel on October 14, 2026 ([CB Insights](https://www.cbinsights.com/company/modal-3/financials), [Accel](https://www.accel.com/news/our-investment-in-modal)).
  - **Baseten** ($2,085M raised; estimated $600M annualized revenue in March 2026): adjacent inference and post-training platform; latest announced round was $1,500M Series F on June 22, 2026, led by Altimeter, Conviction, and Spark ([RevenueMemo](https://www.revenuememo.com/p/baseten-funding), [Sacra](https://sacra.com/c/baseten/), [Baseten](https://www.baseten.co/blog/announcing-our-series-f/)).
  - **Runpod** (at least $120M disclosed funding; over $325M ARR): adjacent general GPU platform spanning training and serving; its latest $100M investment was led by Summit Partners in June 2026 ([seed announcement](https://www.runpod.io/blog/runpod-raises-20mm), [June announcement and October ARR update](https://www.runpod.io/press/runpod-raises-100m-summit-partners)).
- **Why now:** Dreamscale identifies increasingly compute-intensive robotics models and rising onboard hardware costs as catalysts for cloud inference in its 2026 launch materials ([YC launch](https://www.ycombinator.com/companies/dreamscale-labs)).

## Founders & Team

- **Eric Ren (CEO):**
  - Background: University of Sydney alumnus; previously at Harmony Intelligence and Non-trivial ([YC profile](https://www.ycombinator.com/founders/eric-ren)).
  - Twitter/X: @eternaI_entropy; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/eric-ren)).
  - LinkedIn: Public profile linked by YC; headline not retrievable ([profile](https://www.linkedin.com/in/e-ren/)).
  - GitHub: No public repos found.
- **Antoine Nguyen (CTO):**
  - Background: Previously researched VLA quantization at UTS; YC lists UTS and UNSW educational affiliations ([YC profile](https://www.ycombinator.com/founders/antoine-nguyen)).
  - Twitter/X: @AntoineNeedGPUs; count not retrievable ([YC profile](https://www.ycombinator.com/founders/antoine-nguyen)).
  - LinkedIn: Dreamscale-associated profile; headline not retrievable; approximately 4K followers displayed ([LinkedIn, Oct 2026](https://www.linkedin.com/in/antoine-n-633b84200)).
  - GitHub: @antoinenguyen27; pinned agentUQ uncertainty-quantification repository had 3 stars ([GitHub, accessed Oct 27, 2026](https://github.com/antoinenguyen27/agentUQ)).
- **Kevin Lin (Chief Scientist):**
  - Background: University of Sydney alumnus, previously at IMC Trading, with two International Chemistry Olympiad silver medals ([YC profile](https://www.ycombinator.com/founders/zhenhuan-lin)).
  - Twitter/X: @KDog112358; count not retrievable ([YC profile](https://www.ycombinator.com/founders/zhenhuan-lin)).
  - LinkedIn: Dreamscale-associated profile; headline not retrievable; 908 followers displayed ([LinkedIn, Oct 2026](https://www.linkedin.com/in/kevin-lin-760945225)).
  - GitHub: No public repos found.
- **Chris Yoo (CPO):**
  - Background: Studied computer science at UNSW, attended Harvard on exchange, and worked at SafetyCulture and Nullify ([personal website](https://pentestduck.com/)).
  - Twitter/X: @pentestduck; approximately 1.9K followers ([Teapawt snapshot, Oct 2026](https://teapawt.org/pentestduck)).
  - LinkedIn: Public profile linked by YC; headline not retrievable ([YC profile](https://www.ycombinator.com/founders/chris-yoo)).
  - GitHub: @PenTest-duck; pinned DuckAndCat language-practice application had 1 star ([GitHub, accessed Oct 27, 2026](https://github.com/PenTest-duck)).
- **Co-founder relationship:** Eric and Kevin share University of Sydney affiliations; Antoine and Chris share UNSW affiliations ([Eric](https://www.ycombinator.com/founders/eric-ren), [Kevin](https://www.ycombinator.com/founders/zhenhuan-lin), [Antoine](https://www.ycombinator.com/founders/antoine-nguyen), [Chris](https://www.ycombinator.com/founders/chris-yoo)).
- **Founder-market fit:** [Inferred]: Antoine’s VLA quantization research supplies documented robotics-inference experience, complemented by Chris’s software and security work; YC backs the company ([Antoine](https://www.ycombinator.com/founders/antoine-nguyen), [Chris](https://pentestduck.com/), [YC](https://www.ycombinator.com/companies/dreamscale-labs)).

## Key Risks

- **Network dependence:** [Inferred]: Variable connectivity can interrupt action delivery; Dreamscale acknowledges this limitation and proposes transport optimization, nearby compute, and possible private-cloud deployments ([company thesis](https://www.dreamscalelabs.com/blog/why/)).
- **Technical performance validation:** [Inferred]: Demonstrations do not establish fleet-wide latency guarantees across networks and workloads; published mitigation mechanisms include urgency scheduling and client coordination ([HUD experiments](https://www.dreamscalelabs.com/blog/hud/)).
- **Onboard substitution:** Dreamscale acknowledges improving model efficiency and describes Fast-WAM as an example, creating a substitution pathway for workloads that fit local hardware ([company thesis](https://www.dreamscalelabs.com/blog/why/)).
- **Integration fragmentation:** Robotics lacks standardized model-to-embodiment interfaces, requiring adapters; Dreamscale addresses this through its API and SDK ([HUD announcement](https://www.dreamscalelabs.com/blog/hud/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | HUD partnership and 128 simulated robots (Dreamscale, [Oct 2026](https://www.dreamscalelabs.com/blog/hud/)); Munari deployment example (company [LinkedIn, Oct 2026](https://www.linkedin.com/company/dreamscale-labs/)) |
| Revenue Signal | Flat hourly pricing; numerical rates and revenue undisclosed (founder’s [Product Hunt description, Oct 2026](https://www.producthunt.com/products/dreamscale-labs)) |
| Founders | Eric Ren, CEO: Sydney, Harmony Intelligence; Antoine Nguyen, CTO: UTS VLA research; Kevin Lin, Chief Scientist: IMC; Chris Yoo, CPO: Nullify, SafetyCulture ([YC profiles](https://www.ycombinator.com/companies/dreamscale-labs)) |
| Competitors | Modal (~$1,215M raised, $1,000M revenue run rate, general compute) ([CB Insights](https://www.cbinsights.com/company/modal-3/financials), [Accel](https://www.accel.com/news/our-investment-in-modal)); Baseten ($2,085M raised, estimated $600M annualized revenue, general inference) ([RevenueMemo](https://www.revenuememo.com/p/baseten-funding), [Sacra](https://sacra.com/c/baseten/)); Runpod (≥$120M disclosed, >$325M ARR, GPU platform) ([Runpod seed](https://www.runpod.io/blog/runpod-raises-20mm), [Runpod press](https://www.runpod.io/press/runpod-raises-100m-summit-partners)) |
| Moat Signals | Company-described stream batching and urgency scheduling (Dreamscale, [Oct 2026](https://www.dreamscalelabs.com/blog/hud/)) |
| Risk Factors | Network variability, onboard model efficiency, interface fragmentation (Dreamscale [thesis](https://www.dreamscalelabs.com/blog/why/) and [HUD article](https://www.dreamscalelabs.com/blog/hud/)) |
| Founder Reach | Antoine: LinkedIn ~4K, agentUQ 3 stars ([LinkedIn](https://www.linkedin.com/in/antoine-n-633b84200), [GitHub](https://github.com/antoinenguyen27/agentUQ)); Kevin: LinkedIn 908 ([LinkedIn](https://www.linkedin.com/in/kevin-lin-760945225)); Chris: X ~1.9K ([Teapawt](https://teapawt.org/pentestduck)); Oct 2026 snapshots |
| Distribution Signals | Product Hunt #23, 80 points, 50 followers ([Product Hunt, Oct 2026](https://www.producthunt.com/products/dreamscale-labs)); LinkedIn 1,096 followers ([LinkedIn, Oct 2026](https://www.linkedin.com/company/dreamscale-labs/)) |
| Emails | founders@dreamscalelabs.com ([website](https://www.dreamscalelabs.com/)); contact@dreamscalelabs.com ([company blog](https://www.dreamscalelabs.com/blog/why/)) |
