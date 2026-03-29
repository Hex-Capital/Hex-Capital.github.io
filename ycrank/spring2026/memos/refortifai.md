# RefortifAI

> Secure Deployment & DRM for AI model providers

| Field | Value |
|-------|-------|
| Website | https://refortif.ai |
| YC Page | https://www.ycombinator.com/companies/refortifai |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Security |
| YC Partner | Nicolas Dessaigne |
| Emails | No public data found |

## The Idea

**Problem:** AI model providers distributing models to on-premise, edge, or partner environments face the risk of model weight extraction, architecture cloning, and unauthorized redistribution (YC company page). Current approaches include API-only deployment (which limits use cases requiring local inference) or legal agreements (which are unenforceable technically). Thales describes multi-faceted protection combining licensing, encryption, and software protection tools as necessary but complex to implement (Thales blog). The customer segment is AI companies that sell or license models for deployment outside their own infrastructure.

**Approach:** RefortifAI obfuscates model weights so they execute only inside a hardened runtime environment, functioning as a drop-in replacement for existing inference engines including vLLM and SGLang (YC company page). The website tagline describes the product as "Anti-cheat for AI Models" (refortif.ai via search snippet). The company frames its value as: "Mangle your weights, license your runtime, and enforce your IP wherever your models run" (refortif.ai via search snippet). [Inferred]: The "anti-cheat" framing suggests runtime integrity verification analogous to game anti-tamper systems, where the runtime detects and prevents attempts to dump or intercept weights during inference.

**Differentiation:**
- vs. Edgeless Systems: Edgeless uses hardware-based Trusted Execution Environments (TEEs) for confidential computing, requiring specific hardware support (Edgeless Systems website). RefortifAI claims hardware-agnostic protection (refortif.ai via search snippet).
- vs. Thales Sentinel: Thales offers general software DRM/licensing tooling not purpose-built for AI inference engines (Thales blog). RefortifAI is a drop-in replacement for AI-specific inference frameworks.
- vs. HiddenLayer / Protect AI: These focus on detecting adversarial attacks and supply-chain vulnerabilities in ML pipelines, not on DRM/IP protection of distributed weights (TechCrunch, Sept 2023; TechCrunch, Jul 2023).

**Business Model:** No public pricing page found (website returned 403 at time of research). [Inferred]: Most likely monetization path is a SaaS or licensing model charged per model deployed or per inference node, given the runtime-based delivery mechanism and B2B positioning.

**TAM/SAM:**
- Confidential computing market: USD 24.24B in 2025, projected USD 463.89B by 2034 at 34.70% CAGR (Fortune Business Insights, 2025 via search snippet).
- Privacy-preserving AI market: USD 4.25B in 2025, projected USD 39.93B by 2035 (Precedence Research, 2025 via search snippet).
- No public TAM/SAM estimate specific to AI model DRM/weight protection as a standalone segment found.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct sales to AI model providers (foundation model companies, enterprise ML teams licensing proprietary models) who already use vLLM or SGLang, leveraging the drop-in compatibility as a low-friction adoption mechanism.

## Defensibility

- **Technical complexity:** Weight obfuscation that preserves inference accuracy while preventing extraction is a non-trivial cryptographic and systems engineering challenge; academic literature on model obfuscation remains an active research area (arxiv:2306.06112).
- **Switching costs:** Once model providers integrate the hardened runtime and distribute obfuscated weights to customers, migrating away requires re-distributing unprotected weights or switching to a different protection scheme. [Inferred]: This creates moderate switching costs that increase with the number of downstream deployments.
- **No network effects identifiable at this stage.**

**Market structure:** Thales offers general-purpose software DRM (Sentinel) but has no purpose-built AI inference engine replacement (Thales blog). Edgeless Systems requires TEE hardware, limiting deployment flexibility (Edgeless Systems website). [Inferred]: Incumbent inference engine providers (vLLM, SGLang maintainers) are open-source projects without a DRM revenue model, making it structurally unlikely they would bundle proprietary protection. Cloud providers offering confidential computing (Azure, GCP) are hardware-dependent and do not address on-premise or edge scenarios.

