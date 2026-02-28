# Cardboard

> Agentic video editor

| Field | Value |
|-------|-------|
| Website | https://usecardboard.com |
| YC Page | https://www.ycombinator.com/companies/cardboard |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, Consumer, Video, Media |
| YC Partner | Ankit Gupta |
| Emails | founders@usecardboard.com (company website) |

## The Idea

**Problem:** Growth and marketing teams need to produce video content consistently—testimonial reels, ad variants, launch videos, podcast clips—but the path from raw footage to a publishable first cut requires hours of manual scrubbing, arranging clips, syncing music, and iterating through feedback cycles. The alternatives are either professional NLEs (Premiere Pro, DaVinci Resolve) with steep learning curves, consumer tools that lack professional output quality, or agencies with long timelines and high costs. Raw footage sits unused because the editing bottleneck is too costly in time and money (Launch HN post, Feb 26, 2026).

**Approach:** Users upload footage and describe their goal in natural language (e.g., "3 ad variants," "30s hook," "testimonial reel"). Cardboard's agentic AI reasons over the footage using multimodal LLMs, understands semantic content, and produces a first cut in minutes. The output lands in a full non-linear editor (NLE) built in the browser using WebGPU and WebCodecs, where users can refine the edit. The system handles shot detection, beat-synced music, caption generation, voiceover, background removal, color grading, and multi-track timelines. It supports XML export to Premiere Pro, DaVinci Resolve, and Final Cut Pro (company website; Launch HN, Feb 26, 2026). The founders describe the rendering layer as "a custom hardware-accelerated renderer on WebCodecs / WebGL2" with client-side rendering, using "Cloud VLMs + traditional ML models" for video understanding (HN founder comments, Feb 26, 2026).

**Differentiation:** Compared to Descript (text-based editing focused on podcasts/dialogue), Cardboard positions itself as a full NLE with an agentic AI layer that autonomously generates multi-track edits from goals rather than requiring text-transcript-based interaction. Compared to OpusClip (automated short-form clipping from long-form content), Cardboard targets broader video production workflows beyond repurposing. Compared to Kapwing (cloud-based collaborative editor with AI features bolted on), Cardboard's editor was built from scratch on modern browser APIs (WebGPU/WebCodecs), enabling a tighter integration between AI agent and timeline. Compared to CapCut (consumer mobile-first), Cardboard targets professional team workflows with collaboration, semantic search, and export to professional tools.

**Business Model:** SaaS subscription pricing visible on the website (OutlierKit review, 2026): Creator at $60/month (5 projects/month, 1GB file limit, 100GB storage), Pro at $150/month (unlimited projects, 5GB files, 1TB storage, priority support), Teams at custom pricing (collaboration, SSO, audit logs, unlimited storage). All plans include 7-day free trials. The founders chose flat-rate billing to "avoid cognitive load from usage-based credits" (HN founder comments, Feb 26, 2026).

**TAM/SAM:** The global AI video generator market was estimated at $788.5 million in 2025 and is projected to reach $3,441.6 million by 2033, growing at a CAGR of 20.3% (Grand View Research, via search snippet). The broader video editing market was valued at $3.54 billion in 2025, projected to reach $4.99 billion by 2031 at 5.88% CAGR (Mordor Intelligence, via search snippet). The AI video generation & editing software market is projected to reach $24.89 billion by 2036 from $3.67 billion in 2026 at 21.4% CAGR (Meticulous Research, via search snippet). [Inferred]: Cardboard's SAM is the subset of these markets focused on B2B marketing/growth teams producing short-to-mid-form content rather than the full video production or generation markets.

**GTM / Distribution:** The company launched on Hacker News on February 26, 2026 (Launch HN, 127 points, 77 comments). The website lists customers including PostHog, Hyperspell, Autumn, Vulnetic, Oolka, Oximy, General Legal, and Shopos (company website). Saksham Aggarwal creates content on Instagram and LinkedIn with ~250k views/month (Fondo blog, Feb 2026). The company's X account (@usecardboard) states that "Unicorns, media agencies, and creators with millions of followers are already using Cardboard" (X profile, via search snippet). [Inferred]: Primary distribution appears to be founder-led sales and content marketing targeting growth/marketing teams at startups and mid-market companies, with organic inbound from YC network and social media.

