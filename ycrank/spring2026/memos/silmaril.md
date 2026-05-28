# Silmaril

> Prompt injection defense that is self-healing

| Field | Value |
|-------|-------|
| Website | https://silmaril.dev |
| YC Page | https://www.ycombinator.com/companies/silmaril |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Security |
| YC Partner | Garry Tan |
| Emails | aum@silmaril.dev |

## The Idea

- **Problem:** AI-native applications and agents are exposed to prompt injection, context poisoning, and confused-deputy attacks; the company cites $68M and $20M damages prevented in two case studies and "millions of users protected" via a Microsoft Copilot vulnerability patch (silmaril.dev, 2026).
- **Approach:** A firewall classifier wrapping inference calls — built on a ModernBERT variant — combined with autonomous threat-hunting agents that probe customer apps and trigger automatic retraining + redeployment of weights within one hour of attack discovery (silmaril.dev, 2026).
- **Differentiation:** [Inferred]: Vs. Lakera Guard (sub-50ms API), Silmaril claims P90 20ms latency and 95.60% accuracy across 131 attack techniques (silmaril.dev, 2026); vs. Promptfoo (test-time red-teaming) and HiddenLayer (broad AI-security suite), Silmaril positions as runtime defense with continuous self-retraining (appsecsanta.com, 2026).
- **Business Model:** [Inferred]: SaaS or self-hosted deployment with SDK plug-in to agent frameworks like LangGraph in "5 lines of code"; no pricing page is published (silmaril.dev, 2026).
- **TAM/SAM:** Inference Guardrails for LLMs market projected to reach $7.99B by 2030 at 32.5% CAGR (The Business Research Company, 2026); adjacent LLM Observability market estimated $2.69B in 2026 → $9.26B by 2030 at 36.2% CAGR (Research and Markets, 2026).
- **GTM / Distribution:** [Inferred]: Developer-led SDK integration into agentic frameworks (LangGraph cited) plus YC launch amplification via @ycombinator and Garry Tan posts on X (x.com/ycombinator, Apr 14 2026; x.com/garrytan, Apr 14 2026).

## Defensibility

- **Moat today:** Claimed technical edge — ModernBERT-variant classifier at P90 20ms, 95.60% accuracy on 131 attack techniques, plus SOC, ISO 27001, CSA, and NVIDIA Inception affiliations (silmaril.dev, 2026).
- **Future moat:** [Inferred]: A proprietary corpus of customer attack traces feeding the self-retraining loop could create data-network effects, but the loop's effectiveness at scale is unproven publicly.
- **Market structure:** [Inferred]: No structural barrier identified — incumbents Lakera (acquired by Check Point, 2025) and Promptfoo (reported acquired by OpenAI per thenextweb.com snippet) and HiddenLayer are well-capitalized and offer overlapping runtime defenses (appsecsanta.com, 2026).
- **Commoditization risk:** Open-source guardrails (LLM Guard, NVIDIA NeMo Guardrails) and well-funded competitors lower the cost to replicate a classifier-based defense; "over a dozen guardrail providers" exist per market reviews (truefoundry.com, 2026).

## Market & Traction

- **Traction signals:**
  - Customer logos displayed: Microsoft, OpenAI, Anthropic, Google, Perplexity, Dropbox (silmaril.dev, 2026).
  - $28M cumulative damages prevented for customers (YC page, 2026); $68M + $20M in two named case studies (silmaril.dev, 2026).
  - Launched on YC site and X on April 14, 2026 (x.com/ycombinator status 2044170078942605395).
  - Customer testimonial: "millions of users protected" via Microsoft Copilot vulnerability patch (silmaril.dev, 2026).
  - Twitter handle @Silmarildev — follower count not retrievable (x.com).
  - LinkedIn company page exists at linkedin.com/company/silmarilsecurity — follower count not retrievable.
  - No public Product Hunt launch found.
- **Competitors:**
  - Lakera ($30M total raised; $20M Series A led by Atomico, Jul 2024; acquired by Check Point 2025; revenue unknown): managed API with sub-50ms latency and 98%+ detection across 100+ languages (techcrunch.com, 2024; appsecsanta.com, 2026).
  - HiddenLayer ($56M total raised; $50M Series A led by M12, Sep 2023; revenue unknown): broader AI-security platform covering model scanning, runtime defense, shadow-AI discovery, MITRE ATLAS red-teaming (hiddenlayer.com, 2023; appsecsanta.com, 2026).
  - Promptfoo ($23.6M total raised; $18.4M Series A led by Insight Partners, Jul 2025; revenue unknown): open-source red-teaming + CI/CD eval tool, positioned as testing rather than runtime defense (promptfoo.dev, 2025).
  - Protect AI Guardian (acquired by Palo Alto Networks, 2025; revenue unknown): runtime AI firewall now bundled in PANW platform (appsecsanta.com, 2026).
- **Why now:** [Inferred]: Production rollouts of agentic frameworks (LangGraph, Claude Code) in 2025–2026 expanded the prompt-injection attack surface, while incumbents Lakera and Protect AI Guardian were acquired in 2025 — creating displacement opportunities (appsecsanta.com, 2026).

## Founders & Team

- **Aum Upadhyay (Co-Founder & CEO):**
  - Background: Columbia University (started a company as a freshman, hired by Andrew Rodriguez of Side Door Ventures); previously built the security and privacy framework at AWS that the company says prevented over $1.8B in damages (LinkedIn; YC search snippet, 2026).
  - Twitter/X: @aumup001 — count not retrievable (x.com).
  - LinkedIn: "AI Security @ Silmaril (YC P26)" (linkedin.com/in/aum-upadhyay-517016269).
  - GitHub: No public repos found.
