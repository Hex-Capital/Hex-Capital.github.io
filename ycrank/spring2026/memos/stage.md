# Stage

> Code review platform for AI generated code

| Field | Value |
|-------|-------|
| Website | https://www.stagereview.app/ |
| YC Page | https://www.ycombinator.com/companies/stage |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, SaaS |
| YC Partner | Pete Koomen |
| Emails | No public data found |

## The Idea

- **Problem:** Engineering teams using coding agents are accumulating large PR backlogs that humans must review, with reviewers struggling to parse unorganized AI-generated diffs (YC company page; Show HN post, news.ycombinator.com/item?id=47796818).
- **Approach:** Stage uses AI to break each PR into ordered "chapters" of logically grouped changes that reviewers step through sequentially, claiming ~5x faster review than GitHub (YC page; stagereview.app).
- **Differentiation:** vs. CodeRabbit/Greptile/cubic — those auto-comment as AI reviewers, while Stage restructures the diff for human reviewers ("Putting humans back in control of code review," Show HN title, HN, Oct 2025); vs. Graphite — Graphite focuses on stacked PRs, Stage on diff comprehension (TechCrunch on Cursor/Graphite, Dec 2025).
- **Business Model:** SaaS with 14-day free trial and "LAUNCH" promo code for 25% off for 3 months (YC page); explicit tier pricing not retrievable (sign-in gated pricing page, stagereview.app/pricing).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Open-source CLI (`ReviewStage/stage-cli`, 204 stars, GitHub) + Show HN launch (HN id 47796818) + YC network distribution ("YC Startup's Painful Code Review Experience..." LinkedIn post from a YC batchmate, Sep 2025).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond a 204-star open-source CLI (GitHub, ReviewStage/stage-cli) and YC association.
- **Future moat:** [Inferred]: Repository-level review-pattern data and reviewer-feedback loops could train chapter-segmentation models; unproven because the product is weeks old at the Show HN launch (HN, Oct 2025) and no usage data is public.
- **Market structure:** [Inferred]: No structural barrier identified at this stage — GitHub, CodeRabbit ($60M Series B, $550M val, TechCrunch Sep 2025), and Cursor (acquired Graphite Dec 2025, TechCrunch) can ship overlapping PR-chunking UX without channel conflict.
- **Commoditization risk:** GitHub, GitLab, Cursor/Graphite, CodeRabbit, Greptile and cubic all have the engineering capability to add AI-organized diff views (TechCrunch, SiliconANGLE, 2025).

## Market & Traction

- **Traction signals:**
  - GitHub: `ReviewStage/stage-cli` — 204 stars, 13 forks, MIT, TypeScript 97% (GitHub, retrieved May 2026).
  - Show HN post live (news.ycombinator.com/item?id=47796818, Oct 2025); points/comments not retrievable (HN page returned 429).
  - LinkedIn company page exists at linkedin.com/company/stagereview (YC page); follower count not retrievable.
  - X/Twitter: @StageReviewApp (YC page); follower count not retrievable (WebFetch 402).
  - Y Combinator LinkedIn post promoting "Stage (YC P26)" (linkedin.com/posts/y-combinator..._activity-7462864738247532545, 2026).
  - Featured in third-party LinkedIn post by YC batchmate Paul Sanglé-Ferrière (cubic) referencing Stage (LinkedIn, activity-7415078326396010496).
  - No public revenue, paying-customer, or signed-LOI data found.
- **Competitors:**
  - CodeRabbit ($96M+ total raised incl. $60M Series B at $550M val, $15M+ ARR, growing ~20%/mo — TechCrunch, Sep 2025): AI auto-reviewer commenting on PRs; differs from Stage's human-reviewer-first chapter UX.
  - Greptile ($25M Series A led by Benchmark — SiliconANGLE, Sep 2025): AI code reviewer agent on GitHub; differs from Stage's diff-restructuring focus.
  - Graphite ($52M total raised; acquired by Cursor Dec 2025 — TechCrunch): stacked PRs + AI review; differs by workflow scope (branching model vs. diff organization).
  - cubic (YC X25, $500K raised — startupintros.com): AI code review agents commenting on PRs; closest YC peer, differs by being AI-reviewer-led rather than human-reviewer-led.
  - GitHub native PR review (incumbent, owned by Microsoft): default tool Stage explicitly benchmarks against ("5x faster than GitHub," YC page).
- **Why now:** [Inferred]: Adoption of coding agents (Cursor, Claude Code, Devin) in 2024–2025 has shifted the bottleneck from code generation to code review, validated by CodeRabbit's 20%/month growth and Cursor's Graphite acquisition (TechCrunch, Sep/Dec 2025).

## Founders & Team

- **Charles Pan (Co-founder, CEO):**
  - Background: Stanford BS Computer Science 2022 (Stanford Daily, gostanford.com fencing roster 2021–22); early engineer at Yuzu Health (YC W22 health-insurance TPA, yuzu.health); developer at Five Rings Capital (quant trading firm); cites fragmentation observed at both large firm and startup as Stage's origin (WebSearch synthesis of YC/LinkedIn sources).
  - Twitter/X: No public account found tied to Stage co-founder.
  - LinkedIn: No public profile found (multiple homonyms returned; correct profile not disambiguated).
  - GitHub: No public repos found under verified handle.
