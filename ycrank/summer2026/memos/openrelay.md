# OpenRelay

> Distributed, hardware-agnostic AI inference

| Field | Value |
|-------|-------|
| Website | https://www.openrelay.inc |
| YC Page | https://www.ycombinator.com/companies/openrelay |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | Seattle, WA, USA |
| Tags | AI |
| YC Partner | Brad Flora (YC company page) |
| Emails | hello@openrelay.inc, sales@openrelay.inc (openrelay.inc/contact) |

## The Idea

- **Problem:** AI application teams face hyperscaler markups and single-region capacity limits when serving inference; the company frames itself as "The CDN of inference, a distributed GPU cloud for production workloads" (openrelay.inc/contact).
- **Approach:** Aggregates third-party GPU capacity into a global mesh accessible through a single OpenAI-compatible API with millisecond automatic failover, load balancing across nodes, and Docker container deployment under two minutes (openrelay.inc).
- **Differentiation:** Versus Together AI/Fireworks/Replicate (token-based managed inference on owned/leased fleets) OpenRelay markets raw hourly GPU rental with an inference-routing layer; versus RunPod/Lambda/CoreWeave it does not own datacenters but aggregates capacity from providers worldwide (search snippet, openrelay.inc/rent-gpu).
- **Business Model:** Per-hour GPU rental — RTX 4090 $0.29/hr, RTX 5090 $0.39/hr, A100 $0.98/hr, H100 $2.30/hr; $5 deposit yields $10 credit; site claims "up to 90% cheaper than AWS, Azure, and GCP" (openrelay.inc pricing).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent inference-cloud ARR reference points include Together AI ~$1B, Fireworks ~$800M, Baseten ~$600M (TechCrunch/search snippet, 2026).
- **GTM / Distribution:** [Inferred]: Self-serve developer signup via credit incentive plus a "Dedicated provider program for GPU contributors" that recruits supply-side operators (openrelay.inc).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond price positioning and OpenAI-compatible endpoint (openrelay.inc).
- **Future moat:** [Inferred]: Two-sided marketplace liquidity between GPU providers and inference customers plus routing/failover software could create switching costs; unproven at team size 2 with no cited customers.
- **Market structure:** [Inferred]: Hyperscalers (AWS/Azure/GCP) would cannibalize their own margin by matching a 90%-discount aggregation model, and existing token-inference incumbents (Together, Fireworks) have capex sunk into owned fleets that conflict with a hardware-agnostic aggregator (openrelay.inc pricing claim).
- **Commoditization risk:** GPU aggregation/marketplace is contested by RunPod ($240M ARR, search snippet), Parasail ($42M raised, TechCrunch Apr 2026), Prime Intellect, Vast.ai, and TensorDock (now owned by Voltage Park, BusinessWire Mar 2025) — the founders' former employer.

## Market & Traction

- **Traction signals:**
  - Website live with pricing calculator and provider program (openrelay.inc, Jul 2026).
  - $5 deposit → $10 credit signup incentive (openrelay.inc).
  - No public data found for revenue, user counts, Product Hunt launch, Twitter/LinkedIn follower counts, Discord size, press coverage, or funding announcement (WebSearch, Jul 2026).
- **Competitors (5):**
  - RunPod ($122M raised across 4 rounds incl. $100M Summit Partners round at $1B valuation Jun 2026; ~$240M ARR — TechCrunch/Sacra 2026): larger owned/leased GPU fleet with serverless and pod offerings.
  - Together AI (~$1B ARR, $7.5B valuation talks — search snippet 2026): managed token-based inference plus training on optimized clusters.
  - Fireworks AI (~$800M ARR, $15B valuation talks — search snippet 2026): OpenAI-compatible token pricing with fine-tuning.
  - Baseten (~$600M ARR — search snippet 2026): model deployment and serving on managed GPUs.
  - Parasail ($42M total, $32M Series A co-led Touring Capital + Kindred Ventures Apr 2026; 500B tokens/day — TechCrunch/PRNewswire 2026): pay-per-token distributed inference supercloud.
- **Why now:** [Inferred]: Inference ARR at incumbents crossed the $500M–$1B threshold in 2026 (search snippet), pulling capacity pricing into a distinct routing/aggregation layer; TensorDock's Mar 2025 acquisition by Voltage Park (BusinessWire) also freed marketplace-model operators to build independently.

## Founders & Team

- **Prashant Patel (Co-founder):**
  - Background: Staff Engineer at Voltage Park; founding member of Amazon Bedrock at AWS, "managing inference infrastructure for models up to trillions of parameters" (YC company page).
  - Twitter/X: No public account found.
  - LinkedIn: No profile confirmed against this specific Prashant Patel via search (multiple namesakes; WebSearch Jul 2026).
  - GitHub: No public repos found.
