# Prior Foundry

> Simulate how entire populations respond to decisions before they're made.

| Field | Value |
|-------|-------|
| Website | https://priorfoundry.com |
| YC Page | https://speedrun.a16z.com/companies/prior-foundry |
| Batch | Not confirmed (a16z Speedrun portal listed; no YC batch identified) |
| Industry | AI / |
| Team Size | 3 |
| Location | San Francisco, California, United States of America |
| Tags | AI |
| YC Partner | Not listed |
| Emails | shirin@priorfoundry.com, keshav@priorfoundry.com, jonne@priorfoundry.com (a16z Speedrun portal) |

## The Idea

**Problem:** Government and policy teams must forecast how populations will respond to proposed policies (tax changes, migration programs, public health interventions). Current approaches rely on consulting firms that take months or years to produce behavioral intelligence, or on static econometric models that lack individual-level behavioral granularity (priorfoundry.com). Existing tools like survey-based impact assessments are expensive, slow, and often not representative across demographics.

**Approach:** Prior Foundry builds agent-based simulations using synthetic populations derived from large-scale probability surveys (General Social Survey, World Values Survey, European Social Survey), with the option to integrate a customer's own survey data (priorfoundry.com). The workflow has three steps: (1) Research — synthesize academic literature and comparable programs into structured policy options with traceable sources; (2) Simulate — run impact simulations on synthetic populations across regions, demographics, and income levels; (3) Act — generate decision-ready deliverables (memos, policy notes, charts) grounded in evidence (priorfoundry.com). The methodology is rooted in Stanford research demonstrating that survey-anchored LLM agents replicate real individuals' survey responses with 85% accuracy compared to individuals' own two-week test-retest consistency (arxiv.org, 2411.10109, Nov 2024).

**Differentiation:**
- vs. AnyLogic (traditional agent-based simulation): Prior Foundry uses LLM-based generative agents anchored in real survey data rather than rule-based agents; AnyLogic requires programming expertise and is designed for supply chain/logistics, not behavioral policy simulation (anylogic.com).
- vs. FiscalNote / Quorum: These platforms track and analyze existing legislation and regulatory text; they do not simulate population-level behavioral responses to proposed policy (fiscalnote.com; quorum.us).
- vs. Traditional consulting: Prior Foundry offers on-demand simulation versus months-long engagements (a16z Speedrun description).

**Business Model:** No public pricing page found (priorfoundry.com). The company reports $60K ARR within two months of operation and >$1M in pipeline through a distributor (a16z Speedrun description). [Inferred]: Most likely monetization is enterprise SaaS sold to government agencies and international organizations, potentially with per-simulation or per-seat pricing given the institutional buyer profile.

**TAM/SAM:** The global AI governance market was valued at approximately $228M–$620M in 2024 depending on source, projected to reach $3.6B–$7.4B by 2030–2033 at 35–49% CAGR (Precedence Research, 2024 via search snippet; GM Insights, 2025 via search snippet; Grand View Research, 2025 via search snippet). No public TAM/SAM data found specific to the "policy simulation" or "behavioral decision intelligence" sub-segment.

**GTM / Distribution:** The company has a partnership with the OECD spanning 38+ member governments, a pilot with Allegheny County (PA, USA), and >$1M in pipeline through an unnamed distributor (a16z Speedrun description). [Inferred]: Primary GTM is institutional distribution through intergovernmental organizations (OECD) that give access to multiple national governments simultaneously, supplemented by direct sales to U.S. local/state government.

## Defensibility

- **Research IP:** The platform is built on peer-reviewed research from the Stanford lab that pioneered LLM-based human behavior simulation (priorfoundry.com). The company's own published paper demonstrates survey-based generative agents generalize more effectively across cultural contexts than demographic agents (priorfoundry.com).
- **Data integration moat:** Synthetic populations are constructed from curated probability surveys (GSS, WVS, ESS) plus customer-provided data (priorfoundry.com). [Inferred]: Over time, accumulating calibrated simulation results and customer survey integrations could create a proprietary data advantage.
- **Domain expertise:** The founding team combines OECD policy analysis experience, Stanford behavioral simulation research, and Palantir government-tech deployment (a16z Speedrun description).

**Market structure:** [Inferred]: Traditional consulting firms (McKinsey, BCG) could build similar simulation capabilities but face business model cannibalization — simulations that replace months of billable consulting work directly undercut their revenue model. Technology incumbents (Palantir, AnyLogic) lack the behavioral science research foundation and survey-anchored methodology.

