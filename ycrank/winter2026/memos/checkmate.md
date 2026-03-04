# Checkmate

> AI-powered primary research platform that conducts autonomous expert interviews for institutional investors

| Field | Value |
|-------|-------|
| Website | https://checkmateresearch.ai/ |
| YC Page | Unknown |
| Batch | Unknown (not confirmed in YC directory) |
| Industry | Unknown / Unknown |
| Team Size | Unknown |
| Location | Unknown |
| Tags | Unknown |
| YC Partner | Not listed |
| Emails | sales@checkmateresearch.ai |

## The Idea

**Problem:** Institutional investors (hedge funds, PE firms, consulting firms) rely on expert network calls for primary research ΓÇö interviewing industry experts to validate investment theses, conduct channel checks, and gather competitive intelligence. The current process is manual: analysts must personally attend each call, take notes, and synthesize findings. This limits throughput (an analyst can only do one call at a time), creates quality variance (junior analysts miss follow-ups), and introduces timezone and language barriers for international research. Existing solutions include traditional expert networks (GLG, AlphaSights, Guidepoint, Third Bridge) which broker expert connections but don't automate the interview itself.

**Approach:** Checkmate (operating under the brand "Expert Insights" ΓÇö expertinsights.ai redirects to checkmateresearch.ai) deploys AI voice agents that join expert network calls autonomously. Users forward their existing expert network calendar invites; Checkmate spins up a dedicated AI analyst for each call. The AI conducts adaptive interviews with real-time follow-up questions, handles contradictions, and operates in multiple languages including Mandarin Chinese. Post-call, it delivers clean transcripts and executive memos with key insights synthesized. The system handles compliance ΓÇö collecting expert consent, sharing standard disclosures, and applying MNPI guardrails before each call (checkmateresearch.ai).

**Differentiation:** Unlike AlphaSense's AI Interviewer (launched 2025, built on its $930M Tegus acquisition), which operates within AlphaSense's proprietary expert transcript library, Checkmate is network-agnostic ΓÇö it works with invites from any expert network (GLG, AlphaSights, Guidepoint, etc.) or direct expert relationships (checkmateresearch.ai). Unlike InsightAgent, which offers both a CoPilot mode (augmenting live human interviews) and an autonomous mode, Checkmate appears fully autonomous-first ΓÇö the user does not need to be on the call at all (checkmateresearch.ai). Traditional expert networks (GLG, Third Bridge) do not offer AI-conducted interviews.

**Business Model:** No pricing is publicly listed. The product is accessed via a "Request Access" form (Typeform) suggesting a gated pilot or enterprise sales model (checkmateresearch.ai). [Inferred]: Most likely monetization path is per-call pricing or a subscription model (monthly fee for a set number of AI-conducted calls), given the unit economics of expert network calls typically ranging $500-$2,000 per call.

**TAM/SAM:** The global expert network market was valued at approximately $3-4.2 billion in 2025, growing at 12-16% CAGR (Inex One, 2025; Business Research Insights, 2025). The market is projected to reach USD 16.9 billion by 2035 at 15.5% CAGR (Industry Research, 2025 via search snippet). Approximately 11,200 firms use expert networks as of 2026 (Inex One, 2025). SAM would be the subset of expert network spend going to call execution and synthesis (as opposed to expert sourcing), which is not separately estimated in public sources.

**GTM / Distribution:** The product integrates with existing expert network workflows ΓÇö users forward calendar invites from their current networks rather than switching platforms (checkmateresearch.ai). Pilot testimonials reference "$10B+ L/S Equity Hedge Fund," "Mid-Market PE Firm," and "MBB PE Consulting" as early users (checkmateresearch.ai). [Inferred]: Most likely distribution path is top-down enterprise sales to hedge funds and PE firms, leveraging pilot results and word-of-mouth within the institutional investor community.

## Defensibility

**Data moat potential:** Each AI-conducted interview generates proprietary transcript data. Over time, this corpus could enable better follow-up question generation, industry-specific interview protocols, and cross-call pattern recognition. However, this moat is nascent and depends on scale of adoption.

**Compliance infrastructure:** SOC II compliance, MNPI guardrails, post-call transcript scrubbing, and expert consent collection represent meaningful switching costs once integrated into a fund's compliance workflow (checkmateresearch.ai).

**Market structure:** The primary structural barrier against incumbents is business model cannibalization. Traditional expert networks (GLG, AlphaSights, Third Bridge) earn revenue from human expert sourcing and call brokering ΓÇö automating the interview itself could reduce the perceived value of their human intermediation. AlphaSense/Tegus has launched its own AI Interviewer but is constrained to its proprietary expert library, whereas Checkmate's network-agnostic approach avoids that lock-in.

