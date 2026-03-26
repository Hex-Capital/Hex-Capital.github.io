# Stage -- Naval Ravikant Evaluation

The first thing I notice is the direction of the current. Stage's founding thesis is that AI-generated code is creating a comprehension crisis for human reviewers. That thesis is correct. But the logical conclusion of that thesis is not "build better tools for humans to review AI code" -- it's that AI reviews AI code. CodeRabbit has $15M+ ARR doing exactly that. Greptile raised $29M for it. Anthropic just launched multi-agent code review for enterprise. The entire market is moving toward automated review, and Stage is building a better reading lamp for a world that's installing floodlights. When I see a company citing a trend as its catalyst but building against the trend's terminal direction, that's not contrarian -- it's confused.

On specific knowledge: Dean Stratakos built an in-house coding agent at Five Rings and has an AI track MS from Stanford. Charles Pan shipped code across Five Rings, a health insurance startup, SoundHound, and the Stanford AI Lab. These are strong technical credentials -- Five Rings is genuinely elite. But knowing that code review is painful is not specific knowledge. It's the common cold of software engineering. Every developer who has ever stared at a 400-line diff across twelve files has had this exact frustration. The question is whether these founders understand something about how engineers mentally reconstruct intent from diffs that nobody else understands. I don't see that. They identified a real friction point, but the identification is table stakes. What non-obvious insight about code comprehension would take a competitor years to figure out? "Organize diffs into narrative chapters" is a solid product intuition, but it's the kind of idea a smart PM could arrive at after a month of user interviews.

The leverage architecture here concerns me. Stage is a presentation-layer improvement to an existing workflow. Compare this to what I look for: Notion gave one person the output capacity of a team with five SaaS subscriptions. Replit let non-programmers write software. AngelList let founders access capital without gatekeepers. Each of those created a category of leverage that didn't exist before. Stage makes an existing activity -- reading diffs -- moderately less painful. The output-to-input ratio improvement is real but incremental. It doesn't unlock a new capability or empower a new category of person. It's a better tool for an existing job, and that caps the upside in a way that matters for asymmetric returns.

The bull case deserves serious consideration. Graphite was acquired for reportedly over $290M after establishing "stacked PRs" as a workflow primitive. If Stage can establish "chapters" as the default mental model for code review the way Graphite established stacked diffs, workflow lock-in could be substantial. The Graphite acquisition also cleared the most credible independent competitor, creating a genuine vacuum. And there's a real argument that even as AI review improves, human comprehension of changes remains load-bearing for architectural decisions, security review, and knowledge transfer -- domains where you can't just trust the bot. If Stage captures that human-in-the-loop review layer, the market could be durable. Two technically excellent founders from Five Rings with co-worker chemistry, attacking that gap, is not a crazy bet. But "not crazy" is not "compelling."

What kills this for me is the absence of compounding technology and the crowded positioning. The dossier states plainly: "The 'structured chapters' concept is a UX innovation, not a deep technical moat." Haystack, one YC batch earlier, is solving the identical problem with a different visual metaphor. GitHub could add a chapter-like feature to its native UI. Cursor, having acquired Graphite's team and codebase, could build this in a quarter. There's no proprietary data flywheel -- Stage doesn't become harder to replicate the more people use it. There's no physics-level barrier. When I invested in Stack Overflow, every question and answer made the knowledge graph denser and more valuable, creating a moat that couldn't be outbuilt by engineering alone. Stage's "chapters" don't exhibit that property. Each organized PR is consumed and forgotten; the platform doesn't accumulate compounding value from usage.

Two capable founders identified a real problem. But the specific knowledge is generic, the leverage is incremental, the market is consensus-hot, and the technology doesn't compound. I'm passing.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Specific Knowledge and Founder-Problem Authenticity | 12/30 |
| Leverage Architecture and Scalability of the Model | 11/25 |
| Contrarian Positioning and Non-Consensus Timing | 6/20 |
| Founder Integrity and Long-Term Orientation | 9/15 |
| Technical Compounding and Defensibility Over Time | 3/10 |
| **Total** | **41/100** |

**Total Score: 41/100** (Pass)
