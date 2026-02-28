# Caretta

> Realtime AI for Sales Calls

| Field | Value |
|-------|-------|
| Website | https://www.caretta.so |
| YC Page | https://www.ycombinator.com/companies/caretta |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Sales |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, Sales, Sales Enablement, AI Assistant |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

## The Idea

**Problem:** B2B sales representatives frequently encounter deeply technical product questions, complex objections, and information requests during live customer calls that they cannot answer confidently in real time. Today, reps rely on post-call analysis tools (e.g., Gong, Chorus) that surface insights only after the call ends, fragmented internal knowledge bases, or escalation to subject-matter experts. This results in lost deal momentum, inconsistent messaging, and institutional knowledge remaining siloed in individual reps' heads.

**Approach:** Caretta joins sales reps on live calls and listens in real time. When it detects that a rep needs help — with a customer question, objection, or information request — it surfaces relevant answers drawn from the organization's documents, websites, internal playbooks, blogs, chat history, and top-performing rep conversations. The system lives in Slack to integrate with team workflows. Caretta's knowledge base expands automatically with every call: each conversation adds to its objection library and organizational knowledge, creating what the company describes as "compounding organizational advantage" (YC company page). The product is described as requiring minimal setup and generating customizable, proprietary AI models adapted to individual sales strategies (SignalBase, Dec 2025).

**Differentiation:** Unlike Gong ($584M raised, $332.3M revenue in 2024 per Getlatka) and Chorus (acquired by ZoomInfo), which are primarily post-call conversation intelligence platforms, Caretta operates during the call in real time. Salesken ($41M raised, per Tracxn) and Balto (~$57M raised, per Tracxn) also provide real-time call assistance, but Salesken focuses on coaching cues and performance analytics, while Balto targets contact center agents rather than B2B sales teams. Caretta differentiates by positioning as a self-improving knowledge system that learns from each call rather than offering scripted coaching prompts, and by enabling organizations to build proprietary AI models tuned to their sales strategies (SignalBase, Dec 2025).

**Business Model:** No public pricing page was found (website returned HTTP 429 at time of research). [Inferred]: Most likely monetization path is a per-seat SaaS subscription for sales teams, consistent with the B2B sales enablement category and the company's SaaS tag.

**TAM/SAM:** The global conversational AI market was estimated at $11.58 billion in 2024 and is projected to reach $41.39 billion by 2030, growing at a 23.7% CAGR (Grand View Research, 2024 via search snippet). The conversation intelligence software market was valued at approximately $14.0 billion in 2025, projected to reach $51.0 billion by 2034 at a 15.46% CAGR (360 Research Reports, 2025 via search snippet). No specific SAM estimate for the real-time AI sales call sub-segment was found.

**GTM / Distribution:** The product integrates with Slack for team-level adoption and supports Google Calendar, Microsoft Graph, and HubSpot CRM integrations (Extruct AI). The pre-seed funding announcement mentions plans to scale market outreach (SignalBase, Dec 2025). [Inferred]: Most likely distribution path is bottom-up adoption within sales teams via the Slack integration, with expansion through CRM integrations and direct sales to revenue leaders.

## Defensibility

The company describes a data flywheel: every call expands its knowledge base and objection library, meaning the system becomes more valuable to an organization as it processes more conversations (YC company page). This creates switching costs — a customer's accumulated call data and organizational knowledge would not transfer to a competitor. The self-improving nature also means early adopters build a more refined model over time, creating a data advantage specific to each customer's sales context.

**Market structure:** Post-call conversation intelligence incumbents like Gong and Chorus have built their products, sales motions, and pricing around recording and analyzing calls after they end. [Inferred]: Shifting to real-time intervention would require these incumbents to re-architect their core product, retrain their AI models for low-latency inference, and potentially cannibalize their existing analytics-focused value proposition, which centers on management dashboards and deal forecasting rather than in-call rep assistance.

**Commoditization risk:** Real-time speech processing and LLM-powered knowledge retrieval are capabilities accessible to well-funded competitors. Gong, Salesken, Balto, and Cresta all have engineering teams and capital that could build similar real-time features. The underlying AI infrastructure (speech-to-text, LLMs, RAG) is broadly available. The company's defensibility depends on execution speed and the accumulation of customer-specific knowledge bases that create switching costs over time.

## Market & Traction

