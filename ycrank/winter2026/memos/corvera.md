# Corvera

> Fully autonomous operations for CPG brands

| Field | Value |
|-------|-------|
| Website | https://www.corvera.ai/ |
| YC Page | https://www.ycombinator.com/companies/corvera |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | AIOps, Artificial Intelligence, SaaS, B2B, Supply Chain |

## The Idea

**Problem:** Fast-growing CPG/FMCG brands selling through retail channels spend disproportionate operational hours on repetitive supply chain tasks — processing sales orders (parsing emails, PDFs, matching against catalogues), tracking inventory across warehouses, forecasting demand, and generating purchase orders to avoid stockouts. These tasks are manual, error-prone, and do not scale with brand growth. Existing solutions tend to be inventory management tools (e.g., Cin7) or financial platforms (e.g., Settle) that require significant manual input rather than autonomous operation. Corvera targets CPG brands with >$5M ARR (YC launch page).

**Approach:** Corvera positions itself as an "Agentic OS for CPG brands" — an AI agent layer that sits across the operational workflow. The platform automates six core functions: (1) end-to-end order processing (parsing inbound orders, routing fulfillment, invoicing), (2) real-time demand forecasting within 30-day windows with stockout risk alerts, (3) cross-location inventory tracking with reorder suggestions, (4) financial analytics including gross margin tracking, (5) cashflow management tracking inflows/outflows and future payment obligations, and (6) logistics optimization selecting fulfillment paths by cost, speed, and inventory position (corvera.ai). The system is described as operating with human oversight rather than fully unsupervised.

**Differentiation:** Compared to horizontal supply chain management platforms (e.g., Blue Yonder, Flowlity), Corvera is built specifically for the mid-market CPG vertical and claims to deliver autonomous operation rather than decision-support dashboards. Compared to CPG-focused tools like Settle (finance/payments) or Cin7 (inventory management), Corvera bundles operations end-to-end across orders, inventory, forecasting, and finance in a single agentic platform. The "AI workforce" framing — where agents execute tasks rather than surfacing recommendations — differentiates from traditional SaaS tools that still require human operators.

**Business Model:** No pricing information is publicly disclosed on corvera.ai. [Inferred]: Most likely monetization path is a SaaS subscription, possibly tiered by order volume or number of SKUs/warehouses, given the B2B SaaS positioning and >$5M ARR customer targeting.

**TAM/SAM:** The global CPG software market is valued at USD 12.5 billion in 2026, projected to reach USD 25 billion by 2033 at 9.1% CAGR (OpenPR, 2026 via search snippet). The broader global supply chain management software market is estimated at USD 36.39 billion in 2026, growing at 9.01% CAGR to USD 56.01 billion by 2031 (Statista, 2026 via search snippet). No public SAM estimate specific to AI-automated CPG operations has been found.

**GTM / Distribution:** Corvera's initial go-to-market is founder-led sales into mid-market CPG brands, leveraging CEO Christopher Kong's existing CPG network from Better Nature (which has nationwide UK retail distribution with Tesco, Asda, Ocado, Whole Foods). The company lists customer logos including Aduna Superfoods, Cuzena, Better Nature, Superfoodio, Boxtails, Battersea Biltong, VITHIT, and Sunny & Luna on its website (corvera.ai). The pipeline has grown from 30+ brands (YC company description) to 50+ brands (Vegpreneur, 2026).

## Defensibility

Corvera is at a pre-seed stage; defensibility signals are nascent. Potential moat vectors include: (1) **Data flywheel** — as agents process orders and forecast demand for more brands, the models could improve forecasting accuracy across the CPG category, creating a data advantage over time; (2) **Switching costs** — once a brand's entire operations workflow (orders, inventory, forecasting, POs, invoicing) runs through Corvera, migration cost is high; (3) **Vertical specialization** — deep knowledge of CPG-specific workflows (retail buyer order formats, category-specific demand patterns, multi-warehouse allocation logic) could be difficult for horizontal tools to replicate at the same depth.

**Market structure:** Large supply chain incumbents (Blue Yonder, SAP, Oracle) target enterprise customers and are architected around ERP integration and decision-support rather than autonomous agent execution. Rebuilding their platforms around agentic AI would require cannibalizing existing licensing revenue models and re-architecting for a mid-market CPG segment they do not currently serve. Mid-market inventory tools (Cin7, Ordoro) would need to build AI agent capabilities from scratch and expand scope beyond inventory into order processing and demand forecasting.

**Commoditization risk:** The underlying AI capabilities (LLM-based document parsing, time-series forecasting, workflow automation) are increasingly commoditized. Other AI-native startups (Firstshift, and potentially new entrants) could build similar vertical solutions. The barrier is primarily the integration depth with CPG-specific systems and the accumulated operational data, not the AI models themselves.

## Market & Traction

