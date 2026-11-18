# Mirrors -- Hypergrowth Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

**Path A — Product-led adoption.** The initial buyer is an engineering team running customer-facing AI agents. Its recurring job is to stop known failures from recurring in production. The memo records a Python SDK release and public launches. Mirrors offers self-serve signup and describes a workflow for scoping a rule, previewing where it would apply, and comparing live outcomes. If teams can reach first value through that workflow on their own, they could add more agents or workflows and grow paid usage under the $299 monthly Growth plan plus $0.005 per turn. (*The Idea*, *Market & Traction*, *Key Facts*)

Mirrors reports one design-partner example in which an agent hit 75 errors despite a stop rule in its prompt. The example shows a concrete failure mode, with buyer commitment and the effect of Mirrors’ guidance still unverified. The company’s reported 63,052 turns have an unspecified counting period and no disclosed paid or repeat-use breakdown. The memo also lacks an independent buyer activation through self-serve, so current fit and repeatable onboarding remain unproven. (*Market & Traction*, *Key Facts*)

The growth scenario assumes the same SDK and rule workflow can serve buyers in a second geography, subject to local trace-data handling and production latency requirements. Each new account may add integration and support work, while each additional turn adds rule-matching infrastructure load. The memo gives pricing but no incremental cost measurements, so contribution at higher volume remains unknown. (*The Idea*, *Key Risks*, *Key Facts*)

### Countercase

Teams may handle recurring failures with steering hooks or middleware they already use. Mirrors’ preview and outcome comparisons would have to justify a separate production dependency. A delivered rule can still be ignored, and Mirrors says the agent proceeds without the rule after a 750 ms timeout. If teams need hands-on tuning for each workflow, the self-serve model could become support-intensive. The memo establishes neither a structural ceiling on global demand nor proportional delivery costs, so the Pass gate remains unmet. (*Defensibility*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Global buyer demand | 9/25 |
| Repeatable acquisition and onboarding | 9/25 |
| Retention and customer expansion | 7/20 |
| Contribution as volume grows | 7/20 |
| Evidence of fit in the first buyer segment | 4/10 |

**Total Score: 36/100** (Pass)

### Decisive diligence question

Can an independent engineering team outside the U.S. reach paid production use through the standard SDK without founder-led setup? One team that measures fewer repeat failures against comparable runs and then pays to keep the guidance live would move the action to Reach out. Until that result, the action stays Watch.
