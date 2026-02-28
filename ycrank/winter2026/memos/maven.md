# Maven

> Payments for Voice Agents

| Field | Value |
|-------|-------|
| Website | https://trymaven.com |
| YC Page | https://www.ycombinator.com/companies/maven |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Fintech, SaaS, Infrastructure, Conversational AI |
| YC Partner | Ankit Gupta |
| Emails | founders@trymaven.com (company website) |

## The Idea

**Problem:** AI voice agents can conduct conversations but cannot securely collect payment card information during live phone calls. Businesses deploying voice AI (via platforms like VAPI, Retell AI, LiveKit, or Twilio) face engineering overhead building PCI-compliant payment infrastructure, handling payment failures gracefully in voice contexts (e.g., card declines, wrong numbers, retries), and supporting multiple payment processors simultaneously. Without a dedicated solution, teams must scope their own environments for PCI DSS compliance — a costly, time-consuming process. Today, businesses either route callers to legacy IVR systems, transfer them to human agents, or forgo phone payments altogether.

**Approach:** Maven provides a single API that voice agent platforms can call to initiate a payment session. The API takes the caller's phone number and amount, then Maven handles secure card collection via voice/dialpad input or by sending an SMS checkout link. Card data never touches the customer's agent servers, maintaining PCI compliance. After payment completes, the caller is automatically transferred back to the voice agent conversation. Maven supports graceful retries for declined cards and failed transactions (company website).

**Differentiation:** Legacy IVR payment providers (Sycurio, Eckoh, PCI Pal) were built for traditional call centers with human agents and static IVR menus — not for programmatic AI voice agent workflows. Maven differentiates by offering a developer-first API designed specifically for AI voice agent platforms (VAPI, Retell, LiveKit, Twilio), enabling payment collection via a single API call rather than requiring integration with legacy telephony infrastructure. The voice agent platforms themselves (Bland AI, Retell AI, Synthflow, VAPI) focus on building the conversational layer and do not provide PCI-compliant payment collection as a core feature (company website).

