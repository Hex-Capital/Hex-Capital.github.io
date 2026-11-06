# Reason Machines

> Reason is the AI teammate for work and code.

| Field | Value |
|-------|-------|
| Website | https://reasonmachines.com |
| YC Page | https://www.ycombinator.com/companies/reason-machines |
| Batch | Fall 2026 in current [YC jobs metadata](https://www.ycombinator.com/companies/reason-machines/jobs); Spring 2026 in [earlier listings](https://ycwatcher.info/en/companies/reason-machines) |
| Industry | B2B / B2B -> Productivity |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Enterprise Software, Cloud Computing |
| YC Partner | Aaron Epstein ([YC founder profile](https://www.ycombinator.com/founders/adifounder)) |
| Emails | contact@reasonmachines.com ([website](https://reasonmachines.com)); adi@reasonmachines.com ([Adi’s website](https://www.adisingh.com/)); sven@reasonmachines.com ([Sven’s LinkedIn](https://www.linkedin.com/in/svemyh), via search snippet) |

## The Idea

- **Problem:** Engineering teams using interactive coding agents still manage interruptions, execution environments, testing, and reviews manually, according to Reason’s infrastructure case study ([Blaxel, September 2026](https://blaxel.ai/blog/reason-machines-built-autonomous-swe-on-blaxel)).
- **Approach:** A persistent agent controller operates separately from execution machines, attaches to cloud or local environments, and completes coding tasks through tested pull requests ([Blaxel, September 2026](https://blaxel.ai/blog/reason-machines-built-autonomous-swe-on-blaxel)).
- **Differentiation:** Reason reports 22% lower cost per solved task than Codex and 10% below Pi using GPT-6 Astra, while separating its controller from interchangeable execution machines ([Reason, October 2026](https://reasonmachines.com/blog/introducing-reason-agent-1-1); [Product Hunt](https://www.producthunt.com/products/dereference-the-100x-ide?launch=reason-10)).
- **Business Model:** Pro costs $50/person/month with 1,250 weekly credits, Max costs $200/person/month with 5,000 weekly credits, and Enterprise uses negotiated pricing ([Reason plans, accessed November 2026](https://docs.reasonmachines.com/docs/plans)).
- **TAM/SAM:** The broader AI code tools market is estimated at $9.8B in 2026, reaching $26B by 2030 at 27.1% CAGR during 2024–2030; no company-specific SAM is published ([Grand View Research, updated June 2026](https://www.grandviewresearch.com/industry-analysis/ai-code-tools-market-report)).
- **GTM / Distribution:** Reason offers current and alumni YC companies $1,000 in credits through Bookface and distributes through its website, desktop app, terminal, Slack, and Product Hunt ([Reason, September 2026](https://reasonmachines.com/blog/yc); [Product Hunt](https://www.producthunt.com/products/dereference-the-100x-ide?launch=reason-10)).

## Defensibility

- **Moat today:** Public technical evidence includes parallel tool execution, deferred tool discovery, and an append-only prompt design intended to preserve caching, although the company has not isolated each mechanism’s contribution to savings ([Reason, October 2026](https://reasonmachines.com/blog/introducing-reason-agent-1-1)).
- **Future moat:** [Inferred]: Saved environments, reusable skills, and coordination across teammates’ agents could create switching costs, but their effect on retention is unverified.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Reason’s harness builds on Pi, while its agent messaging engine uses MIT/Apache licenses that permit competing developers to reuse that component ([Reason](https://reasonmachines.com/blog/introducing-reason-agent-1-1); [GitHub](https://github.com/reason-machines/reason-network)).

## Market & Traction

- **Traction signals:**
  - Founder-reported 10,000 users and 300 active customer Slack channels reached over the preceding 14 days ([Adi Singh’s X post, mirrored by teapawt, October 22, 2026](https://teapaw.org/xadisingh/status/2113376154103247221)).
  - Approximately 1,600 stars and 138 forks for Reason Network ([GitHub, accessed November 5, 2026](https://github.com/reason-machines/reason-network)).
  - Company X account @reasonmachines: approximately 13,700 followers ([teapawt mirror, accessed November 5, 2026](https://xitter.gq/reasonmachines)).
  - Company LinkedIn: 2,433 followers ([LinkedIn, accessed November 5, 2026](https://www.linkedin.com/company/reasonmachines)).
  - Reason launch listing displays daily rank #8 and 118 points ([Product Hunt, retrieved November 5, 2026](https://www.producthunt.com/products/dereference-the-100x-ide?launch=reason-10)).
  - Coverage of Reason’s benchmark claims and Ara-to-Reason transition ([Shifter, October 14, 2026](https://www.shifter.no/nyheter/norsk-yc-startup-hevder-a-sla-openai-i-kodeagent-test/478935)).
  - One engineering internship advertised in San Francisco ([YC jobs, November 5, 2026](https://www.ycombinator.com/companies/reason-machines/jobs)).
  - Prior product Ara was marketed as a self-driving IDE before the Reason branding appeared by September; historical launch activity is distinct from the October Reason user claim ([YC Watcher](https://ycwatcher.info/en/companies/reason-machines); [company LinkedIn](https://www.linkedin.com/company/reasonmachines)).
- **Competitors:**
  - **Cursor** ($3.38B raised; estimated $4B annualized revenue in May 2026): combines an editor, proprietary models, and cloud agents; its last disclosed financing was a $2.3B Series D in November 2025 led by Accel and Coatue, before joining SpaceX ([Sacra](https://sacra.com/c/cursor/); [Reuters/CNA](https://www.channelnewsasia.com/business/code-gen-startup-cursor-nearly-triples-its-valuation-in-coatue-led-funding-round-5465706); [Cursor](https://cursor.com/blog/joining-spacex)).
  - **Cognition/Devin** (approximately $3.6B+ reported funding; $1B annualized revenue run rate in September 2026): combines proprietary coding models, cloud execution, and the Windsurf-derived desktop; its September 2026 Series E exceeded $2B, led by Andreessen Horowitz and Accel ([funding compilation](https://valueaddvc.com/blog/cognition-devin-ai-coding-agent-company-deep-dive); [Cognition financing](https://cognition.com/blog/series-e), [revenue](https://cognition.com/blog/1b-run-rate), [desktop](https://cognition.com/blog/introducing-devin-desktop)).
  - **Factory** (over $400M raised; Sacra-estimated $60M annualized revenue in March 2026): emphasizes enterprise governance and cloud, on-premises, or air-gapped deployment; its September 2026 round raised $200M from investors including Blackstone, Khosla, and Sequoia, without naming a lead ([Factory](https://factory.com/news/5-billion-valuation); [Sacra](https://sacra.com/c/factory/)).
- **Why now:** [Inferred]: The shift toward managing simultaneous local and cloud agents creates demand for shared coordination, reflected in Cognition’s June 2026 launch of an agent command center and shared context spaces ([Cognition](https://cognition.com/blog/introducing-devin-desktop)).

## Founders & Team

- **Adi Singh (Co-founder):**
  - Background: Studied at UC Berkeley and NTNU, co-founded Rust IDE company Dereference, and previously worked at Scale AI; exit data: No public data found ([personal website](https://www.adisingh.com/); [YC](https://www.ycombinator.com/founders/adifounder)).
  - Twitter/X: @xadisingh, approximately 2,600 followers ([teapawt mirror, November 5, 2026](https://teapaw.org/xadisingh)).
  - LinkedIn: Public profile; headline: No public data found; approximately 5,000 followers ([LinkedIn, via search snippet, October 2026 crawl](https://www.linkedin.com/in/adisinghlink)).
  - GitHub: @adisinghstudent; pinned company repository reason-network has approximately 1,600 stars ([GitHub, November 2026](https://github.com/adisinghstudent)).
- **Sven Myhre (Co-founder):**
  - Background: Studied EECS at UC Berkeley and cybernetics at NTNU, worked at Equinor, Q-Free, and Wärtsilä, and won the 2025 Norwegian AI Championship; exit data: No public data found ([personal website](https://www.myhre.co/)).
  - Twitter/X: @svemyh, approximately 4,900 followers ([teapawt mirror, November 5, 2026](https://teapawt.net/svemyh)).
  - LinkedIn: Public profile; headline: No public data found; approximately 4,000 followers ([LinkedIn, via search snippet, October 2026 crawl](https://www.linkedin.com/in/svemyh)).
  - GitHub: @svemyh; pinned DiscoverDCP repository has two stars ([GitHub, November 2026](https://github.com/svemyh)).
- **Co-founder relationship:** Both studied at Berkeley and reportedly built and lived together across four cities before leaving university to build Ara ([YC announcement reproduced on company LinkedIn](https://www.linkedin.com/company/reasonmachines)).
- **Founder-market fit:** Documented experience spans IDE construction and production ML systems, YC is a disclosed backer, and Shifter also identifies engineer Lars Talian as part of the team ([YC](https://www.ycombinator.com/founders/adifounder); [Sven’s website](https://www.myhre.co/); [Shifter, October 2026](https://www.shifter.no/nyheter/norsk-yc-startup-hevder-a-sla-openai-i-kodeagent-test/478935)).

## Key Risks

- **Benchmark transfer:** Performance comparisons are company-run reproductions without Artificial Analysis endorsement, and the referenced index has since changed; public methodology and job records permit replication ([Reason](https://reasonmachines.com/blog/introducing-reason-agent-1-1)).
- **Competitive overlap:** Devin already supports shared agent context and external agents, while Factory supports model choice and controlled deployment, overlapping Reason’s coordination proposition ([Cognition](https://cognition.com/blog/introducing-devin-desktop); [Factory](https://factory.com/news/5-billion-valuation)).
- **Provider dependence:** Third-party model, hosting, authentication, and connected-service changes can disrupt operation; Reason’s terms expressly acknowledge these dependencies ([Reason terms](https://reasonmachines.com/terms-of-service)).
- **Autonomous execution:** Agents can modify files, execute code, and act on connected accounts; Reason requires user validation and backups and documents isolation and workspace access controls ([Reason terms](https://reasonmachines.com/terms-of-service)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI code tools: $9.8B in 2026; 27.1% CAGR, 2024–2030 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/ai-code-tools-market-report)) |
| SAM | No public data found |
| Traction | Founder-reported 10,000 users and 300 active customer Slack channels, October 22, 2026 ([X post mirror](https://teapaw.org/xadisingh/status/2113376154103247221)); approximately 1,600 repository stars, November 2026 ([GitHub](https://github.com/reason-machines/reason-network)) |
| Revenue Signal | Pro $50/person/month; Max $200/person/month; Enterprise negotiated ([Reason plans, November 2026](https://docs.reasonmachines.com/docs/plans)) |
| Founders | Adi Singh: Dereference, Berkeley/NTNU, Scale AI ([YC](https://www.ycombinator.com/founders/adifounder)); Sven Myhre: Berkeley/NTNU, production ML, AI championship winner ([personal website](https://www.myhre.co/)) |
| Competitors | Cursor: $3.38B raised, estimated $4B annualized revenue, editor/model integration ([Sacra](https://sacra.com/c/cursor/)); Cognition: approximately $3.6B+ raised, $1B run rate, proprietary models ([funding compilation](https://valueaddvc.com/blog/cognition-devin-ai-coding-agent-company-deep-dive), [Cognition](https://cognition.com/blog/1b-run-rate)); Factory: >$400M raised, estimated $60M run rate, enterprise deployment controls ([Factory](https://factory.com/news/5-billion-valuation), [Sacra](https://sacra.com/c/factory/)) |
| Moat Signals | Cache-preserving harness and parallel tool execution ([Reason technical disclosure](https://reasonmachines.com/blog/introducing-reason-agent-1-1)) |
| Risk Factors | Company-run benchmarks, third-party dependencies, autonomous account actions ([Reason benchmarks](https://reasonmachines.com/blog/introducing-reason-agent-1-1), [terms](https://reasonmachines.com/terms-of-service)) |
| Founder Reach | Adi: X ≈2.6K ([mirror](https://teapaw.org/xadisingh)), LinkedIn ≈5K ([search snippet](https://www.linkedin.com/in/adisinghlink)); Sven: X ≈4.9K ([mirror](https://teapawt.net/svemyh)), LinkedIn ≈4K ([search snippet](https://www.linkedin.com/in/svemyh)) |
| Distribution Signals | YC Bookface credit offer ([Reason, September 2026](https://reasonmachines.com/blog/yc)); Product Hunt #8 daily listing ([Product Hunt](https://www.producthunt.com/products/dereference-the-100x-ide?launch=reason-10)); LinkedIn 2,433 followers ([LinkedIn, November 2026](https://www.linkedin.com/company/reasonmachines)) |
| Emails | contact@reasonmachines.com ([website](https://reasonmachines.com)); adi@reasonmachines.com ([founder website](https://www.adisingh.com/)); sven@reasonmachines.com ([LinkedIn, via search snippet](https://www.linkedin.com/in/svemyh)) |