**Commoditization risk:** The core technology (LLM-powered voice agents conducting structured interviews) is increasingly accessible. AlphaSense has already launched a competing AI Interviewer product (PR Newswire, 2025). InsightAgent offers similar autonomous interview capabilities. The barrier to entry is moderate ΓÇö the harder challenge is earning trust with compliance-sensitive institutional investors (hedge funds, PE firms) who require SOC 2 certification, MNPI safeguards, and data isolation guarantees.

## Market & Traction

**Traction signals:**
- Pilot testimonials from anonymous institutional investors: "$10B+ L/S Equity Hedge Fund (Senior Analyst)," "Mid-Market PE Firm (Principal)," "MBB PE Consulting (Consultant)" (checkmateresearch.ai)
- No public revenue, user counts, or growth metrics disclosed
- Twitter/X: @checkmateresea1 (follower count not retrievable)
- LinkedIn: No dedicated company page found for "Checkmate Research"
- Product Hunt: No public launch found
- Corporate entity: Labyrinth Technologies Inc. (checkmateresearch.ai footer)
- a16z Speedrun Cohort 004 participant (under "Labyrinth" name) (speedrun.a16z.com)

**Competitive landscape:**

1. **AlphaSense/Tegus** ($4B+ valuation, $500M ARR as of October 2025; PR Newswire, 2025): Launched AI Agent Interviewer in 2025 built on Tegus's 200,000+ expert transcript library. Key differentiator vs. Checkmate: operates within its proprietary expert ecosystem rather than being network-agnostic. Acquired Tegus for $930M in June 2024.

2. **InsightAgent** (funding unknown, revenue unknown): Autonomous AI moderator for expert interviews, purpose-built for hedge funds, PE, and asset managers. Supports 29 languages. Key differentiator vs. Checkmate: offers both CoPilot mode (augmenting live human interviews) and fully autonomous mode, giving firms flexibility. SOC 2 Type II audit in progress (expected Q1 2026) (insightagent.io).

3. **Brightwave** ($21M raised ΓÇö $6M seed + $15M Series A from Decibel Partners, Point72 Ventures, OMERS Ventures; Brightwave.io, 2024): AI financial research assistant for investment firms. Key differentiator vs. Checkmate: focuses on document-based research synthesis rather than live expert call automation. Signed customers with $120B+ AUM while in stealth (Brightwave.io).

4. **Traditional expert networks (GLG, AlphaSights, Guidepoint, Third Bridge)**: GLG operates the largest expert database with 1M+ professionals across 150+ countries. These networks source and broker expert connections but do not automate the interview process itself. They serve as Checkmate's upstream partners rather than direct competitors ΓÇö Checkmate integrates with their calendar invites (checkmateresearch.ai; Nexus Expert Research, 2026).

**Why now:** Two specific catalysts: (1) LLM voice agent quality crossed a usability threshold in 2024-2025, enabling natural-sounding, adaptive multi-turn conversations that institutional investors would trust for high-stakes primary research; (2) AlphaSense's $930M acquisition of Tegus in June 2024 (PR Newswire, 2024) validated the convergence of AI and expert research at scale, signaling the market is ready for AI-native approaches. [Inferred]: The increasing cost pressure on hedge fund research budgets (with expert calls typically costing $500-$2,000 each) creates demand for higher-throughput, lower-cost alternatives.

## Founders & Team

**Neil Garde** ΓÇö Co-founder (& CEO per a16z Speedrun listing)
- BS Electrical Engineering & Computer Science, UC Berkeley (2011-2015) (LinkedIn via search snippet)
- Previously: Product Manager at Google for 8 years, leading products in AI, AR/VR, Games, and Platforms; drove $100M+ annual revenue growth in Google Play app ads (LinkedIn via search snippet; a16z Speedrun)
- Previously: Built Monzo US's team, product, and business from 0 to 1 over 4 years (LinkedIn via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/neilgarde ΓÇö Co-founder at Expert Insights
- GitHub: No public repos found

**James Sha** ΓÇö Co-founder & CTO
- Studied AI & Computer Vision, UC Berkeley (jamessha.com)
- Previously: Co-founder & CTO at Onyx (fitness tech, scaled to 300K+ users, acquired by CureFit) (LinkedIn via search snippet; jamessha.com)
- Previously: Software Engineer at Google (NLP & Search Ranking) (jamessha.com)
- Previously: AI & Content Ranking at Meta (jamessha.com)
- Forbes 30 Under 30 honoree (LinkedIn via search snippet)
- Published: "Range Sensor and Silhouette Fusion for High-Quality 3D Scanning" (ICRA 2015); "BigBIRD: A Large-Scale 3D Database of Object Instances" (ICRA 2014) ΓÇö co-authored with Pieter Abbeel (jamessha.com)
- Twitter/X: No public account found (was noted as "building in stealth" per @StealthCoSpy, June 2024)
- LinkedIn: linkedin.com/in/jamessha ΓÇö Cofounder @ Expert Insights | Forbes 30 Under 30
- GitHub: github.com/jamessha ΓÇö 19 public repos, 12 followers, no notably starred repos

