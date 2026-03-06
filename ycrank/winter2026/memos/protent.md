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
| Tags | Hardware, Machine Learning, SaaS, GovTech, Security |
| YC Partner | Jon Xu |
| Emails | srihan@protent.ai |

## The Idea

**Problem:** Public safety agencies and law enforcement operate surveillance networks spanning thousands of camera feeds — bodycams, fixed infrastructure, drones — but lack the capacity to monitor them in real time. According to Protent's data, "fewer than 1 in 200 incidents are caught in real time" by human operators (YC LinkedIn post, March 2, 2026). As a result, video footage functions as a retroactive evidence tool rather than a preventive resource. Video footage is cited as useful in 65% of criminal investigations (Protent LinkedIn post via YC LinkedIn, March 2, 2026), yet the live intelligence layer is missing. Current solutions rely on passive recording with manual review after incidents have already occurred.

**Approach:** Protent provides a real-time video intelligence platform that analyzes every camera feed simultaneously. The system detects early escalation patterns and predictive threat signals — including object identification and sentiment analysis — and surfaces alerts to dispatchers and officers with immediate context to prioritize and intervene before situations spiral. The platform supports natural language queries to search across live video streams for specific persons or objects and maintains visibility of targets across camera nodes (Tracxn company profile, 2026 via search snippet). This transforms the surveillance workflow from reactive review to proactive prevention.

**Differentiation:** Unlike Verkada and Spot AI, which focus broadly on cloud-managed video security for commercial enterprises, Protent targets law enforcement and public safety agencies specifically with an escalation-detection and predictive-threat model. Compared to Actuate, which focuses primarily on gun/weapon detection via computer vision, Protent monitors a broader range of escalation behaviors and sentiment signals. Lumana AI uses vision-language models for behavior-aware monitoring but targets enterprise physical security broadly; Protent's GovTech positioning and law enforcement deployment focus is a distinct go-to-market wedge. Coram AI similarly targets business video security rather than public safety.

**Business Model:** No public pricing page was found on protent.ai (website returned only styling/framework code at time of research). [Inferred]: Most likely monetization path is a SaaS subscription model with per-camera or per-deployment pricing, given the "SaaS" tag and the standard model in AI video analytics. Government procurement cycles and multi-year contracts are typical in this segment.

**TAM/SAM:** The global AI in video surveillance market was valued at $4.74 billion in 2025 and is projected to reach $12.46 billion by 2030 at a 21.3% CAGR (MarketsandMarkets, 2024 via search snippet). An alternate estimate sizes the AI video analytics market at $5.04 billion in 2025, growing to $17.23 billion by 2031 at a 22.72% CAGR (Mordor Intelligence, 2026 via search snippet). The broader physical security market is estimated at $60 billion (CNBC, December 2025). [Inferred]: The serviceable addressable market for Protent would be the law enforcement and public safety subsegment of AI video surveillance, which is a fraction of the broader TAM. No public SAM estimate specific to GovTech/law enforcement video AI was found.

**GTM / Distribution:** Protent is already working with police departments in the Atlanta, Chicago, and St. Louis metro areas (YC company page). [Inferred]: The initial GTM appears to be direct sales to municipal and metropolitan police departments, likely leveraging pilot deployments to build case studies for broader government procurement. The GovTech tag and law enforcement focus suggest a land-and-expand strategy across public safety agencies.

## Defensibility

Protent's founders bring specific domain expertise: Srihan Balaji deployed RL-optimized video intelligence at Lockheed Martin, and Abhisheik Sharma published research in NLP and sentiment analysis (YC company page). The combination of reinforcement-learning-based video analysis with NLP-driven sentiment detection for real-time escalation prediction represents technical complexity that requires specialized talent.

Government and law enforcement deployments, once established, create switching costs through procurement cycles, compliance requirements, training, and integration with existing surveillance infrastructure. Data collected from live deployments — escalation patterns, threat signal models — can create a data flywheel that improves detection accuracy over time.

**Market structure:** Large incumbent surveillance hardware companies (Hikvision, Genetec) sell camera hardware and basic analytics. Adding a predictive intelligence layer that flags escalation patterns would require these incumbents to build or acquire ML capabilities outside their core competency. More importantly, [Inferred]: incumbents selling to broad commercial security markets may face sales channel conflict in pivoting resources toward the specialized law enforcement procurement process, which involves lengthy government RFP cycles, compliance requirements (CJIS, FedRAMP), and different buyer personas than their existing commercial channels.

