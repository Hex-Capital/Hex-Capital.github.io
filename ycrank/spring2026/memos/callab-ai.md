# Callab AI

> AI-voice agents for any telephony stack.

| Field | Value |
|-------|-------|
| Website | https://callab.ai |
| YC Page | https://www.ycombinator.com/companies/callab-ai |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 7 |
| Location | ADGM, Abu Dhabi, UAE |
| Tags | Artificial Intelligence, B2B, Call Center |
| YC Partner | Tom Blomfield |
| Emails | Hello@clusterlab.com (callab.ai website footer) |

## The Idea

**Problem:** Enterprises running legacy telephony infrastructure — Cisco CUCM, SIP trunk configurations, on-premises PBX systems — cannot easily adopt AI voice agents because most solutions require greenfield cloud deployments (callab.ai). Contact centers in regulated industries (banking, healthcare, debt collection) face additional constraints around carrier-grade compliance and existing IVR workflows that cloud-native AI voice platforms do not accommodate (callab.ai). Current alternatives require rip-and-replace migrations or parallel systems.

**Approach:** Callab AI provides an AI voice agent platform that integrates natively with existing PBX systems, IVR flows, and carrier-grade SIP endpoints (YC page). Core capabilities include: knowledge base referencing (PDFs, websites, Google Docs) during live calls; post-call analysis with recording, transcription, and sentiment tagging; intelligent call transfer between AI agents, departments, or live agents; structured data extraction (names, budgets, next steps); batch calling for hundreds of simultaneous personalized outbound calls; and regional dialect support including Arabic dialects across MENA (callab.ai).

**Differentiation:** Most funded competitors (Vapi, Retell AI, Bland AI) are cloud-native and developer-first, requiring new telephony infrastructure (a16z, 2025). Synthflow targets SMEs with no-code tools (Synthflow blog, 2025). Callab AI's stated differentiator is native integration with legacy enterprise telephony stacks — CUCM, SIP trunks, PBX — without requiring greenfield deployments (YC page). VoiceInfra is the closest competitor on this specific angle, offering SIP integration with Cisco, Avaya, and Mitel PBX systems (voiceinfra.ai). Callab AI also differentiates via Arabic dialect support for MENA markets (callab.ai).

**Business Model:** Minutes-based SaaS pricing. Starter tier: $500/month for 5,000 included minutes with basic onboarding and email support; a one-time setup fee may apply. Enterprise tier: starting at $1,000+/month for high call volumes with white-glove implementation and dedicated support (callab.ai/pricing). Capterra lists pricing starting at $240/month, which may reflect an older or unlisted plan (Capterra, 2026).

**TAM/SAM:** The global call center AI market was valued at $2.41B in 2025, projected to reach $13.52B by 2034 at 20.8% CAGR (Fortune Business Insights via search snippet). The broader voice AI agent market was valued at $3.14B in 2024, projected to reach $47.5B by 2034 at 34.8% CAGR (Precedence Research via search snippet). The CCaaS market was valued at $7.27B in 2025 (Precedence Research via search snippet). [Inferred]: Callab AI's SAM is the subset of enterprises running legacy on-premises telephony stacks in regulated industries, concentrated in MENA and European markets; no public SAM estimate exists.

**GTM / Distribution:** Callab AI targets six verticals: call centers, debt collection, healthcare, real estate, hospitality, and retail (callab.ai). The company operates from Abu Dhabi (ADGM) with founders who have work experience across Tunisia, France, and UAE (YC page, Crunchbase). [Inferred]: Initial distribution likely leverages the founders' MENA enterprise network, with the Arabic dialect capability serving as a regional wedge before expanding to Western enterprise accounts.

## Defensibility

- **Technical integration depth:** Native integration with legacy CUCM, SIP trunk, and PBX systems requires specialized telephony engineering knowledge that cloud-native competitors have not prioritized (YC page).
- **Switching costs:** Once embedded in an enterprise's existing telephony stack and IVR flows, migration costs create retention (callab.ai). [Inferred]: Each deployment likely involves custom configuration, increasing stickiness.
- **Arabic NLP expertise:** The founding team co-authored "101 Billion Arabic Words Dataset" (arXiv:2405.01590) and published on Arabic instruction-tuning for LLMs (ResearchGate, dblp). [Inferred]: This positions them with a data and model advantage for MENA voice AI that English-first competitors lack.

**Market structure:** Cloud-native AI voice agent companies (Vapi, Retell, Bland) have built their infrastructure around modern APIs and cloud telephony — retrofitting for legacy on-premises PBX integration would require fundamentally different engineering, sales motions, and support models. Incumbent telephony vendors (Cisco, Avaya, Genesys) are adding AI features to their own platforms but face the classic innovator's dilemma of cannibalizing existing high-margin service contracts with automation (a16z, 2025 via search snippet). [Inferred]: The structural barrier is that both startups and incumbents face misaligned incentives or architecture to serve the legacy-telephony-plus-AI niche directly.

