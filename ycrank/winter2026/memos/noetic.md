# noetic

> AI that gets hardware compliance done in weeks, not months.

| Field | Value |
|-------|-------|
| Website | https://getnoetic.ai/ |
| YC Page | https://www.ycombinator.com/companies/noetic |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Hardware, Robotics, Compliance |
| YC Partner | Tyler Bosmeny |
| Emails | founders@getnoetic.ai |

## The Idea

**Problem:** Hardware and robotics companies face a fragmented regulatory landscape spanning dozens of regional and industry-specific standards (FCC, FDA, FAA, CE, UL, ISO, RIA) and thousands of underlying codes. Teams spend months and tens of thousands of dollars in consultant fees just determining which requirements apply to their products, then must assemble technical documentation and locate qualified testing laboratories. Today, companies either hire specialized compliance consultants (costing $150–$500+/hour) or rely on internal regulatory affairs staff to manually research standards — a process prone to gaps and delays. Software companies have tools like Vanta for SOC 2/ISO 27001, but no comparable platform exists for hardware product safety certification (company website; YC page).

**Approach:** Noetic deploys AI agents that: (1) ingest product details and automatically surface every applicable standard and requirement with full citations, (2) draft the technical documentation packages needed for testing labs (risk assessments, HARAs, safeguard specs, safety cases), and (3) match teams with the right specialized testing laboratories. The platform runs gap analyses against existing documentation to identify what is missing relative to standards such as UL 3300, R15.06, ISO 21434, B11.0, FCC, CE, FDA 510(k), UL, ISO 9001/9100, and ISO 26262 (company website).

**Differentiation:** Compared to Saphira AI (YC S24), which focuses on generating traceable safety reports and automating traceability for TÜV/UL/CE certification (ingesting norm and test data), Noetic emphasizes the end-to-end workflow including upstream regulatory identification, documentation drafting, and downstream lab matching. Kite Compliance (founded 2025, NYC) offers an AI copilot with expert human support for product certification requirements mapping but pairs software with human advisory rather than fully automated documentation generation. Traditional compliance consultants (e.g., firms interfacing with SGS, UL Solutions, Intertek) provide manual research and documentation but at significantly higher cost and longer timelines.

**Business Model:** No public pricing page was found on the company website; the site features demo booking CTAs. [Inferred]: Most likely monetization path is a SaaS subscription model, potentially tiered by number of products or standards tracked, given the B2B compliance automation category norms and the recurring nature of compliance monitoring across product lifecycles.

**TAM/SAM:** The global Testing, Inspection, and Certification (TIC) market was valued at approximately $263–276 billion in 2025–2026 (MarketsandMarkets, 2025; Global Growth Insights, 2025 via search snippet). The Electrical & Electronics TIC subsegment was estimated at $119 billion in 2025 (Market Research Future via search snippet). Global regulatory compliance services exceeded $50 billion in 2025 (via search snippet, source unspecified). [Inferred]: Noetic's SAM is the portion of compliance spend directed at consulting fees and software tools for identifying applicable standards and preparing documentation — a subset of the broader TIC market. No public SAM estimate specific to this segment was found.

**GTM / Distribution:** The website features demo booking links, suggesting a direct sales-led or product-led sales motion targeting hardware and robotics engineering teams. The LinkedIn handle @trynoetic is listed on the site. [Inferred]: Most likely distribution path is outbound to robotics startups and hardware companies navigating new standards (e.g., UL 3300 compliance wave), supplemented by content marketing around regulatory changes and YC network referrals.

## Defensibility

No defensibility signals found in public sources at this stage. [Inferred]: Potential moat could develop via (1) a proprietary structured database of mapped regulatory requirements across standards, jurisdictions, and product categories — building a knowledge graph that improves with each customer engagement; (2) relationships with testing laboratories that create a two-sided marketplace dynamic; (3) switching costs once compliance documentation and audit trails are centralized on the platform. None of these are proven at this stage.

**Market structure:** Traditional compliance consulting firms (e.g., boutique regulatory consultants, large TIC companies like SGS, UL Solutions, Intertek) derive revenue from billable hours and test fees. An AI platform that automates the research and documentation portions cannibalizes their highest-margin advisory work, creating a disincentive to build comparable software tools. UL Solutions ($3.0 billion revenue, 14,000 employees across 46 countries) has a business model centered on lab testing and certification fees, not software subscriptions — self-cannibalizing their consulting revenue to sell software would require a fundamental business model shift. [Inferred]: This business model conflict is the primary structural barrier.

