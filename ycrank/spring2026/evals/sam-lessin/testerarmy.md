# TesterArmy -- Sam Lessin Evaluation

Here's the thing that jumps out immediately: six companies raised north of $150 million combined in the last eighteen months to do some version of "AI tests your code." QA Wolf, Momentic, Checkly, Functionize, Synthesized, Thunder Code — the capital is already pouring in. Momentic is YC-backed, has 2,600 users, and just closed a $15M Series A. When I look at a deal, I'm asking: is the market wrong? Is there mispricing? With TesterArmy, I see the exact opposite. This is a category where every investor in Silicon Valley is enthusiastically writing checks. The upside is already in the price across the entire category. There is no asymmetry here. Nobody has "written off" AI-powered QA — they're tripping over each other to fund it.

Now run the AI kill test. This is pure software that wraps LLM APIs and open-source browser automation — Playwright, Puppeteer, stuff that's already commodity infrastructure. The product triggers on GitHub PRs. You know who owns GitHub? Microsoft. You know what Microsoft is doing? Copilot is already expanding into code review. GitHub could ship a "Copilot Tests" feature as a native integration tomorrow and obliterate every third-party testing agent overnight. This is not a hypothetical — it's the most obvious product extension in the Copilot roadmap. And every testing incumbent — Checkly, Mabl, whoever — can bolt AI onto their existing products and existing customer relationships. When I say "every time you get pitched Adobe for AI, it's perfect for Adobe," this is what I mean. AI QA testing is perfect for GitHub. It's perfect for Atlassian. It's perfect for every company that already owns the developer workflow.

The founders are technically sharp — Oskar's 100+ merged PRs to React Native Core is genuinely impressive open-source work, and Szymon was speaking at major conferences at 17. These are real engineers. But here's the calibration problem: the idea isn't insane. "AI should automatically test pull requests" is one of the most obvious applications of LLM-powered browser agents. Every developer I know has had this thought. It's a sane idea executed by sane people — and that ratio is exactly backwards for what gets me excited. I want the sane person doing the thing that makes you say "that's impossible." Autonomous PR testing is the thing that makes everyone say "yes, obviously, someone should build that." That's a red flag, not a signal.

Let me steelman the bull case, because I want to be honest about what would have to be true for this to work. If TesterArmy nails reliability — genuinely zero false positives, zero configuration, works on any web app out of the box — they could become the testing primitive for the "vibe coding" era. More code is being written by AI, which means more code needs testing, and no human is going to write test suites for AI-generated code. If they achieve the reliability threshold before GitHub ships native functionality, and if they build enough accumulated test context per customer to create real switching costs, there's a scenario where they become the default QA layer for every small engineering team. That's a real market. But "we need to beat GitHub to market and then create lock-in before they notice" is a race I don't want to bet on with my own money, especially when Momentic already has a two-year head start and $18.7M in the bank.

The primitive question seals it for me. Is this a new behavior or a better version of an existing one? Testing code before it ships has been around since the first software compiler. Automating that testing has been around for decades. Making it easier with AI is an incremental improvement — a great one, maybe — but it's not creating a new verb. Nobody's going to say "TesterArmy me that PR." Compare this to Venmo, where peer-to-peer mobile payments literally didn't exist as a behavior before. Or Patreon, where paying a creator directly was a new financial relationship. TesterArmy is "better testing." Better is not a category.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Consensus Mispricing — Is the Market Wrong? | 6/30 |
| Primitive Creation — Does This Birth a New Category? | 8/25 |
| Sanity-Insanity Calibration — Sane Founder, Insane Idea | 8/20 |
| Structural Durability — Does It Survive the AI Kill Test? | 4/15 |
| Capital Discipline — Built to Survive, Not to Raise | 6/10 |
| **Total** | **32/100** |

**Total Score: 32/100** (Pass)
