# Litmus

> Run an async work trial on every engineer you interview.

| Field | Value |
|-------|-------|
| Website | https://litmushiring.com/ |
| YC Page | https://www.ycombinator.com/companies/litmus-build |
| Batch | Summer 2026 |
| Industry | B2B / B2B -> Recruiting and Talent |
| Team Size | 2 |
| Location | New York City, NY, USA |
| Tags | Recruiting, Talent Acquisition |
| YC Partner | Jared Friedman (YC company page) |
| Emails | founders@litmushiring.com (company website) |

## The Idea

- **Problem:** Engineering hiring managers spend weeks running interviews and still cannot tell how a candidate actually builds, especially in an AI-tool era where output diverges from live-whiteboard signal (Columbia Spectator, May 2026; company website).
- **Approach:** Litmus ingests a company's repos, tickets, and job descriptions to auto-generate end-to-end feature-scoped async assessments; candidates work in their own IDE with AI tools while Litmus records Claude Code/Copilot CLI prompts, sandbox-runs the submission, and grades on tool fluency, process, and outcome (litmushiring.com).
- **Differentiation:** Vs. HackerRank/CodeSignal (generic algorithmic tests, G2 4.5-4.6): assessments are generated from the customer's own codebase rather than a shared library (litmushiring.com); vs. CodeSubmit ($99/mo take-homes, Capterra): Litmus adds AI-prompt capture and sandboxed grading (search snippet); vs. Karat (human-run live loops, tens of thousands per role, search snippet): fully async and software-priced.
- **Business Model:** No pricing page published (litmushiring.com WebFetch, Jul 2026); [Inferred]: per-seat or per-assessment SaaS to hiring teams given ATS integration model and current $60K ARR figure (YC page).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; adjacent context: CodeSignal alternatives market lists 10+ platforms with 400-1,400 G2 reviews each (G2, 2026).
- **GTM / Distribution:** Native ATS integrations with Ashby, Greenhouse, and Lever provide embedded distribution inside the customer's existing hiring workflow (litmushiring.com); [Inferred]: founder-led outbound to YC-network Series A engineering leaders, consistent with the origin story (Columbia Spectator, May 2026).

## Defensibility

- **Moat today:** Company-specific assessment corpus built from each customer's repos/tickets creates per-account switching cost once tuned (litmushiring.com); 3,000+ assessments evaluated as accumulated grading calibration data (YC page).
- **Future moat:** [Inferred]: Proprietary dataset of AI-prompt-to-code traces across many engineers could train a grading model that outperforms generic LLM judges; unproven because no benchmark or model artifact is public.
- **Market structure:** [Inferred]: Incumbents (HackerRank, CodeSignal) built libraries of static shared problems and would cannibalize that library-driven revenue by moving to per-customer generated assessments; no structural barrier confirmed publicly.
- **Commoditization risk:** Assessment generation from repos is buildable by any team with LLM access; the ATS integrations (Ashby/Greenhouse/Lever) and grading calibration are the harder-to-replicate pieces (litmushiring.com).

## Market & Traction

- **Traction signals:**
  - $60K ARR (YC company page, retrieved Jul 2026)
  - 3,000+ assessments evaluated (YC company page, retrieved Jul 2026)
  - Customer: Neo Scholars named as a client (YC company page)
  - ATS integrations shipped with Ashby, Greenhouse, Lever (litmushiring.com)
  - Active jobs page at jobs.ashbyhq.com/litmus (search result, 2026)
  - LinkedIn company page live as "Litmus (YC S26)" (LinkedIn, 2026); follower count not retrievable
  - Press: Columbia Spectator feature (May 3, 2026)
  - Product Hunt: No public data found
  - Twitter/X company account: No public data found
- **Competitors:**
  - HackerRank (revenue unknown, G2 4.6, 553 reviews): shared generic problem library vs. Litmus's per-customer repo-generated assessments (G2, 2026).
  - CodeSignal (revenue unknown, ~$87M raised per public reporting, G2 4.5, 1,435 reviews): benchmark scoring vs. Litmus's process+outcome grading with AI-prompt capture (G2, 2026; search snippet).
  - Codility (revenue unknown, G2 4.6, 904 reviews): standardized coding tasks vs. Litmus's customer-context tasks (G2, 2026).
  - CodeSubmit (revenue unknown, from $99/mo, Capterra): take-home projects without AI-prompt capture or sandbox grading (Capterra, 2026).
  - Karat (raised $150M+ per prior reporting, revenue unknown): human-run live interviews at $10K+/role vs. Litmus's async software model (search snippet, 2026).
- **Why now:** [Inferred]: Widespread candidate use of Claude Code / Copilot CLI in 2025-2026 made prompt-behavior a first-class hiring signal that legacy platforms don't capture; corroborated by 2026 industry commentary that "assessments still look like 2018" and the bottleneck shifted to identifying AI-native engineers (CodeSignal blog, 2026).

## Founders & Team

- **Shaivi Rau (Co-Founder, CEO):**
  - Background: Columbia College '26 (Columbia Spectator, May 2026); prior product engineering intern at August Law building Python/SQL data pipelines and LangChain document extraction (ZoomInfo profile snippet); Technology Summer Analyst in financial sector (search snippet); high school at Singapore American School (search snippet); origin story cites brother's Series A hiring experience as motivation (Columbia Spectator).
  - Twitter/X: No public account found
  - LinkedIn: "Co-Founder @ Litmus | YC S26" (linkedin.com/in/shaivi-rau)
  - GitHub: No public repos found
