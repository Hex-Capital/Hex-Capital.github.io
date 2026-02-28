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

## The Idea

**Problem:** Mechanical engineers spend 25%+ of their time manually creating manufacturing-ready 2D engineering drawings from 3D CAD files (YC company page). These drawings require proper annotations and geometric dimensioning and tolerancing (GD&T) specifications and are a required deliverable for every manufactured part sent to a machine shop or contract manufacturer. The current workflow involves manually placing standard views, section views, dimensions, tolerances, and GD&T callouts — a tedious, error-prone process that every hardware company in robotics, aerospace, automotive, medical devices, and consumer electronics must perform. Existing CAD tools (SolidWorks, Siemens NX, CATIA, Inventor) provide manual drawing environments but limited automation for this step.

**Approach:** REV1 automates the conversion of 3D CAD files into manufacturing-ready 2D drawings with proper annotations and GD&T, reducing the process from hours to minutes (YC company page). The founders describe the product as targeting "the most tedious part of the workflow: 2D engineering drawings" (Louis Liu LinkedIn post, Feb 1, 2026). The system generates drawings with proper annotations and tolerancing so engineers can focus on design instead of documentation.

**Differentiation:** REV1 competes against both incumbent CAD vendors adding automation features and at least one direct YC-backed competitor:
- *DraftAid* (YC W24) offers a similar value proposition — "the world's first generative AI for CAD manufacturing drawings" — and integrates with SolidWorks, Inventor, CATIA, SolidEdge, and Siemens NX (YC company page for DraftAid). DraftAid launched in August 2023 and has a ~2-year head start.
- *SolidWorks Auto-Generate Drawings (Beta)* shipped in SolidWorks 2025 and automatically creates drawings with views, dimensions, and annotations from 3D models, though it requires 3DEXPERIENCE platform access (SolidWorks help documentation, 2025).
- *Siemens NX X Essentials* includes AI-predictive direct modeling and automated 2D drawing creation (Siemens NX product pages).

REV1's specific differentiator vs. these alternatives is not publicly detailed. The founding team's combined hardware engineering experience at Tesla and Apple (working on products that went through this exact workflow at scale) may inform product decisions around GD&T accuracy and manufacturing-readiness that generic AI approaches miss. The LinkedIn launch post specifically called out GD&T as the pain point (Louis Liu LinkedIn post, Feb 1, 2026).

**Business Model:** No pricing page or monetization details are publicly available. No job postings listed (YC company page, 0 open roles).

[Inferred]: Most likely monetization path is a SaaS subscription model (per-seat or per-drawing), given the B2B enterprise software positioning and industry norms for CAD tools. A consumption-based model (per drawing generated) is also plausible.

**TAM/SAM:** The global Computer Aided Design (CAD) software market was valued at $23.75 billion in 2025 and is expected to reach $44.38 billion by 2035 at a 6.4% CAGR (Business Research Insights, 2025, via search snippet). The manufacturing segment holds the dominant share, accounting for over 26% of total CAD market revenue in 2022 (Grand View Research, via search snippet). No public TAM/SAM data found for the specific sub-segment of automated 2D drawing generation from 3D CAD.

**GTM / Distribution:** No public GTM data found. [Inferred]: Most likely distribution path is direct outreach to mechanical engineering teams at hardware companies, starting with the founders' networks in Tesla, Apple, and the broader Bay Area hardware ecosystem. Integration with dominant CAD platforms (SolidWorks, Inventor, Siemens NX) would be a likely distribution requirement, similar to DraftAid's approach.

## Defensibility

No defensibility signals found in public sources at this stage.

[Inferred]: Potential moat could develop via: (1) proprietary training data from engineering drawings processed through the platform, enabling increasingly accurate GD&T annotation over time; (2) deep integration with specific CAD platforms creating switching costs; (3) domain-specific AI models tuned to manufacturing standards (ASME Y14.5) that require specialized engineering knowledge to build and validate. None of these are proven at this stage.

**Market structure:** SolidWorks (Dassault Systèmes) and Siemens NX are adding automated drawing features to their existing platforms (SolidWorks Auto-Generate Drawings Beta in 2025; Siemens NX automated 2D drawing creation). These incumbents' existing CAD user bases give them distribution advantages. However, the incumbent features are in beta and limited — SolidWorks' Auto-Generate Drawings requires the 3DEXPERIENCE platform and is described as "not intended to complete your entire drawing for you" (SolidWorks help documentation, 2025). [Inferred]: The structural barrier for incumbents may be that drawing automation is a narrow feature within their broad platforms, making it difficult to justify dedicated R&D investment at the level a focused startup can. Additionally, incumbents are incentivized to keep users in manual workflows that justify high seat prices, creating a potential business model conflict.

**Commoditization risk:** DraftAid (YC W24) has a ~2-year head start in this exact space. SolidWorks and Siemens are building native features. The underlying AI/ML techniques for interpreting 3D geometry and generating 2D views are not proprietary to any single vendor. The barrier to entry centers on GD&T accuracy (requiring deep manufacturing domain knowledge), CAD platform integration (each requiring separate development), and validation against manufacturing standards — all achievable by well-resourced teams.

