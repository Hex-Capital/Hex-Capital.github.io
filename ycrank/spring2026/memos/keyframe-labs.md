# Keyframe Labs

> Turn agents into lifelike video calls. $0.06 a minute.

| Field | Value |
|-------|-------|
| Website | https://keyframelabs.com |
| YC Page | https://www.ycombinator.com/companies/keyframe-labs |
| Batch | Spring 2026 (S26) |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | Santa Monica, CA (CA corporate filing via BizProfile) |
| Tags | B2B, Video, API, AI |
| YC Partner | David Lieb |
| Emails | No public data found |

## The Idea

**Problem:** AI voice agents lack a visual human presence, limiting trust, engagement, and retention in use cases like customer support, sales training, L&D, and healthcare check-ins. Current solutions are either pre-recorded avatar videos (no real-time interactivity) or real-time interactive APIs priced at $0.20–$0.56/min (HeyGen LiveAvatar, D-ID, Tavus pricing pages), making high-volume deployment expensive.

**Approach:** Keyframe provides interactive video models that render photoreal, emotionally expressive human faces in real-time (~500ms latency), driven by audio from any voice agent (keyframelabs.com). The product is API- and embed-first: developers connect via `await persona.connect()` or paste a no-code embed link (keyframelabs.com). The latest model, Persona-1.5-live, is described as "the world's first photoreal human model with emotion and real-time latency" (YC page; LinkedIn post by Parth Radia, Feb 2026). The prior model, Persona-1, uses a two-stage flow-based image transformer architecture running at 2x realtime on consumer GPUs (LinkedIn post by Parth Radia, Nov 2025).

**Differentiation:** Keyframe's stated differentiators are pricing, latency, and emotional expressiveness. At $0.06/min, Keyframe is 2–6x cheaper than Tavus ($0.32–$0.37/min per tavus.io/pricing), HeyGen LiveAvatar ($0.10–$0.20/min per heygen.com API pricing), and D-ID (~$0.56/min at base tier per d-id.com/pricing/api). Synthesia ($150M ARR, $4B valuation) does not yet offer real-time interactive avatars (MIT Technology Review, Sept 2025). Lemon Slice (YC, $10.5M seed) differentiates on zero-shot avatar creation from a single image (TechCrunch, Dec 2025).

**Business Model:** Tiered SaaS + usage-based overage (keyframelabs.com/pricing):
- Free: $0/mo, 30 min/mo, 1 concurrent session
- Starter: $50/mo, 300 min/mo, 5 concurrent sessions, $0.06/min overage
- Growth: $100/mo, 1,000 min/mo, 10 concurrent sessions, $0.06/min overage
- Enterprise: custom pricing, custom personas, unlimited conversation length, custom SLAs

**TAM/SAM:** AI Avatar market estimated at $0.80B in 2025, projected to reach $5.93B by 2032 at 33.1% CAGR (MarketsandMarkets via search snippet). A broader estimate puts it at $9.78B in 2025 growing to $118.55B by 2034 at 31.95% CAGR (Precedence Research via search snippet). The adjacent AI video generator market is estimated at $788.5M in 2025, reaching $3.44B by 2033 at 20.3% CAGR (Grand View Research via search snippet). [Inferred]: The real-time interactive conversational avatar subsegment is a fraction of the broader AI avatar TAM, given that the market leader (Synthesia) has not yet shipped a real-time product.

**GTM / Distribution:** The product supports no-code embed and developer API integration, with documentation at docs.keyframelabs.com and a playground at playground.keyframelabs.com (keyframelabs.com). Website testimonials reference enterprise training, B2B SaaS, sales enablement, recruiting, digital health, and consumer AI use cases — all anonymous, titled roles only (keyframelabs.com). [Inferred]: Primary distribution is likely developer-led via API/docs and sales-assisted for enterprise, given the cal.com booking link for sales and the tiered self-serve pricing.

## Defensibility

- **Technical complexity:** Building photoreal, emotionally expressive video at sub-second latency at $0.06/min requires significant model architecture and inference optimization. Persona-1 uses a novel two-stage flow-based image transformer (LinkedIn post by Parth Radia, Nov 2025). The CEO spent 5 years at Ericsson building one of the world's first petascale human datasets for voice/video synthesis (YC page).
- **Proprietary training data:** [Inferred]: The Ericsson Digital Human work involved building a "database of humanity" via a human scanning rig (Ericsson ONE blog), and this domain expertise likely informs Keyframe's data acquisition strategy, though it is unclear whether any Ericsson data transferred.
- **Cost advantage:** At $0.06/min vs. competitors at $0.10–$0.56/min, unit economics appear structurally different, suggesting inference optimization that may be difficult to replicate quickly.

