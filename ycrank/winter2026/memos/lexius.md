# Lexius

> AI Crime Detection

| Field | Value |
|-------|-------|
| Website | https://www.lexius.ai |
| YC Page | https://www.ycombinator.com/companies/lexius |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Retail |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, Computer Vision |

## The Idea

**Problem:** Retail shoplifting cost U.S. retailers an estimated $45 billion in 2024 (Building Security Services, 2026 via search snippet), with incidents rising 18% year-over-year (NRF, 2024 via search snippet). Most stores rely on passive CCTV that records but does not detect theft in progress. Hiring dedicated loss prevention staff is costly and prone to human error and bias. Small and mid-size retailers are disproportionately affected because they lack the budget for LP teams or advanced hardware systems.

**Approach:** Lexius is a software-only add-on that connects to a store's existing security cameras (compatible with Lorex, Hikvision, and others) and uses computer vision to detect shoplifting behavior in real time (lexius.ai). When suspicious behavior is identified — such as concealment of merchandise in a jacket, bag, or pocket — the system sends an instant mobile notification to staff with a short video clip for verification. The company claims a detection-to-alert time of ~1.5 seconds (FineFare case study, lexius.ai). The system analyzes movement and behavior only, explicitly excluding skin color, race, gender, or clothing from its models (lexius.ai).

**Differentiation:** Versus traditional CCTV monitoring services, Lexius requires no new hardware and no human monitors. Versus Veesion (the largest funded competitor), Lexius positions itself as a plug-and-play solution targeting the U.S. SMB retail market, while Veesion is European-origin and focused on larger chains. Versus Auror, which is a post-incident retail crime intelligence and law enforcement coordination platform, Lexius is a real-time in-store detection layer. Versus Everseen, which targets enterprise-scale retailers with checkout-focused vision AI, Lexius targets smaller store footprints with a lower-touch deployment model (15-minute remote installation claimed on the clothing case study, lexius.ai).

**Business Model:** Lexius offers three pricing tiers — Standard (up to 10 cameras), Advanced (up to 20 cameras), and Enterprise (unlimited cameras with custom integrations and 24/7 support) — with pricing available on request (lexius.ai). No public pricing figures were found. A 30-day free trial is mentioned on the FineFare case study page (lexius.ai). [Inferred]: The per-camera tiered SaaS model suggests monthly recurring revenue, likely scaled by camera count, consistent with other video analytics SaaS players.

**TAM/SAM:** The AI-Driven Retail Theft Deterrence Market was valued at $2.43 billion in 2024 and is projected to reach $7.82 billion by 2032 at a 15.73% CAGR (SNS Insider, 2025 via search snippet). U.S. retailers lost an estimated $45 billion to shoplifting in 2024 (Building Security Services, 2026 via search snippet), with projections of $47.8 billion in 2025 (same source). [Inferred]: The SAM for software-only AI shoplifting detection targeting U.S. SMB retail (grocery, convenience, fashion) is a subset of the $2.43B market; no independent SAM estimate was found for this specific segment.

**GTM / Distribution:** The FineFare case study (Bronx, NY grocery store) and an undisclosed clothing retailer case study indicate Lexius is actively deployed with U.S. retailers (lexius.ai). An earlier customer was Coop Vandaag in Enschede, Netherlands (Novelt case study). The Novelt article reported that "4,000+ stores from major retail chains expressed interest" in the product, and that the waitlist "exploded" without marketing efforts (Novelt). The company offers remote installation requiring no on-site visit (lexius.ai). [Inferred]: The GTM appears to be direct sales to individual store owners/operators, with the free 30-day trial as the primary conversion mechanism, scaling toward multi-location retail chains via the Enterprise tier.

## Defensibility

The primary defensibility vector is data accumulation: each deployed camera generates labeled behavioral training data (theft vs. non-theft events), which can improve model accuracy over time. Stores using the system generate proprietary datasets specific to their merchandise categories and layouts. Switching costs exist once the system is integrated into daily store operations and staff workflows, though the software-only nature means no hardware lock-in.

