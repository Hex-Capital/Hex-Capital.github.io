# Fern (Formerly Ishiki Labs)

> Realtime AI starting with sales

| Field | Value |
|-------|-------|
| Website | https://www.ishikilabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/ishikilabs |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | No public data found |
| Tags | Deep Learning, Generative AI, AI |
| YC Partner | Gustaf Alstromer |
| Emails | team@ishikilabs.ai (YC company page) |

## The Idea

**Problem:** Current multimodal AI models can see and hear but lack social awareness in live conversations — they interrupt when they shouldn't, cannot distinguish whether a user is speaking to them or to another person, and are purely reactive rather than contextually aware (YC company page). Sales professionals and knowledge workers in meetings need real-time support (research, task delegation, follow-up drafting) but existing AI tools either require manual activation, disrupt conversation flow, or are limited to post-meeting summarization.

**Approach:** Fern joins meetings in one of two modes: "Full Presence," where it participates visibly — listening, speaking when invited, conducting research, and completing tasks like drafting follow-up emails during the call; and "Shadow Mode," where it operates invisibly, providing live summaries, contextual information, and suggested questions in real-time (YC LinkedIn post, Feb 20, 2026). The underlying model, fern-0.1, is designed to deliver real-time expert opinions on demand, instant task delegation, and zero interruptions at latencies comparable to ChatGPT Voice and Gemini Live (YC company page).

**Differentiation:** Existing AI meeting assistants (Otter.ai, Fathom, Fireflies.ai) focus primarily on transcription, note-taking, and post-meeting summarization. Fern's differentiation is "social awareness" — the ability to understand conversational context and decide when to contribute versus remain silent — positioning it as a real-time participant rather than a passive recorder. The Full Presence mode, where the AI joins as a visible meeting participant that can speak and act, is distinct from the note-taking paradigm of incumbents. The founders frame this as building an AI that "understands people, not just prompts" (ishikilabs.ai).

**Business Model:** No public pricing page or revenue data found. [Inferred]: Most likely monetization path is a SaaS subscription model (per-seat or per-team) given the B2B meeting assistant positioning and comparable competitor pricing structures (Otter.ai charges $16.67–$40/user/month; Fathom offers freemium with paid tiers).

**TAM/SAM:** The AI meeting assistant market was estimated at $2.5–3.7 billion in 2024, with projected CAGR ranging from 25–35% depending on source (Market Research Future, 2024; Market.us, 2024; Data Bridge Market Research, 2024 — all via search snippets). No SAM estimate specific to Fern's real-time conversational AI sub-segment was found.

**GTM / Distribution:** The company's tagline specifies "starting with sales," and the Y Combinator launch post (Feb 20, 2026) emphasized sales meeting use cases (drafting follow-up emails, flagging decisions). [Inferred]: Most likely distribution path is direct sales to sales teams and revenue organizations, potentially leveraging YC's network for early enterprise pilots, before expanding to broader knowledge-worker meeting use cases.

## Defensibility

The core technical challenge — building a socially aware AI that understands conversational dynamics in real time, decides when to speak versus stay silent, and operates at low latency — represents genuine engineering complexity. The founders bring specialized experience from building Meta's multimodal assistant for Ray-Ban smart glasses, which is a directly relevant technical background for real-time, context-aware AI (YC company page; LinkedIn profiles).

No patents, published proprietary datasets, or network effect mechanisms are identifiable from public sources at this stage. [Inferred]: Potential moat could develop via proprietary training data from meeting interactions (with appropriate consent), fine-tuned models for conversational turn-taking and social awareness, and switching costs from workflow integrations — but none of these are proven at this stage.

**Market structure:** Incumbent meeting assistant companies (Otter.ai, Fireflies.ai, Read.ai) have built their products around transcription and post-meeting summarization. Shifting to a real-time, socially-aware participant model requires fundamentally different architecture — low-latency streaming inference, turn-taking models, and contextual awareness — rather than batch transcription pipelines. Microsoft Copilot for Teams does offer some real-time meeting intelligence but is constrained to the Teams ecosystem. [Inferred]: The structural barrier for incumbents is architectural — retrofitting batch-oriented transcription systems into real-time participant systems requires rebuilding the core inference stack, which established companies with large existing customer bases may be slow to prioritize over incremental feature improvements.

