# Stage

> Code review platform for today's engineers

| Field | Value |
|-------|-------|
| Website | https://www.stagereview.app/ |
| YC Page | https://www.ycombinator.com/companies/stage |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | Not listed |
| Tags | Developer Tools, SaaS |
| YC Partner | Pete Koomen |
| Emails | No public data found |

## The Idea

**Problem:** Engineering teams shipping AI-generated code are merging changes that "neither they nor their reviewers fully understand," leading to production bugs and cognitive debt (YC company page). Traditional code review tools present unorganized diffs that force reviewers to mentally reconstruct the logic of changes. The customer segment is software engineering teams at companies using AI coding assistants (Copilot, Cursor, Claude Code), where the volume and opacity of code changes has increased. Current tools include GitHub's built-in PR review, GitLab merge requests, and third-party AI reviewers like CodeRabbit and Graphite.

**Approach:** Stage breaks code changes into "structured chapters" rather than presenting raw diffs (YC company page). This organizes a pull request into a narrative sequence so reviewers can understand changes in a logical order rather than file-by-file. The website was not accessible for detailed feature extraction at time of research (JS-rendered SPA returned minimal content).

**Differentiation:** Existing code review tools fall into two categories: (1) traditional diff viewers (GitHub, GitLab) that show file-level changes without narrative structure, and (2) AI-powered reviewers (CodeRabbit, Greptile, Qodo) that auto-generate comments on diffs but still present changes in unstructured form. Stage's "chapters" approach targets the comprehension layer — organizing *how* humans read changes — rather than adding AI commentary on top of existing diff formats. [Inferred]: This positions Stage as complementary to AI reviewers rather than directly competing with them, though AI reviewers may add similar structuring features over time.

**Business Model:** No pricing page was accessible at time of research. [Inferred]: Most likely monetization path is per-seat SaaS subscription (standard for developer tools in this category), potentially with a free tier for small teams/open-source and paid tiers for team features, given the B2B SaaS tags and competitive landscape norms.

**TAM/SAM:**
- Global code review tools market: $1.61B in 2025, projected to $2.46B by 2034 at 6.3% CAGR (IntelMarketResearch, 2026 via search snippet).
- AI code review tools subset: projected $750M in 2025, 9.2% CAGR to 2033 (Virtue Market Research via search snippet).
- Broader estimates range up to $4.0B–$14.0B when including licenses, cloud subscriptions, and professional services (Research and Markets via search snippet).
- [Inferred]: SAM for a tool targeting mid-market and enterprise teams using AI coding assistants is a subset of the broader code review market, likely in the hundreds of millions, but no specific SAM estimate exists for "structured code review" as a category.

**GTM / Distribution:** [Inferred]: Most likely distribution path is bottom-up developer adoption via GitHub/GitLab integrations, given the 2-person team size and developer tool category. YC network provides initial distribution to batch-mates and YC alumni companies. No evidence of enterprise sales motion or channel partnerships at this stage.

## Defensibility

No defensibility signals found in public sources at this stage.

- [Inferred]: Potential moat could develop via (1) workflow lock-in if teams build review processes around the "chapters" paradigm, creating switching costs; (2) data advantage from learning how teams structure and review code, enabling better auto-organization over time. Neither is proven at this stage.

**Market structure:** GitHub (Microsoft) dominates code review as the default PR interface. [Inferred]: GitHub's structural constraint is that reorganizing the diff view into "chapters" would break backwards compatibility with established workflows for 100M+ developers and could disrupt their extension ecosystem. However, GitHub has historically added features incrementally (e.g., suggested changes, code owners), and a "chapters" view could be added as an optional mode without cannibalization — meaning the structural barrier is weak. GitLab and Atlassian (Bitbucket) face similar low barriers to adding structured diff views.

**Commoditization risk:** AI code review is a crowded and rapidly consolidating space. CodeRabbit, Greptile, Qodo, and Anthropic's Claude Code Review all shipped structured review features in 2025–2026. The "chapters" concept is a UX innovation rather than a deep technical moat, making it reproducible by any competitor with front-end engineering resources. The key differentiator would need to be execution quality and user experience rather than the concept itself.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- No Product Hunt launch found for Stage (stagereview.app). A different product named "Stage" (wireframe tool) exists on Product Hunt.
- No press coverage in named publications found.
- No app store listings, Chrome extension installs, or web traffic estimates found.
- Company Twitter/X account: not found. Company LinkedIn: listed on YC page but follower count not retrievable.
- Job postings: 0 active listings (YC company page).
- Website not fully accessible at time of research (JS-rendered SPA).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Stage |
|-----------|---------|-------------|------------------------------|
| **CodeRabbit** | $88M total ($60M Series B, Sep 2025) at $550M valuation (TechCrunch, Sep 2025) | $15M ARR, 8,000+ paying customers (GetLatka, 2025) | AI-generated PR comments with auto-fix suggestions; broad adoption at scale |
| **Graphite** | $81M total, acquired by Cursor Dec 2025 at $290M valuation (Fortune, Dec 2025) | Revenue not disclosed; 500+ companies, 20x growth in 2024 (TechCrunch, Mar 2025) | Stacking workflow (dependent PRs) plus AI review; now integrated into Cursor |
| **Greptile** | ~$45.5M total ($25M Series A, Sep 2025) at $180M valuation (TechCrunch, Jul 2025) | Revenue not disclosed | Codebase-aware AI review — indexes full repo for deeper context |
| **Qodo** (fka CodiumAI) | $120M total ($70M Series B, Mar 2026) (SiliconANGLE, Mar 2026) | $1M+ ARR within 3 months of enterprise launch in 2024 (PRNewswire, Sep 2024) | Multi-agent review architecture combined with AI test generation |

