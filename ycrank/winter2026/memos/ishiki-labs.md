# Ishiki Labs

> Building the Future of Multimodal AI

| Field | Value |
|-------|-------|
| Website | https://www.ishikilabs.ai/ |
| YC Page | https://www.ycombinator.com/companies/ishiki-labs |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | No public data found |
| Tags | Artificial Intelligence, Deep Learning, Generative AI |

## The Idea

**Problem:** Current multimodal AI models (e.g., ChatGPT Voice, Gemini Live) can see and hear but lack social awareness — they interrupt when they shouldn't and cannot distinguish whether the user is speaking to them or to someone else (YC company page). This is a friction point for professionals using AI assistants during live meetings, where the AI must remain contextually aware but non-intrusive. Existing meeting assistants (Otter.ai, Fireflies.ai, Granola) primarily operate as post-hoc transcription and summarization tools, or require explicit bot-like participation that many users find disruptive.

**Approach:** Ishiki Labs is building a multimodal AI that maintains continuous situational awareness of a conversation but knows when to stay silent, intervening only when the user explicitly needs assistance (YC company page). Their first product, Fern (fern-0.1), joins meetings as either an invisible copilot or active participant, providing real-time proactive coaching, expert opinions on demand, and instant task delegation — with zero unsolicited interruptions (YC company page). The system is designed to operate at latencies comparable to ChatGPT Voice and Gemini Live.

**Differentiation:** Ishiki Labs differentiates from existing meeting assistants on the dimension of social awareness and real-time interactivity:
- **Otter.ai** and **Fireflies.ai** primarily record, transcribe, and summarize meetings after the fact; they do not provide real-time interactive coaching or contextual silence.
- **Granola** operates as an AI notepad that enhances user-typed notes with transcript context, but does not offer real-time conversational assistance.
- **Read.ai** analyzes meeting dynamics but focuses on post-meeting insights rather than live, socially-aware intervention.
- Fern's core design principle — knowing when *not* to speak while still tracking conversation context — addresses a gap unserved by transcription-first tools.

**Business Model:** No pricing page or monetization details are publicly available on the company website or YC page. [Inferred]: Most likely monetization path is a SaaS subscription model (per-seat or per-team), consistent with the B2B meeting assistant category, potentially with a freemium tier for individual users and paid tiers for teams/enterprises.

**TAM/SAM:** The AI meeting assistants market was valued at $3.5 billion in 2025 and is projected to reach $34.28 billion by 2035 at a 25.62% CAGR (Market Research Future via search snippet). The broader conversational AI market was valued at $14.79 billion in 2025 and is projected to reach $82.46 billion by 2034 (Fortune Business Insights via search snippet). No company-specific SAM estimate found.

**GTM / Distribution:** No public GTM data found. [Inferred]: Most likely distribution path is product-led growth via individual professionals (salespeople, consultants, executives) who try Fern in their own meetings, with expansion to team-wide adoption. The YC network provides an initial distribution channel. The product's real-time, in-meeting nature favors viral adoption where meeting counterparts observe the tool in use.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) proprietary training data from real meeting interactions that improves the model's social awareness and timing over time, (2) the technical complexity of building low-latency multimodal inference that can process audio/video streams in real-time while making nuanced social judgments about when to intervene, and (3) user habit formation — once a professional relies on a real-time meeting copilot, switching costs increase due to personalization and workflow integration. These are unproven at this stage.

**Market structure:** [Inferred]: Existing meeting assistant incumbents (Otter.ai, Fireflies.ai) are built on a transcription-and-summarization architecture. Shifting to a real-time, socially-aware copilot model would require fundamental changes to their product architecture, user expectations, and inference infrastructure. However, large foundation model providers (OpenAI, Google) with existing voice-mode products could add social awareness capabilities to their general-purpose assistants. No structural barrier identified at this stage beyond execution speed.

