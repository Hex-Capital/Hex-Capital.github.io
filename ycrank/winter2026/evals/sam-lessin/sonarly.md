# Sonarly -- Sam Lessin Evaluation

Here's the thing about "AI that fixes production" as a pitch: when I hear that, I immediately ask myself who ISN'T building this right now. Sentry shipped Autofix in March 2024 with 95% root cause accuracy. Datadog launched Bits AI Dev Agent tested across 2,000+ customer environments. incident.io raised $62 million for a Series B in AI-native incident resolution. This isn't a non-consensus idea — it's the single most consensus idea in developer tooling. Every monitoring incumbent is shipping exactly this capability as a feature. When every VC and every public company agrees on the direction, you're buying narrative at market price, and I don't do that.

My sane-person-insane-idea filter requires both components. On the "sane" side, Dimittri and Alexandre have a genuine co-founder relationship — they attended CY Tech together and built MEORIA before Sonarly, which is a positive signal I weight seriously. But neither founder has documented experience building infrastructure at scale. They ran a 2-person B2C edtech app and experienced alert fatigue from 50 daily notifications. That's a real pain point, but it's a consumer-app operator's pain point, not the kind of deep observability or SRE background that gives me confidence they can outbuild Sentry's engineering team on their home turf. The "insane" side is simply absent — there's nothing about this idea that provokes skepticism. It's the most obvious application of LLMs to developer workflows imaginable.

Now let me run the test that matters most in my framework: does this business get stronger or weaker as software gets cheaper? The answer is devastating. Sonarly's entire value proposition IS the AI layer. Strip out the LLM and there's no business — it's literally an orchestration layer that calls Claude Code to generate PRs. This is the exact opposite of my "cherry on top" framework. Craftwork is a painting company that happens to use software; Sonarly is a software company with nothing underneath the software. The dossier itself acknowledges that "any team with LLM access and monitoring API integrations could build a similar pipeline." When your own research memo states the commoditization risk that clearly, the moat question answers itself. And the 30% mergeable PR rate reported by a Hacker News commenter means the core AI capability isn't even reliably delivering value yet.

The strongest bull case — and I want to engage with it honestly — is the cross-platform aggregation angle. Most companies run Sentry AND Datadog AND Grafana, and no incumbent will build integrations with their competitors' data because it cannibalizes their lock-in strategy. Sonarly as the "Switzerland of production AI" has structural logic. If this team could establish itself as the standard integration layer that every monitoring tool feeds into, you'd have something approaching a primitive position. But I've seen this middleware argument a hundred times, and the value almost always accrues to the platforms on either side, not the connector in the middle. The trend in observability is toward consolidation — Datadog eating adjacent categories — not toward fragmentation that creates demand for a neutral aggregator. For this to work, you'd need the monitoring landscape to stay permanently fragmented AND for Sonarly to achieve meaningfully better fix quality than each incumbent's native AI, which is an extraordinary technical bar for a pre-revenue 2-person team.

The narrative could theoretically expand from alert triage to autonomous production engineering to self-healing infrastructure. That's a real infinity story. But it's a shared infinity story — it belongs to the category, not to Sonarly specifically. Sentry, Datadog, and every AI DevOps startup are telling the same story with more resources, more data, and more distribution. When I look at this through the lens of what I actually fund — new primitives that create ecosystems, physical-world operations that software amplifies but can't replace, businesses that would be great even without AI — Sonarly scores zero on all three. This is an LLM wrapper sitting on top of other people's APIs, with no revenue, no demonstrated moat, and a consensus thesis in a market where the incumbents are already shipping competitive features. Pass.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| "Sane Person, Insane Idea" Calibration | 5/30 |
| AI-Resistant Structural Moat | 3/25 |
| New Primitive or Protocol Position | 4/20 |
| Narrative Magnitude and Infinity Optionality | 6/15 |
| Real Revenue or Asset Cushion | 2/10 |
| **Total** | **20/100** |

**Total Score: 20/100** (Pass)
