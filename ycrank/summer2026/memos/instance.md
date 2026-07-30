# Instance

> Automated evals for robot policies

| Field | Value |
|-------|-------|
| Website | https://www.instancelabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/instance |
| Batch | Summer 2026 ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/instance)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Robotics, Data Labeling |
| YC Partner | Ankit Gupta ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/instance)) |
| Emails | founders@instancelabs.ai ([Instance website, Jul 2026](https://www.instancelabs.ai/)) |

## The Idea

- **Problem:** Robotics teams training and evaluating policies manually watch rollouts, record success or failure in spreadsheets, and reset scenes, while industry teams may run fleets across dozens of policies and thousands of weekly episodes ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)).
- **Approach:** Instance accepts a task description and camera footage through an HTTP API, returns a success, failure, or null verdict, produces grounded subtask captions, and can split a long video into individual attempts ([Instance demo, Jul 2026](https://demo.instancelabs.ai/)).
- **Differentiation:** Instance judges individual real-camera rollouts, while Robocurve provides independent benchmarks, Bifrost Manifold orchestrates simulated policy evaluations, One Robot builds world-model simulations, and Foxglove provides robotics data and observability tooling ([Robocurve](https://www.ycombinator.com/companies/robocurve); [Bifrost](https://www.bifrost.ai/robotics/); [One Robot](https://www.ycombinator.com/companies/one-robot); [Foxglove](https://foxglove.dev/)).
- **Business Model:** [Inferred]: The public API and founder-led demo process support usage-based API or enterprise-service monetization, but no pricing is published ([Instance demo, Jul 2026](https://demo.instancelabs.ai/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The founders solicit robotics teams that train policies, run evaluations, or deploy robots and offer to demonstrate the system at the prospect’s office ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)).

## Defensibility

- **Moat today:** Instance reports a fine-tuned local verifier with 0.76 macro success-class F1 versus 0.53 for Claude Opus 4.8 across eight held-out datasets, with 2.0-second versus 5.2-second per-rollout latency ([Instance demo, Jul 2026](https://demo.instancelabs.ai/)).
- **Future moat:** [Inferred]: Accumulating customer-approved verdicts across robot types, tasks, and camera configurations could create a cross-platform training corpus and workflow switching costs, but no customer deployments or proprietary-data scale are publicly documented.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Robocurve offers MIT-licensed evaluation tooling, Bifrost offers open-source Manifold, and Runway published world-model-based policy evaluation, providing open-source and model-based implementation paths for robotics teams ([Robocurve](https://www.ycombinator.com/companies/robocurve); [Bifrost](https://www.bifrost.ai/robotics/); [Runway, Feb 2026](https://runwayml.com/research/accelerating-robot-policy-evaluation)).

## Market & Traction

- **Traction signals:**
  - Current-product technical validation: 10,000+ human-labeled episodes across eight benchmarks and seven robot platforms, with 0.76 macro F1 for Instance versus 0.53 for Claude Opus 4.8 ([Instance demo and YC Launch, Jul 2026](https://demo.instancelabs.ai/)).
  - 393 company LinkedIn followers ([LinkedIn, Jul 30, 2026](https://www.linkedin.com/company/instancelabs)).
  - 35 votes on the YC launch post ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)).
  - 0 active YC job postings ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/instance)).
  - Prior product only: the February 2026 announcement for an AI data-analyst product received 118 reactions and 21 comments before Instance pivoted to robotics evaluation ([Claire Mao LinkedIn, Feb 2026](https://www.linkedin.com/in/clairemao-)).
- **Competitors:**
  - Robocurve (funding undisclosed, revenue unknown): open-source evaluation tooling and independently operated real-world benchmarks rather than per-episode verification for a robotics team ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/robocurve)).
  - One Robot ($0.5M raised, revenue unknown): task-specific world models evaluate policies without consuming physical robot time ([CB Insights, 2026](https://www.cbinsights.com/company/one-robot); [Y Combinator](https://www.ycombinator.com/companies/one-robot)).
  - Bifrost AI ($8.56M raised, revenue unknown): Manifold runs policies across simulators and benchmarks at up to 1,000 rollouts per run, while Instance judges recorded physical attempts ([CB Insights, 2026](https://www.cbinsights.com/company/bifrost-2/financials); [Bifrost](https://www.bifrost.ai/robotics/)).
  - Foxglove (at least $58.7M in disclosed rounds, revenue unknown): stores, visualizes, and analyzes multimodal robotics data rather than issuing task-success verdicts ([Foxglove seed](https://foxglove.dev/blog/foxglove-raises-seed-funding-3-7m); [Series A](https://foxglove.dev/blog/foxgloves-15m-series-a-and-the-missing-data-stack-for-robotics); [Series B](https://foxglove.dev/blog/foxglove-series-b)).
- **Why now:** [Inferred]: Robot foundation-model deployment is increasing evaluation volume while 2026 research demonstrated policy evaluation through learned world models, creating demand for automated alternatives to physical rollout review ([Runway, Feb 2026](https://runwayml.com/research/accelerating-robot-policy-evaluation); [YC Launch, Jul 2026](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)).

## Founders & Team

- **Claire Mao (Co-founder and CEO):**
  - Background: MIT mathematics and computer science graduate who built planetary-atmosphere simulation software at NASA JPL, researched propulsion at the MIT Media Lab, and previously worked at BCG ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/instance)).
  - Twitter/X: @clairemao78 with approximately 844 followers ([TwStalker via search snippet, Jul 2026](https://ngntipkolamrenang.twstalker.com/kayoum_)).
  - LinkedIn: “Instance”; the public profile identifies Instance as her current employer but does not render a separate headline ([LinkedIn, Jul 2026](https://www.linkedin.com/in/clairemao-)).
  - GitHub: No public repos found.
- **Lucy Cai (Co-founder and CTO):**
  - Background: MIT computer-science BS/MEng graduate and CSAIL Learning and Intelligent Systems researcher who worked on SpaceX satellite software, Amazon automated unit-test creation, and Blackrock Neurotech brain-computer-interface pipelines ([Lucy Cai profile, Jul 2026](https://lucyc.ai/index.html)).
  - Twitter/X: @lucyjcai with approximately 2K followers ([TwStalker via search snippet, Jul 2026](https://we.twstalker.com/Jiaxi_Cui)).
  - LinkedIn: “Instance”; the public profile identifies Instance as her current employer but does not render a separate headline ([LinkedIn, 2026](https://www.linkedin.com/in/lucy-cai)).
  - GitHub: @lucyjcai; Manipulation-Final-Project has 1 star ([GitHub, Jul 2026](https://github.com/lucyjcai)).
- **Co-founder relationship:** Mao and Cai have been friends since middle school for more than ten years and later attended MIT together ([Instance website, Jul 2026](https://www.instancelabs.ai/)).
- **Founder-market fit:** [Inferred]: Cai’s robot-learning research and robot-policy testing experience, combined with Mao’s physical-system simulation and propulsion research, match the product’s robotics-evaluation and video-verification requirements ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)).

## Key Risks

- **Generalization and external validation:** Instance claims compatibility with any robot and camera angle, but its published evidence is a company-run benchmark with 0.76 macro F1 and no identified third-party production study ([Instance demo, Jul 2026](https://demo.instancelabs.ai/)).
- **Partial automation:** The current product automates success judging, while the proposed autonomous rig also requires a second robot to reset the scene, leaving physical reset outside the currently launched product ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)).
- **Open-source and simulated substitutes:** Robocurve and Bifrost distribute open-source evaluation frameworks, while One Robot and Runway evaluate policies through learned simulations, creating alternative implementation paths ([Robocurve](https://www.ycombinator.com/companies/robocurve); [Bifrost](https://www.bifrost.ai/robotics/); [One Robot](https://www.ycombinator.com/companies/one-robot); [Runway](https://runwayml.com/research/accelerating-robot-policy-evaluation)).
- **Product-transition continuity:** Instance was marketed as an AI data analyst in February 2026 and launched the robot verifier in July 2026, so engagement associated with the prior product does not establish demand for the current product ([Claire Mao LinkedIn](https://www.linkedin.com/in/clairemao-); [YC Launch](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)).
- **Name collision:** [Inferred]: An unrelated app-building product also uses “Instance,” which may create search and product-discovery ambiguity ([Product Hunt, 2025](https://www.producthunt.com/products/instance)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 10,000+ labeled episodes across eight benchmarks and seven robot platforms; 0.76 macro F1 versus 0.53 for Claude Opus 4.8 ([Instance demo, Jul 2026](https://demo.instancelabs.ai/)); 393 LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/instancelabs)); 35 YC Launch votes ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)) |
| Revenue Signal | No public data found |
| Founders | Claire Mao (CEO): MIT math/CS, NASA JPL, MIT Media Lab; Lucy Cai (CTO): MIT CS/MEng, MIT CSAIL robotics, SpaceX and AWS ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/instance)) |
| Competitors | Robocurve (funding undisclosed, revenue unknown, independent real-world benchmarks) ([YC](https://www.ycombinator.com/companies/robocurve)); One Robot ($0.5M raised, revenue unknown, world-model simulations) ([CB Insights](https://www.cbinsights.com/company/one-robot)); Bifrost AI ($8.56M raised, revenue unknown, simulation evaluation orchestration) ([CB Insights](https://www.cbinsights.com/company/bifrost-2/financials)); Foxglove (at least $58.7M disclosed, revenue unknown, robotics data and observability) ([Foxglove](https://foxglove.dev/about)) |
| Moat Signals | Fine-tuned local verifier achieved 0.76 macro F1 versus 0.53 for Claude Opus 4.8 and 2.0-second versus 5.2-second latency across eight test sets ([Instance demo, Jul 2026](https://demo.instancelabs.ai/)) |
| Risk Factors | Company-run benchmark without identified third-party production validation ([Instance demo, Jul 2026](https://demo.instancelabs.ai/)); automated reset not yet launched ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/RPi-instance-automated-evaluation-for-robot-policies-starting-with-the-success-detector)); open-source and simulated substitutes ([Robocurve](https://www.ycombinator.com/companies/robocurve); [Runway](https://runwayml.com/research/accelerating-robot-policy-evaluation)) |
| Founder Reach | Claire Mao: approximately 844 Twitter/X followers ([TwStalker via search snippet, Jul 2026](https://ngntipkolamrenang.twstalker.com/kayoum_)), 1K LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/clairemao-)), GitHub data not found; Lucy Cai: approximately 2K Twitter/X followers ([TwStalker via search snippet, Jul 2026](https://we.twstalker.com/Jiaxi_Cui)), 625 LinkedIn followers ([LinkedIn, 2026](https://www.linkedin.com/in/lucy-cai)), 1-star top GitHub repo ([GitHub, Jul 2026](https://github.com/lucyjcai)) |
| Distribution Signals | 393 company LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/instancelabs)); 35 YC Launch votes and 0 YC jobs ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/instance)) |
| Emails | founders@instancelabs.ai ([Instance website, Jul 2026](https://www.instancelabs.ai/)) |
