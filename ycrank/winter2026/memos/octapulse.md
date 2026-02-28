# OctaPulse

> Robotics and computer vision to automate fish farming from hatchery?

| Field | Value |
|-------|-------|
| Website | https://www.tryoctapulse.com/ |
| YC Page | https://www.ycombinator.com/companies/octapulse |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Climate |
| Team Size | 2 |
| Location | Pittsburgh, PA (PitchBook, 2025 via search snippet) |
| Tags | Robotics, Computer Vision, Food Tech, Maritime |

## The Idea

**Problem:** Aquaculture has surpassed wild-catch fishing as the primary source of seafood globally (MVPro Media, 2026), yet two critical quality-assurance steps in finfish hatcheries — broodstock phenotyping and juvenile deformity inspection — are still performed manually. These processes take approximately 5 minutes per fish, are error-prone, and are disliked by technicians (YC company description). Farms spend over $200K per year on trained technicians and geneticists to operate these manual inspection workflows (YC company description). Advancing defective or suboptimal fish wastes downstream feed and labor costs.

**Approach:** OctaPulse deploys an AI computer-vision platform that integrates into existing hatchery workflows using off-the-shelf cameras. The system performs automated phenotyping (measuring observable physical traits of broodstock) and deformity inspection of juvenile fish. The company reports reducing per-fish inspection time from ~5 minutes to under 30 seconds while achieving 90–95%+ accuracy (YC page). Each deployment generates labeled images that feed a proprietary multi-species dataset, improving cross-species model generalization over time (YC company description).

**Differentiation:** Compared to existing competitors, OctaPulse differentiates on several axes:
- **Hatchery-first focus:** Tidal (ex-Google X) and Aquabyte primarily target grow-out pens for salmon, focusing on sea lice detection, biomass estimation, and feeding optimization. OctaPulse starts upstream at the hatchery stage where phenotyping and deformity QA occur.
- **Off-the-shelf hardware:** OctaPulse uses commercially available cameras rather than proprietary underwater camera systems, which lowers deployment cost and simplifies integration into existing workflows.
- **Multi-species ambition:** Aquaticode (Norway, $6M raised) is the closest competitor in AI phenotyping but has focused primarily on salmon, bass, and bream in European markets. OctaPulse's initial deployment is with a U.S. trout producer, with stated plans to generalize across finfish species.

**Business Model:** No public pricing page was found (website returned minimal content at time of research). The company has signed a "6-figure paid pilot" with Riverence (YC company description), suggesting an enterprise contract model. [Inferred]: Most likely monetization path is annual SaaS-style contracts or per-deployment licensing with fish farms, potentially with per-species or per-site pricing, given the enterprise pilot structure and vertical software norms in agtech.

**TAM/SAM:** The global aquaculture market is valued at approximately $327B in 2025 (Persistence Market Research, 2025 via search snippet), projected to reach $463.5B by 2032 at 5.1% CAGR. The company itself references a "$300B aquaculture industry" (YC company description). The more specific AI-in-aquaculture market segment is valued at $639.6M in 2024, projected to reach $2.08B by 2035 at 11.32% CAGR (Spherical Insights, 2024 via search snippet). [Inferred]: The addressable segment for hatchery QA automation specifically (phenotyping + deformity inspection) would be a fraction of the broader AI-in-aquaculture market; the company's stated figure of >$200K/year per farm on manual inspection provides a bottom-up anchor, but no public SAM estimate was found.

**GTM / Distribution:** OctaPulse's initial GTM is through direct enterprise sales to vertically integrated finfish farms, starting with a paid pilot at Riverence, described as the largest trout producer in the United States (YC company description; Riverence's status as largest US trout producer is corroborated by ASC certification records). Two additional farm deployments are planned for early 2026 (YC company description). [Inferred]: The land-and-expand model — starting with hatchery QA and expanding into feeding, health monitoring, and processing — is consistent with the company's stated platform vision.

