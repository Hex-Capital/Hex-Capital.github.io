# Oximy

> The system of record for enterprise AI usage.

| Field | Value |
|-------|-------|
| Website | https://oximy.com |
| YC Page | https://www.ycombinator.com/companies/oximy |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Security, Enterprise Software |
| YC Partner | Jared Friedman |
| Emails | No public data found |

## The Idea

**Problem:** Enterprises are adopting dozens of AI tools across their workforce with zero centralized visibility into what is being used, what it costs, or where sensitive data is flowing. Security teams cannot enforce governance policies, finance teams cannot attribute AI spend by department, and transformation teams cannot measure adoption. The YC page states: "Enterprises have dozens of AI tools with zero visibility into what's being used, what it costs, or where sensitive data is going" (YC company page). Today, enterprises rely on manual surveys, incomplete SSO logs, or SaaS management platforms that were not designed to detect AI-specific tool usage patterns, particularly browser-based and desktop AI applications that bypass traditional procurement.

**Approach:** Oximy deploys a lightweight desktop agent (distributed via MDM tools such as Jamf, Intune, Kandji, or SCCM) that monitors network connections at the system level to detect AI tool usage across browser and desktop applications. The agent detects 3,500+ AI tools automatically (oximy.com). The platform provides three core modules: **Oversight** (governance intelligence detecting policy violations and data leakage risks), **Pulse** (adoption analytics showing which AI tools teams use and trends over time), and **Spend** (cost tracking and attribution by team). The company also offers **Oximy Lens**, a standalone tool for viewing AI tool usage and spend. The platform is SOC 2 Type I certified and GDPR compliant, with SSO/SCIM integration (Okta, Azure AD, OneLogin) and an on-premises deployment option (oximy.com).

**Differentiation:** Unlike SaaS management platforms (Productiv, Zylo, Torii) that focus on licensed SaaS applications discovered through SSO, email receipts, or API integrations, Oximy uses a system-level network monitoring agent to detect AI tool usage regardless of whether the tool was procured through IT. This is closer to an endpoint-based approach. Compared to Nudge Security — which combines email discovery, browser extension, API connections, and SSO integration for SaaS and AI governance (nudgesecurity.com) — Oximy's desktop agent approach monitors at the network connection level rather than relying on email signup signals. Oximy's GitHub organization describes the company as providing "open standards and system-boundary tooling for observing and securing AI and agent activity" (github.com/oximyhq), and its open-source "sensor" repository is a fork of mitmproxy (github.com/oximyhq/sensor).

**Business Model:** Oximy Lens is priced at $49/month as a standalone product (oximy.com). Full platform pricing is not publicly disclosed; the website uses a "Get a Demo" call-to-action, indicating an enterprise sales motion. [Inferred]: The full platform likely follows a per-seat or per-endpoint enterprise pricing model given the demo-driven sales approach and target buyer personas (security, finance, transformation teams).

**TAM/SAM:** The Global Enterprise AI Governance and Compliance Market was valued at $2.5B in 2025 and is projected to reach $68.2B by 2035 at a 39.4% CAGR (Market.us via search snippet). The broader Enterprise AI market was estimated at $114.87B in 2026, projected to reach $273.08B by 2031 at 18.91% CAGR (Mordor Intelligence via search snippet). No SAM estimate specific to AI usage visibility/governance tooling was found.

**GTM / Distribution:** The company has four open job postings including a GTM Intern, Events & Partnerships Associate, and Content Intern, suggesting an early-stage go-to-market build-out (YC company page). The Events & Partnerships Associate role and the company's listing as a sponsor/exhibitor at a FutureCon cybersecurity conference (futureconevents.com, St. Louis 2026 via search snippet) indicate an event-driven enterprise sales strategy. The YC page states the platform is "used by security, finance, and transformation teams." [Inferred]: Primary GTM path is direct enterprise sales targeting CISOs and IT security leaders at mid-market and enterprise companies, supplemented by event marketing and the free Oximy Lens product as a top-of-funnel lead generator.

