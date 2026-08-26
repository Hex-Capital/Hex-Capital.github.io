# OneCLI

> Give every employee a secured, sandboxed pro assistant agent

| Field | Value |
|-------|-------|
| Website | https://onecli.sh |
| YC Page | https://www.ycombinator.com/companies/onecli |
| Batch | Summer 2026 ([YC](https://www.ycombinator.com/companies/onecli)) |
| Industry | B2B / B2B -> Security |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Security, Open Source, Infrastructure, AI |
| YC Partner | Brad Flora ([YC](https://www.ycombinator.com/companies/onecli)) |
| Emails | jonathan@onecli.sh, security@onecli.sh ([YC](https://www.ycombinator.com/companies/onecli); [GitHub security policy](https://github.com/onecli/onecli/security)) |

## The Idea

- **Problem:** Companies deploying autonomous agents need employee-linked identities and least-privilege access, while OpenClaw and Hermes primarily serve individuals and commonly leave credentials inside the agent environment ([YC launch](https://www.ycombinator.com/companies/onecli), Aug. 2026).
- **Approach:** Each employee receives an isolated agent whose outbound requests traverse a gateway that authorizes the call, injects the credential at the network layer, enforces organization policies, logs identity, and pauses designated actions for human approval ([YC launch](https://www.ycombinator.com/companies/onecli), Aug. 2026).
- **Differentiation:** OneCLI says OpenClaw stores credentials on the user’s machine, Hermes keeps them with the model, Claude Tag associates access with a channel rather than a person, and OneCLI instead provides per-employee identity, sandboxes, and wire-level injection ([OneCLI comparison](https://onecli.sh/compare), Aug. 2026).
- **Business Model:** The free plan includes three users, three agents, $5 of AI credit, and 500 monthly calls; BYOC plans cost $149/month for five users and ten agents or $499/month for ten users and twenty agents, while enterprise pricing is custom ([OneCLI pricing](https://onecli.sh/pricing), Aug. 2026).
- **TAM/SAM:** Agentic-AI security is estimated at $1.8B globally in 2026 with a 38.9% CAGR through 2033, while the U.S. segment is estimated at $548.9M in 2026 with a 39.2% CAGR through 2031 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report), 2026; [MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/geography/agentic-ai-security-market/us), 2026).
- **GTM / Distribution:** OneCLI distributes through an Apache-2.0 self-hosted repository and free cloud tier, supplemented by Product Hunt, YC launches, and enterprise demos ([GitHub](https://github.com/onecli/onecli); [Product Hunt](https://www.producthunt.com/products/onecli); [pricing](https://onecli.sh/pricing), Aug. 2026).

## Defensibility

- **Moat today:** NanoClaw documents OneCLI as its sole credential path, while the shared OneCLI repository has approximately 3.3K stars ([NanoClaw changelog](https://github.com/nanocoai/nanoclaw/blob/main/CHANGELOG.md); [GitHub](https://github.com/guyb1), Aug. 2026).
- **Future moat:** [Inferred]: Installed credential mappings, policy histories, employee identities, and third-party integrations could create switching costs, but no retention or migration data is public.
- **Market structure:** [Inferred]: No structural barrier prevents incumbents from copying the runtime-gateway model because OneCLI is Apache-2.0 licensed and Cisco has already acquired NHI-security vendor Astrix ([GitHub](https://github.com/onecli/onecli); [Cisco](https://blogs.cisco.com/news/cisco-announces-intent-to-acquire-astrix-security), Jun. 2026).
- **Commoditization risk:** Aembit already offers policy-based credential brokering and an MCP identity gateway, while Pomerium provides an open-source per-request agent-access gateway ([Pomerium comparison](https://www.pomerium.com/blog/iam-for-agentic-ai-6-platforms-compared-pomerium), Jul. 2026).

## Market & Traction

- **Traction signals:**
  - Current team-harness launch ranked Product Hunt daily #7 with 143 points on August 21, 2026 ([Product Hunt](https://www.producthunt.com/leaderboard/daily/2026/8/21)).
  - The shared pre-v2/v2 repository has approximately 3.3K stars ([GitHub](https://github.com/guyb1), Aug. 2026).
  - The founders reported 350K+ cumulative OneCLI downloads at the current launch, but did not separate credential-vault downloads from v2 harness downloads ([Product Hunt](https://www.producthunt.com/products/onecli), Aug. 2026; [v2 pivot description](https://github.com/onecli/onecli?from=bd_signal)).
  - Prior credential-gateway positioning reached 110 Hacker News points and 32 comments ([Hacker News](https://news.ycombinator.com/item?id=49023427), Aug. 2026).
  - NanoClaw routes credentials through OneCLI and documents it as the sole credential path ([NanoClaw changelog](https://github.com/nanocoai/nanoclaw/blob/main/CHANGELOG.md), Aug. 2026).
  - The website displays Docker, MindsDB, Zoho, Coralogix, Kakao Entertainment, Cleo, Optibus, Reply.io, Kaiko, Percent, Pillar Security, Phase, Medallion, and Glilot Capital under “Trusted by” ([OneCLI](https://onecli.sh/), Aug. 2026).
  - OneCLI had 390 LinkedIn followers and 154 Product Hunt followers ([LinkedIn](https://www.linkedin.com/company/onecli); [Product Hunt](https://www.producthunt.com/products/onecli), Jul.–Aug. 2026).
  - YC listed zero active job postings ([YC](https://www.ycombinator.com/companies/onecli), Aug. 2026).
- **Competitors (minimum 3, up to 5):**
  - Aembit (nearly $45M raised, revenue unknown): brokers secretless workload credentials and operates an MCP identity gateway rather than supplying a per-employee assistant harness; its latest $25M Series A was led by Acrew Capital in September 2024 ([Aembit](https://aembit.io/press-release/aembit-raises-25-million-in-series-a-funding-for-non-human-identity-and-access-management/)).
  - Oasis Security ($195M raised, revenue unknown): manages discovery and lifecycle governance for existing non-human identities; its latest $120M Series B was led by Craft Ventures in March 2026 ([Oasis](https://www.oasis.security/newsroom); [Globes](https://en.globes.co.il/en/article-israeli-co-oasis-security-raises-120m-1001538093)).
  - Astrix Security/Cisco ($85M raised before acquisition, revenue unknown): discovers and remediates overprivileged NHIs rather than providing OneCLI’s employee-agent workspace; its latest $45M Series B was led by Menlo Ventures before Cisco completed the acquisition in June 2026 ([Astrix](https://www.prnewswire.com/news-releases/astrix-security-raises-45m-series-b-to-redefine-identity-security-for-the-ai-era-302327052.html); [Cisco](https://blogs.cisco.com/news/cisco-announces-intent-to-acquire-astrix-security)).
- **Why now:** [Inferred]: Autonomous agents began calling production APIs and enterprise tools at machine speed during 2025–2026, creating a credential and authorization surface that human-focused IAM did not model ([McKinsey](https://www.mckinsey.com/capabilities/risk-and-resilience/our-insights/securing-the-agentic-enterprise-opportunities-for-cybersecurity-providers), 2026).

## Founders & Team

- **Jonathan Fishner (Founder/CEO):**
  - Background: Fishner earned a computer-science BSc from the College of Management Academic Studies, built zero-trust network access at Axis Security before its HPE acquisition, and co-built ChartDB to 22.5K GitHub stars and more than $10K MRR ([Crunchbase](https://www.crunchbase.com/person/jonathan-haim-fishner); [YC](https://www.ycombinator.com/companies/onecli); [LinkedIn](https://www.linkedin.com/in/jonathanfishner), Aug. 2026).
  - Twitter/X: [@jonathanfishner](https://x.com/jonathanfishner), count not retrievable.
  - LinkedIn: “Co-Founder & CEO at OneCLI - building the Identity Gateway for AI Agents” ([LinkedIn](https://www.linkedin.com/in/jonathanfishner), Jul. 2026).
  - GitHub: [@johnnyfish](https://github.com/johnnyfish), with ChartDB as a pinned repository at approximately 22.7K stars ([GitHub](https://github.com/johnnyfish), Aug. 2026).
- **Guy Ben-Aharon (Founder/CTO):**
  - Background: Ben-Aharon earned a computer-science BSc from Ben-Gurion University, was Argon Security’s first engineer before its Aqua acquisition, and previously worked at Aqua Security, Wix, and IDF Unit 8200 ([YC](https://www.ycombinator.com/companies/onecli); [Crunchbase](https://www.crunchbase.com/person/guy-ben-aharon-341a)).
  - Twitter/X: [@GuyBenAharon](https://x.com/GuyBenAharon), count not retrievable.
  - LinkedIn: “Co-Founder & CTO at OneCLI - building the Identity Gateway for AI agents” ([LinkedIn](https://www.linkedin.com/in/guy-ben-aharon), Jul. 2026).
  - GitHub: [@guyb1](https://github.com/guyb1), with ChartDB as a pinned repository at approximately 22.8K stars ([GitHub](https://github.com/guyb1), Aug. 2026).
- **Co-founder relationship:** YC lists two active founders despite the header’s team-size value of zero, and Fishner and Ben-Aharon previously built ChartDB together beginning in 2024 ([YC](https://www.ycombinator.com/companies/onecli); [Indie Hackers](https://www.indiehackers.com/product/chartdb/our-first-commit-the-start-of-chartdb-and-going-open-source--O9j3u9dxR5WOeGc1HuQ)).
- **Founder-market fit:** Fishner’s ZTNA work at Axis, Ben-Aharon’s application-security work at Argon, and their prior shared open-source product provide documented experience in network access, application security, and open-source distribution ([YC](https://www.ycombinator.com/companies/onecli); [LinkedIn](https://www.linkedin.com/in/jonathanfishner)).

## Key Risks

- **Proxy bypass:** NanoClaw documents that proxy-unaware tools or raw sockets can bypass credential injection, approvals, and audit unless egress lockdown is enabled, and that lockdown is off by default ([NanoClaw security documentation](https://github.com/nanocoai/nanoclaw/blob/main/docs/SECURITY.md), Aug. 2026).
- **Gateway enforcement defects:** OneCLI’s July 2026 changelog records a fix for a credential-injection host-enforcement bypass, while its disclosure policy explicitly covers credential exposure and policy bypass; the released patch and private reporting channel are mitigations ([changelog](https://github.com/onecli/onecli/blob/main/CHANGELOG.md); [security policy](https://github.com/onecli/onecli/security)).
- **Traction transfer across product versions:** OneCLI began as a Rust credential vault and then shifted to a per-employee team harness, so cumulative downloads and repository stars do not isolate adoption of the current v2 product ([GitHub README](https://github.com/onecli/onecli?from=bd_signal), Aug. 2026).
- **Incumbent bundling:** [Inferred]: Cisco’s completed Astrix acquisition and Oasis Security’s pending Cyera transaction can place overlapping agent-identity capabilities inside broader security portfolios ([Cisco](https://blogs.cisco.com/news/cisco-announces-intent-to-acquire-astrix-security), Jun. 2026; [Oasis newsroom](https://www.oasis.security/newsroom), Jul. 2026).
- **Name collision:** [Inferred]: Lenovo also markets “XClarity Essentials OneCLI,” creating search and product-name ambiguity outside YC and AI-agent contexts ([Lenovo documentation](https://pubs.lenovo.com/lxce-onecli/onecli_bk.pdf)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.8B global agentic-AI security market in 2026, 38.9% CAGR through 2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report), 2026) |
| SAM | $548.9M U.S. agentic-AI security market in 2026, 39.2% CAGR through 2031 ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/geography/agentic-ai-security-market/us), 2026) |
| Traction | Current harness: Product Hunt daily #7 with 143 points ([Product Hunt](https://www.producthunt.com/leaderboard/daily/2026/8/21), Aug. 21, 2026); shared repository: approximately 3.3K stars ([GitHub](https://github.com/guyb1), Aug. 2026); cumulative pre-v2/v2 project: 350K+ downloads ([Product Hunt](https://www.producthunt.com/products/onecli), Aug. 2026) |
| Revenue Signal | $0 free plan; $149/month Team BYOC; $499/month Scale BYOC; enterprise custom pricing ([OneCLI pricing](https://onecli.sh/pricing), Aug. 2026) |
| Founders | Jonathan Fishner (CEO): Axis Security ZTNA, ChartDB co-founder, CS BSc ([YC](https://www.ycombinator.com/companies/onecli); [Crunchbase](https://www.crunchbase.com/person/jonathan-haim-fishner)); Guy Ben-Aharon (CTO): first Argon engineer, ex-Aqua/Wix/Unit 8200, CS BSc ([YC](https://www.ycombinator.com/companies/onecli)) |
| Competitors | Aembit (nearly $45M raised, revenue unknown, workload credential brokering) ([Aembit](https://aembit.io/press-release/aembit-raises-25-million-in-series-a-funding-for-non-human-identity-and-access-management/)); Oasis Security ($195M raised, revenue unknown, NHI lifecycle governance) ([Oasis](https://www.oasis.security/newsroom)); Astrix/Cisco ($85M raised pre-acquisition, revenue unknown, NHI discovery and remediation) ([Astrix](https://www.prnewswire.com/news-releases/astrix-security-raises-45m-series-b-to-redefine-identity-security-for-the-ai-era-302327052.html)) |
| Moat Signals | NanoClaw sole credential path, approximately 3.3K repository stars, Bitwarden Agent Access SDK alpha integration ([NanoClaw](https://github.com/nanocoai/nanoclaw/blob/main/CHANGELOG.md); [GitHub](https://github.com/guyb1); [OneCLI–Bitwarden](https://onecli.sh/blog/bitwarden-agent-access-sdk-onecli), 2026) |
| Risk Factors | Proxy-bypass path when egress lockdown is disabled ([NanoClaw](https://github.com/nanocoai/nanoclaw/blob/main/docs/SECURITY.md)); credential-gateway enforcement defects ([OneCLI changelog](https://github.com/onecli/onecli/blob/main/CHANGELOG.md)); current-product traction mixed with pre-v2 metrics ([GitHub README](https://github.com/onecli/onecli?from=bd_signal)) |
| Founder Reach | Jonathan Fishner: 2K LinkedIn followers and approximately 22.7K stars on top pinned repo ([LinkedIn](https://www.linkedin.com/in/jonathanfishner); [GitHub](https://github.com/johnnyfish), Jul.–Aug. 2026); Guy Ben-Aharon: 2K LinkedIn followers and approximately 22.8K stars on top pinned repo ([LinkedIn](https://www.linkedin.com/in/guy-ben-aharon); [GitHub](https://github.com/guyb1), Jul.–Aug. 2026) |
| Distribution Signals | Product Hunt daily #7 with 143 points and 154 followers ([Product Hunt](https://www.producthunt.com/products/onecli), Aug. 2026); approximately 3.3K GitHub stars ([GitHub](https://github.com/guyb1), Aug. 2026); 390 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/onecli), Jul. 2026); NanoClaw credential integration ([NanoClaw](https://github.com/nanocoai/nanoclaw/blob/main/CHANGELOG.md), Aug. 2026) |
| Emails | jonathan@onecli.sh, security@onecli.sh ([YC](https://www.ycombinator.com/companies/onecli); [GitHub security policy](https://github.com/onecli/onecli/security)) |
