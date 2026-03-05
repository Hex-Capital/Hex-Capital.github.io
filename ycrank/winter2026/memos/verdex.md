# Verdex

> Satellite Imagery Verification for Insurance

| Field | Value |
|-------|-------|
| Website | https://www.verdexai.com/ |
| YC Page | https://www.ycombinator.com/companies/verdex |
| Batch | Winter 2026 |
| Industry | Fintech / Fintech -> Insurance |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Insurance, Agriculture |
| YC Partner | Jon Xu |
| Emails | founders@verdexai.com |

## The Idea

**Problem:** Manual crop loss verification is expensive and slow. According to Verdex's LinkedIn page, manual inspections cost insurers over $5 billion annually and consume nearly 10% of every premium dollar globally (Verdex LinkedIn, 2025). Today, crop insurers rely on field adjusters who physically visit farms to verify claims — a process that is labor-intensive, time-consuming, and difficult to scale across hundreds of millions of acres. In the U.S. alone, the Federal Crop Insurance Program covers the majority of cultivated acreage, making the scale of required inspections enormous.

**Approach:** Verdex replaces manual field inspections with real-time digital audits using high-resolution satellite imagery and weather models. The platform monitors fields continuously, allowing insurers to verify and settle claims remotely — "without ever leaving their desks" (YC company page). The system fuses satellite imagery with alternative data streams and automated risk signals to accelerate insurance data collection for underwriters and adjusters (Extruct AI YC W26 listing via search snippet).

**Differentiation:** Unlike general satellite analytics platforms (Planet Labs, EOSDA, SatSure) that sell raw imagery or broad agricultural analytics, Verdex is purpose-built for the insurance claims verification workflow — specifically designed for underwriters and adjusters. Compared to parametric insurance providers like Pula, which trigger automatic payouts based on indices (e.g., rainfall thresholds), Verdex focuses on indemnity insurance verification where claim-by-claim assessment is required. Verdex also describes coverage across crop, property, and energy verticals (Extruct AI YC W26 listing via search snippet), suggesting planned expansion beyond crop insurance.

**Business Model:** No public pricing page was found. [Inferred]: The most likely monetization path is a SaaS or per-audit fee model sold to crop insurance carriers, given the B2B enterprise nature of the product and the claim that Verdex is already live with a major U.S. crop insurer.

**TAM/SAM:** The global crop insurance market was valued at USD 52.28 billion in 2025 and is projected to reach USD 98.26 billion by 2031, growing at a CAGR of 11.07% (Mordor Intelligence, 2026 via search snippet). The crop reinsurance market separately is estimated at $61.85 billion (GlobeNewsWire/Research and Markets, 2026 via search snippet). Verdex's SAM is the portion of premium dollars spent on loss verification — stated by the company as ~10% of every premium dollar globally (Verdex LinkedIn), implying a global SAM of approximately $5 billion for verification services. North America is the company's initial market, where the U.S. federal crop insurance program is the dominant player.

**GTM / Distribution:** Verdex states it is "currently helping to insure over 11% of all American farmland" and is "live with one of the largest US crop insurers" (YC company page; Verdex LinkedIn). [Inferred]: The GTM strategy appears to be direct enterprise sales to large U.S. crop insurance carriers, leveraging this initial anchor customer to expand.

## Defensibility

**Data advantage:** By processing satellite imagery across 11%+ of U.S. farmland for a major insurer, Verdex is accumulating a proprietary dataset of crop conditions, loss patterns, and verification outcomes. Over time, this dataset could improve model accuracy and create a competitive advantage against new entrants who lack historical ground-truth data.

**Switching costs:** [Inferred]: Once embedded in an insurer's claims workflow, switching costs could develop through integration into existing adjuster systems and reliance on Verdex's historical audit trail for regulatory compliance purposes.

**Market structure:** The U.S. crop insurance market is heavily regulated and concentrated among a small number of Approved Insurance Providers (AIPs) under the USDA's Federal Crop Insurance Corporation (FCIC). New technology vendors must navigate regulatory requirements and earn trust from a conservative buyer base. [Inferred]: Large satellite imagery providers like Planet Labs face business model misalignment — they sell raw data broadly across many verticals and lack the insurance-specific claims verification workflow. Building a vertical insurance product would require significant domain expertise and would represent a small fraction of their revenue focus.

