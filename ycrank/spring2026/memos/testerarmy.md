# TesterArmy

> Test your app with AI, catch bugs before users do

| Field | Value |
|-------|-------|
| Website | https://tester.army |
| YC Page | https://www.ycombinator.com/companies/testerarmy |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 4 |
| Location | San Francisco, CA, USA; Remote |
| Tags | AI |
| YC Partner | Pete Koomen |
| Emails | support@tester.army |

## The Idea

**Problem:** Software teams ship code faster than they can test it. AI coding assistants (Cursor, Copilot, Devin) have accelerated development 5–10x, but production incidents from generated code increased 43% year-over-year (Codenote, 2026 via search snippet). Traditional E2E test automation (Selenium, Cypress, Playwright) requires engineers to write and maintain brittle test scripts; teams either skip tests or pay specialized QA headcount. Current users of these tools spend significant time on script maintenance rather than coverage expansion.

**Approach:** TesterArmy deploys an AI agent that tests websites and mobile apps by simulating real user interactions in actual browsers (company website). Tests are described in plain English — no code to write or maintain. The agent handles authentication flows including OAuth and OTP, detects layout shifts and rendering issues via visual understanding, and maintains persistent memory across test sessions (company website). It runs automatically on every GitHub Pull Request via a GitHub App and can monitor production on a recurring schedule, delivering screenshots, recordings, and actionable bug reports (YC page). A TesterArmy CLI was announced on March 11, 2026, designed for integration with coding agents (Claude, Codex) to improve the agent feedback loop (Oskar Kwaśniewski, X post).

**Differentiation:** Unlike QA Wolf ($57M raised), which operates as a hybrid SaaS + managed service requiring human QA engineers to write and maintain tests (TechCrunch, Jul 2024), TesterArmy is fully autonomous — no scripts, no human QA team. Unlike Momentic (YC W24, $18.7M raised), which focuses on a Selenium/Cypress replacement requiring developers to define test flows in a structured UI (Momentic blog), TesterArmy accepts plain-English descriptions and handles the full execution stack including auth and bot detection. Unlike Mabl ($76.1M raised), which provides a low-code test automation platform requiring structured test case creation (mabl.com), TesterArmy requires only a URL to begin testing (company docs).

**Business Model:** No public pricing page. The website directs users to "Book a call and we'll find the right plan for your team" (company website). [Inferred]: Most likely monetization path is usage-based SaaS (per test run or per monitored environment) or tiered subscription, given the product's automated nature and the competitor landscape where QA Wolf charges ~$100K–$200K/year per customer (Sacra, 2024 via search snippet).

**TAM/SAM:** The global automation testing market was valued at $20.6B in 2025 and is projected to reach $84.2B by 2034 at 16.84% CAGR (Fortune Business Insights, 2025 via search snippet). The broader software testing market reached ~$54.4B in 2026 (Mordor Intelligence, 2026 via search snippet). [Inferred]: The SAM for AI-native, no-code E2E testing tools targeting software teams is a subset of the automation testing market; no public SAM estimate specific to this segment was found.

**GTM / Distribution:** The GitHub App integration enables product-led adoption within engineering workflows (company website). CI/CD webhook support allows integration with any pipeline (company website). The TesterArmy CLI ships with skills for Claude and Codex, embedding TesterArmy into agentic coding workflows (X post, Mar 2026). [Inferred]: Primary distribution path is bottom-up developer adoption via GitHub marketplace and CLI tooling, with expansion to team-level subscriptions.

## Defensibility

- **Data advantage (potential):** Each test run on customer applications generates labeled data on UI behavior, regressions, and edge cases. [Inferred]: Over time, this could create a proprietary dataset improving the AI agent's accuracy, but this advantage is unproven at this stage.
- **Switching costs (potential):** Teams that build their test descriptions and production monitoring schedules within TesterArmy accumulate configuration that would need to be recreated elsewhere.
- **Technical complexity:** Handling arbitrary authentication flows (OAuth, OTP), bot detection bypass, and visual regression detection across diverse web and mobile apps is a non-trivial integration challenge (company website).

**Market structure:** QA Wolf's model requires human QA engineers to maintain tests, creating a labor-cost structure that makes it difficult to match a fully AI-automated price point without cannibalizing its service revenue (TechCrunch, Jul 2024). Mabl and legacy testing tools (Selenium, Cypress) rely on structured test scripts — pivoting to plain-English, agent-driven testing would require rearchitecting their core product and retraining their user base. [Inferred]: The structural barrier is business model cannibalization for hybrid SaaS+services incumbents and architectural lock-in for script-based tools.