No patents or patent applications were found in public records. No open-source repos associated with the Lexius product were found.

**Market structure:** Large incumbent security camera vendors (Hikvision, Axis Communications, Honeywell) sell hardware and basic recording infrastructure. Adding real-time behavioral AI detection would cannibalize their hardware-agnostic positioning and require them to build or acquire ML capabilities outside their core competency. Traditional LP service companies (e.g., Securitas) rely on human staffing revenue models and face business model conflict in deploying fully automated detection that replaces their guards. Retail POS/ERP vendors (e.g., Oracle Retail) focus on checkout and inventory management, not in-store video analytics.

**Commoditization risk:** Computer vision for behavioral detection is an active research area, and the general approach (detect concealment gestures via existing cameras) is replicable. Veesion has already raised €53M and deployed in 5,000+ stores with a similar approach (EU-Startups, May 2025). Everseen has $113M in funding (Tracxn, 2025 via search snippet). New entrants like Arcadian AI offer similar "AI security guard" products. The barrier to entry is moderate — the core technology is accessible via modern ML frameworks, but accuracy at the edge (low false-positive rates in varied lighting, camera angles, and store layouts) requires significant real-world training data.

## Market & Traction

**Traction signals:**

- FineFare grocery store (Bronx, NY, 12,000 sq ft, 64 cameras): 63% reduction in retail theft, $3,520/month in theft prevented, 12x ROI, 1.5-second average alert time, over a 30-day period (lexius.ai case study). *Note: These are customer outcome metrics, not Lexius revenue.*
- Undisclosed high-traffic clothing retailer: 55% shrinkage reduction, $2,500+/month in prevented losses, 4.7x ROI, 12 hours/week time saved, over a 6-week period (lexius.ai case study). *Note: These are customer outcome metrics, not Lexius revenue.*
- First customer: Coop Vandaag in Enschede, Netherlands (Novelt).
- 4,000+ stores from major retail chains "expressed interest"; waitlist described as having "exploded" without marketing efforts (Novelt).
- LinkedIn: 350 followers (LinkedIn via search snippet).
- Funding: $500K total raised (Crunchbase via search snippet), including YC W26 participation. Virtual Network listed as an investor (Crunchbase via search snippet).
- Founded: 2024 per YC page; some sources (Crunchbase, Novelt) reference 2022, suggesting earlier development in the Netherlands before the current U.S.-focused iteration.
- Nominated for "Most Entrepreneurial Student of the Year" at University of Twente, awarded first place (LinkedIn, David Elskamp).
- Attended Slush 2023 (Helsinki) as part of the Dutch 4TU Tech Startups delegation, spoke with 10+ VCs (LinkedIn, David Elskamp).
- No Product Hunt launch found.
- No Twitter/X company account found.
- No Discord or Slack community found.
- No app store listings or download counts found (mobile notifications are delivered via a companion app on iOS/Android per lexius.ai, but no public app store listing was located).

**Competitive landscape:**

| Competitor | Funding | Scale | Key Differentiator vs. Lexius |
|---|---|---|---|
| **Veesion** (Paris) | €53M total (€38M Series B + €15M non-dilutive, May 2025) (EU-Startups) | 5,000+ stores in 25 countries, 150 employees (EU-Startups) | Gesture-based AI detection; larger scale, European-origin, expanding to U.S. in mid-2025. Revenue unknown publicly but 10% from U.S. without a local office (EU-Startups). |
| **Everseen** (Ireland) | ~$113M total; $71M Series A led by Crosspoint Capital Partners (TechCrunch, May 2023) | Global enterprise retailers | Focuses on checkout and self-checkout fraud in addition to in-store theft; serves large enterprise clients. Revenue unknown. Commissioned Forrester TEI study claiming 374% ROI (BusinessWire, Sep 2024). |
| **Auror** (New Zealand) | NZ$82M Series C led by Axon, valuation >$500M (NZ Herald) | 45,000+ stores, 3,000+ law enforcement agencies | Post-incident crime intelligence and law enforcement coordination, not real-time in-store detection. Revenue grew 150% between 2022-2024; estimated ~$10M ARR (Auror.co, ZoomInfo via search snippet). |
| **Arcadian AI** (Canada) | No public funding data found | Unknown | "Ranger" AI security guard platform; behavior-driven, privacy-first positioning similar to Lexius. |

