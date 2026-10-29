# Agent 37 -- Paul Graham Evaluation

Vishnu’s most revealing detail is his answer about memory pressure. When hosts become constrained, sandboxes restart, and he describes relocating workloads to relieve the pressure. That is a concrete response to a concrete obstacle. But the dossier gives no elapsed time or measured improvement. I give him some resourcefulness credit for the intervention. I cannot infer exceptional resourcefulness from his Amazon background, or assign him the six-month infrastructure struggle that belonged to his customer Boon.

Agent 37 has nevertheless shipped something substantial. An API provisions isolated environments with persistent files, installed harnesses, and application integrations. Customers have deployed it. This fits my recurring interest in programmable infrastructure that technical people can build on. It also clears the basic technical-proof test much more convincingly than an architecture diagram would. The limits are quite specific: gVisor excludes some workloads, sleeping polling agents need an external relay, and memory pressure can interrupt execution. Those are acceptable early limitations if the founder learns from them quickly. They become dangerous if low prices attract workloads the system cannot serve economically.

Who wants this now? Agencies giving each client an agent are a good answer. ETEC+ migrated more than 30 existing clients onto its branded product. Boon reports deploying its fleet in three days and reducing monthly hosting per agent from $85 to $4.94 ([case study](https://www.agent37.com/case-studies/boon-gave-every-client-their-own-hermes-agent-in-3-days-with-agent37)). These are stronger signals than Agent 37’s Product Hunt finishes or repository stars. The reported 100-plus companies add breadth, though that figure comes from the founder. The earlier 30 paying launch-day customers establish willingness to pay for personal hosting; they do not establish Cloud retention. I would also leave the ambiguous company-wide “100k ARR” claim out of the calculation.

The move from personal OpenClaw hosting in February to multiple harnesses and a Cloud launch in June suggests willingness to change the route. It earns partial credit. The account does not identify the customer observation that caused the change, so it does not yet demonstrate unusually fast learning. Similarly, Amazon and Quantcast provide relevant engineering context, but the dossier never connects Vishnu’s own prior need to this particular problem. Credentials cannot supply that missing origin story. The neglected work here—credentials, scheduling, integrations, and customer environments—is real; the founder’s personal collision with it remains undocumented.

The strongest case for investing is that customers are already making Agent 37 part of products they sell. That is precisely the sort of working-product evidence that can justify an exception to an incomplete founder history. It makes this a serious company. But the exception needs stronger evidence here: E2B already supports persistence, Daytona offers broader environments, and Agent 37 itself uses Daytona for template builds and image imports. Cheap provisioning could win initial migrations while leaving little money or differentiation afterward. Published prices reveal neither gross margins nor durable preference. There is no demonstrated dependence on a distribution partner or ceremonial launch, but there is also no measured proof spike or sustained usage growth strong enough to override the resourcefulness gate.

I am **Neutral**, and would hold my check. The product and named deployments deserve attention; the founder’s behavior under resistance remains less established than the software. One result would flip me: a dated account showing Vishnu fixing a recurring sandbox failure within two weeks, followed by a named affected customer running its production fleet for 30 days without that failure recurring. That would connect the missing founder evidence to the operational problem that could determine whether Agent 37 keeps its users.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 13/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 18/23 |
| A Named User Niche Pulls the Crude Product Back | 14/18 |
| Goal Persists While the Product Route Changes on Evidence | 8/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **57/100** |

**Total Score: 57/100** (Neutral)
