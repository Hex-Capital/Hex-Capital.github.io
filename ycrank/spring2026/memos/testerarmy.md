# TesterArmy

> AI QA agent that tests code before it ships

| Field | Value |
|-------|-------|
| Website | https://tester.army |
| YC Page | https://www.ycombinator.com/companies/testerarmy |
| Batch | Spring 2026 |
| Industry | B2B / Engineering, Product and Design |
| Team Size | 4 |
| Location | San Francisco, CA, USA; Remote |
| Tags | AI |
| YC Partner | Pete Koomen |
| Emails | No public data found |

## The Idea

**Problem:** Engineering teams ship bugs because code review alone does not catch UI regressions, and maintaining end-to-end test suites is expensive and brittle. Existing solutions require writing test scripts (Playwright, Cypress), maintaining test infrastructure, or outsourcing QA to managed services. [Inferred]: The pain is most acute for small-to-mid-size teams lacking dedicated QA headcount.

**Approach:** TesterArmy is an AI agent that tests web applications in a real browser, triggered automatically on every GitHub Pull Request (YC page). It posts recordings, pass/fail results, and failure context as a PR comment. Teams also get a CLI for local/CI runs and an API for custom pipelines (YC page). Setup requires pasting a staging URL or connecting a GitHub repo; no SDK, test scripts, or infrastructure to maintain (tester.army, via search snippet). It generates Playwright-ready output (tester.army, via search snippet).

**Differentiation:** Unlike QA Wolf ($56.1M raised), which is a managed service combining humans and automation at per-test pricing (TechCrunch, Jul 2024), TesterArmy is self-serve and fully automated. Unlike Momentic ($18.7M raised), which requires users to describe test flows in plain English (TechCrunch, Nov 2025), TesterArmy runs autonomously without authored test cases. Unlike Octomind ($4.8M raised), which auto-generates Playwright test suites for users to manage (Octomind blog, Apr 2024), TesterArmy executes tests directly in the PR workflow. Unlike Checkly ($32.25M raised), which focuses on production synthetic monitoring (Checkly blog, Jul 2024), TesterArmy targets pre-merge QA.

**Business Model:** No pricing page was found on the website. [Inferred]: Most likely monetization path is usage-based SaaS (per PR check or per-seat) given the CI/CD integration model and developer-tool positioning.

**TAM/SAM:**
- Global Software Testing Market: $55.8B in 2024, projected $112.5B by 2034 at 7.2% CAGR (GM Insights, 2024)
- Automation Testing Market: projected $55.2B by 2028 at 14.5% CAGR (MarketsandMarkets, 2023)
- Testing-as-a-Service: $5.28B in 2024, projected $19.15B by 2034 at 13.75% CAGR (Precedence Research, 2024)
- No public SAM data specific to AI-agent QA on GitHub PRs found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is bottom-up developer adoption via GitHub Marketplace / GitHub Actions integration, given the PR-triggered workflow and two-minute setup claim. The CLI and API suggest a product-led growth model targeting individual developers and small teams before expanding within organizations.

## Defensibility

No defensibility signals found in public sources at this stage.

- [Inferred]: Potential moat could develop via accumulated test context — the product "learns from past runs and remembers context across sessions" (tester.army, via search snippet) — creating switching costs as the agent builds app-specific knowledge. This is unproven at this stage.
- [Inferred]: Playwright-ready output generation could create workflow lock-in if teams build CI pipelines around TesterArmy's output format.

**Market structure:** No structural barrier identified at this stage. [Inferred]: GitHub itself could build native AI-powered PR testing (Copilot already expanding into code review), which would be the primary platform risk. Incumbents like Checkly or Mabl could add PR-triggered autonomous testing, though their existing business models are built around authored test suites and monitoring dashboards, creating some inertia against a zero-config agent approach.