**Commoditization risk:** The underlying satellite imagery is commercially available from multiple providers (Planet Labs, Maxar, Airbus, etc.). The differentiation lies in the AI models interpreting imagery for insurance-specific decisions and the workflow integration with insurer systems. Other startups (SatSure, EOSDA, Farmonaut) have crop monitoring capabilities that could be extended toward insurance verification. A well-funded insurtech or an existing crop insurance carrier investing in in-house technology could replicate the approach.

## Market & Traction

**Traction signals:**
- Currently insuring over 11% of all American farmland — described as 100+ million acres (YC company page)
- Live with one of the largest U.S. crop insurers (Verdex LinkedIn)
- Jad Bousselham received a $2,000 Magnuson Center founder grant from Dartmouth for Verdex (Magnuson Center, Dartmouth, Spring 2025)
- LinkedIn company page: linkedin.com/company/verdexai — follower count not publicly displayed (LinkedIn)
- No Product Hunt launch found
- No press coverage in named publications found
- No app store presence found
- Company Twitter/X account: No public account found

**Competitive landscape:**

1. **Planet Labs** ($2.8B+ market cap, publicly traded as PL; Q3 FY2026 revenue $81.3M — BusinessWire, Dec 2025): Provides satellite imagery across many verticals including insurance and agriculture. Signed a contract with AXA for property insurance claims processing. However, Planet's commercial agriculture revenues declined 7% recently. Planet sells raw imagery and analytics broadly; it does not offer a purpose-built insurance claims verification workflow. Verdex's differentiation is the vertical insurance application layer.

2. **SatSure** ($27.7M total funding — Via Satellite, 2023 via search snippet; Tracxn): India-based satellite analytics company focused on agricultural insurance and lending. Uses satellite imagery and AI for crop insurance decisions. Primarily serves the Indian market and developing economies. Verdex differentiates by focusing on the U.S. market and the specific claims verification workflow for indemnity insurance.

3. **Pula** ($20M Series B, $27M+ total — TechCrunch, Apr 2024): Kenyan insurtech providing parametric crop insurance to smallholder farmers in Africa, Asia, and Latin America. Has insured 15.4 million farmers. Focuses on emerging markets and parametric/index-based insurance (automatic payouts based on weather thresholds), whereas Verdex focuses on indemnity insurance verification in the U.S. market.

4. **EOSDA (EOS Data Analytics)** (funding not publicly disclosed; launched EOS SAT-1 satellite in 2023): Provides satellite-based crop monitoring for insurance companies, banks, and agricultural businesses. Offers EOSDA Crop Monitoring as a SaaS platform. Serves insurance customers including Mexico's FANCAMPO fund. Broader platform covering multiple agricultural use cases versus Verdex's insurance-verification focus.

5. **Farmonaut** (funding undisclosed; ~15-person team, 25+ active clients — YourStory, 2025 via search snippet): India-based startup offering satellite-based crop monitoring for insurance and lending. Serves clients in India, Nigeria, Kenya, Egypt, Italy, and the U.S. Smaller scale and focused on emerging markets.

**Why now:**
- Satellite imagery resolution and revisit frequency have improved substantially: 405 active EO satellites were launched between 2022 and mid-2025 alone (SpaceInsider, Oct 2025 via search snippet), driving down imagery costs and improving coverage.
- AI/ML capabilities for interpreting satellite imagery at scale have crossed a performance threshold, making automated crop assessment commercially viable.
- [Inferred]: Climate volatility is increasing crop insurance claims volume and complexity, straining manual inspection capacity and creating urgency for insurers to adopt technology solutions. The crop insurance market's 11% CAGR growth further amplifies this pressure.

## Founders & Team

