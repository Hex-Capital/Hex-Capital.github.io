# Return Signals

> AI customer support that proactively engages high-value users

| Field | Value |
|-------|-------|
| Website | https://www.returnsignals.com |
| YC Page | https://www.ycombinator.com/companies/return-signals |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Generative AI, Customer Success, Customer Support, SMS |
| YC Partner | Gustaf Alstromer |
| Emails | hello@returnsignals.com |

## The Idea

**Problem:** E-commerce apparel, footwear, and accessories brands face high return rates that erode margins. Traditional customer support is reactive — brands wait for customers to initiate return requests, losing the window to resolve issues (fit, quality, styling) before a return is processed. Existing SMS marketing platforms (Attentive, Postscript, Klaviyo) are optimized for outbound promotional campaigns, not post-delivery conversational engagement. Return portals (Loop Returns, Narvar) manage the logistics of returns but do not proactively intervene to prevent them.

**Approach:** Return Signals uses LLMs to send proactive, conversational SMS check-ins to customers after delivery. The AI engages in authentic two-way conversations — including photo-based troubleshooting for fit, quality, or styling issues — and guides customers toward exchanges, resolutions, or keeping items rather than returning them. The system escalates to human agents for unusual situations. The platform also collects product feedback (e.g., sizing data routed to merchandising teams) and captures data for future engagement (e.g., birthdays). It integrates with 50+ platforms including Shopify and Gorgias (company website).

**Differentiation:** Return Signals positions itself as a "post-purchase concierge" rather than an SMS marketing tool or a returns portal. The company claims 4–10x higher response rates on SMS outreach compared to Attentive, Postscript, and Emotive (YC page). The key difference vs. Attentive/Postscript/Klaviyo: those platforms send promotional and transactional messages; Return Signals sends conversational, LLM-driven check-ins designed to feel human. Vs. Loop Returns/Narvar: those platforms manage the return process after a customer initiates it; Return Signals intervenes before the return is filed. Vs. Emotive (acquired by Privy, July 2025): Emotive offered two-way SMS conversations but was marketing-focused, not post-delivery/returns-focused.

**Business Model:** No public pricing page. The ROI calculator on the website frames value through three sources: exchange value (returns converted to exchanges), keep-item value (returns avoided entirely), and retention value (repeat purchases from engaged customers) (returnsignals.com/roi). [Inferred]: Most likely monetization path is per-message or per-interaction pricing tied to volume of customer conversations, or a SaaS subscription based on order volume, given the SMS-based delivery model and e-commerce customer base.

**TAM/SAM:** The global SMS marketing service market was estimated at $4.52 billion in 2025, projected to reach $8.40 billion by 2032 at a 9.24% CAGR (360iResearch, 2026 via search snippet). The US SMS marketing industry is projected to grow from $2.9 billion in 2023 to $9.96 billion by 2030, at a 20.3% CAGR (source not named via search snippet). E-commerce accounts for approximately 66% of all SMS-sending businesses (Omnisend, 2026 via search snippet). [Inferred]: The serviceable market is narrower — specifically post-purchase/returns-focused SMS for apparel, footwear, and accessories e-commerce brands, likely a fraction of the broader SMS marketing TAM.

**GTM / Distribution:** The company website features a "Book a Demo" flow, indicating a sales-led GTM motion. The blog publishes SEO-targeted comparison content (e.g., "Best Return Portals for Ecommerce Apparel 2026," "Best Texting Services for Ecommerce Apparel 2026") to capture inbound search traffic (returnsignals.com/blog). The Shopify integration suggests initial distribution through the Shopify ecosystem. [Inferred]: Direct sales to mid-market and enterprise e-commerce brands with high return rates (apparel, footwear, accessories), supplemented by content marketing and Shopify ecosystem presence.

## Defensibility

**Data moat potential:** Each customer interaction generates proprietary data — product-specific sizing feedback, return-reason patterns, customer sentiment signals, and exchange preferences. Over time, this data could improve the LLM's ability to resolve issues and recommend exchanges, creating a feedback loop that is difficult to replicate without similar deployment scale. However, this moat does not exist today at pre-seed stage with limited deployment.

**Switching costs:** Once a brand integrates Return Signals into its post-delivery workflow and the system learns brand-specific product data (sizing curves, common quality issues, preferred exchange logic), switching to another provider would require re-training and re-integration. These switching costs are moderate and grow with usage.

**Market structure:** Attentive ($500M ARR, Sacra) and Klaviyo ($1.2B ARR, Klaviyo investor relations, Feb 2026) are optimized for marketing-oriented SMS — promotional campaigns, abandoned cart, and retention flows. Building a proactive, conversational post-delivery product requires a fundamentally different UX model (two-way LLM conversations vs. one-way campaign blasts) and a different value proposition (margin preservation via returns reduction vs. revenue generation via marketing). This represents a business model conflict: Attentive/Klaviyo's revenue scales with message volume for marketing; Return Signals' value proposition is reducing the need for support tickets, which is orthogonal to the marketing-volume model.

