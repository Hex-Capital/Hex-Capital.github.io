# Aurorin CAD

> Claude Code for Mechanical Engineering CAD

| Field | Value |
|-------|-------|
| Website | https://aurorincad.com |
| YC Page | https://www.ycombinator.com/companies/aurorin-cad |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Hard Tech, Hardware, B2B, AI |
| YC Partner | Jared Friedman |
| Emails | michael@aurorincad.com, contact@aurorincad.com |

## The Idea

**Problem:** Mechanical engineers spend significant time waiting on legacy CAD software and performing repetitive, multi-step design operations. Nearly all major CAD programs (SolidWorks, NX, Creo, CATIA, Fusion 360, Onshape) rely on the same few underlying geometric kernels originally built in the 1980s (company website). It is common for these programs to take up to 4 hours to open large assemblies (YC launch page). Engineers today use these legacy tools because no modern alternative with equivalent parametric modeling capability exists.

**Approach:** Aurorin is building a fully new CAD application from scratch, with two core technical bets: (1) a custom parametric and B-Rep (boundary representation) CAD kernel optimized for modern CPUs and GPUs, delivering dramatically faster file opens and operations; and (2) a tightly integrated AI agent that enables hybrid design via both traditional UI editing and a conversational chat interface (company website; YC launch page). The company claims a part that takes an experienced SolidWorks user 20 minutes can be created in seconds in Aurorin (YC company page).

**Differentiation:** Unlike AI-layer startups such as Adam (YC W25) or Zoo, which build AI features on top of existing CAD kernels or file formats, Aurorin is writing the entire CAD kernel and application from the ground up. YC partner Jared Friedman noted: "What's interesting about Aurorin is that instead of building an AI chat plugin for existing CAD software, they're building new CAD software from scratch. This would have been impossible before AI coding got good, because Solidworks is 10M lines of code. But it is now plausible" (X post, @snowmaker via search snippet). Shapr3D built its own UI but runs on Siemens' Parasolid kernel; Onshape is cloud-native but also uses Parasolid. Aurorin's custom kernel allows deeper AI integration and GPU acceleration than bolt-on approaches permit.

**Business Model:** The software is currently available as a free download for Mac and Windows (company website). No pricing tiers, subscription plans, or revenue figures are publicly listed. [Inferred]: Most likely monetization path is a freemium-to-paid SaaS subscription model (per-seat or per-team), consistent with the cloud/desktop CAD industry norm (e.g., Onshape at ~$1,500/seat/year, Fusion 360 at ~$545/year).

**TAM/SAM:** The global 3D CAD software market was estimated at approximately $12.47 billion in 2025, with a projected CAGR of 5.45–7.24% reaching $16.25–$18.36 billion by 2030 (Mordor Intelligence, 2025 via search snippet; Fortune Business Insights, 2025 via search snippet). No public SAM estimate specific to AI-native mechanical CAD was found. [Inferred]: The serviceable segment would include professional mechanical engineering seats currently held by SolidWorks (~3.2M licensed seats historically cited by Dassault), Creo, and NX, representing a meaningful subset of the broader CAD TAM.

**GTM / Distribution:** The YC launch page requests feedback from "hardware companies interested in rapid prototyping" and "design engineers" (YC launch page). The product is available as a free direct download. [Inferred]: Most likely initial distribution is bottoms-up adoption by individual mechanical engineers, followed by team-level expansion within hardware companies — consistent with the approach used by Onshape and Shapr3D.

## Defensibility

**Custom CAD kernel as technical moat:** Building a parametric B-Rep CAD kernel from scratch is a multi-year engineering effort. SolidWorks comprises approximately 10 million lines of code (Jared Friedman, X post via search snippet). This represents a significant barrier to fast-followers attempting to replicate the full-stack approach.

**AI-native architecture:** Because Aurorin controls the kernel, the AI agent can operate at a lower level of abstraction than bolt-on AI tools, potentially enabling operations that are structurally impossible for plugins built atop legacy kernels. This advantage compounds as the AI capabilities deepen.

**Market structure:** Incumbents (Dassault/SolidWorks, Siemens/NX, PTC/Creo) face business model cannibalization risk: their legacy perpetual-license and maintenance-fee revenue streams, plus extensive VAR (value-added reseller) channel dependencies, create structural disincentives to rebuild their kernels from scratch. Autodesk's Fusion 360 is the closest incumbent attempt at modernization, but it still uses legacy kernel components. PTC acquired Onshape for $470M in 2019 rather than rebuilding internally, illustrating the difficulty of ground-up kernel development within large organizations.

