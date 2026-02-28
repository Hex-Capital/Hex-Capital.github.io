# Corelayer

> AI on-call engineer that debugs using data

| Field | Value |
|-------|-------|
| Website | https://www.corelayer.com |
| YC Page | https://www.ycombinator.com/companies/corelayer |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Developer Tools, B2B, Enterprise Software, AI |
| YC Partner | Diana Hu |
| Emails | founders@corelayer.com (YC company page) |

## The Idea

**Problem:** On-call engineers in data-heavy regulated industries (financial services, fintech, healthcare, insurance) must inspect production data to debug issues — a process that is time-consuming, sensitive, and often manual. According to Corelayer's launch post, "Fortune 100s spend $100M+/year on first-line-of-defense production support" (Fondo blog, Feb 2026). Current solutions fall into two categories: infrastructure monitoring/alerting tools (PagerDuty, Datadog) that detect problems but do not diagnose them, and incident management platforms (incident.io, Rootly) that coordinate human responders but do not automate root-cause analysis on data itself. Engineers today must manually query logs, inspect data pipelines, and trace anomalies across systems — particularly painful when the issue involves "bad data" (incorrect values, missing or duplicated rows) rather than infrastructure outages.

**Approach:** Corelayer deploys AI agents that continuously monitor both infrastructure logs and data pipelines for errors and statistical anomalies. When an issue is detected, agents automatically perform root-cause analysis, debug the problem, and suggest fixes. The platform provides audit trails that cite sources with links to relevant logs and code, enabling human validation. The system supports 30+ integrations including AWS, GCP, Snowflake, Cloudflare, Apache Airflow, dbt, GitHub, Slack, Microsoft Teams, Datadog, PostgreSQL, MongoDB, and Linear (company website). The product is SOC 2 Type I certified and offers read-only access with fine-grained access control, PII detection and masking, zero-data retention by default, confidential compute (hardware-backed secure environments), and on-premises deployment options (company website).

**Differentiation:** Existing incident management tools (incident.io, Rootly, FireHydrant) focus on coordinating human responders and automating communication workflows during incidents. Infrastructure monitoring tools (Datadog, PagerDuty, BigPanda) detect anomalies in metrics and logs but do not perform automated debugging or data inspection. Corelayer's differentiation is twofold: (1) it combines detection with AI-driven root-cause analysis and fix suggestion, acting as an autonomous first responder rather than a coordination layer; and (2) it specifically handles data-layer issues (pipeline anomalies, data quality problems) in addition to infrastructure issues. The on-prem and confidential compute deployment options target regulated industries where competitors typically offer only cloud-hosted solutions.

**Business Model:** No pricing tiers are publicly listed on the company website. The site features an ROI calculator suggesting the product targets enterprise buyers: the example scenario shows 100 engineers at $200K/year spending 20% of time on support, with Corelayer claiming a 70% reduction (from 20% to 6%), yielding $2.8M in annual savings (company website). [Inferred]: Most likely monetization path is enterprise SaaS with seat-based or consumption-based pricing, given the focus on Fortune 100 customers and the ROI framing calibrated to large engineering organizations. The legal entity name "Sevvy AI, Inc." (company website footer) differs from the product name.

**TAM/SAM:** The AIOps platform market was valued at $14.60B in 2024, projected to reach $36.07B by 2030 at a 15.2% CAGR (Grand View Research via search snippet). A narrower estimate from Fortune Business Insights places the market at $2.23B in 2025 (Fortune Business Insights via search snippet). No public SAM data found specific to AI-driven incident debugging for regulated data-heavy industries.

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to financial services and fintech firms, given the founders' Goldman Sachs network, the regulated-industry focus requiring on-prem and confidential compute deployments, and the ROI calculator calibrated to 100+ engineer organizations. The 30+ integration ecosystem (Snowflake, Airflow, dbt, Datadog) suggests a land-and-expand motion through existing DevOps/data engineering toolchains.

## Defensibility

The product handles production data in regulated environments, requiring SOC 2 certification, PII masking, confidential compute, and on-prem deployment options — all of which represent compliance barriers to entry that create switching costs for enterprise customers. Once deployed and integrated with a customer's infrastructure (30+ integrations) and data pipelines, the AI agents accumulate context about the customer's specific systems, failure patterns, and data schemas.

