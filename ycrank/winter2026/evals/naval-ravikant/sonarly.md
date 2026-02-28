# Sonarly -- Naval Ravikant Evaluation

The first thing that strikes me about Sonarly is that every monitoring company in the world is building the same feature. PagerDuty has its SRE Agent. incident.io has its AI SRE. Sentry and Datadog both have active LLM initiatives. A Hacker News commenter described building a comparable workflow in GitHub Actions with Claude in what sounds like a weekend project. When I invested in Uber, ride-sharing was illegal in most cities -- smart people thought Travis was wrong. When I backed Bitcoin, serious financiers called it a Ponzi scheme. Here, the consensus is that AI should triage production alerts. Nobody disagrees. The only question is who builds it best, and that's not the kind of question that produces asymmetric returns. That's a feature race, and in a feature race, the platform with the distribution wins.

The specific knowledge question is where this falls apart for me. The founders experienced alert fatigue while running Meoria, a career guidance app for French high school students that reached 100K users. Getting 50 noisy alerts per day from Sentry is not specific knowledge -- it's the universal experience of every engineer who has ever operated a production system. The insight that "monitoring tools generate too many alerts and humans waste time triaging them" is not a secret. It's the setup slide in every AIOps pitch deck. Where is the non-teachable understanding? A founder with specific knowledge here would have spent years inside Google's SRE organization, or built observability infrastructure at Datadog, or developed novel approaches to distributed systems failure analysis. They would know something about alert topology, cascading failure patterns, or the information theory of log signals that would take a competitor years to learn. What I see instead is two university-age founders who encountered a common pain point and wrapped an LLM around it. That's energy and intelligence, but it's not specific knowledge.

The leverage architecture concerns me equally. Sonarly sits on top of Sentry and Datadog -- it's an application layer consuming infrastructure APIs. My portfolio leans toward infrastructure plays: Alchemy is the API layer for blockchain, not a dApp sitting on top of it. Stack Overflow is the knowledge graph itself, not a search engine querying someone else's knowledge graph. Sonarly's value is entirely mediated by platforms that have every incentive and capability to build this feature natively. When Sentry ships "AI Triage" as a premium tab -- and they will -- Sonarly's integration advantage evaporates. There are no cross-customer network effects here. Each customer's production system is independent. The "internal map of the production system" is per-tenant, which means it's a feature, not a flywheel.

The strongest bull case requires believing three things simultaneously: that the OpsGenie sunset creates a genuine distribution window, that Sonarly's triage quality will be dramatically better than what incumbents build, and that the per-customer system map compounds into something defensible before platforms catch up. If all three are true, you have a company that becomes the intelligence layer between monitoring infrastructure and engineering teams -- a position analogous to what PagerDuty was before it became bloated. The founders have shipped together before and scaled to 100K users, which is non-trivial. Jared Friedman as YC partner is a quality signal. And the production-time AI space is genuinely underserved relative to build-time coding agents. But "underserved" is different from "contrarian" -- the space is underserved because the problem is hard, not because people aren't trying. Four well-funded companies and every major monitoring platform are converging on this exact problem right now.

I keep coming back to the leverage ratio. Each Sonarly deployment serves one customer's alert stream. The product doesn't get better because another company uses it. There's no protocol, no network, no marketplace dynamic. It's a SaaS tool competing on triage quality against teams with orders of magnitude more data, more engineers, and more distribution. The founders are renting their leverage from Sentry and Datadog's APIs rather than owning it. That's a structural position I avoid. Pass.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Specific Knowledge and Founder-Problem Authenticity | 7/30 |
| Leverage Architecture and Scalability of the Model | 11/25 |
| Contrarian Positioning and Non-Consensus Timing | 5/20 |
| Founder Integrity and Long-Term Orientation | 8/15 |
| Technical Compounding and Defensibility Over Time | 4/10 |
| **Total** | **35/100** |

**Total Score: 35/100** (Pass)
