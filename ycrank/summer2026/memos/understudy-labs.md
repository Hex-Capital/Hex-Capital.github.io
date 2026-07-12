# Understudy Labs

> Effortlessly move to open weight models

| Field | Value |
|-------|-------|
| Website | https://understudylabs.com/ |
| YC Page | https://www.ycombinator.com/companies/understudy-labs |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Open Source, AI, ML |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

## The Idea

- **Problem:** Teams running LLM production workflows are locked into expensive closed-model API costs (e.g., Claude Opus at $139.63 for benchmark sentiment analysis workload) and cannot easily migrate to cheaper open-weight models without regression risk (understudylabs.com landing page).
- **Approach:** Single-install trace capture inside coding agents (Claude Code, Cursor, Codex, OpenCode, Devin), then progressive optimization ladder — prompt tuning → SFT → GRPO — followed by held-out A/B evaluation before deploying a specialist route to Fireworks, Bedrock, Vertex, or custom GPUs (understudylabs.com; GitHub understudylabs/understudy-agent-tools README).
- **Differentiation:** Vs. LangSmith (closed-source, observability-only) — Understudy is MIT-licensed and covers train-plus-deploy (github.com/understudylabs/understudy-agent-tools); vs. OpenPipe/Predibase — Understudy captures traces locally from inside coding agents rather than via SDK/proxy and defaults to no cloud upload (understudylabs.com landing page).
- **Business Model:** [Inferred]: Open-source local toolkit as top-of-funnel (MIT license, github.com/understudylabs/understudy-agent-tools) with optional hosted infra for cloud SFT/RL as paid tier — pricing page not published; product in "private preview" (understudylabs.com).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; comparable point: Langfuse reports 26M+ SDK installs/month and 2,000+ paying customers in adjacent LLM observability (orrick.com, Jan 2026).
- **GTM / Distribution:** [Inferred]: Distribution via coding-agent skill library (Claude Code, Cursor, Codex, OpenCode, Hermes, Devin integrations per repo README) and open-source GitHub funnel — no paid marketing signal found.

## Defensibility

- **Moat today:** No defensibility signals found in public sources — repo has 4 stars, 2 forks (github.com/understudylabs/understudy-agent-tools, July 2026).
- **Future moat:** [Inferred]: Production trace-to-fine-tune feedback loop ("production data feeds back into training and compounds performance," understudylabs.com) could yield proprietary route-optimization heuristics per customer; unproven because no customer deployments are publicly disclosed.
- **Market structure:** [Inferred]: Closed-model incumbents (OpenAI, Anthropic) have channel conflict — a tool whose explicit purpose is migrating workloads off their APIs to open weights cannibalizes their revenue, so first-party equivalents are unlikely.
- **Commoditization risk:** OpenPipe, Predibase (acquired by Rubrik, siliconangle.com, June 2025), Langfuse (acquired by ClickHouse, orrick.com, Jan 2026), and Braintrust already ship overlapping trace-capture and fine-tune functionality; the technical components (QLoRA, GRPO) are commodity in 2026 (blog.dailydoseofds.com, 2026).

## Market & Traction

- **Traction signals:**
  - GitHub repo understudylabs/understudy-agent-tools: 4 stars, 2 forks, MIT license (github.com, July 2026)
  - Understudy Desktop v0.3.2 released July 12, 2026 (github.com/understudylabs/understudy-agent-tools releases)
  - Product status: "private preview" (understudylabs.com, 2026)
  - Company-reported benchmark: +13% eval score (0.630 vs 0.557) vs Claude Sonnet 4.6; 5.2x lower latency (369ms vs 1.935s); 50x cost reduction ($2.82 vs $139.63 Opus) — self-reported, workload not third-party audited (understudylabs.com landing page)
  - No revenue, customer count, press coverage, Product Hunt launch, or funding announcement found in public sources
