# Stacktrace

> Give agents autonomy without losing control

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
| Emails | vinod@stacktrace.ai (CEO, [Company Launch Tracker](https://companylaunchtracker.substack.com/p/company-launch-tracker-114)), prasanth@openaca.dev (Ganta’s package author contact, [PyPI](https://pypi.org/project/stacktrace-cli/0.2.0/)), hello@stacktrace.ai (design partner inquiries, [Ganta on LinkedIn](https://www.linkedin.com/posts/prasanthganta_excited-to-share-that-stacktrace-is-backed-activity-7507979137169633280-5eHP)), founders@stacktrace.ai (company package contact, [PyPI](https://pypi.org/project/stacktrace-cli/)) |

## The Idea

- **Problem:** Engineering and security teams overseeing unattended agents can miss stalled runs or actions outside the task’s intent, and companies currently limit which employees can use agents or what those agents can access ([Launch YC](https://www.ycombinator.com/launches/Wq3-stacktrace-give-agents-autonomy-without-losing-control)).
- **Approach:** Fleet reads agent session logs locally and uses hooks or gateways to block actions, request approval or steer a run, while Agent Gateway verifies customer agents, holds consequential actions for consent and records decisions ([Stacktrace](https://stacktrace.ai/), [Agent Gateway](https://stacktrace.ai/gateway/)).
- **Differentiation:** Stacktrace documents a local sidecar for coding-agent telemetry and a gateway for customer consent, while Bay deploys through existing security infrastructure without a persistent endpoint agent and Arcade.dev offers delegated authorization and an agent-ready tool catalog ([Stacktrace Fleet](https://stacktrace.ai/fleet/), [Stacktrace Agent Gateway](https://stacktrace.ai/gateway/), [Bay](https://www.bay.io/blog/bay-emerges-from-stealth-with-50m-after-fortune-100-companies-used-its-platform-to-triple-autonomous-ai-agent-use-2), [Arcade.dev](https://www.arcade.dev/blog/arcade-series-a/)).
- **Business Model:** Fleet Team is free per organization for unlimited users and 200 session-hours monthly, Fleet Enterprise has custom annual volume pricing by session-hour, and Agent Gateway has custom annual pricing per company ([Stacktrace Pricing](https://stacktrace.ai/pricing/), Nov 2026).
- **TAM/SAM:** Grand View Research estimates the broader global agentic AI security market at $1.8B in 2026, with 38.9% CAGR through 2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report), 2026). No public data found for Stacktrace’s SAM.
- **GTM / Distribution:** Stacktrace offers self-serve Fleet signup and a browser sandbox, books demos for enterprise and gateway prospects, and recruits design partners through founder outreach ([Stacktrace Pricing](https://stacktrace.ai/pricing/), [Stacktrace](https://stacktrace.ai/), [Ganta on LinkedIn](https://www.linkedin.com/posts/prasanthganta_excited-to-share-that-stacktrace-is-backed-activity-7507979137169633280-5eHP)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Central policies and component histories could create switching costs as customers integrate them into approval workflows, with no public data on retention or migration costs ([Stacktrace Fleet](https://stacktrace.ai/fleet/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Anthropic already exposes managed permissions and hooks that can block or modify actions before execution, giving agent vendors a way to provide overlapping controls inside their own products ([Anthropic Hooks](https://code.claude.com/docs/en/hooks), [Anthropic Settings](https://code.claude.com/docs/en/settings)).

## Market & Traction

- **Traction signals:**
  - Unnamed design partners running local or unattended cloud agents ([Benedict on LinkedIn](https://www.linkedin.com/posts/michealb_quick-life-update-very-excited-to-have-activity-7505360994722979840-unjs), Sep 2026).
  - $500K YC financing, classified as a convertible note by [CB Insights](https://www.cbinsights.com/company/stacktrace-ai/financials) (Sep 2026, via search snippet).
  - Fleet launch in October and public Launch YC listing in November ([Stacktrace on X via teapawt](https://nitter.gq/stacktrace_ai), Oct 2026, [Launch YC](https://www.ycombinator.com/launches/Wq3-stacktrace-give-agents-autonomy-without-losing-control), Nov 2026).
  - Launch coverage in [Company Launch Tracker](https://companylaunchtracker.substack.com/p/company-launch-tracker-114) (Oct 2026) and [Menlo Times](https://www.menlotimes.com/post/y-combinator-launches-of-the-week-204) (Nov 2026).
  - 388 LinkedIn followers and 31 X followers at @stacktrace_ai ([LinkedIn](https://www.linkedin.com/company/stacktrace-ai), [X via teapawt](https://nitter.cf/stacktrace_ai), Nov 2026).
  - OpenACA had 9 GitHub stars ([GitHub](https://github.com/open-agent-security/openaca), Nov 2026).
  - 0 open roles on YC ([YC Jobs](https://www.ycombinator.com/companies/stacktrace/jobs), Nov 2026).
- **Competitors:**
  - **Bay** ($50M raised, revenue unknown): Enforces policy across endpoints, SaaS and cloud through existing security infrastructure, with a $37M Series A led by Battery Ventures ([Bay](https://www.bay.io/blog/bay-emerges-from-stealth-with-50m-after-fortune-100-companies-used-its-platform-to-triple-autonomous-ai-agent-use-2), Nov 2026).
  - **Zenity** ($180M+ raised, revenue unknown): Covers SaaS copilots and custom cloud agents alongside coding agents, with a $125M Series C led by Norwest and company-reported revenue tripling in each of the prior two years ([Zenity Careers](https://zenity.io/careers/hybrid-new-york-ny-united-states/director-sales-operations/51.47C), [Zenity](https://zenity.io/press-release/zenity-raises-125-million-to-secure-the-era-of-1-billion-ai-agents), Aug 2026).
  - **Lasso Security** ($36M in disclosed rounds, $1M in 2024 revenue per CB Insights via search snippet): Offers CPU-based guardrails and automated red teaming, with a $30M round led by ClearSky ([Lasso seed announcement](https://www.lasso.security/resources/lasso-security-funding-announcement-2023), [Lasso funding announcement](https://www.lasso.security/resources/lasso-security-announces-future-of-ai-security-with-cpu-based-guardrails), Sep 2026, [CB Insights](https://www.cbinsights.com/company/lasso-security/financials)).
  - **Arcade.dev** ($72M disclosed before an undisclosed extension, revenue unknown): Provides delegated authorization and hosted agent tools, with a $60M June 2026 Series A led by SYN Ventures and a September 2026 extension from Cisco Investments ([Arcade.dev Series A](https://www.arcade.dev/blog/arcade-series-a/), [Arcade.dev extension](https://www.arcade.dev/blog/cisco-investments-backs-arcade/)).
- **Why now:** [Inferred]: Anthropic’s April 2026 Claude Code Routines release made repository-connected agent work triggerable on schedules and events, increasing the scope for unattended execution ([Anthropic](https://claude.com/resources/articles/introducing-routines-in-claude-code), Apr 2026).

## Founders & Team

- **Vinod Kone (Founder/CEO):**
  - Background: UC Santa Barbara CS PhD and IIT Guwahati alumnus, former Harness VP of Engineering responsible for software supply-chain security, Twilio Segment senior director and Apache Mesos PMC chair ([YC](https://www.ycombinator.com/founders/vinod-kone)). Business email: vinod@stacktrace.ai ([Company Launch Tracker](https://companylaunchtracker.substack.com/p/company-launch-tracker-114)).
  - Twitter/X: @vinodkone, 3.2K followers ([X via teapawt](https://teapaw.org/vinodkone), Nov 2026).
  - LinkedIn: Stacktrace listed, headline not retrievable, 3K followers ([LinkedIn](https://www.linkedin.com/in/vinodkone), Nov 2026).
  - GitHub: @vinodkone, NextRoute had 1 star ([GitHub](https://github.com/vinodkone), Nov 2026).
- **Micheal Benedict (Founder/Chief MTS):**
  - Background: University at Buffalo CS MS, former head of infrastructure, security and AI platforms at Airtable, earlier infrastructure and developer-platform roles at Databricks, Pinterest and Twitter, and co-founder of Teamdotly ([YC](https://www.ycombinator.com/founders/micheal-benedict), [Benedict’s bio](https://michealbenedict.com/about/)). Direct business email: No public data found.
  - Twitter/X: @micheal, 2.4K followers ([X via teapawt](https://nitter.cf/micheal), Nov 2026).
  - LinkedIn: Stacktrace listed, headline not retrievable, 4K followers ([LinkedIn](https://www.linkedin.com/in/michealb), Nov 2026).
  - GitHub: No public repos found.
- **Prasanth Ganta (Founder):**
  - Background: Texas A&M CS MS and IIT Guwahati BTech, led foundational engineering across Amazon, AWS and Alexa and worked on generative AI systems at Amazon Ads ([YC profile](https://www.ycombinator.com/founders/prasanth-ganta), [Launch YC](https://www.ycombinator.com/launches/Wq3-stacktrace-give-agents-autonomy-without-losing-control)). Business email: prasanth@openaca.dev ([PyPI](https://pypi.org/project/stacktrace-cli/0.2.0/)).
  - Twitter/X: @gprasanth, 48 followers ([X via teapawt](https://xitter.gq/gprasanth), Nov 2026).
  - LinkedIn: “Co-Founder at https://stacktrace.ai/”, 716 followers ([LinkedIn](https://www.linkedin.com/in/prasanthganta), Oct 2026, via search snippet).
  - GitHub: @gprasanth2, no public personal repos found, maintains OpenACA on PyPI, whose organization repo had 9 stars ([PyPI](https://pypi.org/user/gprasanth2/), [GitHub profile](https://github.com/gprasanth2), [OpenACA GitHub](https://github.com/open-agent-security/openaca), Nov 2026).
- **Co-founder relationship:** Kone and Benedict previously worked at Twitter, and Kone and Ganta attended IIT Guwahati ([Kone’s YC profile](https://www.ycombinator.com/founders/vinod-kone), [Benedict’s YC profile](https://www.ycombinator.com/founders/micheal-benedict), [Ganta’s YC profile](https://www.ycombinator.com/founders/prasanth-ganta)).
- **Founder-market fit:** Kone’s software supply-chain security work, Benedict’s AI-platform security leadership and Ganta’s cloud infrastructure experience align with agent runtime oversight, and Stacktrace lists YC, Airtable co-founder Andrew Ofstad and Braintrust founder Ankur Goyal among its backers ([Launch YC](https://www.ycombinator.com/launches/Wq3-stacktrace-give-agents-autonomy-without-losing-control), [Stacktrace About](https://stacktrace.ai/about/)).

## Key Risks

- **Enforcement coverage:** [Inferred]: Coverage depends on supported agent logs and enforcement points, so actions outside those paths may escape inspection, with endpoint and gateway deployments providing complementary coverage ([Stacktrace Fleet](https://stacktrace.ai/fleet/), [OpenAIDR docs](https://docs.stacktrace.ai/open-source/openaidr/)).
- **Policy accuracy:** [Inferred]: Intent-based enforcement can interrupt valid work or miss violations outside tested scenarios, and Stacktrace offers approval actions and per-rule detect or block modes alongside a founder-reported benchmark covering three rules across nine models ([Stacktrace](https://stacktrace.ai/), [Kone on LinkedIn](https://www.linkedin.com/in/vinodkone), Nov 2026).
- **Native substitution:** [Inferred]: Anthropic’s managed permissions and hooks can cover some oversight needs for Claude Code buyers, while Fleet advertises a single policy across multiple coding agents ([Anthropic Settings](https://code.claude.com/docs/en/settings), [Stacktrace Fleet](https://stacktrace.ai/fleet/)).
- **Name overlap:** [Inferred]: Buyers searching for Stacktrace may encounter the Brisbane AI and software consultancy using the same name ([Stacktrace HQ](https://stacktracehq.com/), [YC](https://www.ycombinator.com/companies/stacktrace)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global agentic AI security, $1.8B in 2026 and 38.9% CAGR through 2033 ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/agentic-ai-security-market-report), 2026) |
| SAM | No public data found |
| Traction | Unnamed design partners ([Benedict on LinkedIn](https://www.linkedin.com/posts/michealb_quick-life-update-very-excited-to-have-activity-7505360994722979840-unjs), Sep 2026), $500K YC financing ([CB Insights](https://www.cbinsights.com/company/stacktrace-ai/financials), Sep 2026, via search snippet), 9 OpenACA stars ([GitHub](https://github.com/open-agent-security/openaca), Nov 2026) |
| Revenue Signal | Free Fleet Team includes 200 session-hours monthly, Enterprise and Agent Gateway have custom annual pricing ([Stacktrace Pricing](https://stacktrace.ai/pricing/), Nov 2026). Realized revenue: No public data found |
| Founders | Vinod Kone (CEO), Harness VP and Apache Mesos chair. Micheal Benedict (Chief MTS), Airtable infrastructure and security lead. Prasanth Ganta (Founder), Amazon infrastructure engineering leader ([YC](https://www.ycombinator.com/companies/stacktrace)) |
| Competitors | Bay ($50M raised, revenue unknown, existing security infrastructure deployment) ([Bay](https://www.bay.io/blog/bay-emerges-from-stealth-with-50m-after-fortune-100-companies-used-its-platform-to-triple-autonomous-ai-agent-use-2)), Zenity ($180M+ raised, revenue unknown, SaaS and cloud coverage) ([Zenity](https://zenity.io/careers/hybrid-new-york-ny-united-states/director-sales-operations/51.47C)), Lasso ($36M disclosed, $1M 2024 revenue, CPU guardrails) ([Lasso seed](https://www.lasso.security/resources/lasso-security-funding-announcement-2023), [Lasso 2026 round](https://www.lasso.security/resources/lasso-security-announces-future-of-ai-security-with-cpu-based-guardrails), [CB Insights](https://www.cbinsights.com/company/lasso-security/financials) via search snippet), Arcade.dev ($72M before extension, revenue unknown, delegated tool authorization) ([Arcade.dev](https://www.arcade.dev/blog/arcade-series-a/), [Cisco extension](https://www.arcade.dev/blog/cisco-investments-backs-arcade/)) |
| Moat Signals | No public data found |
| Risk Factors | Dependence on supported session inputs ([OpenAIDR docs](https://docs.stacktrace.ai/open-source/openaidr/)), overlapping native controls ([Anthropic Settings](https://code.claude.com/docs/en/settings)), shared company name ([Stacktrace HQ](https://stacktracehq.com/)) |
| Founder Reach | Kone: X 3.2K, LinkedIn 3K, NextRoute 1 star ([X via teapawt](https://teapaw.org/vinodkone), [LinkedIn](https://www.linkedin.com/in/vinodkone), [GitHub](https://github.com/vinodkone), Nov 2026). Benedict: X 2.4K, LinkedIn 4K ([X via teapawt](https://nitter.cf/micheal), [LinkedIn](https://www.linkedin.com/in/michealb), Nov 2026). Ganta: X 48, LinkedIn 716, OpenACA 9 stars ([X via teapawt](https://xitter.gq/gprasanth), [LinkedIn](https://www.linkedin.com/in/prasanthganta) via search snippet, [GitHub](https://github.com/open-agent-security/openaca), Oct–Nov 2026) |
| Distribution Signals | Fleet launch (Oct 2026, [Stacktrace on X via teapawt](https://nitter.gq/stacktrace_ai)), Launch YC and Menlo Times coverage (Nov 2026, [Launch YC](https://www.ycombinator.com/launches/Wq3-stacktrace-give-agents-autonomy-without-losing-control), [Menlo Times](https://www.menlotimes.com/post/y-combinator-launches-of-the-week-204)), 388 LinkedIn and 31 X followers (Nov 2026, [LinkedIn](https://www.linkedin.com/company/stacktrace-ai), [X via teapawt](https://nitter.cf/stacktrace_ai)) |
| Emails | vinod@stacktrace.ai (CEO, [Company Launch Tracker](https://companylaunchtracker.substack.com/p/company-launch-tracker-114)), prasanth@openaca.dev (Ganta’s package author contact, [PyPI](https://pypi.org/project/stacktrace-cli/0.2.0/)), hello@stacktrace.ai (design partner inquiries, [Ganta on LinkedIn](https://www.linkedin.com/posts/prasanthganta_excited-to-share-that-stacktrace-is-backed-activity-7507979137169633280-5eHP)), founders@stacktrace.ai (company package contact, [PyPI](https://pypi.org/project/stacktrace-cli/)) |
