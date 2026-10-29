# Hue

> Test agents in realistic worlds built from production usage

| Field | Value |
|-------|-------|
| Website | https://hue.run/ |
| YC Page | https://www.ycombinator.com/companies/hue |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/hue)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Infrastructure, AI |
| YC Partner | Aaron Epstein ([Y Combinator](https://www.ycombinator.com/companies/hue)) |
| Emails | founders@hue.run ([Hue](https://hue.run/)); team@hue.run ([GitHub](https://github.com/hue-run)); aneesh@hue.run ([LinkedIn, via search snippet](https://www.linkedin.com/in/aneeshkethini)) |

## The Idea

- **Problem:** [Inferred]: Teams deploying agents need regression tests that reproduce changing tool and data conditions, beyond the recorded-output evaluations available in platforms such as [Braintrust](https://www.braintrust.dev/docs/evaluate).
- **Approach:** Hue captures production tasks, recreates their context, supplies simulated APIs and MCPs, preserves changes within resettable environments, and scores reruns across agent versions ([Hue](https://hue.run/)).
- **Differentiation:** Hue emphasizes reconstructing production environments, while Braintrust organizes dataset experiments and trace scoring, LangSmith combines evaluation with deployment, and Patronus builds world models for simulation and training ([Hue](https://hue.run/), [Braintrust](https://www.braintrust.dev/docs/evaluate), [LangChain](https://www.langchain.com/blog/series-b), [Patronus](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)).
- **Business Model:** [Inferred]: Hosted subscriptions or usage billing are possible monetization paths because the SDK connects to Hue Cloud, but public pricing and revenue: No public data found ([Hue SDK](https://github.com/hue-run/hue-sdk)).
- **TAM/SAM:** Mordor Intelligence estimates the broader AI agent testing and validation market at $1.01B in 2026, reaching $2.58B in 2031 at 20.58% CAGR; this is a category proxy, and Hue-specific SAM: No public data found ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/ai-agent-testing-and-validation-market)).
- **GTM / Distribution:** Public SDKs, coding-agent integration instructions, documentation, and contact booking provide developer discovery and onboarding routes ([Hue SDK](https://github.com/hue-run/hue-sdk), [Hue](https://hue.run/)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Accumulated environment adapters and customer regression suites could create switching costs, although retention and exclusive-data advantages: No public data found.
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given that Patronus already offers simulation environments for agent evaluation ([Patronus](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)).
- **Commoditization risk:** [Inferred]: Braintrust and LangChain could extend their existing production-data evaluation workflows into environment reconstruction, although implementation effort cannot be established publicly ([Braintrust](https://www.braintrust.dev/docs/evaluate), [LangChain](https://www.langchain.com/blog/series-b)).

## Market & Traction

- **Traction signals:**
  - Python SDK first release September 15, 2026; version 0.14.0 released October 25, 2026 ([PyPI](https://pypi.org/project/hue-run/)).
  - Public SDK repository: 0 stars; organization: 2 followers, observed October 27, 2026 ([repository](https://github.com/hue-run/hue-sdk), [organization](https://github.com/hue-run)).
  - Launch coverage published October 2, 2026 ([Founderland](https://founderland.ai/articles/hue-launches-testing-platform-for-ai-agents-in-production-murgu5xn)).
  - Website identifies backing from investors affiliated with Y Combinator, Cursor, Clay, and Vercel, without naming individuals or investment amounts ([Hue](https://hue.run/), observed October 27, 2026).
  - Active YC job postings: 0 ([YC Jobs](https://www.ycombinator.com/companies/hue/jobs), October 27, 2026).
- **Competitors:**
  - **Patronus AI ($70M raised, revenue unknown):** Digital World Models target simulation and agent training, overlapping Hue’s environment approach; latest disclosed round was $50M Series B, June 25, 2026, led by Greenfield Partners ([company announcement](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)).
  - **Braintrust ($121M raised, revenue unknown):** Dataset experiments, custom scorers, and production trace evaluation provide an adjacent workflow; latest disclosed round was $80M Series B, February 17, 2026, led by ICONIQ ([funding total](https://multiples.vc/private-comps/braintrust), [announcement](https://www.braintrust.dev/blog/announcing-series-b), [product documentation](https://www.braintrust.dev/docs/evaluate)).
  - **LangSmith / LangChain ($160M raised, revenue unknown):** Integrates tracing, evaluation, deployment, and agent building; latest disclosed round was $125M Series B, October 20, 2025, led by IVP ([TrueUp](https://www.trueup.io/co/langchain), [LangChain announcement](https://www.langchain.com/blog/series-b)).
- **Why now:** [Inferred]: LangChain’s October 2025 expansion into production-data evaluation and deployment documents the shift toward operating agents as maintained production systems, creating demand for repeatable regression testing ([LangChain](https://www.langchain.com/blog/series-b)).

## Founders & Team

- **Aneesh Kethini (Co-founder/CEO):**
  - Background: NYU Stern alumnus; previously an AI product manager at Datadog who built and launched its AI SRE, and a quantitative trader at SIG ([YC founder profile](https://www.ycombinator.com/founders/aneesh-kethini)).
  - Twitter/X: @aneeshkethini; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/aneesh-kethini)).
  - LinkedIn: Headline: No public data found; profile lists Hue and NYU Stern, with approximately 1K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/aneeshkethini), retrieved October 27, 2026).
  - GitHub: No public repos found.
- **Josh Le (Co-founder/CTO):**
  - Background: NYU alumnus and Kleiner Perkins fellow; previous engineering experience at Apple, Gusto, August, Wayfair, SendBlue, and Sixtyfour ([YC founder profile](https://www.ycombinator.com/founders/josh-le)).
  - Twitter/X: @joshuadle; count not retrievable ([YC-linked account](https://www.ycombinator.com/founders/josh-le)).
  - LinkedIn: Headline: No public data found; profile lists Hue and NYU, with approximately 3K followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/joshua-d-le), retrieved October 27, 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both attended NYU; how they met: No public data found ([Kethini](https://www.ycombinator.com/founders/aneesh-kethini), [Le](https://www.ycombinator.com/founders/josh-le)).
- **Founder-market fit:** [Inferred]: Kethini’s AI SRE product work and Le’s engineering background provide experience relevant to agent reliability and infrastructure integration ([Kethini](https://www.ycombinator.com/founders/aneesh-kethini), [Le](https://www.ycombinator.com/founders/josh-le)).

## Key Risks

- **Simulation fidelity:** [Inferred]: Differences between simulated APIs and production behavior could produce misleading test results; independent validation of Hue’s fidelity: No public data found ([product mechanism](https://hue.run/)).
- **Incomplete instrumentation:** The SDK cannot observe uninstrumented provider calls, leaving coverage dependent on application instrumentation ([Hue SDK](https://github.com/hue-run/hue-sdk)).
- **Sensitive production content:** Custom redaction does not inspect arbitrary OpenTelemetry attributes or logs, requiring users to configure broader filtering; supported content hooks provide a mitigation ([Python SDK documentation](https://pypi.org/project/hue-run/)).
- **Name ambiguity:** Hue shares its name with Philips Hue and Cloudera Hue; its package documentation explicitly disclaims affiliation, providing a disambiguation reference ([PyPI](https://pypi.org/project/hue-run/0.2.0/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Category proxy: $1.01B AI agent testing and validation market, 2026; 20.58% CAGR through 2031 ([Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/ai-agent-testing-and-validation-market)) |
| SAM | No public data found |
| Traction | Python SDK released September 15, 2026 ([PyPI](https://pypi.org/project/hue-run/)); 0 repository stars, October 27, 2026 ([GitHub](https://github.com/hue-run/hue-sdk)); launch coverage, October 2, 2026 ([Founderland](https://founderland.ai/articles/hue-launches-testing-platform-for-ai-agents-in-production-murgu5xn)) |
| Revenue Signal | No public data found |
| Founders | Aneesh Kethini, CEO: NYU Stern, Datadog AI SRE, SIG ([YC](https://www.ycombinator.com/founders/aneesh-kethini)); Josh Le, CTO: NYU, Apple/Gusto engineering, KP fellow ([YC](https://www.ycombinator.com/founders/josh-le)) |
| Competitors | Patronus AI ($70M raised, revenue unknown, world-model simulation/training) ([announcement](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)); Braintrust ($121M raised, revenue unknown, dataset/scorer evaluations) ([Multiples](https://multiples.vc/private-comps/braintrust), [documentation](https://www.braintrust.dev/docs/evaluate)); LangChain ($160M raised, revenue unknown, integrated development/deployment) ([TrueUp](https://www.trueup.io/co/langchain), [LangChain](https://www.langchain.com/blog/series-b)) |
| Moat Signals | No public data found |
| Risk Factors | Simulated API dependency ([Hue](https://hue.run/)), uninstrumented-call blind spots ([SDK](https://github.com/hue-run/hue-sdk)), custom redaction boundaries ([PyPI](https://pypi.org/project/hue-run/)) |
| Founder Reach | Kethini: LinkedIn approximately 1K; Le: LinkedIn approximately 3K, retrieved October 27, 2026 ([Kethini](https://www.linkedin.com/in/aneeshkethini), [Le](https://www.linkedin.com/in/joshua-d-le), via search snippets) |
| Distribution Signals | Public Python package ([PyPI](https://pypi.org/project/hue-run/)); coding-agent setup integrations ([GitHub SDK](https://github.com/hue-run/hue-sdk)) |
| Emails | founders@hue.run ([Hue](https://hue.run/)); team@hue.run ([GitHub](https://github.com/hue-run)); aneesh@hue.run ([LinkedIn, via search snippet](https://www.linkedin.com/in/aneeshkethini)) |
