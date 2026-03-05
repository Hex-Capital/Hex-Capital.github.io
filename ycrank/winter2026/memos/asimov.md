# Asimov

> Internet-scale marketplace for robot training data

| Field | Value |
|-------|-------|
| Website | https://tryasimov.ai/ |
| YC Page | https://www.ycombinator.com/companies/asimov |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Supply Chain and Logistics |
| Team Size | 3 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Robotics, Data Labeling, AI |
| YC Partner | Brad Flora |
| Emails | No public data found |

## The Idea

**Problem:** Robotics AI suffers from a data scarcity bottleneck. Language models train on internet-scale text and vision models on billions of images, but robotics lacks equivalent volumes of real-world manipulation and motion data. Most robot training data today comes from small in-house teams teleoperating expensive robots ($40,000+ setups) in controlled lab environments, producing limited variety, slow throughput, and narrow domain coverage (company website; Sensei YC launch page). Frontier robotics labs—building humanoid robots, manipulation arms, and autonomous systems—need thousands of hours of diverse, annotated human motion data to train physical AI models, but cannot generate it internally at scale.

**Approach:** Asimov deploys lightweight headband-mounted cameras to a distributed network of 5,000+ contributors across households, restaurants, hotels, and factories on three continents (company website; YC company page). Contributors record themselves performing everyday tasks—cooking, cleaning, warehouse work—while wearing the hardware during normal activities. Asimov then processes this raw egocentric video into clean, annotated datasets with 3D body pose, depth maps, semantic labels, and activity segmentation (company website). The approach captures organic, unscripted human motion in diverse real-world environments rather than staged lab demonstrations.

**Differentiation:** Asimov's model differs from competitors in three ways:
- *vs. Sensei (YC S24):* Sensei uses sensorized exoskeleton arms for teleoperation-style data collection. Asimov captures egocentric video of natural human activity rather than robot-mediated demonstrations, producing data that reflects organic human motion patterns rather than constrained teleoperation.
- *vs. micro1:* micro1 ships Ray-Ban glasses to contributors for similar crowdsourced capture but is expanding into robotics from an RLHF data labeling base. Asimov is purpose-built for robotics data from inception.
- *vs. General Intuition:* General Intuition trains spatial reasoning models from 2 billion gaming videos/year. Asimov captures real-world physical interaction data rather than synthetic/gaming-derived data.
- *vs. Scale AI:* Scale AI is a $16.4B+ data labeling platform extending into robotics. Asimov is a specialized, vertically focused marketplace rather than a horizontal data platform.

**Business Model:** Asimov operates a three-sided marketplace:
1. *Robotics teams* purchase clean, annotated datasets ready for model training.
2. *Individual contributors* earn money by recording daily activities wearing Asimov hardware (privacy protections: no audio, faces auto-blurred, PII removed).
3. *Businesses* (hotels, restaurants, factories) pay worker salaries while workers wear recording equipment during normal operations; larger partnerships include revenue sharing (company website).

No public pricing page was found. [Inferred]: Most likely monetization is per-hour or per-task dataset pricing to robotics teams, with a take rate on the contributor payment side, similar to how Scale AI charges per annotation task.

**TAM/SAM:** The global AI training dataset market was valued at $3,195.1 million in 2025 and is projected to reach $16,320 million by 2033 at a 22.6% CAGR (Grand View Research, 2025 via search snippet). The data labeling market was estimated at $2.13 billion in 2025, projected to reach $6.98 billion by 2030 at a 26.76% CAGR (Mordor Intelligence, 2025 via search snippet). The downstream humanoid robot market was valued at $2.92 billion in 2025, projected to reach $15.26 billion by 2030 at a 39.2% CAGR (MarketsandMarkets, 2025 via search snippet). No public estimate exists for the robotics-specific training data sub-segment.

**GTM / Distribution:** Job postings for "Data Collection Specialist" (Remote, $20-$30/hr) and "Strategic Operations Intern" (Berkeley/Remote US, $20-$50/hr) indicate active expansion of the contributor network and operational capacity (YC jobs page). [Inferred]: Primary distribution to robotics teams is likely through direct sales to frontier labs (the company states it is "trusted by frontier robotics teams"), with contributor acquisition via gig-economy-style recruitment across three continents.

## Defensibility

**Data network effects:** The core defensibility mechanism is a growing, proprietary dataset of annotated human motion data from diverse environments. As more contributors record in more environments, the dataset becomes more valuable to robotics teams; as more robotics teams purchase data, Asimov can fund more contributor deployments. This flywheel effect strengthens over time but is nascent at this stage.

**Contributor network:** A 5,000+ contributor network across three continents creates a distribution and data collection asset that would take time to replicate (company website; YC page). The geographic and environmental diversity (households, restaurants, hotels, factories) adds value that lab-collected data cannot easily match.