## Defensibility

The desktop agent approach, if widely deployed, could generate a proprietary dataset of enterprise AI tool usage patterns across 3,500+ tools — this data advantage does not exist today but could develop over time as more enterprises adopt the platform. The system-level network monitoring approach creates moderate switching costs once deployed across an enterprise's endpoint fleet via MDM. SOC 2 Type I certification and on-premises deployment options create trust barriers that newer competitors would need to replicate.

**Market structure:** Existing SaaS management incumbents (Productiv, Zylo, Torii) have built their discovery mechanisms around SSO logs, email receipts, and API integrations — approaches that structurally miss unsanctioned AI tools accessed via browser or desktop without IT procurement. Retooling to add system-level network monitoring would require a fundamentally different agent architecture and distribution model (MDM deployment) that conflicts with their existing agentless, API-first positioning. Nudge Security is the closest structural competitor, having expanded from SaaS security into AI governance with a $22.5M Series A (PR Newswire, November 2025 via search snippet).

**Commoditization risk:** The core technical approach — a desktop agent intercepting network traffic to identify AI tool domains — is not deeply novel; the open-source "sensor" component is a fork of mitmproxy (github.com/oximyhq/sensor). Endpoint security vendors (CrowdStrike, Zscaler) already have agents deployed on enterprise endpoints and could add AI tool detection as a feature. CASB and DLP vendors could extend their URL categorization to flag AI tools. The primary differentiation is in the AI-specific taxonomy (3,500+ tools), the spend attribution logic, and the governance workflow — these are product execution advantages rather than technical moats.

## Market & Traction

**Traction signals:**
- The YC page states Oximy is "processing millions of requests daily for enterprises in financial services and healthcare" (YC company page via search snippet). No specific customer names, customer count, or revenue figures are publicly disclosed.
- Backed by Y Combinator, Seven Stars VC, Schema Ventures, SF1, and Timeless Ventures (oximy.com).
- Sudarshan (@ItzSuds on X) announced being "the first investor in Oximy," stating he "met Naman 3 yrs ago when I invested in his last startup" (x.com/ItzSuds/status/2016215038256947636).
- Company Twitter/X: @oximyhq — follower count not retrievable.
- Company LinkedIn: linkedin.com/company/oximy — follower count not retrievable.
- GitHub: github.com/oximyhq — "sensor" repo has 16 stars (github.com/oximyhq, February 2026).
- 4 active job postings: Content Intern, Founding Full Stack Engineer ($125K–$250K + 0.5%–2.5% equity), GTM Intern, Events & Partnerships Associate (YC company page).
- No Product Hunt launch found.
- No app store or Chrome Web Store presence found (Oximy Lens is a desktop tool, not a browser extension).

**Competitive landscape:**

1. **Nudge Security** — ~$30M total raised; Series A $22.5M (PR Newswire, November 2025 via search snippet). ~200 customers, 3x ARR growth for two consecutive years (PR Newswire, November 2025 via search snippet). Uses email discovery + browser extension + API connections for SaaS and AI governance. Broader scope covering all SaaS alongside AI, whereas Oximy is AI-focused. Nudge's approach is agentless (no desktop agent required), which is lighter to deploy but may miss AI tools not associated with email signups.

2. **Grip Security** — $66M total raised; Series B $41M (grip.security press release, August 2023 via search snippet). Revenue not publicly disclosed. Focuses on SaaS identity risk management. Less AI-governance-specific than Oximy; primarily addresses identity and access control for SaaS applications.

3. **Productiv** — $73M total raised; Series C $45M (BusinessWire, March 2021 via search snippet). Revenue reported as $4M in 2024 (Latka via search snippet). SaaS management platform focused on license optimization and renewal management. Broader SaaS lifecycle focus; AI tool governance is not a core feature.

