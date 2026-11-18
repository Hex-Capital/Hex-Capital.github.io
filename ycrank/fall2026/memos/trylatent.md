# Latent

> Stop AI agent mistakes by reading the model?s mind

| Field | Value |
|-------|-------|
| Website | http://runlatent.ai/ |
| YC Page | https://www.ycombinator.com/companies/trylatent |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/trylatent)) |
| Industry | B2B / B2B -> Security |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | AI |
| YC Partner | Harj Taggar ([Y Combinator](https://www.ycombinator.com/companies/trylatent)) |
| Emails | vedant@runlatent.ai, founder ([YC Launch](https://www.ycombinator.com/launches/WBw-latent-stop-ai-agent-mistakes-by-reading-the-model-s-mind)); founders@runlatent.ai, company inquiries ([Latent Company](https://runlatent.ai/company)); support@runlatent.ai, support and privacy ([Latent Privacy](https://runlatent.ai/privacy)); billing@runlatent.ai, billing, and calibration@runlatent.ai, calibration requests ([Latent Pricing](https://runlatent.ai/pricing)); security@runlatent.ai, vulnerability reports ([Latent Disclosure](https://runlatent.ai/disclosure)); research@runlatent.ai, research inquiries ([Latent Research](https://runlatent.ai/blog/agent-shortcut-hold)); hello@runlatent.ai, SDK author contact ([PyPI](https://pypi.org/project/runlatent/0.0.1/)) |

## The Idea

- **Problem:** Teams shipping LLMs in healthcare, finance, insurance and legal can deliver unsupported answers or execute unauthorized agent actions when the cost and latency of a second LLM judge limit checks to a sample ([YC Launch](https://www.ycombinator.com/launches/WBw-latent-stop-ai-agent-mistakes-by-reading-the-model-s-mind)).
- **Approach:** Latent probes token activations directly on self-hosted vLLM models and uses its own reader for closed API models, then applies policies that can release, hold, reroute or queue flagged outputs and export labels for post-training ([Latent Product](https://runlatent.ai/), [Latent Post-Training, Nov 2026](https://runlatent.ai/blog/production-training-data)).
- **Differentiation:** Latent reads the serving model’s activations on vLLM, while Claude Opus as a judge rereads the answer and its sources, Galileo Protect applies evaluation models to inputs and outputs, and Patronus Lynx checks whether retrieved text supports an answer ([Latent Benchmarks](https://runlatent.ai/benchmarks), [Galileo Protect](https://galileo.ai/blog/ai-agent-guardrails-development-lifecycle), [Patronus Lynx](https://docs.patronus.ai/docs/research_and_differentiators/Lynx/base)).
- **Business Model:** Monthly plans include Free with 5,000 scored answers, Pro at $299 with 100,000 and Team at $1,499 with 1 million, with metered overages on paid tiers and annual Enterprise contracts ([Latent Pricing, Nov 2026](https://runlatent.ai/pricing)).
- **TAM/SAM:** Grand View Research estimates the broader global agentic AI security market at $1.8 billion in 2026, with 38.9% projected CAGR through 2033 ([Grand View Research, Aug 2026](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report)).
- **GTM / Distribution:** Latent offers self-serve signup through its Python SDK, advertises founder-led pilots for teams serving their own models, and takes waitlist signups for an OpenAI-compatible endpoint ([Latent Launch, Oct 2026](https://runlatent.ai/blog/latent-is-live), [Gaur on LinkedIn](https://www.linkedin.com/posts/vedantgaur_some-personal-news-im-in-y-combinators-activity-7508570962125225984-FjYV)).

## Defensibility

- **Moat today:** Latent’s vLLM integration scores activations during generation, and the product uses sampled traffic and optional human review to calibrate each deployment ([Latent Product](https://runlatent.ai/), [Latent Post-Training, Nov 2026](https://runlatent.ai/blog/production-training-data)).
- **Future moat:** [Inferred]: Customer-specific calibration and review history could create switching costs if a replacement needs to rebuild the detector for that traffic, although Latent already lets customers export labeled examples ([Latent Post-Training, Nov 2026](https://runlatent.ai/blog/production-training-data)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Goodfire has already developed activation-based runtime monitoring for open models and announced distribution through Baseten, with configurable review, refusal and rerouting ([Goodfire–Baseten announcement, Oct 2026](https://www.goodfire.com/blog/goodfire-baseten-partnership)).

## Market & Traction

- **Traction signals:**
  - Public self-serve launch on October 4, 2026 ([Latent launch announcement](https://runlatent.ai/blog/latent-is-live)).
  - Y Combinator backing in Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/trylatent)).
  - $125K raised per Dealroom’s database, with no issuer-confirmed amount located ([Dealroom, Nov 2026](https://dealroom.co/just-founded/latent/)).
  - Spotlight coverage on November 2, 2026 ([The AI Read](https://theairead.com/ventures)).
  - 215 company LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/runlatent)).
  - 18 company X followers at @runlatentai ([X profile mirror, Nov 2026](https://www.nitter.cf/runlatentai)).
  - 0 open jobs on YC’s platform ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/trylatent/jobs)).
- **Competitors:**
  - Goodfire (over $200M raised, revenue unknown): Distributes activation-based safety monitors for open models through Baseten and raised a $150M Series B led by B Capital in February 2026 ([Goodfire Company](https://www.goodfire.com/company), [Goodfire Series B](https://www.goodfire.com/blog/our-series-b), [Baseten partnership](https://www.goodfire.com/blog/goodfire-baseten-partnership)).
  - Patronus AI ($70M raised, revenue unknown): Offers Lynx for grounding checks and simulated environments for agent training, and raised a $50M Series B led by Greenfield Partners in June 2026 ([Patronus Lynx](https://docs.patronus.ai/docs/research_and_differentiators/Lynx/base), [Patronus Series B release](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)).
  - Galileo ($68M raised before acquisition, revenue unknown): Uses Luna-2 evaluation models for runtime guardrails, raised a $45M Series B led by Scale Venture Partners in October 2024, and was acquired by Cisco in May 2026 ([Galileo Protect](https://galileo.ai/blog/ai-agent-guardrails-development-lifecycle), [Galileo Series B release](https://www.prnewswire.com/news-releases/galileo-raises-45m-series-b-funding-to-bring-evaluation-intelligence-to-generative-ai-teams-everywhere-302276383.html), [Cisco](https://www.cisco.com/site/us/en/about/corporate-development/acquisitions/galileo/index.html)).
- **Why now:** [Inferred]: OpenAI’s August 2025 release of open-weight gpt-oss models gave teams a deployable model whose internal activations Latent could instrument directly, as it did in its October 2026 agent benchmark ([OpenAI, Aug 2025](https://openai.com/index/introducing-gpt-oss/), [Latent Product, Oct 2026 benchmark](https://runlatent.ai/)).

## Founders & Team

- **Vedant Gaur (Founder):**
  - **Background:** Penn’s Jerome Fisher M&T program in computer science and finance, ML internships at Robinhood and Amazon, and research at Stanford and Princeton on interpretability and evaluation ([Gaur’s portfolio](https://vedantgaur.com/)); direct business email vedant@runlatent.ai ([YC Launch](https://www.ycombinator.com/launches/WBw-latent-stop-ai-agent-mistakes-by-reading-the-model-s-mind)).
  - **Twitter/X:** @thevedantgaur, 176 followers ([X profile mirror, Nov 2026](https://www.nitter.cf/thevedantgaur)).
  - **LinkedIn:** [Verified profile](https://www.linkedin.com/in/vedantgaur); headline: No public data found.
  - **GitHub:** @vedantgaur, Disorder-Detection with 2 stars ([GitHub, Nov 2026](https://github.com/vedantgaur/Disorder-Detection)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Gaur’s work on activation probes at Stanford, LLM evaluation at Princeton and fine-tuning infrastructure at Robinhood covers the methods Latent uses for detection and calibration, with Harj Taggar listed as YC primary partner ([Gaur’s portfolio](https://vedantgaur.com/), [Latent Product](https://runlatent.ai/), [Y Combinator](https://www.ycombinator.com/companies/trylatent)).

## Key Risks

- **Benchmark transfer:** Latent reports stopping 99% of rule-breaking agents versus 69% for a frontier judge in its gpt-oss-120b sandbox benchmark, and provides traffic-specific recalibration to adapt detection to each deployment ([Latent Product, Oct 2026 benchmark](https://runlatent.ai/), [Latent Post-Training](https://runlatent.ai/blog/production-training-data)).
- **Scoring gaps:** Answers pass unscored when a configured usage or spend limit pauses scoring, with advance usage alerts and paid overages available ([Latent Pricing](https://runlatent.ai/pricing)).
- **Hosted data exposure:** Hosted scoring sends prompts and answers to Latent’s cloud, with SDK redaction, retention controls and deployment inside the customer’s own environment available ([Latent Privacy](https://runlatent.ai/privacy), [Latent Security](https://runlatent.ai/security)).
- **Name collision:** Westmore attributes an $80M raise to runlatent.ai, while the financing announcement identifies Latent Health, a separate pharmacy software company ([Westmore](https://westmore.com/funded/latent), [Latent Health financing announcement, Mar 2026](https://www.latenthealth.com/blog/latent-raises-80m-to-close-the-gap-between-diagnosis-and-treatment)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader global agentic AI security market estimated at $1.8B in 2026, with 38.9% projected CAGR through 2033 ([Grand View Research, Aug 2026](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report)) |
| SAM | No public data found |
| Traction | Public self-serve launch October 4, 2026 ([Latent](https://runlatent.ai/blog/latent-is-live)); Fall 2026 YC backing ([Y Combinator](https://www.ycombinator.com/companies/trylatent)); $125K database-reported funding ([Dealroom, Nov 2026](https://dealroom.co/just-founded/latent/)) |
| Revenue Signal | Free with 5,000 scored answers per month, Pro $299/month for 100,000, Team $1,499/month for 1 million, metered paid overages and annual Enterprise contracts ([Latent Pricing, Nov 2026](https://runlatent.ai/pricing)) |
| Founders | Vedant Gaur (Founder): Penn M&T, Robinhood AI and Amazon software engineering internships ([Gaur’s portfolio](https://vedantgaur.com/)) |
| Competitors | Goodfire (over $200M raised, revenue unknown, activation monitors via Baseten) ([Goodfire Company](https://www.goodfire.com/company), [Baseten partnership](https://www.goodfire.com/blog/goodfire-baseten-partnership)); Patronus AI ($70M raised, revenue unknown, grounding checks and agent simulation) ([Patronus release](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html), [Patronus Lynx](https://docs.patronus.ai/docs/research_and_differentiators/Lynx/base)); Galileo ($68M raised before Cisco acquisition, revenue unknown, Luna-2 runtime guardrails) ([Galileo release](https://www.prnewswire.com/news-releases/galileo-raises-45m-series-b-funding-to-bring-evaluation-intelligence-to-generative-ai-teams-everywhere-302276383.html), [Galileo Protect](https://galileo.ai/blog/ai-agent-guardrails-development-lifecycle), [Cisco](https://www.cisco.com/site/us/en/about/corporate-development/acquisitions/galileo/index.html)) |
| Moat Signals | In-process vLLM activation scoring and per-deployment calibration on production traffic and reviewer decisions ([Latent Product](https://runlatent.ai/), [Latent Post-Training](https://runlatent.ai/blog/production-training-data)) |
| Risk Factors | Sandbox benchmark transfer ([Latent Product](https://runlatent.ai/)), unscored traffic above configured limits ([Latent Pricing](https://runlatent.ai/pricing)), hosted prompt and answer exposure ([Latent Privacy](https://runlatent.ai/privacy)) |
| Founder Reach | Vedant Gaur: 176 X followers and 2 stars for Disorder-Detection ([X profile mirror, Nov 2026](https://www.nitter.cf/thevedantgaur), [GitHub, Nov 2026](https://github.com/vedantgaur/Disorder-Detection)) |
| Distribution Signals | 215 LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/runlatent)); 18 company X followers ([X profile mirror, Nov 2026](https://www.nitter.cf/runlatentai)); Python SDK distributed through PyPI ([PyPI, Nov 2026](https://pypi.org/project/runlatent/)); November 2 spotlight ([The AI Read](https://theairead.com/ventures)) |
| Emails | vedant@runlatent.ai, founder ([YC Launch](https://www.ycombinator.com/launches/WBw-latent-stop-ai-agent-mistakes-by-reading-the-model-s-mind)); founders@runlatent.ai, company inquiries ([Latent Company](https://runlatent.ai/company)); support@runlatent.ai, support and privacy ([Latent Privacy](https://runlatent.ai/privacy)); billing@runlatent.ai, billing, and calibration@runlatent.ai, calibration requests ([Latent Pricing](https://runlatent.ai/pricing)); security@runlatent.ai, vulnerability reports ([Latent Disclosure](https://runlatent.ai/disclosure)); research@runlatent.ai, research inquiries ([Latent Research](https://runlatent.ai/blog/agent-shortcut-hold)); hello@runlatent.ai, SDK author contact ([PyPI](https://pypi.org/project/runlatent/0.0.1/)) |
