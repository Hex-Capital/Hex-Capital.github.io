# InventoryQuant

> We automate the inventory process in insurance

| Field | Value |
|-------|-------|
| Website | https://www.inventoryquant.com |
| YC Page | https://www.ycombinator.com/companies/inventoryquant |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 1 |
| Location | San Francisco, CA, USA |
| Tags | Insurance, AI |
| YC Partner | Diana Hu |
| Emails | sander@inventoryquant.com |

## The Idea

**Problem:** Insurance contents claims — when a policyholder's personal property is damaged or destroyed — require manual inventorying, transcription, replacement price research, and report generation. Public adjusters, restoration contents companies, and insurance carriers currently transcribe line items by hand from walkthroughs, search replacement prices individually across retail sites, and compile reports into formats like XactContents (inventoryquant.com). The company's website states this costs "many billions of dollars a year and thousands of years of man hours" (YC company page). The current workflow standard is Verisk's XactContents, a module within the Xactimate ecosystem used by 22 of the top 25 U.S. property insurers (Verisk website).

**Approach:** Users record video or audio walkthroughs of damaged property using natural speech. InventoryQuant automatically transcribes the recording into structured line items (claiming 99% transcription accuracy across 100+ languages), searches for replacement items with prices from major retailers, and exports finished reports in XactContents or PDF format (inventoryquant.com). The product claims 10x faster processing and "days saved per claim" (inventoryquant.com).

**Differentiation:** Xactimate/XactContents (Verisk) is the industry-standard estimating tool but requires manual data entry for contents items and manual price lookup. Encircle offers mobile field documentation and contents inventory creation but does not automate transcription from audio/video or automated pricing (Encircle website via Tracxn). Tractable AI focuses on visual damage assessment using computer vision for auto and property exteriors, not interior contents inventorying (TechCrunch, Jul 2023). [Inferred]: InventoryQuant's differentiation is the end-to-end automation of the specific contents sub-workflow — audio/video-to-structured-inventory with automated pricing — rather than a broader claims platform or damage assessment tool.

**Business Model:** The website offers "Try for Free," "Start Free Trial," and "Book a Demo" CTAs, and has a sign-in/dashboard suggesting a SaaS product (inventoryquant.com). No pricing page is publicly visible. [Inferred]: Most likely monetization path is per-claim or per-seat SaaS subscription targeting adjusters and restoration contents companies, given the workflow-tool positioning and "Dashboard" access model.

**TAM/SAM:**
- Global claims processing software market: $40.84B in 2024, projected 8.3% CAGR to $73.0B by 2030 (Allied Market Research, 2021 via search snippet).
- U.S. insurance claims processing software market: $12.7B in 2024 (IBISWorld, 2024 via search snippet).
- Global claims management market: $4.60B in 2023, projected 13.3% CAGR to $13.95B by 2032 (Fortune Business Insights, 2024 via search snippet).
- [Inferred]: The contents-specific sub-segment (personal property claims inventorying and pricing) is a fraction of these figures; no public TAM estimate specific to contents processing was found.

**GTM / Distribution:**
- One named customer: Goodman-Gable-Gould (GGG), a public adjusting firm, with testimonial from CFO & General Counsel Neil C. Kahn: "InventoryQuant has been running smoothly at GGG for the last two months and has already saved us entire days worth of time" (inventoryquant.com).
- [Inferred]: Initial distribution likely targets public adjusters and restoration contents companies via direct outreach and demos, given the "Book a Demo" CTA and niche B2B vertical. XactContents-format export suggests integration into existing Xactimate workflows as an on-ramp.

## Defensibility

- **Data advantage potential:** Each processed claim generates structured item-price pairs that could build a proprietary replacement-pricing database over time. No evidence this moat exists today.
- **Workflow integration:** XactContents export format creates compatibility with the dominant ecosystem (Verisk/Xactimate), reducing switching friction for adopters (inventoryquant.com).
- **Multilingual transcription:** Support for 100+ languages (inventoryquant.com) may create advantage in markets with non-English-speaking policyholders, though this likely relies on third-party ASR models.

[Inferred]: No strong moat signals exist today. Potential defensibility could develop via proprietary pricing data, customer lock-in through workflow integration, and domain-specific model tuning, but all are unproven at this stage.

