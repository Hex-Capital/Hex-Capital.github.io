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

- **Problem:** Robotics developers adapting end-to-end vision-language-action models to new robots, workspaces, or tasks often need new data collection and fine-tuning, while classical robot programs can be brittle and require redevelopment ([Waddle Labs research](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026).
- **Approach:** The API lets an agent inspect camera feeds, decompose a prompted goal into subtasks, write control code, invoke action models such as VLAs, test execution, re-plan after failures, and output an editable program ([YC Launch](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots), Jul 2026).
- **Differentiation:** Waddle generates reusable code and can call VLA models as tools, unlike Physical Intelligence and Skild AI’s learned foundation-model control policies, while Wandelbots focuses on vendor-neutral industrial automation software rather than an autonomous code-generation loop ([Waddle Labs research](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026; [Physical Intelligence](https://sacra.com/c/physical-intelligence/), 2026; [Skild AI](https://www.skild.ai/), 2026; [Wandelbots](https://www.wandelbots.com/), 2026).
- **Business Model:** [Inferred]: A consumption-priced or enterprise-licensed API is a possible monetization path because the product is distributed as a preview API, but no pricing or paid tier is publicly listed ([Waddle Labs website](https://www.waddlelabs.ai/), Aug 2026).
- **TAM/SAM:** Industrial robot programming software was estimated at $1.671 billion in 2025 with an 11.9% forecast CAGR, while no Waddle-specific serviceable-market estimate was published ([Bosson Research](https://marketpublishers.com/report/other-ict-n-software/industrial-robot-programming-software-market-bosson.html), Dec 2025).
- **GTM / Distribution:** [Inferred]: Initial distribution targets robotics developers and laboratories through a preview API, founder email, technical demonstrations, and the YC launch channel ([Waddle Labs website](https://www.waddlelabs.ai/), Aug 2026; [YC Launch](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots), Jul 2026).

## Defensibility

- **Moat today:** Waddle reports a shared library of agent-created skills plus six months of robot-operation data and intervention traces, although no external deployment count is disclosed ([Waddle Labs research](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026).
- **Future moat:** [Inferred]: More deployed robots could add reusable skills, execution traces, and failure corrections that improve later tasks, but this remains unproven because the product is in preview and no customer deployment metrics are public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** University laboratories, foundation-model companies, and robotics-software vendors can pursue the same architecture because code-as-policy research is public and 2026 systems such as CaP-X and ASPIRE already implement autonomous execution-feedback loops ([Waddle Labs related-work review](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026).

## Market & Traction

- **Traction signals:**
  - Company X account: 971 followers (TwStalker, Aug 2026, via search snippet).
  - Internal product use: six months of agent-controlled robot work, including approximately 1,000 overnight LEGO pick-and-place repetitions used to train an ACT policy ([Waddle Labs research](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026).
  - Product access: preview API and early-access registration launched publicly ([YC Launch](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots), Jul 2026).
  - Hiring: 0 YC job postings ([YC company page](https://www.ycombinator.com/companies/waddle-labs), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Skild AI (more than $2 billion raised; latest approximately $1.4 billion SoftBank-led round in Jan 2026; revenue unknown): trains a general-purpose robot foundation model rather than generating an editable program for each task ([Skild AI funding report](https://techcrunch.com/2026/01/14/robotic-software-maker-skild-ai-hits-14b-valuation/), Jan 2026).
  - Physical Intelligence ($1.07 billion raised; latest $600 million CapitalG-led round in Nov 2025; revenue unknown): its VLA models convert camera feeds and instructions directly into real-time robot actions rather than using an LLM agent to write policies ([Sacra](https://sacra.com/c/physical-intelligence/), 2026).
  - Wandelbots ($120.88 million raised; latest $84 million Insight Partners-led round in Jan 2022; revenue unknown): provides vendor-neutral industrial robot programming and deployment software rather than Waddle’s execution-feedback agent and shared skill library ([CB Insights](https://www.cbinsights.com/company/wandelbots/financials), Aug 2026, via search snippet; [TechCrunch](https://techcrunch.com/2022/01/25/wandelbots-raises-another-84-million-to-teach-robots-without-code/), Jan 2022).
- **Why now:** [Inferred]: The catalyst is the 2026 emergence of coding agents that revise robot programs from execution feedback, alongside frontier models that Waddle reports can complete harder manipulation tasks at higher reasoning budgets ([Waddle Labs research](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026).

## Founders & Team

- **Yiding Song (Founder):**
  - Background: Harvard College computer science and physics student, class of 2028, with research on in-context program induction at the Kempner Institute and multimodal models at MIT’s IAIFI ([Yiding Song CV](https://yiding.rocks/cv-yiding-song.pdf), 2026).
  - Twitter/X: @yiding_song; count not retrievable ([Yiding Song website](https://yiding.rocks/), Aug 2026).
  - LinkedIn: “Kempner Institute at Harvard University,” with 455 followers (LinkedIn, Aug 2026, via search snippet).
  - GitHub: @PerceptronV; pinned PAPERCLIP-Hubble repository with 17 stars ([GitHub](https://github.com/PerceptronV), Aug 2026).
- **Hanming Ye (Founder):**
  - Background: Harvard student, class of 2028, who researched topology at MIT’s Research Science Institute and co-authored work on value-guided diffusion policies and model-capacity effects on grokking ([YC Launch](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots), Jul 2026; [OpenReview](https://openreview.net/attachment?id=HKG7I3iqCY&name=pdf), 2025).
  - Twitter/X: @DozenDucc with approximately 2,000 followers (TwStalker, Aug 2026, via search snippet).
  - LinkedIn: “Harvard University,” with 656 followers (LinkedIn, Aug 2026, via search snippet).
  - GitHub: @DozenDucc; VGD repository with 8 stars ([GitHub](https://github.com/DozenDucc), Aug 2026).
- **Co-founder relationship:** Song and Ye met at MIT’s Research Science Institute and later became roommates at Harvard ([YC Launch](https://www.ycombinator.com/launches/S33-waddle-labs-agents-that-control-robots), Jul 2026).
- **Founder-market fit:** [Inferred]: Song’s foundation-model and program-induction research and Ye’s robot-policy research provide documented experience relevant to an agent that writes and revises robot-control programs ([Yiding Song CV](https://yiding.rocks/cv-yiding-song.pdf), 2026; [OpenReview](https://openreview.net/attachment?id=HKG7I3iqCY&name=pdf), 2025).

## Key Risks

- **External validation:** Waddle reports real-hardware demonstrations but also states that robotics results are difficult to compare because tasks, robots, and success criteria differ, and it calls for standardized benchmarks ([Waddle Labs research](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026).
- **Foundation-model dependency:** The company reports that policy quality rises with model capability and reasoning budget, tying performance and task cost to third-party foundation models; its planned mitigation is training agents on accumulated execution and intervention traces ([Waddle Labs research](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026).
- **Autonomous code safety:** Agents continuously write and execute physical control code, but the public technical article does not describe safety interlocks, certification, or deployment guardrails ([Waddle Labs research](https://www.waddlelabs.ai/research/introducing-waddle), Jul 2026).
- **Product-history discontinuity:** Song’s CV describes Waddle’s Summer 2025 product as teleoperated-robot data-collection infrastructure and names Oscar Melendez as a co-founder, whereas the current YC page lists two founders and an agent-control product, with no public pivot timeline ([Yiding Song CV](https://yiding.rocks/cv-yiding-song.pdf), 2026; [YC company page](https://www.ycombinator.com/companies/waddle-labs), Aug 2026).
- **Name collision:** An unrelated Korean e-commerce company also operates under the Waddle Labs name and announced a $2 million-funded product called Gentoo in February 2026, creating search and brand disambiguation risk ([PR Newswire](https://www.prnewswire.com/news-releases/openai-hackathon-winner-waddle-labs-enters-us-market-with-gentoo-driving-60-revenue-growth-for-companies-302684809.html), Feb 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.671 billion global industrial robot programming software market in 2025, with 11.9% forecast CAGR (Bosson Research, Dec 2025) |
| SAM | No public data found |
| Traction | 971 company X followers (TwStalker, Aug 2026, via search snippet); six months of internal robot use and approximately 1,000 overnight LEGO repetitions (Waddle Labs research, Jul 2026); 0 YC job postings (YC, Aug 2026) |
| Revenue Signal | No public data found |
| Founders | Yiding Song (Founder): Harvard CS/physics and Kempner program-induction researcher (Yiding Song CV, 2026); Hanming Ye (Founder): Harvard student with MIT RSI topology and robot-policy research (YC Launch, Jul 2026; OpenReview, 2025) |
| Competitors | Skild AI (more than $2 billion raised, revenue unknown, learned robot foundation model; TechCrunch, Jan 2026); Physical Intelligence ($1.07 billion raised, revenue unknown, real-time VLA control; Sacra, 2026); Wandelbots ($120.88 million raised, revenue unknown, industrial programming platform; CB Insights, Aug 2026) |
| Moat Signals | Shared agent-created skill library and six months of execution/intervention traces (Waddle Labs research, Jul 2026) |
| Risk Factors | Non-standardized robotics benchmarks (Waddle Labs research, Jul 2026), foundation-model dependency (Waddle Labs research, Jul 2026), autonomous code safety disclosures absent (Waddle Labs research, Jul 2026) |
| Founder Reach | Yiding Song: Twitter count not retrievable, LinkedIn 455, GitHub top repo 17 stars (LinkedIn and GitHub, Aug 2026); Hanming Ye: Twitter approximately 2,000, LinkedIn 656, GitHub top repo 8 stars (TwStalker, LinkedIn, and GitHub, Aug 2026) |
| Distribution Signals | 971 company X followers (TwStalker, Aug 2026, via search snippet); preview API registration (Waddle Labs website, Aug 2026); 0 YC job postings (YC, Aug 2026) |
| Emails | founders@waddlelabs.ai (Waddle Labs website, Aug 2026) |
