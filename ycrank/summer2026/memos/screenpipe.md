# screenpipe

> AI powered by everything you've seen, said or heard

| Field | Value |
|-------|-------|
| Website | https://screenpipe.com |
| YC Page | https://www.ycombinator.com/companies/screenpipe |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, B2B, Enterprise, Enterprise Software |
| YC Partner | Gustaf Alstromer ([Y Combinator](https://www.ycombinator.com/companies/screenpipe), Aug 2026) |
| Emails | louis@screenpi.pe ([screenpipe terms](https://screenpipe.com/terms), Jul 2026), support@screenpi.pe ([refund policy](https://screenpipe.com/refund), Jun 2026) |

## The Idea

- **Problem:** Knowledge workers and teams lose decisions, viewed information, meeting context, and undocumented workflows across disconnected applications, while agents receive only prompts and explicitly connected data ([Y Combinator](https://www.ycombinator.com/companies/screenpipe), Aug 2026).
- **Approach:** screenpipe captures event-triggered screenshots, accessibility data, OCR-fallback text, system and microphone audio, and user-interface events, stores them locally in SQLite, and exposes the resulting history through search, an API, MCP, and scheduled “pipes” ([GitHub](https://github.com/screenpipe/screenpipe), Aug 2026).
- **Differentiation:** Unlike meeting-only Granola and Otter, Windows-only Microsoft Recall, and discontinued Rewind/Limitless, screenpipe captures full-day screen and audio data across macOS, Windows, and Linux and provides local storage, model choice, an API, and programmable agents ([screenpipe about](https://screenpipe.com/about), Aug 2026).
- **Business Model:** A free tier leads to Basic at $21/month billed $250 annually, Business at $42/seat/month billed $500 annually, and an enterprise tier with on-premises storage, SSO/SAML, MDM, and device controls ([screenpipe pricing](https://screenpipe.com/pricing), Jul 2026).
- **TAM/SAM:** Global AI-productivity tools were estimated at $11.2 billion in 2025 with a 14.5% CAGR through 2033, while AI meeting assistants were estimated at $3.47 billion with a 25.8% CAGR ([Grand View Research—productivity](https://www.grandviewresearch.com/industry-analysis/ai-productivity-tools-market-report), 2026; [Grand View Research—meetings](https://www.grandviewresearch.com/industry-analysis/ai-meeting-assistant-market-report), 2026).
- **GTM / Distribution:** The company uses a free cross-platform product, its source-available GitHub project, integrations, founder-led social distribution, and enterprise hiring; it reported that its February 2025 subscriptions were acquired organically without paid marketing ([fundraising update](https://screenpipe.com/blog/screenpipe-i-3-fundraising), Feb 2025; [YC jobs](https://www.ycombinator.com/companies/screenpipe), Aug 2026).

## Defensibility

- **Moat today:** The repository has 20.9K stars, 2.1K forks, and 12,176 commits, while the implementation spans cross-platform capture, accessibility extraction, transcription, local search, encryption, and agent permissions ([GitHub](https://github.com/screenpipe/screenpipe), Aug 2026).
- **Future moat:** [Inferred]: Accumulated work histories, organization-specific SOPs, integrations, and agent configurations could create switching costs, but local storage and exportability mean this is not yet a demonstrated data lock-in.
- **Market structure:** No structural barrier is identified because Microsoft already distributes local screen-history search through Windows Recall, although Recall currently targets supported Copilot+ PCs rather than screenpipe’s cross-platform screen-and-audio workflow ([Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/recall/), 2025).
- **Commoditization risk:** Microsoft can bundle screen recall into Windows, meeting platforms can extend into persistent context, and screenpipe itself builds on available components including OS capture APIs, SQLite, Whisper, OCR, and MCP ([screenpipe about](https://screenpipe.com/about), Aug 2026).

## Market & Traction

- **Traction signals:**
  - 300K users claimed by the founder’s GitHub profile ([GitHub](https://github.com/louis030195), Aug 2026).
  - 20.9K GitHub stars and 2.1K forks ([GitHub](https://github.com/screenpipe/screenpipe), Aug 2026).
  - 202 paid subscribers, $3,480 MRR, 4K+ monthly downloads, 320 weekly active users, and 40% week-over-week WAU growth ([company fundraising update](https://screenpipe.com/blog/screenpipe-i-3-fundraising), Feb 2025).
  - Active users increased 6× over two months ([founder LinkedIn post](https://www.linkedin.com/posts/louis030195_welcome-to-y-combinator-summer-26-im-building-activity-7462128628680560640-rcAL), Jun 2026).
  - Revenue grew 20–30% week over week for several months, according to the founder ([founder LinkedIn post](https://www.linkedin.com/posts/louis030195_screenpipe-yc-s26-revenue-has-been-growing-activity-7480998453456683009-vHoy), Jul 2026).
  - Product Hunt’s February 2026 launch recorded 107 votes and the product page had 125 followers and one review ([Product Hunt](https://www.producthunt.com/products/screenpipe), Jul 2026).
  - LinkedIn company page had 847 followers ([LinkedIn](https://www.linkedin.com/company/screenpipe), Jul 2026).
  - Company X account had approximately 1K followers ([TwStalker mirror via search snippet](https://ngntipkolamrenang.twstalker.com/Taltenisbor), Apr 2026).
  - YC listed two openings: Head of Virality and Forward Deployed Engineer ([Y Combinator](https://www.ycombinator.com/companies/screenpipe), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Granola ($67M raised, revenue unknown): its $43M Series B was led by NFDG in May 2025, and it focuses on meeting notes rather than continuous cross-application screen and audio history ([TechCrunch](https://techcrunch.com/2025/05/14/ai-note-taking-app-granola-raises-43m-at-250m-valuation-launches-collaborative-features/), May 2025).
  - Otter.ai (over $63M raised, $100M ARR): its $50M Series B was led by Spectrum Equity, and its knowledge base begins with meetings rather than full-day desktop activity ([Otter.ai funding](https://otter.ai/blog/otter-raises-50-million), Feb 2021; [Otter.ai ARR](https://otter.ai/blog/otter-ai-caps-transformational-2025-with-100m-arr-milestone-industry-first-ai-meeting-agents-and-global-enterprise-expansion), Dec 2025).
  - Microsoft Recall (product funding not separately reported, revenue unknown): Recall locally indexes periodic screen snapshots on supported Windows hardware but does not provide screenpipe’s cross-platform audio-capture and programmable-pipe scope ([Microsoft Support](https://support.microsoft.com/en-us/windows/ai/ai-features/retrace-your-steps-with-recall), 2026).
  - Limitless/Rewind (over $33M raised, revenue unknown): it was the closest continuous-memory alternative before Meta acquired it and the Rewind service stopped operating in December 2025 ([TechCrunch](https://techcrunch.com/2025/12/05/meta-acquires-ai-device-startup-limitless/), Dec 2025; [Rewind](https://rewind.ai/what-happened-to-rewind/), 2026).
- **Why now:** [Inferred]: The 2025–2026 rollout of OS-level Recall and MCP-enabled agents created demand for persistent, queryable work context, while screenpipe’s MCP server now connects that context to Claude, Cursor, and other agents ([Microsoft Learn](https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/recall/), 2025; [GitHub](https://github.com/screenpipe/screenpipe), Aug 2026).

## Founders & Team

- **Louis Beaumont (Founder):**
  - Background: Beaumont holds degrees associated with Université Grenoble Alpes and Aix Ynov Campus, previously worked at Rohde & Schwarz and OVHcloud, co-founded Inkdrop and Different AI, and reports satellite-intelligence engineering experience for French intelligence ([SignalHire](https://www.signalhire.com/profiles/louis-beaumont/239668409), Jul 2026; [GitHub](https://github.com/louis030195), Aug 2026).
  - Twitter/X: @louis030195 had approximately 3K followers ([TwStalker](https://twstalker.com/louis030195), Feb 2026 crawl).
  - LinkedIn: “Founder of screenpipe (YC S26) \| Capture how you work and turn that into agents (hiring),” with approximately 9K followers ([LinkedIn](https://www.linkedin.com/in/louis030195), Jul 2026).
  - GitHub: @louis030195 has 512 followers and maintains screenpipe/screenpipe, which has 20.9K stars ([GitHub](https://github.com/louis030195), Aug 2026).
- **Co-founder relationship:** No current co-founder is listed; screenpipe identifies Beaumont as its sole founder ([screenpipe about](https://screenpipe.com/about), Aug 2026).
- **Founder-market fit:** Beaumont documents prior infrastructure, machine-learning, computer-use, RAG, and satellite-intelligence work, and says he had maintained an AI “second brain” since 2020 before creating screenpipe ([GitHub](https://github.com/louis030195), Aug 2026; [Y Combinator](https://www.ycombinator.com/companies/screenpipe), Aug 2026).

## Key Risks

- **Privacy and consent:** Continuous screen, keyboard-context, microphone, and system-audio capture can include third-party communications and secrets; mitigations include local-only mode, excluded applications and URLs, optional encryption, retention controls, and PII filtering ([privacy policy](https://screenpipe.com/privacy), Jul 2026; [privacy filter](https://screenpipe.com/privacy-filter), Apr 2026).
- **Incumbent distribution:** Microsoft distributes overlapping local snapshot search through Windows, while Otter and Granola already sell workplace-context products; screenpipe’s mitigation is its cross-platform audio capture, API, model choice, and source visibility ([Microsoft Support](https://support.microsoft.com/en-us/windows/ai/ai-features/retrace-your-steps-with-recall), 2026; [screenpipe about](https://screenpipe.com/about), Aug 2026).
- **Capture reliability and resource use:** The company reports approximately 5–10% CPU and 5–10 GB of storage per month, and its changelog documents database-corruption, audio-stream, capture-monitoring, and startup fixes; event-driven capture, automatic recovery, and configurable retention are stated mitigations ([screenpipe about](https://screenpipe.com/about), Aug 2026; [changelog](https://screenpipe.com/changelog), Jul 2026).
- **License transition:** [Inferred]: The June 2026 move from MIT to a commercial source-available license could reduce commercial adoption or outside contributions, while personal use remains free and commercial users receive explicit licensing terms ([license announcement](https://screenpipe.com/blog/screenpipe-license-update), Jun 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.2B global AI-productivity-tools market in 2025; 14.5% CAGR for 2026–2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-productivity-tools-market-report), 2026) |
| SAM | $3.47B AI-meeting-assistant market in 2025; 25.8% CAGR for 2026–2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-meeting-assistant-market-report), 2026) |
| Traction | 300K users claimed ([founder GitHub](https://github.com/louis030195), Aug 2026); 20.9K stars and 2.1K forks ([GitHub](https://github.com/screenpipe/screenpipe), Aug 2026); 202 paid subscribers and 4K+ monthly downloads ([company blog](https://screenpipe.com/blog/screenpipe-i-3-fundraising), Feb 2025) |
| Revenue Signal | $3,480 MRR in February 2025 ([company blog](https://screenpipe.com/blog/screenpipe-i-3-fundraising), Feb 2025); revenue growing 20–30% WoW ([founder LinkedIn](https://www.linkedin.com/posts/louis030195_screenpipe-yc-s26-revenue-has-been-growing-activity-7480998453456683009-vHoy), Jul 2026); free, $21/month Basic, and $42/seat/month Business annual-equivalent tiers ([pricing](https://screenpipe.com/pricing), Jul 2026) |
| Founders | Louis Beaumont (Founder): former OVHcloud data engineer, prior AI founder, and French satellite-intelligence engineering experience ([GitHub](https://github.com/louis030195), Aug 2026; [SignalHire](https://www.signalhire.com/profiles/louis-beaumont/239668409), Jul 2026) |
| Competitors | Granola ($67M raised, revenue unknown, meeting-only capture) ([TechCrunch](https://techcrunch.com/2025/05/14/ai-note-taking-app-granola-raises-43m-at-250m-valuation-launches-collaborative-features/), May 2025); Otter.ai (over $63M raised, $100M ARR, meeting knowledge base) ([Otter.ai](https://otter.ai/blog/otter-ai-caps-transformational-2025-with-100m-arr-milestone-industry-first-ai-meeting-agents-and-global-enterprise-expansion), Dec 2025); Microsoft Recall (funding and revenue not separately reported, Windows-bundled snapshots) ([Microsoft](https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/recall/), 2025); Limitless (over $33M raised, revenue unknown, discontinued after Meta acquisition) ([TechCrunch](https://techcrunch.com/2025/12/05/meta-acquires-ai-device-startup-limitless/), Dec 2025) |
| Moat Signals | 20.9K-star, 12,176-commit repository; cross-platform local capture, transcription, search, encryption, API, MCP, and permissioned agents ([GitHub](https://github.com/screenpipe/screenpipe), Aug 2026) |
| Risk Factors | Privacy and consent exposure ([privacy policy](https://screenpipe.com/privacy), Jul 2026), incumbent bundling ([Microsoft](https://learn.microsoft.com/en-us/windows/apps/develop/windows-integration/recall/), 2025), capture reliability and resource use ([screenpipe changelog](https://screenpipe.com/changelog), Jul 2026) |
| Founder Reach | Louis Beaumont: Twitter approximately 3K ([TwStalker](https://twstalker.com/louis030195), Feb 2026), LinkedIn approximately 9K ([LinkedIn](https://www.linkedin.com/in/louis030195), Jul 2026), GitHub project 20.9K stars ([GitHub](https://github.com/louis030195), Aug 2026) |
| Distribution Signals | Product Hunt launch 107 votes and product page 125 followers ([Product Hunt](https://www.producthunt.com/products/screenpipe), Jul 2026); LinkedIn 847 followers ([LinkedIn](https://www.linkedin.com/company/screenpipe), Jul 2026); company X approximately 1K followers ([TwStalker mirror via search snippet](https://ngntipkolamrenang.twstalker.com/Taltenisbor), Apr 2026); two YC job postings ([Y Combinator](https://www.ycombinator.com/companies/screenpipe), Aug 2026) |
| Emails | louis@screenpi.pe ([screenpipe terms](https://screenpipe.com/terms), Jul 2026), support@screenpi.pe ([refund policy](https://screenpipe.com/refund), Jun 2026) |
