# ByteAsk -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

ByteAsk applies build-aware retrieval and verification to C/C++ engineering. The clearest AI workload in the memo is Nodus Compute’s co-located decoding and training. Nodus reported 2.3× decode throughput and 52% higher training throughput after a 30-day pilot. That result supports a way to get more work from existing hardware. The memo leaves open which input constrains deployment, how demand for that input grows, and how quickly buyers can add or substitute capacity. The building-blocks path scores zero. (The Idea, Market & Traction, Key Risks)

The enabled-industry hypothesis is that teams could tune performance routinely where manual search, editing, and validation made that cadence uneconomic. ByteAsk automates patch generation and runs project-specific checks, while Nodus still recorded 150 engineer-review hours and kept human merge approval. The reported throughput gains measure what the optimized code delivered. The memo gives no prior tuning cadence, previously excluded buyer or use, or fully loaded cost per accepted patch. The enabled-industry path scores zero. (The Idea, Market & Traction, Key Risks)

Build-specific indexing and hardware test integration could make ByteAsk harder to replace once teams embed it in review, though switching costs remain inferred. The Nodus pilot, Zith’s compiler rebuild, and ByteAsk’s reference to paid CLI subscribers support early demand, with paid conversion and repeat use unquantified. The shipped CLI and the founders’ relevant C++ and AI engineering experience support execution credit, with dependable verification across hardware and build variants still open. Published prices and model markups leave contribution per accepted patch unmeasured, so scale economics stays at the default. (Defensibility, Market & Traction, Key Facts, Founders & Team, Key Risks)

### Countercase

ByteAsk’s company-run comparison reported 129 successful runs out of 144 for both ByteAsk and Codex CLI using the same model, with ByteAsk reporting 68% lower cost. Combined with Nodus’s target-hardware checks, this suggests ByteAsk’s verification workflow could retain value under model parity and make a higher tuning cadence practical. The benchmark does not establish the fully loaded cost or show that a team took up work it previously could not justify. Both paths remain at zero, which requires Pass. (Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 8/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 24/150** (Pass)

### Decisive diligence question

Can ByteAsk make recurring, hardware-validated C++ performance tuning affordable for a team that previously shelved it? A repeat paid deployment would change the action to Reach out if it documents why the work was previously shelved and shows that ByteAsk’s build-aware workflow delivers accepted patches below the buyer’s cost threshold when a same-model agent in the existing workflow falls short. The comparison should include failed attempts, hardware tests, and engineer review.
