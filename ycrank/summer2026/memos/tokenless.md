# Tokenless

> We find flaws in RL environments and evals and help you fix them.

| Field | Value |
|-------|-------|
| Website | https://usetokenless.com |
| YC Page | https://www.ycombinator.com/companies/tokenless |
| Batch | Summer 2026 ([YC](https://www.ycombinator.com/companies/tokenless)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Machine Learning, Reinforcement Learning, B2B, AI |
| YC Partner | Vivian Midha Shen ([YC](https://www.ycombinator.com/companies/tokenless)) |
| Emails | team@usetokenless.com ([company LinkedIn](https://www.linkedin.com/company/usetokenless/)); founders@touchyapp.com—prior product ([YC launch](https://www.ycombinator.com/launches/Syt-touchy-voice-first-ai-assistant-for-iphone-that-understands-the-world-around-you)); ra1336@cs.princeton.edu—research contact ([founder website](https://rohaga.github.io/)) |

## The Idea

- **Problem:** RL-training and evaluation teams can mistake exploitation of defective graders for model capability, while reference-solution checks miss incorrect answers that receive credit ([Tokenless, September 2026](https://usetokenless.com/blog/envcheck/)).
- **Approach:** EnvCheck orchestrates agents that inspect graders, probe tasks in separate sandboxes, share hypotheses, and require objective checks or human review to confirm findings ([Tokenless, September 2026](https://usetokenless.com/blog/envcheck/)).
- **Differentiation:** [Inferred]: Tokenless audits evaluation machinery, whereas Vals AI builds capability benchmarks and Gray Swan tests model behavior and provides runtime protection ([Tokenless](https://usetokenless.com/), [Vals AI](https://www.vals.ai/blogs/series-a), [Gray Swan](https://www.grayswan.ai/news/gray-swan-announces-series-a)).
- **Business Model:** [Inferred]: Paid environment audits and associated tooling are a possible monetization path because Tokenless solicits audit engagements, although current-product prices are undisclosed ([Tokenless](https://usetokenless.com/)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Research publications, public findings, an evaluation leaderboard, and direct contact invitations target RL developers and benchmark maintainers ([Tokenless](https://usetokenless.com/)).

## Defensibility

- **Moat today:** Public technical artifacts include reproducible environment-defect findings and an evaluation grader, without demonstrated exclusivity ([GitHub findings](https://github.com/tokenless-ai/envcheck-findings), [grader repository](https://github.com/tokenless-ai/eval3-grader)).
- **Future moat:** [Inferred]: Accumulated audit trajectories could support specialized auditor models, but Tokenless describes its proprietary red-teaming model as future work ([Tokenless, September 2026](https://usetokenless.com/blog/envcheck/)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given the published methodology and MIT-licensed grader ([GitHub](https://github.com/tokenless-ai/eval3-grader)).
- **Commoditization risk:** [Inferred]: Benchmark maintainers and model laboratories could reproduce parts of the workflow using Tokenless’s published findings, judge prompts, and scoring implementation ([GitHub findings](https://github.com/tokenless-ai/envcheck-findings), [grader](https://github.com/tokenless-ai/eval3-grader)).

## Market & Traction

- **Product history:** A directory tracker recorded the change from Touchy’s consumer assistant to Tokenless’s infrastructure positioning on October 5, 2026, after EnvCheck’s September 30 announcement ([Startups by Glyph](https://startups.fru.dev/companies/touchy), [Tokenless](https://usetokenless.com/blog/envcheck/)).
- **Traction signals:**
  - Company-reported 110 reward hacks and grading bugs across DeepSWE, Terminal-Bench, and BFCL, published in 66 write-ups (company [LinkedIn](https://www.linkedin.com/company/usetokenless/), October 2026).
  - Unnamed early partners exploring domain-specific reward hacking ([Tokenless](https://usetokenless.com/blog/who-evaluates-the-evaluators/), October 20, 2026).
  - Company LinkedIn: 134 followers ([LinkedIn](https://www.linkedin.com/company/usetokenless/), retrieved October 27, 2026).
  - Company X @usetokenless: 90 followers ([Teapawt mirror](https://teapawt.net/usetokenless), October 2026, via search snippet).
  - Prior product Touchy: Product Hunt day rank #13 and 120 points ([Product Hunt](https://www.producthunt.com/products/touchy-3?launch=touchy-3), October 2026 snapshot).
  - Prior product Touchy: 5.0/5 from three US App Store ratings ([Apple](https://apps.apple.com/us/app/touchy-ai-at-your-fingertips/id6798889392), retrieved October 27, 2026).
- **Competitors—adjacent alternatives:**
  - **Irregular ($80M raised, revenue unknown):** Conducts frontier-model cybersecurity simulations rather than specializing in grader defects; disclosed seed and Series A financing totaled $80M in September 2025, led by Sequoia and Redpoint ([Wilson Sonsini](https://www.wsgr.com/print/v2/content/49062871/Wilson-Sonsini-Advises-Irregular-on-%2480-Million-Funding-Round.pdf), via search snippet).
  - **Vals AI ($45M raised, absolute revenue unknown):** Builds domain benchmarks and custom coding evaluations; its $40M Series A was announced August 13, 2026, led by a16z ([CB Insights](https://www.cbinsights.com/company/valsai/financials), via search snippet; [Vals AI](https://www.vals.ai/blogs/series-a)).
  - **Gray Swan (at least $40M raised, revenue unknown):** Offers adversarial testing and runtime protection; its $40M Series A was announced May 28, 2026, co-led by Wing and Madrona ([Gray Swan](https://www.grayswan.ai/news/gray-swan-announces-series-a)).
  - [Inferred]: These are adjacent alternatives because their stated products emphasize model security or capability measurement rather than auditing reward functions themselves ([Irregular](https://www.irregular.com/), [Vals](https://www.vals.ai/blogs/series-a), [Gray Swan](https://www.grayswan.ai/news/gray-swan-announces-series-a)).
- **Why now:** [Inferred]: Benchmark saturation creates demand for evaluation auditing, with Vals reporting in August 2026 that models exhaust benchmarks within months and test material leaks into training corpora ([Vals AI](https://www.vals.ai/blogs/series-a)).

## Founders & Team

- **Rohit Agarwal (Founder):**
  - Background: Princeton CS PhD student researching agent alignment; Berkeley EECS graduate; previously affiliated with Google DeepMind and Duolingo ([YC](https://www.ycombinator.com/founders/rohit-agarwal), [personal website](https://rohaga.github.io/)).
  - Twitter/X: @Rohit_Writes, 560 followers ([Teapawt mirror](https://teapawt.net/Rohit_Writes), retrieved October 27, 2026).
  - LinkedIn: [Profile linked by YC](https://www.linkedin.com/in/rohit-agarwal-b647951ba/); headline not retrievable.
  - GitHub: @girantinas; my-notes has 21 stars ([GitHub](https://github.com/girantinas), October 2026).
- **Andrew Liu (Founder):**
  - Background: Berkeley BA in computer science, mathematics, and linguistics; researched language-documentation tools and taught CS61C ([YC](https://www.ycombinator.com/founders/landrew)).
  - Twitter/X: @landrew7363; count not retrievable ([YC](https://www.ycombinator.com/founders/landrew)).
  - LinkedIn: [Profile linked by YC](https://www.linkedin.com/in/andrew-liu-b50873261/); headline not retrievable.
  - GitHub: No public repos found.
- **Kev Wang (Founder):**
  - Background: Berkeley EECS; previously built GPU infrastructure at SkyPilot and worked as a founding engineer at Eventual ([YC](https://www.ycombinator.com/founders/kev-wang)).
  - Twitter/X: @kevzwang; count not retrievable ([YC](https://www.ycombinator.com/founders/kev-wang)).
  - LinkedIn: [Profile linked by YC](https://www.linkedin.com/in/kevinzhiwang/); headline not retrievable.
  - GitHub: No public repos found.
- **Co-founder relationship:** The founders met as Berkeley undergraduates ([YC launch](https://www.ycombinator.com/launches/Syt-touchy-voice-first-ai-assistant-for-iphone-that-understands-the-world-around-you)).
- **Founder-market fit:** [Inferred]: Agarwal’s alignment research and Wang’s infrastructure experience relate to automated environment auditing; YC backing is confirmed, while no company advisory appointments were found ([Agarwal](https://rohaga.github.io/), [Wang](https://www.ycombinator.com/founders/kev-wang), [Tokenless](https://usetokenless.com/)).

## Key Risks

- **Auditor reliability:** Tokenless acknowledges that future models may exploit its evaluation judge and proposes upgrading that judge as mitigation ([Tokenless, October 2026](https://usetokenless.com/blog/who-evaluates-the-evaluators/)).
- **Coverage generalization:** [Inferred]: Success on published benchmarks may not establish coverage across proprietary environments, while Tokenless describes weaker-auditor performance as early evidence and plans additional domains ([Tokenless](https://usetokenless.com/blog/envcheck/)).
- **Substitution:** [Inferred]: Buyers could extend existing adversarial-testing systems into environment auditing, as Gray Swan already supplies automated testing for models and agents ([Gray Swan](https://www.grayswan.ai/news/gray-swan-announces-series-a)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Company-reported 110 defects, 66 write-ups; 134 LinkedIn followers (company [LinkedIn](https://www.linkedin.com/company/usetokenless/), October 2026). |
| Revenue Signal | Prior product Touchy: free download; Touchy Plus in-app purchase $14.99, billing interval unspecified ([Apple](https://apps.apple.com/us/app/touchy-ai-at-your-fingertips/id6798889392), October 2026). |
| Founders | Rohit Agarwal: Princeton alignment research; Andrew Liu: Berkeley language tools; Kev Wang: SkyPilot and Eventual (respective [YC](https://www.ycombinator.com/founders/rohit-agarwal) [founder](https://www.ycombinator.com/founders/landrew) [profiles](https://www.ycombinator.com/founders/kev-wang)). |
| Competitors | Irregular ($80M, revenue unknown, cyber simulations; [Wilson Sonsini](https://www.wsgr.com/print/v2/content/49062871/Wilson-Sonsini-Advises-Irregular-on-%2480-Million-Funding-Round.pdf), via search snippet); Vals ($45M, revenue unknown, benchmarks; [CB Insights](https://www.cbinsights.com/company/valsai/financials), via search snippet); Gray Swan (≥$40M, revenue unknown, adversarial testing; [company](https://www.grayswan.ai/news/gray-swan-announces-series-a)). |
| Moat Signals | Public reproducible findings and evaluation-grader implementation ([GitHub findings](https://github.com/tokenless-ai/envcheck-findings), [grader](https://github.com/tokenless-ai/eval3-grader)). |
| Risk Factors | Judge exploitation, cross-domain generalization ([Tokenless](https://usetokenless.com/blog/who-evaluates-the-evaluators/)). |
| Founder Reach | Agarwal: X 560 followers ([Teapawt](https://teapawt.net/Rohit_Writes)); my-notes 21 stars ([GitHub](https://github.com/girantinas)); October 2026. |
| Distribution Signals | LinkedIn 134 followers ([company](https://www.linkedin.com/company/usetokenless/)); prior Touchy Product Hunt #13, 120 points ([Product Hunt](https://www.producthunt.com/products/touchy-3?launch=touchy-3)); October 2026. |
| Emails | team@usetokenless.com ([LinkedIn](https://www.linkedin.com/company/usetokenless/)); prior Touchy founders@touchyapp.com ([YC](https://www.ycombinator.com/launches/Syt-touchy-voice-first-ai-assistant-for-iphone-that-understands-the-world-around-you)); research contact ra1336@cs.princeton.edu ([founder](https://rohaga.github.io/)). |