**Annotation pipeline:** Proprietary post-processing pipeline producing 3D body pose, depth maps, semantic labels, and activity segmentation represents accumulated technical infrastructure (company website).

**Market structure:** Large incumbents like Scale AI ($16.4B+ raised) could enter this niche but face sales channel conflict: Scale's core business serves language and vision model companies, and building a physical contributor hardware network across three continents is operationally distinct from API-based annotation services. Robotics-native companies (Physical Intelligence, Skild AI, Covariant) build proprietary data flywheels from their own robot deployments, creating in-house datasets not available to the broader market—but this also means they are not marketplace competitors.

**Commoditization risk:** The core concept—crowdsource human activity recordings via wearable cameras—is replicable. micro1 is already shipping Ray-Ban glasses for similar capture (TechCrunch, Dec 2025). Sensei uses a different hardware approach (exoskeleton arms) for related data collection. The barrier is in the combined execution of hardware deployment logistics, contributor management across geographies, and annotation quality—operational complexity rather than deep technical moats. Multiple well-funded entrants could pursue similar approaches.

## Market & Traction

**Traction signals:**
- 5,000+ contributors in the data collection network (YC company page)
- Operating across 3 continents (company website)
- "Trusted by frontier robotics teams" — no named customers disclosed (company website)
- 2 active job postings on YC: Strategic Operations Intern, Data Collection Specialist (YC jobs page)
- Twitter/X: @tryasimov — follower count not retrievable
- LinkedIn: company page "tryasimov" — follower count not retrievable
- Hugging Face profile exists for founder Lyem Ningthou (huggingface.co/Lyem)
- No Product Hunt launch found for this specific Asimov company
- No Discord or Slack community found
- No app store presence found
- Waitlist page detected at tryasimov.reflection.ai/asimov-waitlist (search result, not verified)

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Differentiator vs. Asimov |
|---|---|---|---|
| **Sensei** (YC S24) | $500K (YC) + undisclosed from Calibrate Ventures, Lotus Venture Partners, Network VC (Dealroom via search snippet) | $3.9M (Extruct AI via search snippet, unverified) | Uses $300 sensorized exoskeleton arms for teleoperation rather than egocentric video; focuses on robot-specific demonstrations |
| **micro1** | $35M Series A at $500M valuation (TechCrunch, Sep 2025) | $100M+ ARR (TechCrunch, Dec 2025) | Horizontal RLHF data labeling platform expanding into robotics via Ray-Ban glasses; massive scale from AI training services |
| **General Intuition** | $134M seed (TechCrunch, Oct 2025) | Revenue unknown | Trains spatial reasoning from 2B gaming videos/year via Medal platform; synthetic/gaming data vs. Asimov's real-world capture |
| **Scale AI** | $16.4B+ total raised (via search snippet) | Revenue unknown (reported $1B+ ARR in prior years via search snippet) | Dominant horizontal data labeling platform; robotics is one vertical among many |

**Why now:**
- [Inferred]: The convergence of several factors in 2024-2025 opened this opportunity: (1) frontier robotics labs (Physical Intelligence, Skild AI, 1X, Figure) raised billions in funding and are actively building humanoid robots that require massive training data; (2) the robotics data bottleneck became widely recognized as the key constraint—November-December 2025 was described as "the tipping point" when the market priced in the insatiable appetite for physical AI data (Quasa.io, 2026 via search snippet); (3) consumer camera and sensor hardware became cheap enough to deploy at scale in a lightweight headband form factor; (4) Skild AI grew from zero to ~$30M revenue in months, validating commercial demand for robotics AI that requires training data (Skild AI blog via search snippet).

## Founders & Team

**Lyem Ningthou** — Founder
- BS Computer Science, University of California, Berkeley (2022–2026) (LinkedIn via search snippet)
- Attended Mississippi School for Mathematics and Science (MSMS) (The Vision MSMS via search snippet)
- Co-created Go Bus, a GPS tracking system for school buses, as an 8th grader (MSU Center for Entrepreneurship via search snippet)
- Prior experience: FLIP, Blume (YC W24), USDA, Numerator (LinkedIn via search snippet)
- Described as "defense tech robotics researcher" on YC page
- Participated in MSU/USDA Graduate Summer Research Experience (MSU newsroom via search snippet)
- Twitter/X: @lyemningthou — count not retrievable (handle from YC page)
- LinkedIn: linkedin.com/in/lyem-ningthou-5a09a4239 — 500+ connections (LinkedIn via search snippet)
- GitHub: No confirmed public repos found (the "Lyem" GitHub account is a different person based in Brazil)
- Hugging Face: huggingface.co/Lyem (search result)