**Commoditization risk:** The core technology (LLM-driven SMS conversations) is accessible to any team with API access to foundation models. Attentive and Postscript could add post-delivery conversational features. Loop Returns could layer AI conversations onto their returns portal. The specific defensibility is in the integration of returns-domain knowledge, product-level data, and the conversational model — but the barrier to replication is moderate rather than high.

## Market & Traction

**Traction signals:**
- 61% customer response rate on SMS outreach (company website); the YC page claims 80%+ response rates — these may reflect different measurement timeframes or customer cohorts
- <0.1% opt-out rate (company website)
- 90%+ positive sentiment (company website); 95%+ positive sentiment (YC page)
- 70% conversion of return intents into exchanges (YC page)
- 5–10% absolute margin uplift claimed (YC page)
- Company blog launched January 2026 with 6 posts through March 2026 (returnsignals.com/blog)
- LinkedIn company page exists (linkedin.com/company/return-signals)
- No Product Hunt launch found
- No press coverage in named publications found
- No app store listings, Chrome extension, or download counts found
- No Discord or Slack community found
- No specific customer names or logos disclosed publicly
- No revenue figures disclosed publicly
- Company Twitter/X and YouTube (@MaterialModel) linked from website; follower counts not retrievable

**Competitive landscape:**

1. **Attentive** — $863M+ total funding; $500M ARR as of end 2024 (Sacra via search snippet). Full-stack SMS and email marketing platform for e-commerce. Differentiator vs. Return Signals: Attentive is marketing-first (campaigns, promotions, subscriber growth); Return Signals is post-delivery/support-first (proactive returns prevention).

2. **Postscript** — $117M+ total funding over 4 rounds including $65M Series C (Crunchbase/TechCrunch, June 2022 via search snippet); ~$39M ARR at end 2022 (Sacra via search snippet). Shopify-focused SMS marketing and sales platform. Differentiator: Postscript focuses on marketing and CashBack offers for Shopify merchants; Return Signals targets the post-delivery returns conversation.

3. **Klaviyo** (KVYO) — Public company; ~$1.2B ARR in FY2025 with 32% YoY growth (Klaviyo investor relations, Feb 2026). Email and SMS platform with ~10% of revenue from SMS. Differentiator: Klaviyo is a broad email/SMS marketing automation platform; Return Signals is specialized for post-delivery conversational engagement.

4. **Loop Returns** — $176M total funding (Tracxn via search snippet); approximately $30M revenue in 2022 with a target of $100M ARR by 2025 (Columbus Business First, April 2023 via search snippet). Returns management portal for e-commerce. Differentiator: Loop manages the return/exchange logistics after a customer initiates a return; Return Signals proactively intervenes via SMS before the return is filed.

5. **Emotive** — $74M total funding; acquired by Privy in July 2025 (search snippet). Two-way conversational SMS marketing. Differentiator: Emotive was the closest competitor in conversational SMS but was marketing-focused and is now absorbed into Privy's platform, removing it as a direct standalone competitor.

**Why now:**
[Inferred]: Three enabling changes opened this opportunity: (1) LLM quality crossed a threshold in 2023–2025 where AI-generated SMS messages can pass as human in conversational exchanges, enabling the "authentic" two-way engagement that Return Signals claims — this was not possible with rule-based chatbots; (2) Emotive's acquisition by Privy in July 2025 removed the most prominent conversational SMS player from the market as a standalone offering; (3) e-commerce brands sent 40% more SMS messages in 2025 than 2024 (Omnisend, 2026 via search snippet), indicating accelerating SMS adoption that creates a larger addressable base for post-purchase messaging specifically.

## Founders & Team

**Ilya Valmianski** — Co-Founder & CEO
- PhD in Physics, UC San Diego (2017) (personal website: ilya.valmianski.com)
- Machine Learning Scientist at Curai Health — built medical conversational AI (personal website)
- Lead Data Architect at Kaiser Permanente — developed SmartTriage, described as "one of the largest patient-facing machine-learning-based applications" deployed across KP Southern California (personal website)
- Co-founded MDandMe (mdme.ai), an AI-powered conversational symptom checker, founded 2023 (Crunchbase via search snippet)
- Claims: 2nd-time founder; helped take two startups from 0–1, including one acquisition and one that reached $40M ARR (YC page)
- Research publications in medical NLP and ML (Google Scholar profile)
- Twitter/X: @valmianski — follower count not retrievable
- LinkedIn: linkedin.com/in/ilya-x-valmianski/ — 500+ connections
- GitHub: linked from personal website — specific repos and star counts not retrievable

