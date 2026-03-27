# Stage -- Sam Lessin Evaluation

Here's what jumps out immediately: Stage is building a better way for humans to review code that AI wrote. Think about that for a second. The entire thesis depends on a transitional state — that humans need to remain in the loop on code review, and that the bottleneck is comprehension UX. But the same AI that's generating the code is already learning to review it. Anthropic shipped multi-agent code review for Enterprise customers literally this month. CodeRabbit is at $15M+ ARR doing automated review. The trajectory is obvious: AI writes code, AI reviews code, humans approve or reject at a higher abstraction layer. Stage is building a nicer bridge over a river that's drying up. The question isn't whether "structured chapters" is a good UX idea — it probably is — it's whether the problem it solves will exist in three years. I don't think it will.

The mispricing test kills this before I get to anything else. Dev tools is the hottest consensus category in venture right now. CodeRabbit just raised $88M. Greptile raised $29M from Benchmark. Graphite got acquired for north of $290M. Every YC batch has a cluster of companies doing some variation of "make code review better with AI." Haystack, literally one batch earlier at YC, is solving the identical problem with a different visual metaphor. When I look at a deal, I'm asking: is the market wrong about this? With Stage, the market isn't wrong — the market is fully priced in. Every sophisticated investor at demo day already understands that AI-generated code creates review burden. There's no asymmetry here. The upside is in the price.

The primitive test is a clean miss. "Structured chapters" is a reorganization of existing GitHub diffs. It's a better arrangement of information people already look at, in a workflow that already exists. Compare this to what Venmo did — before Venmo, you couldn't send money to a friend from your phone at all. That was a new behavior. Nobody is going to call the act of reviewing code in logical sections "Staging" — it's just a nicer diff viewer. This is the definition of incremental: a better version of something that already exists, competing on execution in a category where five funded competitors are already running.

The strongest bull case goes something like this: Graphite proved that a workflow innovation in code review can create real switching costs and exit at $290M+. If "chapters" becomes the default mental model for how teams organize reviews — the way stacked PRs became habitual for Graphite's 500+ customers — then Stage could capture a similar position, especially with Graphite now absorbed into Cursor and no longer independent. The "why now" is real: AI-generated PRs are bigger, more unfamiliar, and harder to review than human-written ones. And maybe the human oversight requirement doesn't go away — maybe compliance, security liability, and regulatory pressure force companies to maintain human review even when AI could do it. If that world materializes, Stage is well-positioned. But even in that bull case, GitHub can ship a "chapters" feature as a product update. The dossier itself concedes the point: "The 'structured chapters' concept is a UX innovation, not a deep technical moat. Any well-resourced competitor could implement a similar organizational layer." When your own risk analysis tells you the moat doesn't exist, believe it.

The founders are clearly sharp — Stanford CS, Five Rings is an elite quant shop, Dean's AI track and experience building an in-house coding agent is directly relevant. They're competent engineers who felt real pain in code review. But this is the wrong ratio for me. I want sane people doing insane things. "Better code review interface" is the opposite of insane — it's one of the most obvious ideas in developer tooling right now. The sanity goes both directions: sane founders, sane idea. That's a recipe for a solid product that gets acqui-hired or outcompeted by a platform with distribution. It's not a recipe for a defining company.

The AI kill test here isn't even subtle. This is pure SaaS, no physical operations, no protocol-level infrastructure, no network effects beyond a single team's workflow. GitHub is the platform, and Stage depends on GitHub's API. When I say "every time you get pitched a better tool for [workflow X], ask whether the incumbent can just add that feature" — this is that. GitHub could ship structured diff views. Cursor, which now owns Graphite, could ship chapters. Any LLM provider can auto-generate a narrative summary of a PR that's better than manual chapter organization. The structural durability is close to zero. Pass.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Consensus Mispricing — Is the Market Wrong? | 6/30 |
| Primitive Creation — Does This Birth a New Category? | 6/25 |
| Sanity-Insanity Calibration — Sane Founder, Insane Idea | 8/20 |
| Structural Durability — Does It Survive the AI Kill Test? | 4/15 |
| Capital Discipline — Built to Survive, Not to Raise | 6/10 |
| **Total** | **30/100** |

**Total Score: 30/100** (Pass)
