# Runtime.si

> Robots that think in simulation

| Field | Value |
|-------|-------|
| Website | https://runtime.si/ |
| YC Page | https://www.ycombinator.com/companies/runtimesi |
| Batch | Fall 2026 ([YC directory](https://www.ycombinator.com/companies/runtimesi)) |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Robotics, Infrastructure, AI |
| YC Partner | Aaron Epstein ([YC directory](https://www.ycombinator.com/companies/runtimesi)) |
| Emails | lemonzhong001@163.com (Liam Zhong’s published professional contact, [founder website](https://nz-liam-zhong.github.io/)) |

## The Idea

- **Problem:** Robot builders and deployers can spend hours collecting teleoperated demonstrations and fine-tuning a policy each time a manipulation task changes. ([Skild AI S1](https://skild.ai/blogs/s1), [Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))
- **Approach:** Runtime reconstructs the scene from robot observations, searches candidate actions in simulation, executes a selected action, and updates the simulation from physical feedback. ([Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))
- **Differentiation:** Runtime searches a simulated copy of the scene before acting, while Physical Intelligence’s π0.7 recombines skills learned during training, Generalist’s GEN-1.5 adapts from a short example, and Skild’s S1 translates a video demonstration into robot actions. ([Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation), [Physical Intelligence](https://www.pi.website/blog/pi07), [Generalist](https://generalistai.com/blog/gen-1.5), [Skild AI](https://skild.ai/blogs/s1))
- **Business Model:** [Inferred]: A software license for robot builders is one possible monetization path because the policy would run as part of their deployed control stack.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Runtime invites robot builders and deployers to sign up directly at runtime.si and says early access opens in January. ([Runtime website](https://runtime.si/), [Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))

## Defensibility

- **Moat today:** Runtime’s RoboSkillHub documents reusable manipulation components and records which have been verified on physical hardware. ([Runtime GitHub](https://github.com/runtime-si/RoboSkillHub/))
- **Future moat:** [Inferred]: A library of discrepancies between simulated and physical outcomes could improve planning across deployments, but Runtime’s launch disclosures give no evidence of a deployed fleet generating that data. ([Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Robotics labs and vendors can prototype a similar approach using open GPU physics tools, and the Simify research team has already demonstrated parallel simulation search for physical object rearrangement. ([NVIDIA Newton](https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/), [Simify preprint](https://arxiv.org/abs/2609.33982))

## Market & Traction

- **Traction signals:**
  - Current robot policy launched November 4, with 69 votes on Launch YC as of November 17. ([Runtime website](https://runtime.si/), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))
  - Runtime reports matching or exceeding unnamed robot foundation models in experiments including rope threading and egg grasping, with trial counts and success rates undisclosed in the launch post. ([Runtime YC launch, Nov 2026](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))
  - @runtimesi had 357 X followers, and its policy launch post had approximately 222,000 views. ([Teapawt mirror of X, Nov 2026 snapshot](https://www.teapawt.org/runtimesi))
  - Four open YC listings covered GTM, software infrastructure, electrical engineering, and mechatronics, with role descriptions still using the Lambda Robotics name. ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/runtimesi/jobs))
  - Pareto Holdings and Y Combinator are listed as backers, alongside participation in NVIDIA Inception. ([Runtime website](https://runtime.si/), [Liam Zhong’s website, Nov 2026](https://nz-liam-zhong.github.io/))
  - Dealroom records $125,000 from YC in September, while a CB Insights search snippet lists a $500,000 August convertible note under Lambda Robotics, leaving the company-confirmed financing total unresolved. ([Dealroom, Sep 2026](https://app.dealroom.co/companies/runtime_si), [CB Insights, Aug 2026, via search snippet](https://www.cbinsights.com/company/lambda-robotics/financials))
  - Launch coverage appeared in Reveneau on November 5 and Founderland on November 9. ([Reveneau, Nov 2026](https://reveneau.com/ainews/runtime-si-yc-fall-2026-robot-simulation-policy-55-votes), [Founderland, Nov 2026](https://founderland.ai/articles/runtime-launches-robot-policy-that-plans-in-simulation-no-tu-mw9iuw9j))
  - Earlier product, Lambda Robotics data-center automation: its July site described autonomous robots for AI infrastructure, and its YC GTM listing refers to early pilots without naming customers or giving counts. ([Lambda Robotics, Jul 2026](https://lambdarobotics.ai/), [YC GTM listing](https://www.ycombinator.com/companies/runtimesi/jobs/UFzIOBo-founding-gtm))
  - Earlier product, Runtime simulation and evaluation: the October announcement pitched predeployment policy testing, and Runtime reported that its Nomad/LIBERO simulation experiments went from 152/525 successes without task skills to 283/525 with the best observed skill cohorts. ([Runtime website, Oct 2026](https://runtime.si/), [Runtime research, Oct 2026](https://runtime.si/research/skills-for-agentic-robotic-manipulation/))
- **Competitors:**
  - **Skild AI** (over $2B raised, over $100M ARR): S1 takes task instructions from video demonstrations, and its latest announced round was a $1.4B Series C led by SoftBank in January 2026. ([TechCrunch citing Skild’s CEO](https://techcrunch.com/2026/01/14/robotic-software-maker-skild-ai-hits-14b-valuation/), [Skild Series C](https://www.skild.ai/blogs/series-c), [Skild ARR](https://skild.ai/blogs/skild-crosses-100m-arr), [S1](https://skild.ai/blogs/s1))
  - **Generalist** (approximately $700M raised, revenue unknown): GEN-1.5 adapts from a short demonstration, and the August 2026 Series B extension sold $198.2M in securities with 8VC reported as lead. ([Generalist funding](https://generalistai.com/blog/accelerating-the-next-phase-of-physical-ai), [SEC Form D](https://www.sec.gov/Archives/edgar/data/2137708/000213770826000004/xslFormDX01/primary_doc.xml), [Axios](https://www.axios.com/2026/08/24/robotics-ai-generalist-200m), [GEN-1.5](https://generalistai.com/blog/gen-1.5))
  - **Physical Intelligence** ($2.12B raised per Forge, revenue unknown): π0.7 recombines learned manipulation skills, and Forge lists a $1.05B May 2026 Series C with Founders Fund and Lightspeed among participants. ([Forge](https://forgeglobal.com/physical-intelligence_ipo/), [Physical Intelligence](https://www.pi.website/blog/pi07))
- **Why now:** [Inferred]: Newton’s March 2026 release added GPU-parallel, contact-rich manipulation simulation, making it more practical to evaluate candidate actions for tasks involving physical contact. ([NVIDIA Technical Blog, Mar 2026](https://developer.nvidia.com/blog/newton-adds-contact-rich-manipulation-and-locomotion-capabilities-for-industrial-robotics/))

## Founders & Team

- **Chen Peng (Co-founder and CEO):**
  - Background: Penn physics BA, model interpretability and brain foundation model work at Penn GRASP and Penn Engineering, and prior BlackRock experience reported by Dealroom (business email: No public data found). ([YC founder profile](https://www.ycombinator.com/founders/chen-peng), [Dealroom](https://dealroom.co/just-founded/runtime-si/))
  - Twitter/X: @chennpeng, 75 followers. ([YC founder profile](https://www.ycombinator.com/founders/chen-peng), [Teapawt mirror of X, Nov 2026](https://nitter.cf/chennpeng))
  - LinkedIn: Headline not retrievable. ([YC-linked profile](https://www.linkedin.com/in/chen-peng-6737681bb/))
  - GitHub: No public repos found.
- **Yim Ying (Co-founder):**
  - Background: Penn mechanical engineering and full-stack robotics work in manipulation, manufacturing, and product development (business email: No public data found). ([YC founder profile](https://www.ycombinator.com/founders/qingyun-ying))
  - Twitter/X: No public account found.
  - LinkedIn: Headline not visible, 93 followers. ([LinkedIn, via search snippet](https://www.linkedin.com/in/yim-ying-46558235b))
  - GitHub: No public repos found.
- **Liam Zhong (Co-founder and CTO):**
  - Background: Sun Yat-sen University BEng, Penn GRASP robotics MSE in progress, and research in control, reinforcement learning, and computer vision (professional contact: lemonzhong001@163.com). ([Founder website](https://nz-liam-zhong.github.io/), [YC founder profile](https://www.ycombinator.com/founders/ningze-zhong))
  - Twitter/X: No public account found.
  - LinkedIn: Headline not retrievable. ([YC-linked profile](https://www.linkedin.com/in/ningze-zhong-a62917388/))
  - GitHub: @NZ-Liam-Zhong, `Awesome_AI_for_Robotics_Learning_Notes` had 29 stars. ([GitHub, Nov 2026](https://github.com/NZ-Liam-Zhong/Awesome_AI_for_Robotics_Learning_Notes))
- **Co-founder relationship:** The founders identify Penn’s GRASP Lab as their shared affiliation. ([Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))
- **Founder-market fit:** Zhong’s control and reinforcement learning research and Ying’s manipulation and manufacturing work map to Runtime’s robot planning and deployment work. ([Zhong YC profile](https://www.ycombinator.com/founders/ningze-zhong), [Ying YC profile](https://www.ycombinator.com/founders/qingyun-ying), [Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))

## Key Risks

- **Control latency:** Searching candidate actions adds computation before execution, and Runtime says it is accelerating the loop for live operation. ([Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation))
- **Physical generalization:** [Inferred]: Errors in reconstructed geometry or contact behavior could invalidate an action that succeeds in simulation, and Runtime’s feedback loop updates the scene as the robot observes physical outcomes. ([Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation), [Simify preprint](https://arxiv.org/abs/2609.33982))
- **Deployment burden:** [Inferred]: Removing per-task fine-tuning still leaves integration, installation, and maintenance work that Skild reports encountering in commercial deployments. ([Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation), [Skild deployment report](https://skild.ai/blogs/skild-crosses-100m-arr))
- **Name collision:** YC also lists a Spring 2026 payments software company called Runtime at runtm.com, creating ambiguity in searches for the robotics company. ([YC Runtime.si listing](https://www.ycombinator.com/companies/runtimesi), [YC Runtime listing](https://www.ycombinator.com/companies/runtime))

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Policy launch November 4 and 69 YC votes ([Runtime website](https://runtime.si/), [Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation)); four open roles ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/runtimesi/jobs)); earlier Lambda data-center pilots referenced without counts ([YC GTM listing](https://www.ycombinator.com/companies/runtimesi/jobs/UFzIOBo-founding-gtm)) |
| Revenue Signal | No public data found |
| Founders | Chen Peng (CEO), Penn physics and model interpretability ([YC](https://www.ycombinator.com/founders/chen-peng)); Yim Ying (Co-founder), Penn mechanical engineering and robot manipulation ([YC](https://www.ycombinator.com/founders/qingyun-ying)); Liam Zhong (CTO), Penn GRASP and reinforcement learning ([YC](https://www.ycombinator.com/founders/ningze-zhong)) |
| Competitors | Skild AI (over $2B raised, over $100M ARR, video-conditioned policy; [TechCrunch](https://techcrunch.com/2026/01/14/robotic-software-maker-skild-ai-hits-14b-valuation/), [Skild](https://skild.ai/blogs/skild-crosses-100m-arr)); Generalist (approximately $700M raised, revenue unknown, one-shot policy; [Generalist funding](https://generalistai.com/blog/accelerating-the-next-phase-of-physical-ai), [SEC](https://www.sec.gov/Archives/edgar/data/2137708/000213770826000004/xslFormDX01/primary_doc.xml), [GEN-1.5](https://generalistai.com/blog/gen-1.5)); Physical Intelligence ($2.12B raised per Forge, revenue unknown, learned skill recombination; [Forge](https://forgeglobal.com/physical-intelligence_ipo/), [Physical Intelligence](https://www.pi.website/blog/pi07)) |
| Moat Signals | RoboSkillHub documents reusable skills and physical verification records ([Runtime GitHub](https://github.com/runtime-si/RoboSkillHub/)) |
| Risk Factors | Live planning latency, physical generalization, deployment integration ([Runtime YC launch](https://www.ycombinator.com/launches/Wkk-runtime-robots-that-think-in-simulation), [Simify](https://arxiv.org/abs/2609.33982), [Skild](https://skild.ai/blogs/skild-crosses-100m-arr)) |
| Founder Reach | Chen Peng: 75 X followers ([Teapawt, Nov 2026](https://nitter.cf/chennpeng)); Yim Ying: 93 LinkedIn followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/yim-ying-46558235b)); Liam Zhong: 29 GitHub stars on robotics learning notes ([GitHub, Nov 2026](https://github.com/NZ-Liam-Zhong/Awesome_AI_for_Robotics_Learning_Notes)) |
| Distribution Signals | 357 X followers and approximately 222,000 policy launch post views ([Teapawt, Nov 2026](https://www.teapawt.org/runtimesi)); direct early-access signup ([Runtime website](https://runtime.si/)) |
| Emails | lemonzhong001@163.com (Liam Zhong’s published professional contact, [founder website](https://nz-liam-zhong.github.io/)) |