- **Competitors:**
  - OpenPipe ($6.7M seed Mar 2024, revenue unknown, siliconangle.com): SDK/proxy trace capture and hosted fine-tuning; not agent-embedded local-first.
  - Predibase (~$28M raised pre-acquisition, acquired by Rubrik reportedly $100M+ June 2025, siliconangle.com): declarative fine-tuning platform, now enterprise-owned.
  - Langfuse ($4M seed, 2,000+ paying customers, acquired by ClickHouse Jan 2026, orrick.com; langfuse.com/blog): open-source observability leader but does not ship fine-tuning/training.
  - LangSmith (LangChain-owned, revenue unknown): closed-source observability + eval, no self-hosted OSS (openalternative.co, 2026).
  - Braintrust (revenue unknown, braintrust.dev): eval and prompt iteration, no training/deploy layer.
- **Why now:** [Inferred]: 2026 threshold-crossing where 8B-parameter open-weight models are fine-tunable on a single 12GB consumer GPU via QLoRA/Unsloth and match GPT-4-class quality on many tasks (blog.dailydoseofds.com; thundercompute.com, July 2026), making migration economically viable for the first time.

## Founders & Team

- **Luis Manrique (Co-founder & CEO):**
  - Background: Santa Clara University, Leavey School of Business (linkedin.com/in/luismanrique); Principal PM at Instacart on Ads and Carrot AI; VP/SVP at VideoAmp (led pivot growing revenue $5M → $50M); employee #2 at Gumloop; joined Google 2013 via Wildfire Interactive acquisition; ten patents in ML/LLM/agent infra (understudylabs.com/team; patents.google.com)
  - Twitter/X: @lluismanrique (x.com/lluismanrique) — count not retrievable
  - LinkedIn: "Co-Founder & CEO, Understudy Labs" (linkedin.com/in/luismanrique)
  - GitHub: @lluisinthedesert (understudylabs.com/team) — no public repos with notable stars found
- **Aamir Poonawalla (Co-founder & CTO):**
  - Background: Georgia Tech MS Computer Science (understudylabs.com/team); 10 years at Instacart as Senior SW Dev Manager leading Ads Serving/Infra and Curbside Pickup ($0 → ~$4B GTV); prior engineering at Pinterest (via URX acquisition), Microsoft (Skype, Yammer); Y Combinator W2012 alum with TapToLearn (understudylabs.com/team)
  - Twitter/X: @aamirp (twitter.com/aamirp) — count not retrievable
  - LinkedIn: "Aamir P." (linkedin.com/in/aamir-p-a3575318)
  - GitHub: @aamir (github.com/aamir) — top repo not enumerated
- **Co-founder relationship:** Both worked at Instacart — Manrique as Principal PM on Ads/Carrot AI, Poonawalla as Senior SW Dev Manager on Ads Serving/Infra (understudylabs.com/team).
- **Founder-market fit:** Both founders shipped ML/ads infrastructure at Instacart Ads and Manrique was employee #2 at agent-workflow company Gumloop (understudylabs.com/team; linkedin.com/in/luismanrique), giving direct exposure to both production LLM-agent workloads and cost-sensitive ML serving — the exact stack Understudy targets; Poonawalla is a repeat YC founder (W2012 TapToLearn).

## Key Risks

