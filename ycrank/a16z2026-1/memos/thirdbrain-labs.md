# Thirdbrain Labs

> Unlocking the next one billion specialized models

| Field | Value |
|-------|-------|
| Website | https://thirdbrainlabs.ai |
| YC Page | https://speedrun.a16z.com/companies/thirdbrain-labs |
| Batch | No public data found (provided URL points to a16z Speedrun, not YC; page returned 404 at time of research; no YC listing found on ycombinator.com) |
| Industry | Robotics, AI Models/Infrastructure, B2B / |
| Team Size | 2 |
| Location | San Francisco, California, United States of America |
| Tags | Robotics, AI Models/Infrastructure, B2B |
| YC Partner | Not listed (a16z Speedrun page returned 404; no YC partner identified) |
| Emails | margaret@thirdbrainlabs.ai, david@thirdbrainlabs.ai |

## The Idea

**Problem:** Enterprise and domain-expert teams that need to customize AI models for specialized workflows face error-prone fine-tuning processes requiring heavy datasets and massive labor (company website). Existing approaches involve manual dataset curation, episodic training runs, and engineering-heavy pipelines that prevent non-ML teams from continuously improving production models. [Inferred]: Current alternatives include building in-house fine-tuning pipelines (costly, requires ML engineers), using platforms like Scale AI or Snorkel AI (primarily large-enterprise focused), or relying on generic base models without customization.

**Approach:** Thirdbrain Labs provides end-to-end post-training infrastructure that captures expert decisions directly and applies them on top of base models, allowing teams to steer production models continuously without error-prone workflows (company description). The website mentions "Advanced Benchmarks" and "Research" as product pillars, alongside a "Book a demo" flow indicating an enterprise sales motion (thirdbrainlabs.ai). The meta description states the product helps "domain experts own and train custom models to scale their impact" (thirdbrainlabs.ai).

**Differentiation:** Unlike data-labeling platforms such as Scale AI or Labelbox that focus on annotation workflows, Thirdbrain Labs positions itself around capturing expert decisions as the training signal—framing the workflow around domain knowledge rather than labeled datasets (company description). Unlike Together AI or Hugging Face AutoTrain, which offer general-purpose fine-tuning compute, Thirdbrain Labs emphasizes continuous post-training loops rather than one-off training runs (company description). [Inferred]: The "expert decisions" framing suggests an RLHF-adjacent or preference-learning approach tailored for non-ML practitioners.

**Business Model:** No pricing page found on thirdbrainlabs.ai. [Inferred]: Most likely monetization path is a SaaS platform fee (possibly tiered by model usage or number of expert feedback loops), given the "Book a demo" flow and B2B positioning.

**TAM/SAM:**
- The global LLM fine-tuning orchestration market was valued at $3.2B in 2025, projected to reach $24.8B by 2034 at 25.4% CAGR (DataIntelo, 2025 via search snippet).
- North America held $1.24B (~38.7%) of that market in 2025 (DataIntelo, 2025 via search snippet).
- The broader enterprise LLM market was valued at $4.84B in 2025, projected to $48.25B by 2034 (Fortune Business Insights via search snippet).

**GTM / Distribution:** The website features a "Book a demo" CTA and login portal, indicating an enterprise/sales-led motion (thirdbrainlabs.ai). [Inferred]: Most likely distribution path is direct outreach to teams with domain expertise but limited ML capacity (e.g., robotics, biotech, manufacturing), starting with founder-led sales given the 2-person team.

## Defensibility

No defensibility signals found in public sources at this time. The product is pre-launch or very early; no public data on customers, data flywheel, or proprietary datasets was found.

