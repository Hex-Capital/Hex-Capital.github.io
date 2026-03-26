# Runtime

> Guardrails and visibility to enable your team to ship with coding agents securely

| Field | Value |
|-------|-------|
| Website | https://www.runtm.com/ |
| YC Page | https://www.ycombinator.com/companies/runtime |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

**Problem:** Engineering leaders rolling out AI coding agents (Claude Code, Codex, Gemini CLI) lack visibility into what those agents are doing, cannot set boundaries, and cannot safely let non-engineers use them (YC company page). Today, organizations either restrict coding agent access to engineers only — limiting productivity — or allow broad access with no guardrails, risking production breakage and security incidents. [Inferred]: The current alternative is ad hoc internal tooling, manual code review bottlenecks, or simply not letting non-engineers use agents.

**Approach:** Runtime provides sandboxed VM environments per session, session-level observability, and configurable guardrails so that PMs, designers, marketers, and ops staff can use coding agents without breaking production (YC company page). Specific mechanisms include: isolated VMs per session, network allowlists, per-repo access controls, deployment gates, system instructions (org-wide rules), runtime secret injection, cost tracking per user/session, activity heatmaps, spend limits, and real-time multiplayer sessions (runtm.com). The product supports Claude Code, OpenAI Codex, and Gemini CLI (runtm.com). Users can import/export from GitHub, deploy with one click, and run background agents via "Mission Control" (runtm.com).

**Differentiation:** Unlike pure sandbox providers (E2B, Daytona) that provide infrastructure primitives for developers, Runtime bundles governance, observability, and deployment into a visual workspace designed for non-engineer end users (runtm.com). Unlike AI observability platforms (Galileo, Langfuse) that monitor model outputs, Runtime focuses specifically on coding agent session control — what code is being written, by whom, and whether it meets org-defined rules before deployment (runtm.com). Unlike Lakera or Guardrails AI that screen LLM inputs/outputs for safety, Runtime operates at the environment and deployment layer. The open-source control plane repo implements lifecycle primitives (init, run, validate, deploy, destroy) and deploys to Fly.io Machines with OTLP-based observability (GitHub: runtm-ai/runtm-coding-agent-runtime-control-plane).

**Business Model:** Public pricing page lists four tiers: Free ($0 — core features with Claude Code, 3 parallel sessions), Builder ($29/mo — unlocks all supported agents), Teams ($99/seat/mo), and Enterprise (custom pricing) (runtm.com/pricing). [Inferred]: Primary revenue path is per-seat SaaS targeting engineering teams at mid-market and enterprise companies.

**TAM/SAM:**
- AI Agent Market: $7.38B (2025) projected to $103.6B by 2032, CAGR 45.3% (MarketsandMarkets via search snippet)
- AI Governance Market: $227–340M (2024–2025) projected to $4.83B by 2034, CAGR 35–45% (MarketsandMarkets via search snippet)
- Application Software Market: projected $780B by 2030, 13% CAGR (Goldman Sachs via search snippet)
- [Inferred]: The serviceable market is the intersection of AI coding agent users and enterprise governance buyers — a nascent segment without standalone TAM estimates.

**GTM / Distribution:** The company states it is "live with fast-growing YC scaleups" (YC company page). The product offers a free tier requiring no credit card (runtm.com). An open-source repo is available (AGPLv3 server, Apache-2.0 CLI/sandbox) with a PyPI package (`runtm`) and a Discord community (runtm.com footer). [Inferred]: Primary distribution is bottom-up product-led growth via the free tier and open-source components, with expansion into Teams/Enterprise seats through YC network referrals.

## Defensibility

- **Switching costs:** Once an organization configures system instructions, per-repo access controls, deployment gates, and secret management within Runtime, migrating to another platform requires reconfiguring all governance policies (runtm.com feature list). [Inferred]: These switching costs increase with organizational scale but are modest at early adoption.
- **Data advantage:** Session-level observability and cost tracking generate proprietary usage data per organization (runtm.com). [Inferred]: This data could inform org-specific recommendations but does not yet constitute a cross-customer network effect.
- **Open source:** The AGPLv3 server license means competitors cannot freely incorporate the server code into proprietary offerings without open-sourcing their own (GitHub: runtm-ai/runtm).

**Market structure:** [Inferred]: Large cloud providers (AWS, GCP, Azure) and IDE vendors (GitHub/Microsoft, JetBrains) could build coding agent governance, but their incentives are misaligned — they profit from maximizing agent usage and compute consumption, not from imposing guardrails that reduce usage. Coding agent vendors (Anthropic, OpenAI, Google) face a similar conflict: governance that restricts agent actions could reduce API call volume. This creates a structural opening for a neutral third-party governance layer. No structural barrier identified beyond this incentive misalignment.

