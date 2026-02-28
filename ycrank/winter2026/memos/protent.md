# Protent

> Protent turns passive surveillance into proactive intelligence.

| Field | Value |
|-------|-------|
| Website | https://protent.ai |
| YC Page | https://www.ycombinator.com/companies/protent |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hardware, Machine Learning, SaaS, Security, Monitoring |

## The Idea

**Problem:** Surveillance operations today are overwhelmingly passive. Security staff monitor banks of camera feeds manually, reacting to incidents only after they escalate. The volume of feeds far exceeds human monitoring capacity, leading to missed incidents and delayed response. Existing video management systems (VMS) record footage for post-incident review but provide little real-time decision support. The customer segment is enterprises, institutions, and security operations centers running large-scale camera deployments.

**Approach:** Protent applies machine learning to live video feeds to detect early escalation patterns and predictive threat signals before incidents spiral. Rather than flagging events after they occur (e.g., a detected weapon or completed intrusion), the system identifies behavioral precursors -- patterns that precede escalation -- giving surveillance operators contextual alerts and time to intervene. The YC page describes co-founder Srihan Balaji as having deployed "reinforcement learning-optimized video intelligence in classified settings" at Lockheed Martin Research (YC company page), suggesting the underlying technology originated in defense applications.

**Differentiation:** Most AI surveillance competitors focus on object detection (guns, intruders, vehicles) or post-event classification. Protent's stated differentiation is temporal -- detecting escalation trajectories rather than discrete objects. Ambient.ai is the closest competitor in framing, marketing "proactive" threat prevention, but Ambient.ai's disclosed capabilities center on contextual scene understanding (recognizing a person with a weapon in a school vs. a gun range) rather than pre-escalation behavioral prediction. Other competitors like Actuate focus narrowly on gun detection; Spot AI and Lumana focus on general video intelligence and analytics across broader use cases (operations, retail, manufacturing) rather than escalation-specific alerting.

**Business Model:** No pricing page is visible on protent.ai (website returned only CSS/JS framework code at time of research). The company is tagged as both SaaS and Hardware. [Inferred]: Most likely monetization path is a SaaS subscription for the analytics layer (per-camera or per-site licensing), potentially bundled with proprietary edge hardware for on-premise inference, given the Hardware tag and the defense-tech background of the founding team.

**TAM/SAM:** The global AI in video surveillance market was valued at $6.51 billion in 2024 and is projected to reach $28.76 billion by 2030, growing at a CAGR of 30.6% (Grand View Research, 2024). An alternative estimate sizes the market at $3.90 billion in 2024, growing to $12.46 billion by 2030 at a CAGR of 21.3% (MarketsandMarkets, 2024). No public SAM data specific to the escalation-detection subsegment was found.

**GTM / Distribution:** No public GTM data found. [Inferred]: Most likely distribution path is direct enterprise sales to high-security verticals (critical infrastructure, campuses, transit systems, stadiums) where proactive threat detection commands premium pricing, followed by channel partnerships with existing VMS and camera vendors for broader market access.

## Defensibility

The company's defense-tech origins suggest proprietary models trained on classified or restricted video datasets involving real escalation scenarios -- data that commercial competitors cannot easily replicate. Reinforcement learning-optimized video intelligence (as described on the YC page for co-founder Balaji's Lockheed Martin work) implies models that improve through feedback loops, which could create a compounding data advantage over time as the system is deployed across more sites.

**Market structure:** Large incumbent VMS providers (Genetec, Milestone, Avigilon/Motorola) are primarily hardware and platform companies. Adding predictive behavioral AI requires fundamentally different R&D investment (ML research, training data acquisition, real-time inference infrastructure) that conflicts with their existing hardware-margin business model. However, these incumbents are actively acquiring AI capabilities (Motorola acquired Avigilon, which has AI features), so the structural barrier is not permanent. [Inferred]: The more durable structural barrier may be the defense-origin training data and classified deployment experience, which commercial incumbents cannot replicate through acquisition alone.

