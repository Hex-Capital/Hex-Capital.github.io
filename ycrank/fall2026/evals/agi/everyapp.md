# EveryApp -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Low

### Company case

EveryApp has a narrow case for an industry enabled by superintelligence. Small teams that cannot justify per-seat SaaS costs or the engineering time to deploy custom software could use agents to build and install a shared workflow app. The Gateway handles sign-in, credential brokering, and access to app actions. Under model parity, a team would still need a running app with shared access. The seed-stage assumption is that agent-assisted setup and reusable infrastructure bring the fully loaded cost below what those teams can afford. The memo documents the setup barriers and the released product, while leaving that affordability threshold and adoption by previously excluded teams unverified. (The Idea, Market & Traction, Key Risks)

The building-blocks path scores zero. EveryApp uses Cloudflare infrastructure and connects apps to agents, but the memo identifies no scarce input that limits a specific AI workload. Cloudflare’s own agent deployment tooling also gives teams another route to deploy. (The Idea, Defensibility, Market & Traction)

The strongest commercial signal comes from standalone OpenSEO. The founder reported hundreds of paying customers, and Importivity reported roughly sevenfold organic click growth over six months after building a workflow on an OpenSEO fork. Those signals support demand for the SEO product. EveryApp’s 906 GitHub stars show platform interest, while paid platform demand remains unverified. The team shipped the Gateway, OpenSEO, and the installable-app relaunch, with dependable managed delivery still untested. The announced $10 monthly starting price comes without a cost bridge for supporting the next managed customer. (Market & Traction, Founders & Team, The Idea, Key Facts)

### Countercase

EveryApp may make existing self-hosting workflows more convenient without opening a new use. Teams can deploy OpenSEO independently, competing hosts can reuse the MIT-licensed Gateway, and Cloudflare already provides agent deployment tooling. These are concrete limits on EveryApp’s ability to retain value. Importivity’s experience on a fork also leaves open how much the Gateway contributes to the outcome. If teams using comparable AI can achieve the same workflow at a similar fully loaded cost, the enabled-industry path falls to zero and the decision becomes Pass. Watch reflects the specific affordability gap a seed-stage customer test could resolve. (Defensibility, Market & Traction, Key Risks)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 0/50 |
| Industry enabled by superintelligence | 5/50 |
| Durable value capture | 4/20 |
| Customer demand | 7/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 24/150** (Pass)

### Decisive diligence question

Can small teams that previously went without a specific shared workflow app because of cost deploy it through EveryApp and keep paying to use it? A paid pilot that measures setup time, hosting, maintenance, and support against deployment with comparable AI and Cloudflare tooling would answer it. Sustained use at a fully loaded cost below the teams’ prior affordability threshold, with a measurable advantage from EveryApp’s shared deployment layer, would move the action to Reach out.
