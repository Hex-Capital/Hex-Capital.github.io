# StableBrowse

> Browser for AI agents

| Field | Value |
|-------|-------|
| Website | https://stablebrowse.com/ |
| YC Page | https://www.ycombinator.com/companies/stablebrowse |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | API, Automation, AI |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

**Problem:** AI agents that interact with the web today rely on headless browsers (typically Chromium-based) that were designed for human visual consumption. These browsers run the full rendering pipeline — CSS layout, compositing, rasterization, painting — consuming substantial RAM and CPU per session, producing pixel-based output that must be screenshotted and parsed by vision models, and generating brittle interactions tied to visual DOM selectors. For developers building research agents, web scrapers, and workflow automators at scale, this creates high infrastructure costs, slow execution, and unreliable automation (stablebrowse.com).

**Approach:** StableBrowse strips out the visual rendering stack while retaining the network response handling and JavaScript execution layers. Instead of pixels, it outputs semantic markdown, accessibility trees, and knowledge graphs — giving LLMs a native protocol for understanding and acting on web content (stablebrowse.com). The company claims ~85MB RAM per instance, 95% token reduction vs. alternatives, <80ms cold start, 7x faster execution, and 10x lower cost (stablebrowse.com). It supports CDP (Chrome DevTools Protocol) compatibility, built-in evasion with human-like fingerprints, and deterministic action validation through network-level truth (stablebrowse.com).

**Differentiation:** Existing competitors fall into two categories: (1) cloud-hosted browser services (Browserbase, Kernel, Airtop) that run standard Chromium instances in the cloud — still incurring full rendering overhead — and (2) browser automation frameworks (Browser Use, Stagehand) that wrap existing browsers with AI-friendly APIs but don't modify the browser engine itself. StableBrowse claims to operate at the engine level, removing the rendering pipeline entirely rather than wrapping it (stablebrowse.com). [Inferred]: This architectural approach, if validated at production scale, would represent a fundamentally different layer of the stack than cloud browser providers, which manage fleets of standard browsers.

**Business Model:** No pricing page or revenue signals were found on the website or in public sources (stablebrowse.com, reviewed March 2026). [Inferred]: Most likely monetization path is usage-based API pricing (per session or per request), consistent with the category norm set by Browserbase (which uses Stripe usage-based billing per Stripe case study) and Kernel.

**TAM/SAM:** The global agentic AI market was valued at $7.29 billion in 2025 and is projected to reach $139.19 billion by 2034 (MarketsAndMarkets, 2025 via search snippet). An alternative estimate sizes the market at $10.86 billion in 2026, growing to $199.05 billion by 2034 at a 49.6% CAGR (Precedence Research, 2025 via search snippet). The browser infrastructure sub-segment specifically — represented by companies like Browserbase, Kernel, and Airtop — has attracted over $180 million in combined funding as of early 2026 (joinmassive.com, 2025). No public SAM estimate specific to headless/semantic browsers for AI agents was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-first, bottom-up adoption via API documentation, SDK integrations with popular agent frameworks (Browser Use, LangChain, CrewAI), and CDP compatibility as a drop-in replacement for existing Chromium-based setups. The company's emphasis on compatibility with "every LLM and browser agent framework" (stablebrowse.com) suggests a land-and-expand strategy targeting individual developers before enterprise sales.

## Defensibility

- **Technical complexity:** Building a custom browser engine that strips the rendering pipeline while maintaining correct JavaScript execution, network handling, and web compatibility is a substantial engineering challenge. The semantic output layer (markdown, accessibility trees, knowledge graphs) adds further complexity (stablebrowse.com).
- **Performance moat potential:** If the claimed metrics (~85MB RAM, <80ms cold start, 95% token reduction) hold at scale, the unit economics advantage could create switching costs for customers who build pipelines around these performance characteristics (stablebrowse.com).

**Market structure:** Cloud browser providers (Browserbase, Kernel) have invested in managing fleets of standard Chromium instances. Adopting StableBrowse's approach — a custom non-rendering engine — would require them to rebuild their core infrastructure rather than incrementally improve it. [Inferred]: This architectural divergence creates a structural barrier: incumbents would need to cannibalize their existing Chromium-based approach and rebuild from the engine level, which conflicts with their current product and engineering investments.

