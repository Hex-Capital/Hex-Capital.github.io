# Rystic

> Test agents and code changes in high-fidelity simulated environments

| Field | Value |
|-------|-------|
| Website | https://rystic.ai |
| YC Page | https://www.ycombinator.com/companies/rystic |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/rystic)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, Enterprise Software, AI |
| YC Partner | Grey Baker ([Y Combinator](https://www.ycombinator.com/companies/rystic)) |
| Emails | evan@rystic.ai (CEO), zach@rystic.ai (CTO), founders@rystic.ai (shared inbox) ([Rystic About](https://www.rystic.ai/about), [Y Combinator](https://www.ycombinator.com/companies/rystic)) |

## The Idea

- **Problem** — Engineering teams testing agents with write access rely on shared staging or vendor sandboxes, and Rystic’s founders report that an agent at a prior employer flooded CI runners by opening hundreds of GitHub pull requests within minutes ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/WZ9-rystic-test-your-ai-agents-with-local-copies-of-slack-stripe-and-google-drive)).
- **Approach** — Rystic runs isolated, deterministic copies of APIs such as Slack, Stripe and GitHub locally or in CI, with seedable state, controllable clocks, injected failures and checks against the resulting application state ([Rystic Docs](https://www.rystic.ai/docs), [Launch YC, Oct 2026](https://www.rystic.ai/blog/rystic-launches-on-yc)).
- **Differentiation** — Stripe Sandbox serves simulated data through Stripe’s hosted API, `stripe-mock` returns fixture responses, and Rystic preserves state across calls in local environments that can combine Stripe with other services ([Stripe Docs](https://docs.stripe.com/testing-use-cases), [Stripe GitHub](https://github.com/stripe/stripe-mock), [Rystic Stripe comparison, Oct 2026](https://www.rystic.ai/blog/stripe-mock-sandbox-or-simulator), [Rystic multi-simulator docs](https://www.rystic.ai/docs/environments)).
- **Business Model** — Free includes one seat and 10 hours per month for GitHub, Linear and Slack, Pro costs $89.99 per seat per month with $100 in usage credit per seat and $0.012 per simulator-minute after pooled credits, and Enterprise is custom-priced with offline operation and custom builds ([Rystic Pricing, Nov 2026](https://www.rystic.ai/pricing)).
- **TAM/SAM** — No public TAM/SAM data found for this specific segment.
- **GTM / Distribution** — Rystic distributes its CLI through Homebrew and GitHub releases, offers self-serve signup through GitHub or Google, and routes custom environment requests to the founders ([Rystic Docs](https://www.rystic.ai/docs), [Rystic GitHub](https://github.com/Rystic-Inc), [Rystic Pricing](https://www.rystic.ai/pricing)).

## Defensibility

- **Moat today** — Rystic maintains an in-house verification pipeline that compares its simulators with live services before releases and publishes the agreement rates and documented gaps ([Rystic About](https://www.rystic.ai/about), [Rystic simulator catalog](https://www.rystic.ai/simulators)).
- **Future moat** — [Inferred]: Teams could incur migration work as they build CI suites around Rystic’s saved scenarios and state checks, though the documentation does not establish switching costs in practice ([Rystic Docs](https://www.rystic.ai/docs)).
- **Market structure** — No structural barrier identified at this stage.
- **Commoditization risk** — LocalStack acquired overlapping local app emulators from WonderTwin, and WireMock already offers stateful API simulation with local execution ([LocalStack acquisition announcement, Sep 2026](https://www.globenewswire.com/news-release/2026/09/14/3361421/0/en/localstack-acquires-wondertwin-ai-to-let-developers-and-ai-agents-build-integrations-locally.html), [WireMock product page](https://www.wiremock.io/)).

## Market & Traction

- **Traction signals**
  - Customer testimonial: HJBL CEO Jordan Lidsky reports using exchange simulators Rystic built for HJBL to test its systems ([Rystic homepage, accessed Nov 2026](https://www.rystic.ai/)).
  - Customer testimonial: Tilo CTO Quinten Wolff reports using Rystic in CI to test the Tilo OS migration assistant without setting up real accounts for each service ([Rystic homepage, accessed Nov 2026](https://www.rystic.ai/)).
  - Rystic reported that an unnamed pilot team found its Slack integration read only the first message in each thread, a gap its existing mocks had missed ([Rystic on LinkedIn, accessed Nov 2026](https://www.linkedin.com/company/rystic/)).
  - Public launch on October 26, 2026, with 17 service simulators and a company-run Stripe benchmark of 50 test jobs in 19 seconds versus more than 40 minutes on shared Stripe sandboxes ([Rystic launch post, Oct 2026](https://www.rystic.ai/blog/rystic-launches-on-yc)).
  - Launch coverage in Reveneau and product coverage in LockerGnome ([Reveneau, Oct 2026](https://reveneau.com/ainews/rystic-yc-fall-2026-agent-simulators-slack-stripe-google-drive), [LockerGnome, Nov 2026](https://lockergnome.com/rystic-local-stateful-api-simulators-slack-github-stripe/)).
  - 221 company LinkedIn followers, 1 star on the public CLI release repository, and 0 open YC job listings ([LinkedIn](https://www.linkedin.com/company/rystic/), [GitHub](https://github.com/Rystic-Inc/rystic), [Y Combinator](https://www.ycombinator.com/companies/rystic), accessed Nov 2026).
  - Dealroom lists a $125K YC seed entry dated September 2026, with an asterisk beside the date ([Dealroom, accessed Nov 2026](https://app.dealroom.co/companies/rystic)).
- **Competitors**
  - **Arga Labs** ($10M disclosed, revenue unknown) — Its August 2026 seed was led by General Catalyst, and its product emphasizes deployed sandboxes with full traces and production-data seeding ([Arga Labs funding announcement](https://www.argalabs.com/blog/making-ai-agents-ready-for-the-real-world), [Arga Labs product page](https://www.argalabs.com/)).
  - **LocalStack / WonderTwin** (about $28M reported for LocalStack, revenue unknown) — LocalStack’s $25M November 2024 Series A was led by Notable Capital, and it added local SaaS emulators to its cloud-emulation platform by acquiring WonderTwin in September 2026 ([TechCrunch](https://techcrunch.com/2024/11/12/localstack-raises-25m-to-help-developers-emulate-and-test-cloud-apps-locally/), [LocalStack acquisition announcement](https://www.globenewswire.com/news-release/2026/09/14/3361421/0/en/localstack-acquires-wondertwin-ai-to-let-developers-and-ai-agents-build-integrations-locally.html)).
  - **WireMock** ($6.5M disclosed, revenue unknown) — Its May 2023 seed was led by Ridge Ventures, and it offers configurable API stubs that teams can run locally or through WireMock Cloud ([WireMock funding announcement](https://www.prnewswire.com/news-releases/wiremock-secures-6-5m-in-seed-funding-to-transform-api-developer-productivity-301833606.html), [WireMock product page](https://www.wiremock.io/)).
- **Why now** — [Inferred]: GitHub’s February 2026 rollout of Claude and Codex as coding agents inside existing workflows expanded access to agents that can make repository changes, increasing the need to test their actions before deployment ([GitHub Changelog, Feb 2026](https://github.blog/changelog/2026-02-26-claude-and-codex-now-available-for-copilot-business-pro-users/)).

## Founders & Team

- **Evan Whitehouse (Founder/CEO)**
  - **Background** — Columbia computer science graduate with honors who built virtual Kubernetes environments at LinkedIn and helped scale Roblox’s service mesh to support 45 million concurrent players, with business email evan@rystic.ai ([Y Combinator](https://www.ycombinator.com/companies/rystic), [Rystic homepage](https://www.rystic.ai/), [Rystic About](https://www.rystic.ai/about)).
  - **Twitter/X** — @ev_whitehouse, 27 followers ([teapawt X mirror, Nov 2026](https://nitter.gq/ev_whitehouse)).
  - **LinkedIn** — Rystic affiliation and 593 followers, with no public headline visible ([LinkedIn, via search snippet](https://www.linkedin.com/in/evwhitehouse)).
  - **GitHub** — No public repos found.
- **Zachary Kiihne (Founder/CTO)**
  - **Background** — Attended the University of Massachusetts Amherst and was a senior software engineer at Google, where he shipped Gemini features in Gmail and Google Docs, with business email zach@rystic.ai ([LinkedIn](https://www.linkedin.com/in/zachary-kiihne-56b944129), [Y Combinator](https://www.ycombinator.com/companies/rystic), [Rystic About](https://www.rystic.ai/about)).
  - **Twitter/X** — @ZKiihne, approximately 1.4K followers ([teapawt X mirror, Nov 2026](https://teapawt.org/ZKiihne)).
  - **LinkedIn** — “Cofounder at Rystic. Currently in YC F26.” in the About section, with 586 followers ([LinkedIn, Nov 2026](https://www.linkedin.com/in/zachary-kiihne-56b944129)).
  - **GitHub** — @zkiihne, `walletNFTfetcher` with 48 stars ([GitHub, Nov 2026](https://github.com/zkiihne)).
- **Co-founder relationship** — Whitehouse and Kiihne met in 2016 through competitive Magic: The Gathering and spent more than a year on the same professional team ([Launch YC, Oct 2026](https://www.rystic.ai/blog/rystic-launches-on-yc)).
- **Founder-market fit** — Whitehouse traces the idea to agent development on Roblox’s service-mesh team, Kiihne shipped Gemini integrations at Google, and YC lists Grey Baker as primary partner ([Rystic homepage](https://www.rystic.ai/), [Y Combinator](https://www.ycombinator.com/companies/rystic)).

## Key Risks

- **Simulator fidelity** — Tests can miss vendor behaviors where the simulator diverges, with published agreement of 95.0% across 884 Slack checks and 92.4% across 645 GitHub Pulls checks, and Rystic publishes discrepancies and checks against live services daily ([Rystic simulator catalog, Nov 2026](https://www.rystic.ai/simulators)).
- **CI dependence on licensing** — A running metered simulator can stop if it cannot renew its license lease within two hours of its last renewal, and Enterprise offers fully offline operation ([Rystic EULA](https://www.rystic.ai/eula), [Rystic Pricing](https://www.rystic.ai/pricing)).
- **Competitive substitution** — LocalStack’s acquisition of WonderTwin gives its existing cloud-emulation users access to overlapping local GitHub, Stripe and PostHog emulators ([LocalStack acquisition announcement, Sep 2026](https://www.globenewswire.com/news-release/2026/09/14/3361421/0/en/localstack-acquires-wondertwin-ai-to-let-developers-and-ai-agents-build-integrations-locally.html)).
- **Name ambiguity** — The Ipiales Chamber of Commerce records a separate Colombian entity with Rystic in its legal name ([Ipiales Chamber of Commerce, Apr 2024](https://ccipiales.org.co/?mdocs-file=3830)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Customer testimonial: HJBL uses custom exchange simulators for testing. Customer testimonial: Tilo uses Rystic in migration-assistant CI ([Rystic homepage, Nov 2026](https://www.rystic.ai/)). |
| Revenue Signal | Free at $0, Pro at $89.99 per seat per month with $100 in usage credit per seat and $0.012 per simulator-minute overage, custom Enterprise pricing ([Rystic Pricing, Nov 2026](https://www.rystic.ai/pricing)). |
| Founders | Evan Whitehouse (CEO): Columbia CS, Roblox service mesh, LinkedIn virtual Kubernetes. Zachary Kiihne (CTO): UMass Amherst, Google Gemini integrations ([Y Combinator](https://www.ycombinator.com/companies/rystic), [Rystic homepage](https://www.rystic.ai/), [Kiihne’s LinkedIn](https://www.linkedin.com/in/zachary-kiihne-56b944129)). |
| Competitors | Arga Labs ($10M disclosed, revenue unknown, deployed agent sandboxes with production-data seeding) ([Arga Labs](https://www.argalabs.com/blog/making-ai-agents-ready-for-the-real-world)). LocalStack / WonderTwin (about $28M reported, revenue unknown, local SaaS emulators alongside cloud emulation) ([TechCrunch](https://techcrunch.com/2024/11/12/localstack-raises-25m-to-help-developers-emulate-and-test-cloud-apps-locally/), [LocalStack](https://www.globenewswire.com/news-release/2026/09/14/3361421/0/en/localstack-acquires-wondertwin-ai-to-let-developers-and-ai-agents-build-integrations-locally.html)). WireMock ($6.5M disclosed, revenue unknown, configurable API stubs) ([WireMock funding announcement](https://www.prnewswire.com/news-releases/wiremock-secures-6-5m-in-seed-funding-to-transform-api-developer-productivity-301833606.html), [WireMock product page](https://www.wiremock.io/)). |
| Moat Signals | In-house live-API verification pipeline with published agreement rates and discrepancies ([Rystic About](https://www.rystic.ai/about), [Rystic simulator catalog](https://www.rystic.ai/simulators)). |
| Risk Factors | Simulator behavior gaps ([Rystic simulator catalog](https://www.rystic.ai/simulators)), metered CI lease expiry ([Rystic EULA](https://www.rystic.ai/eula)), overlap with LocalStack’s acquired emulators ([LocalStack](https://www.globenewswire.com/news-release/2026/09/14/3361421/0/en/localstack-acquires-wondertwin-ai-to-let-developers-and-ai-agents-build-integrations-locally.html)). |
| Founder Reach | Whitehouse: X 27, LinkedIn 593 ([teapawt](https://nitter.gq/ev_whitehouse), [LinkedIn, via search snippet](https://www.linkedin.com/in/evwhitehouse)). Kiihne: X approximately 1.4K, LinkedIn 586, top GitHub repo 48 stars ([teapawt](https://teapawt.org/ZKiihne), [LinkedIn](https://www.linkedin.com/in/zachary-kiihne-56b944129), [GitHub](https://github.com/zkiihne)). |
| Distribution Signals | Launch YC on October 26, 2026 ([Rystic blog](https://www.rystic.ai/blog/rystic-launches-on-yc)), Show HN in November 2026 ([Lurker News mirror](https://hn.jensify.com/item/50448400)), 221 company LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/company/rystic/)), CLI distributed through Homebrew and GitHub Releases ([Rystic GitHub](https://github.com/Rystic-Inc)). |
| Emails | evan@rystic.ai (CEO), zach@rystic.ai (CTO), founders@rystic.ai (shared inbox) ([Rystic About](https://www.rystic.ai/about), [Y Combinator](https://www.ycombinator.com/companies/rystic)). |