**Jad Bousselham** — Co-founder
- Dartmouth College, Guarini School of Graduate and Advanced Studies '25 (Magnuson Center, Dartmouth)
- Received a $2,000 Magnuson Center founder grant for Verdex (Magnuson Center, Dartmouth, Spring 2025)
- Previously listed as "Founder - Stealth Startup" on LinkedIn prior to Verdex's public launch (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/jad-bousselham — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Evan Rankin** — Co-founder
- Dartmouth College '25, Thayer School of Engineering (LinkedIn; Dartmouth Engineering)
- Won the Dartmouth Society of Engineers Prize (2025) for outstanding performance in an engineering project as part of a five-person team (Dartmouth Engineering prizes page)
- Active in Dartmouth Mountaineering Club, Dartmouth Outing Club, Phi Delta Alpha Fraternity, Club Ski Team, and Marketing Student Program (LinkedIn via search snippet)
- LinkedIn mentions his ENGS capstone used "modern ML and data processing to objectively diagnose ASD" (LinkedIn via search snippet)
- Twitter/X: No confirmed account for this Evan Rankin (the @Ev_Ranks account belongs to a hockey player with the same name)
- LinkedIn: linkedin.com/in/evan-rankin- — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Both founders attended Dartmouth College and graduated in 2025 — Jad Bousselham from the Guarini School of Graduate and Advanced Studies and Evan Rankin from the undergraduate/engineering program. Their overlapping time at Dartmouth is the likely basis for their co-founder relationship.

**Founder-market fit:** Evan Rankin's engineering background with demonstrated ML capabilities (capstone using ML/data processing, Dartmouth Society of Engineers Prize) is relevant to building satellite imagery analysis models. Jad Bousselham's graduate studies and prior stealth startup experience suggest entrepreneurial orientation. However, neither founder has publicly documented prior experience in the insurance or agriculture industries specifically. No advisors, board members, or notable investors beyond the YC standard deal and the Dartmouth Magnuson grant have been identified.

## Key Risks

**Customer concentration:** Verdex appears to derive its entire traction from a single unnamed "one of the largest US crop insurers." Loss of this relationship, or the insurer choosing to build in-house capabilities, would eliminate the stated 11% farmland coverage claim. No evidence of a multi-customer pipeline has been found.

**Regulatory and compliance dependency:** U.S. crop insurance operates under USDA/FCIC regulation. If regulators require physical inspections for claim verification (as has historically been the norm), satellite-based verification could face adoption barriers regardless of technical capability. Changes in federal crop insurance policy could expand or restrict the addressable market.

**Incumbent replication risk:** Large crop insurance carriers (e.g., Zurich-owned RCIS, which is already piloting remote claims validation via satellite data and AI — Precision Risk Management via search snippet) may build or acquire similar capabilities. The underlying satellite imagery is commercially available, and the insurance domain expertise resides with incumbents.

**Brand disambiguation:** Multiple unrelated companies use the "Verdex" name: Verdex Technologies (nanofibers, Virginia), Verdex Construction (Florida), and VerdeX Finance (DeFi/Algorand). This creates potential confusion in online searches, marketing, and brand building.

**Narrow domain expertise of founding team:** Neither founder has publicly documented experience in insurance or agriculture industries. Selling to large, conservative insurance carriers typically requires deep domain credibility and relationships.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global crop insurance market: $52.28B in 2025, projected $98.26B by 2031 at 11.07% CAGR (Mordor Intelligence, 2026 via search snippet) |
| SAM | ~$5B globally for crop loss verification spend, per Verdex's claim that verification consumes ~10% of every premium dollar (Verdex LinkedIn) |
| Traction | Live with one of the largest US crop insurers; insuring 11%+ of US farmland / 100M+ acres (YC page, Verdex LinkedIn) |
| Revenue Signal | No public data found |
| Founders | Jad Bousselham (Co-founder): Dartmouth Guarini '25, prior stealth startup founder. Evan Rankin (Co-founder): Dartmouth Engineering '25, Dartmouth Society of Engineers Prize, ML capstone. |
| Competitors | Planet Labs (public, $81.3M Q3 rev, broad satellite imagery provider), SatSure ($27.7M raised, India-focused ag insurance analytics), Pula ($27M+ raised, parametric crop insurance in emerging markets), EOSDA (funding undisclosed, satellite crop monitoring SaaS), Farmonaut (funding undisclosed, India-based crop monitoring) |
| Moat Signals | Proprietary dataset from monitoring 11%+ of US farmland; insurance-specific workflow integration; regulatory trust-building with conservative buyer base |
| Risk Factors | Single-customer concentration, regulatory/compliance dependency on USDA/FCIC, incumbent replication (RCIS already piloting similar tech) |
| Founder Reach | Jad Bousselham: LinkedIn 500+, Twitter not found, GitHub not found. Evan Rankin: LinkedIn 500+, Twitter not confirmed, GitHub not found. |
| Distribution Signals | No Product Hunt launch found. No app store presence. No press coverage in named publications found. |
| Emails | founders@verdexai.com |
