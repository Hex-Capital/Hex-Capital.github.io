# Plover Labs

> Enable enterprises to ship agent code without human review

| Field | Value |
|-------|-------|
| Website | https://ploverlabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/plover-labs |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/plover-labs)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, Enterprise, Enterprise Software, AI |
| YC Partner | Nicolas Dessaigne ([Y Combinator](https://www.ycombinator.com/companies/plover-labs)) |
| Emails | edward@edwardahn.me, CEO ([Ahn’s website](https://edwardahn.me/)), zmwang622@gmail.com, CTO ([Wang’s website](https://zmwang622.github.io/)) |

## The Idea

- **Problem:** Enterprise engineers review agent-written changes before merging because general-purpose coding models lack context on repository conventions, architecture and past failures ([YC company profile](https://www.ycombinator.com/companies/plover-labs), [Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)).
- **Approach:** Plover learns from repository history, team workflows and agent failures, then changes the codebase and adds deterministic merge checks for recurring mistakes ([YC company profile](https://www.ycombinator.com/companies/plover-labs)).
- **Differentiation:** Plover emphasizes turning observed failures into deterministic merge checks, while CodeRabbit emphasizes independent AI review and triage, Qodo manages enterprise review rules across development workflows, and Greptile brings agentic review and merge checks into a PR inbox ([YC company profile](https://www.ycombinator.com/companies/plover-labs), [CodeRabbit](https://www.coderabbit.ai/blog/coderabbit-100-million-arr), [Qodo](https://www.qodo.ai/blog/qodo-70m-series-b-shift-to-artificial-wisdom/), [Greptile](https://www.greptile.com/blog/code-review-is-evolving)).
- **Business Model:** Plover reports five-figure monthly enterprise contracts with Envoy and Fieldguide ([YC company profile, Nov 2026](https://www.ycombinator.com/companies/plover-labs)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: The named enterprise contracts and Fieldguide’s joint implementation point to direct sales to engineering teams, and the homepage offers an email contact whose address could not be retrieved ([YC company profile](https://www.ycombinator.com/companies/plover-labs), [Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge), [Plover Labs website](https://ploverlabs.ai/)).

## Defensibility

- **Moat today:** Fieldguide uses Plover’s evaluation system to test proposed fixes against previously shipped work, building a repository-specific set of regressions and workflow checks ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)).
- **Future moat:** [Inferred]: Accumulated checks could make switching costly if a replacement must recreate them, but ownership and portability terms are undisclosed ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** GitHub already provides rulesets that require checks before merge and lets organizations configure automatic Copilot review ([GitHub ruleset documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets), [GitHub Copilot documentation](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review)).

## Market & Traction

- **Traction signals:**
  - Paid enterprise customers Envoy and Fieldguide ([YC company profile, Nov 2026](https://www.ycombinator.com/companies/plover-labs)).
  - Customer outcome reported by Plover: Fieldguide tripled PRs per engineer in one quarter with unchanged headcount and PR size ([YC company profile, Nov 2026](https://www.ycombinator.com/companies/plover-labs)).
  - Customer testimonial: Fieldguide reported 40% higher total merged PR throughput in Forge’s first production quarter and 1.3–1.6× faster merges for Forge-authored PRs, with flat rollback rates and defect severity ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)).
  - Customer testimonial: Forge produced merge-ready patches on 37 of 40 retrospective tasks, with a 28-minute median completion time ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)).
  - June 2026 launch date listed by Dealroom ([Dealroom, accessed Nov 2026](https://app.dealroom.co/companies/plover_labs)).
  - YC Fall 2026 participation ([Y Combinator](https://www.ycombinator.com/companies/plover-labs)); Dealroom lists a $125K YC financing entry dated September 2026 ([Dealroom, accessed Nov 2026](https://app.dealroom.co/companies/plover_labs)).
  - Company spotlight in The AI Read ([The AI Read, Nov 2026](https://theairead.com/ventures)).
  - Zero postings on YC Jobs ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/plover-labs/jobs)).
- **Competitors:**
  - CodeRabbit ($231M raised, $100M ARR): sells AI review and change triage, and raised a $143M Series C co-led by Atomico and Smash Capital in August 2026 ([Forge Global](https://forgeglobal.com/coderabbit_ipo/), [CodeRabbit ARR, Nov 2026](https://www.coderabbit.ai/blog/coderabbit-100-million-arr), [CodeRabbit funding, Aug 2026](https://www.coderabbit.ai/newsroom/coderabbit-series-c-agentic-change-management)).
  - Qodo ($120M raised, revenue unknown): combines specialized review agents with enterprise rules management, and raised a $70M Series B led by Qumra Capital in March 2026 ([Qodo, Mar 2026](https://www.qodo.ai/blog/qodo-70m-series-b-shift-to-artificial-wisdom/)).
  - Greptile ($79.1M in announced rounds, eight-figure ARR): reviews and tests PRs and surfaces merge checks in a review inbox, and raised a $50M Series B led by Menlo Ventures in October 2026 ([Greptile seed](https://www.greptile.com/blog/seed), [Series A](https://www.greptile.com/blog/series-a), [Series B](https://www.greptile.com/blog/series-b), [Greptile Careers](https://www.greptile.com/careers/swe-product), [Greptile product update](https://www.greptile.com/blog/code-review-is-evolving)).
- **Why now:** [Inferred]: Production deployment of coding agents creates demand for merge verification, as illustrated by Fieldguide routing agent-written patches through Forge’s checks before engineer review ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)).

## Founders & Team

- **Edward Ahn (Founder/CEO):**
  - Background: Completed a Carnegie Mellon master’s thesis on safe reinforcement learning, researched agents for Apple Vision Pro and founded InPerson, a 3D telepresence startup backed by Nat Friedman and Daniel Gross. Public contact: edward@edwardahn.me ([Ahn’s website](https://edwardahn.me/), [YC founder profile](https://www.ycombinator.com/founders/edward-ahn)).
  - Twitter/X: @edwardahn9, count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/edward-ahn)).
  - LinkedIn: Profile linked by YC, headline not retrievable ([YC founder profile](https://www.ycombinator.com/founders/edward-ahn)).
  - GitHub: @edhyah, BrailleWare with 4 stars ([GitHub, Nov 2026](https://github.com/edhyah/BrailleWare)).
- **Zhengming Wang (Founder/CTO):**
  - Background: Studied computer science at the University of Pittsburgh, built products at Retool, led monetization at Character.AI and sold a student recruiting platform in 2023. Public contact: zmwang622@gmail.com ([Pitt commencement program](https://www.commencement.pitt.edu/sites/default/files/2022-commencement-program.pdf), [Wang’s website](https://zmwang622.github.io/), [YC founder profile](https://www.ycombinator.com/founders/zhengming-wang)).
  - Twitter/X: No public account found.
  - LinkedIn: Indexed as “Zhengming Wang - Character.AI,” full headline not retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/mingw64)).
  - GitHub: @zmwang622, Summer Internships list now maintained as SimplifyJobs/Summer2027-Internships, with 48.4K stars ([Wang’s website](https://zmwang622.github.io/), [GitHub, Nov 2026](https://github.com/SimplifyJobs/Summer2027-Internships)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Ahn brings applied agent research and Wang brings developer-tool and AI product engineering, with Nicolas Dessaigne listed as Plover’s YC partner ([Ahn’s YC profile](https://www.ycombinator.com/founders/edward-ahn), [Wang’s YC profile](https://www.ycombinator.com/founders/zhengming-wang), [YC company profile](https://www.ycombinator.com/companies/plover-labs)).

## Key Risks

- **Verification coverage:** A Forge patch passed component tests while missing a required integration, prompting Fieldguide to add a regression case and retain engineer approval at merge ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)).
- **Customer-specific implementation:** [Inferred]: Rollout effort may rise with each repository’s verification needs, as Fieldguide co-built its deployment and plans to extend its task-specific checks ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)).
- **Platform substitution:** [Inferred]: GitHub customers can assemble overlapping controls using native required checks and Copilot review ([GitHub ruleset documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets), [GitHub Copilot documentation](https://docs.github.com/en/copilot/how-tos/copilot-on-github/set-up-copilot/configure-code-review)).
- **Name collision:** A separate web and app development studio uses Plover Labs at ploverlabs.tech, while YC links the startup to ploverlabs.ai ([Plover Labs studio](https://www.ploverlabs.tech/), [YC company profile](https://www.ycombinator.com/companies/plover-labs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Envoy and Fieldguide are customers, with 3× PRs per engineer at Fieldguide in one quarter reported by Plover ([YC company profile, Nov 2026](https://www.ycombinator.com/companies/plover-labs)); Customer testimonial: Fieldguide reports 40% higher total merged PR throughput in Forge’s first production quarter ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)). |
| Revenue Signal | Five-figure monthly contracts with Envoy and Fieldguide ([YC company profile, Nov 2026](https://www.ycombinator.com/companies/plover-labs)). |
| Founders | Edward Ahn (CEO): InPerson founder, Apple agent research, Carnegie Mellon ([Ahn’s website](https://edwardahn.me/)). Zhengming Wang (CTO): Retool, Character.AI, student recruiting platform sold in 2023 ([Wang’s website](https://zmwang622.github.io/)). |
| Competitors | CodeRabbit ($231M raised, $100M ARR, AI review and triage) ([Forge Global](https://forgeglobal.com/coderabbit_ipo/), [CodeRabbit](https://www.coderabbit.ai/blog/coderabbit-100-million-arr)). Qodo ($120M raised, revenue unknown, enterprise review rules) ([Qodo](https://www.qodo.ai/blog/qodo-70m-series-b-shift-to-artificial-wisdom/)). Greptile ($79.1M in announced rounds, eight-figure ARR, PR review and merge checks) ([Greptile funding announcements](https://www.greptile.com/blog), [Greptile Careers](https://www.greptile.com/careers/swe-product)). |
| Moat Signals | Customer-specific checks and regression cases tested against previously shipped Fieldguide work ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)). |
| Risk Factors | Verification coverage, customer-specific implementation ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)), overlap with native merge controls ([GitHub ruleset documentation](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-rulesets/available-rules-for-rulesets)). |
| Founder Reach | Edward Ahn: @edwardahn9, X count not retrievable, BrailleWare 4 GitHub stars ([YC founder profile](https://www.ycombinator.com/founders/edward-ahn), [GitHub, Nov 2026](https://github.com/edhyah/BrailleWare)). Zhengming Wang: Summer Internships list 48.4K GitHub stars ([GitHub, Nov 2026](https://github.com/SimplifyJobs/Summer2027-Internships)). |
| Distribution Signals | Fieldguide engineering case study ([Fieldguide, Aug 2026](https://www.fieldguide.com/blog/forge)), founder LinkedIn post linking the case study ([Edward Ahn, LinkedIn](https://www.linkedin.com/posts/edwardsahn_forge-powering-agentic-engineering-at-fieldguide-activity-7493753205638475777-V6EU)), newsletter spotlight ([The AI Read, Nov 2026](https://theairead.com/ventures)). |
| Emails | edward@edwardahn.me, CEO ([Ahn’s website](https://edwardahn.me/)), zmwang622@gmail.com, CTO ([Wang’s website](https://zmwang622.github.io/)). |
