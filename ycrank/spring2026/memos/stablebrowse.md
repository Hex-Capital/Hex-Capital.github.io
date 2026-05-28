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
| YC Partner | Tom Blomfield (YC company page) |
| Emails | team@stablebrowse.ai (company website) |

## The Idea

- **Problem:** AI agents performing web automation rely on brittle visual/HTML parsing of UIs designed for humans, causing failures on UI changes for use cases like insurance quote binding, healthcare prior authorization, and mortgage processing (stablebrowse.com).
- **Approach:** Converts websites into structured execution graphs and persistent semantic knowledge graphs encoding page semantics and actions, letting agents reuse learned site workflows across runs instead of starting from raw HTML each time (stablebrowse.com).
- **Differentiation:** vs. Browserbase/Hyperbrowser/Steel (headless browser infrastructure providers) — [Inferred]: StableBrowse adds a semantic graph/persistence layer above raw browser sessions rather than just providing managed browsers (stablebrowse.com product description + Firecrawl competitor list, 2026).
- **Business Model:** [Inferred]: Consumption/API pricing typical of browser-infrastructure peers; no pricing page exposed on stablebrowse.com at time of research.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent browser-infrastructure category context: Browserbase reached "$3M revenue" with "20,000 developer signups" running "50 million browser sessions" in ~16 months (Upstarts Media, 2025).
- **GTM / Distribution:** [Inferred]: Developer-led, API-based adoption targeting AI-agent builders, plus regulated verticals (insurance, healthcare, mortgage) given HIPAA-compliance claim and listed use cases (stablebrowse.com).

## Defensibility

- **Moat today:** [Inferred]: Accumulated per-site knowledge graphs ("persistent site memory") could create data-network effects as more agents traverse the same sites, but no usage data is public to confirm (stablebrowse.com).
- **Future moat:** [Inferred]: A cross-customer graph of verified execution patterns for high-value sites (insurance carriers, EHRs, lender portals) could become a switching cost; unproven because customer count and graph coverage are undisclosed.
- **Market structure:** [Inferred]: Headless-browser incumbents (Browserbase, Kernel) sell session infrastructure and would need to build a separate semantic-graph product layer; no structural barrier preventing them from doing so identified at this stage.
- **Commoditization risk:** Open-source frameworks (Browser Use) and well-funded incumbents (Browserbase $67.5M raised, Kernel $22M Series A, TinyFish $47M Series A) are building toward overlapping agent-browser capabilities (Upstarts Media; Firecrawl, 2026).

## Market & Traction

- **Traction signals:**
  - Performance claims: "70–80% fewer tokens," "3–4× faster execution," "98% success rate" (stablebrowse.com, self-reported).
  - Social proof: "Trusted by engineers at Meta, Google, Amazon, Citi, Ernst & Young, Purdue, Stanford, and UC San Diego" (stablebrowse.com, self-reported affiliations).
  - Compliance: "HIPAA compliant" claimed; "SOC 2 Type I and Type II certifications in progress" (stablebrowse.com).
  - YC backing announced via founder LinkedIn post (Jay Mehta LinkedIn, activity 7455364995850182657).
  - No Product Hunt launch, press coverage, Discord, app-store, or follower-count data found in public sources.
- **Competitors:**
  - Browserbase ($67.5M raised across three rounds incl. $40M Series B led by Notable Capital at $300M valuation; ~$3M revenue, 20K developer signups): managed headless browser cloud without a semantic-graph layer (Upstarts Media, 2025).
  - Kernel/Onkernel ($22M Series A led by Accel, revenue unknown): unikernel-based headless browsers with <325ms startup vs. infrastructure-only positioning (Firecrawl, 2026).
  - Hyperbrowser (YC-backed, funding undisclosed, revenue unknown): scalable headless browsers with stealth/proxy/CAPTCHA features, no graph/memory layer (Firecrawl, 2026).
  - TinyFish ($47M Series A led by ICONIQ Capital, revenue unknown): policy-aware long-running browser agents at the application layer rather than infrastructure (Firecrawl, 2026).
  - Browser Use (open-source, no funding disclosed): agent framework controlling browsers via chain-of-thought, no managed semantic graph (Firecrawl/Respan, 2026).
- **Why now:** [Inferred]: LLM-driven agent adoption crossed a usability threshold in 2024–2025 (multimodal models, tool-use APIs), creating demand for reliable web-action infrastructure — evidenced by Browserbase Series B and TinyFish/Kernel rounds within the last ~12 months (Upstarts Media; Firecrawl, 2026).

## Founders & Team

- **Sarthak Awasthi (Co-founder):**
  - Background: No public data found beyond founder listing on YC page (ycombinator.com/companies/stablebrowse).
  - Twitter/X: No public account found.
  - LinkedIn: Multiple "Sarthak Awasthi" profiles surfaced (Amazon, AWS, Capgemini Invent) but none confirmed as the StableBrowse founder via search snippet (LinkedIn search results).
  - GitHub: No public repos found.
- **Jay Mehta (Co-founder):**
  - Background: "Senior software engineer with 8+ years of experience building scalable, high-performance software," expertise in "distributed systems and full-stack development," prior startup co-founder experience per his resume site (jaymehta.online via search snippet).
  - Twitter/X: No public account found.
  - LinkedIn: Profile confirmed via post "StableBrowse is now backed by Y Combinator" (linkedin.com/posts/jaymehta003); follower count not retrievable.
  - GitHub: No public repos found.
