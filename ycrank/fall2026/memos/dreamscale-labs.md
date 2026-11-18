# Dreamscale Labs

> Cloud inference and training infrastructure for robotics.

| Field | Value |
|-------|-------|
| Website | https://dreamscalelabs.com |
| YC Page | https://www.ycombinator.com/companies/dreamscale-labs |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/dreamscale-labs)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Robotics, Infrastructure, AI |
| YC Partner | David Lieb ([Y Combinator](https://www.ycombinator.com/companies/dreamscale-labs)) |
| Emails | eric@dreamscalelabs.com, CEO ([Eric Ren’s website](https://erzhrn.github.io/)); founders@dreamscalelabs.com, shared founder inbox ([Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud)); contact@dreamscalelabs.com, feedback ([Dreamscale blog](https://www.dreamscalelabs.com/blog/why/)); team@dreamscalelabs.com, organization contact ([Dreamscale GitHub](https://github.com/Dreamscale-Labs)) |

## The Idea

- **Problem:** Robotics teams running compute-intensive models face memory and cost constraints on onboard GPUs, while renting general-purpose cloud GPUs requires them to set up and maintain their own model servers ([Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud), [Product Hunt](https://www.producthunt.com/products/dreamscale-labs)).
- **Approach:** Dreamscale streams robot observations to cloud GPUs and returns action predictions, using regional GPU placement, model and kernel optimization, and a transport that recovers faster from packet loss ([Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud), [Transport V2](https://www.dreamscalelabs.com/blog/transport-v2/)).
- **Differentiation:** Dreamscale meters connected robot time and supplies robot-specific transport, while Modal offers programmable GPU infrastructure and General Instinct compresses models for offline execution on customer hardware ([Dreamscale pricing](https://www.dreamscalelabs.com/#pricing), [Modal](https://modal.com/blog/announcing-our-series-b), [General Instinct YC launch](https://www.ycombinator.com/companies/general-instinct)).
- **Business Model:** Prepaid usage credits cover inference at $5 per connected robot-hour billed by the second and training at $6.84 per GPU-hour, with $5 in credit for new accounts ([Dreamscale pricing and terms](https://www.dreamscalelabs.com/#pricing), [Terms of Use](https://www.dreamscalelabs.com/terms/), Nov 2026).
- **TAM/SAM:** Emergen Research estimates the broader robot foundation model market at $810M in 2026 with 40.0% projected CAGR through 2035, including cloud, on-device, and hybrid deployments ([Emergen Research](https://www.emergenresearch.com/industry-report/robot-foundation-model-market), Nov 2026).
- **GTM / Distribution:** Dreamscale offers SDK-led onboarding and demos, reports customizing stacks for deployment and research teams, and published a joint evaluation integration with HUD ([Dreamscale docs](https://docs.dreamscalelabs.com/), [Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud), [HUD](https://www.hud.ai/research/evaluating-robot-models-in-the-cloud)).

## Defensibility

- **Moat today:** Dreamscale reports 320 ms for DreamZero 14B versus 350 ms for NVIDIA’s implementation using half the GPU count, a technical performance signal from a company-run comparison ([Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud), Sep 2026).
- **Future moat:** [Inferred]: Robot-specific integrations and deployment tuning could raise switching costs if customers embed them in production workflows, while public evidence documents an evaluation integration and early collaborations ([HUD](https://www.hud.ai/research/evaluating-robot-models-in-the-cloud), [Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Abstract already offers overlapping robot checkpoints and managed fine-tuning, giving developers another hosted option for those models ([Abstract](https://abstract.inc/pi), [Dreamscale model catalog](https://www.dreamscalelabs.com/#models)).

## Market & Traction

- **Traction signals:**
  - A$100,000 equity-free Airwallex Latitude 37 grant ([Latitude 37](https://latitude37.org/field-notes/2026-cohort), Aug 2026).
  - NextGen Ventures lists Dreamscale Labs in its portfolio ([NextGen Ventures](https://www.nextgenventures.com.au/startups), Nov 2026).
  - Launch coverage in Go Big News and The Silicon Valley Post ([Go Big News](https://www.gobignews.com/ai/dreamscale-labs-launches-cloud-platform-for-robot-ai), [The Silicon Valley Post](https://svpost.com/articles/dreamscale-labs-cloud-robot-inference/), Sep 18, 2026).
  - HUD research partnership and open-source evaluation cookbook, with 128 concurrent simulated robot rollouts in a company-reported test ([HUD](https://www.hud.ai/research/evaluating-robot-models-in-the-cloud), [Dreamscale benchmark](https://www.dreamscalelabs.com/blog/hud/), Oct 16, 2026).
  - Joint excavator model evaluation with Actor Labs ([Dreamscale](https://www.dreamscalelabs.com/blog/excavate/), Nov 15, 2026).
  - Product Hunt daily rank #23 ([Product Hunt leaderboard](https://www.producthunt.com/leaderboard/daily/2026/10/15), Oct 15, 2026, via search snippet).
  - 1,262 LinkedIn followers, 665 X followers, and 51 Product Hunt followers ([LinkedIn](https://www.linkedin.com/company/dreamscale-labs), [X profile mirror](https://www.teapawt.net/DreamscaleLabs), [Product Hunt](https://www.producthunt.com/products/dreamscale-labs?launch=dreamscale-labs), Nov 2026).
  - Estimated 6,200 website visits ([Mindspent, traffic.cv panel estimate](https://mindspent.com/c/dreamscale-labs), Sep 2026).
  - 0 open YC job postings ([YC Jobs](https://www.ycombinator.com/companies/dreamscale-labs/jobs), Nov 2026).
- **Competitors:**
  - Abstract (funding unknown, revenue unknown) offers robot and language model inference through a common API plus serverless fine-tuning ([Abstract](https://abstract.inc/)).
  - Orchestral Labs (funding unknown, revenue unknown) serves production robot policies and turns failures into training data ([Orchestral Labs](https://orchestrallabs.com/)).
  - General Instinct (funding amount unknown, revenue unknown) compresses models for offline inference on customer hardware, with pre-seed backing listed from YC and Imagination Capital ([YC](https://www.ycombinator.com/companies/general-instinct), [Crunchbase](https://www.crunchbase.com/organization/general-instinct)).
  - Modal (approximately $1.2B raised, over $1B annualized run rate) provides general-purpose serverless GPU infrastructure, with a $750M Series D led by Accel in October 2026 ([Modal Series B](https://modal.com/blog/announcing-our-series-b), [Series C](https://modal.com/blog/modal-series-c), [Series D](https://modal.com/blog/1-billion-annualized-run-rate-series-d)).
- **Why now:** [Inferred]: Runway publicly released its open-weight Praxis-1 robot model in November 2026, adding a checkpoint that Dreamscale could make available through its hosted catalog ([Runway](https://runway.com/news/company-news/praxis-1-is-now-available), [Dreamscale](https://www.dreamscalelabs.com/)).

## Founders & Team

- **Eric Ren (CEO):**
  - Background: University of Sydney, Harmony Intelligence, and AI evaluation research at Non-Trivial, with direct business email eric@dreamscalelabs.com ([YC](https://www.ycombinator.com/founders/eric-ren), [Eric Ren’s website](https://erzhrn.github.io/)).
  - Twitter/X: @eternaI_entropy, count not retrievable ([YC](https://www.ycombinator.com/founders/eric-ren)).
  - LinkedIn: YC links his profile, headline not retrievable ([YC](https://www.ycombinator.com/founders/eric-ren)).
  - GitHub: @erzhrn, `erzhrn.github.io`, 0 stars ([GitHub](https://github.com/erzhrn/erzhrn.github.io), Nov 2026).
- **Antoine Nguyen (CTO):**
  - Background: University of Technology Sydney and UNSW, prior work at Loakal, and research on quantizing vision-language-action models at UTS ([YC](https://www.ycombinator.com/founders/antoine-nguyen)); direct business email: No public data found.
  - Twitter/X: @AntoineNeedGPUs, count not retrievable ([YC](https://www.ycombinator.com/founders/antoine-nguyen)).
  - LinkedIn: Dreamscale Labs affiliation visible, headline not retrievable ([LinkedIn](https://www.linkedin.com/in/antoine-n-633b84200), via search snippet).
  - GitHub: @antoinenguyen27, `agentUQ`, 3 stars ([GitHub](https://github.com/antoinenguyen27/agentUQ), Nov 2026).
- **Kevin Lin (Chief Scientist):**
  - Background: University of Sydney, former IMC Trading quant, and model training lead on Pied Piper ([YC](https://www.ycombinator.com/founders/kevin-lin), [Devpost](https://devpost.com/software/piedpiper)); direct business email: No public data found.
  - Twitter/X: @KDog112358, count not retrievable ([YC](https://www.ycombinator.com/founders/kevin-lin)).
  - LinkedIn: Dreamscale Labs affiliation visible, headline not retrievable ([LinkedIn](https://www.linkedin.com/in/kevin-lin-760945225), via search snippet).
  - GitHub: Co-built `piedpiper`, 0 stars, with no verified individual handle ([Devpost](https://devpost.com/software/piedpiper), [GitHub](https://github.com/antoinenguyen27/piedpiper), Nov 2026).
- **Chris Yoo (CPO):**
  - Background: Studied computer science at UNSW, went on exchange at Harvard, and worked in software engineering at SafetyCulture and Nullify ([Chris Yoo’s website](https://pentestduck.com/)); direct business email: No public data found.
  - Twitter/X: @pentestduck, 2.2K followers ([X profile mirror](https://www.teapawt.net/pentestduck), Nov 2026).
  - LinkedIn: Dreamscale Labs affiliation visible, headline not retrievable ([LinkedIn](https://www.linkedin.com/in/chris-yoo), via search snippet).
  - GitHub: @PenTest-duck, `DuckAndCat`, 1 star ([GitHub](https://github.com/PenTest-duck), Nov 2026).
- **Co-founder relationship:** Ren and Lin knew each other from high school and attended the University of Sydney, while Nguyen and Yoo both attended UNSW ([NextGen Ventures co-founder account](https://www.linkedin.com/posts/antoine-n-633b84200_jerry-xlingson-and-nextgen-ventures-have-activity-7506505379116138496-bWN-), [YC founder profiles](https://www.ycombinator.com/companies/dreamscale-labs)).
- **Founder-market fit:** Nguyen’s robot-model quantization research and Lin’s model training work map to Dreamscale’s optimization and fine-tuning work, with backing from YC and NextGen Ventures ([YC](https://www.ycombinator.com/companies/dreamscale-labs), [Devpost](https://devpost.com/software/piedpiper), [NextGen Ventures](https://www.nextgenventures.com.au/startups)).

## Key Risks

- **Network latency:** A late cloud reply can stall a control step, and Dreamscale’s faster packet recovery reduced p99 network time from 420 ms to 160 ms in a test on one home Wi-Fi link using synthetic frames and simulated compute ([Transport V2](https://www.dreamscalelabs.com/blog/transport-v2/), Nov 2026).
- **Physical safety:** Cloud model outputs can cause unsafe motion, and Dreamscale’s terms put validation, motion limits, emergency stops, and independent safety systems on the operator ([Dreamscale Terms of Use](https://www.dreamscalelabs.com/terms/), Oct 2026).
- **On-device substitution:** [Inferred]: Buyers that require offline operation can choose a compressed local runtime such as General Instinct’s, while Dreamscale offers usage billing for teams with intermittent workloads ([General Instinct YC launch](https://www.ycombinator.com/companies/general-instinct), [Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud)).
- **Model licensing:** Third-party checkpoints can restrict commercial use, and Dreamscale lets customers bring their own models ([Dreamscale terms](https://www.dreamscalelabs.com/terms/), [Dreamscale inference](https://www.dreamscalelabs.com/#inference)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader robot foundation model market estimated at $810M in 2026 with 40.0% CAGR through 2035 ([Emergen Research](https://www.emergenresearch.com/industry-report/robot-foundation-model-market), Nov 2026) |
| SAM | No public data found |
| Traction | A$100,000 grant ([Latitude 37](https://latitude37.org/field-notes/2026-cohort), Aug 2026); HUD research partnership ([HUD](https://www.hud.ai/research/evaluating-robot-models-in-the-cloud), Oct 2026); excavator evaluation with Actor Labs ([Dreamscale](https://www.dreamscalelabs.com/blog/excavate/), Nov 2026) |
| Revenue Signal | $5 per connected robot-hour billed by the second, $6.84 per training GPU-hour, and $5 in new-account credit ([Dreamscale pricing](https://www.dreamscalelabs.com/#pricing), Nov 2026) |
| Founders | Eric Ren (CEO), Harmony Intelligence and Non-Trivial; Antoine Nguyen (CTO), UTS quantization research and Loakal; Kevin Lin (Chief Scientist), IMC Trading and University of Sydney; Chris Yoo (CPO), Nullify and SafetyCulture ([YC founder profiles](https://www.ycombinator.com/companies/dreamscale-labs)) |
| Competitors | Abstract (funding unknown, revenue unknown, common robot and language API) ([Abstract](https://abstract.inc/)); Orchestral Labs (funding unknown, revenue unknown, learns from policy failures) ([Orchestral Labs](https://orchestrallabs.com/)); General Instinct (funding amount unknown, revenue unknown, offline runtime) ([YC](https://www.ycombinator.com/companies/general-instinct), [Crunchbase](https://www.crunchbase.com/organization/general-instinct)); Modal (approximately $1.2B raised, over $1B annualized run rate, general-purpose GPU cloud) ([Modal funding announcements](https://modal.com/blog/1-billion-annualized-run-rate-series-d), [Series B](https://modal.com/blog/announcing-our-series-b), [Series C](https://modal.com/blog/modal-series-c)) |
| Moat Signals | DreamZero 14B benchmark of 320 ms versus NVIDIA’s 350 ms at half the GPU count, company-reported ([Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud), Sep 2026) |
| Risk Factors | Network tail latency ([Transport V2](https://www.dreamscalelabs.com/blog/transport-v2/)), physical safety ([Dreamscale terms](https://www.dreamscalelabs.com/terms/)), offline substitutes ([General Instinct YC launch](https://www.ycombinator.com/companies/general-instinct)) |
| Founder Reach | Eric Ren, 0 stars on public site repo ([GitHub](https://github.com/erzhrn/erzhrn.github.io)); Antoine Nguyen, 3 stars on `agentUQ` ([GitHub](https://github.com/antoinenguyen27/agentUQ)); Kevin Lin, 908 LinkedIn followers ([LinkedIn](https://www.linkedin.com/in/kevin-lin-760945225), via search snippet); Chris Yoo, 2.2K X followers and 7K LinkedIn followers ([X profile mirror](https://www.teapawt.net/pentestduck), [LinkedIn](https://www.linkedin.com/in/chris-yoo), via search snippet) |
| Distribution Signals | Product Hunt #23 ([Product Hunt leaderboard](https://www.producthunt.com/leaderboard/daily/2026/10/15), Oct 15, 2026, via search snippet); 1,262 LinkedIn followers and 665 X followers ([LinkedIn](https://www.linkedin.com/company/dreamscale-labs), [X profile mirror](https://www.teapawt.net/DreamscaleLabs), Nov 2026); estimated 6,200 visits ([Mindspent](https://mindspent.com/c/dreamscale-labs), Sep 2026) |
| Emails | eric@dreamscalelabs.com, CEO ([Eric Ren’s website](https://erzhrn.github.io/)); founders@dreamscalelabs.com, shared founder inbox ([Launch YC](https://www.ycombinator.com/launches/U24-dreamscale-labs-running-robot-brains-in-the-cloud)); contact@dreamscalelabs.com, feedback ([Dreamscale blog](https://www.dreamscalelabs.com/blog/why/)); team@dreamscalelabs.com, organization contact ([Dreamscale GitHub](https://github.com/Dreamscale-Labs)) |