**Commoditization risk:** E2B ($32M raised) and Daytona ($30.7M raised) already provide sandboxed environments and could add governance features (E2B blog, July 2025; PR Newswire, Feb 2026). IDE-integrated coding agents (GitHub Copilot, Cursor) could add native org-level controls. [Inferred]: The sandbox infrastructure layer is commoditizing rapidly; the governance and non-engineer UX layer is less commoditized but has low technical barriers.

## Market & Traction

**Traction signals:**
- GitHub: 64 stars, 3 forks on main repo (GitHub: runtm-ai/runtm, as of research date)
- PyPI downloads: 7,074 total across 16 versions (v0.1.0 through v0.2.15); peak single-day: 1,366 downloads (January 21, 2026); recent daily: 8–61/day (pepy.tech/projects/runtm)
- Show HN post: 4 points, 1 comment (Hacker News, ~early January 2026)
- Twitter/X: @gustrigos (founder personal account) — 187 followers (x.com/gustrigos)
- LinkedIn: company page at linkedin.com/company/runtm/ — follower count not retrievable
- Discord: community at discord.gg/JUuCkUKc — member count not retrievable
- Product Hunt: no listing found
- Job postings: 0 open positions (YC job board)
- No press coverage found in named publications
- No disclosed revenue, user counts, or customer logos

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Runtime |
|---|---|---|
| **E2B** | ~$32M (Series A $21M, July 2025, led by Insight Partners) (E2B blog) | Pure sandbox infrastructure as API; targets developers building agents, not end-user governance; 15M sandboxes/month (E2B blog, Mar 2025) |
| **Daytona** | $30.7M (Series A $24M, Feb 2026, led by FirstMark) (PR Newswire) | Sub-90ms environment creation; infrastructure-first with Datadog/Figma as strategic investors; $1M+ forward ARR (AlleyWatch, Feb 2026) |
| **Galileo** | $68.1M (Series B $45M, Oct 2024, led by Scale Venture Partners) (PR Newswire) | AI observability and evaluation platform; broader scope beyond coding agents; 6 Fortune 50 customers, 834% revenue growth in 2024 (PR Newswire) |
| **Northflank** | $24.9M (Series A $22.3M, Nov 2024, led by Bain Capital Ventures) (VentureBeat) | Full PaaS with AI sandbox layer; established cloud platform since 2019 |
| **Lakera** | ~$30M (acquired by Check Point, Nov 2025) (TechCrunch, July 2024) | Real-time LLM input/output security firewall; $5.7M revenue (2025, Latka via search snippet); now part of Check Point |

**Why now:** [Inferred]: The enabling catalyst is the rapid proliferation of autonomous coding agents (Claude Code launched 2025, OpenAI Codex launched 2025, Gemini CLI launched 2025) that can write and execute code with minimal human supervision. As organizations move from individual developer use of AI copilots to org-wide deployment of autonomous coding agents, the governance gap becomes acute — there is no existing tooling category for "coding agent governance." The shift from AI-assisted coding (suggestions) to AI-autonomous coding (execution) crossed a practical threshold in 2025, creating demand for a control layer that did not previously have a use case.

## Founders & Team

**Gustavo "Gus" Trigos** — Sole founder & CEO
- **Education:** Bachelor's in Finance; M.S. in Applied Statistics, Hult International Business School (gustrigos.com)
- **Background:** Self-taught programmer (C++ in high school); quantitative analyst at BlackRock's Quantitative Investment Group, focused on ML/AI for derivatives trading; recipient of 2021 BlackRock Founders Scholar Award (gustrigos.com)
- **Prior startup:** Founded Mentum (YC S21) — initially a fintech investment API for Latin America, pivoted to AI-powered procurement/supply chain automation. Raised $4.2M seed led by Google's Gradient Ventures with participation from Global Founders Capital, TwentyTwo VC, Soma Capital, Y Combinator, and co-founders of Plaid and Jeeves (TechCrunch, May 2022). Mentum was acquired by Nuvocargo on October 29, 2025 (Nuvocargo blog; FreightWaves)
- **Twitter/X:** @gustrigos — 187 followers (x.com/gustrigos)
- **LinkedIn:** linkedin.com/in/gustavoatrigos — 500+ connections (LinkedIn)
- **GitHub:** github.com/Gustrigos — 28 followers; notable project: "Eigen-Portfolio" (unsupervised ML/PCA on Dow Jones) (GitHub)

