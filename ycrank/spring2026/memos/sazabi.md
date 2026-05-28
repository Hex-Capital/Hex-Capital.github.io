# Sazabi

> The AI-native observability platform for fast-moving engineering teams

| Field | Value |
|-------|-------|
| Website | https://www.sazabi.com/ |
| YC Page | https://www.ycombinator.com/companies/sazabi |
| Batch | Spring 2026 (P26) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 10 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools |
| YC Partner | Aaron Epstein |
| Emails | No public data found |

## The Idea

- **Problem:** Fast-moving engineering teams (early/growth-stage startups) lack specialized observability expertise and find traditional metrics/traces/logs stacks too complex and costly to operate (SiliconANGLE, Apr 2026).
- **Approach:** Log-only telemetry analyzed by an AI agent that runs in perpetuity to detect anomalies, generate alerts, and answer natural-language queries about production systems (SiliconANGLE, Apr 2026; sazabi.com).
- **Differentiation:** Versus Datadog/Honeycomb (full M/L/T stacks) Sazabi argues "logs are just events, metrics are aggregated events, traces are correlated events" and processes only logs (SiliconANGLE, Apr 2026); versus Dash0 (OpenTelemetry-native, enterprise) Sazabi targets early/growth-stage teams and integrates with coding agents Claude Code, Cursor, Codex (sazabi.com).
- **Business Model:** [Inferred]: Consumption or per-seat SaaS based on log volume; no pricing page is published and the site shows a waitlist/pilot flow (sazabi.com).
- **TAM/SAM:** AI-in-Observability market valued at $1.4B in 2026 projected to $10.7B by 2033 at 22.5% CAGR (market.us, 2026); broader observability tool market $4.35B in 2026 (Business Research Insights, 2026).
- **GTM / Distribution:** [Inferred]: Founder/investor network distribution via "tastemakers" at Vercel, Graphite, Daytona, Browserbase, LangChain, Mastra, Replit cited as backers (sazabi.com); waitlist + pilot program funnel (sazabi.com).

## Defensibility

- **Moat today:** Enterprise certifications SOC 2, SOC 1, ISO 27017, ISO 27001, GDPR are listed on the site (sazabi.com); no customer-base, data, or network-effect moat disclosed.
- **Future moat:** [Inferred]: "Perfect Memory" feature claims to learn from past incidents and traffic patterns (sazabi.com), which could create per-customer learned-context switching cost; unproven without customer-tenure data.
- **Market structure:** [Inferred]: Log-only architecture undercuts incumbents whose revenue is tied to metrics + traces + logs ingestion pricing (Datadog, Honeycomb), creating channel-pricing cannibalization if they adopted it; not a regulatory or IP barrier.
- **Commoditization risk:** Dash0 ($155M raised, $1B valuation, Mar 2026; SiliconANGLE) is already building an AI-native observability platform with a 70-person+ team, and Datadog/New Relic are shipping AI features per Gartner (NetworkWorld, 2026).

## Market & Traction

- **Traction signals:**
  - Press: SiliconANGLE feature coverage on stealth exit (SiliconANGLE, Apr 8 2026); Zypsy investment memo (zypsy.com).
  - Podcast: Mastra Podcast episode with Sherwood Callaway (mastra.ai, 2026).
  - Status: Waitlist + pilot program ("You're in") on landing page; pre-revenue, platform delivery scheduled by end of 2026 (SiliconANGLE, Apr 2026).
  - Social: Company accounts at x.com/sazabi, linkedin.com/company/sazabi, github.com/sazabi exist; follower counts not retrievable.
  - Hiring: Company-data field lists Hiring=False; no active YC job postings found.
