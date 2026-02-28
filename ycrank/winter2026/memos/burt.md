# Burt

> Easily fine tune and deploy specialized models

| Field | Value |
|-------|-------|
| Website | https://www.trainburt.com/ |
| YC Page | https://www.ycombinator.com/companies/burt |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Machine Learning, Reinforcement Learning, AI |

## The Idea

**Note on product positioning discrepancy:** The YC company page describes Burt as a platform to "help teams train and deploy models specialized for their domain and use cases" — a general-purpose model fine-tuning and deployment service. However, the company website (trainburt.com) at time of research describes Burt as "AI automation built for logistics," focused on eliminating manual work in back-office operations such as invoices, documents, and data entry. This discrepancy may indicate a product pivot or vertical-first go-to-market strategy. The analysis below covers both framings.

**Problem:** Teams building AI agents at production scale encounter three interrelated problems with generalist proprietary LLMs: excessive latency, high inference cost, and insufficient quality/reliability for domain-specific tasks. At high call volumes, these costs compound. Today, teams either tolerate suboptimal performance from general-purpose models (GPT-4, Gemini) or attempt to fine-tune open-source models in-house, which requires ML engineering expertise many product teams lack. Separately, the website positions the problem as logistics companies spending excessive time on manual back-office tasks — invoices, document processing, and data entry (trainburt.com).

**Approach:** Per the YC page, Burt provides a managed platform for training and deploying small, specialized LLMs and vision-language models (VLMs) on customer data, claiming these models "outperform SOTA models like gemini-3-flash/pro while being 10x faster and cheaper" (YC company page). A cited case study describes a custom VLM that was "~3x faster" with better accuracy than Gemini-3-Flash/Pro for a high-volume customer use case (YC company page). Per the website, Burt enables users to "build workflows that handle the repetitive back-office work" in logistics (trainburt.com). The primary CTA on the website is scheduling a 30-minute meeting with co-founder Bobby Zhong via Cal.com, indicating a high-touch sales-led motion (trainburt.com).

**Differentiation:** Compared to self-service fine-tuning platforms like Together AI, Fireworks AI, or Lamini, Burt appears to position as a more hands-on, managed service — the company says "we've helped teams build" specialized models, implying a consultative or white-glove approach rather than purely self-service tooling (YC company page). Compared to raw infrastructure providers, Burt focuses on the outcome (specialized models that outperform general-purpose ones) rather than just providing compute or APIs.

**Business Model:** No pricing page is visible on the website (trainburt.com). No revenue figures are publicly available. [Inferred]: Most likely monetization path is either (a) a managed fine-tuning service billed per training run or monthly retainer, or (b) SaaS pricing for the logistics automation product, based on the high-touch sales motion evidenced by the Cal.com booking CTA.

**TAM/SAM:** The broader LLM market was valued at approximately $8.31 billion in 2025, projected to reach $24.92 billion by 2031 at a CAGR of 20.08% (Mordor Intelligence, 2025 via search snippet). The MLOps market, which includes model training and deployment platforms, was valued at approximately $2.33 billion in 2025, projected to grow at a CAGR of 28.90% through 2034 (Fortune Business Insights via search snippet). No public data found for a specific TAM/SAM scoped to the managed LLM fine-tuning segment or logistics back-office automation segment.

**GTM / Distribution:** The trainburt.com website uses a direct sales model via Cal.com scheduling with co-founder Bobby Zhong. No self-service signup, freemium tier, or app marketplace listing was found. [Inferred]: Most likely distribution path at this stage is founder-led sales to teams with high-volume LLM inference workloads, possibly starting with logistics companies given the website positioning.

## Defensibility

No defensibility signals found in public sources at this stage. No patents, open-source repos with significant community traction, or proprietary datasets were identified.

[Inferred]: Potential moat could develop via accumulation of domain-specific training data and fine-tuning recipes across customer deployments, creating compounding expertise and faster delivery for new customers. If vertical-focused (logistics), deep domain specialization in data formats (BOLs, invoices, rate confirmations) could create switching costs. However, this is unproven at this stage.

**Market structure:** The major cloud providers (AWS SageMaker, Google Vertex AI, Azure ML) all offer fine-tuning capabilities, but they are horizontal platforms optimized for self-service at scale rather than bespoke, high-touch model optimization for specific use cases. [Inferred]: The structural barrier, if one exists, is that cloud incumbents' business models incentivize maximizing compute consumption (tokens/GPU hours), creating a misalignment with Burt's value proposition of smaller, cheaper models — helping customers use less compute directly reduces cloud provider revenue.

