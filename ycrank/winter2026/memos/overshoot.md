# Overshoot

> Enable developers to build and run AI vision applications

| Field | Value |
|-------|-------|
| Website | https://overshoot.ai |
| YC Page | https://www.ycombinator.com/companies/overshoot |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Computer Vision, Infrastructure, AI |
| YC Partner | Jon Xu |
| Emails | No public data found |

## The Idea

**Problem:** Developers building real-time AI vision applications — in domains such as physical security, safety, gaming, robotics, and consumer products — face slow inference, limited model availability, and infrastructure that breaks at scale. Existing inference platforms are not optimized for the image/video modality, resulting in latency and complexity that prevents real-time use cases. Current alternatives include general-purpose inference providers (Fireworks AI, Together AI, Groq) or computer vision platforms (Roboflow, Clarifai) that were built for traditional CV rather than Vision Language Models (VLMs).

**Approach:** Overshoot provides an API that lets developers connect live video feeds to a collection of Vision Language Models with minimal code (described as "3 lines of code" on the YC page). The platform delivers responses in under 200ms — claimed to be 10x faster than existing inference platforms (YC company page). The SDK (available on npm as `overshoot`) supports multiple video input sources: camera feeds, video file uploads, screen capture, and LiveKit streaming integration (GitHub, Overshoot-ai/overshoot-js-sdk). It offers two processing modes: Clip Mode for analyzing short video segments with motion/temporal analysis, and Frame Mode for processing individual frames. Supported models include Qwen vision models and InternVL3_5 (GitHub SDK README).

**Differentiation:** Unlike general-purpose inference providers (Fireworks AI, Together AI), Overshoot is purpose-built for the image and video modality. The company claims its focus on codec, streaming protocols, and inference engines specific to video allows technical advantages that general platforms cannot match (YC company description). Unlike traditional CV platforms (Roboflow, Clarifai) that focus on model training and custom model deployment, Overshoot focuses on serving pre-trained VLMs with low-latency inference on live video streams.

**Business Model:** No public pricing page was accessible at time of research (website rendered via Framer with JavaScript, content not extractable). The SDK defaults to `https://api.overshoot.ai/v0.2` as its API endpoint and mentions support for "private deployments" (GitHub SDK README). [Inferred]: Most likely monetization path is usage-based API pricing (per-inference or per-minute of video processed), consistent with inference platform industry norms.

**TAM/SAM:** The global computer vision market was valued at approximately $20.75 billion in 2025 (Fortune Business Insights, 2025 via search snippet). The broader AI in computer vision market is projected to grow from $30.22 billion in 2025 to $330.42 billion by 2034 at a 30.58% CAGR (Precedence Research, 2025 via search snippet). The software segment accounted for approximately 67.43% of revenue share in 2025 (Grand View Research, 2025 via search snippet). No public SAM estimate specific to the real-time VLM inference sub-segment was found.

**GTM / Distribution:** The company's first public launch was an exclusive release to hackers at NexHacks (Zakaria El Hjouji LinkedIn post). Y Combinator promoted the company on X, directing developers to a playground at the company's website (YC X post). The SDK is distributed via npm (`npm install overshoot`). [Inferred]: Primary distribution is developer-led, bottom-up adoption through the API and SDK, targeting hackathon participants and individual developers building vision applications.

## Defensibility

The company claims its moat is "focus" — that image and video are fundamentally different modalities from text, and by focusing exclusively on them, the team can make "strong technical leaps from codec, streaming protocols to inference engines" (YC company description). The SDK supports proprietary features including configurable inference frequency, structured JSON output, real-time latency reporting, and model health status checking (GitHub SDK README).

**Market structure:** General-purpose inference providers (Fireworks AI, Together AI, Groq) optimize primarily for text-based LLM inference. Building specialized video streaming and codec infrastructure would require these providers to invest in a niche that represents a small fraction of their inference volume. Traditional CV platforms (Roboflow, Clarifai) are oriented toward model training and deployment of custom models rather than low-latency VLM serving. However, as VLM usage grows, both categories of incumbents could add video-specific optimizations. No structural barrier identified at this stage beyond the focus and specialization argument.

