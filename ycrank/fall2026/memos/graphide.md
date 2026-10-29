# Graphide

> A graph based IDE for when agents program faster than you can read

| Field | Value |
|-------|-------|
| Website | https://Graphide.com |
| YC Page | https://www.ycombinator.com/companies/graphide |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/graphide)) |
| Industry | B2B / B2B |
| Team Size | 0 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, DevOps, AI |
| YC Partner | Christopher Golda ([YC](https://www.ycombinator.com/companies/graphide)) |
| Emails | hello@graphide.com, dan@graphide.com ([Graphide terms](https://graphide.com/terms/)) |

## The Idea

- **Problem:** Developers using coding agents must check whether generated changes preserve intended architecture, while line diffs and manually maintained Mermaid diagrams can leave system relationships unclear ([Graphide About](https://graphide.com/about/)).
- **Approach:** YC describes a graph IDE, while the current homepage markets a GitHub service that maintains branch-specific code graphs, checks pull requests against rules, selects affected tests, and exposes graph context through MCP ([YC](https://www.ycombinator.com/companies/graphide), [Graphide docs](https://graphide.com/docs/)).
- **Differentiation:** CodeSee provides code visualization, and CodeRabbit and Qodo provide review/governance platforms; Graphide emphasizes evidence labels distinguishing model guesses, static analysis, tests, and production observations, plus replayable rule violations ([GitKraken](https://gitkraken.com/blog/gitkraken-launches-devex-platform-acquires-codesee), [CodeRabbit](https://www.coderabbit.ai/newsroom/coderabbit-series-c-agentic-change-management), [Qodo](https://www.qodo.ai/blog/qodo-70m-series-b-shift-to-artificial-wisdom/), [Graphide](https://graphide.com/)).
- **Business Model:** The current pricing page offers engineering teams individually negotiated setup and pricing without published rates, while the separate IDE overview still advertises free alpha access ([Graphide pricing](https://graphide.com/pricing/), [IDE overview](https://graphide.com/overview/), accessed Oct 27, 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Users can install the GitHub App and select repositories, while team buyers are directed to email Graphide for a demonstration on their codebase ([Graphide](https://graphide.com/), [pricing](https://graphide.com/pricing/)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Accumulated repository graphs, approved architectural rules, and workflow integrations could create switching costs, but public retention or migration measurements do not establish this mechanism today ([Graphide docs](https://graphide.com/docs/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** CodeRabbit already describes proprietary codegraph technology and architecture analysis, while Qodo advertises a software map and organizational rules, demonstrating existing overlap without establishing the effort required to reproduce Graphide’s implementation ([CodeRabbit announcement](https://www.businesswire.com/news/home/20260812311754/en/CodeRabbit-Raises-%24143-Million-at-%241.5-Billion-Valuation-and-Introduces-Agentic-Change-Management), [Qodo](https://www.qodo.ai/blog/qodo-70m-series-b-shift-to-artificial-wisdom/)).

## Market & Traction

- **Traction signals:**
  - Developer use: Graphide reports working with developers using their own codebases and testing on fzf, Flask, Hono, and Excalidraw, without publishing customer or user totals ([Graphide About](https://graphide.com/about/), accessed Oct 27, 2026).
  - Active YC job postings: 0 ([YC](https://www.ycombinator.com/companies/graphide), Oct 27, 2026).
  - Company X account: @GraphideHQ; follower count not retrievable ([Graphide website](https://graphide.com/), Oct 27, 2026).
  - Discord invitation is publicly linked; member count not retrievable ([Graphide website](https://graphide.com/), Oct 27, 2026).
- **Competitors:**
  - **CodeSee / GitKraken** ($10M disclosed funding, revenue unknown): Code visualization and workflow automation integrated into GitKraken, versus Graphide’s advertised graph-backed rule verification; its last disclosed financing was a $7M seed extension led by Wellington Access Ventures and Plexo Capital in January 2022, followed by GitKraken’s acquisition in May 2024 ([CodeSee release](https://www.globenewswire.com/news-release/2022/01/20/2370076/0/en/codesee-announces-7m-in-new-funding-to-address-rising-demand-for-code-visualization-and-understanding.html), [GitKraken](https://gitkraken.com/press/gitkraken-acquires-codesee-launches-devex-platform)).
  - **CodeRabbit** ($231M cumulative disclosed funding, calculated from $88M through Series B plus $143M Series C; $50M estimated ARR in July 2026): Review, triage, architecture analysis, and security monitoring extend beyond Graphide’s graph/checking focus; its August 2026 Series C was co-led by Atomico and Smash Capital ([Series B](https://www.coderabbit.ai/blog/coderabbit-series-b-60-million-quality-gates-for-code-reviews), [Series C](https://www.coderabbit.ai/newsroom/coderabbit-series-c-agentic-change-management), [Sacra estimate](https://sacra.com/c/coderabbit/)).
  - **Qodo** ($120M raised, revenue unknown): Multi-agent review, organizational standards, and cross-repository context overlap Graphide’s checking workflow; its March 2026 $70M Series B was led by Qumra Capital ([Qodo announcement](https://www.qodo.ai/blog/qodo-70m-series-b-shift-to-artificial-wisdom/)).
- **Why now:** CodeRabbit’s founders reported in September 2025 that coding-agent adoption increased pull request output and created review backlogs, providing a documented behavioral catalyst for automated verification ([CodeRabbit](https://www.coderabbit.ai/blog/coderabbit-series-b-60-million-quality-gates-for-code-reviews)).

## Founders & Team

- **Dan McGee (Co-founder/CEO):**
  - Background: Studied EECS and business through Berkeley’s M.E.T. program before leaving to start Graphide, previously ran an automation business, and built Illumio’s Matrix simulation platform handling networks of 300+ virtual machines as an intern ([YC founder profile](https://www.ycombinator.com/founders/dan-mcgee)).
  - Twitter/X: @mcgeedan42; count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/dan-mcgee)).
  - LinkedIn: YC-linked profile exists; headline not retrievable, with 482 followers shown in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/danielmcgeemarin), retrieved Oct 27, 2026).
  - GitHub: @Daniel-McGeeMarin; pinned repository nix_dots has 2 stars ([GitHub](https://github.com/Daniel-McGeeMarin), Oct 27, 2026).
- **Benjamin McIntyre (Co-founder/CTO):**
  - Background: Studies computer engineering and mathematics at the University of Cincinnati, founded its Linux/FOSS club with over 100 students, and previously built political-campaign voter outreach systems ([YC founder profile](https://www.ycombinator.com/founders/benjamin-mcintyre)).
  - Twitter/X: @benmac06; count not retrievable ([YC founder profile](https://www.ycombinator.com/founders/benjamin-mcintyre)).
  - LinkedIn: YC-linked profile exists; headline not retrievable, with 5 followers shown in the indexed profile ([LinkedIn, via search snippet](https://www.linkedin.com/in/mcintyre-benjamin), retrieved Oct 27, 2026).
  - GitHub: @BenMac31; displayed repository nixdots has 1 star ([GitHub](https://github.com/BenMac31), Oct 27, 2026).
- **Co-founder relationship:** Met in middle school in Cincinnati and participated in four hackathons together ([Graphide About](https://graphide.com/about/)).
- **Founder-market fit:** McGee’s simulation-platform work and McIntyre’s history building editor tools relate to Graphide’s infrastructure and code-analysis responsibilities, respectively; YC confirms its backing ([Graphide About](https://graphide.com/about/), [YC](https://www.ycombinator.com/companies/graphide)).

## Key Risks

- **Verification coverage:** [Inferred]: Unresolved or incorrectly inferred graph relationships could undermine rule checking and test selection; Graphide acknowledges unverifiable code and describes whole-package test fallback when dependency resolution is insufficient ([Graphide](https://graphide.com/)).
- **Source-code handling:** [Inferred]: Enterprise adoption may face restrictions because the privacy draft describes cloud source storage and default session-content uploads; diagnostic settings stop session-content telemetry, but do not stop graph uploads ([privacy draft, Oct 26, 2026](https://graphide.com/privacy/)).
- **Commercial data permissions:** Graphide’s terms permit using stored content to train models by default, with telemetry controls offered to prevent new session-content collection, creating a specific procurement question for proprietary repositories ([terms, effective Oct 16, 2026](https://graphide.com/terms/)).
- **Competitive substitution:** [Inferred]: CodeRabbit’s graph-based security and architecture analysis overlap Graphide’s advertised differentiation and could substitute for portions of its workflow ([CodeRabbit announcement](https://www.businesswire.com/news/home/20260812311754/en/CodeRabbit-Raises-%24143-Million-at-%241.5-Billion-Valuation-and-Introduces-Agentic-Change-Management)).
- **Name ambiguity:** An unrelated “Project Graphide” lists different hackathon creators, and the npm package @surviant/graphide identifies Surviant LLC; their metrics are excluded ([Devfolio](https://devfolio.co/projects/project-graphide-1ad1), [npm](https://www.npmjs.com/package/@surviant/graphide)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Reports developer use without totals; tested on fzf, Flask, Hono, Excalidraw ([Graphide About](https://graphide.com/about/), Oct 2026) |
| Revenue Signal | Custom team quotes without public rates ([pricing](https://graphide.com/pricing/), Oct 2026); IDE alpha advertised free ([overview](https://graphide.com/overview/), Oct 2026) |
| Founders | Dan McGee, CEO: Berkeley M.E.T., Illumio simulation platform; Benjamin McIntyre, CTO: Cincinnati computer engineering/math, campaign systems ([YC](https://www.ycombinator.com/companies/graphide)) |
| Competitors | CodeSee ($10M raised, revenue unknown, visualization; [release](https://www.globenewswire.com/news-release/2022/01/20/2370076/0/en/codesee-announces-7m-in-new-funding-to-address-rising-demand-for-code-visualization-and-understanding.html)); CodeRabbit ($231M disclosed cumulative funding, review/governance; [round disclosures](https://www.coderabbit.ai/newsroom/coderabbit-series-c-agentic-change-management), [prior total](https://www.coderabbit.ai/blog/coderabbit-series-b-60-million-quality-gates-for-code-reviews); $50M estimated ARR, [Sacra](https://sacra.com/c/coderabbit/)); Qodo ($120M raised, revenue unknown, multi-agent review; [announcement](https://www.qodo.ai/blog/qodo-70m-series-b-shift-to-artificial-wisdom/)) |
| Moat Signals | No public data found |
| Risk Factors | Unverifiable graph relationships ([product](https://graphide.com/)); cloud source storage ([privacy draft](https://graphide.com/privacy/)); model-training permissions ([terms](https://graphide.com/terms/)) |
| Founder Reach | McGee: LinkedIn 482 followers; McIntyre: LinkedIn 5 followers ([profiles via search snippets](https://www.linkedin.com/in/danielmcgeemarin), [McIntyre](https://www.linkedin.com/in/mcintyre-benjamin), retrieved Oct 2026) |
| Distribution Signals | GitHub App onboarding, X @GraphideHQ, Discord invitation ([Graphide](https://graphide.com/), Oct 2026) |
| Emails | hello@graphide.com, dan@graphide.com ([Graphide terms](https://graphide.com/terms/)) |
