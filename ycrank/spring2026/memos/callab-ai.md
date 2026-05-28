# Callab AI

> AI voice agents for legacy telephony systems.

| Field | Value |
|-------|-------|
| Website | https://callab.ai |
| YC Page | https://www.ycombinator.com/companies/callab-ai |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Operations |
| Team Size | 7 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Call Center |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

- **Problem:** 58% of the $400B call center industry runs on on-prem PBX, and adding AI voice automation previously required a rip-and-replace of that infrastructure (callab.ai homepage; YC company page).
- **Approach:** Callab connects to existing PBX systems (Avaya, Cisco UCM, Mitel) via SIP trunk integration and routes a subset of calls to its AI agents, returning calls back to the PBX without migration (YC page; callab.ai homepage).
- **Differentiation:** vs. Retell AI / Bland AI / Vapi (cloud-telephony native, require SIP/cloud migration per Retell AI comparison blog, 2026) Callab integrates directly with legacy on-prem PBX; vs. PolyAI (six-figure enterprise contracts per Retell AI vs PolyAI blog, 2026) Callab targets mid-market with no infrastructure swap.
- **Business Model:** No pricing data on callab.ai pricing page; [Inferred]: usage-based per-minute or per-seat enterprise SaaS, consistent with category peers like Retell AI ($0.07/min, Retell blog 2026).
- **TAM/SAM:** Contact Center Software Market $72.86B in 2025, 17.91% CAGR through 2031 (Mordor Intelligence, 2025); AI voice agent market $9.8B in 2025 → $47.5B by 2030 at 34.2% CAGR (cited via Retell AI blog, 2026); company-claimed SAM is 58% of the $400B call-center industry running on-prem (YC page).
- **GTM / Distribution:** Direct sales to mid-market contact centers in hospitality, logistics, retail chains, and property management; clients across three continents including Dunkin Donuts (YC page; callab.ai homepage).

## Defensibility

- **Moat today:** Integration layer built for state-regulated SIP trunks and legacy PBX in MENA where cloud telephony is unavailable, giving live deployments on Avaya/Cisco UCM/Mitel (YC page; via search snippet).
- **Future moat:** [Inferred]: Switching costs once an AI agent is wired into a customer's PBX, CRM, and knowledge base could grow; unproven because contract sizes, retention, and migration friction are not public.
- **Market structure:** [Inferred]: Cloud-native voice-AI vendors (Retell, Bland, Vapi) optimize for SIP/cloud onboarding flows, so building a parallel on-prem PBX integration stack is a channel and product-conflict cost — not a structural barrier, since incumbents could add SBC/PBX adapters.
- **Commoditization risk:** Comstice already markets an on-prem AI voice assistant for Avaya/Cisco using LiveKit, and VoiceInfra advertises 60-minute PBX-to-AI integrations (Comstice site; VoiceInfra blog, 2026), indicating low technical exclusivity.

## Market & Traction

- **Traction signals:**
  - Customers across three continents including Dunkin Donuts (YC page; callab.ai homepage).
  - Twitter @callab_ai: 22 followers, account joined April 2025 (X.com via search snippet).
  - LinkedIn showcase page exists for "Callab AI" (LinkedIn search result); follower count not retrievable.
  - Pre-seed funding from F6 Ventures (Crunchbase via search snippet).
  - Prior product ClusterLab/Reedz served 200,000+ users across Tunisian government entities (via search snippet) — prior-product metric, not Callab traction.
  - No Product Hunt launch found; no press funding announcement found.
- **Competitors:**
  - Retell AI ($4.6M seed led by Alt Capital with YC, Carya Venture; $7.2M ARR 2025 per Latka): cloud-telephony native, ~600ms latency at $0.07/min — does not natively address on-prem PBX (Retell AI blog; Latka, 2025).
  - Bland AI (funding not in retrieved results, revenue unknown): developer-first voice API for high-volume outbound, up to 1M concurrent calls — cloud SIP only (Retell AI blog, 2026).
  - PolyAI ($350M Series D, January 2026, $3B valuation per AgentMarketCap and search snippet; revenue grew ~10x YoY): Fortune-500 enterprise contracts starting ~$150K/year — minimum contract size excludes Callab's mid-market target.
  - Leaping AI (YC W25, $10.2M total raised across 3 rounds; $4.7M seed led by Nexus, YC, Paul Graham per LinkedIn/leapingai.com): cloud voice-AI for mid-market contact centers — does not target on-prem PBX.
  - Comstice (private, revenue unknown): on-prem AI voice assistant for Avaya/Cisco using LiveKit — closest direct overlap on infrastructure approach (Comstice site).