[Inferred]: Over time, the debugging context and pattern library built from resolving incidents across customer environments could create a data advantage — agents that have seen more failure modes across similar regulated environments become more effective. However, this advantage is unproven at this stage.

**Market structure:** PagerDuty (public, $1.8B+ market cap) and Datadog (public, $30B+ market cap) are well-resourced incumbents in adjacent spaces. PagerDuty's business model is built around alerting and on-call scheduling; moving into autonomous AI debugging would require building fundamentally different AI capabilities and retraining their sales motion from "tool for on-call engineers" to "replacement for on-call engineers" — a potential channel conflict with their existing user base. Datadog similarly sells monitoring to the same teams and risks cannibalizing its observability revenue by automating away the need for human investigation of its dashboards. [Inferred]: The structural barrier is business model cannibalization — incumbents profit from the complexity that Corelayer aims to eliminate.

**Commoditization risk:** Large language model capabilities are broadly available, and any well-funded incident management or observability company could build AI-assisted debugging features. incident.io's Series B ($62M, Apr 2025) explicitly targets "AI agents that resolve incidents" (incident.io blog, Apr 2025). The compliance and security layer (SOC 2, confidential compute, on-prem) adds implementation complexity but is not technically unique.

## Market & Traction

**Traction signals:**
- YC Winter 2026 batch member (YC company page)
- Launched February 9, 2026 (Fondo blog)
- SOC 2 Type I certified (company website)
- Twitter/X: @CorelayerAI (follower count not retrievable due to JavaScript rendering)
- LinkedIn: linkedin.com/company/108275403 (follower count not retrievable)
- No Product Hunt listing found
- No public user counts, revenue, or customer names disclosed
- No job postings listed on YC page (0 jobs)
- No Discord or Slack community found
- No app store or Chrome Web Store presence (web-based product)

**Competitive landscape:**

1. **incident.io** — $96M+ total raised, $400M valuation (TechCrunch, Apr 2025). Slack-native incident management platform with AI agent capabilities announced in its Series B. Differentiator vs. Corelayer: focuses on incident coordination and communication workflows rather than automated data-layer debugging. Revenue unknown.

2. **Rootly** — $15.2M total raised, $12M Series A (TechCrunch, Aug 2023). YC graduate. Slack-native incident management with AI-suggested next steps. Differentiator vs. Corelayer: automates incident response coordination rather than root-cause analysis on data pipelines. Revenue unknown.

3. **PagerDuty** — Public company (NYSE: PD). Industry-standard on-call alerting and incident response platform. Differentiator vs. Corelayer: provides alerting and scheduling infrastructure but does not perform autonomous debugging or data inspection. Revenue: $441M ARR as of Q3 FY2025 (PagerDuty earnings via search snippet).

4. **BigPanda** — $340M total raised, acquired by Velocity in Nov 2025 (Tracxn via search snippet). AI-powered event correlation for IT operations. Differentiator vs. Corelayer: correlates alerts across monitoring tools but does not perform data-layer debugging or offer on-prem/confidential compute for regulated industries. Revenue unknown.

5. **Shoreline.io** — Acquired by Nvidia in Jul 2024 (Tracxn via search snippet). Automated incident remediation using runbooks. Differentiator vs. Corelayer: focused on runbook automation for infrastructure rather than AI-driven data debugging. Revenue unknown.

**Why now:** [Inferred]: Several catalysts have converged in the last 12-24 months: (1) LLM capabilities crossed a performance threshold enabling autonomous debugging agents that can reason about logs, code, and data simultaneously; (2) significant M&A consolidation in the incident management space (Shoreline.io → Nvidia Jul 2024, Blameless → FireHydrant Aug 2024, FireHydrant → Freshworks Dec 2025, BigPanda → Velocity Nov 2025) has created market dislocation and potential gaps for specialized new entrants; (3) increasing regulatory pressure on data handling in financial services has raised the bar for compliance-first solutions, making the confidential compute and on-prem capabilities more relevant.

## Founders & Team

**Mitch Radhuber** — Co-Founder & CEO
- Previously built data infrastructure at Goldman Sachs, debugging systems processing "100s of billions of rows a day" (YC company page, Fondo blog)
- Astrophysics research at Princeton (YC company page)
- Twitter/X: No personal public account found
- LinkedIn: No public profile found via search
- GitHub: No public repos found

