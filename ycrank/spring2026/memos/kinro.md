# Kinro

> AI sales agents for insurance. Sell everywhere your buyers are.

| Field | Value |
|-------|-------|
| Website | https://www.kinro.ai/ |
| YC Page | https://www.ycombinator.com/companies/kinro |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Sales |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | B2B, Insurance, Conversational AI |
| YC Partner | Nicolas Dessaigne |
| Emails | support@kinro.ai |

## The Idea

**Problem:** Insurance distribution relies on human agents and brokers for sales conversations, quoting, and policy binding. Insurers pay roughly $100B+ in commissions annually in the US, and distributors spend $10B+ per year on advertising to acquire customers (Kinro YC page). A growing share of buyer traffic — cited as 20% for some clients — now originates from AI platforms like ChatGPT and Gemini (kinro.ai), a channel that existing sales infrastructure cannot serve. Selling insurance requires strict regulatory compliance (Producer Licensing Model Act, UDAAP under Dodd-Frank), deep carrier integrations, and factually reliable answers, making general-purpose chatbots unsuitable (kinro.ai).

**Approach:** Kinro builds AI sales agents that manage the end-to-end insurance sales process: answering buyer questions, providing personalized coverage explanations, generating live quotes from carrier pricing infrastructure, and binding policies or handing off to existing workflows (kinro.ai). Agents operate across multiple surfaces — ChatGPT, Gemini, websites, phone calls, and WhatsApp — engaging both human buyers and AI assistant agents (kinro.ai). A multi-layered compliance guardrail system enforces factuality (no hallucinated terms or coverage details), regulatory compliance, and AI safety hardening against prompt injection and jailbreaks (kinro.ai). Agents are continuously evaluated and improved via a proprietary platform that optimizes KPIs while maintaining compliance (kinro.ai). Infrastructure is SOC 2 Type II certified and GDPR compliant (kinro.ai).

**Differentiation:** General-purpose AI platforms (OpenAI, Google) remain horizontal and are unlikely to build the vertical infrastructure required for regulated industries (Kinro YC page). Full-stack AI brokerages like Harper ($46.8M raised; TechCrunch, Feb 2026) and Panta (YC W26) compete with brokers by owning the customer relationship. Kinro instead enables brokers and carriers, selling technology rather than replacing distribution partners. COVU (~$50M total funding; covu.com, Aug 2025) combines AI with human BPO for agency operations broadly. Strada (YC S23, $1.9M pre-seed) focuses on servicing and FNOL, not sales. Quandri ($20M+; BusinessWire, Jul 2025) automates renewals and retention rather than new customer acquisition.

**Business Model:** No pricing page is publicly available on kinro.ai. [Inferred]: Most likely monetization is a SaaS platform fee and/or a per-quote/per-bind transaction fee charged to broker and carrier clients, given the B2B distribution model and measurable conversion metrics displayed on the website.

**TAM/SAM:**
- US insurance brokerage market: $140.38B (2025), projected $171.93B by 2030 at 4.14% CAGR (Mordor Intelligence via search snippet).
- US insurance distribution technology market: $20.44B (2023), projected $50.70B by 2029 (GlobeNewswire, Jan 2026 via search snippet).
- Global AI in insurance market: $10.36B (2025), projected $59.50B by 2033 at 27.32% CAGR (SNS Insider via GlobeNewswire, Oct 2025 via search snippet).

**GTM / Distribution:** Kinro currently serves brokers and direct-to-consumer carriers across the US and Europe (Kinro YC page). Named client logos on the website include The Zebra, WTW, Tuio, Lovys, Dalma, Quartz, and Assurland (kinro.ai). A LinkedIn post by co-founder Corentin Hugot (Dec 18, 2025) announced Kinro was preparing to submit ChatGPT apps for clients following OpenAI opening app submissions, suggesting an early-mover strategy on AI platform distribution (LinkedIn). [Inferred]: GTM likely combines direct enterprise sales to carriers/brokers with a land-and-expand motion as AI platform distribution channels (ChatGPT, Gemini) grow in consumer adoption.

## Defensibility

- **Regulatory compliance infrastructure:** Insurance sales require adherence to state-specific licensing requirements, UDAAP, and carrier-specific rules. Kinro's multi-layered compliance guardrail system, factuality enforcement, and SOC 2 Type II certification represent vertical-specific infrastructure that horizontal AI providers are unlikely to replicate (kinro.ai).
- **Carrier integrations:** Live quoting requires direct integration with carrier pricing infrastructure (kinro.ai). Each integration represents accumulated integration work.
- **Data and optimization flywheel:** Production trace analysis and continuous KPI optimization create a feedback loop where agent performance improves with deployment volume (kinro.ai).

**Market structure:** General-purpose AI platforms (OpenAI, Google) face a build-vs-partner decision for regulated verticals. Building vertical insurance infrastructure would require carrier-by-carrier integrations, state-by-state regulatory compliance, and domain-specific evaluation — a costly diversion from their horizontal platform strategy (Kinro YC page). Incumbent brokerages and carriers lack in-house AI agent development capabilities and face channel conflict if they build competing distribution technology. [Inferred]: The structural barrier is the combination of regulatory complexity and carrier integration depth, which creates a narrow specialization that neither horizontal AI platforms nor incumbent insurers are well-positioned to build internally.

