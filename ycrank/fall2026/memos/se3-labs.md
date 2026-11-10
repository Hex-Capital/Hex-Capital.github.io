# SE3 Labs

> Real-World RL Environments for Physical AI

| Field | Value |
|-------|-------|
| Website | https://se3labs.ai |
| YC Page | https://www.ycombinator.com/companies/se3-labs |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/se3-labs)) |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Robotic Process Automation, Enterprise, AI |
| YC Partner | David Lieb ([Y Combinator](https://www.ycombinator.com/companies/se3-labs)) |
| Emails | conan@se3labs.ai — general, privacy, and contractual contact; founder ownership unverified ([SE3 Terms](https://se3labs.ai/terms/)) |

## The Idea

- **Problem:** [Inferred]: Robot-policy developers need to identify failures under deployment conditions that simulation and internal laboratory tests may miss, requiring access to physical hardware and repeatable tasks ([SE3](https://se3labs.ai/)).
- **Approach:** SE3 runs customer policies on robot workcells, captures operator interventions following failures, and packages synchronized, annotated trajectories for subsequent training ([SE3](https://se3labs.ai/)).
- **Differentiation:** SE3 provides physical evaluation and partner-site tasks, while Bifrost Manifold evaluates in simulation and Poke & Wiggle offers remote evaluation on Franka FR3 Duo stations ([SE3](https://se3labs.ai/), [Bifrost](https://www.bifrost.ai/manifold/), [Poke & Wiggle](https://pokeandwiggle.com/products)).
- **Business Model:** Project scope, deliverables, and fees are specified in individual orders or statements of work; public prices and billing units: No public data found ([SE3 Terms, September 2026](https://se3labs.ai/terms/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Public research, Python documentation, task specifications, and an inquiry form provide entry points for robot-model developers and industrial partners ([SE3 Documentation](https://docs.se3labs.ai/), [SE3](https://se3labs.ai/)).

## Defensibility

- **Moat today:** SE3 has published physical task implementations, scoring sheets, and downloadable recordings from 100 Dream-model evaluation episodes, documenting an operating evaluation system ([SE3 Research, October 2026](https://se3labs.ai/blog/dream-eval-1/)).
- **Future moat:** [Inferred]: Repeated evaluations could accumulate task-specific failure histories and operating knowledge, but customer-data permissions constrain reuse and no exclusive dataset advantage is established publicly ([SE3 Privacy Policy](https://se3labs.ai/privacy/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given competing commercial robot farms and academic distributed-evaluation infrastructure ([Poke & Wiggle](https://pokeandwiggle.com/products), [RoboArena](https://arxiv.org/abs/2506.18123)).
- **Commoditization risk:** [Inferred]: Robotics laboratories could implement overlapping evaluation services using their own hardware and published evaluation methods, although operating physical stations remains necessary ([RoboArena](https://arxiv.org/abs/2506.18123)).

## Market & Traction

- **Traction signals:**
  - Published 100 real-robot Dream evaluation episodes across 10 tasks, including recordings and telemetry ([SE3 Research, October 30, 2026](https://se3labs.ai/blog/dream-eval-1/)).
  - Published a 40-episode comparison reporting 6 completed placements with code-as-policy and 18 with agentic control, from 20 attempts per approach ([SE3 Research, September 20, 2026](https://se3labs.ai/blog/agentic-vs-code-as-policy/)).
  - Displays NVIDIA Inception membership on its website ([SE3, accessed November 9, 2026](https://se3labs.ai/)).
  - Lists 0 open jobs on its YC profile ([Y Combinator, accessed November 9, 2026](https://www.ycombinator.com/companies/se3-labs)).
- **Competitors:**
  - **Bifrost ($13.7M raised, revenue unknown):** Manifold supplies simulation-based policy evaluation and failure analysis; its latest identified round was an $8M Series A in October 2024 led by Carbide Ventures ([Korea JoongAng Daily, May 2026](https://www.koreajoongangdaily.com/business/bifrost-pitches-3-d-ai-training-platform-to-korean-manufacturers/12611683), [funding announcement](https://www.vcaonline.com/news/2024103106/bifrost-raises-8m-to-accelerate-ai-s-ability-to-solve-problems-in-the-physical-world/), [Manifold](https://www.bifrost.ai/manifold/)).
  - **Poke & Wiggle (total raised: No public data found; revenue unknown):** Offers standardized physical benchmarks and targeted data collection on FR3 Duo stations; Crunchbase lists a Fly Ventures-led pre-seed round, with amount and date unavailable publicly ([Poke & Wiggle](https://pokeandwiggle.com/products), [Crunchbase](https://www.crunchbase.com/organization/poke-wiggle)).
  - **BodenAI (total raised: No public data found; revenue unknown):** Provides real-world RL datasets and scenario infrastructure; Preqin reports A+ and A++ rounds in May 2026, but publicly accessible round amounts and leads: No public data found ([BodenAI](https://www.boden.ai/post/joint-open-source-release-1-000-hours-of-real-world-robot-reinforcement-learning-data-rw-rl-dataset), [Preqin](https://www.preqin.com/data/profile/asset/boden-ai/511371)).
- **Why now:** [Inferred]: API-accessible robot foundation models permit external physical testing without possession of model weights, demonstrated by SE3’s October 2026 evaluation of Dream through its closed-source API ([SE3 Research](https://se3labs.ai/blog/dream-eval-1/)).

## Founders & Team

- **Founder identities and roles:** No public data found; the accessible YC page contains an empty Founders section ([Y Combinator, November 2026](https://www.ycombinator.com/companies/se3-labs)).
- **Paige Xu (publicly associated builder; SE3 founder status and title unverified):**
  - Background: RootData reports Dartmouth economics and environmental-science studies, prior OpenMind COO work, OKX investment management, and McKinsey experience; her social profile identifies work at SE3, while her current SE3 business email: No public data found ([RootData](https://www.rootdata.com/member/Paige%20Xu?k=MjExNDM%3D), [profile mirror, via search snippet](https://ssstwitterx.app/paigeinsf/)).
  - Twitter/X: @paigeinsf; TwitterScore records 3,967 followers as of August 2026 ([TwitterScore](https://twitterscore.io/twitter/paigeinsf/)).
  - LinkedIn: Profile linked as /in/paigexu; headline: No public data found ([RootData](https://www.rootdata.com/member/Paige%20Xu?k=MjExNDM%3D)).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** No public data found on verified founders’ backgrounds; YC participation and David Lieb’s assignment are confirmed ([Y Combinator](https://www.ycombinator.com/companies/se3-labs)).

## Key Risks

- **Technical improvement loop:** [Inferred]: Published evaluations document measurement but do not establish that failure-directed collection improves deployed policies; the Dream report places fine-tuning and comparative retesting in a subsequent research round ([SE3 Research](https://se3labs.ai/blog/dream-eval-1/)).
- **Data reuse restrictions:** Customer raw evaluation content cannot train SE3’s or another customer’s general-purpose model without written authorization, limiting unrestricted cross-customer learning; aggregated or de-identified operational information may support benchmarking ([SE3 Privacy Policy](https://se3labs.ai/privacy/)).
- **Physical testing interruptions:** Machinery and unexpected behavior can require evaluations to stop; SE3 specifies safety plans and pause authority and states that evaluation does not certify production safety ([SE3 Terms](https://se3labs.ai/terms/)).
- **Company-name ambiguity:** A separate Munich business uses SE3 Labs at se3.ai, creating attribution risk; its management and products differ from this YC company, so its funding and customer claims are excluded ([Munich company](https://www.se3.ai/), [YC company](https://www.ycombinator.com/companies/se3-labs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 100 Dream evaluation episodes across 10 tasks (SE3 Research, [October 2026](https://se3labs.ai/blog/dream-eval-1/)); 40-episode control-method study (SE3 Research, [September 2026](https://se3labs.ai/blog/agentic-vs-code-as-policy/)); self-reported NVIDIA Inception membership (SE3, [November 2026](https://se3labs.ai/)) |
| Revenue Signal | Contract-specific project fees; public amounts and realized revenue unavailable (SE3 Terms, [September 2026](https://se3labs.ai/terms/)) |
| Founders | No public data found |
| Competitors | Bifrost ($13.7M raised, revenue unknown, simulation evaluation) (Korea JoongAng Daily, [May 2026](https://www.koreajoongangdaily.com/business/bifrost-pitches-3-d-ai-training-platform-to-korean-manufacturers/12611683); [Bifrost](https://www.bifrost.ai/manifold/)); Poke & Wiggle (funding amount unavailable, revenue unknown, FR3 Duo evaluation) ([Crunchbase](https://www.crunchbase.com/organization/poke-wiggle); [company](https://pokeandwiggle.com/products)); BodenAI (funding amount unavailable, revenue unknown, RL datasets and scenario infrastructure) ([Preqin](https://www.preqin.com/data/profile/asset/boden-ai/511371); [company](https://www.boden.ai/post/joint-open-source-release-1-000-hours-of-real-world-robot-reinforcement-learning-data-rw-rl-dataset)) |
| Moat Signals | Physical task implementations, scoring sheets, and downloadable evaluation recordings (SE3 Research, [October 2026](https://se3labs.ai/blog/dream-eval-1/)) |
| Risk Factors | Customer-data reuse restrictions, physical testing interruptions, company-name ambiguity (SE3 [Privacy](https://se3labs.ai/privacy/), SE3 [Terms](https://se3labs.ai/terms/), separate [Munich company](https://www.se3.ai/)) |
| Founder Reach | No public data found |
| Distribution Signals | Public Python documentation and task catalog (SE3 [Developer Resources](https://docs.se3labs.ai/), [Tasks](https://docs.se3labs.ai/tasks/), November 2026) |
| Emails | conan@se3labs.ai — general, privacy, and contractual contact; named-founder association unverified (SE3 [Terms](https://se3labs.ai/terms/), [Privacy Policy](https://se3labs.ai/privacy/)) |
