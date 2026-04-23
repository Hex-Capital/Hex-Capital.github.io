# Lamina Labs

> Visual infrastructure for EdTech AI applications

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
| Emails | founder@laminalabs.ai |

## The Idea

**Problem:** Creating visual educational content (animated explainers, whiteboard-style walkthroughs) is slow and expensive. Traditional tools like Manim (the open-source Python library used by 3Blue1Brown) require programming expertise; After Effects and similar tools require design skills. Educators, students, and course creators who want step-by-step visual explanations must either invest significant time in manual animation or pay for professional production. The company's website states: "the only way to learn a difficult thing is to watch someone else draw it" (laminalabs.ai).

**Approach:** Lamina Labs' product, Simi (previously called Pictor), converts a single text prompt into a whiteboard-style animated explainer video in seconds (laminalabs.ai). The system generates deterministic animations described as "mathematically precise," prioritizing accuracy over cinematic polish (Facebook/Nepali media posts via search snippet). The workflow is: type a prompt → Simi generates the animation → watch → share. The product is accessible at app.laminalabs.ai and is currently waitlist-gated (laminalabs.ai).

**Differentiation:** Versus Manim (open-source): Simi requires no code — prompt-to-video vs. Python scripting. Versus Knowlify (YC S25, $3M seed): Knowlify targets enterprise teams for training/product explainer videos from uploaded documents; Lamina Labs targets educational content with whiteboard-style step-by-step animations (YC page, Knowlify YC page). Versus TMA.live: TMA.live also generates 3Blue1Brown-style videos using Manim + LLMs but faced accuracy issues noted by Hacker News commenters (93 upvotes, 46 comments; HN, Jan 2025). Lamina Labs emphasizes deterministic, mathematically precise output rather than LLM-generated Manim code. Versus Synthesia/HeyGen/Colossyan: those platforms focus on avatar-based talking-head videos for enterprise communications rather than step-by-step educational diagramming.

**Business Model:** No pricing page found on laminalabs.ai. The product is currently in waitlist-based early access. [Inferred]: Most likely monetization path is a SaaS subscription model (freemium or tiered), given the B2B EdTech positioning and the precedent set by competitors like Knowlify and Synthesia.

**TAM/SAM:**
- AI in education market: $5.88B in 2024, projected $32.27B by 2030, CAGR 31.2% (Grand View Research via search snippet)
- Generative AI in EdTech: $0.53B in 2025, projected $2.24B by 2029, CAGR 43.7% (Research and Markets via search snippet)
- Educational video licensing market: $3.99B in 2025, growing to $4.62B in 2026 at 15.9% CAGR (GlobeNewsWire, Mar 2026 via search snippet)

**GTM / Distribution:** The website offers a "Get Started" flow directing to app.laminalabs.ai with a waitlist. The company also offers a "Book a Call" page, suggesting a sales-assisted motion for larger accounts (laminalabs.ai). [Inferred]: Initial distribution likely through direct outreach to EdTech platforms and educational institutions, leveraging YC network and the MIT/education community.

## Defensibility

- **Speed:** An X/Twitter user (@aaronsiim) described Lamina Labs delivering a whiteboard explainer in 11 seconds while competitors took 15+ minutes (X.com via search snippet). Speed advantage implies a custom rendering pipeline rather than off-the-shelf Manim + LLM approach.
- **Deterministic accuracy:** The company emphasizes mathematically precise, deterministic animation — a direct response to the accuracy problems plaguing LLM-to-Manim competitors like TMA.live (HN discussion, Jan 2025).
- [Inferred]: Potential moat could develop via a proprietary animation engine optimized for educational content and an accumulating dataset of prompt-to-animation mappings, but this is unproven at this stage.

**Market structure:** Synthesia ($4B valuation, $146M ARR; Synthesia blog, Jan 2026) and HeyGen (~$95M ARR; Sacra, Sep 2025) dominate avatar-based enterprise video but serve a different use case (corporate communications, not step-by-step educational diagramming). [Inferred]: These incumbents' product architecture (avatar/talking-head video) and enterprise GTM do not naturally extend to whiteboard-style educational animation, creating a structural gap rather than direct competition.

