# Rindler

> Middleware making websites readable for AI agents

| Field | Value |
|-------|-------|
| Website | https://rindler.ai |
| YC Page | https://www.ycombinator.com/companies/rindler |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | Boston, MA, USA |
| Tags | Infrastructure |
| YC Partner | Ankit Gupta |
| Emails | No public data found |

## The Idea

- **Problem:** AI agents cannot reliably operate websites that lack APIs — they must scrape raw HTML and break on logins, 2FA, and bot detection (YC page, rindler.ai homepage).
- **Approach:** Rindler exposes an MCP server with tools including `extract_content`, `dispatch_action`, `synthesize_schema`, `start_session`, and OAuth 2.0 PKCE session handling that convert any website into a deterministic API (rindler.ai homepage).
- **Differentiation:** Browserbase/Stagehand ships browser infrastructure and an SDK for developers to script (browserbase.com); Anon provides an authentication SDK for agents (TechCrunch, Apr 2024); Composio provides 1,000+ pre-built toolkits for API-having services (composio.dev, Jul 2025) — Rindler's stated wedge is agent-agnostic MCP middleware for sites without APIs, including auth/2FA/bot-detection handling (YC page).
- **Business Model:** [Inferred]: Consumption or per-session pricing to agent builders and operators; no pricing page was visible at rindler.ai at time of research.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; Browserbase (adjacent) cites 1,000+ customer companies and 20,000+ developers as of Jun 2025 (Built In SF, Jun 2025).
- **GTM / Distribution:** [Inferred]: Developer-led distribution via the open MCP standard to any MCP-compatible agent, plus direct sales to "operators" whose teams live inside portals (rindler.ai homepage; YC description).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond an MCP-standard integration surface (rindler.ai homepage).
- **Future moat:** [Inferred]: Accumulated site-specific schemas, selector maintenance, and auth/anti-bot workarounds per website could form a data/operational moat as coverage grows; unproven because no coverage counts or customer counts are public.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — the core capability (headless browser + LLM-driven action + MCP wrapper) is being built by multiple funded competitors (Browserbase, Anon, Composio).
- **Commoditization risk:** Browserbase ($40M Series B at $300M valuation, Jun 2025, Built In SF), Anon ($13M raised, TechCrunch/Tracxn), and Composio ($79.6M raised, $1M+ ARR, PRNewswire Jul 2025) can extend into the same MCP-for-any-website surface; open-source Stagehand (MIT license, GitHub) lowers the build cost for new entrants.

## Market & Traction

- **Traction signals:**
  - Company X/Twitter account @RindlerAI exists (x.com/RindlerAI); follower count not retrievable.
  - Company LinkedIn/press coverage: No public data found.
  - Product Hunt launch: No public data found.
  - YC batch acceptance: Summer 2026 (YC page).
  - Founding year: 2025 (YC page).
  - Job postings: No public data found (company hiring flag = False per YC data).
  - Revenue/customers: No public data found.
- **Competitors:**
  - Browserbase ($66M+ total raised incl. $40M Series B at ~$300M valuation Jun 2025, revenue unknown; 1,000+ customers, 20K developers per Built In SF Jun 2025): ships browser-infrastructure + Stagehand SDK for developer-scripted automation vs. Rindler's MCP-native "deterministic API" wrapper.
  - Anon ($13M raised, $8M seed Nov 2024, revenue unknown, TechCrunch/Tracxn): SDK focused on auth/2FA/CAPTCHA/IP proxying for agents vs. Rindler bundling auth plus extraction/actions/schema.
  - Composio ($79.6M raised, $1M+ ARR, 100K+ developers, PRNewswire Jul 2025): 1,000+ pre-built toolkits for API-having SaaS vs. Rindler's focus on sites without APIs.
  - MintMCP, TrueFoundry AI Gateway, Obot, Bifrost (funding/revenue unknown, truefoundry.com/mintmcp.com): MCP gateway/registry infrastructure vs. Rindler's per-site middleware.
- **Why now:** [Inferred]: MCP standardization by Anthropic/OpenAI/Google/Microsoft in 2024–2025 (truefoundry.com/mintmcp.com) plus YC S26's "Software for Agents"/"Dynamic Software Interfaces" thesis (Forbes, Feb 2026; TheNextWeb) created a distribution surface for agent-first middleware.

## Founders & Team

- **Michael Serrano (CEO, Co-founder):**
  - Background: MEng at MIT CSAIL focused on "infrastructure of the future web"; graduated MIT (LinkedIn michael-y-serrano; Michael Serrano LinkedIn post activity-7476291624436662272).
  - Twitter/X: @m_y_serrano (YC page); count not retrievable.
  - LinkedIn: "MIT Computer Science and Artificial Intelligence Laboratory (CSAIL)" (linkedin.com/in/michael-y-serrano).
  - GitHub: No public repos found.
- **Arthur De Los Santos (Co-founder, CTO):**
  - Background: MIT CS & AI alum, admitted MEng candidate; Advanced Undergraduate Researcher at MIT CSAIL; Autonomous Robotics Engineering Intern at Telexistence (LinkedIn arthurdelossantos; search snippet).
  - Twitter/X: @_arthurdls_ (YC page; x.com/_arthurdls_); count not retrievable.
  - LinkedIn: "Founder @ Rindler (YC S26)" (linkedin.com/in/arthurdelossantos).
  - GitHub: No public repos found.
