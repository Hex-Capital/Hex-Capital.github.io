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
| Emails | support@understudylabs.com ([Privacy Notice, Jun 2026](https://understudylabs.com/privacy)) |

## The Idea

- **Problem:** Teams running repetitive production LLM workflows face rising frontier-model bills, while replacing those APIs currently requires trace collection, eval creation, fine-tuning, serving tests, and rollback infrastructure ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SPb-understudy-the-self-optimizing-inference-cloud)).
- **Approach:** Understudy captures agent traces, converts them into task-specific evals, trains smaller open-weight models, and routes traffic only after a candidate beats the incumbent on a held-out evaluation ([YC company page, Aug 2026](https://www.ycombinator.com/companies/understudy-labs)).
- **Differentiation:** Understudy combines local trace capture, evaluation, model replacement, and customer-owned deployment, whereas Braintrust centers on observability/evals and Fireworks, Together AI, and Baseten center on training and inference infrastructure ([Understudy](https://understudylabs.com/), [Braintrust](https://www.braintrust.dev/), [Fireworks](https://fireworks.ai/blog/series-d-announcement), [Together AI](https://www.together.ai/blog/announcing-our-series-c), [Baseten](https://www.baseten.co/blog/announcing-our-series-f/)).
- **Business Model:** Paid-service prices, usage limits, and billing are established through an order form, invoice, checkout page, or written agreement, while customers ordinarily pay their upstream model-provider charges separately ([Service Terms, May 2026](https://understudylabs.com/terms)).
- **TAM/SAM:** The global ModelOps market was estimated at $7.73 billion in 2025 and projected to reach $43.60 billion by 2030 at a 41.3% CAGR ([Grand View Research, 2025](https://www.grandviewresearch.com/industry-analysis/modelops-market-report)); no public SAM estimate was found for workload-specific open-model replacement.
- **GTM / Distribution:** Understudy recruits private-preview design partners through an engineer-assisted implementation and distributes a local-first, MIT-licensed toolkit for Codex, Claude Code, Cursor, OpenCode, and Hermes ([company site, Aug 2026](https://understudylabs.com/contact), [GitHub, Aug 2026](https://github.com/UnderstudyLabs/understudy-agent-tools)).

## Defensibility

- **Moat today:** Understudy may use aggregated or de-identified operational signals to improve routing, reliability, latency, and cost controls, but it cannot use one customer’s payloads to train or evaluate another customer’s models ([Service Terms, May 2026](https://understudylabs.com/terms)).
- **Future moat:** [Inferred]: Reusable optimization adapters and accumulated operational metadata could improve route selection across deployments, but this remains unproven because the company discloses neither production volume nor design-partner count.
- **Market structure:** [Inferred]: No structural barrier is identified because Fireworks, Together AI, Baseten, and Braintrust already offer overlapping inference, post-training, tracing, or evaluation capabilities with substantially larger financing.
- **Commoditization risk:** Open-weight training and inference can be supplied by model hosts including Fireworks, Together AI, and Baseten, while upstream providers can add routing, caching, evals, and smaller-model options ([Fireworks, Jul 2026](https://fireworks.ai/blog/series-d-announcement), [Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c), [Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/)).

## Market & Traction

- **Traction signals:**
  - Private preview with an unnamed “small group of design partners” ([Understudy website, Aug 2026](https://understudylabs.com/)).
  - 12 GitHub stars and 5 forks for the MIT-licensed `understudy-agent-tools` repository ([GitHub, Aug 2026](https://github.com/understudylabs)).
  - Launch YC post published August 2026 ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SPb-understudy-the-self-optimizing-inference-cloud)).
  - 0 active YC job postings ([YC company page, Aug 2026](https://www.ycombinator.com/companies/understudy-labs)).
- **Competitors (minimum 3, up to 5):**
  - Fireworks AI ($1.83B+ disclosed funding, $1B annualized revenue): trains and serves specialized models at scale; its $1.505B July 2026 Series D was led by Atreides, Index Ventures, and TCV ([Fireworks, Jul 2026](https://fireworks.ai/blog/series-d-announcement)).
  - Together AI ($1.3B raised, revenue unknown): provides compute, training, evaluation, and inference infrastructure; its $800M July 2026 Series C included Aramco Ventures, NVIDIA, Vista Equity, and General Catalyst ([Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c)).
  - Baseten ($2.085B raised, revenue unknown): provides post-training, embedded engineering, and cloud, self-hosted, or hybrid inference; its $1.5B June 2026 Series F was led by Altimeter, Conviction Partners, and Spark ([Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/), [Sacra, 2026](https://sacra.com/c/baseten/)).
  - Braintrust ($124.3M raised, revenue unknown): focuses on traces, evaluations, and AI observability rather than the complete training-and-deployment loop; ICONIQ led its $80M February 2026 Series B ([Braintrust, Feb 2026](https://www.braintrust.dev/blog/announcing-series-b), [Unify, 2026](https://www.unifygtm.com/insights-headcount/braintrust)).
- **Why now:** [Inferred]: Open-weight models became usable alternatives to closed APIs during 2026, while agentic workloads increased inference demand and made workflow-specific cost reduction more relevant ([Baseten, Jun 2026](https://www.baseten.co/blog/announcing-our-series-f/), [Together AI, Jul 2026](https://www.together.ai/blog/announcing-our-series-c)).

## Founders & Team

- **Luis Manrique (Co-founder & CEO):**
  - Background: Studied at Santa Clara University’s Leavey School of Business; worked in Google advertising ML, led product at VideoAmp, co-founded Ones and Zeros, led AI product work at Instacart, and closed approximately $2M during Gumloop’s first year ([LinkedIn, 2026](https://www.linkedin.com/in/luismanrique), [YC, Aug 2026](https://www.ycombinator.com/companies/understudy-labs)).
  - Twitter/X: @lluismanrique, 497 followers ([TwStalker via search snippet, Aug 2026](https://w.twstalker.com/lluismanrique)).
  - LinkedIn: “Understudy Labs (YC S26)” ([LinkedIn, 2026](https://www.linkedin.com/in/luismanrique)).
  - GitHub: @lluisinthedesert; `moraine` fork, 0 stars ([GitHub, Aug 2026](https://github.com/lluisinthedesert/moraine)).
- **Aamir Poonawalla (Co-founder & CTO):**
  - Background: Holds an MS in Computer Science from Georgia Tech, spent approximately ten years at Instacart building ads-serving, ML, auction, and experimentation infrastructure, and previously founded YC W12 company Tap to Learn ([Understudy team](https://understudylabs.com/team), [YC](https://www.ycombinator.com/companies/tap-to-learn)).
  - Twitter/X: No public account found.
  - LinkedIn: “Understudy Labs” ([LinkedIn, 2026](https://www.linkedin.com/in/aamir-p-a3575318)).
  - GitHub: @aamir; `eathquake`, 0 stars ([GitHub, Aug 2026](https://github.com/aamir/eathquake)).
- **Co-founder relationship:** Luis and Aamir met while building Instacart’s optimization and experimentation systems ([Launch YC, Aug 2026](https://www.ycombinator.com/launches/SPb-understudy-the-self-optimizing-inference-cloud)).
- **Founder-market fit:** Their documented work spans ML product commercialization, enterprise sales, ads-serving infrastructure, experimentation systems, and AI patents, while disclosed backers include Instacart co-founder Max Mullen and Gumloop co-founder Max Brodeur-Urbas ([Understudy team](https://understudylabs.com/team)).

## Key Risks

- **Benchmark generalization:** Published tests cover four reasoning tasks and seven CRM-action tasks with ten runs per promoted configuration, and the company reports that generic adapters did not transfer cleanly across slices; held-out promotion gates and fallback routing are the stated mitigation ([Understudy Bench, Aug 2026](https://understudylabs.com/bench)).
- **Capitalized platform competition:** Fireworks, Together AI, and Baseten have raised approximately $1.83B+, $1.3B, and $2.085B respectively and offer overlapping model training or inference services ([Fireworks](https://fireworks.ai/blog/series-d-announcement), [Together AI](https://www.together.ai/blog/announcing-our-series-c), [Baseten](https://sacra.com/c/baseten/)).
- **Sensitive-trace handling:** The product processes prompts, completions, traces, evals, and datasets, creating security and procurement requirements; local storage, payload-free hosted gateway defaults, and a prohibition on cross-customer training mitigate exposure ([Privacy Notice, Jun 2026](https://understudylabs.com/privacy)).
- **Name collision:** An unrelated `understudy-ai/understudy` desktop-agent project uses the same product name on GitHub, while this company publishes through the `UnderstudyLabs` organization ([unrelated GitHub project](https://github.com/understudy-ai/understudy), [company GitHub](https://github.com/understudylabs)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.73B ModelOps market in 2025, projected to $43.60B by 2030 at 41.3% CAGR (Grand View Research, 2025) |
| SAM | No public data found |
| Traction | Private preview with a small group of design partners (company website, Aug 2026); 12 GitHub stars and 5 forks (GitHub, Aug 2026); Launch YC post (YC, Aug 2026) |
| Revenue Signal | Prices and usage limits set through order forms, invoices, checkout pages, or written agreements; no amounts disclosed (Service Terms, May 2026) |
| Founders | Luis Manrique (CEO): Google, VideoAmp, Instacart, Gumloop (YC, Aug 2026); Aamir Poonawalla (CTO): Georgia Tech MS, Instacart ML infrastructure, YC W12 founder (YC, Aug 2026) |
| Competitors | Fireworks AI ($1.83B+ raised, $1B annualized revenue, specialized-model cloud) (Fireworks, Jul 2026); Together AI ($1.3B raised, revenue unknown, full-stack open-model infrastructure) (Together AI, Jul 2026); Baseten ($2.085B raised, revenue unknown, inference and post-training) (Sacra/Baseten, Jun 2026); Braintrust ($124.3M raised, revenue unknown, evals and observability) (Unify/Braintrust, Feb 2026) |
| Moat Signals | Aggregated or de-identified operational signals may improve routing, reliability, latency, and cost controls (Service Terms, May 2026) |
| Risk Factors | Slice-specific benchmark transfer (Understudy Bench, Aug 2026), capitalized platform competitors (company funding announcements, Jun–Jul 2026), sensitive production traces (Privacy Notice, Jun 2026) |
| Founder Reach | Luis Manrique: Twitter 497, LinkedIn 5K, GitHub top repo 0 stars (TwStalker/LinkedIn/GitHub, Aug 2026); Aamir Poonawalla: Twitter not found, LinkedIn 1K, GitHub top repo 0 stars (LinkedIn/GitHub, Aug 2026) |
| Distribution Signals | 12 GitHub stars and 5 forks (GitHub, Aug 2026); Launch YC post (YC, Aug 2026) |
| Emails | support@understudylabs.com (Privacy Notice, Jun 2026) |