**Commoditization risk:** The underlying multimodal AI capabilities (speech recognition, language understanding, voice synthesis) are increasingly available through foundation model APIs. The differentiated layer — social awareness and conversational timing — is a research-heavy capability that the founders have direct experience building at Meta (for smart glasses). However, as multimodal models improve, this capability could be replicated by well-resourced competitors or integrated natively into platforms like Zoom, Teams, or Google Meet.

## Market & Traction

**Traction signals:**
- Company Twitter/X: @ishikilabs (YC company page; follower count not retrievable)
- LinkedIn: linkedin.com/company/ishiki-labs (YC company page; follower count not retrievable)
- No Product Hunt launch found.
- No app store presence, Chrome extension installs, Discord/Slack community, or web traffic estimates found.
- No revenue, user count, or waitlist data publicly available.
- 0 open job postings (YC company page).

**Competitive landscape:**

| Competitor | Funding | Revenue/Valuation | Key Differentiator vs. Ishiki Labs |
|---|---|---|---|
| **Otter.ai** | ~$70M total raised (Crunchbase via search snippet) | $100M ARR (Sacra, March 2025 via search snippet), 25M+ users | Post-meeting transcription and summarization focus; OtterPilot bot joins meetings but does not provide real-time socially-aware coaching |
| **Fireflies.ai** | $19M total raised (search snippet) | $10.9M revenue (Latka, Oct 2024 via search snippet); $1B valuation (Fireflies blog, June 2025 via search snippet); 20M users | Automation-first with CRM integrations and action item extraction; does not offer real-time conversational intervention |
| **Granola** | $67.2M total raised (Tracxn via search snippet) | $250M valuation (TechCrunch, May 2025 via search snippet) | AI-enhanced notepad that augments user notes with transcript context; no real-time voice interaction |
| **Read.ai** | $81M total raised (search snippet) | $6.9M revenue (Latka, June 2024 via search snippet); $450M valuation (TechCrunch, Oct 2024 via search snippet) | Post-meeting analytics and engagement scoring across meetings, email, and Slack; not a real-time copilot |

**Why now:** [Inferred]: Several specific catalysts have converged in 2024–2025: (1) Foundation models crossed a latency threshold enabling real-time multimodal processing — OpenAI's GPT-4o voice mode (May 2024) and Google's Gemini Live (2024) demonstrated sub-second voice interactions at consumer scale; (2) Meta's Orion AR glasses program (where both founders worked) validated the technical feasibility of always-on, socially-aware AI assistants running on constrained hardware; (3) Enterprise adoption of AI meeting tools reached mass market — Otter.ai hit $100M ARR and Fireflies.ai reached unicorn status, proving willingness to pay for meeting AI — creating demand for a next-generation product that goes beyond transcription to real-time coaching.

## Founders & Team

**Amit Yadav** — Co-founder & CEO
- Ph.D. in Electrical and Computer Engineering, Purdue University (2021–present), advised by Prof. Edward J. Delp at the Video and Image Processing Laboratory (VIPER) (personal website, ResearchGate)
- B.Tech in Electrical Engineering with Computer Science minor, IIT Gandhinagar (2016–2020), completed in 3.5 years; Director's Silver Medal for outstanding performance (personal website)
- Former Research Scientist at Meta: worked on the LLaMA team training multimodal LLMs and in Reality Labs training video assistants for smart glasses (YC company page)
- 20+ publications at top conferences including CVPR, NeurIPS, and ICASSP (YC company page); 298 cited by (Google Scholar via search snippet); 228 citations on ResearchGate (ResearchGate via search snippet)
- Research focus: multimodal LLMs, speech processing, media forensics, deepfake detection (Google Scholar via search snippet)
- Prior experience: Enphase Energy (embedded software engineer, Excellence Award), Rakuten (computer vision research intern), Mitacs Globalink Research Intern at Carleton University (personal website)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/amit-kumar-singh-yadav/ (search result)
- GitHub: No confirmed public repos found