**Commoditization risk:** The fine-tuning tooling landscape is crowded and rapidly commoditizing. Open-source frameworks (Axolotl, LLaMA-Factory, Unsloth) make fine-tuning accessible to any ML engineer. Well-funded platforms (Together AI, Fireworks AI) offer managed fine-tuning as a feature within broader inference platforms. Predibase, which offered similar fine-tuning services, was acquired by Rubrik in June 2025 (SiliconANGLE, Jun 2025 via search snippet), suggesting the standalone fine-tuning platform may face consolidation pressure. The technical barrier to replicating fine-tuning workflows is moderate; the potential differentiator is domain expertise and service quality rather than pure technology.

## Market & Traction

**Traction signals:**

- The YC company page mentions one case study: a custom VLM built for a customer that was "~3x faster" with better accuracy than Gemini-3-Flash/Pro for a high-volume use case (YC company page). No customer name, date, or additional metrics are provided.
- No Product Hunt launch found.
- No company Twitter/X account found.
- LinkedIn company page exists at "train-burt" (trainburt.com). No follower count retrieved.
- No Discord or Slack community found.
- No press coverage in named publications found.
- No app store listings, Chrome extension, or download counts found.
- No job postings found (consistent with the company not currently hiring per YC page).

**Competitive landscape:**

1. **Together AI** ($534M total raised, ~$300M annualized revenue as of Sep 2025 per Sacra via search snippet, $3.3B valuation): Full-stack AI cloud offering fine-tuning, inference, and GPU compute. Differentiator vs. Burt: self-service platform at massive scale with broad model support, whereas Burt appears to offer a more managed, bespoke approach.

2. **Fireworks AI** ($327M total raised, ~$280M annualized revenue in 2025 per Sacra via search snippet, $4B valuation): AI inference platform with fine-tuning capabilities serving 10,000+ customers. Differentiator vs. Burt: infrastructure-focused with emphasis on inference speed and scale; Burt positions on outcome-oriented model specialization.

3. **Lamini** ($25M Series A, led by Amplify Partners; revenue unknown): Enterprise LLM fine-tuning platform with proprietary "Memory Tuning" technology to reduce hallucinations. Differentiator vs. Burt: focused on enterprise customers with specific anti-hallucination IP; Burt emphasizes speed/cost improvement through smaller specialized models.

4. **Predibase** (~$28M total raised, acquired by Rubrik for reported $100M+ in Jun 2025 per SiliconANGLE via search snippet): LoRA-based fine-tuning platform that pioneered reinforcement fine-tuning for enterprises. Differentiator vs. Burt: no longer an independent company; was research-heavy with published papers (LoRA Land). Acquisition validates market but removes a direct competitor.

5. **Unsloth** (open-source, funding unknown): Enables fine-tuning large models on consumer GPUs with 2x speed and 60% less memory. Differentiator vs. Burt: purely open-source developer tool vs. managed service; targets individual developers rather than teams deploying to production.

**Why now:** [Inferred]: Several catalysts have converged: (1) the rapid proliferation of open-source base models (Llama 3, Mistral, Gemma, Qwen) in 2024-2025 created a foundation layer on which fine-tuning can deliver outsized gains; (2) production AI agent deployments have moved from experimentation to scale, making inference cost and latency critical business metrics rather than academic concerns; (3) the demonstrated acquisition of Predibase by Rubrik (Jun 2025) signals enterprise demand for fine-tuning capabilities being absorbed into larger platforms, validating the problem space while potentially creating an opening for nimble independents.

## Founders & Team

**Bobby Zhong** — Co-founder & CEO

- BS Computer Science, UC Irvine (dropped out per LinkedIn summary via search snippet)
- Founding engineer (2nd engineer) at Pirros (YC W23), March 2024 – March 2025 (The Org, LinkedIn via search snippet)
- Software Engineer at Replo (YC S21), building coding agents and working with LLMs, from March 2025 (LinkedIn via search snippet)
- Founded Educado (personalized student support for schools), September 2023 – April 2024 (LinkedIn via search snippet)
- Co-founded Moonwish Studios (website development contracts with local businesses in LA/Orange County) (LinkedIn via search snippet)
- Full-stack developer at Commit the Change, UCI; intern at PipeIQ (summer 2023) (LinkedIn via search snippet)
- Twitter/X: No public account found specific to this individual
- LinkedIn: linkedin.com/in/bobby-zhong — 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/bobbyzhong — 29 public repos, 12 followers; pinned repos include TypeScript and Python projects (taka, educado, vehitrak, airqualityfilter, teach-pear-langchain) (GitHub)

**Kurt Sharma** — Co-founder & CTO