**Commoditization risk:** The approach of prompt-to-educational-animation is being attempted by multiple startups (TMA.live, Knowlify, Leap MCP tool) and is achievable by combining open-source Manim with commercial LLMs. The barrier is accuracy and speed at scale, not conceptual novelty.

## Market & Traction

**Traction signals:**
- Currently waitlist-based; the company uses waitlist responses to decide onboarding order (laminalabs.ai)
- No public user counts, revenue, or download numbers found
- YouTube channel exists: @LaminaLabs (youtube.com) — no subscriber count retrievable
- Company Twitter/X: @laminalabs (YC page) — follower count not retrievable
- Company LinkedIn: lamina-labs (YC page) — follower count not retrievable
- Founder Twitter/X: @mk314k (Kartikesh Mishra), @itsrealranky (Sudip Rokaya) — counts not retrievable
- X post from @aaronsiim praised 11-second generation speed (X.com via search snippet)
- Featured on f4.fund startup directory (f4.fund/startups/laminalabs)
- Listed on Dealroom (app.dealroom.co/companies/lamina_labs) and Crunchbase (crunchbase.com/organization/lamina-labs)
- 0 open job postings (YC page)
- Product renamed from Pictor to Simi at an unconfirmed date, indicating iteration

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Lamina Labs |
|---|---|---|---|
| Knowlify (YC S25) | $3M seed (American Bazaar, Oct 2025) | Revenue unknown | Enterprise focus; document-to-video; customers include Google, Amazon teams (Knowlify YC launch page) |
| Synthesia | $530M+ total, $4B valuation (Synthesia blog, Jan 2026) | $146M ARR (Sep 2025; Sacra) | Avatar-based talking-head video, not educational diagramming |
| TMA.live | No public data found | No public data found | Manim-based 3B1B-style; accuracy issues noted (HN, Jan 2025) |
| Colossyan | $22M Series A (2023 via search snippet) | Revenue unknown | Education/SMB avatar video; more polished UX vs. whiteboard style |
| VidRush | No public data found | No public data found | YouTube long-form video production; $99/mo pricing (vidrush.ai) |

**Why now:** [Inferred]: The catalyst is the convergence of LLM capability improvements (GPT-4, Claude, Gemini enabling reliable structured output for animation parameters) with the cost collapse of inference, making real-time prompt-to-animation feasible at consumer-grade price points. The 3Blue1Brown style of visual education has proven massive audience demand (YouTube channel: 6M+ subscribers), but the creation tooling has remained code-heavy until 2024–2025.

## Founders & Team

**Kartikesh Mishra** — Co-founder
- MIT BS '24 (Computer Science & Engineering and Mathematics), MIT MEng '25 (YC page)
- Research at MIT CSAIL under Prof. Daniela Rus on drone natural language command-following using images and reinforcement learning (GitHub search results via search snippet)
- Teaching assistant for ML and Computer Vision courses at MIT; mentored high school students via Momentum AI (GitHub search results via search snippet)
- Twitter/X: @mk314k — follower count not retrievable
- LinkedIn: linkedin.com/in/mk314k — "MIT BS '24, MEng '25 | CSE and Mathematics | Software Developer | ML Researcher" (LinkedIn via search snippet)
- GitHub: github.com/mk314k — 17 followers; notable projects include 3DAttnVAE-GAN (VAE-GAN for 3D shape from 2D images), Gemini-Hack-2025-SpecForge (GitHub)

**Sudip Rokaya** — Co-founder
- MIT CS & Math (on leave) (YC page)
- From Nepal; accepted to MIT for undergraduate education (Facebook/NASO Nepal post via search snippet)
- Previously: Co-Founder at Harmonic (Whitebridge.AI via search snippet)
- LinkedIn post: "Leaving MIT to build the next generation" (LinkedIn, via search snippet)
- Twitter/X: @itsrealranky — follower count not retrievable
- LinkedIn: linkedin.com/in/sudip-rokaya-675604279 — listed as "CEO - Stealth Startup" / Lamina Labs (LinkedIn via search snippet)
- GitHub: github.com/itsrealranky — ghostclaw repo ("Grandfather of Openclaw," AI agent project) (GitHub)

