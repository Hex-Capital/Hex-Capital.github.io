# Minicor

> Run self-healing desktop automations at scale

| Field | Value |
|-------|-------|
| Website | https://minicor.com |
| YC Page | https://www.ycombinator.com/companies/minicor |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, B2B, Infrastructure |
| YC Partner | Tom Blomfield |
| Emails | connect@minicor.com |

## The Idea

**Problem:** Enterprises running legacy desktop software — EHRs, ERPs, accounting systems like QuickBooks/Sage, and Citrix-hosted applications — need to automate repetitive workflows across these systems. Traditional RPA scripts (e.g., UiPath, Automation Anywhere) are brittle: they break whenever a vendor ships a UI update, a dialog box appears unexpectedly, or screen layout shifts. Rebuilding and maintaining these scripts is a continuous engineering cost. The customer segment spans healthcare organizations processing patient data at scale, financial services firms, and any enterprise dependent on legacy Windows desktop applications.

**Approach:** Minicor deploys AI-powered "computer use" agents that interact with desktop applications visually — reading screens rather than relying on DOM selectors or fixed element coordinates. A reflection agent verifies every action against what is on-screen and self-corrects before errors cascade. When a UI changes or an unexpected dialog appears, the agent adapts autonomously. The platform exposes a single API call to trigger a full desktop workflow on a Windows VM, with support for on-premise, cloud, or Citrix deployment. Built-in observability includes full video recordings of every run, Slack failure notifications, and screenshot-based debugging (minicor.com).

**Differentiation:** Versus traditional RPA vendors (UiPath, Automation Anywhere), Minicor's self-healing agents eliminate the need to rebuild scripts after vendor updates. Versus browser-only AI automation startups (Browserbase, Skyvern, Browser Use), Minicor specifically targets Windows desktop applications and Citrix environments — a deployment surface those tools do not address. Versus Microsoft Power Automate Desktop, Minicor offers horizontal scaling and an API-first architecture designed for programmatic invocation rather than end-user-driven flows.

**Business Model:** No public pricing page found on minicor.com. [Inferred]: Most likely monetization path is usage-based or per-VM-seat pricing given the API-first, horizontally-scalable architecture and enterprise target customer profile.

**TAM/SAM:** The global RPA market was valued at $35.27 billion in 2026, projected to reach $247.34 billion by 2035 at a CAGR of 24.20% (Precedence Research via GlobeNewsWire, December 2025 via search snippet). An alternative estimate sizes the RPA market at $4.68 billion in 2025, growing to $35.84 billion by 2033 at 29.0% CAGR (Grand View Research via search snippet). Healthcare & pharmaceuticals is the fastest-growing vertical at 18.80% CAGR (Precedence Research via search snippet). No SAM estimate specific to desktop-only or self-healing automation found.

**GTM / Distribution:** The website references SOC 2 Type II certification and HIPAA compliance (minicor.com), signaling a healthcare-first GTM motion. The stated capacity of "25,000 patients/day" (minicor.com) and "go from zero to production in days" positioning suggests a land-and-expand enterprise sales model. The sign-in portal at app.laminar.run indicates a live product. [Inferred]: Distribution likely follows direct enterprise sales, starting with healthcare organizations automating EHR workflows, expanding to other verticals with legacy desktop software.

## Defensibility

The self-healing mechanism relies on vision-based AI agents that read screens and self-correct — a technically complex system requiring specialized models for UI understanding, error detection, and recovery. SOC 2 Type II and HIPAA compliance represent non-trivial regulatory compliance costs that create switching friction for healthcare customers. The platform accumulates operational data on desktop application UIs and failure modes across customer deployments, which could improve agent reliability over time.

**Market structure:** Traditional RPA incumbents (UiPath, Automation Anywhere) have built large businesses selling deterministic, script-based automation. Adopting AI-first self-healing agents would require them to cannibalize existing product lines and retrain enterprise sales teams who sell on the reliability and predictability of scripted workflows. Microsoft Power Automate is bundled into the Microsoft 365 ecosystem, which constrains it to Microsoft's platform strategy and makes desktop-native, API-first infrastructure a secondary priority.

