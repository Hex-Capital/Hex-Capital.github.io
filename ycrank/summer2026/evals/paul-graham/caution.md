# Caution -- Paul Graham Evaluation

The important fact is not that confidential computing is growing. It is that these founders found a precise hole in the trust chain and built through it. AWS Nitro can attest to a running binary, but it cannot tell an auditor that the binary came from the reviewed source. By December 2025, Caution had turned that gap into an open-source system that reproducibly builds an enclave image, provisions the infrastructure, and lets a third party compare the live measurement with the source, kernel, configuration, and toolchain. This is a real artifact, not a diagram. But the dossier does not reveal what broke during construction, which founder improvised around it, or how quickly. Solving a market’s blocker is evidence of technical judgment; it is not yet proof that the founders are unusually resourceful when they themselves are blocked.

The technical proof is Caution’s strongest evidence. The stack works on AWS Nitro, is independently verifiable, and has reached production workloads in crypto infrastructure, digital-asset lending, consumer hardware, post-quantum security, and private AI inference. Anton Livaja and Lance Vick did not arrive through a confidential-computing trend report. They previously built security systems at Ledn, BitGo, Turnkey, and their own consultancy, Distrust. The ugly parts—reproducible builds, attestation chains, key handling, customer-controlled AWS deployments, and audit evidence—are precisely the parts most engineers avoid. This matches the pattern I care about: specialists assemble a difficult substrate before asking investors to believe in a platform.

Demand is promising but still blurry. TrustedStake is one named early user, and Caution reports production deployments across five workload categories. That is more informative than a waitlist. But the dossier provides no payment, deployment frequency, retention, or example of a customer forcing the crude product into an unplanned workflow. The four commercial routes—commercial licenses, managed BYOC, fully managed hosting, and support—also conceal which business customers actually want. A company with four possible products often has not yet discovered which one users are pulling from it.

The strongest bull case is that the founders have worked together since Distrust, possess unusually direct domain knowledge, already ship to production customers, and are doing engineer-led onboarding themselves. A working product can sometimes override missing conventional signals. Here it cannot yet override the missing founder-behavior evidence, because the dossier shows neither a rapid correction after failure nor unmistakable customer pull. There is also no evidence that the team has changed routes on new information. One product version without a setback is not rigidity, so I assign the default rather than treating it as adverse evidence.

The bear case bites because the full platform is available under AGPLv3, AWS controls the current trust root, and funded competitors already sell overlapping confidential runtimes and orchestration. OPAQUE has raised $55.5 million, while Edgeless Systems and enclaive cover broader container, Kubernetes, or multi-cloud surfaces. Caution’s source-to-runtime proof is sharper, but technical sharpness does not determine who owns the customer. The unstated proof-spike pattern is present; the numerical adoption spike is not. None of the usual red flags about ceremonial launches, delegated selling, or an unspecified distribution partner appears, but dependency on AWS and absence of disclosed revenue leave open the possibility that this becomes excellent infrastructure with weak economics.

I am neutral today. My verifiable flip condition is one dated case in which a named customer exposed a deployment or verification blocker, the founders shipped the workaround within fourteen days, and that customer then paid for and repeatedly used the revised workflow. That would simultaneously establish the behavior and the narrow well now missing from the proof.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 15/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 21/23 |
| A Named User Niche Pulls the Crude Product Back | 12/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 10/12 |
| **Total** | **64/100** |

**Total Score: 64/100** (Neutral)
