# Tilion -- AGI Evaluation

**Action:** Watch  
**Evidence confidence:** Medium

### Company case

Tilion has a seed-stage building-blocks case for browser agents that repeatedly collect or monitor data on live sites. These workloads need browser sessions that complete tasks unattended. The memo reports a 4.7× month-over-month increase in agentic browser requests and a site-owner policy that blocks classified agent traffic on some pages. These observations establish rising usage and access friction. Tilion says its hosted service can reassign tasks after session failures. If transient failures are a material source of lost runs on sites where the buyer has permission to automate, reassignment could make more of those runs viable. The independent pre-release benchmark measured a 0.11-second median session lifecycle. End-to-end completion, recovery rates, and the scarcity of reliable alternatives remain unmeasured. That gap warrants Watch. (*The Idea*, *Market & Traction*, *Key Risks*)

The industry-enabled path scores zero. The memo describes infrastructure for existing data collection and monitoring workflows and supplies no evidence of a previously excluded buyer or use becoming affordable through AI-driven labor savings. (*The Idea*, *Market & Traction*)

The custom Chromium fork and Tilion’s reported monthly rebases support some credit for operating know-how. Tilion’s reported use by engineers at more than 170 companies and Fortress’s public repository activity suggest early adoption, with paid conversion and repeat use still open. The team shipped Fortress and has relevant browser infrastructure and model-serving experience. An independently observed failed session launch and the current Cloud waitlist leave dependable hosted delivery open. The advertised $0.03 per browser-hour supplies a revenue assumption. Hosting, retries, and support costs per successful run are unknown, so scale economics stays at the default. (*Defensibility*, *Market & Traction*, *Founders & Team*, *Key Risks*, *Key Facts*)

### Countercase

Reliable sessions may be available from existing providers for the workloads Tilion can serve. Kernel posted a 0.15-second median session lifecycle in the same benchmark, and standard automation interfaces could make switching easier. Where the binding constraint is a site owner’s access policy, task reassignment has no demonstrated effect. This limits the scarcity case and supports Watch. The plausible recovery benefit for permitted workflows keeps the both-paths-zero Pass gate from applying. (*The Idea*, *Defensibility*, *Market & Traction*, *Key Risks*)

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Building blocks of superintelligence | 18/50 |
| Industry enabled by superintelligence | 0/50 |
| Durable value capture | 7/20 |
| Customer demand | 6/15 |
| Team and execution | 6/10 |
| Scale economics | 2/5 |

**Total Score: 39/150** (Pass)

### Decisive diligence question

Can Tilion consistently meet a prospective buyer’s required unattended completion rate on a permitted monitoring workflow that the buyer’s best available browser provider cannot meet at the same budget? A side-by-side pilot using representative runs and counting retries against the budget would answer it. A repeatable result that crosses the buyer’s threshold would move the action to Reach out. Comparable completion from the existing provider would move it to Pass.