**Commoditization risk:** Large foundation model providers (Anthropic, OpenAI, Google) are shipping "computer use" capabilities as general-purpose APIs. Anthropic's Claude computer use and Google's Mariner could enable competitors to build similar self-healing agents. The desktop-specific deployment infrastructure (Windows VMs, Citrix, horizontal scaling, compliance certifications) provides differentiation that pure-model providers do not offer, but well-funded startups could replicate the infrastructure layer.

## Market & Traction

1. **Traction signals:**
   - Production deployment processing 25,000 patients/day (minicor.com)
   - SOC 2 Type II certified and HIPAA compliant (minicor.com)
   - Multiple enterprise customer logos visible on website, names not disclosed (minicor.com)
   - Company Twitter/X: @minicor_ (YC page); follower count not retrievable
   - GitHub organization: github.com/laminar-run — 6 public repos, most with 1-3 stars, 3 followers (GitHub)
   - No Product Hunt launch found
   - No public press coverage found in named publications
   - LinkedIn company page exists; follower count not retrievable
   - Founded 2024 (YC page)

2. **Competitive landscape:**

   | Competitor | Funding | Key Differentiator vs. Minicor |
   |---|---|---|
   | **UiPath** | Public (NYSE: PATH), $6.05B market cap, $1.43B FY2025 revenue, $1.78B ARR (UiPath IR, Q3 FY2026) | Established enterprise RPA leader with 10,000+ customers; script-based rather than self-healing; broad horizontal platform vs. Minicor's AI-native focus |
   | **Automation Anywhere** | $290M Series B at $10B valuation (June 2024 via search snippet); ~$640M ARR historically, exact 2025 figure undisclosed | Enterprise-grade agentic process automation; larger sales force and partner ecosystem; less focused on desktop-native self-healing |
   | **Skyvern** (YC S23) | $2.7M Seed (December 2025 via search snippet); $900K revenue in 2024 (Latka via search snippet) | Open-source browser automation with 85.8% success rate on WebVoyager benchmark; browser-only, does not address Windows desktop/Citrix |
   | **Browserbase** | $40M Series B at $300M valuation (June 2025, Upstarts Media via search snippet) | Cloud browser infrastructure for AI agents; launched "Director" for non-developers; browser-only, no desktop application support |
   | **Browser Use** | $17M Seed (browser-use.com via search snippet) | Open-source browser agent framework; browser-only, no desktop support |

3. **Why now:** Anthropic shipped Claude computer use capabilities in late 2024, and OpenAI and Google followed with similar offerings. These foundation model capabilities crossed a performance threshold enabling vision-based agents to reliably interact with graphical desktop interfaces. [Inferred]: This created an infrastructure opportunity — wrapping general-purpose computer use models into production-grade, compliant, scalable desktop automation — that did not exist 24 months ago when vision models lacked the fidelity to read arbitrary desktop UIs.

## Founders & Team

**Faizaan Chishtie** — Co-Founder & CEO
- Education: University of Ottawa (LinkedIn, personal website)
- Previously: Microsoft; early engineer at YC companies; Antler VC inaugural cohort (January 2022) (LinkedIn via search snippet); Novvy (startup); Royal Canadian Mounted Police; Public Services and Procurement Canada (LinkedIn via search snippet)
- Founded Software For Love, a non-profit software organization in Ottawa (LinkedIn, federal corporation records via search snippet)
- Multilingual: English, French, Spanish, Urdu (LinkedIn via search snippet)
- Twitter/X: @fchishtie — follower count not retrievable
- LinkedIn: linkedin.com/in/fchishtie — 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/FaizChishtie — 49 repos, 37 followers; notable repos include vemcache (in-memory vector database) and p2pllm (LLMs on distributed file systems) (GitHub via search snippet)

