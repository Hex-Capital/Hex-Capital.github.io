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
| YC Partner | Ankit Gupta ([Y Combinator](https://www.ycombinator.com/companies/archal), Aug 2026) |
| Emails | founders@archal.ai ([Archal contact page](https://archal.ai/contact), Aug 2026) |

## The Idea

- **Problem:** Agent developers, connector teams, and integration engineers need to test software that modifies external services without using shared test accounts, encountering rate limits, contaminating state, or touching production systems ([Archal](https://archal.ai/), Aug 2026).
- **Approach:** Archal provisions isolated sandboxes containing stateful simulations of external APIs, exposes REST and MCP endpoints, records mutations, and resets each environment to a declared baseline ([Archal product page](https://archal.ai/product), Aug 2026).
- **Differentiation:** Archal simulates external-service state, whereas LangSmith and Braintrust center on tracing and evaluation and E2B and Runloop supply cloud machines or devboxes for agent execution ([Archal](https://archal.ai/product), [LangChain](https://www.langchain.com/blog/series-b), [Braintrust](https://www.braintrust.dev/blog/announcing-series-b), [E2B](https://changelog.e2b.dev/blog/series-a), [Runloop](https://runloop.ai/media/runloop-raises-7m-seed-round-to-bring-enterprise-grade-infrastructure-to-ai-coding-agents)).
- **Business Model:** Self-service has no subscription, each running environment costs $0.10 per minute prorated by the second, and new accounts can receive $20 in usage credits ([Archal](https://archal.ai/), Aug 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Archal uses self-service signup and an npm CLI for developers, supplemented by founder calls for volume pricing, custom environments, reserved capacity, private deployment, and security reviews ([Archal quickstart](https://docs.archal.ai/quickstart), [Archal contact page](https://archal.ai/contact), Aug 2026).

## Defensibility

- **Moat today:** Archal publicly lists 22 available stateful service environments, each implemented independently rather than connected to the live provider ([Archal environments](https://archal.ai/environments), Aug 2026).
- **Future moat:** [Inferred]: Repeated customer scenarios, API edge cases, and CI integrations could create fidelity data and workflow switching costs, but Archal has not published retention or usage evidence.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** E2B and Runloop already provide agent sandboxes, while OpenAI’s Agents SDK natively supports seven sandbox providers and integrated tracing and evaluation ([E2B](https://changelog.e2b.dev/blog/series-a), [Runloop](https://runloop.ai/media/runloop-raises-7m-seed-round-to-bring-enterprise-grade-infrastructure-to-ai-coding-agents), [OpenAI](https://openai.com/index/the-next-evolution-of-the-agents-sdk/), Apr 2026).

## Market & Traction

- **Traction signals:**
  - 687 LinkedIn followers ([LinkedIn company page](https://www.linkedin.com/company/archal-labs), Jul 2026).
  - 0 active YC job postings ([Y Combinator](https://www.ycombinator.com/companies/archal), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - LangSmith/LangChain ($160M raised, $16M 2025 ARR): combines agent tracing, evaluation, deployment, and orchestration rather than independently simulated third-party APIs ([LangChain funding announcement](https://www.langchain.com/blog/series-b), [Latka](https://getlatka.com/companies/langchain), Jul 2026).
  - Braintrust ($121M in disclosed seed, Series A, and Series B funding, revenue unknown): evaluates and observes production AI traces rather than supplying external-service clones ([Braintrust company archive](https://www.braintrust.dev/blog/company), Feb 2026).
  - E2B ($32M raised, revenue unknown): gives agents secure cloud computers and code-execution runtimes rather than simulated SaaS interfaces ([E2B](https://changelog.e2b.dev/blog/series-a), Jul 2025).
  - Runloop ($7M raised, revenue unknown): provides devboxes, benchmarks, and deployment infrastructure focused on coding agents ([Runloop](https://runloop.ai/media/runloop-raises-7m-seed-round-to-bring-enterprise-grade-infrastructure-to-ai-coding-agents), Jul 2025).
- **Why now:** [Inferred]: OpenAI released tool-using agent infrastructure in March 2025 and native sandbox integrations in April 2026, while Gartner forecast task-specific agents in 40% of enterprise applications by year-end 2026 versus under 5% in 2025, increasing the number of agents acting through external systems ([OpenAI](https://openai.com/index/new-tools-for-building-agents/), [OpenAI](https://openai.com/index/the-next-evolution-of-the-agents-sdk/), [Gartner](https://www.gartner.com/en/newsroom/press-releases/2025-08-26-gartner-predicts-40-percent-of-enterprise-apps-will-feature-task-specific-ai-agents-by-2026-up-from-less-than-5-percent-in-2025)).

## Founders & Team

- **Noah Song (Founder):**
  - Background: Song studied mathematics at the University of Colorado Boulder, received the Jim and Laura Marshall Scholarship, and conducted undergraduate research in a chemical-engineering lab ([CU Boulder Mathematics](https://math.colorado.edu/alumni/primebits/PrimeBits2024-25.pdf), [Sprenger lab CV](https://experts.colorado.edu/vitas/165650.pdf), 2025).
  - Twitter/X: No public account found.
  - LinkedIn: “Archal Labs,” with 2K followers and 500+ connections ([LinkedIn](https://www.linkedin.com/in/noah-j-song), Jul 2026).
  - GitHub: No public repos found.
- **Aidan Tiruvan (Founder):**
  - Background: Tiruvan studied computer science and mathematics at CU Boulder, conducted agent red-teaming research at Scale AI and ML work for a NASA mission proposal, and states that his ModelBucket project was acquired by a competing company ([personal résumé](https://aidantiruvan.com/Aidan%20Tiruvan%20-%20Resume.pdf), Jun 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Founder at Archal, building testing environments for AI agents; 2x founder, prev ML research at Scale AI & NASA,” with 4K followers ([LinkedIn](https://www.linkedin.com/in/aidantiruvan), Jul 2026).
  - GitHub: @aidantiruvan; ASM-3D-Game is the highest-starred visible repository with 1 star ([GitHub](https://github.com/aidantiruvan), Jul 2026).
- **Co-founder relationship:** Both founders attended the University of Colorado Boulder ([Aidan Tiruvan](https://aidantiruvan.com/about/), [Noah Song](https://www.linkedin.com/in/noah-j-song)).
- **Founder-market fit:** [Inferred]: Tiruvan’s agent-red-teaming work at Scale AI and Song’s mathematics and research background relate to evaluation and simulation design, while YC lists Ankit Gupta as Archal’s primary partner ([Tiruvan résumé](https://aidantiruvan.com/Aidan%20Tiruvan%20-%20Resume.pdf), [CU Boulder Mathematics](https://math.colorado.edu/alumni/primebits/PrimeBits2024-25.pdf), [Y Combinator](https://www.ycombinator.com/companies/archal)).

## Key Risks

- **Clone fidelity:** Archal states that behavior varies by environment and operation and does not claim complete upstream coverage, mitigated by dated capability profiles and documented reset behavior ([Archal FAQ](https://archal.ai/), Aug 2026).
- **Product-scope discontinuity:** [Inferred]: The live site positions Archal as sandbox infrastructure that leaves evaluation and observability to the customer, while YC still describes automatic verification and fix PRs, which may create positioning ambiguity ([Archal product page](https://archal.ai/product), [Y Combinator](https://www.ycombinator.com/companies/archal), Aug 2026).
- **Founder-roster discrepancy:** The live YC page retrieved in August lists only Aidan Tiruvan, while a recently indexed YC result and Archal’s LinkedIn page identify Noah Song as a co-founder; no public explanation was found ([Y Combinator](https://www.ycombinator.com/companies/archal), [LinkedIn](https://www.linkedin.com/company/archal-labs), Aug 2026).
- **Bundled alternatives:** OpenAI’s Agents SDK now combines agent orchestration with native support for E2B, Runloop, Cloudflare, Daytona, Modal, Vercel, and other sandboxes, creating a platform-level substitution path ([OpenAI](https://openai.com/index/the-next-evolution-of-the-agents-sdk/), Apr 2026).
- **Enterprise security requirements:** [Inferred]: Testing workflows modeled on GitHub, Slack, Stripe, and similar systems can trigger procurement requirements; Archal offers private deployment, DPA/MSA support, SAML SSO, SCIM, and security reviews as mitigation ([Archal contact page](https://archal.ai/contact), Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 687 LinkedIn followers (LinkedIn, Jul 2026); 0 YC job postings (Y Combinator, Aug 2026) |
| Revenue Signal | $0.10 per environment-minute, prorated per second, with $20 in onboarding credits (Archal website, Aug 2026) |
| Founders | Noah Song (Founder): CU Boulder mathematics scholarship recipient and undergraduate researcher (CU Boulder Mathematics, 2025); Aidan Tiruvan (Founder): CU Boulder CS/math, Scale AI agent red-teaming, NASA ML research (personal résumé, Jun 2026) |
| Competitors | LangSmith/LangChain ($160M raised, $16M 2025 ARR, integrated agent engineering platform; Latka/LangChain, Jul 2026); Braintrust ($121M disclosed, revenue unknown, evals and observability; Braintrust, Feb 2026); E2B ($32M raised, revenue unknown, cloud-compute sandboxes; E2B, Jul 2025); Runloop ($7M raised, revenue unknown, coding-agent devboxes and benchmarks; Runloop, Jul 2025) |
| Moat Signals | 22 available independently implemented, stateful service environments (Archal environments page, Aug 2026) |
| Risk Factors | Incomplete operation coverage (Archal FAQ, Aug 2026), public product-scope mismatch (Archal and YC, Aug 2026), bundled sandbox alternatives (OpenAI, Apr 2026) |
| Founder Reach | Aidan Tiruvan: LinkedIn 4K followers, GitHub top repo 1 star (LinkedIn/GitHub, Jul 2026); Noah Song: LinkedIn 2K followers (LinkedIn, Jul 2026) |
| Distribution Signals | 687 LinkedIn followers (LinkedIn, Jul 2026); self-service npm CLI and $20 onboarding credits (Archal quickstart/website, Aug 2026) |
| Emails | founders@archal.ai (Archal contact page, Aug 2026) |