**Commoditization risk:** The core capability — parsing regulatory standards and mapping them to product specifications — could be replicated by other AI-focused compliance startups (Saphira AI is already adjacent), by large language model providers offering specialized compliance agents, or by TIC incumbents if they invest in software. The regulatory content itself (standards documents from ISO, UL, IEC) is publicly purchasable, so there is no proprietary data lock. Differentiation will likely depend on accuracy, depth of standards coverage, and the quality of lab-matching network.

## Market & Traction

**Traction signals:** No revenue, user counts, customer counts, or growth metrics are publicly disclosed on the company website or in search results. No Product Hunt launch found. No Hacker News Launch HN post found. No app store listings or Chrome extension found. The company LinkedIn page uses the handle @trynoetic; follower count was not retrievable. No Twitter/X account was confirmed for the company (searches returned unrelated "Noetic" entities). No Discord or Slack community found. No job postings found beyond the YC page (which indicates is_hiring: false).

**Competitive landscape:**

1. **Saphira AI** ($500K seed, Jul 2024; YC S24; $440K revenue as of 2025 per Latka) — Positions as "Vanta for Hardware." Generates traceable risk assessments (HARA, TARA, FMEA), connects requirements to test evidence, and produces standards-aligned reports for TÜV, UL, CE. Founded by Oscar Avatare and Akshay Chalana (ex-Twitter, Tesla, Amazon, Hyperloop). Key differentiator vs. Noetic: deeper focus on traceability and report generation for specific certification bodies; Noetic differentiates with end-to-end workflow including upstream regulatory identification and lab matching.

2. **Kite Compliance** (founded 2025, 3 employees, NYC; investors: Nine Four Ventures, REHAU New Ventures; funding amount not disclosed) — AI copilot for product compliance questions paired with expert human support. Three-part platform: requirements clarity, AI-powered insights, and outcome accountability. Key differentiator vs. Noetic: hybrid AI-plus-human advisory model vs. Noetic's fully automated agent approach.

3. **Traditional TIC firms (SGS, UL Solutions, Intertek)** — SGS is the world's largest TIC company operating in 140+ countries with 2,600+ labs. UL Solutions generates $3.0 billion annually with 14,000 employees. Intertek operates in 100+ countries with 45,000 employees. These are not software platforms but manual consulting/testing operations. Key differentiator vs. Noetic: full end-to-end testing and certification capability including physical labs, but at significantly higher cost and longer timelines.

4. **Comp AI** ($2.6M pre-seed; OSS Capital, Grand Ventures) — Open-source compliance automation for SOC 2, HIPAA, GDPR, ISO 27001. Adjacent but focused on software/information security compliance, not hardware product safety. Key differentiator: different target market (software compliance vs. hardware compliance).

**Why now:** UL 3300, the safety standard for robots and autonomous systems operating near people, was formally added to OSHA's Nationally Recognized Testing Laboratory (NRTL) Program list on December 31, 2025 (Federal Register, 2025-24076). This made compliance with UL 3300 a prerequisite for commercial deployment of service robots in workplaces, creating an immediate compliance demand wave. Simbe's Tally robot became the first retail system to achieve UL 3300 certification in early March 2026 (Robotics and Automation News, Mar 7, 2026). [Inferred]: The proliferation of AI-enabled robotics companies entering commercial deployment, combined with increasingly complex multi-jurisdictional regulatory requirements and the availability of large language models capable of parsing dense regulatory text, creates a window where automated compliance tooling becomes both technically feasible and urgently needed.

## Founders & Team