**Commoditization risk:** The open-source Browser Use framework (37.9k GitHub stars, $17M seed from Felicis) and Stagehand (Browserbase's open-source SDK) provide free alternatives for basic browser automation. If a well-resourced competitor (Browserbase at $67.5M raised, or a hyperscaler) decided to build a rendering-free engine, the technical approach could be replicated, though the engineering effort would be substantial. [Inferred]: The primary barrier to commoditization is execution speed — being first to market with a production-grade semantic browser engine and building developer ecosystem lock-in.

## Market & Traction

**Traction signals:**
- No public user counts, revenue figures, or customer announcements found.
- No Product Hunt launch found (searched March 2026).
- No Twitter/X company account found (searched March 2026).
- LinkedIn company page exists at linkedin.com/company/stablebrowse/ with "2-10 employees" listed (LinkedIn, March 2026).
- No GitHub repositories found under the StableBrowse name (searched March 2026).
- No press coverage in named publications found.
- No Discord or Slack community found.
- The company is not hiring per the YC page (YC page, March 2026).

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. StableBrowse |
|---|---|---|
| **Browserbase** | ~$67.5M total, $40M Series B at $300M valuation (Upstarts Media, June 2025); $4.4M revenue, 1,000+ customers, 50M sessions in 2025 (getlatka.com, 2025) | Cloud-hosted standard Chromium instances; manages browser fleet at scale but retains full rendering overhead |
| **Browser Use** | $17M seed led by Felicis (browser-use.com, 2025) | Open-source automation framework wrapping existing browsers; 37.9k GitHub stars; does not modify the browser engine |
| **Kernel** | $22M Seed + Series A led by Accel (joinmassive.com, 2025) | Speed-focused cloud browser service marketed as fastest browser-as-a-service; still uses standard rendering |
| **Airtop** | $38.8M total (joinmassive.com, 2025) | Natural-language-controlled cloud browsers; no-code approach differs from StableBrowse's developer-first API |
| **TinyFish** | $47M Series A led by ICONIQ Capital (joinmassive.com, 2025) | Enterprise-grade, policy-aware web agents for complex business operations; more application-layer than infrastructure |

**Why now:**
- OpenAI launched Operator, a browser-based AI agent, in January 2025 (PBS News, October 2025 via search snippet), signaling mainstream adoption of agent-web interaction.
- Browser Use grew from launch to 37.9k GitHub stars and $17M in funding, demonstrating developer demand for browser-agent tooling (browser-use.com, 2025).
- [Inferred]: The catalyst is the confluence of (1) LLM capabilities reaching the threshold for reliable multi-step web interaction, (2) the resulting explosion in agent frameworks creating demand for browser infrastructure, and (3) the cost/performance ceiling of running standard Chromium at scale becoming a binding constraint for production workloads.

## Founders & Team

**Sarthak Awasthi** — Co-founder
- Multiple LinkedIn profiles exist for this name; the specific profile could not be confirmed against StableBrowse (LinkedIn search, March 2026).
- Twitter/X: No public account found.
- LinkedIn: Not confirmed due to name disambiguation.
- GitHub: github.com/awasthisarthak exists but connection to StableBrowse unconfirmed (GitHub, March 2026).

**Jay Mehta** — Co-founder
- Listed as an employee on the StableBrowse LinkedIn company page (LinkedIn, March 2026).
- A Tracxn profile for "Jay Mehta" lists founding PracMatic and medPASS, with angel investments in 3 companies (Tracxn, 2026 via search snippet); connection to this specific Jay Mehta is unconfirmed.
- Twitter/X: No public account found.
- LinkedIn: Not confirmed due to name disambiguation (1,300+ profiles with this name).
- GitHub: No public repos found.

**Deepit Shah** — Co-founder
- A LinkedIn profile at linkedin.com/in/deepit-shah shows a Software Engineer at Amazon, UIUC graduate (LinkedIn search snippet, March 2026); connection to StableBrowse unconfirmed.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/deepit-shah (unconfirmed match).
- GitHub: No public repos found.

**Somansh Shah** — Co-founder
- Purdue University, 2021–2025, coursework in AI/ML, VR/AR, Java OOP, data science (LinkedIn, March 2026).
- Currently affiliated with Y Combinator per LinkedIn (LinkedIn, March 2026).
- 1st Place at JMEC Start Up Expo, $6,600 prize (LinkedIn, March 2026).
- IBM Full Stack Software Developer certification (LinkedIn, March 2026).
- Dean's List at Purdue University (LinkedIn, March 2026).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/somanshshah — 2,000+ followers (LinkedIn, March 2026).
- GitHub: No public repos found.

**Co-founder relationship:** No shared employer or university overlap was identifiable from the publicly available data across the four founders. No public data on co-founder history.

**Founder-market fit:** [Inferred]: Somansh Shah's background in data science and AI/ML at Purdue is relevant to the intersection of AI and web infrastructure. If the Deepit Shah at Amazon (UIUC CS) is the same person, experience building backend systems at Amazon scale would be directly applicable to building browser infrastructure. Insufficient public data exists to assess founder-market fit for Sarthak Awasthi and Jay Mehta at this time.

## Key Risks

**1. Engine-level web compatibility risk:** Building a non-rendering browser engine that correctly handles the full diversity of modern web applications (SPAs, dynamic content, Shadow DOM, iframes, WebSocket-driven UIs) is an unsolved engineering problem at scale. Removing the rendering stack may break assumptions that web pages make about browser behavior, causing silent failures in agent workflows. No public benchmarks on compatibility coverage have been disclosed (stablebrowse.com, March 2026).

**2. Well-funded incumbent response:** Browserbase ($67.5M raised, $300M valuation, 1,000+ customers) could invest in a rendering-free engine mode as a product extension, leveraging its existing customer base and developer ecosystem for distribution (Upstarts Media, June 2025). Kernel ($22M, Accel-backed) is already marketing speed as its primary differentiator (onkernel.com, 2026 via search snippet).

**3. Open-source substitution:** Browser Use (37.9k GitHub stars, $17M seed) provides an open-source browser automation framework that is free to use. If Browser Use or a similar project adds a lightweight/semantic mode, it could capture the developer mindshare StableBrowse needs at the early adoption stage (browser-use.com, 2025).

**4. Anti-bot detection escalation:** The product advertises "built-in evasion with human-like fingerprints" (stablebrowse.com). As websites deploy increasingly sophisticated bot detection (Cloudflare, DataDome, PerimeterX), a non-standard browser engine may be easier for these systems to fingerprint and block than actual Chromium instances, potentially undermining a core value proposition.

**5. Founder visibility and track record:** None of the four founders have publicly verifiable prior exits, notable open-source projects, or established industry profiles in the browser/infrastructure space. This increases execution risk for a technically ambitious project (LinkedIn, GitHub searches, March 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.29B in 2025, projected $139.19B by 2034 (MarketsAndMarkets, 2025 via search snippet); alternative: $10.86B in 2026 to $199.05B by 2034 at 49.6% CAGR (Precedence Research, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Sarthak Awasthi (Co-founder): background unconfirmed. Jay Mehta (Co-founder): listed on StableBrowse LinkedIn page. Deepit Shah (Co-founder): background unconfirmed. Somansh Shah (Co-founder): Purdue 2025, AI/ML coursework, 1st Place JMEC Startup Expo. |
| Competitors | Browserbase ($67.5M raised, $4.4M revenue in 2025, cloud Chromium fleet) (getlatka.com, 2025); Browser Use ($17M seed, open-source framework, 37.9k GitHub stars) (browser-use.com, 2025); Kernel ($22M raised, revenue unknown, speed-focused cloud browser) (joinmassive.com, 2025); Airtop ($38.8M raised, revenue unknown, NL-controlled browsers) (joinmassive.com, 2025); TinyFish ($47M raised, revenue unknown, enterprise web agents) (joinmassive.com, 2025) |
| Moat Signals | No public data found |
| Risk Factors | Engine-level web compatibility at scale, well-funded incumbent response (Browserbase $67.5M), open-source substitution (Browser Use 37.9k stars) |
| Founder Reach | Somansh Shah: LinkedIn 2,000+ followers (LinkedIn, March 2026); all others: no confirmed public accounts found |
| Distribution Signals | No public data found |
| Emails | No public data found |
