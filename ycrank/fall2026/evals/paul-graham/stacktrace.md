# Stacktrace -- Paul Graham Evaluation

Stacktrace has shipped something. What I cannot yet see is what the founders did when something refused to work. The CLI reached version 0.17.0 on October 27, and the documentation describes local transcript processing, component attribution, and deterministic detection rules ([PyPI](https://pypi.org/project/stacktrace-cli/), [documentation](https://docs.stacktrace.ai/how-it-works/)). Those are concrete artifacts. They earn technical credit. But a release number does not tell me which obstacle the founders overcame, how quickly they overcame it, or what changed afterward. That distinction matters because resourcefulness is my first test.

The founders have unusually relevant experience. Kone handled software supply-chain security at Harness, Benedict led infrastructure, security, and AI-platform work at Airtable, and Ganta spent years building Amazon systems ([founder biographies](https://stacktrace.ai/about/)). They should understand why installing another security product can itself become a security project. Local processing and attribution to installed components could make investigation easier. But the dossier never connects Stacktrace’s origin to a specific incident they personally encountered. Nor does it document a rejected hypothesis and subsequent product change. I give their experience weight as context; I cannot spend it again as evidence of resourcefulness, organic discovery, and adaptability.

The strongest case for investing is that these founders have already built the beginning of the system customers will need. Unattended agents create an awkward operational burden, and Stacktrace offers a CLI, a browser sandbox, and an inline gateway rather than merely describing a future platform. This partly matches my preference for technical interfaces built before their category settles. The important limitation is that the endpoint sidecar reads logs and cannot itself stop calls; blocking requires the gateway, and dynamic steering is still forthcoming ([Fleet](https://stacktrace.ai/fleet/)). The shipped software is meaningful proof of execution. It is weaker proof that Stacktrace can reliably control the failures customers most fear.

Who needs this badly enough to keep it running? The disclosed design partners suggest some interest, but their names, deployments, and return usage are unavailable ([founder announcement](https://www.linkedin.com/posts/michealb_quick-life-update-very-excited-to-have-activity-7505360994722979840-unjs)). The free tier permits 100 agents and 200 session-hours monthly, so meaningful adoption could precede revenue ([pricing](https://stacktrace.ai/pricing/)). I would look for that usage rather than demand an enterprise contract at this stage. Without it, I cannot distinguish an indispensable tool from a useful demonstration. Noma’s overlapping enforcement features make that distinction consequential: Stacktrace needs a small group that urgently prefers its particular approach ([Noma](https://noma.security/)).

I would pass on the present evidence. There is no documented dependence on a large distribution partner or premature delegation of product work; the design partners alone do not establish those red flags. But the exceptional cases that justify overlooking missing founder evidence require unusually compelling product behavior, user pull, or validated technical results. Stacktrace has a functioning artifact without that stronger replacement evidence. My verifiable flip condition is one documented customer episode: a production failure, a founder-built workaround shipped within a week, and subsequent logs showing that customer using the fix repeatedly for 30 days. That would reveal both what these founders do under resistance and whether anyone urgently wants the result.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Turns a Named Blocker into a Shipped Workaround | 8/31 |
| Fierce Nerd Ships a Measured Technical Proof Before Permission | 17/23 |
| A Named User Niche Pulls the Crude Product Back | 6/18 |
| Goal Persists While the Product Route Changes on Evidence | 6/16 |
| Founder-Originated Need Opens a Schlep-Heavy Wedge | 4/12 |
| **Total** | **41/100** |

**Total Score: 41/100** (Pass)
