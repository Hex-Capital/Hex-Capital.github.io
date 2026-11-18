# Mirrors

> The guidance system for production AI agents

| Field | Value |
|-------|-------|
| Website | https://www.mirrors.dev |
| YC Page | https://www.ycombinator.com/companies/mirrors |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/mirrors)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, SaaS, B2B, Infrastructure, AI |
| YC Partner | Andrew Miklas ([Y Combinator](https://www.ycombinator.com/companies/mirrors)) |
| Emails | aryan@profine.ai (Aryan Singhal’s Profine business address, [GitHub](https://github.com/ai-singhal)), aryan.singhal2016@gmail.com (Singhal’s published preferred contact, [founder site](https://www.aisinghal.com/)), devs@mirrors.dev (shared inquiries and privacy requests, [Mirrors Privacy Policy](https://mirrors.dev/privacy)), devs@runmirrors.com (shared launch inquiries, [Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance)) |

## The Idea

- **Problem:** Developers running customer-facing agents add recurring fixes to system prompts or skills, yet agents can still repeat troubleshooting steps or keep pitching an offer after a customer declines ([Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance), Oct 2026).
- **Approach:** Developers scope a rule to an account or workflow, preview which past conversations it would have reached, deliver it to matching runs through the SDK, and compare outcomes with and without it ([Mirrors](https://mirrors.dev/), Nov 2026).
- **Differentiation:** Mirrors delivers scoped rules during a live turn and measures their effect, LangSmith manages and versions prompts and context, and Papaya proposes trace-derived code changes for engineers to approve as pull requests ([Mirrors](https://mirrors.dev/), [LangSmith](https://www.langchain.com/resources/what-is-langsmith), [Papaya YC profile](https://www.ycombinator.com/companies/papaya)).
- **Business Model:** Hobby includes 1,000 turns per month free, Growth costs $299 per month plus $0.005 per turn, and Enterprise offers custom volume pricing against a usage commitment ([Mirrors Pricing](https://mirrors.dev/#pricing), Nov 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Mirrors offers self-serve signup, TypeScript and Python SDKs, and founder-led demos, and its YC launch invited developers to bring a failed run for review ([Mirrors](https://mirrors.dev/), [Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance), Oct–Nov 2026).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Account-specific rule histories and outcome comparisons could create switching costs if customers build up workflows around them, and portability and retention evidence would be needed to establish that effect ([Mirrors](https://mirrors.dev/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** [Inferred]: Teams using Strands Agents can implement conditional guidance with its existing steering hooks, while building their own rule preview and outcome measurement would require additional work ([Strands Agents](https://strandsagents.com/blog/steering-accuracy-beats-prompts-workflows/), [Mirrors](https://mirrors.dev/)).

## Market & Traction

- **Traction signals:**
  - 63,052 agent turns displayed by Mirrors, with the counting period unspecified ([Mirrors](https://mirrors.dev/), Nov 2026 snapshot).
  - One disclosed design-partner example in which an agent hit 75 errors editing a travel guide despite the stop rule appearing four times in its prompt ([Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance), Oct 2026).
  - 295 LinkedIn followers and 71 X followers at @mirrorsdotdev, with the X count from a mirrored profile ([LinkedIn](https://www.linkedin.com/company/runmirrors/), [Teapawt](https://xitter.gq/mirrorsdotdev), Nov 2026 snapshots).
  - Zero jobs listed on YC’s platform ([YC Jobs](https://www.ycombinator.com/companies/mirrors/jobs), Nov 2026 snapshot).
  - Launch YC on Oct 30, Python SDK release on Nov 6, and Show HN on Nov 16 with 1 point at the research snapshot ([Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance), [Reveneau](https://reveneau.com/ainews/mirrors-yc-fall-2026-recurring-agent-mistakes-targeted-corrections), [PyPI](https://pypi.org/project/mirrors-sdk/), [Hacker News](https://news.ycombinator.com/item?id=50519326), 2026).
  - Coverage by Reveneau on Oct 30 and AgenticFeed on Nov 10 ([Reveneau](https://reveneau.com/ainews/mirrors-yc-fall-2026-recurring-agent-mistakes-targeted-corrections), [AgenticFeed](https://agenticfeed.io/mirrors-targets-recurring-ai-agent-mistakes/), 2026).
  - Prior product, **Mirrors staging and regression testing**, reported initial pilots and a caught duplicate-refund bug by September, before the October launch of runtime guidance ([founder’s LinkedIn post](https://www.linkedin.com/posts/aisinghal_after-spending-the-summer-sleeping-in-the-activity-7503655741501657089-Ee0T), [Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance), 2026).
- **Competitors:**
  - **LangChain** ($460M raised, $12M–$16M ARR reported July 2025) manages versioned context and automates prompt and code fixes through LangSmith, with a $300M Series C led by CapitalG in November 2026 ([The Next Web](https://thenextweb.com/news/langchain-300m-series-c-3bn-valuation-capitalg-langsmith), [TechCrunch](https://techcrunch.com/2025/07/08/langchain-is-about-to-become-a-unicorn-sources-say/), [LangChain](https://www.langchain.com/blog/series-c)).
  - **Braintrust** ($125M across announced financings, revenue unknown) traces and evaluates production outputs, with an $80M Series B led by ICONIQ in February 2026 ([Braintrust Series A](https://www.braintrust.dev/blog/announcing-series-a), [Braintrust Series B](https://www.braintrust.dev/blog/announcing-series-b)).
  - **Portkey** ($18M raised, revenue unknown) applies guardrails at an AI gateway, with a $15M Series A led by Elevation Capital in February 2026 and acquisition by Palo Alto Networks in May 2026 ([Acquired](https://www.startupsacquired.com/deals/palo-alto-networks-acquires-portkey), [Portkey](https://portkey.ai/blog/series-a-funding/), [Palo Alto Networks](https://paloaltonetworks.gcs-web.com/news-releases/news-release-details/palo-alto-networks-completes-acquisition-portkey-secure-ai)).
  - **Papaya** (YC-backed, funding amount and revenue unknown) turns trace-derived recommendations into approved pull requests ([Papaya YC profile](https://www.ycombinator.com/companies/papaya)).
  - [Inferred]: The direct set is small because overlapping products act at different points, including code review, evaluation, or gateway enforcement, while Mirrors delivers scoped instructions during the turn ([Papaya YC profile](https://www.ycombinator.com/companies/papaya), [Braintrust](https://www.braintrust.dev/articles/how-to-eval), [Mirrors](https://mirrors.dev/)).
- **Why now:** [Inferred]: Anthropic’s December 2025 release of Agent Skills as an open standard and adoption by more than 70 platforms by October 2026 expanded the use of on-demand agent instructions, creating a use case for developer-controlled delivery ([Anthropic](https://www.anthropic.com/news/donating-agent-skills-to-the-agentic-ai-foundation), [Mirrors FAQ](https://mirrors.dev/#faq)).

## Founders & Team

- **Aryan Singhal (Co-founder and CEO):**
  - **Background:** Studied AI at Purdue, researched ML at UT Austin and UC Santa Barbara, co-built Profine, and publishes aryan.singhal2016@gmail.com as his preferred contact and aryan@profine.ai on GitHub ([founder site](https://www.aisinghal.com/), [GitHub](https://github.com/ai-singhal)).
  - **Twitter/X:** @ai_singhal, 558 followers ([Teapawt mirrored profile](https://xitter.gq/ai_singhal), Nov 2026 snapshot).
  - **LinkedIn:** “Mirrors (YC F26)” in the public profile title, with 3K followers ([LinkedIn](https://www.linkedin.com/in/aisinghal), 2026 cached snapshot).
  - **GitHub:** @ai-singhal, co-built `profine-cli`, 18 stars ([GitHub profile](https://github.com/ai-singhal), [repository](https://github.com/ProfineAI/profine-cli), Nov 2026).
- **Aditya Gupta (Co-founder and CTO):**
  - **Background:** Studied computer engineering at Purdue, previously worked at Recharm and MerQube, and built computer-vision and agent workflows ([YC founder profile](https://www.ycombinator.com/founders/aditya-gupta), [Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance)); direct business email: No public data found.
  - **Twitter/X:** @idyeetya_, 9 followers ([Teapawt mirrored profile](https://teapawt.net/idyeetya_), Nov 2026 snapshot).
  - **LinkedIn:** “Mirrors (YC F26)” in the public profile title, with 406 followers ([LinkedIn](https://www.linkedin.com/in/aditya-gupta-6a771a231), 2026 cached snapshot).
  - **GitHub:** @idyeetya, co-built `profine-cli`, 18 stars ([GitHub profile](https://github.com/idyeetya), [founder’s Profine post](https://www.linkedin.com/posts/aisinghal_github-profineaiprofine-cli-profile-your-activity-7460066004388298752-z3Dy), [repository](https://github.com/ProfineAI/profine-cli), Nov 2026).
- **Co-founder relationship:** Both studied at Purdue and built the PyTorch optimization tool Profine together ([YC company profile](https://www.ycombinator.com/companies/mirrors), [founder’s Profine post](https://www.linkedin.com/posts/aisinghal_github-profineaiprofine-cli-profile-your-activity-7460066004388298752-z3Dy)).
- **Founder-market fit:** Singhal researched LLM failure modes and Gupta built agent workflows, and Y Combinator backs Mirrors with Andrew Miklas listed as primary partner ([YC company profile](https://www.ycombinator.com/companies/mirrors), [Mirrors](https://mirrors.dev/)).

## Key Risks

- **Rule adherence:** A model can disregard a delivered rule, and Mirrors lets developers compare outcomes on runs with and without that rule ([Mirrors FAQ](https://mirrors.dev/#faq)).
- **Runtime dependency:** Mirrors reports a 200 ms average response time and a fail-open threshold of 750 ms, after which the agent proceeds without Mirrors’ rules ([Mirrors FAQ](https://mirrors.dev/#faq), Nov 2026).
- **Native substitution:** [Inferred]: Strands steering hooks and LangChain middleware give engineering teams ways to implement runtime guidance inside frameworks they already use ([Strands Agents](https://strandsagents.com/blog/steering-accuracy-beats-prompts-workflows/), [LangChain](https://www.langchain.com/blog/three-years-langchain)).
- **Name ambiguity:** [Inferred]: The similarly named Mirrors.social AI product can create search and attribution confusion, so company references can be verified against the mirrors.dev domain and YC profile ([Mirrors.social exhibitor profile](https://cdn-assets.inwink.com/094dd8fe-6acf-40d8-aea1-fbfbc95cf9a4/835878fa-ccb7-4d0f-a213-1c7e89238ee1), [YC company profile](https://www.ycombinator.com/companies/mirrors)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 63,052 company-reported agent turns ([Mirrors](https://mirrors.dev/), Nov 2026 snapshot), one disclosed design-partner example ([Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance), Oct 2026), initial pilots for the prior staging product ([founder’s LinkedIn post](https://www.linkedin.com/posts/aisinghal_after-spending-the-summer-sleeping-in-the-activity-7503655741501657089-Ee0T), Sep 2026) |
| Revenue Signal | Hobby free for 1,000 turns per month, Growth $299 per month plus $0.005 per turn, Enterprise custom ([Mirrors Pricing](https://mirrors.dev/#pricing), Nov 2026). Realized revenue: No public data found. |
| Founders | Aryan Singhal (CEO), Purdue AI and UT Austin/UC Santa Barbara ML research. Aditya Gupta (CTO), Purdue computer engineering and prior roles at Recharm and MerQube ([YC company profile](https://www.ycombinator.com/companies/mirrors), [Gupta’s YC profile](https://www.ycombinator.com/founders/aditya-gupta)). |
| Competitors | LangChain ($460M raised, $12M–$16M ARR reported July 2025, versioned context and automated fixes) ([The Next Web](https://thenextweb.com/news/langchain-300m-series-c-3bn-valuation-capitalg-langsmith), [TechCrunch](https://techcrunch.com/2025/07/08/langchain-is-about-to-become-a-unicorn-sources-say/), [LangChain](https://www.langchain.com/blog/series-c)); Braintrust ($125M announced, revenue unknown, tracing and evals) ([Braintrust Series A](https://www.braintrust.dev/blog/announcing-series-a), [Braintrust Series B](https://www.braintrust.dev/blog/announcing-series-b)); Portkey ($18M raised, revenue unknown, gateway guardrails) ([Acquired](https://www.startupsacquired.com/deals/palo-alto-networks-acquires-portkey), [Palo Alto Networks](https://paloaltonetworks.gcs-web.com/news-releases/news-release-details/palo-alto-networks-completes-acquisition-portkey-secure-ai)); Papaya (funding amount and revenue unknown, trace-derived pull requests) ([Papaya YC profile](https://www.ycombinator.com/companies/papaya)). |
| Moat Signals | No public data found |
| Risk Factors | Model adherence and fail-open delivery ([Mirrors FAQ](https://mirrors.dev/#faq)), framework-native steering ([Strands Agents](https://strandsagents.com/blog/steering-accuracy-beats-prompts-workflows/)). |
| Founder Reach | Singhal: 558 X followers, 3K LinkedIn followers. Gupta: 9 X followers, 406 LinkedIn followers. Their shared Profine CLI has 18 GitHub stars ([Singhal X mirror](https://xitter.gq/ai_singhal), [Singhal LinkedIn](https://www.linkedin.com/in/aisinghal), [Gupta X mirror](https://teapawt.net/idyeetya_), [Gupta LinkedIn](https://www.linkedin.com/in/aditya-gupta-6a771a231), [GitHub](https://github.com/ProfineAI/profine-cli), 2026 snapshots). |
| Distribution Signals | Launch YC (Oct 30), Python SDK on PyPI (Nov 6), Show HN (Nov 16), 295 LinkedIn and 71 X followers (Nov 2026 snapshots) ([Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance), [Reveneau](https://reveneau.com/ainews/mirrors-yc-fall-2026-recurring-agent-mistakes-targeted-corrections), [PyPI](https://pypi.org/project/mirrors-sdk/), [Hacker News](https://news.ycombinator.com/item?id=50519326), [LinkedIn](https://www.linkedin.com/company/runmirrors/), [X mirror](https://xitter.gq/mirrorsdotdev)). |
| Emails | aryan@profine.ai (CEO’s Profine business address, [GitHub](https://github.com/ai-singhal)), aryan.singhal2016@gmail.com (CEO’s published preferred contact, [founder site](https://www.aisinghal.com/)), devs@mirrors.dev (shared inquiries and privacy, [Mirrors Privacy Policy](https://mirrors.dev/privacy)), devs@runmirrors.com (shared launch inquiries, [Launch YC](https://www.ycombinator.com/launches/WGV-mirrors-fix-recurring-ai-agent-mistakes-with-real-time-guidance)). |
