# Wideframe

> AI agent for video work outside the NLE

| Field | Value |
|-------|-------|
| Website | https://wideframe.com |
| YC Page | https://www.ycombinator.com/companies/wideframe |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS |
| YC Partner | Brad Flora |
| Emails | daniel@wideframe.com (YC page) |

## The Idea

**Problem:** Video creative teams at brands and agencies spend the majority of their time — an estimated 75% — on tasks outside the Non-Linear Editor (NLE), including research, writing briefs, searching and scrubbing through footage, organizing a-roll and b-roll sequences, producing rough drafts, collecting feedback, and generating supplementary content (company website; YC page). These teams, many producing tens or hundreds of videos per week for ads or organic social, rely on manual processes and disconnected tools for this pre- and post-edit work. Current workflows involve manual tagging, folder-by-folder browsing of media libraries, and ad-hoc communication for feedback loops.

**Approach:** Wideframe provides a desktop application (currently Apple Silicon only) that indexes users' video libraries — including transcripts, scene detection, and semantic understanding — without manual tagging (company website). Users interact with a context-aware AI agent to perform natural-language searches (e.g., "wide shots where people laugh"), assemble rough-cut sequences from creative intent, and generate supporting assets such as briefs, copy, b-roll, music, images, and video grounded in existing project context (company website). The application natively reads and writes Adobe Premiere Pro (.prproj) files, enabling round-trip workflows with the NLE rather than replacing it (company website; YC page).

**Differentiation:** Unlike AI video generators (Runway, Sora) that create footage from prompts, Wideframe operates on existing footage libraries and focuses on the organizational and pre-edit workflow rather than generation. Unlike Descript, which centers on transcript-based editing within its own editor, Wideframe positions itself outside the NLE entirely and emphasizes search, organization, and sequence assembly for export back to Premiere Pro or DaVinci Resolve. Unlike short-form repurposing tools (OpusClip, Vizard) that clip and reformat existing long-form content, Wideframe targets the full upstream workflow — from ingestion and search to rough-cut assembly — for teams that finish in traditional NLEs.

**Business Model:** No pricing is publicly listed on the website. Wideframe offers a 7-day free trial via waitlist signup (company website). [Inferred]: Most likely monetization path is a SaaS subscription model (per-seat or per-team) given the B2B agency/brand positioning and the "SaaS" tag on the YC page.

**TAM/SAM:** The global video editing software market was valued at USD 3.54 billion in 2025 (Mordor Intelligence, 2025 via search snippet), with cloud workflows expected to grow at 8.23% CAGR between 2026 and 2031. The professional video editing software segment was estimated at USD 2.26 billion in 2025 (Wise Guy Reports via search snippet). No public SAM estimate specific to the "outside-the-NLE" workflow segment was found.

**GTM / Distribution:** In its first 75 days since launch, Wideframe onboarded more than 50 brands and agencies (YC page description). [Inferred]: Distribution likely relies on direct outreach to video production agencies and word-of-mouth within creative agency networks, leveraging Daniel Pearson's decade-long experience running a growth marketing agency (Bamboo) that served 175+ clients in the agency/startup ecosystem.

## Defensibility

Wideframe's primary defensibility signal at this stage is data-driven: as users link their video libraries and interact with the agent, the system accumulates semantic indexes of footage and learns user search/organization patterns, creating switching costs as libraries grow (company website feature description). Native .prproj file handling is a technical integration that requires reverse-engineering Adobe's proprietary format, creating a modest technical barrier.

**Market structure:** Adobe dominates the NLE market with Premiere Pro. Wideframe explicitly avoids competing with the NLE — it operates in the workflow space *around* Adobe's product and supports Premiere Pro round-trips. For Adobe to replicate this, it would need to build and position a product that acknowledges the majority of video work happens outside its own editor, which conflicts with Adobe's incentive to keep users within its Creative Cloud ecosystem. Similarly, Descript's business model is built around being its own editor — pivoting to a "pre-NLE workflow tool that exports to competitors" would undermine its core product positioning.

**Commoditization risk:** The AI-powered media search and organization layer could be replicated by well-funded competitors (e.g., Frame.io/Adobe, Descript) or new entrants using the same underlying foundation models (vision, language, audio). The .prproj integration adds friction but is not a durable moat. [Inferred]: Speed of adoption and depth of integrations with agency workflows may matter more than pure technology at this stage.

