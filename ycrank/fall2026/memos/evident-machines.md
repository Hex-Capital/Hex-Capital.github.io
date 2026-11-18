# Evident Machines

> Real-world benchmarks and RL environments for electrical engineering

| Field | Value |
|-------|-------|
| Website | https://evidentmachines.com/ |
| YC Page | https://www.ycombinator.com/companies/evident-machines |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/evident-machines)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hardware, Machine Learning, Robotics, Electronics, AI |
| YC Partner | Jon Xu ([Y Combinator](https://www.ycombinator.com/companies/evident-machines)) |
| Emails | hitrishalajain@gmail.com (Trishala Jain’s published contact, [LinkedIn](https://www.linkedin.com/in/trishalajain7), via search snippet), legal@evidentmachines.com (legal and privacy inquiries, [Evident Machines Privacy Policy](https://evidentmachines.com/privacy/)) |

## The Idea

- **Problem:** Frontier AI labs relying on simulation can miss measurement noise, component variation, and hardware failure modes that change what engineers need to test next ([Evident Machines](https://evidentmachines.com/)).
- **Approach:** Models work through design and simulation, direct physical experiments, control instruments, and interpret measurements while operators handle wiring and probe placement, generating data for evaluations and reinforcement-learning environments ([Y Combinator](https://www.ycombinator.com/companies/evident-machines), [Evident Machines](https://evidentmachines.com/)).
- **Differentiation:** PCBBench grades circuit-board designs using rule checks and simulation, Diode’s PCB Gym scores component placement and routing, and Evident Machines evaluates experimental decisions and measurements on physical hardware ([PCBBench](https://pcbbench.org/), [Anthropic](https://www.anthropic.com/research/claude-electronics-design), [Evident Machines](https://evidentmachines.com/)).
- **Business Model:** [Inferred]: Frontier AI labs could pay for custom evaluations or license training data and environments generated from bench experiments ([Y Combinator](https://www.ycombinator.com/companies/evident-machines)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The company recruits electrical engineers and researchers through a public call that offers compensation and paper co-authorship for accepted tasks, and identifies frontier AI labs as the intended users of its data and environments ([Call for Contributions](https://evidentmachines.com/call-for-contributions/), [Y Combinator](https://www.ycombinator.com/companies/evident-machines)).

## Defensibility

- **Moat today:** The San Francisco lab captures instrument readings, expert workflows, and failures from physical experiments as inputs to training environments ([Evident Machines](https://evidentmachines.com/)).
- **Future moat:** [Inferred]: A growing library of reproducible hardware failures and expert corrections could make the training data harder to replicate, but dataset size, exclusivity, and downstream training gains remain undisclosed ([Evident Machines](https://evidentmachines.com/), [FrontierEE Bench announcement](https://nitter.cf/hitrishala/status/2122798238302695436)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Diode and Anthropic have already collaborated on circuit-board training tasks and an internal benchmark, demonstrating that a model lab and hardware partner can build overlapping evaluations ([Anthropic, Nov 2026](https://www.anthropic.com/research/claude-electronics-design)).

## Market & Traction

- **Traction signals:**
  - FrontierEE Bench launched Nov 17, 2026, with a top reported score of 36.7% and an average physical-hardware pass rate of 29.3% across 10 tasks that models passed at 100% in simulation ([CEO launch announcement](https://nitter.cf/hitrishala/status/2122798238302695436), [CEO results post](https://nitter.cf/hitrishala/status/2122798241892991379)). The standalone results page was inaccessible at the time of research.
  - Y Combinator backing for Fall 2026, with a $125K September entry in Dealroom and no company-confirmed total located ([company LinkedIn](https://www.linkedin.com/company/evidentmachines/), [Dealroom, Sep 2026 entry](https://app.dealroom.co/companies/evident_machines)).
  - 246 company LinkedIn followers ([company LinkedIn, Nov 2026](https://www.linkedin.com/company/evidentmachines/)).
  - 9 followers for @evidentmachines in the Oct 28 snapshot ([Frontrun on X, Oct 2026, mirrored](https://nitter.gq/frontrunvc/reposts)).
  - 0 active job postings on YC ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/evident-machines/jobs)).
  - Company coverage in The AI Read’s startup roundup ([The AI Read, Oct 29, 2026](https://theairead.com/ventures)).
  - Prior product **Buildbox**, an agent-analytics tool, launched Aug 3, 2026, before the electrical-engineering pivot was publicly profiled in October, and its former YC URL now redirects to Evident Machines ([Runtime Wire, Aug 2026](https://runtimewire.com/article/buildbox-launches-a-ux-layer-for-finding-hidden-ai-agent-failures), [The AI Read, Oct 2026](https://theairead.com/ventures), [former YC listing](https://www.ycombinator.com/companies/buildbox)).
- **Competitors:**
  - **Diode Computers** (at least $11.4M disclosed, revenue unknown): Designs and manufactures circuit boards and developed the PCB Gym placement-and-routing benchmark, with an $11.4M Series A led by Andreessen Horowitz announced in July 2025 ([YC funding announcement](https://www.linkedin.com/posts/y-combinator_davide-asnaghi-and-lenny-khazan-started-diode-activity-7354569362491543553-GpBp), [Anthropic](https://www.anthropic.com/research/claude-electronics-design)).
  - **Idler** (at least $9M disclosed, revenue unknown): Builds frontier-lab environments from production software and enterprise workflows and reports a multimillion-dollar lab contract, with its Paradigm-led $9M seed publicly announced in August 2026 ([Idler Careers](https://idler.ai/careers), [Runtime Wire, Aug 2026](https://runtimewire.com/article/idler-launches-ai-data-lab-9m-paradigm-seed)).
  - **Quilter** ($40M raised as of its October 2025 announcement, revenue unknown): Automates PCB layout with physics-based checks and announced a $25M Series B led by Index Ventures in October 2025 ([Quilter press release](https://www.businesswire.com/news/home/20251007165399/en/)).
  - The direct set is small in the sources reviewed because the overlap spans PCB design and fabrication, software-based training environments, and physical bench evaluations ([Anthropic](https://www.anthropic.com/research/claude-electronics-design), [Idler Careers](https://idler.ai/careers), [Evident Machines](https://evidentmachines.com/)).
- **Why now:** [Inferred]: Anthropic’s November 2026 report that Claude produced a working speakerphone prototype with Diode shows that frontier models can now complete enough of the design workflow to test the resulting hardware ([Anthropic, Nov 2026](https://www.anthropic.com/research/claude-electronics-design)).

## Founders & Team

- **Trishala Jain (Founder/CEO):**
  - Background: Studied electrical engineering, computer sciences, and business administration at UC Berkeley and worked on Gemini for Science at Google Labs, with prior roles at MongoDB and AppDynamics ([Berkeley Engineering](https://engineering.berkeley.edu/wp-content/uploads/2025/05/2025_Commencement_web.pdf), [YC founder profile](https://www.ycombinator.com/founders/trishala-jain)). She publishes hitrishalajain@gmail.com as her contact ([LinkedIn](https://www.linkedin.com/in/trishalajain7), via search snippet).
  - Twitter/X: @hitrishala, 990 followers ([X profile mirror, Nov 2026](https://nitter.cf/hitrishala)).
  - LinkedIn: Indexed title “Buildbox (YC S26),” 6K followers ([LinkedIn](https://www.linkedin.com/in/trishalajain7), via search snippet).
  - GitHub: @trishalajain7, `burble`, 0 stars ([GitHub](https://github.com/trishalajain7/burble), [Devpost](https://devpost.com/software/burble)).
- **Mark Nour (Founder/CTO):**
  - Background: Graduated from UC Berkeley in computer science, researched search-augmented model reasoning at Berkeley AI Research, and worked on distributed systems at Netflix and Google Cloud and language-model analysis at Amazon ([Mark Nour’s website](https://www.marknour.com/)). Business email: No public data found.
  - Twitter/X: @marknnour, 337 followers ([X profile mirror, Nov 2026](https://nitter.cf/marknnour)).
  - LinkedIn: Indexed title “Buildbox (YC S26),” 7K followers ([LinkedIn](https://www.linkedin.com/in/marknour), via search snippet).
  - GitHub: @marknnour, `smart-assistive-cane`, 1 star ([GitHub](https://github.com/marknnour/smart-assistive-cane)).
- **Co-founder relationship:** They met at UC Berkeley and built Oratora, an interview coach selected for Mayfield AI Garage in 2025 ([founder LinkedIn](https://www.linkedin.com/in/marknour), via search snippet, [Mayfield, May 2025](https://www.mayfield.com/meet-the-2025-mayfield-ai-garage-winning-teams-at-berkeley/)).
- **Founder-market fit:** Jain brings electrical-engineering training and science-AI product experience, Nour brings model-reasoning research and systems engineering, and YC lists Jon Xu as primary partner ([YC company profile](https://www.ycombinator.com/companies/evident-machines), [Mark Nour’s website](https://www.marknour.com/)).

## Key Risks

- **Bench throughput:** [Inferred]: Manual wiring and probe placement can limit how quickly experiments are repeated across models, and the company is recruiting paid contributors to develop and document tasks ([Evident Machines](https://evidentmachines.com/), [Call for Contributions](https://evidentmachines.com/call-for-contributions/)).
- **Technical feasibility:** [Inferred]: The reported 29.3% average hardware pass rate leaves open whether training on these failures will improve performance on unseen equipment and experiments ([CEO results post, Nov 2026](https://nitter.cf/hitrishala/status/2122798241892991379)).
- **Buyer substitution:** [Inferred]: Model labs can commission overlapping evaluations from hardware partners, as Anthropic’s work with Diode on PCB Gym demonstrates ([Anthropic, Nov 2026](https://www.anthropic.com/research/claude-electronics-design)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | FrontierEE Bench launched Nov 17, 2026, with 10 physical tasks, a 36.7% top score, and a 29.3% average hardware pass rate ([CEO launch](https://nitter.cf/hitrishala/status/2122798238302695436), [CEO results](https://nitter.cf/hitrishala/status/2122798241892991379)). Fall 2026 YC backing and a $125K September database entry ([company LinkedIn](https://www.linkedin.com/company/evidentmachines/), [Dealroom](https://app.dealroom.co/companies/evident_machines)). |
| Revenue Signal | No public data found |
| Founders | Trishala Jain (CEO), Berkeley EECS and business, Gemini for Science ([Berkeley Engineering](https://engineering.berkeley.edu/wp-content/uploads/2025/05/2025_Commencement_web.pdf), [YC](https://www.ycombinator.com/founders/trishala-jain)). Mark Nour (CTO), Berkeley CS, Berkeley AI Research, Netflix infrastructure ([founder site](https://www.marknour.com/)). |
| Competitors | Diode Computers (at least $11.4M disclosed, revenue unknown, PCB design and manufacturing) ([YC](https://www.linkedin.com/posts/y-combinator_davide-asnaghi-and-lenny-khazan-started-diode-activity-7354569362491543553-GpBp), [Diode](https://www.diode.computer/)). Idler (at least $9M disclosed, revenue unknown, production-workflow environments) ([Idler](https://idler.ai/careers)). Quilter ($40M raised as of October 2025, revenue unknown, PCB layout automation) ([Quilter press release](https://www.businesswire.com/news/home/20251007165399/en/)). |
| Moat Signals | Physical lab, instrument measurements, and captured expert workflows used to build training environments ([Evident Machines](https://evidentmachines.com/)). |
| Risk Factors | Manual wiring and probe placement ([Evident Machines](https://evidentmachines.com/)), 29.3% average hardware pass rate ([CEO results](https://nitter.cf/hitrishala/status/2122798241892991379)), overlapping model-lab evaluation work ([Anthropic](https://www.anthropic.com/research/claude-electronics-design)). |
| Founder Reach | Jain, 990 X followers, 6K LinkedIn followers, 0 GitHub stars on `burble` ([X mirror](https://nitter.cf/hitrishala), [LinkedIn](https://www.linkedin.com/in/trishalajain7) via search snippet, [GitHub](https://github.com/trishalajain7/burble)). Nour, 337 X followers, 7K LinkedIn followers, 1 GitHub star on `smart-assistive-cane` ([X mirror](https://nitter.cf/marknnour), [LinkedIn](https://www.linkedin.com/in/marknour) via search snippet, [GitHub](https://github.com/marknnour/smart-assistive-cane)). |
| Distribution Signals | 246 LinkedIn followers ([company LinkedIn, Nov 2026](https://www.linkedin.com/company/evidentmachines/)), 9 X followers ([Frontrun, Oct 28, 2026, mirrored](https://nitter.gq/frontrunvc/reposts)), public benchmark contributor call ([Evident Machines](https://evidentmachines.com/call-for-contributions/)). |
| Emails | hitrishalajain@gmail.com (Trishala Jain’s published contact, [LinkedIn](https://www.linkedin.com/in/trishalajain7), via search snippet), legal@evidentmachines.com (legal and privacy inquiries, [Evident Machines Privacy Policy](https://evidentmachines.com/privacy/)). |
