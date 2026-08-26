# Palisade -- Cyan Banister Evaluation

Move the clock to 2032 and the compelling version is obvious: device fleets defend themselves at the kernel, translating observed behavior into tested mitigations before a human security team can schedule the patch. Palisade has a small leak from that world—a reported LSM-BPF control plane making syscall-level decisions and enforcing rules across a fleet—but the dossier does not map the journey there. It gives me automated-response adoption statistics, not the intervening steps from three Linux CVEs to trusted autonomy across servers, GPU nodes, and endpoints.

Fnu Prince is the strongest reason to keep looking. Professional red-team and blue-team work from age sixteen, followed by ML and operating-systems work, suggests the idea predates the accelerator and fits the problem unusually well. The claim is self-reported, however, and I cannot find public repositories, prior shipped artifacts, customers, or recruiting proof. YC lists a one-person team while LinkedIn displays two employees. That is not evidence of a leadership shell game, but for software capable of changing kernel behavior across thousands of machines, I need to know exactly who builds it and who is accountable when it breaks production.

The broken system is real but incompletely decoded. Fleet mitigations reportedly take weeks because security products concentrate on network, cloud, and application layers while OS-level weaknesses remain labor-intensive. Palisade compresses that delay into minutes. Yet the dossier never establishes the economic rent: which team owns the queue, what an incident or remediation cycle costs, and whether the buyer wants autonomous enforcement rather than a better alert. It returns time to security operators, but installing rules is not the same as returning agency when the user cannot inspect, stage, or reverse them.

The bull case stings. This is concealed infrastructure under the fashionable AI layer, not another interface borrowing a model provider’s advantage. A live control plane, syscall telemetry, kernel enforcement, and detection of three named privilege-escalation vulnerabilities are much more substantial than a rendering. The closest precedent for overriding missing revenue would be CosmicBrain AI: deep pre-company obsession plus a functioning hard-technical prototype. The material difference is that CosmicBrain also had signed industrial proofs of concept; Palisade has no disclosed deployment, repeat usage, independent benchmark, or customer willing to let the artifact touch production.

Competition makes that missing behavior decisive. Oligo has raised $80 million, Upwind $180 million, and Aqua $325 million; all already operate eBPF-based sensors or runtime controls. Palisade’s narrower OS-remediation loop could be better, but telemetry alone is reproducible and the dossier identifies no structural barrier. More troublingly, observing syscalls, memory events, processes, and packets creates a serious custody surface, while fleet-wide generated mitigations create a corresponding safety surface. No public approval, rollback, policy-testing, or limiting architecture answers either concern.

I pass today, with genuine curiosity rather than dismissal. The flip condition is one named customer running Palisade on at least 1,000 production endpoints for 90 days, with independently verifiable remediation results and no critical false-positive outage. That would simultaneously show costly user trust, expose the real operating complexity, and establish whether the remediation loop—not generic eBPF visibility—is the controlled asset.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 7/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 12/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 10/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 6/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 7/11 |
| **Total** | **42/100** |

**Total Score: 42/100** (Pass)