- **Competitors:**
  - Dash0 ($155M raised, revenue unknown, $1B valuation Mar 2026; SiliconANGLE): OpenTelemetry-native AI observability targeting broader enterprise vs Sazabi's startup focus.
  - Honeycomb ($150M raised, revenue unknown; Tracxn 2026): event-based observability, established Series D, lacks log-only AI-agent thesis.
  - Datadog (public, $2.68B FY24 revenue context; OpenObserve 2026 cites 47,431+ customers): incumbent M/L/T platform — pricing model conflicts with log-only collapse.
  - Coroot (funding undisclosed; Metoro 2026): OSS eBPF Kubernetes observability — open-source distribution vs Sazabi's closed SaaS.
  - Resolve.ai / Traceloop: adjacent AI-ops/LLM-observability players; funding data not surfaced in search.
- **Why now:** [Inferred]: Coding agents (Claude Code, Cursor, Codex) generating production code at scale created new debugging surface area — Sazabi positions "AI behavior as a new class of telemetry" (search snippet, 2026); LLM-observability segment grew to $2.69B in 2026 (Confident AI, 2026).

## Founders & Team

- **Sherwood Callaway (Founder & CEO):**
  - Background: Dev Bootcamp 2014 (search snippet); software engineer 10+ years at Brex and Crunchbase; founded Opkit (YC W23, AI phone calls for US healthcare insurance verification, raised $1M in 2023 per AlleyWatch) which was acquired by 11x; led AI infra at 11x for "Alice" agentic system; a16z Infra Scout (LinkedIn headline).
  - Twitter/X: @shcallaway (also @realshcallaway); count not retrievable.
  - LinkedIn: "Founder @ Sazabi ◆ Infra Scout @ a16z" (linkedin.com/in/sherwoodcallaway, 500+ connections per search snippet).
  - GitHub: @shcallaway, 68 followers (search snippet); repos include react-node-skeleton, semantic-cache-chatbot, gmail-mcp-server, dspy-gepa-example; no repo with public star count surfaced.
- **Other team identified:** Ed Carrel and Henry Ventura appear in the chat demo on sazabi.com; roles/backgrounds not publicly documented in surfaced sources.
- **Co-founder relationship:** No public data on co-founder history; Callaway is described as sole founder in Zypsy memo and SiliconANGLE.
- **Founder-market fit:** Callaway led AI infrastructure at 11x for the "Alice" agentic system described as "one of the largest agentic systems in production" (Zypsy, 2026), giving direct operating experience with the AI-code debugging problem; backers cited include individuals from Vercel, Graphite, Daytona, Browserbase, LangChain, Mastra, Replit and funds Village Global and Agent Fund (sazabi.com; Zypsy, 2026).

## Key Risks

