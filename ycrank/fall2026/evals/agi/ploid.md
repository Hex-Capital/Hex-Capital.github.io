# Ploid -- AGI Evaluation

**Action:** Pass  
**Evidence confidence:** Low

### Company case

Ploid’s strongest seed case is selling current, identity-matched profiles to sales and recruiting platforms. The memo documents a REST API, CLI, and MCP server for search and enrichment. Ploid reports an index of more than two billion people and uses live retrieval to supplement it. Its research API can return an unresolved result when it cannot distinguish between candidates. (The Idea, Defensibility, Key Risks)

Both AGI paths score zero. For building blocks, sales and recruiting agents need accurate profiles, but the memo describes stale records and manual cleanup without showing that a shortage of usable profiles is holding back agent deployments. Apollo offers people search through MCP, and Crustdata sells live people data through an API. For an AI-enabled industry, natural-language search and automated enrichment could reduce research labor in the existing workflow. The memo identifies no buyer or use that becomes economically viable at the resulting cost per correctly matched, usable profile. (The Idea, Defensibility, Key Risks)

The reported index and matching system provide a potential advantage, with buyer preference and pricing power under comparable alternatives still untested. A founder reports closing clients, and Ploid claims thousands of companies use the product. Those claims and the described manual workarounds provide early demand signals, while paid usage and renewals remain unverified. The shipped interfaces and Hernandez’s prior retrieval work support seed-stage execution credit. Published pricing establishes what buyers would pay per credit, while vendor costs, retrieval costs, and manual review per usable result are missing. The reliance on company-reported traction and the lack of measured buyer outcomes keep confidence low. (The Idea, Defensibility, Market & Traction, Founders & Team, Key Risks, Key Facts)

### Countercase

If a recruiting platform needs to refresh candidate profiles frequently, manual reconciliation could make that cadence uneconomic. Ploid’s live retrieval and cross-site matching could lower the cost enough to sustain it. Even with access to a comparably capable model, the buyer would still need current records and a way to resolve identities. This scenario assumes both that manual work is the binding cost and that Ploid reduces it after accounting for bad matches and unresolved results. The memo describes the workflow and product capabilities, so the zero-path Pass gate still applies until there is evidence of a newly viable use. (The Idea, Defensibility, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 5/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 20/150** (Pass)

### Decisive diligence question

Can a recruiting platform use Ploid for a paid profile refresh at a cadence it previously ruled out on cost? A buyer-confirmed production pilot would answer this if it showed that Ploid met the buyer’s accuracy and freshness targets below its cost ceiling per usable profile, including retries and manual review, while the existing workflow and an alternative data provider using the same model missed that threshold. That result would support Reach out.