**Market structure:** Synthesia (the largest incumbent at $4B valuation and $150M ARR) is focused on pre-recorded enterprise L&D video and has not yet shipped real-time interactive avatars (MIT Technology Review, Sept 2025). [Inferred]: Synthesia's existing business model — selling per-seat licenses for async video creation — creates a channel conflict with low-cost per-minute interactive APIs, as cannibalizing their own high-margin seats for commodity minutes would be economically unattractive.

**Commoditization risk:** Tavus ($64.2M raised, $40M Series B led by CRV/Sequoia, Nov 2025 per BusinessWire) and Lemon Slice ($10.5M seed, Dec 2025 per TechCrunch) are direct competitors with real-time interactive products. HeyGen ($95M ARR as of Sept 2025 per Sacra) has LiveAvatar as a secondary product. As foundational video generation models improve, the barrier to entry for basic avatar rendering will decrease. [Inferred]: Sustained differentiation depends on maintaining a cost/latency advantage through proprietary model architecture and inference optimization.

## Market & Traction

**Traction signals:**
- No public revenue, user count, or growth metrics found.
- Pricing page live with four tiers including free tier (keyframelabs.com/pricing).
- 8 anonymous customer testimonials on website — roles include "Head of L&D, Enterprise Training Platform" and "VP Customer Experience, B2B SaaS Company" (keyframelabs.com). No named companies.
- LinkedIn: Persona-1 announcement received 39 likes, 14 comments; Persona-1.5-live announcement received 32 likes, 10 comments (LinkedIn, Nov 2025 and Feb 2026).
- GitHub: 2 public repos — "docs" (0 stars, MIT license) and "agents" (fork of livekit/agents, 0 original stars) (github.com/keyframelabs).
- Twitter/X: @KeyframeLabs listed but account not findable in search.
- LinkedIn company page: linkedin.com/company/keyframe-labs-inc (follower count not retrieved).
- No Product Hunt launch, no press coverage, no Discord/Slack community, no job postings found.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Keyframe |
|---|---|---|---|
| Tavus | $64.2M ($40M Series B, Nov 2025) (BusinessWire) | $1M in 2023 (Sacra) | Most direct comp; real-time API at ~600ms but 5–6x higher pricing |
| HeyGen | $74M ($60M Series A, Jun 2024, $500M val.) (heygen.com) | $95M ARR, Sept 2025 (Sacra) | Broad video creation platform; LiveAvatar is secondary; 2–3x pricing |
| Synthesia | $500M+ ($200M Series E, Jan 2026, $4B val.) (TechCrunch) | $150M ARR, Jan 2026 (synthesia.io) | Enterprise L&D leader; no real-time interactive product yet |
| D-ID | $48M ($25M Series B, Mar 2022) (d-id.com) | $33.6M rev., 2024 (Latka) | API-first but ~9x pricing at base tier; Microsoft Teams partnership |
| Lemon Slice | $10.5M seed, Dec 2025 (TechCrunch) | Not disclosed | Zero-shot avatar from single image; closest stage/positioning match |

**Why now:** [Inferred]: Two enabling changes converged: (1) diffusion and flow-based transformer architectures crossed a quality threshold for photoreal face synthesis at real-time inference speeds, as demonstrated by Persona-1 running 2x realtime on consumer GPUs (LinkedIn, Nov 2025); (2) the rapid proliferation of voice AI agents (via platforms like LiveKit, Vapi, and others) created a large base of deployed voice agents that could add a visual layer without rebuilding their stack.

## Founders & Team

**Parth Radia** — Co-founder & CEO
- BS Computer Science, UCLA, 2017 (YC page)
- Research Scientist, AT&T Labs/Foundry (~2017–2019): developed neural architectures for photorealistic 3D telepresence, enabling "the world's first 3D call over production networks" (YC page)
- VP, Generative AI, Ericsson (~2019–2024): founded and led a 30-person team building foundation models for voice/video synthesis on a petascale human dataset; shipped Ericsson's first generative AI products; Ericsson Digital Human was the first business to graduate from Ericsson ONE incubator (YC page; Ericsson ONE blog)
- Twitter/X: @parthnradia (YC page) — count not retrievable
- LinkedIn: linkedin.com/in/parthradia — 583 followers (LinkedIn)
- GitHub: No public repos found

