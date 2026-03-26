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

**Problem:** Creating accurate educational animations is slow and expensive. The company states that "a single 60-second explainer can take days" using tools like Manim, After Effects, or Remotion (laminalabs.ai). These tools require coding expertise (Manim, Remotion) or deep motion-graphics skill (After Effects). Existing AI video generators produce non-deterministic output prone to visual hallucinations, making them unsuitable for STEM content where mathematical precision matters (laminalabs.ai). The company states: "Billions are going into Hollywood-style AI video. Nearly no one builds animation designed for educational explanation" (laminalabs.ai).

**Approach:** The product, named **Pictor**, generates explainer videos from a single text prompt in under 8 seconds (laminalabs.ai). The company claims "No hallucinations. No approximations. Every frame is mathematically precise and deterministic" (laminalabs.ai). [Inferred]: This likely involves a rendering pipeline that converts text to structured scene descriptions and then to mathematically computed animations, rather than using diffusion-based generative models.

**Differentiation:**
- vs. **Manim** (open-source, ~35.8K GitHub stars (GitHub)): Manim requires Python scripting; Lamina replaces coding with a text prompt while targeting equivalent mathematical precision.
- vs. **Knowlify** (YC S25, $3M raised (American Bazaar Online, Oct 2025)): Knowlify generates explainer videos in "minutes"; Lamina claims under 8 seconds. Knowlify targets corporate training; Lamina targets education. Knowlify does not emphasize determinism or mathematical precision.
- vs. **Vyond** ($50M raised, ~$35M ARR (GetLatka, Sep 2025)): Template-based animation with AI assist ("less than a minute" generation). Corporate L&D focus, not STEM-precise.
- vs. **Synthesia/HeyGen/Runway**: Avatar-based or cinematic generative video; different product category entirely.

**Business Model:** No pricing page found on the website (laminalabs.ai). [Inferred]: Most likely monetization path is a SaaS subscription (per-seat or usage-based) targeting educators and course creators, given the stated audience of "educators, course creators, and individuals."

