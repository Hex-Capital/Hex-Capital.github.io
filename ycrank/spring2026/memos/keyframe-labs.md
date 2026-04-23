# Keyframe Labs

> Turn agents into lifelike video calls. $0.06 a minute.

| Field | Value |
|-------|-------|
| Website | https://keyframelabs.com |
| YC Page | https://www.ycombinator.com/companies/keyframe-labs |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | No public data found |
| Tags | B2B, Video, API, AI |
| YC Partner | David Lieb |
| Emails | No public data found |

## The Idea

**Problem:** Enterprises deploying AI agents via text or voice (customer support, sales, training, telehealth) lack a visual human presence, which reduces engagement and trust. Current alternatives are either pre-rendered avatar videos (no real-time interactivity) or expensive custom 3D rendering pipelines. Customer segments include corporate training platforms, recruiting technology, digital health, and consumer AI startups (company website, testimonial categories).

**Approach:** Keyframe Labs provides real-time generative video models that render photoreal, emotionally expressive human faces during live conversations. The product wraps around existing LLM and voice-agent stacks: developers create an agent, copy an embed link, and paste it into their application (company website). The model "persona-1.5-live" delivers ~500ms typical latency and supports hundreds of simultaneous connections (company website). A stock persona library is available on all tiers; enterprise customers can commission custom personas with 24-hour turnaround (company website). The GitHub organization hosts a fork of livekit/agents, indicating the real-time transport layer builds on LiveKit's open-source WebRTC infrastructure (GitHub, github.com/keyframelabs).

**Differentiation:** Compared to Synthesia and HeyGen, which focus on asynchronous, script-to-video generation, Keyframe Labs targets real-time bidirectional conversations. Tavus is the closest direct competitor with its Conversational Video Interface (CVI) offering sub-1-second latency (Tavus website). Keyframe Labs differentiates on price: $0.06/min vs. Tavus, which does not publicly list per-minute pricing but targets enterprise contracts. Keyframe also emphasizes no-code/low-code deployment speed ("deploy in minutes") versus Tavus's more involved integration. D-ID focuses primarily on photo-to-video animation rather than live conversational agents.

**Business Model:** Consumption-based pricing starting at $0.06 per minute (company website). A free tier is available for testing and limited-scale deployment. Enterprise SLAs are offered at unlisted pricing (company website). [Inferred]: Revenue at this stage is likely minimal given pre-seed status and recent YC batch entry.

**TAM/SAM:** The AI avatar market was valued at $0.80B in 2025, projected to reach $5.93B by 2032 at 33.1% CAGR (MarketsandMarkets, 2025). A broader estimate values the same market at $2.6B in 2025 growing to $24.1B by 2033 at 33.5% CAGR (Transpire Insight, 2025). The digital human avatar market is estimated at ~$9B in 2025 growing to ~$38.45B by 2034 at 22.5% CAGR (Business Research Insights, 2025). AI-powered live video specifically is forecast to grow at 67% CAGR through 2030 (vivideo.ai, 2026 via search snippet). [Inferred]: The SAM for real-time conversational AI video APIs is a subset of these figures, likely in the low hundreds of millions in 2025, given that most current avatar market revenue is in asynchronous video generation.

**GTM / Distribution:** The company offers a self-serve platform at platform.keyframelabs.com with documentation at docs.keyframelabs.com and a public demo at demo.keyframelabs.com (company website). A sales booking link is available via cal.com (company website). [Inferred]: Primary distribution is product-led growth targeting developers who embed the API, supplemented by direct sales for enterprise accounts requiring custom personas and SLAs.

## Defensibility

- **Model quality:** The company claims "the world's first photoreal human models with emotion and real-time latency" (company website, YC page). If true, this represents a technical lead in combining photorealism, emotional expression, and sub-second latency in a single model.
- **Founder domain depth:** Parth Radia built Ericsson's Digital Human product and led a 30-person team on voice/video synthesis foundation models over 5 years (Ericsson blog, 2023; LinkedIn). This represents years of accumulated training data, model architecture knowledge, and production deployment experience that predates Keyframe Labs.
- **Pricing as moat signal:** At $0.06/min, Keyframe Labs is positioning on unit economics that larger competitors may find difficult to match while maintaining their cost structures. [Inferred]: This could reflect efficient model architecture or willingness to accept lower margins at pre-seed to drive adoption.

