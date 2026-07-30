# hiloop

> Infrastructure for recursive self-improvement

| Field | Value |
|-------|-------|
| Website | https://hiloop.ai |
| YC Page | https://www.ycombinator.com/companies/hiloop |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, Machine Learning, Reinforcement Learning, Infrastructure |
| YC Partner | Ankit Gupta |
| Emails | founders@hiloop.ai |

## The Idea

- **Problem:** Teams optimizing models and agents must provision compute, preserve reproducible experiments, and trace results across potentially thousands of runs, while general-purpose models may underperform on task-specific evaluations ([hiloop website, Jul 2026](https://hiloop.ai/); [YC, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
- **Approach:** hiloop supplies API-provisioned compute with snapshot, fork, and restore operations, experiment-lineage tracing, brokered secrets, SQL-queryable cost data, and campaigns spanning data, SFT, post-training, prompts, tools, and harnesses ([hiloop website, Jul 2026](https://hiloop.ai/); [YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
- **Differentiation:** [Inferred]: Unlike OpenPipe’s continuous SFT platform, Prime Intellect’s broader training stack, and Together AI’s training-and-inference cloud, hiloop centers on agents autonomously running and statistically verifying experiments across multiple optimization layers.
- **Business Model:** [Inferred]: Hosted and customer-cloud deployments suggest usage-based compute or enterprise contracts, but no public pricing is displayed.
- **TAM/SAM:** The global AI-infrastructure market was estimated at $35.4 billion in 2023 and projected to reach $223.5 billion by 2030 at a 30.4% CAGR ([Grand View Research, 2024](https://www.grandviewresearch.com/industry-analysis/ai-infrastructure-market-report)); no public SAM estimate was found for automated model-research infrastructure.
- **GTM / Distribution:** The founders solicit teams with measurable post-training, continual-learning, inference-optimization, or classic-ML objectives for founder-led campaigns and offer hosted or on-premises deployments ([YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).

## Defensibility

- **Moat today:** hiloop reports full experiment lineage, forkable snapshots, brokered secrets, one-trace observability, and a private monorepo exposed through public SDKs and CLI installers ([hiloop website, Jul 2026](https://hiloop.ai/); [GitHub organization, Jul 2026](https://github.com/hiloopai)).
- **Future moat:** [Inferred]: Repeated campaigns could create proprietary task-to-experiment outcome data and embedded workflows, but no customer volume or retained dataset evidence is public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Prime Intellect already offers a platform for self-improving-agent training, while OpenPipe and Together AI supply overlapping fine-tuning, training, deployment, and compute components ([Prime Intellect, May 2026](https://www.primeintellect.ai/blog/lab-is-open); [OpenPipe](https://openpipe.ai/fine-tuning); [Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c)).

## Market & Traction

- **Traction signals:**
  - 4,188 experiments run by two stock coding agents on 50 Nvidia B200 GPUs over two days ([YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
  - 0.9016 validation bits-per-byte on Karpathy’s autoresearch benchmark versus a cited prior published result of 0.9109, where lower is better ([YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
  - 12.54% lower NanoGPT runtime than the upstream implementation ([YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
  - Seven public company repositories, with the two most-starred repositories at one star each ([GitHub organization, Jul 2026](https://github.com/hiloopai)).
  - Zero YC job listings ([YC, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
- **Competitors (minimum 3, up to 5):**
  - Prime Intellect ($145M announced funding, revenue unknown): combines compute, RL, post-training, sandboxes, inference, environments, evaluations, and a self-improving-agent training platform ([Prime Intellect, Jul 2026](https://www.primeintellect.ai/blog/series-a); [Prime Intellect, Feb 2025](https://www.primeintellect.ai/blog/fundraise)).
  - OpenPipe ($6.7M raised, revenue unknown): specializes in continuous SFT and hosted task-specific models rather than campaigns across systems, prompts, tools, and compute ([OpenPipe, Mar 2024](https://openpipe.ai/blog/announcing-6-7m-seed-raise)).
  - Together AI ($1.21B announced across Series A–C, revenue unknown): supplies a broader AI cloud for model training, inference, and enterprise workloads ([Together AI, Nov 2023](https://www.together.ai/blog/series-a); [Together AI, Feb 2025](https://www.together.ai/blog/together-ai-announcing-305m-series-b); [Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c)).
- **Why now:** [Inferred]: The catalyst is the 2026 emergence of agent-operated research loops and platforms such as Prime Intellect Lab, alongside models capable of proposing, executing, and evaluating code-based experiments ([Prime Intellect, May 2026](https://www.primeintellect.ai/blog/lab-is-open)).

## Founders & Team

- **Karan Brar (Founder/CEO):**
  - Background: Studied AI at the University of Toronto, worked in ML at Reducto, and previously led ML infrastructure at DynamoAI ([YC, Jul 2026](https://www.ycombinator.com/companies/hiloop); [LinkedIn](https://www.linkedin.com/in/brarkaran)).
  - Twitter/X: @deepmatmul, 192 followers ([Instalker search index, Jul 2026](https://instalker.org/deepmatmul)).
  - LinkedIn: “Founder at hiloop (YC S26)” with 1K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/brarkaran)).
  - GitHub: @deepmatmul, nine public repositories; visible star count for the listed original repositories was not retrievable ([GitHub, Jul 2026](https://github.com/deepmatmul)).
- **Thomas Boser (Co-founder; role not publicly specified):**
  - Background: Earned BS degrees in computer science and bioinformatics from UC Santa Cruz and previously worked as a founding engineer at Crosswise and in ML engineering at Discord and SoFi ([LinkedIn](https://www.linkedin.com/in/tboser); [YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
  - Twitter/X: No public account found.
  - LinkedIn: “hiloop,” with 483 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/tboser)).
  - GitHub: @tboser; NIPS2017-demo, a CNN-on-FPGA repository, has seven stars ([GitHub, Jul 2026](https://github.com/tboser)).
- **Co-founder relationship:** Brar and Boser met at Reducto, where they worked on ML, post-training, and platform systems ([YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
- **Founder-market fit:** Brar’s ML-infrastructure work at DynamoAI and Reducto and Boser’s production ML work at Discord, SoFi, Crosswise, and Reducto document experience in model infrastructure and experimentation systems ([YC, Jul 2026](https://www.ycombinator.com/companies/hiloop)).

## Key Risks

- **Benchmark generalization:** The disclosed results cover Karpathy’s autoresearch benchmark and NanoGPT runtime, so public evidence does not establish comparable gains on customer-specific production objectives ([YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
- **Compute intensity:** The disclosed benchmark used 50 B200 GPUs for two days and 4,188 experiments, tying campaign economics and availability to accelerator capacity ([YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).
- **Platform competition:** Prime Intellect’s Lab overlaps directly in self-improving-agent training and reports more than 6,000 customers across its stack ([Prime Intellect, Jul 2026](https://www.primeintellect.ai/blog/series-a)).
- **Incumbent bundling:** Together AI and OpenPipe can add experiment orchestration around existing training, fine-tuning, and deployment services ([Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c); [OpenPipe](https://openpipe.ai/fine-tuning)).
- **Customer-data handling:** Campaigns require access to customer models, tasks, evaluations, and experiment state; hiloop mitigates credential exposure through brokered secrets and offers customer-cloud deployment ([hiloop website, Jul 2026](https://hiloop.ai/); [YC launch, Jul 2026](https://www.ycombinator.com/companies/hiloop)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $35.4B in 2023, projected to $223.5B by 2030 at 30.4% CAGR (Grand View Research, 2024) |
| SAM | No public data found |
| Traction | 4,188 experiments on 50 B200s over two days; 0.9016 val_bpb; 12.54% lower NanoGPT runtime than upstream (YC launch, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Karan Brar (Founder/CEO): University of Toronto, Reducto ML, former DynamoAI head of ML infrastructure; Thomas Boser (Co-founder): UC Santa Cruz CS/bioinformatics, former Discord, SoFi, Crosswise, and Reducto ML engineer (YC and LinkedIn, Jul 2026) |
| Competitors | Prime Intellect ($145M announced, revenue unknown, full-stack self-improving-agent training); OpenPipe ($6.7M raised, revenue unknown, continuous SFT); Together AI ($1.21B announced across Series A–C, revenue unknown, training-and-inference cloud) (company funding announcements, 2024–2026) |
| Moat Signals | Forkable compute snapshots, experiment lineage, brokered secrets, SQL-queryable traces, hosted and customer-cloud operation (hiloop website, Jul 2026) |
| Risk Factors | Benchmark generalization, 50-B200 experiment compute requirement, competition from Prime Intellect and AI-cloud platforms (YC and Prime Intellect, Jul 2026) |
| Founder Reach | Karan Brar: Twitter 192, LinkedIn 1K+, GitHub nine repositories; Thomas Boser: Twitter not found, LinkedIn 483, GitHub top repository seven stars (LinkedIn, GitHub, and Instalker search index, Jul 2026) |
| Distribution Signals | YC launch post and zero YC job listings; no verified Product Hunt, app-store, extension, or community counts found (YC, Jul 2026) |
| Emails | founders@hiloop.ai (hiloop website and YC, Jul 2026) |
