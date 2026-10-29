# Agent 37

> Cloud Sandbox for Agents

| Field | Value |
|-------|-------|
| Website | https://www.agent37.com/cloud |
| YC Page | https://www.ycombinator.com/companies/agent-37 |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/agent-37)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 0 |
| Location | New York City, NY, USA |
| Tags | Developer Tools, SaaS, B2B, AI |
| YC Partner | Andrew Miklas ([YC](https://www.ycombinator.com/companies/agent-37)) |
| Emails | info@agent37.com; datarequest@datarep.com—appointed privacy representative ([Privacy policy](https://www.agent37.com/privacy)) |

## The Idea

- **Problem:** Agent-product developers must provision customer environments, credentials, storage, and scheduling themselves; Boon spent six months building on Render before adopting Agent37 ([Boon case study](https://www.agent37.com/case-studies/boon-gave-every-client-their-own-hermes-agent-in-3-days-with-agent37), retrieved Oct 2026).
- **Approach:** An API provisions an isolated sandbox per customer with a preinstalled agent harness, persistent files, application integrations, and compute billing that stops during sleep ([Agent37 Cloud](https://www.agent37.com/cloud), retrieved Oct 2026).
- **Differentiation:** Against E2B and Daytona, Agent37 emphasizes lower published resource prices and preinstalled harnesses; persistence itself overlaps with E2B’s documented pause/resume functionality ([Agent37 pricing](https://www.agent37.com/pricing); [E2B documentation](https://docs.e2b.dev/sandbox/persistence), retrieved Oct 2026).
- **Business Model:** Prepaid consumption billing charges $0.80/vCPU, $0.70/GB RAM, and $0.09/GB disk per 730-hour month, metered by minute, without subscription fees; models and tools bill separately ([Pricing](https://www.agent37.com/pricing), Oct 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes a white-label starter kit, founder-assisted onboarding, Product Hunt launches, and developer-event sponsorship ([YC launch](https://www.ycombinator.com/launches/UTg-agent37-host-any-agent-harness); [Hackyard BUILD](https://hackyard.org/build2026), Oct 2026).

## Defensibility

- **Moat today:** Public adoption signals include 651 GitHub stars for `minions` and 191 for `agent37-skills-collection`, establishing an open-source distribution footprint rather than demonstrated exclusivity ([GitHub organization](https://github.com/agent37-platform), retrieved Oct 27, 2026).
- **Future moat:** [Inferred]: Embedded customer workflows could create migration costs, although downloadable workspaces and cancellation without exit fees limit contractual lock-in ([Company LinkedIn](https://www.linkedin.com/company/agent37), Oct 2026).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given existing persistent execution products from E2B and Blaxel ([E2B documentation](https://docs.e2b.dev/sandbox/persistence); [Blaxel](https://blaxel.ai/company/about)).
- **Commoditization risk:** E2B already preserves filesystem and memory state, while Daytona offers Linux, Windows, macOS, and GPU environments, creating functional overlap beyond Agent37’s pricing distinction ([E2B](https://docs.e2b.dev/sandbox/persistence); [Daytona](https://www.daytona.io/docs/en/), Oct 2026).

## Market & Traction

- **Traction signals:**
  - Current platform: more than 100 companies running agents, founder-reported in a named publication ([Startup Fortune interview](https://startupfortune.com/run-claude-code-codex-hermes-and-openclaw-for-95-less-agent37-founder-vishnu-krishnaprasad-on-the-affordable-agent-sandbox/), Oct 3, 2026).
  - Managed hosting across products: 1,000+ users; Cloud-only allocation undisclosed ([Company author profile](https://www.agent37.com/blog/authors/vishnu), retrieved Oct 27, 2026).
  - Earlier personal OpenClaw hosting: 30+ paying customers on launch day in February 2026; the founder subsequently describes pivots into hosting multiple harnesses ([Founder LinkedIn](https://www.linkedin.com/posts/vishnukrishnaprasad_it-took-me-9-years-and-15-applications-to-activity-7500287343581351939-do1Z), retrieved Oct 2026).
  - Agent 37 Cloud ranked #1 Product of the Day on June 21, 2026, separately from personal hosting’s #1 finish on March 14, 2026 ([Cloud Product Hunt](https://www.producthunt.com/products/agent-37-38); [Personal-hosting awards](https://www.producthunt.com/products/agent-37/awards)).
  - Customer testimonial: Boon deployed its fleet in three days and reduced monthly per-agent hosting from $85 to $4.94 ([Company case study](https://www.agent37.com/case-studies/boon-gave-every-client-their-own-hermes-agent-in-3-days-with-agent37), retrieved Oct 2026).
  - Customer deployment: ETEC+ migrated 30+ existing clients onto its branded product ([YC](https://www.ycombinator.com/companies/agent-37), retrieved Oct 2026).
  - Company audience: 430 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/agent37), retrieved Oct 27, 2026).
  - Company X account @Agent37HQ: 117 followers in an indexed snapshot ([Sotwe mirror](https://www.sotwe.com/Agent37HQ?lang=en), Oct 2026, via search snippet).
  - Domain-wide traffic estimate: 69.4K monthly visits, explicitly marked single-source ([New Site Radar](https://newsiteradar.com/category/saas), Aug 2026 estimate).
  - Financing database reports $500K from YC dated September 1, 2026 ([CB Insights](https://www.cbinsights.com/company/agent-37/financials), via search snippet).
- **Competitors:**
  - **E2B ($35M raised, revenue unknown):** $21M Series A led by Insight Partners in July 2025; offers state-preserving sandbox pause/resume, overlapping Agent37’s persistence proposition ([CB Insights](https://www.cbinsights.com/company/e2b/financials), via search snippet; [Funding announcement](https://e2b.dev/resources/series-a); [Documentation](https://docs.e2b.dev/sandbox/persistence)).
  - **Daytona ($91M raised, revenue unknown):** $60M Series B led by FirstMark Growth on October 20, 2026; offers multiple operating systems and GPU sandboxes ([Company announcement](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud)).
  - **Blaxel ($7.3M disclosed seed funding, revenue unknown):** First Round-led round announced December 2025; offers hardware-isolated microVMs and joined Baseten in 2026 to colocate execution with inference ([Funding announcement](https://blaxel.ai/blog/Blaxel-Raises-7-3M-Seed-Round-led-by-First-Round-to-Build-Cloud-Infrastructure-for-the-AI-Agent-Eco-23247e47b1ea8067b923d998364e3ced); [Company page](https://blaxel.ai/company/about)).
- **Why now:** [Inferred]: OpenClaw’s emergence created demand for managed agent deployment, reflected in Agent37’s February 2026 hosting launch and immediate paying customers ([Founder account](https://www.linkedin.com/posts/vishnukrishnaprasad_it-took-me-9-years-and-15-applications-to-activity-7500287343581351939-do1Z)).

## Founders & Team

- **VISHNU KRISHNAPRASAD (Founder/CEO):**
  - Background: Carnegie Mellon information-science-management master’s; previously Amazon senior software engineer, Quantcast engineering manager, and ThoughtWorks consultant; founded Real Voxel and Dota2Connect; verified exits: No public data found ([YC founder profile](https://www.ycombinator.com/founders/vishnu-krishnaprasad)).
  - Twitter/X: @an_engineer_log; 7,996 followers in an indexed mirror snapshot ([Nitter](https://nitter.rdrama.net/an_engineer_log), Oct 2026, via search snippet).
  - LinkedIn: Agent 37 affiliation and 5K followers visible; full headline not retrievable ([LinkedIn](https://www.linkedin.com/in/vishnukrishnaprasad), Oct 2026, via search snippet).
  - GitHub: @vishnukool; leading displayed personal repository `fable-rotation`, four stars ([GitHub](https://github.com/vishnukool), retrieved Oct 27, 2026).
- **Co-founder relationship:** No public data on co-founder history; YC lists the same founder twice, while LinkedIn reports a company-size band of 2–10 employees ([YC](https://www.ycombinator.com/companies/agent-37); [LinkedIn](https://www.linkedin.com/company/agent37)).
- **Founder-market fit:** [Inferred]: Amazon engineering and Quantcast management experience relate to operating hosted infrastructure; YC identifies Andrew Miklas as the assigned partner ([YC founder profile](https://www.ycombinator.com/founders/vishnu-krishnaprasad)).

## Key Risks

- **Host memory pressure:** The founder states critically constrained hosts restart memory-heavy sandboxes, with workload relocation used to relieve pressure ([Founder HN responses](https://news.ycombinator.com/item?id=50059096), Oct 2026).
- **Workload compatibility:** Standard gVisor environments cannot support Docker-in-Docker or Android emulators; full VM alternatives cost more ([Founder HN launch](https://news.ycombinator.com/item?id=50059096), Oct 2026).
- **Sleeping-agent reachability:** Outbound polling agents cannot receive messages while asleep without an external relay; the founder recommends leaving these instances running ([Founder HN response](https://news.ycombinator.com/item?id=50059096), Oct 2026).
- **Supplier dependency:** Application integrations use Composio, while template builds and image imports use competitor Daytona, introducing external operational dependencies ([Privacy policy](https://www.agent37.com/privacy), Sept 2026).
- **Name ambiguity:** An unrelated punk band also uses Agent 37, requiring exclusion of its social and streaming activity from startup metrics ([Band Linktree](https://linktr.ee/agent37)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 100+ companies ([Startup Fortune](https://startupfortune.com/run-claude-code-codex-hermes-and-openclaw-for-95-less-agent37-founder-vishnu-krishnaprasad-on-the-affordable-agent-sandbox/), Oct 2026); 1,000+ hosting users, products combined ([Company](https://www.agent37.com/blog/authors/vishnu), Oct 2026) |
| Revenue Signal | Cloud: $4.76/month for continuously running 2-vCPU/4-GB configuration ([Company](https://www.agent37.com/cloud), Oct 2026); company-wide “100k ARR” claimed, currency/product split undisclosed ([Rohit Tiru, LinkedIn](https://in.linkedin.com/in/rohit-tiru-179b4815), retrieved Oct 2026) |
| Founders | VISHNU KRISHNAPRASAD, CEO: Amazon, Quantcast, Carnegie Mellon ([YC](https://www.ycombinator.com/founders/vishnu-krishnaprasad)) |
| Competitors | E2B ($35M, revenue unknown, stateful pause/resume; [CB Insights](https://www.cbinsights.com/company/e2b/financials), via search snippet; [Docs](https://docs.e2b.dev/sandbox/persistence)); Daytona ($91M, revenue unknown, multiple operating systems; [Company](https://www.daytona.io/dotfiles/daytona-raises-60m-series-b-to-build-the-agent-cloud)); Blaxel ($7.3M seed, revenue unknown, inference colocation; [Company](https://blaxel.ai/company/about)) |
| Moat Signals | Open-source adoption: `minions` 651 stars; skills collection 191 stars ([GitHub](https://github.com/agent37-platform), Oct 27, 2026) |
| Risk Factors | Memory-pressure restarts, gVisor compatibility limits, sleeping polling agents ([Founder HN](https://news.ycombinator.com/item?id=50059096), Oct 2026) |
| Founder Reach | Vishnu: X 7,996 ([Nitter](https://nitter.rdrama.net/an_engineer_log), via search snippet); LinkedIn 5K ([LinkedIn](https://www.linkedin.com/in/vishnukrishnaprasad), via search snippet); leading personal repository four stars ([GitHub](https://github.com/vishnukool), Oct 2026) |
| Distribution Signals | Cloud Product Hunt #1, June 21, 2026 ([Product Hunt](https://www.producthunt.com/products/agent-37-38)); BUILD sponsorship, Oct 2026 ([Hackyard](https://hackyard.org/build2026)) |
| Emails | info@agent37.com; datarequest@datarep.com, privacy representative ([Privacy policy](https://www.agent37.com/privacy)) |
