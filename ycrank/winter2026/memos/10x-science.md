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

## The Idea

**Problem:** AI-powered drug discovery platforms (e.g., generative protein design, structure prediction) are accelerating the front end of the pharmaceutical pipeline, flooding it with new drug candidates. However, the development stage — specifically protein characterization and quality assessment via mass spectrometry-based methods like peptide mapping — remains slow, expensive, and not scalable (YC company page). Current workflows rely on legacy software tools (e.g., Thermo Fisher BioPharma Finder, Waters UNIFI, Protein Metrics Byos/Byonic) that require significant manual effort, are often instrument-locked, and were not designed for the throughput demands of AI-accelerated pipelines. The customer segment is biopharmaceutical companies developing protein therapeutics (monoclonal antibodies, biosimilars, cell and gene therapies) that must characterize drug candidates before clinical trials.

**Approach:** 10x Science applies modern AI to protein characterization and quality assessment, specifically targeting peptide mapping and proteoform analysis for protein therapeutics (10xscience.com metadata; YC company page). The platform is described as "AI-native" and "end-to-end," aiming to automate the analysis pipeline from raw mass spectrometry data through to quality reporting. The company's specializations listed on LinkedIn include biologics, drug development, proteomics, mass spectrometry, proteoform characterization, AI, machine learning, and de novo sequencing (LinkedIn company page).

**Differentiation:** Existing solutions fall into two categories: (1) instrument-vendor-bundled software (Thermo Fisher BioPharma Finder, Waters UNIFI) that is tied to specific hardware platforms and lacks AI-native processing, and (2) standalone analysis software (Protein Metrics Byos/Byonic, now owned by Dotmatics) that was built pre-AI and bolts on incremental features. 10x Science positions itself as purpose-built from the ground up with AI at the core, instrument-agnostic, and designed for the throughput and complexity of modern protein therapeutics pipelines. The founding team's deep domain expertise in top-down mass spectrometry and glycoproteomics from Carolyn Bertozzi's Nobel Prize-winning lab at Stanford provides scientific credibility that pure-software competitors lack.

**Business Model:** No public pricing page found. The website was not fully accessible at time of research (Cloudflare protection blocked content rendering). [Inferred]: Most likely monetization path is enterprise SaaS — annual subscriptions sold to biopharma analytical development teams, potentially with consumption-based tiers for data processing volume. This is consistent with the company's "SaaS" and "Enterprise Software" tags and B2B focus.

**TAM/SAM:** The protein characterization and identification market was valued at USD 2,644.79 million in 2024 and is expected to reach USD 4,859.67 million by 2031 (Reanin via search snippet). Alternate estimates are significantly higher: USD 18.17 billion in 2024 projected to USD 45.24 billion by 2032 (Global Growth Insights via search snippet). The wide range reflects different scope definitions (instruments + reagents + software vs. software-only). No public SAM estimate was found specific to the software-only segment for biopharma protein characterization.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to analytical development and quality control teams within biopharma companies, supplemented by academic lab adoption (the team's Stanford network and publication record provide a natural entry point to academic proteomics labs). The company's YC partner is Jon Xu (YC company page).

## Defensibility

The founding team brings deep, specialized domain expertise: 18+ years collective experience in proteomics and mass spectrometry, 47+ scientific publications, and two US patents (Stanford Profiles, David S. Roberts). The founders trained in Carolyn Bertozzi's lab at Stanford (2022 Nobel Prize in Chemistry), and at the Broad Institute of MIT and Harvard's Proteomics Platform — two of the world's leading centers for protein analysis. This combination of cutting-edge scientific knowledge and AI/ML engineering capability (via the CTO's background) creates a high bar for replication by pure-software teams.

Potential moat development: As the platform processes more biopharma protein characterization data, it could accumulate proprietary training data for AI models that improve accuracy and speed — creating a data flywheel. Switching costs could develop if the platform becomes embedded in customers' regulatory submission workflows (GLP/GMP documentation).

