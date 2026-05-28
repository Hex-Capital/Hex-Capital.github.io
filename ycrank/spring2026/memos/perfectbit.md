# PerfectBit

> Training data for frontier AI labs

| Field | Value |
|-------|-------|
| Website | https://perfectbit.ai |
| YC Page | https://www.ycombinator.com/companies/perfectbit |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Infrastructure, AI |
| YC Partner | Garry Tan |
| Emails | founders@perfectbit.ai |

## The Idea

- **Problem:** Frontier LLMs trained on web-scraped text hallucinate and fail on tasks humans find trivial because "progress in model performance is gated on high-quality data" (perfectbit.ai, 2026); current alternative is human-annotated data from vendors like Scale AI and Surge AI (TechCrunch, Oct 2025).
- **Approach:** Generates "verifier-grounded" training data correct-by-construction by routing outputs through "formal proof systems, simulators, executable tests, and oracle databases" instead of human annotation (perfectbit.ai, 2026).
- **Differentiation:** Vs. Scale AI / Surge AI / Mercor (human-expert labeling marketplaces — TechCrunch, Oct 2025): PerfectBit substitutes formal verifiers for human annotators; vs. Snorkel AI (programmatic weak supervision — BusinessWire, May 2025): PerfectBit emphasizes physics simulators and formal proofs rather than heuristic labeling functions [Inferred from product positioning].
- **Business Model:** No public data found on pricing page; [Inferred]: B2B contract sales of training datasets to frontier AI labs, consistent with YC tagline "Training data for frontier AI labs" (YC page, 2026).
- **TAM/SAM:** "Roughly $10 billion is flowing annually into training data providers" (TechBuzz/TechCrunch, 2025); no public SAM data found for the verifier-grounded segment specifically.
- **GTM / Distribution:** [Inferred]: Direct sales to frontier lab research teams, leveraging founders' Meta Superintelligence Labs network (YC page founder bios, 2026); no public GTM data found.

## Defensibility

- **Moat today:** [Inferred]: Technical complexity of integrating physics simulators, formal proof systems, and oracle databases into a single data-generation pipeline (perfectbit.ai product description, 2026); no public moat metrics found.
- **Future moat:** [Inferred]: Proprietary library of verified domains (physics, biology, formal logic) could create switching costs as labs fine-tune on specific PerfectBit datasets; unproven because no customer contracts are publicly disclosed.
- **Market structure:** [Inferred]: Human-labeling incumbents (Scale, Surge, Mercor) have unit economics built on contractor networks paying "$1.5 million per day" (TechCrunch, Oct 2025) — pivoting to verifier-based generation would cannibalize that contractor revenue stream.
- **Commoditization risk:** Academic groups are already publishing on formally-verified training data (e.g., FOVER using Z3/Isabelle — arXiv 2505.15960, May 2025), indicating the core technique is reproducible by well-funded labs in-house.

## Market & Traction

- **Traction signals:**
  - No public revenue data found.
  - No public customer count or logos found (perfectbit.ai, 2026).
  - Twitter/X: @PerfectbitAI exists (YC page, 2026); follower count not retrievable.
  - LinkedIn: linkedin.com/company/perfectbit exists (YC page, 2026); follower count not retrievable.
  - No Product Hunt launch found (WebSearch, May 2026).
  - No press coverage found (WebSearch, May 2026).
- **Competitors:**
  - Scale AI ($14.3B from Meta at $29B valuation, $2B ARR 2025 — Sacra/Getlatka 2025): largest human-labeling vendor; lost major lab customers post-Meta investment (TechCrunch, Oct 2025).
  - Surge AI (no disclosed external funding; reportedly raising at $15B valuation, $1B+ 2024 revenue — Equidam, 2025): expert human labelers, profitable since launch.
  - Mercor ($350M Series C at $10B valuation, ~$450–500M ARR — TechCrunch/CNBC, Oct 2025): human-in-the-loop expert sourcing for AI labs.
  - Snorkel AI ($100M Series D at $1.3B valuation, revenue unknown — BusinessWire, May 2025): programmatic weak-supervision labeling platform.
  - Micro1 ($100M ARR, $500M valuation — TechCrunch, Dec 2025 / Sept 2025): Scale AI competitor focused on expert labeling.
- **Why now:** [Inferred]: AI labs are publicly pulling work from Scale AI after the Meta investment (TechCrunch, Oct 2025), and 2025 research (FOVER, RLVR — arXiv 2505.15960, 2506.15522) has established that programmatic verifiers can replace human annotation for verifiable-reward training.

## Founders & Team

- **Peter Vajda (Co-founder):**
  - Background: PhD Computer Science, EPFL 2007–2011 (RocketReach/Crunchbase); Visiting Assistant Professor at Stanford on personalized multimedia and mobile visual search (Stanford Talks); 11 years at Meta, most recently Director of Media Generation at Meta Superintelligence Lab leading text-to-image and video generation (YC page, 2026; RocketReach, 2025).
  - Twitter/X: Multiple "@PeteVajda"/"@peter_vajda" handles surfaced; identity match not confirmed for this founder (WebSearch, 2026); count not retrievable.
  - LinkedIn: linkedin.com/in/péter-vajda-9a03aaa (search result, 2026) — headline "Meta" (LinkedIn snippet).
  - GitHub: No public repos found tied to this person.