**Commoditization risk:** General-purpose computer vision has become significantly more accessible via foundation models (e.g., vision-language models). Companies like Lumana are already using VLMs for surveillance. The specific task of escalation prediction is harder to commoditize than object detection because it requires temporal sequence modeling and specialized training data (real escalation events), but the barrier is not insurmountable for well-resourced competitors investing in this niche.

## Market & Traction

**Traction signals:** No public traction data found. The website (protent.ai) was not rendering substantive content at time of research (returned only framework/styling code). No Product Hunt launch found. No Twitter/X account found for the company. No LinkedIn company page found. No app store presence, Chrome extension, or community channels found. No press coverage or funding announcements found beyond the YC listing. The YC page lists the company as founded in 2025, Active status, team size of 2, and not currently hiring (YC company page).

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Protent |
|---|---|---|
| Ambient.ai | $146M total (a16z-led Series A/B + $20M Allegion Ventures strategic round, Oct 2023) (PRNewswire, Oct 2023) | Most direct competitor -- also markets "proactive" threat prevention via computer vision intelligence; enterprise customers include Adobe, VMware, Impossible Foods; revenue unknown but claimed 4x+ growth since 2022 stealth launch (PRNewswire) |
| Spot AI | $93M total ($31M latest round, Qualcomm Ventures, late 2024) (TechCrunch, Oct 2024 via search snippet) | Broader video intelligence platform (operations, safety, retail analytics); 1,000+ customers; claimed 5x YoY revenue growth (2022); less focused on threat escalation specifically |
| Lumana AI | $64M total ($40M Series A, Wing Venture Capital, Jul 2025) (SiliconANGLE, Jul 2025) | Uses vision-language models for self-learning surveillance; 50,000+ cameras deployed; customers include McDonald's, Meta, NYU (PRNewswire); broader scope than pure threat detection |
| Actuate | $23.8M total ($11.5M Series A, Aug 2024) (Tracxn via search snippet) | Narrower focus on gun detection and intruder detection in existing camera feeds; most comparable in focus to Protent but reactive (object detection) rather than predictive (escalation patterns) |
| Scylla AI | $5.73M total ($4.9M Seed, Mucker Capital, Jun 2021) (Scylla.ai, Jun 2021) | Gun detection, object tracking, behavior anomaly detection; clients include Daimler, MLB, Chicago Cubs; closer in scale to Protent but broader feature set |

**Why now:** [Inferred]: Several converging factors: (1) Foundation model advances in 2023-2025 (particularly vision transformers and video understanding models) have made temporal behavior analysis in video computationally feasible at the edge for the first time; (2) The broader AI in video surveillance market is growing at 21-30% CAGR (Grand View Research, MarketsandMarkets, 2024), indicating accelerating buyer adoption; (3) High-profile security failures at public venues have increased demand for proactive (not just reactive) surveillance capabilities; (4) Edge AI hardware costs have decreased, making on-premise real-time inference practical for mid-market deployments.

## Founders & Team

**Srihan Balaji** -- Co-founder & CEO
- Studied electrical engineering, computer science, and math (YC company page)
- Previously worked at Lockheed Martin Research, where he deployed reinforcement learning-optimized video intelligence in classified settings (YC company page)
- Previously worked at AWS (Amazon) in AI/ML (LinkedIn title via search snippet)
- Attended Thomas Jefferson High School for Science and Technology in Alexandria, VA (NAQT stats page) -- one of the top-ranked STEM magnet schools in the US
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/srihanbalaji -- headline "AI/ML - Amazon" (via search snippet; count not retrievable)
- GitHub: No public repos found
- Kaggle: kaggle.com/srihanbalaji (Kaggle profile via search snippet)