## Defensibility

**Data moat (developing):** Each deployment generates proprietary labeled images across fish species, building a multi-species dataset that improves model generalization. The company states this dataset is designed to become "the brain for future autonomous aquafarms" (YC company description). This data advantage compounds with each new customer and species but is nascent at the current stage with one confirmed production deployment.

**Workflow integration:** By dropping into existing hatchery workflows with off-the-shelf cameras, OctaPulse aims to create switching costs through integration with farm operations and accumulated per-facility model tuning. This switching cost would grow as the platform expands beyond phenotyping into feeding, health monitoring, and processing.

**Market structure:** The aquaculture industry is fragmented across geographies and species, with most technology incumbents (Innovasea, AKVA Group) focused on hardware infrastructure (cages, feeding systems, sensors) rather than AI-driven hatchery QA. Tidal, the most well-resourced AI entrant (spun out of Google X in July 2024, per SeafoodSource), focuses on grow-out pen monitoring for salmon rather than hatchery phenotyping. [Inferred]: Incumbents in aquaculture hardware may lack the software/ML teams needed to build competitive vision models, and their business models center on equipment sales rather than software subscriptions, creating a business model conflict that slows competitive response.

**Commoditization risk:** Computer vision for biological inspection is a known technical approach, and the barrier to training a competing model is primarily access to labeled aquaculture-specific data rather than algorithmic novelty. Aquaticode ($6M raised, Norway) already has a 3M+ image database for AI phenotyping (The Fish Site, 2025 via search snippet) and can scan 10,000 fish per hour. Tidal has collected 30 billion data points across 50 million fish (IEEE Spectrum / SeafoodSource via search snippet). A well-funded competitor with farm access could build a comparable dataset over 12–24 months. OctaPulse's defensibility depends on speed of deployment and the cross-species generalization advantage from diverse farm partnerships.

## Market & Traction

**Traction signals:**
- 6-figure annual paid pilot with Riverence, the largest trout producer in the United States (YC company description; YC page, Feb 2026)
- 2 additional farm deployments planned for early 2026 (YC company description)
- Model accuracy reported at 90–95%+ (YC page, Feb 2026)
- Inspection time reduced from ~5 minutes to under 30 seconds per fish (YC page, Feb 2026)
- $70,000 SICA grant from Acme Smoked Fish Foundation (Perishable News / Undercurrent News, Jan 2026)
- $10,000 Ocean Exchange Collegiate Award (Ocean Exchange, Nov 2025)
- $20,000 prize at CMU McGinnis Venture Competition, Graduate Track (CMU Tepper News, Mar 2025)
- YC Launch: February 4, 2026 (YC page)
- Featured in MVPro Media "Vision Start Ups to Watch in 2026" (MVPro Media, 2026)
- Company Twitter/X: @tryoctapulse — follower count not retrievable
- Company LinkedIn: linkedin.com/company/106495616 — follower count not retrievable
- Company GitHub: octapulse-dev — no public repositories found in search
- No Product Hunt launch found
- No app store presence for the aquaculture product (note: an unrelated Android finance app by Ambar Soluciones SAU shares the "OctaPulse" name on Google Play)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. OctaPulse |
|-----------|---------|----------------------------------|
| **Tidal (ex-Google X)** | Spun out of Alphabet X (Jul 2024); funding not separately disclosed (SeafoodSource, 2024) | Focuses on grow-out pen monitoring (sea lice, biomass, feeding) for salmon; 700+ pen installations, 50M+ fish monitored; does not target hatchery phenotyping/QA |
| **Aquabyte** | $46M total ($25M Series B); acquired by Vitruvian Partners Dec 2025 (The Fish Site / EIN Presswire via search snippet) | Salmon-focused pen cameras for lice counting, weight estimation, welfare; acquired — future direction uncertain; pen-stage focus, not hatchery QA |
| **Aquaticode** | $6M first external round (The Fish Site, 2025 via search snippet) | Norway-based; AI phenotyping and sorting; 3M+ image database; 10K fish/hour scanning with ultrasound; expanding into bass & bream; most direct competitor on phenotyping |
| **Innovasea** | $15.2M total (Startup Seeker via search snippet) | Broad aquaculture platform: fish tracking, environmental sensors, farm management software; hardware-centric, not AI phenotyping-focused |