**Market structure:** Verisk/Xactware dominates property claims estimation and is used by 22 of the top 25 U.S. P&C insurers (Verisk website). [Inferred]: Verisk's XactContents is a module within a larger ecosystem (Xactimate, XactAnalysis, XactAI); building a standalone AI-native contents tool may not threaten Verisk's core revenue, creating coexistence potential. However, Verisk announced XactAI integrating across their claims ecosystem (Verisk website), which could replicate InventoryQuant's approach within the incumbent stack.

**Commoditization risk:** The core technical components — speech-to-text, item extraction via LLMs, retail price lookup — use generally available AI capabilities. [Inferred]: A well-resourced competitor (Verisk, Tractable, or a new entrant) could build a similar pipeline. Defensibility would depend on domain-specific fine-tuning, pricing data, and speed-to-market with insurance industry relationships.

## Market & Traction

**Traction signals:**
- One named enterprise customer: Goodman-Gable-Gould (GGG), testimonial from CFO & General Counsel (inventoryquant.com).
- Free trial available; dashboard/sign-in present on website (inventoryquant.com).
- No Product Hunt launch found.
- No company Twitter/X account found.
- No company LinkedIn page found.
- No Discord/Slack community found.
- No app store presence found.
- No press coverage found.
- No public revenue or user count disclosed.

**Competitive landscape:**

| Competitor | Key Differentiator vs. InventoryQuant | Funding | Revenue/ARR |
|---|---|---|---|
| **Verisk/Xactware (XactContents)** | Industry-standard full-suite estimating platform; contents module is part of broader ecosystem (Xactimate); manual workflow but deeply embedded in insurer processes | Public company (Verisk, VRSK); acquired Xactware in 2006 (Verisk website) | ~52% of Verisk revenue from U.S. P&C solutions (Verisk 2021 10-K via search snippet); Verisk total revenue in billions |
| **Encircle** | Mobile field documentation platform for restoration contractors; contents inventory + photo/video capture but no AI transcription or automated pricing | ~$1.6M raised (Tracxn, Crunchbase via search snippet) | Revenue unknown |
| **Tractable AI** | AI visual damage assessment for auto and property exteriors; processes $7B+ in annualized repairs; does not focus on interior contents inventorying | $185M total, Series E led by SoftBank (TechCrunch, Jul 2023) | Revenue unknown; $7B+ annualized claims processed (Tractable website) |
| **Symbility (CoreLogic)** | Alternative estimating platform to Xactimate with more intuitive interface; acquired by CoreLogic | Acquired by CoreLogic | Revenue unknown |

**Why now:**
- [Inferred]: The emergence of high-accuracy multilingual speech-to-text models (e.g., OpenAI Whisper, 2022) and large language models capable of structured extraction from natural speech crossed a technical threshold enabling automated contents inventorying that was not feasible two years prior. The 99% transcription accuracy claim (inventoryquant.com) suggests reliance on these recent ASR advances.
- [Inferred]: Generative AI's ability to parse unstructured descriptions into structured item categories with replacement pricing represents a new capability that did not exist at production quality before 2023-2024.

## Founders & Team

**Sander Schulhoff** — Founder (solo)
- **Education:** BS Computer Science, University of Maryland (UMD CS Department, Feb 2024).
- **Prior ventures:**
  - Co-founder & CEO, Learn Prompting (LearnPrompting.org) — created the first prompt engineering guide on the internet (Dec 2022, pre-ChatGPT); trained 3M+ people; corporate clients include Microsoft, Deloitte, Dropbox, OpenAI (trigaten.github.io).
  - Co-founder & CEO, HackAPrompt — organized the first and largest GenAI red-teaming competition; $40K sponsorship from OpenAI, HuggingFace, Scale; 600K+ adversarial prompts collected; $100K+ in prizes distributed to 20K+ participants (trigaten.github.io).
