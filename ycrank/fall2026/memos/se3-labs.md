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
| Emails | conan@se3labs.ai — Conan Yu, company inquiries and privacy contact ([SE3 Labs](https://se3labs.ai/), [Privacy Policy](https://se3labs.ai/privacy/)) |

## The Idea

- **Problem:** Robot model teams testing factory and hotel workflows face a physical bottleneck after simulation or in-house lab tests because each trial requires hardware, task setup, a way to verify success, and a reset ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), Nov 2026).
- **Approach:** SE3 runs customer policies on standardized robot workcells, captures human interventions when a policy fails or reaches a safety boundary, and packages the recordings as annotated training data for the next model update ([SE3 Labs](https://se3labs.ai/), Nov 2026).
- **Differentiation:** SE3 emphasizes partner-site workcells and correction recordings, while Enact retrains customer policies in-house, Asim emphasizes standardized safety stress tests, Lightwheel offers simulation-based evaluation, and Config pairs bimanual training data with its own foundation model ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), [Enact on YC](https://www.ycombinator.com/companies/enact), [Asim](https://www.asim-group.com/), [Lightwheel](https://www.lightwheel.ai/robofinals), [Config](https://config.inc/)).
- **Business Model:** SE3 sets project fees, hardware, test scope, and deliverables in customer orders or statements of work ([SE3 Labs Terms of Service](https://se3labs.ai/terms/), Sep 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** SE3 solicits robot model and simulation teams through its YC launch and website, offers an initial evaluation with one policy and one task, and recruits factories and hotels to supply workflows and site access ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), [SE3 Labs](https://se3labs.ai/), Nov 2026).

## Defensibility

- **Moat today:** SE3 reports access to U.S. automotive, processing, and hospitality sites and operates standardized workcells for comparing policy versions ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), [SE3 Labs](https://se3labs.ai/), Nov 2026).
- **Future moat:** [Inferred]: Repeated evaluations could build a library of site-specific failure cases, with reuse dependent on contract rights and customer authorization for model training ([SE3 Labs Terms of Service](https://se3labs.ai/terms/), Sep 2026).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** The public RoboDojo project provides tools for teams to run their own simulation and physical benchmarks, while Enact already offers physical rollouts and failure-targeted recovery data ([RoboDojo](https://robodojo-benchmark.com/), Jul 2026, [Enact on YC](https://www.ycombinator.com/companies/enact)).

## Market & Traction

- **Traction signals:**
  - Y Combinator backing, with a $125K September seed entry reported by Dealroom and total financing unverified ([Y Combinator](https://www.ycombinator.com/companies/se3-labs), [Dealroom](https://app.dealroom.co/companies/se3_labs_1), Nov 2026).
  - U.S. site network covering three types of environments across industrial, processing, and hospitality operations, with physical training sandboxes at partner sites described as the next step ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), Nov 2026).
  - 500 teleoperation episodes across 10 benchmark tasks, with 1,596 dataset downloads in the preceding month as displayed by Hugging Face ([SE3 Labs RoboDojo–Real dataset](https://huggingface.co/datasets/se3labs/real-robodojo-teleop-500), Nov 17, 2026).
  - 27,075 views on Paige Xu’s Nov 9 launch post as of Nov 15 ([Doomers AI](https://doomers.ai/launches/se3-labs), Nov 2026).
  - NVIDIA Inception membership displayed on the company site ([SE3 Labs](https://se3labs.ai/), Nov 2026).
  - Coverage in Pub-AI’s *Radar Weekly* ([Pub-AI](https://www.pub-ai.com/news/radar-weekly-2026-11-13/), Nov 13, 2026).
  - 0 active YC job postings ([YC Jobs](https://www.ycombinator.com/companies/se3-labs/jobs), Nov 17, 2026).
  - Company X handle @se3labs and LinkedIn page identified, with follower counts not retrievable ([Dealroom](https://app.dealroom.co/companies/se3_labs_1), Nov 2026).
- **Competitors:**
  - Enact (YC-backed, funding amount unverified, revenue unknown): Recreates repeatable failure states and fine-tunes customer policies in-house ([Enact on YC](https://www.ycombinator.com/companies/enact), 2026).
  - Asim (Dealroom lists $125K raised, CB Insights lists a $500K September convertible note via search snippet, revenue unknown): Stress-tests robots under changing physical conditions to assess capabilities and safety limits ([Dealroom](https://dealroom.co/just-founded/asim/), [CB Insights](https://www.cbinsights.com/company/asim/financials), [Asim on YC](https://www.ycombinator.com/companies/asim-group), 2026).
  - Lightwheel (at least RMB 2B across reported 2026 rounds, revenue unknown): Offers RoboFinals simulation evaluation and raised RMB 1B in June strategic financing with investors including Zhongguancun Science City Fund, with a lead investor undisclosed ([Lightwheel](https://www.lightwheel.ai/robofinals), [Gasgoo](https://autonews.gasgoo.com/articles/news/seeds-lightwheel-secures-another-1-billion-yuan-in-strategic-financing-2069405877394952193), Jun 2026).
  - Config ($35M raised, revenue unknown): Supplies bimanual training data and adapts its own foundation model, with a $27M seed announced in May led by Samsung Venture Investment ([Config](https://config.inc/), [TechCrunch](https://techcrunch.com/2026/05/11/koreas-biggest-manufacturers-back-config-the-tsmc-of-robot-data/), May 2026).
- **Why now:** [Inferred]: Physical Intelligence’s November 2025 demonstration of a generalist robot policy learning from real-world outcomes and human corrections gives model teams a method for using the rollouts and interventions SE3 collects ([Physical Intelligence](https://www.pi.website/blog/pistar06), Nov 2025, [SE3 Labs](https://se3labs.ai/)).

## Founders & Team

- **Paige Xu (Co-founder):**
  - Background: Studied economics and environmental studies at Dartmouth, worked at McKinsey and OKX, and co-founded OpenMind, where she helped deploy robots in factories ([Dartmouth Women in Business](https://bpb-us-e1.wpmucdn.com/journeys.dartmouth.edu/dist/9/5090/files/2020/06/20S-Alumni-Newsletter-1.pdf), [LinkedIn](https://www.linkedin.com/posts/paigexu_opl-boba-time-from-mckinsey-to-web3-investment-activity-7099519952415576064-x-Ra), [Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models)). Business email and prior exits: No public data found.
  - Twitter/X: @paigeinsf, 4,541 followers at launch ([Doomers AI](https://doomers.ai/launches/se3-labs), Nov 9, 2026).
  - LinkedIn: Profile identified, current headline not retrievable ([Paige Xu’s LinkedIn post](https://www.linkedin.com/posts/paigexu_opl-boba-time-from-mckinsey-to-web3-investment-activity-7099519952415576064-x-Ra)).
  - GitHub: No public repos found.
- **Mark Chen (Co-founder):**
  - Background: Robotics research at Stanford and experience at Amazon FAR ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models)). Degree, prior exits, and business email: No public data found.
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found.
  - GitHub: No public repos found.
- **Conan Yu (Co-founder):**
  - Background: Built a data infrastructure company serving IMC Trading and OpenSea and is SE3’s published business and privacy contact at conan@se3labs.ai ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), [SE3 Labs Privacy Policy](https://se3labs.ai/privacy/)). Education and prior exits: No public data found.
  - Twitter/X: No public account found.
  - LinkedIn: No public profile found.
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Xu’s factory deployments, Chen’s robotics research, and Yu’s data infrastructure work cover site operations, policy testing, and data delivery, with David Lieb listed as the assigned YC partner ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), [Y Combinator](https://www.ycombinator.com/companies/se3-labs), Nov 2026).

## Key Risks

- **Deployment transfer:** SE3 reported zero full-task completions across 100 zero-shot Dream-1 episodes on its test station and plans to test updated policies on held-out task variations ([SE3 Labs Dream-1 evaluation](https://se3labs.ai/blog/dream-eval-1/), Oct 2026, [Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), Nov 2026).
- **Site access:** [Inferred]: Partner permissions and operating schedules can constrain on-site testing, while standardized workcells let SE3 run initial evaluations in controlled labs ([SE3 Labs](https://se3labs.ai/), Nov 2026, [Terms of Service](https://se3labs.ai/terms/), Sep 2026).
- **Data permissions:** Evaluation recordings may include workers or sensitive site details, so SE3 disables raw recording by default and requires authorization to enable it ([SE3 Labs Privacy Policy](https://se3labs.ai/privacy/), Sep 2026).
- **Name collision:** The former SE3 Labs in Munich uses `se3.ai`, creating a risk of attributing its funding and press coverage to the San Francisco company at `se3labs.ai` ([Fortune](https://fortune.com/2026/11/12/exclusive-se3-a-munich-startup-building-spatial-intelligence-for-military-drones-gets-30-million-in-series-a-funding/), Nov 2026, [Y Combinator](https://www.ycombinator.com/companies/se3-labs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Three U.S. site categories ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), Nov 2026), 500 released episodes and 1,596 monthly dataset downloads ([Hugging Face](https://huggingface.co/datasets/se3labs/real-robodojo-teleop-500), Nov 17, 2026), NVIDIA Inception membership ([SE3 Labs](https://se3labs.ai/), Nov 2026), coverage in *Radar Weekly* ([Pub-AI](https://www.pub-ai.com/news/radar-weekly-2026-11-13/), Nov 2026) |
| Revenue Signal | No public data found |
| Founders | Paige Xu (co-founder), Dartmouth and OpenMind factory deployments ([Dartmouth](https://bpb-us-e1.wpmucdn.com/journeys.dartmouth.edu/dist/9/5090/files/2020/06/20S-Alumni-Newsletter-1.pdf), [Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models)). Mark Chen (co-founder), Amazon FAR and Stanford robotics research. Conan Yu (co-founder), data infrastructure for IMC Trading and OpenSea ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), Nov 2026). |
| Competitors | Enact (YC-backed, amount unverified, revenue unknown, in-house policy retraining, [YC](https://www.ycombinator.com/companies/enact)), Asim (funding records differ, revenue unknown, safety stress testing, [Dealroom](https://dealroom.co/just-founded/asim/), [CB Insights, via search snippet](https://www.cbinsights.com/company/asim/financials), [YC](https://www.ycombinator.com/companies/asim-group)), Lightwheel (at least RMB 2B reported, revenue unknown, simulation evaluation, [Gasgoo](https://autonews.gasgoo.com/articles/news/seeds-lightwheel-secures-another-1-billion-yuan-in-strategic-financing-2069405877394952193), [Lightwheel](https://www.lightwheel.ai/robofinals)), Config ($35M raised, revenue unknown, bimanual data and proprietary model, [TechCrunch](https://techcrunch.com/2026/05/11/koreas-biggest-manufacturers-back-config-the-tsmc-of-robot-data/), [Config](https://config.inc/)) |
| Moat Signals | Industry site access and standardized physical workcells ([Launch YC](https://www.ycombinator.com/launches/XBQ-se3-labs-real-world-rl-environments-for-robot-models), [SE3 Labs](https://se3labs.ai/), Nov 2026) |
| Risk Factors | Deployment transfer ([SE3 Labs evaluation](https://se3labs.ai/blog/dream-eval-1/)), site access ([Terms of Service](https://se3labs.ai/terms/)), recording and reuse permissions ([Privacy Policy](https://se3labs.ai/privacy/)) |
| Founder Reach | Paige Xu: 4,541 X followers at launch ([Doomers AI](https://doomers.ai/launches/se3-labs), Nov 9, 2026) |
| Distribution Signals | 27,075 X launch-post views ([Doomers AI](https://doomers.ai/launches/se3-labs), Nov 15, 2026), 1,596 monthly benchmark dataset downloads ([Hugging Face](https://huggingface.co/datasets/se3labs/real-robodojo-teleop-500), Nov 17, 2026) |
| Emails | conan@se3labs.ai — Conan Yu, company inquiries and privacy contact ([SE3 Labs](https://se3labs.ai/), [Privacy Policy](https://se3labs.ai/privacy/)) |
