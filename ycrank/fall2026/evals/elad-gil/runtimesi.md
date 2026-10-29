# Runtime.si -- Elad Gil Evaluation

Robotics tooling is expanding, and robot-policy developers are the prospective buyers, but Runtime.si becomes a large company only if its evaluations predict physical failures cheaply enough to become a required deployment gate. That is the controlling variable. Ten thousand simulated tasks do not establish it. The relevant measurement is how many previously unseen physical failures the system catches at a fixed testing budget. The dossier supplies no measurement of that relationship, so I cannot yet underwrite the market mechanism.

The strongest evidence is architectural. Nomad receives observations and robot state, validates proposed actions, executes them, and records results against task-success predicates. That is a meaningful operational loop. Better policies could increase the importance of regression testing, while execution traces and predicates give Runtime.si functionality beyond model output. This fits my pattern of backing infrastructure around a technological transition. However, the documented loop ends in simulation; customer integrations, deployment decisions, and a feedback loop from physical failures remain unestablished. Those boundaries determine whether the company owns recurring work or supplies replaceable testing components.

The October 15 research is the strongest argument against passing too early. Reported success rises from 152/525 to 283/525—approximately 29% to 54%—for selected skill cohorts. A team that can systematically expose failures and improve policy performance could occupy an important position as robotics expands. But the comparison is retrospective and in-sample, with mixed budgets and platforms and artifact verification pending. It establishes experimentation, not a demonstrated reduction in customer testing costs or deployment risk. Likewise, NVIDIA’s October 21 tooling release expands what developers can build, but it also makes overlapping capabilities easier to assemble. There is no quantified economic step change here yet.

Market structure makes that distinction consequential. SignalFlag already combines hardware, replay, and simulation evaluation; Duality supplies digital twins and closed-loop validation. Runtime.si needs a reason to become the deployment gate rather than another environment library. The broader simulation market’s forecast $2.25 billion size does not establish the revenue available to this particular layer. Neither the waitlist nor the forthcoming open-source benchmark demonstrates repeat demand, and the Lambda Robotics pilots cannot be transferred to the current product. I assign missing-demand defaults, without treating pre-seed silence as failed adoption.

Peng, Ying, and Zhong have relevant robotics, manipulation, and control backgrounds. That strengthens the bull case that they understand the problem, but their biographies do not document prior startup learning or costly personal commitment. I also checked the exceptions that could justify investing before customer pull: the research does not yet establish a scarce frontier breakthrough, and there is no demonstrated reconstruction of physical-industry economics. The software-aware hardware red flag is not established, nor is a fundraising or founder-conduct concern. My pass rests on an unproven market mechanism. One verifiable flip condition would be a paid customer renewing after a prospective, independently audited deployment shows Nomad catches materially more previously unseen physical failures than that customer’s existing evaluation stack at the same total testing cost. That would connect the strongest technical evidence to a purchasing decision.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Identifies the One Variable That Makes This Market Work | 8/32 |
| Technology Shift Expands Market Margins, Scale, or Adoption | 6/24 |
| Users Demonstrate Product-Market Pull Before the Story Is Polished | 4/18 |
| Core Technology Improvement Deepens an Owned Workflow | 10/16 |
| Founder Biography Shows Desperation or Second-Time Learning | 3/10 |
| **Total** | **31/100** |

**Total Score: 31/100** (Pass)
