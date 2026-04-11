# Modaic

> Alignment for AI decisions. In design partnerships with Accenture, Dropbox, and Vercel.

| Field | Value |
|-------|-------|
| Website | https://modaic.dev |
| YC Page | https://speedrun.a16z.com/companies/modaic |
| Batch | a16z Speedrun (likely SR006, Winter/Spring 2026); no Y Combinator listing found |
| Industry | AI Models/Infrastructure, AI |
| Team Size | 2 |
| Location | San Francisco, California, United States of America |
| Tags | AI Models/Infrastructure, AI |
| YC Partner | Not listed (company is an a16z Speedrun participant, not a YC company per available evidence) |
| Emails | farouk@modaic.dev, tyrin@modaic.dev (a16z Speedrun portal) |

## The Idea

**Problem:** Teams deploying LLMs for judgment-heavy workflows — classification, content moderation, automated evaluation — face a tradeoff between expensive manual human review and brittle automated systems that fail on edge cases (company description, a16z Speedrun portal). Existing approaches lack a feedback loop: automated rules break silently, and human review does not scale.

**Approach:** Modaic scores model confidence on each decision, routes only uncertain cases to human reviewers, and uses that human feedback to continuously improve the model's underlying instructions (company description). Per founder Farouk Adeleke's LinkedIn post, the platform is built on DSPy — a declarative framework for LLM programming — and provides infrastructure for building, organizing, and optimizing declarative AI programs (LinkedIn, Farouk Adeleke, 2025). The personal site of co-founder Tyrin-Ian Todd describes Modaic as "DevOps for Declarative Self-Improving AI Agents" (tyrin.dev). The GitHub organization hosts a Python SDK (`modaic`), a terminal agent (`microcode`), and an RPC bridge for non-Python libraries (`gepa-rpc`) (GitHub, modaic-ai).

**Differentiation:**
- vs. **Braintrust** (observability/eval platform, $116M raised): Braintrust focuses on monitoring and evaluation of LLM outputs post-hoc; Modaic positions itself as an active optimization layer that closes the loop between human feedback and model improvement via DSPy-based prompt optimization (company description; Braintrust website).
- vs. **Patronus AI** ($20M raised): Patronus specializes in automated mistake detection and security testing; Modaic's emphasis is on confidence-based routing and continuous self-improvement rather than detection-only (Patronus press release, May 2024).
- vs. **Arize/Phoenix**: Arize provides ML observability dashboards and tracing; Modaic targets the optimization step after evaluation, focusing specifically on declarative AI programs (Arize website).
- [Inferred]: The core differentiator is the coupling of DSPy-based declarative programming with a human-in-the-loop optimization cycle, rather than standalone evaluation or observability.

**Business Model:** Website returned 403 at time of research; no pricing page found. No revenue figures found in public sources. [Inferred]: Most likely monetization path is a SaaS platform with usage-based pricing (per evaluation or per optimized pipeline), given the SDK-based developer tool positioning and the pattern set by competitors like Braintrust and Confident AI.

**TAM/SAM:**
- LLM observability platform market: $1.97B in 2025, projected $2.69B in 2026, 36.3% CAGR (Research and Markets, 2026 via search snippet).
- Content moderation market: $11.63B in 2025, projected $23.20B by 2030, 14.75% CAGR (Conectys, 2026 via search snippet).
- [Inferred]: Modaic's SAM is the intersection of LLM evaluation tooling and human-in-the-loop automation for classification/moderation workflows. No specific SAM estimate found.

**GTM / Distribution:**
- Claimed design partnerships with Accenture, Dropbox, and Vercel (company one-liner, a16z Speedrun portal). No independent verification of these partnerships found.
- Open-source Python SDK on GitHub with 23 stars (GitHub, modaic-ai/modaic, as of Apr 2026).
- [Inferred]: Developer-first distribution via open-source SDK and DSPy community integration, likely converting free SDK users to paid platform customers.

## Defensibility

- **Data flywheel:** The product architecture — routing uncertain decisions to humans, then using feedback to improve model instructions — creates a proprietary feedback dataset per customer that improves over time (company description). This data advantage strengthens with usage.
- **DSPy ecosystem positioning:** Farouk Adeleke's LinkedIn describes his role as "dspy infra" (LinkedIn), suggesting deep integration with the DSPy framework. The `gepa-rpc` repo enables cross-language DSPy usage (GitHub, modaic-ai).
- [Inferred]: Switching costs could develop as customers accumulate optimized instruction sets and confidence-routing calibrations within Modaic, but these are unproven at this stage.

**Market structure:** Braintrust ($800M valuation, Feb 2026; Axios) is the most direct well-resourced competitor. [Inferred]: Braintrust's business model centers on observability — monitoring outputs — which creates a product-architecture gap: retrofitting an active optimization loop (human feedback → prompt rewriting) onto an observability platform would require rearchitecting their core product. However, this barrier is structural only if Modaic's optimization approach proves materially superior to eval-then-manual-fix workflows.

