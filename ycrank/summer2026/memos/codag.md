# Codag

> Systems log compression for agents.

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

- **Problem:** AI coding/ops agents (Claude Code, Codex) consume large infrastructure log windows that exhaust context budgets on near-duplicate lines, making debugging from Kubernetes, AWS CloudWatch, Docker, Vercel, and Railway logs token-expensive (codag.ai homepage).
- **Approach:** Adapts the Drain3 streaming log-templating algorithm into a Rust pipeline that collapses repetitive log lines into template groups with raw samples, role tags (root_cause, trigger, consequence), and line-citation pointers, returning schema-valid JSON to the agent (codag.ai; github.com/codag-megalith/codag-drain).
- **Differentiation:** vs. Drain3 (open-source template miner) — Codag adds role tagging and agent-facing JSON output and is "benchmarked against Drain3 and a raw-logs control on LogHub-2.0 with a blind-judge agent-diagnosis evaluation" (search snippet); vs. AI observability platforms (Langfuse, Arize, Braintrust) — those trace agent calls rather than compress upstream system logs ([Inferred]: based on tool category descriptions from Braintrust 2026 buyer's guide).
- **Business Model:** Free 50 MB/month tier (no expiration), Hobby $19/month, Team $199/month plus usage; "pricing structured by compute, not seats" (codag.ai pricing page).
- **TAM/SAM:** No public TAM/SAM data found for the agent-facing log compression segment.
- **GTM / Distribution:** MCP integrations with Claude Code and Codex plus an open-source CLI distributed free at codag.ai (codag.ai); [Inferred]: bottoms-up developer adoption via the OSS repo with paid conversion at the Team tier.

## Defensibility

- **Moat today:** Open-source repo `codag-megalith/codag-drain` at 42 stars (GitHub, Jun 2026) and a second repo `michaelzixizhou/codag` reported at 346 stars (search snippet); benchmarked head-to-head against Drain3 on LogHub-2.0 (search snippet).
- **Future moat:** [Inferred]: A proprietary corpus of customer log streams used to tune template grouping accuracy could compound, but no customer-data flywheel is documented today.
- **Market structure:** No structural barrier identified at this stage; [Inferred]: observability incumbents (Datadog, Grafana) could bundle similar compression into existing log products, and the underlying Drain3 algorithm is open source.
- **Commoditization risk:** The core algorithm (Drain3) is public and the Codag implementation is itself open source under `codag-megalith/codag-drain` (GitHub), so other dev-tool startups or observability vendors can fork or reimplement.

## Market & Traction

- **Traction signals:**
  - GitHub `codag-megalith/codag-drain`: 42 stars, Rust 99.3%, includes CLI + reference HTTP server (GitHub, Jun 2026).
  - GitHub `michaelzixizhou/codag` (predecessor VSCode workflow visualizer): 346 stars reported (search snippet, Jun 2026) — prior-product metric, see Key Risks re: pivot.
  - Homepage demo: 1.2M log lines (108 MB) compressed from 26.6M tokens to 3,317 tokens (~8,021×) (codag.ai).
  - MCP integrations live with Claude Code and Codex (codag.ai).
  - YC job postings: 0 open roles (ycombinator.com/companies/codag).
  - Founder X account @michaelzixizhou: 976 followers (search snippet, Jun 2026).
  - No public revenue, customer count, press coverage, or Product Hunt launch found.
- **Competitors:**
  - Drain3 (open source, IBM-originated, no funding/ARR): Codag wraps and extends Drain3 with agent-targeted JSON output and role tags (search snippet).
  - Datadog Logs (NASDAQ:DDOG, revenue unknown for log-specific line, log clustering feature shipped): general-purpose log management with human dashboards rather than agent token reduction ([Inferred]: from product category).
  - ClickHouse (raised >$350M total per public reporting, revenue unknown): published "improve logs compression with log clustering" approach for storage compression, not agent context (clickhouse.com blog).
  - Langfuse / Arize / Braintrust (Langfuse Series A reported; others venture-backed, ARR not disclosed): trace agent calls and prompts, not raw system log ingestion (Braintrust 2026 buyer's guide).
  - Compresr (YC W26, funding unknown): listed on yctierlist.com/w26/compresr — adjacent compression-themed YC company (yctierlist.com).
- **Why now:** [Inferred]: Crossing of the threshold where coding/ops agents (Claude Code, Codex) became routine consumers of multi-megabyte log windows in late 2025–early 2026, making per-token context cost the binding constraint on agent debugging workflows (codag.ai thesis: "within two years, agents will be the primary consumer of logs").

## Founders & Team

- **Michael Zhou (Founder, solo):**
  - Background: Studied neuroscience and computer science at the University of Toronto; prior software engineering at Shopify and Okta; Z Fellows alum; "turned down 7-figure new grad offers… bootstrapped Codag until his bank account hit zero, pivoted 5 times, did door-to-door sales" before YC S26 (LinkedIn `mzxzhou` headline; search snippet).
  - Twitter/X: @michaelzixizhou — 976 followers (search snippet, Jun 2026).
  - LinkedIn: "founder @ codag.ai YC S26 | zfellows" (linkedin.com/in/mzxzhou).
  - GitHub: @michaelzixizhou — top repo `codag` at 346 stars (search snippet); also operates `codag-megalith/codag-drain` at 42 stars (GitHub).
- **Co-founder relationship:** No public data on co-founder history — solo founder per YC page (ycombinator.com/companies/codag).
- **Founder-market fit:** [Inferred]: Production engineering tenure at Shopify and Okta — both operators of high-volume infrastructure logs — gives direct exposure to the log-volume problem Codag addresses (LinkedIn `mzxzhou`); no advisors, board members, or investors beyond YC and Z Fellows disclosed publicly.

## Key Risks

- **Open-source commoditization:** The product's core (`codag-drain`) is publicly licensed on GitHub and built on the open Drain3 algorithm (github.com/codag-megalith/codag-drain), so competitors or customers can fork and self-host instead of paying the $19/$199 tiers; no proprietary data layer is disclosed today.
- **Incumbent bundling:** Datadog, ClickHouse, and other observability vendors already ship log clustering/compression features (clickhouse.com blog), and could add agent-formatted JSON output natively; no public switching-cost mechanism (e.g., proprietary integrations, data lock-in) is documented for Codag.
- **Pivot history / product churn:** Founder reports pivoting "5 times" before YC and an earlier `michaelzixizhou/codag` repository is described in search snippets as a VSCode LLM workflow visualizer with 346 stars — prior-product traction, not log-compression traction (search snippet); current log-compression product has 42 GitHub stars on `codag-drain` (GitHub).
- **Name collision risk:** Academic paper "CODAG: Characterizing and Optimizing Decompression Algorithms for GPUs" (arxiv.org/pdf/2307.03760) and the "Combined diesel and gas" / "Combined gas and gas" Grokipedia entries share the term, complicating SEO and disambiguation for buyers and recruits.
- **Solo founder execution risk:** YC page lists team size 1 with 0 open jobs (ycombinator.com/companies/codag), concentrating algorithm, GTM, and support load on one person while open-source competitors and incumbent observability vendors iterate.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | `codag-drain` 42 GitHub stars (GitHub, Jun 2026); prior `michaelzixizhou/codag` repo 346 stars (search snippet, Jun 2026); MCP integrations with Claude Code and Codex (codag.ai); homepage demo 1.2M log lines → 3,317 tokens (codag.ai); 0 YC job postings (YC page) |
| Revenue Signal | Free 50 MB/month; Hobby $19/month; Team $199/month + usage; priced by compute not seats (codag.ai pricing page) |
| Founders | Michael Zhou (Founder, solo): ex-Shopify, ex-Okta SWE; University of Toronto neuroscience + CS; Z Fellows; YC S26 |
| Competitors | Drain3 (open source, no funding, agent-JSON output absent); Datadog Logs (public, log-specific ARR unknown, human-dashboard focus); ClickHouse (>$350M raised, ARR unknown, storage-compression focus); Langfuse/Arize/Braintrust (venture-backed, ARR unknown, agent tracing not log ingestion); Compresr YC W26 (funding unknown, adjacent) |
| Moat Signals | Drain3 benchmark on LogHub-2.0 with blind-judge evaluation (search snippet); MCP integrations shipped with Claude Code and Codex (codag.ai) |
| Risk Factors | Open-source commoditization, incumbent bundling (Datadog/ClickHouse), pivot history, solo-founder execution |
| Founder Reach | Michael Zhou: X @michaelzixizhou 976 followers (search snippet); LinkedIn `mzxzhou` follower count not retrievable; GitHub @michaelzixizhou top repo 346 stars (search snippet) |
| Distribution Signals | Open-source CLI free at codag.ai (codag.ai); MCP plug-ins for Claude Code and Codex (codag.ai); no Product Hunt launch found |
| Emails | No public data found |

Sources:
- [Codag | Log compression for AI agents](https://codag.ai/)
- [Codag — Y Combinator](https://www.ycombinator.com/companies/codag)
- [codag-megalith/codag-drain — GitHub](https://github.com/codag-megalith/codag-drain)
- [Michael Zhou — LinkedIn (mzxzhou)](https://www.linkedin.com/in/mzxzhou/)
- [Michael Zhou — X (@michaelzixizhou)](https://x.com/michaelzixizhou)
- [YC S26 Companies — Extruct AI](https://www.extruct.ai/data-room/ycombinator-companies-s26/)
- [Improve logs compression with log clustering — ClickHouse](https://clickhouse.com/blog/improve-compression-log-clustering)
- [Best AI agent observability tools 2026 — Braintrust](https://www.braintrust.dev/articles/best-ai-agent-observability-tools-2026)
- [Compresr — YC Tier List W26](https://yctierlist.com/w26/compresr/)
- [CODAG paper — arXiv](https://arxiv.org/pdf/2307.03760)
