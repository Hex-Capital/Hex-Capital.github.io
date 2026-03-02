# Rubric AI

> Post-training research and product lab

| Field | Value |
|-------|-------|
| Website | https://therubric.ai |
| YC Page | https://www.ycombinator.com/companies/rubric-ai |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Data Labeling, Big Data, Infrastructure, AI |
| YC Partner | Gustaf Alstromer |
| Emails | team@therubric.ai |

## The Idea

**Problem:** Frontier AI labs (e.g., OpenAI, Anthropic, Google DeepMind) require high-quality human evaluation and training signals to improve their models through post-training techniques such as RLHF (Reinforcement Learning from Human Feedback) and rubric-based evaluations. Current approaches to model evaluation and reward signal generation face challenges in sourcing expert-level judgment at scale, particularly for complex, domain-specific tasks. Labs rely on a mix of large-scale annotation vendors (Scale AI, Surge AI, Mercor) and in-house teams, but the quality and specificity of evaluation remains a bottleneck for model improvement.

**Approach:** Rubric AI positions itself as a "post-training research and product lab" building "the human and computational layer that turns expert judgment into training signals for frontier models and agents" (YC page). The company's website tagline is "Evals for frontier labs" (therubric.ai). This suggests the product combines purpose-built evaluation environments with expert human judgment to generate structured training signals — likely rubric-based reward signals for reinforcement learning — for frontier model and agent improvement.

