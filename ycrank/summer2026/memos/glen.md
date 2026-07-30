# Glen

> Unified organizational context for agents and humans

| Field | Value |
|-------|-------|
| Website | https://www.tryglen.com/ |
| YC Page | https://www.ycombinator.com/companies/glen |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Generative AI, B2B |
| YC Partner | Jared Friedman ([Y Combinator](https://www.ycombinator.com/companies/glen), Jul 2026) |
| Emails | founders@tryglen.com ([Glen Slack page](https://tryglen.com/slack), Jul 2026), nikosdritsakos@gmail.com ([founder website](https://www.nikosdritsakos.com/), Jul 2026) |

## The Idea

- **Problem:** Organizational knowledge is fragmented across code, pull requests, issues, documents, meetings, and individual agent sessions, leaving employees and agents to reconstruct decisions from partial context ([Y Combinator](https://www.ycombinator.com/companies/glen), Jul 2026).
- **Approach:** Agents call Glen each turn to retrieve relevant organizational facts and store new observations in a shared, auditable knowledge record exposed through MCP ([Glen website](https://www.tryglen.com/), Jul 2026).
- **Differentiation:** Unlike self-managed vector databases or RAG pipelines, Glen determines what to retain and retrieve without customer-managed indexes or retrieval code, while Unblocked concentrates on software-development context and Glean concentrates on enterprise search ([Glen website](https://www.tryglen.com/), Jul 2026; [Unblocked](https://getunblocked.com/blog/series-a/), May 2025; [Glean](https://www.glean.com/press/glean-raises-150m-series-f-at-7-2b-valuation-to-accelerate-enterprise-ai-agent-innovation-globally), Jun 2025).
- **Business Model:** [Inferred]: Glen could monetize as enterprise SaaS based on organizational usage or connected agents, but its public site currently offers waitlist access and founder calls without disclosed pricing.
- **TAM/SAM:** The global enterprise-search market was $4.87 billion in 2023 and is projected to reach $8.85 billion by 2030 at an 8.9% CAGR ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/enterprise-search-market), accessed Jul 2026); no public SAM estimate was found for shared organizational memory for agents.
- **GTM / Distribution:** Glen onboards teams from a work-email waitlist, offers founder-led calls, supports MCP clients, and provides a Slack integration installed through its application dashboard ([Glen website](https://www.tryglen.com/), Jul 2026; [Glen Slack page](https://tryglen.com/slack), Jul 2026).

## Defensibility

- **Moat today:** Glen retains decisions, lessons, customer context, and agent tool-use patterns in a shared organizational timeline, while enforcing organization-level isolation and an optional private mode ([Glen website](https://www.tryglen.com/), Jul 2026).
- **Future moat:** [Inferred]: Repeated agent interactions could create organization-specific stores of decisions and workflows that become costly to recreate elsewhere, but no retention, migration, or usage data publicly demonstrates this effect.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Enterprise-search vendors, agent platforms, coding-context products, and companies building internal RAG systems can offer overlapping retrieval and organizational-context functionality, as demonstrated by Glean, Dust, and Unblocked ([Glean](https://www.glean.com/press/glean-raises-150m-series-f-at-7-2b-valuation-to-accelerate-enterprise-ai-agent-innovation-globally), Jun 2025; [Dust](https://www.globenewswire.com/news-release/2026/05/18/3296726/0/en/Dust-raises-40M-to-make-AI-multiplayer-inside-the-enterprise.html), May 2026; [Unblocked](https://getunblocked.com/blog/series-a/), May 2025).

## Market & Traction

- **Traction signals:**
  - Production deployment with teams admitted in waves from a work-email waitlist ([Glen website](https://www.tryglen.com/), Jul 2026).
  - 0 active job listings ([Y Combinator](https://www.ycombinator.com/companies/glen), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Glean ($623M raised, $300M ARR): enterprise search and work AI spanning company data, versus Glen’s shared read/write learning layer for MCP agents ([Wing ET30](https://wing-assets.com/Wing-ET30-2025_Report.pdf), 2025; [TechCrunch](https://techcrunch.com/2026/05/28/gleans-top-line-crosses-300m-as-ai-budget-cutting-becomes-its-major-selling-point/), May 2026).
  - Dust (over $60M raised, revenue unknown): enterprise platform for human-agent collaboration, versus Glen’s cross-agent organizational memory ([Dust](https://www.globenewswire.com/news-release/2026/05/18/3296726/0/en/Dust-raises-40M-to-make-AI-multiplayer-inside-the-enterprise.html), May 2026).
  - Unblocked ($30M raised, revenue unknown): contextual intelligence focused on understanding codebases, versus Glen’s context across engineering, sales, support, and organizational decisions ([TechCrunch](https://techcrunch.com/2025/05/06/unblocked-raises-20-million-for-its-ai-assistant-to-help-devs-understand-legacy-codebases/), May 2025).
- **Why now:** [Inferred]: MCP’s November 2024 release and subsequent support from Anthropic, OpenAI, Google, Microsoft, AWS, and other Agentic AI Foundation participants created a common interface through which a shared memory service can reach multiple agent clients ([Anthropic](https://www.anthropic.com/news/model-context-protocol), Nov 2024; [Anthropic](https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation), Dec 2025).

## Founders & Team

- **Nikos Dritsakos (Founder):**
  - Background: BSc Computer Science with First Class Honours from Brock University in 2024; former Composio Head of Special Projects, FliteHouse VP of Technology and Product, and founder of SalesBop, which was sold for $500,000 after 18 months ([founder website](https://www.nikosdritsakos.com/), Jul 2026; [Y Combinator](https://www.ycombinator.com/companies/glen), Jul 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Glen”; 5K followers and 500+ connections ([LinkedIn](https://www.linkedin.com/in/nikos-dritsakos), Jul 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Nikos Dritsakos previously built AI sales-coaching software, managed AI product development at FliteHouse, led SOC 2 compliance, and worked on agent tooling at Composio ([Y Combinator](https://www.ycombinator.com/companies/glen), Jul 2026; [founder website](https://www.nikosdritsakos.com/), Jul 2026).

## Key Risks

- **Sensitive-data aggregation:** Glen centralizes decisions, customer information, conversations, and work history for organization-wide retrieval; it mitigates cross-organization access with row-level security, TLS, provider-managed encryption at rest, OAuth 2.1, hashed API keys, and a private mode ([Glen website](https://www.tryglen.com/), Jul 2026).
- **Permission granularity:** Glen states that everything learned is shared with everyone in the organization unless private mode prevents a chat from being written, creating potential exposure when source-system permissions differ ([Glen website](https://www.tryglen.com/), Jul 2026).
- **Retrieval accuracy:** Glen selects what to store and what is relevant for agents, so omitted, stale, or incorrectly reconciled context could propagate across users and agents; no public accuracy benchmarks or evaluation results were found ([Glen website](https://www.tryglen.com/), Jul 2026).
- **Platform competition:** Glean reported $300 million ARR, Dust has raised over $60 million, and Unblocked has raised $30 million, giving adjacent vendors capital and existing enterprise distribution for overlapping context products ([TechCrunch](https://techcrunch.com/2026/05/28/gleans-top-line-crosses-300m-as-ai-budget-cutting-becomes-its-major-selling-point/), May 2026; [Dust](https://www.globenewswire.com/news-release/2026/05/18/3296726/0/en/Dust-raises-40M-to-make-AI-multiplayer-inside-the-enterprise.html), May 2026; [TechCrunch](https://techcrunch.com/2025/05/06/unblocked-raises-20-million-for-its-ai-assistant-to-help-devs-understand-legacy-codebases/), May 2025).
- **Name ambiguity:** “Glen” is shared by unrelated organizations and products in search results, which can impair discoverability; company-specific results require confirmation against tryglen.com and YC Summer 2026 ([Y Combinator](https://www.ycombinator.com/companies/glen), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.87B global enterprise-search market in 2023, projected to $8.85B by 2030 at 8.9% CAGR (Grand View Research, accessed Jul 2026) |
| SAM | No public data found |
| Traction | Production deployment with teams onboarded in waves from a waitlist (Glen website, Jul 2026); 0 job listings (Y Combinator, Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Nikos Dritsakos (Founder): Brock University CS graduate, former Composio Head of Special Projects, SalesBop founder with a $500K exit (Y Combinator, Jul 2026) |
| Competitors | Glean ($623M raised, $300M ARR, enterprise search versus shared agent learning) (Wing ET30, 2025; TechCrunch, May 2026); Dust (over $60M raised, revenue unknown, human-agent collaboration platform) (Dust, May 2026); Unblocked ($30M raised, revenue unknown, codebase-focused contextual intelligence) (TechCrunch, May 2025) |
| Moat Signals | Shared organizational timeline of decisions, lessons, customer context, and tool-use patterns with organization-level isolation (Glen website, Jul 2026) |
| Risk Factors | Sensitive-data aggregation, organization-wide permission model, retrieval accuracy, funded adjacent competitors (Glen website, Jul 2026; TechCrunch, May 2025–May 2026) |
| Founder Reach | Nikos Dritsakos: Twitter not found, LinkedIn 5K followers and 500+ connections, GitHub not found (LinkedIn, Jul 2026) |
| Distribution Signals | Work-email waitlist, founder-led demos, MCP-client compatibility, Slack integration (Glen website, Jul 2026; Glen Slack page, Jul 2026) |
| Emails | founders@tryglen.com (Glen Slack page, Jul 2026), nikosdritsakos@gmail.com (founder website, Jul 2026) |