**Anshul Verma** — Co-founder
- BS Electrical Engineering & Computer Sciences, University of California, Berkeley (expected 2026) (RocketReach/ZoomInfo via search snippet)
- Machine Learning Researcher at Berkeley Artificial Intelligence Research (BAIR) (RocketReach, ZoomInfo via search snippet)
- Prior experience: Scale AI, Lenovo, EPRI, Amazon (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/anshulverma531 (LinkedIn via search snippet)
- GitHub: No confirmed public repos found (multiple "Anshul Verma" accounts exist; none confirmed as this individual)

**Co-founder relationship:** Both founders are UC Berkeley EECS undergraduates with expected 2026 graduation, indicating they likely overlap as classmates. Both have robotics/ML connections through Berkeley's ecosystem (Lyem through defense tech robotics research; Anshul through BAIR). No specific shared employer or project prior to Asimov was found.

**Founder-market fit:** Anshul Verma's experience at Scale AI (the dominant data labeling company) provides direct exposure to the data marketplace model, while his BAIR research gives technical depth in ML for robotics. Lyem Ningthou's defense tech robotics background and prior startup experience at Blume (YC W24) provide both domain knowledge and YC-accelerated startup execution experience. Together, they combine data marketplace operations knowledge with robotics research capability. No advisors, board members, or notable investors beyond YC and Brad Flora were found.

## Key Risks

**Brand disambiguation:** At least four other companies use variations of the "Asimov" name: Asimov Inc. (biotech, Boston, $200M raised — TechFundingNews via search snippet), ASIMOV Robotics (India, acquired by Zoho Jul 2025 — Tracxn via search snippet), Asimov Press (media), and Asimov Security (cybersecurity for robotics, on Product Hunt). This creates SEO competition, investor confusion, and potential trademark challenges. The company uses "tryasimov.ai" as its domain, which partially mitigates web presence overlap.

**Well-funded direct competitors in crowdsourced robotics data:** micro1 ($35M raised, $100M+ ARR) is actively shipping wearable camera kits for identical use cases (TechCrunch, Dec 2025). Sensei (YC S24) is pursuing the same market with different hardware. The window for establishing a dominant data network may be narrow given the capital flowing into this space.

**Contributor network quality and retention:** The business depends on thousands of non-technical contributors wearing hardware reliably across diverse geographies. Quality variance, contributor churn, hardware logistics across three continents, and privacy compliance in multiple jurisdictions create operational complexity that scales with the contributor count. Job postings for $20-$30/hr data collection specialists suggest the per-hour cost structure may face margin pressure as competitors also recruit contributors.

**Customer concentration risk:** The addressable customer set (frontier robotics labs) is currently small—a handful of well-funded companies (Physical Intelligence, Skild AI, 1X, Figure, Covariant). Customer concentration in a small buyer pool creates revenue volatility risk if any single customer reduces purchases or builds competing internal data capabilities.

**Platform dependency for data value:** The value of Asimov's data depends on continued demand for pre-training data from real-world human demonstrations. If robotics teams shift toward simulation-first approaches (NVIDIA Cosmos, synthetic data), or if foundation model companies build internal data flywheels from deployed robots (as Covariant does), demand for externally sourced human motion data could shrink.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI training dataset market: $3.2B (2025), projected $16.3B by 2033 at 22.6% CAGR (Grand View Research via search snippet). Humanoid robot market: $2.9B (2025), projected $15.3B by 2030 at 39.2% CAGR (MarketsandMarkets via search snippet). |
| SAM | No public data found for robotics-specific training data sub-segment. |
| Traction | 5,000+ contributors across 3 continents (YC company page, company website). 2 active job postings (YC jobs page). |
| Revenue Signal | No public data found. |
| Founders | Lyem Ningthou (Founder): UC Berkeley CS, defense tech robotics researcher, prior at Blume (YC W24), FLIP, USDA, Numerator. Anshul Verma (Co-founder): UC Berkeley EECS, ML researcher at BAIR, prior at Scale AI, Lenovo, EPRI, Amazon. |
| Competitors | Sensei (YC S24; $500K+ raised, $3.9M revenue per Extruct AI unverified; teleoperation via exoskeleton arms). micro1 ($35M raised at $500M valuation, $100M+ ARR; horizontal data labeling expanding to robotics via wearable cameras). General Intuition ($134M seed; spatial reasoning from gaming videos). Scale AI ($16.4B+ raised; dominant horizontal data platform). |
| Moat Signals | 5,000+ contributor network across 3 continents; proprietary annotation pipeline (3D pose, depth maps, semantic labels); growing dataset of organic human motion data. |
| Risk Factors | Brand disambiguation across 4+ same-name companies, well-funded direct competitors (micro1 at $100M+ ARR), small addressable customer base of frontier robotics labs |
| Founder Reach | Lyem Ningthou: Twitter @lyemningthou (count not retrievable), LinkedIn 500+ connections. Anshul Verma: Twitter not found, LinkedIn linkedin.com/in/anshulverma531 (count not retrievable). |
| Distribution Signals | No Product Hunt launch found. No app store presence. Waitlist page detected at tryasimov.reflection.ai (unverified). 2 active job postings on YC. |
| Emails | No public data found |