## Defensibility

The company is building two technically challenging systems simultaneously: a high-performance browser-based NLE on WebGPU/WebCodecs and a reliable agentic editing layer. The founders argue that "most startups do one; incumbents can't rebuild their stack without breaking everything" (YC company description). The browser-based editor is built on a custom hardware-accelerated renderer (WebCodecs/WebGL2), which represents accumulated engineering effort (HN founder comments, Feb 26, 2026).

[Inferred]: Potential moat could develop via: (1) proprietary training data from user editing sessions improving the AI agent's reliability, (2) collaborative workflow stickiness once teams adopt Cardboard as their default video workspace, and (3) the compounding difficulty of building both a professional-grade editor and reliable AI agent simultaneously. These are unproven at this stage.

**Market structure:** Incumbents like Adobe face business model cannibalization—Premiere Pro's pricing and complexity serve professional editors, and simplifying the workflow to "footage + goal → first cut" undermines the value proposition of the professional suite. Adobe's architecture is desktop-native and not easily portable to browser-based collaborative workflows without a full rewrite. CapCut (ByteDance) is consumer-mobile-first and moving upmarket requires rebuilding for team collaboration and professional export pipelines. [Inferred]: The structural barrier is that incumbents would need to simultaneously rebuild their rendering stack for the browser AND cannibalize their existing per-seat professional pricing with an AI-first workflow that reduces the need for skilled editors.

**Commoditization risk:** The core AI capability (multimodal LLM reasoning over video) is built on commercially available foundation models and could be replicated by well-funded competitors. Descript, OpusClip, and Kapwing each have existing user bases and could add agentic editing features. The browser-based NLE is technically complex but not patent-protected. Multiple commenters on the Hacker News launch noted "lots of players in the market doing this" (HN discussion, Feb 26, 2026).

## Market & Traction

**Traction signals:**
- 1,000+ early users (OutlierKit review, 2026)
- Named customers: PostHog, Hyperspell, Autumn, Vulnetic, Oolka, Oximy, General Legal, Shopos (company website)
- 13 product releases shipped since November 2025 (HN founder comments, Feb 26, 2026)
- Launch HN: 127 points, 77 comments (Hacker News, Feb 26, 2026)
- Company X/Twitter: @usecardboard, 1,013 followers (X, via search snippet)
- Founder Saksham X/Twitter: @sxmawl, 2,885 followers (X, via search snippet)
- Founder Ishan X/Twitter: @ishandeveloper, 1,288 followers (X, via search snippet)
- LinkedIn company page: Cardboard Inc. (linkedin.com/company/cardboardinc) — follower count not retrievable
- Total funding: $2.1M (Extruct AI, via search snippet)
- No Product Hunt launch found for the YC Cardboard (the "CardBoard" on Product Hunt is an unrelated user story mapping tool)
- No Discord or Slack community found
- No mobile app or browser extension found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Cardboard |
|-----------|---------|-------------|----------------------------------|
| Descript | $101M total, Series C led by OpenAI (TechCrunch, Nov 2022) | ~$55M ARR estimate (Sacra, late 2024, via search snippet) | Text-based editing paradigm (edit video by editing transcript); focused on podcasts/dialogue-driven content rather than goal-based agentic editing |
| OpusClip | $50M total, last round $20M from SoftBank (OpusClip blog, Mar 2025, via search snippet) | ~$20M ARR, 10M+ users (Sacra/ARR Club, via search snippet) | Automated short-form clipping from long-form content; narrower use case than full NLE; consumer/creator focus rather than team workflows |
| Kapwing | $12.7M total, Series A (Crunchbase, via search snippet) | $10.4M revenue in 2024 (Getlatka, via search snippet) | Cloud-based collaborative editor with AI features added incrementally; broader creative tool (images, text) not solely video-focused; legacy architecture not built on WebGPU/WebCodecs |
| Vizard AI | No public funding data found | No public data found | Focused on automated social clip extraction; pricing from $14.50/month (company website, via search snippet); narrower feature set targeting social media content repurposing |

