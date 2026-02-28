# Scout Out

> AI generated proposals for residential construction projects

| Field | Value |
|-------|-------|
| Website | https://scoutout.ai/ |
| YC Page | https://www.ycombinator.com/companies/scout-out |
| Batch | Winter 2026 |
| Industry | Real Estate and Construction / Real Estate and Construction |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Real Estate, Construction, Proptech, AI |
| YC Partner | Tyler Bosmeny |
| Emails | nolan@scoutout.ai (company website) |

## The Idea

**Problem:** Residential contractors bidding on remodels and rebuilds must manually interpret building plans, calculate material and labor quantities, and assemble proposals from scratch for every project. The process is slow, inconsistent, and expensive. Small differences in scope interpretation often determine who wins a job. Contractors typically use spreadsheets, pen-and-paper methods, or generic estimating software that still requires significant manual input (YC company page).

**Approach:** Scout Out uses computer vision trained on residential building plans to generate structured material and labor takeoffs. Contractors can review, customize, price, and convert these takeoffs into professional proposals. The platform also includes a lead-discovery layer — browsing newly permitted residential projects in a contractor's area and enriching them with homeowner contact information (name, phone, email, property address). Additional features include a CRM dashboard, digital invoicing, and mobile access (company website). The product combines two value propositions: (1) finding new projects via permit data, and (2) automating the estimating and proposal workflow.

**Differentiation:** Scout Out bundles lead generation from permit data with AI-powered estimating and proposal generation in a single platform. Most competitors focus on one or the other. Handoff AI (YC, $25M+ raised) focuses on AI estimating and project management for remodelers but does not appear to offer permit-based lead discovery. Buildxact ($33M raised) offers cloud-based estimation for residential builders but is a more traditional SaaS tool. Attentive.ai/Beam AI ($48M raised) focuses on automated takeoffs primarily for commercial contractors and field services. Togal.AI ($22.65M raised) targets commercial estimators with AI-powered takeoff. Scout Out's residential focus and integrated lead-to-proposal pipeline distinguish it from these primarily estimating-only or commercial-focused tools.

**Business Model:** Scout Out Pro is priced at $119/month when billed annually (described as a 20% savings), with a 14-day free trial. The plan includes 250 leads/month, AI estimates, proposal generation, CRM, digital invoicing, and priority support (company website pricing page). New users receive 25 free leads upon registration.

**TAM/SAM:** The global construction estimating software market was valued at approximately $1.5 billion in 2024, projected to reach $2.62 billion by 2030 at a 10.2% CAGR (Grand View Research, via search snippet). The residential construction estimating software segment was valued at $1.2 billion in 2024, forecast to reach $2.5 billion by 2033 at an 8.9% CAGR (Verified Market Reports, via search snippet). The narrower residential remodeling estimating software segment was valued at $99.98 million in 2024, projected to reach $162.9 million by 2031 (Verified Market Research, via search snippet).

**GTM / Distribution:** The company is starting in Los Angeles, working with residential contractors on remodels and post-fire rebuilds following the January 2025 Palisades and Eaton fires (YC company page). The website displays logos of seven contractor customers: ABC Contractors, Danbuilt General Contractors, Energize Builders, Kash Construction, MDRN Construction, NA Design Build, and Pacific Crest (company website). [Inferred]: The initial GTM strategy leverages the acute post-wildfire demand for contractor services in LA as a concentrated entry point, likely relying on direct outreach and referrals within the local contractor network.

## Defensibility

The core product depends on computer vision models trained on residential building plans. Over time, data from contractor reviews, pricing adjustments, and regional material/labor costs could create a proprietary dataset that improves estimate accuracy and is difficult for new entrants to replicate. The bundling of permit-based lead discovery with AI estimating creates a workflow lock-in where contractors manage their pipeline end-to-end in one tool. No defensibility signals are publicly confirmed at this stage beyond the described technical approach.

