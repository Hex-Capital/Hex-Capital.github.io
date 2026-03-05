# 10x Science

> The AI-native platform for next-generation protein characterization.

| Field | Value |
|-------|-------|
| Website | https://10xscience.com |
| YC Page | https://www.ycombinator.com/companies/10x-science |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Biotech, Enterprise Software, AI |
| YC Partner | Jon Xu |
| Emails | dsroberts@stanford.edu (founder academic email, Bertozzi Group page); no official company email found |

## The Idea

**Problem:** AI-powered drug discovery is flooding the biopharma pipeline with new drug candidates, but the downstream development stage—specifically protein characterization and quality assessment—remains slow and manual, creating a bottleneck. Per FDA data cited by the company, 74% of drug rejections cite "chemistry, manufacturing, and quality control deficiencies" (YC LinkedIn post, Feb 2026). Current workflows rely on legacy mass spectrometry analysis tools (e.g., Protein Metrics Byos, SCIEX Biologics Explorer, Thermo Fisher BioPharma Finder) that require weeks of manual data curation per analysis cycle and domain expert involvement at every step. The customer segment is biopharmaceutical companies developing antibodies, cell therapies, and engineered proteins requiring molecular-level characterization.

**Approach:** 10x Science applies AI/ML to peptide mapping and mass spectrometry-based protein analysis, automating workflows that currently take weeks and compressing them to minutes. The platform provides end-to-end automated protein characterization with reproducible, enterprise-ready results, eliminating the need for extensive manual data curation (YC LinkedIn post, Feb 2026). Specialties include de novo sequencing, proteoform characterization, and glycoprotein analysis (LinkedIn company page).

**Differentiation:** Existing solutions—Protein Metrics Byos (acquired by Dotmatics/Insightful Science in 2021), SCIEX Biologics Explorer (built on Genedata Expressionist), and Thermo Fisher BioPharma Finder—are vendor-specific or require significant manual intervention. 10x Science claims to be "AI-native" rather than AI-augmented, designed from the ground up with modern ML rather than retrofitting AI onto legacy analytical software. The company claims 10x faster processing compared to current tools (10xscience.com). The founding team's specific expertise in top-down mass spectrometry and chemical biology from Carolyn Bertozzi's lab at Stanford provides deep domain knowledge in the exact analytical methods the software automates.

**Business Model:** No public pricing page found. [Inferred]: Most likely monetization is enterprise SaaS, potentially with per-analysis or seat-based pricing, given the B2B/enterprise software tags and the biopharma customer base. The "$150,000+ time savings per team/month" claim (YC LinkedIn post, Feb 2026) suggests the product could command substantial per-seat or per-team pricing.

**TAM/SAM:** The global protein characterization and identification market was valued at USD 5.05 billion in 2025 and is projected to reach USD 7.63 billion by 2033 at a 5.29% CAGR (Precedence Research, via search snippet). An alternative estimate values the market at USD 2,644.79 million in 2024, growing to USD 4,859.67 million by 2031 at a 9.1% CAGR (Reanin Research, via search snippet). The AI in drug discovery market was valued at $1.1 billion in 2022, growing at 29.6% CAGR through 2030 (MarketsandMarkets, via search snippet). [Inferred]: The serviceable addressable market is the software-only portion of biopharma protein characterization, specifically peptide mapping and quality analysis tools for biotherapeutics development teams. This is a narrower slice of the overall protein characterization market, which includes instruments and reagents.

**GTM / Distribution:** The company sponsored a session at US HUPO 2026, a proteomics conference (LinkedIn company page). The LinkedIn post mentions they are "currently onboarding customers" (LinkedIn search snippet). [Inferred]: Most likely distribution path is direct enterprise sales to biopharma companies, leveraging the founders' Stanford/Bertozzi lab network and conference presence to build initial pipeline with analytical chemistry and proteomics teams.

## Defensibility