**Commoditization risk:** The underlying capability — LLM-driven browser interaction and visual evaluation — is accessible to any team with access to foundation models and browser automation APIs. Momentic, Baserock, and other YC-backed startups are pursuing similar approaches. Large incumbents (Mabl, Sauce Labs) could integrate LLM features into existing platforms.

## Market & Traction

**Traction signals:**
- No public user counts, revenue, or growth metrics disclosed (company website, YC page).
- Twitter/X: @TesterArmy, joined February 2026 (X via search snippet); follower count not retrievable.
- LinkedIn: company page exists at linkedin.com/company/testerarmy (search results). Note: the "TestArmy" LinkedIn page (3,823 followers) is a separate Polish QA services company (TestArmy Group S.A., founded 2011, Wroclaw), not this YC company.
- Discord: community exists at tester.army/discord (company docs); member count not retrievable.
- Product Hunt: no listing found.
- Job postings: 0 active postings (YC page).
- TesterArmy CLI announced March 11, 2026 (X post by @o_kwasniewski).

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. TesterArmy |
|---|---|---|---|
| QA Wolf | $57M total, $36M Series B (TechCrunch, Jul 2024) | ~$15–20M ARR est. (Sacra, 2024 via search snippet) | Hybrid SaaS + managed service with human QA engineers; guarantees 80% coverage |
| Momentic (YC W24) | $18.7M total, $15M Series A (TechCrunch, Nov 2025) | Revenue unknown | Developer-facing Selenium/Cypress replacement; structured UI for test flow definition; customers include Notion, Quora, Webflow |
| Mabl | $76.1M total, $40M Series C (SiliconANGLE, Nov 2021) | $10–50M est., ~40% ARR growth (Tracxn, Mar 2025 via search snippet) | Low-code platform; enterprise-focused; ISTQB-aligned |
| Baserock.ai | $5M seed (Crunchbase, May 2023 via search snippet) | Revenue unknown | Agentic QA platform that generates test code rather than executing tests directly |

**Why now:**
- AI coding assistants have accelerated development velocity, but production incidents from AI-generated code rose 43% YoY (Codenote, 2026 via search snippet), creating urgent demand for automated QA.
- LLM capabilities crossed a threshold enabling reliable visual understanding, natural-language instruction following, and multi-step browser interaction — capabilities that were not production-ready before 2024.
- [Inferred]: The proliferation of agentic coding tools (Claude Code, Codex CLI) creates a new distribution channel — embedding QA agents directly into developer agent workflows — that did not exist 12 months ago.

## Founders & Team

**Szymon Rybczak** — Co-founder & CEO
- Started programming at age 14; joined first company after 7 months (personal website).
- React Native Developer at Callstack (Nov 2022–2025), working on React Native Community CLI, R&D, and open source (szymonrybczak.dev/work).
- Previously: React Native Developer at MyMusic, Poland's largest independent music company (Sep 2021–Nov 2022); iOS Developer at LiveKid SaaS platform (Mar 2021–Sep 2021) (szymonrybczak.dev/work).
- Speaker at React Day Berlin (LinkedIn post, Dec 2023).
- Education: No formal degree listed on personal website or LinkedIn.
- Twitter/X: @SzymonRybczak — follower count not retrievable.
- LinkedIn: linkedin.com/in/szymonrybczak — "Co-Founder & CEO at TesterArmy (YC P26)."
- GitHub: github.com/szymonrybczak — 302 followers, 52 public repos. Pinned: facebook/react-native (contributor).

**Oskar Kwaśniewski** — Co-founder
- Senior React Native Developer at Callstack, working on open source and on-device LLMs (callstack.com/team, LinkedIn).
- 100+ merged PRs to React Native Core (personal website). Age 25, based in Poland (GitHub).
- Twitter/X: @o_kwasniewski — follower count not retrievable.
- LinkedIn: linkedin.com/in/oskar-kwasniewski-452977207 — "Senior React Native Developer at Callstack."
- GitHub: github.com/okwasniewski — 563 followers, 94 public repos. Notable repos: MiniSim (2.4k stars), react-native-bottom-tabs (1.4k stars, Callstack), react-native-visionos (1.1k stars, Callstack), react-native-pager-view (3.3k stars, Callstack).

