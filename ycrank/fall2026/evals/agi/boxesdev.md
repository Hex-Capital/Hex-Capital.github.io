# Boxes.dev -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

Boxes.dev gives parallel coding agents isolated Linux environments cloned from a working setup. Longer delegated coding tasks could increase demand for those environments. The memo describes local CPU, memory, and port contention, while Replicas and Coder already offer alternative agent workspaces. It provides no evidence that suitable cloud capacity is scarce or slow to add. The building-blocks path scores zero. (The Idea, Market & Traction, Defensibility)

The industry-enabled path also scores zero. A plausible scenario is that agents reduce engineering labor enough to make frequent parallel software builds affordable for a team that previously could not justify them. Access to an equally capable model would still leave the team responsible for setting up and running its environments. The memo establishes a local workflow limit but identifies no previously uneconomic class of work that crossed an affordability threshold. (The Idea, Market & Traction)

Versioned templates and startup scripts create some switching work, though competing workspaces and potential bundling with Codex limit the case for durable pricing power. Public CLI download counts show interest, but paid conversion and repeat use are unverified. The shipped CLI and the founders’ prior engineering work together at Gem support execution credit. Published prices establish what Boxes.dev charges, while the cost of serving the next box-hour remains unknown. (Defensibility, Key Risks, Market & Traction, Founders & Team, Key Facts)

### Countercase

The founders report that one unnamed customer ran more than 200 agents across more than 100 machines for a software build. That is the strongest evidence that Boxes.dev can support work beyond the practical limits of a laptop. The account leaves open whether the build was previously uneconomic, how much supervision it required, and whether the customer paid or repeated it. Both thesis paths remain unsupported, triggering the Pass gate. (Market & Traction, The Idea)

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

Can a paying team repeatedly complete a class of software builds it previously skipped on cost grounds because coding agents running on Boxes.dev bring the fully loaded cost below its budget? A customer-verified comparison with the prior workflow should include setup, supervision, compute, model usage, and failed runs. Evidence that the team crossed that threshold and still needed a separately managed runtime with the same model would change the action to Reach out.
