# Conifer

> Local-first least cost routing system to reduce 80%+ token spend

| Field | Value |
|-------|-------|
| Website | https://www.conifer.build |
| YC Page | https://www.ycombinator.com/companies/conifer |
| Batch | Summer 2026 ([Y Combinator](https://www.ycombinator.com/companies/conifer), Aug 2026) |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Security |
| YC Partner | Gustaf Alstromer ([Y Combinator](https://www.ycombinator.com/companies/conifer), Aug 2026) |
| Emails | contact@conifer.build ([Y Combinator](https://www.ycombinator.com/companies/conifer), Jul 2026) |

## The Idea

- **Problem:** Teams using coding agents, customer-support systems, and other high-volume AI workloads pay cloud rates for simple and complex requests while managing multiple subscriptions, API keys, and provider dashboards ([Y Combinator launch](https://www.ycombinator.com/companies/conifer), Jul 2026).
- **Approach:** Conifer evaluates request difficulty, attempts execution on local hardware at $0 API cost, escalates to an efficient cloud model, and uses a frontier model only for demanding requests ([Conifer FAQ](https://www.conifer.build/faq/), Aug 2026; [Y Combinator](https://www.ycombinator.com/companies/conifer), Jul 2026).
- **Differentiation:** OpenRouter and Not Diamond route among hosted models, and Ollama supplies local and cloud model access, while Conifer makes local execution the first routing tier and escalates according to request difficulty ([OpenRouter](https://openrouter.ai/blog/announcements/series-b/), May 2026; [Not Diamond](https://www.notdiamond.ai/blog/launching-not-diamond), Jul 2024; [Ollama](https://finance.yahoo.com/technology/ai/articles/ollama-raises-65m-series-b-130000473.html), Jul 2026; [Conifer FAQ](https://www.conifer.build/faq/), Aug 2026).
- **Business Model:** Local inference is free per request, while routed cloud usage is billed pay-as-you-go as one monthly charge ([Conifer FAQ](https://www.conifer.build/faq/), Aug 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Conifer distributes signed desktop and CLI installers, publishes documentation, maintains GitHub, Discord, X, and LinkedIn channels, and solicits introductions to teams with high monthly token spending ([Conifer documentation](https://www.conifer.build/docs/), Aug 2026; [Y Combinator](https://www.ycombinator.com/companies/conifer), Jul 2026).

## Defensibility

- **Moat today:** Conifer’s proprietary Rust inference engine reportedly reaches up to 60% faster decode speeds than llama.cpp on Apple Silicon, while its release-distribution repository has 248 stars ([Y Combinator](https://www.ycombinator.com/companies/conifer), Jul 2026; [GitHub](https://github.com/ConiferKit/sage), Aug 2026).
- **Future moat:** [Inferred]: Observed request difficulty and successful routing outcomes could produce a routing dataset, but Conifer discloses no routing-volume, accuracy, or outcome-dataset scale.
- **Market structure:** No structural barrier identified at this stage; funded cloud-router and local-runtime providers already operate on both sides of Conifer’s local-to-cloud routing path ([OpenRouter](https://openrouter.ai/blog/announcements/series-b/), May 2026; [Ollama](https://finance.yahoo.com/technology/ai/articles/ollama-raises-65m-series-b-130000473.html), Jul 2026).
- **Commoditization risk:** Ollama can add automatic routing to its local-and-cloud runtime, while OpenRouter, Not Diamond, and Portkey already provide multi-model gateways or routing controls ([Ollama](https://finance.yahoo.com/technology/ai/articles/ollama-raises-65m-series-b-130000473.html), Jul 2026; [Not Diamond](https://www.notdiamond.ai/blog/launching-not-diamond), Jul 2024; [Portkey](https://portkey.ai/blog/series-a-funding/), Feb 2026).

## Market & Traction

- **Traction signals:**
  - Shared Sage→Juniper→Conifer distribution repository: 248 GitHub stars, with stars not separable by product name ([GitHub](https://github.com/ConiferKit/sage), Aug 2026).
  - Prior product Sage: launched to over 100 developers from its waitlist ([Conifer LinkedIn](https://www.linkedin.com/company/coniferbuild), Jun 2026).
  - Current-product company LinkedIn: 461 followers ([LinkedIn](https://www.linkedin.com/company/coniferbuild), Aug 2026).
  - Current-product launch: Juniper launched July 8, 2026 before the subsequent Juniper→Conifer rename ([Michael Jeffords on LinkedIn](https://www.linkedin.com/in/michael-bryan-jeffords), Jul 2026, via search snippet; [GitHub](https://github.com/ConiferKit/sage), Aug 2026).
  - Press: The Wall Street Journal covered Charles Muehlberger’s decision to take a Princeton gap year to build Conifer ([Entrepreneur](https://www.entrepreneur.com/business-news/elite-students-are-pursuing-startup-dreams-this-summer), Jul 2026).
  - Company X account: @coniferbuild, follower count not retrievable ([Conifer contact page](https://www.conifer.build/contact/), Aug 2026).
  - YC job postings: 0 ([Y Combinator](https://www.ycombinator.com/companies/conifer), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - OpenRouter ($153M raised, estimated $50M annualized revenue): its $113M Series B was led by CapitalG in May 2026, and it routes across hosted providers rather than defaulting to customer hardware ([OpenRouter](https://openrouter.ai/blog/announcements/series-b/), May 2026; [Sacra](https://sacra.com/c/openrouter/), Mar 2026).
  - Ollama ($88M raised, revenue unknown): its $65M Series B was led by Theory Ventures in July 2026, and it focuses on local open-model distribution with cloud access rather than difficulty-based local-first routing ([Yahoo Finance](https://finance.yahoo.com/technology/ai/articles/ollama-raises-65m-series-b-130000473.html), Jul 2026).
  - Not Diamond ($2.3M+ raised, revenue unknown): its disclosed $2.3M pre-seed was led by Defy in July 2024, and its router learns model rankings from evaluation data rather than operating a local inference engine ([Not Diamond](https://www.notdiamond.ai/blog/launching-not-diamond), Jul 2024).
  - Portkey ($18M raised, revenue unknown): its $15M Series A was led by Elevation Capital in February 2026, and its gateway emphasizes enterprise governance, observability, and security rather than local execution ([Portkey](https://portkey.ai/blog/series-a-funding/), Feb 2026; [Palo Alto Networks](https://paloaltonetworks.gcs-web.com/news-releases/news-release-details/palo-alto-networks-completes-acquisition-portkey-secure-ai), May 2026).
- **Why now:** [Inferred]: Apple Silicon unified memory now permits larger local models on laptops, while Conifer listed 18 of 60 compared models as locally runnable in July 2026 ([Conifer FAQ](https://www.conifer.build/faq/), Aug 2026; [Conifer models](https://www.conifer.build/models/), Jul 2026).

## Founders & Team

- **Michael Jeffords (Founder):**
  - Background: Education and prior exits have no public data, while Jeffords previously co-founded The HeartCheck Foundation, expanded screenings to 20+ barbershops and 10,000+ people, built a neurological-detection computer-vision pipeline, and conducted clinical research at Dell Medical School and UTHSC ([Y Combinator](https://www.ycombinator.com/companies/conifer), Aug 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Conifer (YC S26),” with 317 followers ([LinkedIn](https://www.linkedin.com/in/michael-bryan-jeffords), Aug 2026, via search snippet).
  - GitHub: No public repos found.
- **Charles Muehlberger (Founder):**
  - Background: Muehlberger studied electrical and computer engineering at Princeton, researched edge-device multimodal inference, built edge-AI devices for RF brain-injury modeling, and worked on an electric speedboat ([U.S. Navy](https://www.med.navy.mil/Photos/igphoto/2003735557/), Jun 2025; [Y Combinator](https://www.ycombinator.com/companies/conifer), Aug 2026).
  - Twitter/X: @charles_v11, count not retrievable ([GitHub profile](https://github.com/charlespers), Aug 2026).
  - LinkedIn: “Princeton University \| Electrical Engineering,” with 472 followers ([LinkedIn](https://www.linkedin.com/in/charlesmuehl), Aug 2026).
  - GitHub: @charlespers, with ConiferKit/sage as a pinned repository and 248 current stars ([GitHub profile](https://github.com/charlespers), Aug 2026; [repository](https://github.com/ConiferKit/sage), Aug 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Muehlberger’s edge-inference research and Jeffords’s applied machine-learning work relate to local inference and model routing, though no prior AI-infrastructure company or exit is publicly documented ([Y Combinator](https://www.ycombinator.com/companies/conifer), Aug 2026).

## Key Risks

- **Routing accuracy:** Conifer routes according to predicted request difficulty, so underestimation can send demanding work to an insufficient local model while overestimation preserves cloud cost; the published performance and savings figures are company-reported ([Conifer FAQ](https://www.conifer.build/faq/), Aug 2026; [Conifer website](https://www.conifer.build/), Aug 2026).
- **Hardware concentration:** Apple Silicon is the primary target with full-engine support, while Windows and Linux receive thin clients, limiting equivalent local execution across heterogeneous enterprise fleets ([Conifer FAQ](https://www.conifer.build/faq/), Aug 2026).
- **Proprietary-binary verification:** The desktop application, inference engine, and agent runtime ship as proprietary compiled binaries, constraining source-level verification of the company’s local-processing and security claims ([GitHub](https://github.com/ConiferKit/sage), Aug 2026).
- **Funded competition:** OpenRouter has raised $153M and Ollama $88M while overlapping Conifer’s cloud-routing and local-runtime layers ([OpenRouter](https://openrouter.ai/blog/announcements/series-b/), May 2026; [Ollama](https://finance.yahoo.com/technology/ai/articles/ollama-raises-65m-grows-to-nearly-9m-users/), Jul 2026).
- **Name and product-identity confusion:** The product was renamed Sage→Juniper→Conifer, while an unrelated electric-motor company at conifer.io uses the same name and has 8,096 LinkedIn followers ([GitHub](https://github.com/ConiferKit/sage), Aug 2026; [unrelated Conifer LinkedIn page](https://www.linkedin.com/company/coniferio), Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Prior product Sage: 100+ waitlist developers (Conifer LinkedIn, Jun 2026); shared brand-history repository: 248 stars (GitHub, Aug 2026); company LinkedIn: 461 followers (LinkedIn, Aug 2026) |
| Revenue Signal | Local inference costs $0 per request; cloud routing is pay-as-you-go with one monthly usage charge (Conifer FAQ, Aug 2026) |
| Founders | Michael Jeffords (Founder): HeartCheck co-founder, applied computer vision, clinical research; Charles Muehlberger (Founder): Princeton ECE, edge-inference research, edge-AI hardware work (Y Combinator, Aug 2026) |
| Competitors | OpenRouter ($153M raised, estimated $50M annualized revenue, hosted multi-model routing); Ollama ($88M raised, revenue unknown, local-model runtime and cloud); Not Diamond ($2.3M+ raised, revenue unknown, evaluation-trained routing); Portkey ($18M raised, revenue unknown, enterprise AI gateway) (OpenRouter, Sacra, Yahoo Finance, Not Diamond, Portkey, 2024-2026) |
| Moat Signals | Proprietary Rust inference engine with company-reported decode speeds up to 60% above llama.cpp; 248-star distribution repository (Y Combinator, Jul 2026; GitHub, Aug 2026) |
| Risk Factors | Routing-accuracy dependence, Apple Silicon concentration, proprietary-binary verification, funded competition, product/name confusion (Conifer FAQ, GitHub, OpenRouter, Ollama, Aug 2026) |
| Founder Reach | Michael Jeffords: LinkedIn 317, Twitter and GitHub no public data found; Charles Muehlberger: LinkedIn 472, GitHub 248 repository stars, X count not retrievable (LinkedIn and GitHub, Aug 2026) |
| Distribution Signals | Shared repository 248 stars, company LinkedIn 461 followers, prior-product waitlist over 100 developers, YC jobs 0 (GitHub, LinkedIn, Y Combinator, Aug 2026) |
| Emails | contact@conifer.build (Y Combinator, Jul 2026) |