**Commoditization risk:** LLM-powered browser agents are an active area with multiple funded competitors (Momentic, Octomind, BlinqIO, Thunder Code). Barrier to building a basic version is low given open-source browser automation frameworks (Playwright, Puppeteer) and commodity LLM APIs. [Inferred]: Differentiation likely depends on reliability, false-positive rate, and depth of CI integration rather than core technology novelty.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- No Product Hunt listing found.
- No press coverage in named publications found.
- Company Twitter/X: @TesterArmy (count not retrievable due to platform restrictions); profile displays "YC P26" (x.com/TesterArmy).
- No LinkedIn company page found (searches returned unrelated TestArmy, a Polish QA firm with 3,823 followers).
- No Discord or Slack community found.
- 0 open job postings on YC Work at a Startup (YC page, Mar 2026).
- Website returned HTTP 403 at time of research.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. TesterArmy |
|-----------|---------|-------------|-----------------------------------|
| QA Wolf | $56.1M (Series B, Jul 2024, Scale Venture Partners) | Not disclosed | Managed service (humans + automation), per-test pricing |
| Momentic (YC) | $18.7M (Series A, Nov 2025, Standard Capital) | Not disclosed; 2,600 users, 200M+ test steps/month (Momentic blog) | Plain-English test authoring; standalone testing IDE |
| Octomind | $4.8M seed (Apr 2024, Cherry Ventures) | Not disclosed | Auto-generates Playwright test suites; test generation vs. test execution |
| Checkly | $32.25M (Series B, Jul 2024, Balderton) | Not disclosed; 1,000+ companies (Checkly blog) | Production synthetic monitoring + E2E; code-first Playwright-based |
| Mabl | $76.1M (Series C, Nov 2021, Vista Equity) | $17.9M in 2024 (GetLatka) | Broad unified platform (web, mobile, API, accessibility, performance) |

**Why now:** [Inferred]: The catalyst is the rapid improvement in LLM-powered browser agents (2024-2025), which crossed the reliability threshold needed to autonomously navigate and test web UIs without authored scripts. The rise of "vibe coding" and AI-generated code increases the volume of code changes requiring QA while simultaneously reducing the supply of manually written tests. VC investment in AI testing accelerated in 2024-2025: QA Wolf ($36M, Jul 2024), Checkly ($20M, Jul 2024), Functionize ($41M, Aug 2025), Momentic ($15M, Nov 2025), Synthesized ($20M, Sep 2025), and Thunder Code ($9M, Jun 2025) (QA Financial, 2025).

## Founders & Team

**Szymon Rybczak** — Co-founder & CEO
- Age 19; started programming at age 14 (szymonrybczak.dev). From Cracow, Poland.
- Previously: React Native Developer at Callstack (Nov 2022–recent), working on R&D and open source; maintained React Native Community CLI (szymonrybczak.dev/work).
- Previously: React Native Developer at MyMusic (Sep 2021–Nov 2022); iOS Developer at LiveKid (Mar 2021–Sep 2021) (szymonrybczak.dev/work).
- Conference speaker: React Day Berlin, React Native EU 2023, GitNation (GitNation).
- Twitter/X: @SzymonRybczak — 4,325 followers (x.com).
- LinkedIn: linkedin.com/in/szymonrybczak — 500+ connections.
- GitHub: github.com/szymonrybczak — 296 followers, 52 repos; contributor to facebook/react-native (126k stars); pinned contributor (GitHub).

**Oskar Kwasniewski** — Co-founder
- Age 25; from Szczecin, Poland. 100+ merged PRs to React Native Core (GitHub).
- Previously: Software Engineer at Callstack; Senior Software Engineer at Born (LinkedIn).
- Twitter/X: @o_kwasniewski — count not retrievable.
- LinkedIn: linkedin.com/in/oskar-kwasniewski-452977207 — 500+ connections.
- GitHub: github.com/okwasniewski — 561 followers, 94 repos. Notable repos: MiniSim (2,400 stars), react-native-pager-view (3,300 stars), react-native-bottom-tabs (1,400 stars), react-native-visionos (1,100 stars) (GitHub). Contributor to facebook/react-native and react-navigation (GitHub).