- **Elena Zhao (Co-Founder):**
  - Background: Columbia SEAS '26, Applied Math + Computer Science (Columbia Spectator, May 2026); prior engineering experience at Meta; incoming SWE intern at Two Sigma (LinkedIn snippet, 2026).
  - Twitter/X: No public account found
  - LinkedIn: "Co-Founder @ Litmus (YC S26)" (linkedin.com/in/elena-zhao-015353217); 500+ connections (search snippet)
  - GitHub: No public repos found
- **Co-founder relationship:** Both currently at Columbia University (SEAS '26 and CC '26), applied to YC together and received interview invite Dec 22, 2025 (Columbia Spectator; Shaivi Rau LinkedIn post).
- **Founder-market fit:** Zhao has hands-on SWE experience at Meta and incoming Two Sigma internship providing insider view of the elite-engineer hiring funnel Litmus targets; Rau's stated origin — watching her Series A-founder brother struggle to hire — anchors the customer-empathy claim (Columbia Spectator, May 2026); no advisors or lead investors named beyond YC.

## Key Risks

- **Technical feasibility of grading:** Auto-generating and objectively grading end-to-end feature assessments across arbitrary customer stacks is unproven at scale; the 3,000-assessment count (YC page) is early and no accuracy benchmark is publicly reported. No mitigation identified.
- **Commoditization by LLM tooling:** Repo-context assessment generation is a thin wrapper over foundation models and can be replicated by incumbents (HackerRank, CodeSignal) or in-house teams; only defensible piece is per-customer grading calibration data (litmushiring.com; G2, 2026).
- **Candidate-side adoption / AI-prompt capture:** Product depends on candidates accepting keystroke- and prompt-level surveillance of Claude Code/Copilot CLI sessions (litmushiring.com); privacy pushback in candidate market not addressed in public materials.
- **Hiring-market cyclicality:** Engineering-hiring assessment spend is procyclical; a downturn in 2026-2027 tech hiring would compress budgets Litmus is selling into. [Inferred]: no mitigation stated.
- **Name collision:** Multiple companies operate under "Litmus" (Litmus email marketing, Litmus Automation IoT, litmustest.io, litmuslab.app); brand SEO and trademark friction likely (search results, 2026).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | $60K ARR (YC page, 2026); 3,000+ assessments evaluated (YC page, 2026); Neo Scholars named as client (YC page); ATS integrations live with Ashby/Greenhouse/Lever (litmushiring.com); Columbia Spectator feature (May 3, 2026) |
| Revenue Signal | $60K ARR (YC page, Jul 2026); no public pricing page (litmushiring.com, Jul 2026) |
| Founders | Shaivi Rau (Co-Founder/CEO): Columbia CC '26, prior August Law product eng intern, financial-sector Tech Summer Analyst. Elena Zhao (Co-Founder): Columbia SEAS '26 Applied Math/CS, prior Meta, incoming Two Sigma SWE intern. |
| Competitors | HackerRank (revenue unknown, generic library vs. per-customer generation); CodeSignal (~$87M raised per public reporting, revenue unknown, benchmark scoring vs. process+outcome grading); Codility (revenue unknown, standardized tasks vs. repo-context tasks); CodeSubmit (from $99/mo, no AI-prompt capture); Karat ($150M+ raised, human live-interview model vs. async software). |
| Moat Signals | Per-customer assessment tuning + grading calibration on 3,000+ submissions (YC page); ATS integrations with Ashby/Greenhouse/Lever (litmushiring.com) |
| Risk Factors | LLM-wrapper commoditization, unproven grading accuracy, candidate-side surveillance acceptance |
| Founder Reach | Shaivi Rau: Twitter not found, LinkedIn present (count not retrievable), GitHub not found. Elena Zhao: Twitter not found, LinkedIn 500+ connections (count not retrievable), GitHub not found. |
| Distribution Signals | ATS integrations with Ashby, Greenhouse, Lever (litmushiring.com); LinkedIn company page live (LinkedIn, 2026); Ashby-hosted jobs board (search result, 2026); Columbia Spectator press (May 2026) |
| Emails | founders@litmushiring.com (company website) |

Sources:
- [Litmus](https://litmushiring.com/)
- [Litmus YC page](https://www.ycombinator.com/companies/litmus-build)
- [Columbia Spectator feature on Zhao & Rau](https://www.columbiaspectator.com/news/2026/05/03/elena-zhao-seas-26-and-shaivi-rau-cc-26-survived-the-broken-hiring-process-now-y-combinator-is-betting-they-can-rebuild-it/)
- [Shaivi Rau LinkedIn](https://www.linkedin.com/in/shaivi-rau/)
- [Elena Zhao LinkedIn](https://www.linkedin.com/in/elena-zhao-015353217/)
- [Litmus LinkedIn company page](https://www.linkedin.com/company/litmushiring)
- [Litmus Ashby jobs board](https://jobs.ashbyhq.com/litmus)
- [G2 CodeSignal alternatives](https://www.g2.com/products/codesignal/competitors/alternatives)
- [Capterra CodeSubmit](https://www.capterra.com/p/199627/CodeSubmit/)
- [Karat alternatives / pricing context](https://utkrusht.ai/karat-alternatives)
