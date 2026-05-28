# Imperfect

> AI coach for athletes with real lives and epic goals

| Field | Value |
|-------|-------|
| Website | https://imperfect.co |
| YC Page | https://www.ycombinator.com/companies/imperfect |
| Batch | Spring 2026 |
| Industry | Consumer / Consumer |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Digital Health, Health & Wellness, AI, AI Assistant |
| YC Partner | Garry Tan |
| Emails | No public data found |

Note: Direct fetch of imperfect.co returned HTTP 403 at time of research; product/pricing details below sourced from YC page and search snippets.

## The Idea

- **Problem:** Amateur endurance athletes (runners, triathletes, cyclists, climbers) training for races while balancing work and life lack training plans that adapt to actual recovery, missed sessions, and biometric response, and currently rely on static plans from TrainingPeaks, generic apps, or human coaches (YC page).
- **Approach:** Pulls wearable, training-app and health data and uses AI to recalibrate training, recovery, and nutrition recommendations daily based on how the athlete's body is responding (YC page).
- **Differentiation:** Versus Runna (running-only, now Strava-owned) and TrainingPeaks (no AI-assisted plan generation per Coachbox review, May 2026), Imperfect spans multiple endurance disciplines and uses daily biometric-driven adaptation; versus Humango/TriDot, [Inferred]: differentiation is breadth of wearable integrations leveraging founder's Garth Garmin library (GitHub @matin, 813 stars).
- **Business Model:** No public data found on Imperfect's pricing; [Inferred]: consumer subscription based on category norms (TriDot pricing page, MOTTIV pricing page).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent endurance-coaching SaaS comp TrainingPeaks reports $17.2M annual revenue (Growjo, 2026).
- **GTM / Distribution:** [Inferred]: Direct-to-consumer via app stores and YC launch channels — YC page lists active beta athletes including a professional ultramarathoner (YC page), suggesting athlete-influencer seeding.

## Defensibility

- **Moat today:** Founder authored the open-source Garth Garmin Connect Python library (813 stars, GitHub @matin), providing first-mover technical depth on wearable-data integration, though library is now marked DEPRECATED (GitHub readme).
- **Future moat:** [Inferred]: Proprietary longitudinal training-response dataset could compound personalization quality; unproven now because the app launched in Spring 2026 batch with a small beta cohort (YC page).
- **Market structure:** No structural barrier identified at this stage; Strava's April 2025 acquisition of Runna (Front Office Sports) shows incumbents can buy rather than build.
- **Commoditization risk:** [Inferred]: Wearable-data + LLM coaching is buildable by Strava, Garmin (Garmin Connect+ Active Intelligence per Triathlete review), and well-funded competitors; Humango already markets an "AI coach Hugo" with similar multi-sport scope (humango.ai).

## Market & Traction

- **Traction signals:**
  - Active beta athletes named on YC launch post: one first-time triathlete, one downhill mountain biker, one professional ultramarathoner who placed 2nd in a 50-mile trail race in Puerto Vallarta (YC page / launch post).
  - Founder open-source Garmin library: 813 GitHub stars on garth (GitHub @matin, retrieved May 2026).
  - DZone article "Building a Modern Training Assistant With Claude and Garmin" referencing founder's work (DZone, via search snippet).
  - No public data found on app downloads, revenue, Product Hunt rank, Discord, or social follower counts; Twitter handle @matin exists but follower count not retrievable.
- **Competitors:**
  - Runna (£8M / ~$10M total raised pre-acquisition, revenue unknown; acquired by Strava April 2025 — Athletech News, Front Office Sports): running-only, now bundled inside Strava distribution.
  - TrainingPeaks ($17.2M annual revenue, 123 employees — Growjo 2026; funding unknown): incumbent for coach-prescribed structured training, lacks AI plan generation (Coachbox review, 2026).
  - TriDot ($6.2M annual revenue 2026, 23-53 employees — Growjo/ZoomInfo; funding unknown): triathlon-specific, "Augmented Coaching" branded AI, 20 years of training data (tridot.com).
  - Humango ($220K total raised per Crunchbase; revenue unknown): multi-sport AI coach "Hugo" with adaptive plans (humango.ai).
  - Strava (parent of Runna post-acquisition; revenue unknown public): distribution + social layer, now adds Runna's AI plans.
- **Why now:** [Inferred]: LLM capability crossing the threshold for adaptive coaching plus broad wearable-data API maturity in the last 12-24 months — evidenced by Strava's $X (undisclosed) acquisition of Runna in April 2025 (Front Office Sports) and Garmin's launch of Active Intelligence (Triathlete review).

## Founders & Team

- **Matin Tamizi (Founder / CEO):**
  - Background: B.S. Computer Software Engineering, University of Maryland College Park (Crunchbase); co-founder/CEO of Balanced (YC + a16z-backed payments, processed $500M+ card volume in 2014, wound down with transition deal to Stripe — TechCrunch, Mar 2015); founder/CEO of Cuenca, Mexican neobank that raised $2.2M from Kaszek and a16z (2018) and a $7.4M Series A led by Stripe (Contxto); authored open-source Garth Garmin Connect Python library (GitHub).
  - Twitter/X: @matin (X.com profile confirmed; follower count not retrievable).
  - LinkedIn: "Imperfect" (linkedin.com/in/mtamizi).
  - GitHub: @matin — top repo `garth` ([DEPRECATED] Garmin SSO auth + Connect Python client), 813 stars.