**Why now:** Multimodal LLMs reached sufficient capability to reason over video content—understanding what is being said, what is happening visually, and how to cut footage into coherent narratives. Simultaneously, WebGPU and WebCodecs browser APIs matured to the point where a professional-grade NLE can run entirely in the browser without plugins or downloads (YC company description). [Inferred]: The convergence of these two technology thresholds—multimodal AI understanding of video and browser-native high-performance rendering—occurred within the last 12-18 months, making a browser-based "AI director inside a professional editor" feasible for the first time.

## Founders & Team

**Saksham Aggarwal** — Co-founder
- CS at BITS Pilani (Weekday.works profile, via search snippet)
- Co-founder/CTO of Iterate AI, an AI-powered UX development platform backed by Entrepreneur First (EF W23 cohort); Iterate AI was shut down (LinkedIn post, via search snippet)
- First engineer / founding member at PYOR, a Castle Island Ventures-backed financial data startup; built an enterprise data terminal for on-chain analytics (LinkedIn, via search snippet)
- Growth role at Flint (now LogX), a Sequoia-backed startup (LinkedIn, via search snippet)
- Scaled Conquest, described as India's largest student-run startup accelerator (LinkedIn, via search snippet)
- Published at ACL (Association for Computational Linguistics); spoken internationally on AI evaluations (PyCon India 2025 speaker profile, via search snippet)
- Content creator with ~250k views/month on Instagram and LinkedIn (Fondo blog, Feb 2026)
- Twitter/X: @sxmawl — 2,885 followers (X, via search snippet)
- LinkedIn: linkedin.com/in/sakshamagg27/
- GitHub: No public repos found under this identity

**Ishan Sharma** — Co-founder & CTO
- ~5 years at HackerRank (YC S11) building memory-heavy, performance-critical browser applications (YC company description)
- Created Hotspoter (WiFi Hotspot Creator) at age 12 in 2013, claimed 5M+ downloads (YC company description; GitHub repo description)
- Produced Apple-style internal launch videos for HackerRank's all-hands demo days for 350+ attendees (Fondo blog, Feb 2026)
- Twitter/X: @ishandeveloper — 1,288 followers (X, via search snippet)
- LinkedIn: linkedin.com/in/ishandeveloper/ — headline: "Co-founder & CTO @Cardboard (YC W26)"
- GitHub: github.com/ishandeveloper — 791 followers, 105 public repos. Notable repos: github-wrapped (413 stars), Chatter-App (307 stars), Portfolio (198 stars), Swaasthy (72 stars) (GitHub profile)

**Co-founder relationship:** Saksham and Ishan met in school and have known each other for 15 years (YC company description; Fondo blog, Feb 2026). Both studied in India (Saksham at BITS Pilani). The YC description characterizes them as having met "in school."

**Founder-market fit:** Ishan's ~5 years building performance-critical browser applications at HackerRank directly maps to the challenge of building a high-performance NLE in the browser using WebGPU/WebCodecs. Saksham's experience building AI agent systems at Iterate AI (agentic retrieval, evals, synthetic data pipelines) maps to the agentic editing layer. Saksham's personal content creation (~250k views/month) provides first-hand understanding of the content production pain point. Ishan's experience producing internal launch videos at HackerRank provides direct exposure to the video editing workflow the product automates.

## Key Risks

**Name disambiguation / brand confusion:** Multiple unrelated companies use the "Cardboard" name: Cardboard AS (Oslo, SaaS subscription management, raised €1.9M seed from Skyfall Ventures in Aug 2024 — TheSaaSNews); CardBoard (user story mapping tool on Product Hunt and cardboardit.com); Google Cardboard (discontinued VR platform). Search results frequently conflate these entities. The company operates at usecardboard.com but shares a generic common-noun name that complicates SEO, press coverage attribution, and brand identity.