**Market structure:** Incumbent instrument vendors (Thermo Fisher, Waters, Agilent) bundle their characterization software with hardware sales. Building a best-in-class standalone AI platform would cannibalize their software bundling strategy and potentially decouple customers from their instrument lock-in. This creates a structural conflict: incumbents are incentivized to maintain instrument-software integration rather than build instrument-agnostic solutions. Additionally, the technical complexity of combining deep proteomics domain knowledge with modern AI/ML engineering spans two talent pools that rarely overlap.

**Commoditization risk:** Large AI/ML companies (e.g., Google DeepMind, which built AlphaFold) could theoretically enter this space, but biopharma protein characterization for drug development requires specialized regulatory knowledge and domain-specific mass spectrometry expertise that makes casual entry unlikely. Other biotech AI startups focused on drug discovery (not development) would need to pivot significantly. The most credible competitive threat comes from Dotmatics/Protein Metrics adding AI capabilities to their existing Byonic/Byos platform, given their installed base of 200+ biopharma companies (Dotmatics website).

## Market & Traction

**Traction signals:**
- LinkedIn company page: 415 followers (LinkedIn, fetched Feb 2026)
- LinkedIn employee count: 3 (LinkedIn, fetched Feb 2026)
- Company founded: 2025 (LinkedIn company page)
- YC Batch: Winter 2026 (YC company page)
- No public revenue, user count, Product Hunt launch, app store presence, or press coverage in named publications found
- No Twitter/X company account found
- No Discord or Slack community found
- David S. Roberts Twitter/X: @DSRoberts007 (follower count not retrievable)
- Vishnu Rajan Tejus Twitter/X: @vrtejus (follower count not retrievable)
- Vishnu Rajan Tejus GitHub: github.com/vrtejus — 23 public repos, 19 stars total (GitHub)

**Competitive landscape:**

1. **Protein Metrics (Dotmatics)** — Acquired by Insightful Science/Dotmatics in Dec 2021 (BioPharm International); originally raised $950K (Crunchbase via search snippet). Products: Byonic (MS/MS search engine), Byos (desktop analysis), Byosphere (cloud platform). Used by 200+ biopharma companies and 300+ academic institutions (Dotmatics website). Now backed by Insight Partners. Key differentiator vs. 10x Science: established installed base and regulatory-validated workflows, but pre-AI architecture.

2. **Biognosys** — Raised ~$22M total (PitchBook via search snippet); revenue unknown. Founded 2008, ETH Zurich spin-off. Products: Spectronaut, SpectroDive, SpectroMine for proteomics analysis. Also offers contract research services. Key differentiator vs. 10x Science: services + software model with long track record, but primarily a contract research organization rather than a pure software platform.

3. **Thermo Fisher Scientific (BioPharma Finder)** — Public company (market cap ~$180B+). BioPharma Finder software is bundled with Orbitrap mass spectrometers. Supports peptide mapping, PTM analysis, and sequence confirmation. Key differentiator vs. 10x Science: deep hardware-software integration and massive installed base, but instrument-locked (only works with Thermo Fisher instruments) and not AI-native.

4. **Waters Corporation (UNIFI)** — Public company. Biopharmaceutical Platform Solution with UNIFI provides automated peptide mapping, glycan analysis, and intact protein analysis. Key differentiator vs. 10x Science: established regulatory acceptance in biopharma quality labs, but similarly instrument-locked (Waters UPLC/MS systems) and legacy architecture.

**Why now:**
[Inferred]: Three converging catalysts: (1) The explosion of AI-designed protein therapeutics (driven by AlphaFold, RFdiffusion, and generative protein design tools reaching production maturity in 2023-2025) is creating an unprecedented volume of drug candidates requiring characterization — a demand-side shock to existing workflows. (2) Modern AI/ML models (transformers, foundation models) have recently demonstrated the ability to learn mass spectrometry fragmentation patterns and predict spectra, making AI-native characterization software technically feasible for the first time. (3) The FDA's increasing acceptance of advanced analytical methods for biologics creates regulatory tailwinds for AI-assisted characterization tools.

## Founders & Team

