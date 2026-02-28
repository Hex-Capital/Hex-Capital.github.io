# Bidflow

> AI Copilot for Electrical Estimating

| Field | Value |
|-------|-------|
| Website | https://usebidflow.com |
| YC Page | https://www.ycombinator.com/companies/bidflow |
| Batch | Winter 2026 |
| Industry | Real Estate and Construction / Construction |
| Team Size | 2 |
| Location | New York, NY, USA |
| Tags | SaaS, Construction, Infrastructure, AI Assistant |

## The Idea

**Problem:** Electrical contractors compete for jobs (data centers, commercial buildings, infrastructure) by submitting RFPs with detailed cost estimates. The estimating process requires reading 500+ page blueprint PDFs, manually counting electrical symbols, looking up NECA labor unit standards, pricing materials, and entering thousands of data points into spreadsheets or legacy software. A single estimate can take hours to months depending on project complexity (YC company page). Estimators split time across multiple disconnected tools -- takeoff software, labor databases, material pricing catalogs, and document viewers -- creating a fragmented workflow. The incumbent tools (ConEst IntelliBid, Trimble Accubid, McCormick Systems) are desktop-based legacy software designed before AI capabilities existed (contractor forum discussions on Electrician Talk, Mike Holt Forums).

**Approach:** Bidflow provides a unified web platform where estimators upload project blueprints and specifications. A custom-trained AI model analyzes the drawings to perform "takeoffs" -- counting electrical components like receptacles, switches, conduit runs -- achieving 83.5% accuracy (usebidflow.com). The system then automatically populates estimate tables with NECA labor unit citations and live material pricing. The platform is positioned as an "assistant, not a replacement" -- it generates a first pass with verifiable "proof of work" that estimators review and correct, rather than a black-box output (YC Launch page). Additional features include exportable Bills of Materials (Excel/PDF), material assemblies (smart component bundling), RFI writing, specification search, and drawing markup within the platform (usebidflow.com).

**Differentiation:** Bidflow is electrical-trade-specific, unlike broader construction AI takeoff tools. Beam AI (Attentive.ai) supports multiple trades (electrical, mechanical, plumbing, outdoor services) but is not specialized in electrical workflows or NECA labor unit standards (ibeam.ai). Togal.AI focuses on general commercial estimating and square-footage-based takeoffs rather than symbol-level electrical counting (togal.ai). Legacy incumbents like ConEst IntelliBid and Trimble Accubid provide comprehensive databases but lack AI-driven automation of the counting/takeoff step (contractor forums, servicetitan.com). Countfire automates symbol counting for electrical but is UK-based and does not integrate labor units or material pricing into a unified workflow (countfire.com).

**Business Model:** No public pricing page found on usebidflow.com. [Inferred]: Most likely monetization path is a SaaS subscription (per-seat or per-project), based on the web-platform delivery model and stated SaaS tag. Competitors price per seat per year (Togal.AI offers custom per-seat pricing; legacy tools like ConEst and TurboBid range from hundreds to thousands per year per license).

**TAM/SAM:** The electrical estimating software market was valued at $2 billion in 2024 and is projected to reach $4.08 billion by 2031 at a 10.23% CAGR (Verified Market Research, 2024). The broader construction estimating software market was estimated at $1.5 billion in 2024, projected to reach $2.62 billion by 2030 at 10.2% CAGR (Grand View Research, 2024). The underlying U.S. electrical contractors services market was $237.59 billion in 2023, projected to reach $256.65 billion by 2029 (Research and Markets, 2024 via GlobeNewsWire).

**GTM / Distribution:** The website lists geographic focus areas: Tri-State Area, Mid-Atlantic, New England, and Great Lakes (usebidflow.com). Named customers include Bass Electric, Infinity Electric, and Checkmate Electric (usebidflow.com). The contact email on the YC Launch page links to a Calendly demo booking (YC Launch page). [Inferred]: Direct sales to mid-market electrical contractors, likely starting in the U.S. Northeast corridor where the team is based, expanding through contractor word-of-mouth and trade associations like NECA.

## Defensibility

The 83.5% accuracy figure on electrical takeoffs implies a custom-trained AI model specialized for electrical blueprint symbols (usebidflow.com). If trained on proprietary datasets of electrical drawings and validated against NECA labor standards, this could create a data flywheel: each customer's corrected takeoffs provide labeled training data to improve accuracy. The integration of NECA labor unit citations, live material pricing, and exportable BOMs in a single platform creates switching costs as estimators build workflows around the tool.

**Market structure:** Legacy incumbents (ConEst, Trimble Accubid, McCormick) are desktop-installed software with multi-decade-old architectures. Rebuilding them as AI-native web platforms would require rewriting core products and potentially cannibalizing existing license revenue streams. Trimble and Autodesk (which acquired ProEst in 2021) are large enterprises where electrical estimating is a small product line within broader construction software portfolios, making it unlikely to receive dedicated AI R&D investment. Broader AI takeoff tools (Beam AI, Togal.AI) serve multiple trades and may lack the incentive to deeply specialize in electrical-specific workflows, NECA standards, and material assembly logic.