## Market & Traction

**Traction signals:**
- Louis Liu's LinkedIn announcement post about REV1 and YC W26 received 250 likes and 26 comments (LinkedIn, Feb 1, 2026). Multiple commenters with CAD/CAM backgrounds expressed enthusiasm, with one noting "universally terrible drawing software" across existing CAD packages.
- Part of Y Combinator Winter 2026 batch; Demo Day scheduled for March 24, 2026 (YC blog).
- No public revenue, user counts, waitlist numbers, Product Hunt launch, app store presence, or download metrics found.
- Company Twitter/X: The @Rev1 handle on X exists (created March 2008) but cannot be confirmed as belonging to this YC company. No confirmed company social media accounts with follower data found.
- Company LinkedIn page: Not confirmed; search results returned Rev1 Ventures (Columbus, OH venture firm) and Rev1 Energy (commissioning services), both unrelated.
- No Discord, Slack, or community channels found.

**Competitive landscape:**

1. **DraftAid** ($500K raised via YC W24; paid pilots with contracts valued at $150K reported on YC page): Direct competitor. Founded 2023 in Toronto. Claims to be "world's first generative AI for CAD manufacturing drawings." Integrates with SolidWorks, Inventor, CATIA, SolidEdge, and Siemens NX. Team of 3. Has a ~2-year head start on REV1 in the same problem space.

2. **SolidWorks Auto-Generate Drawings** (parent: Dassault Systèmes; Dassault Systèmes revenue ~€6B): Native beta feature in SolidWorks 2025 that auto-generates drawings with views, dimensions, and annotations from 3D models. Requires 3DEXPERIENCE platform. Positioned as an incremental feature within the broader SolidWorks suite rather than a standalone product. Differentiation vs. REV1: bundled with existing CAD platform, no additional purchase; limited to SolidWorks users; described as not intended to complete entire drawings.

3. **Siemens NX X Essentials** (parent: Siemens; Siemens Digital Industries Software revenue ~€5B): Includes AI-predictive direct modeling and automated 2D drawing creation. Differentiation vs. REV1: bundled within NX ecosystem, limited to Siemens NX users.

4. **Topological** (YC S25; funding not publicly disclosed): Adjacent competitor building physics-based foundation models for CAD optimization. Not a direct drawing automation competitor but targets the same customer segment (hardware engineering teams) with AI-powered acceleration of engineering workflows.

5. **Sigmetrix GD&T Advisor** (private, funding not publicly disclosed): Specialized GD&T software with 25+ years of history. Focused on tolerance analysis and GD&T guidance rather than full drawing generation. Differentiation vs. REV1: narrower focus on tolerancing accuracy rather than end-to-end drawing automation.

**Why now:**
- SolidWorks shipped its first AI-powered Auto-Generate Drawings beta in 2025 (SolidWorks 2025 release notes), validating that incumbent CAD vendors recognize automated drawing generation as a viable AI application.
- [Inferred]: Advances in 3D geometry understanding models and vision-language models in 2024-2025 likely crossed the accuracy threshold needed to interpret complex CAD geometry and generate manufacturing-standard annotations. Louis Liu noted in his LinkedIn post that "AI tools like Cursor and Claude Code" are "dramatically accelerating software development," and REV1 aims to bring similar acceleration to mechanical engineering workflows (LinkedIn, Feb 1, 2026).

## Founders & Team

**Alex Rivero** — Co-founder & CEO
- MS Mechanical Engineering (product design concentration), UC Berkeley, Fung Institute for Engineering Leadership (Fung Institute website)
- BSc Industrial Engineering + BBA (dual undergraduate degrees), from Barcelona, Spain (Fung Institute website; alex-rivero.com)
- Mechanical Design Engineer at Tesla, Motor Design Team — designed R&D and test equipment for motor improvements focusing on rotors, stators, and position sensors (alex-rivero.com). Per YC page, worked on Cybertruck and Robotaxi.
- Mechanical Engineer at Apple — per YC page, worked on iPhone 17 lineup.
- Product Design Engineer Intern at a medical device startup — developed an extruder machine for manufacturing clinical-grade filament for treating aortic dissections (alex-rivero.com)
- Founded a CNC router startup in 2019, developed seven different CNC machine prototypes (alex-rivero.com)
- 6+ years of experience designing and building industry prototypes across various sectors (alex-rivero.com)
- Twitter/X: No confirmed account found for this founder.
- LinkedIn: linkedin.com/in/alex-rivero-sabiote — headline "Apple" at time of search (LinkedIn search result)
- GitHub: No confirmed public repos found.