**Traction signals:**
- $1.3M pre-seed raised, announced December 18, 2025 (foundern.com). Investors: Y Combinator, Long Journey, e2vc, Volta Ventures, and Görkem Yurtseven (co-founder of fal) (foundern.com, Dec 2025).
- Y Combinator Winter 2026 batch participant (YC company page).
- GitHub organization (github.com/CarettaAI): 2 public repositories, 1 star total (GitHub, Feb 2026).
- Kayra Bahadır X/Twitter: @kaybahadir, 184 followers (X.com via search snippet).
- Omar Elamin X/Twitter: @omar_elamin, joined Feb 2022, no posts (X.com via search snippet).
- Company LinkedIn: linkedin.com/company/carettaai (YC page). Follower count not retrievable.
- No Product Hunt launch found for the current product.
- Website not accessible at time of research (HTTP 429).
- No app store listings, Chrome extension, or Discord/Slack community found.

Note: The company previously operated under the name VoysAI. The domain voysai.com now redirects to "Caretta | Realtime Sales AI" (web search, Feb 2026). A LinkedIn post by Pavlos Markesinis announced "VoysAI is live" (LinkedIn, via search snippet). Prior-product traction metrics under the VoysAI name were not found.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Caretta |
|------------|---------|-------------|-------------------------------|
| **Gong** | $584M total, Series F at $7.25B valuation (SalesTools AI, Oct 2025 via search snippet) | $332.3M revenue in 2024 (Getlatka via search snippet) | Post-call conversation intelligence and revenue analytics platform; does not provide real-time in-call assistance |
| **Salesken** | $41M total across 11 rounds, Series B $22M in Nov 2021 (Tracxn via search snippet) | $17.9M revenue in 2024 (Getlatka via search snippet) | Real-time call coaching with cue cards and objection detection; focuses on rep performance coaching rather than organizational knowledge retrieval |
| **Balto** | ~$57M total, Series B $37.5M (Balto blog) | $22.1M revenue, 3.2K customers in 2024 (Getlatka via search snippet) | Real-time guidance during calls; primarily targets contact center agents rather than B2B sales reps |
| **Cresta** | $276M total, Series D $125M in Nov 2024 (Cresta press release) | Revenue not publicly disclosed | AI platform for contact centers with real-time coaching; broader focus on both human and virtual agents across customer service and sales |

**Why now:** [Inferred]: The convergence of several factors in 2024-2025 created the opening: (1) LLM capabilities reached sufficient quality for reliable real-time retrieval-augmented generation during live conversations; (2) speech-to-text latency dropped to levels enabling sub-second transcription needed for in-call assistance (Caretta's own GitHub repo wraps NVIDIA's Parakeet model for transcription); (3) sales teams increasingly adopted Slack and CRM integrations as standard workflow, creating natural distribution channels; (4) the post-call analytics market matured (Gong at $332M revenue), validating demand for conversation intelligence while leaving the real-time intervention layer underserved.

## Founders & Team