**Commoditization risk:** The underlying technique (LLM-based generative agents from survey data) is published in open academic literature, and the Stanford genagents repository is public on GitHub (github.com/joonspk-research/genagents). [Inferred]: A well-resourced competitor with access to the same surveys and LLM APIs could replicate the core simulation approach; the defensible layer is likely in calibration quality, government relationships, and domain-specific workflow tooling.

## Market & Traction

**Traction signals:**
- $60K ARR within two months of operation (a16z Speedrun description)
- Partnership with OECD across 38+ member governments (a16z Speedrun description)
- Pilot with Allegheny County, USA (a16z Speedrun description)
- >$1M in pipeline through a distributor (a16z Speedrun description)
- Company Twitter/X: not found
- LinkedIn company page: not found in search results
- Product Hunt: no launch found
- No app store presence, Chrome extension, or Discord/Slack community found

**Competitive landscape:**

| Competitor | Differentiator vs. Prior Foundry | Funding / Revenue |
|---|---|---|
| AnyLogic | Traditional rule-based simulation; supply chain focus, not behavioral/policy | Bootstrapped; $12–23M revenue (getlatka.com, 2024 via search snippet) |
| FiscalNote | Tracks existing legislation/regulatory text; no population simulation | Was public (NYSE: NOTE); $120M revenue in 2024; delisted Mar 2026; market cap ~$18M at delisting (stockanalysis.com; macrotrends.net) |
| Quorum Analytics | Public affairs workflow (stakeholder tracking, advocacy); no simulation | PE-backed (Serent Capital); $61M revenue Oct 2024 (getlatka.com via search snippet) |
| Policy-Insider.AI | AI-based policy document monitoring; no behavioral simulation | Berlin-based; funding not publicly disclosed (startbase.com) |

**Why now:** Stanford's "Generative Agent Simulations of 1,000 People" paper (Nov 2024, arxiv 2411.10109) demonstrated for the first time that LLM agents anchored in qualitative interviews can replicate individual human behavior at 85% accuracy — a technical threshold that did not exist prior to late 2024. [Inferred]: The convergence of this research breakthrough with falling LLM inference costs and growing government interest in evidence-based policymaking creates a window for productizing these capabilities.

## Founders & Team

**Shirin Abrishami Kashani** — Co-founder & CEO
- BA Political Science, Ludwig-Maximilian University of Munich; MA Refugee & Forced Migration Studies, University of Oxford; PhD candidate in Political Science, Stanford University (Knight-Hennessy Scholar) (knight-hennessy.stanford.edu; profiles.stanford.edu)
- Former junior analyst, International Migration Division, OECD (knight-hennessy.stanford.edu)
- Affiliated with Stanford Immigration Policy Lab and Freeman Spogli Institute (immigrationlab.org; fsi.stanford.edu)
- Named ERP Scholar (German Academic Scholarship Foundation), Carlo-Schmid Fellow, Friedrich-Ebert Foundation Fellow (knight-hennessy.stanford.edu)
- Twitter/X: @kashani_shirin — follower count not retrievable
- LinkedIn: linkedin.com/in/sabrishami — listed as "Stealth Startup"
- GitHub: No public repos found

**Keshav Sivakumar** — Co-founder & CTO
- CS at University of Cambridge; graduate student at Stanford University (LinkedIn)
- Former Forward Deployed Software Engineer / Technical Lead at Palantir Technologies (LinkedIn)
- Co-founder & CTO at Lumitics (2016–2019), a Singapore-based food waste tracking startup that raised US$557K in seed funding (Green Queen, 2019 via search snippet; lumitics.com)
- Twitter/X: @keshavsiva — 14 followers (x.com)
- LinkedIn: linkedin.com/in/keshav-sivakumar
- GitHub: github.com/keshav123456 — 18 repositories; star counts not retrievable

**Jonne Kamphorst** — Co-founder & Chief Scientific Officer
- PhD Political Science, European University Institute (2023); postdoctoral scholar at Stanford PASCL and HAI (pascl.stanford.edu; tec.fsi.stanford.edu)
- Now Assistant Professor, Political Science & Quantitative Social Science Methods, Sciences Po Paris (starting Jan 2026) (jonnekamphorst.com)
- Fulbright Scholar; research on LLMs for behavioral simulation and generative agents (jonnekamphorst.com)
- Published in The Journal of Politics (x.com/JonneKamphorst)
- Twitter/X: @JonneKamphorst — follower count not retrievable
- LinkedIn: not directly found; personal site at jonnekamphorst.com
- GitHub: No public repos found

