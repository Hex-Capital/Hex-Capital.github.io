# Lexius

> AI Security Guards

| Field | Value |
|-------|-------|
| Website | https://www.lexius.ai |
| YC Page | https://www.ycombinator.com/companies/lexius |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, SaaS, Computer Vision, Security, AI |
| YC Partner | Brad Flora |
| Emails | david@lexius.ai |

## The Idea

**Problem:** Retail shrinkage cost U.S. retailers $112.1 billion in 2025 and is projected to exceed $150 billion by 2026 (iCape Blog, 2026 via search snippet; Loss Prevention Media, 2025 via search snippet). Most retail stores have extensive camera infrastructure but lack the human staffing to monitor feeds in real time. Traditional loss prevention relies on security guards who cannot watch every camera simultaneously, and post-incident review of footage is time-intensive. Organized retail crime (ORC) is a growing segment of theft, involving repeat offenders across multiple locations. Today, retailers use a combination of physical security guards, electronic article surveillance (EAS) tags, and manual review of camera footage.

**Approach:** Lexius provides a software layer that connects to a store's existing security cameras (compatible with Hikvision, Axis, Dahua, Hanwha, and 7+ other brands) and applies computer vision models to detect shoplifting behavior in real time (Lexius website). When suspicious behavior is detected, the system sends instant mobile alerts with video clips to security teams via iOS, Android, or web apps. Additional features include: traceback search across all camera feeds (searching months of footage), known offender recognition with chain-wide intelligence sharing, fall detection for liability protection, and automated case file generation with video evidence. Remote setup takes under 10 minutes with no new hardware required (Lexius website).

**Differentiation:** Lexius focuses on behavioral pattern recognition—analyzing movements and actions like concealing items—rather than facial recognition or demographic profiling. As founder David Elskamp has stated: "Skin color, race, gender, or a person's clothing is irrelevant to us" (Novel-T profile). This contrasts with Facewatch (UK), which relies on facial recognition databases. Compared to Veesion, which uses gesture-recognition AI, Lexius emphasizes its software-only, no-hardware approach with sub-10-minute remote installation. Compared to Everseen, which focuses heavily on checkout and self-checkout loss, Lexius targets in-aisle theft detection. Compared to Auror, which is primarily a crime intelligence and reporting platform for law enforcement coordination, Lexius provides real-time detection and intervention capabilities.

**Business Model:** Three pricing tiers are listed on the website: Standard (up to 10 cameras), Advanced (up to 20 cameras), and Enterprise (unlimited cameras). All plans include free remote installation (Lexius website). Specific dollar pricing is not publicly listed. [Inferred]: The per-camera SaaS pricing model is consistent with industry norms; monetization likely follows a monthly recurring subscription per camera or per location.

**TAM/SAM:** The global retail loss detection market was valued at USD 25.21 billion in 2024 and is projected to reach USD 51.37 billion by 2033, at a CAGR of 8.23% (Business Research Insights via search snippet). The retail loss prevention technology market was estimated at $15 billion in 2025 and is projected to reach $25 billion by 2033 at a CAGR of 7% (DataMarketView via search snippet). The global AI video analytics market reached $5.04 billion in 2025 with a projected CAGR of 23.35% to $17.20 billion by 2030 (Spot AI blog via search snippet). [Inferred]: Lexius's SAM is the subset of AI-powered video analytics applied to retail loss prevention in the U.S. and Europe—likely a single-digit-billion-dollar segment within the broader TAM.

**GTM / Distribution:** Lexius lists 7-Eleven, Erewhon, and Prada as customers (YC page, LinkedIn). Case studies reference FineFare and Nisa convenience stores (Lexius website). The company's first customer was Coop Vandaag in Enschede, Netherlands (LinkedIn company page). A waitlist reportedly attracted "retailers managing over 4,000 stores" without marketing efforts (Novel-T profile). [Inferred]: The GTM appears to be direct sales to retail chains, starting with mid-market grocers and convenience stores, with enterprise logos (7-Eleven, Prada) as anchor accounts. The zero-hardware, remote-install approach lowers the barrier to pilot deployments.

## Defensibility

**Data flywheel:** As Lexius processes more video from more stores, its computer vision models can improve at detecting shoplifting patterns and recognizing repeat offenders across chains. The cross-store known offender database creates a network effect: each additional store in the network increases the value of offender identification for all participants. This data advantage grows with scale but is nascent at the current stage.

**Switching costs:** Once Lexius is integrated with a retailer's camera systems and staff workflows, and once historical case files and offender databases are built, switching to a competitor involves migrating data and retraining staff. However, the sub-10-minute setup suggests integration depth may be limited at this stage.

**Market structure:** Incumbent physical security companies (e.g., ADT, Securitas) sell hardware and human guard services—adding AI-only software that could reduce demand for guards creates channel conflict and cannibalizes their core revenue stream. Camera hardware manufacturers (Hikvision, Axis) could add analytics but their business model is hardware sales, not recurring SaaS, creating a unit economics mismatch.