**Piotr Matyjasik** — Co-founder & CPO
- ~5 years IT experience, specializing in frontend development across web and mobile (GitHub bio).
- Previously at Fujitsu (search snippet via LinkedIn). Studied Computer Science at West Pomeranian University of Technology (search snippet).
- Based in Szczecin, Poland (GitHub).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/piotr-matyjasik — "Co-Founder / CPO at @TesterArmy (YC P26)."
- GitHub: github.com/pmatyjasik — 7 followers, 6 public repos. Contributed to FormsLab (549 stars, Ryczko/FormsLab) and pl.react.dev (52 stars).

**Co-founder relationship:** All three founders previously worked at Callstack, a React Native consultancy (callstack.com, YC page, LinkedIn profiles). Szymon Rybczak and Oskar Kwaśniewski both appear on Callstack's team page and are listed as working on React Native infrastructure and open source there.

**Founder-market fit:** The team brings deep React Native and mobile development expertise with significant open-source contributions to the React Native ecosystem (100+ merged PRs to React Native Core, multiple libraries with 1K+ stars). Their experience building and maintaining developer tooling at Callstack — and their direct familiarity with the pain of shipping mobile and web apps without adequate testing — positions them to build developer-native QA tooling. No advisors, board members, or notable investors beyond YC and Pete Koomen were found in public sources.

## Key Risks

**Name confusion with TestArmy Group S.A.:** A separate Polish company called "TestArmy" (founded 2011, Wroclaw, 100+ employees, ISTQB Platinum Partner) operates in the same QA testing industry with an overlapping name, LinkedIn presence (3,823 followers), and Twitter handle (@Test_Army) (LinkedIn, X via search results). This creates SEO, brand, and sourcing confusion.

**Well-funded direct competitors in the same YC network:** Momentic (YC W24) raised $15M Series A in November 2025 (TechCrunch) and counts Notion, Quora, Webflow, and Retool as customers. Both companies are YC-backed, target the same buyer (engineering teams), and position as AI-native testing alternatives. QA Wolf ($57M) and Mabl ($76.1M) have established enterprise customer bases and sales motions.

**Foundation model dependency:** The core product relies on LLM capabilities for visual understanding, natural-language test interpretation, and multi-step browser interaction. Performance and cost are tied to third-party model providers. Model API pricing changes or capability regressions could directly impact product quality and margins.

**Authentication and bot detection fragility:** The product's value proposition requires reliably handling OAuth, OTP, and diverse login flows across arbitrary customer applications while evading bot detection (company website). These systems are adversarial and frequently updated, creating ongoing maintenance burden and potential failure modes.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $20.6B automation testing market in 2025, projected $84.2B by 2034 at 16.84% CAGR (Fortune Business Insights, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Szymon Rybczak (CEO): React Native dev at Callstack, started coding at 14. Oskar Kwaśniewski (Co-founder): Senior RN dev at Callstack, 100+ React Native Core PRs, 2.4k-star MiniSim. Piotr Matyjasik (CPO): Frontend dev, Fujitsu, CS degree. |
| Competitors | QA Wolf ($57M raised, ~$15–20M ARR est. via Sacra, hybrid SaaS+managed service vs. fully autonomous). Momentic ($18.7M raised, revenue unknown, structured test UI vs. plain-English). Mabl ($76.1M raised, $10–50M est. revenue via Tracxn, low-code enterprise platform vs. no-code agent). Baserock.ai ($5M raised, revenue unknown, generates test code vs. executes tests). |
| Moat Signals | No public data found |
| Risk Factors | Name confusion with TestArmy Group S.A., well-funded YC-network competitor (Momentic), foundation model dependency |
| Founder Reach | Szymon Rybczak: Twitter @SzymonRybczak (count not retrievable), LinkedIn in/szymonrybczak, GitHub 302 followers. Oskar Kwaśniewski: Twitter @o_kwasniewski (count not retrievable), LinkedIn in/oskar-kwasniewski-452977207, GitHub 563 followers / repos totaling 8.2k+ stars. Piotr Matyjasik: Twitter not found, LinkedIn in/piotr-matyjasik, GitHub 7 followers. |
| Distribution Signals | GitHub App integration (company website), CI/CD webhook support (company website), TesterArmy CLI with Claude/Codex skills (X post, Mar 2026). No Product Hunt listing found. |
| Emails | support@tester.army (company docs) |
