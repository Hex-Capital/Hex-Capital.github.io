# Tilion

> Super fast, unblockable browser infra for agents

| Field | Value |
|-------|-------|
| Website | https://tilion.com |
| YC Page | https://www.ycombinator.com/companies/tilion |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/tilion)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Infrastructure |
| YC Partner | Christopher Golda ([YC](https://www.ycombinator.com/companies/tilion)) |
| Emails | team@tilion.dev ([subscription terms](https://github.com/tiliondev/fortress/blob/main/SUBSCRIPTION-TERMS.md)), arman@tilion.dev ([founder comment](https://github.com/tiliondev/fortress/discussions/31)) |

## The Idea

- **Problem:** Developers running browser agents encounter anti-bot challenges that interrupt data collection and workflows using ordinary browser automation or fetch requests ([Tilion blog, Aug 2026](https://tilion.com/blog/stealth-is-a-speed-problem)).
- **Approach:** Fortress modifies browser fingerprints inside Chromium’s C++, generates coherent device identities, and connects existing Playwright/Puppeteer code through Chrome DevTools Protocol ([Fortress documentation](https://github.com/tiliondev/fortress)).
- **Differentiation:** Tilion documents native Chromium patches versus puppeteer-extra-stealth’s JavaScript injection and Camoufox’s Firefox engine, with changing identities for browser fleets ([Fortress comparison](https://github.com/tiliondev/fortress#how-fortress-compares)).
- **Business Model:** Fortress offers free development use and a $2,000/month organization subscription with three-month terms, while an August announcement lists hosted consumption pricing of $0.03/browser-hour ([license](https://github.com/tiliondev/fortress/blob/main/LICENSE), [terms](https://github.com/tiliondev/fortress/blob/main/SUBSCRIPTION-TERMS.md), [Tilion, Aug 2026](https://tilion.com/blog/stealth-is-a-speed-problem)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes GitHub, pip, npm, Docker, and MCP integrations, with call booking and waitlist links on the company homepage ([Fortress](https://github.com/tiliondev/fortress), [Tilion](https://tilion.com)).

## Defensibility

- **Moat today:** Public technical assets include native fingerprint patches and per-session identity generation, alongside 779 GitHub stars; these establish implementation and adoption signals rather than exclusivity ([GitHub, accessed Oct 27, 2026](https://github.com/tiliondev/fortress)).
- **Future moat:** [Inferred]: Accumulated detection reports could support faster maintenance, but no proprietary feedback dataset is disclosed and detection reports are requested publicly ([security policy](https://github.com/tiliondev/fortress/blob/main/SECURITY.md)).
- **Market structure:** [Inferred]: No structural barrier to incumbent entry is established, because Tilion itself identifies earlier browser-engine patching implementations ([Fortress documentation](https://github.com/tiliondev/fortress#how-fortress-compares)).
- **Commoditization risk:** Camoufox, Multilogin, GoLogin, and Dolphin also patch browser engines, and earlier Fortress BSD-licensed material remains available for forks ([comparison](https://github.com/tiliondev/fortress#how-fortress-compares), [license](https://github.com/tiliondev/fortress/blob/main/LICENSE)).

## Market & Traction

- **Traction signals:**
  - Fortress: 100,000+ installs and use by engineers at 170+ companies, company-reported rather than disclosed paid contracts ([Fortress website, accessed Oct 27, 2026](https://fortress.tilion.com)).
  - Fortress repository: 779 stars and 52 forks ([GitHub, accessed Oct 27, 2026](https://github.com/tiliondev/fortress)).
  - Hosted browser benchmark: 156 ms median lifecycle latency and 99/100 successful runs on October 22 ([BrowserArena, Oct 2026](https://www.browserarena.ai/provider/tilion)).
  - Company claims millions of agent operations daily, without a customer or workload breakdown ([YC, accessed Oct 27, 2026](https://www.ycombinator.com/companies/tilion)).
  - Company LinkedIn: 105 followers; headquarters listed as Menlo Park, differing from YC’s San Francisco listing ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/tiliondev/)).
  - Reported $500,000 YC investment and coverage in ET Edge Insights’ “Brands Speak” section ([ET Edge Insights, Oct 15, 2026](https://etedge-insights.com/brands-speak/from-jammu-to-silicon-valley-4-college-friends-raise-half-a-million-dollars-for-ai-startup-tilion/)).
  - Active YC job postings: 0 ([YC, accessed Oct 27, 2026](https://www.ycombinator.com/companies/tilion/jobs)).
- **Competitors:**
  - **Browserbase** ($67.5M raised, current revenue unknown): managed browsers plus Stagehand and Director automation; latest disclosed round was $40M Series B led by Notable Capital in June 2025 ([Sourcery founder interview](https://www.sourcery.vc/p/breaking-browserbase-raises-40m-series), [Browserbase announcement](https://www.browserbase.com/blog/series-b-and-beyond)).
  - **Kernel** ($22M combined seed/Series A raised, revenue unknown): emphasizes persistent state, credential handling, human intervention, and agent authentication; Accel led the financing announced October 15, 2025, without separate round amounts ([Kernel](https://www.kernel.sh/blog/series-a-announcement)).
  - **Browser Use** ($17M disclosed financing, revenue unknown): supplies an agent framework that converts interfaces into structured text, alongside browser infrastructure; $17M seed led by Felicis announced March 22, 2025 ([Browser Use](https://browser-use.com/posts/seed-round)).
- **Why now:** [Inferred]: Cloudflare’s September 2026 default blocking of Agent and Training crawlers on ad-supported pages of newly onboarded domains increases access friction for browser automation ([Cloudflare, Jul 2026](https://blog.cloudflare.com/content-independence-day-ai-options/)).

## Founders & Team

- **Arman Luthra (CEO):**
  - Background: Wabash alumnus; previously American Enterprise Institute and Superfluid DX; earlier product Scribia reportedly reached 5,000 installs in two weeks, separately from Tilion ([YC profile](https://www.ycombinator.com/founders/arman-luthra), [ET Edge Insights, Oct 2026](https://etedge-insights.com/brands-speak/from-jammu-to-silicon-valley-4-college-friends-raise-half-a-million-dollars-for-ai-startup-tilion/)).
  - Twitter/X: @armanluthra_; count not retrievable ([YC profile](https://www.ycombinator.com/founders/arman-luthra)).
  - LinkedIn: Profile found; headline not retrievable; indexed count 970 followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/armanluthra)).
  - GitHub: @Arman-Luthra; pinned personal project aftr has 24 stars ([GitHub, accessed Oct 27, 2026](https://github.com/Arman-Luthra)).
- **Md Shahrier Islam Arham (CTO):**
  - Background: Wabash education; previously The Talks Private Limited BD; Fortress release maintainer ([YC profile](https://www.ycombinator.com/founders/md-shahrier-islam-arham), [GitHub releases](https://github.com/tiliondev/fortress/releases)).
  - Twitter/X: @shahrier_arham; count not retrievable ([YC profile](https://www.ycombinator.com/founders/md-shahrier-islam-arham)).
  - LinkedIn: Profile found; headline not retrievable; indexed count 989 followers ([LinkedIn, via search snippet](https://www.linkedin.com/in/shahrierislamarham)).
  - GitHub: @arham766; pinned fortress_dev fork has 1 star ([GitHub, accessed Oct 27, 2026](https://github.com/arham766)).
- **Kazi Fardinul Hoque (Co-founder):**
  - Background: Wabash alumnus; previously AWS and VacHub AI ([YC profile](https://www.ycombinator.com/founders/kazi-fardinul-hoque)).
  - Twitter/X: No public account found.
  - LinkedIn: Profile describes work on agentic AI and LLM inference; headline not retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/kazi-fardinul-hoque)).
  - GitHub: No public repos found.
- **Abdul Basit Tonmoy (CPO):**
  - Background: Wabash education; previously Skop Intelligence; co-author of multimodal embedding research ([YC profile](https://www.ycombinator.com/founders/abdul-basit-tonmoy), [arXiv, Jul 2026](https://arxiv.org/abs/2607.18666)).
  - Twitter/X: @basittonmoy; count not retrievable ([YC profile](https://www.ycombinator.com/founders/abdul-basit-tonmoy)).
  - LinkedIn: Profile found; headline not retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/abdul-basit-tonmoy)).
  - GitHub: @abtonmoy; pinned shared fusion-embedding repository has 13 stars ([GitHub, accessed Oct 27, 2026](https://github.com/abtonmoy)).
- **Co-founder relationship:** The founders met in college and have jointly authored research ([ET Edge Insights, Oct 2026](https://etedge-insights.com/brands-speak/from-jammu-to-silicon-valley-4-college-friends-raise-half-a-million-dollars-for-ai-startup-tilion/), [arXiv](https://arxiv.org/abs/2607.18666)).
- **Founder-market fit:** Documented experience includes browser-engine development, AWS employment, and shared AI research; YC is an investor ([Fortress releases](https://github.com/tiliondev/fortress/releases), [Hoque’s YC profile](https://www.ycombinator.com/founders/kazi-fardinul-hoque), [arXiv](https://arxiv.org/abs/2607.18666), [Tilion](https://tilion.com)).

## Key Risks

- **Technical coverage:** Company testing achieved 86.4% successful loads across 92 protected sites, so access was not universal; reproducible test tooling is published ([Fortress benchmark](https://github.com/tiliondev/fortress#results)).
- **IP reputation dependency:** Self-hosted Fortress requires separately supplied network egress where datacenter IP reputation triggers blocking ([Fortress documentation](https://github.com/tiliondev/fortress#the-four-layers-of-bot-detection)).
- **Licensing transition:** September 30, 2026 introduced source-available production restrictions, while prior BSD releases retain their permissions ([license](https://github.com/tiliondev/fortress/blob/main/LICENSE)).
- **Availability inconsistency:** August’s announcement says hosted access is open, while the current homepage offers a waitlist; present onboarding availability is unclear ([August announcement](https://tilion.com/blog/stealth-is-a-speed-problem), [homepage](https://tilion.com)).
- **Name ambiguity:** Searches return unrelated Tilion Brewing Company records, which were excluded ([Goodhue County filing, Jun 2026, via search snippet](https://goodhuecountymn.gov/files/agenda_items/lowerpotency_hemp_edible_retail_registration_application_tilion_brewing_company_llc_17337.pdf)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Fortress: 100K+ installs, engineers at 170+ companies ([Fortress, Oct 2026](https://fortress.tilion.com)); millions of daily operations claimed ([YC, Oct 2026](https://www.ycombinator.com/companies/tilion)) |
| Revenue Signal | $2,000/month organization license ([subscription terms, Oct 2026](https://github.com/tiliondev/fortress/blob/main/SUBSCRIPTION-TERMS.md)); hosted $0.03/browser-hour announced ([Tilion, Aug 2026](https://tilion.com/blog/stealth-is-a-speed-problem)) |
| Founders | Luthra, CEO: Wabash, AEI; Arham, CTO: Wabash, Fortress maintainer; Hoque: Wabash, AWS; Tonmoy, CPO: Wabash, multimodal research ([YC profiles](https://www.ycombinator.com/companies/tilion), [arXiv](https://arxiv.org/abs/2607.18666)) |
| Competitors | Browserbase ($67.5M raised, revenue unknown, Stagehand/Director; [Sourcery](https://www.sourcery.vc/p/breaking-browserbase-raises-40m-series)); Kernel ($22M raised, revenue unknown, authentication; [Kernel](https://www.kernel.sh/blog/series-a-announcement)); Browser Use ($17M disclosed, revenue unknown, agent framework; [Browser Use](https://browser-use.com/posts/seed-round)) |
| Moat Signals | Native browser patches, generated identities, 779 repository stars ([GitHub, Oct 2026](https://github.com/tiliondev/fortress)) |
| Risk Factors | Incomplete protected-site coverage, external egress dependency, legacy BSD forks ([Fortress documentation](https://github.com/tiliondev/fortress), [license](https://github.com/tiliondev/fortress/blob/main/LICENSE)) |
| Founder Reach | Indexed LinkedIn followers: Luthra 970, Arham 989, Hoque 542, Tonmoy 2K ([Luthra](https://www.linkedin.com/in/armanluthra), [Arham](https://www.linkedin.com/in/shahrierislamarham), [Hoque](https://www.linkedin.com/in/kazi-fardinul-hoque), [Tonmoy](https://www.linkedin.com/in/abdul-basit-tonmoy), via search snippets) |
| Distribution Signals | GitHub: 779 stars, 52 forks ([GitHub, Oct 2026](https://github.com/tiliondev/fortress)); LinkedIn: 105 followers ([LinkedIn, Oct 2026](https://www.linkedin.com/company/tiliondev/)) |
| Emails | team@tilion.dev ([terms](https://github.com/tiliondev/fortress/blob/main/SUBSCRIPTION-TERMS.md)); arman@tilion.dev ([founder comment](https://github.com/tiliondev/fortress/discussions/31)) |
