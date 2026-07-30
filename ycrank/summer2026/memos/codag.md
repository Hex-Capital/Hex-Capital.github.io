# Codag

> Log compression for agents.

| Field | Value |
|-------|-------|
| Website | https://codag.ai/ |
| YC Page | https://www.ycombinator.com/companies/codag |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools |
| YC Partner | Harshita Arora |
| Emails | No public data found |

## The Idea

- **Problem:** Infrastructure logs can contain millions of lines that exceed coding agents’ context windows and incur token costs when agents attempt to diagnose production incidents ([Codag website, Jul 2026](https://codag.ai/)).
- **Approach:** Codag places a compression layer before an LLM, preprocessing line-oriented logs with parsing and PII redaction and returning a schema-valid JSON IncidentCapsule whose retained evidence points to source line numbers and is tagged as root cause, trigger, or consequence ([Codag website, Jul 2026](https://codag.ai/)).
- **Differentiation:** Codag says raw logs consume more context, while Drain3 clusters templates without Codag’s cited causal evidence; Codag reports benchmarking against both using LogHub-2.0 and blind agent-diagnosis judging ([Codag website, Jul 2026](https://codag.ai/)).
- **Business Model:** The Free plan includes 50 MB monthly, Hobby starts at $19 monthly, and Team starts at $199 monthly plus usage, with pricing based on compute rather than seats ([Codag website, Jul 2026](https://codag.ai/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Codag distributes an open-source CLI through a one-line installer and integrates with Claude Code and Codex through hooks and MCP, while its founder solicits trials from developers whose agents debug production ([Codag website, Jul 2026](https://codag.ai/); [Michael Zhou, Jun 2026](https://www.linkedin.com/posts/mzxzhou_i-got-into-y-combinator-s26-the-past-6-activity-7464365183025717248-QEeY)).

## Defensibility

- **Moat today:** Codag publicly describes its own fine-tuned models, a compression algorithm evaluated against Drain3 and raw logs, schema-constrained output, PII redaction, and evidence-to-line attribution, but publishes no patent or proprietary-data claim ([Codag website, Jul 2026](https://codag.ai/)).
- **Future moat:** [Inferred]: Workload-specific compression models and accumulated incident-evaluation data could improve output quality, but no production-data advantage or customer-scale evidence is public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Existing observability vendors can expose log data to agents through MCP, while Axiom already offers native MCP access and agent-queryable telemetry and Sazabi uses AI compression optimized for agentic queries ([Axiom, Jul 2026](https://axiom.co/use-cases/ai-engineering); [Sazabi/YC, Jul 2026](https://www.ycombinator.com/companies/sazabi)).

## Market & Traction

- **Traction signals:**
  - The current product is an open-source log-compression CLI published by June 2026 ([Michael Zhou, Jun 2026](https://www.linkedin.com/posts/mzxzhou_i-got-into-y-combinator-s26-the-past-6-activity-7464365183025717248-QEeY)).
  - A website demonstration compresses 1.2 million lines, 108 MB, or 26.6 million tokens into 3,317 tokens in under one second, but no independent verification is published ([Codag website, Jul 2026](https://codag.ai/)).
  - The prior Codag workflow-visualization product’s GitHub repository has 638 stars and 59 forks; these metrics predate the pivot to log compression and are not current-product traction ([GitHub, Jul 2026](https://github.com/codag-megalith/codag-visualizer)).
  - The prior VS Code workflow visualizer launched on Product Hunt on February 5, 2026, but no verified ranking or vote count was found ([founder launch post, Feb 2026](https://www.reddit.com/r/ProductHunters/comments/1qwosnr/i_just_launched_on_producthunt_for_the_first_time/)).
  - Michael Zhou’s LinkedIn profile shows approximately 3,000 followers and 500-plus connections ([LinkedIn, Jul 2026](https://www.linkedin.com/in/mzxzhou)).
  - YC lists zero Codag jobs ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/codag)).
- **Competitors (minimum 3, up to 5):**
  - Sazabi ($8M raised, revenue unknown): offers a complete AI-native observability stack with an AI-compressed storage layer and agent-oriented querying, whereas Codag currently wraps existing log streams into cited capsules ([Sazabi financing, Jun 2026](https://www.prnewswire.com/news-releases/sazabi-raises-8-million-seed-round-to-build-the-ai-native-observability-platform-for-fast-moving-engineering-teams-302810085.html)).
  - Axiom ($41.4M raised, revenue unknown): stores and queries logs, traces, metrics, and AI telemetry with native MCP, while Codag positions itself as a compression layer in front of an existing LLM and log source ([Clay, Apr 2026](https://www.clay.com/dossier/axiom-funding); [Axiom, Jul 2026](https://axiom.co/use-cases/ai-engineering)).
  - Better Stack ($28.6M raised, revenue unknown): provides hosted logs, monitoring, tracing, dashboards, and incident tooling, while Codag outputs agent-readable incident capsules rather than a human-facing observability suite ([Better Stack, Jan 2024](https://betterstack.com/press/raises-10m/)).
  - Honeycomb ($95M raised, revenue unknown): provides production observability and event analysis, while Codag focuses on compressing existing logs for coding-agent consumption ([Sacra, Jun 2026](https://sacra.com/c/honeycomb/)).
- **Why now:** [Inferred]: Native MCP support in coding agents and observability platforms during 2026 enables agents to retrieve production telemetry directly, increasing demand for representations that fit within agent context windows ([Codag website, Jul 2026](https://codag.ai/); [Axiom, Jul 2026](https://axiom.co/use-cases/ai-engineering)).

## Founders & Team

- **Michael Zhou (Founder):**
  - Background: Zhou earned a BSc in Computer Science and Neuroscience from the University of Toronto and worked on infrastructure at Okta and Shopify ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/codag)).
  - Twitter/X: @michaelzixizhou; count not retrievable ([LinkedIn profile, Jul 2026](https://www.linkedin.com/in/mzxzhou)).
  - LinkedIn: “Founder at Codag,” with approximately 3,000 followers and 500-plus connections ([LinkedIn, Jul 2026](https://www.linkedin.com/in/mzxzhou)).
  - GitHub: @michaelzixizhou with 30 followers; the Codag visualizer repository, now under @codag-megalith, has 638 stars ([GitHub profile, Jul 2026](https://github.com/michaelzixizhou); [GitHub repository, Jul 2026](https://github.com/codag-megalith/codag-visualizer)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Zhou’s infrastructure work at Okta and Shopify and computer-science education relate directly to log-processing and developer-infrastructure work ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/codag)).

## Key Risks

- **Current-product validation:** The published 1.2-million-line compression example is a company-controlled benchmark, and no current-product customer, usage, or revenue figures were found ([Codag website, Jul 2026](https://codag.ai/)).
- **Diagnostic information loss:** Compression could discard evidence needed for incident diagnosis; Codag mitigates this by retaining cited line references and benchmarking agent diagnoses against raw-log and Drain3 controls, but public benchmark details are limited to the company’s description ([Codag website, Jul 2026](https://codag.ai/)).
- **Platform substitution:** Axiom already provides native MCP access to unified logs and telemetry, and Sazabi combines agent-optimized compression with a broader observability stack, allowing buyers to obtain overlapping functionality from their telemetry platform ([Axiom, Jul 2026](https://axiom.co/use-cases/ai-engineering); [Sazabi/YC, Jul 2026](https://www.ycombinator.com/companies/sazabi)).
- **Pivot-related distribution transfer:** Codag pivoted after launching an open-source workflow visualizer, so that repository’s 638 stars and Product Hunt launch do not establish adoption of the current log-compression product ([Michael Zhou, Jun 2026](https://www.linkedin.com/posts/mzxzhou_i-got-into-y-combinator-s26-the-past-6-activity-7464365183025717248-QEeY); [GitHub, Jul 2026](https://github.com/codag-megalith/codag-visualizer)).
- **Name disambiguation:** “Codag” also identifies unrelated products and research projects, including a Czech autonomous coding agent and a GPU decompression framework, which can contaminate search and distribution metrics ([Unnits, Jul 2026](https://cz.linkedin.com/company/unnits-tech); [CODAG paper, 2023](https://arxiv.org/abs/2307.03760)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Current log-compression CLI published by June 2026 (Michael Zhou, Jun 2026); company benchmark of 1.2M lines/108 MB compressed to 3,317 tokens in under one second (Codag website, Jul 2026); prior-product repository has 638 stars and 59 forks (GitHub, Jul 2026) |
| Revenue Signal | Free: 50 MB/month; Hobby: from $19/month; Team: from $199/month plus usage; compute-based pricing (Codag website, Jul 2026) |
| Founders | Michael Zhou (Founder): University of Toronto BSc in Computer Science and Neuroscience; former Okta and Shopify infrastructure work (Y Combinator, Jul 2026) |
| Competitors | Sazabi ($8M raised, revenue unknown, full AI-native observability stack); Axiom ($41.4M raised, revenue unknown, unified telemetry with native MCP); Better Stack ($28.6M raised, revenue unknown, hosted observability and incident suite); Honeycomb ($95M raised, revenue unknown, event-based production observability) (PR Newswire, Jun 2026; Clay, Apr 2026; Better Stack, Jan 2024; Sacra, Jun 2026) |
| Moat Signals | Fine-tuned models, schema-constrained capsules, PII redaction, source-line attribution, and LogHub-2.0 evaluation against Drain3 and raw logs (Codag website, Jul 2026) |
| Risk Factors | Current-product metrics not published (Codag website, Jul 2026), diagnostic information-loss risk (Codag website, Jul 2026), overlapping native-MCP and AI-compression offerings (Axiom and Sazabi, Jul 2026) |
| Founder Reach | Michael Zhou: Twitter count not retrievable, LinkedIn approximately 3K followers, GitHub 30 followers, prior-product repository 638 stars (LinkedIn and GitHub, Jul 2026) |
| Distribution Signals | Open-source CLI and one-line installer (Codag website, Jul 2026); prior-product Product Hunt launch on Feb. 5, 2026 (founder launch post, Feb 2026); prior-product GitHub repository has 638 stars (GitHub, Jul 2026) |
| Emails | No public data found |