**Additional team context:** Multiple Nepali media posts reference "Sudip Rokaya from MIT and Rohan Bhattarai from Caltech" in connection with Lamina Labs and YC acceptance (Facebook/Nepali media via search snippet). Rohan Bhattarai is not listed as a founder on the YC page (which lists only Kartikesh Mishra and Sudip Rokaya), but may be a team member or advisor. His LinkedIn indicates a Caltech affiliation (LinkedIn via search snippet).

**Co-founder relationship:** Both Kartikesh Mishra and Sudip Rokaya attended MIT, with overlapping time periods (Kartikesh BS '24 / MEng '25; Sudip on leave from MIT CS & Math), indicating they likely met at MIT.

**Founder-market fit:** Both founders have MIT computer science backgrounds with coursework and research relevant to ML, computer vision, and 3D/visual generation — directly applicable to building an AI animation engine. Kartikesh's CSAIL research on visual-language models and his 3D shape generation project align with the visual infrastructure challenge. Sudip's prior startup experience (Harmonic) provides entrepreneurial context.

## Key Risks

**Commoditization via LLM + Manim stacks:** Multiple projects (TMA.live, Leap, MathMatrixMovies) already combine open-source Manim with commercial LLMs to achieve similar prompt-to-animation output. If the deterministic accuracy advantage does not hold or cannot be sustained, the product becomes one of many wrappers. Mitigation: the company claims a proprietary rendering approach emphasizing speed and mathematical precision.

**Knowlify competitive overlap:** Knowlify (YC S25) raised $3M, has enterprise customers (Google, Amazon, Supabase teams), and targets a similar space — AI-generated explainer videos from prompts/documents (American Bazaar, Oct 2025). Knowlify's head start in funding, batch timing, and enterprise traction creates direct competitive pressure. Mitigation: Lamina Labs' whiteboard/educational focus may differentiate from Knowlify's enterprise training focus.

**Name confusion with Lamin Labs:** "Lamin Labs" (lamin.ai, YC S22) is a separate, well-established company building open-source data infrastructure for biology with significant GitHub presence. Search results frequently conflate the two. This could cause discoverability and branding challenges.

**Product pivot signal:** The product was previously called Pictor and has been renamed to Simi, with the tagline shifting. Frequent renaming at pre-seed can indicate ongoing product-market fit exploration. The prior product description ("high-quality explainer videos in under 8 seconds") differs from the current framing ("whiteboard-style explainer videos").

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI in education: $5.88B (2024), projected $32.27B by 2030, CAGR 31.2% (Grand View Research via search snippet) |
| SAM | Generative AI in EdTech: $0.53B (2025), projected $2.24B by 2029, CAGR 43.7% (Research and Markets via search snippet) |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Kartikesh Mishra (Co-founder): MIT BS '24 / MEng '25, CSAIL ML research. Sudip Rokaya (Co-founder): MIT CS & Math (on leave), prev. Co-founder at Harmonic |
| Competitors | Knowlify ($3M seed, revenue unknown, enterprise doc-to-video; American Bazaar, Oct 2025), Synthesia ($530M+ raised, $146M ARR, avatar enterprise video; Sacra/Synthesia blog), TMA.live (funding unknown, revenue unknown, Manim-based 3B1B-style; HN Jan 2025), Colossyan ($22M Series A, revenue unknown, education/SMB avatar video; search snippet) |
| Moat Signals | No public data found |
| Risk Factors | Commoditization via open-source Manim + LLM stacks, direct competition from better-funded Knowlify (YC S25), brand confusion with Lamin Labs (YC S22) |
| Founder Reach | No public data found (Twitter/LinkedIn follower counts not retrievable for either founder or company accounts) |
| Distribution Signals | No public data found |
| Emails | founder@laminalabs.ai (laminalabs.ai) |