**Robert Xu** — Co-founder & CTO
- Spent 4 years at Meta building advanced orchestration systems for running multimodal assistants on smart glasses, including work on Orion AR glasses, optimizing for latency and compute (YC company page, eFinancialCareers via search snippet)
- Previously developed research infrastructure at Citadel Securities (YC company page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/robert-xu/ (search result)
- GitHub: Possibly github.com/RobertYCXu (26 repos, search result) — not confirmed as the same individual

**Co-founder relationship:** Both Amit Yadav and Robert Xu worked at Meta, where Amit was on the LLaMA/Reality Labs research side and Robert built orchestration infrastructure for multimodal assistants on smart glasses. Their overlapping work on Meta's smart glasses multimodal AI systems indicates a shared employer and likely direct collaboration.

**Founder-market fit:** Both founders spent years at Meta building the exact type of system Ishiki Labs is now commercializing — always-on, low-latency multimodal AI assistants that must operate in socially complex environments (smart glasses worn during conversations). Amit brings deep ML research expertise (PhD, 20+ publications, work on LLaMA multimodal training), while Robert brings systems engineering expertise (4 years optimizing latency and compute for real-time multimodal inference). The combination of research depth and production systems experience is directly relevant to building a real-time, socially-aware meeting copilot.

## Key Risks

**Foundation model platform risk:** Ishiki Labs' real-time meeting copilot depends on the continued availability and pricing stability of foundation model APIs (or sufficient compute for self-hosted models). If OpenAI, Google, or Anthropic raise API prices or add restrictions, unit economics could shift. Conversely, if these providers add native social awareness to their own voice assistants (ChatGPT Voice, Gemini Live), Ishiki Labs' differentiation narrows.

**Incumbent integration risk:** Zoom, Microsoft Teams, and Google Meet each have native AI meeting features and are actively expanding them. Microsoft Copilot already provides real-time meeting assistance within Teams. If these platforms add socially-aware, non-intrusive coaching natively, Ishiki Labs would need to compete against bundled, zero-marginal-cost features from platform owners with captive user bases.

**Brand disambiguation:** Multiple unrelated entities use "Ishiki" in their names (Ishiki Lab at ishiki-lab.org, various "Fern" branded products including Fern Labs, Meet Fern, BuildWithFern), which could create confusion in search results and brand recognition.

**Narrow differentiation surface:** The core differentiator — knowing when to stay silent — is a single feature dimension. If competitors add a "do not disturb" or "listen-only" mode to their existing meeting assistants, the perceived gap could shrink, leaving Ishiki Labs competing on the same transcription and summarization axes where incumbents have years of data and user base advantages.

**Two-person team executing against well-funded incumbents:** While small team size is normal at pre-seed, the competitive set includes companies with $19M–$81M raised, hundreds of employees, and tens of millions of users. Ishiki Labs must achieve product-market fit before incumbents close the social awareness gap.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.5B AI meeting assistants market in 2025, projected $34.28B by 2035 at 25.62% CAGR (Market Research Future via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Amit Yadav (CEO): PhD Purdue, ex-Meta LLaMA/Reality Labs, 20+ publications. Robert Xu (CTO): ex-Meta (4 yrs multimodal AI/Orion), ex-Citadel Securities |
| Competitors | Otter.ai (~$70M raised, $100M ARR, transcription-first); Fireflies.ai ($19M raised, $1B valuation, automation-first); Read.ai ($81M raised, $450M valuation, analytics-first); Granola ($67.2M raised, $250M valuation, AI notepad) |
| Moat Signals | No public data found |
| Risk Factors | Foundation model platform dependency, incumbent integration by Zoom/Teams/Meet, narrow differentiation surface |
| Founder Reach | Amit Yadav: Twitter not found, LinkedIn linkedin.com/in/amit-kumar-singh-yadav/, GitHub not found. Robert Xu: Twitter not found, LinkedIn linkedin.com/in/robert-xu/, GitHub not confirmed |
| Distribution Signals | No public data found |