- **Research:** Published at EMNLP, NeurIPS, ICLR, ICML. Awards include Best Theme Paper at EMNLP 2023 (youngest recipient, ~20K submissions), Spotlight Paper at NeurIPS 2025, Outstanding Paper at ICML 2024. Led 32-researcher team on "The Prompt Report," named #1 Paper of the Year by Latent Space (trigaten.github.io).
- **Prior roles:** NLP & DRL Researcher at University of Maryland; Deep RL Engineer at Semiotic Labs; Software Developer at Farama Foundation (OpenAI Gym); CV Researcher at Johns Hopkins University (trigaten.github.io).
- **Media:** Featured on Lenny's Podcast, The Cognitive Revolution, Latent Space podcast (trigaten.github.io).
- **Twitter/X:** @SanderSchulhoff — ~2,774 followers (X.com via search snippet).
- **LinkedIn:** linkedin.com/in/sander-schulhoff — "Stealth Startup," 500+ connections (LinkedIn via search snippet).
- **GitHub:** github.com/trigaten — 358 followers, 72 public repos. Pinned repos: Learn_Prompting (4.7K stars), The_Prompt_Report (385 stars), minerl (929 stars, Farama Foundation project) (GitHub).

**Co-founder relationship:** N/A — solo founder.

**Founder-market fit:** Schulhoff's background is in AI/NLP research and building AI-powered educational products, not in insurance adjusting. His technical credentials — published at top ML venues, built a 3M-user AI education platform, organized large-scale prompt hacking competitions — demonstrate strong AI product-building capability. [Inferred]: The insurance domain expertise likely comes from customer discovery rather than prior industry experience; execution risk exists in navigating insurance industry sales cycles and compliance requirements without domain co-founder or advisory board (none publicly identified).

## Key Risks

**Verisk platform risk:** Verisk announced XactAI integrating AI across their ecosystem including XactContents (Verisk website). As the incumbent used by 22 of the top 25 U.S. P&C insurers, Verisk adding AI-native contents automation could directly replicate InventoryQuant's value proposition within the existing workflow where customers already operate.

**Solo founder with no visible insurance domain expertise:** Schulhoff's documented background spans AI research, prompt engineering, and education — no public evidence of prior insurance industry experience (trigaten.github.io, LinkedIn, UMD CS). Insurance is a relationship-driven, compliance-heavy industry with long sales cycles. No advisors or board members with insurance backgrounds were identified in public sources.

**Commodity AI pipeline risk:** The core technical stack — ASR transcription, LLM-based item extraction, web price scraping — relies on generally available AI capabilities (OpenAI Whisper, GPT-class models, retail APIs). [Inferred]: A funded competitor (e.g., Tractable with $185M, or a new entrant) could replicate the technical approach; defensibility depends on execution speed, domain-specific data accumulation, and customer relationships rather than proprietary technology.

**Narrow initial wedge:** The product targets a specific sub-process (contents inventorying) within the broader claims workflow. [Inferred]: While this focus enables a sharp go-to-market, the addressable revenue per customer may be limited compared to full-suite claims platforms, potentially constraining unit economics unless the product expands into adjacent workflows.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global claims processing software: $40.84B in 2024, 8.3% CAGR (Allied Market Research via search snippet); U.S. insurance claims processing software: $12.7B in 2024 (IBISWorld via search snippet) |
| SAM | No public data found |
| Traction | 1 named enterprise customer: Goodman-Gable-Gould (inventoryquant.com) |
| Revenue Signal | No public data found |
| Founders | Sander Schulhoff (Founder): BS CS UMD; created LearnPrompting.org (3M+ users); Best Theme Paper EMNLP 2023; published NeurIPS, ICML, ICLR |
| Competitors | Verisk/XactContents (public company, industry standard), Encircle (~$1.6M raised, revenue unknown, field documentation focus), Tractable AI ($185M raised, revenue unknown, visual damage assessment), Symbility/CoreLogic (acquired, estimating platform) |
| Moat Signals | No public data found |
| Risk Factors | Verisk incumbent platform risk, solo founder without insurance domain background, commodity AI pipeline replicability |
| Founder Reach | Sander Schulhoff: Twitter/X ~2,774 followers (X.com via search snippet), LinkedIn 500+ connections (LinkedIn via search snippet), GitHub 4.7K stars on Learn_Prompting repo (GitHub) |
| Distribution Signals | No public data found |
| Emails | sander@inventoryquant.com (inventoryquant.com) |