**Traction signals:**
- $2M raised in pre-seed round (Vegpreneur, 2026; The Grocer reports £1.5M equivalent)
- 15 design partners secured (YC company description; Vegpreneur, 2026)
- 50+ brands in pipeline (Vegpreneur, 2026; The Grocer, 2026)
- Named customer logos on website: Sunny & Luna, Aduna Superfoods, Cuzena, Better Nature, Superfoodio, Boxtails, Battersea Biltong, VITHIT (corvera.ai)
- YC Launch page: 16 upvotes (YC Launches page)
- Press coverage: The Grocer (UK grocery trade publication), Vegpreneur, vegconomist
- Twitter/X: @corveraai (listed on YC page; account not retrievable via search)
- LinkedIn: linkedin.com/company/covera-ai (YC page)
- 0 open job postings (YC page)
- No Product Hunt launch found
- No app store presence found
- No public revenue figures disclosed

**Competitive landscape:**

1. **Settle** — $78.8M equity raised, ~$506M total including debt (Crunchbase via search snippet). Focused on CPG finance: procurement, AP automation, and working capital financing. Differentiator vs. Corvera: Settle handles financial operations and lending, not autonomous order processing or demand forecasting.

2. **Cin7** — Backed by Rubicon Technology Partners ($500M continuation fund); $35.8M–$75M estimated annual revenue (Latka 2025, LeadIQ 2025 via search snippets). Cloud-based inventory management with 700+ integrations. Differentiator vs. Corvera: Cin7 is a traditional SaaS inventory tool requiring manual operation; Corvera claims autonomous agent-driven execution.

3. **Firstshift AI** — $7.59M raised, Series A June 2025 (Tracxn via search snippet). AI-powered demand planning and supply chain optimization. Differentiator vs. Corvera: Firstshift focuses on demand planning/forecasting only; Corvera bundles end-to-end operations including order processing and invoicing.

4. **Flowlity** — AI-driven supply chain planning platform. Revenue unknown. Differentiator vs. Corvera: Flowlity targets larger enterprises and focuses on inventory optimization rather than full-stack CPG operations.

**Why now:** [Inferred]: The convergence of LLM capabilities (enabling parsing of unstructured order documents like emails and PDFs), declining inference costs, and the maturation of agentic AI frameworks in 2024-2025 made it feasible to build autonomous operational agents that can reliably execute multi-step workflows (order intake → catalog matching → fulfillment routing → invoicing) rather than just surfacing recommendations. A 2025 McKinsey survey found 71% of CPG leaders have integrated AI into at least one business function, with demand forecasting leading adoption (NVIDIA/McKinsey via search snippet). NVIDIA's 2026 survey found 9 in 10 retailers plan to increase AI budgets in 2026, with agentic AI as a focus area (NVIDIA Blog, 2026 via search snippet).

## Founders & Team