**Crowded competitive landscape with well-funded incumbents:** Descript ($101M raised, ~$55M ARR), OpusClip ($50M raised, ~$20M ARR, 10M+ users), and Kapwing ($12.7M raised, $10.4M revenue) are established players with existing user bases. Multiple HN commenters flagged "lots of players in the market doing this" including other YC W26 companies targeting adjacent video editing problems (HN discussion, Feb 26, 2026). Adobe, CapCut (ByteDance), and other incumbents are also adding AI features to existing editors.

**Browser rendering limitations:** The product is browser-only with no offline editing or mobile app (OutlierKit review, 2026). The 10GB upload limit was flagged as restrictive for ProRes/RAW professional workflows (HN discussion, Feb 26, 2026). Firefox is unsupported because it lacks the File System Access API (HN founder comments, Feb 26, 2026). The Creator plan limits files to 1GB. These constraints may prevent adoption by teams working with high-resolution or high-volume footage.

**Dual technical execution risk:** The company is simultaneously building two hard systems—a browser NLE and a reliable agentic editor. The founders acknowledge this: "We have to build two hard things at once" (YC company description). With a team of 2 and no current hiring (YC page), sustaining development velocity on both fronts while also handling go-to-market is a significant engineering bandwidth constraint.

**AI reliability for production use:** The agentic editor must make autonomous creative decisions (shot selection, pacing, transitions) that meet professional standards. Multiple HN commenters raised concerns about "the boundary between probabilistic agent decisions and deterministic timeline operations" and whether AI-generated edits would be reliable enough for production content (HN discussion, Feb 26, 2026). The founders stated they have "an internal benchmark" for edit precision but no public benchmark data is available.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $788.5M AI video generator market in 2025, projected $3.4B by 2033 at 20.3% CAGR (Grand View Research, via search snippet); broader video editing market $3.54B in 2025 at 5.88% CAGR (Mordor Intelligence, via search snippet) |
| SAM | No public data found |
| Traction | 1,000+ early users (OutlierKit review, 2026); 8 named customers including PostHog (company website); Launch HN 127 points, 77 comments (Feb 26, 2026); 13 releases since Nov 2025 (HN founder comments) |
| Revenue Signal | Pricing: Creator $60/mo, Pro $150/mo, Teams custom (company website / OutlierKit review, 2026). No public revenue figures disclosed. |
| Founders | Saksham Aggarwal (Co-founder): CS @ BITS Pilani, ex-Iterate AI (EF-backed, shut down), first engineer at PYOR (Castle Island-backed), published at ACL. Ishan Sharma (Co-founder & CTO): ~5yr at HackerRank (S11), created Hotspoter (5M+ downloads claim), 105 GitHub repos with 413-star top repo. |
| Competitors | Descript ($101M raised, ~$55M ARR, text-based editing vs. goal-based agentic); OpusClip ($50M raised, ~$20M ARR, short-form clipping vs. full NLE); Kapwing ($12.7M raised, $10.4M revenue, legacy cloud editor vs. WebGPU-native); Vizard AI (funding unknown, revenue unknown, social clip extraction vs. full editing) |
| Moat Signals | Custom WebCodecs/WebGL2 renderer built from scratch; dual-system complexity (browser NLE + agentic AI) as engineering barrier to replication; potential data flywheel from user editing sessions (unproven) |
| Risk Factors | Crowded market with well-funded competitors, browser rendering limitations for professional workflows, brand name disambiguation challenges |
| Founder Reach | Saksham Aggarwal: Twitter @sxmawl 2.9k, LinkedIn linkedin.com/in/sakshamagg27/. Ishan Sharma: Twitter @ishandeveloper 1.3k, LinkedIn linkedin.com/in/ishandeveloper/, GitHub 791 followers / 413 stars top repo |
| Distribution Signals | Launch HN 127 points (Feb 26, 2026); @usecardboard 1,013 Twitter followers; Fondo blog coverage (Feb 2026); no Product Hunt launch found for this company |
| Emails | founders@usecardboard.com (company website) |
