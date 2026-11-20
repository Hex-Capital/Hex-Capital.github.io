# herdr -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

Herdr helps developers supervise long-running coding agents across machines. Its documented design keeps terminal processes alive through client disconnects and surfaces jobs waiting for input. As developers run more agents in parallel, they may spend more time checking sessions and recovering context. The memo shows an existing terminal and multiplexer workflow, with overlapping supervision features in cmux and native agent apps. It provides no evidence that access to a persistent runtime constrains AI deployment or that equivalent capacity would be slow to add. The building-block path scores zero. (The Idea, Market & Traction, Key Risks)

The enabled-industry path also scores zero. Developers already supervise these jobs by switching terminal sessions and reconnecting manually. Herdr could reduce that work, but the memo identifies no buyer or job cadence previously excluded by the cost of supervision and gives no measured cost per completed job. Cross-host, multi-agent supervision could remain valuable when model capabilities converge. Whether it makes a previously uneconomic workflow viable remains untested. (The Idea, Key Risks)

Herdr’s reported plugin and mod counts support a modest ecosystem advantage, while the Apache-2.0 core and overlapping alternatives limit evidence of durable capture. The company reports 2.16 million cumulative TUI installs, and app-store ratings provide direct evidence of some free use. The memo gives no paid conversion or repeat usage data. Celik shipped the original TUI and separate desktop and mobile clients, while process loss on host reboot leaves a reliability gap. Running agents on users’ machines may limit Herdr’s compute costs, but there is no disclosed Cloud price or evidence on hosting and support costs per paying team. (Defensibility, Market & Traction, Founders & Team, Key Risks, Key Facts)

### Countercase

A small engineering team might be able to run coding agents across several machines at a cadence it previously could not sustain. Persistent sessions and alerts for blocked jobs give that scenario a concrete basis, and DigitalOcean’s one-click image and plugin show that a third party has integrated Herdr into an agent workflow. The memo gives no deployment where those features lowered supervision costs enough to unlock a previously impractical cadence. Both path scores remain zero, triggering Pass. (The Idea, Market & Traction)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 6/20 |
| Customer demand | 6/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 21/150** (Pass)

### Decisive diligence question

Can a small engineering team use Herdr to sustain a paid, multi-host coding-agent workflow it previously could not afford to supervise? A repeat paid deployment that measures supervision and recovery cost per completed job against the team’s terminal or native-app baseline, using the same models, would answer it. If the savings make the previously impractical cadence viable and the team continues paying for Herdr, change the action to Reach out.
