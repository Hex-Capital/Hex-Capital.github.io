# Arzana

> AI automation for the manufacturing office

| Field | Value |
|-------|-------|
| Website | https://arzana.ai |
| YC Page | https://www.ycombinator.com/companies/arzana |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 5 |
| Location | San Francisco, CA, USA |
| Tags | Manufacturing, Automation, Operations, AI, Industrial |
| YC Partner | Tom Blomfield |
| Emails | william@arzana.com, marshall@arzana.com, careers@arzana.com |

## The Idea

**Problem:** U.S. manufacturers and distributors spend significant labor hours on repetitive front-office tasks — processing RFQs, manually entering purchase orders into ERP systems, generating quotes, and sending customer updates. The founders experienced this firsthand working manufacturing jobs in Iowa and Wisconsin (arzana.com/about). Current workflows involve staff manually reading emails and PDFs, re-keying data across disconnected systems (email, ERP, CRM), and hand-building quotes — a process the company claims takes ~15 minutes per quote at one customer site (Milltown Paper CEO testimonial, arzana.com).

**Approach:** Arzana deploys custom AI agents that integrate with a manufacturer's existing email (Gmail, Outlook), ERP (Epicor, Infor, JobBoss, QuickBooks, NetSuite, SAP, Sage, IFS, Dynamics, Prophet 21), and CRM (Salesforce, HubSpot, Zoho) systems to automate quoting, order entry, estimating, and customer updates (arzana.com). The product includes four modules: Quoting (automated RFQ processing, part matching, pricing validation), Estimating (AI models trained on historical job costs), Order Entry (PO reading from email/PDF, line item validation, discrepancy flagging), and a Dashboard (unified command center across quotes, orders, AP/AR, logistics) (arzana.com). The company follows a "forward-deployed" model, embedding engineers onsite at customer facilities before configuration (arzana.com/about).

**Differentiation:**
- Vs. Conexiom ($170M raised; Tracxn): Conexiom focuses on touchless sales order processing; Arzana covers a broader front-office scope including quoting, estimating, and a unified dashboard. Conexiom is a mature enterprise product; Arzana targets a wider range from job shops to Fortune 500 (arzana.com).
- Vs. Paperless Parts (~$51M raised; Tracxn): Paperless Parts specializes in quoting/estimating for CNC/3D printing job shops; Arzana covers order entry and customer updates in addition to quoting, and serves a broader manufacturing and distribution segment (arzana.com).
- Vs. Esker (acquired by Bridgepoint/General Atlantic; Edison Group): Esker is a full order-to-cash and source-to-pay platform for large enterprises (3,000+ customers; esker.com). Arzana is manufacturing-specialized rather than horizontal.
- The forward-deployed engineering model and specialization in manufacturing verticals (tooling, mold makers, paper converters, distributors) differentiate the go-to-market from horizontal automation vendors (arzana.com/about).

**Business Model:** No pricing is publicly listed on the website (arzana.com). [Inferred]: Most likely monetization path is a SaaS subscription (per-seat or per-module) given the ERP-integrated enterprise product and forward-deployed onboarding model, potentially with implementation fees given the <4 month go-live timeline.

**TAM/SAM:**
- Manufacturing operations management software market: $17.46B in 2024, projected $76.71B by 2033 at 19.1% CAGR (Grand View Research, 2024 via search snippet).
- Workflow automation market: $23.77B in 2025, projected $40.77B by 2031 at 9.41% CAGR (Mordor Intelligence, 2025 via search snippet).
- [Inferred]: The SAM for manufacturing-specific front-office automation (quoting + order entry + customer updates) is a subset of these broader markets. No public SAM data found for this specific segment.

**GTM / Distribution:** The company uses a forward-deployed engineering model, sending engineers onsite to customer facilities before system configuration (arzana.com/about). The company lists offices in San Francisco, Okoboji IA, and Appleton WI (arzana.com), embedding in the industrial communities they serve. [Inferred]: Primary distribution is direct enterprise sales to U.S. manufacturers and distributors, likely leveraging the founders' Midwest manufacturing networks as initial pipeline.

## Defensibility

- **Switching costs:** Once AI agents are configured and integrated with a customer's ERP, CRM, and email systems and trained on historical job cost data, migration to a competitor would require re-integration and re-training (arzana.com).
- **Data advantage:** The estimating module trains custom AI models on each customer's historical job costs (arzana.com). [Inferred]: Over time, this creates a per-customer data flywheel that improves accuracy and raises switching costs.
- **Vertical specialization:** The product is built exclusively for manufacturers and distributors, with ITAR compliance and industry-specific features (arzana.com). Generic automation vendors would need to replicate this specialization.

