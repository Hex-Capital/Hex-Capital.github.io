# Minicor

> RPA platform for deploying AI into legacy desktop systems

| Field | Value |
|-------|-------|
| Website | https://minicor.com |
| YC Page | https://www.ycombinator.com/companies/minicor |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 7 |
| Location | San Francisco, CA, USA |
| Tags |  |
| YC Partner | Tom Blomfield |
| Emails | faiz@minicor.com, connect@minicor.com |

## The Idea

- **Problem:** AI vendors selling into legacy industries (healthcare, automotive, logistics, financial services) cannot integrate with customers' Windows desktop systems of record because those systems have no APIs, forcing brittle UI clickthroughs (Minicor website; YC page).
- **Approach:** Combines deterministic Python-based automation with AI "reflection" agents that detect UI changes and adapt, exposing each desktop workflow as an API endpoint triggered via MCP or direct call (Minicor website; TechPlanet, 2026).
- **Differentiation:** Versus pure computer-use agents Minicor claims "93-96% click accuracy vs 80-85% for other approaches"; versus traditional RPA (UiPath, Automation Anywhere) the differentiator is self-healing recovery when UIs change rather than script failure (Minicor website; TechPlanet, 2026).
- **Business Model:** No pricing page found on website; [Inferred]: usage/seat-based enterprise contracts given Windows VM hosting, on-prem/Citrix deployment options, and SOC 2/HIPAA positioning (Minicor website).
- **TAM/SAM:** Global RPA software market $3.6B in 2024 growing 14.5% YoY (Gartner via press release, 2024); broader RPA market projected $35.27B in 2026 → $247.34B by 2035 at 24.2% CAGR (GlobeNewswire, Dec 2025).
- **GTM / Distribution:** [Inferred]: Direct enterprise sales to AI vendors needing legacy integrations, evidenced by active hiring of Forward Deployed Engineer ($125K-$200K) and Product Engineer roles (YC page).

## Defensibility

- **Moat today:** SOC 2 Type II and HIPAA compliance plus deployment across on-prem/cloud/Citrix raise integration switching costs once embedded (Minicor website).
- **Future moat:** [Inferred]: Accumulated UI-change recovery telemetry across customer Windows VMs could train better self-healing models; unproven without disclosed dataset size or accuracy benchmarks beyond company-reported 93-96%.
- **Market structure:** [Inferred]: Incumbents like UiPath have brittle script-based architectures and large existing customer bases on legacy products, creating cannibalization friction when shifting to agent-based recovery; no structural lock observed at this stage.
- **Commoditization risk:** Anthropic, OpenAI computer-use APIs plus open-source Skyvern (YC, $2.7M raised, blog post) lower the build barrier for desktop agents; Minicor's edge depends on its accuracy delta and ops layer (video replay, scaling, error logging).

## Market & Traction

- **Traction signals:**
  - "Processing 25,000 patients/day in production" (Minicor website, 2026).
  - SOC 2 Type II and HIPAA certified (Minicor website, 2026).
  - Customer logos displayed on homepage; specific names not extracted (Minicor website).
  - 2 active job postings: Forward Deployed Engineer, Product Engineer (YC page, 2026).
  - LinkedIn post from CEO referencing urgent hiring at "Minicor (YC P26)" (LinkedIn, activity 7455280315461210112).
  - No Product Hunt launch found (Product Hunt search, 2026).
  - Company Twitter/X follower count: No public data found.
  - Discord/Slack community: No public data found.