**Commoditization risk:** Other YC-backed startups (Strada, Panta) and funded competitors (COVU, FurtherAI with $30M from a16z) are building AI for insurance, though with different focus areas. The core AI agent technology is reproducible; defensibility depends on the depth of carrier integrations, compliance infrastructure, and accumulated performance data. [Inferred]: Commoditization risk is moderate — the regulated nature of insurance creates barriers to entry, but multiple well-funded teams are converging on AI-powered insurance workflows.

## Market & Traction

**Traction signals:**
- Customer logos displayed on website: The Zebra, WTW, Tuio, Lovys, Dalma, Quartz, Assurland (kinro.ai).
- Customer outcome metrics shown on website (these are client results, not Kinro's own revenue): Time to Quote: 23 seconds; Customer Satisfaction: 92% (+20 points vs. legacy); Conversion Rate: 27% (+13 points vs. legacy); Revenue Generated: $193K (+$144K vs. legacy holdout) (kinro.ai).
- LinkedIn company page: 171 followers, 2 listed employees (LinkedIn, Mar 2026).
- Twitter/X: @kinroai — follower count not retrievable.
- Co-founder Corentin Hugot's LinkedIn post about ChatGPT app submissions received 29 likes, 3 comments (LinkedIn, Dec 2025).
- No Product Hunt launch found. No press coverage found. No Discord/Slack community found. No job postings found.

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. Kinro |
|---|---|---|
| Harper | $46.8M (seed + Series A; TechCrunch, Feb 2026) | Full-stack AI brokerage for SMB commercial; owns customer relationship. Kinro enables brokers rather than competing with them. |
| COVU | ~$50M total (covu.com, Aug 2025) | AI + human BPO for broad agency operations; Kinro is sales-specific. |
| Quandri | $20M+ (BusinessWire, Jul 2025) | Focuses on renewals/retention for existing policyholders; Kinro targets new customer acquisition. |
| Strada | $1.9M pre-seed (YC S23) | Conversational AI for servicing, FNOL, inbound call handling; Kinro focuses on outbound sales and conversion. |
| Panta | ~$500K (YC W26) | Full-stack AI brokerage for commercial lines; like Harper, replaces brokers rather than enabling them. |

**Why now:**
- OpenAI opened app submissions for ChatGPT in late 2025, creating a new distribution channel for insurance products. Tuio became the first carrier with an OpenAI-approved ChatGPT insurance app in Feb 2026 (search results). Insurify also launched a ChatGPT insurance comparison app the same month.
- [Inferred]: The emergence of AI assistant platforms (ChatGPT, Gemini) as consumer-facing surfaces where buyers research and purchase insurance creates a new distribution channel that requires purpose-built sales agents — a channel that did not exist 24 months ago.
- J.P. Morgan outlined a scenario where AI agents embedded in platforms like ChatGPT manage the full insurance journey for personal lines, increasing price transparency (search results via McKinsey).
- Insurance broker stocks reacted negatively to ChatGPT insurance app announcements — WTW fell 12% (search results, Feb 2026).

## Founders & Team

**Pierre-Alexandre Kamienny** — Co-founder & CEO
- PhD, Sorbonne University (2023): thesis on efficient adaptation of RL agents, advised by Francois Charton (Meta AI) (HAL thesis repository).
- University of Oxford (Keble College), CentraleSupelec (personal website: pakamienny.github.io).
- Google DeepMind: Research Scientist, led research improving Gemini for financial services (YC page, LinkedIn).
- Meta AI / FAIR Paris: research during PhD (personal website).
- Publications at NeurIPS, ICML, ICLR; ~977 citations on Google Scholar, h-index 10 on Semantic Scholar (Semantic Scholar, Google Scholar).
- Twitter/X: @pierrealexai (YC page) — follower count not retrievable.
- LinkedIn: linkedin.com/in/pakamienny — 500+ connections (LinkedIn).
- GitHub: github.com/pakamienny — 8 repos, 2 followers; notable repos: e2e_transformer (1 star), sympytorch (1 star) (GitHub).

**Parth Ainampudi (Parthasarathi Ainampudi)** — Co-founder
- B.Tech. (Honors), Mechanical Engineering, IIT Bombay (2013–2017); M.S., UT Austin (LinkedIn, ZoomInfo).
- Zoox (Amazon subsidiary): Software Engineer, led infrastructure for training and inference; worked on decision-making and behavior planning using imitation learning and RL (YC page, LinkedIn).
- Samsung: Robotics Software Engineer (LinkedIn).
- Mitsubishi Electric Research Laboratories (MERL): intern, designed robotic gripper; holds a patent on robot gripper assembly (Justia Patents).
- Additional patent application assigned to Zoox (Pub No. 20250108835, Apr 2025) (Justia Patents).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/partha42 — 500+ connections (LinkedIn).
- GitHub: github.com/parthos — 1 public repo (apriltags_ros, forked), 1 follower (GitHub).

**Corentin Hugot** — Co-founder & COO
- ENSC – Bordeaux INP (engineering school specializing in cognitive sciences) (LinkedIn).
- First employee at an insurance startup (name not publicly identified); worked closely with insurance industry leaders (YC page).
- Twitter/X: @hugot_core5462 — bio: "Buildin in AI. Studying buyer's behavior in LLMs." Joined May 2025. Follower count not retrievable (X.com).
- LinkedIn: linkedin.com/in/corentin-hugot — 500+ connections (LinkedIn).
- GitHub: No public repos found.

**Co-founder relationship:** Pierre-Alexandre and Corentin are both French (Pierre-Alexandre studied at CentraleSupelec and Sorbonne; Corentin studied at ENSC Bordeaux INP). No shared employer or university identified from public data. Parth's background (IIT Bombay, UT Austin, Zoox) has no visible overlap with the other founders.

**Founder-market fit:** Pierre-Alexandre's DeepMind research on Gemini for financial services provides direct AI+finance domain expertise. Parth's experience building ML training and inference infrastructure at Zoox addresses the systems engineering required for production AI agents. Corentin's tenure as first employee at an insurance startup and relationships with insurance leaders provides industry domain knowledge and potential distribution channels. The combination covers AI research, infrastructure engineering, and insurance domain expertise.

## Key Risks

**AI platform dependency:** Kinro's distribution strategy relies significantly on operating within third-party AI platforms (ChatGPT, Gemini). OpenAI and Google control app approval, distribution, and platform policies. Policy changes, increased take rates, or platform-native insurance features could disrupt Kinro's access to this channel. Mitigation: Kinro also operates on websites, calls, and WhatsApp (kinro.ai), providing channel diversification.

**Incumbent carrier and broker inertia:** Named client logos (WTW, The Zebra, Assurland) suggest enterprise relationships, but large insurance organizations have lengthy procurement cycles and compliance review processes. Scaling from pilot deployments to full production integrations in a regulated industry may be slow. No public data on contract sizes or conversion from pilot to production.

**Regulatory fragmentation:** Insurance regulation varies by US state and European country. Maintaining compliance across jurisdictions requires ongoing legal and technical investment. The Producer Licensing Model Act and UDAAP compliance noted on the website (kinro.ai) address US federal frameworks, but state-level and EU member-state requirements add complexity.

**Competitive convergence:** Multiple well-funded startups are building AI for insurance distribution. Harper ($46.8M; TechCrunch, Feb 2026), COVU (~$50M), and FurtherAI ($30M from a16z) have significantly more capital. If these companies expand into AI sales agent technology, Kinro could face well-resourced competition.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | US insurance distribution technology market: $20.44B in 2023, projected $50.70B by 2029 (GlobeNewswire, Jan 2026 via search snippet); Global AI in insurance: $10.36B in 2025, projected $59.50B by 2033 at 27.32% CAGR (SNS Insider via GlobeNewswire, Oct 2025 via search snippet) |
| SAM | No public data found |
| Traction | 7 named client logos including WTW and The Zebra (kinro.ai, Mar 2026); 171 LinkedIn followers (LinkedIn, Mar 2026) |
| Revenue Signal | No public data found |
| Founders | Pierre-Alexandre Kamienny (CEO): PhD Sorbonne, Research Scientist at Google DeepMind (Gemini for financial services). Parth Ainampudi: B.Tech IIT Bombay, ML infra lead at Zoox. Corentin Hugot (COO): ENSC Bordeaux INP, first employee at insurance startup. |
| Competitors | Harper ($46.8M raised, est. $7.5–15.7M revenue per Extruct AI, full-stack AI brokerage vs. Kinro's enabling model); COVU (~$50M raised, revenue unknown, AI+BPO for agency ops vs. Kinro's sales focus); Quandri ($20M+ raised, revenue unknown, renewals/retention vs. Kinro's acquisition focus); Strada ($1.9M raised, revenue unknown, servicing AI vs. Kinro's sales AI) |
| Moat Signals | SOC 2 Type II certification (kinro.ai); multi-layered regulatory compliance system (kinro.ai); carrier pricing infrastructure integrations (kinro.ai) |
| Risk Factors | AI platform dependency (ChatGPT/Gemini distribution control), competitive convergence from better-funded players, regulatory fragmentation across jurisdictions |
| Founder Reach | Pierre-Alexandre Kamienny: Twitter @pierrealexai (count not retrievable), LinkedIn 500+, GitHub 2 followers. Parth Ainampudi: Twitter not found, LinkedIn 500+, GitHub 1 follower. Corentin Hugot: Twitter @hugot_core5462 (count not retrievable), LinkedIn 500+, GitHub not found. |
| Distribution Signals | No Product Hunt launch found; no app store listings found; LinkedIn 171 followers (LinkedIn, Mar 2026); Corentin Hugot LinkedIn post on ChatGPT app submissions: 29 likes (LinkedIn, Dec 2025) |
| Emails | support@kinro.ai (kinro.ai/contact) |
