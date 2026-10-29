# Latent

> Catch wrong LLM answers before your customers do

| Field | Value |
|-------|-------|
| Website | http://runlatent.ai/ |
| YC Page | https://www.ycombinator.com/companies/trylatent |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/trylatent)) |
| Industry | B2B / B2B -> Security |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | AI |
| YC Partner | Harj Taggar ([YC](https://www.ycombinator.com/companies/trylatent)) |
| Emails | vedant@runlatent.ai ([YC](https://www.ycombinator.com/companies/trylatent)); founders@runlatent.ai ([Company](https://runlatent.ai/company)); support@runlatent.ai, billing@runlatent.ai, calibration@runlatent.ai ([Pricing](https://runlatent.ai/pricing)); security@runlatent.ai ([Security](https://runlatent.ai/security)); hello@runlatent.ai ([PyPI](https://pypi.org/project/runlatent/0.0.1/)) |

## The Idea

- **Problem:** Production LLM teams in healthcare, finance, insurance and legal face incorrect dosages, policies or contract claims reaching users, while checking outputs with another LLM introduces cost and latency that encourage sampling ([YC launch](https://www.ycombinator.com/launches/WBw-latent-stop-hallucinations-before-they-reach-your-customers)).
- **Approach:** A vLLM plugin reads the generating model’s activations during generation, while API models are checked through Latent’s separate reader model, with policies for logging, withholding or rerouting flagged answers ([Latent deployment documentation](https://runlatent.ai/docs/deployment/options)).
- **Differentiation:** Latent’s self-hosted activation access differs from Patronus Lynx’s separate hallucination evaluator and Vectara HHEM’s source-versus-response classifier, although Latent also uses a separate reader for API models ([Latent](https://runlatent.ai/company), [Patronus](https://www.patronus.ai/research/lynx-hallucination-detection-model), [Vectara](https://www.vectara.com/blog/hhem-2-1-a-better-hallucination-detection-model)).
- **Business Model:** Free includes 5,000 scored answers/month; Pro costs $299/month for 100,000 plus $1/1,000 additional answers; Team costs $1,499/month for one million plus $0.60/1,000, with a $1,500/month cloud-deployment add-on and custom Enterprise contracts ([Latent pricing, October 2026](https://runlatent.ai/pricing)).
- **TAM/SAM:** The broader model-hallucination-detection market is estimated at $2.47B in 2026, reaching $7.85B by 2030 at 33.5% CAGR, including hardware and services beyond Latent’s product; company-specific SAM: No public data found ([The Business Research Company, September 2026](https://www.thebusinessresearchcompany.com/report/model-hallucination-detection-market-report)).
- **GTM / Distribution:** Distribution combines free signup, a Python SDK, founder-led deployment calls and requests for introductions to production AI teams ([Latent](https://runlatent.ai/), [YC launch](https://www.ycombinator.com/launches/WBw-latent-stop-hallucinations-before-they-reach-your-customers)).

## Defensibility

- **Moat today:** Latent documents activation-level integration and customer-specific probe calibration, and reports finding 2.7–4.2 times more wrong answers than random review, with 96% flag precision when checking other models’ answers; these are company-reported measurements ([Latent](https://runlatent.ai/), [calibration documentation](https://runlatent.ai/docs/concepts/calibration)).
- **Future moat:** [Inferred]: Accumulated reviewer labels and model-specific calibration could increase replacement work, but public evidence does not establish a cross-customer data advantage ([Latent learning workflow](https://runlatent.ai/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Existing evaluation vendors could add activation-based checks, while publicly available Lynx and HHEM models already provide substitutes for output-level detection ([Patronus research](https://www.patronus.ai/research/lynx-hallucination-detection-model), [Vectara HHEM](https://www.vectara.com/blog/hhem-2-1-a-better-hallucination-detection-model)).

## Market & Traction

- **Traction signals:**
  - Public company launch on Launch YC ([YC, observed October 27, 2026](https://www.ycombinator.com/launches/WBw-latent-stop-hallucinations-before-they-reach-your-customers)).
  - Coverage in Founderland ([Founderland, October 14, 2026](https://founderland.ai/articles/latent-launches-llm-monitor-to-catch-ai-hallucinations-mv8i4fi5)).
  - Company X account @runlatentai: 12 followers in an indexed snapshot ([Nitter mirror, October 2026, via search snippet](https://nitter.rdrama.net/runlatentai)).
  - Public Python SDK distribution through PyPI ([PyPI, observed October 27, 2026](https://pypi.org/project/runlatent/)).
  - Zero active YC job postings ([YC Jobs, observed October 27, 2026](https://www.ycombinator.com/companies/trylatent/jobs)).
- **Competitors:**
  - **Patronus AI ($70M raised, revenue unknown):** Lynx evaluates RAG hallucinations using a separate model; latest announced financing was a $50M Series B led by Greenfield Partners on June 25, 2026 ([company announcement](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html), [Lynx](https://www.patronus.ai/research/lynx-hallucination-detection-model)).
  - **Galileo ($68M raised, revenue unknown):** Luna evaluators sit within a broader evaluation, monitoring and runtime-protection platform; latest disclosed round found was $45M Series B, October 15, 2024, led by Scale Venture Partners ([Galileo platform](https://galileo.ai/blog/best-llm-monitoring-solutions-enterprise), [financing announcement](https://galileo.ai/blog/announcing-our-series-b)).
  - **Vectara ($53.5M raised, revenue unknown):** HHEM evaluates source-response consistency within a RAG platform or through an independent API; latest disclosed round found was $25M Series A in July 2024, co-led by FPV Ventures and Race Capital ([company financing post](https://www.linkedin.com/posts/vectara_vectara-raises-25m-as-it-launches-mockingbird-activity-7218979511302770688-Cm1L), [product guide](https://www.vectara.com/hacker-guide)).
- **Why now:** [Inferred]: Production deployment of specialized small evaluators, documented in Galileo’s November 2025 Luna-2 engineering account, makes runtime checking a current alternative to slower general-purpose judge calls ([Galileo, November 24, 2025](https://galileo.ai/blog/how-we-boosted-gpu-utilization-by-40-with-redis-lua)).

## Founders & Team

- **Vedant Gaur (Founder):**
  - Background: Penn M&T computer science/finance education, Stanford and Princeton research, Amazon and Robinhood ML work, and prior BOLD AI founder experience; his 2025 résumé listed expected graduation in 2027; prior exits: No public data found ([Latent biography](https://runlatent.ai/company), [founder résumé](https://vedantgaur.com/files/Vedant_Gaur_Resume_10-02-25.pdf)).
  - Twitter/X: @thevedantgaur, 143 followers in an indexed snapshot ([Teapawt mirror, October 2026, via search snippet](https://teapawt.net/thevedantgaur)).
  - LinkedIn: /in/vedantgaur, 989 followers; headline: No public data found ([LinkedIn, October 2026, via search snippet](https://www.linkedin.com/in/vedantgaur)).
  - GitHub: @vedantgaur; Disorder-Detection has 2 stars ([GitHub, observed October 27, 2026](https://github.com/vedantgaur/Disorder-Detection)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Gaur’s documented reasoning, evaluation and interpretability research, including ACL, EMNLP and NeurIPS publications, overlaps with Latent’s activation-based detection work; Y Combinator is a disclosed backer ([Latent biography](https://runlatent.ai/company)).

## Key Risks

- **Calibration feasibility:** Calibration falls back to threshold retuning when its held-out split contains fewer than 30 failures, limiting learning from low-error traffic; reviewer labels take precedence over automated labels ([Latent calibration documentation](https://runlatent.ai/docs/concepts/calibration)).
- **Detection scope:** The default strict rubric permits omissions, generic statements and supported inferences, while the alternative sentence-level standard lacks human-label validation, so reported detection results depend on the failure definition ([Latent failure standards](https://runlatent.ai/docs/concepts/failure-standards)).
- **Deployment-dependent performance:** Direct activation reading requires open-weight models on vLLM, whereas API checking uses another reader; Latent reports that sharing a GPU with its sidecar slowed serving by approximately one fifth ([Latent deployment documentation](https://runlatent.ai/docs/deployment/options)).
- **Enterprise authentication gaps:** Self-hosted documentation lists SSO, OIDC, SAML and MFA as unbuilt and bearer-token transport as cleartext, with SSH tunneling or customer-provided TLS specified as mitigations ([Latent security documentation](https://runlatent.ai/security)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader model-hallucination-detection market: $2.47B in 2026; 33.5% CAGR through 2030, including hardware/services ([The Business Research Company, 2026](https://www.thebusinessresearchcompany.com/report/model-hallucination-detection-market-report)) |
| SAM | No public data found |
| Traction | Launch YC listing ([YC, October 2026](https://www.ycombinator.com/launches/WBw-latent-stop-hallucinations-before-they-reach-your-customers)); Founderland coverage ([October 14, 2026](https://founderland.ai/articles/latent-launches-llm-monitor-to-catch-ai-hallucinations-mv8i4fi5)) |
| Revenue Signal | Pro $299/month; Team $1,499/month; actual revenue: No public data found ([Latent pricing, October 2026](https://runlatent.ai/pricing)) |
| Founders | Vedant Gaur: Penn M&T; Stanford/Princeton research; Amazon/Robinhood ML ([Latent biography](https://runlatent.ai/company)) |
| Competitors | Patronus AI ($70M raised, revenue unknown, separate evaluator); Galileo ($68M raised, revenue unknown, broader monitoring platform); Vectara ($53.5M raised, revenue unknown, RAG-integrated detection) ([Patronus](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html), [Galileo](https://galileo.ai/blog/best-llm-monitoring-solutions-enterprise), [Vectara](https://www.linkedin.com/posts/vectara_vectara-raises-25m-as-it-launches-mockingbird-activity-7218979511302770688-Cm1L)) |
| Moat Signals | Activation integration and traffic-specific calibration ([Latent documentation](https://runlatent.ai/docs/concepts/calibration)) |
| Risk Factors | Calibration failure-count requirements, rubric-dependent coverage, authentication gaps ([Latent calibration](https://runlatent.ai/docs/concepts/calibration), [failure standards](https://runlatent.ai/docs/concepts/failure-standards), [security](https://runlatent.ai/security)) |
| Founder Reach | Gaur: X 143 followers; LinkedIn 989 followers; Disorder-Detection 2 stars ([X mirror, via search snippet](https://teapawt.net/thevedantgaur), [LinkedIn, via search snippet](https://www.linkedin.com/in/vedantgaur), [GitHub](https://github.com/vedantgaur/Disorder-Detection); October 2026) |
| Distribution Signals | Public Python SDK ([PyPI, October 2026](https://pypi.org/project/runlatent/)); company X 12 followers ([Nitter mirror, October 2026, via search snippet](https://nitter.rdrama.net/runlatentai)) |
| Emails | vedant@runlatent.ai ([YC](https://www.ycombinator.com/companies/trylatent)); founders@runlatent.ai ([Company](https://runlatent.ai/company)); support@runlatent.ai, billing@runlatent.ai, calibration@runlatent.ai ([Pricing](https://runlatent.ai/pricing)); security@runlatent.ai ([Security](https://runlatent.ai/security)); hello@runlatent.ai ([PyPI](https://pypi.org/project/runlatent/0.0.1/)) |