**Commoditization risk:** Academic research on model obfuscation (ModelObfuscator, NNSplitter) and open-source watermarking tools exist (GitHub awesome-deep-model-IP-protection). [Inferred]: A well-funded AI security company (e.g., the Palo Alto Networks AI security division post-Protect AI acquisition) could build competing weight protection, though the inference-engine-replacement approach requires deep systems expertise in GPU runtime optimization.

## Market & Traction

**Traction signals:**
- No revenue, user counts, or growth metrics found in public sources.
- No Product Hunt launch found.
- No press coverage in named publications found.
- Company Twitter/X account: not found. Founder Sayan Mitra has Twitter/X handle @Cyan9800 (YC company page); follower count not retrievable.
- Company LinkedIn page: not found in search results.
- No Discord/Slack community found.
- No job postings listed (YC company page, 0 open positions).
- Website not accessible at time of research (HTTP 403).

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. RefortifAI |
|---|---|---|
| **Protect AI** (acquired by Palo Alto Networks for $500M+, Apr 2025) | $129M total (Bloomberg, Aug 2024) | Focused on ML supply-chain security and model scanning, not weight-level DRM or runtime protection |
| **HiddenLayer** | $56M total, $50M Series A (TechCrunch, Sept 2023) | Detects adversarial attacks on models in production; does not provide weight obfuscation or deployment DRM |
| **Edgeless Systems** | ~$5.3M seed (SecurityWeek) | Uses hardware TEEs for confidential AI; requires specific hardware support vs. RefortifAI's claimed hardware-agnostic approach |
| **CalypsoAI** (acquired by F5, Sept 2025) | $43.2M total (SecurityWeek, Jun 2023) | AI guardrails for LLM apps (prompt injection, data leakage); does not address model weight IP protection |
| **Thales Sentinel** | Division of Thales Group (public company) | General software DRM/licensing toolkit applicable to ML models but not purpose-built for AI inference engine replacement |

**Why now:**
- [Inferred]: The proliferation of open-weight and fine-tuned models (Llama, Mistral, etc.) since 2023 has created a growing class of model providers who want to distribute weights for on-premise inference without losing IP control.
- [Inferred]: The maturation of high-performance open-source inference engines (vLLM reached widespread adoption in 2023-2024) creates a standardized integration surface that a drop-in replacement can target.
- Palo Alto Networks' acquisition of Protect AI for $500M+ (Yahoo Finance, Apr 2025) and F5's acquisition of CalypsoAI (Sept 2025) signal enterprise willingness to pay for AI security tooling.

## Founders & Team

**Sayan Mitra** — Co-founder & CEO
- Previously: Artificial Intelligence Engineer 2 at KLA (AI and Advanced Computing Group) (LinkedIn via search snippet)
- Education: IIT Madras, Electrical Engineering (LinkedIn via search snippet)
- Twitter/X: @Cyan9800 (YC company page); follower count not retrievable
- LinkedIn: linkedin.com/in/sayanmitra9 — 500+ connections (LinkedIn via search snippet)
- GitHub: No public repos found under this name