**Piotr Matyjasik** — Co-founder & CPO
- Age 22; from Szczecin, Poland. BS Computer Science, West Pomeranian University of Technology; MS Project Management (LinkedIn).
- Previously: Front-end Developer at Wirtualna Polska (May 2023–recent); Front-end Developer at Fujitsu (Sep 2022–May 2023) (LinkedIn).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/piotr-matyjasik — 164 connections.
- GitHub: github.com/pmatyjasik — 7 followers; contributed to FormsLab (551 stars) (GitHub).

**Co-founder relationship:** Szymon and Oskar both worked at Callstack, a React Native consultancy in Poland (szymonrybczak.dev, oskarkwasniewski.dev). Oskar and Piotr are both from Szczecin, Poland. [Inferred]: The Callstack connection is the likely origin of the Szymon-Oskar working relationship.

**Founder-market fit:** All three founders have deep front-end and React Native expertise with significant open-source contributions, particularly to browser and mobile UI frameworks. Oskar's 100+ merged PRs to React Native Core and 8,200+ combined GitHub stars across personal projects demonstrate sustained open-source credibility. Their experience building and testing UI-heavy applications across web and mobile is directly relevant to building an AI agent that navigates and tests web UIs. No advisors, board members, or notable investors beyond YC partner Pete Koomen were found.

## Key Risks

**Name confusion with TestArmy (testarmy.com):** A separate, established Polish QA and security testing company called TestArmy (3,823 LinkedIn followers, ISTQB Platinum Partner, ISO certified) operates in a similar space with a nearly identical name. Search results frequently conflate the two entities. This could create brand confusion, SEO competition, and due diligence complications.

**LLM reliability for autonomous QA:** The product promises zero-config autonomous testing without authored test scripts. False positives (flagging working code) or false negatives (missing real bugs) at scale could erode developer trust quickly. No public data on accuracy rates or false-positive benchmarks was found.

**GitHub platform dependency:** The core workflow is triggered by GitHub PRs. GitHub could build competing native functionality (Copilot already expanding into code review), or changes to GitHub's API/pricing could disrupt distribution. No evidence of GitLab or Bitbucket support was found.

**Crowded and well-funded competitive landscape:** At least 6 competitors raised $5M+ in 2024-2025 specifically for AI-powered testing (QA Wolf $36M, Momentic $15M, Functionize $41M, Checkly $20M, Synthesized $20M, Thunder Code $9M). Momentic is also YC-backed and has disclosed 2,600 users (Momentic blog).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $55.8B global software testing market in 2024, 7.2% CAGR to $112.5B by 2034 (GM Insights, 2024) |
| SAM | Testing-as-a-Service: $5.28B in 2024, 13.75% CAGR to $19.15B by 2034 (Precedence Research, 2024) |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Szymon Rybczak (CEO): React Native dev at Callstack, 4,325 Twitter followers. Oskar Kwasniewski: 100+ React Native Core PRs, 8,200+ GitHub stars across repos. Piotr Matyjasik (CPO): Front-end dev at Wirtualna Polska and Fujitsu. |
| Competitors | QA Wolf ($56.1M raised, revenue unknown, managed QA service); Momentic ($18.7M raised, revenue unknown, plain-English test authoring); Octomind ($4.8M raised, revenue unknown, auto-generates Playwright suites); Checkly ($32.25M raised, revenue unknown, synthetic monitoring + E2E); Mabl ($76.1M raised, $17.9M revenue 2024 per GetLatka, broad unified platform) |
| Moat Signals | No public data found |
| Risk Factors | Name confusion with TestArmy (testarmy.com), LLM reliability for autonomous QA, GitHub platform dependency, crowded well-funded competitor landscape |
| Founder Reach | Szymon Rybczak: Twitter 4,325 (x.com), LinkedIn 500+, GitHub 296 followers. Oskar Kwasniewski: Twitter not retrievable, LinkedIn 500+, GitHub 561 followers / 8,200+ stars. Piotr Matyjasik: Twitter not found, LinkedIn 164, GitHub 7 followers. |
| Distribution Signals | No public data found |
| Emails | No public data found |
