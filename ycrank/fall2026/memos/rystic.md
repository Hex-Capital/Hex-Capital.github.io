# Rystic

> Train models and test agents in high-fidelity simulated environments

| Field | Value |
|-------|-------|
| Website | https://rystic.ai |
| YC Page | https://www.ycombinator.com/companies/rystic |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/rystic)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, Enterprise Software, AI |
| YC Partner | Grey Baker ([YC](https://www.ycombinator.com/companies/rystic)) |
| Emails | founders@rystic.ai, evan@rystic.ai, zach@rystic.ai ([Rystic About](https://www.rystic.ai/about)) |

## The Idea

- **Problem:** Developers testing agents that modify external systems must contend with incomplete mocks or production dependencies; Rystic’s founders describe an agent creating hundreds of GitHub pull requests within minutes at a previous employer ([Rystic launch, October 2026](https://www.rystic.ai/blog/rystic-launches-on-yc)).
- **Approach:** Lightweight, stateful binaries simulate APIs and web applications locally or in CI, accept synthetic or trace-derived data, and support scripted failures ([Rystic launch](https://www.rystic.ai/blog/rystic-launches-on-yc)).
- **Differentiation:** Against Stripe’s sandbox, Rystic provides isolated local instances; against stripe-mock, it preserves state across calls, while acknowledging narrower API coverage than Stripe itself ([Rystic comparison, October 2026](https://www.rystic.ai/blog/stripe-mock-sandbox-or-simulator)).
- **Business Model:** Free includes one seat and 10 simulator-hours monthly; Pro costs $89.99/seat/month with $100 initial credit per seat and $0.012/simulator-minute beyond the pool; Enterprise uses custom contracts with offline operation and custom builds ([Rystic pricing, accessed October 27, 2026](https://www.rystic.ai/pricing)).
- **TAM/SAM:** The broader AI-agent testing and validation market is estimated at $1.01 billion in 2026, reaching $2.58 billion by 2031 at 20.58% CAGR; this is a category proxy, with no published Rystic-specific SAM ([Mordor Intelligence, 2026](https://www.mordorintelligence.com/industry-reports/ai-agent-testing-and-validation-market)).
- **GTM / Distribution:** Distribution includes a free CLI, installation documentation, a YC launch, and founder contact for custom environments ([Rystic installation](https://www.rystic.ai/docs/installation), [launch](https://www.rystic.ai/blog/rystic-launches-on-yc)).

## Defensibility

- **Moat today:** Technical assets include stateful service implementations and a fidelity pipeline publishing measurements against live APIs per commit ([Rystic About](https://www.rystic.ai/about)).
- **Future moat:** [Inferred]: Accumulated edge-case tests and customer-specific environments could increase replacement effort, but public evidence does not establish exclusive data or switching costs ([Rystic Enterprise offering](https://www.rystic.ai/pricing)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given Stripe’s existing testing tools and Veris’s stateful dependency simulations ([Rystic comparison](https://www.rystic.ai/blog/stripe-mock-sandbox-or-simulator), [Veris](https://www.veris.ai/)).
- **Commoditization risk:** [Inferred]: API providers and simulation vendors can supply overlapping environments, although matching state transitions, errors, and asynchronous behavior requires implementation and verification work ([Rystic Slack limitations](https://www.rystic.ai/docs/simulators/slack), [Veris](https://www.veris.ai/)).

## Market & Traction

- **Traction signals:**
  - Company-reported pilot outcome: an unnamed team discovered its Slack integration read only the first message of each thread, a bug its mocks missed ([Rystic LinkedIn post, October 2026](https://www.linkedin.com/posts/zachary-kiihne-56b944129_makesomethingpeoplewant-activity-7515539846212370432-ido2)).
  - Company benchmark: 50 parallel Stripe jobs completed in 19 seconds; the shared Stripe sandbox completed four before the 40-minute cutoff ([Rystic, October 25, 2026](https://www.rystic.ai/blog/stripe-mock-sandbox-or-simulator)).
  - Company LinkedIn: 96 followers ([LinkedIn, accessed October 27, 2026](https://www.linkedin.com/company/rystic/)).
  - Company X account @RysticAI: 9 followers in a third-party profile snapshot ([teapawt mirror, accessed October 27, 2026](https://teapawt.org/RysticAI)).
  - Product coverage appeared in byteiota ([byteiota, October 27, 2026](https://byteiota.com/rystic-agent-testing-simulators/)).
  - YC lists zero open jobs ([YC, accessed October 27, 2026](https://www.ycombinator.com/companies/rystic)).
- **Competitors:**
  - **Veris AI ($8.5M announced funding, revenue unknown):** Its $8.5M seed was co-led by Decibel and Acrew in June 2025; it simulates enterprise systems, users, and policies and supports cloud, VPC, and on-premises deployment, versus Rystic’s local API catalog ([Veris funding](https://www.veris.ai/blog/introducing-veris-ai-a-new-way-to-train-enterprise-ai-agents-through-simulated-experience), [platform](https://www.veris.ai/)).
  - **Patronus AI ($70M raised, revenue amount unknown):** Its $50M Series B, led by Greenfield Partners in June 2026, supports language-diffusion world models for agent workflows, versus Rystic’s service-specific binaries; Patronus reports revenue growth above 15× over the preceding year without an absolute figure ([company release, June 25, 2026](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)).
  - **Raindrop ($50M raised, revenue unknown):** It announced a CRV-led Series A in September 2026, with round size undisclosed in its announcement, and offers production-traffic replay and anomaly detection rather than primarily packaged API twins ([Raindrop, September 17, 2026](https://docs.raindrop.ai/blog/series-a/)).
- **Why now:** [Inferred]: Simulation-based agent development received a concrete research catalyst when Google DeepMind and partners announced funding for reproducible agent sandboxes and testbeds in June 2026 ([Google DeepMind](https://deepmind.google/blog/investing-in-multi-agent-ai-safety-research/)).

## Founders & Team

- **Evan Whitehouse (Co-founder):**
  - Background: Columbia computer-science graduate with honors who helped build Roblox’s service mesh ([YC](https://www.ycombinator.com/companies/rystic)).
  - Twitter/X: @ev_whitehouse, 12 followers in a third-party snapshot ([teapawt mirror, accessed October 27, 2026](https://teapawt.org/ev_whitehouse)).
  - LinkedIn: Rystic affiliation displayed; headline not retrievable ([LinkedIn, via search snippet](https://www.linkedin.com/in/evwhitehouse)).
  - GitHub: No public repos found.
- **Zachary Kiihne (Co-founder):**
  - Background: Studied computer science and economics at UMass Amherst and subsequently shipped AI integrations in Gmail and Google Docs at Google ([Wizards of the Coast](https://magic.gg/news/mythic-invitational-hype-train-mtg-arena-challengers-and-co-streaming), [YC](https://www.ycombinator.com/companies/rystic)).
  - Twitter/X: @ZKiihne, 1.4K followers in a third-party snapshot ([teapawt mirror, accessed October 27, 2026](https://teapawt.org/ZKiihne)).
  - LinkedIn: About section states “Cofounder at Rystic”; headline not retrievable ([LinkedIn](https://www.linkedin.com/in/zachary-kiihne-56b944129)).
  - GitHub: No public repos found.
- **Co-founder relationship:** They met through professional Magic: The Gathering in 2016 and spent more than a year on the same professional team ([YC](https://www.ycombinator.com/companies/rystic)).
- **Founder-market fit:** Their documented backgrounds span service infrastructure at Roblox and deployed AI integrations at Google; YC lists Grey Baker as their assigned partner ([YC](https://www.ycombinator.com/companies/rystic)).

## Key Risks

- **Simulation-to-production divergence:** Rystic reports Stripe agreement on 99.1% of 1,813 checks, which measures its tested cases rather than universal equivalence; it publishes known disagreements and recommends a real-sandbox smoke test ([Rystic comparison](https://www.rystic.ai/blog/stripe-mock-sandbox-or-simulator)).
- **API coverage gaps:** Rystic’s Stripe simulator omits capabilities including Issuing, Terminal, and several Connect operations, requiring alternative testing for uncovered workflows ([Rystic comparison](https://www.rystic.ai/blog/stripe-mock-sandbox-or-simulator)).
- **Event-behavior gaps:** The Slack simulator does not model interactive callbacks or reproduce Slack’s event-delivery retries, limiting tests of those behaviors ([Rystic Slack documentation](https://www.rystic.ai/docs/simulators/slack)).
- **Connectivity dependency:** Free and Pro require network connectivity for billing checks; fully offline use requires Enterprise ([Rystic website](https://www.rystic.ai/)).
- **Name ambiguity:** [Inferred]: Search results also identify “Rystic Trading Private Limited,” so financial records require entity verification before attribution to this startup ([MCS Registrars client list, via search snippet](https://www.mcsregistrars.com/images/documents/1838_286741393_LISTOFCLIENTS.pdf)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader AI-agent testing/validation category: $1.01B in 2026; 20.58% CAGR through 2031 ([Mordor Intelligence, 2026](https://www.mordorintelligence.com/industry-reports/ai-agent-testing-and-validation-market)). |
| SAM | No public data found |
| Traction | Unnamed Slack pilot bug discovery ([Rystic LinkedIn, October 2026](https://www.linkedin.com/posts/zachary-kiihne-56b944129_makesomethingpeoplewant-activity-7515539846212370432-ido2)); 96 company followers ([LinkedIn, October 27, 2026](https://www.linkedin.com/company/rystic/)). |
| Revenue Signal | Free: 10 hours/month; Pro: $89.99/seat/month, initial $100 credit/seat, $0.012/minute beyond pool; Enterprise custom ([Rystic pricing, October 27, 2026](https://www.rystic.ai/pricing)). |
| Founders | Evan Whitehouse: Columbia CS, Roblox infrastructure; Zachary Kiihne: Google AI integrations ([YC](https://www.ycombinator.com/companies/rystic)). |
| Competitors | Veris ($8.5M announced, revenue unknown, enterprise simulations) ([Veris](https://www.veris.ai/blog/introducing-veris-ai-a-new-way-to-train-enterprise-ai-agents-through-simulated-experience)); Patronus ($70M, revenue amount unknown, world models) ([company release](https://www.prnewswire.com/news-releases/patronus-ai-raises-50-million-series-b-and-unveils-first-digital-world-models-for-ai-agent-training-and-simulation-302811248.html)); Raindrop ($50M, revenue unknown, traffic-derived simulations) ([Raindrop](https://docs.raindrop.ai/blog/series-a/)). |
| Moat Signals | Stateful implementations and published fidelity measurements from CI ([Rystic About](https://www.rystic.ai/about)). |
| Risk Factors | API coverage gaps, simulator/live behavior differences ([Rystic comparison](https://www.rystic.ai/blog/stripe-mock-sandbox-or-simulator)); omitted Slack callbacks/retries ([documentation](https://www.rystic.ai/docs/simulators/slack)). |
| Founder Reach | Evan: X 12 followers; Zachary: X 1.4K followers ([teapawt Evan](https://teapawt.org/ev_whitehouse), [Zachary](https://teapawt.org/ZKiihne), October 27, 2026 snapshots). |
| Distribution Signals | YC launch, October 26, 2026 ([Rystic launch](https://www.rystic.ai/blog/rystic-launches-on-yc)); public CLI installation ([Rystic docs](https://www.rystic.ai/docs/installation)). |
| Emails | founders@rystic.ai, evan@rystic.ai, zach@rystic.ai ([Rystic About](https://www.rystic.ai/about)). |
