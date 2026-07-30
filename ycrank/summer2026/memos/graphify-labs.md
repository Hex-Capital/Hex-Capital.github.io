# Graphify Labs

> On-device knowledge graph engine for enterprises

| Field | Value |
|-------|-------|
| Website | https://www.graphify.com/ |
| YC Page | https://www.ycombinator.com/companies/graphify-labs |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | London, England, United Kingdom |
| Tags | Developer Tools, Reinforcement Learning, Open Source |
| YC Partner | Jared Friedman |
| Emails | founders@graphify.com, founders@graphifylabs.ai |

## The Idea

- **Problem:** Engineering teams and coding assistants repeatedly search code and documentation without retaining cross-file relationships or producing auditable reasoning paths ([Graphify website, Jul 2026](https://graphify.com/)).
- **Approach:** Graphify parses code locally with 36 tree-sitter grammars, creates typed relationship graphs stored on disk, and exposes path, query, explanation, and MCP interfaces with extracted, inferred, or ambiguous provenance labels ([Graphify website, Jul 2026](https://graphify.com/)).
- **Differentiation:** Unlike vector-RAG systems that retrieve similarity-ranked chunks, Sourcegraph-style hosted search, and flat grep or ctags indexes, Graphify produces an on-device traversable graph whose edges carry source provenance ([Graphify comparison, Jul 2026](https://graphify.com/)).
- **Business Model:** The Apache-2.0 core is free with no paid tier, while an enterprise product offering formal verification, graph-aware review, Jira integration, SSO, RBAC, and self-hosted deployment remains in early access ([Graphify pricing, Jul 2026](https://graphify.com/pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** The company distributes the free core through GitHub and PyPI, supports 17 coding assistants, and directs teams needing verification and shared infrastructure to an enterprise waitlist ([Graphify website, Jul 2026](https://graphify.com/)).

## Defensibility

- **Moat today:** The public project has 98,805 GitHub stars, 9,579 forks, 4M-plus PyPI downloads, and an ecosystem of 71 contributors, providing an installed-base and contributor signal rather than proprietary source-code exclusivity ([GitHub, Jul 29 2026](https://github.com/Graphify-Labs/graphify); [University of Birmingham, 2026](https://www.birmingham.ac.uk/study/student-experience/meet-our-students/safi-shamsi)).
- **Future moat:** [Inferred]: Continuously synchronized organization-specific graphs, maintainer feedback, and verification histories could create switching costs, but the enterprise layer is still in early access and no retention data are public.
- **Market structure:** No structural barrier identified at this stage, because the core is Apache-2.0 licensed and the graph, MCP, provenance, and parsing mechanisms are publicly inspectable ([Graphify GitHub, Jul 2026](https://github.com/Graphify-Labs/graphify)).
- **Commoditization risk:** Sourcegraph can extend enterprise code intelligence, while Greptile and Qodo can add graph-based context or on-premise deployment to their funded code-review products ([Sourcegraph, Jul 2021](https://sourcegraph.com/blog/announcing-sourcegraphs-series-d-round); [Greptile, Sep 2025](https://www.greptile.com/blog/series-a); [Qodo, Mar 2026](https://www.globenewswire.com/news-release/2026/03/30/3264740/0/en/qodo-raises-70m-to-accelerate-fight-against-software-slop-from-openclaw-and-claude-code.html)).

## Market & Traction

- **Traction signals:**
  - 98,805 GitHub stars, 9,579 forks, and 269 GitHub-organization followers ([GitHub, Jul 29 2026](https://github.com/Graphify-Labs/graphify)).
  - 4M-plus PyPI downloads ([Graphify website, Jul 2026](https://graphify.com/)).
  - 95K GitHub stars and 3.5M-plus downloads achieved in under four months ([YC profile, Jul 2026](https://www.ycombinator.com/companies/graphify-labs)).
  - Used in production by engineers at Rootly, Geotab, and Tweddle Group ([YC profile, Jul 2026](https://www.ycombinator.com/companies/graphify-labs)).
  - Rootly AI Labs published an integration mapping incidents, alerts, teams, and services into Graphify ([Graphify website, Jul 2026](https://graphify.com/)).
  - Customer testimonials reported 71.5-times fewer tokens in one Claude Code configuration and 79-times fewer tokens on a 496K-token codebase ([Graphify website, Jul 2026](https://graphify.com/)).
  - Coverage included Analytics Vidhya, Better Stack, DEV Community, Augment Code, and HelloGitHub between April and July 2026 ([Graphify website, Jul 2026](https://graphify.com/)).
  - Zero active YC job listings ([YC profile, Jul 2026](https://www.ycombinator.com/companies/graphify-labs)).
- **Competitors (minimum 3, up to 5):**
  - Sourcegraph ($223M raised, revenue unknown): enterprise universal code search and code intelligence rather than a local provenance-tagged knowledge-graph file ([Sourcegraph funding history](https://en.wikipedia.org/wiki/Sourcegraph); [Graphify comparison](https://graphify.com/)).
  - Greptile ($30M raised, revenue unknown): AI pull-request review backed by a repository codebase graph, versus Graphify’s free local graph plus early-access verification layer ([Georgia Tech, Jan 2026](https://www.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level); [Graphify pricing](https://graphify.com/pricing)).
  - Qodo ($120M raised, revenue unknown): multi-agent code review and governance using organizational standards and history, versus Graphify’s on-device graph and prove-or-counterexample positioning ([Qodo, Mar 2026](https://www.globenewswire.com/news-release/2026/03/30/3264740/0/en/qodo-raises-70m-to-accelerate-fight-against-software-slop-from-openclaw-and-claude-code.html); [Graphify GitHub](https://github.com/Graphify-Labs/graphify)).
- **Why now:** [Inferred]: The 2026 spread of autonomous coding agents created demand for persistent codebase context and pre-merge verification as generated-code volume began exceeding human review capacity ([Qodo, Mar 2026](https://www.globenewswire.com/news-release/2026/03/30/3264740/0/en/qodo-raises-70m-to-accelerate-fight-against-software-slop-from-openclaw-and-claude-code.html)).

## Founders & Team

- **Safi Shamsi (Co-founder and CEO):**
  - Background: MSc Data Science with Distinction from the University of Birmingham, former AI Engineer at Valent Projects working on graph-based disinformation detection, MICAD 2025 published researcher, and author of *The Memory Layer* ([YC profile, Jul 2026](https://www.ycombinator.com/companies/graphify-labs); [University of Birmingham, 2026](https://www.birmingham.ac.uk/study/student-experience/meet-our-students/safi-shamsi)).
  - Twitter/X: No public personal account found; the company account is @graphify and its follower count was not retrievable ([Graphify GitHub organization, Jul 2026](https://github.com/Graphify-Labs)).
  - LinkedIn: “Founder at Graphify Labs (YC S26)” with approximately 4K followers and 500-plus connections ([LinkedIn, Jun 2026](https://uk.linkedin.com/in/safi-shamsi)).
  - GitHub: @safishamsi, creator and maintainer of Graphify, now hosted by Graphify-Labs with 98,805 stars ([GitHub, Jul 29 2026](https://github.com/Graphify-Labs/graphify)).
- **Co-founder relationship:** No public data on co-founder history; the company about page names only Safi Shamsi and refers to the remaining personnel as a “small founding team” ([Graphify about page, Jul 2026](https://graphify.com/about)).
- **Founder-market fit:** Safi Shamsi’s MSc thesis covered knowledge-graph-powered RAG, his Valent role involved graph neural networks and knowledge-graph embeddings, and his published research addressed multimodal knowledge-graph retrieval ([YC profile, Jul 2026](https://www.ycombinator.com/companies/graphify-labs); [University of Birmingham, 2026](https://www.birmingham.ac.uk/study/student-experience/meet-our-students/safi-shamsi)).

## Key Risks

- **Enterprise-product readiness:** The verification, code-review, engineering-digest, and Jira features are explicitly in early access, with no public paid tier or enterprise release date ([Graphify pricing, Jul 2026](https://graphify.com/pricing)).
- **Graph accuracy:** Graphify labels some relationships “inferred” or “ambiguous,” and non-code semantic extraction can depend on a configured model backend, creating a mechanism for incorrect or non-deterministic edges ([Graphify website, Jul 2026](https://graphify.com/)).
- **Open-source replication:** Apache-2.0 licensing permits reuse with an explicit patent grant, allowing funded code-intelligence vendors to incorporate publicly visible parsing and graph techniques ([Graphify release notes, Jul 2026](https://github.com/Graphify-Labs/graphify/releases)).
- **Competitive financing:** Sourcegraph, Greptile, and Qodo report $223M, $30M, and $120M in funding respectively, supporting overlapping enterprise code-understanding, review, and governance products ([Sourcegraph funding history](https://en.wikipedia.org/wiki/Sourcegraph); [Georgia Tech, Jan 2026](https://www.gatech.edu/news/2026/01/05/y-combinator-backing-and-30m-investment-take-startup-greptile-next-level); [Qodo, Mar 2026](https://www.globenewswire.com/news-release/2026/03/30/3264740/0/en/qodo-raises-70m-to-accelerate-fight-against-software-slop-from-openclaw-and-claude-code.html)).
- **Name and package confusion:** The company states that graphify.net is unaffiliated and that the official PyPI package is `graphifyy` with two y’s, creating a distribution and security-confusion risk ([Graphify security page, Jul 2026](https://graphify.com/security)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 98,805 GitHub stars and 9,579 forks (GitHub, Jul 29 2026); 4M+ PyPI downloads (Graphify website, Jul 2026); production use by engineers at Rootly, Geotab, and Tweddle Group (YC, Jul 2026) |
| Revenue Signal | $0 open-source tier and no paid tier currently; enterprise features in early access (Graphify pricing, Jul 2026) |
| Founders | Safi Shamsi (Co-founder and CEO): University of Birmingham MSc Data Science with Distinction, former Valent AI Engineer, knowledge-graph researcher (YC, Jul 2026) |
| Competitors | Sourcegraph ($223M raised, revenue unknown, enterprise code search); Greptile ($30M raised, revenue unknown, AI pull-request review); Qodo ($120M raised, revenue unknown, code-review governance) (Sourcegraph funding history; Georgia Tech, Jan 2026; Qodo, Mar 2026) |
| Moat Signals | 98,805-star Apache-2.0 repository, 9,579 forks, 4M+ downloads, and 71-person contributor community (GitHub, Jul 2026; University of Birmingham, 2026) |
| Risk Factors | Enterprise layer remains in early access (Graphify pricing, Jul 2026), inferred graph edges may be inaccurate (Graphify website, Jul 2026), Apache-2.0 core can be reused by competitors (GitHub releases, Jul 2026) |
| Founder Reach | Safi Shamsi: Twitter count not retrievable, approximately 4K LinkedIn followers, 98,805 stars on Graphify (LinkedIn, Jun 2026; GitHub, Jul 29 2026) |
| Distribution Signals | 98,805 GitHub stars, 9,579 forks, 269 GitHub-organization followers, 4M+ PyPI downloads, and integrations with 17 AI assistants (GitHub and Graphify website, Jul 2026) |
| Emails | founders@graphify.com, founders@graphifylabs.ai (Graphify GitHub organization and security page, Jul 2026) |