**David S. Roberts** — Co-founder & CEO
- Ph.D. in Materials Chemistry and Analytical Chemistry, University of Wisconsin-Madison (2023); B.S. in Chemistry and Mathematics, UC San Diego (2016) (Stanford Profiles)
- Postdoctoral Scholar at Stanford University in Carolyn Bertozzi's lab (2022 Nobel Laureate in Chemistry) (Stanford Profiles)
- Damon Runyon Fellow (2024–present); Postdoctoral Career Development Award, American Society for Mass Spectrometry (2024); US HUPO Early Career Researcher Award (2021) (Stanford Profiles)
- 50+ peer-reviewed publications in journals including *Nature*, *JACS*, and *PNAS* (Stanford Profiles)
- 2 issued US patents related to cardiac troponin assays and siloxane resin applications (Stanford Profiles)
- Twitter/X: @DSRoberts007 — follower count not retrievable
- LinkedIn: linkedin.com/in/davidstephenroberts/ — "Founder and CEO @ 10x Science (YC W26)" (LinkedIn via search snippet)
- GitHub: No public repos found

**Andrew Reiter** — Co-founder & COO
- B.S. in Biology, UNC-Chapel Hill (Bertozzi Group website)
- Ph.D. candidate in Biology, Stanford University; co-advised by Carolyn Bertozzi and Or Gozani; NSF-GRFP fellow (Bertozzi Group website)
- Previously at the Broad Institute of MIT and Harvard, Steven Carr's Proteomics Platform, where he developed new methods in mass spectrometry (Bertozzi Group website)
- Twitter/X: No public account found
- LinkedIn: Not individually confirmed (multiple "Andrew Reiter" profiles exist)
- GitHub: No public repos found

**Vishnu Rajan Tejus** — Co-founder & CTO
- Computer Science coursework at Stanford University, Carnegie Mellon University, De Anza College, and MITx (LinkedIn via search snippet; Weekday.works)
- Founding Software Engineer at Nooks (YC-backed; raised $70M+ total, $43M Series B from Kleiner Perkins) (The Org; PRNewswire)
- CTO at RoboTutor, CMU Global Learning XPRIZE team (Weekday.works via search snippet)
- Computer Vision Researcher at Stanford University (Weekday.works via search snippet)
- Note: The YC page describes the team as including "a 2x YC Founder." Vishnu's role at Nooks was listed as "Founding Software Engineer" (The Org), not co-founder. Whether a prior YC company exists or the term is used loosely could not be confirmed from public sources.
- Twitter/X: @vrtejus — follower count not retrievable
- LinkedIn: linkedin.com/in/vishnutejus/ (LinkedIn)
- GitHub: github.com/vrtejus — 23 repos, 19 total stars; bio: "Founder and CTO at @10x-Science"; notable: CysTeam (1st Prize, QBI Hackathon 2025) (GitHub)

**Co-founder relationship:** David S. Roberts and Andrew Reiter are both members of Carolyn Bertozzi's lab at Stanford University and are co-located in the ChEM-H Building (Bertozzi Group website; Stanford Profiles). Both have mass spectrometry and proteomics expertise. Vishnu Rajan Tejus also lists Stanford University as an affiliation (LinkedIn, Weekday.works), providing a plausible connection point, though his work was in computer science/computer vision rather than chemistry.

**Founder-market fit:** The CEO (Roberts) has a Ph.D. specifically in analytical chemistry with deep expertise in top-down mass spectrometry and proteoform characterization — the exact technical domain 10x Science targets. The COO (Reiter) trained at the Broad Institute's Proteomics Platform, one of the premier mass spectrometry facilities globally, and continues proteomics research at Stanford. Together they bring first-hand experience with the pain points of protein characterization. The CTO (Tejus) provides the AI/ML engineering and startup scaling experience, having built products at Nooks from early stage through a $43M Series B. The combination of two deep domain scientists with a technical builder who has scaled a YC company is well-suited to this problem.

## Key Risks

**Brand confusion with 10x Genomics:** 10x Genomics is a publicly traded company (NASDAQ: TXG) in a closely adjacent space (single-cell and spatial biology). Search results for "10x Science" consistently returned 10x Genomics results, and LinkedIn searches surfaced 10x Genomics exclusively. This creates significant brand disambiguation challenges for SEO, marketing, and customer discovery. No evidence of IP/trademark conflict was found, but the market confusion is evident from research.

