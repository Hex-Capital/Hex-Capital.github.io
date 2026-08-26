# Moving Atoms -- Cyan Banister Evaluation

Six years from now, robot developers should test thousands of policy checkpoints against generated warehouses, homes, factories, and failure conditions before touching expensive hardware. Moving Atoms is pointed at the right layer: Atom 1 turns camera observations and control actions into predicted rollouts, then grades failures inside one harness. The leak from that future is real but small. Atom Harness completed 198 Physics-IQ Verified cases and scored 56.6; it is more than a rendering or waitlist, but it does not yet prove that simulated success predicts a robot succeeding in the physical world.

The broken system is physical evaluation itself. Every checkpoint can require hardware access, human judgment, and a manually assembled simulator, stretching feedback into days. Moving Atoms could turn that queue into a software loop and return experimental control to robot-policy teams. But the dossier does not quantify hardware expense, evaluation labor, or time saved for an actual customer. A limited design-partner cohort is being onboarded, yet there is no named partner, paid engagement, repeat evaluation, or policy improved because Atom found a failure. I can see the irritating system; I cannot yet see anyone changing behavior to escape it.

Shehryar and Ahmad Saroya have enough technical signal to keep me curious. Shehryar built video-recommendation models at TikTok and an AI game project; Ahmad ranked first in his Oxford college and left during his second year to build the company. The public agenttransfer repository reached 47 GitHub stars. Those are first-believer acts, especially leaving school, but they do not establish a long pre-company obsession with robotics, simulation, or the hidden operations of physical testing. The brothers also need an explicit governance answer: Shehryar is named CEO, which is helpful, but sibling status does not itself establish who controls a deadlocked decision.

The strongest bull case is that evaluation becomes more valuable than owning the winning robot controller. Skild AI, Physical Intelligence, Genesis AI, and World Labs are spending enormous sums on different approaches; a neutral harness could serve all of them and accumulate paired observations, actions, rollouts, and failure labels. That is the wonderfully lower-stack possibility. The current implementation, however, uses BytePlus Seedance 2.5 for generation and Claude Opus 5 for classification and timing. Moving Atoms presently rents the scarce capabilities instead of controlling them, while NVIDIA and Google can move directly into the same layer.

The benchmark claim makes me more cautious, not because 56.6 is unimpressive, but because precision matters when the product is evaluation. The open pull request ranks the system second overall, explicitly avoids claiming overall state of the art, and includes a maintainer’s unresolved question about whether the submission is a model or a composite harness. Physics-IQ also measures video prediction rather than robot-policy validity. Add the unexplained transition from hosted MolmoAct2 access to Atom 1, and I see a talented team still searching for the exact product boundary.

I would not write the check yet. This is a compelling enabling-layer hypothesis with a working technical artifact, but the highest-value causal link—world-model grades predicting physical robot outcomes—remains unproven, and no user has yet paid a meaningful cost or reorganized work around it. One result flips me: a named robotics company runs at least 100 policy checkpoints through Atom, pays for repeated use, and publishes that failures detected by the harness predicted materially similar failures on physical hardware. That would turn a fashionable simulation story into a piece of infrastructure the robot economy cannot comfortably build without.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 17/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 14/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 11/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 7/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 7/11 |
| **Total** | **56/100** |

**Total Score: 56/100** (Neutral)