**Kayra Bahadır** — Co-founder & CEO
- Bachelor's in Computer Science and Engineering, TU Delft (Delft University of Technology) (TU Delft profile)
- Previously organized humanitarian relief efforts through the Turkish Student Association at TU Delft (TU Delft profile)
- Twitter/X: [@kaybahadir](https://x.com/kaybahadir), 184 followers (X.com via search snippet)
- LinkedIn: [linkedin.com/in/kayrabahadir](https://www.linkedin.com/in/kayrabahadir/) — "Caretta CEO (YC W26)"
- GitHub: No individual public repos found; member of CarettaAI organization

**Omar Elamin** — Co-founder & CTO
- TU Delft graduate (LinkedIn via search snippet)
- Previously scaled a Discord bot to 30,000 users (LinkedIn via search snippet)
- GitHub: [github.com/omar-elamin](https://github.com/omar-elamin) — KeroBot (Discord bot), 1 star, 78 commits, Python (GitHub)
- Twitter/X: [@omar_elamin](https://x.com/omar_elamin), joined Feb 2022, no posts (X.com via search snippet)
- LinkedIn: [linkedin.com/in/omarelamin](https://www.linkedin.com/in/omarelamin) — "CTO of Caretta (YC W26)"
- Personal site: omarelamin.com (previously linked to voysai.com)

**Pavlos Markesinis** — Founder
- TU Delft background (LinkedIn via search snippet)
- Previously scaled a Discord bot to 30,000 users (LinkedIn via search snippet); announced "VoysAI is live" on LinkedIn (LinkedIn post, via search snippet)
- Twitter/X: No public account found
- LinkedIn: [nl.linkedin.com/in/pavlosmarkesinis](https://nl.linkedin.com/in/pavlosmarkesinis) — "Founder @ caretta.so (YC W26)"
- GitHub: No individual public repos found
- Personal site: pavlosm.com (not accessible at time of research)

**Co-founder relationship:** All three founders attended TU Delft (Delft University of Technology, Netherlands), indicating a shared university background. The company was originally described as a "Dutch software startup" based in Amsterdam (Nordic9), consistent with the founders' TU Delft connection before relocating to San Francisco for YC.

**Founder-market fit:** The founding team consists of three technical co-founders from TU Delft with demonstrated experience building real-time communication products (Discord bots scaled to 30K users). Their prior project VoysAI (which became Caretta) indicates iterative experience in the AI voice/conversation space. The team's technical depth in real-time systems and natural language processing is directly relevant to building a live call AI assistant. No advisors, board members, or notable investors beyond those listed in the pre-seed round were found.

## Key Risks

**Brand name disambiguation:** Multiple unrelated entities share the "Caretta" name, including a Kubernetes observability tool by Groundcover (1,991 GitHub stars), Caretta Software Ltd (UK), Caretta Research, and several LinkedIn company pages. This creates SEO competition and potential brand confusion, particularly in developer and enterprise search contexts.

**Incumbent feature addition:** Gong ($584M raised, $332.3M revenue) has the engineering resources and existing customer base to add real-time call features as an extension of its platform. In October 2025, Gong raised $250M in Series F (SalesTools AI via search snippet), providing substantial capital for product expansion. If Gong ships a competitive real-time feature, Caretta's differentiation narrows significantly.

**Prior product pivot:** The company previously operated as VoysAI before rebranding to Caretta. voysai.com still redirects to Caretta (web search, Feb 2026). No public traction metrics were found for either VoysAI or the current Caretta product, making it unclear how much validated customer demand exists for the current approach.

**Enterprise sales cycle dependency:** The product targets revenue teams at B2B organizations, which typically involve multi-stakeholder procurement, security reviews, and long sales cycles. As a pre-seed company with 4 people, executing an enterprise sales motion against well-established incumbents with existing customer relationships and brand recognition presents a distribution challenge.

**Real-time latency requirements:** The core product value depends on delivering relevant information during a live conversation with sub-second latency. Any degradation in transcription speed, knowledge retrieval time, or answer generation quality directly undermines the user experience and rep trust in the tool. The company's GitHub repo for transcription wraps NVIDIA's Parakeet model (GitHub, CarettaAI/caretta-transcription), indicating reliance on external model quality.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.58B conversational AI market in 2024, projected $41.39B by 2030 at 23.7% CAGR (Grand View Research, 2024 via search snippet); conversation intelligence software ~$14.0B in 2025 (360 Research Reports via search snippet) |
| SAM | No public data found |
| Traction | YC W26 batch; $1.3M pre-seed (foundern.com, Dec 2025); 2 GitHub repos, 1 star (GitHub, Feb 2026) |
| Revenue Signal | No public data found |
| Founders | Kayra Bahadır (CEO): TU Delft CS. Omar Elamin (CTO): TU Delft, scaled Discord bot to 30K users. Pavlos Markesinis (Founder): TU Delft, built VoysAI predecessor product. |
| Competitors | Gong ($584M raised, $332.3M rev, post-call analytics vs. Caretta's real-time); Salesken ($41M raised, $17.9M rev, coaching cues vs. knowledge retrieval); Balto (~$57M raised, $22.1M rev, contact center focus vs. B2B sales); Cresta ($276M raised, revenue unknown, contact center platform vs. sales-team-specific tool) |
| Moat Signals | Self-improving knowledge base that compounds with each call; customer-specific data accumulation creates switching costs |
| Risk Factors | Incumbent feature addition from Gong/Cresta, brand name disambiguation challenge, enterprise sales cycle with 4-person team |
| Founder Reach | Kayra Bahadır: Twitter 184, LinkedIn not retrievable, GitHub 1 star (org). Omar Elamin: Twitter 0 posts, LinkedIn not retrievable, GitHub 1 star (KeroBot). Pavlos Markesinis: Twitter not found, LinkedIn not retrievable, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
