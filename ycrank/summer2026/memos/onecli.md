# OneCLI

> The Identity Gateway for AI Agents

| Field | Value |
|-------|-------|
| Website | https://onecli.sh |
| YC Page | https://www.ycombinator.com/companies/onecli |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Security, Open Source, Infrastructure, AI |
| YC Partner | Brad Flora (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** AI agents currently receive raw API keys and OAuth tokens directly, so a prompt-injected or compromised agent can exfiltrate credentials the developer team never intended to expose (onecli.sh product page; Infisical blog on prompt-injection-driven leakage, 2026).
- **Approach:** OneCLI is an HTTPS proxy in Rust that hands agents scoped placeholder tokens; on outbound request it matches host/path patterns, decrypts AES-256-GCM secrets, and injects real credentials into headers or query params so the agent never sees the key (agent-wars.com, Mar 14 2026; onecli.sh/docs).
- **Differentiation:** Vs. HashiCorp Vault — agent-centric UX with zero-config Docker install rather than infra-team-oriented dynamic secrets (Hacker News commentary, Mar 2026); vs. Infisical Agent Vault — Rust-based proxy with 50+ pre-built app integrations (Gmail, GitHub, Jira, Slack) as advertised (company description); vs. Fly.io tokenizer and BuzzFeed sso-proxy — packaged as a product with dashboard rather than internal tool (Hacker News commentary via search snippet, Mar 2026).
- **Business Model:** Free tier supports up to 2 agents indefinitely with no credit card, plus a managed cloud option; self-hosted is Apache 2.0 (onecli.sh pricing page). [Inferred]: Paid tier likely priced per-agent or per-seat above the 2-agent free ceiling, though tier pricing is not publicly listed.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment (agent-credential-gateway); adjacent secrets-management market referenced by Infisical/GitGuardian comparisons for 2026 but no size figure surfaced in searches.
- **GTM / Distribution:** Open-source repo with bundled dashboard as top-of-funnel — 2.5K+ GitHub stars and 300K+ downloads (company description) — plus embedding partnerships where OneCLI is the default credential layer inside other agent frameworks (NanoClaw v2 adoption, nanoclaw.dev blog; Bitwarden Agent Access SDK integration, LinkedIn post by Jonathan Fishner).

## Defensibility

- **Moat today:** Framework-integration lock-in — NanoClaw v2 ships OneCLI as its default agent vault (nanoclaw.dev/blog/nanoclaw-agent-vault) and Bitwarden integrated the Agent Access SDK with OneCLI (LinkedIn, Fishner), creating dependencies inside downstream products.
- **Future moat:** [Inferred]: Audit-log and policy dataset from multi-framework agent traffic could power anomaly detection unavailable to single-vendor vaults; unproven because no telemetry/dataset product exists yet in public materials.
- **Market structure:** [Inferred]: HashiCorp Vault and cloud KMS providers (AWS/GCP/Azure) sell to platform/security teams, so an agent-developer-facing free Docker gateway conflicts with their enterprise sales motion and pricing anchor — but Infisical Agent Vault (infisical.com blog, 2026) already occupies the same open-source niche, weakening this barrier.
- **Commoditization risk:** Hacker News commenters noted the auth-proxy pattern predates the agent era with prior art in Fly.io tokenizer and BuzzFeed sso-proxy (HN thread, Mar 2026 via search snippet); Infisical shipped a comparable Agent Vault (infisical.com blog, 2026), indicating multiple parties can and have built the same primitive.

## Market & Traction

- **Traction signals:**
  - GitHub: 2.4K stars listed on onecli.sh (product page); company description cites 2.5K+ stars and 300K+ downloads.
  - HN Show HN launch: 160 points, 50 comments on Mar 12 2026 (agent-wars.com summary, Mar 14 2026 via search snippet).
  - Partnerships: NanoClaw v2 adopted OneCLI as default agent vault (nanoclaw.dev blog); Bitwarden Agent Access SDK integration (Fishner LinkedIn post, activity 7450115494780575744).
  - Press coverage: Agent Wars (Mar 14 2026), Top AI Product (Mar 14 2026), Founderland, Aitoolnet, DEV Community posts by Fishner.
  - Endorsements: onecli.sh homepage cites Andrej Karpathy, Guillermo Rauch (Vercel CEO), Kyle Daigle (GitHub COO) as social validation.
  - Social: Company X/LinkedIn/Discord linked from onecli.sh; follower counts not retrievable via search.
  - Prior product (ChartDB, same founders): 20K+ GitHub stars (Fishner LinkedIn); pre-dates OneCLI and not current-product traction.
- **Competitors:**
  - Infisical (Series A raised ~$16M per PitchBook prior filings, revenue unknown): direct overlap — released Infisical Agent Vault as an open-source credential proxy for AI agents in 2026 (infisical.com blog).
  - HashiCorp Vault (parent HashiCorp acquired by IBM for $6.4B, Feb 2024, revenue unknown at product level): enterprise-focused dynamic secrets and PKI; lacks agent-native UX (wetheflywheel.com comparison, 2026).
  - Doppler (~$27M raised per Crunchbase prior filings, revenue unknown): SaaS env-var and API-key sync for developer environments (infisical.com blog, 2026); not an inline proxy.
  - Akeyless ($80M+ raised per prior Crunchbase filings, revenue unknown): SaaS "vaultless" DFC-based secret manager (wetheflywheel.com, 2026); enterprise sales motion vs. OneCLI's dev free tier.
  - OpenBao (Linux Foundation project, no funding): MPL-2.0 Vault fork API-compatible with Vault (infisical.com blog, 2026); infra-team-oriented rather than agent-oriented.
- **Why now:** [Inferred]: Growth of autonomous agent frameworks (OpenClaw, NanoClaw, OpenHands, n8n listed as compatible on onecli.sh/docs) plus documented prompt-injection exfiltration risk (Infisical 2026 blog) drove a 12-month window in which credential-scoping specifically for agents became a distinct product category.

## Founders & Team

- **Jonathan Haim Fishner (Co-founder & CEO):**
  - Background: Attended The College of Management Academic Studies (LinkedIn); co-founded ChartDB, which reached 20K+ GitHub stars (LinkedIn headline; dev.to/chartdb "From Zero to 1.5K GitHub Stars in 3 Days"); based Tel Aviv per LinkedIn, GitHub profile lists New York.
  - Twitter/X: @jonathanfishner (x.com/jonathanfishner); follower count not retrievable via search.
  - LinkedIn: "Co-Founder & CEO at OneCLI" (linkedin.com/in/jonathanfishner/).
  - GitHub: @johnnyfish (github.com/johnnyfish); top repo association is ChartDB (20K+ stars per LinkedIn).
- **Guy Ben-Aharon (Co-founder):**
  - Background: LinkedIn lists Aqua Security (linkedin.com/in/guy-ben-aharon/); prior product-building tenure at Wix cited in founder interview snippet; co-founded ChartDB with Fishner.
  - Twitter/X: @gbenaharon (x.com/gbenaharon); follower count not retrievable via search.
  - LinkedIn: "Aqua Security" (linkedin.com/in/guy-ben-aharon/); a second profile linkedin.com/in/guybenaharon/ lists "Freelance" — same-name disambiguation risk noted.
  - GitHub: No public handle confirmed via search.
- **Co-founder relationship:** Fishner and Ben-Aharon previously co-founded ChartDB together (dev.to/chartdb article; Fishner LinkedIn), a database-diagram open-source tool that hit HN front page and 1.5K stars in 3 days (Oct 2024) and grew to 20K+ stars.
- **Founder-market fit:** Ben-Aharon's Aqua Security tenure (LinkedIn) supplies cloud-security/credential-handling domain background, and the pair's ChartDB launch demonstrated open-source developer-tool distribution execution relevant to OneCLI's OSS-led motion (dev.to/chartdb, 2024). No advisors, board members, or named investors surfaced in public search.

## Key Risks

- **Direct incumbent overlap:** Infisical shipped an open-source Agent Vault positioned identically as a credential proxy for AI agents in 2026 (infisical.com blog, 2026) and already commands the OSS secrets-management mindshare; OneCLI's differentiation of Rust implementation and 50+ integrations is not a defensible wedge in public materials.
- **Commoditized core primitive:** HN commenters flagged the auth-proxy pattern as prior art in Fly.io tokenizer and BuzzFeed sso-proxy (HN thread, Mar 2026 via search snippet); no cited technical barrier prevents cloud KMS providers or Vault from bolting on agent UX.
- **Concentrated design-partner dependence:** Public traction narrative leans on NanoClaw v2 default-adoption (nanoclaw.dev blog) and Bitwarden SDK integration (Fishner LinkedIn); if NanoClaw stalls or switches, a large share of the "default credential layer" positioning is affected.
- **Name-collision risk:** "OneCLI" collides with Lenovo XClarity Essentials OneCLI (pubs.lenovo.com/lxce-onecli) and unrelated onecli.com domain, potentially diluting search/SEO reach.
- **Monetization uncertainty:** Free tier covers up to 2 agents indefinitely (onecli.sh pricing) but paid pricing tiers, contract sizes, and any paying-customer counts are not disclosed in public materials.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 2.5K+ GitHub stars, 300K+ downloads (company description); HN Show HN 160 points, 50 comments Mar 12 2026 (agent-wars.com, Mar 14 2026); NanoClaw v2 default agent vault (nanoclaw.dev blog); Bitwarden Agent Access SDK integration (Fishner LinkedIn); endorsements from Karpathy, Rauch, Daigle cited on onecli.sh |
| Revenue Signal | Free tier up to 2 agents, no credit card, plus managed cloud option (onecli.sh); Apache 2.0 self-hosted (agent-wars.com, Mar 14 2026); paid pricing not disclosed |
| Founders | Jonathan Haim Fishner (Co-founder & CEO): ChartDB co-founder (20K+ stars), College of Management Academic Studies. Guy Ben-Aharon (Co-founder): Aqua Security, prior Wix product experience, ChartDB co-founder. |
| Competitors | Infisical (~$16M raised prior filings, revenue unknown, direct Agent Vault overlap); HashiCorp Vault (IBM acquired Feb 2024 $6.4B, enterprise dynamic secrets); Doppler (~$27M raised prior filings, revenue unknown, env-var sync SaaS); Akeyless ($80M+ raised prior filings, revenue unknown, vaultless SaaS); OpenBao (no funding, Vault fork) |
| Moat Signals | NanoClaw v2 default adoption (nanoclaw.dev), Bitwarden SDK integration (Fishner LinkedIn), 2.5K+ GitHub stars and 300K+ downloads (company description) |
| Risk Factors | Direct Infisical Agent Vault overlap, commoditized proxy primitive, NanoClaw dependence |
| Founder Reach | Jonathan Fishner: X @jonathanfishner (count not retrievable), LinkedIn present, GitHub @johnnyfish (ChartDB 20K+ stars). Guy Ben-Aharon: X @gbenaharon (count not retrievable), LinkedIn present, GitHub not confirmed. |
| Distribution Signals | HN Show HN 160 points Mar 12 2026 (agent-wars.com); DEV Community posts by Fishner; press coverage in Agent Wars, Top AI Product, Founderland, Aitoolnet (all Mar 2026) |
| Emails | No public data found |

Sources:
- [OneCLI website](https://onecli.sh/)
- [OneCLI YC page](https://www.ycombinator.com/companies/onecli)
- [GitHub - onecli/onecli](https://github.com/onecli/onecli)
- [Agent Wars: OneCLI credential vault (Mar 14 2026)](https://agent-wars.com/news/2026-03-14-onecli-open-source-credential-vault-and-gateway-for-ai-agents-built-in-rust)
- [Top AI Product: OneCLI security gateway (Mar 14 2026)](https://topaiproduct.com/2026/03/14/onecli-puts-a-security-gateway-between-your-ai-agents-and-your-api-keys/)
- [NanoClaw Adopts OneCLI Agent Vault](https://nanoclaw.dev/blog/nanoclaw-agent-vault/)
- [Jonathan Fishner LinkedIn](https://www.linkedin.com/in/jonathanfishner/)
- [Guy Ben-Aharon LinkedIn](https://www.linkedin.com/in/guy-ben-aharon/)
- [ChartDB: From Zero to 1.5K GitHub Stars in 3 Days](https://dev.to/chartdb/chartdb-from-zero-to-15k-github-stars-in-3-days-heres-how-50ja)
- [Jonathan Fishner GitHub](https://github.com/johnnyfish)
- [Infisical: Best Secret Management Tools 2026](https://infisical.com/blog/best-secret-management-tools)
- [HashiCorp Vault Alternatives 2026](https://wetheflywheel.com/en/comparisons/hashicorp-vault-alternatives/)
- [Bitwarden + OneCLI integration (LinkedIn)](https://www.linkedin.com/posts/jonathanfishner_bitwarden-integrates-with-onecli-agent-vault-activity-7450115494780575744--QKG)
