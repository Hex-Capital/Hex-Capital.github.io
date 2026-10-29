# Boxes.dev

> A better place to run your coding agents.

| Field | Value |
|-------|-------|
| Website | https://boxes.dev |
| YC Page | https://www.ycombinator.com/companies/boxesdev |
| Batch | Fall 2026 ([YC](https://www.ycombinator.com/companies/boxesdev)) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, B2B, AI |
| YC Partner | Andrew Miklas ([YC](https://www.ycombinator.com/companies/boxesdev)) |
| Emails | hi@boxes.dev, security@boxes.dev ([Security](https://boxes.dev/security)); privacy@boxes.dev ([Privacy](https://boxes.dev/privacy)); founders@boxes.dev ([Terms](https://boxes.dev/terms)); play@nickdrewco.com ([Google Play](https://play.google.com/store/apps/details?id=dev.boxes)) |

## The Idea

- **Problem:** Developers running parallel coding agents locally encounter competing processes and shared environment state, cumbersome worktrees, and laptops that must remain awake ([Boxes.dev About, accessed Oct 2026](https://boxes.dev/about)).
- **Approach:** An agent prepares a cloud Template box from the developer’s environment, snapshots it, and creates isolated Linux devboxes where coding agents edit files, run commands, and test applications independently ([Boxes.dev documentation](https://boxes.dev/help/how-boxes-works)).
- **Differentiation:** Boxes.dev runs native Claude Code and Codex rather than Devin’s proprietary agent, preserves environments beyond Tembo’s session lifecycle, and emphasizes copying prepared environments rather than Conductor’s script-built cloud workspaces ([Devin comparison](https://boxes.dev/compare/devin), [Tembo comparison](https://boxes.dev/compare/tembo), [Conductor comparison](https://boxes.dev/compare/conductor); company-authored comparisons).
- **Business Model:** The homepage advertises a free trial, Starter at $19/user/month with 50 compute hours, Pro at $99 with 250 hours, Max at $249 with 600 hours, $0.60/hour overages, and custom Teams pricing, with model subscriptions billed separately ([Boxes.dev pricing, accessed Oct 27, 2026](https://boxes.dev/#pricing)).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Distribution includes self-service signup, a Product Hunt launch, mobile applications, and a YC deal redeemed using the customer’s YC email ([Product Hunt](https://www.producthunt.com/products/boxes-dev), [Boxes.dev billing documentation](https://boxes.dev/help/plans-and-box-hours)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: Accumulated environment configuration, credentials, and thread history could create migration costs, but public evidence does not establish retention or switching behavior ([Boxes.dev data documentation](https://boxes.dev/help/data-and-credentials)).
- **Market structure:** [Inferred]: No structural barrier identified at this stage, given Conductor already offers cloud microVMs, native coding agents, customer subscriptions, and mobile access ([Conductor, accessed Oct 2026](https://www.conductor.build/)).
- **Commoditization risk:** Conductor already implements overlapping execution and orchestration features, while Boxes.dev identifies E2B as its sandbox provider rather than presenting the underlying runtime as proprietary infrastructure ([Conductor](https://www.conductor.build/), [Boxes.dev’s Product Hunt technology listing](https://www.producthunt.com/products/boxes-dev/built-with)).

## Market & Traction

- **Traction signals:**
  - Product Hunt: #13 daily rank, 113 launch points, and 165 followers, observed Oct 27, 2026 ([Product Hunt](https://www.producthunt.com/products/boxes-dev)).
  - Android companion application: 10+ downloads, observed Oct 27, 2026 ([Google Play](https://play.google.com/store/apps/details?id=dev.boxes)).
  - iOS application: 5.0/5 from 1 rating, observed Oct 27, 2026 ([Apple App Store](https://apps.apple.com/us/app/boxes-dev/id6758927946)).
  - YC lists no active job postings, observed Oct 27, 2026 ([YC Jobs](https://www.ycombinator.com/companies/boxesdev/jobs)).
- **Competitors:**
  - **Conductor ($24M raised, revenue unknown):** Its $22M Series A was announced March 30, 2026, from Spark and Matrix; it supports additional agent families and multiplayer cloud workspaces, compared with Boxes.dev’s Claude Code/Codex focus ([funding total](https://www.conductor.build/join-us), [round announcement](https://www.conductor.build/blog/series-a), [product](https://www.conductor.build/)).
  - **Tembo ($20M raised, revenue unknown):** Its disclosed funding includes a $14M Series A led by GreatPoint Ventures in July 2024; it emphasizes event-triggered, multi-agent workflows and session sandboxes rather than lasting devboxes ([Tembo About](https://www.tembo.io/about), [round date](https://www.thesaasnews.com/news/tembo-secures-14-million-in-series-a), [company-authored comparison](https://boxes.dev/compare/tembo)).
  - **Cognition/Devin (over $2B raised in its latest round, lifetime total unverified; almost $900M annualized revenue):** Its September 8, 2026 Series E was led by Andreessen Horowitz and Accel; Devin supplies Cognition’s own agent rather than hosting customers’ native Claude Code/Codex harnesses ([Cognition announcement](https://cognition.com/blog/series-e), [Boxes.dev comparison](https://boxes.dev/compare/devin)).
- **Why now:** [Inferred]: The founders’ reported shift to almost exclusive Claude Code/Codex use over the preceding year exposed persistent-compute and parallel-environment requirements that motivated the product ([Boxes.dev About, accessed Oct 2026](https://boxes.dev/about)).

## Founders & Team

- **Nick Bushak (Co-founder / CEO):**
  - Background: MIT alumnus, previously Gem co-founder/CTO and Facebook engineer and engineering manager ([YC founder profile](https://www.ycombinator.com/founders/nick-bushak), [Boxes.dev About](https://boxes.dev/about)).
  - Twitter/X: @nbushak; count not retrievable from X ([YC profile](https://www.ycombinator.com/founders/nick-bushak)).
  - LinkedIn: Headline not retrievable; current employer listed as Boxes.dev, with approximately 4K followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/nbushak)).
  - GitHub: @nbushak; displayed popular repository react-datagrid, a fork, has 1 star ([GitHub, accessed Oct 2026](https://github.com/nbushak)).
- **Drew Regitsky (Co-founder / CTO):**
  - Background: MIT class of 2010 and first engineer/employee at Gem, with documented experience building its product and analyzing recruiting data ([YC profile](https://www.ycombinator.com/founders/drew-regitsky), [Gem research guide](https://lp.gem.com/rs/972-IVV-330/images/2019-Definitive-Guide-Best-Practices-Sourcing.pdf)).
  - Twitter/X: @drewregitsky; count not retrievable from X ([YC profile](https://www.ycombinator.com/founders/drew-regitsky)).
  - LinkedIn: Headline not retrievable; current employer listed as Boxes.dev, with approximately 1K followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/drewregitsky)).
  - GitHub: @dregitsky; pinned n1-gmail-theme repository has 2 stars ([GitHub, accessed Oct 2026](https://github.com/dregitsky)).
- **Co-founder relationship:** The founders met at MIT and subsequently worked together at Gem as co-founder/CTO and first engineer ([Boxes.dev About](https://boxes.dev/about)).
- **Founder-market fit:** Their documented experience includes building Gem together and using the coding agents their product hosts, while YC lists Andrew Miklas as the assigned partner ([Boxes.dev About](https://boxes.dev/about), [YC](https://www.ycombinator.com/companies/boxesdev)).

## Key Risks

- **Credential exposure:** Documentation states that code executing on a devbox can read available GitHub credentials, potentially extending beyond selected repositories; the company advises narrowly scoped development credentials and avoiding production access ([credential documentation](https://boxes.dev/help/data-and-credentials), [security guidance](https://boxes.dev/security)).
- **Competitive substitution:** [Inferred]: Conductor’s cloud execution, native harnesses, subscription support, and mobile access reduce the exclusivity of Boxes.dev’s positioning ([Conductor](https://www.conductor.build/)).
- **Infrastructure and agent dependencies:** [Inferred]: Dependence on E2B and customer-authorized external coding agents exposes service availability to supplier changes; API-key access provides an alternative authentication path ([Product Hunt technology listing](https://www.producthunt.com/products/boxes-dev/built-with), [setup documentation](https://boxes.dev/help/choose-project-setup)).
- **Pricing inconsistency:** The homepage advertises 20 trial hours, 50 Starter hours, and $0.60/hour overages, while help documentation lists 10 trial hours, 40 Starter hours, and $0.75/hour Starter overages, leaving public allowance information inconsistent ([homepage](https://boxes.dev/), [billing help](https://boxes.dev/help/plans-and-box-hours); accessed Oct 27, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Android 10+ downloads ([Google Play](https://play.google.com/store/apps/details?id=dev.boxes), Oct 2026); iOS 5.0/5 from 1 rating ([Apple](https://apps.apple.com/us/app/boxes-dev/id6758927946), Oct 2026) |
| Revenue Signal | Starter $19, Pro $99, Max $249 per user/month; homepage overages $0.60/hour; realized revenue: No public data found ([Boxes.dev pricing](https://boxes.dev/#pricing), Oct 2026) |
| Founders | Nick Bushak, CEO: MIT, Gem co-founder/CTO, Facebook; Drew Regitsky, CTO: MIT, Gem first engineer ([About](https://boxes.dev/about), [YC](https://www.ycombinator.com/companies/boxesdev)) |
| Competitors | Conductor: $24M raised, revenue unknown, additional agents/multiplayer ([company](https://www.conductor.build/join-us)); Tembo: $20M raised, revenue unknown, session workflows ([company](https://www.tembo.io/about)); Cognition: latest round over $2B, almost $900M annualized revenue, proprietary Devin agent ([announcement](https://cognition.com/blog/series-e)) |
| Moat Signals | No public data found |
| Risk Factors | Credential scope ([documentation](https://boxes.dev/help/data-and-credentials)), overlapping competitors ([Conductor](https://www.conductor.build/)), infrastructure dependency ([Product Hunt](https://www.producthunt.com/products/boxes-dev/built-with)) |
| Founder Reach | Nick: LinkedIn approximately 4K; Drew: approximately 1K ([Nick](https://www.linkedin.com/in/nbushak), [Drew](https://www.linkedin.com/in/drewregitsky), Oct 2026, via search snippets); GitHub displayed personal repositories: 1 and 2 stars respectively ([Nick](https://github.com/nbushak), [Drew](https://github.com/dregitsky), Oct 2026) |
| Distribution Signals | Product Hunt #13 daily, 113 points, 165 followers ([Product Hunt](https://www.producthunt.com/products/boxes-dev), Oct 2026) |
| Emails | hi@boxes.dev, security@boxes.dev ([Security](https://boxes.dev/security)); privacy@boxes.dev ([Privacy](https://boxes.dev/privacy)); founders@boxes.dev ([Terms](https://boxes.dev/terms)); play@nickdrewco.com ([Google Play](https://play.google.com/store/apps/details?id=dev.boxes)) |