**Commoditization risk:** The underlying LLM and speech-to-text technologies are widely available. Multiple well-funded competitors (Bland AI at $65M, Vapi at $25M+, Synthflow at $30M) are building adjacent solutions (various sources, 2024-2025). Synthflow already integrates with Cisco, Avaya, Genesys, and RingCentral (Synthflow blog, 2025). VoiceInfra directly targets SIP/PBX integration (voiceinfra.ai). [Inferred]: The technical moat around legacy integration is real but narrowing as competitors expand their integration matrices.

## Market & Traction

**Traction signals:**
- 100+ users ("Trusted by +100 users," callab.ai homepage)
- Listed on GetApp, Capterra, and SourceForge with product profiles (GetApp 2026, Capterra 2026, SourceForge 2025)
- LinkedIn showcase page: linkedin.com/showcase/callabai (LinkedIn); employee count listed as 11-50 (LinkedIn)
- Company Twitter/X: @callab_ai (YC page); follower count not retrievable
- Founded 2024; evolved from ClusterLab (est. 2020), which raised $600K pre-seed in March 2024 from investors including Karim Beguir, CEO of InstaDeep (Wamda, Mar 2024; TechMoran, Mar 2024; The SaaS News, 2024)
- No Product Hunt launch page found
- No Discord or Slack community found
- No app store or Chrome Web Store presence found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Callab AI |
|---|---|---|---|
| **Retell AI** | $5.1M seed (Alt Capital, Aug 2024) | ~$36-40M ARR (Getlatka, early 2026) | Developer-first API platform; extreme capital efficiency; cloud-native, not legacy-focused |
| **Bland AI** | $65M total; $40M Series B (Emergence Capital, Feb 2025) | $3.8M revenue in 2024 (Getlatka) | Enterprise outbound call automation with SIP setup wizard; cloud-first architecture |
| **Vapi** | $25-28M; $20M Series A (Bessemer, Dec 2024) | ~$8M ARR by Apr 2025 (Getlatka) | Developer infrastructure / "Twilio for voice AI"; 100K+ developers on platform (Vapi blog) |
| **Synthflow AI** | ~$30M; $20M Series A (Accel, Jun 2025) | Not disclosed; 45M calls handled, ~1K customers (Synthflow blog) | No-code platform; in-house telephony with sub-100ms latency; integrates with Cisco, Avaya, Genesys |
| **Air AI** | Minimal VC (~bootstrapped) | ~$3.5M in 2025 (Getlatka) | Long-form sales calls (5-40 min); agency licensing model ($25K-$100K upfront) |

**Why now:**
- Gartner projected conversational AI will reduce customer service costs by $80B by 2026, with automation handling 1 in 10 interactions, up from 1.6% in 2022 (Gartner via search snippet).
- LLM quality crossed a threshold in 2024-2025 enabling natural-sounding multi-turn voice conversations at production scale (a16z, 2025 via search snippet).
- [Inferred]: Real-time speech-to-text latency improvements and falling inference costs in 2024-2025 made AI voice agents commercially viable for enterprises that previously could not justify the quality tradeoff vs. human agents.

## Founders & Team

**Chehir Dhaouadi** — Co-Founder & CTO
- 10+ years in enterprise systems, IT consulting, and technical leadership for financial institutions (YC page)
- Previously CTO at FivePoints The Talent Pool (Crunchbase)
- Co-founded ClusterLab in 2020; built platforms serving 200K+ users across Tunisian government entities (Crunchbase, Wamda Mar 2024)
- Co-author, "101 Billion Arabic Words Dataset" (arXiv:2405.01590); ResearchGate profile with Arabic NLP publications (ResearchGate)
- Education: Higher Institute of Technological Studies, Tunisia (LinkedIn)
- Twitter/X: @chehir_dh — follower count not retrievable
- LinkedIn: linkedin.com/in/chehirdhawedi — Co-Founder & CTO at Clusterlab
- GitHub: github.com/thevexx — 74 repos, 65 followers, Arctic Code Vault Contributor (GitHub)

**Haithem Kchaou** — Co-Founder & CEO
- 7+ years building AI solutions for government and enterprise across France, Tunisia, and UAE (YC page)
- Co-founded Reedz, an AI-powered Arabic audiobook/podcast summarization app (LinkedIn)
- Named one of 30 innovators in Inc. Arabia's "The GCC's Tech Vanguard" (Inc. Arabia, Dec 2024)
- Thomas Jefferson Exchange Scholarship recipient (U.S. Department of State program) at Bethany College (LinkedIn)
- Author at Entrepreneur Middle East (Entrepreneur.com)
- startAD Studios Ma'an Cohort 6 participant (LinkedIn)
- Education: South Mediterranean University (MSB — MedTech-LCI) (LinkedIn)
- Twitter/X: @haithemkchaou — follower count not retrievable
- LinkedIn: linkedin.com/in/haithemkchaou — Founder & CEO at Clusterlab
- GitHub: No public profile found
- Medium: @haithemkchaou — 45 followers (Medium)

