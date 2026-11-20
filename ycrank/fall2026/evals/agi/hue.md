# Hue -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Medium

### Company case

Hue targets regression testing for agents that send email or update CRMs. Hue says mocked APIs and empty sandboxes omit the app state behind production failures. Its documented approach reconstructs that state from recorded requests and gives each run an isolated copy of a selected checkpoint. The memo reports rising agent tool calls, which could increase the volume of stateful tests. It provides no evidence that access to realistic test environments delays deployments or that teams cannot add equivalent capacity. Commercial trace replay and open-source state restoration are already available. The building-block path scores zero. (The Idea, Market & Traction, Defensibility)

The industry-enabled path also scores zero. Hue’s described cost lever is reconstructing and reusing app state in an existing QA workflow. The memo identifies neither an AI-driven reduction in labor per successfully reproduced failure nor a buyer or testing cadence that becomes economically viable because of it. (The Idea, Key Risks)

Hue’s checkpoint selection could make a growing library of regression cases sticky. That is an inference, and overlapping tools support a low value-capture score. The reported 69,000 weekly SDK downloads and Hue’s account of teams using mocks and sandboxes support a modest demand score. The memo identifies no paid deployments or repeat buyer use. The published SDK and the founders’ prior agent delivery support execution credit, while replay from incomplete or redacted traces remains a delivery risk. Subscription terms establish a billing model, with no operating evidence to estimate contribution after hosting, replica maintenance, and support. Those gaps limit confidence in the commercial case. (Defensibility, The Idea, Market & Traction, Founders & Team, Key Risks)

### Countercase

High-fidelity replay could become a release bottleneck for agents whose failures depend on an exact inbox or CRM state. Hue’s reusable checkpoints address that specific workload, and growing tool use could increase the number of cases teams need to reproduce. That case assumes these failures routinely block releases and that available alternatives cannot reproduce them within the buyer’s time and data-handling limits. The memo supplies no buyer comparison or deployment evidence for those assumptions. Both path scores remain zero, triggering Pass. (The Idea, Market & Traction, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 4/20 |
| Customer demand | 5/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 17/150** (Strong Pass)

### Decisive diligence question

Can Hue repeatedly reproduce release-blocking failures from a paying customer’s permitted production traces within a release window that the customer’s existing workflow and a credible replay alternative both miss? A side-by-side deployment showing that result on representative cases would move the action to Reach out to test how often the same constraint recurs across buyers.
