# Gravy

> AI Agent for your personal finances.

| Field | Value |
|-------|-------|
| Website | https://gravy.finance |
| YC Page | https://www.ycombinator.com/companies/gravy |
| Batch | Spring 2026 |
| Industry | Fintech / Fintech -> Consumer Finance |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Fintech, Consumer, Consumer Finance |
| YC Partner | Andrew Miklas |
| Emails | No public data found |

## The Idea

- **Problem:** Consumers manage finances across fragmented accounts, cards, subscriptions, and inboxes, with current alternatives being budgeting apps like Mint replacements (Monarch, Copilot) that require manual review (gravy.finance landing copy; ledgerwire.lovable.app, 2026).
- **Approach:** Local-first desktop app where AI agents automate financial tasks (rent tracking, subscription monitoring, daily briefings) using user-supplied OpenAI, Anthropic, or local Ollama keys, with data and credentials stored on-device (gravy.finance product page).
- **Differentiation:** Versus Monarch/Copilot (cloud SaaS budgeting dashboards) Gravy runs locally with bring-your-own LLM keys; versus Cleo (chat-only Gen-Z coach) Gravy emphasizes a generative UI tied to Plaid/API/MCP/OAuth account connections (gravy.finance; getfinny.app, 2026).
- **Business Model:** [Inferred]: Likely consumer subscription in line with Copilot ($10.99/mo) and Cleo ($0–$14.99/mo) given comparable AI-PFM positioning (ledgerwire.lovable.app, 2026); no pricing page is published on gravy.finance (verified via WebFetch).
- **TAM/SAM:** Personal finance apps market estimated at ~$165.9B (2025) growing to ~$207.69B (2026) at 25.2% CAGR (Verified Market Research, 2026, via search snippet); narrower PFM tools market estimated at ~$3.03B in 2026 (Market Growth Reports, 2026, via search snippet).
- **GTM / Distribution:** [Inferred]: Direct-to-consumer download via gravy.finance, beginning with Mac with a Windows waitlist (gravy.finance, 2026); no paid acquisition or partnership channel is disclosed publicly.

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond the local-first architecture claim on gravy.finance.
- **Future moat:** [Inferred]: Switching costs from connected Plaid accounts, learned categorizations, and persistent agent automations could accrue per user, but with only 2 founders and no disclosed user base it is unproven (gravy.finance shows "3 connected accounts and 3 automations" only in a demo).
- **Market structure:** [Inferred]: Incumbent PFM apps (Monarch, Copilot, Rocket Money) are cloud-hosted SaaS that monetize aggregated data and recurring subscriptions; a local-first, BYO-LLM model cannibalizes their data and inference economics, creating a structural disincentive to copy (ledgerwire.lovable.app, 2026; gravy.finance product page).
- **Commoditization risk:** [Inferred]: A solo developer can wire Plaid + OpenAI/Anthropic + Electron desktop shell; the technical stack described on gravy.finance (Plaid, MCP, OAuth, multi-LLM) uses commodity APIs.

## Market & Traction

- **Traction signals:**
  - Mac app available for download; Windows on waitlist (gravy.finance, 2026)
  - YC Spring 2026 backing (ycombinator.com/companies/gravy)
  - Demo shows "3 connected accounts and 3 automations" (gravy.finance landing page)
  - Twitter/X: No company handle found; @social_gravy is an unrelated indie band (x.com/social_gravy)
  - No Product Hunt launch found for gravy.finance (the Product Hunt "Gravy" listings refer to an unrelated shopping/trivia product, producthunt.com/products/gravy)
  - No press coverage, funding announcement, user count, or revenue disclosed beyond the YC standard deal (Crunchbase WebFetch returned 403; no funding rounds surfaced in WebSearch for "Gravy" YC)
  - Hiring: company-data field "Hiring: False"
- **Competitors:**
  - Monarch Money ($95.5M raised total, most recent $75M on 2025-05-23 led by Forerunner/FPV/NewView per PitchBook via search snippet; revenue unknown): cloud SaaS PFM with couples/goals focus, not local-first or BYO-LLM (pitchbook.com/profiles/company/267452-92).
  - Copilot Money ($10.99/mo or $69.99/yr; Series A round exists per Crunchbase, amount not retrieved; revenue unknown): iOS-first AI budgeting with proprietary cloud inference, no desktop local-first option (ledgerwire.lovable.app, 2026; crunchbase.com/funding_round/copilot-7808-series-a--40b81265).
  - Cleo (Series C round exists per Crunchbase, amount not retrieved; revenue unknown): conversational chat agent for Gen-Z, free-to-$14.99/mo, no Plaid-driven generative UI or local execution (crunchbase.com/organization/cleo-ai; ledgerwire.lovable.app, 2026).
  - Rocket Money (owned by Rocket Companies, NYSE: RKT; revenue unknown standalone): subscription-cancellation focus rather than agentic CFO (resubs.app, 2026, via search snippet).
  - Origin / Vera / PocketGuard (funding unknown): AI-first cash-flow predictors and money coaches without local-first architecture (useorigin.com, 2026; veramoney.com, 2026).
- **Why now:** [Inferred]: Tool-using LLM agents (Anthropic/OpenAI function calling, MCP) crossed reliability thresholds in 2024-2025, and local inference via Ollama matured enough to run on consumer Macs, enabling a privacy-preserving agentic PFM that was not feasible 24 months ago (gravy.finance feature list lists OpenAI/Anthropic/Ollama and MCP).

