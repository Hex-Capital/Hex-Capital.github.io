# Mantis Biotechnology

> The Infrastructure Powering Human-In-Computer Models

| Field | Value |
|-------|-------|
| Website | https://mantisbiotech.com/ |
| YC Page | https://www.ycombinator.com/companies/mantis-biotechnology |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 3 |
| Location | New York, NY, USA |
| Tags | Artificial Intelligence, Sports Tech, Biotech, Architecture, Biotechnology |

## The Idea

**Problem:** Life sciences and biomedical companies work with fragmented data across motion capture, biometric sensors, medical imaging, training logs, and clinical systems. Integrating these data sources for cross-system analyses takes 4–12 weeks and costs $100,000–$500,000 per analysis (YC company page). The company cites that 80% of clinical trials are delayed by data inaccuracies and each trial loses an average of $15M due to data quality issues (YC company page). Current workflows require lengthy data reconstruction projects to answer new research questions, making it prohibitively slow and expensive to build validated computational models of human anatomy and physiology.

**Approach:** Mantis provides a "domain-aware data platform" that encodes biological and clinical meaning directly into reusable datasets (YC company page). The platform unifies fragmented biomedical data sources, simulates human anatomy and physiology, and validates outputs against real-world outcomes—transforming raw data into validated digital twins ready for production applications. The company's website describes it as "the data layer for life sciences performance" (mantisbiotech.com). Rather than requiring companies to reconstruct data for each new question, Mantis enables teams to answer new questions with queries against pre-structured, biologically meaningful datasets.

**Differentiation:** Mantis positions itself as infrastructure—the foundational data layer—rather than an end-application. Competitors in the digital twin space tend to focus on specific verticals: Unlearn.AI generates synthetic control arms for clinical trials, Twin Health builds metabolic health digital twins for patients, and Quibim creates organ-level digital twins from medical imaging. Dassault Systèmes' Living Heart Project provides a fully parametric heart simulation but is focused on medical device testing and surgical planning rather than a general-purpose data integration layer. Mantis differentiates by aiming to be a horizontal infrastructure platform that normalizes and unifies heterogeneous biomedical data types (motion capture, biometric sensors, imaging, training logs) into a common framework for downstream digital twin applications.

**Business Model:** No public pricing page was found at the time of research—the website displayed minimal content (mantisbiotech.com). [Inferred]: Given the B2B infrastructure positioning, platform-level data integration pricing, and the enterprise nature of clinical/biomedical customers, the most likely monetization path is a SaaS subscription or consumption-based model targeting pharmaceutical companies, medical device manufacturers, and sports performance organizations.

**TAM/SAM:** The healthcare digital twin market was estimated at $902.6 million in 2024 and is projected to reach $3.55 billion by 2030 at a 25.9% CAGR (Grand View Research, 2024 via search snippet). A separate estimate valued the broader digital twins in healthcare market at $2.69 billion in 2024, projected to reach $59.94 billion by 2030 at a 68.0% CAGR (MarketsandMarkets, 2024 via search snippet). Another source estimated the healthcare digital twin market at $3.26 billion in 2025, growing to $77.4 billion by 2034 at a 42.2% CAGR (Towards Healthcare, 2025 via search snippet). The wide variance across these estimates reflects differing scope definitions. No SAM estimate specific to biomedical data infrastructure/integration was found.

**GTM / Distribution:** The YC company page references "forward-deployed engineers" working with customers (YC company page via search snippet). [Inferred]: The most likely distribution path is direct enterprise sales to pharmaceutical companies, medical device manufacturers, and clinical research organizations, supplemented by the YC network. The "Sports Tech" tag suggests potential expansion into sports performance and training analytics. Gustaf Alstromer is listed as the primary YC partner (YC company page).

## Defensibility

Mantis's potential moat centers on data normalization and domain encoding. By building the mapping layer between heterogeneous biomedical data formats and biologically meaningful representations, the platform could develop switching costs as customers integrate it into their workflows and build datasets on top of it. The "domain-aware" encoding of biological and clinical meaning into reusable datasets represents accumulated domain knowledge that would be difficult to replicate without deep biomedical expertise.

No patents, published IP filings, or open-source repos with meaningful community adoption were found in public sources.

**Market structure:** Dassault Systèmes operates the Living Heart Project, the largest digital twin ecosystem for human simulation, running for 8+ years (Dassault Systèmes blog, 2025 via search snippet). However, Dassault's approach is organ-specific and focused on medical device testing, not a general-purpose biomedical data unification layer. Large clinical data management incumbents (Medidata, Veeva) focus on clinical trial workflows rather than multi-modal biomedical data integration for digital twin construction. [Inferred]: Incumbents in clinical data management have sales channels and product architectures optimized for clinical trial operations, making it structurally difficult to pivot into a physics-based simulation infrastructure layer without cannibalizing existing product positioning.

**Commoditization risk:** The biomedical data integration space involves deep domain expertise in both software engineering and biological/clinical data standards. General-purpose data integration platforms (e.g., Snowflake, Databricks) lack the domain-specific biological encoding. However, well-funded digital twin competitors (Unlearn.AI with $135M, Quibim with $70M) could build similar data infrastructure layers if the market opportunity becomes clear.

