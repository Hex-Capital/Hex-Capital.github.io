# RunAnywhere

> The default way of running On-Device AI at Scale

| Field | Value |
|-------|-------|
| Website | https://www.runanywhere.ai/ |
| YC Page | https://www.ycombinator.com/companies/runanywhere |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | No public data found (Tracxn lists Bengaluru, India; via search snippet) |
| Tags | Artificial Intelligence, Developer Tools, IoT, Open Source, Enterprise |

## The Idea

**Problem:** Deploying AI models to run locally on end-user devices (mobile phones, edge hardware, IoT) is fragmented and operationally painful. Each device class has different runtimes, model format requirements, and memory/power constraints. Developers today must manually stitch together model conversion, downloading, storage management, and runtime execution across iOS, Android, and other platforms. Existing approaches require deep per-platform expertise. Enterprises that want to ship on-device AI at scale lack a unified control plane to manage model rollouts, enforce policies (e.g., privacy routing), and observe outcomes across heterogeneous fleets.

**Approach:** RunAnywhere provides two layers: (1) an open-source SDK (Apache 2.0) offering a single API to run LLMs, speech-to-text, text-to-speech, and vision models on-device across iOS (Swift), Android (Kotlin/KMP), React Native, Flutter, and web browsers, supporting formats including GGUF, ONNX, CoreML, and MLX (runanywhere.ai); and (2) a commercial control plane for OTA model delivery, policy-based routing (rules that decide per-request whether to execute locally or fall back to cloud based on device conditions like temperature, hardware age, or confidence thresholds), A/B testing, and fleet-wide analytics (runanywhere.ai). The SDK handles model downloading with resume support, extraction, and storage management with a few lines of code (YC company page).

**Differentiation:** RunAnywhere positions itself as "Ollama but for mobile, with a cloud fallback" (Product Hunt, August 2025). Versus ExecuTorch (Meta), which is PyTorch-native and requires model export/conversion, RunAnywhere is runtime-agnostic and supports multiple model formats natively. Versus Nexa AI, which also targets on-device inference, RunAnywhere adds enterprise fleet management via the control plane layer. Versus MediaPipe (Google), which focuses on pre-built ML tasks (vision, audio, text), RunAnywhere targets general-purpose LLM and multimodal model deployment. Versus llama.cpp, which is a low-level C++ inference engine, RunAnywhere wraps higher-level SDK abstractions with cross-platform support and adds the operational control plane.

**Business Model:** The open-source SDK is free (runanywhere.ai). No public pricing page for the commercial control plane was found at time of research. [Inferred]: Most likely monetization path is a usage-based or tiered SaaS model on the control plane (model management, policy routing, analytics, OTA updates), following the open-core pattern common in developer infrastructure (free SDK, paid management layer).

**TAM/SAM:** The global edge AI software market was estimated at $1.95 billion in 2024 and is projected to reach $8.91 billion by 2030 at a 29.2% CAGR (Grand View Research, 2025). The broader edge AI market was valued at $20.97 billion in 2024 with projected growth to ~$90.77 billion by 2032 at 20.1% CAGR (Grand View Research, 2025). The on-device AI market specifically is covered by Grand View Research with the hardware segment accounting for 56.6% revenue share in 2025, implying the software portion is roughly 43.4% of the total (Grand View Research, 2025). No SAM estimate specific to on-device AI SDK/control-plane tooling was found.

**GTM / Distribution:** The primary distribution mechanism is the open-source SDK on GitHub, which has accumulated 9,000 stars (GitHub, as of research date). Demo apps are available on the Apple App Store and Google Play Store (YC company page). The company launched on Product Hunt in August 2025 with 128 upvotes (Product Hunt, August 2025 via search snippet). A Discord community exists for developer engagement (runanywhere.ai). [Inferred]: The GTM motion is developer-led bottom-up adoption through the open-source SDK, converting to paid enterprise customers via the control plane as teams scale deployments across device fleets.

## Defensibility

