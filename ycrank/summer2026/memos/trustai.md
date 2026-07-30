# TrustAI

> Continuous compliance and governance for agents on sensitive systems

| Field | Value |
|-------|-------|
| Website | https://trytrust.ai |
| YC Page | https://www.ycombinator.com/companies/trustai |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Compliance, Security, AI |
| YC Partner | Ankit Gupta |
| Emails | hello@trytrust.ai, admin@trytrust.ai, data@trytrust.ai, legals@trytrust.ai |

## The Idea

- **Problem:** Enterprises lack evidence that AI agents accessing ERP systems and private data stay within authorized tasks because initial permissions are broad, access drifts, and relevant activity is dispersed across logs, while legacy GRC, SOC 2, and ISO controls were designed for deterministic systems ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/trustai)).
- **Approach:** TrustAI connects to an MCP hub without agent code changes, enumerates each agent’s tools, prompts, and authorizations, resolves their ERP reach, runs preregistered controls, and has an analyst sign a go/no-go report ([TrustAI product page, Jul 2026](https://trytrust.ai/how-it-works)).
- **Differentiation:** Noma and Zenity emphasize discovery and runtime enforcement, WitnessAI applies organization-wide human-and-agent policies, and Patronus AI provides developer evals and simulation, whereas TrustAI centers analyst-reviewed predeployment assessments, ERP blast-radius mapping, and control-mapped evidence reports ([Noma](https://noma.security/), [Zenity](https://zenity.io/platform), [WitnessAI](https://witness.ai/), [Patronus AI](https://docs.patronus.ai/docs), [TrustAI](https://trytrust.ai/)).
- **Business Model:** Contracts use order-form pricing that may combine annual recurring platform fees, quarterly consumption charges, professional-service fees, and one-time implementation or workshop fees, with amounts undisclosed ([TrustAI Terms, Mar 2026](https://trytrust.ai/legal/terms)).
- **TAM/SAM:** The global AI-governance market was estimated at $308.3M in 2025 and projected to reach $3.59B in 2033 at a 36.0% CAGR from 2026–2033, but no public SAM estimate was found for agent governance on sensitive enterprise systems ([Grand View Research, May 2026](https://www.marketresearch.com/Grand-View-Research-v4060/AI-Governance-Size-Share-Trends-45393927/)).
- **GTM / Distribution:** TrustAI uses demo-led enterprise sales, offering an assessment of a prospect’s own agent and listing SAP, Oracle, NetSuite, Jira, and ServiceNow integrations ([TrustAI integrations, Jul 2026](https://trytrust.ai/integrations)).

## Defensibility

- **Moat today:** TrustAI publishes a catalog supporting 51 tests per assessment across six risk categories, maps results to four frameworks, and states that every report receives analyst review ([TrustAI, Jul 2026](https://trytrust.ai/)).
- **Future moat:** [Inferred]: Repeated assessments could create proprietary agent-behavior, permission-path, and remediation data, but no customer scale or measured outcome dataset is publicly disclosed.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** SAP embeds identity and authorization services in Joule Studio, Oracle exposes secure NetSuite MCP connectors, and Noma, WitnessAI, and Zenity already offer overlapping agent discovery, governance, and runtime controls ([SAP, Oct 2025](https://news.sap.com/2025/10/sap-connect-business-ai-new-joule-agents-embedded-intelligence/), [Oracle, Oct 2025](https://www.oracle.com/in/news/announcement/sw25-netsuite-expands-suitecloud-platform-new-ai-innovation-2025-10-07/), [Noma](https://noma.security/), [WitnessAI](https://witness.ai/), [Zenity](https://zenity.io/platform)).

## Market & Traction

- **Traction signals:**
  - Current governance product: 506 company LinkedIn followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/agentstrytrustai)).
  - Current governance-product YC launch post: 679 reactions and 105 comments ([LinkedIn, Jul 2026](https://et.linkedin.com/in/yeabsra-ashebir-8a3a80267)).
  - 0 jobs posted on YC ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/trustai/jobs)).
- **Competitors:**
  - Noma Security ($132M raised, revenue unknown): discovers models, agents, MCP servers, and data paths and enforces agent access policies at runtime, versus TrustAI’s assessment-and-report workflow ([Reuters, Jul 2025](https://tech.yahoo.com/cybersecurity/articles/israeli-cyber-startup-noma-security-150903560.html), [Noma, Jun 2026](https://noma.security/blog/noma-launches-agentic-access-control-to-govern-ai-agents-and-mcp-servers-across-the-enterprise/)).
  - WitnessAI ($85.5M raised, revenue unknown): applies intent-based runtime policies and MCP-tool allowlists across employees and agents, versus TrustAI’s preregistered ERP evaluations ([WitnessAI, May 2024](https://witness.ai/resources/witnessai-raises-27-5-million-to-enable-safe-use-of-ai/), [WitnessAI, Jan 2026](https://witness.ai/blog/witnessai-raises-58m-to-help-enterprises-move-faster-with-ai-safely/)).
  - Zenity ($55M+ raised, revenue unknown): covers agent configuration and execution across SaaS, cloud, and endpoints with inline blocking, versus TrustAI’s analyst-reviewed evidence reports ([Zenity, Oct 2024](https://zenity.io/company-overview/newsroom/company-news/zenity-raises-38m-series-b-funding-round-to-secure-agentic-ai), [Zenity platform](https://zenity.io/platform)).
  - Patronus AI ($70M raised, revenue unknown): provides automated agent evaluation, monitoring, and simulated digital environments, versus TrustAI’s sensitive-system permission mapping and compliance assessment ([Patronus AI, Jun 2026](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)).
- **Why now:** [Inferred]: SAP began releasing Joule agents across enterprise functions in 2025, Oracle introduced NetSuite MCP connectivity in October 2025, and EU AI Act transparency duties begin applying on August 2, 2026 ([SAP, May 2025](https://news.sap.com/2025/05/sap-business-ai-reimagine-how-enterprises-run/), [Oracle, Oct 2025](https://www.oracle.com/in/news/announcement/sw25-netsuite-expands-suitecloud-platform-new-ai-innovation-2025-10-07/), [European Commission, Jul 2026](https://digital-strategy.ec.europa.eu/en/news/commission-publishes-guidelines-transparency-obligations-providers-and-deployers-certain-ai-systems)).

## Founders & Team

- **Hannah Chung (CEO):**
  - Background: MIT computer science, economics, and data-science student with quantitative-finance work at Virtu Financial and economic and SME-finance research at the World Bank and IFC ([Y Combinator](https://www.ycombinator.com/companies/trustai), [MIT, 2025](https://summerwash.mit.edu/interns/2025/hannah-chung)).
  - Twitter/X: No public account found.
  - LinkedIn: “TrustAI,” with 2K followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/hannahchung1)).
  - GitHub: No public repos found.
- **Medha Venkatapathy (CTO):**
  - Background: MIT physics and computer-science student researching LLM post-training and the Muon optimizer with Jacob Andreas, and a U.S. Physics Team qualifier ([MIT SuperUROP, 2025–2026](https://superurop.mit.edu/scholars/medha-venkatapathy/), [Y Combinator](https://www.ycombinator.com/companies/trustai)).
  - Twitter/X: @medha_rv; count not retrievable ([founder website, Jul 2026](https://medhavenkatapathy.com/)).
  - LinkedIn: “TrustAI,” with 508 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/medhav)).
  - GitHub: @turtler12; pendulum-seismic-isolation has 0 stars ([GitHub, Jul 2026](https://github.com/turtler12/pendulum-seismic-isolation)).
- **Co-founder relationship:** Chung and Venkatapathy met at an MIT social event three years ago and report building together since freshman year ([TrustAI](https://trytrust.ai/about), [Y Combinator](https://www.ycombinator.com/companies/trustai)).
- **Founder-market fit:** [Inferred]: Venkatapathy’s LLM-evaluation research supports the testing layer, while Chung’s quantitative-finance and World Bank work provides exposure to financial controls, data, and regulated decision processes ([MIT SuperUROP](https://superurop.mit.edu/scholars/medha-venkatapathy/), [MIT](https://summerwash.mit.edu/interns/2025/hannah-chung)).

## Key Risks

- **Recent product pivot:** YC lists browser automation as a previous launch and agent governance as the current product, so prior automation claims—including a 47× speed benchmark—do not establish traction for the governance product ([Y Combinator](https://www.ycombinator.com/companies/trustai), [prior-product YC launch, Jul 2026](https://www.linkedin.com/posts/y-combinator_trustai-yc-s26-makes-ai-proactive-by-suggesting-activity-7480251834125668352-lLz6)).
- **Evaluation transfer:** The sample report states that reconstruction-local results transfer to the live agent only as hypotheses, labels several results as projected, and leaves some domain-specific controls unassessed ([TrustAI sample report, Jul 2026](https://trytrust.ai/report)).
- **Funded competition:** Noma, WitnessAI, Zenity, and Patronus AI have collectively disclosed more than $342M in funding while offering overlapping discovery, evaluation, policy, or runtime-control functions ([Noma](https://tech.yahoo.com/cybersecurity/articles/israeli-cyber-startup-noma-security-150903560.html), [WitnessAI](https://www.securityweek.com/witnessai-raises-58-million-for-ai-security-platform/), [Zenity](https://zenity.io/company-overview/newsroom/company-news/zenity-raises-38m-series-b-funding-round-to-secure-agentic-ai), [Patronus AI](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)).
- **Contract-document consistency:** TrustAI’s terms link to Conduct AI-branded DPA and AI-annex pages and use Conduct AI in U.S. clauses, while the terms and privacy policy list different London registered-office addresses ([TrustAI Terms](https://trytrust.ai/legal/terms), [TrustAI Privacy](https://trytrust.ai/legal/privacy)).
- **Name collision:** An unrelated Turkish company also operates as TrustAI in AI governance and evaluation, creating search and brand ambiguity that requires domain-level disambiguation ([TrustAI Turkey, Jul 2026](https://trustai.com.tr/en/about)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $308.3M global AI-governance market in 2025, projected to $3.59B by 2033 at 36.0% CAGR for 2026–2033 ([Grand View Research, May 2026](https://www.marketresearch.com/Grand-View-Research-v4060/AI-Governance-Size-Share-Trends-45393927/)) |
| SAM | No public data found |
| Traction | 506 company LinkedIn followers and current YC launch post with 679 reactions and 105 comments ([LinkedIn, Jul 2026](https://www.linkedin.com/company/agentstrytrustai), [YC launch via LinkedIn, Jul 2026](https://et.linkedin.com/in/yeabsra-ashebir-8a3a80267)) |
| Revenue Signal | Order-form pricing may include annual recurring, quarterly consumption, service, and one-time fees; amounts and company revenue are undisclosed ([TrustAI Terms, Mar 2026](https://trytrust.ai/legal/terms)) |
| Founders | Hannah Chung (CEO): MIT CS/economics, Virtu Financial, World Bank; Medha Venkatapathy (CTO): MIT physics/CS, MIT CSAIL LLM research, U.S. Physics Team qualifier ([Y Combinator, Jul 2026](https://www.ycombinator.com/companies/trustai)) |
| Competitors | Noma Security ($132M raised, revenue unknown, runtime access control); WitnessAI ($85.5M raised, revenue unknown, unified intent-based governance); Zenity ($55M+ raised, revenue unknown, buildtime/runtime agent security); Patronus AI ($70M raised, revenue unknown, automated evals and simulation) ([Noma](https://tech.yahoo.com/cybersecurity/articles/israeli-cyber-startup-noma-security-150903560.html), [WitnessAI](https://www.securityweek.com/witnessai-raises-58-million-for-ai-security-platform/), [Zenity](https://zenity.io/company-overview/newsroom/company-news/zenity-raises-38m-series-b-funding-round-to-secure-agentic-ai), [Patronus AI](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)) |
| Moat Signals | 51 preregistered tests per assessment, six risk categories, four framework mappings, and analyst review of every report ([TrustAI, Jul 2026](https://trytrust.ai/)) |
| Risk Factors | Recent product pivot ([YC](https://www.ycombinator.com/companies/trustai)), reconstruction-to-production transfer limits ([sample report](https://trytrust.ai/report)), contract-document inconsistencies ([Terms](https://trytrust.ai/legal/terms)) |
| Founder Reach | Hannah Chung: Twitter not found, LinkedIn 2K followers, GitHub not found ([LinkedIn, Jul 2026](https://www.linkedin.com/in/hannahchung1)); Medha Venkatapathy: Twitter count not retrievable, LinkedIn 508 followers, top GitHub repo 0 stars ([LinkedIn](https://www.linkedin.com/in/medhav), [GitHub, Jul 2026](https://github.com/turtler12/pendulum-seismic-isolation)) |
| Distribution Signals | 506 LinkedIn followers, YC launch post with 679 reactions and 105 comments, and 0 YC job postings ([LinkedIn, Jul 2026](https://www.linkedin.com/company/agentstrytrustai), [YC launch via LinkedIn](https://et.linkedin.com/in/yeabsra-ashebir-8a3a80267), [YC Jobs](https://www.ycombinator.com/companies/trustai/jobs)) |
| Emails | hello@trytrust.ai ([YC](https://www.ycombinator.com/companies/trustai)); admin@trytrust.ai ([TrustAI Terms](https://trytrust.ai/legal/terms)); data@trytrust.ai, legals@trytrust.ai ([TrustAI Privacy](https://trytrust.ai/legal/privacy)) |