**Why now:**
- Aquaculture surpassed wild-catch fishing in global seafood production by mid-2024 (MVPro Media, 2026), creating scale pressure on manual hatchery QA processes.
- [Inferred]: Recent advances in edge-deployable computer vision models (driven by progress in efficient architectures and GPU availability) have made it feasible to run real-time fish inspection on off-the-shelf hardware at production speed, which was not practical 3–5 years ago.
- [Inferred]: The growing regulatory and consumer push for sustainability and traceability in seafood supply chains increases demand for standardized, data-driven QA processes at the farm level.

## Founders & Team

**Paul Grech** — Co-founder & CEO
- MBA, Carnegie Mellon University Tepper School of Business (Class of 2025) (Poets&Quants, Oct 2023)
- BA, Business Administration (Finance) and Spanish, Marist College (Poets&Quants, Oct 2023)
- CMU Robotics Institute Pathways Fellowship (RocketReach via search snippet)
- Previously: User Experience Project Manager at Bloomberg LP (Poets&Quants, Oct 2023)
- 99 Tartans angel syndicate, Summer MBA Partner (Poets&Quants, Oct 2023)
- Hometown: Beacon, NY (Poets&Quants, Oct 2023)
- Twitter/X: @paul_grech — follower count not retrievable
- LinkedIn: linkedin.com/in/paul-l-grech-b4359591/
- GitHub: No public repos found

**Rohan Singh** — Co-founder (Engineering)
- Currently at Carnegie Mellon University, focusing on AI, robotics, and control systems (rohxnsxngh.com)
- B.S. Mechanical Engineering, Texas A&M University; minors in Applied Mathematics and Statistics (rohxnsxngh.com)
- Division 1 tennis walk-on at Texas A&M (rohxnsxngh.com)
- Previously: roles at ASML, Toyota, Tesla, and NVIDIA (rohxnsxngh.com)
- Founded Quaternion Studios (rohxnsxngh.com)
- Twitter/X: handle not confirmed for this individual
- LinkedIn: linkedin.com/in/rohxnsxngh/
- GitHub: No public repos confirmed

**Third team member noted:** Andres Castrillon was listed as part of the OctaPulse team at the 2025 McGinnis Venture Competition (CMU Tepper News, Mar 2025) but is not listed as a founder on the YC page, which shows a team size of 2.

**Co-founder relationship:** Both Paul Grech and Rohan Singh are at Carnegie Mellon University — Grech in the Tepper MBA program and Singh studying AI/robotics. Their shared CMU affiliation is the evident connection point. They co-competed at the 2025 McGinnis Venture Competition together (CMU Tepper News, Mar 2025).

**Founder-market fit:** Grech brings commercial experience (Bloomberg, angel investing via 99 Tartans) and participated in CMU's Robotics Institute Pathways Fellowship, coupled with a stated personal passion for ocean conservation (Poets&Quants, Oct 2023). Singh brings hands-on engineering experience from ASML, Toyota, Tesla, and NVIDIA — spanning hardware, robotics, and AI systems — along with formal training in mechanical engineering and AI/robotics at CMU. Neither founder has documented prior aquaculture industry experience; their domain entry appears driven by Grech's ocean conservation interest combined with the pair's robotics/AI technical capabilities at CMU.

## Key Risks