**TAM/SAM:**
- EdTech Animation Market: $110.6B (2024) growing to $518.2B by 2034 at 16.7% CAGR (Market.us, 2025 via search snippet).
- Explainer Video Animation Software Market: $3.83B (2024) growing to $11.63B by 2032 at 14% CAGR (Credence Research via search snippet).
- AI in Education Market: $7.05B (2025) growing to $41B by 2030 at 42.8% CAGR (MarketsandMarkets via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is product-led growth targeting individual educators and course creators, with viral loops from generated video content. Sudip Rokaya's LinkedIn post about cold-emailing YC's student credits program and using AI tools as "force-multipliers" suggests a bottom-up, lean distribution strategy (LinkedIn, Sudip Rokaya).

## Defensibility

- **Deterministic rendering pipeline:** The core claim of mathematically precise, hallucination-free animation output differentiates from generative/probabilistic approaches used by competitors (laminalabs.ai). [Inferred]: If the pipeline produces verifiably correct STEM visualizations, this represents meaningful technical complexity that is harder to replicate than wrapping a generative model.
- **Speed:** Under 8 seconds vs. minutes (Knowlify) or hours/days (Manim, After Effects) (laminalabs.ai). [Inferred]: Achieving both speed and deterministic correctness simultaneously likely requires a purpose-built rendering engine, creating switching costs for users who build workflows around it.

**Market structure:** [Inferred]: Major AI video incumbents (Synthesia, HeyGen, Runway) are optimized for avatar/cinematic video using diffusion-based models. Pivoting to deterministic mathematical animation would require a fundamentally different rendering architecture, creating technical incompatibility with their existing approach. However, no structural barrier prevents a new entrant from replicating this approach.

**Commoditization risk:** Manim is open-source and well-established; an AI wrapper around Manim could approximate Lamina's value proposition. LLM providers (OpenAI, Anthropic) could add structured animation to their output modalities. [Inferred]: The barrier is execution speed and the quality of the text-to-scene-description conversion, not the rendering itself.

## Market & Traction

**Traction signals:**
- Product stage: waitlist/early access (laminalabs.ai).
- No public revenue, user counts, or growth metrics found.
- Sudip Rokaya LinkedIn post announcing MIT departure and Lamina Labs: 1,375 reactions, 202 comments (LinkedIn).
- Second LinkedIn post on building deep tech: 288 likes, 45 comments; profile shows 3,840 followers (LinkedIn).
- Company Twitter/X: @laminalabs — follower count not retrievable (YC page).
- Company LinkedIn: linkedin.com/company/lamina-labs/about/ — follower count not retrievable (YC page).
- Instagram: at least one post confirmed (instagram.com/p/DV2b1xokw3p/) — content not extractable.
- Product Hunt: no listing found.
- YC job postings: 0 (YC page).
- Press coverage: none found beyond Nepali community coverage of founders' YC acceptance (Facebook, Routine of Nepal Banda).

**Competitive landscape:**

| Competitor | Funding | Revenue | Key Difference vs. Lamina |
|---|---|---|---|
| Knowlify (YC S25) | $3M (American Bazaar Online, Oct 2025) | 200K+ videos generated; revenue unknown | Corporate focus, minutes not seconds, no math precision |
| Vyond | $50M Series C (PeakSpan, Apr 2021) | ~$35M ARR (GetLatka, Sep 2025) | Template-based, corporate L&D, not deterministic STEM |
| Steve.AI | Unfunded/bootstrapped | Revenue unknown; 5M+ users (steve.ai) | General-purpose animated video, not education/STEM specific |
| Manim (OSS) | N/A | N/A (free) | Code-first Python; quality benchmark but hours/days to author |
| Synthesia | $536M total; $200M Series E at $4B (TechCrunch, Jan 2026) | $150M+ ARR (Sacra, late 2025) | Avatar video, not animation; enterprise training (adjacent) |

**Why now:**
- [Inferred]: LLM capability improvements in 2024-2025 crossed a threshold enabling reliable text-to-structured-scene-description conversion, which is the key technical enabler for text-prompt-to-deterministic-animation.
- AI in Education spending is accelerating: $7.05B (2025) at 42.8% CAGR (MarketsandMarkets via search snippet).
- Sudip Rokaya noted using Claude Code and Codex as development force-multipliers, suggesting AI coding tools now enable a 2-person team to build infrastructure that previously required larger teams (LinkedIn).

## Founders & Team

**Sudip Rokaya** — Co-founder
- MIT, Computer Science & Mathematics (on leave) (YC page, LinkedIn).
- Originally from Humla, Nepal; admitted to MIT at age 19 (Routine of Nepal Banda / @RONBupdates, Mar 2024).
- Claims to be the youngest Nepalese founder accepted to YC; describes the team as "the first fully Nepalese founding duo accepted by YC" (LinkedIn).
- Twitter/X: @itsrealranky — follower count not retrievable due to platform restrictions.
- LinkedIn: linkedin.com/in/sudip-rokaya-675604279 — 3,840 followers, 500+ connections (LinkedIn).
- GitHub: github.com/itsrealranky — "ghostclaw" (smallest/fastest OpenClaw implementation, C++, 20 stars, 30+ AI provider integrations); "Autolab" (population-based LLM research, 1 star) (GitHub).
- Academic research on geometry co-authored with Prakash Pant, Abhishek Subedi, and Aryan Sigdel (Academia.edu).

**Rohan Bhattarai** — Co-founder
- California Institute of Technology (Caltech), Physics, Sept 2023–June 2027 (LinkedIn).
- Originally from Butwal, Nepal.
- Published co-author: "Cryoscope: A Cryogenic Infrared Survey Telescope in Antarctica" (arXiv:2502.06950, IOPscience/PASP, Mar 2025).
- Caltech Y Studenski Memorial Award (2025); George W. Housner Student Discovery Fund (2024) for geophysics research supervised by Prof. Jean-Philippe Avouac (LinkedIn).
- Honorable Mention, International Olympiad on Astronomy and Astrophysics (2022); Rank 3, National Physics-Mathematics Olympiad (2021); Bronze Medal, 19th International Computer Olympiad (2018) (LinkedIn).
- Machine Learning for Fundamental Physics certification, UC Berkeley (2025) (LinkedIn).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/rohan-bhattarai-0ab812169 — 563 followers (LinkedIn).
- GitHub: No confirmed public repos found. Possible handle github.com/KernelTimes (Nepal-based, matching bio) but 0 public repos.

**Co-founder relationship:** Both founders are Nepalese. Sudip described them as "the first fully Nepalese founding duo accepted by YC" (LinkedIn). No shared employer or university identified from available data.

**Founder-market fit:** Sudip brings CS/AI engineering from MIT with demonstrated systems-level programming (ghostclaw, LLM research). Rohan brings physics and mathematical precision from Caltech with published astrophysics research and olympiad credentials in physics, math, and computing. [Inferred]: The combination of AI/systems engineering (Sudip) and deep physics/math domain expertise (Rohan) maps directly to the product's core challenge: generating mathematically precise animations from natural language.

## Key Risks

**Name confusion with multiple "Lamina" entities:** At least 5 entities share similar names: Lamin Labs (biology, also YC-backed), LAMINA1 (blockchain), Lamina Technologies (Swiss manufacturing), laminalabs.app (German Android dev firm), and Lamina on Product Hunt (2018 AI API). This creates brand confusion risk in search, press, and investor discovery.

**Knowlify as a funded, ahead-of-schedule competitor:** Knowlify (YC S25) raised $3M and has generated 200,000+ videos (American Bazaar Online, Oct 2025). While positioned for corporate rather than education, a pivot toward education would directly overlap. Knowlify has a ~6-month head start in market and a larger team (6 vs. 2).

**LLM-wrapper commoditization:** The text-to-animation pipeline depends on LLM capabilities for scene understanding. As LLMs improve, competing wrappers around Manim or custom renderers could replicate the approach. OpenAI, Google, or Anthropic adding structured visual output to their models could disintermediate the text-understanding layer.

**Both founders are undergraduate students on leave:** Sudip is on leave from MIT; Rohan is enrolled at Caltech through June 2027 (LinkedIn). Managing a YC startup while navigating academic commitments introduces competing demands.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $110.6B EdTech Animation (Market.us, 2025, 16.7% CAGR via search snippet); $3.83B Explainer Video Animation Software (Credence Research, 2024, 14% CAGR via search snippet) |
| SAM | No public data found |
| Traction | No public user/revenue metrics; product in waitlist stage (laminalabs.ai); founder LinkedIn post: 1,375 reactions (LinkedIn) |
| Revenue Signal | No public data found |
| Founders | Sudip Rokaya (Co-founder): MIT CS & Math, ghostclaw OSS project (20 GitHub stars). Rohan Bhattarai (Co-founder): Caltech Physics, published astrophysics researcher, olympiad medalist |
| Competitors | Knowlify ($3M raised, revenue unknown, corporate explainer focus) (American Bazaar Online, Oct 2025); Vyond ($50M raised, ~$35M ARR, template-based L&D) (GetLatka, Sep 2025); Steve.AI (unfunded, 5M+ users, general-purpose) (steve.ai); Manim (OSS, 35.8K GitHub stars, code-first benchmark) (GitHub) |
| Moat Signals | No public data found |
| Risk Factors | Name confusion with 5+ similar entities, Knowlify competitive overlap, LLM-wrapper commoditization |
| Founder Reach | Sudip Rokaya: Twitter @itsrealranky (count not retrievable), LinkedIn 3,840 followers, GitHub 21 stars total (LinkedIn, GitHub). Rohan Bhattarai: Twitter not found, LinkedIn 563 followers, GitHub not confirmed (LinkedIn) |
| Distribution Signals | No public data found |
| Emails | sudip@laminalabs.ai (laminalabs.ai) |