**Commoditization risk:** The core VLMs served (Qwen, InternVL) are open-source models available to any provider. General-purpose inference platforms could add video-specific optimizations. The differentiation rests on the streaming/codec/inference optimization layer, which is a technical advantage but not protected by patents or network effects based on public information.

## Market & Traction

1. **Traction signals:**
   - 300+ developers using the platform (YC company page, as of W26 batch application)
   - Sub-200ms response time claimed (YC company page)
   - Y Combinator promoted Overshoot on X (YC @ycombinator post, undated — tweet ID 2021981371808522497)
   - First public launch at NexHacks hackathon, opening the real-time vision API to hackers (Zakaria El Hjouji LinkedIn post, 12 comments)
   - GitHub SDK: 14 stars, 5 forks, 54 commits (GitHub, Overshoot-ai/overshoot-js-sdk)
   - npm package: `overshoot` (npm registry)
   - LinkedIn company page: https://www.linkedin.com/company/overshootai (follower count not retrievable)
   - No Product Hunt listing found
   - No Discord or Slack community found
   - No press coverage in named publications found
   - Website not fully accessible at time of research (Framer-built, JavaScript-rendered)

2. **Competitive landscape:**
   - **Roboflow** ($63.6M raised; $40M Series B led by GV, Nov 2024; $9.6M revenue in 2024 via Latka): End-to-end computer vision platform focused on model training, data labeling, and deployment of custom CV models. Differs from Overshoot by focusing on traditional CV workflows rather than real-time VLM inference on live video.
   - **Clarifai** ($101M raised; $60M Series C, Oct 2021; $16.2M revenue in 2024 via Latka): Full-stack AI platform for image, video, text, and audio. Broader scope than Overshoot, with enterprise-oriented model management and training rather than developer-focused low-latency VLM serving.
   - **Fireworks AI** ($331M raised; $250M Series C, Oct 2025; revenue unknown): General-purpose AI inference platform supporting text, image, audio, and multimodal models. Offers vision model inference but not purpose-built for real-time video streaming use cases.
   - **Together AI** ($554M raised; $305M Series B led by General Catalyst, Feb 2025; $50M revenue in 2024 via Latka): AI inference cloud with 200+ models. Competes on inference speed and cost but is optimized for text-heavy workloads rather than live video.

3. **Why now:** Vision Language Models (VLMs) such as Qwen and InternVL have reached a capability threshold where they can provide general intelligence over video and image inputs, replacing traditional computer vision approaches that required task-specific model training. The YC company description notes that Younes "witnessed firsthand customers abandoning traditional Computer Vision because it lacked the 'general' intelligence LLMs have today." [Inferred]: The convergence of capable open-source VLMs (2024-2025), decreasing inference costs, and the maturation of WebRTC/streaming protocols has created a window where real-time video understanding via VLMs is newly feasible for developer applications.

## Founders & Team

**Zakaria El Hjouji** — Co-founder
- Education: BSc Mathematics, London School of Economics (top of class); MIT graduate (ResearchGate, LinkedIn)
- Career: 7 years at Uber building pricing algorithms including surge pricing systems; Meta AI writing GPU kernels for inference engines; prior roles at Swiss Re and Millennium Management (YC page, LinkedIn, search results)
- Previously built and sold a software product; won several prominent AI hackathons (YC company description)
- Twitter/X: @zakariaornot (YC page); also @zakariaelhjouji found in search results. Follower count not retrievable.
- LinkedIn: linkedin.com/in/zakariaelhjouji — headline references Uber (LinkedIn)
- GitHub: github.com/zakariaelh — 6 public repos, 18 stars total, 13 followers. Notable repos: goldendj (4 stars), smplr (2 stars) (GitHub)
- Also publishes on Substack ("Chronicles and Meditations") and Medium