4. **Zylo** — $35.2M Series B (Zylo via search snippet). Revenue not publicly disclosed. SaaS management platform focused on discovery and spend intelligence. Similar spend management use case but not AI-specific.

5. **Torii** — $10M Series A (Amalgam Insights, February 2021 via search snippet). SaaS lifecycle management and governance. Acquired by Torii and focuses on automation workflows for SaaS management.

**Why now:** [Inferred]: Several converging catalysts: (1) Enterprise AI tool adoption accelerated sharply in 2024–2025, with employees independently adopting ChatGPT, Copilot, Gemini, and hundreds of specialized AI tools outside IT procurement; (2) Regulatory pressure is increasing — the EU AI Act implementation timeline and enterprise compliance requirements are driving governance spending; (3) CFO scrutiny of AI spend intensified in 2025 — only 11% of organizations reported measurable financial value from AI despite 74% reporting productivity gains (Menlo Ventures, 2025 via search snippet), creating demand for AI spend attribution tools; (4) More than 75% of large enterprises plan to adopt dedicated AI governance platforms by 2026 (Superblocks blog via search snippet).

## Founders & Team

**Naman Ambavi** — Founder & CEO
- Education: B.Tech, Mukesh Patel School of Technology, Management & Engineering (NMIMS) (namanambavi.com via search snippet). Graduated high school in 2018 from The Universal School (EverybodyWiki via search snippet).
- 2017 Google Code-In finalist from India; 2018 Google CodeJam runner-up (namanambavi.com via search snippet).
- Founded Easocare (2019–2023): healthtech SaaS enabling offline pharmacies to go online in India. Reported $223.1K revenue in 2024 with a 1-person team (Latka via search snippet). Previously reported $176.4K revenue in 2023 (Latka via search snippet). Raised $500K. Achieved $400K+ GMV, 10K+ app downloads, 1.5M medical records digitized, team of 13 at peak (namanambavi.com). Built a COVID-19 tracker reaching 10M+ users in 4 months (namanambavi.com).
- Founding Member at Induced AI (2023–present): SF-based AI startup backed by Sam Altman and Peak XV Partners, raised $2.3M (namanambavi.com). Worked on LLMs, generative UI, RAG systems, and model fine-tuning.
- Founded UNDEV (2018–2019): commission-based creative agency marketplace, $75K+ portfolio value on freelance platforms (namanambavi.com).
- Twitter/X: @namanambavi — follower count not retrievable.
- LinkedIn: linkedin.com/in/namanambavi — headline: "Founder & CEO, Oximy (YC W26)" (LinkedIn via search snippet).
- GitHub: github.com/namanambavi — 9 followers, Developer Program Member (GitHub via search snippet).

No other co-founders are listed on the YC page. Oximy appears to be a solo-founder company with a team of 5.

**Co-founder relationship:** N/A — solo founder.

**Founder-market fit:** Ambavi's experience at Induced AI (working on LLMs, RAG systems, fine-tuning) gave him direct exposure to enterprise AI tooling and likely surfaced the governance gap firsthand. His prior experience building Easocare (SOC 2, HIPAA compliant per his personal site) demonstrates familiarity with enterprise compliance requirements. The COVID-19 tracker project (10M+ users in 4 months) indicates ability to scale products quickly. Starting his first company at age 19 and running multiple ventures suggests high execution velocity. Sudarshan, Oximy's first angel investor, previously invested in Ambavi's prior startup and cited his "execution ability & product velocity" as the investment rationale (x.com/ItzSuds).

## Key Risks

**Nudge Security's AI governance expansion:** Nudge Security raised $22.5M in November 2025 specifically to "secure workforce AI and SaaS" (PR Newswire, November 2025 via search snippet), has ~200 customers, and reports 3x ARR growth for two consecutive years. Nudge is building overlapping AI governance features (AI conversation monitoring, AI usage monitoring, policy enforcement via browser) with significantly more capital and an established customer base. Oximy must differentiate on depth of AI-specific capabilities and deployment model to compete.