The founding team's combined 18+ years of domain expertise and 47+ scientific publications in proteomics and mass spectrometry create deep technical knowledge. David Roberts' specific expertise in top-down mass spectrometry and glycoproteomics from both UW-Madison (under Ying Ge) and Stanford (under Carolyn Bertozzi, 2022 Nobel laureate in Chemistry) represents rare domain specialization. The intersection of this proteomics expertise with AI/ML (via Vishnu Tejus' computer vision and ML background) is a technically complex combination to replicate. Over time, proprietary training data from customer protein characterization runs could build a data moat as models improve with more diverse protein datasets.

**Market structure:** Incumbent analytical instrument vendors (Thermo Fisher, SCIEX/Danaher, Waters) bundle software with hardware sales and derive primary revenue from instrument and consumable sales. Building an AI-native standalone software platform that may reduce reliance on vendor-specific hardware creates a channel conflict—instrument vendors would cannibalize their own hardware lock-in by offering truly vendor-neutral, AI-automated software. Genedata was acquired by Danaher in August 2024 (search snippet), further consolidating analytical software within instrument vendor ecosystems and potentially reducing innovation incentive.

**Commoditization risk:** General-purpose AI/ML capabilities are increasingly accessible, so the AI component alone is not defensible. However, the training data pipeline—requiring deep understanding of mass spectrometry data formats, protein chemistry edge cases, and regulatory requirements for biotherapeutic characterization—creates meaningful barriers. Large language model companies or horizontal AI platforms lack the domain-specific training data and regulatory context to enter this niche quickly.

## Market & Traction

1. **Traction signals:**
   - Company is "currently onboarding customers" (LinkedIn search snippet, 2026)
   - Claimed "$150,000+ time savings per team/month" (YC LinkedIn post, Feb 2026)—this is a customer value proposition claim, not confirmed revenue
   - Sponsored US HUPO 2026 proteomics conference session (LinkedIn company page)
   - LinkedIn company page: 467 followers (LinkedIn, fetched Mar 2026)
   - Twitter/X: @10x_Science (handle confirmed via YC page; follower count not retrievable)
   - Founded: 2025 (LinkedIn company page)
   - Officially launched: February 2026 (LinkedIn company page)
   - No Product Hunt listing found
   - No press coverage in named publications found
   - No app store presence (enterprise web-based product)
   - No Discord/Slack community found

2. **Competitive landscape:**

   - **Protein Metrics / Byos** (acquired by Insightful Science/Dotmatics, Dec 2021; now part of Dotmatics under Insightful Science): Market-leading biotherapeutic mass spectrometry software with 200+ biopharma customers and 300+ academic institutions (proteinmetrics.com). Offers Byos desktop and Byosphere cloud platform. Key differentiator vs. 10x Science: established customer base and integration ecosystem, but acquired into a large conglomerate and not AI-native.
   - **SCIEX Biologics Explorer** (owned by Danaher; built on Genedata Expressionist): Comprehensive protein characterization software launched in 2021, bundled with SCIEX instruments. Key differentiator vs. 10x Science: hardware-software integration with SCIEX mass spectrometers, but vendor-locked and not AI-native.
   - **Genedata Expressionist** (acquired by Danaher, Aug 2024; estimated $50-100M revenue, Owler via search snippet): Enterprise platform for biopharma mass spectrometry data analysis. Key differentiator vs. 10x Science: mature enterprise deployment and broad analytical scope, but legacy architecture without AI-native automation.
   - **RedShiftBio** ($101M raised, Owler via search snippet): Bio-analytical instrumentation for protein characterization. Key differentiator vs. 10x Science: hardware-focused (Microfluidic Modulation Spectroscopy), not a software-only platform.
   - **Thermo Fisher BioPharma Finder** (part of Thermo Fisher Scientific, public company, ~$45B revenue): Integrated with Thermo Fisher mass spectrometry instruments. Key differentiator vs. 10x Science: part of the dominant analytical instrument ecosystem, but vendor-locked software.

3. **Why now:** [Inferred]: Two converging catalysts: (a) AI-powered drug discovery platforms (Recursion, Insilico Medicine, Absci, etc.) have dramatically increased the volume of drug candidates entering the development pipeline, creating a characterization bottleneck that did not exist at current scale before ~2023-2024; (b) advances in transformer-based architectures and foundation models for scientific data have made it technically feasible to automate complex mass spectrometry interpretation that previously required expert manual curation. The consolidation of legacy software vendors into large instrument conglomerates (Genedata→Danaher in 2024, Protein Metrics→Dotmatics in 2021) may also be reducing innovation pace in this segment.

## Founders & Team

**David S. Roberts** — Co-founder & CEO
- B.S. Chemistry and Mathematics, UC San Diego (2016); Ph.D. Materials Chemistry and Analytical Chemistry, University of Wisconsin-Madison (2023, under Profs. Song Jin and Ying Ge) (Bertozzi Group page)
- Postdoctoral researcher and Damon Runyon Cancer Research Fellow, Bertozzi Group, Stanford University (under 2022 Nobel laureate Carolyn Bertozzi) (Bertozzi Group page, Damon Runyon Foundation)
- 37+ peer-reviewed publications (YC LinkedIn post)
- Research focus: top-down mass spectrometry, glycoproteomics, chemical biology (Stanford Profiles)
- Twitter/X: @DSRoberts007 (handle found via search; follower count not retrievable)
- LinkedIn: linkedin.com/in/davidstephenroberts — "Founder and CEO @ 10x Science (YC W26)"
- GitHub: No public repos found

**Andrew Reiter** — Co-founder & COO
- B.S. Biology, UNC-Chapel Hill (Bertozzi Group page)
- Previously: developed new mass spectrometry methods at Steven Carr's Proteomics Platform, Broad Institute of MIT and Harvard (Bertozzi Group page)
- Currently Ph.D. student in Biology at Stanford, co-advised by Carolyn Bertozzi and Or Gozani; NSF-GRFP fellow (Bertozzi Group page)
- Co-President, Stanford Biotechnology Group (Stanford Biotechnology Group website)
- Twitter/X: No public account found
- LinkedIn: No direct profile URL confirmed
- GitHub: No public repos found

**Vishnu Rajan Tejus** — Co-founder & CTO
- Education: coursework at De Anza College, Carnegie Mellon University (Educational Data Mining), Stanford d.school (Engineering Design), MITx and Udacity certificates in Computer Science (Weekday.works profile)
- Previously: Founding Software Engineer (2nd employee) at Nooks (2021-2025), an AI-powered sales platform that raised $43M Series B from Kleiner Perkins (Weekday.works profile; Nooks blog)
- CTO of CMU's RoboTutor project, one of five $1M Global Learning XPRIZE finalists (CMU website via search snippet)
- Research intern at Stanford ChEM-H (Chemical Biology), UCSF, and University of Washington (Weekday.works profile)
- Published researcher; serves on program committee for Machine Learning in Computational Biology (MLCB) at Stanford (search results)
- Described as "2x YC Founder" (YC page)—Nooks was a YC-backed company; 10x Science is his second YC venture
- Twitter/X: @vrtejus (handle found; follower count not retrievable)
- LinkedIn: linkedin.com/in/vishnutejus — "Founder and CTO at 10x Science (YC W26)"
- GitHub: github.com/vrtejus (found via search; star count not retrievable)

**Co-founder relationship:** David Roberts and Andrew Reiter both work in Carolyn Bertozzi's lab at Stanford, with overlapping research in mass spectrometry-based proteomics. Vishnu Tejus was a research intern at Stanford ChEM-H (the institute housing Bertozzi's lab), providing the likely connection point between all three founders at Stanford.

