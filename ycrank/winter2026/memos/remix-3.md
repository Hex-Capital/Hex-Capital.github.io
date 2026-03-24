# Remix

> Social media content auto-generated with your existing data

| Field | Value |
|-------|-------|
| Website | https://remix.re |
| YC Page | https://www.ycombinator.com/companies/remix-3 |
| Batch | Winter 2026 |
| Industry | Consumer / Consumer |
| Team Size | 0 |
| Location | San Francisco, CA (LinkedIn) |
| Tags | |
| YC Partner | Jared Friedman |
| Emails | founders@remix.re |

## The Idea

**Problem:** Content creators, professionals, and small businesses must produce a high volume of social media content across multiple formats (tweets, carousels, short-form videos, articles). Today this requires using multiple tools (Canva for visuals, a copywriting tool for text, a video editor for clips) or hiring help. The bottleneck is not ideation but production — turning ideas into polished, multi-format output.

**Approach:** Users record a voice note or drop in photos/messages, and Remix simultaneously deploys multiple parallel AI agents (described as 10 agents on the website) to produce different content formats at once — videos, images, articles, and transcripts. The system includes content versioning ("fork, iterate, restore") and a chat interface to refine outputs with individual agents (remix.re). The company describes itself as "the first consumer application bringing Claude Code to consumers" (YC page). The iOS app is titled "Remix - Passive Content" and is published by Resonate Software Inc. (Apple App Store).

**Differentiation:** Most AI content tools (Jasper, Copy.ai, Predis.ai) use a single-prompt, single-output paradigm — the user types a prompt and receives one piece of content. Remix differentiates via: (1) voice-first input rather than text prompts, (2) simultaneous multi-format output from a single input, and (3) a multi-agent architecture that parallelizes production. [Inferred]: The voice-first approach lowers the friction of content creation below what text-prompt tools offer, targeting users who find even prompt-writing burdensome.

**Business Model:** No pricing page or monetization information was found on remix.re or in any public source. The iOS app is listed as "Free" (Apple App Store). [Inferred]: Most likely monetization path is a freemium model with usage-based tiers (limited free generations, paid subscription for higher volume or premium formats), consistent with consumer AI app norms.

**TAM/SAM:**
- AI-powered content creation market: $2.56B–$3.54B in 2025, projected $8.31B–$10.59B by 2030–2033, CAGR 19.4%–21.9% (The Business Research Company, 2025; SNS Insider, 2025; Custom Market Insights, 2025 — all via search snippet).
- AI in social media market: $3.42B in 2026, projected $11.37B by 2031, 27.15% CAGR (Mordor Intelligence via search snippet).
- No SAM estimate specific to voice-first multi-format content generation found.

**GTM / Distribution:** The product is available as a free iOS app (Apple App Store). The YC page states users can "download the app and we'll instantly generate content from your LinkedIn and Twitter," suggesting a try-before-you-commit onboarding flow that pulls existing social data. [Inferred]: Primary distribution is likely organic/viral via app store discovery and content sharing, supplemented by YC network and founder's personal channels.

## Defensibility

- **Data advantage (potential):** By connecting to users' existing social accounts and learning their style, Remix could build personalized content models that improve over time. This creates switching costs as the system accumulates style preferences. No evidence this moat exists today.
- **Multi-agent architecture:** The parallel agent orchestration is a technical implementation choice, not a durable moat — the underlying LLM capabilities are available to competitors.

[Inferred]: Potential moat could develop via accumulated user style data and content history creating switching costs, but this is unproven at this stage.

**Market structure:** No structural barrier identified at this stage. Large incumbents (Canva, HubSpot, Hootsuite) have begun adding AI content features. [Inferred]: The structural opening is that incumbents' AI features are add-ons to existing workflows rather than voice-first reimaginations, but there is no business model cannibalization or regulatory barrier preventing them from replicating this approach.

**Commoditization risk:** The core capability (LLM-powered content generation) is widely available via API. Jasper ($131M raised), Copy.ai (acquired by Fullcast, Oct 2025), Predis.ai, Ocoya, FeedHive, and others all offer AI content generation. The voice-first multi-agent UX is differentiating but not technically defensible. Any well-funded competitor could replicate the parallel-agent approach.

## Market & Traction

**Traction signals:**
- iOS app "Remix - Passive Content" by Resonate Software Inc.: 5.0/5.0 rating with 1 rating (Apple App Store, as of research date)
- No Android app found
- Founder Twitter/X: @samrkaplan — follower count not retrievable (X blocks scraping)
- No company Twitter/X account confirmed (note: @getremixai with 11.1K followers belongs to a different company, remixai.io)
- No LinkedIn company page found for Remix; founder's LinkedIn lists "Resonate (YC W26)"
- No Product Hunt launch confirmed for remix.re (a Product Hunt page for "remix-6" exists but appears to be a different Remix AI product)
- No press coverage found specific to remix.re
- No Discord/Slack community found
- 0 job postings on YC jobs board
- YC Tier List (community rating) rated Resonate/Remix as C Tier, citing no visible traction data (yctierlist.com)

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Remix |
|---|---|---|---|
| Jasper AI | ~$131M ($125M Series A at $1.5B valuation) | $88M (2025); 70K+ paying customers (sqmagazine.co.uk, 2025 via search snippet) | Enterprise-focused with team collaboration; text-prompt paradigm, not voice-first |
| Copy.ai | ~$17–20M (acquired by Fullcast, Oct 2025) | $23.7M (2024) (getlatka.com via search snippet) | GTM/sales workflow automation, not consumer content creation |
| Lately AI | $6.77M | Not disclosed | Social content repurposing from long-form; enterprise sales motion |
| Predis.ai | $155K seed | Not disclosed | Visual-first social media post generator with scheduling; text-prompt input |
| Ocoya | $66.5K | $726K (2024, 3-person team) (getlatka.com via search snippet) | Content marketing + scheduling platform; broader workflow tool |

