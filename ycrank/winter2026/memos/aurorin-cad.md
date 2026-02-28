# Aurorin CAD

> We help hardware companies ship faster

| Field | Value |
|-------|-------|
| Website | https://aurorincad.com |
| YC Page | https://www.ycombinator.com/companies/aurorin-cad |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Hardware, B2B, AI |

## The Idea

**Problem:** Mechanical CAD software suffers from two linked problems: performance and workflow tedium. Nearly all professional CAD tools (SolidWorks, NX, Creo, CATIA, Fusion 360, Onshape) rely on the same few underlying CAD kernels originally built in the 1980s. According to Aurorin's YC launch page, it is common for these programs to take four hours to open a file. On the workflow side, creating a single part in SolidWorks takes an experienced user approximately 20 minutes through a multi-step manual process (YC Launch page, Feb 2026). The customers are mechanical and hardware design engineers at companies ranging from startups to large hardware OEMs.

**Approach:** Aurorin has built a custom parametric and B-Rep (Boundary Representation) driven CAD kernel from scratch, designed to take full advantage of modern CPUs and GPUs. An AI agent is integrated into the kernel to automate repetitive design steps. The product combines a traditional UI editing surface with a chat interface for AI-driven design tasks. It is available as a native desktop application for Mac and Windows (YC Launch page, Feb 2026).

