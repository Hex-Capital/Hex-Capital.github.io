# Vendo

> Let your users build their own features on top of your product

| Field | Value |
|-------|-------|
| Website | https://vendo.run/ |
| YC Page | https://www.ycombinator.com/companies/vendo |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Customer Success, Open Source |
| YC Partner | Ankit Gupta |
| Emails | founders@vendo.run, nour@vendo.run |

## The Idea

- **Problem:** Product teams serving customers with divergent requirements accumulate feature requests, while building an embedded agent that generates interfaces, takes actions, preserves context, and follows existing permissions requires engineering and maintenance work ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/vendo)).
- **Approach:** Vendo scans the host application’s API, components, theme, and permission rules, then lets signed-in users generate persistent micro-apps, views, actions, and scheduled automations inside sandboxed environments ([Vendo website, Jul 2026](https://vendo.run/)).
- **Differentiation:** Unlike assistant-ui’s React chat components, CopilotKit’s agentic-frontend stack, and Vercel AI SDK’s TypeScript agent framework, Vendo exposes the host’s existing APIs and design system so end users can construct persistent product features rather than only interact through developer-authored agent interfaces ([assistant-ui LinkedIn, Jul 2026](https://www.linkedin.com/company/assistant-ui); [CopilotKit, May 2026](https://www.copilotkit.ai/blog/series-a); [Vercel, Jun 2026](https://vercel.com/changelog/ai-sdk-7); [Vendo website, Jul 2026](https://vendo.run/)).
- **Business Model:** Vendo Cloud offers Free at $0 forever with 300 runs, Pro at $49 monthly with 3,000 runs, Teams at $499 monthly with 30,000 runs, and custom-priced Enterprise with air-gapped hosting, SOC 2, SLA, SAML, SCIM, and RBAC ([Vendo pricing, Jul 2026](https://vendo.run/)).
- **TAM/SAM:** The broader global AI-agents market was valued at $7.63 billion in 2025 and is forecast to reach $182.97 billion by 2033 at a 49.6% CAGR, but no public SAM estimate was found for embedded product-customization agents ([Grand View Research, 2026](https://www.grandviewresearch.com/industry-analysis/ai-agents-market-report)).
- **GTM / Distribution:** Vendo distributes through an Apache-2.0 GitHub repository, an npm package, free cloud access, founder-assisted integrations, and direct outreach to product teams with feature backlogs ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/vendo); [Vendo website, Jul 2026](https://vendo.run/)).

## Defensibility

- **Moat today:** The open-source repository has 346 stars and 43 forks, while the implementation centralizes approvals, audit, signed-in-user API access, theme-driven React rendering, sandboxing, and production persistence ([GitHub, Jul 2026](https://github.com/runvendo/vendo); [npm, Jul 2026](https://www.npmjs.com/package/%40vendoai/vendo)).
- **Future moat:** [Inferred]: Repeated integrations could produce reusable component, API, permission, and evaluation patterns, but no proprietary dataset or demonstrated learning effect is publicly documented.
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** CopilotKit, Vercel, assistant-ui, OpenAI, and internal platform teams can build overlapping agent-interface, generative-UI, and tool-execution functionality using open SDKs and MCP ([TechCrunch, May 2026](https://techcrunch.com/2026/05/05/copilotkit-raises-27m-to-help-devs-deploy-app-native-ai-agents/); [OpenAI, Oct 2025](https://openai.com/index/introducing-apps-in-chatgpt/)).

## Market & Traction

- **Traction signals:**
  - 346 GitHub stars and 43 forks ([GitHub, Jul 2026](https://github.com/runvendo/vendo)).
  - 1,220 weekly npm downloads for `@vendoai/vendo` ([npm, Jul 2026](https://www.npmjs.com/package/%40vendoai/vendo)).
  - 102 LinkedIn company followers ([LinkedIn, Jul 2026](https://www.linkedin.com/company/runvendo)).
  - The initialization process is tested nightly against 16 open-source applications, and the website reports under one second to first paint ([Vendo website, Jul 2026](https://vendo.run/)).
  - The company advertised 50 early-access spots before its current-product launch ([LinkedIn, 2026](https://www.linkedin.com/company/runvendo)).
- **Competitors (minimum 3, up to 5):**
  - CopilotKit ($27M raised, revenue unknown): supplies an open-source agentic-frontend stack and AG-UI protocol, while Vendo emphasizes user-created persistent micro-apps over a host product’s APIs and components ([CopilotKit, May 2026](https://www.copilotkit.ai/blog/series-a)).
  - Vercel ($563M raised, revenue unknown): AI SDK provides a broad TypeScript agent framework, while Vendo packages product scanning, permissions, sandboxing, generated UI, and end-user customization ([Wing Venture Capital, 2025](https://wing-assets.com/Wing-ET30-2025_Report.pdf); [Vercel, Jun 2026](https://vercel.com/changelog/ai-sdk-7)).
  - assistant-ui ($0.5M raised, $0.88M ARR reported): provides React components and a cloud backend for AI chat interfaces, while Vendo generates actionable micro-apps using the host’s API and design system ([LinkedIn, 2026](https://www.linkedin.com/company/assistant-ui); [Latka, Sep 2025](https://getlatka.com/companies/assistant-ui.com/funding)).
- **Why now:** [Inferred]: OpenAI’s October 2025 release of an MCP-based Apps SDK and the subsequent expansion of production agent SDKs reduced the infrastructure required to combine tool execution with interactive interfaces ([OpenAI, Oct 2025](https://openai.com/index/introducing-apps-in-chatgpt/); [Vercel, Jun 2026](https://vercel.com/changelog/ai-sdk-7)).

## Founders & Team

- **Nour Zahzah (Co-Founder & CEO):**
  - Background: Studied mechanical engineering at UC Berkeley, previously founded an in-store AI-shopping-assistant company, and spent seven years in the San Jose Earthquakes academy ([YC, Jul 2026](https://www.ycombinator.com/companies/vendo)).
  - Twitter/X: @nourzahzah; count not retrievable ([X profile via indexed profile, Jul 2026](https://twstalker.com/nourzahzah)).
  - LinkedIn: “Building the future of adaptable software”; approximately 3,000 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/nourzahzah)).
  - GitHub: No public repos found.
- **Yousef Helal (Co-Founder & CTO):**
  - Background: Earned a UC Berkeley EECS bachelor’s and Stanford electrical-engineering master’s, worked on FPGA infrastructure at Apple and MicroBlaze V at AMD, and conducted database research at Berkeley Skylab ([YC, Jul 2026](https://www.ycombinator.com/companies/vendo); [founder résumé, 2026](https://www.yousefh.org/static/Resume%20Yousef%20Helal-c6b01d82a5ee674a1f217cbb8d71fe31.pdf)).
  - Twitter/X: No public account found.
  - LinkedIn: “Building Vendo (YC S26)”; 850 followers ([LinkedIn, Jul 2026](https://www.linkedin.com/in/yousef-helal)).
  - GitHub: @yousefh409; contributed to Spatialyze, with public star count not retrievable ([GitHub, Jul 2026](https://github.com/yousefh409); [Spatialyze](https://github.com/apperception-db/spatialyze)).
- **Co-founder relationship:** The founders have known each other since kindergarten, attended UC Berkeley, and previously built in-store AI shopping assistants together ([YC launch page, Jul 2026](https://www.ycombinator.com/companies/vendo)).
- **Founder-market fit:** Nour’s prior retail-assistant startup and Yousef’s software, distributed-systems, security, and hardware work provide documented experience with AI interfaces and systems integration ([YC, Jul 2026](https://www.ycombinator.com/companies/vendo); [founder résumé, 2026](https://www.yousefh.org/static/Resume%20Yousef%20Helal-c6b01d82a5ee674a1f217cbb8d71fe31.pdf)).

## Key Risks

- **Platform substitution:** CopilotKit, Vercel AI SDK, assistant-ui, and OpenAI Apps SDK expose overlapping embedded-agent or interactive-interface capabilities, allowing customers to assemble alternatives ([TechCrunch, May 2026](https://techcrunch.com/2026/05/05/copilotkit-raises-27m-to-help-devs-deploy-app-native-ai-agents/); [OpenAI, Oct 2025](https://openai.com/index/introducing-apps-in-chatgpt/)).
- **Security boundary failures:** Vendo permits agents to invoke host APIs and create scheduled automations, so errors in identity propagation, approval classification, or sandbox enforcement could authorize unintended actions; its published mitigation is signed-in-user access, explicit approval gates, audit controls, and sandboxing ([Vendo website, Jul 2026](https://vendo.run/); [npm, Jul 2026](https://www.npmjs.com/package/%40vendoai/vendo)).
- **Integration dependence:** Vendo must correctly interpret each customer’s APIs, components, themes, and permission rules, while the reported testing set covers 16 open-source applications rather than disclosed production customers ([Vendo website, Jul 2026](https://vendo.run/)).
- **Product-pivot comparability:** Earlier positioning offered customizable deployments of open-source software, including Hermes and Clicky, whereas the YC launch describes an embedded customization layer; metrics from those deployments cannot be treated as traction for the current product ([LinkedIn, 2026](https://www.linkedin.com/company/runvendo); [YC, Jul 2026](https://www.ycombinator.com/companies/vendo)).
- **Name disambiguation:** “Vendo” is shared by unrelated businesses and products, increasing the risk that search results, traffic estimates, or funding records refer to another entity; verified company records use `vendo.run`, `runvendo`, and legal footer name Aisle Technologies, Inc. ([Vendo website, Jul 2026](https://vendo.run/)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.63B global AI-agents market in 2025, forecast to $182.97B by 2033 at 49.6% CAGR (Grand View Research, 2026) |
| SAM | No public data found |
| Traction | 346 GitHub stars and 43 forks (GitHub, Jul 2026); 1,220 weekly npm downloads (npm, Jul 2026); nightly tests against 16 applications (Vendo website, Jul 2026) |
| Revenue Signal | Free $0; Pro $49/month; Teams $499/month; Enterprise custom pricing (Vendo pricing, Jul 2026) |
| Founders | Nour Zahzah (CEO): UC Berkeley mechanical engineering, prior retail AI startup, Earthquakes academy (YC, Jul 2026); Yousef Helal (CTO): Berkeley EECS, Stanford EE, Apple and AMD engineering (YC, Jul 2026) |
| Competitors | CopilotKit ($27M raised, revenue unknown, agentic-frontend stack; CopilotKit, May 2026); Vercel ($563M raised, revenue unknown, general-purpose AI SDK; Wing Venture Capital, 2025); assistant-ui ($0.5M raised, $0.88M ARR reported, React AI-chat components; LinkedIn and Latka, 2025–2026) |
| Moat Signals | Apache-2.0 repository with 346 stars and 43 forks; integrated API extraction, policy gates, sandboxing, audit, generated UI, and persistence (GitHub and npm, Jul 2026) |
| Risk Factors | Platform substitution (OpenAI and TechCrunch, 2025–2026), API-action security boundaries (Vendo website, Jul 2026), integration dependence across customer codebases (Vendo website, Jul 2026) |
| Founder Reach | Nour Zahzah: Twitter count not retrievable, LinkedIn 3K+, GitHub unavailable (LinkedIn, Jul 2026); Yousef Helal: Twitter unavailable, LinkedIn 850, GitHub star count not retrievable (LinkedIn and GitHub, Jul 2026) |
| Distribution Signals | 346 GitHub stars, 43 forks (GitHub, Jul 2026); 1,220 weekly npm downloads (npm, Jul 2026); 102 LinkedIn followers (LinkedIn, Jul 2026) |
| Emails | founders@vendo.run (Vendo website, Jul 2026); nour@vendo.run (YC launch page, Jul 2026) |
