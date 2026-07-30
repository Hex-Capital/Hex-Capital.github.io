# Waddle Labs

> Agents for robotics control. 

| Field | Value |
|-------|-------|
| Website | https://www.waddlelabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/waddle-labs |
| Batch | Summer 2026 |
| Industry | Industrials / Industrials -> Manufacturing and Robotics |
| Team Size | 2 |
| Location | Boston, MA, USA |
| Tags | Developer Tools, Generative AI, Robotics, Automation |
| YC Partner | Ankit Gupta |
| Emails | founders@waddlelabs.ai |

## The Idea

- **Problem:** Robotics developers adapting end-to-end vision-language-action models or classical controllers to new tasks, robots, or workspaces face additional data collection and fine-tuning for the former and brittle, setup-specific redevelopment for the latter ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).
- **Approach:** Customers connect Waddle’s API to a robot and enter a prompt; an agent views camera feeds, decomposes the task, writes control code, invokes action models when needed, tests the result, and returns an editable program ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots)).
- **Differentiation:** Unlike foundation-model developers Physical Intelligence and Skild AI or conventional task-specific control programming, Waddle uses frontier LLMs to generate and revise code while reusing a shared library of parameterized skills without retraining between tasks ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle); [Axios, Nov 2025](https://www.axios.com/2025/11/21/robots-physical-intelligence-ai); [TechCrunch, Jan 2026](https://techcrunch.com/2026/01/14/robotic-software-maker-skild-ai-hits-14b-valuation/)).
- **Business Model:** [Inferred]: The preview API could be monetized by task execution, compute consumption, or connected robot, but no public pricing or commercial terms were found ([company website, Jul 2026](https://www.waddlelabs.ai/)).
- **TAM/SAM:** The broader AI-in-robotics market was estimated at $20.4 billion in 2025 and is forecast to reach $182.7 billion by 2033 at a 32.0% CAGR, while no public SAM estimate was found for agent-generated robot-control software ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-robotics-market-report)).
- **GTM / Distribution:** Waddle is distributing a preview API through an early-access website form, direct founder email, and its YC launch to robotics developers who provide their own hardware ([company website, Jul 2026](https://www.waddlelabs.ai/); [YC Launch, Jul 2026](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots)).

## Defensibility

- **Moat today:** Waddle reports a shared skill library in which every solved task adds reusable control skills, plus six months of robot data and intervention traces generated during internal operation ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).
- **Future moat:** [Inferred]: Cross-robot deployment could compound proprietary skills, execution traces, and failure-recovery data, but this remains unproven while access is limited to a preview API ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Robotics teams can implement published code-as-policy methods such as CaP-X and ASPIRE using the same frontier-model APIs, and Waddle states that its system builds on this research line ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).

## Market & Traction

- **Traction signals:**
  - YC launched Waddle publicly in July 2026 with access still described as a preview API ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots)).
  - Internal tests produced a working policy in approximately 20 minutes and ran around 1,000 randomized LEGO pick-and-place repetitions overnight ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).
  - The Harvard Crimson profiled the founders and Waddle on April 3, 2026 ([Harvard Crimson, Apr 2026](https://www.thecrimson.com/article/2026/4/3/dropouts-scrutiny/)).
  - Waddle’s YC page listed zero active jobs in July 2026 ([YC company page, Jul 2026](https://www.ycombinator.com/companies/waddle-labs)).
- **Competitors (minimum 3, up to 5):**
  - Physical Intelligence ($1.07 billion raised, revenue unknown): trains general-purpose robot foundation models using real-world data, versus Waddle’s LLM-generated programs and skill library ([Sacra, 2026](https://sacra.com/research/physical-intelligence)).
  - Skild AI (approximately $1.7 billion raised, revenue unknown): develops a unified robot foundation model across embodiments, versus Waddle’s API that writes control code around existing models ([Sacra, Jun 2026](https://sacra-pdfs.s3.us-east-2.amazonaws.com/skild-ai.pdf)).
  - Dyna Robotics ($143.5 million raised, revenue unknown): combines foundation models with its own production robot deployments, versus Waddle’s software API for externally supplied robots ([Sacra, 2026](https://sacra.com/c/dyna-robotics/)).
- **Why now:** [Inferred]: Closed-loop coding-agent research such as CaP-X and ASPIRE appeared in 2026 while frontier reasoning models reached the task performance Waddle reports needing for real-hardware code generation and revision ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).

## Founders & Team

- **Yiding Song (Founder):**
  - Background: Song studies computer science and physics at Harvard through 2028, researched in-context program induction at Harvard’s Kempner Institute, and co-authored multimodal astrophysics research at MIT’s IAIFI ([Song CV, 2026](https://yiding.rocks/cv-yiding-song.pdf); [PAPERCLIP, 2024](https://arxiv.org/abs/2403.08851)).
  - Twitter/X: [@yiding_song](https://x.com/yiding_song), count not retrievable.
  - LinkedIn: “Kempner Institute at Harvard University,” with 455 followers ([LinkedIn, Jul 2026](https://hk.linkedin.com/in/yiding-song-vincent)).
  - GitHub: [@PerceptronV](https://github.com/PerceptronV), whose `dudocode` repository had 12 stars ([GitHub, Jul 2026](https://github.com/PerceptronV)).
- **Hanming Ye (Founder):**
  - Background: Ye studies at Harvard through 2028, conducted topology research at MIT’s Research Science Institute, and developed Value-Guided Denoising for adapting robot diffusion policies without parameter updates ([MIT RSI paper, Aug 2023](https://math.mit.edu/research/highschool/rsi/documents/2023Ye.pdf); [NeurIPS workshop, 2025](https://neurips.cc/virtual/2025/124006)).
  - Twitter/X: [@DozenDucc](https://x.com/DozenDucc), count not retrievable.
  - LinkedIn: “Harvard University,” with 656 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/hanming-ye-0467b01aa)).
  - GitHub: [@DozenDucc](https://github.com/DozenDucc), whose `VGD` repository had 8 stars ([GitHub, Jul 2026](https://github.com/DozenDucc)).
- **Co-founder relationship:** Song and Ye met at MIT’s Research Science Institute and later became Harvard roommates ([YC Launch, Jul 2026](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots)).
- **Founder-market fit:** [Inferred]: Song’s multimodal and program-induction research and Ye’s robot-policy adaptation work directly cover the model reasoning and physical-control components used by Waddle ([Song CV, 2026](https://yiding.rocks/cv-yiding-song.pdf); [NeurIPS workshop, 2025](https://neurips.cc/virtual/2025/124006)).

## Key Risks

- **Benchmark comparability:** Waddle states that robotics results are difficult to compare because tasks, hardware, and success criteria differ across laboratories, and its public article does not supply a standardized external benchmark ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).
- **Foundation-model dependency:** Waddle reports that policy performance rises with larger foundation models and larger reasoning budgets, tying capability and task cost to upstream model providers ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).
- **Research replication:** CaP-X, ASPIRE, and earlier code-as-policy systems disclose overlapping mechanisms, allowing other robotics teams to pursue autonomous code revision and accumulated skill libraries ([Waddle research, Jul 2026](https://www.waddlelabs.ai/research/introducing-waddle)).
- **Work-authorization constraints:** As of April 2026, both founders remained enrolled because their international-student visas required a 12-credit course load and restricted outside work; they stated that they intended to comply with those requirements ([Harvard Crimson, Apr 2026](https://www.thecrimson.com/article/2026/4/3/dropouts-scrutiny/)).
- **Name collision:** An unrelated Korean-founded company also operates as Waddle Labs and launched an e-commerce agent named Gentoo in the United States, creating search-result and brand ambiguity ([PR Newswire, Feb 2026](https://www.prnewswire.com/news-releases/openai-hackathon-winner-waddle-labs-enters-us-market-with-gentoo-driving-60-revenue-growth-for-companies-302684809.html)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $20.4B global AI-in-robotics market in 2025, forecast at 32.0% CAGR through 2033 (Grand View Research, 2026) |
| SAM | No public data found |
| Traction | YC launch and preview API (YC Launch, Jul 2026); approximately 20-minute policy generation and around 1,000 overnight pick-and-place repetitions in internal tests (Waddle research, Jul 2026); Harvard Crimson coverage (Apr 2026) |
| Revenue Signal | No public data found |
| Founders | Yiding Song (Founder): Harvard CS/physics, Kempner program-induction researcher, MIT multimodal-ML researcher (Song CV, 2026); Hanming Ye (Founder): Harvard student, MIT topology researcher, robot diffusion-policy researcher (MIT RSI and NeurIPS, 2023–2025) |
| Competitors | Physical Intelligence ($1.07B raised, revenue unknown, real-world-data robot foundation models) (Sacra, 2026); Skild AI (~$1.7B raised, revenue unknown, unified cross-embodiment robot model) (Sacra, Jun 2026); Dyna Robotics ($143.5M raised, revenue unknown, integrated models and robot deployments) (Sacra, 2026) |
| Moat Signals | Shared reusable skill library plus six months of robot data and intervention traces (Waddle research, Jul 2026) |
| Risk Factors | Non-standardized robot benchmarks and upstream-model dependency (Waddle research, Jul 2026), founder visa and course-load constraints (Harvard Crimson, Apr 2026), name collision with an unrelated company (PR Newswire, Feb 2026) |
| Founder Reach | Yiding Song: X count not retrievable, LinkedIn 455 followers, top owned GitHub repo 12 stars (LinkedIn and GitHub, Jul 2026); Hanming Ye: X count not retrievable, LinkedIn 656 followers, top GitHub repo 8 stars (LinkedIn and GitHub, Jul 2026) |
| Distribution Signals | YC Launch publication and early-access signup (YC Launch, Jul 2026); 0 YC job postings (YC company page, Jul 2026) |
| Emails | founders@waddlelabs.ai (company website, Jul 2026) |
