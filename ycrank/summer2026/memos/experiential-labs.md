# Experiential Labs

> World models for AI agents

| Field | Value |
|-------|-------|
| Website | https://experientiallabs.ai |
| YC Page | https://www.ycombinator.com/companies/experiential-labs |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Infrastructure, AI |
| YC Partner | Diana Hu |
| Emails | No public data found |

## The Idea

- **Problem:** Teams shipping AI agents lack reliable ways to test hypotheses about agent behavior, with current alternatives relying on manual eval set creation and hand-authored test cases (company description, YC page).
- **Approach:** Build world models that simulate reality with high reconstruction fidelity (cited as 99.7%, modeled on self-driving simulation techniques) and automatically generate/execute agent evals from telemetry traces (YC page).
- **Differentiation:** [Inferred]: Versus LangSmith/Arize/Braintrust (trace logging + manual eval authoring), the differentiator is automated eval generation from telemetry via a simulator; versus World Labs/Decart/AMI (general-purpose world models), the differentiator is agent-eval as the wedge use case (YC description; Braintrust, Galileo comparisons via search).
- **Business Model:** [Inferred]: B2B sales of simulation/eval infrastructure to AI agent developers, likely usage-based given simulation compute cost — no pricing page found on experientiallabs.ai (WebFetch, Jun 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Developer-led via open-source repos (world-model-harness, openclaas on GitHub) and founder networks (AutoGPT, Waabi); no public sales motion documented.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond founders' prior simulation/agent research backgrounds (LinkedIn, ResearchGate).
- **Future moat:** [Inferred]: Data flywheel from customer telemetry traces feeding world-model fidelity improvements; unproven because no paying customers are documented publicly.
- **Market structure:** [Inferred]: Self-driving-grade simulation expertise is concentrated in a small talent pool (Waabi, Wayve, Cruise alumni), creating a technical-complexity barrier (Kion Fallah's Waabi tenure per LinkedIn).
- **Commoditization risk:** Well-funded world-model labs (World Labs $1.23B total, AMI Labs $1.03B seed per Fortune/StartupHub 2026) and incumbent eval platforms (LangSmith, Arize, Braintrust) could each extend into this niche.

## Market & Traction

- **Traction signals:**
  - GitHub world-model-harness: 21 stars, last updated Jun 29, 2026 (GitHub, Jun 2026).
  - GitHub openclaas (Continual Learning as a Service): 54 stars, 4 forks (GitHub, Mar 2026).
  - GitHub autoresearch-distillation: 8 stars (GitHub, Jun 2026).
  - Twitter @explabsai: handle exists, follower count not retrievable (WebFetch, Jun 2026).
  - GitHub org followers: 5 (GitHub, Jun 2026).
  - No press, Product Hunt, or funding announcements found (WebSearch, Jun 2026).
- **Competitors:**
  - World Labs ($1.23B raised total — $230M 2024 + $1B Feb 2026; revenue unknown; Fortune, May 2026): general spatial-intelligence world models, not focused on agent evals.
  - AMI Labs ($1.03B seed at $3.5B valuation, Mar 2026, NVIDIA/Bezos backed; revenue unknown; StartupHub, 2026): JEPA-based research foundation models, not agent-eval product.
  - Decart (funding undisclosed in retrieved data; revenue unknown; Fortune, May 2026): consumer real-time world-model experiences, not B2B agent infra.
  - LangSmith / LangChain (funding undisclosed in retrieved data; revenue unknown; Braintrust comparison, 2026): LLM observability + manual eval authoring, not simulator-based eval generation.
  - Braintrust (funding undisclosed in retrieved data; revenue unknown; Braintrust.dev, 2026): CI/CD-native eval/trace platform without simulation backend.
  - Galileo (funding undisclosed in retrieved data; revenue unknown; Galileo.ai, 2026): agent observability with Luna-2 eval models; no world-model simulator.
- **Why now:** [Inferred]: World models entered mainstream AI investment in late 2025/early 2026 (Fortune, May 2026: "AI field's biggest names are betting billions on world models"), and agent telemetry volumes have grown to make automated eval generation tractable.

## Founders & Team

- **Kion Fallah (Founder / CEO):**
  - Background: BS ECE Ohio State (2018), PhD Machine Learning Georgia Tech; Staff Research Scientist at Waabi (autonomous driving), prior roles at Capital One, Texas Instruments, Honda R&D Americas; research in sparse coding, manifold learning, self-supervised learning (LinkedIn, ResearchGate, Google Scholar).
  - Twitter/X: handle not found in retrieved results ("No public account found").
  - LinkedIn: "Building Autonomous Digital Agents" (linkedin.com/in/kfallah).
  - GitHub: @kfallah; top repo not enumerated in retrieved data.
- **Silen Naihin (Founder):**
  - Background: Founding AI Engineer at AutoGPT (helped grow to 150K+ GitHub stars, built agent benchmark, NeurIPS paper "Testing Language Model Agents Safely in the Wild" arXiv:2311.10538); previously co-founder/CEO Endflow (YC W24, procurement AI); Sigma² Fellow; work cited by NYT, Wired, VentureBeat (LinkedIn, silennai.com).
  - Twitter/X: handle not found in retrieved results ("count not retrievable").
  - LinkedIn: "Build data pipelines with a prompt - Co-founder & CEO @ Endflow | AutoGPT founding team | YC W24 | Sigma² Fellow" (linkedin.com/in/silen-naihin).
  - GitHub: @SilenNaihin; specific top repo star count not retrieved.
- **Co-founder relationship:** No public data on co-founder history (no shared employer/university in retrieved Phase 3 data).
- **Founder-market fit:** Fallah brings self-driving-grade simulation/world-model expertise from Waabi (LinkedIn) while Naihin brings agent-benchmark authorship from AutoGPT and prior YC experience via Endflow/W24 (LinkedIn) — directly aligned with simulating environments to evaluate AI agents.

## Key Risks

- **Technical feasibility:** The cited 99.7% reconstruction fidelity is described as self-driving-derived (YC page) but no published benchmark validates this figure for general-domain agent simulation; achieving comparable fidelity outside narrow driving scenes is unproven in retrieved literature.
- **Well-capitalized adjacent entrants:** World Labs ($1.23B) and AMI Labs ($1.03B) are building world models with orders-of-magnitude more capital (Fortune, May 2026; StartupHub, 2026), and could extend into agent evaluation if that becomes a profitable wedge.
- **Eval-incumbent substitution:** LangSmith, Arize, and Braintrust already own developer trace/eval workflows (Braintrust.dev, 2026); they could add simulation features rather than cede the workflow.
- **Co-founder concurrency:** Silen Naihin's LinkedIn lists active Co-founder/CEO role at Endflow alongside founding Experiential Labs (LinkedIn, 2026); split-attention risk unless Endflow role has wound down — no public confirmation found.
- **Single-use-case wedge:** The product is currently scoped to "agent evals from telemetry traces" (YC page); if eval automation does not produce paying customers, the path to broader world-model monetization is undefined in public materials.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | GitHub world-model-harness 21 stars (GitHub, Jun 2026); openclaas 54 stars, 4 forks (GitHub, Mar 2026); autoresearch-distillation 8 stars (GitHub, Jun 2026); GitHub org 5 followers (GitHub, Jun 2026) |
| Revenue Signal | No public data found |
| Founders | Kion Fallah (CEO): PhD ML Georgia Tech, ex-Waabi Staff Research Scientist, Capital One, Honda R&D. Silen Naihin (Founder): AutoGPT founding AI engineer, Endflow co-founder/CEO (YC W24), NeurIPS paper author, Sigma² Fellow. |
| Competitors | World Labs ($1.23B raised, revenue unknown, general spatial world models vs. this co's agent-eval focus); AMI Labs ($1.03B seed, revenue unknown, JEPA research models vs. applied eval product); Decart (funding undisclosed, revenue unknown, consumer world-model experiences vs. B2B infra); LangSmith (funding undisclosed, revenue unknown, manual eval authoring vs. simulator-generated evals); Braintrust (funding undisclosed, revenue unknown, CI/CD eval pipeline without simulation) |
| Moat Signals | No public data found |
| Risk Factors | Technical feasibility of 99.7% fidelity outside driving domain, well-funded adjacent world-model entrants, eval-incumbent substitution |
| Founder Reach | Kion Fallah: Twitter not found, LinkedIn headline "Building Autonomous Digital Agents", GitHub @kfallah star count not retrieved. Silen Naihin: Twitter count not retrievable, LinkedIn 500+ (count not retrievable), GitHub @SilenNaihin star count not retrieved (AutoGPT contributions to 150K+ star repo per LinkedIn). |
| Distribution Signals | GitHub org with 3 public repos (world-model-harness, openclaas, autoresearch-distillation) (GitHub, Jun 2026); Twitter @explabsai active (YC page, Jun 2026); no Product Hunt launch found (WebSearch, Jun 2026) |
| Emails | No public data found |

Sources:
- [Experiential Labs YC page](https://www.ycombinator.com/companies/experiential-labs)
- [Experiential Labs website](https://experientiallabs.ai)
- [Experiential Labs GitHub](https://github.com/experientiallabs)
- [Kion Fallah LinkedIn](https://www.linkedin.com/in/kfallah/)
- [Kion Fallah personal site](http://kionfallah.com/)
- [Silen Naihin LinkedIn](https://www.linkedin.com/in/silen-naihin/)
- [Silen Naihin personal site](https://www.silennai.com/)
- [Testing Language Model Agents Safely in the Wild (arXiv)](https://arxiv.org/abs/2311.10538)
- [Fortune: world models bets](https://fortune.com/2026/05/20/physical-ai-world-models-research-nvidia-google-fei-fei-li-yann-lecun/)
- [StartupHub: YC Paper Club world models](https://www.startuphub.ai/ai-news/ai-research/2026/yc-paper-club-inference-diffusion-world-models)
- [Braintrust observability comparison 2026](https://www.braintrust.dev/articles/best-ai-observability-tools-2026)
- [Galileo: best AI agent eval platforms 2026](https://galileo.ai/blog/best-ai-agent-evaluation-platforms)
