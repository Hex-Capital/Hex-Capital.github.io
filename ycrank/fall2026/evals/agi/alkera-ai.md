# Alkera AI -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

Alkera’s strongest commercial case is helping data teams catch pipeline changes that would silently alter downstream dashboard figures. The company describes using column-level lineage, source-linked business definitions, and sandbox tests to check proposed edits. That workflow supports a case for safer data engineering. The memo identifies no scarce input that would constrain AI deployment as demand grows, so the building-blocks path scores zero. (The Idea, Defensibility)

The AI-enabled industry path also scores zero. Assuming the prior workflow requires engineers to trace dependencies and validate changes manually, Alkera could reduce review time. The memo establishes neither a buyer or workflow previously excluded by that cost nor a measured reduction in cost per safe production change. The documented integrations offer a modest basis for switching costs if teams accumulate verified definitions, though competing tools already offer overlapping capabilities and the memo provides no retention evidence. Launch attention provides no evidence of buyer commitments, and listed prices leave unit economics open. The shipped Databench release and the founders’ prior work on data pipelines, infrastructure, and agents support seed-stage execution. Dependable production delivery remains unverified. (The Idea, Defensibility, Market & Traction, Founders & Team, Key Facts)

### Countercase

Alkera could make routine fixes viable for teams that currently defer them because reviewing downstream effects takes too much engineer time. The company reports an 83.28% DataAgentBench pass rate versus 68.49% for Claude Code over five runs with the same model. That result suggests the surrounding workflow can improve task success under model parity. The benchmark leaves open how much supervision live changes require and how often disconnected systems hide downstream effects. It does not establish that a previously deferred use has become viable, so both paths remain at zero and the Pass gate applies. (The Idea, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 6/20 |
| Customer demand | 4/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 19/150** (Strong Pass)

### Decisive diligence question

Can a paying team use Alkera to make a class of production fixes it previously deferred because manual validation was too costly? A representative pilot would change the action to Reach out if it showed the team could reliably make those fixes within its budget for each successful change, including review, integration, and recovery costs, and that its existing tools using a comparably capable model could not deliver the same result within that budget.