[Inferred]: Potential moat could develop via accumulated expert decision data from customers (each client's feedback loops create model improvements that are hard to replicate), but this is unproven at this stage. Switching costs could emerge if models trained on the platform become embedded in production workflows.

**Market structure:** [Inferred]: Large incumbents like Scale AI ($29B valuation, Wikipedia) and Labelbox ($1B+ valuation, Crunchbase) focus on large-enterprise labeling contracts with high-touch sales cycles and annotation workforce infrastructure. A lightweight, self-serve post-training tool for smaller domain-expert teams may not fit their sales motion or margin structure. However, no structural barrier is definitively identifiable from public evidence at this stage.

**Commoditization risk:** Open-source fine-tuning tooling (Hugging Face AutoTrain, Axolotl, LLaMA-Factory) is freely available and improving rapidly. Together AI, Fireworks AI, and cloud providers (AWS Bedrock, Google Vertex AI) all offer managed fine-tuning APIs. [Inferred]: The competitive moat, if any, lies in the expert-decision capture UX and continuous feedback loop workflow rather than the underlying fine-tuning compute, which is increasingly commoditized.

## Market & Traction

**Traction signals:**
- Company website is live with a login portal and "Book a demo" CTA (thirdbrainlabs.ai, accessed April 2026).
- No public user counts, revenue, customer names, or partnerships found.
- Company Twitter/X account (@ThirdbrainLabs) exists per company data; follower count not retrievable (X.com returned error on fetch).
- Company LinkedIn page exists (linkedin.com/company/thirdbrain-labs per company data); follower count not retrievable.
- No Product Hunt launch found.
- No app store listings, Chrome extension, or download counts found.
- No press coverage in named publications found.
- No Discord or Slack community found.
- No job postings found on YC's job board.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Thirdbrain Labs |
|---|---|---|---|
| **Scale AI** | $29B valuation (Meta 49% stake, June 2025; Wikipedia) | ~$2B revenue in 2025 (Sacra via search snippet) | Full-stack data labeling + RLHF with large human annotation workforce; enterprise-focused at much larger scale |
| **Snorkel AI** | $100M Series D at $1.3B valuation (May 2025; BusinessWire) | Revenue unknown | Data-centric approach with programmatic labeling; evaluation + fine-tuning for Fortune 500 |
| **Together AI** | $305M Series B at $3.3B valuation (Feb 2025; PRNewswire) | ~$50M in 2024 (Sacra via search snippet) | Inference + fine-tuning cloud for open-source models; developer-focused with 450K+ users |
| **Labelbox** | Series D, $1B+ valuation (Crunchbase via search snippet) | ARR surpassed $100M by 2025 (search snippet) | Enterprise data management platform with RLHF workflows; serves 80%+ of Fortune 500 AI teams |
| **Predibase** | ~$28M total raised; acquired by Rubrik for $100M-$500M (June 2025; SiliconANGLE) | Revenue unknown | LoRA-based fine-tuning with reinforcement fine-tuning; now part of Rubrik's enterprise stack |

**Why now:**
- [Inferred]: The emergence of capable open-source base models (Llama, Mistral, DeepSeek) in 2024-2025 created demand for post-training customization by non-ML teams who can now start from a strong foundation.
- Post-training optimization emerged as a major capability unlock in 2025, with Nathan Lambert's "The State of Post-Training in 2025" documenting how fine-tuning, RLHF, and distillation techniques extract significant additional performance from base models (interconnects.ai, 2025).
- The Meta-Scale AI deal disrupted the market leader's customer base in mid-2025, with OpenAI and Google reportedly cutting ties with Scale AI (Sacra via search snippet), potentially opening space for alternative post-training providers.

## Founders & Team

**Margaret Zhang** — Co-founder & CEO
- Education: NYU Stern School of Business (B.S.), Stern Global Leadership Award, Stern Honors Scholar (LinkedIn)
- Previously: Head of Partnerships & GTM at Spice AI, a web3/blockchain data platform (Medium, The Org); VC Fellow at INVC covering M12 and Notion (LinkedIn); Investment Summer Associate at Temasek (LinkedIn)
- Co-founded Coalition Systems, a defense AI startup building "secure AI coordination software for allied defense," which was backed by a16z Speedrun (LinkedIn, search results). Traveled to Kyiv to meet with Ukraine Ministry of Defence operators (search results).
- Languages: Chinese (native), English (native), French (limited working) (LinkedIn)
- Twitter/X: @_margaretzhang (Medium profile); follower count not retrievable
- LinkedIn: linkedin.com/in/margaretczhang — 2,000+ followers, 500+ connections (LinkedIn)
- GitHub: No public repos found under confirmed handle
- Medium: @margaret-c-zhang — 29 followers; published 9+ articles for Spice AI Blog (Medium)

**David Huang** — Co-founder & CTO
- Education: UC Berkeley, Regents' and Chancellor's Scholarship (2009) (LinkedIn)
- Training: Stanford XCS224N — NLP with Deep Learning (Apr 2024); multiple Coursera ML certifications (2015-2017); Udacity Introduction to AI (2012) (LinkedIn)
- Awards: Two Sigma Halite AI Challenge 2018 — CornellTech hackathon winner, global top 1% (LinkedIn)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ds-huang — 2,000+ followers, 500+ connections (LinkedIn)
- GitHub: No public repos found under confirmed handle

**Co-founder relationship:** Both founders list locations in the NYC/SF corridor. No shared prior employer or university identified from available data. Zhang attended NYU Stern; Huang attended UC Berkeley. No public data on co-founder history.

**Founder-market fit:** Zhang brings GTM, partnerships, and investor-network experience from roles at Spice AI (AI/data platform), Temasek, and INVC, plus prior startup founding experience at Coalition Systems (LinkedIn, Medium). Huang brings deep ML/AI technical background evidenced by Stanford NLP coursework, a top-1% finish in Two Sigma's Halite AI programming challenge, and over a decade of ML-related training (LinkedIn). [Inferred]: The CEO's experience at Spice AI (an AI data platform) and the CTO's ML engineering background provide relevant domain exposure for building post-training AI infrastructure, though neither founder has a documented prior exit.

## Key Risks

**Name and entity confusion:** "Thirdbrain" is a common word construction shared by ThirdBrain SA (Swiss digital consultancy, operating since 2012), 3rd Brain (LinkedIn company), and Third Brain Technology (Tracxn profile). This creates brand disambiguation challenges for SEO, investor discovery, and customer acquisition. The a16z Speedrun page (speedrun.a16z.com/companies/thirdbrain-labs) returned 404 at time of research, and no YC listing was found on ycombinator.com, creating ambiguity about accelerator affiliation.

**Founder prior-venture overlap:** CEO Margaret Zhang co-founded Coalition Systems (defense AI, a16z Speedrun-backed) and served as Head of Partnerships at Spice AI (LinkedIn, Medium). The relationship between Coalition Systems and Thirdbrain Labs is unclear from public sources — whether this represents a pivot, a parallel venture, or a full departure. Investors should clarify the disposition of Coalition Systems.

**Incumbent platform expansion:** Scale AI launched Scale Labs in March 2026 focused on post-training evaluation (search snippet). Labelbox added RLHF workflows and evaluation tools in 2024-2025 (BusinessWire). Together AI expanded fine-tuning to 100B+ parameter models in September 2025 (together.ai blog). Cloud providers (AWS Bedrock, Google Vertex AI) offer managed fine-tuning natively. The post-training infrastructure space is rapidly filling with well-capitalized incumbents.

**Open-source substitution:** Free tools like Hugging Face AutoTrain, Axolotl, and LLaMA-Factory lower the barrier for teams with even modest ML capability to fine-tune models without a paid platform. The differentiation between Thirdbrain Labs' "expert decision capture" and standard RLHF/DPO workflows is not publicly documented in enough detail to assess defensibility against open-source alternatives.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.2B in 2025, projected $24.8B by 2034 at 25.4% CAGR for LLM fine-tuning orchestration (DataIntelo, 2025 via search snippet) |
| SAM | North America: $1.24B in 2025, ~38.7% of global market (DataIntelo, 2025 via search snippet) |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Margaret Zhang (CEO): NYU Stern, Head of Partnerships at Spice AI, VC Fellow at INVC, co-founded Coalition Systems. David Huang (CTO): UC Berkeley (Regents' Scholar), Two Sigma Halite top 1%, Stanford NLP coursework. |
| Competitors | Scale AI ($29B valuation, ~$2B revenue 2025, full-stack labeling + RLHF; Wikipedia/Sacra), Snorkel AI ($1.3B valuation, revenue unknown, data-centric eval + fine-tuning; BusinessWire), Together AI ($3.3B valuation, ~$50M 2024 revenue, inference + fine-tuning cloud; PRNewswire/Sacra), Labelbox ($1B+ valuation, $100M+ ARR, enterprise RLHF platform; Crunchbase) |
| Moat Signals | No public data found |
| Risk Factors | Founder prior-venture ambiguity (Coalition Systems), incumbent platform expansion (Scale/Labelbox/Together), open-source substitution risk |
| Founder Reach | Margaret Zhang: Twitter @_margaretzhang (count not retrievable), LinkedIn 2,000+ followers (LinkedIn). David Huang: Twitter not found, LinkedIn 2,000+ followers (LinkedIn). |
| Distribution Signals | No public data found |
| Emails | margaret@thirdbrainlabs.ai, david@thirdbrainlabs.ai (a16z Speedrun portal data) |
