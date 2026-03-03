# Hex Security

> Agentic Offensive Security at Scale

| Field | Value |
|-------|-------|
| Website | https://hex.co |
| YC Page | https://www.ycombinator.com/companies/hex-security |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Security |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Reinforcement Learning, Cybersecurity |
| YC Partner | Gustaf Alstromer |
| Emails | founders@hex.co |

## The Idea

**Problem:** Companies lose $10T+ annually to preventable vulnerabilities, yet most conduct penetration tests only once a year because traditional pentesting is manual, expensive, and slow (YC company page). By the time companies receive a PDF report, their codebase has already changed. The customer segment is any organization running web applications and infrastructure that requires security testing — a near-universal need across B2B software, fintech, healthcare, and regulated industries.

**Approach:** Hex Security builds AI agents that run continuous, autonomous penetration tests against customer applications and infrastructure. Rather than periodic manual engagements, the agents work 24/7 to find vulnerabilities, chain exploits, and deliver actionable findings with reproduction steps (YC company page). The company's tags indicate the use of reinforcement learning in training these agents.

**Differentiation:** Traditional penetration testing firms (e.g., NetSPI, Bishop Fox) rely on human testers conducting periodic engagements. Hex Security's AI agents automate this process continuously. Compared to XBOW (which also automates pentesting but is a later-stage, well-funded competitor), Hex Security differentiates through its emphasis on continuous testing at lower cost. Compared to Casco (YC S25), which focuses on web apps, APIs, and AI system testing, Hex Security positions itself more broadly across apps and infrastructure. Compared to Novee ($51.5M raised), which uses a proprietary purpose-trained offensive security model, Hex Security's approach incorporates reinforcement learning.

**Business Model:** No public pricing page was found on hex.co at time of research. [Inferred]: Most likely monetization path is a SaaS subscription model, potentially tiered by scope of infrastructure tested or number of applications, based on the "continuous testing" positioning and industry norms in automated security tooling.

**TAM/SAM:** The global penetration testing market was valued at $1.98B in 2025 and is projected to reach $4.39B by 2031 at a CAGR of 14.2% (MarketsandMarkets, 2026 via search snippet). Fortune Business Insights estimated the market at $2.74B in 2025 (Fortune Business Insights via search snippet). The broader cybersecurity market provides additional TAM context, though specific SAM estimates for AI-automated pentesting as a sub-segment were not found.

**GTM / Distribution:** The company has already demonstrated its product by finding critical vulnerabilities across dozens of YC portfolio companies (YC company page), suggesting an initial GTM motion of testing against YC-batch peers as proof-of-concept and lead generation. [Inferred]: Most likely distribution path is direct sales to security-conscious startups and mid-market companies, leveraging the YC network for initial customer acquisition before expanding to enterprise.

## Defensibility

The company's use of reinforcement learning for training offensive security agents may create a data advantage over time — as agents discover more vulnerabilities across more environments, the models could improve in ways that are difficult for new entrants to replicate without similar deployment breadth. The continuous testing model creates switching costs, as customers would need to re-onboard and re-baseline with a competitor.

**Market structure:** Traditional penetration testing firms face a structural conflict: their business model depends on billable human hours. Automating pentesting would cannibalize their core revenue stream. Large security incumbents (e.g., CrowdStrike, Palo Alto Networks) are primarily defensive rather than offensive security focused, and building autonomous offensive agents requires a distinct technical capability and tolerance for the liability risks inherent in automated attack tooling. [Inferred]: The structural barrier for incumbents is business model cannibalization (for pentest firms) and product-line conflict (for defensive security vendors).

**Commoditization risk:** Multiple well-funded competitors are building similar autonomous pentesting products — XBOW ($117M total funding), Novee ($51.5M), Aikido Security ($84.5M), and YC peers Casco and MindFort. Open-source AI pentesting tools (PentestAgent, PentAGI, Shannon) are also emerging. The commoditization risk is meaningful given the number of entrants.

## Market & Traction

