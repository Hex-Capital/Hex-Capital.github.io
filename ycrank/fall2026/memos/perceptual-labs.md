# Perceptual Labs

> Building intelligence that can understand and rewrite itself

| Field | Value |
|-------|-------|
| Website | https://www.perceptuallabs.com/ |
| YC Page | https://www.ycombinator.com/companies/perceptual-labs |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/perceptual-labs)) |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | B2B, AI |
| YC Partner | David Lieb ([Y Combinator](https://www.ycombinator.com/companies/perceptual-labs)) |
| Emails | kevin@bryel.ai (Kevin Miao, [MuSP-Bench author contact, Nov 2026](https://arxiv.org/pdf/2608.28212v3)), frankie@bryel.ai (Frankie Li, [Launch YC training inquiries, Oct 2026](https://www.ycombinator.com/launches/V2o-bryel-building-your-in-house-frontier-ai-lab)) |

## The Idea

- **Problem:** Perceptual Labs targets AI labs and enterprises that need to diagnose or change specific model behaviors and currently rely on gradient-based post-training, which the company describes as slow, costly, and imprecise ([Perceptual Labs website](https://www.bryel.ai/)).
- **Approach:** The company proposes mapping outputs to the neurons and circuits that produced them, then using natural-language instructions to edit the corresponding weights and record the changes for audit ([Perceptual Labs website](https://www.bryel.ai/)).
- **Differentiation:** Perceptual proposes models that can edit their own weights, while Goodfire offers tools for engineers to debug and shape models, Guide Labs exposes concept-level controls in its Steerling model, and Transluce’s Docent analyzes agent behavior ([Perceptual Labs](https://www.bryel.ai/), [Goodfire](https://www.goodfire.com/language), [Guide Labs](https://www.guidelabs.ai/post/meet-clarity/), [Transluce](https://transluce.org/)).
- **Business Model:** No public data found.
- **TAM/SAM:** Meticulous Research estimates the broader model interpretability tooling market at $100M–$200M in 2026 with 45% projected CAGR through 2033, while a weight-editing-specific SAM is undisclosed ([Meticulous Research, 2026](https://www.meticulousresearch.com/meticulous-next/model-interpretability-tooling-outlook-2026-2033)).
- **GTM / Distribution:** Kevin Miao’s November 17 launch directs prospects to an email waitlist also available at `www.bryel.ai` (Website not accessible at time of research at the YC-listed address) ([Miao’s launch announcement, Nov 2026](https://xitter.gq/KJHMiao/status/2122723436753801521), [Perceptual Labs waitlist](https://www.bryel.ai/)).

## Defensibility

- **Moat today:** No defensibility signals found in public sources.
- **Future moat:** [Inferred]: A library of validated edits and regression tests could become harder to reproduce as customers use the software across architectures, while the public waitlist and capabilities page provide no deployment evidence for such a library ([Perceptual Labs website](https://www.bryel.ai/)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Goodfire has published methods for mapping and editing internal representations, and MIT CSAIL demonstrated direct weight edits on a small language model, giving teams with weight access public starting points for overlapping capabilities ([Goodfire research](https://www.goodfire.com/), [MIT CSAIL, Nov 2026](https://rikiyat.github.io/blog/weight-space-programming/)).

## Market & Traction

- **Traction signals:**
  - **Current product:** Weight-editing offering announced November 17, 2026, with an early-access waitlist ([Kevin Miao launch announcement](https://xitter.gq/KJHMiao/status/2122723436753801521), [Perceptual Labs website](https://www.bryel.ai/)).
  - **Company reach:** 317 followers on X at `@perceptual_labs` ([X profile mirror, Nov 17, 2026](https://xitter.gq/perceptual_labs)).
  - **Hiring:** 0 jobs posted on YC’s platform ([YC Jobs, Nov 2026](https://www.ycombinator.com/companies/perceptual-labs/jobs)).
  - **Prior offering — Bryel Foundry:** Launched October 7, 2026, as a custom model training service with software handoff, and the founders reported training work for Apple, Framer, and unnamed Fortune 500 companies ([Miao’s Bryel announcement, Oct 2026](https://xitter.gq/KJHMiao/status/2107864848319312154), [Launch YC](https://www.ycombinator.com/launches/V2o-bryel-building-your-in-house-frontier-ai-lab)).
  - **Prior offering — Bryel Foundry:** Founders reported 20× faster classification models, 5× lower search-model costs, and frontier-matching long-horizon agent performance at 5–8× lower cost ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/V2o-bryel-building-your-in-house-frontier-ai-lab)).
  - **Prior offering — Bryel Foundry:** Launch video recorded 131 YouTube views as of November 11, 2026 ([Launchscene](https://launchscene.app/v/perceptual-labs-bryel-yc-f26-training-a-billion-models)).
- **Competitors:**
  - **Goodfire** ($207.25M raised per CB Insights, revenue unknown): Silico supports model inspection and debugging, with a $150M Series B led by B Capital in February 2026 ([CB Insights](https://www.cbinsights.com/company/goodfire-ai/financials), [Goodfire Series B](https://www.goodfire.com/blog/our-series-b), [Silico](https://www.goodfire.com/legal/tos)).
  - **Guide Labs** ($9M publicly announced, revenue unknown): Clarity traces and steers outputs through concepts in its purpose-built Steerling model, following a December 2025 seed round led by Initialized Capital ([Guide Labs](https://www.guidelabs.ai/post/meet-clarity/), [Julius Adebayo’s funding announcement](https://www.linkedin.com/feed/update/urn:li:activity:7401746250536067072/)).
  - **Transluce** ($16.9M in tracked philanthropic funding, revenue unknown): Adjacent nonprofit offering agent evaluation and behavioral oversight through Docent, with its latest listed grants administered by Manifund in March 2026 ([Transluce](https://transluce.org/), [Manifund](https://manifund.org/orgs/transluce), [Trace grant records](https://trace.manifund.org/orgs/transluce)).
- **Why now:** [Inferred]: MIT CSAIL’s November 2026 demonstration that a frontier model could improve a small Qwen model’s math performance through direct weight edits without gradient training provided a proof of concept for the approach ([MIT CSAIL, Nov 2, 2026](https://rikiyat.github.io/blog/weight-space-programming/)).

## Founders & Team

- **Kevin Miao (Founder/CEO):**
  - **Background:** UC Berkeley BA in computer science and MS in EECS, Berkeley lecturer, former BAIR researcher, and Apple ML research engineer with work in interpretability and post-training ([UC Berkeley](https://cdss.berkeley.edu/news/first-generation-masters-student-tells-us-how-he-found-data-and-computer-sciences), [Miao’s research profile](https://kevin-miao.com/), [YC founder profile](https://www.ycombinator.com/founders/kevin-miao)).
  - **Twitter/X:** `@KJHMiao`, 1.5K followers ([X profile mirror, Nov 2026](https://xitter.gq/KJHMiao)).
  - **LinkedIn:** `miaok`, headline and follower count not retrievable ([Miao’s profile links](https://kevin-miao.com/)).
  - **GitHub:** `@Kevin-Miao`, `cdss94_labs` with 2 stars ([GitHub, Nov 2026](https://github.com/kevin-miao/cdss94_labs)).
  - **Email:** kevin@bryel.ai ([MuSP-Bench author contact, Nov 2026](https://arxiv.org/pdf/2608.28212v3)).
- **Frankie Li (Co-Founder):**
  - **Background:** Harvard graduate and Diverso founder who helped train models and led product at Fundamental Research Labs, where YC credits the prior employer’s Shortcut Excel copilot with use by 1,000+ companies ([YC founder profile](https://www.ycombinator.com/founders/frankie-li), [Diverso](https://www.dvrso.org/team-alumni)).
  - **Twitter/X:** `@frankieli_`, 557 followers ([X profile mirror, Nov 2026](https://xitter.gq/frankieli_)).
  - **LinkedIn:** Displays “Perceptual (YC F26)” as current affiliation and 1K followers ([LinkedIn, Nov 2026](https://www.linkedin.com/in/lifrankie)).
  - **GitHub:** No public repos found.
  - **Email:** frankie@bryel.ai ([Launch YC training inquiries, Oct 2026](https://www.ycombinator.com/launches/V2o-bryel-building-your-in-house-frontier-ai-lab)).
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Miao’s model interpretability and post-training work and Li’s model training and product work at Fundamental Research Labs cover the research and product functions of the YC-backed company ([Miao’s research profile](https://kevin-miao.com/), [Li’s YC profile](https://www.ycombinator.com/founders/frankie-li), [YC company profile](https://www.ycombinator.com/companies/perceptual-labs)).

## Key Risks

- **Technical feasibility:** Production use depends on edits preserving unrelated capabilities across architectures, and WeightBench found that frontier agents failed its language-model patching tasks under its test constraints ([Perceptual Labs](https://www.bryel.ai/), [WeightBench, Nov 2026](https://arxiv.org/abs/2611.18553)).
- **Weight access:** [Inferred]: Direct editing requires access to model parameters, limiting applicability to customers with editable weights or a license that grants access ([Perceptual Labs](https://www.bryel.ai/), [International AI Safety Report, 2026](https://storage.ghost.io/c/44/95/449506ca-034e-480f-9725-fcde08ef1cc1/content/files/2026/02/INTERNATIONAL-AI-SAFETY-REPORT-2026.pdf)).
- **Customer transfer:** [Inferred]: Bryel Foundry’s reported training engagements may not convert to weight-editing deployments because the public offers describe different workflows ([Bryel Launch YC, Oct 2026](https://www.ycombinator.com/launches/V2o-bryel-building-your-in-house-frontier-ai-lab), [Perceptual launch, Nov 2026](https://xitter.gq/KJHMiao/status/2122723436753801521)).
- **Brand confusion:** [Inferred]: A November snapshot of the former `@bryel_labs` handle shows a token-promoting account using the Perceptual name, while Miao’s current announcement identifies `@perceptual_labs` as the company account ([former-handle snapshot, Nov 2026](https://xitter.gq/bryel_labs), [Miao’s announcement, Nov 2026](https://xitter.gq/KJHMiao/status/2122723436753801521)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Broader model interpretability tooling market estimated at $100M–$200M in 2026, with 45% projected CAGR through 2033 ([Meticulous Research, 2026](https://www.meticulousresearch.com/meticulous-next/model-interpretability-tooling-outlook-2026-2033)) |
| SAM | No public data found |
| Traction | Current product: early-access waitlist launched November 17, 2026 ([Miao launch post](https://xitter.gq/KJHMiao/status/2122723436753801521)). Prior Bryel offering: founder-reported training work for Apple, Framer, and unnamed Fortune 500 firms ([Launch YC, Oct 2026](https://www.ycombinator.com/launches/V2o-bryel-building-your-in-house-frontier-ai-lab)) |
| Revenue Signal | No public data found |
| Founders | Kevin Miao (Founder/CEO): Apple ML research, BAIR, UC Berkeley MS ([YC](https://www.ycombinator.com/founders/kevin-miao)). Frankie Li (Co-Founder): Harvard, Fundamental Research Labs model training and product ([YC](https://www.ycombinator.com/founders/frankie-li)) |
| Competitors | Goodfire ($207.25M raised, revenue unknown, Silico model debugging) ([CB Insights](https://www.cbinsights.com/company/goodfire-ai/financials), [Goodfire](https://www.goodfire.com/legal/tos)). Guide Labs ($9M announced, revenue unknown, concept steering) ([Adebayo](https://www.linkedin.com/feed/update/urn:li:activity:7401746250536067072/), [Guide Labs](https://www.guidelabs.ai/post/meet-clarity/)). Transluce ($16.9M tracked funding, revenue unknown, agent evaluation) ([Manifund](https://manifund.org/orgs/transluce)) |
| Moat Signals | No public data found |
| Risk Factors | Weight-edit reliability ([WeightBench](https://arxiv.org/abs/2611.18553)), access to editable weights ([International AI Safety Report](https://storage.ghost.io/c/44/95/449506ca-034e-480f-9725-fcde08ef1cc1/content/files/2026/02/INTERNATIONAL-AI-SAFETY-REPORT-2026.pdf)), customer transfer between offerings ([Launch YC](https://www.ycombinator.com/launches/V2o-bryel-building-your-in-house-frontier-ai-lab), [Perceptual Labs](https://www.bryel.ai/)) |
| Founder Reach | Kevin Miao: X 1.5K, GitHub `cdss94_labs` 2 stars ([X profile mirror](https://xitter.gq/KJHMiao), [GitHub](https://github.com/kevin-miao/cdss94_labs)). Frankie Li: X 557, LinkedIn 1K ([X profile mirror](https://xitter.gq/frankieli_), [LinkedIn](https://www.linkedin.com/in/lifrankie)) |
| Distribution Signals | Company X 317 followers ([X profile mirror, Nov 17, 2026](https://xitter.gq/perceptual_labs)). Prior Bryel launch video: 131 YouTube views ([Launchscene, Nov 11, 2026](https://launchscene.app/v/perceptual-labs-bryel-yc-f26-training-a-billion-models)) |
| Emails | kevin@bryel.ai (Kevin Miao, [MuSP-Bench](https://arxiv.org/pdf/2608.28212v3)), frankie@bryel.ai (Frankie Li, [Launch YC](https://www.ycombinator.com/launches/V2o-bryel-building-your-in-house-frontier-ai-lab)) |
