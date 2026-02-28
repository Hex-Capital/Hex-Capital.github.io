# Shofo

> Common Crawl for Video

| Field | Value |
|-------|-------|
| Website | https://shofo.ai/ |
| YC Page | https://www.ycombinator.com/companies/shofo |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Video, Data Labeling, Big Data |
| YC Partner | Jared Friedman |
| Emails | founders@shofo.ai (company website) |

## The Idea

**Problem:** AI labs training computer vision and video-understanding models require massive volumes of high-quality, labeled video data. Short-form video — the dominant format on social platforms — is abundant but fragmented across platforms, unstructured, unlabeled, and mixed with low-quality content. Today, labs either scrape and clean data internally (resource-intensive), use general-purpose data labeling platforms like Scale AI or Labelbox (which are not purpose-built for video indexing at scale), or rely on static academic datasets that are small and narrow. The pain is acute for labs working on tasks requiring fine-grained annotations (e.g., hand-object interactions in cooking videos), where sourcing and labeling the right subset is a multi-month effort.

**Approach:** Shofo maintains what it describes as "the world's largest index of short-form videos" (YC company page). On top of this index, Shofo runs a human-in-the-loop pipeline that cleans, segments, and labels video data with object and activity detection, reasoning, and segmentation (YC company page; Fondo blog). Clients query the index for specific criteria (e.g., "50k cooking videos featuring hand-object interactions"), Shofo runs the matching results through its labeling pipeline, and delivers a clean, annotated dataset. The company also offers API access to its social media index covering TikTok, LinkedIn, Instagram, and X (LinkedIn company page, via search snippet).

**Differentiation:** Shofo's positioning differs from general-purpose labeling platforms (Scale AI, Labelbox, Encord) in that it bundles the data sourcing layer — the video index itself — with the annotation pipeline. Scale AI, Labelbox, and Encord primarily label data that customers bring to them. Shofo is both the data source and the labeler. Relative to open-source tools like CVAT or cc2dataset (which extracts video links from Common Crawl's web archives), Shofo provides a curated, queryable index with end-to-end annotation services rather than raw links. Relative to web scraping platforms like Bright Data, Shofo focuses specifically on video content with AI-training-grade labeling as the output.

**Business Model:** No public pricing page was found on shofo.ai. [Inferred]: The most likely monetization path is per-dataset or per-query pricing for custom video dataset curation and labeling, given the bespoke nature of the service (clients specify criteria and receive delivered datasets). An API access tier for the video index is also plausible given the API documentation references on the website.

**TAM/SAM:** The global AI training dataset market was valued at $3.2B in 2025, projected to reach $16.3B by 2033 at a 22.6% CAGR (Grand View Research, 2025, via search snippet). The image/video segment represented 41.9% of this market in 2025, implying approximately $1.34B for image/video training data (Grand View Research, 2025, via search snippet). Video annotation specifically is growing at a 32.0% CAGR, driven by autonomous vehicles and surveillance AI (Grand View Research, 2025, via search snippet). The broader data collection and labeling market was valued at $3.77B in 2024, projected to reach $17.1B by 2030 at a 28.4% CAGR (Grand View Research, 2024, via search snippet).