- **Eduardo Velasco (Co-Founder & CTO):**
  - Background: University of Texas at Arlington; ex-Amazon tech lead on low-latency ML models cited as generating $400M annual revenue; chained a prompt injection to root access inside ChatGPT (LinkedIn; arion-research LinkedIn post 7366096839613317120, 2026).
  - Twitter/X: @EduardoVel36291 — count not retrievable (x.com).
  - LinkedIn: "CTO @ Silmaril (YC P26)" (linkedin.com/in/ejvelasco).
  - GitHub: No public repos found.
- **Co-founder relationship:** [Inferred]: No public data on shared prior employer or university; the LinkedIn arion-research post states the pair "became whitehat hackers and hacked OpenAI, Anthropic, Google, and Microsoft 15 times in two weeks" after Velasco left Amazon (LinkedIn post 7366096839613317120, 2026).
- **Founder-market fit:** Aum's AWS security/privacy work and Eduardo's low-latency ML background at Amazon map directly to a low-latency security classifier product; YC Group Partner is Garry Tan (YC page, 2026).

## Key Risks

- **Incumbent encroachment via M&A:** Lakera was acquired by Check Point (2025) and Protect AI Guardian by Palo Alto Networks (2025) (appsecsanta.com, 2026); these distribution channels can bundle prompt-injection defense into existing enterprise platforms — no mitigation found.
- **Well-funded direct competition:** HiddenLayer ($56M) and Promptfoo ($23.6M) have multi-year head starts in product, marketing budget, and design partners (techcrunch.com, 2023; promptfoo.dev, 2025).
- **Technical feasibility / claim verification:** The "2x more threats / 10x lower latency" and 95.60% accuracy claims are self-published with no third-party benchmark cited (silmaril.dev, 2026); independent benchmarks of guardrail providers note significant variance in latency and coverage (truefoundry.com, 2026).
- **Customer logo ambiguity:** Microsoft/OpenAI/Anthropic/Google/Perplexity/Dropbox shown on the homepage are described in narrative as targets of whitehat findings rather than paying customers (silmaril.dev, 2026; LinkedIn post 7366096839613317120, 2026) — commercial relationship status is unconfirmed.
- **Category absorption risk:** Reviewers question whether LLM-security remains standalone or gets absorbed into broader AppSec/observability platforms (truefoundry.com, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Inference Guardrails for LLMs: $7.99B by 2030, 32.5% CAGR (The Business Research Company, 2026) |
| SAM | No public data found |
| Traction | $28M cumulative damages prevented (YC page, 2026); $68M and $20M case studies (silmaril.dev, 2026); launched Apr 14, 2026 (x.com/ycombinator) |
| Revenue Signal | No public data found |
| Founders | Aum Upadhyay (CEO): ex-AWS security/privacy framework, Columbia. Eduardo Velasco (CTO): ex-Amazon low-latency ML tech lead, UT Arlington. |
| Competitors | Lakera ($30M raised, revenue unknown, acquired by Check Point 2025, managed API sub-50ms); HiddenLayer ($56M raised, revenue unknown, broader AI-security platform); Promptfoo ($23.6M raised, revenue unknown, OSS red-teaming/eval); Protect AI Guardian (acquired by Palo Alto Networks 2025, revenue unknown, bundled AI firewall) |
| Moat Signals | ModernBERT-variant classifier at P90 20ms, 95.60% accuracy on 131 attack techniques; SOC, ISO 27001, CSA, NVIDIA Inception (silmaril.dev, 2026) |
| Risk Factors | Incumbent M&A encroachment, well-funded direct competition, self-published benchmarks unverified |
| Founder Reach | Aum Upadhyay: Twitter @aumup001 count not retrievable, LinkedIn aum-upadhyay-517016269, GitHub not found. Eduardo Velasco: Twitter @EduardoVel36291 count not retrievable, LinkedIn ejvelasco, GitHub not found. |
| Distribution Signals | YC X launch post Apr 14, 2026 (x.com/ycombinator); Garry Tan endorsement post (x.com/garrytan, Apr 14 2026); No public Product Hunt launch found |
| Emails | aum@silmaril.dev |

Sources:
- [Silmaril | Prompt Injection Defense](https://silmaril.dev)
- [Silmaril YC company page](https://www.ycombinator.com/companies/silmaril)
- [Y Combinator launch post on X](https://x.com/ycombinator/status/2044170078942605395)
- [Garry Tan post on X](https://x.com/garrytan/status/2044182160207425857)
- [Aum Upadhyay LinkedIn](https://www.linkedin.com/in/aum-upadhyay-517016269)
- [Eduardo Velasco LinkedIn](https://www.linkedin.com/in/ejvelasco/)
- [Lakera $20M Series A — TechCrunch](https://techcrunch.com/2024/07/24/lakera-which-protects-enterprises-from-llm-vulnerabilities-raises-20m/)
- [HiddenLayer $50M Series A](https://hiddenlayer.com/company/newsroom/hiddenlayer-raises-series-a-to-safeguard-ai/)
- [Promptfoo $18.4M Series A](https://www.promptfoo.dev/blog/series-a-announcement/)
- [Inference Guardrails LLM market report — TBRC](https://www.thebusinessresearchcompany.com/report/inference-guardrails-for-large-language-models-llms-market-report)
- [LLM Observability Platform Market — Research and Markets](https://www.researchandmarkets.com/reports/6215671/large-language-model-llm-observability)
- [Benchmarking LLM Guardrail Providers — TrueFoundry](https://www.truefoundry.com/blog/benchmarking-llm-guardrail-providers)
- [Lakera Alternatives — AppSecSanta](https://appsecsanta.com/ai-security-tools/lakera-alternatives)
- [Extruct AI Silmaril profile](https://www.extruct.ai/hub/silmaril-dev/)
