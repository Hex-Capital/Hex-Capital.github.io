# Rystic -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

**Path A — Scarce complements.** Rystic’s strongest seed case is that cheaper coding agents increase demand for safe, repeatable tests of actions that change state across services. Engineering teams need isolated environments that reproduce those effects at CI speed. Rystic controls its simulator implementations and live-API verification process. The company reports running 50 Stripe test jobs in 19 seconds versus more than 40 minutes on shared Stripe sandboxes. That supports a throughput advantage in the tested setup. Equivalent fault detection on representative workflows remains unverified. (*The Idea*; *Defensibility*; *Market & Traction*)

Two customers report actual use. Tilo uses Rystic in migration-assistant CI without provisioning real accounts for each service, and HJBL uses custom exchange simulators. Payment and renewal are unverified. Whitehouse’s virtual-environment work and Kiihne’s delivery of Gemini integrations are relevant to the 17-simulator launch. The next execution test is maintaining fidelity as vendor APIs change. (*Market & Traction*; *Founders & Team*; *Key Risks*)

Seats and simulator-minute overages provide a plausible expansion model. **Scenario assumption:** Customer-run CI absorbs simulator compute. Incremental margin would still depend on how much engineering time goes into tracking API changes and supporting custom environments. The memo leaves those costs and paid utilization unmeasured. (*The Idea*; *Defensibility*)

### Countercase

With abundant capital, competitors could expand coverage and verification. LocalStack already offers overlapping local emulators, and WireMock offers stateful local simulation. Rystic’s company-published checks show 95.0% agreement for Slack and 92.4% for GitHub Pulls. Gaps in relied-on behaviors could force teams to keep running vendor-sandbox tests. Saved CI scenarios may create migration work, but buyer switching costs remain untested. Competitive overlap establishes a credible substitute. Equivalent performance on a buyer’s workflow remains untested, so the Path A override stays open and the control gate for outreach remains unmet. (*Defensibility*; *Key Risks*)

With cheap frontier intelligence, frequent cross-service regression testing could become economical for teams that currently ration it. That is a Path B scenario. The memo leaves both labor per successful test at equivalent quality and buyer preference under functional parity unmeasured. (*The Idea*; *Market & Traction*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Path-specific thesis fit | 14/25 |
| Durable value capture | 9/25 |
| Customer demand | 10/20 |
| Team and execution | 10/15 |
| Scale economics | 5/15 |

**Total Score: 48/100** (Neutral)

### Decisive diligence question

Will a seed-stage design partner choose and keep paying for Rystic after testing it against the closest substitute on a production-representative CI suite? Use live-service results to check consequential failures and count engineering time spent on setup, retries, and fallback tests. A material advantage that holds across repeated runs and leads to continued paid use would justify rescoring for Reach out if the case clears 65. Equivalent results and easy switching would move the action to Pass on the current evidence.