**Commoditization risk:** The underlying technologies — computer vision, NLP, sentiment analysis — are increasingly commoditized through open-source models and cloud AI services. Well-funded competitors like Lumana AI ($64M raised) and Verkada ($700M raised) could build similar escalation-detection features. The differentiation rests on (1) the specificity of escalation-pattern models trained on law enforcement scenarios, (2) government relationships and procurement positioning, and (3) integration with law enforcement workflows (bodycams, dispatch systems). These are defensible but not insurmountable barriers.

## Market & Traction

**Traction signals:**
- Deployed with police departments in Atlanta, Chicago, and St. Louis metro areas (YC company page)
- LinkedIn company page: 799 followers (Protent LinkedIn launch post, February 26, 2026)
- Y Combinator LinkedIn post about Protent: 683 likes, 106 comments (March 2, 2026)
- Protent's own LinkedIn launch post: 84 likes, 7 comments (February 26, 2026)
- Funding: $500K over 1 round (seed), January 2026 (Tracxn via search snippet) — consistent with YC standard deal
- No Product Hunt launch found
- No company Twitter/X account identified (the @protent1 handle belongs to an unrelated cosmetics brand)
- No app store presence, Chrome extension, or Discord/Slack community found
- No Hacker News Launch YC post found
- Website not fully accessible at time of research (returned only framework/CSS code)
- Harisai Karthikeyan, a Virginia Tech computer science student, is also listed as associated with Protent (YC W26) on LinkedIn

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Protent |
|-----------|---------|-------------|-------------------------------|
| **Verkada** | $700M, $5.8B valuation (CNBC, Dec 2025) | $1B annualized bookings, 30K customers (CNBC, Dec 2025) | Full-stack hardware + software cloud security platform; broad commercial focus vs. Protent's law enforcement specialization |
| **Lumana AI** | $64M total ($40M Series A, Wing VC, July 2025; SiliconANGLE) | Revenue unknown; 50K+ cameras deployed (PR Newswire, Dec 2025) | Vision-language models for enterprise physical security; broader commercial target market vs. Protent's GovTech focus |
| **Actuate** | $23.8M total (Tracxn via search snippet) | Revenue unknown; 20K cameras, 1.2K+ customer sites (Actuate website) | Focused on specific threat types (gun detection, slip-and-fall); Protent targets broader escalation pattern detection |
| **Spot AI** | $93M total (Spot AI blog) | 10x ARR growth since Series B (undisclosed base); 1K+ customers (Spot AI blog) | Video AI agents for commercial businesses; Protent focuses on law enforcement rather than enterprise operations |
| **Coram AI** | $30M total ($13.8M Series A, Jan 2025; BusinessWire) | $5.8M revenue, 68 employees (Getlatka, Sep 2025 via search snippet) | AI-powered business video security for Fortune 500s; Protent targets public safety agencies |

**Why now:** [Inferred]: Several converging factors open this opportunity: (1) Vision-language models and real-time video inference have reached sufficient accuracy and speed to analyze multiple feeds simultaneously with low latency — a technical threshold that was not practical even 2-3 years ago. (2) The proliferation of bodycam mandates and surveillance infrastructure in U.S. cities has created a massive volume of unmonitored video feeds. (3) Rising public safety concerns and municipal budget pressures create demand for force-multiplier technologies that extend the reach of existing surveillance staff. (4) The success of companies like Verkada ($1B annualized bookings) and Lumana AI ($40M Series A) validates market appetite for AI-powered video intelligence broadly, while the law enforcement-specific segment remains underserved by purpose-built solutions.

## Founders & Team

**Srihan Balaji** — Co-Founder & CEO
- Attended Thomas Jefferson High School for Science and Technology, Alexandria, VA (tjTODAY, 2021)
- Previously deployed RL-optimized video intelligence at Lockheed Martin (YC company page)
- LinkedIn headline: "AI/ML - Amazon" (LinkedIn via search snippet), suggesting prior work at Amazon in AI/ML
- Founded the International Biology Bowl in April 2021 (biologybowl.org)
- Twitter/X: @srihanbr (YC company page); follower count not retrievable due to JavaScript rendering
- LinkedIn: linkedin.com/in/srihanbalaji
- GitHub: No public repos found associated with this specific individual
- Kaggle: kaggle.com/srihanbalaji (Novice level)

**Abhisheik Sharma** — Co-Founder & CTO
- Published state-of-the-art work in natural language processing and sentiment analysis (YC company page)
- Now building the video intelligence layer that surfaces threats in real-time
- Twitter/X: No public account found
- LinkedIn: Listed on YC page (specific URL not confirmed; multiple "Abhisheik Sharma" profiles exist on LinkedIn, none conclusively matched to the Protent co-founder)
- GitHub: No public repos found

**Co-founder relationship:** Both founders are listed on the YC company page as co-founders of Protent, founded in 2025. No shared prior employer or university overlap was identified from available public data. Srihan's background spans Lockheed Martin and Amazon (defense/tech), while Abhisheik's background is in NLP research. No public data on how they connected.

