# Librar Labs

> The next generation of the intelligence layer for the physical world

| Field | Value |
|-------|-------|
| Website | https://www.librarlabs.com |
| YC Page | https://www.ycombinator.com/companies/librar-labs |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 4 |
| Location | San Francisco and Stockholm (company about page) |
| Tags | Artificial Intelligence, Machine Learning, Computer Vision |
| YC Partner | Jared Friedman (YC company page) |
| Emails | info@librarlabs.com, support@librarlabs.com, jonathan@librarlabs.com (company website and YC page) |

## The Idea

**Problem:** An estimated 98% of the world's schools do not have a library management system (company website). Setting up and managing a school library is labor-intensive: cataloging books, tracking circulation, running inventory, and generating reports consume significant librarian time. Many schools, particularly in underserved markets, lack a dedicated librarian altogether. Low adult literacy costs the U.S. economy $2.2 trillion annually, with approximately 20% of high school graduates considered functionally illiterate (company about page). Existing solutions in the K-12 space are dominated by legacy platforms such as Follett Destiny, which serves approximately 75,000 U.S. school libraries (Growjo via search snippet), or open-source systems like Koha that require significant technical setup.

**Approach:** Librar uses computer vision to let librarians photograph bookshelves and automatically identify titles, create catalog records, take inventory, and analyze circulation data. The product functions as a complete Integrated Library System (ILS) including patron self-checkout, a public catalog website, automated reminders, and statistics dashboards — all operable from a smartphone without specialized equipment. Data migration is supported from Excel, CSV, and MARC21 formats (company website). The value proposition is reducing library setup time by 99% and inventory time by 92% (company website claims).

**Differentiation:** Compared to Follett Destiny, the dominant K-12 incumbent, Librar differentiates on two axes: (1) camera-based cataloging powered by computer vision, which eliminates manual barcode scanning or data entry, and (2) the ability to operate a library without a trained librarian, lowering the barrier for schools that cannot hire library staff. Compared to open-source solutions like Koha, Librar offers a managed, mobile-first experience requiring no technical infrastructure. Compared to lighter tools like Libib ($99/year for educators), Librar adds AI-powered shelf recognition and an integrated library system rather than a simple catalog.

**Business Model:** No public pricing page was found. The website offers a "Try Librar" call-to-action, suggesting a trial or demo flow. [Inferred]: Given the B2B SaaS model targeting schools, the most likely monetization path is per-school or per-district annual subscriptions, potentially with tiered pricing based on library size or number of items cataloged.

**TAM/SAM:** The global library management software market has varying estimates: $0.67B in 2024 growing at 7.86% CAGR to 2034 (Market Research Future via search snippet); $3.51B in 2024 (Business Research Insights via search snippet); $2.8B in 2024 (Emergen Research via search snippet). The wide range reflects different scope definitions (software-only vs. services included). The company's claim that "98% of the world's schools still don't have a library system" (company website) implies a large greenfield opportunity in the K-12 segment specifically, though no company-published SAM estimate was found.

**GTM / Distribution:** The company has achieved 60% penetration among Swedish single-site private schools within three months (YC company page). [Inferred]: The initial GTM likely leveraged the founders' Swedish network and the SSE Business Lab incubator connections. Expansion to ~300 schools globally (YC launch post) suggests early international traction. The mobile-first, no-librarian-needed positioning lowers adoption barriers, enabling bottom-up distribution to schools without existing library infrastructure.

## Defensibility

The product combines computer vision models trained on book spine recognition with an integrated library management system. The computer vision component — identifying books from shelf photographs — represents a technical capability that requires training data from physical library environments. As more schools use the platform, Librar accumulates a growing dataset of book spine images, shelf configurations, and circulation patterns across diverse library environments, which could create a data advantage over time.

The company claims ISO 27001 certification, GDPR compliance, and EU AI Act compliance (company website), which may serve as trust signals for institutional buyers, particularly in European education markets.

No defensibility signals such as patents, published research, or exclusive partnerships were found in public sources. [Inferred]: Potential moat could develop via (1) proprietary training data from shelf-scanning across hundreds of schools, (2) switching costs once a school's entire catalog and circulation history is built within the platform, and (3) network effects if the platform enables inter-school lending or shared catalog features. These are unproven at this stage.

**Market structure:** Follett Destiny dominates the U.S. K-12 library market with ~75,000 installations (Growjo via search snippet) and $377.7M in annual revenue (Growjo via search snippet), owned by Francisco Partners (Library Technology Guides). Follett's business is built on traditional barcode-scanning workflows and on-premise/hybrid deployments. Adopting a camera-based, AI-first approach would require Follett to rebuild core product assumptions and potentially cannibalize existing per-library service contracts. Open-source alternatives like Koha lack the commercial incentive to invest in computer vision R&D. No structural barrier beyond this business model friction was identified.

