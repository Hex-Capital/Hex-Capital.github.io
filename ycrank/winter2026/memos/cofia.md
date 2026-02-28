# Cofia

> AI automations that write themselves

| Field | Value |
|-------|-------|
| Website | https://cofia.ai |
| YC Page | https://www.ycombinator.com/companies/cofia |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 2 |
| Location | No public data found |
| Tags | Artificial Intelligence, SaaS, Productivity, AI Assistant |
| YC Partner | Gustaf Alstromer |
| Emails | No public data found |

## The Idea

**Problem:** Knowledge workers spend significant time on repetitive workflows across SaaS tools — copying data between apps, triggering routine actions, updating systems after events. Existing automation platforms (Zapier, Make, etc.) require users to manually design workflows: identifying what to automate, writing prompts, selecting triggers, and mapping data fields. This setup burden means most potential automations are never built. The current alternatives demand either technical skill (building Zaps/scenarios) or browsing community templates for inspiration.

**Approach:** Cofia observes how a user works — the tools they use, the sequences they follow, the patterns in their behavior — and proactively creates tailor-made automations without requiring the user to write a prompt or manually configure a workflow. Per the company description (YC page): "We learn how you work, and proactively create tailor-made automations you can deploy without you ever writing a prompt or relying on X for automation inspo."

**Differentiation:** Traditional automation platforms like Zapier and Make require users to initiate and configure each automation manually. Bardeen, the closest competitor, launched its "Work Intelligence Platform" in May 2025, describing AI agents that "learn how work actually happens, then execute and improve it" (PR Newswire, May 2025). Cofia's differentiation from Bardeen and other emerging AI automation tools is not well-documented in public sources at this stage. The core claim is a fully proactive model where automations are surfaced to the user without any initial prompt or configuration.

**Business Model:** No pricing page was found on the company website (the website at cofia.ai returned only analytics tracking code at time of research, with no visible product content). [Inferred]: Most likely monetization path is a SaaS subscription model (freemium or tiered), consistent with the company's SaaS tag and B2B productivity positioning.

**TAM/SAM:** The workflow automation market was valued at $23.77 billion in 2025, estimated to reach $40.77 billion by 2031 at a 9.41% CAGR (Mordor Intelligence, via search snippet). The no-code AI market segment is expanding at 31–38% CAGR, expected to reach $25 billion by 2030 (via search snippet). No specific SAM estimate found for proactive AI-driven automation.

**GTM / Distribution:** [Inferred]: Most likely distribution path is product-led growth targeting individual knowledge workers or small teams, given the two-person team size and the product's focus on personal workflow learning. The Mixpanel analytics integration on the website suggests a consumer-style product analytics approach. No evidence of enterprise sales motion at this stage.

## Defensibility

The core defensibility thesis rests on the user-specific behavioral data Cofia collects by observing individual work patterns. Over time, this personalization data could create switching costs — a competitor would need to re-learn each user's workflows from scratch. However, this moat is unproven at this stage and depends on achieving meaningful user adoption first.

**Market structure:** No structural barrier identified at this stage. Incumbents like Zapier ($310M revenue in 2024, per Latka) and Microsoft (Power Automate) have large existing user bases and could add proactive AI-driven automation features to their platforms. Zapier has already been investing in AI capabilities. [Inferred]: The potential structural barrier is that incumbents' existing business models are built around user-initiated automations with usage-based pricing; proactive automations that reduce manual configuration could cannibalize their setup-driven engagement metrics, though this is speculative.

**Commoditization risk:** Bardeen has already launched a similar "learn and automate" product with $22–25M in funding (Crunchbase, Tracxn via search snippets). Zapier, Make, and n8n all have the technical infrastructure and user bases to add proactive automation features. The core AI capability (observing user patterns and suggesting automations) relies on broadly available LLM technology, making the approach reproducible by well-resourced competitors.

## Market & Traction

1. **Traction signals:** No public traction data found. The company website (cofia.ai) contained only analytics tracking code at time of research — no product content, pricing, or traction metrics were visible. No Product Hunt launch found. No app store listings found. No Twitter/X company account found. LinkedIn company page exists at linkedin.com/company/cofia-ai (search result). No Discord or Slack community found. No job postings listed on the YC page (YC company page). No press coverage found.

2. **Competitive landscape:**
   - **Zapier** ($2.68M raised, $310M revenue in 2024, $5B valuation; Latka, Sacra via search snippets): The market leader in user-initiated workflow automation with 100K+ customers. Requires manual setup of automations vs. Cofia's proactive approach.
   - **Bardeen** (~$22–25M raised, revenue unknown; Crunchbase, TechCrunch via search snippets): Closest competitor. Launched "Work Intelligence Platform" in May 2025 with AI agents that learn work patterns and automate proactively (PR Newswire, May 2025). Browser-based automation with backing from Dropbox and HubSpot.
   - **Make (formerly Integromat)** (acquired by Celonis; $52.6M revenue in 2025; Latka via search snippet): Visual workflow builder with extensive integrations. Requires manual configuration vs. Cofia's proactive model.
   - **n8n** ($180M Series C at $2.5B valuation, October 2025; VentureBurn via search snippet): Open-source workflow automation platform. Developer-oriented with self-hosting option. Requires manual setup.
   - **Workato** ($441.2M raised, $150M revenue in 2024, ~$2.1B valuation; Tracxn, Latka via search snippets): Enterprise-focused integration and automation platform with 11,000 customers and 1,000+ connectors.

