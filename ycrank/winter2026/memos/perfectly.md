# Perfectly

> The AI-native Recruiting Operating System

| Field | Value |
|-------|-------|
| Website | https://www.perfectly.so/ |
| YC Page | https://www.ycombinator.com/companies/perfectly |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Recruiting |
| YC Partner | Tyler Bosmeny |
| Emails | No public data found |

## The Idea

**Problem:** Recruiting agencies operate as intermediaries between hiring managers and candidates, with information lost at every handoff — intake to sourcer, sourcer to candidate, candidate back to hiring manager. This results in slow pipelines, low-quality candidate matching, and high cost (agencies typically charge 20-25% of first-year salary). The customer segment is startups and growth-stage companies hiring technical talent. Today they use a mix of internal recruiters, external agencies (e.g., recruiting firms), and sourcing tools like Juicebox and Paraform.

**Approach:** Perfectly conducts a deep intake process that captures preferences beyond the job description — team dynamics, growth expectations, and interview style. Its AI then sources and personalizes outreach to thousands of candidates matched on those learned preferences, not keyword matching. Candidates complete a reusable AI screen evaluating experience, reasoning, and role alignment. Matched candidates are delivered directly to a hiring manager portal or via Slack integration with calendar scheduling for same-day interview booking.

**Differentiation:** Traditional recruiting agencies rely on human recruiters manually matching candidates, which is slow and lossy. Sourcing tools like Juicebox (PeopleGPT) provide AI-powered candidate search but leave outreach and screening to the user. Paraform connects startups with freelance recruiters but still relies on human judgment. Perfectly claims to be end-to-end — from intake through sourcing, outreach, screening, and delivery — with no human recruiter in the loop. One early customer reportedly "moved off Paraform and canceled our Juicebox subscription" after two weeks (Fondo launch post, Jan 2026).

**Business Model:** Success-based pricing — payment only upon role placement (Fondo launch post, Jan 2026). Launch offer: 50% discount off standard agency rates for first role, or exclusive YC Launch pricing (YC company page). No public pricing tiers or specific fee percentages found. [Inferred]: The commission-based model likely charges a percentage of first-year salary, consistent with recruiting agency norms, but at a lower rate than traditional agencies given their "undercut by 50%" positioning.

**TAM/SAM:** The US staffing and recruiting industry was valued at approximately $189-199 billion in 2025 (Staffing Industry Analysts via search snippet; Workwell Global via search snippet). The AI recruitment market specifically was estimated at $660-708 million in 2025, projected to grow at ~6.9% CAGR through 2035 (Market Research Future via search snippet; Research Nester via search snippet). Global staffing spending reached an estimated $626 billion in 2024 (Staffing Industry Analysts via search snippet). [Inferred]: Perfectly's SAM is the subset of contingency-based technical recruiting for startups and growth companies, a fraction of the broader staffing market.

**GTM / Distribution:** The YC Launch post on LinkedIn (YC LinkedIn, Jan 2026) and Fondo blog post served as initial distribution channels. The product offers Slack integration for pipeline delivery and Calendly-based demo booking (calendly.com/victor-perfectly/30min, per Fondo launch post). [Inferred]: Initial GTM is likely YC network-driven, leveraging batch connections and word-of-mouth among startups, with a land-and-expand model as satisfied hiring managers move to new companies.

## Defensibility

Perfectly's potential moat lies in compounding data: as more hiring preferences and candidate AI screen results accumulate, the matching algorithm improves and candidate screens become reusable across jobs. Each completed hire feeds back hiring manager preferences and interview outcomes, creating a data flywheel that could improve match quality over time. However, at this stage, the data corpus is nascent.

**Market structure:** Traditional recruiting agencies face a structural barrier to replicating this approach: their business model depends on human recruiter labor billed at high margins (20-25% of salary). Automating the recruiter out of the loop would cannibalize their own revenue per placement and displace their workforce. Sourcing tools like Juicebox and Paraform would need to expand into end-to-end screening and delivery — a different product surface area from search/matching.