**Commoditization risk:** Several startups are pursuing AI-enhanced CAD: Zoo ($5.12M raised) offers open-source text-to-CAD; Adam (YC W25, $4.1M raised) is building an AI copilot starting with Onshape integration. However, none of these competitors are building a full custom kernel — they layer AI on existing geometry engines. A well-funded new entrant with both kernel engineering and AI talent could attempt a similar full-stack approach, but the combination of CAD kernel expertise and AI capability is rare.

## Market & Traction

**Traction signals:**
- YC Launch page: 37 upvotes (YC Launches, ~Feb 24, 2026)
- Product availability: Free download for Mac and Windows (company website)
- YC backing confirmed: $500K seed from Y Combinator, January 2026 (Tracxn via search snippet)
- Demo video published: https://youtu.be/BkNunCBk_3o (YC launch page)
- Y Combinator official account promoted the launch on X (X post, @ycombinator via search snippet)
- Twitter/X: @AurorinCAD (company account) — follower count not retrievable due to JavaScript rendering
- Twitter/X: @NominalAviator (founder account) — follower count not retrievable
- LinkedIn: Company page exists at linkedin.com/company/aurorin-cad — follower count not retrievable
- No Product Hunt listing found
- No Discord/Slack community found
- No app store ratings, Chrome extension, or web traffic estimates found
- No public user counts, revenue figures, or waitlist numbers found

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Aurorin |
|---|---|---|
| **Zoo** (fka KittyCAD) | $5.12M seed (Tracxn via search snippet) | Open-source text-to-CAD platform; builds on its own infrastructure layer but does not offer a full parametric modeling UI. Revenue unknown. |
| **Adam** (YC W25) | $4.1M seed (TechCrunch, Oct 2025) | AI copilot / text-to-3D tool that integrates with existing CAD programs (starting with Onshape); does not build its own kernel. Generated 10M+ social media impressions at launch (TechCrunch, Oct 2025). Revenue unknown. |
| **Shapr3D** | ~$7.3–$8.67M total (Tracxn via search snippet) | Multi-platform CAD app (iPad, Mac, Windows) with modern UX, but runs on Siemens Parasolid kernel rather than a custom one. Freemium subscription model. Revenue unknown. |
| **Onshape** (PTC) | Acquired by PTC for $470M in 2019 | Cloud-native SaaS CAD with real-time collaboration; uses Parasolid kernel. Part of PTC's $2.49B ARR portfolio (PTC Q1 FY2026 earnings via search snippet). Most directly comparable cloud-native CAD, but not AI-native. |
| **SolidWorks** (Dassault) | N/A (Dassault Systèmes, publicly traded) | Industry-standard desktop CAD with the largest installed base; legacy kernel and architecture. Adding AI features incrementally (AURA AI assistant). |

**Why now:**
- AI coding capabilities have crossed a threshold that makes building a multi-million-line CAD application from scratch plausible for a small team — a task previously requiring hundreds of engineers over years. Jared Friedman explicitly identified this as the enabling change (X post, @snowmaker via search snippet).
- LLM-based agents have reached sufficient capability to serve as useful design copilots for parametric CAD operations, enabling the "chat to design" paradigm.
- [Inferred]: GPU compute costs have fallen and GPU programming models (CUDA, Metal, Vulkan) have matured, making it feasible for a startup to build a GPU-accelerated geometric kernel that would have been cost-prohibitive earlier.

## Founders & Team

**Michael Andrew Baron** — Solo Founder & CEO
- Previously interned at SpaceX three times, working on Raptor combustion simulation, Dragon Guidance, Navigation & Control, and Starshield flight software (YC company page; LinkedIn via search snippet)
- Interned at Apple, working on GPU driver performance optimization (YC company page)
- Education: No university degree publicly listed. LinkedIn lists Y Combinator as education (LinkedIn search snippet). One search result notes "since graduating high school, SpaceX was exactly what he wanted to do" (search snippet).
- Twitter/X: @NominalAviator — follower count not retrievable due to JavaScript rendering
- LinkedIn: linkedin.com/in/michael-andrew-baron — 500+ connections (LinkedIn via search snippet)
- GitHub: No confirmed public GitHub account found matching this founder (a "michael-baron" profile on GitHub belongs to a different individual at Perforce in the UK)

