# screenpipe

> Help your team find the work worth automating

| Field | Value |
|-------|-------|
| Website | https://screenpipe.com |
| YC Page | https://www.ycombinator.com/companies/screenpipe |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 6 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, B2B, Enterprise, Enterprise Software, AI |
| YC Partner | Gustaf Alstromer (YC company page) |
| Emails | louis@screenpi.pe (screenpipe.com homepage) |

## The Idea

- **Problem:** Teams cannot identify which repetitive computer-based work processes are worth automating because those processes are undocumented and distributed across screen, audio, and dozens of SaaS apps; the current alternative is manual SOP writing or generic screen-recording tools like Rewind.ai and Microsoft Recall (screenpipe.com homepage; Screenpipe docs).
- **Approach:** A local-first Rust agent captures screen, audio, and 48+ connected apps (Slack, Gmail, Linear, Zoom, Salesforce, HubSpot) on-device, then converts activity into a searchable memory plus "Pipes" (automations triggered on-device that write back to connected tools) with PII scrubbing via a proprietary on-device model (screenpipe.com homepage).
- **Differentiation:** vs. Rewind.ai/Limitless (cloud-dependent, disabled desktop app Dec 19, 2025 after Meta acquisition) — screenpipe is source-available and local; vs. Granola (meeting-audio only, cloud) — screenpipe adds screen capture and works across all apps; vs. Microsoft Recall (Copilot+ PC only, Windows-only, no automations) — screenpipe runs on macOS/Windows/Linux and ships agent Pipes (Screenpipe blog "Best AI Screen Recorder 2026"; GeekWire, 2026; TechCrunch, Mar 2026).
- **Business Model:** Standard $25/mo, Pro $50/seat/mo (5-seat minimum, cloud sync + integrations), Enterprise $150/seat/mo (SSO/SAML, MDM, admin dashboard, sales-led); core is source-available for personal non-commercial use (AISO Tools pricing page, 2026; Screenpipe license-update blog).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** Open-source top-of-funnel via GitHub (19k+ stars) feeding into paid Pro/Enterprise seats, plus founder-led inbound on LinkedIn/X; enterprise motion is sales-led per pricing page (GitHub screenpipe/screenpipe; AISO Tools, 2026).

## Defensibility

- **Moat today:** 19k+ GitHub stars and source-available Rust codebase (GitHub screenpipe/screenpipe); reported 250k users create a data/network signal (search snippet, LinkedIn post by Louis Beaumont via search).
- **Future moat:** [Inferred]: Proprietary on-device PII-scrubbing model plus a library of shared "Pipes" and workflow patterns per company could create switching costs as accumulated screen/audio memory grows; unproven because no public retention or paid-conversion metrics exist.
- **Market structure:** [Inferred]: Cloud-first incumbents (Rewind/Limitless, Granola) face architectural rewrites and enterprise-privacy repositioning to match a local-first model — Rewind's disabled desktop app after Meta acquisition (GeekWire, 2026) and Recall's repeated security incidents (GeekWire, 2026) illustrate the difficulty of shipping trusted always-on capture.
- **Commoditization risk:** Microsoft ships Recall natively on Copilot+ PCs at zero marginal cost, and open-source forks of screenpipe already exist on GitHub (atzamis/screen-pipe, EvolvingSoftware/screen-pipe fork listings on GitHub).

## Market & Traction

- **Traction signals:**
  - 19k+ GitHub stars on screenpipe/screenpipe (screenpipe.com homepage; GitHub, 2026).
  - 250k users cited (search snippet referencing LinkedIn posts by Louis Beaumont).
  - Users at Microsoft, Google, NVIDIA, Intel, Shopify, Atlassian, Datadog, Adobe, Salesforce, Thomson Reuters, MIT, Stanford, Harvard (screenpipe.com homepage).
  - Product Hunt 5.0 rating with 1 review; two Product Hunt appearances (Product Hunt, 2026).
  - 48+ app integrations shipped including Slack, Gmail, Linear, Zoom, Salesforce, HubSpot (screenpipe.com homepage).
  - Pricing published across three tiers ($25 / $50 / $150 per seat), indicating monetization live (AISO Tools, 2026).
  - Louis Beaumont GitHub: 479 followers (search snippet, GitHub louis030195).