**Younes El Hjouji** — Co-founder
- Career: Founding engineer at Cosmonio (later acquired by Intel), where he built a training and serving Computer Vision platform from scratch (YC company description, LinkedIn)
- Former Intel Computer Vision AI Frameworks Engineer (YC page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/younes-el-hjouji-2710b1139 — headline references Overshoot (YC W26) (LinkedIn)
- GitHub: github.com/younesintel — 1 forked repo (training_extensions from open-edge-platform), 0 stars (GitHub)
- Personal website: younes.elhjouji.com

**Co-founder relationship:** Zakaria and Younes are cousins (YC company description). Younes worked at Cosmonio/Intel on computer vision; Zakaria worked at Uber and Meta on low-latency systems and inference engines. Their complementary expertise — Younes in CV platform engineering and Zakaria in low-latency inference — directly maps to the Overshoot product.

**Founder-market fit:** Zakaria's experience building surge pricing systems at Uber (low-latency, high-throughput) and GPU inference kernels at Meta directly applies to building a fast inference platform. Younes's experience building a computer vision training and serving platform at Cosmonio (pre-Intel acquisition) provides domain expertise in the CV tooling space. Together, they have built large-scale systems at the intersection of computer vision and low-latency infrastructure. Zakaria's prior software product exit and AI hackathon wins indicate execution ability and product-building experience.

## Key Risks

**VLM provider dependency:** Overshoot serves open-source VLMs (Qwen, InternVL) that it does not control. If these model providers release their own optimized inference endpoints or if a dominant VLM emerges with a proprietary serving layer, Overshoot's model offering could be constrained or commoditized. Mitigation: the company positions its differentiation as the streaming/codec/inference layer rather than model access.

**Well-funded inference incumbents:** Fireworks AI ($331M raised), Together AI ($554M raised), and other general-purpose inference platforms could add video-specific optimizations as VLM usage grows. These companies have significantly more capital and existing developer relationships. Overshoot's <200ms latency claim is its key differentiator, but latency advantages can erode as incumbents invest.

**Brand disambiguation:** Multiple unrelated entities use the "Overshoot" name, including a Mumbai-based company with a LinkedIn presence (linkedin.com/company/overshootmumbai), "Earth Overshoot Day" organizations, and unrelated GitHub projects. This creates potential confusion in search results and brand recognition.

**Narrow modality focus at early scale:** The company's moat thesis depends on image/video remaining a sufficiently distinct modality to justify a specialized platform. If general-purpose inference platforms converge on multimodal optimization (text + image + video + audio unified), the rationale for a video-only platform weakens. The current developer base of 300+ is early, and the specialization bet has not been validated at significant scale.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global computer vision market ~$20.75B in 2025 (Fortune Business Insights via search snippet); AI in CV market $30.22B in 2025 growing to $330.42B by 2034 at 30.58% CAGR (Precedence Research via search snippet) |
| SAM | No public data found for real-time VLM inference sub-segment |
| Traction | 300+ developers (YC company page); 14 GitHub stars on JS SDK (GitHub); YC promotional tweet (X); NexHacks hackathon launch (LinkedIn) |
| Revenue Signal | No public data found |
| Founders | Zakaria El Hjouji: MIT, LSE, 7 yrs Uber (surge pricing), Meta AI (GPU kernels), prior software exit. Younes El Hjouji: Founding engineer Cosmonio (acquired by Intel), CV platform builder. |
| Competitors | Roboflow ($63.6M raised, $9.6M revenue 2024 via Latka, CV model training focus); Clarifai ($101M raised, $16.2M revenue 2024 via Latka, full-stack AI platform); Fireworks AI ($331M raised, revenue unknown, general inference); Together AI ($554M raised, $50M revenue 2024 via Latka, general inference) |
| Moat Signals | Specialization in video/image modality; proprietary streaming/codec/inference optimizations; sub-200ms latency claim (YC page) |
| Risk Factors | Well-funded inference incumbents, VLM provider dependency, brand disambiguation |
| Founder Reach | Zakaria: Twitter @zakariaornot (count not retrievable), LinkedIn linkedin.com/in/zakariaelhjouji, GitHub 18 stars. Younes: No Twitter found, LinkedIn linkedin.com/in/younes-el-hjouji-2710b1139, GitHub 0 stars. |
| Distribution Signals | npm package "overshoot"; GitHub SDK (14 stars, 5 forks); YC X promotional post; NexHacks hackathon launch (LinkedIn). No Product Hunt listing found. |
| Emails | No public data found |