**Alejandro Zaniolo** — Co-Founder
- Columbia University (LinkedIn via search snippet)
- Head of Business Development, Partner Network at Blueground (LinkedIn via search snippet)
- VP of Business Development at Nestpick (search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/alejandrozaniolo/ — 500+ connections
- GitHub: No public repos found

**Co-founder relationship:** No shared employer or university overlap visible from publicly available background data. Ilya's career was in healthcare AI (Kaiser Permanente, Curai Health, MDandMe) and Alejandro's was in real estate/proptech business development (Blueground, Nestpick). No public data on how they met.

**Founder-market fit:** Ilya's background in building conversational AI systems at scale — particularly SmartTriage at Kaiser Permanente and medical chatbots at Curai Health — provides direct technical expertise for building LLM-driven SMS conversations. His experience taking prior startups from 0–1 (with one acquisition and one reaching $40M ARR per YC page) indicates repeat founding experience. Alejandro's business development and partnerships experience at Blueground and Nestpick (both marketplace/platform businesses) is relevant for building brand partnerships and sales relationships in e-commerce. The company is operated by Material Model, Inc.

## Key Risks

**Platform dependency on SMS/carrier infrastructure:** Return Signals' entire product is delivered via SMS. Changes to carrier filtering rules (e.g., 10DLC registration requirements, A2P messaging regulations), rising per-message costs, or carrier-level spam filtering could directly impact deliverability and unit economics. The <0.1% opt-out rate claimed may not persist as message volume scales across diverse customer bases.

**Incumbent feature absorption:** Attentive ($500M ARR), Postscript ($117M+ funded), and Klaviyo ($1.2B ARR) all have existing SMS infrastructure and e-commerce integrations. Any of these could add post-delivery conversational AI features as an extension of their existing platforms. Loop Returns ($176M funded) could add AI-driven SMS outreach to their returns management portal. The competitive moat at this stage is thin, as the core technology (LLM-driven SMS) is not proprietary.

**Narrow vertical focus:** The product is explicitly positioned for e-commerce apparel, footwear, and accessories — categories with high return rates. This specificity limits the initial addressable market and creates concentration risk. Expanding to other e-commerce categories (electronics, home goods) would require different domain knowledge and potentially different conversational models.

**Measurement attribution complexity:** The company's value proposition (5–10% margin uplift, 70% return-to-exchange conversion) requires proving counterfactuals — that a customer would have returned an item but didn't because of the SMS intervention. This attribution challenge could slow enterprise sales cycles as brands demand proof of incremental impact vs. natural exchange rates.

**Brand perception risk from AI-driven outreach:** The product sends unsolicited post-delivery SMS messages generated by AI. If customers perceive these as intrusive or inauthentic despite the claimed response rates, brands may face backlash. Regulatory scrutiny of AI-generated consumer communications (particularly under TCPA and state-level consumer protection laws) could impose additional compliance burdens.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global SMS marketing service market: $4.52B in 2025, projected $8.40B by 2032 at 9.24% CAGR (360iResearch, 2026 via search snippet) |
| SAM | No public data found for post-purchase conversational SMS specifically |
| Traction | 61% customer response rate, <0.1% opt-out rate, 90%+ positive sentiment (company website); 80%+ response rates, 95%+ positive sentiment, 70% return-to-exchange conversion, 5–10% margin uplift (YC page). No named customers disclosed. |
| Revenue Signal | No public data found. No pricing page. Demo-based sales model. |
| Founders | Ilya Valmianski (Co-Founder/CEO): PhD Physics UCSD, ML Scientist Curai Health, Lead Data Architect Kaiser Permanente, Co-founded MDandMe, 2nd-time founder. Alejandro Zaniolo (Co-Founder): Columbia University, Head of BD at Blueground, VP BD at Nestpick. |
| Competitors | Attentive ($863M+ raised, $500M ARR end 2024, marketing-first SMS platform); Postscript ($117M+ raised, ~$39M ARR end 2022, Shopify-focused SMS); Klaviyo (public, ~$1.2B ARR FY2025, email/SMS marketing); Loop Returns ($176M raised, ~$30M revenue 2022, returns portal); Emotive ($74M raised, acquired by Privy July 2025, conversational SMS) |
| Moat Signals | No public data found. [Inferred]: Potential moat via proprietary product-level return/exchange data and brand-specific conversational models, unproven at this stage. |
| Risk Factors | Incumbent feature absorption by Attentive/Postscript/Klaviyo/Loop, SMS carrier/regulatory dependency, narrow vertical focus (apparel/footwear/accessories only) |
| Founder Reach | Ilya Valmianski: Twitter @valmianski (count not retrievable), LinkedIn 500+, Google Scholar profile. Alejandro Zaniolo: LinkedIn 500+, no Twitter/GitHub found. |
| Distribution Signals | SEO blog content (6 posts, Jan–Mar 2026), ROI calculator on website, Shopify/Gorgias integrations. No Product Hunt launch, no press coverage, no app store presence found. |
| Emails | hello@returnsignals.com |
