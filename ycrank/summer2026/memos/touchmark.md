# Touchmark

> Prices AI by the value it delivers

| Field | Value |
|-------|-------|
| Website | https://touchmark.ai |
| YC Page | https://www.ycombinator.com/companies/touchmark |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Infrastructure |
| YC Partner | Brad Flora (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** AI vendors bill by tokens/seats while customers value outcomes, creating invoice volatility ("a $500 bill could be $5,000 next month" per AI SaaS pricing analysis, 2026) and weak ROI tie-back that has caused customers to under-use AI products (Leena AI example cited in AI pricing playbook, 2026).
- **Approach:** TypeScript SDK (@touchmark/sdk) records sessions and emits events, runs evals on each AI output (code quality, instruction following, user satisfaction, hallucination rate, reasoning depth, factual accuracy, safety compliance), then converts scores into a per-call price the platform bills against, auto-refunding when outputs fall below baseline (Extruct AI hub on Touchmark; search snippet of company copy, 2026).
- **Differentiation:** Orb, Metronome, Lago, and Solvimon meter tokens/events and apply pre-set rates (Orb provider page; Metronome Sacra profile; Lago blog, 2026); Touchmark instead scores each output's quality and adjusts price post-hoc, with company copy stating per-customer adjustments "average to zero" across the same eval so top-line revenue is preserved (search snippet of company copy, 2026).
- **Business Model:** [Inferred]: Likely revenue-share or per-evaluated-call fee charged to AI platforms that embed the SDK; no public pricing page surfaced via WebFetch on touchmark.ai (site returns minimal content, 2026).
- **TAM/SAM:** No public TAM/SAM data found for quality-adjusted AI billing; adjacent usage-based billing peers include Metronome (acquired by Stripe for $1B, Dec 2025 per Sacra) and Orb (~$44M raised per AIBilling.dev, 2026).
- **GTM / Distribution:** [Inferred]: Developer-led adoption via TypeScript SDK install at AI platforms shipping LLM features, given the SDK-first product surface (Extruct AI hub, 2026); no public customer logos or case studies found.

## Defensibility

- **Moat today:** No defensibility signals found in public sources; only a TypeScript SDK and session-recording surface are described (Extruct AI hub, 2026).
- **Future moat:** [Inferred]: A proprietary eval library and a cross-customer dataset of output-quality distributions could become a data moat if Touchmark accumulates session telemetry across many AI platforms, but no customer count is public so this is unproven.
- **Market structure:** [Inferred]: Incumbents Orb and Metronome bill on metered tokens/events (Orb provider page, 2026; Metronome Sacra profile, 2026) and would face channel/contract conflict adding post-hoc refunds that reduce customer invoices, but this is an inference, not a documented barrier.
- **Commoditization risk:** LLM-as-judge evals are widely available (open-source frameworks and APIs from major model providers) so any billing platform (Orb, Metronome, Lago, Solvimon) could wrap an eval layer; Lago is open-source under AGPLv3 and self-hostable (Lago via HackerNoon, 2026).

## Market & Traction

- **Traction signals:**
  - Y Combinator S26 batch admission (YC company page, 2026)
  - LinkedIn company page exists at linkedin.com/company/touchmark-ai; follower count not retrievable
  - Twitter/X handle @TouchmarkAI listed on YC page; follower count not retrievable in search results
  - No Product Hunt launch found (search of producthunt.com, 2026)
  - No press coverage in named publications found
  - No revenue, user count, or customer logos found
- **Competitors:**
  - Metronome ($128M total raised; acquired by Stripe for $1B Dec 2025; revenue not separately disclosed post-acquisition) — meters tokens/credits with predictive spend alerts; does not adjust price by output quality (Sacra; TechCrunch Jan 2024).
  - Orb (~$44M total raised incl. $25M Series B Sep 2024 led by Mayfield; revenue ~5x YoY per AIBilling.dev) — SQL-defined usage metrics; customers include Vercel, Replit, Pinecone, Perplexity (AIBilling.dev, 2026).
  - Lago ($34M raised from FirstMark; revenue unknown) — open-source AGPLv3 metered billing with OpenAI/Mistral templates (HackerNoon, 2026).
  - Solvimon (€9M/$9.6M seed led by Northzone; revenue unknown) — hybrid subscription + usage + outcome billing for AI/SaaS/fintech (Solvimon seed announcement; B17 News, 2026).
  - Stripe Billing (parent revenue unknown for this product line) — usage-based billing module marketed for AI; now owns Metronome (Stripe Billing page; Sacra Dec 2025).
- **Why now:** [Inferred]: Per Bessemer's 2026 AI pricing playbook and Fungies.io 2026 guide, per-seat SaaS pricing fell from 21% to 15% of SaaS in 12 months and 2026 is the first AI renewal cycle where buyers are demanding ROI tied to outcomes, opening a window for output-quality-based billing.

## Founders & Team

- **Ilia Bolgov (Co-founder):**
  - Background: BSc Mathematics, Imperial College London; ~6 years 9 months in Product at Revolut before founding Touchmark (YC company page; LinkedIn search result snippet, 2026).
  - Twitter/X: No public account found in search results
  - LinkedIn: "Co-Founder @ Touchmark (YC S26)" (linkedin.com/in/ilia-bolgov-8683b0254/)
  - GitHub: No public repos found
- **Roman Yanushevskyi (Co-founder):**
  - Background: Math & CS, National University of Singapore; 2x Quantitative Research intern at Citadel Securities; AI Engineer intern at Lovable; ICPC 2025 competitor (YC company page; LinkedIn search result snippet, 2026).
  - Twitter/X: No public account found in search results
  - LinkedIn: "Co-Founder @ Touchmark (YC S26)" (linkedin.com/in/roman-yanushevskyi/)
  - GitHub: No public repos found
- **Co-founder relationship:** No public data on co-founder history (no shared employer or university across Revolut/Imperial and Citadel/Lovable/NUS in search results).
- **Founder-market fit:** [Inferred]: Bolgov's product tenure at a usage-priced fintech (Revolut) plus Yanushevskyi's quantitative-eval experience at Citadel Securities and AI engineering at Lovable map to building eval-driven billing infrastructure; no advisors, board, or named angels surfaced in public sources.

## Key Risks

- **Eval reliability risk:** Quality-adjusted pricing depends on LLM-as-judge evals being accurate and stable across customers; Bessemer's 2026 AI pricing playbook notes outcome-based pricing has been validated (Leena AI), but no public benchmark of Touchmark's eval accuracy or inter-rater agreement was found, and disputed scores would translate directly into billing disputes.
- **Revenue-neutrality contradicts upside:** Company copy states cross-user price adjustments "average to zero, your top-line revenue is preserved" (search snippet, 2026); this removes the platform's pricing-upside lever, which may limit willingness of high-margin AI vendors to integrate and constrains Touchmark's own take-rate.
- **Incumbent substitution:** Stripe (which acquired Metronome for $1B in Dec 2025 per Sacra) and Orb (Vercel, Replit, Pinecone, Perplexity customers per AIBilling.dev) already sit in the AI billing path and can ship an eval-scoring add-on; switching costs for billing primitives are documented to be high, making greenfield adoption the only entry path.
- **Name collision:** "Touchmark" is shared with Touchmark Living Centers (senior living, multiple US locations; Facebook, ZoomInfo) and Touchmark Studios; SEO and brand search are diluted (search results for "Touchmark Twitter," 2026).
- **No disclosed customers or revenue:** No customers, signed LOIs, ARR, waitlist count, or press coverage surfaced in WebSearch on producthunt.com, TechCrunch, or YC launch posts.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC S26 batch admission (YC company page, 2026); no Product Hunt launch found; no press coverage found; no customer count or revenue found |
| Revenue Signal | No public data found (touchmark.ai landing page contained no pricing tier per WebFetch, 2026) |
| Founders | Ilia Bolgov (Co-founder): ex-Revolut Product (~6y9m), BSc Math Imperial College London. Roman Yanushevskyi (Co-founder): 2x Citadel Securities QR intern, Lovable AI Engineer intern, Math/CS NUS, ICPC 2025. |
| Competitors | Metronome ($128M raised, acquired by Stripe $1B Dec 2025, meters tokens vs. Touchmark's output-quality scoring); Orb (~$44M raised, revenue unknown, SQL-metric usage billing for Vercel/Replit/Pinecone/Perplexity); Lago ($34M raised, revenue unknown, open-source AGPLv3 metered billing); Solvimon ($9.6M seed, revenue unknown, hybrid usage+outcome billing); Stripe Billing (revenue unknown, owns Metronome) |
| Moat Signals | No public data found |
| Risk Factors | Eval reliability and dispute exposure; revenue-neutral pricing limits take-rate; incumbent substitution by Stripe/Metronome and Orb |
| Founder Reach | Ilia Bolgov: Twitter not found, LinkedIn count not retrievable, GitHub not found. Roman Yanushevskyi: Twitter not found, LinkedIn count not retrievable, GitHub not found |
| Distribution Signals | No public data found |
| Emails | No public data found |