- **Seiji Yamamoto (Co-founder):**
  - Background: BS Physics and Electrical Engineering, Stanford; PhD Physics, Rice University; publications in PNAS and Physical Review Letters (YC page, 2026; TheOrg, 2025); 9 years at Meta as Senior Staff Research Scientist on Core Llama (pre-training, post-training, inference optimization, full-duplex speech, computer vision) at AGI Foundations / Meta Superintelligence Labs (TheOrg, 2025).
  - Twitter/X: No public account confirmed (WebSearch, 2026).
  - LinkedIn: No public profile URL retrieved.
  - GitHub: No public repos found.
- **Co-founder relationship:** Both worked at Meta Superintelligence Labs/AGI Foundations on frontier model development (YC page, 2026; TheOrg, 2025).
- **Founder-market fit:** Both founders led training-data and model-training programs inside Meta's frontier LLM effort — Vajda on generative media data pipelines, Yamamoto on Llama pre-/post-training — giving them direct exposure to the buyer-side problem they are now selling to (YC page, 2026; TheOrg, 2025).

## Key Risks

- **Customer concentration on a small buyer pool:** "Frontier AI labs" is a market of roughly 5–10 companies (OpenAI, Anthropic, Google DeepMind, Meta, xAI, etc.) — losing or failing to land any one buyer materially affects revenue (TechCrunch, Oct 2025, on lab churn from Scale).
- **Meta non-compete / IP overhang:** Both founders departed senior Meta Superintelligence Labs roles within the last year (YC page, 2026; TheOrg, 2025); [Inferred]: Meta's June 2025 $14.3B investment in Scale AI (Sacra, 2025) and ongoing in-house data programs could create competitive and IP-claim friction.
- **Technical feasibility at scale:** Formal verifiers and physics simulators cover narrow, formalizable domains; extending verifier-grounded generation to open-ended language tasks remains an open research problem (arXiv 2506.15522, Jun 2025; arXiv 2507.16331, Jul 2025).
- **Incumbent substitution:** Scale AI, Surge, Mercor, and Snorkel are already expanding into expert-verified and programmatic data ($100M Snorkel Series D for "expert data" platform — BusinessWire, May 2025), reducing the white space for a 2-person team.
- **Commoditization by in-house lab teams:** Published methods like FOVER (arXiv 2505.15960, May 2025) and RLVR (arXiv 2505.04842, 2025) lower the build-vs-buy barrier for well-resourced labs.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$10B annually flowing into training-data providers (TechBuzz/TechCrunch, 2025) |
| SAM | No public data found |
| Traction | Twitter @PerfectbitAI and LinkedIn /company/perfectbit exist, counts not retrievable (YC page, 2026); no revenue, customer, press, or Product Hunt data found |
| Revenue Signal | No public data found |
| Founders | Peter Vajda (Co-founder): PhD CS EPFL, ex-Director Media Generation at Meta Superintelligence Lab, ex-Stanford Visiting Asst Prof. Seiji Yamamoto (Co-founder): PhD Physics Rice, BS Stanford, ex-Senior Staff Research Scientist on Core Llama at Meta Superintelligence Labs. |
| Competitors | Scale AI ($14.3B from Meta at $29B valuation, $2B ARR, human-labeling marketplace — Sacra 2025); Surge AI (raising at reported $15B valuation, $1B+ 2024 revenue, expert human labelers — Equidam 2025); Mercor ($350M Series C at $10B valuation, ~$450–500M ARR, expert sourcing — TechCrunch Oct 2025); Snorkel AI ($100M Series D at $1.3B valuation, revenue unknown, programmatic weak supervision — BusinessWire May 2025); Micro1 ($100M ARR, $500M valuation, expert labeling — TechCrunch Dec 2025) |
| Moat Signals | No public data found |
| Risk Factors | Customer concentration on ~5–10 frontier labs, technical feasibility outside formalizable domains, commoditization by published academic methods (FOVER/RLVR) |
| Founder Reach | Peter Vajda: Twitter identity unconfirmed, LinkedIn /in/péter-vajda-9a03aaa, GitHub not found. Seiji Yamamoto: Twitter not found, LinkedIn not retrieved, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | founders@perfectbit.ai (YC page, 2026) |

Sources:
- [PerfectBit website](https://perfectbit.ai/)
- [PerfectBit YC page](https://www.ycombinator.com/companies/perfectbit)
- [Péter Vajda — RocketReach](https://rocketreach.co/peter-vajda-email_11054849)
- [Péter Vajda — LinkedIn](https://www.linkedin.com/in/p%C3%A9ter-vajda-9a03aaa/)
- [Péter Vajda — Crunchbase](https://www.crunchbase.com/person/peter-vajda)
- [Seiji Yamamoto — TheOrg](https://theorg.com/org/meta/org-chart/seiji-yamamoto)
- [Mercor $10B Series C — TechCrunch](https://techcrunch.com/2025/10/27/mercor-quintuples-valuation-to-10b-with-350m-series-c/)
- [How AI labs use Mercor — TechCrunch](https://techcrunch.com/2025/10/29/how-ai-labs-use-mercor-to-get-the-data-companies-wont-share/)
- [Micro1 $100M ARR — TechCrunch](https://techcrunch.com/2025/12/04/micro1-a-scale-ai-competitor-touts-crossing-100m-arr/)
- [Snorkel AI Series D — BusinessWire](https://www.businesswire.com/news/home/20250529083998/en/)
- [Scale AI revenue — Sacra](https://sacra.com/c/scale-ai/)
- [Surge AI vs Scale AI — Equidam](https://www.equidam.com/ai-valuation-scale-ai-vs-surge-ai/)
- [FOVER paper — arXiv 2505.15960](https://arxiv.org/pdf/2505.15960)
- [Lessons from Grounded LLMs with Verifiable Rewards — arXiv 2506.15522](https://arxiv.org/pdf/2506.15522)