**Differentiation:** Unlike incumbents that layer AI on top of legacy kernels (e.g., PTC's Onshape AI Advisor, launched Oct 2025; Nasdaq), Aurorin's kernel was built to be AI-native from inception, meaning the AI can directly manipulate the geometry engine rather than interfacing through a legacy API layer. Compared to other AI-native CAD startups — Zoo (text-to-CAD from text prompts, $20/month; zoo.dev), Adam AI (text-to-3D generation, from $9.99/month; TechCrunch, Oct 2025), and Hestus (AI copilot automating repetitive CAD tasks; RD World Online, Jan 2025) — Aurorin differentiates by building a full custom kernel rather than wrapping existing geometry engines or focusing on text-to-3D generation. The performance claim is that Aurorin creates parts in seconds that take 20 minutes in SolidWorks (YC Launch page, Feb 2026).

**Business Model:** No public pricing page is visible on aurorincad.com. The website offers a "Try It Free" option and a "For Teams" enterprise contact flow via contact@aurorincad.com (company website, Feb 2026). [Inferred]: Most likely monetization path is a per-seat SaaS subscription with free/individual and paid team/enterprise tiers, consistent with the industry standard set by competitors (Onshape, Fusion 360, Zoo).

**TAM/SAM:** The global 3D CAD software market was valued at $11.73B in 2024 and is projected to reach $19.15B by 2032 at a 6.4% CAGR (Fortune Business Insights, via search snippet). An alternative estimate sizes the broader CAD software market at $12.2B in 2025 growing to $22.7B by 2035 at a 6.4% CAGR (Future Market Insights, via search snippet). [Inferred]: The serviceable addressable market for mechanical/hardware engineering CAD is a subset of the total CAD market, which also includes architecture, electrical, and civil engineering applications. No public SAM estimate specific to AI-native mechanical CAD was found.

**GTM / Distribution:** The YC Launch page asks for hardware companies interested in rapid prototyping or switching CAD platforms, and design engineers willing to provide feedback (YC Launch page, Feb 2026). The primary YC partner is Jared Friedman (YC page). [Inferred]: Most likely distribution path is a bottom-up product-led growth motion starting with individual design engineers via the free trial, expanding to team/enterprise contracts. YC's hardware company network and the W26 batch provide an initial distribution channel.

## Defensibility

Aurorin's primary moat signal is its custom-built CAD kernel — a technically complex, multi-year undertaking that constitutes significant IP. The founder's prior work on a multi-GPU graphics engine ("Sunrise Graphics Engine," 2018–2022, described as rendering buildings and terrain at hundreds of FPS on multiple monitors; LinkedIn) and SpaceX simulation systems suggests relevant domain expertise in kernel-level graphics and physics software. Building a new CAD kernel from scratch is a high barrier to entry; few startups attempt it due to the years of development required.

No patents, network effects, or data moats are identifiable from public sources at this stage. Switching costs could develop as users build design libraries and workflows within Aurorin, but this is unproven at pre-seed.

**Market structure:** Incumbent CAD vendors (Dassault/SolidWorks, Siemens/NX, PTC/Creo) are constrained by their reliance on legacy kernels (Parasolid, ACIS) that underpin decades of customer files, plugins, and integrations. Rebuilding these kernels to be AI-native would risk breaking backward compatibility with millions of existing designs and certified manufacturing workflows. Additionally, incumbents derive significant revenue from maintenance and support contracts tied to the current architecture, creating business model cannibalization risk in moving to a modern AI-native approach.

**Commoditization risk:** Several startups are pursuing AI-enabled CAD from different angles: Zoo ($10.12M raised) offers an open-source text-to-CAD approach; Adam AI ($4.1M raised) focuses on text-to-3D generation; Hestus ($1.5M raised) provides an AI copilot that plugs into existing CAD tools. However, none of these competitors have built a full custom kernel from scratch — Zoo uses its own geometry engine but with a different (API/text-prompt) interface paradigm, while Hestus integrates with existing CAD software. A well-funded incumbent or a new entrant with sufficient engineering talent could theoretically replicate a ground-up kernel approach, but the multi-year development timeline provides a head start.

## Market & Traction

**Traction signals:**
- YC Launch page: 35 upvotes (YC Launches, Feb 2026)
- Y Combinator's tweet announcing the launch received ~176K views (X.com/@ycombinator, Feb 24, 2026, via search snippet)
- Twitter/X: @AurorinCAD — 148 followers, account created January 2026 (X.com, via search snippet)
- LinkedIn: Company mentioned in Y Combinator's LinkedIn post (LinkedIn, Feb 2026); no dedicated company page found
- Founder LinkedIn: 3,000+ followers, 500+ connections (LinkedIn)
- Product Hunt: No listing found
- Discord/Slack community: No public community found
- No public revenue, user count, or customer data found
- Desktop app available for Mac and Windows (company website)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Aurorin |
|---|---|---|
| **SolidWorks** (Dassault Systèmes) | Part of Dassault (~€6.24B FY25 total revenue; Dassault investor relations); ~7.5M users (Wikipedia) | Dominant incumbent with massive installed base and ecosystem; legacy kernel architecture; 38.76% CAD market share (6sense, via search snippet) |
| **Zoo** (formerly KittyCAD) | $10.12M total (Crunchbase, via search snippet) | Open-source text-to-CAD approach with API infrastructure; does not position as a full professional CAD replacement but as a design API/tool layer; free plan + $20/month (zoo.dev) |
| **Adam AI** | $4.1M seed (TechCrunch, Oct 2025) | Text-to-3D generation and AI copilot; focuses on rapid prototyping from text prompts rather than a full-featured parametric CAD environment; from $9.99/month |
| **Hestus** | $1.5M seed (RD World Online, Jan 2025) | AI copilot that integrates with existing CAD tools (e.g., SolidWorks) rather than replacing them; YC S24 |
| **Onshape** (PTC) | Part of PTC (~$2.6B FY25 revenue guidance; StockTitan); acquired for $470M in 2019 | Cloud-native CAD with AI Advisor (launched Oct 2025); 0.19% CAD market share (6sense, via search snippet); 17 product updates in 2025 |

**Why now:** [Inferred]: Several converging factors create an opening. First, large language models and generative AI reached sufficient capability in 2023–2025 to meaningfully automate multi-step design workflows, rather than just assisting with single operations. Second, GPU compute has advanced to the point where a modern kernel can leverage GPU parallelism for real-time rendering and simulation that legacy CPU-bound kernels cannot match. Third, the wave of AI-native CAD startups receiving venture funding in 2024–2025 (Zoo, Adam, Hestus) signals investor and market validation of the category. The incumbents' recent moves to add AI features (PTC's Onshape AI Advisor, Oct 2025) confirm demand but also highlight the limitations of bolting AI onto legacy architectures.

## Founders & Team