**Co-founder relationship:** Only one founder is listed on the YC page. The team size is 3 (YC company page), suggesting two additional team members whose identities are not publicly disclosed.

**Founder-market fit:** Trigos is a second-time YC founder (S21, Spring 2026) with a prior exit (Mentum acquired by Nuvocargo, Oct 2025) and experience at BlackRock in quantitative/ML roles (gustrigos.com; TechCrunch, May 2022). His prior company Mentum pivoted through multiple product iterations and raised from tier-1 investors including Google's Gradient Ventures. [Inferred]: His experience building AI-powered enterprise tools and navigating a pivot-to-exit at Mentum provides relevant operational experience for Runtime's enterprise GTM, though his background is in finance/supply-chain rather than developer tools or infrastructure specifically.

## Key Risks

**Name collision risk:** "Runtime" is a generic computer science term. Web searches return overwhelming noise from unrelated results (runtime errors, runtime environments, other companies). This complicates SEO, brand discovery, and due diligence. The company uses "runtm" as its domain and package name, partially mitigating this.

**Well-funded sandbox incumbents:** E2B ($32M) and Daytona ($30.7M) have raised 60–65x more capital, have established customer bases (E2B: 15M sandboxes/month, 88% of Fortune 100 signed up; Daytona: $1M+ forward ARR), and could add governance features as a natural extension (E2B blog, July 2025; PR Newswire, Feb 2026; AlleyWatch, Feb 2026). Runtime's differentiation rests on the governance layer, which has low technical barriers.

**Platform dependency on coding agent vendors:** Runtime's value depends on continued proliferation and openness of Claude Code, Codex, and Gemini CLI (runtm.com). If these vendors build native org-level governance (e.g., Anthropic adding team-level controls to Claude Code), Runtime's core value proposition diminishes. The multi-agent support partially mitigates single-vendor risk.

**Solo founder with small team:** While small teams are normal at pre-seed, only one founder is publicly listed (YC company page). The 3-person team must simultaneously build infrastructure, governance features, and go-to-market across three different coding agent integrations. The company has 0 open job postings (YC job board), and hiring is listed as false.

**Fly.io infrastructure dependency:** The control plane deploys to Fly.io Machines (GitHub: runtm-ai/runtm-coding-agent-runtime-control-plane). Enterprise customers with specific cloud requirements (AWS, GCP, Azure) may require multi-cloud support not currently evidenced.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI Agent Market: $7.38B in 2025, projected $103.6B by 2032, 45.3% CAGR (MarketsandMarkets via search snippet); AI Governance Market: $227–340M in 2024–2025, projected $4.83B by 2034 (MarketsandMarkets via search snippet) |
| SAM | No public data found |
| Traction | 64 GitHub stars (GitHub: runtm-ai/runtm); 7,074 PyPI downloads across 16 versions (pepy.tech); Show HN: 4 points (Hacker News, ~Jan 2026); @gustrigos: 187 Twitter followers (x.com) |
| Revenue Signal | Free ($0), Builder ($29/mo), Teams ($99/seat/mo), Enterprise (custom) (runtm.com/pricing) |
| Founders | Gus Trigos (Sole Founder & CEO): BlackRock quant analyst, founded Mentum (YC S21, $4.2M seed, acquired by Nuvocargo Oct 2025) |
| Competitors | E2B (~$32M raised, revenue unknown, sandbox API infrastructure) (E2B blog); Daytona ($30.7M raised, $1M+ forward ARR, sub-90ms sandbox creation) (PR Newswire, Feb 2026); Galileo ($68.1M raised, 834% revenue growth 2024, AI observability) (PR Newswire, Oct 2024); Northflank ($24.9M raised, revenue unknown, full PaaS) (VentureBeat, Nov 2024) |
| Moat Signals | AGPLv3 server license (GitHub: runtm-ai/runtm); org-level governance config as switching cost (runtm.com) |
| Risk Factors | Well-funded sandbox incumbents (E2B, Daytona), platform dependency on coding agent vendors, name collision / SEO difficulty |
| Founder Reach | Gus Trigos: Twitter 187 followers (x.com/gustrigos), LinkedIn 500+ (LinkedIn), GitHub 28 followers (github.com/Gustrigos) |
| Distribution Signals | Free tier with no credit card (runtm.com); open-source repo with 64 stars (GitHub); PyPI package with 7,074 downloads (pepy.tech); Discord community (runtm.com) |
| Emails | No public data found |