**Commoditization risk:** General-purpose computer vision APIs (Google Vision, AWS Rekognition) could theoretically be integrated into competing library systems. However, book spine recognition in real library conditions (variable lighting, damaged spines, multi-language titles) is a domain-specific problem requiring specialized training data. A well-funded competitor or incumbent willing to invest in this specific capability could replicate the approach, though the domain specificity raises the effort required.

## Market & Traction

**Traction signals:**
- ~300 schools using the product (YC launch post, Feb 2026)
- 60% penetration of Swedish single-site private schools within 3 months (YC company page)
- Supported by SSE Business Lab (company website) — Stockholm School of Economics' incubator, ranked #8 in Europe by Financial Times 2025 ranking (Stockholm School of Economics news)
- YC Launch post: 26 upvotes (YC Launches page)
- Twitter/X: @LibrarLabs, account created January 2026 (X.com via search snippet); follower count not retrievable
- LinkedIn: linkedin.com/company/librar/ (LinkedIn via search snippet); follower count not retrievable
- No Product Hunt listing found
- No app store listings found
- No Discord/Slack community found
- Company describes itself as "fastest growing library tech company in the world" (YC company page)

**Competitive landscape:**

1. **Follett Destiny Library Manager** — Dominant K-12 library platform serving ~75,000 school libraries in the U.S. (Growjo via search snippet). Parent company Follett School Solutions generates $377.7M annual revenue with ~1,499 employees (Growjo via search snippet). Acquired by Francisco Partners (Library Technology Guides). Also acquired Accessit (New Zealand-based ILS used in 40+ countries) (American Libraries Magazine, 2023). Key differentiator vs. Librar Labs: established distribution across U.S. school districts with deep procurement relationships; lacks AI/computer vision-based cataloging.

2. **Koha** — World's most widely implemented open-source ILS (Wikipedia), with thousands of installations globally. Free to use with community support. Largest known deployment: 1,136 Turkish public libraries with 17M+ items (Wikipedia). Key differentiator vs. Librar Labs: free and customizable, but requires technical setup and administration; no AI-powered features.

3. **Alexandria (by COMPanion)** — Long-standing K-12 library automation software with customizable interfaces and hosting options (company website). Revenue and funding: no public data found. Key differentiator vs. Librar Labs: mature feature set for traditional library workflows; lacks computer vision capabilities.

4. **Oliver v5 (by Softlink)** — Used by K-12 school libraries, with Softlink Education servicing 30 to 2,400 schools (Softlink website via search snippet). Revenue and funding: no public data found. Key differentiator vs. Librar Labs: established in Australian and international school markets; traditional catalog interface without AI features.

5. **Libib** — Web-based library management app with free tier for personal use, $99/year for educators (Libib pricing page). Revenue and funding: no public data found. Key differentiator vs. Librar Labs: lighter cataloging tool without integrated ILS features or computer vision; primarily personal/small library use.

**Why now:** [Inferred]: Several factors may have converged to open this opportunity: (1) Computer vision model performance has reached a threshold where book spine recognition from smartphone photos is commercially viable, enabled by advances in foundation models and transfer learning over 2023-2025. (2) Smartphone camera quality and processing power have improved to the point where shelf scanning can be done without specialized hardware. (3) Post-pandemic emphasis on school library modernization and literacy programs has increased attention to library infrastructure gaps, particularly in under-resourced schools.

## Founders & Team

**Jonathan Görtz** — Founder & CEO
- Education: Bilingual Montessori School of Lund (2018-2020); ProCivitas (2022-2025 expected) (The Org)
- Previously: CEO of Cyberboost (Oct 2022-Oct 2023); Co-founder of Gymbro AI (May 2023-Oct 2023); Founder & VP at Procivitas Unga Aktiesparare committee (The Org, Dec 2022+)
- LinkedIn: linkedin.com/in/jonathangortz/ — headline lists "Teachr" (LinkedIn via search snippet)
- Twitter/X: No personal account found; company account @LibrarLabs
- GitHub: No public repos found

**Carl-Hugo Jacobsson** — Co-founder
- Previously: Founder & CEO of Ungdomsförmedlingen, Sweden's largest job platform for young people with 40,000+ members (LinkedIn via search snippet). Built the platform from scratch to help young people (ages 16-25) find employment, scaling to 30,000+ registered users across 60 cities in Sweden
- LinkedIn: linkedin.com/in/chjacobsson/ — "Founder & CEO - Ungdomsförmedlingen" (LinkedIn)
- Twitter/X: No public account found
- GitHub: No public repos found