The primary defensibility signal today is the open-source community traction: 9,000 GitHub stars, 267 forks, and 1,663 commits on the SDK repo (GitHub). The Apache 2.0 license encourages adoption and creates a developer ecosystem around the toolchain. The control plane layer, once adopted for fleet management, creates switching costs through operational dependencies (model delivery pipelines, policy configurations, analytics integrations).

[Inferred]: Over time, a data advantage could develop if the control plane aggregates anonymized telemetry across device types, model configurations, and performance profiles, enabling RunAnywhere to offer better default optimization recommendations. Network effects are limited at this stage.

**Market structure:** ExecuTorch (Meta) is tied to the PyTorch ecosystem and requires model export/conversion workflows. MediaPipe (Google) is optimized for Google's own model ecosystem. Both are open-source tools from platform companies whose primary incentive is to drive adoption of their respective ML frameworks and hardware, not to build a commercial on-device model management SaaS. [Inferred]: The structural barrier for these incumbents is business model misalignment — Meta and Google monetize through advertising and cloud services, making a paid on-device control plane product a low priority that could cannibalize cloud inference revenue. However, this barrier is soft and could erode if on-device AI becomes critical enough for these incumbents to prioritize.

**Commoditization risk:** The individual components — local model inference, model downloading, OTA updates — are technically reproducible. llama.cpp already handles CPU inference efficiently. ExecuTorch provides a production-grade runtime. Any well-funded DevTools company could build the control plane layer. The risk is mitigated if RunAnywhere builds a large enough developer community and enterprise customer base before alternatives emerge. The breadth of platform coverage (iOS, Android, React Native, Flutter, web, edge, wearables) creates integration surface area that is time-consuming to replicate.

## Market & Traction

**Traction signals:**
- GitHub: 9,000 stars, 267 forks, 1,663 commits, 28 open issues, 12 pull requests on RunanywhereAI/runanywhere-sdks (GitHub, as of research date)
- Product Hunt: Launched August 13, 2025, 128 upvotes, tagged as "Ollama but for mobile, with a cloud fallback" (Product Hunt via search snippet)
- App Store presence: Demo apps available on Apple App Store and Google Play Store (YC company page)
- Twitter/X: @RunAnywhereAI, joined July 2025, follower count not retrievable
- LinkedIn: Company page exists as "RunAnywhere (YC W26)" (LinkedIn via search snippet)
- Discord: Community exists; member count not publicly available
- Y Combinator: Featured by YC on LinkedIn (LinkedIn post by Y Combinator, via search snippet)
- YC Partner: Diana Hu (YC company page)
- Funding: Tracxn reports a seed round on September 25, 2025 with $10K total funding listed (Tracxn via search snippet); this likely predates the YC standard deal
- No public revenue data found

**Competitive landscape:**

1. **ExecuTorch (Meta/PyTorch)** — Open-source, production-grade on-device inference framework. 50KB base footprint, 12+ hardware backends. Powers Meta's apps (Instagram, WhatsApp, Quest 3, Ray-Ban Smart Glasses) serving billions of users. Free/open-source. Key differentiator vs. RunAnywhere: deeply integrated with PyTorch ecosystem and backed by Meta's engineering resources, but lacks a commercial control plane for third-party fleet management. (GitHub: pytorch/executorch)

2. **Nexa AI** — On-device AI platform supporting LLMs, multimodal, ASR, TTS across mobile, PC, automotive, IoT. Raised $8.75M (Crunchbase via search snippet; PitchBook reports $16.5M via search snippet). Revenue: $3.4M as of June 2025 (Latka via search snippet). 31-person team (Latka via search snippet). Founded 2023, based in Cupertino. Key differentiator vs. RunAnywhere: more mature with established revenue, larger team, and broader device category coverage including automotive; RunAnywhere offers the control plane/fleet management layer that Nexa lacks.

