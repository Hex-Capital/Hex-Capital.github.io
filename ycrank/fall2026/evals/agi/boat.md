# Boat -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

**Building blocks of superintelligence.** Boat supplies persistent, isolated Ubuntu VMs for long-running agents that need a browser, desktop, Docker, or the ability to resume and fork an environment. Longer agent tasks could increase demand for those environments. The memo describes self-provisioning and several overlapping managed options. Boat’s burst limits establish a ceiling on its own service, and the memo identifies no workload for which buyers consistently exhaust suitable capacity or face long lead times for alternatives. The scarcity mechanism earns zero. (*The Idea*, *Market & Traction*, *Key Risks*)

**Industry enabled by superintelligence.** Teams previously provisioned and maintained their own environments or rented sandboxes. Boat can reduce that operational work, and comparable models would still need somewhere to execute and preserve state. The memo identifies no previously excluded buyer or workflow that becomes affordable because AI lowers the fully loaded cost per successful outcome. This path also earns zero, triggering Pass. (*The Idea*, *Market & Traction*)

The strongest commercial case is managed infrastructure for teams running stateful agents. Boat documents a shipped product, and the founders first built the VM layer for Ascii’s own coding agent. Its company-described control of the stack and in-house snapshots support some operating advantage. Migration costs are plausible as customers accumulate snapshots and integrations, but remain unmeasured. The founders report more than 350 paying users and $1 million in ARR. A named customer reports using his Claude allowance four times as fast after adopting Boat, which shows actual use while leaving paid retention unverified. Published pricing of $0.036 per VM-hour and auto-stop give a starting point for assessing economics, but host utilization, snapshot costs, and support costs are missing. The product documentation and customer account support medium confidence, with the headline traction figures still founder-reported. (*The Idea*, *Defensibility*, *Founders & Team*, *Market & Traction*, *Key Facts*, *Key Risks*)

### Countercase

Boat could be an early supplier of a scarce input for agents that need persistent desktop and Docker environments with frequent restarts. That scenario assumes buyers need those features together and that self-hosting or competing sandboxes cannot meet their launch, resume, and concurrency requirements on a usable timeline. A founder-reported 100,000-plus daily VM starts makes burst capacity worth testing. The memo does not establish that buyers face the same limits across suppliers, so the countercase does not clear the outreach gate. (*The Idea*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 10/15 |
| Team and execution | 7/10 |
| Scale economics | 2/5 |

**Total Score: 26/150** (Pass)

### Decisive diligence question

Can Boat show that a buyer’s production rollout was delayed because suitable persistent VM capacity was unavailable? A buyer-confirmed comparison showing that realistic alternatives could not supply the required concurrency and resume performance on the rollout timeline, together with a representative Boat deployment that met those requirements, would change the action to **Reach out**. Evidence limited to easier setup or lower pricing would leave the action at **Pass**.
