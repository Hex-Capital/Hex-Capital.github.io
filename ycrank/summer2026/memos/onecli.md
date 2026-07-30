# OneCLI

> The Identity Gateway for AI Agents

| Field | Value |
|-------|-------|
| Website | https://onecli.sh |
| YC Page | https://www.ycombinator.com/companies/onecli |
| Batch | Summer 2026 ([Y Combinator](https://www.ycombinator.com/companies/onecli)) |
| Industry | B2B / B2B -> Security |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Security, Open Source, Infrastructure |
| YC Partner | Brad Flora ([Y Combinator](https://www.ycombinator.com/companies/onecli)) |
| Emails | jonathan@onecli.sh ([Y Combinator](https://www.ycombinator.com/companies/onecli)); privacy@chartdb.io ([OneCLI Terms](https://onecli.sh/terms)) |

## The Idea

- **Problem:** Teams deploying coding and autonomous agents currently expose API keys through environment files or custom proxies, allowing prompt injection, compromised dependencies, logs, or commits to leak credentials ([Y Combinator](https://www.ycombinator.com/companies/onecli)).
- **Approach:** OneCLI routes agent traffic through an HTTPS gateway that matches the host and path, checks policy, replaces a placeholder with the decrypted credential, and forwards the request while keeping the credential outside the agent process ([OneCLI documentation](https://onecli.sh/docs/how-it-works)).
- **Differentiation:** Unlike 1Password and HashiCorp Vault workflows that deliver credentials to the requesting workload, OneCLI says it injects credentials at the network layer and applies policy to each outbound request ([Y Combinator](https://www.ycombinator.com/companies/onecli)).
- **Business Model:** Free includes three users, three agents, and 500 monthly integration calls per user; Team costs $199/month for 20 agents, Scale costs $499/month for 50 agents, managed VPC deployment costs $1,499/month, and Enterprise is custom ([OneCLI pricing](https://onecli.sh/pricing), Jul 2026).
- **TAM/SAM:** MarketsandMarkets estimates the agentic-AI security market at $1.65B in 2026, reaching $13.52B in 2032 at a 42.0% CAGR, while no public OneCLI-specific SAM estimate was found ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/agentic-ai-security-market-97017233.html), 2026).
- **GTM / Distribution:** Distribution combines an Apache-2.0 repository, a Hacker News launch, NanoClaw bundling, a free cloud tier, and founder outreach to DevOps and DevSecOps leaders ([GitHub](https://github.com/onecli/onecli); [Hacker News](https://news.ycombinator.com/item?id=47353558); [Y Combinator](https://www.ycombinator.com/companies/onecli)).

## Defensibility

- **Moat today:** Current adoption signals comprise 2.9K GitHub stars, 170 forks, 320K+ claimed downloads, and selection as NanoClaw’s default credential layer ([GitHub](https://github.com/onecli/onecli), Jul 2026; [Y Combinator](https://www.ycombinator.com/companies/onecli), Jul 2026).
- **Future moat:** [Inferred]: More embedded agent integrations, accumulated organization policies, and audit history could create switching costs, but public retention and OneCLI revenue data are unavailable.
- **Market structure:** [Inferred]: No structural barrier is identified because secrets-management and non-human-identity vendors already sell through the same security teams.
- **Commoditization risk:** The core repository is Apache-2.0 licensed, and Infisical’s MIT-licensed Agent Vault already implements a similar HTTP-proxy and credential-injection architecture ([OneCLI GitHub](https://github.com/onecli/onecli); [Infisical](https://infisical.com/blog/agent-vault-the-open-source-credential-proxy-and-vault-for-agents)).

## Market & Traction

- **Traction signals:**
  - 320K+ downloads and default credential-layer status in NanoClaw, as reported by the company’s YC launch ([Y Combinator](https://www.ycombinator.com/companies/onecli), Jul 2026).
  - 2.9K GitHub stars and 170 forks ([GitHub](https://github.com/onecli/onecli), Jul 2026).
  - 4,523 weekly downloads for the official Node SDK ([npm](https://www.npmjs.com/package/%40onecli-sh/sdk), Jul 2026).
  - 160 Hacker News points and 50 comments on the March 2026 Show HN launch ([Hacker News story statistics](https://news.social-protocols.org/stats?id=47353558), Jul 2026).
  - 317 LinkedIn followers and two listed employees ([LinkedIn](https://www.linkedin.com/company/onecli), Jul 2026).
  - Zero open YC job listings ([Y Combinator](https://www.ycombinator.com/companies/onecli), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Oasis Security ($195M raised, revenue unknown): discovers and governs NHIs and agent access across cloud, SaaS, and on-premises systems, versus OneCLI’s inline agent gateway ([Oasis](https://www.oasis.security/newsroom), Apr 2026).
  - Astrix Security ($85M raised, revenue unknown): discovers agents, service accounts, tokens, and secrets across existing enterprise environments and provisions scoped access ([Astrix funding announcement](https://www.prnewswire.com/news-releases/astrix-security-raises-45m-series-b-to-redefine-identity-security-for-the-ai-era-302327052.html), Dec 2024).
  - Entro Security ($24M raised, revenue unknown): emphasizes discovery, classification, observability, ownership, and decommissioning across the NHI lifecycle ([Business Wire](https://www.businesswire.com/news/home/20240618621007/en/Entro-Security-Announces-%2418M-Series-A-Round-to-Enhance-Non-Human-Identity-Lifecycle-Management), Jun 2024).
  - Infisical ($18.8M in announced seed and Series A financing, revenue unknown): its Agent Vault uses the same outbound HTTP credential-proxy pattern while connecting to Infisical’s existing secrets platform ([Infisical Series A](https://infisical.com/blog/series-a), Jun 2025; [Infisical seed](https://infisical.com/blog/infisical-seed-round), Jul 2023).
- **Why now:** [Inferred]: The 2025–26 transition from chat interfaces to agents executing code and external API calls created a credential boundary problem, which the founders say prompted OneCLI’s creation in January 2026 ([ChartDB](https://chartdb.io/blog/introducing-onecli), May 2026).

## Founders & Team

- **Jonathan Fishner (CEO):**
  - Background: Previously Principal Security Architect at Axis Security, four years at Fiverr, and founder of IDF Unit 8200’s first Big Data team; no public education data was found ([Y Combinator](https://www.ycombinator.com/companies/onecli)).
  - Twitter/X: [@jonathanfishner](https://x.com/jonathanfishner), count not retrievable.
  - LinkedIn: “Co-Founder & CEO at OneCLI - building the Identity Gateway for AI Agents” ([LinkedIn](https://www.linkedin.com/in/jonathanfishner)).
  - GitHub: [@johnnyfish](https://github.com/johnnyfish), with ChartDB at 22.7K stars and OneCLI at 2.9K stars ([GitHub](https://github.com/johnnyfish), Jul 2026).
- **Guy Ben-Aharon (CTO):**
  - Background: BSc Computer Science from Ben-Gurion University; first engineer at Argon Security before its Aqua acquisition, followed by Aqua Security, Wix, and IDF Unit 8200 ([Y Combinator](https://www.ycombinator.com/companies/onecli)).
  - Twitter/X: [@GuyBenAharon](https://x.com/GuyBenAharon), count not retrievable.
  - LinkedIn: “Co-Founder & CTO at OneCLI - building the Identity Gateway for AI agents” ([LinkedIn](https://www.linkedin.com/in/guy-ben-aharon)).
  - GitHub: [@guyb1](https://github.com/guyb1), with ChartDB at 22.7K stars and OneCLI at 2.9K stars ([GitHub](https://github.com/guyb1), Jul 2026).
- **Co-founder relationship:** Fishner and Ben-Aharon previously built ChartDB together, which reached 22.5K stars and more than $10K MRR before their OneCLI pivot; these are prior-product metrics, not OneCLI traction ([Jonathan Fishner on LinkedIn](https://www.linkedin.com/in/jonathanfishner), Jul 2026).
- **Founder-market fit:** Their documented experience spans ZTNA, network security, supply-chain security, IDF Unit 8200, and two jointly developed open-source infrastructure products ([Y Combinator](https://www.ycombinator.com/companies/onecli); [GitHub](https://github.com/chartdb/chartdb)).

## Key Risks

- **Proxy bypass:** Traffic that avoids the configured proxy cannot be intercepted; OneCLI recommends Docker or Kubernetes network policies, or host-level firewall rules, to force proxy use ([OneCLI](https://onecli.sh/blog/credential-vault-ai-agent-security), Mar 2026).
- **Gateway-host compromise:** Root access to the gateway host can expose credentials while decrypted in memory, with HSM and trusted-execution-environment support described as a longer-term mitigation ([OneCLI](https://onecli.sh/blog/credential-vault-ai-agent-security), Mar 2026).
- **Permitted-action misuse:** Credential isolation does not prevent damaging calls that existing policy permits, although the current product offers blocking, rate limits, approval requirements, and per-project scoping ([OneCLI](https://onecli.sh/), Jul 2026).
- **Competitive convergence:** Infisical launched an open-source HTTP credential proxy in April 2026, while funded NHI vendors Oasis, Astrix, and Entro have expanded into agent access controls ([Infisical](https://infisical.com/blog/agent-vault-the-open-source-credential-proxy-and-vault-for-agents); [Oasis](https://www.oasis.security/agentic-access-management)).
- **Name collision:** Lenovo has long used “OneCLI” for its XClarity server-management utility, producing unrelated search results; the startup distinguishes itself through the onecli.sh domain and AI-agent positioning ([Lenovo Press](https://lenovopress.com/lp1260.pdf)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.65B in 2026, forecast to reach $13.52B by 2032 at a 42.0% CAGR ([MarketsandMarkets](https://www.marketsandmarkets.com/Market-Reports/agentic-ai-security-market-97017233.html), 2026) |
| SAM | No public data found |
| Traction | 320K+ downloads and NanoClaw default integration ([Y Combinator](https://www.ycombinator.com/companies/onecli), Jul 2026); 2.9K GitHub stars and 170 forks ([GitHub](https://github.com/onecli/onecli), Jul 2026); 4,523 weekly SDK downloads ([npm](https://www.npmjs.com/package/%40onecli-sh/sdk), Jul 2026) |
| Revenue Signal | $0/month Free, $199/month Team, $499/month Scale, and $1,499/month managed VPC deployment ([OneCLI pricing](https://onecli.sh/pricing), Jul 2026) |
| Founders | Jonathan Fishner (CEO): Axis Security, Fiverr, IDF Unit 8200; Guy Ben-Aharon (CTO): Argon Security, Aqua Security, Wix, IDF Unit 8200, BSc CS ([Y Combinator](https://www.ycombinator.com/companies/onecli)) |
| Competitors | Oasis Security ($195M raised, revenue unknown, enterprise NHI governance) ([Oasis](https://www.oasis.security/newsroom)); Astrix ($85M raised, revenue unknown, cross-environment NHI discovery) ([PR Newswire](https://www.prnewswire.com/news-releases/astrix-security-raises-45m-series-b-to-redefine-identity-security-for-the-ai-era-302327052.html)); Entro ($24M raised, revenue unknown, NHI lifecycle management) ([Business Wire](https://www.businesswire.com/news/home/20240618621007/en/Entro-Security-Announces-%2418M-Series-A-Round-to-Enhance-Non-Human-Identity-Lifecycle-Management)); Infisical ($18.8M announced, revenue unknown, competing HTTP credential proxy) ([Infisical](https://infisical.com/blog/series-a)) |
| Moat Signals | 2.9K GitHub stars, 170 forks, 320K+ claimed downloads, and NanoClaw default integration ([GitHub](https://github.com/onecli/onecli); [Y Combinator](https://www.ycombinator.com/companies/onecli), Jul 2026) |
| Risk Factors | Proxy bypass and gateway-host compromise ([OneCLI](https://onecli.sh/blog/credential-vault-ai-agent-security), Mar 2026); competing proxy architecture ([Infisical](https://infisical.com/blog/agent-vault-the-open-source-credential-proxy-and-vault-for-agents), Apr 2026); Lenovo name collision ([Lenovo Press](https://lenovopress.com/lp1260.pdf)) |
| Founder Reach | Jonathan: X count not retrievable, 2K LinkedIn followers, ChartDB 22.7K GitHub stars ([LinkedIn](https://www.linkedin.com/in/jonathanfishner); [GitHub](https://github.com/johnnyfish)); Guy: X count not retrievable, 2K LinkedIn followers, ChartDB 22.7K GitHub stars ([LinkedIn](https://www.linkedin.com/in/guy-ben-aharon); [GitHub](https://github.com/guyb1)) |
| Distribution Signals | Show HN reached 160 points and 50 comments ([Hacker News statistics](https://news.social-protocols.org/stats?id=47353558), Mar 2026); LinkedIn has 317 followers ([LinkedIn](https://www.linkedin.com/company/onecli), Jul 2026); NanoClaw uses OneCLI by default ([Y Combinator](https://www.ycombinator.com/companies/onecli), Jul 2026) |
| Emails | jonathan@onecli.sh ([Y Combinator](https://www.ycombinator.com/companies/onecli)); privacy@chartdb.io ([OneCLI Terms](https://onecli.sh/terms)) |