**GTM / Distribution:** [Inferred]: The most likely distribution path is direct sales to AI labs (the company's stated customer segment), potentially leveraging the YC network for initial introductions. The "Get Data" CTA on the website and founders@shofo.ai contact suggest a consultative, high-touch sales model where clients submit dataset requirements. The API offering may serve as a self-service distribution channel over time.

## Defensibility

Shofo's primary defensibility signal is its data asset — the video index it describes as "the world's largest index of short-form videos" (YC company page). If this index is proprietary and difficult to replicate due to the breadth of sources, volume of metadata, and quality of annotations accumulated over time, it could function as a data moat. The human-in-the-loop labeling pipeline, if trained and calibrated over many projects, may also accumulate institutional knowledge about annotation quality standards specific to AI training workflows.

No defensibility signals found in public sources beyond the claimed data asset. [Inferred]: Potential moat could develop via accumulation of labeled datasets, proprietary annotation taxonomies, and client feedback loops improving data quality over time, but this is unproven at this stage.

**Market structure:** Scale AI is the dominant incumbent in AI data labeling, valued at $29B following Meta's June 2025 investment (multiple sources, via search snippet). However, Scale AI's neutrality has been compromised by Meta's 49% stake, causing Google and OpenAI — two of Scale's largest customers — to seek alternatives (TechCrunch/multiple sources, 2025, via search snippet). This creates a structural opening: AI labs now face a conflict-of-interest concern with the dominant platform. Shofo's focus on video data sourcing (not just labeling) also addresses a different part of the value chain that Scale AI and Labelbox do not primarily serve.

**Commoditization risk:** Web scraping and video indexing are technically feasible for well-resourced teams. Open-source tools (cc2dataset, CVAT) cover parts of the pipeline. Any well-funded data labeling company could build a video index, and AI labs with sufficient engineering resources could build internal pipelines. The barrier is the time and cost of building and maintaining a comprehensive, clean video index at scale, not fundamental technical complexity.

## Market & Traction

**Traction signals:**
- Prior product (Correkt): 40,000 users before pivot to Shofo (YC company page; LinkedIn via search snippet). Note: The Daily Nexus reported 5,000 organic users shortly after Correkt's April 2024 launch (Daily Nexus, May 2024); the 40k figure comes from the team's own YC profile and LinkedIn references.
- Twitter/X: @shofoai — 149 followers, 0 posts, account created February 2025 (X.com, via search snippet)
- LinkedIn: linkedin.com/company/shofoai (company page exists; follower count not retrievable)
- Product Hunt: No listing found
- Press: Featured on Fondo blog as a YC W26 launch (Fondo, Feb 2026). Featured in a Y Combinator LinkedIn post (LinkedIn, via search snippet). No coverage found in major tech publications.
- App store / Chrome extension: Not applicable (B2B API/service product)
- Discord/Slack community: No public data found
- Revenue: No public data found
- Customer count: No public data found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Shofo |
|-----------|---------|-------------|------------------------------|
| **Scale AI** | $15.9B total; valued at $29B (June 2025 Meta deal, via search snippet) | $870M revenue in 2024, ~$1.5B run rate by year-end 2024 (Sacra/multiple, via search snippet) | Full-spectrum data labeling across all modalities (text, image, video, 3D, maps); massive workforce; government contracts. Does not primarily source data — labels data customers provide. Neutrality concerns post-Meta deal. |
| **Labelbox** | $189M total; $1B valuation (Jan 2022 Series D, via search snippet) | $50M revenue in 2024 (Latka, via search snippet) | Software-centric labeling platform with model evaluation capabilities. Primarily a tool for teams to label their own data, not a data sourcing service. Backed by a16z and SoftBank. |
| **Encord** | $110M total; $550M valuation (Feb 2026 Series C, via search snippet) | $12.8M revenue in 2024 (Latka, via search snippet) | Specialized in physical AI data (video, LiDAR, sensor, 3D); 300+ physical AI teams as clients; 5+ PB of data on platform. Annotation-focused, not a data sourcing/indexing service. |
| **V7 Labs** | $43.3M total (Crunchbase, via search snippet) | Revenue not publicly disclosed; estimated $100K–$5M (Owler, via search snippet) | AI-powered annotation for images, video, documents, and medical imaging; strong in computer vision workflows. Platform-based, not a data sourcing service. |

**Why now:** [Inferred]: Several specific catalysts have converged: (1) The explosion of multimodal AI models (GPT-4V, Gemini, Sora-class video generation models) in 2024–2025 has sharply increased demand for high-quality video training data. (2) Meta's June 2025 acquisition of 49% of Scale AI disrupted the dominant data labeling platform's neutrality, causing Google, OpenAI, and others to seek alternatives — opening market share for new entrants. (3) Leading AI companies are each reportedly spending ~$1B/year on training data (Grand View Research, 2025, via search snippet), and video's share of that spending is growing at 32% CAGR as autonomous vehicles, robotics, and video generation models scale up. (4) Short-form video platforms (TikTok, Instagram Reels, YouTube Shorts) have created an enormous, growing corpus of diverse human activity footage that did not exist at this scale five years ago.

## Founders & Team

**Bryan Hong** — Co-founder & CEO
- Education: UC Berkeley (LinkedIn via search snippet). Previous internships at MongoDB and Adobe (LinkedIn via search snippet).
- Previously co-founded Correkt (AI search engine, 40k users per YC profile) and then pivoted to Shofo.
- Twitter/X: No personal public account found (company account is @shofoai)
- LinkedIn: linkedin.com/in/zixihong — described as "engineer, researcher, entrepreneur," 500+ connections (LinkedIn via search snippet)
- GitHub: github.com/bryanhong8 — one visible project (A-Frame VR experience); star count not retrievable (GitHub via search snippet)

**Alexzendor Misra** — Co-founder & CTO
- Education: UC Santa Barbara, Computer Science (dropped out) (YC page; Daily Nexus, May 2024). Enrolled Fall 2022.
- Founded Correkt in November 2022 as a second-year CS student, serving as CEO. Correkt reached 43k users (YC page via search snippet). Previously described as a "UCSB Dropout" on YC profile.
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/alexzendor-misra-15907a23b (LinkedIn via search snippet)
- GitHub: No public repos found

**Andre Braga** — Co-founder & Head of AI
- Education: UC Santa Barbara, BS in Statistics & Data Science (LinkedIn via search snippet). Researcher in UCSB NLP group under Professor Xifeng Yan (LinkedIn via search snippet). Previous experience at MIT (LinkedIn via search snippet).
- Research focus: NLP, neural network architectures, LLMs for financial modeling, attention mechanism modifications (LinkedIn via search snippet).
- LinkedIn: linkedin.com/in/andre-braga-ucsb (LinkedIn via search snippet)
- Twitter/X: No personal public account found
- GitHub: No public repos found

**Braiden Dishman** — Co-founder & COO
- Education: UC Santa Barbara, BA in Economics (YC page via search snippet). Previous experience at Amazon Web Services (YC page via search snippet).
- LinkedIn: linkedin.com/in/braiden-dishman (LinkedIn via search snippet)
- Twitter/X: No personal public account found
- GitHub: No public repos found

**Co-founder relationship:** Three of four founders (Misra, Braga, Dishman) attended UC Santa Barbara. Bryan Hong attended UC Berkeley. The team met while building Correkt (YC company page). The original Correkt team included Misra and Braga, among others (Daily Nexus, May 2024). Bryan Hong was not mentioned in the May 2024 Daily Nexus article about Correkt's founding team, suggesting he may have joined the Correkt project at a later stage.

**Founder-market fit:** The team has direct experience building a multimodal AI search product (Correkt) that indexed and processed diverse content types, which is operationally adjacent to building a video data index. Braga's NLP research under Professor Xifeng Yan at UCSB and his ML background provide academic grounding in the AI/ML training data domain. Misra demonstrated the ability to build and grow a consumer-facing AI product to 40k+ users while still an undergraduate. Dishman's AWS experience provides cloud infrastructure context relevant to managing petabyte-scale video data. No advisors, board members, or notable angel investors were identified in public sources.

## Key Risks

**Platform dependency and legal exposure:** Shofo's video index draws from social media platforms (TikTok, LinkedIn, Instagram, X per the company's API references). These platforms actively restrict scraping via terms of service and technical countermeasures. Any change in platform access policies, API restrictions, or legal enforcement (e.g., the hiQ v. LinkedIn precedent) could disrupt Shofo's ability to maintain and expand its index. TikTok specifically faces ongoing regulatory uncertainty in the U.S.

