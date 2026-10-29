# Dreamscale Labs -- Vinod Khosla Evaluation

Moving computation off a robot matters if it makes useful physical work radically cheaper or enables work the robot otherwise cannot perform. Dreamscale Labs identifies a credible bottleneck: increasingly large robotics models outgrowing onboard GPUs. But the dossier does not connect removing that bottleneck to a quantified reduction in the cost of manufacturing, labor, or deployed robotics. The beneficiaries are identifiable; the magnitude of the consequence remains unestablished. I can lose an entire check on an improbable breakthrough. I first need evidence of what that breakthrough buys.

There is actual engineering here. Dreamscale reports 320 ms inference for DreamZero 14B, eight or more simultaneous robots per H100, and 40–50% lower tail latency than unnamed cloud providers. Stream batching and scheduling robots by impending action-buffer exhaustion address a constraint that generic inference platforms need not prioritize. These mechanisms earn technical credit. They do not establish a 5–10x discontinuity against Jetson, Modal, or Runpod. The decisive comparison is successful robot work under equivalent operating conditions. Faster inference can still produce an inferior system if network delays exhaust the action buffer.

The strongest argument against passing is that Dreamscale already has the beginnings of a robotics infrastructure platform. HUD experiments covered 128 concurrent simulated robots and physical rollouts; Munari supplies a named deployment example. Antoine Nguyen’s VLA quantization research gives the team relevant technical context, while Chris Yoo brings software and security experience. This fits my unstated preference for AI that unlocks physical work through specialized infrastructure. A small team could build an important platform before its eventual consequence becomes measurable. But the known exceptions to my technical and economic gates require an extraordinary instigator or independently compelling consequence. This dossier establishes neither. Relevant backgrounds also do not establish fast belief revision or difficult, risk-directed recruiting; those remain unknown.

The first dollars should attack dependence on the network. Dreamscale acknowledges variable connectivity and improving onboard models, which could weaken its proposition from opposite directions. The HUD demonstrations establish execution progress, but the dossier supplies no decisive network-stress experiment, acceptable buffer-exhaustion threshold, experiment budget, or response to failure. Supporting more simulated robots does not by itself settle whether customers can entrust productive physical work to remote inference. That is the uncertainty I would resolve before expanding the deployment footprint.

Economics must include GPU time, networking, local fallback hardware, and integration effort per successful task. Flat hourly pricing without numerical rates supplies no such comparison; the grant establishes neither customer economics nor subsidy dependence. I pass on Dreamscale Labs today. **My flip condition is a customer-verified deployment benchmark showing at least a 5x reduction in total compute and integration cost per successful task against the customer’s best onboard alternative, with equivalent task success and safety performance across its recorded network conditions.** That would turn an interesting serving architecture into evidence that robotics can cross a consequential cost barrier.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Quantifies a 100x Societal Consequence from a 10%-Likely Breakthrough | 7/31 |
| Product Benchmarks a 5?10x Technical Discontinuity Against a Named Incumbent | 13/24 |
| Milestones Spend Dollars Against the Largest Named Kill Risk First | 4/18 |
| Founder Record Shows Fast Belief Revision and Risk-Tuned Magnet Recruiting | 5/15 |
| Scale Model Reaches Unsubsidized Chindia-Price Parity | 3/12 |
| **Total** | **32/100** |

**Total Score: 32/100** (Pass)