**Differentiation:** Unlike large-scale data labeling platforms (Scale AI, Surge AI, Mercor) that emphasize volume and workforce management, Rubric AI appears to focus on the research and methodology layer — building specialized training environments and evaluation frameworks rather than operating as a labor marketplace. The company describes itself as a "research and product lab" rather than a services company. This positions it closer to the evaluation methodology side (akin to what Labelbox's "Evaluation Studio" targets) rather than the pure workforce-supply side. [Inferred]: The "purpose-built training environments" language suggests the company may be building simulation or sandbox environments for evaluating AI agents, a more technical and research-oriented approach than traditional annotation platforms.

**Business Model:** No pricing page or revenue model is publicly visible on the website. [Inferred]: Most likely monetization path is B2B contracts with frontier AI labs, either as SaaS for evaluation infrastructure/tooling, or as a managed service combining proprietary evaluation environments with expert annotators, based on the company's positioning as serving frontier labs.

**TAM/SAM:** The global AI training dataset market was valued at USD 3.59 billion in 2025 and is projected to reach USD 23.18 billion by 2034 at a 22.9% CAGR (Fortune Business Insights, 2025 via search snippet). The broader AI data labeling market is estimated at USD 4.87 billion in 2025, reaching USD 29.11 billion by 2032 at a 29.1% CAGR (Coherent Market Insights, 2025 via search snippet). A more targeted estimate pegs the AI data services market at $30B+ TAM by 2028 (GenAITech via search snippet). The specific post-training evaluation segment — Rubric AI's primary focus — is a subset of these markets, but no public SAM estimate specific to "evals for frontier labs" was found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to frontier AI labs (OpenAI, Anthropic, Google DeepMind, Meta, etc.), given the company's positioning as serving frontier labs specifically. The frontier lab customer base is concentrated (fewer than 20 major buyers globally), making direct enterprise sales the natural channel.

## Defensibility

[Inferred]: Potential moat could develop via proprietary evaluation methodologies and purpose-built training environments that encode domain expertise into structured reward signals. If Rubric AI accumulates institutional knowledge about what evaluation rubrics and training environments produce the best model improvements, this know-how becomes a defensibility asset over time. Additionally, deep integration with a frontier lab's training pipeline could create switching costs.

**Market structure:** The frontier AI lab customer base is highly concentrated, creating a market where deep relationships and trust matter. [Inferred]: Large workforce-centric platforms like Scale AI and Surge AI are structurally incentivized toward high-volume annotation work, potentially making it harder for them to invest deeply in bespoke evaluation research for individual lab customers. However, no structural barrier preventing incumbents from building similar evaluation methodology layers has been identified at this stage.

**Commoditization risk:** Multiple well-funded players operate in the adjacent data labeling and RLHF space: Scale AI ($29B valuation), Surge AI ($1.2B revenue, seeking $25B valuation), Mercor ($10B valuation), Invisible Technologies ($2B valuation), and Labelbox ($1B valuation). Any of these could build or acquire similar evaluation capabilities. Labelbox has already launched "Evaluation Studio" and "rubric evaluation" tools (Labelbox blog). The research methodology component (designing evaluation rubrics and training environments) is harder to replicate than the workforce component, but the barrier is not prohibitively high for well-resourced competitors.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- Twitter/X: @rubric_ai (count not retrievable due to JavaScript rendering requirements).
- LinkedIn: https://www.linkedin.com/company/the-rubric-ai/ (follower count not retrievable).
- No Product Hunt launch found.
- No Discord or Slack community found.
- No app store presence or Chrome extension found.
- No press coverage in named publications found.
- No job postings found on YC's job board; company is listed as not hiring.

**Competitive landscape:**

1. **Scale AI** — $29B valuation; 49% acquired by Meta for $14.3B (June 2025, Wikipedia / Bloomberg via search snippet); ~$870M revenue (via search snippet). Vertically integrated platform combining data labeling, RLHF services, evaluation APIs, and compute. Key differentiator vs. Rubric AI: massive scale and government contracts (US DoD, Qatar). The Meta acquisition triggered customer departures from Google, OpenAI, and xAI over data-sharing concerns.

2. **Surge AI** — $1.2B revenue (bootstrapped, no external funding as of mid-2025; Getlatka via search snippet); seeking ~$1B raise at $15-25B valuation (Bloomberg, July 2025 via search snippet). Focus on expert-quality annotation for frontier labs (OpenAI, Anthropic, Google, Meta, Microsoft). Key differentiator vs. Rubric AI: premium workforce at scale (charges up to 10x competitors), proven revenue machine serving the same frontier lab customer base.

3. **Mercor** — $10B valuation; $350M Series C (CNBC, October 2025 via search snippet); ~$450M annualized run-rate revenue (TechCrunch, September 2025 via search snippet); 30,000+ contractors. AI-powered hiring and data labeling marketplace. Key differentiator vs. Rubric AI: scale of managed contractor workforce and marketplace-model unit economics.

4. **Invisible Technologies** — $2B+ valuation; $100M raised September 2025 (SiliconAngle via search snippet); $134M revenue in 2024 (via search snippet). End-to-end ML ops plus humans platform. Key differentiator vs. Rubric AI: broader scope beyond AI training into enterprise process automation.

5. **Labelbox** — ~$1B valuation (2022 Series D); $189M total raised (via search snippet); ~$50M revenue in November 2024 (Getlatka via search snippet). Data labeling platform with "Evaluation Studio" and rubric evaluation tools. Key differentiator vs. Rubric AI: established platform with self-serve tooling and direct competition on rubric-based evals.

**Why now:** [Inferred]: Several catalysts have converged: (1) The RL/post-training paradigm has become the dominant method for improving frontier models, with instruction-following domains where frontier models still fail 22-30% benefiting from rubric-based reward signals (up to 13% gains per academic research, arxiv via search snippet). (2) Meta's $14.3B acquisition of 49% of Scale AI in June 2025 fragmented the market, causing frontier labs to seek alternative vendors for sensitive training data work. (3) The shift from static benchmarks to dynamic, rubric-based evaluation — as described by Surge AI's blog ("Benchmarks are broken") and Mercor's blog ("Welcome to the era of evals") — has created demand for specialized evaluation infrastructure.

## Founders & Team

**Pragya Saboo** — Founder
- BS Industrial Engineering, Georgia Institute of Technology (2012–2016) (Standard Resume, Product School)
- Undergraduate Fellow, Keller Center for Entrepreneurship, Princeton University (2016) (Standard Resume)
- Previously: Senior Product Manager at Apella (The Org); Product Manager at Asana where she led Time Tracking from inception to launch (YC page, search snippets); Product Manager at Oscar Health working on Virtual Care features (YC page, search snippets); Product Manager at TodayTix (Product School)
- Principal at Climate Capital, a climate-focused investment fund, with $25K-$50K check sizes (The Org, Signal NFX via search snippet)
- Mentor at First Round Fast Track; Fellow at Stanford Angels & Entrepreneurs India (search snippet)
- Co-founded Aara Health (DTC nutraceuticals and women's health platform) and Hubble (Princeton Keller Center eLab, 2016) (Standard Resume, search snippets)
- TEDx Speaker (Product School)
- Twitter/X: @pragyasaboo_ (count not retrievable)
- LinkedIn: linkedin.com/in/pragyasaboo
- GitHub: No public repos found

The second team member is not publicly identified on the YC page or website. The YC page lists only Pragya Saboo as founder, with team size listed as 2.

**Co-founder relationship:** No public data on co-founder history, as the second team member is not publicly identified.

**Founder-market fit:** Pragya Saboo's background is in product management across consumer and health tech (Asana, Oscar Health, TodayTix), with additional experience as a climate tech investor at Climate Capital. Her product management experience — particularly leading Asana's Time Tracking from inception to launch — demonstrates ability to scope and ship products. Her investment background provides fundraising and market analysis skills. However, her publicly documented background does not include direct experience in ML research, RLHF, model training, or AI infrastructure, which are core to Rubric AI's "post-training research lab" positioning. The unnamed second team member may fill the technical/research side.

## Key Risks

**Competitive intensity from well-capitalized incumbents:** Scale AI ($29B), Surge AI (seeking $25B valuation), Mercor ($10B), and Labelbox ($1B) all operate in the evaluation and RLHF space with hundreds of millions in revenue. Labelbox has specifically launched "rubric evaluation" tooling that overlaps with Rubric AI's stated focus. Rubric AI would need to differentiate on methodology depth rather than scale or workforce.

**Customer concentration in a narrow market:** The addressable customer base of "frontier labs" consists of fewer than 20 organizations globally. Losing or failing to win a single major customer (e.g., OpenAI, Anthropic) would materially impact the business. This also creates pricing power asymmetry — frontier labs are sophisticated, large buyers.

**Brand disambiguation:** Multiple entities use "Rubric" in AI contexts: Rubric Labs (Toronto-based AI lab, rubriclabs.com), Rubric AI (rubricai.app, an education-focused essay grading tool), Rubric (rubric.com, a translation company), and Rubrik (publicly traded cybersecurity company). The academic concept of "rubric-based rewards" in RL is also widely discussed in research papers. This creates SEO and brand recognition challenges.

**Founder-domain gap (based on public information):** Pragya Saboo's publicly documented experience is in product management and investing, not in ML research, RLHF, or AI training infrastructure. The "research lab" positioning requires deep technical credibility with frontier AI lab customers. The unidentified second team member may address this gap, but no public data confirms this.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI training dataset market: $3.59B in 2025, projected $23.18B by 2034 at 22.9% CAGR (Fortune Business Insights, 2025 via search snippet). AI data services: $30B+ by 2028 (GenAITech via search snippet). |
| SAM | No public data found for the specific "evals for frontier labs" segment. |
| Traction | No public data found. |
| Revenue Signal | No public data found. |
| Founders | Pragya Saboo (Founder): BS Industrial Engineering, Georgia Tech; PM at Asana, Oscar Health, Apella; Principal at Climate Capital; TEDx Speaker. Second team member not publicly identified. |
| Competitors | Scale AI ($29B valuation, ~$870M revenue, vertically integrated platform + government contracts); Surge AI ($1.2B revenue bootstrapped, seeking $15-25B valuation, premium expert annotation for frontier labs); Mercor ($10B valuation, ~$450M ARR, AI-powered contractor marketplace); Invisible Technologies ($2B valuation, $134M revenue, ML ops + humans platform); Labelbox ($1B valuation, ~$50M revenue, data labeling platform with rubric eval tooling) |
| Moat Signals | No public data found. |
| Risk Factors | Well-capitalized incumbents with overlapping offerings, narrow customer base of ~20 frontier labs, brand disambiguation challenges |
| Founder Reach | Pragya Saboo: Twitter @pragyasaboo_ (count not retrievable), LinkedIn linkedin.com/in/pragyasaboo, GitHub not found. Company: Twitter @rubric_ai (count not retrievable), LinkedIn linkedin.com/company/the-rubric-ai |
| Distribution Signals | No public data found. |
| Emails | team@therubric.ai |