**Endpoint agent adoption friction:** Oximy's core product requires deploying a desktop agent across enterprise endpoints via MDM. Enterprise security teams may resist adding another agent to endpoints already running CrowdStrike, Zscaler, or similar tools. The open-source "sensor" component being a mitmproxy fork (github.com/oximyhq/sensor) means it operates as a network proxy, which can raise privacy concerns with employees and legal teams, potentially slowing procurement cycles.

**Platform incumbents adding AI detection:** Endpoint security vendors (CrowdStrike, SentinelOne), CASB providers (Netskope, Zscaler), and DLP solutions already have agents or proxies deployed on enterprise endpoints. Adding AI tool detection to their existing feature sets is an incremental engineering effort rather than a new product build. CrowdStrike's Falcon platform, for instance, already monitors network connections from endpoints — extending that to flag AI tool domains and aggregate usage analytics is a natural feature extension.

**Solo-founder execution risk at enterprise scale:** Enterprise sales requires simultaneous execution across product engineering, security certifications, enterprise sales cycles, and customer success. The founding team has one named founder managing a team of 5 while hiring across engineering, GTM, content, and partnerships simultaneously. Enterprise buyers often evaluate vendor stability, and a solo-founder pre-seed company may face scrutiny in procurement processes at financial services and healthcare organizations (the stated target verticals).

**Data sensitivity and regulatory exposure:** The product's core function — intercepting and categorizing all network traffic from employee devices — creates inherent legal and compliance complexity. Different jurisdictions have varying employee monitoring laws (e.g., ECPA in the US, GDPR in the EU, works council requirements in Germany). Enterprise customers in healthcare (HIPAA) and financial services (SOX, GLBA) may require extensive legal review before deployment, lengthening sales cycles.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2.5B Enterprise AI Governance and Compliance Market in 2025, projected $68.2B by 2035 at 39.4% CAGR (Market.us via search snippet) |
| SAM | No public data found |
| Traction | "Processing millions of requests daily for enterprises in financial services and healthcare" (YC company page via search snippet); 4 active job postings (YC company page, February 2026); 16 GitHub stars on sensor repo (github.com/oximyhq, February 2026) |
| Revenue Signal | Oximy Lens priced at $49/month (oximy.com); full platform pricing not disclosed |
| Founders | Naman Ambavi (Founder & CEO): B.Tech NMIMS, ex-Induced AI (founding member, Sam Altman-backed), founded Easocare ($223.1K revenue per Latka 2024), Google Code-In 2017 finalist |
| Competitors | Nudge Security (~$30M raised, ~200 customers, 3x ARR growth, broader SaaS+AI governance via agentless approach); Grip Security ($66M raised, revenue unknown, SaaS identity risk vs. AI usage focus); Productiv ($73M raised, $4M revenue per Latka 2024, SaaS lifecycle management vs. AI-specific); Zylo ($35.2M raised, revenue unknown, SaaS spend intelligence vs. AI-specific); Torii ($10M raised, revenue unknown, SaaS lifecycle automation) |
| Moat Signals | Desktop agent deployment creates switching costs; AI tool taxonomy of 3,500+ tools; SOC 2 Type I and on-premises deployment option raise trust barriers for new entrants |
| Risk Factors | Nudge Security's well-funded AI governance expansion, endpoint agent adoption friction, platform incumbents adding AI detection as feature |
| Founder Reach | Naman Ambavi: Twitter @namanambavi (count not retrievable), LinkedIn linkedin.com/in/namanambavi (count not retrievable), GitHub 9 followers |
| Distribution Signals | FutureCon cybersecurity conference presence (futureconevents.com, 2026 via search snippet); Events & Partnerships Associate hiring (YC company page); Oximy Lens as free/low-cost entry product (oximy.com) |
| Emails | No public data found |