- **Category commoditization by acquired incumbents:** Langfuse (acquired by ClickHouse, orrick.com Jan 2026) and Predibase (acquired by Rubrik, siliconangle.com June 2025) now have distribution and capital to bundle trace-capture-plus-fine-tune into infrastructure suites, compressing standalone-tool pricing; no mitigation disclosed.
- **Open-source traction not yet demonstrated:** Public repo has 4 stars and 2 forks (github.com/understudylabs/understudy-agent-tools, July 2026) — for reference, Langfuse's OSS-led GTM produced 2,000+ paying customers (orrick.com), so the funnel Understudy relies on has not yet materialized.
- **Self-reported benchmarks not independently verified:** All performance claims (13% eval delta vs Sonnet, 50x Opus cost reduction) come from the company's own landing page (understudylabs.com) with undisclosed workload, dataset, and methodology — buyer procurement will require third-party or held-out validation.
- **Closed-model provider countermove:** OpenAI and Anthropic ship first-party distillation, fine-tuning, and cheaper tiers (industry-general, 2026); [Inferred]: if frontier providers keep dropping token prices, the "50x cost reduction" wedge narrows.
- **Two-person team executing across capture + eval + training + serving:** Team size 2 (ycombinator.com/companies/understudy-labs) covering trace SDK, eval harness, SFT/GRPO training, and multi-cloud serving (Fireworks, Bedrock, Vertex per understudylabs.com) — surface area vs. staffing is wide.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | GitHub repo 4 stars, 2 forks (github.com/understudylabs/understudy-agent-tools, July 2026); Understudy Desktop v0.3.2 released 2026-07-12 (GitHub releases); private preview status (understudylabs.com, 2026) |
| Revenue Signal | No public data found (product in private preview, no pricing page, understudylabs.com) |
| Founders | Luis Manrique (CEO): Principal PM Instacart Ads/Carrot AI, VP VideoAmp ($5M→$50M pivot), employee #2 Gumloop, 10 patents (understudylabs.com/team). Aamir Poonawalla (CTO): 10yrs Instacart Sr SW Dev Mgr Ads Infra, Curbside Pickup $0→$4B GTV, YC W2012 alum TapToLearn, Georgia Tech MS CS (understudylabs.com/team). |
| Competitors | OpenPipe ($6.7M seed Mar 2024, revenue unknown, SDK/proxy fine-tuning, siliconangle.com); Predibase ($28M raised, acquired by Rubrik ~$100M+ June 2025, declarative fine-tuning, siliconangle.com); Langfuse ($4M seed, 2,000+ paying customers, acquired by ClickHouse Jan 2026, OSS observability only, orrick.com); LangSmith (LangChain, revenue unknown, closed-source observability, openalternative.co); Braintrust (revenue unknown, eval/prompt iteration, braintrust.dev) |
| Moat Signals | No public data found |
| Risk Factors | OSS funnel not yet materialized (4 GitHub stars), self-reported benchmarks unverified, incumbents (Langfuse/Predibase) now capitalized via ClickHouse/Rubrik acquisitions |
| Founder Reach | Luis Manrique: Twitter @lluismanrique (count not retrievable), LinkedIn linkedin.com/in/luismanrique, GitHub @lluisinthedesert. Aamir Poonawalla: Twitter @aamirp (count not retrievable), LinkedIn linkedin.com/in/aamir-p-a3575318, GitHub @aamir |
| Distribution Signals | Skill library integrated with Claude Code, Cursor, Codex, OpenCode, Hermes Agent, Devin (github.com/understudylabs/understudy-agent-tools README, 2026); no Product Hunt launch found |
| Emails | No public data found |

Sources:
- [Understudy Labs website](https://understudylabs.com/)
- [Understudy Labs team page](https://understudylabs.com/team)
- [YC company page](https://www.ycombinator.com/companies/understudy-labs)
- [understudy-agent-tools GitHub](https://github.com/understudylabs/understudy-agent-tools)
- [Luis Manrique LinkedIn](https://www.linkedin.com/in/luismanrique/)
- [Luis Manrique X](https://x.com/lluismanrique)
- [Aamir Poonawalla LinkedIn](https://www.linkedin.com/in/aamir-p-a3575318/)
- [OpenPipe seed round – SiliconANGLE](https://siliconangle.com/2024/03/26/openpipe-raises-6-7m-help-developers-fine-tune-lightweight-powerful-llms/)
- [Rubrik acquires Predibase – SiliconANGLE](https://siliconangle.com/2025/06/25/rubrik-acquires-llm-tooling-startup-predibase-reported-100m/)
- [Langfuse seed round](https://langfuse.com/blog/announcing-our-seed-round)
- [ClickHouse acquires Langfuse – Orrick](https://www.orrick.com/en/News/2026/01/Open-source-LLM-Observability-Langfuse-Acquired-by-ClickHouse-Inc)
- [LangSmith alternatives 2026 – OpenAlternative](https://openalternative.co/alternatives/langsmith)
- [Fine-Tuning LLMs in 2026 – Daily Dose of DS](https://blog.dailydoseofds.com/p/how-to-fine-tune-llms-in-2026)
- [Best open-source LLMs July 2026 – Thunder Compute](https://www.thundercompute.com/blog/best-open-source-llms)