**Commoditization risk:** The core technical components (LLM-based candidate matching, automated outreach, AI screening) are accessible to well-funded competitors. Juicebox ($36M total funding) and Paraform ($25M total funding) could expand into adjacent workflow steps. New entrants with LLM access could build similar pipelines. The barrier is in the integration of the full workflow (intake → source → outreach → screen → deliver) and in accumulated preference/outcome data, not in any single technical component.

## Market & Traction

**Traction signals:**
- YC Winter 2026 batch (YC company page)
- Founded 2025 (YC company page)
- Claims "candidates pass interviews 2x more often, and with 10x the volume" vs. traditional agencies (YC company page)
- One customer reportedly canceled Paraform and Juicebox subscriptions within two weeks (Fondo launch post, Jan 2026)
- Company X/Twitter handle: @hireperfectly (Fondo launch post) — follower count not retrievable
- Company LinkedIn: linkedin.com/company/hireperfectly/ (Fondo launch post) — follower count not retrievable
- YC Launch LinkedIn post received 47 comments (LinkedIn, via search snippet)
- No Product Hunt launch found
- No app store or Chrome extension presence found
- No Discord/Slack community found
- HireTOP published a feature article on the company (HireTOP blog, undated)

**Competitive landscape:**

1. **Juicebox (PeopleGPT)** — $36M total funding ($30M Series A led by Sequoia Capital, Sep 2025); $10M ARR with 2,500+ customers (Juicebox blog via search snippet). Key differentiator vs. Perfectly: Juicebox is an AI-powered candidate search/sourcing tool used by recruiters, not an end-to-end agency replacement. Users still handle outreach and screening themselves.

2. **Paraform** — $25M total funding ($20M Series A led by Felicis, Jun 2025); 40x revenue growth since 2024 seed round (BusinessWire via search snippet). Key differentiator vs. Perfectly: Paraform connects companies with a marketplace of freelance recruiters empowered by AI tools — a human-in-the-loop model vs. Perfectly's fully automated approach.

3. **Perfect (not "Perfectly")** — $23M seed (Hanaco Ventures, Feb 2025) (TechCrunch, Feb 2025); Tel Aviv-based. Key differentiator: Built proprietary AI models from scratch (no third-party LLMs), focused on recruiter productivity enhancement rather than agency replacement. Brand name overlap creates disambiguation challenge.

4. **Dover** — $23.1M total funding (YC S19); Series A Jul 2021 (TechCrunch via search snippet). Key differentiator vs. Perfectly: Dover provides an all-in-one recruiting orchestration platform (ATS, sourcing, scheduling) for startup hiring teams to manage internally, rather than acting as an external agency.

5. **Moonhub** — Raised $10M seed (Khosla Ventures, GV); acquired by Salesforce in Jun 2025 (TechCrunch, Jun 2025). Key differentiator: Moonhub was an AI recruiting agent platform; its acquisition by Salesforce validates the category but removes it as an independent competitor.

**Why now:** [Inferred]: The enabling change is the step-function improvement in LLM capabilities (GPT-4 class models, 2023-2025) that made it feasible to conduct nuanced candidate screening conversations and personalized outreach at scale — tasks that previously required human judgment. Simultaneously, the recruiting agency market remained structurally unchanged, with high fees and slow turnaround. The YC W26 batch timing aligns with LLMs reaching sufficient quality for professional-grade recruiting conversations.

## Founders & Team

**Victor Luo** — Co-founder
- BS Computer Science, University of Virginia (RocketReach via search snippet)
- Former ML Scientist at TikTok, working on recommendation systems (YC company page; RocketReach via search snippet)
- Prior experience at Amazon, Synthminds.AI, UVA Engineering Link Lab (RocketReach via search snippet)
- Described as "2x founder" (YC company page tagline)
- Twitter/X: No public account confirmed for this Victor Luo (note: @victorocks belongs to a different Victor Luo who worked at NASA/JPL)
- LinkedIn: linkedin.com/in/victor-luo (LinkedIn)
- GitHub: No public repos found

**Zhuang (Gary) Luo** — Co-founder
- Former ML Engineer at Meta and TikTok (YC company page; LinkedIn search results via search snippet)
- Building AI-native recruiting platform (YC company page tagline)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/zhuang-luo (LinkedIn)
- GitHub: No public repos found