**Market structure:** Large incumbents in construction software (e.g., Procore, Autodesk) focus on commercial and enterprise segments where deal sizes justify their sales-heavy GTM motions. Serving individual residential contractors at $119/month requires a fundamentally different distribution model (self-serve, product-led) that conflicts with incumbent enterprise sales economics. Additionally, incumbents' estimating tools are designed for commercial project workflows and plan formats, not residential remodel plans. [Inferred]: The structural barrier is unit economics incompatibility — enterprise construction software companies cannot profitably serve SMB residential contractors at this price point through their existing sales channels.

**Commoditization risk:** The underlying technologies — computer vision for plan reading and LLMs for proposal generation — are increasingly accessible. Handoff AI is a direct YC-backed competitor already at 10,000+ MAU with $25M+ in funding (Handoff blog, June 2025). Buildxact has $10.7M in revenue and established market position (Getlatka, via search snippet). Multiple well-funded startups could add similar features. The permit-data lead generation component uses public data that any competitor could also aggregate.

## Market & Traction

**Traction signals:**
- Seven contractor logos displayed on website: ABC Contractors, Danbuilt General Contractors, Energize Builders, Kash Construction, MDRN Construction, NA Design Build, Pacific Crest (company website, as of Feb 2026)
- Product Hunt page exists at producthunt.com/products/scout-out-2 (search results); specific upvote count and ranking not retrievable (page returned 403 error)
- Pricing page is live with a published $119/month plan, suggesting the product is generally available (company website)
- Hiring status: active (YC page)
- Twitter/X: @NolanRossi100 (YC page) — follower count not retrievable (JavaScript-rendered page)
- LinkedIn company page: not confirmed for the YC company; search results returned unrelated entities named "Scout Out" in India and the Netherlands
- No public revenue figures, user counts, or download metrics found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Scout Out |
|------------|---------|-------------|----------------------------------|
| Handoff AI (YC) | $25M+ total ($5.8M strategic round, 2025) | Revenue not disclosed; 10,000+ MAU, $6B annualized project volume (Handoff blog, June 2025) | Broader platform: estimating + project management + invoicing for remodelers; strategic backing from Nemetschek Group and Masco Corporation |
| Buildxact | $33M total (Series A, 2022) | $10.7M revenue (Getlatka, via search snippet) | Established player with full job management suite for residential builders; larger subscriber base and international presence (Australia + US) |
| Attentive.ai / Beam AI | $48M total ($30.5M Series B, Nov 2025) | Revenue not disclosed; 1,200+ contractor customers (BusinessWire, Nov 2025) | AI-powered automated takeoffs primarily for commercial contractors and field services; expanding into estimating and bidding |
| Togal.AI | $22.65M total (Convertible Note, Aug 2025) | Revenue not disclosed | AI takeoff + collaboration platform for commercial general contractors; plan markup and team workflows |

**Why now:** The January 2025 Palisades and Eaton fires destroyed over 16,000 structures in Los Angeles (CalMatters, Jan 2026 via search snippet), creating a surge in residential rebuild and remodel demand. As of early 2026, more than 12,000 building projects are in various stages of permitting and construction (Daily Breeze, Feb 2026 via search snippet). Local governments are issuing rebuilding permits nearly three times faster than comparable pre-fire rates (CalMatters, Jan 2026 via search snippet). [Inferred]: This acute, localized demand spike creates a concentrated market of contractors who need to bid faster on a high volume of similar residential projects — a strong product-market fit catalyst for AI estimating tools. Separately, advances in multimodal AI and computer vision models in 2024-2025 have made automated plan reading technically feasible at lower cost.

## Founders & Team

**Nolan Rossi** — Founder & CEO (solo founder)
- Triple-majored in Electrical Engineering & Computer Science, Astrophysics, and Business Administration through UC Berkeley's M.E.T. (Management, Entrepreneurship, & Technology) program; graduated in three years (YC company page)
- Previously: Software Development Engineer at Amazon (YC company page)
- Ran a software consultancy that reached $250K in revenue (YC company page)
- Fourth-generation member of a family construction business (YC company page)
- Twitter/X: @NolanRossi100 (YC page link: x.com/NolanRossi100); also @nolantherossi (found via search); follower count not retrievable (JavaScript-rendered page)
- LinkedIn: linkedin.com/in/nolan-rossi — 500+ connections (LinkedIn, via search snippet)
- GitHub: No public account found
- Portfolio: nolanrossi.com

