# Archgen Labs -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Archgen has a plausible building-blocks path in the physical design of stacked-die AI accelerators. The potential bottleneck is engineering and solver capacity for iterating on placement, heat, and cross-die timing before signoff. Archgen reports that LayerTherm screened thermal layouts in 62 ms versus 314 seconds for a conventional solver in its benchmark. Its GPU placement engine and Newton flow-editing agent could help engineers test more candidate fixes before detailed verification. Volume production of advanced stacking supports the relevance of the workflow. The seed-stage assumption is that more stacked AI accelerator designs will make iteration capacity scarce enough to delay tapeouts, with limited relief from incumbent tools or added engineering capacity. Buyer-confirmed delays and representative end-to-end results remain open. (*The Idea*, *Market & Traction*, *Key Risks*)

The industry-enabled path scores zero. The reported speedup applies to a screening step in an existing physical-design workflow. The memo identifies no previously excluded buyer or use that becomes economically viable once engineering labor, detailed verification, and rework are included. (*The Idea*, *Key Risks*)

Combining thermal screening with automated flow edits offers a potential advantage inside a customer's design flow. Reuse of verified fixes is a plausible source of operating know-how, with its effect on retention and pricing still untested. Archgen reports signed pilots, with counterparties and payment terms undisclosed. Both founders co-developed the placement engine, which placed first on the contest proxy metric, and Archgen reports a mid-2027 first tapeout target with GlobalFoundries. That supports prototype execution ahead of production validation. Enterprise licensing is an inference, and the memo supplies neither pricing nor the cost of integrating and supporting the next customer. (*Defensibility*, *Founders & Team*, *Market & Traction*, *The Idea*, *Key Facts*)

### Countercase

Siemens has demonstrated overlapping placement and electrothermal automation in its own toolchain, while Cadence and Synopsys already integrate thermal analysis into multi-die design workflows. LayerTherm's reported speed advantage comes without published prediction error, and detailed verification remains necessary. An incumbent flow could therefore match the time to a signoff-ready design even if Archgen screens individual layouts faster. Functional equivalence remains untested, so the substitution risk supports Watch. Buyer evidence that incumbent tools readily relieve the same bottleneck would trigger Pass. (*The Idea*, *Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 18/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 6/20 |
| Customer demand | 6/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 38/150** (Pass)

### Decisive diligence question

On a stacked-die AI accelerator design where the buyer confirms that physical-design iteration is holding up tapeout, can Archgen materially reduce elapsed time to the buyer's thermal, timing, and design-rule acceptance criteria compared with its incumbent flow? A buyer-verified pilot on the same design block, counting engineering time, detailed verification, and rework, would answer it. A material reduction at equivalent acceptance criteria would move the action to Reach out. Comparable end-to-end performance from the incumbent on that constrained workflow would move it to Pass.