**Michael Baron** — Solo Founder & CEO
- Education: Two periods of study listed on LinkedIn (2018–2022 and 2022–2026); specific institutions not retrieved from public sources
- Work experience: 3x SpaceX intern — worked on Raptor combustion simulation, Dragon Guidance Navigation & Control, and Starshield flight software; Apple intern — GPU driver performance (YC page; LinkedIn)
- Notable project: Built the "Sunrise Graphics Engine" (Aug 2018 – Aug 2022), described as "a multi-GPU graphics engine capable of rendering the buildings and terrain of the world at hundreds of FPS on multiple monitors" (LinkedIn)
- Twitter/X: Personal handle @NominalAviator (referenced in YC's launch tweet, Feb 2026); follower count not retrievable due to JavaScript rendering
- LinkedIn: linkedin.com/in/michael-andrew-baron — 3,000+ followers, 500+ connections (LinkedIn)
- GitHub: No confirmed public repos found under identifiable handles

**Co-founder relationship:** Solo founder; not applicable.

**Founder-market fit:** Michael Baron's background combines aerospace simulation engineering (SpaceX propulsion and GNC) with GPU-level performance optimization (Apple GPU drivers) and a personal multi-year project building a graphics engine from scratch. This combination of simulation/physics domain knowledge, GPU optimization expertise, and demonstrated ability to build a complex rendering engine independently is directly relevant to building a high-performance CAD kernel with AI capabilities. The YC partner assigned is Jared Friedman (YC page).

## Key Risks

**Solo founder execution risk:** Aurorin is a team of one building a full CAD kernel, AI agent, and desktop application simultaneously. CAD kernel development has historically required large teams over multi-year timescales (Parasolid and ACIS were developed by teams of dozens over years). Mitigation: The company is not currently hiring (YC page), though the YC network could accelerate recruiting.

**Legacy file compatibility and ecosystem lock-in:** Professional mechanical engineers have years of design files in SolidWorks (.sldprt), STEP, IGES, and proprietary formats. Aurorin must support import/export of these formats to be viable for teams switching from incumbents. No public information was found on file format compatibility. The absence of ecosystem integrations (simulation, CAM, PLM, PDM) could limit adoption for production workflows.

**Performance claims unverified at scale:** The claim that parts can be created in seconds vs. 20 minutes in SolidWorks (YC Launch page) is a founder assertion without independent benchmarking or third-party validation. Professional CAD users work with complex assemblies of thousands of parts; single-part creation speed may not reflect real-world workflow improvements.

**Regulatory and certification barriers in target industries:** Hardware companies in aerospace, automotive, and medical devices require CAD tools that produce outputs meeting specific industry certification standards (e.g., ASME Y14.5 for GD&T, AS9100 for aerospace). A new CAD tool must demonstrate compliance with these standards to gain adoption in regulated industries.

**Crowded AI-CAD startup category:** At least three other venture-backed startups (Zoo, Adam, Hestus) are pursuing AI-enabled CAD with a combined $15.7M+ in funding, and incumbents are actively adding AI features. The category is forming quickly, and differentiation may narrow as competitors mature.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $11.73B 3D CAD software market in 2024 (Fortune Business Insights, via search snippet, 6.4% CAGR to $19.15B by 2032) |
| SAM | No public data found |
| Traction | 35 upvotes on YC Launch page (Feb 2026); ~176K views on YC launch tweet (X.com/@ycombinator, Feb 24, 2026, via search snippet); @AurorinCAD 148 followers on X (Jan 2026, via search snippet) |
| Revenue Signal | No public data found. Free trial available; enterprise contact via contact@aurorincad.com (company website) |
| Founders | Michael Baron (Solo Founder & CEO): 3x SpaceX intern (propulsion sim, Dragon GNC, Starshield), Apple intern (GPU drivers), built multi-GPU graphics engine (2018–2022) |
| Competitors | SolidWorks (Dassault, ~€6.24B parent revenue, 7.5M users, dominant incumbent); Zoo ($10.12M raised, revenue unknown, open-source text-to-CAD API); Adam AI ($4.1M raised, revenue unknown, text-to-3D from $9.99/mo); Hestus ($1.5M raised, revenue unknown, AI copilot for existing CAD); Onshape (PTC, $470M acquisition, cloud-native CAD with AI Advisor) |
| Moat Signals | Custom-built parametric and B-Rep CAD kernel; founder's demonstrated GPU engine development experience |
| Risk Factors | Solo founder building complex kernel, legacy file format compatibility unknown, crowded AI-CAD startup category, performance claims unverified at scale |
| Founder Reach | Michael Baron: X @NominalAviator (count not retrievable), LinkedIn 3,000+ followers, GitHub not found |
| Distribution Signals | YC W26 Launch page (35 upvotes, Feb 2026); YC tweet ~176K views (Feb 24, 2026); no Product Hunt listing found |
| Emails | michael@aurorincad.com (YC page), contact@aurorincad.com (company website) |