**Huimin Xie** — Co-founder
- Former Senior MLE at TikTok (YC company page tagline)
- Described as "Builder" focused on "the future of human careers" (YC company page)
- Google Scholar profile exists, suggesting academic publication history (Google Scholar via search snippet)
- Twitter/X: No public account found
- LinkedIn: Not definitively identified among multiple profiles with this name
- GitHub: No public repos found

**Co-founder relationship:** All three founders worked at TikTok, with Victor Luo and Gary Luo both in ML roles there. This shared employer indicates prior professional acquaintance. Victor Luo and Zhuang (Gary) Luo share the surname Luo but no public data confirms a family relationship.

**Founder-market fit:** All three founders were ML scientists/engineers at TikTok, where they built large-scale recommendation systems — the same core technology (matching entities based on preference signals) that underpins candidate-job matching. Victor Luo's YC page tagline notes he "sat through 800+ agency-sourced interviews" at TikTok (Fondo launch post, Jan 2026), giving the team firsthand experience with the pain point from the hiring manager side.

## Key Risks

**Brand name collision with Perfect ($23M seed):** A Tel Aviv-based company called "Perfect" raised $23M in Feb 2025 for AI recruiting (TechCrunch, Feb 2025). The near-identical names in the same market segment create SEO competition, customer confusion, and potential trademark disputes. Mitigation: Perfectly uses the domain perfectly.so and the handle @hireperfectly.

**Incumbent expansion into end-to-end workflows:** Juicebox ($36M, $10M ARR) and Paraform ($25M, 40x revenue growth) are well-capitalized and could expand their existing sourcing/marketplace products into screening and delivery workflows, directly replicating Perfectly's value proposition. Salesforce's acquisition of Moonhub signals enterprise interest in owning this workflow natively.

**AI screening acceptance by candidates:** Perfectly's model requires candidates to complete an AI-conducted screen. Candidate willingness to engage with AI interviewers — especially passive candidates who are not actively job-seeking — is unproven at scale. Negative candidate experiences could damage employer brand for Perfectly's customers.

**Regulatory risk around AI hiring decisions:** The EU AI Act classifies AI systems used in recruitment as high-risk, requiring transparency and human oversight. New York City's Local Law 144 mandates bias audits for automated employment decision tools. As Perfectly scales, compliance with evolving AI hiring regulations could impose operational constraints and costs.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | US staffing/recruiting industry ~$189-199B in 2025 (Staffing Industry Analysts via search snippet); AI recruitment market ~$660-708M in 2025, ~6.9% CAGR (Market Research Future via search snippet) |
| SAM | No public data found |
| Traction | YC W26 batch; at least one customer displaced Paraform and Juicebox (Fondo launch post, Jan 2026); 47 comments on YC Launch LinkedIn post |
| Revenue Signal | Success-based pricing, payment upon placement; 50% launch discount off agency rates (Fondo launch post, Jan 2026). No public revenue figures. |
| Founders | Victor Luo: 2x founder, ex-ML Scientist TikTok, BS CS UVA. Zhuang (Gary) Luo: ex-MLE Meta & TikTok. Huimin Xie: ex-Senior MLE TikTok. |
| Competitors | Juicebox ($36M raised, $10M ARR, AI sourcing tool not end-to-end), Paraform ($25M raised, 40x rev growth, human recruiter marketplace), Perfect ($23M raised, revenue unknown, proprietary AI for recruiter productivity), Dover ($23.1M raised, revenue unknown, recruiting orchestration platform) |
| Moat Signals | Compounding preference + screening data across jobs; reusable candidate AI screens; end-to-end workflow integration |
| Risk Factors | Brand collision with Perfect ($23M), incumbent expansion (Juicebox/Paraform), AI screening candidate acceptance, AI hiring regulation |
| Founder Reach | Victor Luo: LinkedIn linkedin.com/in/victor-luo, Twitter not confirmed. Gary Luo: LinkedIn linkedin.com/in/zhuang-luo, Twitter not found. Huimin Xie: LinkedIn not confirmed, Twitter not found. |
| Distribution Signals | YC Launch LinkedIn post (47 comments); Fondo blog feature; HireTOP blog feature. No Product Hunt launch found. |
| Emails | No public data found |
