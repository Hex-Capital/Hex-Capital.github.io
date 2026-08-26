# Rindler

> The translation layer between AI agents and the web

| Field | Value |
|-------|-------|
| Website | https://rindler.ai |
| YC Page | https://www.ycombinator.com/companies/rindler |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | Boston, MA, USA |
| Tags | B2B, Workflow Automation, Automation, Infrastructure |
| YC Partner | Ankit Gupta ([YC company page](https://www.ycombinator.com/companies/rindler), Aug 2026) |
| Emails | founders@rindler.ai, team@rindler.ai ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026; [GitHub](https://github.com/rindler-ai), Aug 2026) |

## The Idea

- **Problem:** Operations, finance, recruiting, compliance, and engineering teams manually operate vendor portals, bank sites, government registries, payer portals, applicant-tracking systems, and private dashboards without usable APIs, otherwise relying on RPA or scripts that require maintenance when interfaces change ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026).
- **Approach:** Rindler drives a managed browser, reuses an encrypted user session, maps each site into verified screens, actions, and typed records, and updates the mapping after layout changes ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026).
- **Differentiation:** Playwright and Browser Use expose browser control or model-directed navigation, while Browserbase and Kernel provide hosted browsers; Rindler instead exposes pre-mapped, verifier-gated site actions with structured outputs and centrally maintained routes ([Rindler comparison](https://rindler.ai/compare), Aug 2026; [Browserbase](https://www.browserbase.com/blog/series-b-and-beyond), Jun 2025; [Kernel](https://www.accel.com/news/our-investment-in-kernel-the-best-browser-infrastructure-for-agents), Oct 2025).
- **Business Model:** Starter costs $100 monthly after a 7-day trial and includes one customer portal plus 100 completed runs, Teams costs $1,000 monthly for 1,000 runs, and Enterprise is custom-priced under an annual agreement ([Rindler FAQ](https://rindler.ai/faq), Aug 2026).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Rindler combines a working chat demo and MCP installation with paid self-service Starter checkout and founder-led sales for Teams and Enterprise deployments ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026).

## Defensibility

- **Moat today:** One verifier-gated mapping can cover every customer account on a multi-tenant platform, and Rindler reports that route repairs are applied centrally rather than rebuilt per tenant ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026).
- **Future moat:** [Inferred]: A larger library of maintained portal mappings and repair histories could reduce deployment and recovery time, but Rindler does not publish its total mapping count or longitudinal reliability.
- **Market structure:** [Inferred]: No structural barrier is identified because Rindler uses Kernel and Browserbase as browser-infrastructure subprocessors, leaving funded infrastructure vendors able to add mapping and schema layers ([Rindler privacy policy](https://rindler.ai/privacy), Jul 2026).
- **Commoditization risk:** [Inferred]: Browserbase, Browser Use, Kernel, and Deck could add reusable site schemas or managed repairs atop their existing browser, agent, or permissioned-data systems ([Browserbase](https://www.browserbase.com/blog/series-b-and-beyond), Jun 2025; [Deck](https://techcrunch.com/2025/04/16/deck-raises-12m-to-plaid-ify-any-website-using-ai/), Apr 2025).

## Market & Traction

- **Traction signals:**
  - Company-reported benchmark: 38 runs across two grocery tasks produced 4× faster completions, 3× lower execution cost, and 2× fewer failed tasks than Browser Use ([Rindler website](https://rindler.ai/), early 2026).
  - Product coverage: Greenhouse, Lever, Ashby, and state business-registry lookups were reported in production, while other portal categories remained setup-dependent ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 6 2026).
  - 380 LinkedIn followers ([LinkedIn](https://www.linkedin.com/company/rindler), Aug 2026).
  - Company X account @RindlerAI; count not retrievable ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026).
  - GitHub organization has 2 public repositories and its top repository has 2 stars ([GitHub](https://github.com/rindler-ai), Aug 2026).
  - 0 active YC job postings ([YC company page](https://www.ycombinator.com/companies/rindler), Aug 2026).
- **Competitors (minimum 3, up to 5):**
  - Browserbase ($67.5M raised, revenue unknown): provides hosted browser infrastructure, while Rindler adds pre-mapped site actions and typed outputs ([CB Insights](https://www.cbinsights.com/company/browserbase), Aug 2026).
  - Browser Use ($17.5M raised, revenue unknown): provides an open-source browser-agent framework and cloud runtime, while Rindler reuses verified mappings rather than having the model reinterpret each page ([Airframe](https://www.airframe.ai/product/browser-use-com/co-diligence), Jul 2026).
  - Kernel ($22M raised, revenue unknown): supplies browsers-as-a-service and is also a Rindler subprocessor, while Rindler supplies the workflow mapping and structured action layer ([aVenture](https://aventure.vc/companies/kernel-san-francisco-ca-us/news), Jul 2026; [Rindler privacy policy](https://rindler.ai/privacy), Jul 2026).
  - Deck ($16.5M raised, revenue unknown): focuses on permissioned structured data access across websites, while Rindler also supports form submission and other write actions ([TechCrunch](https://techcrunch.com/2025/04/16/deck-raises-12m-to-plaid-ify-any-website-using-ai/), Apr 2025).
- **Why now:** [Inferred]: Anthropic’s November 2024 release of MCP standardized how agents call external tools, allowing Rindler to offer one hosted endpoint to multiple MCP-capable agents ([Anthropic](https://www.anthropic.com/news/model-context-protocol), Nov 2024; [Rindler FAQ](https://rindler.ai/faq), Aug 2026).

## Founders & Team

- **Arthur De Los Santos (Founder):**
  - Background: MIT ’26 in computer science, AI, and machine learning, with MIT CSAIL research; no prior company or exit was found ([YC company page](https://www.ycombinator.com/companies/rindler), Aug 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Rindler (YC S26),” with 768 followers ([LinkedIn](https://www.linkedin.com/in/arthurdelossantos), Aug 2026).
  - GitHub: @arthurdls; `robust-vision-language-navigation` has 1 star ([GitHub](https://github.com/arthurdls), Aug 2026).
- **Michael Serrano (CEO and Founder):**
  - Background: MIT SB and MEng in physics and computer science, former Roblox machine-learning engineer, and MIT CSAIL LLM researcher ([YC company page](https://www.ycombinator.com/companies/rindler), Aug 2026).
  - Twitter/X: No public account found.
  - LinkedIn: “Rindler (YC S26),” with 2,175 followers ([LinkedIn](https://www.linkedin.com/in/michael-y-serrano), Aug 2026).
  - GitHub: No public repos found.
- **Co-founder relationship:** The founders met at MIT in 2022 and conducted research at MIT CSAIL ([Rindler FAQ](https://rindler.ai/faq), Aug 2026).
- **Founder-market fit:** [Inferred]: Their MIT CSAIL work, computer-science training, and Serrano’s machine-learning engineering experience provide documented preparation for browser-agent infrastructure ([YC company page](https://www.ycombinator.com/companies/rindler), Aug 2026).

## Key Risks

- **Technical reliability:** Rindler’s YC launch states that some sites require deeper mappings and that bot-defended or authenticated sites may require credential or cookie capture, while its public benchmark covers only 38 runs on two grocery tasks; automated verification, explicit failure codes, and centrally maintained mappings are the stated mitigations ([YC company page](https://www.ycombinator.com/companies/rindler), Aug 2026; [Rindler website](https://rindler.ai/), early 2026).
- **Security procurement:** Rindler is not SOC 2, HIPAA, or PCI certified and sends chat instructions and tool results to Anthropic or OpenAI; it reports per-user AES-256-GCM session encryption and disabled training/default retention as mitigations ([Rindler privacy policy](https://rindler.ai/privacy), Jul 2026).
- **Third-party website restrictions:** Customers remain responsible for complying with accessed sites’ terms, and Rindler states that it will stop operating a site if its operator objects ([Rindler FAQ](https://rindler.ai/faq), Aug 2026).
- **Infrastructure dependencies:** Authenticated sessions can traverse Kernel, Browserbase, BrightData, or Capsolver, creating external availability and data-processing dependencies; Browserbase serves as a fallback when Kernel is unavailable ([Rindler privacy policy](https://rindler.ai/privacy), Jul 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 38-run internal benchmark: 4× faster, 3× cheaper, and 2× fewer failed tasks than Browser Use ([Rindler website](https://rindler.ai/), early 2026); Greenhouse, Lever, Ashby, and state-registry workflows reported in production ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026) |
| Revenue Signal | Starter $100/month for 100 runs after a 7-day trial; Teams $1,000/month for 1,000 runs; Enterprise custom-priced ([Rindler FAQ](https://rindler.ai/faq), Aug 2026) |
| Founders | Arthur De Los Santos (Founder): MIT CS/AI/ML and CSAIL research; Michael Serrano (CEO/Founder): MIT physics/CS, Roblox ML engineer, CSAIL LLM research ([YC company page](https://www.ycombinator.com/companies/rindler), Aug 2026) |
| Competitors | Browserbase ($67.5M raised, revenue unknown, hosted browsers); Browser Use ($17.5M, revenue unknown, open-source browser agent); Kernel ($22M, revenue unknown, browser infrastructure); Deck ($16.5M, revenue unknown, permissioned web data) ([CB Insights](https://www.cbinsights.com/company/browserbase), Aug 2026; [Airframe](https://www.airframe.ai/product/browser-use-com/co-diligence), Jul 2026; [aVenture](https://aventure.vc/companies/kernel-san-francisco-ca-us/news), Jul 2026; [TechCrunch](https://techcrunch.com/2025/04/16/deck-raises-12m-to-plaid-ify-any-website-using-ai/), Apr 2025) |
| Moat Signals | Verifier-gated reusable mappings, multi-tenant platform coverage, and centrally maintained route repairs ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026) |
| Risk Factors | Narrow public reliability benchmark, absent SOC 2/HIPAA/PCI certification, third-party website restrictions, external browser/proxy dependencies ([Rindler website](https://rindler.ai/), Aug 2026; [Rindler privacy policy](https://rindler.ai/privacy), Jul 2026) |
| Founder Reach | Arthur De Los Santos: Twitter not found, LinkedIn 768, GitHub top repo 1 star ([LinkedIn](https://www.linkedin.com/in/arthurdelossantos), Aug 2026; [GitHub](https://github.com/arthurdls), Aug 2026); Michael Serrano: Twitter not found, LinkedIn 2,175, GitHub not found ([LinkedIn](https://www.linkedin.com/in/michael-y-serrano), Aug 2026) |
| Distribution Signals | LinkedIn 380 followers ([LinkedIn](https://www.linkedin.com/company/rindler), Aug 2026); X @RindlerAI count not retrievable; GitHub top repository 2 stars ([GitHub](https://github.com/rindler-ai), Aug 2026); 0 YC jobs ([YC company page](https://www.ycombinator.com/companies/rindler), Aug 2026) |
| Emails | founders@rindler.ai, team@rindler.ai ([Rindler llms.txt](https://rindler.ai/llms.txt), Aug 2026; [GitHub](https://github.com/rindler-ai), Aug 2026) |