**Market structure:** [Inferred]: Large ERP vendors (SAP, Oracle/NetSuite, Epicor) could build overlapping front-office automation, but their primary revenue comes from core ERP licenses, and adding an AI quoting/order-entry layer that competes with their own professional services teams and implementation partners creates channel conflict. Conexiom and Esker are the closest structural threats but operate at higher price points targeting larger enterprises.

**Commoditization risk:** The underlying technology (LLMs reading emails/PDFs and writing to ERPs) is accessible to well-funded competitors. Conexiom has already launched an "AI Platform" for sales order automation (conexiom.com). Paperless Parts has released AI-powered quoting automation (Modern Machine Shop). DigiFabster has launched an AI Quote Agent (TCT Magazine). The forward-deployed model and manufacturing-specific training data provide some differentiation, but the technical barrier is moderate.

## Market & Traction

**Traction signals:**
- Named customers on the website: Tecton, Tier1, Koike, Milltown Paper, Iowa Mold, Kuebler, Givi, Zeiss (arzana.com)
- Customer testimonial: "Arzana makes it so our salespeople can generate and send quotes with one click, instead of taking 15 minutes" — Trent Duerr, President & CEO, Milltown Paper (arzana.com)
- Product claims: 99.9% accuracy, 10x faster processing, 70% fewer errors (arzana.com)
- Press: Featured in The New York Times, "These A.I. Dreamers Don't Fit the Stereotype" by Guy Trebay (February 8, 2026)
- Twitter/X: @Arzana_AI — follower count not retrievable
- LinkedIn: linkedin.com/company/arzana-ai — follower count not retrievable
- Additional social presence: Instagram, YouTube, TikTok (@arzana_automation) (arzana.com/about)
- Product Hunt: No listing found
- YC job postings: Previously listed "Founding Full-Stack Engineer (Agents-focused)" and "Founding Agents Engineer" on YC jobs (YC search results); no current postings (YC jobs page)
- No public revenue, ARR, or user count data found.

**Competitive landscape:**

| Competitor | Raised | Revenue | Key Differentiator vs. Arzana |
|------------|--------|---------|-------------------------------|
| Conexiom | $170M (Tracxn) | $28.7M (2024; Latka) | Focused on touchless sales order processing; more mature, higher market; processes $100B+ in B2B transactions annually |
| Paperless Parts | ~$51M (Tracxn) | Est. $50-100M (Growjo) | Specializes in quoting for CNC/3D printing job shops; 500+ customers; narrower scope |
| Esker | Acquired by Bridgepoint/GA (Edison Group) | €43.8M quarterly Q3 2023 (Edison Group) | Horizontal order-to-cash platform; 3,000+ customers including NVIDIA, Sony, Heineken; not manufacturing-specific |
| DigiFabster | Seed-funded (Tracxn) | Revenue unknown | Focused on CNC/3D printing instant quoting; launched AI Quote Agent; narrower vertical |

**Why now:**
- [Inferred]: LLM capabilities crossed a performance threshold in 2024-2025 enabling reliable extraction of structured data from unstructured manufacturing documents (RFQs, POs, emails) at accuracy levels sufficient for production use — a task that prior OCR/NLP approaches handled poorly for the varied formats in manufacturing.
- [Inferred]: The manufacturing labor shortage has intensified pressure to automate administrative work rather than hire additional staff, creating urgency among manufacturers to adopt automation tools.

## Founders & Team

**William Alexander** — Co-Founder & CEO
- Age 21 as of February 2026 (The New York Times, Feb 8, 2026)
- BS Economics & Computer Science, Stanford University (YC page)
- Grew up in Okoboji, Iowa, working for a manufacturing sourcing company (arzana.com/founders/william)
- Self-taught Mandarin Chinese (semester in Hong Kong) and Italian; achieved state ranking in discus via self-taught YouTube technique (NYT, Feb 2026)
- Twitter/X: @williealex (unconfirmed if this is the correct account; handle found via search but not verified against Arzana affiliation)
- LinkedIn: linkedin.com/in/william--alexander
- GitHub: github.com/WilliamAlexander — 8 public repos (unconfirmed if same person; common name)

