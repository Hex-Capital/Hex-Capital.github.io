# Simantic -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path A — Scarce complements.** As cheaper coding agents make it easier to generate firmware changes, teams may need more validation runs before physical boards are available. Simantic could supply that capacity through Pyrite, which runs compiled firmware against modeled chips and peripherals. The founders report waiting weeks or months for hardware. A Waterloo student reported that the simulator matched the physical board in coursework. That is direct evidence for a bounded use case. Production teams still need to establish which tests they can reliably run before boards arrive. (The Idea, Market & Traction, Key Risks)

Simantic controls its proprietary engine and uses bench measurements to validate silicon behavior. If the validated models capture behavior that competing emulators miss, the same modeling work could serve multiple customers using the same chips. This is a plausible source of value capture. The bench examples establish some capability, while the cost and time for a well-funded competitor to reproduce the coverage remain unknown. (Defensibility)

The company reports an unnamed satellite customer and more than 1.5 million runs, with most runs concentrated among 15 users. A separately announced integration shows partner interest. The memo establishes neither payment terms for the satellite customer nor repeat paid production use. The founders’ embedded and chip experience and their delivery of a simulator with API and pull-request workflows support seed-stage execution. For scale, the $100 monthly Developer plan provides a price point. The margin on adding another team depends on compute, support, and how much chip characterization can be reused. The memo gives no measured cost per added team or supported chip. (Market & Traction, Key Risks, Founders & Team, The Idea, Defensibility)

### Countercase

With the same AI models and ample capital, a competitor could use Renode for agent-driven tests and validate the chip behaviors buyers care about. Veecle already offers Renode-backed agent testing. Where Simantic’s peripheral or analog coverage is incomplete, buyers still need physical hardware. If the alternative covers the same early tests, or both tools leave the same board-dependent bottleneck, Simantic’s advantage could disappear. The memo does not establish either outcome, so Path A remains open for a seed-stage qualification test. Path B lacks evidence that per-pull-request automation opens a previously uneconomic use after review and hardware fallback, or that buyers would keep paying Simantic under functional parity. (Market & Traction, Defensibility, Key Risks, The Idea)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 14/25 |
| Durable value capture | 10/25 |
| Customer demand | 9/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 48/100** (Neutral)

### Decisive diligence question

Will an independent embedded team commit paid budget to keep using Pyrite after a side-by-side trial shows it can reliably run material tests before boards arrive that the team’s best available emulator cannot cover? Use the same firmware and AI model in both workflows, then verify results on silicon and record time to actionable results and hardware fallbacks. A material, repeatable advantage plus a paid commitment would justify rescoring for Reach out, subject to the score and mandate gates. If the alternative matches Pyrite on the tests that matter, or both workflows still wait on the same hardware, move to Pass on the current case. (The Idea, Defensibility, Key Risks)
