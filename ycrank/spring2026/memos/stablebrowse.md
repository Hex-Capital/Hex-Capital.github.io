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
| Tags | API, Automation, Web Development, AI |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

**Problem:** AI agents that need to interact with the web currently rely on conventional headless browsers (Chromium/Playwright) that were designed for human visual rendering. This imposes large memory footprints, high token costs when converting screenshots or DOM to LLM-consumable formats, and brittle CSS/DOM selectors that break across site changes (stablebrowse.com). Existing solutions feed raw pixels or full DOM trees to LLMs, resulting in high latency and low reliability.

**Approach:** StableBrowse removes the visual rendering stack entirely and replaces it with a "machine-native web engine" that outputs accessibility trees, semantic markdown, and knowledge/workflow graphs instead of pixels (stablebrowse.com). The engine preserves JavaScript execution and exposes deterministic actions with binary validation of state transitions. It claims 130.6 MB per instance, 4ms cold start, and 85% token reduction versus conventional browsers (stablebrowse.com). The engine is CDP-compatible, allowing drop-in replacement with existing Playwright/Puppeteer tooling (stablebrowse.com).

**Differentiation:** Versus Browserbase (cloud-hosted full Chromium instances) and Browser Use (structured text overlays on standard browsers), StableBrowse strips the rendering engine itself rather than wrapping or augmenting a full browser. Versus Steel.dev (open-source headless browser API), StableBrowse emphasizes semantic output and built-in anti-detection fingerprints at the engine layer rather than at the proxy/session level (stablebrowse.com). Versus consumer AI browsers (Perplexity Comet, ChatGPT Atlas), StableBrowse targets developer/infrastructure use cases, not end-user browsing.

**Business Model:** No pricing page is published (stablebrowse.com, April 2026). [Inferred]: Most likely monetization path is usage-based API pricing (per session or per page load), consistent with competitors Browserbase and Hyperbrowser, given the infrastructure-layer positioning and API-first product design.

**TAM/SAM:** The global AI agents market was estimated at $7.63B in 2025, projected to reach $182.97B by 2033 at 49.6% CAGR (Grand View Research, 2025 via search snippet). The agentic AI browser market specifically was estimated at $4.5B in 2024, projected to reach $76.8B by 2034 at 32.8% CAGR (Market.us via search snippet). No SAM estimate specific to headless/machine-native browser infrastructure was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is developer-first adoption via API documentation, CDP compatibility as a migration path from existing Playwright/Puppeteer workflows, and YC network distribution to other YC-batch companies building agents. The calendly link on the website suggests a sales-assisted motion for early customers.

## Defensibility

- **Technical complexity:** Building a browser engine from scratch (or deeply forking one) that strips rendering while preserving JavaScript execution and web compatibility is a substantial engineering undertaking (stablebrowse.com).
- **Data advantage:** [Inferred]: Over time, processing agent sessions could build proprietary data on site structures, anti-bot patterns, and semantic mappings, but this is unproven at this stage.
- **CDP compatibility as switching-cost mechanism:** Drop-in compatibility with existing tooling lowers initial adoption friction but also lowers switching costs to/from competitors (stablebrowse.com).

**Market structure:** Browserbase and similar infrastructure providers build on top of standard Chromium, inheriting its full rendering overhead. Rebuilding their stack around a rendering-free engine would require re-architecting their core product. [Inferred]: This creates a potential structural barrier, but only if StableBrowse's rendering-free approach proves reliably compatible across the modern web — an unproven claim at scale.

**Commoditization risk:** Browser Use (50K GitHub stars, $17M seed; TechCrunch, March 2025) and Steel.dev ($17M raised; StartupHub.ai) demonstrate that well-funded competitors are converging on similar semantic-output approaches. Open-source alternatives (Browser Use, Steel Browser) lower barriers to entry. LLM providers (OpenAI, Google) are building their own browsing infrastructure, which could commoditize the standalone layer.

## Market & Traction

**Traction signals:**
- Y Combinator Spring 2026 batch member (YC page)
- No revenue, user counts, app store presence, Product Hunt launch, press coverage, Chrome extension, or social media accounts found
- No GitHub repositories found under "StableBrowse"
- No company Twitter/X or LinkedIn page found
- 0 open job postings (YC page)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. StableBrowse |
|------------|---------|-------------------------------------|
| Browserbase | $40M Series B, $300M valuation (June 2025; Firecrawl blog) | Cloud-hosted full Chromium instances with session management; 50M sessions processed, 1,000+ customers (Firecrawl blog). Wraps rather than replaces the browser engine. |
| Browser Use | $17M seed led by Felicis (TechCrunch, March 2025) | Open-source (50K GitHub stars); converts web interfaces to structured text atop standard browsers. YC W25 batch. |
| Steel.dev | $17M raised (StartupHub.ai) | Open-source headless browser API with self-hosting option. Emphasizes transparency and developer control. |
| Hyperbrowser | YC S21; backed by Accel, SV Angel (YC page) | Built-in CAPTCHA solving and proxy management; amount raised not disclosed. |
| Kernel | $22M Series A (onkernel.com blog) | Browser infrastructure platform for AI agents; scale-focused. |

**Why now:** [Inferred]: The explosion of autonomous AI agent frameworks (LangChain, CrewAI, AutoGPT) in 2024–2025, combined with production deployments of tool-using LLMs (GPT-4o, Claude 3.5+), created demand for web-interaction infrastructure that is cheaper and more reliable than screenshot-based approaches. Browserbase processing 50M sessions in 2025 (Firecrawl blog) and Browser Use reaching 15K+ developer users (TechCrunch, March 2025) confirm the market has moved from experimental to production-grade.