**Abhisheik Sharma** -- Co-founder & CTO
- Former NLP and sentiment analysis researcher focused on building threat detection capabilities (YC company page)
- Twitter/X: No public account found
- LinkedIn: No public profile found matching this specific individual and company
- GitHub: No public repos found

**Co-founder relationship:** No public data on co-founder history. Both founders' backgrounds intersect at the defense/security + AI domain (Balaji in RL-optimized video intelligence at Lockheed Martin; Sharma in NLP-based threat detection), but no shared employer or university was identified from available data.

**Founder-market fit:** Balaji's direct experience deploying reinforcement learning-based video intelligence in classified defense settings at Lockheed Martin is directly relevant to the surveillance AI problem. His AWS background adds cloud infrastructure expertise. Sharma's NLP and sentiment analysis research, applied specifically to threat detection, complements the video intelligence work by adding textual/behavioral pattern recognition capability. The combination of defense-grade video AI and threat-focused NLP suggests domain-specific technical depth rather than a generalist ML team. YC Partner Jon Xu is listed as the primary partner (YC company page).

## Key Risks

**Well-funded incumbent competition:** Ambient.ai ($146M raised, a16z-backed) already markets proactive threat prevention with enterprise customers. Spot AI ($93M) and Lumana ($64M) are expanding their AI video platforms. Protent is entering a market where multiple competitors have 10-100x more capital. Mitigation: Protent's escalation-prediction framing targets a specific capability gap (behavioral precursors vs. object detection) that competitors have not explicitly addressed.

**Defense-to-commercial translation risk:** The core technology was developed in classified defense settings (Lockheed Martin). Translating classified-environment models and training data to commercial products may face restrictions (ITAR, export controls, classification barriers). The training data used in classified settings likely cannot be transferred to a commercial product, requiring the team to rebuild training datasets from scratch with commercial data.

**Regulatory and ethical scrutiny:** AI-powered surveillance faces increasing regulatory attention (EU AI Act classifies real-time biometric surveillance as high-risk; US states have varying surveillance disclosure laws). Escalation prediction based on behavioral analysis could face pushback around profiling and bias concerns. Mitigation: Not found in public sources.

**Brand disambiguation:** "Protent" is similar to "Portent" (an established digital marketing company), "Protectt.ai" (a mobile security company), and "Protex AI" (a workplace safety company). Search results frequently returned these companies instead. This creates discoverability challenges and potential customer confusion.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $6.51B AI video surveillance market in 2024, projected $28.76B by 2030, CAGR 30.6% (Grand View Research, 2024); alt. $3.90B in 2024, $12.46B by 2030, CAGR 21.3% (MarketsandMarkets, 2024) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Srihan Balaji (CEO): EE/CS/Math, ex-Lockheed Martin Research (RL video intelligence), ex-AWS AI/ML. Abhisheik Sharma (CTO): NLP/sentiment analysis researcher, threat detection focus |
| Competitors | Ambient.ai ($146M raised, revenue unknown, proactive CVI threat prevention -- most direct competitor); Spot AI ($93M raised, revenue unknown, broader video intelligence platform); Lumana ($64M raised, revenue unknown, VLM-based self-learning surveillance); Actuate ($23.8M raised, revenue unknown, gun/intruder detection); Scylla AI ($5.73M raised, revenue unknown, behavior anomaly + gun detection) |
| Moat Signals | Defense-origin RL-optimized video intelligence models trained in classified settings (YC company page); specialized escalation-prediction approach vs. object-detection norm |
| Risk Factors | Well-funded competitors (Ambient.ai $146M, Spot AI $93M), defense-to-commercial translation barriers, regulatory/ethical scrutiny of behavioral surveillance AI |
| Founder Reach | Srihan Balaji: Twitter not found, LinkedIn (linkedin.com/in/srihanbalaji, count not retrievable), GitHub not found. Abhisheik Sharma: Twitter not found, LinkedIn not found, GitHub not found |
| Distribution Signals | No public data found |
