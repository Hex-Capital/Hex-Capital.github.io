# Conifer

> Local-first least cost routing system to reduce 80%+ token spend

| Field | Value |
|-------|-------|
| Website | https://www.conifer.build |
| YC Page | https://www.ycombinator.com/companies/conifer |
| Batch | Summer 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Security |
| YC Partner | Gustaf Alstromer |
| Emails | contact@conifer.build |

## The Idea

- **Problem:** Teams using coding agents, customer-support systems, and other high-volume AI workloads send both simple and complex requests to paid cloud models while managing multiple subscriptions, API keys, and dashboards ([YC company page, Jul 2026](https://www.ycombinator.com/companies/conifer)).
- **Approach:** Conifer routes each request through local hardware with zero API fees, then an efficient cloud model, and finally a frontier model when required, while its local-only mode disables external routing for sensitive data ([YC launch post, Jul 2026](https://www.ycombinator.com/companies/conifer)).
- **Differentiation:** Conifer starts inference on users’ hardware, whereas OpenRouter operates a managed network across 400-plus cloud models and Portkey provides a control plane over customer-managed provider accounts ([Conifer YC page, Jul 2026](https://www.ycombinator.com/companies/conifer); [OpenRouter comparison, Jun 2026](https://openrouter.ai/blog/insights/openrouter-vs-portkey/)).
- **Business Model:** [Inferred]: The business product could charge for routing, centralized governance, or consolidated cloud usage, but the public site does not disclose prices and the initial local product was launched as free and open source.
- **TAM/SAM:** The global AI-gateway market was estimated at $17.7 million in 2025 and forecast to reach $181 million in 2031, representing a 47.4% CAGR ([LPI/Market Research Reports, 2025](https://www.marketresearchreports.com/lpi/global-ai-gateway-market-growth-status-and-outlook-2025-2031)).
- **GTM / Distribution:** Conifer is distributing its Juniper application through a direct download and soliciting introductions to teams with high monthly token expenditure ([YC launch post, Jul 2026](https://www.ycombinator.com/companies/conifer)).

## Defensibility

- **Moat today:** Conifer developed a Rust inference engine whose company-reported Apple Silicon benchmarks reached up to 60% faster decode speeds than llama.cpp, while its public Sage repository had 268 GitHub stars on July 30, 2026 ([YC launch post, Jul 2026](https://www.ycombinator.com/companies/conifer); [Conifer GitHub, Jul 2026](https://github.com/ConiferKit)).
- **Future moat:** [Inferred]: Request-level routing outcomes could create proprietary data relating task characteristics, model capability, cost, latency, and hardware performance, but no public evidence establishes such a dataset today.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** OpenRouter already offers per-prompt model selection through NotDiamond, Portkey supports routing and governance across more than 1,600 models, and cloud-model providers can implement routing within their own platforms ([OpenRouter comparison, Jun 2026](https://openrouter.ai/blog/insights/openrouter-vs-portkey/)).

## Market & Traction

- **Traction signals:**
  - More than 100 developers joined the Sage waitlist before its public launch ([Charles Muehlberger LinkedIn, Jun 2026](https://www.linkedin.com/in/charlesmuehl)).
  - The ConiferKit GitHub organization had 57 followers and its Sage repository had 268 stars and 10 forks ([GitHub, Jul 30, 2026](https://github.com/ConiferKit)).
  - Company-reported benchmarks measured 194.6 tokens per second for LFM2.5-8B-A1B on an M3 with 32GB memory, versus 138.8 for llama.cpp and 170.2 for MLX ([Michael Jeffords LinkedIn, Jul 2026](https://www.linkedin.com/in/michael-bryan-jeffords)).
  - Conifer’s YC profile listed zero job openings ([YC company page, Jul 2026](https://www.ycombinator.com/companies/conifer)).
- **Competitors (minimum 3, up to 5):**
  - OpenRouter ($153 million raised, approximately $50 million annualized revenue): managed access and routing across hundreds of cloud models rather than local-first inference ([OpenRouter, May 2026](https://openrouter.ai/blog/series-b/); [Sacra, Mar 2026](https://sacra.com/c/openrouter/)).
  - Portkey ($15 million Series A disclosed, revenue unknown): enterprise gateway emphasizing observability, governance, guardrails, and customer-managed provider accounts ([Portkey, Feb 2026](https://portkey.ai/blog/series-a-funding/)).
  - Martian ($9 million seed disclosed, revenue unknown): routes prompts among cloud models based on performance, cost, and speed rather than beginning on user hardware ([The Information, Nov 2023](https://www.theinformation.com/articles/nea-leads-funding-of-startup-that-helps-customers-cut-ai-costs-a-chinese-startup-seizes-on-metas-open-source-llama-model)).
  - Not Diamond ($2.3 million disclosed, revenue unknown): supplies prompt-level model routing, including technology used by OpenRouter’s Auto Router ([Axios, Jun 2024](https://www.axios.com/newsletters/axios-pro-rata-b65d1aae-613a-4d5b-85d2-57331654667f); [OpenRouter, Jun 2026](https://openrouter.ai/blog/insights/openrouter-vs-portkey/)).
- **Why now:** [Inferred]: On-device hardware can now execute smaller language models while cloud-model proliferation creates cost and governance incentives for per-request routing, reflected in Gartner’s 2026 identification of AI gateways for routing, policy enforcement, data protection, and cost visibility ([Gartner, May 2026](https://www.gartner.com/en/documents/7855181)).

## Founders & Team

- **Michael Jeffords (Co-Founder):**
  - Background: Co-founded the HeartCheck Foundation, which delivered hypertension screenings through more than 20 barbershops to over 10,000 people, and previously conducted vascular-surgery and stem-cell research ([YC company page, Jul 2026](https://www.ycombinator.com/companies/conifer)).
  - Twitter/X: No public account found.
  - LinkedIn: “Conifer (YC S26)” with 317 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/michael-bryan-jeffords)).
  - GitHub: No public personal repos found.
- **Charles Muehlberger (Co-Founder):**
  - Background: Princeton electrical-engineering student and researcher in edge multimodal inference who previously built edge-AI devices for Department of War brain-injury modeling ([YC company page, Jul 2026](https://www.ycombinator.com/companies/conifer); [Princeton AI Lab, Apr 2026](https://ai.princeton.edu/events/2026/boba-x-startups-student-founder-pitch-session)).
  - Twitter/X: No public personal account found.
  - LinkedIn: “Princeton University \| Electrical Engineering” with 472 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/charlesmuehl)).
  - GitHub: No public personal repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Michael Jeffords has documented ML and computer-vision development experience, while Charles Muehlberger has documented edge-inference, electrical-engineering, and hardware research experience ([YC company page, Jul 2026](https://www.ycombinator.com/companies/conifer)).

## Key Risks

- **Routing quality:** Cost savings require the router to identify the least expensive model capable of completing each task, but no public routing-accuracy benchmark or customer evaluation was found.
- **Hardware variability:** Published performance comparisons use Apple Silicon and selected models, leaving performance across Windows, Linux, GPUs, memory configurations, and longer production workloads unverified ([YC launch post, Jul 2026](https://www.ycombinator.com/companies/conifer)).
- **Platform competition:** OpenRouter, Portkey, Martian, and Not Diamond already provide overlapping gateway or model-selection functions, with OpenRouter offering more than 400 models across over 70 providers ([OpenRouter, Jun 2026](https://openrouter.ai/blog/insights/model-routing/)).
- **Name ambiguity:** A separate electric-motor company named Conifer operates at conifer.io and raised a $20 million seed round, creating search-result and brand disambiguation risk ([TechCrunch, Apr 2025](https://techcrunch.com/2025/04/14/conifer-locks-down-20m-seed-round-for-its-drop-in-electric-hub-motor/)).
- **Security-verification gap:** Conifer states that local-only mode prevents external API calls, but no public third-party security audit or certification was found ([YC company page, Jul 2026](https://www.ycombinator.com/companies/conifer)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $17.7M global AI-gateway market in 2025, forecast to reach $181M in 2031 at 47.4% CAGR (LPI/Market Research Reports, 2025) |
| SAM | No public data found |
| Traction | 100+ Sage waitlist developers (Charles Muehlberger LinkedIn, Jun 2026); 268 Sage GitHub stars and 57 organization followers (GitHub, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Michael Jeffords (Co-Founder): HeartCheck co-founder and ML/clinical researcher; Charles Muehlberger (Co-Founder): Princeton ECE student and edge-inference researcher (YC company page, Jul 2026) |
| Competitors | OpenRouter ($153M raised, approximately $50M annualized revenue, managed cloud-model network) (OpenRouter/Sacra, 2026); Portkey ($15M Series A disclosed, revenue unknown, governance control plane) (Portkey, Feb 2026); Martian ($9M seed disclosed, revenue unknown, cloud-model router) (The Information, Nov 2023); Not Diamond ($2.3M disclosed, revenue unknown, prompt-level routing) (Axios, Jun 2024) |
| Moat Signals | Rust inference engine reported up to 60% faster Apple Silicon decoding than llama.cpp; Sage repository had 268 stars (YC company page/GitHub, Jul 2026) |
| Risk Factors | Routing accuracy unverified (public-source review, Jul 2026), hardware-dependent performance (YC company page, Jul 2026), funded gateway competitors (OpenRouter/Portkey/Martian funding announcements, 2023–2026) |
| Founder Reach | Michael Jeffords: LinkedIn 317, Twitter and personal GitHub not found; Charles Muehlberger: LinkedIn 472, Twitter and personal GitHub not found (LinkedIn, Jul 2026) |
| Distribution Signals | 100+ developer waitlist, 268 GitHub stars, 57 GitHub organization followers, zero YC job listings (LinkedIn/GitHub/YC, Jul 2026) |
| Emails | contact@conifer.build (YC company page/GitHub, Jul 2026) |