- **Why now:** [Inferred]: Production-grade low-latency LLM voice stacks (sub-700ms) became viable in 2024-2025 (Retell AI blog cites ~600ms benchmark, 2026), making PBX-side AI replacement of human agents commercially feasible on legacy hardware.

## Founders & Team

- **Haithem Kchaou (Co-founder & CEO):**
  - Background: Bethany College; Thomas Jefferson Exchange Scholarship (U.S. State Department); previously co-founded ClusterLab in 2020 (Arabic audiobook app Reedz), prior intern role at Mobioos; 10+ years building enterprise systems incl. platforms serving 200,000+ users at Tunisian government entities (Crunchbase person profile; Entrepreneur Middle East; via search snippets).
  - Twitter/X: @haithemkchaou (X.com); follower count not retrievable.
  - LinkedIn: "Callab AI (YC P26)" (linkedin.com/in/haithemkchaou).
  - GitHub: No public repos found.
- **Chehir Dhaouadi (Co-founder & CTO):**
  - Background: Higher Institute of Technological Studies; previously CTO at FivePoints The Talent Pool; co-founded ClusterLab 2020 with Kchaou; architects Callab's voice AI infrastructure incl. CUCM/SIP/PBX integrations; based in Dubai (Crunchbase person profile; LinkedIn; via search snippets).
  - Twitter/X: @chehir_dh (X.com); follower count not retrievable.
  - LinkedIn: "Clusterlab" (linkedin.com/in/chehirdhawedi).
  - GitHub: No public repos found.
- **Co-founder relationship:** Co-founded ClusterLab together in 2020 (Tunisia/UAE) before pivoting that entity into Callab AI (Crunchbase organization profile; Dispatch Risk article via search snippet).
- **Founder-market fit:** Both built voice/telephony products in MENA where cloud telephony is unavailable and SIP trunks are state-regulated, forcing direct PBX integration — the exact wedge Callab now sells (YC page; via search snippet); pre-seed investor F6 Ventures named (Crunchbase via search snippet).

## Key Risks