## Market & Traction

**Traction signals:**
- 50+ brands and agencies onboarded in first 75 days since launch (YC page description, ~Nov 2025 – Jan 2026)
- Customer testimonial: "Wideframe will save each of our editors 2 hours per day" — Matthew Gattozzi, Founder at Goodo Studios (YC page description)
- 7-day free trial available via waitlist signup (company website)
- No Product Hunt launch page found
- Company LinkedIn page listed as "creative-agent-labs-yc-w26" (YC page); follower count not retrievable
- No company Twitter/X account found for the Wideframe product (the @WIDEFRAME handle on X belongs to an unrelated account)
- Daniel Pearson Twitter/X: @danielpearson (handle confirmed; follower count not retrievable via search)
- Zachary Kim Twitter/X: @heyzk (handle confirmed; follower count not retrievable via search)
- No Discord or Slack community found
- No app store listings found (desktop app distributed via website)
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Wideframe |
|-----------|---------|-------------|----------------------------------|
| Descript | ~$100M total (Series C, Oct 2022) (Crunchbase via search snippet) | $55M ARR (Sacra, late 2024 via search snippet) | Full transcript-based editor; replaces the NLE rather than working alongside it |
| OpusClip | $79.25M total (Series A-II, Mar 2025) (Tracxn via search snippet) | Eight-figures ARR, 6M+ users (OpusClip blog, 2024) | Focused on short-form clip repurposing from long-form; downstream from editing, not upstream workflow |
| Kapwing | $12.7M total (Series A, Sep 2019) (Crunchbase via search snippet) | $10.4M revenue, 100K customers (Latka, 2024 via search snippet) | Web-based collaborative editor; general-purpose rather than agency workflow-specific |
| Runway | $237M+ total (various sources) | Revenue unknown | AI-native video generation and creative tools; focuses on creation rather than footage organization and pre-edit workflow |

**Why now:** [Inferred]: Two converging catalysts — (1) multimodal AI models (GPT-4V, Gemini, Claude) crossed a performance threshold in 2024-2025 that enables reliable semantic understanding of video content (scene detection, natural-language search over footage) at costs feasible for a startup to deploy; and (2) the volume of video content produced by brands and agencies has increased dramatically with the rise of short-form social platforms (TikTok, Reels, Shorts), creating acute workflow bottlenecks for teams producing tens to hundreds of videos weekly.

## Founders & Team

**Daniel Pearson** — Co-founder & CEO
- Education: Central Michigan University (LinkedIn)
- Previously: Co-founder & CEO of Bamboo, a growth marketing agency founded in 2014 that managed $1B+ in paid media spend for clients including Uber, DoorDash, Dropbox, Adobe, Webflow, Headspace, and The New York Times (Crunchbase; LinkedIn; company website growwithbamboo.com). Bamboo operated for approximately 10 years (LinkedIn post, Feb 2024). Pearson announced the shutdown of Bamboo's full-service agency operation, with closure after February 2026 (X post, @danielpearson). He chose to shut down rather than pursue an exit or fund through an unprofitable period (X post via search snippet).
- Prior to Bamboo: In-house growth roles focused on paid media, CRM, and product; worked at Zaarly and Threadflip (Crunchbase; eTail Palm Springs speaker bio via search snippet). Active since 2011 in marketing (eTail bio via search snippet).
- Also maintains a Substack on growth marketing strategy (substack.com/@danielpearson)
- Twitter/X: @danielpearson — count not retrievable
- LinkedIn: linkedin.com/in/danielvpearson/ — "Creative Agent Labs (YC W26)" headline, 500+ connections
- GitHub: No public repos found