**Business Model:** Maven is currently in free early access with no public pricing tiers (company website). The legal entity is Lambda Systems, Inc. (company website). [Inferred]: The most likely monetization path is per-transaction fees or per-session pricing, consistent with payment infrastructure APIs (e.g., Stripe's model). Usage-based pricing aligns with the API-call consumption pattern described on the website.

**TAM/SAM:** The global Voice AI Agents Market was valued at $2.4B in 2024 and is projected to reach $47.5B by 2034 at a 34.8% CAGR (Market.us, 2024 via search snippet). The conversational AI market is projected at $49.9B by 2030 (Fortune Business Insights via search snippet). No public TAM/SAM data found specific to the "payment collection for AI voice agents" segment. [Inferred]: The SAM is the subset of voice AI agent deployments that involve payment collection — likely a fraction of the broader voice AI market but growing as voice agents expand into transactional use cases in healthcare billing, debt collection, insurance, and e-commerce.

**GTM / Distribution:** Maven integrates with four voice platforms (VAPI, Retell, LiveKit, Twilio) and four payment gateways (Stripe, Authorize.net, Adyen, Braintree) (company website). [Inferred]: The most likely distribution path is a developer-led, bottom-up GTM through these voice platform ecosystems. Voice agent builders discover Maven through platform documentation, integration directories, and developer communities. The multi-gateway support lowers switching costs for prospects already using any of the four supported processors.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via: (1) integration depth — becoming the default payment middleware embedded in voice platform SDKs and documentation, creating distribution lock-in; (2) compliance certifications — PCI DSS Level 1 certification, SOC 2, and gateway-specific certifications are time-consuming to obtain and maintain, creating a barrier for new entrants; (3) transaction data — processing volume across multiple gateways and voice platforms could yield optimization insights (retry logic, decline rate reduction) that improve over time. However, none of these are proven at this stage.

**Market structure:** Legacy IVR payment vendors (Sycurio, Eckoh, PCI Pal) serve human-staffed call centers with integration architectures designed around legacy telephony stacks. Rebuilding their platforms for AI-native, API-first voice agent workflows would require cannibalizing their existing enterprise sales motion and re-architecting products. The voice AI platforms (VAPI, Retell, Bland) could theoretically build this in-house, but doing so would require scoping their environments for PCI DSS compliance — a costly regulatory undertaking that conflicts with their core focus on conversational AI. This compliance burden is the primary structural barrier. However, if one major voice platform decides to handle payments natively, this barrier diminishes.

**Commoditization risk:** The core product — wrapping payment gateway APIs with PCI-compliant telephony — is technically reproducible. A well-funded voice AI platform (e.g., Bland AI with $65M raised, or VAPI with $20M raised) could build similar functionality in-house if payment collection becomes a strategic priority. The primary barrier is PCI DSS certification and multi-gateway compliance, which require time and expertise but are not insurmountable.

## Market & Traction

**Traction signals:**
- Y Combinator Winter 2026 batch (YC company page)
- Product currently in free early access (company website)
- No public user counts, revenue figures, or customer logos found
- No Product Hunt launch found
- No company Twitter/X account found
- No LinkedIn company page confirmed for the trymaven entity
- No Discord or Slack community found
- No app store or extension presence (API-only product)

**Competitive landscape:**

1. **Sycurio** (formerly Semafone) — $18.4M total funding, £20M annual revenue as of Dec 2023, acquired by Livingbridge in 2021 (Tracxn via search snippet). Offers PCI-compliant voice payment via DTMF masking and speech recognition. Key differentiator vs. Maven: established enterprise relationships and certifications, but built for traditional call centers with human agents, not AI voice agent APIs.

2. **PCI Pal** — Publicly traded (AIM, delisted Jan 2025 after Bridgepoint acquisition of Eckoh); ARR of £19.3M as of reporting period, total revenue ~$29.1M trailing 12 months (PCI Pal IR page via search snippet). Offers IVR payment solutions across voice, digital, and chat channels. Key differentiator vs. Maven: broader channel coverage and enterprise scale, but legacy architecture not designed for AI voice agent integration.

3. **Eckoh** — Acquired by Bridgepoint at 54p/share in January 2025 (Eckoh news release via search snippet). Provides CallGuard and Payment IVR solutions for contact centers. Key differentiator vs. Maven: mature enterprise product with UK and US presence, but focused on human-agent-assisted payment flows rather than autonomous AI agents.

4. **Bland AI** — $65M total funding ($40M Series B led by Emergence Capital), $3.8M revenue as of June 2024 (Getlatka via search snippet). Full-stack voice AI platform for enterprises. Key differentiator vs. Maven: Bland handles the entire voice agent stack (not just payments), and could potentially add payment processing in-house, making it both a potential partner and a competitive threat.

5. **VAPI** — $20M Series A led by Bessemer Venture Partners, $130M valuation, expected ~$8M revenue by end of 2024 (SiliconANGLE, Dec 2024 via search snippet). Voice AI developer platform. Key differentiator vs. Maven: VAPI provides the voice agent infrastructure that Maven plugs into; a complementary platform today, but a potential competitor if VAPI adds native payment handling.

**Why now:** [Inferred]: The convergence of two trends opened this opportunity: (1) the rapid maturation of real-time voice AI platforms (VAPI, Retell, Bland, LiveKit) in 2023-2025, which created a large and growing base of deployed AI voice agents that need to complete transactions; and (2) the availability of high-quality LLM-powered speech-to-text and text-to-speech capabilities that make voice agents viable for complex workflows like payment collection. Specifically, VAPI raised $20M in Dec 2024 (SiliconANGLE), Retell AI raised $4.6M in Aug 2024 (Retell blog), Bland AI raised $40M in Jan 2025 (Bland AI blog), and Synthflow raised $20M in Jun 2025 (Synthflow news) — indicating rapid capital inflow into the voice agent ecosystem that creates demand for payment infrastructure.

## Founders & Team

**Wasi Ahmed** — Co-founder
- BS Computer Science, UC Berkeley (YC company page)
- Previously: Software Engineer at Amazon (YC company page, LinkedIn title via search snippet)
- LinkedIn: linkedin.com/in/wasi-ahmed05 — Headline: "Building Invoke | CS @ UC Berkeley | Prev @ Amazon" (LinkedIn search result via search snippet)
- Twitter/X: No confirmed account found for this specific Wasi Ahmed
- GitHub: No confirmed public repos found

**Brandon Boehme** — Co-founder
- EECS, UC Berkeley (YC company page)
- Previously: Software Engineer Intern at Meta; Jr. SDE at Amazon (LinkedIn search result via search snippet)
- LinkedIn: linkedin.com/in/brandonboehme — Headline: "Co-Founder, Maven (YC W26)" (LinkedIn search result via search snippet)
- Twitter/X: No public account found
- GitHub: No confirmed public repos found

**Co-founder relationship:** Both founders studied at UC Berkeley (CS and EECS respectively) and both worked at Amazon, suggesting they likely met through one or both of these shared affiliations.

**Founder-market fit:** Both founders have engineering backgrounds from Amazon, providing exposure to large-scale payments and infrastructure systems. Their UC Berkeley CS/EECS education provides the technical foundation for building API infrastructure. No prior exits or fintech-specific domain expertise were found in public sources. No advisors, board members, or notable angel investors were identified beyond Y Combinator and YC Group Partner Ankit Gupta.

## Key Risks

**Voice platform concentration risk:** Maven's value proposition depends on voice agent platforms (VAPI, Retell, LiveKit, Twilio) remaining the dominant architecture for AI voice calls. If these platforms consolidate, pivot, or add native payment capabilities, Maven's distribution channel narrows. VAPI and Retell are both YC-backed and could view payments as a natural feature extension.

**PCI compliance burden at scale:** Maven's core promise is handling PCI compliance so customers don't have to. Achieving and maintaining PCI DSS Level 1 certification requires significant ongoing investment in security audits, penetration testing, and infrastructure. For a 2-person team, this represents a disproportionate operational burden, and any compliance failure could be existential for the business.

**Brand disambiguation:** The name "Maven" is shared by multiple companies including Maven AGI (enterprise AI customer support), Maven (online learning platform by Gagan Biyani), Maven Clinic (telemedicine), Maven 11 Capital (crypto fund), and Apache Maven (build tool). This creates SEO challenges, brand confusion, and difficulty establishing search presence. The legal entity operating as "Lambda Systems, Inc." adds another layer of naming complexity.

**Payment gateway build-vs-buy decision:** Payment gateways (Stripe, Adyen, Braintree) could build voice payment collection natively, particularly as they expand their API surface areas. Stripe already offers extensive checkout customization. If a major gateway adds voice-optimized payment collection, Maven's multi-gateway abstraction layer becomes less differentiated.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $47.5B Voice AI Agents Market by 2034 (Market.us, 2024, 34.8% CAGR via search snippet) |
| SAM | No public data found for the payment-collection-for-voice-agents subsegment |
| Traction | Y Combinator W26 batch; product in free early access; no public user counts or revenue (company website, YC page) |
| Revenue Signal | No public data found; currently free early access (company website) |
| Founders | Wasi Ahmed (Co-founder): CS @ UC Berkeley, prev Amazon. Brandon Boehme (Co-founder): EECS @ UC Berkeley, prev Meta & Amazon |
| Competitors | Sycurio ($18.4M raised, £20M revenue, legacy IVR payments for call centers); PCI Pal (public company, £19.3M ARR, IVR payment solutions); Eckoh (acquired by Bridgepoint Jan 2025, enterprise IVR payments); Bland AI ($65M raised, $3.8M revenue, full-stack voice AI — potential build threat); VAPI ($20M raised, ~$8M revenue est., voice AI platform — potential build threat) |
| Moat Signals | No public data found |
| Risk Factors | Voice platform concentration, PCI compliance burden for 2-person team, brand disambiguation across 5+ companies named "Maven", gateway native build risk |
| Founder Reach | Wasi Ahmed: Twitter not found, LinkedIn 500+, GitHub not found. Brandon Boehme: Twitter not found, LinkedIn not confirmed count, GitHub not found |
| Distribution Signals | No public data found (no Product Hunt launch, no app store presence, no social media accounts confirmed) |
| Emails | founders@trymaven.com (company website) |