**Co-founder relationship:** N/A — solo founder.

**Founder-market fit:** Michael Baron has direct aerospace engineering and GPU programming experience from SpaceX and Apple, respectively. The SpaceX background provides exposure to complex 3D CAD workflows (rocket and spacecraft design) and the pain points of legacy CAD tools in demanding engineering environments. The Apple GPU driver work provides relevant technical foundation for building a GPU-accelerated CAD kernel. No advisors, board members, or notable angel investors beyond YC have been publicly identified.

## Key Risks

**Solo founder with monumental engineering scope:** Building a full CAD kernel plus AI agent plus production-grade UI is among the most technically ambitious undertakings a startup can attempt. SolidWorks comprises ~10M lines of code built over decades by large teams (Jared Friedman, X post via search snippet). A single founder must either recruit a strong engineering team quickly or demonstrate that AI-assisted development can compress the required effort by orders of magnitude. No hiring activity is currently indicated (team size: 1, not hiring per YC page).

**CAD kernel completeness and reliability:** Professional mechanical engineers require extremely high geometric precision, robust constraint solvers, and broad file format interoperability (STEP, IGES, DXF, native SolidWorks/NX formats). Any gaps in kernel completeness — missing features like sheet metal, surfacing, mold design, or FEA integration — will limit adoption to early-stage prototyping rather than production engineering workflows. No public information exists on current feature coverage.

**Enterprise sales cycle and switching costs:** CAD replacement in engineering organizations involves retraining, file migration, PLM/PDM integration, and regulatory compliance (especially in aerospace and automotive). These switching costs create long sales cycles and high inertia. The product would need to demonstrate not just speed advantages but also feature parity with critical incumbent capabilities to win enterprise adoption.

**Competitive convergence from AI-layer startups:** Adam, Zoo, and others are approaching the AI-for-CAD market from the plugin/integration side. If these companies gain traction and mindshare first, Aurorin's full-stack approach may face an uphill battle for user attention, even if technically superior. Adam has already raised $4.1M and generated 10M+ social media impressions (TechCrunch, Oct 2025).

**No visible traction or revenue:** No user counts, downloads, revenue, paying customers, or waitlist numbers are publicly available. The product is offered as a free download with no visible monetization. At this stage this is expected, but the absence of any public traction signal makes it impossible to assess product-market fit.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | ~$12.47B global 3D CAD software market in 2025, growing at 5.45–7.24% CAGR to $16–18B by 2030 (Mordor Intelligence; Fortune Business Insights, 2025 via search snippets) |
| SAM | No public data found |
| Traction | 37 upvotes on YC Launch page (~Feb 24, 2026); free download available for Mac and Windows (company website); $500K YC funding (Tracxn via search snippet) |
| Revenue Signal | No public data found. Product is currently free to download. |
| Founders | Michael Andrew Baron (Solo Founder & CEO): 3x SpaceX intern (Raptor, Dragon GNC, Starshield), Apple intern (GPU drivers) |
| Competitors | Zoo ($5.12M raised, revenue unknown, open-source text-to-CAD vs. Aurorin's full-stack native app); Adam ($4.1M raised, revenue unknown, AI copilot plugin for existing CAD vs. Aurorin's custom kernel); Shapr3D ($7–9M raised, revenue unknown, modern UX on Parasolid kernel vs. Aurorin's custom kernel); Onshape/PTC (acquired $470M, cloud-native but legacy kernel); SolidWorks/Dassault (incumbent, largest installed base) |
| Moat Signals | Custom parametric B-Rep CAD kernel (ground-up build); AI-native architecture enabling deeper integration than plugin approaches; multi-year engineering barrier to replication |
| Risk Factors | Solo founder tackling massive engineering scope; CAD kernel completeness for production use; enterprise switching costs and long sales cycles |
| Founder Reach | Michael Baron: Twitter @NominalAviator (count not retrievable), LinkedIn 500+ connections, GitHub not confirmed |
| Distribution Signals | YC Launch page (37 upvotes); YC official X account promotion; free download on company website. No Product Hunt listing, app store, or Chrome extension found. |
| Emails | michael@aurorincad.com, contact@aurorincad.com |