**Commoditization risk:** General-purpose AI construction takeoff tools (Beam AI with $48M in funding, Togal.AI with $17.5M+) could add electrical-specific features. Large language model and vision model improvements from foundation model providers could lower the barrier for new entrants to build similar symbol-counting capabilities. The 83.5% accuracy benchmark, while meaningful, could be matched by well-resourced competitors with access to similar training data.

## Market & Traction

1. **Traction signals:**
   - Named customers: Bass Electric, Infinity Electric, Checkmate Electric (usebidflow.com)
   - Customer testimonial: Jeff Yee Jr., Owner & President of Bass Electric -- "Our estimators used to spend hours pulling labor units and verifying specs. Now Bidflow helps us work faster while we focus on the takeoff and getting the numbers right." Claims 5x reduction in average estimate time (usebidflow.com)
   - 14 upvotes on YC Launch page (YC Launches)
   - LinkedIn company page exists at linkedin.com/company/bidflowai (follower count not retrievable)
   - No Product Hunt launch found
   - No public revenue figures found
   - No app store presence found (web-based platform)
   - Company Twitter/X account: not found; founder Jesse Choe has personal account @jesse_choe10

2. **Competitive landscape:**
   - **Beam AI (Attentive.ai):** $48M total funding ($30.5M Series B, Nov 2025; led by Insight Partners). Serves 1,100+ companies across multiple trades. AI-automated takeoffs with 100% automation claim. Key differentiator vs. Bidflow: multi-trade breadth vs. Bidflow's electrical depth. Revenue unknown (Attentive.ai press release, Nov 2025).
   - **Togal.AI:** $17.5M+ total funding (most recent: $10.41M convertible note, Aug 2025). AI takeoff for general commercial construction. Custom per-seat pricing. Key differentiator vs. Bidflow: broader construction focus with area/square-footage emphasis vs. Bidflow's electrical symbol counting and NECA labor integration. Revenue unknown (Crunchbase; Tracxn).
   - **ConEst IntelliBid:** Legacy electrical estimating market leader. Not venture-backed (privately held). Comprehensive electrical database and digital takeoff. Key differentiator vs. Bidflow: decades of industry adoption and deep feature set vs. Bidflow's AI-first approach. Revenue unknown.
   - **Countfire:** UK-based cloud estimating for electrical. Automates symbol counting from drawings. Funding unknown. Key differentiator vs. Bidflow: similar automated counting capability but no NECA labor unit integration or U.S. material pricing. Revenue unknown.
   - **Esticom (Procore):** Acquired by Procore Technologies, Oct 2020. Cloud-based estimating across trades. Now integrated into Procore's platform. Key differentiator vs. Bidflow: part of broader construction management suite vs. Bidflow's standalone electrical specialization.

3. **Why now:** The data center construction boom is creating unprecedented demand for electrical contractors. The U.S. data center power market is expected to grow from $15.22 billion in 2025 to $20.95 billion by 2030 (Mordor Intelligence, 2025). Rising AI workloads are pushing rack densities past 20 kW, requiring more complex electrical infrastructure. Simultaneously, the construction industry faces a skilled labor shortage -- NECA's 2024 industry profile noted shifting workforce trends (NECA, Jul 2024). [Inferred]: The combination of rising project volume and shrinking estimator labor pool creates urgency for AI-assisted tools that can multiply estimator throughput. Additionally, advances in computer vision models (2023-2025) have crossed a performance threshold enabling reliable automated symbol recognition on construction blueprints.

## Founders & Team

**Jesse Choe** -- Co-founder & CEO
- Attended Thomas Jefferson High School for Science and Technology (TJHSST); dropped out of University of Maryland (LinkedIn, YC profile)
- USACO Platinum competitor (top 1% nationally); Problem Writer at USA Computing Olympiad, Feb 2022 - Feb 2023 (Crunchbase; YC profile)
- Jane Street extern at age 18 (YC profile)
- Founded CerealCodes, a coding competition nonprofit platform, Jun 2022 - Jun 2024 (Crunchbase)
- Previously co-founded Ghostship (YC S25), QA agents for bug detection -- pivoted to Bidflow (YC Launches; Fondo)
- Twitter/X: @jesse_choe10 -- count not retrievable (x.com/jesse_choe10)
- LinkedIn: linkedin.com/in/jc10 -- headline: "Bidflow (YC S25)" (LinkedIn)
- GitHub: github.com/jessechoe10 -- 52 followers, 12 public repos; USACO repo with 5 stars (GitHub)

**Gautham Ramachandran** -- Co-founder & CTO
- High school graduate; met Jesse in a middle school introductory coding class (Fondo blog)
- Bootstrapped a company to $120K revenue by age 16 (YC profile)
- AI research featured on local news -- developed an algorithm for classifying brain signals (Fondo blog)
- 3 preprints related to reinforcement learning (RocketReach profile)
- Applied to YC twice and had two prior failed startups before acceptance (search results via RocketReach)
- Previously co-founded Ghostship (YC S25) with Jesse (YC Launches)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/gautham-ramachandran-74b5712a4 -- headline: "CTO @ bidflow (YC S25)" (LinkedIn)
- GitHub: No confirmed public profile found