**Co-founder relationship:** Both founders co-founded ClusterLab in 2020 and are originally from Tunisia, later relocating to the UAE (Wamda, Mar 2024; LinkedIn profiles). They co-authored the "101 Billion Arabic Words Dataset" together (arXiv:2405.01590). [Inferred]: Multi-year co-founding relationship (since 2020) with shared national origin and overlapping research work.

**Founder-market fit:** Dhaouadi's 10+ years of enterprise systems engineering and financial institution experience maps directly to the legacy telephony integration challenge (YC page). Kchaou's GTM experience across government and enterprise in three countries (France, Tunisia, UAE) aligns with the cross-border enterprise sales motion required (YC page). Both founders' Arabic NLP research (arXiv:2405.01590) provides domain-specific expertise for MENA voice AI. Their prior company ClusterLab deployed AI to 200K+ government users, demonstrating enterprise delivery capability (Wamda, Mar 2024). Notable investor: Karim Beguir, CEO of InstaDeep (acquired by BioNTech for ~$680M), participated in the $600K pre-seed (Dabafinance, 2024; The SaaS News, 2024).

## Key Risks

**Well-funded competitor convergence:** Synthflow ($30M raised) already integrates with Cisco, Avaya, Genesys, and RingCentral (Synthflow blog, 2025). VoiceInfra targets SIP/PBX integration directly (voiceinfra.ai). As the legacy telephony niche proves valuable, better-capitalized competitors can add similar integrations. Mitigation: Callab AI's YC S26 backing and deep CUCM expertise may provide a speed advantage in regulated MENA markets.

**Geographic concentration risk:** The company is based in Abu Dhabi with founders from Tunisia, and Arabic dialect support is a key differentiator (callab.ai). MENA enterprise sales cycles can be long and relationship-dependent. Expansion to Western markets would require competing directly with Bland, Retell, Vapi, and Synthflow on their home turf without the legacy-telephony differentiation being as strong a wedge.

**Email domain mismatch / brand clarity:** The company website lists the contact email as Hello@clusterlab.com, not a callab.ai address (callab.ai footer). The Crunchbase legal entity is "Clusterlabs LTD" (Crunchbase). The company evolved from ClusterLab (founded 2020) to Callab AI (2024) — prior product (Arabic LLMs and NLP tools) differs from current product (voice agents for telephony). Prior-product metrics (200K government users, Arabic dataset) should not be conflated with current-product traction.

**Platform dependency on third-party LLMs:** [Inferred]: Voice AI quality depends on underlying speech-to-text and LLM providers. Pricing or API changes from providers (OpenAI, Google, etc.) could compress margins, particularly at the $500/month Starter tier with 5,000 minutes included.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.41B call center AI market in 2025, 20.8% CAGR to $13.52B by 2034 (Fortune Business Insights via search snippet); $3.14B voice AI agent market in 2024, 34.8% CAGR to $47.5B by 2034 (Precedence Research via search snippet) |
| SAM | No public data found |
| Traction | 100+ users (callab.ai homepage); listed on GetApp, Capterra, SourceForge (2025-2026); $600K pre-seed raised as ClusterLab (Wamda, Mar 2024) |
| Revenue Signal | Starter: $500/mo for 5,000 min; Enterprise: $1,000+/mo (callab.ai/pricing); Capterra lists $240/mo starting price (Capterra, 2026) |
| Founders | Chehir Dhaouadi (CTO): 10+ yr enterprise systems, Arabic NLP researcher, CTO at FivePoints. Haithem Kchaou (CEO): 7+ yr AI for gov/enterprise, Inc. Arabia "GCC Tech Vanguard" (Dec 2024), Jefferson Scholar. |
| Competitors | Retell AI ($5.1M raised, ~$36-40M ARR, developer-first cloud-native); Bland AI ($65M raised, $3.8M 2024 revenue, enterprise outbound); Vapi ($25-28M raised, ~$8M ARR, developer API infra); Synthflow ($30M raised, revenue unknown, no-code with Cisco/Avaya integration); Air AI (~bootstrapped, $3.5M 2025, agency licensing model) |
| Moat Signals | Native legacy telephony integration (CUCM, SIP, PBX) (YC page); Arabic NLP dataset and research (arXiv:2405.01590); enterprise switching costs from custom deployments (callab.ai) |
| Risk Factors | Well-funded competitor convergence on legacy telephony niche, geographic concentration in MENA, product pivot from LLM tools to voice agents with brand/entity mismatch |
| Founder Reach | Chehir Dhaouadi: Twitter @chehir_dh (count not retrievable), LinkedIn 500+, GitHub 65 followers. Haithem Kchaou: Twitter @haithemkchaou (count not retrievable), LinkedIn 500+, Medium 45 followers (Medium). |
| Distribution Signals | No Product Hunt launch found; no app store presence; no community (Discord/Slack) found; software listing profiles on GetApp, Capterra, SourceForge (2025-2026) |
| Emails | Hello@clusterlab.com (callab.ai website footer) |