**Co-founder relationship:** Shirin and Jonne overlapped at Stanford (she as PhD candidate, he as postdoc) and were both affiliated with Stanford's policy-oriented labs (FSI, PASCL, HAI). Keshav was also a Stanford graduate student, providing a shared institutional connection across all three founders.

**Founder-market fit:** Shirin brings direct OECD policy experience and the government relationships that drive GTM. Jonne led the specific Stanford research on LLM-based behavioral simulation that underpins the product. Keshav brings engineering and government-tech deployment experience from Palantir, plus prior startup founding experience at Lumitics.

## Key Risks

**Simulation validity risk:** Government adoption depends on policymakers trusting simulation outputs for high-stakes decisions. The underlying 85% accuracy benchmark (arxiv 2411.10109) was measured on survey response replication, not on predicting real-world policy outcomes. Bridging this gap to actual policy impact prediction is unvalidated.

**Government procurement cycle risk:** Sales to government agencies and intergovernmental bodies (OECD, county governments) involve lengthy procurement processes, compliance requirements, and budget cycles. The OECD partnership and Allegheny County pilot (a16z Speedrun description) mitigate this partially, but conversion from pilot to scaled contracts is uncertain.

**Key person geographic distribution:** Jonne Kamphorst started as Assistant Professor at Sciences Po Paris in January 2026 (jonnekamphorst.com), while the company is headquartered in San Francisco. As CSO responsible for the scientific methodology, his primary academic appointment in a different timezone creates potential bandwidth constraints.

**Open-source replication exposure:** The foundational generative agent architecture is published and open-sourced (github.com/joonspk-research/genagents). A competitor with government relationships and engineering resources could build on the same publicly available methods and survey datasets.

**Ethical and political sensitivity:** Simulating how populations respond to policy decisions—particularly across racial, ideological, and income groups—carries reputational and regulatory risk if outputs are perceived as biased or misused by governments for manipulative purposes.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI governance market ~$228M–$620M in 2024, projected $3.6B–$7.4B by 2030–2033 at 35–49% CAGR (Precedence Research, 2024; GM Insights, 2025; Grand View Research, 2025 — all via search snippet). No "policy simulation" sub-segment data found. |
| SAM | No public data found |
| Traction | $60K ARR in first 2 months; OECD partnership across 38+ member governments; Allegheny County pilot; >$1M pipeline via distributor (all: a16z Speedrun description) |
| Revenue Signal | $60K ARR (a16z Speedrun description) |
| Founders | Shirin Abrishami Kashani (CEO): Stanford PhD candidate, Knight-Hennessy Scholar, ex-OECD. Keshav Sivakumar (CTO): Cambridge CS, ex-Palantir, co-founded Lumitics. Jonne Kamphorst (CSO): EUI PhD, Stanford postdoc, Asst Prof Sciences Po. |
| Competitors | AnyLogic (bootstrapped, $12–23M revenue, traditional simulation — no LLM behavioral agents); FiscalNote ($120M revenue 2024, delisted NYSE, legislative tracking — no simulation); Quorum ($61M revenue 2024, PE-backed, public affairs workflow — no simulation); Policy-Insider.AI (funding undisclosed, policy monitoring — no simulation) |
| Moat Signals | Built on proprietary extension of Stanford generative agent research; OECD institutional partnership; founder with direct OECD policy network (a16z Speedrun description; priorfoundry.com) |
| Risk Factors | Simulation validity gap (survey accuracy ≠ policy outcome prediction), government procurement cycles, open-source replication of foundational methods |
| Founder Reach | Shirin: Twitter @kashani_shirin (count not retrievable), LinkedIn linkedin.com/in/sabrishami. Keshav: Twitter @keshavsiva 14 followers (x.com), LinkedIn linkedin.com/in/keshav-sivakumar, GitHub 18 repos. Jonne: Twitter @JonneKamphorst (count not retrievable). |
| Distribution Signals | OECD partnership (38+ governments); Allegheny County pilot; >$1M distributor pipeline (all: a16z Speedrun description). No Product Hunt, app store, or community signals found. |
| Emails | shirin@priorfoundry.com, keshav@priorfoundry.com, jonne@priorfoundry.com (a16z Speedrun portal) |
