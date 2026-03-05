# REV1

> Shortening hardware design cycles by automating post-CAD work

| Field | Value |
|-------|-------|
| Website | https://rev1.so |
| YC Page | https://www.ycombinator.com/companies/rev1 |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Hardware, Design, Manufacturing, Enterprise Software |
| YC Partner | Gustaf Alstromer |
| Emails | No public data found |

## The Idea

**Problem:** Mechanical engineers spend over 25% of their time manually creating 2D engineering drawings from 3D CAD models (YC launch page). These drawings—annotated with Geometric Dimensioning & Tolerancing (GD&T), a standard comprising over 300 pages of rules (YC launch page)—are required for every manufactured part. The process is tedious, error-prone, and diverts engineering time from design work. Current workflows rely on manual drafting within incumbent CAD platforms (SolidWorks, Siemens NX, PTC Creo), where engineers manually place views, dimensions, tolerances, and annotations.

**Approach:** REV1 takes a 3D CAD file as input, allows the engineer to specify design intent, and automatically generates a fully annotated 2D manufacturing drawing with proper GD&T. The output is reviewable and editable in REV1's native interface and synchronizes with PLM (Product Lifecycle Management) systems (YC launch page). The claimed reduction is from hours to minutes per drawing.

**Differentiation:** REV1's closest direct competitor is DraftAid (YC W24), which similarly converts 3D models to 2D drawings using generative AI. DraftAid claims reduction from hours to seconds and has been in market since August 2023. REV1 differentiates through its native review/edit interface and PLM synchronization, versus DraftAid's plugin-based approach within existing CAD software. Leo AI ($9.7M raised) focuses on a broader "AI copilot for mechanical engineering" including text-to-CAD generation rather than specifically post-CAD drawing automation. Adam/AdamCAD (YC W25, $4.1M seed) focuses on text-to-3D model generation, an upstream step rather than downstream documentation. SolidWorks 2025/2026 introduced a beta "Auto-Generate Drawing" command that automates view placement and dimension proposals natively (Solid Solutions blog, Nov 2025).

**Business Model:** No pricing information is publicly available on the REV1 website or YC page. [Inferred]: Most likely monetization path is per-seat SaaS subscription targeting engineering teams, consistent with B2B engineering software norms and the enterprise software tag.

**TAM/SAM:** The global CAD software market was valued at $23.75 billion in 2025 and is projected to reach $44.38 billion by 2035 at a 6.4% CAGR (Business Research Insights, 2025 via search snippet). Over 52 million professionals actively use CAD tools globally (Business Research Insights, 2025 via search snippet). No public TAM/SAM data found specific to the 2D drawing automation sub-segment. [Inferred]: The SAM is a narrow slice of the broader CAD market—specifically the time and cost spent on drawing documentation across hardware companies in robotics, aerospace, automotive, medical devices, and consumer electronics.

**GTM / Distribution:** Target customers include hardware companies in robotics, aerospace, automotive, medical devices, and consumer electronics (YC launch page). [Inferred]: Most likely distribution path is direct sales and PLM integration partnerships, leveraging founders' Tesla and Apple networks for initial enterprise pilots. The YC launch page and LinkedIn post from Y Combinator serve as early distribution channels.

## Defensibility

No defensibility signals found in public sources at this stage. The product does not yet have disclosed user counts, proprietary datasets, or patent filings.

[Inferred]: Potential moat could develop via (1) accumulation of proprietary training data from customer CAD files and drawing conventions, enabling company-specific annotation standards that improve over time; (2) deep PLM integrations creating switching costs; (3) GD&T annotation accuracy as a quality moat—correctness in tolerancing is safety-critical in aerospace and medical device manufacturing, so a tool with demonstrated accuracy advantages would be difficult to displace. These remain unproven at this stage.

**Market structure:** SolidWorks (Dassault Systèmes) has introduced a beta Auto-Generate Drawing feature in SolidWorks 2025/2026 (Solid Solutions blog, Nov 2025; Engineering.com, 2025), indicating the incumbent is actively moving into this space. However, SolidWorks' approach is assistive and limited to its own ecosystem. [Inferred]: A structural barrier for incumbents is that a standalone, CAD-agnostic drawing automation tool can serve multi-CAD environments (companies using SolidWorks, Siemens NX, PTC Creo, etc.), which no single incumbent has incentive to support. Additionally, incumbents may resist fully automating drawings because manual drafting time justifies seat-license pricing—cannibalizing drawing time reduces perceived value of existing CAD seats.