**Commoditization risk:** DSPy is open-source (MIT license), so the underlying optimization primitives are freely available. Braintrust, Arize, Langfuse, and Confident AI all have evaluation infrastructure that could be extended to include optimization. The core challenge — confidence scoring + human routing + automatic instruction improvement — is architecturally novel but not technically exclusive. [Inferred]: Any well-funded competitor could build a similar pipeline within 6-12 months.

## Market & Traction

**Traction signals:**
- GitHub: `modaic` Python SDK — 23 stars, 1 fork (GitHub, Apr 2026); `microcode` terminal agent — 58 stars (GitHub, Feb 2026); `gepa-rpc` — 34 stars (GitHub, Jan 2026). Total org stars across public repos: ~116.
- Claimed design partnerships with Accenture, Dropbox, and Vercel (a16z Speedrun portal). No independent confirmation found.
- Company Twitter/X: @modaicdev (a16z Speedrun portal). Account not accessible for follower count at time of research.
- Company LinkedIn: linkedin.com/company/modaicdev/ (a16z Speedrun portal). Follower count not retrievable.
- No Product Hunt launch found for Modaic (as of Apr 2026).
- No press coverage found in named publications.
- No Discord/Slack community found.
- No job postings found.
- No revenue or user count data found.

**Prior product note:** CEO Farouk Adeleke previously built **Spydr** ("GitHub for LLM context"), which launched on Product Hunt on June 11, 2025, reaching #12 daily with a score of 140 and 13 comments (Product Hunt). Spydr is a separate product from Modaic. Co-founder Tyrin-Ian Todd previously co-founded **Dyle**, an AI customer success agent (dyle.io). Both prior ventures appear to predate Modaic.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Modaic |
|------------|---------|-------------|-------------------------------|
| **Braintrust** | $116M total ($80M Series B, Feb 2026 at $800M valuation; Axios) | Revenue unknown | Full-stack observability + eval; customers include Notion, Stripe, Dropbox (SiliconANGLE, Feb 2026) |
| **Patronus AI** | $20M total ($17M Series A, May 2024; VentureBeat) | Revenue unknown | Automated LLM mistake detection and security testing; founded by ex-Meta ML engineers |
| **Confident AI / DeepEval** | $2.2M seed (2025; confident-ai.com blog) | Revenue unknown | Open-source LLM eval framework with strong community adoption |
| **Cleanlab** | $30M total ($25M Series A, Oct 2023; BusinessWire). Acquired by Handshake, Jan 2026 (Tracxn via search snippet) | Revenue unknown | Data-centric AI quality; now acquired |

**Why now:**
- DSPy framework release and maturation (2023-2025) created a new paradigm for declarative LLM programming, enabling programmatic prompt optimization rather than manual prompt engineering (DSPy, dspy.ai).
- Enterprise LLM adoption is shifting from pilots to production in 2026, creating demand for reliability tooling (TechCrunch, Jan 2026 via search snippet).
- [Inferred]: The convergence of declarative AI frameworks (DSPy) with enterprise pressure for auditable, improvable AI decision systems creates the specific window Modaic targets.

## Founders & Team

**Farouk Adeleke** — Co-Founder & CEO
- BS Computer Science, Boston University (expected May 2026; dropped out to found Modaic) (WayUp; faroukadel.dev)
- The a16z Speedrun profile lists "Prev. Wayfair, IBM, Harvard" — confirmed: Software Engineer at Wayfair; IBM Software Development certification; System Administrator & Assistant at Harvard University (LinkedIn via search snippet; ZoomInfo)
- Research Fellow at The Sycamore Institute (global economics/trade) (LinkedIn via search snippet)
- Workshop Venture Partners — built WorkHero (venture studio focused on climate/education) (LinkedIn via search snippet)
- Previously co-founded Spydr ("GitHub for LLM context") with Ohm Patel; Product Hunt launch June 2025, #12 daily rank, score 140 (Product Hunt)
- Twitter/X: @FaroukAdeleke3 (GitHub profile). Follower count not retrievable.
- LinkedIn: linkedin.com/in/farouk-adeleke — headline: "dspy infra @ modaic.dev / a16z speedrun" (LinkedIn)
- GitHub: github.com/fadeleke57 — 48 repos, 10 followers. Notable pinned repos: `nanocode` (10 stars), `jimmy-proxy` (16 stars), `microcode` (58 stars, via modaic-ai org) (GitHub)

**Tyrin-Ian Todd** — Co-Founder
- MIT '25, Course 6-4 (AI & Decision Making) / EECS (tyrin.dev; LinkedIn)
- Trained foundation transformer models at the MIT Media Lab (a16z Speedrun portal)
- Previously interned at Bloomberg (LinkedIn post, 2022) and Axon (a16z Speedrun portal)
- Co-founded Dyle (AI customer success agent, dyle.io) with Oisín O'Sullivan (dyle.io; MEC Startups search result)
- Won 2019 EnvironMentors National Science Fair with Particles Matter low-cost air quality sensor (GCSE, 2024)
- Contributed to Hugging Face `datasets` library v4.0.0 (multi-modal video/audio support) (GitHub, TyTodd)
- Twitter/X: @ty_todd1 (tyrin.dev). Follower count not retrievable.
- LinkedIn: linkedin.com/in/tyrin-ian-todd — headline: "Modaic" (LinkedIn)
- GitHub: github.com/TyTodd — 33 repos, 8 followers, Pro account. Notable: `modaic` SDK (23 stars), `py5-layout` (6 stars), `sent_graph_rag` (GitHub)

