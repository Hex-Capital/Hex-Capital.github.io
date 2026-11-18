# Kanopy

> Computer vision operating layer for physical infrastructure

| Field | Value |
|-------|-------|
| Website | https://www.kanopy-ai.com/ |
| YC Page | https://www.ycombinator.com/companies/kanopy |
| Batch | Fall 2026 ([Y Combinator](https://www.ycombinator.com/companies/kanopy)) |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 2 |
| Location | New York City, NY, USA |
| Tags | Energy, Industrial |
| YC Partner | Christopher Golda ([Y Combinator](https://www.ycombinator.com/companies/kanopy)) |
| Emails | support@kanopy-ai.com, shared technical support ([Kanopy Status](https://status.kanopy-ai.com/index.html)) |

## The Idea

- **Problem:** Electric utilities use arborist patrols, manual surveys, and repeat field visits to identify hazardous trees, estimate trimming work, and verify completion, sometimes working from field data that is years old ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wkr-kanopy-spatial-intelligence-for-physical-infrastructure)).
- **Approach:** Kanopy reconstructs 3D grid models from drone, vehicle-mounted, or handheld video to measure vegetation clearances, identify hazards, and assess asset condition ([Launch YC, Nov 2026](https://www.ycombinator.com/launches/Wkr-kanopy-spatial-intelligence-for-physical-infrastructure)).
- **Differentiation:** Kanopy builds clearance models from ordinary video, while Overstory scores individual trees from satellite imagery and Neara combines LiDAR, imagery, and utility records into physics-enabled network models ([Launch YC](https://www.ycombinator.com/launches/Wkr-kanopy-spatial-intelligence-for-physical-infrastructure), [Overstory](https://www.overstory.com/blog/series-b-announcement), [Neara](https://neara.com/)).
- **Business Model:** [Inferred]: Enterprise contracts are the likely monetization path given the reported master service agreements and customer terms governing API access (Website not accessible at time of research) ([Antler, Apr 2026](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase), [Kanopy Python SDK](https://github.com/KanopyAI/kanopy-python)).
- **TAM/SAM:** Fortune Business Insights estimated the broader U.S. utility vegetation management market, including field treatment, at $9.24B in 2025 and projected 10.55% CAGR through 2032 ([Fortune Business Insights](https://www.fortunebusinessinsights.com/u-s-utility-vegetation-management-market-114059)).
- **GTM / Distribution:** ACRT offers Arborcision, which combines Kanopy’s video analysis with ACRT’s vegetation management services, and introduced it to utilities at Trees & Utilities ([ACRT, Oct 2026](https://acrt.com/articles/ideas-innovation-and-industry-connections-at-trees-utilities-2026/), [Arborcision](https://info.acrt.com/arborcision)).

## Defensibility

- **Moat today:** Kanopy retains its hosted reconstruction models and provides a credentialed SDK that lets utilities upload footage and retrieve inspection results from their own applications ([Kanopy Python SDK](https://github.com/KanopyAI/kanopy-python)).
- **Future moat:** [Inferred]: Recurring surveys and inspection records embedded in utility workflows could create switching costs, with no public retention or integration-depth data to verify that effect ([Kanopy Python SDK](https://github.com/KanopyAI/kanopy-python)).
- **Market structure:** No structural barrier identified at this stage.
- **Commoditization risk:** Buzz Solutions already sells computer vision for utility inspection imagery, and EPRI is evaluating utility-vehicle and drone cameras for recurring inspections ([Buzz Solutions, Jan 2025](https://buzzsolutions.co/wp-content/uploads/2025/01/PowerAI-and-PowerAI-Basic-Press-Release.pdf), [EPRI, 2026](https://distribution.epri.com/overhead/public/overview/)).

## Market & Traction

- **Traction signals:**
  - Six utilities and contractors signed LOIs or master service agreements covering 270,000 miles in potential scope ([Antler, Apr 2026](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase)).
  - 3,093 cumulative miles reported by Kanopy, including over 300 miles mapped across four states in a two-week period ([Kanopy LinkedIn, Oct 2026](https://www.linkedin.com/company/kanopyai/)).
  - ACRT introduced Kanopy-powered Arborcision at Trees & Utilities in September 2026 ([ACRT, Oct 2026](https://acrt.com/articles/ideas-innovation-and-industry-connections-at-trees-utilities-2026/)).
  - Dealroom lists $200K from Antler in January 2026, while CB Insights lists $700K total including $500K attributed to YC in November 2026 ([Dealroom](https://app.dealroom.co/companies/kanopyai), [CB Insights, via search snippet](https://www.cbinsights.com/company/kanopyai/financials)).
  - Public YC launch on November 2, 2026 ([Launch YC](https://www.ycombinator.com/launches/Wkr-kanopy-spatial-intelligence-for-physical-infrastructure), [Startups directory](https://startups.fru.dev/companies/kanopy)).
  - Launch coverage in *The Menlo Times* ([The Menlo Times, Nov 4, 2026](https://www.menlotimes.com/post/y-combinator-launches-of-the-week-199)).
  - 413 company LinkedIn followers ([Kanopy LinkedIn, Nov 17, 2026](https://www.linkedin.com/company/kanopyai/)).
  - Zero active YC job postings ([YC Jobs, Nov 17, 2026](https://www.ycombinator.com/companies/kanopy/jobs)).
- **Competitors:**
  - Overstory (US$67.8M raised, revenue unknown): Uses satellite imagery to score tree-level wildfire and outage risk, with a US$43M Series B announced in November 2025 led by Blume Equity ([Caplight](https://www.caplight.com/company/overstory), [Overstory](https://www.overstory.com/blog/series-b-announcement)).
  - Neara (approximately A$180M raised, revenue unknown): Simulates network behavior with physics-enabled models built from LiDAR, imagery, and asset records, with a A$90M Series D in February 2026 led by TCV ([Neara product](https://neara.com/), [Neara funding announcement](https://website-preprod.neara.com/resources/press/neara-raises-90-million-to-solve-the-global-infrastructure-crisis-with-ai/)).
  - AiDASH (US$91.5M raised as of April 2024, revenue unknown): Uses satellite data for vegetation planning, with a US$58.5M Series C closed in April 2024 led by Lightrock ([AiDASH](https://www.aidash.com/news/aidash-closes-its-oversubscribed-series-c-funding-round-at-58-5-million/)).
  - Buzz Solutions (US$29.5M in reported equity funding, absolute revenue unknown): Uses utility inspection imagery to flag equipment defects, with a US$20M Series A in August 2026 led by S3 Ventures ([AlleyWatch](https://www.alleywatch.com/2026/08/the-weekly-notable-startup-funding-report-8-10-26/), [S3 Ventures](https://www.s3vc.com/portfolio-news/buzz-solutions-raises-20-million-series-a-led-by-s3-ventures-to-power-the-next-generation-of-grid-intelligence)).
- **Why now:** [Inferred]: California’s February 2026 approval of Southern California Edison’s wildfire mitigation plan gives remote inspection a procurement opening, with the plan calling for field-validated remote sensing pilots for vegetation management ([Edison International SEC filing](https://www.sec.gov/Archives/edgar/data/92103/000082705226000059/eix-20260630.htm), [SCE plan revision](https://www.sce.com/sites/default/files/AEM/Wildfire%20Mitigation%20Plan/2026-2028/SCE%202026-2028%20WMP%20Revision%20Notice%20Response%20R1%20Cover%20Letter.pdf)).

## Founders & Team

- **Yann Pfitzer (Co-founder):** Direct business email — No public data found.
  - **Background:** Studied earth sciences and mechanical engineering at Penn and advised utilities and energy companies at McKinsey, where Antler identifies him as a former associate partner ([Penn Admissions](https://admissions.upenn.edu/visit-connect/penn-perspectives/student-stories/yann-pfitzer), [Antler](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase)).
  - **Twitter/X:** No public account found.
  - **LinkedIn:** Public profile shows 2K followers, with no headline displayed ([LinkedIn, Nov 2026](https://www.linkedin.com/in/yann-pfitzer-63b404142/)).
  - **GitHub:** No public repos found.
- **Nicolas Pfitzer (Co-founder and CTO):** Direct business email — No public data found.
  - **Background:** Studied robotics at ETH Zürich, was a visiting master’s student at Cambridge’s Prorok Lab, and worked in computer vision at ShapeScale ([Antler](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase), [Prorok Lab](https://www.proroklab.org/people/), [Launch YC](https://www.ycombinator.com/launches/Wkr-kanopy-spatial-intelligence-for-physical-infrastructure)).
  - **Twitter/X:** No public account found.
  - **LinkedIn:** The profile’s About section lists “Co-Founder and CTO @ Kanopy (YC F26)” and shows 715 followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/nicolas-pfitzer)).
  - **GitHub:** Kanopy’s `kanopy-python` has 0 stars, with `npfitzer` listed as its PyPI maintainer ([GitHub, Nov 2026](https://github.com/KanopyAI/kanopy-python), [PyPI](https://pypi.org/project/kanopy-ai/)).
- **Co-founder relationship:** Yann and Nicolas are brothers ([Launch YC](https://www.ycombinator.com/launches/Wkr-kanopy-spatial-intelligence-for-physical-infrastructure)).
- **Founder-market fit:** Yann’s utility consulting covers the target buyers and Nicolas’s computer vision and robotics work covers the reconstruction technology, with Antler and Y Combinator publicly listing Kanopy ([Antler](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase), [Y Combinator](https://www.ycombinator.com/companies/kanopy)).

## Key Risks

- **Clearance measurement:** [Inferred]: Utilities may retain field checks where video-derived clearances lack validation, as SCE’s remote sensing plan compares automated prescriptions with field observations and preserves ground inspection where remote methods fall short ([SCE plan revision](https://www.sce.com/sites/default/files/AEM/Wildfire%20Mitigation%20Plan/2026-2028/SCE%202026-2028%20WMP%20Revision%20Notice%20Response%20R1%20Cover%20Letter.pdf)).
- **Contract conversion:** [Inferred]: Reported agreement scope may convert only partly into paid work because Antler aggregates LOIs and master service agreements without publishing committed order volumes ([Antler, Apr 2026](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase)).
- **Vendor substitution:** [Inferred]: Schneider Electric’s announced AiDASH acquisition gives an overlapping vegetation product access to a larger grid software portfolio, while ACRT provides Kanopy with a contractor channel ([AiDASH, Aug 2026](https://www.aidash.com/press-and-news/), [ACRT, Oct 2026](https://acrt.com/articles/ideas-innovation-and-industry-connections-at-trees-utilities-2026/)).
- **Name overlap:** [Inferred]: Searches for Kanopy can surface the identically named library streaming service, creating attribution risk for app and audience figures ([Kanopy streaming](https://www.kanopy.com/), [Y Combinator](https://www.ycombinator.com/companies/kanopy)).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $9.24B U.S. utility vegetation management in 2025, including field treatment, with 10.55% forecast CAGR through 2032 ([Fortune Business Insights](https://www.fortunebusinessinsights.com/u-s-utility-vegetation-management-market-114059)) |
| SAM | No public data found |
| Traction | Six utilities or contractors with LOIs or MSAs covering 270,000 miles in scope ([Antler, Apr 2026](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase)), 3,093 cumulative miles reported ([Kanopy LinkedIn, Oct 2026](https://www.linkedin.com/company/kanopyai/)), ACRT Arborcision integration ([ACRT, Oct 2026](https://acrt.com/articles/ideas-innovation-and-industry-connections-at-trees-utilities-2026/)) |
| Revenue Signal | No public data found |
| Founders | Yann Pfitzer (Co-founder), Penn energy research program and McKinsey utility consulting ([Penn Admissions](https://admissions.upenn.edu/visit-connect/penn-perspectives/student-stories/yann-pfitzer), [Antler](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase)); Nicolas Pfitzer (Co-founder and CTO), ETH Zürich robotics, Cambridge research, ShapeScale computer vision ([LinkedIn, via search snippet](https://www.linkedin.com/in/nicolas-pfitzer), [Launch YC](https://www.ycombinator.com/launches/Wkr-kanopy-spatial-intelligence-for-physical-infrastructure)) |
| Competitors | Overstory (US$67.8M raised, revenue unknown, satellite tree-risk scoring) ([Caplight](https://www.caplight.com/company/overstory), [Overstory](https://www.overstory.com/blog/series-b-announcement)); Neara (~A$180M raised, revenue unknown, physics-enabled grid models) ([Neara](https://website-preprod.neara.com/resources/press/neara-raises-90-million-to-solve-the-global-infrastructure-crisis-with-ai/)); AiDASH (US$91.5M raised as of April 2024, revenue unknown, satellite vegetation planning) ([AiDASH](https://www.aidash.com/news/aidash-closes-its-oversubscribed-series-c-funding-round-at-58-5-million/)); Buzz Solutions (US$29.5M equity funding, absolute revenue unknown, visual equipment-defect detection) ([AlleyWatch](https://www.alleywatch.com/2026/08/the-weekly-notable-startup-funding-report-8-10-26/)) |
| Moat Signals | Hosted reconstruction models and credentialed SDK for footage ingestion and inspection exports ([Kanopy Python SDK](https://github.com/KanopyAI/kanopy-python)) |
| Risk Factors | Field validation for remote inspection ([SCE plan revision](https://www.sce.com/sites/default/files/AEM/Wildfire%20Mitigation%20Plan/2026-2028/SCE%202026-2028%20WMP%20Revision%20Notice%20Response%20R1%20Cover%20Letter.pdf)), LOI and MSA conversion ([Antler](https://www.antler.co/blog/announcing-the-spring-2026-u-s-portfolio-showcase)), overlapping utility software ([AiDASH](https://www.aidash.com/press-and-news/)) |
| Founder Reach | Yann Pfitzer, 2K LinkedIn followers ([LinkedIn, Nov 2026](https://www.linkedin.com/in/yann-pfitzer-63b404142/)); Nicolas Pfitzer, 715 LinkedIn followers ([LinkedIn, Oct 2026, via search snippet](https://www.linkedin.com/in/nicolas-pfitzer)) |
| Distribution Signals | 413 company LinkedIn followers ([Kanopy LinkedIn, Nov 2026](https://www.linkedin.com/company/kanopyai/)), Arborcision debut at Trees & Utilities ([ACRT, Oct 2026](https://acrt.com/articles/ideas-innovation-and-industry-connections-at-trees-utilities-2026/)), Python SDK release ([PyPI, Sep 2026](https://pypi.org/project/kanopy-ai/)) |
| Emails | support@kanopy-ai.com, shared technical support ([Kanopy Status](https://status.kanopy-ai.com/index.html)) |
