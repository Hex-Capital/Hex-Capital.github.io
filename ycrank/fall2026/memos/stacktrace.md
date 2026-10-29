# Stacktrace

> See and control what your agents actually do

| Field | Value |
|-------|-------|
| Website | https://stacktrace.ai |
| YC Page | https://www.ycombinator.com/companies/stacktrace |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/stacktrace)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | DevSecOps, Cybersecurity, Infrastructure, AI |
| YC Partner | Christopher Golda ([YC](https://www.ycombinator.com/companies/stacktrace)) |
| Emails | hello@stacktrace.ai ([company LinkedIn](https://www.linkedin.com/company/stacktrace-ai)); founders@stacktrace.ai ([founder profile, via search snippet](https://www.linkedin.com/in/michealb)) |

## The Idea

- **Problem:** Engineering and security teams cannot continuously supervise unattended agents that expose credentials, stall, or deviate from instructions, leaving manual monitoring as the alternative described by the founders ([Benedict’s announcement](https://www.linkedin.com/posts/michealb_quick-life-update-very-excited-to-have-activity-7505360994722979840-unjs)).
- **Approach:** Stacktrace reads agent session logs, attributes tool calls to installed components, applies deterministic detection rules, and sends findings to Fleet, Slack, or the running agent ([technical documentation](https://docs.stacktrace.ai/how-it-works/)).
- **Differentiation:** Stacktrace documents local transcript processing and component attribution, whereas Oligo emphasizes application-process monitoring using eBPF and Noma evaluates actions against session, identity, and access context ([Stacktrace](https://docs.stacktrace.ai/how-it-works/), [Oligo](https://www.oligo.security/), [Noma](https://noma.security/)).
- **Business Model:** Team is free for unlimited users, up to 100 agents and 200 session-hours monthly, while Enterprise offers annual custom pricing with session-hour volume commitments and Gateway has annual custom company pricing ([pricing, accessed Oct 27, 2026](https://stacktrace.ai/pricing/)).
- **TAM/SAM:** The broader agentic AI security market is estimated at $1.8 billion in 2026, reaching $17.8 billion in 2033 at 38.9% CAGR; Stacktrace’s narrower SAM has no public estimate ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report)).
- **GTM / Distribution:** Distribution includes self-service signup, a browser sandbox, CLI installation, founder demonstrations, and recruitment of design partners running agents in production workflows ([website](https://stacktrace.ai/), [founder announcement](https://www.linkedin.com/posts/michealb_quick-life-update-very-excited-to-have-activity-7505360994722979840-unjs)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Embedded organization policies and accumulated detection tuning could create switching costs, but public retention and detection-improvement measurements were not found.
- **Market structure:** [Inferred]: No structural barrier identified at this stage.
- **Commoditization risk:** Competitors can reuse Stacktrace’s Apache-2.0 session-collection and composition-analysis foundations, although these packages do not include the complete proprietary product ([OpenAIDR](https://docs.stacktrace.ai/open-source/openaidr/), [OpenACA](https://docs.stacktrace.ai/open-source/openaca/), [product terms](https://stacktrace.ai/terms/)).

## Market & Traction

- **Traction signals:**
  - Design partners running agents locally and unattended in the cloud; names, contracts, and deployment counts undisclosed ([founder announcement, accessed Oct 27, 2026](https://www.linkedin.com/posts/michealb_quick-life-update-very-excited-to-have-activity-7505360994722979840-unjs)).
  - 233 company LinkedIn followers ([LinkedIn, accessed Oct 27, 2026](https://www.linkedin.com/company/stacktrace-ai)).
  - 22 company X followers for @stacktrace_ai, reported by a third-party mirror ([Sotwe, accessed Oct 27, 2026](https://www.sotwe.com/Stacktrace_ai?lang=id)).
  - NVIDIA Inception membership ([company About page, accessed Oct 27, 2026](https://stacktrace.ai/about/)).
  - CLI version 0.17.0 published October 27, 2026 ([PyPI](https://pypi.org/project/stacktrace-cli/)).
  - Related OpenACA repository: 9 stars; Stacktrace integration repository: 0 stars ([OpenACA GitHub](https://github.com/open-agent-security/openaca), [plugin GitHub](https://github.com/stacktrace-ai/stacktrace-plugin), accessed Oct 27, 2026).
  - $500,000 reported funding dated September 1, 2026, attributed to YC; company-specific terms were not independently verified ([CB Insights, via search snippet](https://www.cbinsights.com/company/stacktrace-ai/financials)).
  - Zero advertised YC job openings ([YC Jobs, accessed Oct 27, 2026](https://www.ycombinator.com/companies/stacktrace/jobs)).
- **Competitors:**
  - **Noma Security ($132M raised, revenue unknown):** Covers agent behavior, identity, access, and multiple environments; its latest announced financing was a $100M Series B led by Evolution Equity Partners on July 31, 2025 ([funding total, CB Insights via search snippet](https://www.cbinsights.com/company/noma-security/financials), [round announcement](https://noma.security/blog/noma-security-raises-100m-to-drive-adoption-of-ai-agent-security), [product](https://noma.security/)).
  - **Zenity (approximately $185M raised, revenue unknown):** Offers intent-aware action blocking across SaaS, coding, and cloud agents; raised a $125M Series C led by Norwest on August 3, 2026 ([investor announcement](https://vertexholdings.com/news/zenity-raises-us-125-million-to-secure-the-agentic-era/), [product and round announcement](https://zenity.io/press-release/zenity-raises-125-million-to-secure-the-era-of-1-billion-ai-agents)).
  - **Oligo Security ($140M raised, revenue unknown):** Monitors code execution, cloud workloads, and AI behavior through runtime instrumentation; announced a $60M round on August 4, 2026, with no lead identified in the cited report ([SecurityWeek](https://www.securityweek.com/oligo-raises-60-million-for-runtime-security/amp/), [product](https://www.oligo.security/)).
- **Why now:** [Inferred]: The shift toward agents operating unattended in remote sandboxes creates demand for monitoring during execution, illustrated by Stacktrace’s recent demonstration of credential leakage during an automated support workflow ([founder demonstration, accessed Oct 27, 2026](https://www.linkedin.com/posts/prasanthganta_stacktrace-monitors-agents-running-on-remote-activity-7510045496124637184-SmTc)).

## Founders & Team

- **Vinod Kone (Co-founder and CEO):**
  - Background: CS PhD, UC Santa Barbara; former Harness engineering VP, Twilio Segment senior director, and Apache Mesos PMC chair, with software supply-chain security responsibility at Harness ([YC biography](https://www.ycombinator.com/founders/vinod-kone)).
  - Twitter/X: @vinodkone, approximately 3.2K followers ([Sotwe mirror, accessed Oct 27, 2026](https://www.sotwe.com/vinodkone?lang=id)).
  - LinkedIn: Headline: No public data found; profile lists approximately 3K followers ([LinkedIn, via search snippet, accessed Oct 27, 2026](https://www.linkedin.com/in/vinodkone)).
  - GitHub: @vinodkone; NextRoute has 1 star, and the profile identifies Mesos and Jenkins Mesos plugin contributions ([GitHub, accessed Oct 27, 2026](https://github.com/vinodkone)).
- **Micheal Benedict (Co-founder):**
  - Background: CS master’s, University at Buffalo; former infrastructure, security, and AI-platform leader at Airtable, with prior roles at Databricks, Pinterest, and Twitter; previously co-founded Teamdotly ([YC](https://www.ycombinator.com/founders/micheal-benedict), [personal biography](https://michealbenedict.com/about/)).
  - Twitter/X: @micheal, approximately 2.4K followers ([Sotwe mirror, accessed Oct 27, 2026](https://www.sotwe.com/micheal?lang=id)).
  - LinkedIn: Headline: No public data found; profile lists approximately 4K followers ([LinkedIn, via search snippet, accessed Oct 27, 2026](https://www.linkedin.com/in/michealb)).
  - GitHub: @michealbenedict; node-live-reload has 25 stars ([GitHub, accessed Oct 27, 2026](https://github.com/michealbenedict)).
- **Prasanth Ganta (Co-founder):**
  - Background: CS master’s, Texas A&M; B.Tech, IIT Guwahati; engineering leadership at Amazon during 2011–2026, including Amazon Ads generative AI and AWS/Alexa services ([YC biography](https://www.ycombinator.com/founders/prasanth-ganta)).
  - Twitter/X: No public account found.
  - LinkedIn: “Co-Founder Stacktrace | YC F26 | Ex-AWS/Amazon”; 716 followers ([company feed](https://www.linkedin.com/company/stacktrace-ai), [profile via search snippet, accessed Oct 27, 2026](https://www.linkedin.com/in/prasanthganta)).
  - GitHub: No public repos found.
- **Co-founder relationship:** Kone and Benedict previously worked at Twitter, while Kone and Ganta attended IIT Guwahati ([Kone](https://www.ycombinator.com/founders/vinod-kone), [Benedict](https://www.ycombinator.com/founders/micheal-benedict), [Ganta](https://www.ycombinator.com/founders/prasanth-ganta)).
- **Founder-market fit:** The founders document experience operating infrastructure, security, and AI systems at their previous employers, and YC is a disclosed backer ([company biographies](https://stacktrace.ai/about/)).

## Key Risks

- **Prevention scope:** The endpoint sidecar observes read-only logs and cannot itself stop calls; inline gateway deployment provides blocking, while dynamic steering remains listed as coming soon ([Fleet](https://stacktrace.ai/fleet/)).
- **Detection coverage:** Live detection uses pattern rules rather than general semantic understanding, and the company acknowledges false positives and missed issues; findings include evidence for investigation ([technical documentation](https://docs.stacktrace.ai/how-it-works/), [terms](https://stacktrace.ai/terms/)).
- **Overlapping enterprise products:** Noma already advertises policy enforcement, agent steering, data masking, and kill switches across environments, overlapping Stacktrace’s stated control-layer scope ([Noma](https://noma.security/), [Stacktrace](https://stacktrace.ai/)).
- **Name ambiguity:** The unrelated PyPI package `stacktrace` conflicts with the company’s distribution name; its documentation explicitly directs users to install `stacktrace-cli` instead ([PyPI](https://pypi.org/project/stacktrace-cli/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader agentic AI security: $1.8B in 2026; 38.9% CAGR through 2033 ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report)) |
| SAM | No public data found |
| Traction | Design partners disclosed ([founder announcement](https://www.linkedin.com/posts/michealb_quick-life-update-very-excited-to-have-activity-7505360994722979840-unjs)); 233 LinkedIn followers, Oct 27, 2026 ([LinkedIn](https://www.linkedin.com/company/stacktrace-ai)) |
| Revenue Signal | Free Team tier: 100 agents, 200 session-hours/month; annual custom Enterprise/Gateway pricing ([pricing, Oct 27, 2026](https://stacktrace.ai/pricing/)) |
| Founders | Kone: CEO, ex-Harness, CS PhD; Benedict: ex-Airtable/Databricks; Ganta: ex-Amazon, Texas A&M CS master’s ([YC](https://www.ycombinator.com/companies/stacktrace)) |
| Competitors | Noma ($132M, revenue unknown, identity/context governance; [CB Insights via search snippet](https://www.cbinsights.com/company/noma-security/financials), [product](https://noma.security/)); Zenity (~$185M, revenue unknown, intent-aware blocking; [Vertex](https://vertexholdings.com/news/zenity-raises-us-125-million-to-secure-the-agentic-era/)); Oligo ($140M, revenue unknown, process instrumentation; [SecurityWeek](https://www.securityweek.com/oligo-raises-60-million-for-runtime-security/amp/)) |
| Moat Signals | No public data found |
| Risk Factors | Gateway-dependent blocking, detection misses, package-name collision ([Fleet](https://stacktrace.ai/fleet/), [terms](https://stacktrace.ai/terms/), [PyPI](https://pypi.org/project/stacktrace-cli/)) |
| Founder Reach | Kone: X ~3.2K; Benedict: X ~2.4K ([Sotwe](https://www.sotwe.com/vinodkone?lang=id), [Sotwe](https://www.sotwe.com/micheal?lang=id)); Ganta: LinkedIn 716 ([LinkedIn via search snippet](https://www.linkedin.com/in/prasanthganta)); accessed Oct 27, 2026 |
| Distribution Signals | CLI 0.17.0 released Oct 27, 2026 ([PyPI](https://pypi.org/project/stacktrace-cli/)); browser sandbox ([website](https://stacktrace.ai/)) |
| Emails | hello@stacktrace.ai ([company LinkedIn](https://www.linkedin.com/company/stacktrace-ai)); founders@stacktrace.ai ([founder profile via search snippet](https://www.linkedin.com/in/michealb)) |
