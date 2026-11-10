# HyperBench

> AI agents for hardware/software co-development

| Field | Value |
|-------|-------|
| Website | https://hyperbench.ai/ |
| YC Page | https://www.ycombinator.com/companies/hyperbench |
| Batch | Fall 2026 ([YC, via search snippet](https://www.ycombinator.com/companies/hyperbench)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hardware, Enterprise Software, AI |
| YC Partner | David Lieb ([YC, via search snippet](https://www.ycombinator.com/companies/hyperbench)) |
| Emails | No public data found |

## The Idea

- **Problem:** [Inferred]: Engineers developing coupled hardware/software systems must diagnose failures across code, configuration, and physical devices, with manual investigation remaining the alternative illustrated by HyperBench’s comparison traces ([HyperBench engineering post, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
- **Approach:** HyperBench links repositories, datasheets, layouts, components, and interfaces in a system graph, then uses agents to reproduce failures, modify code, and retest changes on connected hardware ([engineering post](https://hyperbench.ai/blog/system-graph-for-engineering-agents/), [product site](https://hyperbench.ai/)).
- **Differentiation:** HyperBench emphasizes cross-repository repairs verified on existing benches, whereas Hilstart emphasizes physical testing harnesses and Embedd generates chip-integration software from hardware models ([HyperBench](https://hyperbench.ai/), [Hilstart](https://www.ycombinator.com/companies/hilstart), [Seedcamp on Embedd, Aug 2026](https://seedcamp.com/views/embedd-raises-2-7m-to-cut-chip-integration-time-by-6x/)).
- **Business Model:** [Inferred]: Enterprise software licensing is a possible monetization path given the locally executed team workflow; published pricing: No public data found ([HyperBench product site](https://hyperbench.ai/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The website recruits private-beta applicants and offers direct conversations with the team, alongside engineering articles demonstrating the product ([HyperBench website](https://hyperbench.ai/), [research page](https://hyperbench.ai/blog/), accessed Nov 2026).

## Defensibility

- **Moat today:** HyperBench describes a custom Rust retrieval pipeline and evidence-linked system graph, with company-reported investigation traces showing different retrieval paths from baseline agents ([HyperBench engineering post, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
- **Future moat:** [Inferred]: Accumulated system relationships and bench integrations could create switching costs, but customer retention and integration-depth measurements are unavailable ([documented architecture](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given Hilstart’s overlapping autonomous hardware-testing proposition and Nominal’s engineering-context agents ([Hilstart](https://www.hilstart.io/), [Nominal, Nov 2026](https://nominal.io/blog/series-c-news)).
- **Commoditization risk:** [Inferred]: Hardware-testing platforms could extend into automated diagnosis and repair, although implementation effort remains uncertain; Nominal already exposes engineering context through APIs and MCP for custom agents ([Nominal, Nov 2026](https://nominal.io/blog/series-c-news)).

## Market & Traction

- **Traction signals:**
  - Private-beta enrollment available; applicant and active-user counts undisclosed ([HyperBench website, accessed Nov 9, 2026](https://hyperbench.ai/)).
  - Company-reported FPGA demonstration ran approximately one million model parameters at approximately 10,500 decode tokens/second on an AMD Kria KV260; this is an internal technical result ([HyperBench, Sep 26, 2026](https://hyperbench.ai/blog/tiny-transformer-on-fpga/)).
  - Company-reported Thanos debugging comparison used 117.7 versus 237.2 seconds of solver time, with both attempts ultimately passing ([HyperBench, Oct 8, 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
  - Coverage in *Company Launch Tracker #122* ([Company Launch Tracker, Nov 4, 2026, via search snippet](https://companylaunchtracker.substack.com/p/company-launch-tracker-122)).
  - Zero listed YC job postings ([YC, accessed Nov 9, 2026, via search snippet](https://www.ycombinator.com/companies/hyperbench)).
- **Competitors:**
  - **Hilstart ($1.08M SAFE proceeds disclosed; revenue unknown):** Builds physical agent harnesses for hardware debugging and validation, compared with HyperBench’s emphasis on repository context and existing benches; its July 2026 filing records proceeds without identifying a lead investor ([Form D, Jul 31, 2026](https://app.edgar.tools/filing/2147638/0002147638-26-000001/formd), [YC](https://www.ycombinator.com/companies/hilstart)).
  - **Embedd ($2.7M disclosed pre-seed round; revenue unknown):** Generates chip-integration software from digital hardware models, an adjacent alternative to system debugging; Seedcamp led the August 2026 round, while lifetime funding was not verified ([Seedcamp, Aug 24, 2026](https://seedcamp.com/views/embedd-raises-2-7m-to-cut-chip-integration-time-by-6x/)).
  - **Nominal ($240M latest round; revenue unknown):** An adjacent engineering-data platform with an investigation agent and custom-agent interfaces; Lightspeed led its November 2026 Series C, co-led by Insight Partners, while lifetime funding was not verified ([Nominal, Nov 9, 2026](https://nominal.io/blog/series-c-news)).
- **Why now:** [Inferred]: Tool-using models are beginning to execute hardware workflows, illustrated by a March 2026 research framework connecting agents to embedded development and hardware verification ([*Skilled AI Agents for Embedded and IoT Systems Development*, Mar 2026](https://arxiv.org/abs/2603.19583)).

## Founders & Team

- **Justin Leong (Co-founder; executive title not verified):**
  - Background: Previously worked on Anduril’s Roadrunner GNC firmware; his company-linked LinkedIn profile lists Stanford University, while degree details, prior exits, and direct business email: No public data found ([HyperBench team](https://hyperbench.ai/team/), [LinkedIn, via search snippet](https://www.linkedin.com/in/jleong22), [co-founder identification, via search snippet](https://companylaunchtracker.substack.com/p/company-launch-tracker-122)).
  - Twitter/X: No public account found.
  - LinkedIn: Company affiliation displayed as “HyperBench (YC F26),” with approximately 1K followers and 500+ connections; separate headline not retrievable ([LinkedIn, via search snippet, accessed Nov 2026](https://www.linkedin.com/in/jleong22)).
  - GitHub: No public repos found.
- **Ivan Ge (Team member; founder/executive title not verified):**
  - Background: Previously a Member of Technical Staff at OpenAI working on software infrastructure; verified education, prior exits, and direct business email: No public data found ([HyperBench team](https://hyperbench.ai/team/)).
  - Twitter/X: No public account found.
  - LinkedIn: Directory lists “Ivan G.” at HyperBench; headline and follower count not retrievable ([LinkedIn directory, via search snippet](https://www.linkedin.com/pub/dir/Ivan/Ge/us-0-United-States)).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Leong’s firmware experience and Ge’s software-infrastructure experience relate to the product’s hardware/software integration workflow; YC lists HyperBench in Fall 2026 ([team page](https://hyperbench.ai/team/), [YC, via search snippet](https://www.ycombinator.com/companies/hyperbench)).

## Key Risks

- **Technical validation coverage:** [Inferred]: Selected internal traces may not establish reliability across customer systems because HyperBench reports one attempt per case per configured condition, using a mixture of executable validators and judgment-based assessment ([HyperBench evaluation methodology, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)).
- **Bench integration burden:** [Inferred]: Reproducing failures on customer hardware requires environment-specific access and tooling; the published FPGA example connected compiler infrastructure and a board over SSH, while local execution and existing-bench support provide deployment options ([FPGA demonstration](https://hyperbench.ai/blog/tiny-transformer-on-fpga/), [product site](https://hyperbench.ai/)).
- **Platform overlap:** [Inferred]: Nominal could supply overlapping investigation capabilities through its engineering-context platform and agent interfaces, potentially reducing demand for a separate investigation layer ([Nominal, Nov 2026](https://nominal.io/blog/series-c-news)).
- **Name ambiguity:** HyperBench also names an unrelated hyperspectral-imaging benchmark, creating attribution risk for repository and publication metrics; its authors differ from HyperBench’s published team ([unrelated repository](https://github.com/ritikgshah/HyperBench), [company team](https://hyperbench.ai/team/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Private beta available ([HyperBench, Nov 2026](https://hyperbench.ai/)); launch-tracker coverage ([Company Launch Tracker, Nov 4, 2026, via search snippet](https://companylaunchtracker.substack.com/p/company-launch-tracker-122)) |
| Revenue Signal | No public data found |
| Founders | Justin Leong, co-founder: Anduril firmware experience; Ivan Ge, published team member: former OpenAI technical staff ([HyperBench team](https://hyperbench.ai/team/), [Company Launch Tracker, via search snippet](https://companylaunchtracker.substack.com/p/company-launch-tracker-122)) |
| Competitors | Hilstart ($1.08M disclosed SAFE proceeds, revenue unknown, physical harnesses; [Form D](https://app.edgar.tools/filing/2147638/0002147638-26-000001/formd), [YC](https://www.ycombinator.com/companies/hilstart)); Embedd ($2.7M round, revenue unknown, chip integration; [Seedcamp](https://seedcamp.com/views/embedd-raises-2-7m-to-cut-chip-integration-time-by-6x/)); Nominal ($240M latest round, revenue unknown, engineering-data agents; [Nominal](https://nominal.io/blog/series-c-news)) |
| Moat Signals | Custom retrieval pipeline and evidence-linked system graph ([HyperBench engineering post, Oct 2026](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)) |
| Risk Factors | Single-attempt internal evaluations ([HyperBench methodology](https://hyperbench.ai/blog/system-graph-for-engineering-agents/)); overlapping agent capabilities ([Nominal](https://nominal.io/blog/series-c-news)) |
| Founder Reach | Justin Leong: approximately 1K LinkedIn followers, 500+ connections ([LinkedIn, Nov 2026, via search snippet](https://www.linkedin.com/in/jleong22)) |
| Distribution Signals | Private-beta form, team conversations, engineering articles; official X handle @hyperbenchai, count not retrievable ([HyperBench website](https://hyperbench.ai/), [research page](https://hyperbench.ai/blog/)) |
| Emails | No public data found |