## Market & Traction

**Traction signals:**
- Website: Minimal content at time of research—displays "Mantis" as header with no detailed product pages, pricing, or metrics (mantisbiotech.com, Feb 2026).
- LinkedIn company page: https://www.linkedin.com/company/mantis-biotech — follower count not retrievable.
- Instagram: @mantisbiotech account exists (Instagram via search snippet) — follower count not retrievable.
- Twitter/X: No company Twitter/X account found.
- Product Hunt: No launch found.
- App stores/Chrome Web Store: Not applicable.
- Job postings: 0 active job postings on YC (YC company page).
- One LinkedIn post referenced Mantis "announcing the conclusion" of an unspecified milestone (LinkedIn post URL found via search snippet; full details not retrievable).
- No public revenue, user count, or customer data found.

**Competitive landscape:**

1. **Unlearn.AI** ($135M total raised, $50M Series C in Jan 2024; BusinessWire, Feb 2024): Generates AI-powered digital twins specifically for clinical trials—creating synthetic control arms to reduce control group sizes. Has EMA qualification and FDA agreement for use in Phase 2/3 trials. Differentiator vs. Mantis: Unlearn is application-specific (clinical trial optimization) rather than a general data infrastructure layer.

2. **Quibim** (~$70M total raised, $50M Series A in Jan 2025; TechCrunch, Jan 2025): AI-powered medical imaging biomarkers and organ-level digital twins (QP-Brain, QP-Prostate, QP-Liver). Based in Valencia, Spain, expanding to the U.S. Differentiator vs. Mantis: Quibim focuses on imaging-specific biomarkers and organ models rather than multi-modal data unification.

3. **Twin Health** ($301.56M total raised, $53M Series E in May 2025; MobiHealthNews, 2025 via search snippet; ~$4.4M annual revenue as of March 2024, Tracxn via search snippet): Consumer/patient-facing metabolic health digital twin for diabetes and obesity management. Published study in NEJM Catalyst. Differentiator vs. Mantis: Twin Health is a direct-to-consumer health service, not an infrastructure platform for other companies.

4. **Dassault Systèmes Living Heart Project** (division of publicly traded Dassault Systèmes, market cap ~$50B+): 8+ years developing fully parametric, customizable whole-heart simulation; expanding to liver, lungs, and brain (Dassault Systèmes blog, 2025). Differentiator vs. Mantis: Enterprise incumbent focused on organ-specific simulation for medical device testing, not a startup-speed data integration layer for heterogeneous biomedical data.