**Zachary Kim** — Co-founder & CTO
- Education: No formal education data found publicly
- Previously: CTO at Zaarly (a marketplace startup that raised ~$15M per Crunchbase); Co-founder of Float (YC S21), a supply chain finance platform for consumer brands (YC page; heyzk.com). Nearly two decades of experience across web and enterprise development, embedded systems, and neurosurgical R&D (Deep Brain Stimulation research improving outcomes for Parkinson's patients) (Pacific Asian Center for Entrepreneurship via search snippet; heyzk.com).
- Venture Partner at Orange Collective (LinkedIn); angel investor in companies including Albedo Space, Kiwi Biosciences, Skyways, Levro, and Risotto (heyzk.com)
- Active in the Clojure open-source community
- Twitter/X: @heyzk — count not retrievable
- LinkedIn: linkedin.com/in/heyzk/ — "Orange Collective" headline, 218 connections
- GitHub: github.com/zk — 148 followers; notable repo: **clojuredocs** (the ClojureDocs.org web app) with 1.1k stars; **emacs-dirtree** with 101 stars (GitHub)

**Co-founder relationship:** Both Daniel Pearson and Zachary Kim worked at Zaarly — Pearson in a growth/marketing capacity and Kim as CTO — indicating a prior professional relationship at the same company.

**Founder-market fit:** Pearson brings a decade of experience running a growth agency that produced large volumes of ad creative for 175+ brands, giving him first-hand exposure to the video production workflow pain points Wideframe targets. Kim brings nearly 20 years of engineering experience including a prior YC-backed startup (Float, S21), CTO-level product development, and open-source community leadership. Their shared Zaarly background suggests an established working relationship.

## Key Risks

**Adobe integration dependency:** Wideframe's core value proposition relies on native .prproj file read/write capability. Adobe does not publicly document or officially support third-party .prproj manipulation. Any changes Adobe makes to the file format, or an enforcement action against unauthorized format access, could break Wideframe's primary workflow. Mitigation: Wideframe also supports DaVinci Resolve workflows, providing a fallback.

**Narrow initial wedge — agency segment concentration:** The first 50+ customers are brands and agencies producing high-volume ad/social content (YC description). This segment is price-sensitive and has high churn rates. Expansion beyond this beachhead into enterprise, broadcast, or film post-production would require different product capabilities and sales motions.

**Foundation model dependency and cost structure:** The product's semantic search, scene detection, and generative features depend on external AI model APIs. Model pricing changes, rate limits, or capability shifts by providers (OpenAI, Anthropic, Google) could materially affect unit economics or product quality. As a 2-person team, building proprietary models is not feasible at this stage.

**Platform constraint — Apple Silicon only:** The product currently requires Apple Silicon (company website), excluding Windows-based video production teams. While Apple hardware is common in creative industries, this limits the addressable user base, particularly in enterprise and international markets where Windows is prevalent.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.54B video editing software market (Mordor Intelligence, 2025 via search snippet); professional segment $2.26B (Wise Guy Reports, 2025 via search snippet) |
| SAM | No public data found for the "outside-the-NLE workflow" sub-segment |
| Traction | 50+ brands and agencies onboarded in first 75 days (~Nov 2025 – Jan 2026) (YC page description) |
| Revenue Signal | No public data found; 7-day free trial offered (company website) |
| Founders | Daniel Pearson (CEO): Central Michigan U, 10-year founder/CEO of Bamboo ($1B+ managed spend), ex-Zaarly/Threadflip. Zachary Kim (CTO): CTO at Zaarly, Co-founder Float (YC S21), ~20 years engineering, 1.1k GitHub stars on ClojureDocs |
| Competitors | Descript ($100M raised, $55M ARR, transcript-based editor replacing NLE); OpusClip ($79.25M raised, 8-figure ARR, short-form repurposing focus); Kapwing ($12.7M raised, $10.4M revenue, web-based general editor); Runway ($237M+ raised, revenue unknown, AI generation focus) |
| Moat Signals | Native .prproj file handling; growing video library index creates switching costs; founder's agency network for distribution |
| Risk Factors | Adobe format dependency, agency segment concentration, foundation model cost/availability, Apple Silicon-only platform |
| Founder Reach | Daniel Pearson: Twitter @danielpearson (count not retrievable), LinkedIn 500+, GitHub not found. Zachary Kim: Twitter @heyzk (count not retrievable), LinkedIn 218, GitHub 1.1k stars (ClojureDocs) |
| Distribution Signals | 50+ customers in 75 days (YC description); no Product Hunt launch found; no app store listing |
| Emails | daniel@wideframe.com (YC page) |