**Co-founder relationship:** Jesse and Gautham met in a middle school introductory coding class and have been collaborating for over a decade (Fondo blog). They worked together on CerealCodes (coding competition platform) and co-founded Ghostship (YC S25) before pivoting to Bidflow.

**Founder-market fit:** Both founders are competitive programmers (Jesse: USACO Platinum, top 1% nationally; Gautham: top 5% nationally) with strong technical backgrounds in AI/ML. Neither has documented prior experience in electrical contracting or construction. The YC Launch page contact email (founders@tryghostship.dev) and the "YC S25" designation on both LinkedIn profiles suggest the pivot from Ghostship to Bidflow occurred during or after the S25 batch. The Bass Electric customer relationship and testimonial from Jeff Yee Jr. suggests they have developed domain partnerships to compensate for lack of personal construction industry background.

## Key Risks

**Recent pivot from unrelated domain:** Bidflow is the founders' second product after Ghostship (QA agents for bug detection, YC S25). The pivot to construction/electrical estimating represents a significant domain shift. The contact email on the YC Launch page still references the prior company domain (founders@tryghostship.dev), and LinkedIn profiles still show "YC S25" rather than "YC W26" (LinkedIn, YC Launch page). The speed of the pivot raises questions about depth of domain expertise and customer discovery in electrical contracting.

**83.5% accuracy ceiling:** The stated 83.5% accuracy on electrical takeoffs means approximately 1 in 6 counts requires manual correction (usebidflow.com). For large projects with thousands of data points, this still implies significant manual review overhead. If accuracy does not improve meaningfully, adoption may stall among contractors who view the error rate as too high to trust for competitive bids where margins are thin.

**Well-funded AI construction competitors:** Beam AI (Attentive.ai) has $48M in funding and 1,100+ customers, and recently announced expansion into estimating and bidding features beyond takeoffs (Attentive.ai, Nov 2025). Togal.AI has $17.5M+ and is expanding electrical capabilities. Either could add deeper electrical-specific features with their existing resources and customer base, potentially outpacing a 2-person team.

**Narrow vertical with long sales cycles:** Electrical contracting is a traditional industry with conservative technology adoption. Mid-market contractors (Bidflow's apparent target) may require in-person demos, trade show presence, and reference customers before adoption. The 2-person team limits sales and customer success capacity. The geographic focus (Northeast U.S.) further constrains the initial addressable market.

**Platform dependency on AI model performance:** The core value proposition depends on a custom-trained vision model for blueprint analysis. Maintaining and improving this model (training data, compute costs, architecture updates) as a 2-person startup competes for resources against well-funded alternatives. Foundation model improvements could also enable rapid new entrants.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $2B electrical estimating software market (Verified Market Research, 2024, 10.23% CAGR to $4.08B by 2031); $237.59B U.S. electrical contractors services market (Research and Markets, 2024) |
| SAM | No public data found |
| Traction | 3 named customers: Bass Electric, Infinity Electric, Checkmate Electric (usebidflow.com); 14 upvotes on YC Launch (YC Launches); Customer testimonial from Bass Electric owner citing 5x estimate time reduction (usebidflow.com) |
| Revenue Signal | No public data found |
| Founders | Jesse Choe (CEO): TJHSST, UMD dropout, USACO Platinum top 1%, Jane Street extern, founded CerealCodes. Gautham Ramachandran (CTO): bootstrapped to $120K at 16, AI research (brain signal classification), 3 RL preprints |
| Competitors | Beam AI/Attentive.ai ($48M raised, revenue unknown, multi-trade AI takeoff vs. Bidflow's electrical specialization); Togal.AI ($17.5M+ raised, revenue unknown, general construction AI vs. electrical focus); ConEst IntelliBid (private, revenue unknown, legacy electrical market leader vs. AI-native approach); Countfire (funding unknown, revenue unknown, UK-based electrical counting vs. U.S. NECA integration); Esticom/Procore (acquired 2020, integrated construction suite vs. standalone) |
| Moat Signals | Custom-trained electrical takeoff AI model at 83.5% accuracy (usebidflow.com); NECA labor unit database integration; potential data flywheel from user corrections |
| Risk Factors | Recent pivot from unrelated QA product, well-funded competitors (Beam AI $48M, Togal.AI $17.5M+), 83.5% accuracy ceiling requiring significant manual correction |
| Founder Reach | Jesse Choe: Twitter @jesse_choe10 (count not retrievable), LinkedIn 500+, GitHub 52 followers/5 stars. Gautham Ramachandran: Twitter not found, LinkedIn (count not retrievable), GitHub not found |
| Distribution Signals | YC Launch page 14 upvotes (YC Launches, ~Jan 2026); LinkedIn company page at linkedin.com/company/bidflowai (follower count not retrievable); No Product Hunt launch found |
