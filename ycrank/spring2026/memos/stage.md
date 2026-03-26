# Stage

> Code review platform for today's engineers

| Field | Value |
|-------|-------|
| Website | https://www.stagereview.app/ |
| YC Page | https://www.ycombinator.com/companies/stage |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | No public data found |
| Tags | Developer Tools, SaaS |
| YC Partner | Pete Koomen |
| Emails | dastratakos@gmail.com (Dean Stratakos personal site) |

## The Idea

**Problem:** AI-assisted coding is accelerating shipping velocity, but engineers are merging changes that "neither they nor their reviewers fully understand, leading to bugs in production and overwhelming cognitive debt" (YC page). The current default — GitHub pull request diffs — presents changes as unorganized line-by-line diffs, forcing reviewers to mentally reconstruct intent across scattered files. [Inferred]: This cognitive burden worsens as AI-generated code increases the volume and unfamiliarity of changes per PR.

**Approach:** Stage restructures diffs into "structured chapters" — organized, narrative sections that break a changeset into logical units so reviewers can understand what changed and why, sequentially (YC page). The product is a standalone code review platform, not a bot or plugin layered onto GitHub's native review UI. Asset references in the site source suggest GitHub integration, markdown rendering, pull-request management, and search functionality (stagereview.app source inspection).

**Differentiation:**
- vs. **GitHub/GitLab native review**: Default diff UIs show flat, file-ordered changes with no logical grouping. Stage imposes narrative structure.
- vs. **AI review bots** (CodeRabbit, Greptile, Qodo, Cubic): These automate bug detection via AI comments on PRs. Stage focuses on human comprehension of diffs, not automated flagging.
- vs. **Graphite** (acquired by Cursor, Dec 2025): Graphite organized work via stacked PRs — multiple small atomic PRs. Stage organizes a single PR's diff into chapters.
- vs. **Haystack** (YC S24): Closest competitor. Haystack uses a 2D infinite canvas to visualize PR changes (haystackeditor.com). Stage uses linear structured chapters. Both aim to improve diff comprehension for human reviewers.

**Business Model:** No pricing page was accessible on the website at time of research (SPA rendered client-side; content not extractable). [Inferred]: Most likely monetization is per-seat SaaS, consistent with comparable tools (Cubic charges $30/dev/month; Graphite used per-seat pricing).

**TAM/SAM:**
- AI code tools market: $7.93B in 2025, projected $91.09B by 2035 at 27.65% CAGR (Grand View Research / OpenPR, 2025 via search snippet).
- Software development tools market: $6.41–7.47B in 2025, projected $15.72B by 2031 at 16.12% CAGR (Mordor Intelligence via search snippet).
- [Inferred]: The serviceable market for code review platforms is a subset of these figures; no public SAM estimate specific to code review tooling was found.

**GTM / Distribution:** [Inferred]: Most likely distribution is bottom-up developer adoption via GitHub integration, given the two-person team and dev-tools category. The "chapters" UX is inherently viral within teams — one reviewer using Stage creates visibility for teammates on the same PR.

## Defensibility

No defensibility signals found in public sources at this stage.

- [Inferred]: Potential moat could develop via workflow lock-in if teams adopt chapter-based review as a standard practice, creating switching costs similar to how Graphite's stacked-PR workflow became habitual for its 500+ customer teams. A data advantage could emerge if Stage learns from review patterns to auto-generate chapter structures. Both are unproven.

**Market structure:** Graphite's acquisition by Cursor (TechCrunch, Dec 2025) removed the closest independent workflow competitor. GitHub, the dominant incumbent, has limited incentive to restructure its diff UX because its review flow is tightly coupled to its broader platform — a chapter-based reorganization would require rearchitecting how diffs, comments, and approvals interact. [Inferred]: This creates a window for a purpose-built tool, though GitHub could eventually add similar features.

**Commoditization risk:** The "structured chapters" concept is a UX innovation, not a deep technical moat. Any well-resourced competitor (Cursor/Graphite, GitHub, GitLab) could implement a similar organizational layer. Haystack (YC S24) is already pursuing an analogous approach with a different visual metaphor.

## Market & Traction

**Traction signals:** No public data found. No press coverage, Product Hunt launch, app store listing, Chrome Web Store extension, social media company accounts, Discord/Slack community, or publicly reported users/revenue were identified. The website renders as a JavaScript SPA; no traction numbers were extractable.

**Competitive landscape:**

| Competitor | Differentiator vs. Stage | Funding | Revenue/ARR |
|---|---|---|---|
| **Haystack** (YC S24) | Infinite canvas visualization for PR comprehension; closest to Stage's approach | YC-backed; no announced external round | No public data found |
| **CodeRabbit** | AI bot auto-reviewing PRs (bug detection); not diff restructuring | $88M ($60M Series B, Sep 2025; CRV, Scale Venture Partners) (TechCrunch, Sep 2025) | $15M+ ARR (Latka, Sep 2025) |
| **Greptile** (YC W24) | AI reviewer with full codebase context; automated, not human-comprehension focused | $29.1M ($25M Series A, Sep 2025; Benchmark) (TechCrunch, Jul 2025) | $1M revenue in 2024, 10x growth reported (Greptile blog) |
| **Graphite** (acquired) | Stacked PRs workflow; acquired by Cursor Dec 2025 | $81M total; acquired for reportedly >$290M (TechCrunch, Dec 2025) | Revenue unknown; 500+ companies (Graphite blog) |
| **Cubic** (YC S25) | AI-powered PR reviewer; $30/dev/month | YC-backed; no announced external round | No public data found |