**Louis Liu** — Co-founder
- University of Toronto — studied mechanical engineering; published ML researcher (LinkedIn, via search snippet)
- Senior Software Engineer at Tesla — solo built Tesla's global Supercharger & Robotaxi planning platform (YC company page)
- Previously worked at Amazon Web Services (AWS) and Flipp (RocketReach, via search snippet)
- Built ARES, an open-source platform for ingesting, annotating, and curating robotics data using VLMs and cloud compute (LinkedIn, via search snippet)
- Twitter/X: No confirmed account found for this founder.
- LinkedIn: linkedin.com/in/sp-louis-liu — headline "Senior Software Engineer @ Tesla" at time of search (LinkedIn search result)
- GitHub: No confirmed public repos found for this specific Louis Liu.

**Co-founder relationship:** Both Alex Rivero and Louis Liu worked at Tesla, providing a shared employer overlap. Alex was on the Motor Design Team and Louis was a Senior Software Engineer. Their shared Tesla experience likely provided the basis for their co-founder relationship. Both also have mechanical engineering educational backgrounds (Alex at UC Berkeley, Louis at University of Toronto).

**Founder-market fit:** Alex Rivero has direct, hands-on experience as a mechanical design engineer at Tesla and Apple — the exact role that creates 2D engineering drawings from 3D CAD files daily. He has personally experienced the pain point REV1 addresses. His CNC router startup experience and medical device work add additional manufacturing context. Louis Liu brings the software engineering and ML skill set needed to build the automation, with experience building production-scale platforms at Tesla and published ML research. The combination of a domain expert who lived the problem and a software/ML engineer who built production systems at scale is directly aligned with the product.

## Key Risks

**Direct YC-alumni competitor with head start:** DraftAid (YC W24) addresses the same problem — AI-powered generation of 2D manufacturing drawings from 3D CAD models — and launched approximately 2 years earlier. DraftAid reports paid pilots with contracts valued at $150K (YC company page) and integrates with five major CAD platforms. REV1 will need to demonstrate a differentiated technical approach or superior accuracy to win customers in a market where a funded competitor has existing customer relationships.

**Incumbent platform features closing the gap:** SolidWorks shipped Auto-Generate Drawings as a beta feature in 2025, and Siemens NX includes automated 2D drawing creation. As these features mature from beta to production-ready, the addressable market for standalone drawing automation tools shrinks. Engineers may prefer a "good enough" native feature over a third-party tool requiring separate procurement and integration.

**CAD platform integration dependency:** The product's value depends on reading 3D CAD files from proprietary formats (SolidWorks .SLDPRT, Siemens NX .prt, CATIA .CATPart, etc.). Each integration requires separate development and ongoing maintenance as platforms update. CAD vendors could restrict API access or file format compatibility for competitive reasons.

**Brand disambiguation:** The name "REV1" is shared with Rev1 Ventures (a Columbus, OH venture firm with 13,139 LinkedIn followers), Rev1 Energy (commissioning services firm with 5,645 LinkedIn followers), and multiple X/Twitter accounts. This creates SEO and brand recognition challenges in the early stages of company building.

**GD&T accuracy threshold:** Manufacturing drawings with incorrect GD&T can cause parts to be machined incorrectly, potentially resulting in safety failures or costly scrap in industries like aerospace and medical devices. The accuracy bar for AI-generated GD&T is extremely high, and errors could damage trust. The company must demonstrate that automated tolerancing meets ASME Y14.5 standards reliably enough for production use.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $23.75B global CAD software market in 2025, projected $44.38B by 2035, 6.4% CAGR (Business Research Insights, 2025, via search snippet). No sub-segment data for drawing automation specifically. |
| SAM | No public data found |
| Traction | 250 likes on founder LinkedIn announcement (LinkedIn, Feb 1, 2026); YC W26 batch member; Demo Day March 24, 2026 (YC blog) |
| Revenue Signal | No public data found |
| Founders | Alex Rivero (CEO): MS ME UC Berkeley, ex-Tesla Motor Design + ex-Apple, CNC router startup founder. Louis Liu: U of Toronto, ex-Tesla Senior SWE (built Supercharger & Robotaxi planning platform), published ML researcher. |
| Competitors | DraftAid ($500K raised via YC W24, paid pilots valued at $150K, ~2-year head start in same space); SolidWorks Auto-Generate Drawings (native beta feature in SW2025, parent Dassault ~€6B rev, bundled with existing CAD); Siemens NX (automated 2D drawing creation, parent Siemens ~€5B software rev, bundled with NX); Topological (YC S25, adjacent — CAD optimization not drawing generation) |
| Moat Signals | No public data found |
| Risk Factors | Direct YC-alumni competitor (DraftAid) with 2-year head start, incumbent CAD vendors shipping native automation features, GD&T accuracy threshold for manufacturing safety |
| Founder Reach | Alex Rivero: Twitter not found, LinkedIn linkedin.com/in/alex-rivero-sabiote, GitHub not found. Louis Liu: Twitter not found, LinkedIn linkedin.com/in/sp-louis-liu, GitHub not found. |
| Distribution Signals | No public data found |