**Tony Gao** — Co-founder (likely CEO by elimination)
- Math + Physics @ Yale University (YC page)
- Researcher at APOLLO Lab (Applied Planning, Learning, and Optimization Lab), Yale's robotics lab (LinkedIn via search snippet)
- Activities: Gamma Science (COO), Science Bowl, Science Olympiad, Math Team (Co-president), Computer Club (Co-president), Outreach Program (Co-founder) (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/tony-gao5/ — 128 connections (via search snippet)
- GitHub: No public repos found

**Jack Yin** — Co-founder & COO
- CS + Math @ Yale University (BS 2024–2028) (YC page; RocketReach via search snippet)
- Prior experience: D.E. Shaw Group, IntBot, Citadel Securities, Five Rings (RocketReach via search snippet)
- Researcher at APOLLO Lab, Yale — robotics lab focusing on motion generation, manipulation learning, and integration of continuous and discrete reasoning (search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/jackjyin/ — 500+ connections (via search snippet)
- GitHub: No confirmed public repos found

**Henry Zheng** — Co-founder & CTO
- CS + Econ @ Yale University (BS 2024–2028) (YC page; RocketReach via search snippet)
- Prior experience: Amazon Web Services (AWS), CourseTable, OnyxPoint Global Management, Yale University (RocketReach via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/henry-zheng03/ (via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** All three founders studied at Yale University concurrently (all listed with Yale backgrounds on the YC page). Tony Gao and Jack Yin both worked at the APOLLO Lab (Yale's robotics research lab), establishing a shared research background. Search results indicate Tony Gao introduced Jack Yin to Zetamac, suggesting a prior personal acquaintance predating the company.

**Founder-market fit:** The team combines robotics research experience (Tony Gao and Jack Yin at Yale's APOLLO Lab) with software engineering (Henry Zheng's experience at AWS and CourseTable) and quantitative backgrounds (Jack Yin's stints at D.E. Shaw, Citadel Securities, and Five Rings). The robotics lab experience provides firsthand exposure to the compliance challenges hardware teams face when bringing products to market. No advisors, board members, or notable investors beyond YC were identified in public sources.

## Key Risks

**Brand disambiguation:** At least 8–10 other organizations use the "Noetic" name across different industries (Noetic Cyber, acquired by Rapid7; Noetic Fund; Noetik; Noetic Inc for site plan compliance; Noetic.net; Institute of Noetic Sciences; Noetic Learning math contest; Noetic AI at noeticai.co; Noetica at noetica.ai). This creates SEO competition, brand confusion, and potential trademark challenges. The company uses "getnoetic.ai" as its domain, which partially mitigates this.

**Direct YC competitor overlap:** Saphira AI (YC S24) occupies a very similar market position ("Vanta for Hardware") with a head start — already generating $440K in revenue as of 2025 (Latka) — and has a similar product surface area (automated safety report generation, standards mapping, TÜV/UL/CE compliance). The overlap in target customers (robotics startups, hardware companies) and distribution channels (YC network) creates direct competitive friction.

**Regulatory content licensing:** Noetic's AI must parse and operationalize proprietary standards documents from bodies like ISO, IEC, UL, and ANSI. These standards are copyrighted and sold by their issuing organizations. Scaling an AI platform that systematically ingests and maps these standards may face intellectual property challenges from standards bodies that monetize document sales.

**Founder experience depth:** All three founders are current Yale undergraduates (BS 2024–2028 per available profiles), meaning the team is building the company concurrently with undergraduate studies. While the robotics research and quantitative trading backgrounds are relevant, the team has no prior experience founding or scaling companies, and no prior exits.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Global TIC market: ~$263–276B in 2025–2026 (MarketsandMarkets, 2025; Global Growth Insights, 2025 via search snippet); Electrical & Electronics TIC: ~$119B in 2025 (Market Research Future via search snippet) |
| SAM | No public data found for the specific hardware compliance software segment |
| Traction | No public data found |
| Revenue Signal | No public data found; no pricing page on website |
| Founders | Tony Gao (Co-founder): Math + Physics @ Yale, APOLLO Lab researcher. Jack Yin (Co-founder & COO): CS + Math @ Yale, APOLLO Lab, ex-D.E. Shaw/Citadel/Five Rings. Henry Zheng (Co-founder & CTO): CS + Econ @ Yale, ex-AWS/CourseTable. |
| Competitors | Saphira AI ($500K raised, $440K revenue per Latka 2025, traceability & report generation focus); Kite Compliance (funding undisclosed, hybrid AI + human advisory); Traditional TIC firms (SGS, UL Solutions $3B rev, Intertek — manual consulting/testing, not software) |
| Moat Signals | No public data found |
| Risk Factors | Brand disambiguation across 8+ "Noetic" entities, direct YC competitor overlap with Saphira AI (YC S24), regulatory content IP/licensing risk, undergraduate founding team with no prior exits |
| Founder Reach | Tony Gao: LinkedIn 128 connections, Twitter not found, GitHub not found. Jack Yin: LinkedIn 500+, Twitter not found, GitHub not found. Henry Zheng: LinkedIn not retrievable, Twitter not found, GitHub not found. |
| Distribution Signals | No public data found |
| Emails | founders@getnoetic.ai |
