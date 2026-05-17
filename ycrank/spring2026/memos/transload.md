# transload

> Measure freight items with CCTV

| Field | Value |
|-------|-------|
| Website | https://www.transload.io |
| YC Page | https://www.ycombinator.com/companies/transload |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B -> Supply Chain and Logistics |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Computer Vision, Logistics, Supply Chain |
| YC Partner | David Lieb (YC page) |
| Emails | No public data found |

## The Idea

**Problem:** LTL (less-than-truckload) carriers, freight forwarders, and 3PL warehouses must measure the dimensions of every shipment to bill correctly and plan trailer loads. Company-stated: "15% of shipments turn out to be bigger than what the sender claimed" and the gap is "worth ~$50k per site per month in rebillings and improved trailer utilization" (YC page, company self-reported, May 2026). Today these dimensions are captured manually by dock workers with tape measures, or by fixed-station dimensioners (laser/3D-camera kiosks) that require freight to be staged at a specific spot — e.g., FreightSnap and vMeasure hardware booths ([FreightSnap](https://freightsnap.com/), [vMeasure](https://vmeasure.ai/freight-dimensioning-system/)).

**Approach:** Computer vision software that runs on the security cameras a warehouse already operates. The system measures pallets, furniture, tires, and other items as they move through the facility (YC page; transload.io tagline: "Computer vision for the loading dock," May 2026). No additional hardware sale required.

**Differentiation:** Incumbents like vMeasure, FreightSnap, and Cargo Spectre sell purpose-built dimensioning hardware costing $2,200–$15,300+ per station that requires staging freight ([vMeasure pricing](https://vmeasure.ai/freight-dimensioning-system/) via search snippet; Cargo Spectre hardware "under $7,000" per [Cargo Spectre](https://www.cargospectre.com/) via search snippet). transload reuses existing CCTV, removing the capex and capture-point bottleneck (YC page).

**Business Model:** No pricing page is published on transload.io as of May 2026 (WebFetch May 2026 returned only the tagline). [Inferred]: SaaS per-site or per-camera subscription, consistent with the $50k/site/month value claim cited by the company and how CV-software competitors monetize.

**TAM/SAM:** Global LTL freight market estimated USD 245.56B–270B in 2025 (Business Research Insights, Mordor Intelligence, Technavio, 2025 via search snippet). LTL market CAGR 3.5%–6.8% through 2029–2034 (same sources via search snippet). No public TAM data found for the freight dimensioning sub-segment specifically. [Inferred]: SAM is North American LTL carrier and 3PL warehouse sites — a fraction of the LTL freight TAM, since transload sells software for measurement rather than transport itself.

**GTM / Distribution:** [Inferred]: Direct sales to LTL carriers, freight forwarders, and 3PL warehouse operators in North America, consistent with the SF base and YC P26 demo-day buyer pool. The product's CCTV-reuse pitch is a natural displacement angle against the existing FreightSnap/vMeasure/Cargo Spectre buyer at sites that already have cameras installed.

## Defensibility

No issued patents or proprietary datasets are disclosed in public sources. [Inferred]: Defensibility potential rests on (a) labeled freight-vision training data captured across customer sites as deployments scale, and (b) integrations into WMS/TMS/billing systems that create switching cost. Neither is established at pre-seed stage.

**Market structure:** [Inferred]: Structural barrier vs. incumbents is business-model cannibalization — FreightSnap, vMeasure, and Cargo Spectre's revenue is tied to hardware unit sales and recurring service/lease on those units (FreightSnap revenue estimates of $1M–$4.6M and ~5–23 employees per PitchBook/ZoomInfo/Crunchbase via search snippet; Cargo Spectre "nearly 1,000 systems already working in the field," company site via search snippet). Adopting CCTV-only software would cannibalize their hardware ASP and channel margin. Not a barrier against a well-funded software-native entrant.

**Commoditization risk:** [Inferred]: Pallet/freight detection and dimensioning from monocular or stereo CCTV is an applied CV problem that any competent team with warehouse access could attempt; the wedge is data access and accuracy thresholds at varying camera placements/lighting, not algorithmic novelty.

## Market & Traction

**Traction signals:**
- Company-stated customer outcome: "15% of shipments turn out to be bigger than what the sender claimed" and "~$50k per site per month in rebillings and improved trailer utilization" (YC page, company self-reported). Note: this is the company's framing of customer outcomes, not transload's own revenue.
- Job postings: 0 open positions (YC page, May 2026).
- YC P26 / Spring 2026 batch acceptance (YC page).
- No public press coverage, Product Hunt launch, Twitter/X account, LinkedIn company-page follower count, Discord/Slack community, app store listing, GitHub organization, or web-traffic estimate found in searches conducted May 2026.
- Website (transload.io) is a single-line tagline page as of May 2026 (WebFetch).

**Competitive landscape:**
- **FreightSnap** (Lenexa, KS): hardware-based pallet/parcel dimensioning kiosks. Funding: 1 institutional investor, Venture 53 (Crunchbase via search snippet). Revenue estimates $1M (RocketReach) to $4.6M with $14.8M estimated valuation (Prospeo/PitchBook via search snippet). ~5–23 employees (ZoomInfo/Tracxn via search snippet). Differentiator vs. transload: dedicated dimensioning station hardware sold to LTL carriers, Fortune 500 manufacturers, freight forwarders, ocean/air carriers (FreightSnap site via search snippet).
- **vMeasure**: SaaS-plus-hardware dimensioning, entry systems from $2,200; freight dimensioner $12,300–$15,300; measures in <2 seconds (vMeasure site via search snippet). Funding not publicly disclosed. Differentiator vs. transload: hardware-anchored capture point requiring staged freight.
- **Cargo Spectre** (Houston, TX, founded 2016 by Jason Joachim): unfunded, "Dimensioner as a Service," ~1,000 deployed systems, hardware <$7,000 (Crunchbase, Cargo Spectre site via search snippet). Differentiator vs. transload: 3D-scanner-based DaaS with pay-as-you-go pricing but still requires dedicated capture station.
- **PackageX**: CV-based parcel scanning for label/dimension extraction (PackageX site via search snippet). Funding not retrieved. Differentiator vs. transload: scanner-based parcel workflows, not in-motion warehouse CCTV.
- Adjacent: **Awake.AI** — maritime CV for ports, not LTL warehouse freight (StartUs Insights via search snippet).

**Why now:** NMFTA transitioned LTL freight classification from commodity-based to density-based on July 19, 2025 (Docket 2025-1; ODFL, C.H. Robinson, NMFTA via search snippet). Under density-based pricing, accurate dimensions per shipment determine billing class — making measurement directly revenue-affecting. [Inferred]: This regulatory shift increases the willingness-to-pay of LTL carriers for accurate, every-shipment dimensioning, which is transload's core capture claim.

## Founders & Team

**Nils Börner** — Co-founder
- Connection to transload confirmed (YC page lists as co-founder); search results characterize him as "bringing AI into logistics operations with transload."
- Education / prior employers: No public profile uniquely matched to this Nils Börner; multiple individuals with the same name appear on LinkedIn in Germany (search results May 2026). No public data found on specific prior companies or exits.
- Twitter/X: No public account found.
- LinkedIn: Specific profile not disambiguated in public search; count not retrievable.
- GitHub: No public repos found.

**Julius Scheel** — Co-founder
- Background: Fellow at McKinsey & Company, Zurich office (LinkedIn headline via search snippet).
- Education / domain expertise: Not directly retrievable (LinkedIn WebFetch returned status 999). Search-derived context places team in Munich's TUM ecosystem.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/juliusscheel (via search snippet); count not retrievable.
- GitHub: No public repos found (GitHub user "julianscheel" appears in results but is a different person, Julian not Julius).

**Jago Wahl-Schwentker** — Co-founder
- Background: Software Engineer at Veli prior to transload (LinkedIn headline via search snippet, profile linkedin.com/in/jago-wahl-schwentker-79b126196).
- Education: Technical University of Munich (TUM) (search snippet).
- Domain entry: team "evolved through XPLORE, the TUM Incubator, robo.innovate and the TUM Venture Labs" (search snippet referencing transload's origin path).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/jagowahl (primary, listing "transload") and a secondary profile linkedin.com/in/jago-wahl-schwentker-79b126196 (Veli); count not retrievable (LinkedIn returned status 999).
- GitHub: No public repos found.

**Co-founder relationship:** Search results indicate the transload team "evolved through XPLORE, the TUM Incubator, robo.innovate and the TUM Venture Labs" (search snippet), suggesting overlap in the TUM/Munich entrepreneurial ecosystem. Julius Scheel's McKinsey Zurich tenure does not overlap with Jago's Veli engineering role per available data. No definitive shared employer surfaced.

**Founder-market fit:** [Inferred]: Technical co-founder (Jago) provides applied software engineering capability; Julius brings consulting-trained commercial/structuring exposure from McKinsey; the TUM/robo.innovate incubator path indicates robotics/CV-adjacent academic environment. No founder has a disclosed prior LTL freight or warehouse-operations role in public sources. No advisors, board members, or investors beyond YC's standard deal are disclosed.

## Key Risks

**Camera-quality / accuracy ceiling:** transload's premise is that existing CCTV — typically deployed for security, varied resolution, lighting, mounting angles — can yield billing-grade dimensions. Incumbents use purpose-built hardware (3D, stereo, laser) at controlled stations (FreightSnap/vMeasure/Cargo Spectre product pages via search snippet). [Inferred]: Achieving the accuracy required for carrier billing (and standing up to chargeback disputes) on legacy CCTV is the core technical feasibility risk; no public benchmarks have been disclosed.

**Buyer concentration with adversarial dynamics:** The $50k/site/month value cited by the company is rebillings to shippers (YC page). Shippers — also customers in the broader logistics tech market — have an incentive to dispute or de-adopt audit tooling. This creates a two-sided incentive issue if transload is sold to carriers that bill shippers, particularly post-NMFTA density-based pricing (NMFTA, July 19, 2025 via search snippet).

**Commoditization by software-native entrants:** CV pallet measurement is not novel; Cargo Spectre, vMeasure, PackageX (cited above) and any well-funded WMS vendor could replicate CCTV-only inference. No patents, datasets, or integrations disclosed publicly to date.

**Founder domain-experience gap:** No co-founder has a disclosed prior LTL carrier, 3PL operations, or NMFC classification role in public sources (LinkedIn, search results May 2026). Field deployments at LTL terminals require operational knowledge that is not evidenced in available profiles.

**Single-channel website / no public presence:** transload.io carries only a one-line tagline; no LinkedIn company-page activity, Twitter/X, GitHub, or press surfaced as of May 2026. [Inferred]: Indicates pre-launch stealth posture rather than active risk, but limits diligence coverage.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global LTL freight market USD 245.56B (Business Research Insights, 2025 via search snippet); USD 270B (Technavio, 2025 via search snippet); CAGR 3.5%–6.8% through 2029–2034 (Business Research Insights/GMI, via search snippet). No TAM for freight-dimensioning sub-segment found. |
| SAM | No public data found |
| Traction | YC P26 / Spring 2026 batch (YC page, May 2026); 0 open job postings (YC page, May 2026); no public press, Product Hunt, social, or app listing found in searches May 2026 |
| Revenue Signal | No public data found (no pricing page on transload.io as of May 2026, WebFetch) |
| Founders | Nils Börner (Co-founder): role and prior background not disambiguated in public sources. Julius Scheel (Co-founder): Fellow, McKinsey & Company, Zurich (LinkedIn via search snippet). Jago Wahl-Schwentker (Co-founder): prior Software Engineer at Veli; TUM-Munich background (LinkedIn via search snippet). |
| Competitors | FreightSnap (1 investor – Venture 53; revenue $1M–$4.6M; ~5–23 employees per PitchBook/ZoomInfo/Crunchbase via search snippet; hardware kiosk differentiator). vMeasure (funding not disclosed; hardware $2,200–$15,300+ per vMeasure site via search snippet; hardware + SaaS differentiator). Cargo Spectre (unfunded, founded 2016, ~1,000 deployed, hardware <$7,000 per Crunchbase / Cargo Spectre site via search snippet; 3D-scanner DaaS differentiator). PackageX (funding unknown; CV parcel scanning differentiator, PackageX site via search snippet). |
| Moat Signals | No public data found |
| Risk Factors | Camera-accuracy/feasibility on legacy CCTV; commoditization by software-native entrants; founder LTL-domain experience gap |
| Founder Reach | Nils Börner: Twitter not found, LinkedIn not disambiguated, GitHub not found. Julius Scheel: Twitter not found, LinkedIn linkedin.com/in/juliusscheel (count not retrievable), GitHub not found. Jago Wahl-Schwentker: Twitter not found, LinkedIn linkedin.com/in/jagowahl (count not retrievable), GitHub not found. |
| Distribution Signals | No public data found |
| Emails | No public data found |