**Why now:**
- AI coding assistants (GitHub Copilot, Cursor, Claude Code) reached mass adoption in 2024–2025, increasing the volume and complexity of code changes per PR (Panto blog, 2026 via search snippet).
- Anthropic launched Claude Code Review as a dedicated multi-agent PR reviewer in March 2026 (search snippet), validating "AI-era code review" as a category.
- Cursor's acquisition of Graphite in December 2025 for $290M (Fortune, Dec 2025) signals that code review is a strategic acquisition target for AI coding platforms.
- [Inferred]: The catalyst is specifically that AI-generated code creates a comprehension gap — reviewers cannot rely on author intent when code is machine-generated, making structured presentation of changes more valuable than in a purely human-authored codebase.

## Founders & Team

**Charles Pan** — Co-founder & CEO
- B.S. Computer Science, Stanford University, Class of 2022 (Stanford Athletics roster).
- Varsity Fencing (Saber) at Stanford; MPSF team champion 2022, MPSF All-Academic (Stanford Athletics).
- Previously: developer at Five Rings; early engineer at Yuzu Health (YC company page).
- Yuzu Health is a next-generation health insurance company backed by top VCs and 10+ unicorn founders (yuzu.health via search snippet).
- Author at The Stanford Daily (Stanford Daily).
- From Livingston, New Jersey; attended Newark Academy (Stanford Athletics).
- Twitter/X: @ceefryingpan (YC company page); follower count not retrievable.
- LinkedIn: linkedin.com/in/charlespan/ — currently shows "Revel Street" (LinkedIn via search snippet); may not yet be updated to reflect Stage.
- GitHub: No public repos found under this name.

**Dean Stratakos** — Co-founder & CTO
- M.S. Computer Science (AI) and B.S. Computer Science (Systems), Stanford University (personal website, dastratakos.github.io).
- Stanford varsity tennis, Division I (Stanford Athletics; Q&A profile, Sep 2020).
- Previously: Software Developer at Five Rings (Aug 2023–present per personal site) — led company-wide AI initiative, built internal coding agent, designed high-performance trading systems in C++ and Python (personal website).
- Internships: Apple (3x — Siri Intelligence, Advanced Computation Group/LiDAR, Platform Triage/ML), Citadel (TCP recovery for trading), Quadric (CNN backend in C++) (personal website).
- Technical skills: Python, C++, TypeScript, Go, Swift, React, Next.js, AWS/Azure/GCP, PyTorch, TensorFlow (personal website).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/dean-stratakos-8b338b149/ (LinkedIn via search).
- GitHub: github.com/dastratakos — 22 followers; repos include Face-Mask-Detection, Photo-Sharing-Web-Application, Optimized-Task-Scheduling (GitHub). No repos with 100+ stars found.

**Co-founder relationship:** Both Charles Pan and Dean Stratakos attended Stanford (Pan BS CS '22; Stratakos BS/MS CS, with varsity athletics overlapping years). Both worked at Five Rings — Pan as a developer and Stratakos as a software developer starting August 2023 (YC company page; personal website). Shared employer and shared university confirm prior professional acquaintance.

**Founder-market fit:** Both founders have direct experience as software engineers at a quantitative trading firm (Five Rings) where code quality and review speed are critical in fast-moving codebases. Stratakos's experience building an in-house coding agent at Five Rings and leading AI initiatives provides direct domain expertise in the AI-generated code review problem. Pan's experience as an early engineer at a startup (Yuzu Health) provides exposure to fast-shipping team dynamics. No advisors, board members, or notable investors beyond YC found.

## Key Risks

**Name collision:** "Stage" is a common English word shared with multiple existing products on Product Hunt (a wireframe tool called "Stage"), general software terminology (staging environments), and other companies. This creates SEO/discoverability challenges and potential brand confusion that could impede organic acquisition.

**Heavily funded competitive field:** The four leading AI code review startups (CodeRabbit, Graphite/Cursor, Greptile, Qodo) have raised a combined $334.5M+ and have shipped structured review features. CodeRabbit alone has $15M ARR and 8,000+ paying customers (GetLatka, 2025; TechCrunch, Sep 2025). Stage enters with a 2-person team against well-capitalized incumbents who are actively expanding feature sets.

**Platform dependency:** Stage's value proposition requires integration with GitHub, GitLab, or similar SCM platforms. Any of these platforms could add native "structured diff" or "chapter" views, directly commoditizing Stage's core feature. GitHub in particular has been expanding its AI-native code review capabilities.

**UX-layer vulnerability:** The "chapters" concept is a presentation-layer innovation rather than a deep technical or data moat. Competitors with existing user bases could replicate the UX pattern with relatively low engineering effort, reducing Stage's differentiation window.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.61B in 2025, projected $2.46B by 2034 at 6.3% CAGR (IntelMarketResearch, 2026 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Charles Pan (CEO): Stanford CS '22, Five Rings, Yuzu Health. Dean Stratakos (CTO): Stanford MS/BS CS, Five Rings AI lead, 3x Apple intern. |
| Competitors | CodeRabbit ($88M raised, $15M ARR, AI PR comments), Graphite ($81M raised, acquired by Cursor at $290M, stacking + AI review), Greptile ($45.5M raised, revenue unknown, codebase-aware AI review), Qodo ($120M raised, $1M+ ARR, multi-agent review + test gen) |
| Moat Signals | No public data found |
| Risk Factors | Name collision/SEO risk, heavily funded competitive field, platform dependency on GitHub/GitLab |
| Founder Reach | Charles Pan: Twitter @ceefryingpan (count not retrievable), LinkedIn charlespan. Dean Stratakos: Twitter not found, LinkedIn dean-stratakos, GitHub dastratakos (22 followers). |
| Distribution Signals | No public data found |
| Emails | No public data found |