3. **MediaPipe (Google AI Edge)** — Cross-platform ML solutions framework for live and streaming media, with on-device LLM inference API supporting Gemma, Phi 2, Falcon, and Stable LM. Covers web, Android, iOS. Free/open-source. Key differentiator vs. RunAnywhere: backed by Google with deep hardware integration (Coral, TPU), but oriented toward pre-built ML tasks rather than general-purpose LLM deployment and fleet management.

4. **llama.cpp** — Open-source C/C++ LLM inference engine focused on CPU-first execution. Widely adopted as a low-level inference backend. Key differentiator vs. RunAnywhere: purely an inference runtime with no SDK abstractions, no mobile-native wrappers, and no control plane. RunAnywhere could be seen as a higher-level layer that could use llama.cpp under the hood.

5. **MLX (Apple)** — Apple's open-source ML framework optimized for Apple Silicon. Key differentiator vs. RunAnywhere: Apple-ecosystem only; no Android, web, or cross-platform support. No fleet management capabilities.

**Why now:** [Inferred]: Several converging factors in 2024-2025 created the opening: (1) On-device capable LLMs reached viable quality at small parameter counts (e.g., Llama 3.2 1B/3B, Phi-3 mini, Gemma 2B), crossing a quality threshold that makes local inference useful for production applications; (2) Apple (A17 Pro, M-series), Qualcomm (Snapdragon 8 Gen 3), and MediaTek shipped NPUs/neural engines with sufficient TOPS for real-time LLM inference on consumer devices; (3) Privacy regulations (EU AI Act, data residency requirements) created compliance pressure to process data locally rather than sending it to cloud APIs; (4) Cloud API costs for LLM inference remain high at scale, creating economic incentive for on-device alternatives, particularly for high-volume mobile applications.

## Founders & Team

**Sanchit Monga** — Co-founder
- BS, Rochester Institute of Technology (ZoomInfo, Crunchbase via search snippet)
- Previously: Software Engineer 2 at Intuit (ZoomInfo via search snippet); also held roles at Revyl, Apptrail, Prepend, Placemate, SandBox Union (Crunchbase via search snippet)
- Twitter/X: @sanchitmonga22 — follower count not retrievable
- LinkedIn: linkedin.com/in/sanchitmonga22/ — RunAnywhere (YC W26)
- GitHub: github.com/sanchitmonga22 — 35 repositories (GitHub via search snippet); also maintainer of RunanywhereAI org

**Shubham Malhotra** — Co-founder
- BS Software Engineering, Rochester Institute of Technology (LinkedIn via search snippet)
- Previously: Software engineer with experience at AWS; specializes in distributed systems, platform engineering, and cloud infrastructure (LinkedIn via search snippet). Has written about RunAnywhere SDKs on Medium (Medium, @malhotrashubham)
- Twitter/X: @ShubhamMal72313 — follower count not retrievable
- LinkedIn: linkedin.com/in/shubham-malhotra-fg890a23a/ — RunAnywhere (YC W26)
- GitHub: github.com/shubhammalhotra28 — personal GitHub page exists (GitHub via search snippet)

Note: A separate individual also named Shubham Malhotra appears in search results as a software engineer at Amazon (previously Microsoft, Salesforce), also from RIT. Given the common name and shared alma mater, some search results may conflate these individuals. The data above is attributed based on the LinkedIn profile directly linked from RunAnywhere's YC page.

**Co-founder relationship:** Both Sanchit Monga and Shubham Malhotra attended Rochester Institute of Technology, indicating a shared university background.

**Founder-market fit:** Both founders have software engineering backgrounds with infrastructure experience. Sanchit's time at Intuit (a company shipping mobile-first consumer products) provides context for understanding mobile SDK developer needs. Shubham's distributed systems and cloud infrastructure expertise at AWS is directly relevant to building the control plane and hybrid routing architecture. Their shared RIT background and focus on systems engineering align with the deeply technical challenge of cross-platform on-device model deployment. No public data on advisors, board members, or notable investors beyond YC was found.

## Key Risks