- **Deepit Shah (Co-founder):**
  - Background: "Bachelor's degree in Computer Science from the University of Illinois Urbana-Champaign"; prior roles at "Amazon, OTCR Consulting and Disruption Lab at Gies"; co-authored research on adaptive RBF numerical methods (LinkedIn/Happenstance/ResearchGate via search snippet).
  - Twitter/X: No public account found.
  - LinkedIn: "StableBrowse" (linkedin.com/in/deepit-shah/); follower count not retrievable.
  - GitHub: No public repos found.
- **Somansh Shah (Co-founder):** Confirmed as fourth co-founder per YC page and Dealroom; no further public background data found via search.
- **Co-founder relationship:** No public data on co-founder history (shared employer/university not confirmed in retrieved snippets).
- **Founder-market fit:** [Inferred]: Technical backgrounds in distributed systems (Mehta) and prior Amazon engineering (Shah) align with browser-infrastructure work; founders described starting StableBrowse after "frustrations themselves while building browser agents" (search snippet attributed to company narrative).

## Key Risks

- **Well-funded incumbent competition:** Browserbase ($67.5M total raised, $300M valuation, $3M revenue per Upstarts Media 2025), Kernel ($22M Series A), and TinyFish ($47M Series A) are scaled in the same agent-browser-infrastructure category; no mitigation evidence found beyond StableBrowse's differentiated semantic-graph positioning (stablebrowse.com).
- **Technical feasibility of self-reported metrics:** "98% success rate" and "70–80% token reduction" are unaudited company claims with no third-party benchmark or customer case study published (stablebrowse.com).
- **Regulated-vertical compliance gap:** Marketing targets HIPAA-regulated healthcare and financial-services use cases, but "SOC 2 Type I and Type II certifications [are] in progress," not complete (stablebrowse.com) — limiting addressable enterprise pipeline until certified.
- **Founder identity ambiguity:** Multiple unrelated public figures share founder names (e.g., a different "Jay Mehta" is a prominent Indian businessman; multiple "Sarthak Awasthi" LinkedIn profiles), complicating background verification (search results across LinkedIn/Crunchbase).
- **No public traction data:** No revenue, user count, paying customer, press, Product Hunt, or social-following metrics found beyond self-listed engineer affiliations (multiple searches).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Self-reported "70-80% fewer tokens, 3-4× faster, 98% success rate" (stablebrowse.com); engineer affiliations listed: Meta, Google, Amazon, Citi, EY, Purdue, Stanford, UCSD (stablebrowse.com); YC Spring 2026 backing (ycombinator.com/companies/stablebrowse) |
| Revenue Signal | No public data found (no pricing page exposed at stablebrowse.com at time of research) |
| Founders | Sarthak Awasthi (Co-founder): YC-listed, further background not public. Jay Mehta (Co-founder): 8+ yrs SWE, distributed systems, prior startup co-founder (jaymehta.online). Deepit Shah (Co-founder): CS BS UIUC, prior Amazon, published RBF numerical-methods researcher (LinkedIn/ResearchGate). Somansh Shah (Co-founder): YC-listed, further background not public. |
| Competitors | Browserbase ($67.5M raised, ~$3M revenue, managed headless browser cloud, Upstarts Media 2025); Kernel ($22M Series A Accel, revenue unknown, unikernel browser, Firecrawl 2026); Hyperbrowser (YC, funding undisclosed, revenue unknown, headless browser API, Firecrawl 2026); TinyFish ($47M Series A ICONIQ, revenue unknown, application-layer browser agents, Firecrawl 2026); Browser Use (open-source, no funding disclosed, agent framework, Respan 2026) |
| Moat Signals | Persistent per-site knowledge graphs / "execution patterns" claimed (stablebrowse.com); no usage or customer data published to validate network effects |
| Risk Factors | Well-funded incumbents (Browserbase/Kernel/TinyFish), unaudited performance claims, SOC 2 not yet certified |
| Founder Reach | Sarthak Awasthi: Twitter not found, LinkedIn not confirmed, GitHub not found. Jay Mehta: Twitter not found, LinkedIn jaymehta003 (count not retrievable), GitHub not found. Deepit Shah: Twitter not found, LinkedIn deepit-shah (count not retrievable), GitHub not found. Somansh Shah: No public data found. |
| Distribution Signals | No public data found (no Product Hunt, Chrome Web Store, or app-store presence located) |
| Emails | team@stablebrowse.ai (stablebrowse.com) |

Sources:
- [StableBrowse YC page](https://www.ycombinator.com/companies/stablebrowse)
- [StableBrowse website](https://stablebrowse.com/)
- [Browserbase Raises $40M – Upstarts Media](https://www.upstartsmedia.com/p/browserbase-raises-40m-and-launches-director)
- [11 Best AI Browser Agents 2026 – Firecrawl](https://www.firecrawl.dev/blog/best-browser-agents)
- [Browser Use vs Browserbase – Respan](https://www.respan.ai/market-map/compare/browser-use-vs-browserbase)
- [Deepit Shah LinkedIn](https://www.linkedin.com/in/deepit-shah/)
- [Jay Mehta LinkedIn post](https://www.linkedin.com/posts/jaymehta003_stablebrowse-is-now-backed-by-y-combinator-activity-7455364995850182657-vjPR)
- [Jay Mehta resume](https://jaymehta.online/)
- [StableBrowse – Dealroom](https://app.dealroom.co/companies/stablebrowse)