- **Co-founder relationship:** No public data on additional co-founders — YC page lists Matin Tamizi as sole founder, though company team size is 5 (YC page).
- **Founder-market fit:** Tamizi built the widely-used open-source Garmin Connect Python client (Garth, 813 stars) and has been publicly developing AI + Garmin coaching prototypes (DZone article "AI-Powered Triathlon Coaching with Claude and Garmin"), pairing technical wearable-data expertise with two prior venture-backed CEO tours (Balanced, Cuenca — Crunchbase).

## Key Risks

- **Incumbent absorption of category:** Strava acquired Runna in April 2025 (Front Office Sports) and Garmin shipped Active Intelligence (Triathlete review, 2026), meaning the two largest platforms in athlete data already control distribution and are layering AI coaching natively; no public mitigation found.
- **Wearable-API dependency:** The product hinges on pulling data from Garmin/Strava/Apple Health; founder's own Garth library is marked DEPRECATED after Garmin changed auth flows (GitHub readme), demonstrating concrete platform-risk precedent.
- **Name disambiguation / SEO collision:** "Imperfect" overlaps with Imperfect Foods (consumer grocery) and is a high-frequency English word, complicating organic discovery; multiple unrelated "Matin" Twitter accounts surfaced in search (search results) — could raise customer-acquisition cost.
- **Solo-founder execution risk:** YC page lists Matin Tamizi as the only named founder against a 5-person team (YC page), concentrating product, fundraising, and technical leadership.
- **Unproven willingness-to-pay vs. free incumbents:** No public pricing or revenue disclosed; competitor Strava+Runna and Garmin Connect+ offer overlapping AI coaching either bundled or at low marginal cost (Front Office Sports; Triathlete review).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | Beta cohort includes professional ultramarathoner 2nd-place finisher at 50-mile Puerto Vallarta race, first-time triathlete, downhill MTB racer (YC launch post, 2026); 813 stars on founder's Garth library (GitHub, May 2026) |
| Revenue Signal | No public data found |
| Founders | Matin Tamizi (Founder/CEO): UMD CS Eng; ex-CEO Balanced (YC, a16z, $500M+ card volume 2014); ex-CEO Cuenca ($7.4M Series A led by Stripe); author of Garth (813★) |
| Competitors | Runna (~$10M raised pre-acquisition, revenue unknown, acquired by Strava Apr 2025 — running-only); TrainingPeaks ($17.2M revenue, no AI plan generation); TriDot ($6.2M revenue 2026, triathlon-only); Humango ($220K raised, multi-sport AI but tiny); Strava (parent of Runna, distribution scale) |
| Moat Signals | Founder authored open-source Garth Garmin library, 813 stars (GitHub); library status DEPRECATED |
| Risk Factors | Strava/Garmin absorbing AI coaching natively, wearable-API platform dependency, solo named founder |
| Founder Reach | Matin Tamizi: Twitter @matin (count not retrievable), LinkedIn /in/mtamizi (count not retrievable), GitHub @matin garth 813★ |
| Distribution Signals | YC Spring 2026 launch post (YC page); DZone technical article on Claude + Garmin coaching (DZone) |
| Emails | No public data found |

Sources:
- [Imperfect — YC company page](https://www.ycombinator.com/companies/imperfect)
- [Matin Tamizi — Crunchbase](https://www.crunchbase.com/person/matin-tamizi)
- [Balanced shutdown / Stripe transition — TechCrunch](https://techcrunch.com/2015/03/13/balanced-is-closing-its-marketplace-payment-platform-in-90-days-strikes-transition-deal-with-rival-stripe/)
- [Cuenca $7.4M raise — Contxto](https://www.contxto.com/en/mexico/scoop-cuenca-fintech-financial-inclusion-investment-us7-4-million/)
- [garth GitHub repo](https://github.com/matin/garth)
- [Garth MCP Server — PulseMCP](https://www.pulsemcp.com/servers/matin-garth)
- [Building a Modern Training Assistant With Claude and Garmin — DZone](https://dzone.com/articles/ai-powered-triathlon-coaching-claude-garmin)
- [Strava acquires Runna — Front Office Sports](https://frontofficesports.com/strava-runna-fitness-app-purchase-deal/)
- [Runna $6.3M raise — Athletech News](https://athletechnews.com/runna-raises-6-3m-for-running-coach-app/)
- [TrainingPeaks revenue — Growjo](https://growjo.com/company/TrainingPeaks)
- [TrainingPeaks Review 2026 — Coachbox](https://coachbox.app/en/compare/trainingpeaks-review/)
- [AI Triathlon Apps Hands-On — Triathlete](https://www.triathlete.com/gear/tech-wearables/ai-triathlon-training-apps/)
- [Humango](https://humango.ai/)
- [TriDot Pricing](https://www.tridot.com/pricing)
- [Matin Tamizi LinkedIn](https://www.linkedin.com/in/mtamizi/)
- [matin on X](https://x.com/matin?lang=en-gb)