**Commoditization risk:** Computer vision for retail theft detection is an active area with multiple funded competitors (Veesion at €53M, Everseen at ~$90M, Spot AI at $93M). ArcadianAI uses a similar "AI security guards" tagline and camera-agnostic approach. The core technology (behavior detection via video) is reproducible. Differentiation will likely depend on model accuracy, speed of alerts, breadth of the offender database, and quality of the retail-specific workflow (case generation, evidence packaging).

## Market & Traction

**Traction signals:**
- Named customers: 7-Eleven, Erewhon, Prada (YC page / David Elskamp LinkedIn)
- First customer: Coop Vandaag, Enschede, Netherlands (LinkedIn company page)
- Customer testimonial: Erewhon reports "$3,000 monthly savings per store" (Lexius website)
- Customer testimonial: Nisa reports "60hrs saved weekly per person" (Lexius website)
- Case study: FineFare — "cut retail theft by 63% in 30 days" (Lexius website)
- Case study: Unnamed clothing retailer — "reduced shrinkage by 55%, $2,500+/month savings, 4.7x ROI in 6 weeks" (Lexius website via search snippet)
- Waitlist: "retailers managing over 4,000 stores" signed up without marketing (Novel-T profile)
- Part of official Dutch delegation at Slush 2023, Helsinki (LinkedIn)
- David Elskamp named Most Entrepreneurial Student of 2023 at University of Twente (LinkedIn)
- LinkedIn company page: linkedin.com/company/lexiusss (follower count not retrievable)
- Twitter/X company account: No confirmed company account found
- Product Hunt: No launch found
- Discord/Slack community: No public data found
- App store ratings/reviews: No public data found

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Lexius |
|---|---|---|
| **Veesion** (Paris, France) | €53M total (€38M Series B, 2025) (EU-Startups, May 2025) | Gesture-recognition AI; 5,000+ stores in 25 countries; more mature international footprint |
| **Auror** (Auckland, NZ) | NZ$82M Series C (Auror press release) | Crime intelligence platform connecting 45,000 stores with 3,000+ law enforcement agencies; focuses on reporting/coordination rather than real-time detection |
| **Everseen** (Cork, Ireland) | ~$90M total ($71.3M Series A, 2023) (TechCrunch, May 2023) | Vision AI focused on checkout/self-checkout lanes; serves 10 of top 20 global retailers; revenue unknown |
| **Spot AI** (San Francisco) | $93M total ($31M Series C, Nov 2024) (Spot AI blog) | Broader video intelligence platform (not retail-specific); AI video analytics across industries; revenue unknown |
| **ArcadianAI** | No public funding data found | "Ranger" product with behavior-driven, privacy-first AI; camera-agnostic; uses same "AI Security Guards" tagline |

**Why now:** [Inferred]: Several converging factors opened this opportunity: (1) Post-COVID shoplifting surge created acute retailer pain—U.S. retail theft losses grew from ~$94B in 2021 to $112B+ in 2025 (Loss Prevention Media via search snippet). (2) Computer vision model accuracy crossed a performance threshold in 2023-2024 where real-time behavioral detection became commercially viable at low enough false-positive rates. (3) Ubiquitous deployment of IP-enabled security cameras (Hikvision, Axis, etc.) with standardized protocols (RTSP/ONVIF) created an addressable install base that software-only solutions can tap without hardware replacement. (4) Organized retail crime legislation in multiple U.S. states increased retailer urgency and budget allocation for loss prevention technology.

## Founders & Team

**David Elskamp** — Co-Founder & CEO
- Education: BS Technical Computer Science, University of Twente (graduated with 8.6 grade); MS Data Science & Technology, University of Twente; additional studies in Data Science & Economics at UC Berkeley (LinkedIn via search snippet)
- Founded a media agency at age 14 generating six-figure revenue; clients included Adidas, Heineken, University of Twente, TEDx (davidelskamp.nl, YC page)
- Named Most Entrepreneurial Student of 2023 at University of Twente (LinkedIn)
- Described as "2x founder" (YC page)
- Part of official Dutch delegation at Slush 2023 in Helsinki (LinkedIn)
- Twitter/X: @elskamp (handle found; count not retrievable; not confirmed as active account for Lexius content)
- LinkedIn: linkedin.com/in/davidelskamp — Co-Founder Lexius (YC W26), 500+ connections
- GitHub: No public repos found

**Liam Webster** — Co-Founder
- Education: BS Electrical Engineering & Computer Science, UC Berkeley (graduated 2023); pursuing certification from Jacobs Institute of Design in Innovative Design (personal website)
- AI & Privacy Research at UC Berkeley BLUES Lab / ICSI (YC page, personal website)
- Projects: PoliPY (privacy policy scraping/analysis library, 18 GitHub stars), PyLogAnalyzer, BearTransit app, Fake vs. Real News neural network (96% accuracy) (GitHub, liamwebster.xyz)
- From small town on Oregon Coast; attended Southwestern Oregon Community College before transferring to UC Berkeley (liamwebster.xyz)
- Twitter/X: No confirmed account found (multiple Liam Webster accounts exist; none linked to Lexius)
- LinkedIn: linkedin.com/in/liamwebsterxyz — Co-Founder Lexius (YC W26), 500+ connections
- GitHub: github.com/liamwebsterxyz — 22 repos, 3 followers; pinned repo blues-lab/polipy (18 stars)