- Limited public information found. Listed as Co-founder & CTO on the YC company page.
- A "Kartavya Sharma" appears in LinkedIn results as "Engineering @ Replo" in the San Francisco Bay Area (LinkedIn via search snippet). If this is the same person (Kartavya sometimes shortened to "Kurt"), it would indicate both co-founders worked at Replo (YC S21), but this connection is unconfirmed.
- Twitter/X: No public account found
- LinkedIn: No profile conclusively identified (search returned no direct match for "Kurt Sharma" at Burt)
- GitHub: No public profile found

**Co-founder relationship:** Both Bobby Zhong and Kurt Sharma are listed on the YC page. Bobby Zhong worked at Replo (YC S21), and a "Kartavya Sharma" also appears as an engineer at Replo (LinkedIn via search snippet). If Kurt Sharma and Kartavya Sharma are the same person, the co-founders were colleagues at Replo. Both may have attended UC Irvine based on Bobby's confirmed attendance there. However, this overlap is not conclusively confirmed from public sources.

**Founder-market fit:** Bobby Zhong has direct experience building with LLMs at Replo (coding agents) and was an early engineer at two YC-backed startups, giving him familiarity with the startup build-deploy cycle and hands-on ML engineering experience. His trajectory — from founding Educado to engineering roles at YC companies to starting Burt — shows progressive deepening in AI/ML product development. Kurt Sharma's background is insufficiently documented in public sources to assess domain fit. No advisors, board members, or notable investors beyond standard YC participation were found.

## Key Risks

**Product positioning ambiguity:** The YC company page describes a general-purpose model fine-tuning and deployment platform, while the live website (trainburt.com) describes logistics-specific back-office automation. This disconnect may reflect a pivot in progress or difficulty in finding product-market fit in one framing. Potential investors would need clarity on which direction the company is pursuing.

**Heavily funded competitive landscape:** The LLM fine-tuning and inference market includes Together AI ($534M raised), Fireworks AI ($327M raised), and Lamini ($25M raised), all offering managed fine-tuning capabilities. These competitors have multi-year head starts, established customer bases (Fireworks: 10,000+ customers), and significant engineering teams. Burt's differentiation as a two-person team competing against these incumbents is unclear from public sources.

**Predibase acquisition as a signal of segment consolidation:** Predibase, the most direct comparable (standalone LLM fine-tuning platform), was acquired by Rubrik in June 2025 after raising ~$28M (SiliconANGLE, Jun 2025 via search snippet). This may indicate that standalone fine-tuning platforms are being absorbed into larger enterprise software stacks rather than surviving as independent businesses.

**Brand disambiguation challenge:** "Burt" is a common English word/name. Search results return Burt Corporation (ad-tech data company), Burt Intelligence, and numerous unrelated entities. This creates SEO, brand awareness, and discoverability challenges.

**Founder CTO visibility gap:** No public LinkedIn profile, GitHub account, or professional background information was found for co-founder and CTO Kurt Sharma. For a technical product company where the CTO's capabilities are central to delivery, this limits external validation of technical depth.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $8.31B LLM market (Mordor Intelligence, 2025 via search snippet, 20.08% CAGR); $2.33B MLOps market (Fortune Business Insights, 2025 via search snippet, 28.9% CAGR) |
| SAM | No public data found for the managed fine-tuning or logistics automation sub-segment |
| Traction | One case study cited: custom VLM "~3x faster" than Gemini-3-Flash/Pro for unnamed customer (YC company page). No other public traction signals found. |
| Revenue Signal | No public data found |
| Founders | Bobby Zhong (CEO): UC Irvine CS, ex-Pirros (YC W23) founding engineer, ex-Replo (YC S21). Kurt Sharma (CTO): limited public background data. |
| Competitors | Together AI ($534M raised, ~$300M ARR, full-stack AI cloud vs. Burt's managed specialization); Fireworks AI ($327M raised, ~$280M ARR, inference-focused vs. Burt's outcome-focused); Lamini ($25M raised, revenue unknown, enterprise anti-hallucination focus); Predibase (~$28M raised, acquired by Rubrik Jun 2025, LoRA fine-tuning pioneer); Unsloth (open-source, funding unknown, consumer GPU fine-tuning) |
| Moat Signals | No public data found |
| Risk Factors | Product positioning ambiguity (YC page vs. website mismatch), heavily funded competitors, standalone fine-tuning segment consolidation (Predibase acquired) |
| Founder Reach | Bobby Zhong: Twitter not found, LinkedIn 500+, GitHub 12 followers / 29 repos. Kurt Sharma: Twitter not found, LinkedIn not found, GitHub not found. |
| Distribution Signals | No public data found |