**Market structure:** Synthesia ($4B valuation, Jan 2026, TechCrunch) and HeyGen ($500M valuation, Jun 2024, HeyGen blog) are built around asynchronous video generation workflows. Pivoting to real-time conversational video would require fundamentally different model architectures (streaming inference vs. batch rendering), different infrastructure (WebRTC vs. CDN delivery), and could cannibalize existing per-video pricing models. [Inferred]: This architectural and business-model gap creates a window, though Tavus ($64.2M raised, BusinessWire Nov 2025) is already pursuing the same real-time segment.

**Commoditization risk:** Tavus has a 3+ year head start, $64.2M in funding, and Sequoia/Scale backing (BusinessWire, Nov 2025). Large cloud providers (e.g., Azure AI with D-ID partnership) could offer avatar APIs as platform features. Open-source real-time avatar projects are emerging. The LiveKit dependency (evidenced by the forked livekit/agents repo on GitHub) is shared infrastructure, not proprietary.

## Market & Traction

**Traction signals:**
- Nine customer testimonial categories listed on the company website spanning enterprise training, B2B SaaS, recruiting, digital health, digital media, and consumer AI (company website). No named customers or quantified outcomes disclosed.
- Twitter/X: @KeyframeLabs — handle confirmed (YC page); follower count not retrievable.
- LinkedIn: linkedin.com/company/keyframe-labs-inc — page confirmed (LinkedIn); follower count not retrievable.
- GitHub: github.com/keyframelabs — 2 public repos (docs, agents fork), 0 stars, 1 follower (GitHub).
- Discord: Company website lists Discord as a community channel; member count not found.
- No Product Hunt launch found.
- No press coverage in named publications found.
- No app store presence or Chrome extension found.
- No job postings found beyond the two co-founders.

**Competitive landscape:**

| Competitor | Key Differentiator vs. Keyframe Labs | Funding | Revenue/ARR |
|---|---|---|---|
| **Tavus** | Direct competitor in real-time conversational video; 3+ year head start; CVI product with sub-1s latency; broader product suite including async video generation | $64.2M total (Series B $40M, Nov 2025; BusinessWire) | Revenue unknown |
| **HeyGen** | Focused on async script-to-video; 100+ stock avatars; 175+ language translation; larger self-serve user base | $69M total (Series A $60M, Jun 2024; HeyGen blog) | ~$100M ARR (Oct 2025; Sacra) |
| **Synthesia** | Enterprise async video leader; 230+ avatars; 140+ languages; SOC 2; 60K+ customers including 80%+ Fortune 100 | $530M+ total (Series E $200M, Jan 2026; TechCrunch) | $146M ARR (Sep 2025; Sacra) |
| **D-ID** | Photo-to-video animation focus; Microsoft partnership; Creative Reality Studio | $48M total (Crunchbase) | ~$33.6M revenue (2024; GetLatka) |

**Why now:**
- [Inferred]: The convergence of several technical catalysts in 2024–2025 enabled this opportunity: (1) diffusion and transformer-based face generation models reached photorealistic quality at inference speeds compatible with real-time use; (2) WebRTC infrastructure (e.g., LiveKit) matured to support low-latency media streaming at scale; (3) the explosion of LLM-powered voice agents (from companies like Vapi, Bland, Retell) created a large base of deployed agents that lack a visual component; (4) GPU cost per inference hour has declined, making $0.06/min unit economics feasible.

## Founders & Team

**Parth Radia** — Co-founder & CEO
- BS Computer Science, UCLA (2013–2017) (LinkedIn)
- 5 years at Ericsson: rose to VP of Generative AI; founded and led team of 30 scientists and engineers building foundation models for voice and video synthesis (LinkedIn; Ericsson blog, Jul 2023)
- Led "Ericsson Digital Human" — first successful graduation from Ericsson ONE intrapreneurship program; built human scanning rig in LA; brought Ericsson's first generative AI product (deep voice and video translation) to market (Ericsson blog, Jul 2023)
- Prior: Research Scientist at AT&T Labs specializing in 3D telepresence (YC page)
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/parthradia — VP, Generative AI at Ericsson (LinkedIn)
- GitHub: No public repos found

