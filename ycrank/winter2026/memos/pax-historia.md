# Pax Historia

> The first AI-powered grand strategy platform

| Field | Value |
|-------|-------|
| Website | https://www.paxhistoria.co |
| YC Page | https://www.ycombinator.com/companies/pax-historia |
| Batch | Winter 2026 |
| Industry | Consumer / Consumer -> Gaming |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Marketplace, Consumer, Gaming |
| YC Partner | Harshita Arora |
| Emails | careers@paxhistoria.co |

## The Idea

**Problem:** Grand strategy and alternate-history games (Civilization, Europa Universalis, Hearts of Iron) rely on pre-designed narrative paths and scripted AI decision trees. Players are constrained to the scenarios and mechanics the developers coded. Creating new scenarios requires modding tools with steep learning curves. The customer segment is strategy-game enthusiasts who want open-ended, emergent gameplay without developer-imposed guardrails.

**Approach:** Pax Historia is a browser-based alternate-history sandbox game where players choose a country and a moment in time, then issue text-based commands to reshape history. A generative AI model simulates global events, generates narrative reports, and updates the map based on player actions. AI-powered NPCs (nations, leaders, factions) respond dynamically to diplomacy, warfare, and economic decisions. The platform also enables users to create, edit, copy, and publish custom maps, actors, and historical context as "presets" that other players can discover and play (YC launch page).

**Differentiation:** Unlike traditional grand strategy games (Civilization, Paradox titles), Pax Historia has no tax sliders, tech trees, or pre-scripted event chains — all gameplay is emergent through AI-generated narrative. Unlike AI Dungeon (Latitude), which is a text-based RPG focused on individual character stories, Pax Historia is a geopolitical strategy game with a visual map, country-level play, and a community marketplace for user-created presets. The marketplace/community layer — with 4,000+ published presets (YC page) — creates a content ecosystem that single-player-focused competitors lack.

**Business Model:** Free-to-play with token-based consumption. Players receive 1 token on registration and 0.2 tokens daily (capped at 1.2). Tokens cost approximately $1 USD per token, and the pro AI model costs ~0.02 tokens per turn, meaning $1 of purchased tokens lasts roughly 15–20 minutes of active gameplay (VGTimes review). A "Pax Patron" subscription offers unlimited access via OpenRouter without per-token billing. The company also mentions ad revenue covering some costs (VGTimes review). The four open job postings offering $150K–$240K salaries and 0.25%–1.00% equity suggest the company is investing in growth (YC jobs page).

**TAM/SAM:** The global strategy games market was valued at approximately $18 billion in 2024 and is projected to reach $35 billion by 2033 at a 7.8% CAGR (Business Research Insights, 2025 via search snippet). The online strategy games market is estimated at $21.44 billion in 2025, projected to reach $33.77 billion by 2030 at a 9.51% CAGR (Mordor Intelligence, 2025 via search snippet). No public SAM estimate specific to AI-powered or alternate-history strategy games was found.

**GTM / Distribution:** The company has relied on organic growth, stating it "organically built a passionate fanbase of tens of thousands of daily active players" over four months (YC company description). Distribution channels include the YC launch (47 upvotes on YC Launch page), social media virality (Brycent, a gaming content creator, posted about the game on X), TikTok discoverability (multiple TikTok topics exist for Pax Historia), and the community marketplace itself — user-created presets function as a content flywheel, drawing new players to discover and play scenarios. A Short-Form Content Creator job posting ($300–$900/month, remote) signals investment in social/video-based distribution (YC jobs page). A Founding Engineer (Unity Mobile) posting indicates a forthcoming mobile app (YC jobs page).

## Defensibility

**User-generated content network effect:** The 4,000+ published presets with 50+ plays each (YC page) represent a growing library of community-created content that makes the platform more valuable as it scales. Each new preset attracts players; each new player creates potential preset creators. This UGC flywheel is difficult to replicate from a cold start.

**Data advantage:** The company has processed 100+ billion tokens weekly (YC page), generating gameplay interaction data across thousands of scenarios that could inform model fine-tuning and game balancing.

**Switching costs:** Player investment in created presets, game history, and community reputation creates retention. The community wiki (wiki.paxhistoria.co) and Fandom wiki (paxhistoria.fandom.com) indicate an emerging knowledge base and community identity.

**Market structure:** Large strategy game publishers (Paradox Interactive, Firaxis/2K) ship premium $40–$60 titles with DLC-based monetization and years-long development cycles. Adopting an AI-first, free-to-play, UGC-marketplace model would cannibalize their existing revenue streams and require fundamentally different technical infrastructure (LLM serving at scale). Their development pipelines are optimized for hand-crafted content, making a pivot to AI-generated emergent gameplay structurally difficult without disrupting their core product lines.

**Commoditization risk:** The core mechanic — wrapping an LLM in a geopolitical game interface — is technically reproducible. A fan-made clone already exists on GitHub (Arkniem/Pax-Historia, powered by Gemini, 6 stars). Barriers to entry are the UGC content library, community scale, and the engineering work to make AI responses consistent and game-balanced at scale. Any well-resourced team with LLM access could build a competing prototype, but replicating the community and content library is harder.