**Kaan Sirin** — Co-founder (described as "chief librarian" on YC page)
- The YC launch post notes that one of the founders "used to work as a librarian and saw the day-to-day challenges firsthand" (YC launch post); this likely refers to Sirin given the "chief librarian" title
- LinkedIn: No public profile found matching this individual at Librar Labs
- Twitter/X: No public account found
- GitHub: No public repos found

The company about page describes the team as "a small team of serial founders, AI-researchers and top competitive gamers who care deeply about the art of craftsmanship" and states "We've worked as librarians ourselves and know what the day-to-day looks like" (company about page).

**Co-founder relationship:** Jonathan Görtz's LinkedIn and The Org data indicate he is based in Lund/Stockholm, Sweden. Carl-Hugo Jacobsson is also based in Sweden and active in the Swedish startup ecosystem. Both are young Swedish founders; the SSE Business Lab connection (Stockholm School of Economics incubator) may represent a shared network point, though no confirmed shared employer or university was identified from Phase 3 research.

**Founder-market fit:** The team combines direct library work experience (at least one founder worked as a librarian) with prior startup founding experience (Görtz with Cyberboost and Gymbro AI; Jacobsson with Ungdomsförmedlingen, a platform scaled to 40,000+ members). The "AI-researchers" description on the about page suggests technical AI/ML capability on the team, though specific research backgrounds were not found in public sources. A fourth team member is implied by the team size of 4 but is not named on the YC page.

## Key Risks

**Single-vertical concentration:** The product is purpose-built for school library management, a niche within the broader education technology market. Revenue growth is bounded by the number of schools globally and their willingness to pay for library management software. The company's broader vision ("intelligence layer for the physical world") suggests planned expansion beyond libraries, but no second product has been announced.

**Incumbent procurement relationships:** Follett Destiny holds approximately 75% of U.S. school library installations (Growjo via search snippet). School and district procurement processes often favor established vendors with existing contracts, and switching library systems requires data migration and staff retraining, creating inertia that favors incumbents regardless of product quality.

**Geographic concentration risk:** The company's initial traction (60% of Swedish single-site private schools in 3 months, per YC company page) is concentrated in Sweden, a small market. Scaling to the U.S. and other large markets requires navigating different procurement processes, compliance requirements, and competitive dynamics.

**Computer vision accuracy dependency:** The core value proposition relies on accurate book identification from shelf photographs. Performance degradation in edge cases (damaged spines, non-Latin scripts, poor lighting, mixed media types) could undermine the 99% setup time reduction claim. No published accuracy benchmarks or third-party evaluations were found.

**Young founding team:** The founders appear to be early in their careers (Görtz's education timeline suggests he was born around 2004-2005, based on enrollment at ProCivitas in 2022 for a gymnasium-level program). While youth is not inherently a risk, the team's prior ventures (Cyberboost, Gymbro AI, a social media marketing agency) were short-lived (each under one year based on The Org data), and no prior exits were identified.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $0.67B–$3.51B library management software market (Market Research Future / Business Research Insights, 2024 via search snippet, 7.86%–9% CAGR) |
| SAM | No public data found |
| Traction | ~300 schools (YC launch post, Feb 2026); 60% Swedish single-site private school penetration in 3 months (YC company page) |
| Revenue Signal | No public data found |
| Founders | Jonathan Görtz (CEO): ProCivitas education, ex-Cyberboost CEO, ex-Gymbro AI co-founder. Carl-Hugo Jacobsson: Founded Ungdomsförmedlingen (40K+ members). Kaan Sirin: Former librarian, "chief librarian" role |
| Competitors | Follett Destiny (owned by Francisco Partners, $377.7M parent revenue, ~75K school libraries, dominant U.S. K-12 incumbent); Koha (open-source, free, thousands of installations globally, no AI features); Alexandria by COMPanion (revenue unknown, traditional K-12 library automation); Oliver v5 by Softlink (revenue unknown, 30-2,400 schools served); Libib ($99/yr educator tier, revenue unknown, lightweight cataloging tool) |
| Moat Signals | Proprietary book spine recognition CV model; ISO 27001 certified, GDPR and EU AI Act compliant (company website); domain-specific training data accumulation across ~300 schools |
| Risk Factors | Incumbent procurement lock-in (Follett ~75% U.S. market), geographic concentration in Sweden, computer vision accuracy dependency, single-vertical concentration |
| Founder Reach | Jonathan Görtz: Twitter not found, LinkedIn 500+ connections. Carl-Hugo Jacobsson: Twitter not found, LinkedIn (active). Kaan Sirin: no public profiles found. Company: @LibrarLabs on X (Jan 2026, count not retrievable) |
| Distribution Signals | YC Launch post with 26 upvotes (YC Launches); SSE Business Lab graduate (company website); no Product Hunt listing found |
| Emails | info@librarlabs.com, support@librarlabs.com, jonathan@librarlabs.com (company website and YC page) |