- **Competitors:**
  - Limitless AI (formerly Rewind.ai) ($80.1M raised, $8.7M ARR 2024, Getlatka; acquired by Meta Dec 2025 per GeekWire 2026): screenpipe differs by remaining local-first and source-available after Rewind's desktop app was disabled Dec 19, 2025.
  - Granola ($192M total raised, $1.5B valuation Series C Mar 2026, TechCrunch): meetings-audio focus and cloud; screenpipe covers full screen + all apps and stores data locally.
  - Microsoft Recall (not independently funded — bundled with Copilot+ PCs, launched Apr 2025 per GeekWire): Windows-only and no cross-app automation Pipes; screenpipe supports macOS/Windows/Linux.
  - Otter.ai (revenue unknown at time of research): meeting transcription only; screenpipe adds continuous screen memory and on-device Pipes (Screenpipe blog comparisons).
- **Why now:** [Inferred]: The Meta acquisition of Rewind and disabling of its desktop app on Dec 19, 2025 (GeekWire, 2026) plus Recall's repeated security incidents opened a positioning window for a local-first, source-available alternative in the 12 months prior to screenpipe's YC S26 batch.

## Founders & Team

- **Louis Beaumont (Founder):**
  - Background: Solo founder listed on YC page; previously co-founded Mediar (2024, with Matt Diakonov) which built automated data entry for legacy software like SAP (Founders Inc portfolio page); Techstars '22 alum and OrangeDAO F1 member; per search snippets, prior work at "French CIA" and built a five-figure video-game bots business at 14 (search snippets from LinkedIn posts).
  - Twitter/X: @louis030195 — count not retrievable (X.com louis030195).
  - LinkedIn: "Founder of screenpipe (YC S26)" (linkedin.com/in/louis030195).
  - GitHub: @louis030195 — 479 followers; top repo is screenpipe/screenpipe with 19k+ stars (GitHub, 2026).
- **Co-founder relationship:** Solo founder per YC page; prior company Mediar was co-founded with Matt Diakonov, who is not listed on the current screenpipe team (YC page; Founders Inc).
- **Founder-market fit:** Beaumont's prior Mediar (SAP/legacy-software automation via screen input) directly rehearses screenpipe's screen-capture-to-automation thesis (Founders Inc portfolio page); no advisors, board members, or named investors beyond YC S26 found in public sources.

## Key Risks

