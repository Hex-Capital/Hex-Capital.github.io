# ByteAsk -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

ByteAsk’s strongest path is **New Economies**. Build-aware retrieval and automated verification could reduce the engineering labor needed to land a correct C/C++ change. The candidate new use is routine performance work that teams previously deferred because tracing build variants, testing on target hardware, and reviewing patches took too much engineer time. ByteAsk reports that its same-model benchmark matched Codex CLI at 129 successful runs out of 144 at 68% lower cost. Nodus reports 2.3× co-located decode throughput and 52% higher co-located training throughput after a 30-day pilot. The benchmark measures run cost, while the Nodus figures measure workload performance. The memo leaves baseline engineer hours, labor cost per accepted change, and whether the work was previously out of reach unmeasured. (The Idea, Defensibility, Market & Traction, Key Risks)

Nodus’s pilot and the Zith compiler rebuild show use on real projects. ByteAsk’s changelog references paid CLI subscribers, with repeat paid use for previously deferred work still unverified. The founders bring low-latency C++ and AI engineering experience and have shipped a CLI and reached field use. Repeatable deployment across different build and hardware configurations remains the next execution test. (Market & Traction, Key Facts, Founders & Team, Key Risks)

The scale unit is an accepted, verified change per customer workspace. ByteAsk lists workspace fees, a 20% markup on managed models, and a $0.40 hourly cloud sandbox charge. Nodus logged 150 hours of human review during the pilot. Comparing buyer cost per accepted change requires the number of accepted changes and the associated compute, target-hardware testing, setup, and review time. ByteAsk’s own contribution also depends on its sandbox and deployment support costs. The memo provides pricing and a review burden, with repeat-deployment economics still open. (The Idea, Key Facts, Key Risks)

### Countercase

ByteAsk may make existing C/C++ work cheaper while Cursor or Harness adds equivalent build-aware verification to tools customers already buy. Both have adjacent capabilities, and the Nodus integration suggests possible switching costs only if customers embed those checks deeply enough to make migration costly. The memo shows neither buyer preference under functional parity nor a network effect, and it establishes no ByteAsk-controlled scarce complement. The market-opening and parity gates remain unproven. Observed substitution at parity would close the New Economies path, but the memo documents competitive overlap and leaves actual switching untested. (The Idea, Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 15/25 |
| Durable value capture | 8/25 |
| Customer demand | 11/20 |
| Team and execution | 10/15 |
| Scale economics | 6/15 |

**Total Score: 50/100** (Neutral)

### Decisive diligence question

Will an independent C/C++ team renew a paid ByteAsk deployment for work it previously deferred after testing an alternative with equivalent build and verification capabilities? A renewal with logs showing a material reduction in engineer time and all-in cost per accepted change against the prior workflow, plus a documented preference for ByteAsk under functional parity, would move the action to **Reach out**.