**Why now:** [Inferred]: Two catalysts: (1) AI code generation tools (Cursor, GitHub Copilot, Claude Code) are producing unprecedented volumes of unfamiliar code that human reviewers must evaluate — 84% of developers now use or plan to use AI tools (Panto AI blog, 2026 via search snippet), creating a "comprehension crisis" in review workflows. (2) Graphite's acquisition by Cursor in December 2025 (TechCrunch, Dec 2025) removed the leading independent code review workflow tool from the market, opening a gap for a new entrant focused on review UX.

## Founders & Team

**Charles Pan** — Co-founder & CEO
- B.S. Computer Science, Stanford University (Class of 2022) (GoStanford athletics roster)
- Developer at Five Rings (quant trading firm) (YC page)
- Early engineer at Yuzu Health (health insurance TPA) (YC page; yuzu.health/about)
- Software Engineer Intern at SoundHound (2020) — C++ calendar support for Houndify voice platform (WayUp profile)
- Robotics Software Intern at Stanford AI Lab (2019–2020) — haptics software for robotic arm (WayUp profile)
- Stanford Varsity Fencing (saber); MPSF Team Champion, Pac-12 All-Academic (GoStanford)
- Twitter/X: @ceefryingpan (count not retrievable)
- LinkedIn: linkedin.com/in/charleslpan
- GitHub: github.com/charleslpan — 5 public repos, 6 followers; Arctic Code Vault Contributor (GitHub)

**Dean Stratakos** — Co-founder & CTO
- M.S. Computer Science (AI track) and B.S. Computer Science (Systems track), Stanford University (personal site: dastratakos.github.io)
- Software Developer at Five Rings (Aug 2023–present) — designed high-performance trading system components in C++ and Python; led company-wide AI initiative; built an in-house coding agent (personal site; YC page)
- Intern at Apple (3 rotations: Siri Information Intelligence, Advanced Computation Group, Platform Triage), Citadel (Market Connectivity), Quadric (CNN backend) (personal site)
- Stanford Varsity Men's Tennis; 2021 Pac-12 Champion; four-time ITA Scholar-Athlete (GoStanford)
- Twitter/X: @DeanStratakos (count not retrievable)
- LinkedIn: linkedin.com/in/dean-stratakos
- GitHub: github.com/dastratakos — 38 public repos, 22 followers; pinned repos include Homography-Estimation (27 stars), Face-Mask-Detection (5 stars) (GitHub)

**Co-founder relationship:** Both are Stanford CS graduates and both worked at Five Rings, a quantitative trading firm in NYC. Dean's tenure at Five Rings began August 2023 (personal site); Charles also worked there (YC page). This indicates direct professional overlap at the same firm.

**Founder-market fit:** Both founders experienced code review friction firsthand — Charles across multiple engineering roles (Five Rings, Yuzu Health, SoundHound, Stanford AI Lab), and Dean while leading AI initiatives and conducting code reviews at Five Rings, where he built an in-house coding agent that inspired Stage's founding (YC page). Dean's AI specialization (Stanford MS in AI, PyTorch/TensorFlow expertise) is directly relevant to building intelligent diff-structuring features.

## Key Risks

**Name collision / discoverability:** "Stage" is an extremely common English word. Web searches for "Stage code review" return noise from unrelated products (Stage OTT platform, Stage by Belkin, stagewise.io, theatrical "stage" references). This creates SEO and brand discovery challenges. The domain stagereview.app partially mitigates this.

**Haystack overlap:** Haystack (YC S24) is pursuing a nearly identical problem — making diffs comprehensible for human reviewers — with a different UI metaphor (infinite canvas vs. chapters). Both are YC-backed, pre-revenue, and targeting the same user persona. A head-to-head competition for the same niche with a one-batch-earlier competitor creates execution pressure.

**Platform dependency on GitHub:** Asset references in the site source include `github-mark` and `git-pull-request` icons, suggesting deep GitHub integration (stagereview.app source). If Stage's primary workflow depends on GitHub's API, changes to GitHub's API terms, rate limits, or native review features could disrupt the product.

**Anthropic/incumbent entry:** Anthropic launched a multi-agent code review tool for Claude Enterprise customers in March 2026 (TechCrunch, Mar 2026). While focused on automated bug detection rather than diff organization, it signals that large AI labs view code review as a product surface, increasing competitive pressure from well-funded incumbents.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI code tools market: $7.93B (2025), projected $91.09B by 2035 at 27.65% CAGR (Grand View Research / OpenPR via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Charles Pan (CEO): Stanford CS, Five Rings, Yuzu Health. Dean Stratakos (CTO): Stanford CS MS/BS, Five Rings AI lead, Apple/Citadel intern. |
| Competitors | CodeRabbit ($88M raised, $15M+ ARR (Latka, Sep 2025), AI auto-review). Greptile ($29.1M raised, $1M rev 2024 (Greptile blog), AI codebase-context review). Haystack (YC S24, YC-backed, revenue unknown, closest UX competitor). Graphite ($81M raised, acquired by Cursor Dec 2025 (TechCrunch)). Cubic (YC S25, YC-backed, revenue unknown, $30/dev/mo). |
| Moat Signals | No public data found |
| Risk Factors | Name collision / SEO discoverability, Haystack (YC S24) direct overlap, GitHub platform dependency |
| Founder Reach | Charles Pan: Twitter @ceefryingpan (count not retrievable), LinkedIn charleslpan, GitHub 6 followers. Dean Stratakos: Twitter @DeanStratakos (count not retrievable), LinkedIn dean-stratakos, GitHub 22 followers / 27 stars top repo. |
| Distribution Signals | No public data found |
| Emails | dastratakos@gmail.com (Dean Stratakos personal site) |