**Why now:** [Inferred]: Several factors converge: (1) U.S. retail shoplifting losses accelerated post-COVID, with an 18% year-over-year increase in incidents reported in 2024 (NRF via search snippet), creating acute retailer demand; (2) advances in real-time computer vision inference — including edge-deployable models and cheaper GPU cloud processing — crossed a performance threshold enabling sub-2-second detection on commodity camera feeds; (3) several U.S. states and municipalities rolled back or stopped enforcing low-value shoplifting prosecution thresholds, increasing retailer reliance on private deterrence solutions; (4) the normalization of AI-powered video analytics (driven by Veesion's European deployment and broader retail tech adoption) reduced buyer skepticism.

## Founders & Team

**David Elskamp** — Co-founder & CEO
- Education: BS in Technical Computer Science and MS in Data Science & Technology, University of Twente, Netherlands (LinkedIn).
- Built a six-figure media agency (David Elskamp Media) starting at age 14, with clients including Adidas, Heineken, TEDx, and Utrecht University (davidelskamp.nl). Registered with the Dutch Chamber of Commerce (KvK).
- Awarded "Most Entrepreneurial Student of the Year" (1st place) by the Student Union, University of Twente (LinkedIn via search snippet).
- Described as "2x founder" on YC profile; the media agency is the first venture, Lexius the second.
- Attended Slush 2023 as part of Dutch 4TU Tech Startups delegation (LinkedIn).
- Twitter/X: @elskamp found via search, but profile details and follower count not retrievable.
- LinkedIn: linkedin.com/in/davidelskamp — "Co-Founder Lexius (YC W26)" (LinkedIn).
- GitHub: No public repos found.

**Liam Webster** — Co-founder
- Education: BS in EECS, University of California, Berkeley (YC page, LinkedIn).
- AI & Privacy Research at ICSI (International Computer Science Institute) at UC Berkeley (YC page).
- Developed the BLUES PyDust library — a Python wrapper for the Sawdust API for mobile app traffic analysis and privacy policy research (GitHub).
- Contributed to blues-lab/polipy — "Library for scraping, parsing, and analyzing privacy policies" (18 stars, 2 forks) (GitHub).
- Twitter/X: @liamwebsterxyz (GitHub profile link); follower count not retrievable.
- LinkedIn: linkedin.com/in/liamwebsterxyz — "Lexius" (LinkedIn).
- GitHub: github.com/liamwebsterxyz — 22 public repos, 43 stars total; pinned repos: BearTransitPublic (Dart), PyLogAnalyze (Python), polipy (Python, 18 stars) (GitHub).

**Co-founder relationship:** David Elskamp is Dutch-educated (University of Twente) and Liam Webster is UC Berkeley-educated. No shared employer or university was found in their backgrounds. The Novelt article describes Lexius as having "an international team... combining European and American talent," consistent with their separate geographic origins. No public data on how or when they connected.

**Founder-market fit:** David Elskamp brings entrepreneurial experience (running a profitable agency from high school) and a Master's in Data Science & Technology. Liam Webster brings EECS training from UC Berkeley and specific research experience in AI and privacy — relevant given the product's emphasis on privacy-first behavioral detection without biometric analysis. Webster's privacy policy research at ICSI aligns with the product's positioning around non-biometric, movement-only analysis. No advisors, board members, or notable angel investors were identified beyond the YC partnership with Brad Flora and the pre-YC investor Virtual Network.

## Key Risks

**Well-funded direct competitor (Veesion):** Veesion raised €53M in May 2025, operates in 5,000+ stores across 25 countries, and is establishing a U.S. office in mid-2025 (EU-Startups, May 2025). This creates direct competitive pressure in Lexius's primary market precisely as Lexius is scaling. Veesion's established training data from 5,000+ deployments represents a data advantage that is difficult to replicate quickly.

**Accuracy and false positive risk:** Real-time shoplifting detection via behavior analysis must balance detection rates against false positives. Incorrectly flagging innocent customers creates legal liability (potential harassment or discrimination claims), reputational risk for the retailer, and alert fatigue that degrades the system's usefulness. Arcadian AI's blog argues that many AI shoplifting solutions "fail" due to high false positive rates in real-world environments (arcadian.ai blog, 2025). No independent third-party accuracy benchmarks for Lexius were found.

**Privacy and regulatory exposure:** AI video surveillance of retail customers faces evolving regulatory scrutiny. France's CNIL issued specific guidance on AI-powered CCTV in retail (context from Euronews article, Feb 2026). Illinois' BIPA, California's CCPA, and potential federal legislation could impose consent or disclosure requirements. While Lexius states it does not use biometric identification or store personal data (lexius.ai), the classification of behavioral movement analysis under evolving privacy frameworks remains legally untested in most U.S. jurisdictions.

**Customer concentration at early stage:** Two named case studies (FineFare, Coop Vandaag) and one undisclosed clothing retailer represent the publicly documented customer base. The "4,000+ stores expressed interest" figure (Novelt) reflects inbound demand, not contracted revenue. Conversion rate from interest to paying customer is unknown.

**Founding date ambiguity:** Crunchbase and Novelt reference a 2022 founding, while the YC page states 2024. The company participated in Slush 2023 and had a Dutch customer (Coop Vandaag) prior to YC. This suggests a longer development timeline than a 2024 founding would imply, and raises the question of what traction was achieved during the 2022–2024 period.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.43B AI-Driven Retail Theft Deterrence Market in 2024, projected $7.82B by 2032 at 15.73% CAGR (SNS Insider, 2025 via search snippet) |
| SAM | No public data found |
| Traction | 4,000+ stores expressed interest (Novelt); 3 documented customer deployments — FineFare (Bronx, NY), Coop Vandaag (Netherlands), undisclosed clothing retailer (lexius.ai case studies); 350 LinkedIn followers (LinkedIn via search snippet); attended Slush 2023 |
| Revenue Signal | No public data found. Pricing is tiered by camera count (Standard/Advanced/Enterprise), available on request (lexius.ai). 30-day free trial offered. |
| Founders | David Elskamp (CEO): University of Twente BS+MS, built six-figure media agency in high school, "Most Entrepreneurial Student" award. Liam Webster (Co-founder): UC Berkeley EECS BS, AI & Privacy Research at ICSI. |
| Competitors | Veesion (€53M raised, revenue unknown, gesture-based AI, 5,000+ stores, entering U.S.); Everseen (~$113M raised, revenue unknown, enterprise checkout fraud focus); Auror (NZ$82M Series C, ~$10M ARR est., post-incident crime intelligence, not real-time detection); Arcadian AI (funding unknown, similar real-time AI guard positioning) |
| Moat Signals | Proprietary behavioral training data from deployments; no patents found; no open-source product repos |
| Risk Factors | Well-funded direct competitor (Veesion) entering U.S., false positive / accuracy risk without independent benchmarks, evolving privacy regulation for AI video surveillance |
| Founder Reach | David Elskamp: Twitter @elskamp (count not retrievable), LinkedIn linkedin.com/in/davidelskamp. Liam Webster: Twitter @liamwebsterxyz (count not retrievable), LinkedIn linkedin.com/in/liamwebsterxyz, GitHub 43 stars total (22 repos) |
| Distribution Signals | No Product Hunt launch found; no app store listing found; 350 LinkedIn followers; 30-day free trial as conversion mechanism (lexius.ai) |