- **Competitors:**
  - UiPath (public, ~$1.5B ARR FY24, ranked #1 RPA in Gartner Magic Quadrant 2025): legacy script-based RPA without AI-native self-healing recovery (Gartner via processexcellencenetwork, 2025).
  - Automation Anywhere (raised $1B+, revenue unknown publicly): cloud-native RPA adding GenAI agents, broader process discovery suite vs. Minicor's desktop-app focus (improvado, 2026).
  - Microsoft Power Automate (part of Microsoft, revenue unknown standalone): bundled with M365, weaker on non-Microsoft legacy desktop apps like EHRs and Citrix-only systems (Zoho RPA comparison, 2026).
  - Skyvern ($2.7M seed, ~$900K revenue per Extruct AI): YC open-source browser automation, focused on web not Windows desktop apps (Skyvern blog; Extruct AI).
  - Browserbase ($68M total raised, revenue unknown): browser-as-a-service for AI agents, web-only vs. Minicor's Windows/Citrix scope (StartupHub.ai, 2026).
  - TinyFish ($47M total raised, Series A led by ICONIQ, revenue unknown): enterprise web agent platform, web-focused vs. desktop (aiworld.eu; MarkTechPost, Apr 2026).
- **Why now:** [Inferred]: Computer-use models (Anthropic claude-computer-use, OpenAI Operator) crossed accuracy thresholds in 2024-2025 making desktop-agent recovery feasible, and Gartner predicts 40% of enterprise apps will embed task-specific AI agents by 2026 vs. <5% in 2025 (Gartner via search snippet, Aug 2025).

## Founders & Team

- **Faizaan Chishtie (Co-Founder & CEO):**
  - Background: B.A.Sc. Software Engineering, University of Ottawa; prior CEO/Co-Founder of Laminar Run (low-code integration platform); engineering stints at Phoenix (YC W21), Typecast, Secoda; co-founded Homeboard (grew to mid-five-figure ARR); Founder in Residence at ASCENT by McMillan; Next Canada and Antler cohorts (getprog.ai; LinkedIn).
  - Twitter/X: No public account confirmed in search.
  - LinkedIn: "CEO & Co-Founder at Minicor (YC P26)" (linkedin.com/in/fchishtie).
  - GitHub: @FaizChishtie (github.com/FaizChishtie); top repo star count not retrievable from search.
- **Saheed Akinbile (Co-Founder & CTO):**
  - Background: B.A.Sc. Software Engineering with Technology Management & Entrepreneurship option, University of Ottawa (2016-2020); prior engineer at Morgan Stanley (2020-2022, built Java apps cited as saving $30M/year in fees) and Ford; prior CTO/Co-Founder of Laminar; domain expertise in RPA (QuickBooks/Sage/Citrix) and browser automation (saheedakinbile.com; rocketreach; LinkedIn).
  - Twitter/X: No public account confirmed in search.
  - LinkedIn: "CTO & Co-Founder at Minicor (YC P26)" (linkedin.com/in/saheed-akinbile).
  - GitHub: @sakin070, 43 repositories (github.com/sakin070); top repo star count not retrievable.
- **Co-founder relationship:** Met in 2019 in a UX class at University of Ottawa, built a non-profit (Software For Love) together during the pandemic, then co-founded Laminar Run before pivoting/rebranding into Minicor in 2023-2024 (search snippet via getprog.ai; LinkedIn).
- **Founder-market fit:** Both founders previously built Laminar, a low-code integration/data-migration platform for legacy systems, giving direct experience with bespoke legacy-system integration which is the same problem Minicor targets (laminar.run; getprog.ai).

## Key Risks

- **Pivot continuity:** Minicor appears to be a rebrand/pivot from prior product Laminar Run, with laminar.run now redirecting to Minicor branding (laminar.run); traction signals like "25,000 patients/day" cannot be confirmed as current-product vs. carry-over from prior Laminar deployments.
- **Foundation-model commoditization:** Anthropic computer-use, OpenAI Operator, and open-source Skyvern (YC, $2.7M, GitHub repo public) are converging on the same self-healing UI automation primitive, threatening the 93-96% accuracy edge if base models improve (Skyvern blog; competitor scan).
- **Incumbent encroachment:** UiPath and Automation Anywhere both announced agentic RPA features in 2025 (improvado, 2026; G2, 2026), and their existing enterprise contracts in healthcare/financial services could foreclose Minicor's GTM motion.
- **Regulatory/compliance exposure in healthcare:** Processing "25,000 patients/day" implies PHI handling under HIPAA (Minicor website); any breach or audit failure would materially impair the cited customer concentration.
- **Self-reported accuracy benchmark:** The 93-96% click accuracy claim is unbenchmarked against third-party evaluations (Minicor website); buyers may discount until independently verified.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global RPA software market $3.6B in 2024 (Gartner, 2024 press release); broader RPA market projected $35.27B in 2026, 24.2% CAGR to 2035 (GlobeNewswire, Dec 2025) |
| SAM | No public data found |
| Traction | "25,000 patients/day in production" (Minicor website, 2026); SOC 2 Type II + HIPAA certified (Minicor website, 2026); 2 active job openings (YC page, 2026) |
| Revenue Signal | No public data found (no pricing page on Minicor website) |
| Founders | Faizaan Chishtie (CEO): U Ottawa Software Eng, prior CEO Laminar Run, Phoenix YC W21 engineer. Saheed Akinbile (CTO): U Ottawa Software Eng, prior CTO Laminar, ex-Morgan Stanley & Ford engineer |
| Competitors | UiPath (public, ~$1.5B ARR FY24, legacy script RPA without self-healing); Automation Anywhere ($1B+ raised, revenue unknown, broader GenAI RPA suite); Microsoft Power Automate (part of MSFT, bundled with M365); Skyvern ($2.7M seed, ~$900K revenue per Extruct, web-only OSS); Browserbase ($68M raised, revenue unknown, web-only); TinyFish ($47M raised, revenue unknown, enterprise web agents) |
| Moat Signals | SOC 2 Type II + HIPAA compliance (Minicor website); claimed 93-96% click accuracy vs 80-85% baseline (Minicor website) |
| Risk Factors | Pivot from prior product Laminar (traction attribution unclear), foundation-model commoditization, incumbent RPA vendors adding agentic features |
| Founder Reach | Faizaan Chishtie: LinkedIn linkedin.com/in/fchishtie, GitHub @FaizChishtie, follower counts not retrievable. Saheed Akinbile: LinkedIn linkedin.com/in/saheed-akinbile, GitHub @sakin070 (43 repos), follower counts not retrievable |
| Distribution Signals | YC P26 batch (YC page); 2 active job postings on YC (YC page, 2026); LinkedIn hiring post by CEO (LinkedIn activity 7455280315461210112); no Product Hunt launch found |
| Emails | faiz@minicor.com, connect@minicor.com |

Sources:
- [Minicor YC Company Page](https://www.ycombinator.com/companies/minicor)
- [Minicor Website](https://minicor.com)
- [Minicor Launch on YC](https://www.ycombinator.com/launches/Pkq-minicor-self-healing-desktop-automations-that-scale)
- [Faizaan Chishtie LinkedIn](https://www.linkedin.com/in/fchishtie/)
- [Saheed Akinbile LinkedIn](https://www.linkedin.com/in/saheed-akinbile/)
- [Faizaan Chishtie GitHub](https://github.com/FaizChishtie)
- [Saheed Akinbile GitHub](https://github.com/sakin070)
- [Faizaan Chishtie getprog.ai profile](https://www.getprog.ai/profile/31967593)
- [Saheed Akinbile personal site](https://www.saheedakinbile.com/)
- [Laminar Run (prior product)](https://laminar.run/)
- [TechPlanet Minicor profile](https://techplanet.today/post/minicor-bridging-the-gap-between-ai-and-legacy-systems-with-self-healing-desktop-automation)
- [Skyvern $2.7M raise](https://www.skyvern.com/blog/skyvern-we-raised-2-7m-to-fix-browser-automation-open-source/)
- [Skyvern YC page](https://www.ycombinator.com/companies/skyvern)
- [Browserbase funding](https://www.startuphub.ai/startups/browserbase)
- [TinyFish $47M raise](https://www.aiworld.eu/story/tinyfish-raises-47m-to-scale-ai-powered-web-agents)
- [Gartner RPA Market Share 2024](https://www.gartner.com/en/documents/6842834)
- [RPA Market Size 2026-2035](https://www.globenewswire.com/news-release/2025/12/16/3206126/0/en/Robotic-Process-Automation-RPA-Market-Size-Expands-from-USD-35-27-Bn-in-2026-to-USD-247-34-Bn-by-2035-Fueled-by-AI-Powered-Automation-and-Digitalization.html)
- [UiPath competitors analysis](https://improvado.io/blog/uipath-competitors)