## Founders & Team

**Somansh Shah** — Founder
- Purdue University, Data Science major (2021–2025) (LinkedIn)
- Data Science Intern at Lenovo (LinkedIn via search snippet)
- Won 1st Place JMEC Start Up Expo, $6,600 prize (Dec 2023) (LinkedIn)
- Co-founded Learn2Grow AI community; built WiseBucks.ai (ML stock recommendations) and RBH Neobank (LinkedIn)
- Certifications: IBM Full Stack Developer, Stanford Supervised ML (LinkedIn)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/somanshshah
- GitHub: No public repos found

**Deepit Shah** — Founder
- University of Illinois Urbana-Champaign, BS/MS Computer Science (LinkedIn via search snippet)
- Interned at Amazon (scalable backend systems) (LinkedIn via search snippet)
- New Venture Development certification, UIUC Grainger College of Engineering (2025) (LinkedIn via search snippet)
- Top 20 of 220 applicants to UIUC's premier consulting organization; led cross-functional teams on NSF grant commercialization (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/deepit-shah
- GitHub: No public repos found

**Sarthak Awasthi** — Founder
- A Devpost profile (sa3655) based in Philadelphia lists hackathon wins including Hummingbird (automated companion drone) and DynamicUI (AI-powered accessible React Native) (Devpost). Confirmation that this is the same individual is not established.
- Twitter/X: No public account found
- LinkedIn: Not confirmed (multiple profiles with this name exist)
- GitHub: github.com/awasthisarthak (not confirmed as same individual)

**Jay Mehta** — Founder
- A personal portfolio site (jay-mehta.vercel.app) lists B.Tech in CS from Lakshmi Narain College of Technology (2020–2024) and full-stack development experience at Flutteryourway and Metamorph. Confirmation that this is the same individual is not established.
- Twitter/X: No public account found
- LinkedIn: Not confirmed (1,300+ profiles with this name on LinkedIn)
- GitHub: No confirmed public repos found

**Co-founder relationship:** Deepit Shah (UIUC) and Somansh Shah (Purdue) share the Shah surname but attended different universities. No shared employer or university overlap is visible among the four founders from available data. No public data on co-founder history.

**Founder-market fit:** Somansh Shah's AI/ML background (Lenovo data science internship, WiseBucks.ai, Stanford ML coursework) and Deepit Shah's systems engineering experience (Amazon internship, UIUC CS MS, Google ML/Systems/Cloud AI) provide relevant technical grounding for building browser infrastructure for AI agents. The team's hackathon track record and venture development training suggest execution orientation. No advisors, board members, or notable investors beyond YC and Tom Blomfield were found.

## Key Risks

**Intense, well-funded competition:** Browserbase ($40M, $300M valuation; Firecrawl blog), Browser Use ($17M; TechCrunch, March 2025), Steel.dev ($17M; StartupHub.ai), and Kernel ($22M; onkernel.com) collectively represent >$96M in funding targeting the same buyer persona. StableBrowse enters with standard YC funding against established competitors with production customers.

**Web compatibility at scale:** Stripping the rendering engine while preserving JavaScript execution and site compatibility across the modern web is technically unproven at scale. Sites using rendering-dependent anti-bot detection, dynamic CSS-based layouts, or canvas/WebGL elements may not function correctly without the visual stack, limiting the addressable surface of the web.

**Platform risk from LLM providers:** OpenAI (ChatGPT Atlas/Operator), Google (Disco/Gemini), and Anthropic are building native browsing capabilities into their agent infrastructure. If LLM providers bundle browser infrastructure, the standalone market for third-party browser engines could shrink.

**Founder verification gap:** Two of four founders (Sarthak Awasthi, Jay Mehta) have common names with no publicly confirmed professional profiles linked to StableBrowse. Deepit Shah's LinkedIn indicated he was returning to Google full-time (LinkedIn via search snippet), raising a question about full-time commitment that cannot be resolved from public data.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI agents market: $7.63B in 2025, $182.97B by 2033, 49.6% CAGR (Grand View Research via search snippet); AI browser market: $4.5B in 2024, $76.8B by 2034, 32.8% CAGR (Market.us via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Somansh Shah (Founder): Purdue DS '25, Lenovo intern, JMEC 1st place. Deepit Shah (Founder): UIUC CS BS/MS, Amazon intern, Google SWE. Sarthak Awasthi (Founder): hackathon winner (Devpost, unconfirmed). Jay Mehta (Founder): full-stack developer (portfolio site, unconfirmed). |
| Competitors | Browserbase ($40M raised, $300M valuation, revenue unknown, cloud-hosted full Chromium; Firecrawl blog); Browser Use ($17M raised, revenue unknown, open-source 50K stars; TechCrunch Mar 2025); Steel.dev ($17M raised, revenue unknown, open-source self-hosted; StartupHub.ai); Hyperbrowser (YC S21, amount undisclosed, revenue unknown, CAPTCHA/proxy built-in; YC page); Kernel ($22M raised, revenue unknown, scale-focused infra; onkernel.com blog) |
| Moat Signals | No public data found |
| Risk Factors | Intense well-funded competition (>$96M aggregate competitor funding), unproven web compatibility at scale, platform risk from LLM providers building native browsing |
| Founder Reach | No public data found |
| Distribution Signals | No public data found |
| Emails | No public data found |
