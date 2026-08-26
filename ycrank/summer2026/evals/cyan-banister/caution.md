# Caution -- Cyan Banister Evaluation

Move the clock to 2032. Sensitive software is not merely scanned before deployment; customers, auditors, and machines independently verify a chain from reviewed source through toolchain and configuration to the binary actually running. Caution has found a real leak from that world: AWS Nitro can attest a measurement without proving where the measured binary came from. Its reproducible, git-based workflow closes that gap today. What is missing is the rest of the six-year map—how verification becomes routine procurement infrastructure, which standards force adoption, and why Caution rather than a cloud vendor owns the resulting control point.

The founders are the strongest part of this bet. Anton Livaja encountered security and cryptographic infrastructure at Ledn, contributed to OpenZeppelin audits, and then built Distrust with Lance Vick in 2021. Lance accumulated operating tuition across Pebble, Fitbit, BitGo, Unit 410, and Turnkey before working on this source-to-runtime problem. Ksenia Lesko adds the operating function from the same prior company. This is not a five-person team that discovered confidential computing from a market report. They worked together before Caution, possess complementary technical and commercial roles, and have already carried the artifact into production environments.

The broken rule is unusually exact: an attested hash can tell me what is running without telling me that it came from the source I approved. That leaves customers and auditors trusting opaque binaries or maintaining custom security pipelines. Caution returns verification power to third parties by letting them rebuild the image, compare hashes, and inspect the live enclave. I like that mechanism. I cannot yet see the rent clearly, however: the dossier does not quantify the cost of those custom pipelines, identify who controls the purchasing budget, or show that independent verification changes an audit, release, or insurance decision.

There is more than a rendering here. Caution reports production deployments across crypto infrastructure, digital-asset lending, consumer hardware, post-quantum security, and private AI inference, and TrustedStake publicly identifies itself as an early user. Those are useful pre-seed signals across distinct workload categories. But “production” remains a soft word without dates, repeat verification behavior, contract values, or evidence that a customer delays a release when Caution fails. The weird, costly behavior I want is an external party rebuilding every release because it no longer accepts trust by assertion. The dossier has not yet shown that ritual.

The bear case stings because it attacks ownership of the layer. AWS controls the current trust root; Intel TDX, AMD SEV-SNP, and TPM support remain unfinished. OPAQUE, Edgeless Systems, and enclaive already overlap the deployment and attestation surface, while Caution publishes the complete self-hosted platform under AGPLv3. Worse, matching reviewed source does not prove the source is safe. A customer could inherit adoption complexity, retain its security-review burden, and choose the free version—or wait for AWS to absorb the workflow. This is the concealed infrastructure beneath confidential AI and crypto that I naturally hunt for, but today Caution controls an integration stack, not yet a scarce trust asset.

I would write a small personal check because the domain-earned team, working product, and cross-category production deployments outweigh the incomplete future map—but only barely. This is an Invest, not a Strong Invest. My verifiable flip condition is simple: if none of the claimed production customers will independently confirm that Caution is used repeatedly as a release gate, rather than as a one-time deployment or paid experiment, I pass.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 17/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 19/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 12/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 8/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 9/11 |
| **Total** | **65/100** |

**Total Score: 65/100** (Invest)