**Big-tech platform overlap:** Meta's ExecuTorch reached 1.0 GA in October 2025 and powers on-device AI for billions of Meta users. Google's MediaPipe offers LLM inference APIs. Apple's MLX targets Apple Silicon. If any of these incumbents extends their open-source tooling to include fleet management or policy routing — particularly Apple, which controls the iOS runtime — RunAnywhere's differentiation narrows. Mitigation: RunAnywhere's cross-platform and runtime-agnostic positioning means it is not tied to any single vendor ecosystem.

**Nexa AI's head start:** Nexa AI has raised $8.75M–$16.5M (source discrepancy across Crunchbase and PitchBook via search snippets), employs 31 people, and reports $3.4M revenue as of June 2025 (Latka via search snippet). This represents a funded, revenue-generating competitor in the same on-device AI SDK space with a ~2-year head start (founded 2023 vs. 2025). Mitigation: RunAnywhere's control plane layer and open-source community traction (9K GitHub stars) provide a different wedge.

**GitHub star inflation vs. conversion:** The 9,000 GitHub stars represent strong developer awareness, but conversion from open-source SDK users to paying control plane customers is unproven. Many open-source DevTools companies struggle with this conversion (e.g., the well-documented open-core monetization challenge). No revenue or paying customer data is publicly available.

**Two-person team scaling risk for enterprise sales:** The company's value proposition includes an "enterprise-ready" control plane, but enterprise sales cycles typically require dedicated sales, solutions engineering, and support capacity. With a two-person team and no current hiring, servicing enterprise customer demands may be constrained. Note: this is distinct from "small team" as a generic risk — it specifically relates to the mismatch between enterprise positioning and current capacity.

**Brand disambiguation:** The name "RunAnywhere" is a common English phrase used across technology (e.g., Java's "write once, run anywhere"). Search results return noise from unrelated uses. This may complicate SEO, brand recognition, and trademark defensibility.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.95B edge AI software market in 2024, projected $8.91B by 2030 at 29.2% CAGR (Grand View Research, 2025); broader edge AI market $20.97B in 2024 (Grand View Research, 2025) |
| SAM | No public data found |
| Traction | 9,000 GitHub stars, 267 forks (GitHub); 128 Product Hunt upvotes (Product Hunt, Aug 2025); demo apps on App Store and Play Store (YC page); Discord community (runanywhere.ai) |
| Revenue Signal | No public data found |
| Founders | Sanchit Monga (Co-founder): RIT, ex-Intuit SWE 2. Shubham Malhotra (Co-founder): RIT BS Software Engineering, ex-AWS, distributed systems |
| Competitors | ExecuTorch/Meta (open-source, free, PyTorch-native, no commercial control plane); Nexa AI ($8.75M–$16.5M raised, $3.4M revenue Jun 2025, broader device coverage but no fleet management); MediaPipe/Google (open-source, pre-built ML tasks, no commercial control plane); llama.cpp (open-source inference runtime, no SDK layer); MLX/Apple (Apple-only, no cross-platform) |
| Moat Signals | 9,000 GitHub stars on open-source SDK (GitHub); Apache 2.0 license encouraging ecosystem adoption; control plane creates switching costs once integrated |
| Risk Factors | Big-tech platform overlap (ExecuTorch, MediaPipe, MLX), funded competitor with revenue (Nexa AI $3.4M), open-core conversion uncertainty |
| Founder Reach | Sanchit Monga: Twitter @sanchitmonga22 (count not retrievable), LinkedIn linkedin.com/in/sanchitmonga22/, GitHub 35 repos. Shubham Malhotra: Twitter @ShubhamMal72313 (count not retrievable), LinkedIn linkedin.com/in/shubham-malhotra-fg890a23a/, GitHub shubhammalhotra28 |
| Distribution Signals | Product Hunt launch Aug 2025 (128 upvotes); 9,000 GitHub stars; App Store + Play Store demo apps; Discord community; YC LinkedIn feature post |
