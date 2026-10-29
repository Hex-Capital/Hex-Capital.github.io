# ByteAsk -- Cyan Banister Evaluation

In 2032, I can imagine a small robotics team changing firmware without spending the afternoon discovering which build configuration made the patch unsafe. Getting there requires reliable execution evidence, coverage across hardware and toolchains, and permission to operate inside sensitive engineering environments. ByteAsk is touching those problems through compilers, sanitizers, and a bridge into an existing debugger session. But that future is my extrapolation. The dossier establishes a specialized coding product; it does not yet establish the sequence that turns it into infrastructure for building physical things.

The debugger bridge catches my attention because engineers already have a working environment with valuable state inside it. Why make them reconstruct that world for an agent? ByteAsk’s answer respects the operating complexity. Kulkarni’s low-latency C++ work at Optiver and Quantbox gives that choice credibility, while Saini brings experience from ThirdAI and Simbian. They also built and sold LawSutra together before founding ByteAsk in June 2026. That is evidence of complementary execution and commercial follow-through. It is less evidence of an independently pursued, longstanding obsession with this particular problem; the dossier supplies no dated trail of earlier systems-tooling experiments.

The immediate economic wound is understandable: engineers must check generated changes against actual builds, memory behavior, and runtime state. ByteAsk could return attention and working hours to those engineers. Yet the dossier does not quantify that burden or identify an artificial gatekeeper collecting a rent. Compiling and testing are necessary work. The business becomes compelling if the product removes the coordination burden while preserving the checks. Published plans at $20, $100, and $200 suggest a self-service route, but listed prices establish neither payment nor willingness to entrust consequential work to the agent.

That distinction becomes sharp in the September 27 release notes: tools had reported clean results when execution was absent, interrupted, or only partially instrumented. An engineer buying verification needs “nothing ran” to remain unmistakably different from “nothing failed.” Disclosing and fixing those cases is constructive; it does not establish reliability across customer environments. Reported use by LLVM, Godot, and llama.cpp contributors, alongside weekly active users reportedly doubling, suggests a functioning product attracting relevant people. Without absolute counts, cohorts, or concrete repeated workflows, I cannot tell how much behavior has changed. The internal 89% firmware-ticket result against a 61% baseline does not settle that question.

The strongest argument against my hesitation is that this team could quietly accumulate the difficult deployment knowledge that general agents lack. Build-aware retrieval and debugger integration are real implementation, and ByteAsk fits my pattern of looking for concealed infrastructure beneath a visible application. But the dossier does not demonstrate control over a scarce dependency. Its MIT-licensed reference-retrieval MCP already supports competing agents. That openness can help distribution; it also means some useful functionality can travel without ByteAsk. My exception for a pre-revenue technical company requires an unusually persuasive founder-and-prototype connection to the future being financed. Here, neither the documented founder history nor the reported user behavior supplies enough additional evidence to make that exception decisive.

I remain neutral and would keep my own money uncommitted. The CEO and CTO roles are clear; equal-control governance is unknown, rather than an established red flag. Likewise, a user-started debugger bridge is a useful boundary, but pending security assurance and an offered on-premises option do not establish data custody. My concern is specific: ByteAsk may build a useful C++ assistant while general agents absorb its most valuable integrations. One verifiable result would reopen the decision: a paying embedded-systems customer renews after 90 days because ByteAsk’s accumulated build-specific verification consistently catches consequential defects that the customer’s general coding agent misses. That would show a reason for this layer to persist.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 7/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 17/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 9/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 7/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 5/11 |
| **Total** | **45/100** |

**Total Score: 45/100** (Neutral)