**Traction signals:**
- The company's agents found critical vulnerabilities in "dozens of YC companies," including SQL injection exposing billions of records, a proof-of-concept worm capable of infecting entire networks, and access to hundreds of codebases, preventing an estimated $3B+ in potential damages based on exposed record counts and IBM's Cost of a Data Breach benchmarks (YC company page). Note: The $3B+ figure represents estimated potential damages prevented for the tested companies, not Hex Security's own revenue.
- LinkedIn company page exists at linkedin.com/company/hex-security (LinkedIn search result). Follower count not retrievable.
- No company Twitter/X account was found in search results.
- No Product Hunt launch found.
- No app store listings, Chrome extension, or download counts found.
- No public revenue or pricing data found.
- No Discord/Slack community found.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Hex Security |
|---|---|---|---|
| **XBOW** | $117M total ($75M Series B, June 2025) (Help Net Security, June 2025 via search snippet) | Revenue unknown | Top-ranked on HackerOne leaderboard; generally available product with large bank and enterprise customers; founded by ex-GitHub engineers |
| **Novee** | $51.5M (seed + Series A, Jan 2026) (BusinessWire, Jan 2026 via search snippet) | Revenue unknown | Proprietary purpose-trained AI model for offensive security; outperformed frontier LLMs by 55%+ on exploitation benchmarks; Israeli ex-IDF cyber founders |
| **Aikido Security** | $84.5M total ($60M Series B) at $1B valuation (Aikido blog, Jan 2026 via search snippet) | $13M in 2025, 5x YoY growth (ainvest.com, Jan 2026 via search snippet) | Broader unified security platform (code to runtime); 100K+ teams; deploys hundreds of specialized agents on demand |
| **Casco** | ~$500K (YC S25 standard deal) | Revenue unknown | Ex-AWS AI & Security founders; trusted by 100+ companies including Gusto; focus includes AI system security testing |
| **MindFort** | ~$500K (YC X25 standard deal) (Crunchbase via search snippet) | Revenue unknown | In-house models; co-founder from ProjectDiscovery (Nuclei) and NetSPI; 3-person team like Hex Security |

**Why now:** [Inferred]: The convergence of several catalysts opened this market in 2024-2025: (1) Large language models and reinforcement learning reached sufficient capability to autonomously reason about complex multi-step attack chains; (2) the attack surface expanded as companies adopted more cloud infrastructure, APIs, and AI systems; (3) the cost of data breaches continued to rise (IBM reports average breach cost at $4.88M in 2024), increasing urgency for continuous security testing; (4) the chronic shortage of skilled penetration testers (estimated 3.5M unfilled cybersecurity positions globally per ISC2) created market pull for automation.

## Founders & Team

**Huzaifa Ahmad** — Co-Founder
- BA, University of California, Berkeley (2021–2025) — coursework in CS, data science, ML, NLP (LinkedIn)
- Previously: Member of Technical Staff at Lilac Labs; positions at PlayAI, Amazon, and Capital One (LinkedIn, RocketReach via search snippet)
- Founded Talently, a tool that reverse-engineered major ATS platforms and sent 200K+ job applications (YC company page)
- Hackathon wins: 1st place Developer Week Hackathon 2020 ($2,000+), 1st place School of AI Global Health Hackathon 2019 ($10,000), 3rd place San Ramon Hackathon 2019 ($500) (LinkedIn)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/ahmadhuzaifa012 — 5K followers (LinkedIn)
- GitHub: github.com/ahmadhuzaifa — profile found, no notable public repos with significant star counts identified