**Commoditization risk:** DraftAid (YC W24) is building essentially the same product and has a head start. Leo AI has broader scope and $9.7M in funding. Large language model capabilities for interpreting engineering drawings are improving rapidly, lowering the technical barrier for new entrants. CAD incumbents are adding AI drawing features natively.

## Market & Traction

**Traction signals:** No public traction data found. No revenue, user counts, or customer names have been disclosed. The REV1 website is built on Framer and did not render accessible content at time of research. No Product Hunt launch found. No app store listings found. No Discord or Slack community found. No company LinkedIn page found (searches return Rev1 Ventures and Rev1 Energy, unrelated entities). Founder LinkedIn profiles: Alex Rivero (linkedin.com/in/alex-rivero-sabiote/), Louis Liu (linkedin.com/in/sp-louis-liu/, 500+ connections per LinkedIn). Y Combinator published a LinkedIn post promoting REV1 (LinkedIn, activity ID 7424496965222289409). A YC Launch page exists (ycombinator.com/launches/PKz). No job postings found beyond the two founders.

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. REV1 |
|---|---|---|
| **DraftAid** (YC W24) | ~$500K (YC standard deal) (Crunchbase via search snippet) | Direct competitor; launched Aug 2023; claims 210K+ drawings created and $150K in paid pilot contracts (YC page); plugin-based within existing CAD vs. REV1's standalone native interface |
| **Leo AI** | $9.7M total ($5M seed led by Flint Capital) (Leo AI blog, Sep 2025) | Broader scope—AI copilot for all mechanical engineering including text-to-CAD; 20K+ engineers; serves Scania, HP, Mobileye; not focused specifically on 2D drawing automation |
| **Adam/AdamCAD** (YC W25) | $4.1M seed (TechCrunch, Oct 2025) | Text-to-3D model generation (upstream from REV1's post-CAD focus); tens of thousands of users; consumer/prosumer pricing at $5.99-$17.99/mo |
| **SolidWorks** (Dassault Systèmes) | Public company ($56B+ market cap) | Incumbent adding AI Auto-Generate Drawing (Beta) in SolidWorks 2025/2026; limited to SolidWorks ecosystem; assistive rather than fully automated |

**Why now:** [Inferred]: Several converging factors: (1) SolidWorks' introduction of AI drawing features in 2025/2026 validates the market need and signals that incumbents recognize the opportunity but are approaching it incrementally; (2) advances in computer vision and large language models have reached sufficient capability to interpret complex 3D geometry and apply GD&T rules programmatically—a task that was previously too nuanced for automation; (3) hardware engineering is experiencing a boom driven by robotics, EVs, and space/defense spending, increasing demand for manufacturing documentation throughput.

## Founders & Team

**Alex Rivero** — Co-founder & CEO
- MS Mechanical Engineering (Product Design concentration), UC Berkeley (Fung Institute for Engineering Leadership) (Fung Institute website; alex-rivero.com)
- Two undergraduate degrees: BSc Industrial Engineering and BBA in Business Management (alex-rivero.com)
- From Barcelona, Spain (Fung Institute website)
- Mechanical Design Engineer at Tesla, Motor Design Team—designed R&D and test equipment for rotors, stators, and position sensors; contributed to Cybertruck and Robotaxi programs (YC page; alex-rivero.com)
- Product engineering role at Apple, contributing to iPhone 17 lineup (YC page)
- Prior: Product Design Engineer Intern at a medical device startup (extruder machine for aortic dissection treatment); founded a CNC router venture in 2019 with seven prototypes developed (alex-rivero.com)
- 6+ years of experience designing and building industry prototypes (alex-rivero.com)
- Twitter/X: Likely @thealexrivero (x.com/thealexrivero via search); count not retrievable
- LinkedIn: linkedin.com/in/alex-rivero-sabiote/
- GitHub: No public repos found confirmed as his

**Louis Liu** — Co-founder
- Studied Mechanical Engineering at the University of Toronto (LinkedIn via search snippet)
- Software Engineer at Tesla—solo built the global Supercharger and Robotaxi planning platform (YC page)
- Prior roles at Amazon Web Services (AWS) and Flipp (LinkedIn via search snippet)
- Published ML researcher (YC page)
- Twitter/X: @louishliu (x.com/louishliu via search); count not retrievable
- LinkedIn: linkedin.com/in/sp-louis-liu/ — 500+ connections
- GitHub: github.com/splouisliu — 9 public repos, 12 followers. Pinned projects: csgo-demo-viewer (8 stars), lightning-mcqueen robotics project (5 stars), PIBConv neural architecture search paper (2 stars) (GitHub)

**Co-founder relationship:** Both founders worked at Tesla. Alex was on the Motor Design Team working on Cybertruck/Robotaxi; Louis built the Supercharger and Robotaxi planning platform. Their overlapping work on Robotaxi-related projects at Tesla suggests they were colleagues there.

**Founder-market fit:** Alex brings direct domain expertise as a mechanical engineer who has created manufacturing drawings at Tesla and Apple—he has personally experienced the pain point REV1 addresses. His CNC router startup and medical device prototyping work demonstrate hands-on manufacturing knowledge. Louis complements with full-stack software engineering, ML research, and platform-building experience at Tesla and AWS. The combination of a domain-expert mechanical engineer and an ML-capable software engineer maps directly to the product's requirements. No advisors or board members have been publicly disclosed.

## Key Risks

**Incumbent AI feature convergence:** SolidWorks introduced a beta Auto-Generate Drawing command in its 2025/2026 release that automates view placement, dimension proposals, and hole callouts natively (Solid Solutions blog, Nov 2025; Engineering.com, 2025). If SolidWorks, Siemens NX, or PTC Creo mature these features, REV1's value proposition narrows to multi-CAD environments only.

**Direct YC-network competitor:** DraftAid (YC W24) is building the same core product—3D-to-2D drawing automation—and has a ~2-year head start, claiming 210K+ drawings created and $150K in paid pilot contracts (YC/DraftAid page). Both companies share the YC network, creating a direct collision in investor, customer, and talent pools.

**Brand confusion:** "Rev1" is shared by Rev1 Ventures (a Columbus, OH-based VC firm with 13,139 LinkedIn followers) and Rev1 Energy (a project consultancy with 5,645 LinkedIn followers) (LinkedIn via search). This complicates SEO, brand building, and enterprise credibility. No REV1 company LinkedIn page was found for the YC startup.

**Narrow initial wedge with expansion uncertainty:** Automated 2D drawing generation is a specific sub-task within the broader mechanical engineering workflow. While the pain point is real, the addressable spend per customer may be limited if the tool only replaces drawing creation time. Expansion into broader post-CAD workflows (BOM generation, tolerance stack-up analysis, drawing change management) would be necessary but is unannounced.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global CAD software market: $23.75B in 2025, projected $44.38B by 2035 at 6.4% CAGR (Business Research Insights, 2025 via search snippet). No sub-segment data for 2D drawing automation specifically. |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Alex Rivero (CEO): MS Mech Eng UC Berkeley, Tesla Motor Design (Cybertruck/Robotaxi), Apple (iPhone 17). Louis Liu: U of Toronto Mech Eng, Tesla (Supercharger/Robotaxi platform), AWS, published ML researcher. |
| Competitors | DraftAid (~$500K raised, $150K in pilot contracts, direct 3D-to-2D competitor); Leo AI ($9.7M raised, revenue unknown, broader AI copilot for mech eng); Adam/AdamCAD ($4.1M raised, revenue unknown, text-to-3D focus); SolidWorks (public co, adding native AI drawing beta) |
| Moat Signals | No public data found |
| Risk Factors | SolidWorks incumbent AI drawing features, DraftAid direct competition with head start, brand confusion with Rev1 Ventures/Rev1 Energy |
| Founder Reach | Alex Rivero: Twitter @thealexrivero (count not retrievable), LinkedIn linkedin.com/in/alex-rivero-sabiote/. Louis Liu: Twitter @louishliu (count not retrievable), LinkedIn 500+, GitHub 12 followers/15 stars total. |
| Distribution Signals | YC Launch page (ycombinator.com/launches/PKz); YC LinkedIn promotional post (activity 7424496965222289409). No Product Hunt, app store, or community signals found. |
| Emails | No public data found |
