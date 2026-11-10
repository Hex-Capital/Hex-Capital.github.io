# InfraOptimal

> Self optimizing dedicated inference endpoints

| Field | Value |
|-------|-------|
| Website | https://infraoptimal.com |
| YC Page | https://www.ycombinator.com/companies/infraoptimal |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/infraoptimal)) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | Boston, MA, USA |
| Tags | Edge Computing Semiconductors, Generative AI, SaaS |
| YC Partner | Christopher Golda ([YC](https://www.ycombinator.com/companies/infraoptimal)) |
| Emails | parthko05@gmail.com — Parth’s published professional contact ([founder website](https://www.parthkocheta.com/)); team@velobyte.ai — company contact ([Terms](https://infraoptimal.com/terms)) |

## The Idea

- **Problem:** Teams serving open models must tune workloads to hardware to avoid wasted capacity; InfraOptimal identifies GPU underutilization as the problem, while describing manual performance engineering as the existing alternative ([YC](https://www.ycombinator.com/companies/infraoptimal); [company research](https://infraoptimal.com/news/the-performance-is-already-in-the-machine.html), Sep 2026).
- **Approach:** Dedicated endpoints adapt to the model, workload, and hardware through agents that propose optimizations, check behavior, benchmark candidates, and retain accepted transformations ([YC](https://www.ycombinator.com/companies/infraoptimal); [website](https://infraoptimal.com/)).
- **Differentiation:** InfraOptimal emphasizes continuously expanding optimization search, whereas Baseten documents managed cross-cloud orchestration and Together documents dedicated GPU serving, although these alternatives also optimize inference performance ([InfraOptimal](https://infraoptimal.com/); [Baseten](https://www.baseten.co/blog/how-baseten-multi-cloud-capacity-management-mcm-powers-cloud-self-hosted-and-hybr/); [Together](https://docs.together.ai/docs/dedicated-endpoints/overview)).
- **Business Model:** Hardware-capacity billing uses prepaid credit and minute-based charges including idle time, with endpoint prices displayed before launch and customer-cloud infrastructure billed separately by its provider ([Terms](https://infraoptimal.com/terms), accessed Nov 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; broader AI inference is forecast at $132.7 billion in 2026, growing at 18.0% CAGR through 2033, including hardware beyond InfraOptimal’s offering ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-inference-market-report), 2026).
- **GTM / Distribution:** Public acquisition paths include a self-service console, coding-agent integration, and workload consultation bookings ([website](https://infraoptimal.com/), accessed Nov 2026).

## Defensibility

- **Moat today:** Published technical artifacts include a scoped Z3 equivalence proof and reproducible optimization experiments, establishing engineering work rather than demonstrated exclusivity ([company research](https://infraoptimal.com/news/compiler-as-research-system.html), Sep 2026).
- **Future moat:** [Inferred]: Retained transformations and workload-specific measurements could reduce subsequent optimization effort, but public evidence does not establish cross-customer compounding ([website](https://infraoptimal.com/)).
- **Market structure:** No structural barrier identified at this stage; AWS already supplies agents for kernel authoring, debugging, and profiling within its accelerator ecosystem ([AWS](https://aws.amazon.com/blogs/machine-learning/stop-hand-tuning-kernels-how-neuron-agentic-development-accelerates-aws-trainium-optimizations/), Jun 2026).
- **Commoditization risk:** [Inferred]: Cloud providers and inference platforms can incorporate overlapping optimization workflows, with AWS’s agent tools and Together’s compiler and kernel work providing existing examples ([AWS](https://aws.amazon.com/blogs/machine-learning/stop-hand-tuning-kernels-how-neuron-agentic-development-accelerates-aws-trainium-optimizations/); [Together](https://www.together.ai/blog/announcing-our-series-c), 2026).

## Market & Traction

- **Traction signals:**
  - Zero active YC job postings ([YC Jobs](https://www.ycombinator.com/companies/infraoptimal/jobs), Nov 9, 2026).
  - Earlier EvoCompiler research reported approximately 3–5.6% lower decoder time on an Apple M2 Pro; this was an agent-assisted experiment, not a fully automated product run or current endpoint customer traction ([company research](https://infraoptimal.com/news/compiler-as-research-system.html), Sep 6, 2026).
  - September materials describe EvoCompiler performance engineering, while the current site markets dedicated inference endpoints; the exact product-transition date has no public data ([research](https://infraoptimal.com/news/compiler-as-research-system.html); [website](https://infraoptimal.com/), accessed Nov 2026).
- **Competitors:**
  - **Baseten** (~$2.1 billion raised, revenue unknown): managed cloud, self-hosted, and hybrid inference contrasts with InfraOptimal’s emphasis on autonomous optimization search; its latest announced round was $1.5 billion Series F on June 22, 2026, led by Altimeter, Conviction, and Spark, with Sands and Wellington co-leading ([Owler](https://www.owler.com/company/basetenlabs/funding); [announcement, via search snippet](https://www.baseten.co/blog/announcing-our-series-f); [product](https://www.baseten.co/blog/how-baseten-multi-cloud-capacity-management-mcm-powers-cloud-self-hosted-and-hybr/)).
  - **Fireworks AI** (over $1.8 billion raised, over $1 billion annualized revenue): dedicated GPU deployments provide configurable accelerators and autoscaling; its $1.505 billion Series D on July 16, 2026 was led by Atreides, Index, and TCV ([funding total, Sacra, via search snippet](https://sacra.com/c/fireworks-ai/); [company announcement](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d); [deployment documentation](https://docs.fireworks.ai/guides/ondemand-deployments)).
  - **Together AI** (~$1.33 billion raised, estimated $1 billion annualized revenue in February 2026): dedicated serving sits within a broader training, fine-tuning, and compute platform; its latest $800 million Series C was announced July 1, 2026, led by Aramco Ventures ([Sacra, funding total via search snippet](https://sacra.com/c/together-ai/); [Reuters](https://www.investing.com/news/stock-market-news/together-ai-raises-800-million-at-83-billion-valuation-4771027); [company announcement](https://www.together.ai/blog/announcing-our-series-c)).
- **Why now:** [Inferred]: AWS’s June 2026 release of kernel-writing, debugging, and profiling agents demonstrates that coding agents can participate in hardware-specific performance engineering workflows ([AWS](https://aws.amazon.com/blogs/machine-learning/stop-hand-tuning-kernels-how-neuron-agentic-development-accelerates-aws-trainium-optimizations/)).

## Founders & Team

- **James Cassidy / Kaden Cassidy (Co-founder, compiler systems):**
  - Background: YC names James Cassidy and links to Kaden Cassidy’s LinkedIn, while the company uses Kaden; YC lists Harvey Mudd and Claremont McKenna education, Harvey Mudd VLSI research, Johns Hopkins APL work, and 600+ RISC-V certification tests; direct email: No public data found ([YC founder profile](https://www.ycombinator.com/founders/james-cassidy); [company About](https://infraoptimal.com/about)).
  - Twitter/X: No public account found.
  - LinkedIn: Headline not retrievable; profile describes founding Velobyte and has 722 followers in the indexed copy ([LinkedIn, via search snippet](https://www.linkedin.com/in/kaden-cassidy), retrieved Nov 2026).
  - GitHub: No public repos found.
- **Parth Kocheta (Co-founder, research systems):**
  - Background: Studied computer science at University of Maryland, worked at Amazon Robotics, Planted Solar, Sanofi, and CMU AirLab, and founded Lucid Academy; published contact is parthko05@gmail.com ([personal website](https://www.parthkocheta.com/); [YC founder profile](https://www.ycombinator.com/founders/parth-kocheta)).
  - Twitter/X: @parthkocheta; count not retrievable ([founder’s linked account](https://x.com/parthkocheta)).
  - LinkedIn: Profile linked by the company; headline not retrievable ([company About](https://infraoptimal.com/about)).
  - GitHub: @pkempire; listed repository hermesAI has 3 stars ([GitHub](https://github.com/pkempire/hermesAI), Nov 2026).
- **Co-founder relationship:** The founders describe being friends since fourth grade and leaving school to work full-time on the company ([About](https://infraoptimal.com/about)).
- **Founder-market fit:** Their documented work combines program analysis, formal methods, processor validation, and robotics infrastructure, matching the product’s compiler and workload-optimization components ([About](https://infraoptimal.com/about); [YC founder profile](https://www.ycombinator.com/founders/james-cassidy)).

## Key Risks

- **Technical generalization:** The reported decoder improvement depended on the target hardware, and maintainers warned it would regress on relevant microcontrollers and DSPs; target-device measurement is the stated mitigation ([company research](https://infraoptimal.com/news/compiler-as-research-system.html), Sep 2026).
- **Verification scope:** The published proof establishes an integer identity rather than whole-program or machine-code correctness, while corpus tests cannot cover every input ([company research](https://infraoptimal.com/news/compiler-as-research-system.html)).
- **Capacity economics and availability:** Idle endpoints incur charges, exhausted credit stops service, and provider capacity can delay launches; uptime commitments require a signed agreement ([Terms](https://infraoptimal.com/terms)).
- **Platform substitution:** [Inferred]: AWS’s existing agentic optimization tools could reduce demand for a separate optimization layer among customers using its accelerators ([AWS](https://aws.amazon.com/blogs/machine-learning/stop-hand-tuning-kernels-how-neuron-agentic-development-accelerates-aws-trainium-optimizations/)).
- **Name collision:** An unrelated MailOptimal product also uses “InfraOptimal,” requiring exclusion of its mailbox pricing and adoption claims from this company’s metrics ([MailOptimal](https://mailoptimal.com/infraoptimal/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI inference proxy: $132.7B in 2026; 18.0% CAGR, 2026–2033; not a dedicated-endpoint TAM ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/artificial-intelligence-ai-inference-market-report), 2026) |
| SAM | No public data found |
| Traction | Zero YC job postings ([YC Jobs](https://www.ycombinator.com/companies/infraoptimal/jobs), Nov 2026) |
| Revenue Signal | Prepaid capacity billing by minute, including idle time; prices displayed before launch ([Terms](https://infraoptimal.com/terms), Nov 2026) |
| Founders | James/Kaden Cassidy: compiler systems, Harvey Mudd VLSI, Johns Hopkins APL; Parth Kocheta: research systems, Amazon Robotics, CMU AirLab ([YC](https://www.ycombinator.com/founders/james-cassidy); [About](https://infraoptimal.com/about)) |
| Competitors | Baseten (~$2.1B raised, revenue unknown, multi-cloud deployment); Fireworks (>$1.8B raised, >$1B annualized revenue, configurable dedicated GPUs); Together (~$1.33B raised, estimated $1B annualized revenue, training and inference platform) ([Owler](https://www.owler.com/company/basetenlabs/funding); [Fireworks](https://fireworks.ai/news/fireworks-raises-1-5-billion-series-d); [Sacra—Fireworks, funding via search snippet](https://sacra.com/c/fireworks-ai/); [Sacra—Together, funding via search snippet](https://sacra.com/c/together-ai/)) |
| Moat Signals | Scoped equivalence proof and measured compiler experiments ([research](https://infraoptimal.com/news/compiler-as-research-system.html), Sep 2026) |
| Risk Factors | Hardware-dependent gains, limited proof scope, idle-capacity charges ([research](https://infraoptimal.com/news/compiler-as-research-system.html); [Terms](https://infraoptimal.com/terms)) |
| Founder Reach | Cassidy: LinkedIn 722 followers, indexed copy; Kocheta: hermesAI 3 stars ([LinkedIn, via search snippet](https://www.linkedin.com/in/kaden-cassidy); [GitHub](https://github.com/pkempire/hermesAI), retrieved Nov 2026) |
| Distribution Signals | Self-service console, coding-agent integration, consultation bookings ([website](https://infraoptimal.com/), Nov 2026) |
| Emails | parthko05@gmail.com — Parth ([personal website](https://www.parthkocheta.com/)); team@velobyte.ai — company contact ([Terms](https://infraoptimal.com/terms)) |