**Why now:** [Inferred]: Several converging factors may be opening this opportunity: (1) The proliferation of wearable sensors, motion capture systems, and biometric devices has created an explosion of human performance and physiological data that lacks a unification layer. (2) Advances in physics-based simulation and AI have made it computationally feasible to build validated digital twins of human anatomy at production scale. (3) FDA and EMA have begun qualifying digital twin methodologies for regulatory use (Unlearn.AI received EMA qualification for digital twin use in clinical trials; BusinessWire, Dec 2024), creating institutional validation for the approach. (4) The increasing cost of clinical trials ($15M average loss per trial from data quality issues, per Mantis's YC page) has made data infrastructure investment more palatable for pharma and medical device companies.

## Founders & Team

**Georgia Witchel** — Founder & CEO
- High school dropout accepted to Harvey Mudd College (UW Bioengineering news article, 2025).
- BS Computer Science from Harvey Mudd College; also studied psychology at Harvey Mudd and computational math at Johns Hopkins (Wellfound via search snippet; UW Bioengineering news article, 2025).
- Master of Applied Bioengineering (MAB) from the University of Washington, graduated May 2025 (UW Bioengineering news article, 2025).
- Former elite ice climber: competed at Junior Olympics, 4 years as a professional, brought ice climbing to an Olympic stage (Lillehammer 2016), broke 8 world records, worked with Adidas for 8 years (UW Bioengineering news article, 2025; YC company page).
- Avalanche-certified EMT; engineer at an Italian sportstech startup (UW Bioengineering news article, 2025).
- Previously Co-founder & CTO of Louiza Labs (YC S25), which raised over $5 million total including $4M+ during YC (UW Bioengineering news article, 2025). Louiza Labs built a physics engine for simulated human biology, powering digital twins for autonomous surgical robotics and simulated FDA trials.
- Twitter/X: @GWitchel — follower count not retrievable (X.com).
- LinkedIn: linkedin.com/in/georgia-witchel-852b78149/ — headline: "Mantis Biotech" (LinkedIn via search snippet).
- GitHub: github.com/gwitchel — 43 public repos, 5 total stars, Arctic Code Vault Contributor (GitHub).

**Sarah Jiang** — Team member (role not specified)
- Biostats PhD student at Duke University Pratt School of Engineering (LinkedIn via search snippet).
- Interested in deep learning, ML theory, and AI fairness (LinkedIn via search snippet).
- LinkedIn: linkedin.com/in/sarahhjiang/ — 500+ connections (LinkedIn via search snippet).
- Twitter/X: No public account found.
- GitHub: No public repos found.

The third team member (team size is 3 per YC page) was not identified in public sources.

**Louiza Labs relationship:** Georgia Witchel co-founded Louiza Labs (YC S25) with Larissa Tyagi (CEO, ex-Apple, Carnegie Mellon) and Cynthia Sainz (Founding Engineer). The Louiza Labs YC page describes the company as "Hebbia for Pharmaceutical Evidence" (YC company page for Louiza Labs), while its YC Launch page described "Simulated Human Biology" (YC Launches). Witchel transitioned from CTO at Louiza Labs to Founder & CEO of Mantis Biotechnology (YC W26). Both companies are listed as active on YC and share the same YC partner (Gustaf Alstromer). The digital twin and simulation technology described in the Louiza Labs launch appears closely related to Mantis's product.

**Co-founder relationship:** Mantis lists only Georgia Witchel as founder on YC. No co-founder relationship to assess.

**Founder-market fit:** Witchel's combination of a CS degree (Harvey Mudd) and a biomedical engineering master's (University of Washington) directly maps to the cross-disciplinary challenge of building biologically meaningful data infrastructure. Her prior company (Louiza Labs) built a physics engine for simulated human biology, providing direct technical experience in the problem domain. Her background as an elite athlete (ice climbing) aligns with the Sports Tech tag and suggests firsthand understanding of human performance data. The experience of raising $5M+ and going through YC S25 provides operational founder experience. Mentors at UW included Affiliate Professor Dean Pettit, Professor Pat Boyle, Professor Katie Liu (UW School of Medicine), and Dr. Hilliard Brydges (UW Bioengineering news article, 2025).

## Key Risks

**Louiza Labs overlap and corporate clarity:** Witchel co-founded Louiza Labs (YC S25) and then founded Mantis Biotechnology (YC W26) within the same year. Both companies involve biomedical simulation and digital twins. The relationship between the two entities—whether Mantis is a spinout, a pivot of the underlying technology, or a fully independent venture—is unclear from public sources. This creates potential questions around IP ownership, investor overlap, and founder bandwidth.

**Brand disambiguation:** Multiple companies use "Mantis" in their names across different industries: Mantis Innovation (energy services), Mantis VC (venture fund), Mantis AI, and an unrelated Mantis Technologies. The generic name creates SEO and brand recognition challenges. Mantis Biotechnology does not currently appear prominently in web search results for "Mantis."

**Website maturity and market visibility:** The company website (mantisbiotech.com) displayed only minimal content ("Mantis" header) at time of research, with no product description, pricing, documentation, or customer evidence. For a B2B infrastructure company, lack of a substantive web presence may hinder enterprise buyer discovery and evaluation.

**Well-funded competition in adjacent verticals:** Several digital twin companies have raised substantial capital: Unlearn.AI ($135M), Twin Health ($301M), Quibim ($70M), and Dassault Systèmes operates its Living Heart Project with the resources of a $50B+ public company. While these compete in specific verticals rather than in horizontal data infrastructure, any of them could build a data unification layer as they expand.

**Technical validation gap:** The core claim—that Mantis can "validate against real-world outcomes" and create production-ready digital twins from heterogeneous biomedical data—involves significant technical complexity. No public evidence of peer-reviewed validation, published benchmarks, regulatory qualification, or customer case studies was found. The technology remains publicly unproven at production scale.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $902.6M healthcare digital twin market in 2024, projected $3.55B by 2030, 25.9% CAGR (Grand View Research, 2024 via search snippet). Alternate estimate: $2.69B in 2024, projected $59.94B by 2030, 68.0% CAGR (MarketsandMarkets, 2024 via search snippet) |
| SAM | No public data found |
| Traction | No public data found (no users, revenue, or customer metrics identified) |
| Revenue Signal | No public data found |
| Founders | Georgia Witchel (Founder & CEO): Harvey Mudd CS, UW Biomedical Engineering MS, ex-elite ice climber, previously Co-founder & CTO of Louiza Labs (YC S25, $5M+ raised) |
| Competitors | Unlearn.AI ($135M raised, revenue unknown, clinical-trial-specific digital twins vs. horizontal data infrastructure); Quibim (~$70M raised, revenue unknown, imaging-specific organ digital twins vs. multi-modal data unification); Twin Health ($301M raised, ~$4.4M ARR, consumer metabolic health digital twin vs. B2B infrastructure); Dassault Systèmes Living Heart Project (public company division, revenue unknown, organ-specific simulation vs. general data layer) |
| Moat Signals | No public data found. [Inferred]: Potential moat via domain-specific biological data encoding and switching costs as customers build datasets on the platform |
| Risk Factors | Louiza Labs corporate overlap and IP clarity, well-funded adjacent competitors, unvalidated core technology claims |
| Founder Reach | Georgia Witchel: Twitter @GWitchel (count not retrievable), LinkedIn 500+ connections, GitHub 5 stars across 43 repos |
| Distribution Signals | No public data found |
