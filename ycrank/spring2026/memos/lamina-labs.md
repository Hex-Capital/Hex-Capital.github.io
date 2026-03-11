# Lamina Labs

> Fastest deterministic animation infrastructure for EdTech

| Field | Value |
|-------|-------|
| Website | https://laminalabs.ai |
| YC Page | https://www.ycombinator.com/companies/lamina-labs |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | No public data found |
| Tags | Education, Video, Edtech |
| YC Partner | Pete Koomen |
| Emails | sudip@laminalabs.ai |

## The Idea

**Problem:** Educational content creators — students, educators, and course creators — lack tools that produce accurate, visually precise animations for STEM concepts. Existing AI video generators (Runway, Synthesia, HeyGen) use probabilistic/generative models that produce "distorted equations, inconsistent diagrams, and flawed logical progressions" for educational content (LASEV research paper, arXiv 2602.11790v1). Traditional programmatic tools like Manim (created by 3Blue1Brown's Grant Sanderson) produce mathematically precise output but require Python expertise and slow render times. Professional animation in After Effects or Remotion takes days per 60-second explainer. The company's website states: "AI video went cinematic. Education got nothing" (laminalabs.ai).

**Approach:** Lamina Labs' product, Pictor, generates explainer videos from a single text prompt in under 8 seconds (laminalabs.ai). The system uses a deterministic rendering pipeline rather than diffusion-based generative models, claiming "no hallucinations, no approximations — every frame is mathematically precise and deterministic" (laminalabs.ai). The three-step flow is: (1) user types what they want to learn, (2) Pictor generates the animation, (3) user watches and understands.

**Differentiation:** Lamina Labs occupies a gap between three categories of existing solutions:
- *Avatar/talking-head platforms* (Synthesia, HeyGen, Colossyan): designed for corporate L&D with digital presenters, not diagrammatic concept explanation.
- *Generative video models* (Runway, Luma AI): probabilistic pixel-space generation that lacks mathematical precision for STEM content.
- *Programmatic animation tools* (Manim, Remotion): deterministic and precise but require coding skill and slow render cycles.
Pictor combines the deterministic precision of Manim with the accessibility of a natural-language prompt interface and sub-10-second generation times. No funded startup currently combines all three attributes (laminalabs.ai; competitive analysis below).

**Business Model:** No pricing is publicly listed. The website offers a waitlist with "founding user pricing" for early members (laminalabs.ai). [Inferred]: Most likely monetization path is a SaaS subscription model (freemium or tiered) targeting individual educators/students at a low price point and institutions at a higher tier, consistent with EdTech content creation tools in this space.

**TAM/SAM:** The global EdTech market was valued at $334.29B in 2023, projected to reach $738.60B by 2029 at a 14.13% CAGR (Mordor Intelligence via search snippet). The video creation tool market was valued at $7.5B in 2024, projected to reach $15.2B by 2033 at an 8.5% CAGR (Market Research Intellect via search snippet). The EdTech content creation segment specifically is projected to generate $12.46–24.97B by 2035 (Straits Research via search snippet). No company-specific SAM estimate was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is product-led growth targeting individual students and educators via the waitlist, with potential expansion into institutional/enterprise sales to universities and online course platforms. The website positions the product "for educators, course creators, and individuals" (laminalabs.ai), suggesting a bottom-up adoption model.

## Defensibility

The core defensibility signal is the deterministic rendering engine itself — building a system that converts arbitrary natural-language educational prompts into mathematically precise animations in under 8 seconds requires a specialized pipeline distinct from general-purpose generative video models. The company claims engineers from MIT and Caltech built this infrastructure (laminalabs.ai).

**Market structure:** General-purpose AI video incumbents (Runway, Synthesia, HeyGen) have optimized their architectures for probabilistic pixel-space generation. Rebuilding for deterministic, symbolically accurate output represents a fundamentally different technical approach — not an incremental feature addition. Avatar-based platforms (Synthesia, Colossyan) would face modality mismatch: their pipelines render human presenters, not mathematical diagrams and physics simulations. Template-based tools (Animaker, Vyond) lack the AI-native generation capability entirely. Manim Community, the closest philosophical predecessor, is an open-source project without commercial organization or AI-prompt interface.

**Commoditization risk:** Academic research is converging on this approach — LASEV (arXiv 2602.11790v1) constructs "structured executable video scripts deterministically compiled into synchronized visuals," and TeachMaster (arXiv 2601.04204) synthesizes Manim animation scripts via LLMs. A well-resourced AI lab or EdTech company could productize similar research. Large generative video companies could improve mathematical precision over time as model architectures advance. The 8-second speed claim, if sustained as a durable advantage, would require proprietary infrastructure optimizations that are harder to replicate.

## Market & Traction

**Traction signals:** No public traction data found. The product is in waitlist/pre-launch phase (laminalabs.ai). No waitlist count is disclosed. No Product Hunt launch was found. No press coverage in named publications was found. No app store presence, Chrome extension, or download counts were found. No company Twitter/X or LinkedIn page was identified in search results. The YC page lists 0 open jobs (ycombinator.com/companies/lamina-labs). Founded in 2025 (YC page).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Lamina Labs |
|-----------|---------|-------------|-----------------------------------|
| **Synthesia** | $180M Series D, $4B valuation (January 2026) (Synthesia blog) | ~$100M ARR (Sacra, March 2025) | Avatar/talking-head videos for corporate L&D; probabilistic rendering; no mathematical precision |
| **Runway** | $315M Series E, $5.3B valuation (February 2026) (TechCrunch) | Not publicly disclosed | General-purpose generative video; probabilistic pixel-space models; documented failure modes for STEM content |
| **HeyGen** | $60M Series A, $500M valuation (April 2025) (Quantumrun via search snippet) | ~$95M ARR (Quantumrun, September 2025 via search snippet) | Avatar-based video and translation; no diagrammatic animation capability |
| **Animaker** | ~$108K total (Crunchbase via search snippet) | ~$22.4M (Latka, July 2025 via search snippet); 1.5M+ users | Template-based drag-and-drop; manual workflow; not AI-native or deterministic |
| **Vyond** | $51.5M total (Crunchbase via search snippet) | $30–35M ARR (Latka, September 2025 via search snippet) | Character animation templates for corporate training; not programmatic or prompt-driven |
| **Manim** (open-source) | None (community project) | None (free) | Deterministic, mathematically precise — closest conceptual predecessor — but requires Python coding, slow rendering, no NLP interface |

**Why now:** [Inferred]: Several converging factors: (1) LLM capabilities crossed a threshold enabling reliable natural-language-to-code translation, making it feasible to convert text prompts into deterministic animation scripts (validated by academic papers LASEV and TeachMaster, both published 2025–2026); (2) AI video funding nearly doubled YoY to $3.08B in 2025 (Crunchbase, EOY 2025 via search snippet), reflecting investor conviction in the category; (3) the $4B+ invested in generative video (Runway, Synthesia, HeyGen) has conspicuously bypassed educational animation, leaving the segment underserved despite the EdTech market growing at 14%+ CAGR.

## Founders & Team

**Rohan Bhattarai** — Co-founder
- Physics, Caltech (2023–2027) (LinkedIn)
- From Butwal, Nepal (Facebook via search snippet)
- International Olympiad medalist: IOAA 2022 Honorable Mention, National Physics-Mathematics Olympiad Nepal Rank 3 (2021), International Junior Science Olympiad (2019), International Computer Olympiad Bronze (2018) (LinkedIn)
- Research: co-author on Cryoscope cryogenic infrared telescope paper in *Publications of the Astronomical Society of the Pacific* (2025) (arXiv 2502.06950); post-earthquake hydrological modeling with Prof. Jean-Philippe Avouac at Caltech (2024) (LinkedIn); ancient astronomy curriculum development funded by Caltech Y Studenski Memorial Award (2025) (LinkedIn)
- Engineering: built CaltechDATA API-CLI with REST API integration and HPC deployment (GitHub: caltechlibrary/caltechdata_api; NSF Public Access Repository)
- Twitter/X: @RohanBhattarai_ — count not retrievable (X requires JavaScript rendering)
- LinkedIn: linkedin.com/in/rohan-bhattarai-0ab812169/ — 513 followers (LinkedIn)
- GitHub: contributed to github.com/caltechlibrary/caltechdata_api; personal profile not definitively identified

**Sudip Rokaya** — Co-founder
- CS & Mathematics, MIT (2024–2027, currently on leave) (YC page)
- ML Researcher, MIT Graybiel Lab (McGovern Institute for Brain Research) (YC page, LinkedIn)
- From Humla District, Nepal — one of Nepal's most remote regions; MIT admission widely covered in Nepali media (Facebook, X @RONBupdates, March 2024)
- International Olympiad: IOAA 2023 Honorable Mention representing Nepal (NASO)
- LinkedIn title: "CEO - Stealth Startup" (LinkedIn)
- Listed as Co-Founder at "Harmonic" on Whitebridge.AI — unclear if related to Harmonic (harmonic.fun, $75M raise); may be a data aggregation artifact (Whitebridge.AI via search snippet)
- Twitter/X: @itsrealranky — count not retrievable (X requires JavaScript rendering)
- LinkedIn: linkedin.com/in/sudip-rokaya-675604279/ — 500+ connections (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Both founders are from Nepal and both competed in the International Olympiad on Astronomy and Astrophysics (Rohan in 2022, Sudip in 2023), suggesting overlap through Nepal's olympiad training ecosystem (NASO). Both are current undergraduates at elite US technical universities (Caltech and MIT respectively).

**Founder-market fit:** Rohan's physics background at Caltech and research spanning astrophysics, computational modeling, and API engineering provides domain knowledge in both the STEM content being animated and the infrastructure to deliver it. Sudip's CS & Math studies at MIT combined with ML research at the Graybiel Lab provide the machine learning and software engineering foundation. Both founders' olympiad backgrounds in astronomy, physics, and computer science give them firsthand experience with the problem of explaining complex STEM concepts visually. No advisors, board members, or notable investors beyond YC were found.

## Key Risks

**LLM-to-animation fidelity at scale:** The product's core claim is deterministic, mathematically precise animation from arbitrary text prompts. Ensuring correctness across the full breadth of STEM topics (physics, chemistry, biology, mathematics) at production quality represents a significant technical challenge. Academic prototypes (LASEV, TeachMaster) have demonstrated feasibility in narrow domains but not generalized deployment. The gap between demo and reliable product at scale is the primary technical risk.

**Incumbent expansion into educational animation:** Synthesia ($4B valuation, $100M ARR) and Runway ($5.3B valuation) have the resources and distribution to add deterministic/educational animation modes. Runway's Gen 4.5 already targets multi-shot educational content (TechCrunch, February 2026). If generative models improve mathematical precision, Lamina Labs' core differentiator narrows.

**Open-source competition from Manim ecosystem:** Manim Community Edition is actively maintained and could develop an AI-powered natural-language front-end. Grant Sanderson's 3Blue1Brown channel (6M+ YouTube subscribers) provides an existing distribution channel and brand association with precise mathematical animation. A Manim + LLM wrapper project could emerge from the open-source community at any time.

**Brand disambiguation:** Multiple similarly named companies exist: Lamin Labs (YC-backed biology data infrastructure at lamin.ai), LAMINA1 (blockchain/metaverse by Neal Stephenson), Lamina Technologies, Lamina Systems Inc. Search results for "Lamina Labs" return these other entities, creating potential confusion for customers, investors, and press coverage.

**Undergraduate founders with no prior exits:** Both founders are current undergraduates (Sudip on leave from MIT, Rohan at Caltech) with no documented prior startup exits or industry operating experience. While this is common at pre-seed, the absence of enterprise sales or go-to-market experience may slow institutional adoption.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global EdTech market: $334.29B in 2023, projected $738.60B by 2029 at 14.13% CAGR (Mordor Intelligence via search snippet). Video creation tool market: $7.5B in 2024, projected $15.2B by 2033 at 8.5% CAGR (Market Research Intellect via search snippet). |
| SAM | EdTech content creation segment projected $12.46–24.97B by 2035 (Straits Research via search snippet) |
| Traction | No public data found. Product in waitlist/pre-launch phase (laminalabs.ai). |
| Revenue Signal | No public data found. No pricing page; waitlist offers "founding user pricing" (laminalabs.ai). |
| Founders | Rohan Bhattarai (Co-founder): Caltech Physics, international olympiad medalist, published astrophysics researcher. Sudip Rokaya (Co-founder): MIT CS & Math (on leave), ML researcher at MIT Graybiel Lab, international olympiad medalist. |
| Competitors | Synthesia ($180M raised, ~$100M ARR, avatar-based corporate L&D); Runway ($315M Series E, revenue undisclosed, general-purpose generative video); HeyGen ($69M raised, ~$95M ARR, avatar video & translation); Animaker (~$108K raised, ~$22.4M revenue, template-based); Manim (open-source, free, requires coding) |
| Moat Signals | Deterministic rendering pipeline distinct from probabilistic generative models; sub-8-second generation speed claim; MIT/Caltech engineering team |
| Risk Factors | LLM-to-animation fidelity at scale, incumbent expansion into educational animation, open-source Manim ecosystem competition, brand disambiguation |
| Founder Reach | Rohan Bhattarai: Twitter @RohanBhattarai_ (count not retrievable), LinkedIn 513 followers. Sudip Rokaya: Twitter @itsrealranky (count not retrievable), LinkedIn 500+ connections. |
| Distribution Signals | No public data found. No Product Hunt launch, no app store presence, no company social media accounts identified. |
| Emails | sudip@laminalabs.ai |