## Market & Traction

**Traction signals:**
- 35,000 daily active users (YC page, YC launch page)
- Nearly 20 million rounds played (Eli Bullock-Papa LinkedIn, via search snippet)
- 4,000+ published presets with 50+ plays each (YC page)
- 100+ billion tokens processed weekly (YC page)
- Community publishes hundreds of scenarios per day, millions of rounds per week (YC funding search snippet)
- YC Launch page: 47 upvotes (YC launch page)
- YC official X account launch post tagging @Eli_BullockPapa and @Ryzhang22, dated ~February 6, 2026 (X/@ycombinator)
- Brycent (gaming content creator) organic X post describing the game as "an AI version of Civ" (X/@brycent)
- VGTimes first impressions article published (VGTimes)
- Kotaku game listing page (Kotaku — metadata only, no editorial article)
- TikTok discoverability: multiple topic pages ("how to play Pax Historia on phone," "how to play without tokens," "how to use DeepSeek Pax Historia") (TikTok)
- Community wiki: wiki.paxhistoria.co (active)
- Fandom wiki: paxhistoria.fandom.com (active)
- Discord server: discord.gg/Pt437X89dj (member count not publicly available)
- Reddit: r/PaxHistoria (member count not publicly available)
- YouTube: @PaxHistoriaOfficial (subscriber count not publicly available)
- LinkedIn company page: linkedin.com/company/pax-historia (follower count not publicly available)
- GitHub org: github.com/paxhistoria (public repos not detailed)
- 4 active job postings on YC/Ashby (YC jobs page)
- No Product Hunt listing found

**Competitive landscape:**

1. **Latitude (AI Dungeon / Voyage)** — $4.05M total funding (TechCrunch, Feb 2021 via search snippet); 1.5M MAU reported circa 2021 (revenue unknown). AI Dungeon is a text-based RPG focused on individual character narratives, not geopolitical strategy. Latitude's newer title Voyage uses DeepInfra infrastructure. Differentiator vs. Pax Historia: AI Dungeon focuses on single-character storytelling rather than nation-level grand strategy with a visual map and community preset marketplace.

2. **Paradox Interactive (Europa Universalis, Hearts of Iron, Stellaris)** — Publicly traded (OMX Stockholm). Revenue SEK 2.1 billion (~$200M) in 2024 (public filings). Produces hand-crafted grand strategy titles with scripted events and DLC monetization. Differentiator vs. Pax Historia: deep, polished mechanical gameplay with years of content; lacks AI-emergent narratives and user-generated scenario marketplace.

3. **Firaxis / 2K Games (Civilization series)** — Subsidiary of Take-Two Interactive (publicly traded). Civilization VII launched 2025. Premium $60+ titles with millions of copies sold per installment. Differentiator vs. Pax Historia: established franchise with mainstream recognition and polished 4X gameplay; does not offer text-based AI-driven emergent play.

4. **WorldBox — God Simulator** — Indie sandbox god sim by sole creator Maxim Karpenko (since 2012). Players spawn civilizations and watch them evolve on a map. Available on Steam and mobile. Differentiator vs. Pax Historia: observation-focused god game without text-based player agency or AI-generated narrative; no community scenario marketplace.

**Why now:** [Inferred]: The convergence of three factors opened this opportunity: (1) LLM quality crossed a threshold where AI-generated geopolitical narratives are coherent enough to sustain gameplay (GPT-4-class models became available in 2023–2024, with continued cost reductions); (2) inference cost reductions (e.g., DeepSeek, open-weight models via OpenRouter) made token-intensive gameplay economically viable at consumer price points; (3) the UGC/creator economy trend in gaming (Roblox, Fortnite Creative) established player expectations for user-created content, which Pax Historia applies to the strategy genre.

## Founders & Team

**Eli Bullock-Papa** — Co-founder
- Education: Virginia Tech College of Engineering (LinkedIn via search snippet)
- Prior roles: Capital One, Consulting Group at Virginia Tech, Williamson Health, Olive Garden (LinkedIn via search snippet)
- Devpost portfolio: elibp13 (Devpost)
- Twitter/X: @Eli_BullockPapa (YC/@ycombinator launch tweet) — follower count not retrievable
- LinkedIn: linkedin.com/in/elibullockpapa — 278 connections (LinkedIn via search snippet)
- GitHub: No confirmed personal public repos found

**Ryan Zhang** — Co-founder
- Listed as "Ryan Zhang" on the YC page with bio "I like history" (YC company page). A LinkedIn profile for "Eric Zhang - Pax Historia" exists at linkedin.com/in/eric-zhang-0425a9297/ with 205 connections (LinkedIn via search snippet), suggesting the co-founder may go by both names.
- Twitter/X: @Ryzhang22 (YC/@ycombinator launch tweet) — follower count not retrievable
- LinkedIn: linkedin.com/in/eric-zhang-0425a9297 — 205 connections (LinkedIn via search snippet)
- GitHub: No confirmed personal public repos found
- Note: A separate "Ryan Zhang" (Darden MBA 2025, ex-KPMG Tokyo) was found building Remeo.AI (Darden Career Blog, May 2025). This appears to be a different individual based on distinct LinkedIn profiles and different ventures.