**Commoditization risk:** As foundation model providers (OpenAI, Google) continue improving real-time voice capabilities (ChatGPT Voice, Gemini Live), the underlying real-time conversational AI capabilities could become commoditized. Any well-funded meeting assistant startup could potentially add real-time participation features. The social awareness layer (knowing when to speak) is the key differentiation, and its durability depends on the quality of fine-tuning and proprietary training data that Fern accumulates.

## Market & Traction

**Traction signals:**
- Y Combinator LinkedIn launch post received 431 likes and 113 comments (LinkedIn, Feb 20, 2026)
- Company Twitter/X handle: @ishikilabs (YC company page); follower count not retrievable
- LinkedIn company page: Ishiki Labs (YC W26) (linkedin.com/company/ishiki-labs); follower count not retrievable
- No Product Hunt launch found
- No app store listings, Chrome Web Store extensions, or download counts found
- No Discord or Slack community found
- No waitlist count found
- No job postings listed on YC page (0 open roles)
- No public revenue or user count data found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Fern |
|-----------|---------|-------------|----------------------------|
| **Otter.ai** | ~$70M total (Sacra) | $100M ARR (Otter.ai blog, March 2025) | Established transcription-first platform with 25M users; OtterPilot feature adds automated meeting joins but focuses on transcription and summaries rather than real-time participation |
| **Fireflies.ai** | ~$24M total (Crunchbase via search snippet) | $10.9M revenue, 35K customers (Latka, Oct 2024); $1B+ valuation (Fireflies.ai blog, June 2025) | Strong CRM integration and revenue intelligence features; 20M users across 500K+ organizations; but positioned as a note-taker, not a real-time participant |
| **Read.ai** | $81M total (Tracxn via search snippet) | $6.9M revenue (Latka, June 2024); $450M valuation (U.S. News, Oct 2024) | "Copilot everywhere" vision across meetings, email, and messaging; 1M+ new customers/month; real-time meeting intelligence but within existing platform constraints |
| **Fathom** | ~$21.7M total ($4.7M seed + $17M Series A) (TechCrunch, Sep 2024) | Revenue undisclosed; 90x revenue growth over 2 years (BusinessWire, Sep 2024) | Free AI meeting assistant with strong user satisfaction (G2 5.0 rating, 3,000+ reviews); focused on individual users rather than team-wide real-time participation |

**Why now:** [Inferred]: Several converging factors opened this opportunity in 2024–2025: (1) Foundation models crossed a real-time latency threshold — OpenAI's GPT-4o and Google's Gemini Live demonstrated sub-second voice interaction, proving real-time conversational AI is technically feasible at consumer quality; (2) multimodal model capabilities matured to handle simultaneous audio, video, and text streams; (3) enterprise adoption of AI meeting tools reached mainstream penetration (Otter.ai crossing $100M ARR, Fireflies.ai reaching $1B valuation), establishing user willingness to add AI to meetings, while also revealing the limitations of passive transcription approaches.

## Founders & Team

**Amit Yadav** — Co-founder & CEO
- PhD in AI/ECE from Purdue University, Video and Image Processing Laboratory (VIPER), advised by Prof. Edward J. Delp (ResearchGate)
- Research Scientist at Meta: trained multimodal LLMs on the LLaMA team, then trained video assistants for smart glasses at Reality Labs (YC company page; LinkedIn)
- 298 citations, 32 publications across venues including CVPR, NeurIPS, and ICASSP (Google Scholar: user -HZEXt0AAAAJ; ResearchGate)
- Research funded by DARPA under the SemaFor program; received JASSO and Mitacs Fellowships (ResearchGate)
- Twitter/X: @ishikilabs (company account); personal account not found
- LinkedIn: linkedin.com/in/amit-kumar-singh-yadav — "Cofounder Ishiki Labs | ex-Meta AI Scientist"
- GitHub: No confirmed public account found (common name yields many results)
- Google Scholar: scholar.google.com/citations?user=-HZEXt0AAAAJ