**Kaahan Radia** — Co-founder & CTO
- BA Computer Science, UC Berkeley (YC page)
- Perception Engineer, Zipline (~2019–2024, 5 years): built camera-based detect-and-avoid systems for autonomous drone operations (YC page)
- UC Berkeley RISE Lab: research in computer vision and ML for healthcare (JAMA Cardiology, PubMed)
- Publications: "Performance of a Convolutional Neural Network… for 12-Lead ECG Interpretation" in JAMA Cardiology, Nov 2021 (PubMed 34347007); "BEV-Seg: Bird's Eye View Semantic Segmentation" arXiv:2006.11436, Jun 2020
- Twitter/X: @kradisme (YC page) — count not retrievable
- LinkedIn: linkedin.com/in/kaahan-radia-2ba47354 — 381 connections (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Both share the surname Radia, are based in Los Angeles, and attended UC system schools (UCLA and UC Berkeley) — likely siblings (no public confirmation found). No shared prior employers identified.

**Founder-market fit:** Parth spent 5 years at Ericsson building exactly the product category Keyframe operates in — photorealistic digital humans with voice/video synthesis — scaling a team to 30 and shipping production products (YC page). Kaahan brings complementary real-time perception and computer vision expertise from building safety-critical autonomous systems at Zipline (YC page). No advisors, board members, or notable investors beyond YC have been publicly identified.

## Key Risks

**1. Tavus funding and feature parity:** Tavus raised $40M Series B (Nov 2025, BusinessWire) from CRV and Sequoia with an explicit focus on real-time conversational video — the same core product. Tavus has a 2+ year head start and substantially more capital. Mitigation: Keyframe's 5–6x pricing advantage may sustain differentiation if driven by architectural efficiency.

**2. Synthesia market entry:** Synthesia announced real-time "Video Agents" on its 2026 roadmap (MIT Technology Review, Sept 2025). With $4B valuation, $150M ARR, and 70% of Fortune 100 as customers (synthesia.io), their entry would bring massive enterprise distribution to this segment.

**3. Foundation model commoditization:** Open-source video generation models (e.g., from the Sora/Veo lineage) are rapidly improving. Lemon Slice already uses a diffusion transformer approach for zero-shot avatars (TechCrunch, Dec 2025). [Inferred]: If base model quality becomes commoditized, Keyframe's moat narrows to inference cost optimization and go-to-market, which are less durable.

**4. Anonymous traction signals:** All 8 website testimonials list job titles but no company names (keyframelabs.com). No public revenue, user counts, or named customers have been identified. This makes it difficult to verify product-market fit externally.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $0.80B in 2025, $5.93B by 2032, 33.1% CAGR (MarketsandMarkets via search snippet) |
| SAM | No public data found |
| Traction | 8 anonymous testimonials (keyframelabs.com); Persona-1 LinkedIn post: 39 likes (Nov 2025); Persona-1.5-live LinkedIn post: 32 likes (Feb 2026) |
| Revenue Signal | Free/$50/$100/Custom tiers; $0.06/min overage (keyframelabs.com/pricing, Mar 2026) |
| Founders | Parth Radia (CEO): VP GenAI at Ericsson (5 yrs, team of 30), AT&T Labs, BS CS UCLA. Kaahan Radia (CTO): Perception Engineer at Zipline (5 yrs), JAMA Cardiology pub, BA CS UC Berkeley. |
| Competitors | Tavus ($64.2M raised, $1M rev 2023, real-time API at 5–6x higher pricing); HeyGen ($74M raised, $95M ARR, broad platform with secondary LiveAvatar); Synthesia ($500M+ raised, $150M ARR, no real-time yet); D-ID ($48M raised, $33.6M rev 2024, ~9x pricing); Lemon Slice ($10.5M seed, zero-shot avatars) |
| Moat Signals | 5–6x pricing advantage vs. nearest real-time competitor (keyframelabs.com/pricing vs. tavus.io/pricing); proprietary model architecture (LinkedIn, Nov 2025) |
| Risk Factors | Tavus Series B funding/feature parity, Synthesia market entry, foundation model commoditization |
| Founder Reach | Parth: @parthnradia (count not retrievable), LinkedIn 583 followers. Kaahan: @kradisme (count not retrievable), LinkedIn 381 connections. |
| Distribution Signals | No public data found |
| Emails | No public data found |