**Kaahan Radia** — Co-founder & CTO
- BA Computer Science, UC Berkeley (YC page)
- 5 years at Zipline as Perception Engineer; built camera-based detect-and-avoid system for autonomous drone operations (YC page; LinkedIn)
- Expertise in computer vision and applied ML; research published at CVPR and JAMA (YC page)
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/kaahan-radia-2ba47354 (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Both founders share the surname Radia. [Inferred]: They are likely siblings or close relatives, given the shared surname and overlapping Bay Area / Southern California education background (UC Berkeley and UCLA respectively). No public data confirming the specific relationship was found.

**Founder-market fit:** Parth Radia spent 5 years building the exact product category (photorealistic digital humans with real-time voice/video synthesis) inside Ericsson, leading a 30-person team and shipping a commercial product (Ericsson blog, 2023). This is direct, multi-year domain experience in the core technology. Kaahan Radia's computer vision and perception engineering background at Zipline (autonomous drone vision systems) provides complementary ML and real-time systems expertise. Their combined backgrounds span the full stack of the product: generative video models (Parth) and real-time perception/CV systems (Kaahan).

## Key Risks

**Tavus competitive overlap:** Tavus is pursuing the same real-time conversational AI video segment with $64.2M in funding, Sequoia and Scale backing, and a multi-year head start (BusinessWire, Nov 2025). Tavus has already shipped its CVI product and is iterating with significant engineering resources. Keyframe Labs must out-execute on product quality, latency, or price with a 2-person team.

**Incumbent expansion into real-time:** HeyGen ($100M ARR, Oct 2025; Sacra) and Synthesia ($146M ARR, Sep 2025; Sacra) both have the engineering resources and customer base to add real-time conversational features. Synthesia's Series E ($200M, Jan 2026; TechCrunch) and HeyGen's profitability provide ample runway for R&D expansion. If either ships a competitive real-time product, Keyframe Labs faces distribution disadvantage against established enterprise sales channels.

**Name collision:** An unrelated motion graphics company operates at keyframelabs.net (web search results). This could create brand confusion in search results, advertising, and customer discovery.

**Infrastructure dependency:** The GitHub organization's primary code repository is a fork of livekit/agents (GitHub, github.com/keyframelabs). Dependence on LiveKit's open-source WebRTC stack means changes to LiveKit's licensing, pricing, or architecture could affect Keyframe Labs' cost structure or capabilities. This infrastructure is also available to all competitors.

**Pricing sustainability:** At $0.06/min, the company must achieve GPU inference efficiency sufficient to maintain margins at scale. Real-time video generation is compute-intensive; if model complexity grows to maintain quality parity with better-funded competitors, unit economics could erode. No public data on gross margins or infrastructure costs is available.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI avatar market: $0.80B (2025) → $5.93B (2032) at 33.1% CAGR (MarketsandMarkets, 2025); broader estimate: $2.6B (2025) → $24.1B (2033) at 33.5% CAGR (Transpire Insight, 2025) |
| SAM | No public data found |
| Traction | 9 testimonial categories on website (company website, Apr 2026); no quantified user/customer/revenue metrics publicly disclosed |
| Revenue Signal | $0.06/min consumption pricing with free tier and enterprise SLAs (company website, Apr 2026) |
| Founders | Parth Radia (CEO): 5 yrs Ericsson VP GenAI, built Digital Human product, AT&T Labs 3D telepresence, UCLA CS. Kaahan Radia (CTO): 5 yrs Zipline Perception Engineer, CVPR/JAMA publications, UC Berkeley CS. |
| Competitors | Tavus ($64.2M raised, revenue unknown, direct real-time CVI competitor; BusinessWire Nov 2025); HeyGen ($69M raised, ~$100M ARR, async video focus; Sacra Oct 2025); Synthesia ($530M+ raised, $146M ARR, enterprise async leader; Sacra Sep 2025); D-ID ($48M raised, ~$33.6M revenue, photo-to-video; GetLatka 2024) |
| Moat Signals | Founder's 5-year track record building same product category at Ericsson (Ericsson blog, 2023); $0.06/min price point below visible competitor pricing (company website) |
| Risk Factors | Tavus competitive overlap with $64.2M funding and head start, incumbent expansion risk from HeyGen/Synthesia, infrastructure dependency on LiveKit |
| Founder Reach | Parth Radia: Twitter not found, LinkedIn linkedin.com/in/parthradia. Kaahan Radia: Twitter not found, LinkedIn linkedin.com/in/kaahan-radia-2ba47354. Company: Twitter @KeyframeLabs (count not retrievable), GitHub 1 follower / 0 stars (GitHub, Apr 2026) |
| Distribution Signals | Self-serve platform at platform.keyframelabs.com; public demo at demo.keyframelabs.com; docs at docs.keyframelabs.com; no Product Hunt launch found; no press coverage found (company website, Apr 2026) |
| Emails | No public data found |
