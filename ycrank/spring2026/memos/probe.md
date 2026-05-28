# Probe

> Agent-Native Incident Management

| Field | Value |
|-------|-------|
| Website | https://useprobe.ai/ |
| YC Page | https://www.ycombinator.com/companies/probe |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, SaaS, B2B, DevOps, Enterprise Software |
| YC Partner | David Lieb (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** On-call engineers waste time during incidents reconstructing tribal knowledge (what broke last time, who touched the code, runbooks) scattered across the team's stack (YC company page description).
- **Approach:** A knowledge base grounds AI agents in cross-stack context so that when an engineer is paged, the agent surfaces prior incidents, code ownership, and proposes a fix for engineer approval, then auto-writes the postmortem and updates the KB (YC company page description).
- **Differentiation:** Versus incident.io AI SRE and Rootly AI (both layered on existing incident-response workflow platforms — incident.io blog, Rootly site), Probe is positioned "agent-native" with the agent as the primary actor rather than a co-pilot inside a human workflow (YC company page).
- **Business Model:** No public data found on pricing; [Inferred]: per-seat or per-incident SaaS subscription targeting engineering orgs, consistent with category peers (incident.io, Rootly, FireHydrant publish per-responder/flat-plan pricing).
- **TAM/SAM:** IT/DevOps Incident Management Software market estimated at $14.34B in 2026, projected $53.4B by 2035 at 15.74% CAGR (Market Reports World, 2026); alternate framing places general incident management software at $5.4B by 2026 at 10.7% CAGR (Verified Market Research).
- **GTM / Distribution:** [Inferred]: founder-led direct sales into engineering teams via YC network plus bottom-up Slack/PagerDuty/GitHub integrations, since no public GTM disclosures exist and 0 jobs are posted (YC company page).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond positioning; YC company page describes a proprietary knowledge base accumulating per-customer incident history, which is a data-asset claim not yet validated by disclosed customers.
- **Future moat:** [Inferred]: switching costs from accumulated team-specific tribal-knowledge graph and resolved-incident corpus that would have to be rebuilt at a competitor; unproven because no customer count or retention data is public.
- **Market structure:** [Inferred]: incumbents (PagerDuty, incident.io, FireHydrant, Rootly) center workflows on human responders, so re-architecting around an autonomous agent that auto-resolves could cannibalize per-seat ARR — a soft constraint, not a hard structural barrier; "No structural barrier identified at this stage" remains the conservative read.
- **Commoditization risk:** Multiple well-funded peers — incident.io ($62M Series B at $400M valuation, TechCrunch April 2025), Rootly ($15.3M raised, Crunchbase), FireHydrant ($32.5M raised, BusinessWire) — already ship AI-SRE/agent features (incident.io AI SRE page; Rootly "AI-native" positioning), making the core capability replicable by funded incumbents.

## Market & Traction

- **Traction signals:**
  - Team size: 3 (YC company page).
  - Job postings: 0 open roles (YC company page).
  - Social: company accounts @ProbeYC (X) and useprobe (LinkedIn) exist; follower counts not retrievable.
  - Press coverage: No public data found.
  - Revenue/customers: No public data found.
  - Product Hunt / launch posts: No public data found.
- **Competitors (minimum 3, up to 5):**
  - incident.io ($96M+ total raised, $9M ARR per GetLatka 2025, $400M valuation TechCrunch April 2025): established AI-SRE inside a human-led incident workflow, multi-year enterprise traction.
  - Rootly ($15.3M raised, Series A August 2023 led by Renegade Partners — TechCrunch): workflow-automation incident platform with AI alert grouping, deep Slack integration.
  - FireHydrant ($32.5M total raised, $23M Series B August 2021 led by Harmony Partners — BusinessWire; revenue unknown): runbook automation, service catalog, flat-plan $9.6K/yr pricing (FireHydrant pricing page).
  - PagerDuty (public, NYSE:PD; revenue ~$450M+ FY24 per public filings): legacy on-call + AIOps add-ons across 700+ integrations (Rootly comparison post).
  - Sentrial (YC W26, Launch HN June 2025): adjacent AI-agent failure detection, not direct incident-management overlap.
- **Why now:** [Inferred]: LLM tool-use and context-window cost curves crossed a usability threshold in 2024–2025 enabling autonomous code/log triage; incident.io publicly raised $62M in April 2025 specifically "to build AI agents that resolve incidents" (incident.io blog), evidencing category-level inflection.

## Founders & Team

- **Mahit Namburu (Co-Founder & Chief Product Officer):**
  - Background: EECS at UC Berkeley with SpecDec research; ML inference on LoRA fine-tuned models at Databricks (internship); machine translation models at Apple; declined an MLE offer at Together AI to start Probe (YC company page).
  - Twitter/X: @MahitNamburu (YC company page); follower count not retrievable.
  - LinkedIn: linkedin.com/in/mahitn — headline shown in search snippet as "Databricks" (LinkedIn via search snippet); full headline not retrievable (status 999 on direct fetch).
  - GitHub: No public GitHub handle surfaced in searches; Devpost handle mahitraj noted (Devpost via search snippet).
- **Co-founder relationship:** YC page lists only Mahit Namburu though team size is 3; "No public data on co-founder history" for the other two team members.
- **Founder-market fit:** [Inferred]: ML inference and fine-tuning experience at Databricks plus production ML at Apple maps to building retrieval-grounded agents, but founder has no documented prior SRE/incident-response operating experience (LinkedIn via search snippet); no public advisors, board, or external investors beyond YC found.

## Key Risks

- **Funded-incumbent substitution:** incident.io ($96M+ raised, AI SRE product live — incident.io blog April 2025) and Rootly (AI-native positioning, Crunchbase) ship overlapping agent features with existing enterprise customer bases; Probe must displace not greenfield. No mitigation publicly disclosed.
- **Single publicly-listed founder for a 3-person team:** Only Mahit Namburu is named on the YC page (YC company page); identities, equity split, and technical leadership of the other two team members are not public, creating diligence and key-person risk.
- **Technical feasibility of autonomous remediation:** Agent-proposed fixes during live incidents require high-precision retrieval over heterogeneous logs/code/runbooks; arXiv 2508.14231 ("Incident Analysis for AI Agents") documents agent unreliability in production triage. No public benchmarks from Probe demonstrate solved precision/recall.
- **No public traction:** No revenue, customer logos, press coverage, Product Hunt launch, or community metrics found across searches; YC company page lists 0 open jobs.
- **Name ambiguity:** "Probe" is a generic term overlapping with multiple unrelated X/LinkedIn accounts (@probelive, @theprobemag, @probe_group — X search) and a separate observability tool, complicating SEO and brand search.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | IT/DevOps Incident Management Software ~$14.34B in 2026, 15.74% CAGR to $53.4B by 2035 (Market Reports World, 2026); alt $5.4B by 2026 at 10.7% CAGR (Verified Market Research) |
| SAM | No public data found |
| Traction | Team size 3 (YC page); 0 jobs (YC page); X @ProbeYC and LinkedIn useprobe exist, counts not retrievable; no revenue, customers, or press found |
| Revenue Signal | No public data found |
| Founders | Mahit Namburu (Co-Founder, CPO): UC Berkeley EECS; ex-Databricks (LoRA inference), ex-Apple (machine translation); declined Together AI MLE offer (YC page) |
| Competitors | incident.io ($96M+ raised, $9M ARR, $400M valuation — TechCrunch Apr 2025; established AI-SRE), Rootly ($15.3M raised — Crunchbase; workflow automation + AI alert grouping), FireHydrant ($32.5M raised — BusinessWire; runbook automation, revenue unknown), PagerDuty (public NYSE:PD; legacy on-call + AIOps), Sentrial (YC W26; adjacent agent-failure detection) |
| Moat Signals | No public data found |
| Risk Factors | Funded-incumbent substitution (incident.io/Rootly), single publicly-listed founder with 2 unnamed teammates, autonomous-remediation feasibility unproven |
| Founder Reach | Mahit Namburu: X @MahitNamburu (count not retrievable), LinkedIn mahitn (count not retrievable), GitHub not found |
| Distribution Signals | No public data found |
| Emails | No public data found |

Sources:
- [Probe (company site)](https://useprobe.ai/)
- [Probe on Y Combinator](https://www.ycombinator.com/companies/probe)
- [Mahit Namburu LinkedIn](https://www.linkedin.com/in/mahitn/)
- [incident.io raises $62M (TechCrunch)](https://techcrunch.com/2025/04/10/incident-io-raises-62m-at-a-400m-valuation-to-help-it-teams-move-fast-when-things-break/)
- [incident.io raises $62M (incident.io blog)](https://incident.io/blog/incident.io-raises-62m)
- [incident.io revenue (GetLatka)](https://getlatka.com/companies/incident.io)
- [Rootly $12M Series A (TechCrunch)](https://techcrunch.com/2023/08/10/incident-response-management-platform-rootly-secures-12m/)
- [Rootly funding (Crunchbase)](https://www.crunchbase.com/organization/rootly)
- [FireHydrant $23M Series B (BusinessWire)](https://www.businesswire.com/news/home/20210810005352/en/FireHydrant-Secures-$23M-Series-B)
- [FireHydrant pricing](https://firehydrant.com/blog/series-b/)
- [Rootly Top 5 AI Incident Management 2026](https://rootly.com/sre/top-5-ai-powered-incident-management-platforms-2026)
- [IT/DevOps Incident Management Market (Market Reports World)](https://www.marketreportsworld.com/market-reports/it-or-devops-incident-management-software-market-14727635)
- [Incident Management Software Market (Verified Market Research)](https://www.verifiedmarketresearch.com/product/incident-management-software-market/)
- [Incident Analysis for AI Agents (arXiv)](https://arxiv.org/pdf/2508.14231)
- [Sentrial Launch HN (YC W26)](https://news.ycombinator.com/item?id=47337659)
