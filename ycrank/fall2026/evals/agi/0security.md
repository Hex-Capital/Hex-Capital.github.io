# 0.security -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Building blocks of superintelligence.** The rise in coding-agent pull requests points to more changes for security teams to review. The memo provides no evidence that security review is a scarce input holding up AI deployment or that equivalent review capacity is slow to add. This path scores zero. (Market & Traction)

**Industry enabled by superintelligence.** The plausible new use is security testing on every code change, with proposed fixes when issues are found, for teams that can staff only periodic audits and manual remediation. 0cloud’s launch is documented. The company describes a workflow that tests changes in isolation and proposes patches for human approval. A Spotify engineer reported scanning nearly 30,000 files in under a minute. That supports scanning throughput. The shift to continuous remediation still depends on whether automated testing and patch preparation save enough engineer time after review, rework, and failed attempts. If a buyer requires air-gapped operation, the product could remain useful under model parity by providing the testing and approval workflow inside the buyer’s environment. The memo gives no comparison of fully loaded cost per verified fix or evidence of sustained use at that cadence. That gap supports Watch. (The Idea, Market & Traction, Key Risks)

Open-source distribution and air-gapped deployment with customer-selected models give 0.security a way to reach buyers with restrictive deployment requirements. Retention and switching costs remain unproven. The Spotify testimonial shows product use, while the founder-reported EY partnership and Swiss defense work leave procurement, payment, and repeat use unclear. The shipped product, published examples of upstream fixes, and relevant founder experience support seed-stage execution. Reported per-test pricing gives a revenue reference, while realized revenue and delivery costs remain unknown. (The Idea, Defensibility, Market & Traction, Founders & Team, Key Facts)

### Countercase

GitHub already proposes fixes inside the pull-request workflow, and Semgrep offers AI-assisted triage and remediation. If a restricted enterprise can get equivalent coverage and verified fixes with a comparable model and its existing tools, 0.security may simply make an existing workflow faster. That would remove the industry-enabled path and trigger Pass. The memo establishes functional overlap but leaves equivalence in restricted deployments unresolved. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 9/50 |
| Durable value capture | 7/20 |
| Customer demand | 5/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 29/150** (Pass)

### Decisive diligence question

Can a restricted enterprise that previously relied on periodic audits sustain security checks on every pull request with 0.security within its existing review budget? A paid pilot would move the action to Reach out if it sustains that cadence at comparable fix quality, counts model use, testing, failed attempts, and reviewer time in the cost per verified fix, and shows that the buyer’s existing tools with a comparable model cannot achieve the same result within budget.