3. **Why now:** [Inferred]: The enabling change is the maturation of large language models capable of understanding and reasoning about user workflows from observation data. Prior to 2023–2024, the AI technology to interpret unstructured user behavior across multiple SaaS tools and generate working automations did not exist at sufficient quality. The cost reduction in LLM inference (GPT-4 class models becoming cheaper through 2024–2025) makes continuous observation and analysis economically feasible for a SaaS product.

## Founders & Team

**Paola Martínez** — Co-founder
- BS and MA from Stanford University (Stanford STVP, LinkedIn via search snippet)
- Mayfield Fellow at Stanford Technology Ventures Program (Stanford STVP page via search snippet)
- Teaching Assistant at Hasso Plattner Institute of Design (d.school) at Stanford (LinkedIn via search snippet)
- Senior Product Manager (User Motivation) at Brilliant.org, focused on retention (YC page: "led retention at Brilliant.org"; ZoomInfo, RocketReach via search snippets)
- Previously: Product Manager at Outschool; Product Manager at Cheetah; roles at Schmidt Futures (LinkedIn, RocketReach via search snippets)
- Twitter/X: @paomrtinez93 listed on Stanford STVP page; account could not be verified via search
- LinkedIn: linkedin.com/in/paomartcard/ (LinkedIn via search result)
- GitHub: No public repos found

**Moses Wayne** — Co-founder
- BS in Computer Science and Economics (double major) from Duke University, 2014–2018 (LinkedIn, ZoomInfo via search snippets)
- Senior Staff Software Engineer at Duolingo; progressed from Software Engineer I to Senior Staff (LinkedIn via search snippet)
- Engineering Lead and manager for multiple teams at Duolingo; oversaw virtual currency in-app purchases and infrastructure behind the AI-powered Max subscription (LinkedIn via search snippet)
- Co-led Duolingo's Software Engineering Internship Program (LinkedIn via search snippet)
- Publicly quoted in The Verge regarding Duolingo's energy feature redesign (DesignersForest via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/moses-wayne-860309128/ (LinkedIn via search result)
- GitHub: No public repos found

**Co-founder relationship:** No shared employer or university overlap identified from Phase 3 research. Paola attended Stanford; Moses attended Duke. Paola worked at Brilliant.org/Outschool/Schmidt Futures; Moses worked at Duolingo. Both are listed as based in New York, NY in their respective professional profiles (ZoomInfo via search snippets).

**Founder-market fit:** Paola brings product management experience focused on user motivation and retention at Brilliant.org, relevant to building a product that must understand user behavior patterns. Moses brings deep engineering experience in monetization systems, in-app purchases, and subscription infrastructure at Duolingo (a $9B+ public company), relevant to building the technical backend for workflow observation and automation generation. Both founders have experience at consumer-facing, product-led growth companies in the education/tech sector.

## Key Risks

**Bardeen competitive overlap:** Bardeen, with ~$22–25M in funding and backing from Dropbox and HubSpot, launched its "Work Intelligence Platform" in May 2025 with a similar value proposition of AI agents that learn work patterns and automate proactively (PR Newswire, May 2025). This direct competitor has a multi-year head start and strategic distribution partnerships.

**Brand confusion with Cofi.ai:** A separate company called "Cofi" (cofi.ai) operates as a "Portfolio Intelligence OS for Private Equity" and has an existing LinkedIn presence at linkedin.com/company/cofiai. The similar naming creates potential brand disambiguation challenges in search results and market awareness.

**Incumbent platform risk:** Zapier ($310M revenue, 100K+ customers) and Microsoft Power Automate have the distribution, integrations, and user data to add proactive AI automation as a feature update rather than a separate product. Zapier has been investing in AI capabilities and could ship a "suggested automations" feature to its existing user base.

**Deep system access requirement:** Proactive automation that "learns how you work" requires broad access to user activity across multiple SaaS tools — browser history, app usage, data flows. Gaining and maintaining these permissions creates adoption friction and raises data privacy/security concerns, particularly for enterprise customers.

**Website maturity signal:** The company website (cofia.ai) returned only analytics tracking code with no visible product content, pricing, or team information at time of research, suggesting the product may be pre-launch or very early stage.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $23.77B workflow automation market in 2025, growing to $40.77B by 2031 at 9.41% CAGR (Mordor Intelligence, via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Paola Martínez (Co-founder): Stanford BS/MA, Mayfield Fellow, Sr PM (Retention) at Brilliant.org. Moses Wayne (Co-founder): Duke BS CS/Econ, Sr Staff Engineer at Duolingo, led monetization/Max subscription infrastructure. |
| Competitors | Bardeen (~$22–25M raised, revenue unknown, proactive AI automation — closest competitor); Zapier ($2.68M raised, $310M revenue, user-initiated workflow automation); Make ($52.6M revenue, visual workflow builder, acquired by Celonis); n8n ($180M Series C, $2.5B valuation, open-source workflow automation); Workato ($441.2M raised, $150M revenue, enterprise integration) |
| Moat Signals | No public data found. Potential moat via user-specific behavioral data and personalization, unproven at this stage. |
| Risk Factors | Bardeen competitive overlap with multi-year head start, incumbent platform risk from Zapier/Microsoft, brand confusion with Cofi.ai |
| Founder Reach | Paola Martínez: Twitter @paomrtinez93 (unverified, count not retrievable), LinkedIn linkedin.com/in/paomartcard/. Moses Wayne: Twitter not found, LinkedIn linkedin.com/in/moses-wayne-860309128/. GitHub: not found for either founder. |
| Distribution Signals | No public data found |
| Emails | No public data found |