**Co-founder relationship:** Both founders are connected through the DSPy/AI infrastructure community. Farouk's LinkedIn post describes meeting Tyrin-Ian Todd and co-developing Modaic after discussing DSPy (LinkedIn post, Farouk Adeleke, 2025). No shared prior employer or university found.

**Founder-market fit:** Tyrin-Ian Todd brings direct ML research experience from the MIT Media Lab (training foundation transformer models) and prior startup experience building AI agents at Dyle, giving him technical depth in model optimization and evaluation. Farouk Adeleke's experience at Wayfair (e-commerce at scale) and building Spydr (LLM context infrastructure) provides production engineering experience with AI systems. Both founders have published open-source AI tooling. [Inferred]: The combination of ML research depth (Todd) and applied AI infrastructure engineering (Adeleke) is relevant to building a declarative AI optimization platform, though neither founder has prior experience specifically in enterprise decision automation or content moderation at scale.

## Key Risks

**DSPy framework dependency:** Modaic's core technical identity is built on DSPy (Farouk's LinkedIn headline: "dspy infra"). DSPy is an open-source Stanford project; if it loses community momentum, fragments, or is superseded by a competing framework, Modaic's infrastructure layer loses its foundation. Mitigation: the `gepa-rpc` repo suggests work on cross-language compatibility (GitHub).

**Unverified enterprise partnerships:** The claimed design partnerships with Accenture, Dropbox, and Vercel (one-liner) could not be independently confirmed. Braintrust — a direct competitor — already counts Dropbox among its customers (SiliconANGLE, Feb 2026). If these partnerships are early-stage conversations rather than binding agreements, the competitive moat is weaker than the positioning suggests.

**Founder serial pivoting:** CEO Farouk Adeleke previously built Spydr (Product Hunt, June 2025), a different product (LLM context management). Co-founder Tyrin-Ian Todd previously co-founded Dyle (AI customer success). Modaic appears to be a pivot for both founders. While pivots are common at pre-seed, two prior ventures within ~12 months may signal product-market fit has not yet been achieved.

**Well-funded competitive encirclement:** Braintrust raised $80M at $800M valuation (Axios, Feb 2026) and is expanding from observability into optimization. Patronus AI ($20M) targets LLM reliability. These incumbents have larger teams, established customer bases (Notion, Stripe, Cloudflare), and capital to add confidence-routing and optimization features. Modaic's 2-person team must outpace multi-million-dollar R&D efforts.

**Name collision risk:** "Modaic" shares phonetic similarity with "Moda" (YC W26, agent monitoring), "Modal" (AI infrastructure), and "Mod AI" (YC, AP automation). This could create SEO, branding, and investor confusion in a crowded AI infrastructure category.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | LLM observability platform market: $1.97B in 2025, $2.69B in 2026, 36.3% CAGR (Research and Markets, 2026 via search snippet) |
| SAM | No public data found |
| Traction | GitHub org ~116 total stars across repos (GitHub, Apr 2026); Claimed design partnerships with Accenture, Dropbox, Vercel (a16z Speedrun portal, unverified) |
| Revenue Signal | No public data found |
| Founders | Farouk Adeleke (CEO): BU CS, prev. Wayfair/IBM/Harvard, founded Spydr. Tyrin-Ian Todd (Co-Founder): MIT '25 AI+D, MIT Media Lab, prev. Bloomberg/Axon, co-founded Dyle. |
| Competitors | Braintrust ($116M raised, $800M valuation, revenue unknown, full-stack observability+eval; Axios, Feb 2026); Patronus AI ($20M raised, revenue unknown, LLM mistake detection; VentureBeat, May 2024); Confident AI ($2.2M seed, revenue unknown, open-source DeepEval framework; confident-ai.com, 2025); Cleanlab ($30M raised, acquired Jan 2026; BusinessWire, Oct 2023) |
| Moat Signals | Per-customer feedback data flywheel from confidence routing; DSPy ecosystem integration (company description; GitHub) |
| Risk Factors | DSPy framework dependency, unverified enterprise partnerships, well-funded competitive encirclement |
| Founder Reach | Farouk Adeleke: X @FaroukAdeleke3 (count not retrievable), LinkedIn in/farouk-adeleke, GitHub 10 followers. Tyrin-Ian Todd: X @ty_todd1 (count not retrievable), LinkedIn in/tyrin-ian-todd, GitHub 8 followers. (GitHub; tyrin.dev) |
| Distribution Signals | Open-source Python SDK with 23 stars (GitHub, Apr 2026); no Product Hunt launch, no app store presence found |
| Emails | farouk@modaic.dev, tyrin@modaic.dev (a16z Speedrun portal) |