**Founder-market fit:** The team combines deep proteomics and mass spectrometry expertise (Roberts: 37+ publications, Damon Runyon Fellow, trained under a Nobel laureate; Reiter: Broad Institute proteomics platform experience, NSF-GRFP) with strong AI/ML engineering capability (Tejus: CMU XPRIZE finalist, founding engineer at a YC-backed AI company, ML researcher at Stanford). This is a rare combination of wet-lab analytical chemistry domain knowledge and production-grade software engineering experience. Roberts' specific work on top-down mass spectrometry—the exact technique the platform automates—represents direct founder-problem alignment. Carolyn Bertozzi (2022 Nobel laureate) is noted as a mentor/supporter (LinkedIn company page).

## Key Risks

**Brand confusion with 10x Genomics:** 10x Genomics (NASDAQ: TXG) is a well-known publicly traded life sciences company with significant brand recognition in genomics and spatial biology. Search results for "10x Science" consistently return 10x Genomics results, creating SEO and brand disambiguation challenges. This could complicate marketing, customer acquisition, and investor discovery.

**Founder academic commitments:** Two of three founders (Roberts as a postdoc, Reiter as a Ph.D. student) appear to hold active academic positions at Stanford. The company is not currently hiring (per YC page). The transition from academic research to full-time startup operations, and the potential conflict between academic obligations and company growth, represents execution risk.