**Ahmad Khan** — Co-Founder
- BS Computer Science, The University of Texas at Austin (2009–2013) (LinkedIn via search snippet)
- Previously: Senior Security Engineer II at Cruise (tech lead for static analysis, custom CodeQL & Semgrep queries, security assessments); Senior Application Security Engineer at Salesforce (black-box pentesting, source code auditing); Software Engineer at IBM Cloud (RocketReach, LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/mahmadkhan — "Product/application security engineer" (LinkedIn via search snippet)
- GitHub: No public repos found

**Prama Yudhistira** — Co-Founder
- BS Computer Science, Georgia Institute of Technology (LinkedIn via search snippet)
- Previously: Engineer at Codegen, where he built asynchronous coding agents (LinkedIn, YC page via search snippet)
- Portfolio: prama.dev
- Twitter/X: @sweatbuilder (x.com/sweatbuilder) — follower count not retrievable
- LinkedIn: linkedin.com/in/pramayudhistira (LinkedIn)
- GitHub: No notable public repos found with significant star counts

**Co-founder relationship:** No shared prior employer or university was identified among the three founders based on the information gathered. Huzaifa attended UC Berkeley, Ahmad attended UT Austin (graduating ~2013), and Prama attended Georgia Tech. No public data on co-founder history.

**Founder-market fit:** Ahmad Khan brings the deepest domain expertise, with approximately a decade of professional application security and penetration testing experience at Cruise, Salesforce, and IBM — directly relevant to building automated offensive security tooling. Prama Yudhistira's experience building AI coding agents at Codegen provides relevant technical background in autonomous agent architectures. Huzaifa Ahmad brings product-building experience and demonstrated ability to reverse-engineer systems (ATS platforms), which maps to the offensive security mindset. No advisors, board members, or notable investors beyond YC and Gustaf Alstromer were found.

## Key Risks

**Crowded and well-funded competitive field:** XBOW ($117M), Novee ($51.5M), and Aikido ($84.5M at $1B valuation) are all building autonomous penetration testing products with substantially more capital. XBOW already has enterprise customers (large banks, tech firms) and top HackerOne ranking (Help Net Security, June 2025 via search snippet). Hex Security must differentiate on product performance or go-to-market before these competitors consolidate the market.

**Brand and domain confusion:** The domain hex.co is closely associated with Hex Technologies (hex.tech), a well-known data analytics platform founded by Barry McCardel that has raised $150M+ in venture funding. The name "Hex" in the security context also overlaps with HexStrike AI, Hexens, Hex Five Security, and Hexnode. This creates SEO, brand awareness, and customer acquisition challenges.

**Liability and scope control for autonomous offensive tooling:** Autonomous agents that chain exploits and compromise networks carry inherent risk of unintended damage to customer production systems. The company's own claim of demonstrating "a PoC worm that could infect entire networks" (YC company page) illustrates the power — and the liability exposure — of the technology. Enterprise customers will require robust scope controls, safe-harbor agreements, and insurance.

**Narrow founding security expertise:** Of the three founders, only Ahmad Khan has direct professional penetration testing and application security experience. Huzaifa Ahmad's background is in general software engineering, and Prama Yudhistira's is in AI coding agents. Competitors like Novee (ex-IDF elite cyber unit founders) and XBOW (ex-GitHub security engineers) have deeper bench strength in offensive security.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.98B in 2025 growing to $4.39B by 2031 at 14.2% CAGR (MarketsandMarkets, 2026 via search snippet) |
| SAM | No public data found for AI-automated pentesting sub-segment |
| Traction | Found critical vulnerabilities in "dozens of YC companies"; $3B+ in estimated prevented damages (YC company page). No user counts, revenue, or download metrics found. |
| Revenue Signal | No public data found |
| Founders | Huzaifa Ahmad (Co-Founder): UC Berkeley, PlayAI/Amazon/Capital One, built Talently. Ahmad Khan (Co-Founder): UT Austin CS, Sr. Security Engineer at Cruise, Sr. AppSec at Salesforce, IBM. Prama Yudhistira (Co-Founder): Georgia Tech CS, Codegen AI agents engineer. |
| Competitors | XBOW ($117M raised, revenue unknown, top HackerOne rank + enterprise customers); Novee ($51.5M raised, revenue unknown, proprietary offensive AI model); Aikido Security ($84.5M raised, $13M ARR in 2025, broader unified security platform); Casco (~$500K YC S25, revenue unknown, AI system security focus); MindFort (~$500K YC X25, revenue unknown, in-house models) |
| Moat Signals | Reinforcement learning approach may create compounding data advantage; continuous deployment creates switching costs. No patents or proprietary benchmarks found. |
| Risk Factors | Well-funded competitors (XBOW $117M, Novee $51.5M, Aikido $84.5M); brand/domain confusion with Hex Technologies (hex.tech); liability risk from autonomous offensive tooling |
| Founder Reach | Huzaifa Ahmad: Twitter not found, LinkedIn 5K followers, GitHub no notable repos. Ahmad Khan: Twitter not found, LinkedIn profile found (count not retrievable), GitHub not found. Prama Yudhistira: Twitter @sweatbuilder (count not retrievable), LinkedIn profile found, GitHub no notable repos. |
| Distribution Signals | No public data found (no Product Hunt launch, no app store listing, no Chrome extension, no company Twitter/X account identified) |
| Emails | founders@hex.co (YC company page) |