**Saheed Akinbile** — Co-Founder & CTO
- Education: University of Ottawa, Software Engineering with option in Technology Management and Entrepreneurship (personal website via search snippet)
- Previously: Senior Software Engineer at Ford Motor Company (2022–2025), working on Android Auto (LinkedIn via search snippet); Morgan Stanley; Kinaxis (LinkedIn via search snippet)
- Co-founded Software For Love with Faizaan Chishtie (LinkedIn via search snippet); built payment processor and lottery system in Nigeria (personal website via search snippet)
- Born and raised in Lagos, Nigeria (personal website via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/saheed-akinbile — "CTO & Co-Founder at Laminar | Ex-Morgan Stanley / Ex-Ford" (LinkedIn)
- GitHub: github.com/sakin070 (GitHub via search snippet); star counts not retrievable

**Co-founder relationship:** Both Faizaan Chishtie and Saheed Akinbile attended the University of Ottawa and co-founded Software For Love, an Ottawa-based non-profit. They share educational background and a prior co-founding experience.

**Founder-market fit:** Both founders have enterprise software engineering backgrounds (Microsoft, Morgan Stanley, Ford, Kinaxis). Faizaan's experience as an early engineer at YC companies provides startup operational context. Saheed's work on Android Auto at Ford demonstrates experience with complex UI/platform integration. Their prior co-founded organization (Software For Love) and shared university background indicate an established working relationship. The company description references a prior product (Laminar, a low-code integration platform) before pivoting to desktop automation as Minicor.

## Key Risks

**Product pivot recency:** The company previously operated as Laminar, a low-code integration platform targeting the system integration services market (Crunchbase, LinkedIn). The pivot to Minicor's desktop automation focus appears recent. The sign-in portal still resolves to app.laminar.run, and the GitHub organization is github.com/laminar-run. Prior-product traction (if any) should not be conflated with current-product traction.

**Foundation model dependency:** The self-healing capability relies on vision-based AI models (likely from providers like Anthropic or OpenAI) for screen reading and decision-making. Changes to model pricing, performance, or availability could directly impact Minicor's cost structure and product reliability. If foundation model providers ship first-party desktop automation products, Minicor faces vertical integration risk.

**Incumbent response in healthcare:** Epic, Cerner (now Oracle Health), and other EHR vendors are investing in their own automation and interoperability features. If EHR vendors improve their APIs or build native automation, the need for screen-scraping self-healing agents diminishes. UiPath already has healthcare-specific offerings and compliance certifications.

**Brand disambiguation:** "Minicor" shares naming similarity with MINICOR (a European hydrogen/energy research consortium with LinkedIn presence) and Utilicor Minicor-3 (a coring attachment product). Additionally, the Laminar name conflicts with multiple other companies including Laminar (a $67M-funded cloud data security company) and Laminar (YC S24, an AI observability platform with Product Hunt presence). This creates potential confusion in market positioning and SEO.

**Narrow initial deployment surface:** The platform is specifically designed for Windows desktop and Citrix environments. As enterprises migrate workloads to cloud-native SaaS applications with APIs, the addressable market of legacy desktop-dependent workflows may shrink over time, though this migration is slow in regulated industries like healthcare.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $35.27B in 2026, growing to $247.34B by 2035 at 24.20% CAGR (Precedence Research, Dec 2025 via search snippet). Alternative: $4.68B in 2025 growing to $35.84B by 2033 at 29.0% CAGR (Grand View Research via search snippet). |
| SAM | No public data found for desktop-specific or self-healing automation subsegment |
| Traction | 25,000 patients/day processing capacity (minicor.com); SOC 2 Type II + HIPAA certified (minicor.com); multiple enterprise logos on website (minicor.com); founded 2024 (YC page) |
| Revenue Signal | No public data found |
| Founders | Faizaan Chishtie (CEO): University of Ottawa, ex-Microsoft, ex-YC engineer, Antler alum, co-founded Software For Love. Saheed Akinbile (CTO): University of Ottawa, ex-Ford Senior SWE, ex-Morgan Stanley, ex-Kinaxis. |
| Competitors | UiPath (public, $6.05B market cap, $1.43B revenue, script-based RPA incumbent); Automation Anywhere ($290M Series B at $10B valuation, enterprise agentic RPA); Skyvern ($2.7M seed, $900K 2024 revenue, browser-only open-source); Browserbase ($40M Series B at $300M valuation, browser infrastructure); Browser Use ($17M seed, open-source browser agent) |
| Moat Signals | SOC 2 Type II + HIPAA compliance; vision-based self-healing technical complexity; desktop/Citrix deployment specialization |
| Risk Factors | Recent pivot from Laminar integration platform, foundation model dependency, incumbent healthcare automation response |
| Founder Reach | Faizaan Chishtie: Twitter @fchishtie (count not retrievable), LinkedIn 500+ connections, GitHub 37 followers/49 repos. Saheed Akinbile: Twitter not found, LinkedIn present, GitHub github.com/sakin070 |
| Distribution Signals | No public data found (no Product Hunt launch, no press coverage, no app store presence) |
| Emails | connect@minicor.com |