**Why now:** [Inferred]: Two catalysts: (1) Multi-modal LLM capabilities (voice-to-text, text-to-image, text-to-video) reached consumer-grade quality in 2024–2025, enabling a single voice input to produce multiple content formats reliably. (2) AI agent orchestration frameworks matured sufficiently to run parallel agents in consumer applications, making the "10 agents simultaneously" architecture feasible at low latency and cost.

## Founders & Team

**Sam Kaplan** — Solo Founder
- A.B. Computer Science, Harvard College (2014–2018) (LinkedIn, samkaplan.me)
- Engineering Manager at Brex (2019–2022): helped scale from 80 employees / $1.3B valuation to 1,000 employees / $12B valuation (YC page, LinkedIn)
- Founding Engineer at New Computer, 5th employee (Dec 2023 – Jan 2024, ~2 months) (LinkedIn)
- Head of Engineering at DEV (2018) (LinkedIn)
- SWE Intern at Facebook (Summer 2017) (LinkedIn)
- Building with LLMs since GPT-3 beta, predating ChatGPT launch (YC page)
- Built ~15 short films/videos; international experience in India, Korea, France (samkaplan.me)
- Prior to Remix, explored multiple ideas including GPTTok and ChatSF (LinkedIn)
- Twitter/X: @samrkaplan — follower count not retrievable
- LinkedIn: linkedin.com/in/samrkaplan — "Resonate (YC W26)"
- GitHub: github.com/skaplan — 22 public repos, 11 followers; pinned repos include `alexpareto/victor` (4 stars), `notary-public` (1 star); Arctic Code Vault Contributor (GitHub)

**Co-founder relationship:** N/A — solo founder.

**Founder-market fit:** Kaplan has engineering management experience at a high-growth fintech (Brex), consumer product sensibility from personal filmmaking projects, and early LLM experience since GPT-3 beta. His exploration period (GPTTok, ChatSF) demonstrates iteration on consumer AI ideas before converging on Remix. [Inferred]: The gap is go-to-market and design experience — his background is engineering-heavy with no visible marketing, growth, or content-industry credentials.

## Key Risks

**Name collision / brand confusion:** Multiple other products use the name "Remix" — Remix.run (React framework), Remix AI (remixai.io, image generation with 11.1K Twitter followers), and Discord's Remix feature. This creates SEO competition, user confusion, and potential trademark conflicts. The remix.re domain partially mitigates this.

**Solo founder with pivot history:** The parent entity Resonate Software Inc. also publishes "Resonate Chat - Voice Messages" (Apple App Store, 7 ratings), and the YC page describes a broader "Resonate" product. The relationship between Remix, Resonate Chat, and "Resonate Create" (resonatecreate.com) suggests product exploration rather than focused execution. The YC Tier List noted "vague pivot language suggesting lack of focus" (yctierlist.com).

**Incumbent feature absorption:** Canva, HubSpot ("Content Remix" feature), Hootsuite, and Sprout Social are all adding AI content generation to existing platforms with large installed bases. These incumbents have distribution advantages and existing user workflows that Remix must displace.

**Crowded and consolidating market:** The AI content generation space saw Copy.ai acquired (Oct 2025) and Jasper's revenue decline from $120M peak (2023) to $55M (2024) before recovering to $88M (2025) (sqmagazine.co.uk via search snippet), suggesting market turbulence and possible demand ceiling post-ChatGPT commoditization of text generation.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.56B–$3.54B in 2025, 19.4%–21.9% CAGR (The Business Research Company, 2025; SNS Insider, 2025 via search snippet) |
| SAM | No public data found |
| Traction | iOS app: 1 rating, 5.0/5.0 (Apple App Store); 0 job postings (YC jobs board) |
| Revenue Signal | No public data found |
| Founders | Sam Kaplan (Solo Founder): Harvard CS, Brex Engineering Manager (scaled $1.3B→$12B), LLM builder since GPT-3 beta |
| Competitors | Jasper AI ($131M raised, $88M revenue 2025, enterprise text-prompt focus); Copy.ai (~$17–20M raised, $23.7M revenue 2024, acquired by Fullcast Oct 2025, GTM workflow); Lately AI ($6.77M raised, revenue unknown, enterprise social repurposing); Predis.ai ($155K raised, revenue unknown, visual-first social posts); Ocoya ($66.5K raised, $726K revenue 2024, scheduling + content) |
| Moat Signals | No public data found |
| Risk Factors | Brand name collision with multiple "Remix" products, solo founder with multi-product pivot history, incumbent feature absorption from Canva/HubSpot/Hootsuite |
| Founder Reach | Sam Kaplan: Twitter @samrkaplan (count not retrievable), LinkedIn linkedin.com/in/samrkaplan, GitHub github.com/skaplan (22 repos, 11 followers) |
| Distribution Signals | iOS app "Remix - Passive Content" listed free (Apple App Store); no confirmed Product Hunt launch; no company social accounts found |
| Emails | founders@remix.re (YC page) |
