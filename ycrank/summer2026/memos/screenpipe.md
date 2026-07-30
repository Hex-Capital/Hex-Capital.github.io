# screenpipe

> AI powered by everything you've seen, said or heard

| Field | Value |
|-------|-------|
| Website | https://screenpipe.com |
| YC Page | https://www.ycombinator.com/companies/screenpipe |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 6 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, B2B, Enterprise, Enterprise Software |
| YC Partner | Gustaf Alstromer |
| Emails | louis@screenpi.pe |

## The Idea

- **Problem:** Knowledge workers and teams must repeatedly supply AI agents with context because the agents cannot recall prior meetings, viewed content, or completed workflows ([YC](https://www.ycombinator.com/companies/screenpipe), Jul 2026).
- **Approach:** screenpipe captures screen changes and audio, extracts application text through accessibility APIs with OCR fallback, transcribes speech, and stores the resulting searchable history in a local SQLite database ([screenpipe GitHub](https://github.com/screenpipe/screenpipe), Jul 2026).
- **Differentiation:** Unlike cloud-based Granola and Otter.ai, Windows-only Microsoft Recall, and the discontinued Rewind/Limitless desktop product, screenpipe combines local-default storage, macOS/Windows/Linux support, screen and audio capture, a REST API, MCP access, and programmable “pipes” ([screenpipe GitHub](https://github.com/screenpipe/screenpipe), Jul 2026; [TechCrunch](https://techcrunch.com/2025/12/05/meta-acquires-ai-device-startup-limitless/), Dec 2025).
- **Business Model:** The signed desktop app costs $25 monthly for Standard, $50 per seat monthly for Pro with a five-seat self-service minimum, and $150 per seat monthly for sales-led Enterprise, while personal non-commercial source use is free ([screenpipe GitHub](https://github.com/screenpipe/screenpipe), Jul 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Downloads, a public source repository, founder-led LinkedIn distribution, self-service subscriptions, and sales-led enterprise plans are visible distribution channels ([screenpipe GitHub](https://github.com/screenpipe/screenpipe), Jul 2026; [Louis Beaumont on LinkedIn](https://www.linkedin.com/posts/louis030195_welcome-to-y-combinator-summer-26-im-building-activity-7462128628680560640-rcAL), Jun 2026).

## Defensibility

- **Moat today:** The public repository has 18,900 GitHub stars, 1,800 forks, 358 releases, and a locally auditable Rust/TypeScript capture stack ([GitHub](https://github.com/screenpipe/screenpipe), May 2026).
- **Future moat:** [Inferred]: Deployment-specific workflow history, integrations, policies, and reusable pipes could create switching costs, but no retention or migration evidence is public.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Microsoft can bundle Recall with Windows, meeting platforms can extend transcription products, and source-visible competitors can inspect screenpipe’s implementation, although commercial use now requires a paid license ([screenpipe license update](https://screenpipe.com/blog/screenpipe-license-update), Jun 2026).

## Market & Traction

- **Traction signals:**
  - More than 250,000 users ([Louis Beaumont’s GitHub profile](https://gist.github.com/louis030195), Jul 2026).
  - Hundreds of thousands of installs ([screenpipe license update](https://screenpipe.com/blog/screenpipe-license-update), Jun 2026).
  - Active users increased 6× over two months (founder [LinkedIn post](https://www.linkedin.com/posts/louis030195_welcome-to-y-combinator-summer-26-im-building-activity-7462128628680560640-rcAL), Jun 2026).
  - “Tens of thousands of dollars” in revenue within weeks of the initial launch (founder [LinkedIn post](https://www.linkedin.com/posts/louis030195_i-built-screenpipe-yc-s26-on-a-weekend-activity-7462849679895134208-s7E3), Jun 2026).
  - 18,900 GitHub stars and 1,800 forks ([GitHub](https://github.com/screenpipe/screenpipe), May 2026).
  - 124 Product Hunt followers ([Product Hunt](https://www.producthunt.com/products/screenpipe), Jul 2026).
  - One YC-listed opening offering $130,000–$180,000 salary and 0.50%–1.50% equity ([YC](https://www.ycombinator.com/companies/screenpipe), Jul 2026).
- **Competitors (minimum 3, up to 5):**
  - Limitless/Rewind (more than $33M raised, revenue unknown): used cloud processing and a wearable pendant before Meta acquired it and discontinued the service ([TechCrunch](https://techcrunch.com/2025/12/05/meta-acquires-ai-device-startup-limitless/), Dec 2025).
  - Granola (at least $67.3M raised through May 2025, revenue unknown): concentrates on AI meeting notes and collaborative transcripts rather than continuous cross-application screen history ([TechCrunch](https://techcrunch.com/2025/05/14/ai-note-taking-app-granola-raises-43m-at-250m-valuation-launches-collaborative-features/), May 2025).
  - Otter.ai (approximately $73M raised, $100M ARR): provides cloud-based meeting transcription and meeting agents rather than local-default continuous screen capture ([Otter.ai](https://otter.ai/blog/otter-ai-caps-transformational-2025-with-100m-arr-milestone-industry-first-ai-meeting-agents-and-global-enterprise-expansion), Dec 2025; [Sacra](https://sacra.com/c/otter/), Jul 2026).
- **Why now:** [Inferred]: MCP-compatible agents and locally runnable Whisper models now let captured desktop and audio history serve as queryable agent context without requiring all raw data to be centralized ([screenpipe GitHub](https://github.com/screenpipe/screenpipe), Jul 2026).

## Founders & Team

- **Louis Beaumont (Founder):**
  - Background: Beaumont says he previously worked in French intelligence, operated a defense-AI startup, experimented with LLMs and FAISS-based retrieval before the term “AI infra” became common, and created screenpipe in 2024 ([LinkedIn](https://www.linkedin.com/posts/louis030195_i-built-screenpipe-yc-s26-on-a-weekend-activity-7462849679895134208-s7E3), Jun 2026; [screenpipe About](https://screenpipe.com/about), Jul 2026).
  - Twitter/X: @louis030195; count not retrievable ([GitHub](https://github.com/screenpipe/screenpipe), Jul 2026).
  - LinkedIn: “Founder of screenpipe (YC S26) \| AI that record your team screen and turn them into agents (hiring),” with approximately 9,000 followers ([LinkedIn](https://www.linkedin.com/in/louis030195), Jul 2026).
  - GitHub: @louis030195; screenpipe has 18,900 stars ([GitHub](https://github.com/screenpipe/screenpipe), May 2026).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Beaumont’s documented work with retrieval systems, LLMs, defense AI, and the screenpipe codebase since 2024 aligns with building local multimodal capture and agent-context software ([LinkedIn](https://www.linkedin.com/posts/louis030195_i-built-screenpipe-yc-s26-on-a-weekend-activity-7462849679895134208-s7E3), Jun 2026; [screenpipe About](https://screenpipe.com/about), Jul 2026).

## Key Risks

- **Sensitive-data capture:** Continuous screen and audio collection can ingest passwords, financial information, private communications, and regulated data; screenpipe provides application, window, and URL exclusions, on-device redaction, and per-pipe access controls ([security architecture](https://screenpipe.com/security/architecture), Apr 2026).
- **Cloud and telemetry exposure:** PostHog analytics is enabled by default, Sentry receives diagnostics, and optional cloud transcription, AI, and synchronization send selected data off-device; users can disable analytics and select local processing ([screenpipe GitHub](https://github.com/screenpipe/screenpipe), Jul 2026).
- **Incumbent substitution:** Microsoft Recall provides local Windows screen history, while Granola and Otter.ai already address meeting memory, leaving screenpipe dependent on cross-platform, programmable, local-first breadth as its documented distinction ([screenpipe GitHub](https://github.com/screenpipe/screenpipe), Jul 2026).
- **License-transition friction:** The company changed from MIT to a source-available commercial license requiring paid authorization for commercial source use, which can reduce outside commercial adoption while converting such use into licensing demand ([license update](https://screenpipe.com/blog/screenpipe-license-update), Jun 2026).
- **Device-resource burden:** screenpipe reports typical CPU usage of 5%–10% and storage consumption of approximately 5–10 GB monthly, creating adoption friction on constrained company devices ([screenpipe GitHub](https://github.com/screenpipe/screenpipe), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 250K users (founder GitHub profile, Jul 2026); hundreds of thousands of installs (screenpipe blog, Jun 2026); active users grew 6× in two months (founder LinkedIn, Jun 2026); 18.9K GitHub stars (GitHub, May 2026) |
| Revenue Signal | Tens of thousands of dollars in early revenue (founder LinkedIn, Jun 2026); Standard $25/month, Pro $50/seat/month, Enterprise $150/seat/month (GitHub pricing, Jul 2026) |
| Founders | Louis Beaumont (Founder): former defense-AI founder, self-reported French-intelligence experience, screenpipe creator since 2024 (founder LinkedIn and screenpipe About, Jun–Jul 2026) |
| Competitors | Limitless/Rewind (more than $33M raised, revenue unknown, wearable/cloud model; TechCrunch, Dec 2025); Granola (at least $67.3M raised, revenue unknown, meeting notes; TechCrunch, May 2025); Otter.ai (approximately $73M raised, $100M ARR, meeting transcription; Sacra and Otter.ai, 2025–2026) |
| Moat Signals | 18.9K GitHub stars, 1.8K forks, 358 releases, local capture engine, REST API, MCP server, and programmable pipes (GitHub, May–Jul 2026) |
| Risk Factors | Sensitive-data capture (screenpipe security architecture, Apr 2026), default telemetry and optional cloud processing (GitHub, Jul 2026), incumbent substitution (GitHub comparison, Jul 2026) |
| Founder Reach | Louis Beaumont: approximately 9K LinkedIn followers, Twitter count not retrievable, associated repository 18.9K stars (LinkedIn and GitHub, May–Jul 2026) |
| Distribution Signals | 124 Product Hunt followers (Product Hunt, Jul 2026), 18.9K GitHub stars (GitHub, May 2026), one active YC job posting (YC, Jul 2026) |
| Emails | louis@screenpi.pe (GitHub and screenpipe security architecture, Apr–Jul 2026) |