**Data licensing and copyright risk:** Using short-form video content created by third parties for commercial AI training raises unresolved intellectual property questions. Multiple lawsuits are ongoing against AI companies over training data usage (e.g., Getty Images v. Stability AI). Shofo's model of indexing, segmenting, and relabeling others' video content for AI training could attract similar legal scrutiny, particularly as content creators and platforms push for compensation.

**Customer concentration in a narrow buyer segment:** Shofo's stated market is "AI labs" — a small number of well-funded organizations (OpenAI, Google DeepMind, Meta FAIR, Anthropic, etc.). Revenue concentration risk is high if early traction depends on a handful of large contracts. These same buyers have the engineering resources to build internal video data pipelines if the economics justify it.

**Pivot recency:** The team pivoted from Correkt (an AI search engine with 40k users) to Shofo (video data infrastructure). The pivot represents a significant product and market shift. The current product's market fit is unproven, and the team's prior traction (Correkt's 40k users) does not transfer to the new product's domain.

**Scale AI's potential response:** Despite the Meta deal disrupting Scale AI's neutrality, Scale AI ($29B valuation, 6,000+ employees, $870M+ revenue) could build a competing video indexing capability with its existing infrastructure and customer relationships. Other well-funded competitors (Encord at $110M raised, Labelbox at $189M raised) could also expand into video sourcing.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.2B AI training dataset market (Grand View Research, 2025, via search snippet, 22.6% CAGR); image/video segment ~$1.34B (~42% share) |
| SAM | No public data found |
| Traction | 149 Twitter followers (X.com, Feb 2026); prior product Correkt reached 40k users (YC company page); YC W26 batch member |
| Revenue Signal | No public data found |
| Founders | Bryan Hong (CEO): UC Berkeley, ex-MongoDB/Adobe intern. Alexzendor Misra (CTO): UCSB CS (dropped out), founded Correkt (43k users). Andre Braga (Head of AI): UCSB Stats & DS, UCSB NLP researcher, ex-MIT. Braiden Dishman (COO): UCSB Economics, ex-AWS. |
| Competitors | Scale AI ($15.9B raised, $870M 2024 revenue, full-spectrum labeling but neutrality concerns post-Meta deal); Labelbox ($189M raised, $50M 2024 revenue, software-centric labeling platform); Encord ($110M raised, $12.8M 2024 revenue, physical AI data specialist); V7 Labs ($43.3M raised, revenue undisclosed, CV annotation platform) |
| Moat Signals | Claimed "world's largest index of short-form videos" (unverified); bundled data sourcing + labeling pipeline |
| Risk Factors | Platform dependency / legal exposure from social media scraping, copyright risk from third-party video content, customer concentration in narrow AI lab buyer segment |
| Founder Reach | Bryan Hong: Twitter not found, LinkedIn 500+, GitHub 1 repo (stars not retrievable). Alexzendor Misra: Twitter not found, LinkedIn found, GitHub not found. Andre Braga: Twitter not found, LinkedIn found, GitHub not found. Braiden Dishman: Twitter not found, LinkedIn found, GitHub not found. Company @shofoai: 149 followers. |
| Distribution Signals | YC W26 Launch page (Feb 2026); Y Combinator LinkedIn post (Feb 2026); no Product Hunt listing found |
| Emails | founders@shofo.ai (company website) |
