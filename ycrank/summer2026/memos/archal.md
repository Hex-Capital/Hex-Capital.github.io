# Archal

> The improvement loop for AI agents

| Field | Value |
|-------|-------|
| Website | https://www.archal.ai/ |
| YC Page | https://www.ycombinator.com/companies/archal |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, API, Infrastructure |
| YC Partner | Ankit Gupta |
| Emails | founders@archal.ai, support@archal.ai |

## The Idea

- **Problem:** Agents that send messages, refund payments, grant access, or modify repositories can fail through stale context, incorrect permissions, ordering errors, and unsafe cross-tool actions that unit tests and mocks miss ([Archal documentation](https://docs.archal.ai/introduction), Jul 2026).
- **Approach:** Archal runs agents against stateful behavioral copies of services such as GitHub, Slack, Stripe, and Linear, scores the resulting state and trace, reproduces production failures, and can open a fix PR after rerunning the failed scenario ([Archal website](https://archal.ai/), Jul 2026).
- **Differentiation:** Braintrust centers on traces and evaluations, LangSmith combines observability, evaluation, and deployment, and Patronus evaluates model outputs and security, while Archal adds stateful external-service clones and automated harness-fix PRs ([Braintrust](https://www.braintrust.dev/blog/announcing-series-b), [LangChain](https://www.langchain.com/blog/series-b), [Patronus AI](https://www.patronus.ai/announcements/patronus-ai-raises-17-million-to-detect-llm-mistakes-at-scale), Jul 2026).
- **Business Model:** [Inferred]: A metered cloud subscription is the likely model because the CLI tracks session-minutes by billing period and plan while CI uses workspace-scoped API keys, but Archal publishes no price list ([Archal debug documentation](https://docs.archal.ai/cli/debug), [quickstart](https://docs.archal.ai/quickstart), Jul 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Archal combines self-serve installation through `npx archal`, an early-access CTA, founder outreach, and bookable 30-minute demos ([Archal quickstart](https://docs.archal.ai/quickstart), [contact page](https://archal.ai/contact), Jul 2026).

## Defensibility

- **Moat today:** The technical-complexity signal is a clone runtime that preserves state, referential integrity, service error shapes, and controlled DNS/TLS routing across supported services ([Archal introduction](https://docs.archal.ai/introduction), [route-mode documentation](https://docs.archal.ai/guides/route-mode-safety), Jul 2026).
- **Future moat:** [Inferred]: Accumulated production-failure scenarios, stored regression benchmarks, clone fidelity, and repository integrations could create workflow switching costs, but no public customer, retention, or dataset-scale evidence establishes this yet.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Funded evaluation platforms could add service simulation or partner with sandbox providers because Braintrust and LangSmith already support agent tracing, evaluation, and production-data feedback loops ([Braintrust](https://www.braintrust.dev/blog/announcing-series-b), [LangChain](https://www.langchain.com/blog/series-b), Jul 2026).

## Market & Traction

- **Traction signals:**
  - 717 LinkedIn followers ([Archal LinkedIn](https://www.linkedin.com/company/archal-labs), Jul 2026).
  - 59 weekly downloads and 30 releases for the deprecated `@archal/cli`, which directs users to the renamed `archal` package ([npm](https://www.npmjs.com/package/%40archal/cli), Jul 2026).
  - 3 weekly downloads for `@archal/vitest` ([npm](https://www.npmjs.com/package/%40archal/vitest), Jul 2026).
  - 0 YC job postings ([YC company page](https://www.ycombinator.com/companies/archal), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Braintrust ($125M disclosed funding, revenue unknown): trace, experiment, and observability infrastructure rather than stateful SaaS clones and failure-repair PRs ([Braintrust Series A](https://www.braintrust.dev/blog/announcing-series-a), [Series B](https://www.braintrust.dev/blog/announcing-series-b)).
  - LangSmith/LangChain ($160M disclosed funding, revenue unknown): an agent-development platform spanning tracing, evaluation, frameworks, and deployment rather than service-clone-based reproduction ([seed](https://www.langchain.com/blog/announcing-our-10m-seed-round-led-by-benchmark), [Series A](https://www.langchain.com/blog/langsmith-ga), [Series B](https://www.langchain.com/blog/series-b)).
  - Patronus AI ($20M raised, revenue unknown): automated LLM evaluation, adversarial testing, and security rather than cloning external systems and modifying agent harnesses ([Patronus AI](https://www.patronus.ai/announcements/patronus-ai-raises-17-million-to-detect-llm-mistakes-at-scale), May 2024).
- **Why now:** Archal attributes the catalyst to agents moving from text generation into stateful workflows that modify repositories, payment systems, communications, and access controls, creating failures that post-production observability detects only after an action occurs ([Archal product page](https://archal.ai/product), Jul 2026).

## Founders & Team

- **Noah Song (Founder):**
  - Background: Noah has CU Boulder mathematics and chemistry departmental awards and public projects involving Hubbard-model simulations, quantum chemistry, normalizing flows, and geometric deep learning, with no prior exit publicly identified ([LinkedIn](https://www.linkedin.com/in/noah-j-song), [GitHub](https://github.com/noahsong-sdg), Jul 2026).
  - Twitter/X: [@theophorus7](https://x.com/theophorus7), count not retrievable.
  - LinkedIn: “Cofounder at Archal” ([YC](https://www.ycombinator.com/companies/archal), Jul 2026).
  - GitHub: [@noahsong-sdg](https://github.com/noahsong-sdg); `hubbard` has 0 stars ([GitHub](https://github.com/noahsong-sdg/hubbard), Jul 2026).
- **Aidan Tiruvan (Founder):**
  - Background: Aidan studied computer science and mathematics at CU Boulder, worked on agent red-teaming and synthetic data at Scale AI, and conducted ML research for a NASA mission proposal, with no prior exit publicly identified ([Aidan Tiruvan résumé](https://aidantiruvan.com/Aidan%20Tiruvan%20-%20Resume.pdf), Jul 2026).
  - Twitter/X: [@AidanTiruvan](https://x.com/AidanTiruvan), count not retrievable.
  - LinkedIn: “Founder at Archal” with 4K followers ([LinkedIn](https://www.linkedin.com/in/aidantiruvan), Jul 2026).
  - GitHub: [@AidanTiruvan](https://github.com/AidanTiruvan); `ASM-3D-Game` has 1 star ([GitHub](https://github.com/AidanTiruvan), Jul 2026).
- **Co-founder relationship:** Both founders have documented CU Boulder ties, but no public source states when or how they met ([Aidan résumé](https://aidantiruvan.com/Aidan%20Tiruvan%20-%20Resume.pdf), [Noah LinkedIn](https://www.linkedin.com/in/noah-j-song), Jul 2026).
- **Founder-market fit:** [Inferred]: Aidan’s Scale AI agent-red-teaming work and both founders’ stated experience seeking realistic pre-production agent sandboxes connect their prior work to Archal’s evaluation mechanism ([Aidan résumé](https://aidantiruvan.com/Aidan%20Tiruvan%20-%20Resume.pdf), [Archal product page](https://archal.ai/product), Jul 2026).

## Key Risks

- **Clone coverage and fidelity:** Unsupported services and transports are not intercepted, several runtimes require custom CA handling, and browser fetch is unsupported; Archal mitigates this with Docker or sandbox execution and a live clone catalog ([route-mode documentation](https://docs.archal.ai/guides/route-mode-safety), Jul 2026).
- **Routed-data exposure:** Archal can see headers and request bodies routed to clones, while its documented controls keep telemetry off by default, isolate clone state, and prevent agent API keys from being sent to Archal servers ([security documentation](https://docs.archal.ai/security), Jul 2026).
- **Automated patch correctness:** A coding agent can modify prompts, tool wiring, retrieval, and glue code; Archal states that fixes are submitted as ordinary PRs and rerun against the reproduced scenario before merging ([Archal website](https://archal.ai/), Jul 2026).
- **Competitor expansion:** Braintrust and LangChain have disclosed $125M and $160M in cumulative funding respectively and already operate agent-evaluation platforms, enabling adjacent product development into stateful testing ([Braintrust](https://www.braintrust.dev/blog/announcing-series-b), [LangChain](https://www.langchain.com/blog/series-b), Jul 2026).
- **Name collision:** “Archal” also appears in search results for a French archaeology school and a Lammhults furniture line, creating company-search ambiguity ([EUR ArChal](https://fr.linkedin.com/company/eur-archal), [Lammhults product PDF](https://www.lammhults.se/Lammhults_Archal_table_productleaflet_2407_3.pdf), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 717 LinkedIn followers; deprecated `@archal/cli` records 59 weekly downloads; `@archal/vitest` records 3 weekly downloads; 0 YC jobs ([LinkedIn](https://www.linkedin.com/company/archal-labs), [npm CLI](https://www.npmjs.com/package/%40archal/cli), [npm Vitest](https://www.npmjs.com/package/%40archal/vitest), [YC](https://www.ycombinator.com/companies/archal), Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Noah Song (Founder): CU Boulder departmental awards and computational-science projects; Aidan Tiruvan (Founder): CU Boulder CS/mathematics, Scale AI agent red-teaming, NASA research ([YC](https://www.ycombinator.com/companies/archal), [Noah LinkedIn](https://www.linkedin.com/in/noah-j-song), [Aidan résumé](https://aidantiruvan.com/Aidan%20Tiruvan%20-%20Resume.pdf), Jul 2026) |
| Competitors | Braintrust ($125M disclosed funding, revenue unknown, trace/eval platform); LangSmith/LangChain ($160M disclosed funding, revenue unknown, agent engineering platform); Patronus AI ($20M raised, revenue unknown, model evaluation/security) ([Braintrust](https://www.braintrust.dev/blog/announcing-series-b), [LangChain](https://www.langchain.com/blog/series-b), [Patronus](https://www.patronus.ai/announcements/patronus-ai-raises-17-million-to-detect-llm-mistakes-at-scale)) |
| Moat Signals | Stateful service clones, referential-integrity enforcement, replicated error shapes, controlled DNS/TLS routing, and stored regression scenarios ([Archal documentation](https://docs.archal.ai/introduction), Jul 2026) |
| Risk Factors | Clone coverage gaps, routed request-data exposure, automated-patch correctness, funded adjacent platforms, name collision ([Archal route-mode documentation](https://docs.archal.ai/guides/route-mode-safety), [security documentation](https://docs.archal.ai/security), Jul 2026) |
| Founder Reach | Noah Song: X count not retrievable, LinkedIn 2K, GitHub top cited repo 0 stars; Aidan Tiruvan: X count not retrievable, LinkedIn 4K, GitHub top cited repo 1 star ([Noah LinkedIn](https://www.linkedin.com/in/noah-j-song), [Noah GitHub](https://github.com/noahsong-sdg/hubbard), [Aidan LinkedIn](https://www.linkedin.com/in/aidantiruvan), [Aidan GitHub](https://github.com/AidanTiruvan), Jul 2026) |
| Distribution Signals | Self-serve `npx archal` installation, early-access CTA, bookable demo, 717 LinkedIn followers, 59 weekly deprecated CLI downloads, and 3 weekly Vitest-package downloads ([quickstart](https://docs.archal.ai/quickstart), [contact](https://archal.ai/contact), [LinkedIn](https://www.linkedin.com/company/archal-labs), [npm](https://www.npmjs.com/package/%40archal/cli), Jul 2026) |
| Emails | founders@archal.ai, support@archal.ai ([Archal contact page](https://archal.ai/contact), [security documentation](https://docs.archal.ai/security), Jul 2026) |