**Aquaticode as a direct, better-funded competitor:** Aquaticode, based in Norway with $6M in funding, operates in the same AI phenotyping niche with a 3M+ image database and the ability to scan 10,000 fish per hour (The Fish Site, 2025 via search snippet). Aquaticode recently expanded into bass and bream hatcheries with Cooke España and appointed industry veteran Trond Williksen as strategic advisor (Aquaculture Magazine, Oct 2025). OctaPulse's differentiation rests on its U.S. market entry and multi-species generalization approach, but Aquaticode has a significant data and deployment lead in European markets.

**Customer concentration and species risk:** OctaPulse's sole confirmed paid customer is Riverence (trout). The U.S. trout farming market is substantially smaller than the global salmon market where most competitors operate. Expanding beyond trout to other species requires retraining models and demonstrating accuracy parity, which is unproven at scale. Two planned deployments in early 2026 are not yet confirmed as signed contracts.

**No prior aquaculture domain expertise on founding team:** Neither founder has documented work experience in aquaculture, fisheries, or adjacent agriculture. Domain credibility with farm operators — who rely on decades of husbandry knowledge — may require hiring experienced aquaculture professionals or advisors. No advisors or board members with aquaculture backgrounds were found in public sources.

**Brand name collision:** An unrelated Android finance app ("OctaPulse" by Ambar Soluciones SAU) shares the same name on Google Play (AppBrain listing), which could create confusion in search results and brand recognition, particularly as the company scales.

**Tidal's platform expansion potential:** Tidal, spun out of Alphabet X with Google Cloud infrastructure, 700+ pen installations, and 30 billion data points (IEEE Spectrum / SeafoodSource via search snippet), could expand upstream into hatchery QA. Tidal's existing farm relationships and data scale represent a potential platform encroachment risk if they choose to address the hatchery segment.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $327B global aquaculture market (Persistence Market Research, 2025 via search snippet, 5.1% CAGR to $463.5B by 2032); $639.6M AI-in-aquaculture segment (Spherical Insights, 2024 via search snippet, 11.32% CAGR to $2.08B by 2035) |
| SAM | No public data found |
| Traction | 6-figure paid pilot with Riverence (YC page, Feb 2026); 2 additional farm deployments planned early 2026 (YC page); 90–95%+ model accuracy (YC page); featured in MVPro Media "Vision Start Ups to Watch in 2026" |
| Revenue Signal | 6-figure annual contract with Riverence (YC page, Feb 2026); $70K SICA grant (Perishable News, Jan 2026); $10K Ocean Exchange Award (Ocean Exchange, Nov 2025); $20K McGinnis Venture Competition prize (CMU Tepper News, Mar 2025) |
| Founders | Paul Grech (CEO): CMU Tepper MBA, ex-Bloomberg UX PM, CMU Robotics Pathways Fellow. Rohan Singh (Engineering): CMU AI/Robotics, BS MechE Texas A&M, ex-ASML/Toyota/Tesla/NVIDIA |
| Competitors | Tidal (ex-Google X, funding undisclosed, 700+ pen installations, grow-out focus vs. OctaPulse hatchery focus); Aquabyte ($46M raised, acquired Dec 2025, salmon pen cameras vs. hatchery QA); Aquaticode ($6M raised, 3M+ image DB, most direct phenotyping competitor, European market); Innovasea ($15.2M raised, hardware/sensor focus vs. AI vision) |
| Moat Signals | Proprietary multi-species labeled image dataset growing with each deployment; workflow integration into existing hatchery operations |
| Risk Factors | Aquaticode as better-funded direct competitor with data lead, customer/species concentration on U.S. trout, no prior aquaculture domain expertise on founding team |
| Founder Reach | Paul Grech: Twitter @paul_grech (count not retrievable), LinkedIn linkedin.com/in/paul-l-grech-b4359591/. Rohan Singh: LinkedIn linkedin.com/in/rohxnsxngh/, Twitter not confirmed. Company: @tryoctapulse (count not retrievable) |
| Distribution Signals | No Product Hunt launch found; no app store presence for aquaculture product; MVPro Media feature (2026); YC W26 Launch Day Feb 4, 2026 |