- **Dean Stratakos (Co-founder, CTO):**
  - Background: Stanford MS CS (AI) and BS CS (Systems), Division I tennis (gostanford.com mens-tennis roster 2018–19); Software Developer at Five Rings since Aug 2023, led firm-wide AI initiative and built in-house coding agent (dastratakos.github.io); prior internships at Apple (Siri personalization, LiDAR) and Citadel (TCP recovery for trading platforms) (dastratakos.github.io).
  - Twitter/X: No public account found.
  - LinkedIn: "Five Rings" (linkedin.com/in/dean-stratakos-8b338b149).
  - GitHub: @dastratakos; notable repo `ReviewStage/stage-cli` (org) — 204 stars (GitHub).
- **Co-founder relationship:** Both Charles Pan and Dean Stratakos attended Stanford and both worked at Five Rings Capital (gostanford.com; dastratakos.github.io; WebSearch).
- **Founder-market fit:** Stratakos built an internal coding agent and led AI work at Five Rings, giving direct exposure to AI-generated-code review pain (dastratakos.github.io); Pan describes encountering review fragmentation at both a large firm and a startup (Yuzu Health) (WebSearch synthesis).

## Key Risks

- **Direct competition from better-funded incumbents:** CodeRabbit ($60M Series B, $550M val, $15M+ ARR, TechCrunch Sep 2025), Greptile ($25M Series A, Benchmark, SiliconANGLE Sep 2025), and Cursor (post-Graphite acquisition, TechCrunch Dec 2025) all target the AI-code-review wedge with materially larger capital and existing distribution; no mitigation publicly documented.
- **Platform dependency on GitHub:** Stage is positioned against GitHub PR review UX ("5x faster than GitHub," YC page); GitHub Copilot's expanding PR review features (Microsoft, 2024–2025) create direct substitution risk.
- **Category framing risk vs. AI-reviewer narrative:** Show HN positioning "Putting humans back in control of code review" (HN, Oct 2025) bets on human-reviewer UX while customers and investors are funding AI-auto-reviewer products (CodeRabbit, Greptile, cubic); if buyers consolidate around auto-review, Stage's wedge narrows.
- **Name disambiguation / SEO risk:** "Stage" is a generic term producing significant noise in search (Yamaha YC88 Stage Piano, etc.), and multiple "Charles Pan" Stanford profiles exist (Stanford Daily, fencing roster, LinkedIn homonyms), which complicates inbound discovery and founder identification.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | GitHub stage-cli 204 stars / 13 forks (GitHub, May 2026); Show HN post live (news.ycombinator.com/item?id=47796818, Oct 2025); YC LinkedIn promo post (LinkedIn activity-7462864738247532545, 2026) |
| Revenue Signal | 14-day free trial; "LAUNCH" promo code = 25% off for 3 months (YC company page, 2026); tier pricing gated behind sign-in (stagereview.app/pricing) |
| Founders | Charles Pan (CEO): Stanford CS 2022, ex-Yuzu Health early engineer, ex-Five Rings dev. Dean Stratakos (CTO): Stanford BS+MS CS, D1 tennis, led AI initiative at Five Rings, ex-Apple/Citadel intern. |
| Competitors | CodeRabbit ($96M+ raised, $15M+ ARR — AI auto-reviewer); Greptile ($25M Series A, revenue unknown — AI reviewer agent); Graphite ($52M, acquired by Cursor Dec 2025 — stacked PRs + AI); cubic (YC X25, $500K, revenue unknown — AI review agents); GitHub native (incumbent) |
| Moat Signals | No public data found |
| Risk Factors | Direct competition from well-funded AI code-review incumbents, GitHub platform dependency, category framing vs. AI-auto-review trend |
| Founder Reach | Charles Pan: Twitter not found, LinkedIn not disambiguated, GitHub not found. Dean Stratakos: Twitter not found, LinkedIn linkedin.com/in/dean-stratakos-8b338b149, GitHub @dastratakos (stage-cli 204 stars) |
| Distribution Signals | Show HN launch (news.ycombinator.com/item?id=47796818, Oct 2025); open-source CLI 204 stars (GitHub); YC LinkedIn promotion (LinkedIn activity-7462864738247532545, 2026) |
| Emails | No public data found |

Sources:
- [Stage YC company page](https://www.ycombinator.com/companies/stage)
- [Stage website](https://www.stagereview.app/)
- [Show HN: Stage](https://news.ycombinator.com/item?id=47796818)
- [ReviewStage/stage-cli GitHub](https://github.com/ReviewStage/stage-cli)
- [Dean Stratakos site](https://dastratakos.github.io/)
- [Dean Stratakos LinkedIn](https://www.linkedin.com/in/dean-stratakos-8b338b149/)
- [Dean Stratakos Stanford Tennis](https://gostanford.com/sports/mens-tennis/roster/player/dean-stratakos)
- [Charles Pan Stanford Fencing](https://gostanford.com/sports/fencing/roster/player/charles-pan)
- [CodeRabbit $60M (TechCrunch)](https://techcrunch.com/2025/09/16/coderabbit-raises-60m-valuing-the-2-year-old-ai-code-review-startup-at-550m/)
- [Greptile $25M (SiliconANGLE)](https://siliconangle.com/2025/09/23/greptile-bags-25m-funding-take-coderabbit-graphite-ai-code-validation/)
- [Cursor acquires Graphite](https://techcrunch.com/2025/12/19/cursor-continues-acquisition-spree-with-graphite-deal/)
- [cubic YC X25](https://www.ycombinator.com/companies/cubic)
- [YC LinkedIn promo for Stage](https://www.linkedin.com/posts/y-combinator_stage-yc-p26-is-a-code-review-platform-activity-7462864738247532545-2SM8)