**Shipra Jha** — Co-Founder & CTO
- Previously built data infrastructure at Goldman Sachs (YC company page, Fondo blog)
- Cloud infrastructure work at Oracle (YC company page)
- LinkedIn: linkedin.com/in/shipra-jha-9b021859 — listed as Goldman Sachs (LinkedIn search result via search snippet)
- Twitter/X: No personal public account found
- GitHub: No public repos found

**Co-founder relationship:** Both founders built data infrastructure together at Goldman Sachs (YC company page), indicating direct prior working relationship as colleagues.

**Founder-market fit:** Both founders experienced the problem firsthand — debugging production data systems at Goldman Sachs that processed hundreds of billions of rows daily. This direct domain experience in financial services data infrastructure maps precisely to the target customer profile (on-call engineers at data-heavy regulated companies). Mitch's Princeton astrophysics background suggests quantitative and analytical depth; Shipra's combination of Goldman Sachs data infrastructure and Oracle cloud infrastructure experience spans the data and deployment stack that Corelayer targets.

## Key Risks

**Brand disambiguation:** Multiple unrelated entities share the "CoreLayer" name, including @CoreLayerEU on Twitter, corelayer.pro (a separate website), CoreLayer GitHub repos for Citrix ADC, and a "CoreLayer Digital" that announces fintech awards (OpenPR, 2025). This creates potential brand confusion in search results and may complicate SEO and market positioning.

**Incumbent convergence on AI debugging:** incident.io explicitly raised $62M in April 2025 to "build AI agents that resolve incidents" (incident.io blog, Apr 2025), signaling direct competitive intent from a well-funded incumbent. PagerDuty, Datadog, and other observability platforms are also investing in AI capabilities. The core AI debugging value proposition may be replicated as a feature by platforms with existing customer bases.

**Narrow initial vertical:** Targeting regulated, data-heavy industries (financial services, healthcare, insurance) with on-prem and confidential compute requirements creates long enterprise sales cycles and high deployment complexity for a 2-person team. These customers typically require extensive security reviews, procurement processes, and proof-of-concept engagements before purchasing.

**Regulatory data access constraints:** The product's value depends on AI agents having access to production data in regulated environments. Despite confidential compute and PII masking features, some financial institutions and healthcare organizations may have compliance or policy restrictions that prevent any AI system from accessing production data, limiting the addressable market within the target verticals.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $14.60B AIOps platform market in 2024, projected $36.07B by 2030 at 15.2% CAGR (Grand View Research via search snippet) |
| SAM | No public data found |
| Traction | YC W26 batch; launched Feb 9, 2026 (Fondo blog); SOC 2 Type I certified (company website); no public user counts or revenue disclosed |
| Revenue Signal | No public data found |
| Founders | Mitch Radhuber (CEO): ex-Goldman Sachs data infrastructure, Princeton astrophysics research. Shipra Jha (CTO): ex-Goldman Sachs data infrastructure, ex-Oracle cloud infrastructure |
| Competitors | incident.io ($96M+ raised, $400M valuation, revenue unknown, AI incident coordination vs. Corelayer's data-layer debugging); Rootly ($15.2M raised, revenue unknown, Slack-native coordination vs. autonomous debugging); PagerDuty (public, ~$441M ARR, alerting/scheduling vs. autonomous debugging); BigPanda ($340M raised, acquired Nov 2025, alert correlation vs. data debugging); Shoreline.io (acquired by Nvidia Jul 2024, runbook automation vs. AI debugging) |
| Moat Signals | SOC 2 Type I certification; confidential compute and on-prem deployment options for regulated industries; 30+ integrations (company website) |
| Risk Factors | Brand disambiguation with unrelated "CoreLayer" entities, incumbent convergence on AI debugging (incident.io $62M raise targeting AI agents), long enterprise sales cycles for 2-person team in regulated verticals |
| Founder Reach | Mitch Radhuber: Twitter not found, LinkedIn not found, GitHub not found. Shipra Jha: Twitter not found, LinkedIn linkedin.com/in/shipra-jha-9b021859, GitHub not found. Company: Twitter @CorelayerAI (count not retrievable), LinkedIn linkedin.com/company/108275403 (count not retrievable) |
| Distribution Signals | No public data found (no Product Hunt listing, no app store presence, no community channels found) |
| Emails | founders@corelayer.com (YC company page) |