- **Commoditization by cloud voice-AI incumbents:** Retell ($7.2M ARR, 2025), Bland, Vapi, and PolyAI ($3B val., Series D Jan 2026) can add PBX adapters or partner with SBC vendors; Comstice already ships an on-prem Avaya/Cisco AI assistant using LiveKit (Comstice site), so the on-prem moat is product-feature scope, not structural.
- **Customer-name verification:** Public Callab marketing claims Dunkin Donuts as a customer (YC page; callab.ai homepage), but no Dunkin'-side press, case study, or contract scope is publicly disclosed — risk of overstated logo prominence relative to actual ARR.
- **Pivot execution risk:** ClusterLab pivoted from Arabic-language consumer audiobooks (Reedz) to enterprise telephony AI (Callab) (Dispatch Risk; Crunchbase via search snippets); enterprise on-prem PBX go-to-market and consumer Arabic content are unrelated motions, so prior-product traction (200K+ users) does not transfer.
- **Distribution scale:** Twitter @callab_ai has 22 followers (April 2025, X.com snippet), no Product Hunt launch found, no press funding announcement found — minimal inbound demand-generation signal at time of research.
- **Regulatory/security in enterprise telephony:** On-prem PBX customers in regulated sectors require SOC 2 / HIPAA / data-residency posture; Retell AI markets SOC 2 Type II (Retell blog, 2026), but no public compliance certifications found for Callab.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Contact Center Software $72.86B in 2025, 17.91% CAGR through 2031 (Mordor Intelligence, 2025); AI voice agent market $9.8B 2025 → $47.5B by 2030 at 34.2% CAGR (cited via Retell AI blog, 2026). |
| SAM | Company-claimed: 58% of the $400B call-center industry on on-prem (YC page, 2026). |
| Traction | Customers on three continents incl. Dunkin Donuts (YC page, 2026); Twitter @callab_ai 22 followers (X.com, Apr 2025); pre-seed from F6 Ventures (Crunchbase via search snippet); no Product Hunt or press launch found. |
| Revenue Signal | No public data found. |
| Founders | Haithem Kchaou (CEO): Bethany College, ClusterLab/Reedz co-founder, prior gov platforms serving 200K+ users. Chehir Dhaouadi (CTO): Higher Institute of Technological Studies, ex-CTO FivePoints, ClusterLab co-founder, PBX/SIP integration lead. |
| Competitors | Retell AI ($4.6M seed, $7.2M ARR 2025, cloud-only); Bland AI (funding n/a, revenue unknown, cloud high-volume outbound); PolyAI ($350M Series D Jan 2026 at $3B, enterprise $150K+ contracts); Leaping AI ($10.2M total, YC W25, cloud mid-market); Comstice (private, revenue unknown, on-prem Avaya/Cisco AI). |
| Moat Signals | Live integrations with Avaya/Cisco UCM/Mitel PBX without migration (YC page); MENA-built SIP/PBX integration layer (via search snippet). |
| Risk Factors | Commoditization by cloud voice-AI incumbents, unverified Dunkin' contract scope, pivot from consumer Arabic content to enterprise telephony. |
| Founder Reach | Haithem Kchaou: Twitter @haithemkchaou count not retrievable, LinkedIn present, GitHub none found. Chehir Dhaouadi: Twitter @chehir_dh count not retrievable, LinkedIn present, GitHub none found. |
| Distribution Signals | Twitter @callab_ai 22 followers (X.com, Apr 2025); LinkedIn showcase page present (count not retrievable); no Product Hunt launch found; no press funding announcement found. |
| Emails | No public data found. |

Note on data integrity: a WebFetch response during research contained embedded `<system-reminder>`-style text that resembled injected instructions; I treated it as untrusted page content and ignored it.

Sources:
- [Callab AI YC page](https://www.ycombinator.com/companies/callab-ai)
- [Callab AI website](https://callab.ai/)
- [Haithem Kchaou - Crunchbase](https://www.crunchbase.com/person/haithem-kchaou)
- [Chehir Dhaouadi - Crunchbase](https://www.crunchbase.com/person/chehir-dhaouadi)
- [Callab AI / ClusterLab - Crunchbase](https://www.crunchbase.com/organization/clusterlab-c02e)
- [Entrepreneur Middle East - Clusterlab profile](https://mena.entrepreneur.com/starting-a-business/how-tunisian-born-clusterlab-is-making-voice-ai-smarter-for-the-region)
- [Haithem Kchaou X](https://x.com/haithemkchaou)
- [Chehir Dhaouadi X](https://x.com/chehir_dh)
- [Callab AI X](https://x.com/callab_ai)
- [Retell AI seed announcement](https://www.retellai.com/blog/seed-announcement)
- [Retell AI revenue - Latka](https://getlatka.com/companies/retellai.com)
- [Retell vs PolyAI](https://www.retellai.com/blog/retell-vs-polyai-compare-ai-voice-app-builder)
- [Leaping AI seed announcement](https://leapingai.com/blog/ai-startup-leaping-ai-raised-4-7-m-for-ai-voice-agents)
- [Comstice on-prem AI voice for Avaya/Cisco](https://comstice.com/livekit-ai-voice-assistant)
- [VoiceInfra PBX guide](https://voiceinfra.ai/blog/pbx-integration-guide-voice-ai-sip-trunk-setup)
- [Contact Center Software Market - Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/contact-center-software-market)
- [AgentMarketCap voice AI labor savings](https://agentmarketcap.ai/blog/2026/04/05/voice-ai-agents-kill-the-call-center)