**Regulatory validation requirements:** Biopharma protein characterization software used in drug development pipelines may need to meet FDA 21 CFR Part 11 compliance and GxP validation requirements. Building enterprise-grade software that meets these regulatory standards is resource-intensive and could slow go-to-market compared to research-use-only tools.

**Incumbent integration moats:** Target customers likely already have mass spectrometry instruments from Thermo Fisher, SCIEX, or Waters, with bundled software deeply embedded in validated workflows. Switching costs in regulated biopharma environments are high—customers must revalidate analytical methods when changing software, creating significant inertia favoring incumbents.

**Single-domain concentration:** The platform focuses specifically on protein characterization for biotherapeutics. If the AI drug discovery pipeline flood slows or consolidates to fewer candidates, the urgency of the characterization bottleneck diminishes. Revenue diversification pathways beyond this niche are unclear at this stage.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Protein characterization & identification market: USD 5.05B in 2025, projected USD 7.63B by 2033, 5.29% CAGR (Precedence Research, via search snippet) |
| SAM | No public data found for software-only segment |
| Traction | "Currently onboarding customers" (LinkedIn, 2026); 467 LinkedIn followers (LinkedIn, Mar 2026); sponsored US HUPO 2026 conference; launched Feb 2026 |
| Revenue Signal | No public data found |
| Founders | David S. Roberts (CEO): Stanford postdoc, Damon Runyon Fellow, Bertozzi Lab, 37+ publications. Andrew Reiter (COO): Broad Institute alumnus, Stanford PhD, NSF-GRFP. Vishnu R. Tejus (CTO): 2x YC founder, founding engineer at Nooks, CMU XPRIZE finalist. |
| Competitors | Protein Metrics/Byos (acquired by Dotmatics 2021, 200+ biopharma customers, revenue unknown, established market leader); Genedata Expressionist (acquired by Danaher Aug 2024, est. $50-100M revenue, enterprise biopharma MS platform); SCIEX Biologics Explorer (Danaher subsidiary, revenue unknown, hardware-bundled software); RedShiftBio ($101M raised, revenue unknown, hardware-focused protein characterization); Thermo Fisher BioPharma Finder (part of $45B+ revenue parent, instrument-bundled) |
| Moat Signals | Deep domain expertise (47+ publications, Nobel laureate lab lineage); technically complex intersection of proteomics + AI; potential data moat from customer protein datasets over time |
| Risk Factors | Brand confusion with 10x Genomics, incumbent integration moats in regulated biopharma, founder academic commitment transition |
| Founder Reach | David Roberts: Twitter @DSRoberts007 (count not retrievable), LinkedIn confirmed. Andrew Reiter: Twitter not found, LinkedIn not confirmed. Vishnu Tejus: Twitter @vrtejus (count not retrievable), LinkedIn confirmed, GitHub github.com/vrtejus. |
| Distribution Signals | Sponsored US HUPO 2026 conference session (LinkedIn); onboarding customers (LinkedIn, 2026); no Product Hunt listing; no app store presence |
| Emails | dsroberts@stanford.edu (Bertozzi Group page — academic email); no official company email found |