**Robert Xu** — Co-founder & CTO
- Built orchestration and low-latency inference systems for multimodal AI assistants on smart glasses at Meta for 4 years (YC company page; LinkedIn)
- Previously developed research infrastructure at Citadel Securities (YC company page; LinkedIn)
- Experience in distributed systems and operating systems (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/robert-xu — "Ishiki Labs (YC W26)"
- GitHub: No confirmed public account found (common name yields multiple profiles)

**Co-founder relationship:** Both founders were co-workers at Meta, where they worked together on multimodal AI and the Ray-Ban Meta smart glasses assistant (YC company page; LinkedIn profiles). Their shared tenure at Meta's Reality Labs provides a documented prior working relationship.

**Founder-market fit:** Amit and Robert built the exact type of product they are now commercializing — real-time, multimodal AI assistants for wearable devices — at Meta. Amit brings the ML research depth (PhD, multimodal LLM training, 32 publications) while Robert brings the systems engineering expertise (low-latency inference, orchestration). Their combined experience on Meta's smart glasses assistant is directly transferable to building a socially-aware, real-time meeting AI.

## Key Risks

**Brand disambiguation:** "Fern" is a common English word and also the name of an established YC-backed API documentation company (Fern, buildwithfern.com, YC W23). Search results for "Fern" frequently return the other company. The prior name "Ishiki Labs" is more distinctive but less memorable. This creates SEO, discoverability, and potential trademark challenges.

**Foundation model dependency:** Fern's real-time capabilities depend on underlying foundation model performance (latency, multimodal processing). As OpenAI (ChatGPT Voice), Google (Gemini Live), and others improve their real-time conversational AI, they could integrate similar "social awareness" features natively into their platforms, compressing Fern's differentiation window.

**Enterprise meeting platform gatekeeping:** To function in meetings, Fern must integrate with Zoom, Google Meet, Microsoft Teams, and other platforms. These platforms control bot access policies and could restrict or degrade third-party AI participant capabilities, particularly as they develop their own native AI meeting features (e.g., Microsoft Copilot for Teams, Google Gemini in Meet).

**Privacy and trust barrier:** An AI that joins meetings as a visible or invisible participant raises distinct privacy concerns compared to a passive transcriber. Enterprise procurement teams and end users may resist an AI "participant" that listens to everything, particularly in Shadow Mode. Regulatory requirements (GDPR, state recording consent laws) vary by jurisdiction and could limit adoption.

**Crowded competitive landscape:** The AI meeting assistant market includes well-funded incumbents (Otter.ai at $100M ARR, Fireflies.ai at $1B valuation, Read.ai with $81M raised) that could add real-time participation features to their existing products with large installed bases.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.5–3.7B AI meeting assistant market (Market Research Future, Market.us, Data Bridge Market Research, 2024, 25–35% CAGR — via search snippets) |
| SAM | No public data found |
| Traction | YC LinkedIn launch post: 431 likes, 113 comments (LinkedIn, Feb 20, 2026); no other public traction metrics found |
| Revenue Signal | No public data found |
| Founders | Amit Yadav (CEO): PhD Purdue, ex-Meta Research Scientist (LLaMA, Reality Labs), 298 citations. Robert Xu (CTO): ex-Meta (4 yrs, multimodal AI for smart glasses), ex-Citadel Securities |
| Competitors | Otter.ai (~$70M raised, $100M ARR, transcription-first vs. real-time participant); Fireflies.ai (~$24M raised, $10.9M revenue, CRM-integrated note-taker); Read.ai ($81M raised, $6.9M revenue, cross-platform copilot); Fathom (~$21.7M raised, revenue undisclosed, free individual note-taker) |
| Moat Signals | No public data found; founders have directly relevant technical experience from building Meta's smart glasses assistant |
| Risk Factors | Brand disambiguation with another YC company named "Fern," foundation model commoditization, enterprise meeting platform gatekeeping, privacy/trust barriers for AI meeting participants |
| Founder Reach | Amit Yadav: Twitter not found, LinkedIn (linkedin.com/in/amit-kumar-singh-yadav), GitHub not confirmed, Google Scholar 298 citations. Robert Xu: Twitter not found, LinkedIn (linkedin.com/in/robert-xu), GitHub not confirmed |
| Distribution Signals | YC LinkedIn launch post (Feb 20, 2026, 431 likes, 113 comments); no Product Hunt, app store, or Chrome Web Store presence found |
| Emails | team@ishikilabs.ai (YC company page) |