**Christopher Kong** — Co-Founder & CEO
- MSc Molecular and Cellular Biochemistry, University of Oxford (EnSpire Oxford)
- Co-founded Better Nature (UK's leading tempeh brand) in 2018; served as CEO 2019–2025 (vegconomist). Better Nature secured nationwide listings with Tesco, Asda, Ocado, and Whole Foods Market (The Grocer, 2025). Kong departed Better Nature to launch Corvera; Better Nature continues to operate independently under co-CEO Elin Roberts
- Forbes 30 Under 30 Europe 2025 (vegconomist)
- Described as "2x founder" (YC page); second prior venture not identified in public sources
- Twitter/X: Multiple accounts appear under "Chris Kong"; specific handle for the Corvera founder not confirmed. Count not retrievable
- LinkedIn: linkedin.com/in/cwnkong — "Corvera (YC W26)" (LinkedIn)
- GitHub: No public repos found

**Dirk Breeuwer** — Co-Founder & CTO
- The Wharton School (LinkedIn via search snippet)
- Former Data, Analytics and AI Lead at Google; built the first Global Data Warehouse for Google Pixel and led Google's Marketing AI Transformation Programme, incubating five AI systems including a multi-agent workflow automation that improved brand compliance review efficiency by 90% (LinkedIn via search snippet)
- 6+ years experience in data and AI (YC page)
- Twitter/X: @dirkjanbreeuwer — ~150 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/dirkbreeuwer — "Sarah AI (YC W26)" (LinkedIn)
- GitHub: github.com/dirkjbreeuwer — 73 followers; repos include GPT-automated web scraper, YC company scraper, Reddit data extraction tools (GitHub via search snippet). Specific star counts not retrieved

**Matthew Collins** — Co-Founder & CPO
- MEng Computer Science, Princeton University (YC page; Keller Center at Princeton)
- Former Head of Product at Rosemark (LinkedIn)
- Former Computer Scientist and Head of Entrepreneurship at Eton College (search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/itsmcollins (LinkedIn)
- GitHub: No public repos found

**Berk Güngör** — Founding Engineer & Head of AI Engineering
- MSc in AI, University of Hamburg (search snippet)
- 6+ years experience as AI/ML engineer focused on applied LLMs and real-world AI automation (YC page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/berkgungor (LinkedIn via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Kong (Oxford) and Collins (Princeton) studied at different institutions. Breeuwer (Wharton) has a distinct educational background. Kong's CPG experience at Better Nature and the team's focus on CPG operations suggests Kong may have recruited co-founders based on complementary technical skills (Breeuwer's Google AI background, Collins's product experience). No shared prior employer identified from public data.

**Founder-market fit:** Kong brings direct operational experience running a CPG brand (Better Nature) through UK retail distribution — the exact pain point Corvera addresses. Breeuwer's background building multi-agent AI systems at Google provides technical credibility for the agentic architecture. Collins's product background at Rosemark and Princeton CS training covers the product engineering side. Güngör's specialization in applied LLMs aligns with the document parsing and automation requirements. Investors include Firstminute Capital (pre-seed specialist), Dom Maskell (exited co-founder of Runna), and Alex Bouaziz (co-founder of Deel) (Vegpreneur, 2026).

## Key Risks

**Brand name collision:** "Corvera" overlaps with a Spanish municipality, a handball club (@BMCORVERA), and multiple individuals with the surname Corvera across social media. The company's legal entity appears to be "Sarah AI Inc." (USPTO trademark filing). This creates SEO and brand discovery friction for inbound prospects searching for the product.

**Founder departure from operating company:** Kong left Better Nature (which continues operating independently) in 2025 to start Corvera. While this demonstrates commitment to the new venture, the "2x founder" claim on the YC page is unverifiable — Better Nature was not exited, and the second prior company is not publicly identified. This is a messaging risk rather than an operational risk.

**Narrow vertical with incumbent adjacency:** Cin7 (estimated $35.8M–$75M revenue) already serves the CPG inventory management segment and could add AI agent capabilities. Settle ($78.8M equity raised) covers CPG financial operations. If either expands scope to cover Corvera's full-stack offering, Corvera would face well-funded competition from platforms with existing customer bases.

**Design partner to paid conversion uncertainty:** 15 design partners and 50+ pipeline brands are reported, but no revenue, contract values, or paid customer counts have been disclosed publicly. Design partners in B2B SaaS often do not convert to paid contracts at predictable rates.

**UK-to-US market expansion:** The founding team and initial customer base (Better Nature, Aduna Superfoods, Battersea Biltong, VITHIT) appear primarily UK-based. The company is listed in San Francisco (likely for YC) but serving US CPG brands requires different retailer integrations, fulfillment networks, and go-to-market motions than the UK market.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $12.5B CPG software market in 2026, projected $25B by 2033 at 9.1% CAGR (OpenPR, 2026 via search snippet); $36.39B supply chain management software market in 2026 at 9.01% CAGR (Statista, 2026 via search snippet) |
| SAM | No public data found |
| Traction | 15 design partners, 50+ brand pipeline (Vegpreneur, 2026); 8 named customer logos on website (corvera.ai); 16 upvotes on YC Launch page |
| Revenue Signal | No public data found |
| Founders | Christopher Kong (CEO): Oxford MSc, ex-CEO Better Nature, Forbes 30U30. Dirk Breeuwer (CTO): Wharton, ex-Google AI Lead. Matthew Collins (CPO): Princeton MEng CS, ex-Head of Product Rosemark. Berk Güngör (Head of AI): MSc AI Hamburg, 6+ yrs AI/ML |
| Competitors | Settle ($78.8M equity raised, revenue unknown, CPG finance focus); Cin7 (PE-backed, $35.8M–$75M est. revenue, inventory management focus); Firstshift AI ($7.59M raised, revenue unknown, demand planning focus); Flowlity (funding unknown, revenue unknown, enterprise supply chain planning) |
| Moat Signals | No public data found. [Inferred]: Potential data flywheel from cross-brand demand forecasting and high switching costs from full-stack operational integration |
| Risk Factors | Brand name collision with "Sarah AI Inc." legal entity, design-partner-to-paid conversion unproven, narrow vertical with incumbent adjacency (Cin7, Settle) |
| Founder Reach | Christopher Kong: Twitter handle unconfirmed, LinkedIn linkedin.com/in/cwnkong. Dirk Breeuwer: Twitter @dirkjanbreeuwer ~150 followers, LinkedIn linkedin.com/in/dirkbreeuwer, GitHub github.com/dirkjbreeuwer 73 followers. Matthew Collins: Twitter not found, LinkedIn linkedin.com/in/itsmcollins. Berk Güngör: Twitter not found, LinkedIn linkedin.com/in/berkgungor |
| Distribution Signals | Press coverage in The Grocer, Vegpreneur, vegconomist (2026); YC Launch page (16 upvotes); no Product Hunt launch found |