**Co-founder relationship:** N/A — solo founder.

**Founder-market fit:** Rossi combines technical ability (EECS degree from Berkeley, Amazon SDE experience, software consultancy) with direct construction industry knowledge from his fourth-generation family construction background. He has first-hand exposure to the estimating and bidding pain points that contractors face. His prior consulting firm demonstrates the ability to build and sell software products independently. The combination of construction domain knowledge and software engineering capability is directly relevant to building an AI-powered construction estimating tool.

## Key Risks

**Solo founder execution risk:** The company has a team size of 1 (YC page). Building both a computer vision pipeline for plan analysis and a full-stack product (lead generation, CRM, invoicing, proposals) as a solo founder creates capacity constraints. The company is hiring (YC page), but until the team expands, development velocity and customer support capacity are limited.

**Well-funded direct competitor (Handoff AI):** Handoff AI is also a YC-backed company specifically targeting residential remodelers and contractors with AI estimating. It has $25M+ in funding, 10,000+ monthly active users, and strategic backing from Nemetschek Group and Masco Corporation (Handoff blog, June 2025; BusinessWire, May 2025). Handoff has a multi-year head start (founded 2019) and is actively expanding its feature set. Scout Out will need to compete for the same contractor segment against an entrenched, better-resourced rival.

**Brand disambiguation challenge:** Multiple unrelated entities share the "Scout Out" name, including a Dutch scouting organization (LinkedIn), a recruitment firm in India (LinkedIn), and a summer camp (@ScoutOutCamp on Twitter). This creates SEO and brand confusion challenges, particularly for organic discovery.

**Geographic concentration risk:** The current go-to-market is concentrated in Los Angeles, tied to post-fire rebuild demand. This demand is time-limited — the rebuild surge will taper as projects are completed. Expansion beyond LA requires adapting to different permit systems, building code variations, and local pricing databases, as well as developing new customer acquisition channels.

**Dual-product complexity:** The website presents two distinct value propositions — permit-based lead generation and AI-powered estimating/proposals. These are different technical problems (data aggregation/enrichment vs. computer vision/NLP) serving different buyer motivations. Maintaining and advancing both as a solo founder increases scope risk.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.2B residential construction estimating software (Verified Market Reports, 2024, 8.9% CAGR to $2.5B by 2033 via search snippet); $1.5B broader construction estimating software (Grand View Research, 2024, 10.2% CAGR via search snippet) |
| SAM | $99.98M residential remodeling estimating software (Verified Market Research, 2024 via search snippet) |
| Traction | 7 contractor logos on website (company website, Feb 2026); Product Hunt page exists (producthunt.com/products/scout-out-2); pricing page live at $119/mo |
| Revenue Signal | $119/mo Scout Out Pro plan, billed annually (company website pricing page). No public revenue figures found. |
| Founders | Nolan Rossi (CEO): UC Berkeley M.E.T. triple-major, ex-Amazon SDE, $250K-revenue consultancy, fourth-generation construction family |
| Competitors | Handoff AI ($25M+ raised, 10K+ MAU, residential remodeler focus); Buildxact ($33M raised, $10.7M revenue, full job management for residential builders); Attentive.ai/Beam AI ($48M raised, 1,200+ customers, AI takeoffs for commercial); Togal.AI ($22.65M raised, AI takeoff for commercial GCs) |
| Moat Signals | No public data found. Potential data moat from contractor pricing/review feedback loop; workflow lock-in from bundled lead-to-proposal pipeline. |
| Risk Factors | Solo founder capacity, well-funded direct competitor (Handoff AI, $25M+, 10K+ MAU), geographic concentration in LA post-fire rebuild |
| Founder Reach | Nolan Rossi: Twitter @NolanRossi100 (count not retrievable), LinkedIn 500+ connections, GitHub not found |
| Distribution Signals | Product Hunt page exists (details not retrievable); 7 contractor logos on website; LA post-fire rebuild market as initial beachhead |
| Emails | nolan@scoutout.ai (company website) |
