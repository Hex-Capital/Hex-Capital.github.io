# Traceforce

> Securing AI native apps directly on devices

| Field | Value |
|-------|-------|
| Website | https://www.traceforce.ai |
| YC Page | https://www.ycombinator.com/companies/traceforce |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, Security, Cybersecurity, Enterprise |
| YC Partner | Brad Flora |
| Emails | info@traceforce.ai |

## The Idea

- **Problem:** Enterprise security teams rely on gateways, proxies, and application APIs that cannot observe AI agents accessing local files, credentials, MCP servers, and skills on employee devices ([YC launch](https://www.ycombinator.com/launches/RxE-traceforce-catch-risky-agent-actions-your-security-gateway-will-never-spot), Jul 2026).
- **Approach:** An on-device agent inventories browser, desktop, and CLI-based AI, maps its MCP and data connections, records prompts and tool calls, and warns or blocks unsafe actions before execution ([Traceforce website](https://www.traceforce.ai/), Aug 2026).
- **Differentiation:** Traceforce uses endpoint telemetry, while WitnessAI advertises agentless network-level controls and Zenity combines endpoint-native hooks with SaaS and cloud coverage ([WitnessAI](https://witness.ai/product/); [Zenity](https://zenity.io/use-cases/agent-type/coding-personal-agents), Aug 2026).
- **Business Model:** [Inferred]: Enterprise SaaS sold to security teams, potentially priced by protected devices, with a self-service free trial and MDM-based fleet deployment but no public paid pricing ([trial page](https://trial.traceforce.co/); [Traceforce website](https://www.traceforce.ai/), Aug 2026).
- **TAM/SAM:** The agentic-AI security market is projected from $1.65 billion in 2026 to $13.52 billion in 2032 at a 42.0% CAGR, while no public SAM estimate was found for endpoint-only AI security ([MarketsandMarkets](https://www.marketsandmarkets.com/blog/ICT/agentic-ai-security-market), Jun 2026).
- **GTM / Distribution:** Traceforce combines self-service trials, Jamf/JumpCloud/NinjaOne/Iru integrations, PORT1 distribution for MSPs and MSSPs, and CISO-focused events ([website](https://www.traceforce.ai/); [contact page](https://www.traceforce.ai/contact-us); [LinkedIn](https://www.linkedin.com/company/traceforce-security), Aug 2026).

## Defensibility

- **Moat today:** TraceGraph derives an activity graph from endpoint telemetry, while the company’s MCP X-Ray repository has 80 GitHub stars and its Atlas registry covers more than 600 MCPs ([Traceforce LinkedIn](https://www.linkedin.com/company/traceforce-security); [GitHub](https://github.com/traceforce/mcp-xray), Aug 2026).
- **Future moat:** [Inferred]: Accumulated tool-call telemetry, incident outcomes, device coverage, and MCP assessments could improve policy coverage, but no public detection-accuracy or retention benchmark establishes this advantage.
- **Market structure:** No structural barrier identified at this stage, because funded competitors already deploy endpoint hooks, network controls, MCP gateways, and runtime agent policies.
- **Commoditization risk:** Zenity offers endpoint discovery and pre-execution tool blocking, WitnessAI offers network-enforced MCP controls, and Noma combines posture management, red teaming, and runtime protection ([Zenity](https://zenity.io/use-cases/agent-type/coding-personal-agents); [WitnessAI](https://witness.ai/product/); [Noma](https://noma.security/blog/noma-security-raises-100m-to-drive-adoption-of-ai-agent-security/), Aug 2026).

## Market & Traction

- **Traction signals:**
  - 1,500+ employee devices across five medium-sized enterprises ([YC launch](https://www.ycombinator.com/launches/RxE-traceforce-catch-risky-agent-actions-your-security-gateway-will-never-spot), Jul 2026).
  - One deployment at a 500+ employee company and proof-of-concepts with Fortune 500 companies ([YC launch](https://www.ycombinator.com/launches/RxE-traceforce-catch-risky-agent-actions-your-security-gateway-will-never-spot), Jul 2026).
  - 50+ CISO and CIO problem-validation interviews before product development ([YC company page](https://www.ycombinator.com/companies/traceforce), Jul 2026).
  - MCP X-Ray has 80 GitHub stars and 15 forks ([GitHub](https://github.com/traceforce/mcp-xray), Aug 2026).
  - 202 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/traceforce-security), Aug 2026).
  - One founding-engineer opening at $140,000–$180,000 salary and 1%–2% equity ([YC jobs](https://www.ycombinator.com/companies/traceforce), Aug 2026).
  - SOC 2 compliance and ISO 27001 certification announced by the company ([LinkedIn](https://www.linkedin.com/company/traceforce-security), Apr 2026).
- **Competitors (minimum 3, up to 5):**
  - WitnessAI ($90M raised, revenue unknown): agentless network-level governance across employees, models, applications, and agents, versus Traceforce’s installed endpoint agent ([CB Insights](https://www.cbinsights.com/company/witnessai/financials); [WitnessAI](https://witness.ai/product/), Aug 2026).
  - Zenity ($180M+ disclosed, revenue unknown): spans SaaS, cloud, and endpoint agents with native hooks and intent-based enforcement, overlapping Traceforce’s device controls ([Series B](https://zenity.io/company-overview/newsroom/company-news/zenity-raises-38m-series-b-funding-round-to-secure-agentic-ai); [Series C](https://zenity.io/company-overview/newsroom/company-news/zenity-raises-125-million-to-secure-the-era-of-1-billion-ai-agents), Aug 2026).
  - Noma Security ($132M raised, revenue unknown): covers AI discovery, posture management, red teaming, cloud/code environments, and runtime protection, versus Traceforce’s device emphasis ([Noma](https://noma.security/blog/noma-security-raises-100m-to-drive-adoption-of-ai-agent-security/); [CB Insights](https://www.cbinsights.com/company/noma-security/financials), Aug 2026).
  - Harmonic Security ($26M+ raised, revenue unknown): uses specialized language models to classify and protect sensitive data, while Traceforce maps agent execution and blocks device-level actions ([Harmonic Security](https://www.harmonic.security/resources/harmonic-security-raises-17-5-million-series-a-to-accelerate-zero-touch-data-protection-to-market), Oct 2024).
- **Why now:** [Inferred]: The shift from browser chatbots to Claude Code, Cursor, MCP-connected tools, and other agents that execute locally created an endpoint activity layer that network-oriented controls were not designed to inspect ([YC launch](https://www.ycombinator.com/launches/RxE-traceforce-catch-risky-agent-actions-your-security-gateway-will-never-spot), Jul 2026).

## Founders & Team

- **Xia Hua (CEO):**
  - Background: Former Clumio Director of Engineering responsible for flagship products, MIT PhD in Applied Mathematics, former Oracle database engineer, and named inventor on cloud-data-protection patents ([YC](https://www.ycombinator.com/companies/traceforce); [LinkedIn](https://www.linkedin.com/in/xia-hua-ph-d-28856a30), Aug 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Building Traceforce. Observe and Secure AI at the device layer,” with approximately 3,000 followers ([LinkedIn](https://www.linkedin.com/in/xia-hua-ph-d-28856a30), Aug 2026).
  - GitHub: Organization @traceforce, with MCP X-Ray at 80 stars ([GitHub](https://github.com/traceforce/mcp-xray), Aug 2026).
- **Varun Wadhwa (CTO):**
  - Background: UC Berkeley BS in EECS; former LinkedIn engineer for RAG database systems, Clumio staff engineer for distributed backup infrastructure, and Microsoft payments engineer ([YC](https://www.ycombinator.com/companies/traceforce), Aug 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Co-founder & CTO at Traceforce”; count not retrievable ([YC-linked profile](https://www.linkedin.com/in/varunwadhwarcds), Aug 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both founders worked at Clumio, where Xia was Director of Engineering and Varun was a technical lead before Commvault acquired the company in 2024 ([YC launch](https://www.ycombinator.com/launches/RxE-traceforce-catch-risky-agent-actions-your-security-gateway-will-never-spot), Jul 2026).
- **Founder-market fit:** Xia’s cloud-data-protection leadership and patents and Varun’s distributed backup, RAG database, and payments-system work document experience with security and data infrastructure ([YC](https://www.ycombinator.com/companies/traceforce); [Xia Hua LinkedIn](https://www.linkedin.com/in/xia-hua-ph-d-28856a30), Aug 2026).

## Key Risks

- **Competitive convergence:** Zenity now provides endpoint visibility into prompts, commands, MCPs, and tool calls, while WitnessAI offers agentless native-application monitoring, reducing functional separation from Traceforce ([Zenity](https://zenity.io/use-cases/agent-type/coding-personal-agents); [WitnessAI](https://witness.ai/product/), Aug 2026).
- **Endpoint coverage dependency:** [Inferred]: Visibility depends on installing the product or connecting an MDM, so unmanaged devices and unsupported AI tools may remain outside enforcement ([Traceforce website](https://www.traceforce.ai/), Aug 2026).
- **Enforcement accuracy:** Traceforce blocks agent actions in real time but publishes no false-positive or false-negative benchmark, creating risk of either missed attacks or blocked legitimate activity ([Traceforce website](https://www.traceforce.ai/), Aug 2026).
- **Sensitive telemetry:** [Inferred]: Recording prompts, reasoning, tool calls, and outcomes creates a repository of employee and enterprise activity; SOC 2 and ISO 27001 certification provide a disclosed mitigation ([website](https://www.traceforce.ai/); [LinkedIn](https://www.linkedin.com/company/traceforce-security), Aug 2026).
- **Name collision:** An unrelated German network-troubleshooting company operates as TraceForce at traceforce.de and reports more than 300 projects, creating search-result ambiguity ([TraceForce GmbH](https://www.traceforce.de/), Aug 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.65B in 2026, projected to $13.52B by 2032 at 42.0% CAGR ([MarketsandMarkets](https://www.marketsandmarkets.com/blog/ICT/agentic-ai-security-market), Jun 2026) |
| SAM | No public data found |
| Traction | 1,500+ devices across five enterprises; one 500+ employee deployment; Fortune 500 PoCs ([YC launch](https://www.ycombinator.com/launches/RxE-traceforce-catch-risky-agent-actions-your-security-gateway-will-never-spot), Jul 2026) |
| Revenue Signal | No public data found |
| Founders | Xia Hua (CEO): MIT PhD, former Clumio Director of Engineering; Varun Wadhwa (CTO): UC Berkeley EECS, former LinkedIn, Clumio, and Microsoft engineer ([YC](https://www.ycombinator.com/companies/traceforce), Aug 2026) |
| Competitors | WitnessAI ($90M, revenue unknown, agentless network controls); Zenity ($180M+ disclosed, revenue unknown, SaaS/cloud/endpoint coverage); Noma Security ($132M, revenue unknown, lifecycle and runtime platform); Harmonic Security ($26M+, revenue unknown, language-model-based data protection) ([CB Insights](https://www.cbinsights.com/company/witnessai/financials); [Zenity](https://zenity.io/company-overview/newsroom/company-news/zenity-raises-125-million-to-secure-the-era-of-1-billion-ai-agents); [Noma](https://www.cbinsights.com/company/noma-security/financials); [Harmonic](https://www.harmonic.security/resources/harmonic-security-raises-17-5-million-series-a-to-accelerate-zero-touch-data-protection-to-market), Aug 2026) |
| Moat Signals | TraceGraph endpoint telemetry, 80-star MCP X-Ray repository, and 600+ MCP Atlas registry ([Traceforce LinkedIn](https://www.linkedin.com/company/traceforce-security); [GitHub](https://github.com/traceforce/mcp-xray), Aug 2026) |
| Risk Factors | Endpoint deployment dependency, overlapping funded competitors, absence of public enforcement-accuracy benchmarks, sensitive telemetry collection ([Traceforce](https://www.traceforce.ai/); [Zenity](https://zenity.io/use-cases/agent-type/coding-personal-agents); [WitnessAI](https://witness.ai/product/), Aug 2026) |
| Founder Reach | Xia Hua: LinkedIn 3K followers and organization repository with 80 stars ([LinkedIn](https://www.linkedin.com/in/xia-hua-ph-d-28856a30); [GitHub](https://github.com/traceforce/mcp-xray), Aug 2026); Varun Wadhwa: LinkedIn count not retrievable and no verified X/GitHub reach ([YC](https://www.ycombinator.com/companies/traceforce), Aug 2026) |
| Distribution Signals | 202 LinkedIn followers, one YC job posting, Jamf/JumpCloud/NinjaOne/Iru integrations, PORT1 MSP/MSSP channel, and TechEx/Austin Cybersecurity Summit sponsorships ([LinkedIn](https://www.linkedin.com/company/traceforce-security); [website](https://www.traceforce.ai/); [contact page](https://www.traceforce.ai/contact-us), Aug 2026) |
| Emails | info@traceforce.ai ([Traceforce contact page](https://www.traceforce.ai/contact-us), Aug 2026) |