**Marshall Kools** — Co-Founder & COO
- Age 24 as of February 2026 (The New York Times, Feb 8, 2026)
- MS Engineering & Policy, Stanford University (YC page)
- D1 Wrestler at Stanford; 2020 Wisconsin state champion from Neenah High School (GoStanford Athletics)
- Also played Men's Rugby at Stanford (Stanford Club Sports)
- Previously COO at Brilla (eatbrilla.com)
- Reported earning ~$10,000 in personal salary in the prior year (NYT, Feb 2026)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/marshallkools
- GitHub: No public repos found

**Co-founder relationship:** Both founders attended Stanford University, where William studied Economics & CS (undergraduate) and Marshall completed an MS in Engineering & Policy. William states they met at Stanford and co-founded Arzana in 2025 (arzana.com/founders/william).

**Founder-market fit:** Both founders have direct personal exposure to manufacturing operations — William grew up working at a manufacturing sourcing company in Iowa, and Marshall worked manufacturing jobs in Wisconsin (arzana.com/about). Their Midwest roots (Okoboji IA, Neenah/Appleton WI) provide authentic connection to the industrial customer base, and the company maintains offices in both regions alongside San Francisco (arzana.com). William's CS background at Stanford provides technical capability; Marshall's Engineering & Policy MS and operational experience (COO at Brilla) provide operations expertise.

## Key Risks

**Entrenched incumbent competition:** Conexiom ($170M raised, $28.7M revenue; Tracxn/Latka) directly competes in sales order automation for manufacturers and has announced its own AI platform (conexiom.com). Esker has 3,000+ enterprise customers and was acquired by Bridgepoint/General Atlantic, giving it substantial resources (Edison Group). Paperless Parts has 500+ customers in manufacturing quoting (Tracxn). Arzana must win against well-funded, established players with existing customer relationships and ERP integrations.

**ERP integration complexity:** The product integrates with 10+ ERP systems (arzana.com). Each integration requires ongoing maintenance as ERP vendors release updates. The forward-deployed model (engineers onsite for weeks per customer; arzana.com/about) may limit scaling velocity and increase customer acquisition costs.

**Founder youth and manufacturing credibility:** William Alexander is 21 and Marshall Kools is 24 (NYT, Feb 2026). Selling AI-driven process automation to manufacturing executives — a traditionally conservative buyer segment — may face credibility barriers. The founders' Midwest manufacturing backgrounds partially mitigate this.

**Customer concentration risk:** The company lists 8 named customers (arzana.com). No public data exists on revenue distribution. [Inferred]: At this stage, revenue concentration among a small number of early customers is likely, creating dependency risk.

**Forward-deployed scaling tension:** The onsite engineering deployment model provides deep integration but is labor-intensive for a 5-person team. Scaling beyond initial customers requires either hiring significantly or productizing the deployment process to reduce per-customer engineering time.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $17.46B manufacturing operations management software in 2024, 19.1% CAGR to $76.71B by 2033 (Grand View Research, 2024 via search snippet) |
| SAM | No public data found |
| Traction | 8 named customers including Zeiss (arzana.com); NYT feature (Feb 8, 2026); no public user counts or revenue data |
| Revenue Signal | No public data found |
| Founders | William Alexander (CEO): Stanford Econ+CS, Iowa manufacturing background. Marshall Kools (COO): Stanford MS Engineering+Policy, D1 wrestler, prior COO at Brilla |
| Competitors | Conexiom ($170M raised, $28.7M ARR 2024, touchless order processing; Tracxn/Latka); Paperless Parts (~$51M raised, 500+ customers, job shop quoting; Tracxn); Esker (acquired by Bridgepoint/GA, €43.8M quarterly rev Q3 2023, horizontal O2C; Edison Group); DigiFabster (seed-funded, CNC/3D quoting; Tracxn) |
| Moat Signals | Per-customer AI models trained on historical job costs (arzana.com); ERP/CRM integration switching costs; ITAR compliance (arzana.com) |
| Risk Factors | Entrenched funded competitors (Conexiom, Esker, Paperless Parts), ERP integration complexity limiting scale, forward-deployed model scaling constraints |
| Founder Reach | William Alexander: LinkedIn linkedin.com/in/william--alexander; Twitter unconfirmed. Marshall Kools: LinkedIn linkedin.com/in/marshallkools; Twitter not found. Company: @Arzana_AI on X, counts not retrievable |
| Distribution Signals | NYT feature (Feb 8, 2026); forward-deployed sales model; no Product Hunt listing found; no app store presence |
| Emails | william@arzana.com, marshall@arzana.com, careers@arzana.com (YC page, arzana.com/about) |