## Founders & Team

- **Ali Tabba (Co-Founder & CEO):**
  - Background: LinkedIn headline "Founder (YC P26)"; prior listing was "Stealth Startup," based in San Francisco Bay Area, education at University of Warwick (linkedin.com/in/alitabba/ via search snippet).
  - Twitter/X: No public account found via search.
  - LinkedIn: "Founder (YC P26)" (linkedin.com/in/alitabba/).
  - GitHub: No public repos found via search.
- **Max Church (Co-Founder & CTO):**
  - Background: No public profile data surfaced via WebSearch tying "Max Church" to gravy.finance or San Francisco software roles; YC page lists him as Co-Founder & CTO (ycombinator.com/companies/gravy).
  - Twitter/X: No public account found via search.
  - LinkedIn: No public profile found via search.
  - GitHub: No public repos found via search.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** [Inferred]: Tabba's University of Warwick education and prior Bay Area stealth-startup role (linkedin.com/in/alitabba/) align with a fintech founder profile, but no specific personal-finance, banking, or Plaid-integration domain experience is publicly documented for either founder; no advisors or investors beyond YC are disclosed.

## Key Risks

- **Distribution dependency on Plaid:** Product relies on Plaid for multi-account aggregation (gravy.finance feature list); Plaid pricing changes or denial of consumer-tier access would directly impair core functionality, and no alternative aggregation partner is disclosed.
- **Incumbent competitive pressure:** Monarch ($95.5M raised, PitchBook via search snippet), Cleo (Series C, Crunchbase), and Copilot (Series A, Crunchbase) already own AI-PFM mindshare and Mint-migration share (ledgerwire.lovable.app, 2026), and can add local-data or BYO-key features without restructuring revenue.
- **BYO-LLM-key friction:** Asking consumers to provision OpenAI/Anthropic API keys or install Ollama (gravy.finance product page) is a documented onboarding step that mainstream PFM users (Rocket Money, Monarch audiences) do not perform; no waitlist or activation metrics are public to gauge conversion.
- **Regulatory exposure:** Storing bank credentials and transaction data locally still falls under Gramm-Leach-Bliley / state privacy regimes once Gravy intermediates Plaid OAuth tokens (gravy.finance describes local storage of "emails, credentials, and transactions"); no SOC2, privacy policy, or compliance posture is published.
- **Name disambiguation:** Multiple unrelated entities use "Gravy" (Gravy Analytics, All Gravy, Gravy homebuying, Gravy AI acquired by Hopper 2019, Gravy shopping/trivia on Product Hunt) (crunchbase.com; producthunt.com; allgravy.com), creating SEO/brand-search dilution risk.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Personal finance apps market $207.69B in 2026, 25.2% CAGR (Verified Market Research, 2026, via search snippet) |
| SAM | PFM tools market $3.03B in 2026 (Market Growth Reports, 2026, via search snippet) |
| Traction | Mac app live, Windows waitlist (gravy.finance, 2026); YC Spring 2026 (ycombinator.com/companies/gravy); no users, revenue, or press disclosed |
| Revenue Signal | No public data found (no pricing page on gravy.finance per WebFetch) |
| Founders | Ali Tabba (CEO): University of Warwick, prior stealth startup, SF Bay Area. Max Church (CTO): no public profile data surfaced. |
| Competitors | Monarch Money ($95.5M raised, revenue unknown, cloud SaaS PFM); Copilot Money (Series A, revenue unknown, iOS-first cloud AI budgeting); Cleo (Series C, revenue unknown, Gen-Z chat coach); Rocket Money (owned by Rocket Companies, subscription-cancellation focus); Origin (funding unknown, AI cash-flow predictor) |
| Moat Signals | No public data found |
| Risk Factors | Plaid dependency, incumbent AI-PFM competition, BYO-LLM-key onboarding friction |
| Founder Reach | Ali Tabba: Twitter not found, LinkedIn count not retrievable, GitHub not found. Max Church: No public data found. |
| Distribution Signals | Mac download on gravy.finance (2026); Windows waitlist on gravy.finance (2026); no Product Hunt launch found for gravy.finance |
| Emails | No public data found |

Sources:
- [Gravy company website](https://gravy.finance/)
- [Gravy YC page](https://www.ycombinator.com/companies/gravy)
- [Ali Tabba LinkedIn](https://www.linkedin.com/in/alitabba/)
- [Monarch Money PitchBook profile](https://pitchbook.com/profiles/company/267452-92)
- [Cleo Crunchbase](https://www.crunchbase.com/organization/cleo-ai)
- [Copilot Series A round](https://www.crunchbase.com/funding_round/copilot-7808-series-a--40b81265)
- [Best AI Money Coach Apps 2026 comparison](https://ledgerwire.lovable.app/article/best-ai-money-coach-apps-2026-cleo-monarch-copilot-comparison)
- [Personal Finance Apps Market - Verified Market Research](https://www.verifiedmarketresearch.com/product/personal-finance-apps-market/)
- [Personal Financial Management Tools Market - Market Growth Reports](https://www.marketgrowthreports.com/market-reports/personal-financial-management-tools-market-123014)