**Co-founder relationship:** Both founders attended UC Berkeley (Neil Garde: EECS 2011-2015; James Sha: AI & Computer Vision), suggesting possible university overlap. Both worked at Google (Garde as PM, Sha as Software Engineer on NLP/Search Ranking), suggesting possible professional overlap.

**Founder-market fit:** The team combines product leadership in AI (Garde: 8 years at Google across AI/AR/VR/Games) with deep technical AI/ML expertise (Sha: published robotics/CV researcher, Forbes 30 Under 30, prior acquisition exit). Garde's experience building Monzo US from 0 to 1 is relevant to the enterprise sales and compliance challenges of selling to institutional investors. Sha's NLP background at Google is directly applicable to building adaptive conversational AI agents. The company was part of a16z Speedrun Cohort 004 (speedrun.a16z.com).

## Key Risks

**AlphaSense competitive threat:** AlphaSense ($500M ARR, $4B+ valuation) launched its own AI Agent Interviewer in 2025, built on its Tegus transcript library of 200,000+ expert calls (PR Newswire, 2025). AlphaSense serves 6,500+ enterprises including 50%+ of Midas List VCs. As an incumbent with massive distribution and an existing expert content moat, AlphaSense could commoditize the autonomous interview capability as a feature within its broader platform.

**Trust barrier with compliance-sensitive buyers:** Institutional investors (hedge funds, PE firms) operate under strict compliance regimes around MNPI, information barriers, and data handling. Convincing these buyers to let an AI agent ΓÇö from an early-stage startup ΓÇö conduct unsupervised expert calls requires extraordinary trust in compliance safeguards. SOC II compliance is listed (checkmateresearch.ai) but independent verification and track record take time to establish.

**Expert acceptance risk:** The product requires experts on the other end of the call to consent to being interviewed by an AI rather than a human. Expert willingness to engage with AI interviewers is unproven at scale ΓÇö some experts may refuse or provide lower-quality responses when speaking to a non-human agent.

**Brand disambiguation:** Multiple unrelated companies operate under the "Checkmate" name across different industries (consumer savings, restaurant tech, QA, fraud prevention, hiring). The company also operates under multiple brands ("Checkmate Research," "Expert Insights," corporate entity "Labyrinth Technologies Inc."), which may cause confusion in market positioning and SEO.

**Platform dependency on expert networks:** The product's distribution model depends on users having existing relationships with expert networks (GLG, AlphaSights, etc.) whose calendar invites they forward. If these networks restrict AI agents from joining calls or impose contractual limitations, Checkmate's core workflow could be disrupted.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3-4.2B expert network market (2025), growing 12-16% CAGR, projected $16.9B by 2035 (Inex One, 2025; Business Research Insights, 2025; Industry Research, 2025 via search snippet) |
| SAM | No public data found for AI-conducted expert call subsegment |
| Traction | Anonymous pilot testimonials from $10B+ hedge fund, mid-market PE, and MBB consulting (checkmateresearch.ai); a16z Speedrun Cohort 004 (speedrun.a16z.com); no public user counts or revenue |
| Revenue Signal | No public data found. Product accessed via "Request Access" form (checkmateresearch.ai) |
| Founders | Neil Garde (Co-founder/CEO): Google PM 8 yrs, Monzo US 0-to-1, UC Berkeley EECS. James Sha (Co-founder/CTO): Forbes 30u30, ex-Google NLP, ex-Meta AI, Onyx CTO (acq. by CureFit, 300K+ users), UC Berkeley AI/CV |
| Competitors | AlphaSense/Tegus ($4B+ valuation, $500M ARR, AI Interviewer launched 2025); InsightAgent (funding unknown, revenue unknown, autonomous + CoPilot modes); Brightwave ($21M raised, revenue unknown, document-based AI research); GLG/AlphaSights/Third Bridge (traditional expert networks, sourcing not interview automation) |
| Moat Signals | SOC II compliance, MNPI guardrails, network-agnostic integration, early proprietary transcript corpus (checkmateresearch.ai) |
| Risk Factors | AlphaSense competitive threat, trust barrier with compliance-sensitive buyers, expert acceptance of AI interviewers |
| Founder Reach | Neil Garde: Twitter not found, LinkedIn linkedin.com/in/neilgarde. James Sha: Twitter not found, LinkedIn linkedin.com/in/jamessha, GitHub 12 followers |
| Distribution Signals | a16z Speedrun Cohort 004 participant (speedrun.a16z.com); anonymous pilot testimonials (checkmateresearch.ai); no Product Hunt, app store, or Chrome extension presence found |
| Emails | sales@checkmateresearch.ai |
