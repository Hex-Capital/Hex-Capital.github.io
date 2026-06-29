# Coasty

> Building the future of knowledge work, RPA and SOPs using computer use

| Field | Value |
|-------|-------|
| Website | http://coasty.ai/ |
| YC Page | https://www.ycombinator.com/companies/coasty |
| Batch | Summer 2026 (YC company page) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Developer Tools, Workflow Automation |
| YC Partner | Brad Flora (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** Enterprises (incl. Fortune 500) are hesitant to deploy AI agents that touch legacy desktop tools and internal systems due to fear of system damage and data leakage, and existing RPA tools like UiPath/Blue Prism/Automation Anywhere break when UIs change (Humans in the Loop interview with Prateek Jannu; coasty.ai feature page).
- **Approach:** A vision-based computer use agent that reads the screen rather than recording clicks, runs in a sandboxed VM per session, self-corrects mid-task when it detects errors, and exposes a `/v1/predict` API for instructions in plain English with JSON outputs (coasty.ai product page).
- **Differentiation:** Versus UiPath/Blue Prism/Automation Anywhere, Coasty claims script-free vision-based adaptation to UI changes (coasty.ai); versus Anthropic Claude Computer Use (72%) and OpenAI Operator (38%), Coasty reports 82% on OSWorld (Coasty blog, 2026).
- **Business Model:** Tiered subscription — Starter $19/mo (200 credits, 1 VM, 3 parallel agents), Plus $50/mo (600 credits, 2 VMs, 6 parallel agents), Unlimited $99/mo (unlimited credits, 2 VMs, 5 concurrent agents) (coasty.ai pricing page).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Developer-led/PLG via self-serve pricing tiers, open-source repo (`coasty-ai/open-computer-use`), Product Hunt launch, and dev.to technical posts authored by co-founder Nitish Kovuru (Product Hunt; GitHub; dev.to).

## Defensibility

- **Moat today:** Benchmark lead — 82% on OSWorld vs. 72% Claude / 38% OpenAI / 22% Anthropic figures cited (Coasty blog, 2026); no proprietary-data or network-effect signals found.
- **Future moat:** [Inferred]: Trajectory data from 100+ step multimodal sessions (referenced on coasty.ai) could compound into a proprietary training corpus, unproven now because customer/usage volume is undisclosed.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — frontier-model labs (Anthropic, OpenAI) ship competing computer-use APIs directly, and the moat depends on staying ahead on a public benchmark.
- **Commoditization risk:** Frontier labs and well-funded infra startups (Browserbase, Browser Use, Skyvern, Anchor) ship overlapping capabilities; OSWorld is a public benchmark any team can target (Firecrawl best-browser-agents review, 2026).

## Market & Traction

- **Traction signals:**
  - #1 on OSWorld benchmark at 82% (Coasty blog, 2026; self-reported).
  - Product Hunt launch dated 19 Feb 2026 with positive comments; rank/upvote count not retrieved (Product Hunt listing).
  - Open-source repo `coasty-ai/open-computer-use` exists (GitHub search result); star count not retrievable (fetch returned 404 at time of research).
  - Featured in "Humans in the Loop" Substack deep-dive interview with Prateek Jannu.
  - 50+ demonstrated sessions available on site (coasty.ai).
  - Twitter @coastyai, LinkedIn /company/coastyai, YouTube @CoastyAI — follower counts not retrievable.
  - Booking flow via cal.com/coasty/15min and a dedicated "coasty-data-call" slot (coasty.ai).
  - Company is not listed as hiring (YC company data).
- **Competitors:**
  - Browserbase ($67.5M total raised; $40M Series B June 2025 at $300M valuation; revenue unknown): managed headless browser infra, not a vision-based desktop agent (Massive blog, 2025).
  - Browser Use (~$17M total seed; revenue unknown): open-source browser agent framework, browser-only vs. Coasty's desktop+browser scope (Firecrawl review, 2026).
  - Kernel ($22M Series A led by Accel; revenue unknown): Browserbase-style managed browser infra (Massive blog, 2025).
  - Anchor Browser ($6M seed; revenue unknown): browser automation for enterprise internal systems, browser-scoped vs. Coasty's desktop reach (Massive blog, 2025).
  - Anthropic Claude Computer Use & OpenAI Operator (incumbent model APIs): direct overlap; Coasty positions on OSWorld accuracy delta (Coasty blog, 2026).
- **Why now:** [Inferred]: Vision-language models crossed a usability threshold for screen-grounded actions in 2024-2025 (Anthropic Computer Use API Oct 2024; OpenAI Operator Jan 2025), making script-free RPA viable.

## Founders & Team

- **Prateek Jannu (Co-founder):**
  - Background: Purdue University; prior Lead Machine Learning Engineer at TruGen AI, ML Researcher at Microsoft, ML Researcher at Purdue; built an auto-grad engine for deep neural networks of 200K+ parameters (LinkedIn /in/prateekjannu; sites.google.com/view/prateekjannu).
  - Twitter/X: @prateekjannu (count not retrievable).
  - LinkedIn: "Wavelogix, Inc." headline per search result (linkedin.com/in/prateekjannu).
  - GitHub: No public handle confirmed.
- **Nitish Kovuru (Co-founder):**
  - Background: Author of technical posts on dev.to (handle nitish_kovuru_76280d3ed4b); originated Coasty after an AI agent deleted a production database on his laptop, motivating sandboxed VM approach (dev.to; Product Hunt).
  - Twitter/X: @llmhubdev (count not retrievable).
  - LinkedIn: linkedin.com/in/nitish-kovuru-2423351b4 (headline not retrievable from search).
  - GitHub: No public handle confirmed; org `coasty-ai` hosts `open-computer-use`.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Jannu's ML research background at Microsoft/Purdue/TruGen aligns with building computer-use agents (LinkedIn); Kovuru's documented production-incident origin story aligns with the sandboxed-VM reliability pitch (dev.to). No notable advisors/investors named beyond YC.

## Key Risks

- **Frontier-model substitution:** Anthropic (Computer Use API) and OpenAI (Operator) ship competing capabilities natively, and Coasty's positioning rests on a benchmark delta (82% vs. 72%/38%) that can close on each new model release (Coasty blog, 2026); no mitigation disclosed beyond reliability claims.
- **Benchmark-vs-production gap:** OSWorld is a 369-task public benchmark; one Coasty blog post itself flags "82% Real, 73% Exploited" framing, implying disputed measurement (Coasty blog, 2026) — paying customers may not see benchmark-grade performance on bespoke workflows.
- **Crowded, well-capitalized adjacent market:** Browserbase ($67.5M), Kernel ($22M Series A), Browser Use (~$17M), Anchor ($6M) are funded ahead of Coasty's pre-seed stage and overlap on browser automation (Massive blog, 2025).
- **Enterprise-trust gap for desktop agents:** Founder interview cites Fortune 500 hesitance toward agents that touch internal systems (Humans in the Loop interview); no enterprise logos, LOIs, or SOC 2 evidence found.
- **Disclosure thinness:** No revenue, paying-customer count, GitHub star count, or social follower counts found in public sources, making traction unverifiable beyond the self-reported benchmark and PH launch.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | OSWorld 82% self-reported #1 (Coasty blog, 2026); Product Hunt launch 19 Feb 2026 (Product Hunt); open-source repo `coasty-ai/open-computer-use` (GitHub); Substack deep-dive interview (Humans in the Loop) |
| Revenue Signal | Starter $19/mo, Plus $50/mo, Unlimited $99/mo (coasty.ai pricing page) |
| Founders | Prateek Jannu (Co-founder): Purdue, ex-Microsoft ML Researcher, ex-TruGen AI Lead MLE. Nitish Kovuru (Co-founder): technical writer on dev.to, sandboxed-VM thesis from prod-DB incident. |
| Competitors | Browserbase ($67.5M raised, revenue unknown, managed browser infra); Browser Use (~$17M raised, revenue unknown, OSS browser agent); Kernel ($22M Series A, revenue unknown, browser infra); Anchor Browser ($6M seed, revenue unknown, enterprise browser automation); Anthropic Claude Computer Use & OpenAI Operator (incumbent model APIs) |
| Moat Signals | 82% OSWorld score lead vs. 72% Claude / 38% OpenAI (Coasty blog, 2026, self-reported) |
| Risk Factors | Frontier-model substitution, benchmark-vs-production gap, crowded well-funded adjacent market |
| Founder Reach | Prateek Jannu: Twitter @prateekjannu (count not retrievable), LinkedIn /in/prateekjannu (count not retrievable), GitHub not found. Nitish Kovuru: Twitter @llmhubdev (count not retrievable), LinkedIn /in/nitish-kovuru-2423351b4 (count not retrievable), GitHub not found. |
| Distribution Signals | Product Hunt launch 19 Feb 2026 (Product Hunt); open-source repo `coasty-ai/open-computer-use` (GitHub); dev.to technical posts by co-founder; cal.com booking links on site |
| Emails | No public data found |

Sources:
- [Coasty YC company page](https://www.ycombinator.com/companies/coasty)
- [Coasty website](http://coasty.ai/)
- [Coasty OSWorld blog](https://coasty.ai/blog/osworld-benchmark-2026-ai-computer-use-agents-ranked)
- [Coasty on Product Hunt](https://www.producthunt.com/products/coasty)
- [Humans in the Loop interview with Prateek Jannu](https://thehumansintheloop.substack.com/p/computer-use-coasty-with-prateek-jannu)
- [Prateek Jannu LinkedIn](https://www.linkedin.com/in/prateekjannu/)
- [Prateek Jannu personal site](https://sites.google.com/view/prateekjannu/home)
- [Nitish Kovuru dev.to post](https://dev.to/nitish_kovuru_76280d3ed4b/built-an-ai-agent-that-wrecked-my-prod-database-heres-how-i-fixed-that-p03)
- [coasty-ai/open-computer-use GitHub](https://github.com/coasty-ai/open-computer-use)
- [Browser infrastructure funding (Massive blog, 2025)](https://www.joinmassive.com/blog/browser-infrastructure-companies-funding)
- [Firecrawl: 11 Best AI Browser Agents 2026](https://www.firecrawl.dev/blog/best-browser-agents)