**Founder-market fit:** Srihan Balaji's direct experience deploying reinforcement-learning-optimized video intelligence at Lockheed Martin provides domain-specific technical expertise in exactly the type of real-time video analysis Protent is building. Abhisheik Sharma's published research in NLP and sentiment analysis maps directly to Protent's approach of detecting escalation through behavioral and linguistic signals in video feeds. The pairing of defense-sector video intelligence experience with NLP research creates a complementary skillset for building a predictive threat detection platform.

## Key Risks

**Government procurement cycle dependency:** Protent's target customers are municipal police departments and public safety agencies, which operate on lengthy procurement cycles (often 12-24 months), require compliance certifications (CJIS, FedRAMP), and are subject to budget approval processes. This creates long sales cycles and revenue unpredictability, particularly challenging for a pre-seed company with limited runway. Mitigation: early deployments in Atlanta, Chicago, and St. Louis metro areas suggest some procurement traction already.

**Surveillance ethics and public scrutiny:** Real-time AI surveillance of public spaces by law enforcement is a politically sensitive area. The YC LinkedIn post about Protent generated substantial critical commentary referencing dystopian surveillance concerns (LinkedIn, March 2, 2026). Regulatory restrictions on facial recognition and AI surveillance have been enacted in multiple U.S. cities (San Francisco, Boston, Portland). Expansion could be limited by local ordinances or shifting public sentiment. Mitigation: Protent's messaging focuses on escalation detection and threat signals rather than facial recognition or individual identification.

**Well-funded competitive convergence:** Lumana AI ($64M raised), Spot AI ($93M), and Verkada ($700M) all operate in AI-powered video intelligence and could extend into law enforcement use cases. Lumana AI's vision-language model approach and "any camera into a proactive sensor" positioning overlaps significantly with Protent's value proposition. At pre-seed scale, Protent faces a capital asymmetry disadvantage if larger players decide to pursue the public safety vertical.

**Brand disambiguation:** "Protent" shares naming similarity with "Portent" (a digital marketing agency) and an existing "@protent1" cosmetics brand on Twitter/X. This could create confusion in search results and brand building, particularly problematic for a company selling to government buyers who conduct due diligence.

**Founder experience depth:** While the founders have relevant technical backgrounds (Lockheed Martin video intelligence, NLP research), their LinkedIn profiles suggest they may be relatively early-career. Srihan Balaji attended Thomas Jefferson High School (class of ~2021-2025) and his LinkedIn lists Amazon AI/ML as a role. Selling into government agencies typically requires experienced enterprise/government sales leadership that the two-person team currently lacks.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $4.74B in 2025, projected $12.46B by 2030 at 21.3% CAGR (MarketsandMarkets via search snippet); alternate: $5.04B in 2025, projected $17.23B by 2031 at 22.72% CAGR (Mordor Intelligence via search snippet) |
| SAM | No public data found for law enforcement/GovTech-specific video AI subsegment |
| Traction | Deployed with police departments in Atlanta, Chicago, and St. Louis metro areas (YC company page); 799 LinkedIn followers (Protent LinkedIn, Feb 2026); YC LinkedIn post: 683 likes, 106 comments (March 2, 2026) |
| Revenue Signal | No public data found |
| Founders | Srihan Balaji (CEO): Lockheed Martin (RL video intelligence), Amazon AI/ML, Thomas Jefferson HS. Abhisheik Sharma (CTO): NLP/sentiment analysis researcher |
| Competitors | Verkada ($700M raised, $1B annualized bookings, full-stack commercial security); Lumana AI ($64M raised, revenue unknown, VLM-based enterprise video intelligence); Actuate ($23.8M raised, revenue unknown, gun/threat detection); Spot AI ($93M raised, revenue unknown, commercial video AI); Coram AI ($30M raised, $5.8M revenue, business video security) |
| Moat Signals | Founder domain expertise (Lockheed Martin video intelligence + NLP research); early law enforcement deployments creating potential data flywheel; GovTech compliance and procurement positioning |
| Risk Factors | Government procurement cycle dependency, surveillance ethics/regulatory risk, well-funded competitive convergence, brand disambiguation |
| Founder Reach | Srihan Balaji: Twitter/X @srihanbr (count not retrievable), LinkedIn linkedin.com/in/srihanbalaji. Abhisheik Sharma: Twitter/X not found, LinkedIn listed on YC page (specific profile unconfirmed) |
| Distribution Signals | No Product Hunt launch found; no Hacker News Launch YC post found; no app store or Chrome extension presence; LinkedIn company page at 799 followers (Feb 2026) |
| Emails | srihan@protent.ai |