- **Jaden Wang (Co-founder):**
  - Background: Voltage Park Engineering; prior TensorDock, where he "advanced to Lead Engineer" following the Voltage Park acquisition in Mar 2025 (search snippet, BusinessWire); previously founded Heaviside Compute (YC company page).
  - Twitter/X: No public account found.
  - LinkedIn: No public profile confirmed (WebSearch Jul 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both worked at Voltage Park prior to founding OpenRelay (YC company page).
- **Founder-market fit:** Combined experience spans hyperscaler inference infrastructure (Bedrock) and GPU marketplace operations (TensorDock/Voltage Park), matching the company's aggregation + inference-routing thesis (YC company page); no advisors or investors disclosed publicly.

## Key Risks

- **Incumbent price compression:** RunPod ($240M ARR), Together, and Fireworks operate at scale with owned or long-term-leased capacity (search snippet, 2026); OpenRelay's "90% cheaper" claim depends on sourcing marginal-cost supply that established providers can undercut by amortizing their fleets. No mitigation disclosed.
- **Supply-side liquidity:** Aggregator model requires recruiting and retaining independent GPU operators via the "Dedicated provider program" (openrelay.inc); at team size 2 there is no disclosed evidence of active provider count. No public data found on onboarded suppliers.
- **Reliability at aggregator layer:** Product markets "millisecond automatic failover" and "uptime SLA available on dedicated capacity" (openrelay.inc), implying baseline non-dedicated capacity carries no SLA — a barrier to enterprise inference workloads where competitors like Baseten offer managed SLAs.
- **Founder concentration risk from prior employer:** Both founders come from Voltage Park, which now owns TensorDock, a direct marketplace competitor (BusinessWire Mar 2025); potential IP/non-compete exposure not addressed publicly.
- **Name collision:** Multiple unrelated projects use "OpenRelay" (VPN, model-aggregator GitHub repo romgX/openrelay, Open WebUI iOS client) which can dilute search-driven discovery (GitHub, WebSearch Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Website live with pricing and provider program (openrelay.inc, Jul 2026); $5→$10 signup credit (openrelay.inc); no revenue, user, or press data found |
| Revenue Signal | RTX 4090 $0.29/hr, RTX 5090 $0.39/hr, A100 $0.98/hr, H100 $2.30/hr (openrelay.inc pricing, Jul 2026); claim of "up to 90% cheaper than AWS, Azure, GCP" (openrelay.inc) |
| Founders | Prashant Patel (Co-founder): Staff Engineer at Voltage Park; founding member Amazon Bedrock at AWS (YC page). Jaden Wang (Co-founder): Voltage Park Engineering; former Lead Engineer at TensorDock; founder Heaviside Compute (YC page, BusinessWire Mar 2025) |
| Competitors | RunPod ($122M raised, ~$240M ARR, larger owned fleet); Together AI (~$1B ARR, token-based managed inference); Fireworks AI (~$800M ARR, fine-tuning + token pricing); Baseten (~$600M ARR, managed model serving); Parasail ($42M raised, pay-per-token distributed supercloud) |
| Moat Signals | No public data found |
| Risk Factors | Incumbent price compression, supply-side liquidity, aggregator SLA gap |
| Founder Reach | Prashant Patel: No public data found. Jaden Wang: No public data found |
| Distribution Signals | No public data found (no Product Hunt, press, or social presence surfaced via WebSearch, Jul 2026) |
| Emails | hello@openrelay.inc, sales@openrelay.inc (openrelay.inc/contact) |

Sources:
- [OpenRelay company site](https://www.openrelay.inc)
- [OpenRelay contact page](https://www.openrelay.inc/contact)
- [OpenRelay YC page](https://www.ycombinator.com/companies/openrelay)
- [Voltage Park acquires TensorDock — BusinessWire, Mar 2025](https://www.businesswire.com/news/home/20250326476295/en/Voltage-Park-Acquires-TensorDock-Expanding-GPU-Cloud-Services-for-AI-and-Machine-Learning)
- [RunPod hits $120M ARR — TechCrunch, Jan 2026](https://techcrunch.com/2026/01/16/ai-cloud-startup-runpod-hits-120m-in-arr-and-it-started-with-a-reddit-post/)
- [RunPod $100M Series A — cryptobriefing, Jun 2026](https://cryptobriefing.com/runpod-raises-100m-billion-valuation-rejects-buyout/)
- [Parasail $32M Series A — TechCrunch, Apr 2026](https://techcrunch.com/2026/04/15/parasail-raises-32m-to-feed-tokenmaxxing-ai-developers/)
- [Parasail Series A — PRNewswire, Apr 2026](https://www.prnewswire.com/news-releases/parasail-raises-32m-series-a-to-build-the-supercloud-that-puts-developers-in-control-of-their-ai-302742856.html)