**Co-founder relationship:** Both founders are based in San Francisco. No shared prior employer or university overlap is visible from the data gathered (Eli attended Virginia Tech; Ryan/Eric Zhang's educational background was not confirmed from public sources).

**Founder-market fit:** Eli Bullock-Papa has an engineering background (Virginia Tech College of Engineering) and software development experience (Capital One, Devpost portfolio). Ryan Zhang's YC bio — "I like history" — and the product's deep focus on alternate-history scenarios suggest personal domain passion. The team of 3 has built a product that reached 35,000 DAU organically in four months, demonstrating execution speed. The company is backed by Y Combinator, Pace Capital, and Z Fellows (LinkedIn/search snippet).

## Key Risks

**LLM cost structure dependency:** The game consumes 100+ billion tokens per week (YC page) and $1 of player spend lasts only 15–20 minutes (VGTimes review). The business model depends on inference costs continuing to decline. If LLM providers raise prices or cost reductions stall, unit economics could become unsustainable. Mitigation: OpenRouter integration allows switching between models; the "Pax Patron" subscription may help smooth revenue predictability.

**AI quality and consistency:** The VGTimes review documents AI models ignoring player orders, excessive pliability to prompt manipulation, lack of quantifiable economic metrics in gameplay, and pacing issues from computational latency. The review notes a "systemic paradox" where optimal play involves using external AI tools (ChatGPT, Claude) simultaneously. These issues may limit retention among strategy-game enthusiasts who expect mechanical depth and consistency.

**Replicability and clone risk:** A fan-made Gemini-powered clone already exists on GitHub (Arkniem/Pax-Historia). The core game mechanic — LLM + map + geopolitical context — is architecturally simple to replicate. If a larger studio (e.g., Paradox, Latitude) or a well-funded AI gaming startup decides to build a similar product, the primary moat is the existing UGC library and community, which at pre-seed stage is still nascent.

**Platform/model provider dependency:** Gameplay quality depends on third-party LLM providers accessed via OpenRouter. Changes to model availability, API terms, content moderation policies, or rate limits by providers (OpenAI, Anthropic, DeepSeek, etc.) could disrupt the game experience without the company having direct control. The AI/ML founding engineer hire (YC jobs page) may indicate plans to bring model capabilities in-house.

**Monetization tension with engagement:** The free-to-play token system gives only ~6 minutes of daily free gameplay (0.2 tokens/day at ~0.02 tokens/turn). The VGTimes review describes this as a "hidden barrier." Converting free users to paying users at a rate sufficient to cover high inference costs is unproven. Ad revenue is mentioned as a supplementary source but its scale is unknown.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global strategy games market ~$18B in 2024, projected $35B by 2033 at 7.8% CAGR (Business Research Insights, 2025 via search snippet); Online strategy games $21.44B in 2025 (Mordor Intelligence, 2025 via search snippet) |
| SAM | No public data found for AI-powered alternate-history strategy games specifically |
| Traction | 35,000 DAU (YC page); ~20M rounds played (LinkedIn via search snippet); 4,000+ published presets (YC page); 100B+ tokens/week (YC page); hundreds of scenarios published daily (YC search snippet) |
| Revenue Signal | Token-based F2P: ~$1/token, ~0.02 tokens/turn; Pax Patron unlimited subscription (pricing not public); ad revenue mentioned (VGTimes review). No public revenue figures. |
| Founders | Eli Bullock-Papa (Co-founder): Virginia Tech Engineering, ex-Capital One. Ryan Zhang (Co-founder): YC bio "I like history," background details limited. |
| Competitors | Latitude/AI Dungeon ($4.05M raised, revenue unknown, text RPG vs. geopolitical strategy); Paradox Interactive (public, ~$200M rev, hand-crafted grand strategy vs. AI-emergent); Firaxis/Civilization (public, premium franchise vs. F2P browser); WorldBox (indie, observation god-sim vs. text-driven agency) |
| Moat Signals | 4,000+ UGC presets creating content flywheel; 100B+ tokens/week of interaction data; community wiki and Fandom wiki; Discord and Reddit communities active |
| Risk Factors | LLM inference cost dependency, AI quality/consistency issues, replicability/clone risk, third-party model provider dependency, monetization tension with engagement |
| Founder Reach | Eli Bullock-Papa: Twitter @Eli_BullockPapa (count not retrievable), LinkedIn 278 connections. Ryan Zhang: Twitter @Ryzhang22 (count not retrievable), LinkedIn 205 connections. |
| Distribution Signals | Organic growth to 35K DAU in ~4 months (YC description); YC launch post 47 upvotes (YC); YC X account launch tweet (Feb 2026); Brycent X post (organic); VGTimes review; Kotaku listing; TikTok discoverability; Short-form content creator hire signal (YC jobs) |
| Emails | careers@paxhistoria.co |