- **Well-funded direct competitor:** Dash0 closed a $110M Series B at a $1B valuation in March 2026 with the explicitly identical "AI-native observability" positioning (SiliconANGLE, Mar 23 2026), preceding Sazabi's April 2026 stealth exit; no mitigation identified beyond startup-segment focus.
- **Log-only thesis is unproven for full-fidelity observability:** Industry-standard practice combines logs, metrics, and traces; Sazabi's claim that logs alone are sufficient (SiliconANGLE, Apr 2026) is a technical bet that could fail for latency/percentile-sensitive workloads — no third-party benchmark or customer validation has been published.
- **Pre-revenue with delivery deferred to end of 2026:** Platform delivery is scheduled by end of 2026 (SiliconANGLE, Apr 2026) while incumbents (Datadog, Dash0, Honeycomb) ship AI features now per Gartner (NetworkWorld, 2026), creating a closing window risk.
- **Name collision:** "Sazabi" is also a well-known Gundam mecha (MSN-04 Sazabi, Gundam Wiki), which may dilute organic search/brand discovery; no mitigation found.
- **Undisclosed funding runway:** Seed round is "in process of being raised" as of April 2026 (SiliconANGLE, Apr 2026); no amount or close date disclosed publicly.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI-in-Observability $1.4B in 2026 → $10.7B by 2033 at 22.5% CAGR (market.us, 2026); Observability Tool market $4.35B in 2026 (Business Research Insights, 2026); AIOps $14.44B in 2026 (Research and Markets, 2026) |
| SAM | No public data found |
| Traction | Stealth exit Apr 8 2026 (SiliconANGLE); SOC 2/SOC 1/ISO 27017/ISO 27001/GDPR listed (sazabi.com); waitlist + pilot program (sazabi.com); Mastra podcast appearance (mastra.ai, 2026) |
| Revenue Signal | No public data found |
| Founders | Sherwood Callaway (Founder/CEO): 2x YC founder, sold Opkit (YC W23) to 11x, led AI infra at 11x for Alice, ex-Brex, ex-Crunchbase, a16z Infra Scout (Zypsy 2026; LinkedIn) |
| Competitors | Dash0 ($155M raised, revenue unknown, AI-native obs at $1B valuation; SiliconANGLE Mar 2026), Honeycomb ($150M raised, revenue unknown, event-based obs; Tracxn 2026), Datadog (public, M/L/T incumbent, 47,431+ customers per OpenObserve 2026), Coroot (funding undisclosed, OSS eBPF Kubernetes obs; Metoro 2026) |
| Moat Signals | SOC 2, SOC 1, ISO 27017, ISO 27001, GDPR certifications (sazabi.com); "Perfect Memory" learning feature (sazabi.com) |
| Risk Factors | Direct $1B-valuation competitor (Dash0), unproven log-only thesis, delivery deferred to end of 2026 |
| Founder Reach | Sherwood Callaway: Twitter @shcallaway (count not retrievable), LinkedIn 500+ connections (search snippet), GitHub @shcallaway 68 followers (search snippet) |
| Distribution Signals | SiliconANGLE coverage Apr 8 2026; Zypsy investor memo; Mastra podcast (2026); waitlist + pilot funnel on sazabi.com; backer endorsements from Vercel, Graphite, Daytona, Browserbase, LangChain, Mastra, Replit, Village Global, Agent Fund (sazabi.com; Zypsy 2026) |
| Emails | No public data found |

Sources:
- [Sazabi | AI-Native Observability](https://www.sazabi.com/)
- [Sazabi | Y Combinator](https://www.ycombinator.com/companies/sazabi)
- [Startup Sazabi bets on logs and AI agents to replace traditional observability stacks (SiliconANGLE)](https://siliconangle.com/2026/04/08/startup-sazabi-bets-logs-ai-agents-replace-traditional-observability-stacks/)
- [Investing in Sazabi | Zypsy](https://www.zypsy.com/blog/investing-in-sazabi)
- [Sherwood Callaway - LinkedIn](https://www.linkedin.com/in/sherwoodcallaway/)
- [shcallaway - GitHub](https://github.com/shcallaway)
- [Opkit | Y Combinator](https://www.ycombinator.com/companies/opkit)
- [Opkit Raises $1M (AlleyWatch)](https://alleywatch.com/2023/03/155313/)
- [Dash0 Series B $110M at $1B valuation (SiliconANGLE)](https://siliconangle.com/2026/03/23/dash0-raises-110m-1b-valuation-change-cloud-observability-ai-agents/)
- [Honeycomb funding profile (Tracxn)](https://tracxn.com/d/companies/honeycomb/__tJybN_GB4yMN362gyCQOawpe2YVYRJEaMFeQL901nIw)
- [AI in Observability Market - market.us](https://market.us/report/ai-in-observability-market/)
- [Observability Tool Market 2026-2035 (Business Research Insights)](https://www.businessresearchinsights.com/market-reports/observability-tool-market-122304)
- [Top 10 Datadog Competitors 2026 (OpenObserve)](https://openobserve.ai/blog/datadog-competitors/)
- [Mastra Podcast: Sazabi with Sherwood Callaway](https://mastra.ai/podcasts/sazabi-ai-native-observability-for-fast-moving-teams-with-sherwood-callaway)