- **Co-founder relationship:** Both graduated from MIT in 2025 and were classmates ("Arthur De Los Santos and I just graduated…" — Michael Serrano LinkedIn post, activity-7476291624436662272).
- **Founder-market fit:** [Inferred]: MIT CSAIL background plus Serrano's stated focus on "infrastructure of the future web" and De Los Santos's applied ML/robotics work align with building browser-automation middleware (LinkedIn profiles; search snippets); YC Group Partner Ankit Gupta assigned (YC page); no named investors or advisors beyond YC found.

## Key Risks

- **Well-funded direct competition:** Browserbase ($40M Series B at $300M valuation, Jun 2025, Built In SF) and Composio ($79.6M raised, $1M+ ARR, PRNewswire Jul 2025) already serve the "let agents use the web" wedge with SDKs, integrations, and thousands of paying developers; Rindler enters against distribution incumbents.
- **Site-maintenance treadmill:** The YC description explicitly promises "robust maintenance when sites change" (YC page) — every target site is a moving surface (DOM, auth flows, bot detection) that must be continuously repaired, a scaling constraint for a two-person team; no automation or coverage figures are public.
- **Legal/ToS exposure on scraping and auth:** Automating logins, 2FA, and bot-detection bypass on third-party sites creates ToS and CFAA-style legal risk that Anon and Browserbase have addressed via user-permissioned auth frameworks (TechCrunch, Apr 2024); Rindler's public materials do not disclose a specific legal/consent posture.
- **Standard commoditization:** Rindler builds on the open MCP standard (YC page), meaning MCP-gateway players (MintMCP, TrueFoundry, Obot, Bifrost per truefoundry.com/mintmcp.com) can add per-site middleware, and open-source Stagehand (MIT license, GitHub) lowers the floor for new entrants.
- **No visible revenue or customers:** No pricing page, customer logos, testimonials, waitlist counts, or press coverage were found at time of research (rindler.ai; web search).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Company X account @RindlerAI exists (x.com/RindlerAI, count not retrievable); YC S26 accepted (YC page); founded 2025 (YC page) |
| Revenue Signal | No public data found |
| Founders | Michael Serrano (CEO): MIT CSAIL MEng focused on future-web infrastructure. Arthur De Los Santos (CTO): MIT CS & AI, MIT CSAIL researcher, ex-Telexistence robotics intern. |
| Competitors | Browserbase ($66M+ raised incl. $40M Series B Jun 2025 at ~$300M valuation, revenue unknown, browser infrastructure + Stagehand SDK); Anon ($13M raised, revenue unknown, agent auth SDK); Composio ($79.6M raised, $1M+ ARR, 1,000+ prebuilt toolkits for API-having services); MintMCP/TrueFoundry/Obot/Bifrost (funding unknown, MCP gateway infrastructure) |
| Moat Signals | No public data found |
| Risk Factors | Well-funded direct competition (Browserbase/Composio/Anon), site-maintenance scaling burden, ToS/legal exposure on auth-bypassing automation |
| Founder Reach | Michael Serrano: Twitter @m_y_serrano (count not retrievable), LinkedIn michael-y-serrano, GitHub not found. Arthur De Los Santos: Twitter @_arthurdls_ (count not retrievable), LinkedIn arthurdelossantos, GitHub not found. |
| Distribution Signals | Company X account @RindlerAI (x.com/RindlerAI); no Product Hunt, Chrome Web Store, or press coverage found |
| Emails | No public data found |

Sources:
- [Rindler on Y Combinator](https://www.ycombinator.com/companies/rindler)
- [Rindler homepage](https://rindler.ai/)
- [Arthur De Los Santos LinkedIn](https://www.linkedin.com/in/arthurdelossantos/)
- [Michael Serrano LinkedIn](https://www.linkedin.com/in/michael-y-serrano/)
- [Michael Serrano LinkedIn post on YC/graduation](https://www.linkedin.com/posts/michael-y-serrano_arthur-de-los-santos-and-i-just-graduated-activity-7476291624436662272-Kn-z)
- [Rindler on X](https://x.com/RindlerAI)
- [Browserbase Series B — Built In SF, Jun 2025](https://www.builtinsf.com/articles/browserbase-announces-40m-series-b-funding-20250618)
- [Browserbase $40M raise — Upstarts Media](https://www.upstartsmedia.com/p/browserbase-raises-40m-and-launches-director)
- [Stagehand GitHub](https://github.com/browserbase/stagehand)
- [Anon $8M seed — TechCrunch, Apr 2024](https://techcrunch.com/2024/04/24/anon-is-building-an-automated-authentication-layer-for-the-gen-ai-age/)
- [Anon on Tracxn](https://tracxn.com/d/companies/anon/__tQLrNbg80zRRF7smInFfPVRHW1oSQmcZPPOKmyY2ebU)
- [Composio $29M Series A — PRNewswire](https://www.prnewswire.com/news-releases/composio-raises-29m-to-solve-ais-learning-problem-building-skills-that-actually-improve-over-time-302510684.html)
- [Composio $25M — SiliconANGLE, Jul 2025](https://siliconangle.com/2025/07/22/composio-raises-25m-funding-ease-ai-agent-development/)
- [YC S26 RFS / Software for Agents — Forbes, Feb 2026](https://www.forbes.com/sites/josipamajic/2026/02/04/ycs-2026-roadmap-signals-a-shift-from-human-augmented-to-ai-native-startups/)
- [MCP gateway landscape — MintMCP](https://www.mintmcp.com/blog/gateways-ai-startups-with-mcp)
- [MCP alternatives — TrueFoundry](https://www.truefoundry.com/blog/best-mint-mcp-alternatives-for-ai-agent-infrastructure)