**Instrument vendor platform risk:** Thermo Fisher and Waters together dominate the biopharma mass spectrometry instrument market. If either vendor aggressively improves their bundled software with AI capabilities (Thermo Fisher already offers BioPharma Finder with an "MS2 prediction algorithm"), they could leverage their hardware lock-in to block adoption of third-party analysis software. Mitigation: the company's instrument-agnostic positioning could appeal to labs running multi-vendor instrument fleets.

**Regulatory validation hurdle:** Biopharma protein characterization for regulatory submissions (IND, BLA filings) requires validated analytical methods. Customers may be reluctant to adopt AI-based analysis software that has not yet been validated in a GxP-compliant environment or referenced in regulatory filings. Building this validation track record takes time and requires early customer partnerships with regulatory-stage programs.

**Dotmatics/Protein Metrics competitive response:** Protein Metrics (now Dotmatics, backed by Insight Partners) has an installed base of 200+ biopharma companies (Dotmatics website) and could add AI features to Byonic/Byos. Their existing customer relationships and validated workflows create meaningful switching cost barriers that 10x Science must overcome.

**"2x YC Founder" claim verification:** The company describes a team member as a "2x YC Founder" (YC company page). Public records show Vishnu Tejus was a "Founding Software Engineer" at Nooks (The Org), not a listed co-founder. This may reflect a loose use of terminology or an unverifiable prior YC affiliation. Any misrepresentation of founder credentials could be a diligence concern.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.6B protein characterization and identification market in 2024, growing to $4.9B by 2031 (Reanin via search snippet). Alternate estimate: $18.2B in 2024 to $45.2B by 2032 (Global Growth Insights via search snippet). Wide range reflects scope differences (instruments + reagents + software vs. narrower definitions). |
| SAM | No public data found for software-only segment |
| Traction | 415 LinkedIn followers (LinkedIn, Feb 2026). No public revenue, user count, press coverage, or product launch data found. |
| Revenue Signal | No public data found |
| Founders | David S. Roberts (CEO): Ph.D. UW-Madison, Stanford postdoc in Bertozzi lab, 50+ publications, 2 US patents, Damon Runyon Fellow. Andrew Reiter (COO): B.S. UNC-Chapel Hill, Stanford Ph.D. candidate in Bertozzi lab, ex-Broad Institute Proteomics Platform, NSF-GRFP. Vishnu Rajan Tejus (CTO): Stanford/CMU CS, founding engineer at Nooks ($70M+ raised), CTO at RoboTutor CMU XPRIZE. |
| Competitors | Protein Metrics/Dotmatics ($950K raised pre-acquisition, acquired 2021 by Dotmatics/Insight Partners, revenue unknown, 200+ biopharma customers; established peptide mapping software vs. 10x Science's AI-native approach); Biognosys (~$22M raised, revenue unknown, services + software model vs. pure software); Thermo Fisher BioPharma Finder (public company, instrument-bundled software vs. instrument-agnostic); Waters UNIFI (public company, instrument-bundled vs. instrument-agnostic) |
| Moat Signals | Founding team from Nobel Laureate's lab with deep proteomics domain expertise; 50+ publications and 2 US patents (CEO); potential data flywheel from AI model training on biopharma characterization data |
| Risk Factors | Brand confusion with 10x Genomics (NASDAQ: TXG), instrument vendor competitive response (Thermo Fisher/Waters AI upgrades), regulatory validation timeline for GxP-compliant environments |
| Founder Reach | David S. Roberts: Twitter @DSRoberts007 (count not retrievable), LinkedIn linkedin.com/in/davidstephenroberts/. Andrew Reiter: Twitter not found, LinkedIn not individually confirmed. Vishnu Rajan Tejus: Twitter @vrtejus (count not retrievable), LinkedIn linkedin.com/in/vishnutejus/, GitHub 19 stars. |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no Chrome extension, no community channels identified) |