**Third team member:** The YC page lists team size as 3. One search result references Joseph Glickman as CFO alongside David Elskamp (LinkedIn via search snippet), but this role could not be independently confirmed. No additional public information found.

**Co-founder relationship:** David Elskamp studied at the University of Twente (Netherlands) and later at UC Berkeley. Liam Webster studied EECS at UC Berkeley. Both were at UC Berkeley during overlapping time periods (Webster graduated 2023; Elskamp attended Berkeley for Data Science & Economics). [Inferred]: They likely met at UC Berkeley.

**Founder-market fit:** Elskamp brings entrepreneurial experience (founded a media business at 14, named top entrepreneurial student) and business-building skills, while Webster contributes deep technical expertise in EECS, computer vision, and privacy-preserving AI from his Berkeley research background. Webster's work at the BLUES Lab on privacy policy analysis aligns with Lexius's privacy-first approach to behavioral detection (no facial recognition). Elskamp's Dutch origins connect to their first customer (Coop Vandaag in the Netherlands) and European retail networks.

## Key Risks

**Well-funded direct competitors:** Veesion (€53M), Everseen (~$90M), and Spot AI ($93M) are significantly better capitalized and already deployed in thousands of stores. Veesion specifically operates in the same behavioral AI-for-shoplifting segment and has 5,000+ store deployments across 25 countries (EU-Startups, May 2025). Lexius must compete for enterprise retail accounts against incumbents with larger sales teams and established track records.

**ArcadianAI brand/positioning overlap:** ArcadianAI uses the identical tagline "AI Security Guards" and a similar camera-agnostic, behavior-driven approach (arcadian.ai). This creates direct confusion in the market and may complicate SEO, paid acquisition, and brand differentiation.

**Regulatory and privacy risk:** AI video surveillance of retail customers faces evolving regulation. The EU AI Act (effective 2025-2026) classifies certain biometric and surveillance AI as high-risk, requiring compliance obligations. While Lexius emphasizes behavioral (not facial) recognition, expanding regulatory scope could increase compliance costs or restrict operations in key markets. Illinois BIPA and similar U.S. state laws add jurisdiction-specific risk.

**Customer concentration:** Named customers include high-profile brands (7-Eleven, Erewhon, Prada), but public data does not indicate contract size, number of locations deployed, or whether these are paid engagements vs. pilots. Loss of any early anchor customer could materially impact traction narratives.

**Netherlands-to-US pivot:** Lexius was founded in the Netherlands in 2022, with its first customer (Coop Vandaag) in Enschede (LinkedIn). The company subsequently relocated to San Francisco/Berkeley and entered YC W26. Metrics from the Netherlands phase (waitlist of retailers with 4,000+ stores per Novel-T) may not directly translate to U.S. market traction. The pivot introduces go-to-market restart risk.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global retail loss detection market: $25.21B (2024) → $51.37B by 2033, CAGR 8.23% (Business Research Insights via search snippet) |
| SAM | Retail loss prevention technology market: $15B (2025) → $25B by 2033, CAGR 7% (DataMarketView via search snippet) |
| Traction | Named customers: 7-Eleven, Erewhon, Prada (YC page/LinkedIn); case studies: FineFare (63% theft reduction in 30 days), unnamed clothing retailer (55% shrinkage reduction, 4.7x ROI); waitlist of "retailers managing 4,000+ stores" (Novel-T); first customer Coop Vandaag, Netherlands (LinkedIn) |
| Revenue Signal | Three pricing tiers (Standard/Advanced/Enterprise) listed on website; no public dollar pricing or revenue figures found |
| Founders | David Elskamp (CEO): 2x founder, BS/MS University of Twente, UC Berkeley, Most Entrepreneurial Student 2023. Liam Webster (Co-Founder): BS EECS UC Berkeley, AI & Privacy researcher at BLUES Lab/ICSI |
| Competitors | Veesion (€53M raised, revenue unknown, gesture-recognition AI in 5,000+ stores); Auror (NZ$82M raised, revenue unknown, crime intelligence/law enforcement platform); Everseen (~$90M raised, revenue unknown, checkout-focused Vision AI); Spot AI ($93M raised, revenue unknown, broader video analytics); ArcadianAI (funding unknown, same tagline and approach) |
| Moat Signals | Cross-store known offender database (network effect potential); behavioral-only detection (privacy differentiation); software-only remote install (<10 min) lowers deployment friction |
| Risk Factors | Well-funded direct competitors (Veesion €53M, Everseen ~$90M), brand overlap with ArcadianAI, regulatory/privacy risk (EU AI Act, U.S. state biometric laws), Netherlands-to-US market pivot |
| Founder Reach | David Elskamp: Twitter @elskamp (count not retrievable), LinkedIn 500+, GitHub not found. Liam Webster: Twitter not confirmed, LinkedIn 500+, GitHub 22 repos / 3 followers |
| Distribution Signals | No Product Hunt launch found; no app store data found; no Discord/Slack community found |
| Emails | david@lexius.ai |