**Atman Kar** — Co-founder & CTO
- Previously: RTL Digital Design Engineer at Texas Instruments; interned at Tenstorrent (CPU RTL Engineer) and Oracle (LinkedIn via search snippet)
- Education: BITS Pilani — Goa Campus (undergrad); North Carolina State University (MS) (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/atman-kar — 429 connections (LinkedIn via search snippet)
- GitHub: github.com/Atman-Kar — 11 repos, 11 followers; notable repos: LameOS (3 stars, i386 OS in Assembly), soft6502 (2 stars, 6502 emulator in C) (GitHub)

**Rithik Jain** — Co-founder & COO
- Research under Dr. Somesh Jha at University of Wisconsin-Madison on security analysis including attack vectors and ROP gadgets (LinkedIn via search snippet)
- Education: Rice University (CS + CAAM), University of Wisconsin-Madison (LinkedIn via search snippet)
- Course instructor at UW-Madison for Machine Programming and Computer Organization for 400+ students (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/rithik--jain (LinkedIn via search snippet)
- GitHub: No confirmed public repos found

**Co-founder relationship:** Atman Kar attended BITS Pilani Goa Campus and was affiliated with the ERC-BPGC (Electronics and Robotics Club, BITS Pilani Goa) on GitHub. No overlapping employer or university between the three founders is visible from public data. One search snippet describes them as "friends" who launched together (search snippet referencing refortif.ai).

**Founder-market fit:** The team combines semiconductor/hardware design experience (Atman Kar: TI, Tenstorrent RTL design; BITS Pilani + NC State), AI/ML engineering (Sayan Mitra: KLA AI group; IIT Madras EE), and systems security research (Rithik Jain: security analysis under Somesh Jha at UW-Madison). [Inferred]: The CTO's low-level hardware and CPU architecture expertise, combined with the COO's security research background, is directly relevant to building a hardened inference runtime that resists weight extraction. No advisors, board members, or notable investors beyond Nicolas Dessaigne (YC Group Partner) found.

## Key Risks

**Weight obfuscation vs. performance tradeoff:** Obfuscating model weights while maintaining inference speed and accuracy at production scale is an unsolved problem in the academic literature (arxiv:2306.06112). If the runtime introduces meaningful latency overhead, adoption by performance-sensitive model providers will be limited. No public benchmarks found.

**Hardware-agnostic claim vs. GPU ecosystem complexity:** Claiming hardware-agnostic operation across NVIDIA, AMD, and other GPU architectures while maintaining a hardened runtime is technically ambitious given that inference engines like vLLM are tightly coupled to CUDA. [Inferred]: Maintaining parity with rapidly evolving upstream inference engines across hardware targets could strain a 3-person team.

**Reverse-engineering arms race:** Software-only DRM has historically been broken in adjacent domains (game anti-cheat, media DRM). Determined adversaries with physical access to hardware running the inference engine may be able to extract weights through memory inspection. [Inferred]: This creates an ongoing cat-and-mouse dynamic requiring continuous security investment.

**Adjacent incumbent expansion:** Palo Alto Networks acquired Protect AI ($500M+, Yahoo Finance, Apr 2025) and now has an AI security division. F5 acquired CalypsoAI (Sept 2025). These well-resourced incumbents could extend into weight/IP protection as a natural adjacency to their existing AI security products.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Confidential computing: USD 24.24B in 2025, 34.70% CAGR to USD 463.89B by 2034 (Fortune Business Insights, 2025 via search snippet). Privacy-preserving AI: USD 4.25B in 2025 (Precedence Research, 2025 via search snippet). No standalone AI model DRM segment estimate found. |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Sayan Mitra (CEO): IIT Madras EE, AI Engineer at KLA. Atman Kar (CTO): BITS Pilani + NC State MS, RTL Engineer at TI/Tenstorrent. Rithik Jain (COO): Rice CS + UW-Madison, security research under Somesh Jha. |
| Competitors | Protect AI ($129M raised, acquired by Palo Alto Networks $500M+, ML supply-chain security not weight DRM). HiddenLayer ($56M raised, revenue unknown, adversarial attack detection not weight DRM). Edgeless Systems (~$5.3M raised, revenue unknown, TEE-based confidential AI vs. hardware-agnostic). CalypsoAI ($43.2M raised, acquired by F5, LLM guardrails not weight protection). Thales Sentinel (public company division, general software DRM not AI-inference-native). |
| Moat Signals | No public data found |
| Risk Factors | Weight obfuscation performance tradeoff unproven, reverse-engineering arms race, adjacent incumbent expansion |
| Founder Reach | Sayan Mitra: Twitter @Cyan9800 (count not retrievable), LinkedIn 500+, GitHub not found. Atman Kar: Twitter not found, LinkedIn 429, GitHub 11 followers. Rithik Jain: Twitter not found, LinkedIn not retrievable, GitHub not confirmed. |
| Distribution Signals | No public data found |
| Emails | No public data found |