- **Platform substitution by Microsoft Recall and Apple/Meta:** Recall ships natively on Copilot+ PCs at $0 marginal cost and Meta acquired Rewind Dec 2025 (GeekWire, 2026; The Information/Rewind on X), threatening the paid-seat model; mitigation is local-first + cross-OS + Pipes automation layer, which Recall does not offer today.
- **Privacy/security incident exposure:** Always-on screen + audio capture is a high-severity target; Microsoft Recall has faced repeated security-researcher disclosures one year post-launch (GeekWire, 2026), and screenpipe's on-device PII scrubbing is proprietary but unaudited in public sources.
- **Open-source cannibalization:** Source-available forks already exist (atzamis/screen-pipe, EvolvingSoftware/screen-pipe, AllyourBaseBelongToUs/screen-pipe on GitHub); the recent license update from open-source to source-available (Screenpipe blog "license update") is a mitigation but may erode community goodwill that drove 19k+ stars.
- **Enterprise procurement friction:** Selling always-on screen/audio capture into Fortune 500s requires SSO/SAML, MDM, and legal review; screenpipe lists these on the $150/seat Enterprise tier but has no publicly disclosed signed enterprise contracts (AISO Tools, 2026).
- **Solo-founder execution risk:** Team of 6 with one founder listed on YC page raises single-point-of-failure and hiring-throughput risk for a product spanning macOS/Windows/Linux + integrations + AI models (YC company page).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | 19k+ GitHub stars (screenpipe.com, 2026); 250k users (search snippet from Louis Beaumont LinkedIn posts); customer logos include Microsoft, Google, NVIDIA, Intel, Shopify, Atlassian, Datadog, Adobe, Salesforce, Thomson Reuters, MIT, Stanford, Harvard (screenpipe.com homepage); Product Hunt 5.0 rating, 1 review (Product Hunt, 2026) |
| Revenue Signal | Standard $25/mo, Pro $50/seat/mo (5-seat min), Enterprise $150/seat/mo (AISO Tools pricing, 2026); lifetime licenses discontinued (Screenpipe license-update blog) |
| Founders | Louis Beaumont (Founder): prior co-founder of Mediar (SAP data-entry automation, 2024); Techstars '22; OrangeDAO F1; @louis030195 on GitHub |
| Competitors | Limitless AI/Rewind.ai ($80.1M raised, $8.7M ARR 2024, acquired by Meta Dec 2025 — desktop disabled); Granola ($192M raised, $1.5B valuation Mar 2026 — meetings-audio only); Microsoft Recall (bundled with Copilot+ PCs — Windows-only, no automations); Otter.ai (revenue unknown — meeting transcription only) |
| Moat Signals | 19k+ GitHub stars (GitHub screenpipe/screenpipe); source-available Rust codebase; 48+ app integrations; proprietary on-device PII-scrubbing model (screenpipe.com) |
| Risk Factors | Microsoft Recall / Meta-Rewind platform substitution, privacy/security incident exposure, open-source forks, solo-founder execution |
| Founder Reach | Louis Beaumont: Twitter @louis030195 count not retrievable, LinkedIn Founder headline confirmed, GitHub 479 followers / 19k+ stars on screenpipe |
| Distribution Signals | GitHub 19k+ stars (screenpipe.com, 2026); two Product Hunt appearances (Product Hunt, 2026); YC S26 batch page (ycombinator.com/companies/screenpipe) |
| Emails | louis@screenpi.pe (screenpipe.com homepage) |

Sources:
- [screenpipe homepage](https://screenpipe.com/)
- [YC company page — screenpipe](https://www.ycombinator.com/companies/screenpipe)
- [GitHub — screenpipe/screenpipe](https://github.com/screenpipe/screenpipe)
- [Louis Beaumont LinkedIn](https://www.linkedin.com/in/louis030195/)
- [Louis Beaumont GitHub — louis030195](https://github.com/louis030195)
- [AISO Tools — Screenpipe Pricing 2026](https://aisotools.com/pricing/screenpipe)
- [Screenpipe license update blog](https://screenpipe.com/blog/screenpipe-license-update)
- [Screenpipe — Best AI Screen Recorder 2026](https://screenpipe.com/blog/best-ai-screen-recorder-2026)
- [Product Hunt — Screenpipe](https://www.producthunt.com/products/screenpipe)
- [Mediar — Founders Inc portfolio](https://f.inc/portfolio/mediar/)
- [GeekWire — one year after Recall launch](https://www.geekwire.com/2026/one-year-after-its-rocky-launch-microsofts-windows-recall-still-raises-security-red-flags/)
- [TechCrunch — Granola $125M Series C](https://techcrunch.com/2026/03/25/granola-raises-125m-hits-1-5b-valuation-as-it-expands-from-meeting-notetaker-to-enterprise-ai-app/)
- [Crunchbase — Limitless AI (formerly Rewind AI)](https://www.crunchbase.com/organization/rewind-ai)
- [Getlatka — Rewind revenue $8.7M ARR](https://getlatka.com/companies/rewind)
