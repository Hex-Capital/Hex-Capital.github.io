# Vela

> The AI Scheduling Assistant that truly knows you.

| Field | Value |
|-------|-------|
| Website | https://tryvela.ai/ps |
| YC Page | https://www.ycombinator.com/companies/vela |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Recruiting, Calendar, AI Assistant |
| YC Partner | Jon Xu |
| Emails | contact@tryvela.ai, founders@tryvela.ai (company website and YC page) |

## The Idea

**Problem:** Scheduling complex, multi-party meetings — particularly in recruiting and sales — is a high-volume, ambiguous coordination task. Enterprise recruiters scheduling dozens of interviews per week spend approximately 15 minutes per interview on back-and-forth coordination, with ~35% of scheduled meetings requiring rescheduling (tryvela.ai). Current tools like Calendly and basic calendar integrations handle 1:1 booking links but break down when dealing with multi-party panel interviews, cross-timezone coordination, priority ambiguity (e.g., prioritizing a client meeting over an internal sync), and natural language requests like "let's do early next week." Today, teams rely on human scheduling coordinators, executive assistants, or manual back-and-forth email threads.

**Approach:** Vela functions as an autonomous AI scheduling agent that users loop into a conversation (email, SMS, WhatsApp, Slack, Teams, or phone). Once added, Vela takes over the negotiation — it pulls availability from all parties, proposes times in respective timezones, follows up when recipients are unresponsive, books meetings, sends confirmations, and automatically reschedules if conflicts arise (tryvela.ai). The product is designed to handle contextual ambiguity without explicit rules: it interprets natural language time preferences and understands stakeholder priority hierarchies (YC company page).

**Differentiation:** Unlike booking-link tools (Calendly, SavvyCal) that require the invitee to self-serve from a link, Vela acts as a conversational agent conducting white-glove negotiation on the user's behalf across multiple communication channels. Unlike calendar optimization tools (Clockwise, Reclaim.ai) that focus on defending focus time or re-ordering tasks, Vela focuses on outbound scheduling coordination at scale. Unlike Clara (acqui-hired by Twitter in 2019), which was email-only, Vela supports email, SMS, WhatsApp, Slack, Teams, and phone. Compared to Paradox AI (Olivia), which focuses on high-volume hourly recruiting within ATS platforms like Workday, Vela targets professional-services and enterprise recruiting workflows involving multi-party panel coordination.

**Business Model:** No public pricing page was found on tryvela.ai. The product page frames the value in time savings (43.5 hours/month for a recruiter handling 30 interviews/week). Job postings for India-based engineers with salary ranges of ₹700K–₹2.5M suggest a cost-efficient engineering structure (YC jobs page). [Inferred]: Most likely monetization path is per-seat SaaS pricing for recruiting/sales teams, potentially with volume-based tiers, given the enterprise recruiting and sales team positioning.

**TAM/SAM:** The broader AI assistant market was estimated at $16.29 billion in 2024, projected to reach $73.80 billion by 2033 at 18.8% CAGR (Grand View Research, 2024 via search snippet). The AI meeting assistants market was valued at $2.76 billion in 2024, projected to reach $5.16 billion by 2032 at 9.4% CAGR (Data Bridge Market Research, 2024 via search snippet). No public TAM/SAM data specific to the AI scheduling coordination sub-segment was found.

**GTM / Distribution:** The company website lists enterprise clients' logos including Netflix, LinkedIn, SanDisk, Zoox, Scale AI, Via, Pony AI, and AWS as companies whose recruiters use Vela (tryvela.ai). The company is targeting recruiting/staffing firms, sales teams, law firms, and founders (Product Hunt launch page via search snippet). [Inferred]: Most likely distribution path is direct sales to recruiting teams and staffing agencies, supplemented by bottoms-up adoption via individual recruiters and founders adding Vela to their scheduling workflows.

## Defensibility

Vela's primary defensibility signal is accumulated scheduling context data: as recruiters use the tool at scale (thousands of interviews per week, per the company's claims), Vela can learn organizational scheduling preferences, stakeholder priorities, and communication patterns. This data flywheel could make the product increasingly difficult to replace over time as it builds per-account institutional knowledge.

Multi-channel integration (email, SMS, WhatsApp, Slack, Teams, phone) creates moderate switching costs once deployed across an organization's communication stack. SOC compliance certification (tryvela.ai) addresses enterprise procurement requirements.

**Market structure:** Calendar and scheduling tools have historically been fragmented, with no single incumbent owning the full coordination workflow. Google and Microsoft control the calendar layer but do not offer autonomous scheduling negotiation agents. Calendly dominates self-serve booking links but would need to fundamentally change its product model (from inbound booking pages to outbound conversational agents) to compete directly. Paradox AI (acquired by Workday in August 2025, Crunchbase via search snippet) is tightly coupled to ATS-specific workflows and may become more constrained under Workday's ownership. [Inferred]: The structural barrier for incumbents is that autonomous outbound scheduling negotiation across multiple channels (including SMS, WhatsApp, phone) represents a different product architecture than booking link or calendar optimization tools.

**Commoditization risk:** The underlying technology (LLM-powered conversational agents that parse scheduling intent and query calendar APIs) is increasingly accessible. Any team with LLM API access and calendar integrations could build a basic scheduling agent. The barrier is in handling edge cases reliably at enterprise scale — reschedules, multi-party coordination, timezone conflicts, and priority inference — where product quality compounds with real-world usage data.

## Market & Traction

**Traction signals:**
- Claims to schedule "thousands of interviews each week" (tryvela.ai)
- Enterprise client logos displayed: Netflix, LinkedIn, SanDisk, Zoox, Scale AI, Via, Pony AI, AWS (tryvela.ai — these represent companies whose recruiters use Vela, not necessarily direct enterprise contracts)
- Product Hunt launch: 136 upvotes, #7 Day Rank (Product Hunt, ~Feb 23, 2025 via search snippet)
- Y Combinator featured tweet from @ycombinator about Vela (X/Twitter, Feb 2026)
- Backed by Y Combinator, Pareto Holdings, Z Fellows, and Cory Levy (tryvela.ai)
- SOC compliance certification (tryvela.ai)
- Company Twitter/X: @try_vela_ai (follower count not retrievable)
- Company LinkedIn: linkedin.com/company/tryvela (follower count not retrievable)
- Active job postings: AI Full-Stack Engineer Intern and Founding AI Full-Stack Engineer I/II, both India/Remote (YC jobs page)

**Competitive landscape:**

1. **Paradox AI (Olivia)** — $304M raised total, acquired by Workday in August 2025 (Crunchbase via search snippet). Valued at $1.5B at Series C (PR Newswire, Dec 2021). Focuses on conversational recruiting AI tightly integrated with ATS platforms (Workday, SAP). Differentiator vs. Vela: deep ATS integration and high-volume hourly recruiting; Vela focuses on professional-services and multi-party panel coordination across communication channels.

2. **Motion** — $102M raised total, $550M valuation (BusinessWire, Sep 2025 via search snippet). $10M revenue (Latka, Sep 2025 via search snippet). Combines calendar, task management, and project tracking with AI. Differentiator vs. Vela: Motion is a full productivity suite focused on individual time management; Vela is a scheduling negotiation agent focused on multi-party coordination.

3. **Clockwise** — $76M raised total, Series C in Jan 2022 (Crunchbase via search snippet). $15M revenue (Latka, 2024 via search snippet). AI calendar optimization for team schedules. Differentiator vs. Vela: Clockwise optimizes existing calendar blocks and protects focus time; Vela handles outbound scheduling coordination and negotiation.

4. **Reclaim.ai** — $9.5M raised total, acquired by Dropbox in August 2024 (SiliconANGLE, Aug 2024 via search snippet). $2.1M revenue, 16K customers (Latka, 2024 via search snippet). Smart scheduling for habits, tasks, and meetings. Differentiator vs. Vela: Reclaim focuses on individual schedule defense and task prioritization; Vela focuses on multi-party outbound scheduling.

5. **Clara Labs** — $12.63M raised total, acqui-hired by Twitter in 2019 (Crunchbase via search snippet). Email-based AI scheduling assistant. Differentiator vs. Vela: Clara was email-only and is no longer operating independently; Vela supports multiple channels and is actively developing.

**Why now:** [Inferred]: The primary enabling change is the maturation of large language models (GPT-4, Claude, etc.) in 2023–2025, which crossed a capability threshold for reliably parsing ambiguous natural language scheduling requests and conducting multi-turn negotiation conversations. Prior attempts at AI scheduling (e.g., Clara Labs, x.ai) relied on earlier NLP that required more rigid inputs and human-in-the-loop fallbacks. Additionally, Paradox AI's acquisition by Workday (August 2025) may create an opening in the market as Paradox becomes more tightly coupled to Workday's ecosystem, leaving scheduling coordination needs unaddressed for non-Workday users.

## Founders & Team

**Gobhanu Sasankar Korisepati** — Co-founder & CEO
- Education: Huntsman Program at University of Pennsylvania (Wharton & International Studies), Summa Cum Laude (LinkedIn). Left Wharton to build Vela.
- Prior experience: BCG AI, Perplexity, Deloitte (LinkedIn via search snippet). Obama-Chesky Voyager Scholar (LinkedIn via search snippet).
- Founded SWIFTmfi at age 14 (2019), a microfinance nonprofit disbursing $400K+ in interest-free microloans to 3,200+ women across 77 countries with estimated impact to 74,000+ lives (Penn Today, 2024). Recognized as youngest founder of a microfinance institution (Asia Book of Records).
- Received the 2024 Diana Legacy Award from the Prince of Wales (The Daily Pennsylvanian, Mar 2024).
- Fellow at the Stevens Center for Innovation in Finance at Wharton (Penn Today).
- Twitter/X: @GobhanuK (follower count not retrievable)
- LinkedIn: linkedin.com/in/gobhanu — "BCG | Founder of SWIFTmfi | The Legacy Award | Huntsman @ UPenn (Wharton & IS)"
- GitHub: No public repos found

**Saatvik Suryajit Korisepati** — Co-founder
- Education: Carnegie Mellon University — dual degree in CS and Information Systems, completed in two years with highest honors (LinkedIn via search snippet). Booth Scholar at University of Chicago (MBA/MS CS) — dropped out to build Vela. Z Fellow (LinkedIn).
- Prior experience: SDE at Amazon Web Services, ML Supercompute team, described as "award-winning engineer" (LinkedIn). Filed first patent at age 16 (LinkedIn via search snippet).
- Co-founded SWIFTmfi with Gobhanu, co-founded Showcase Oman Free Tours (SOFT) (LinkedIn via search snippet). Diana Award recipient.
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/saatviksk — "Building Vela | YC, Z Fellow"
- GitHub: No public repos found

**Co-founder relationship:** Gobhanu and Saatvik Korisepati share the surname "Korisepati" and co-founded SWIFTmfi together, indicating they are siblings/family members with a long history of working together. Both are from Oman originally (Penn Today, Asia Book of Records).

**Founder-market fit:** Both founders have demonstrated operational experience coordinating complex logistics — Gobhanu through scaling a microfinance operation across 77 countries while working at BCG AI, Perplexity, and Deloitte, and Saatvik through engineering on AWS's ML Supercompute infrastructure. Gobhanu's experience at Perplexity and BCG AI provides AI product development context, while Saatvik's CMU CS background and AWS ML engineering experience provides the technical foundation for building an LLM-powered scheduling agent. The YC page notes the team combines experience from "AWS ML & Supercompute, Perplexity, BCG AI, E&Y, Wharton (Huntsman), CMU, Georgia Tech, & UChicago – Booth" (Product Hunt via search snippet), suggesting the two additional team members bring Georgia Tech and E&Y experience.

## Key Risks

**Name collision / brand disambiguation:** "Vela" is used by multiple unrelated companies (Vela AI RWA/Web3, Vela Partners VC, Vela Smartwatch, Vela eCommerce tool by getvela.com, IBM's Vela supercomputer). The domain is tryvela.ai rather than vela.ai. This creates SEO competition and potential brand confusion in the scheduling/productivity space.

**Incumbent LLM feature risk:** Google (Gemini + Google Calendar), Microsoft (Copilot + Outlook), and Apple (Apple Intelligence + Calendar) are all integrating AI assistants into their calendar products. If any of these incumbents ships a "negotiate scheduling on my behalf" feature natively, Vela's standalone value proposition would be directly challenged. Google's Gemini already has calendar integration capabilities.

**Narrow initial vertical concentration:** Current traction appears concentrated in enterprise recruiting scheduling. If recruiting market conditions shift (e.g., hiring slowdown) or if ATS platforms (Workday with Paradox, Greenhouse, Lever) build native AI scheduling, the primary use case could be competed away. The company mentions sales teams and founders as additional segments, but evidence of traction outside recruiting is limited.

**Multi-channel reliability at scale:** Supporting scheduling negotiation across email, SMS, WhatsApp, Slack, Teams, and phone simultaneously introduces significant integration complexity and failure surface area. Any communication channel change (e.g., WhatsApp API policy changes, carrier SMS filtering) could disrupt the product.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $16.29B AI assistant market (Grand View Research, 2024 via search snippet, 18.8% CAGR); $2.76B AI meeting assistants market (Data Bridge Market Research, 2024 via search snippet, 9.4% CAGR) |
| SAM | No public data found |
| Traction | "Thousands of interviews scheduled each week" (tryvela.ai); enterprise logos: Netflix, LinkedIn, SanDisk, Zoox, Scale AI, Via, Pony AI, AWS (tryvela.ai); 136 upvotes, #7 Day Rank on Product Hunt (~Feb 2025) |
| Revenue Signal | No public data found |
| Founders | Gobhanu Sasankar Korisepati (CEO): UPenn Wharton Huntsman, ex-BCG AI / Perplexity / Deloitte, founded SWIFTmfi at 14. Saatvik Suryajit Korisepati (Co-founder): CMU CS highest honors, ex-AWS ML Supercompute, Z Fellow, dropped out of UChicago Booth. |
| Competitors | Paradox AI ($304M raised, acquired by Workday Aug 2025, ATS-integrated recruiting AI vs. Vela's multi-channel approach); Motion ($102M raised, $10M revenue, full productivity suite vs. scheduling-specific agent); Clockwise ($76M raised, $15M revenue, calendar optimization vs. outbound negotiation); Reclaim.ai ($9.5M raised, acquired by Dropbox Aug 2024, schedule defense vs. multi-party coordination) |
| Moat Signals | SOC compliance (tryvela.ai); multi-channel integration (email, SMS, WhatsApp, Slack, Teams, phone); accumulated scheduling context data from enterprise usage |
| Risk Factors | Name collision with multiple "Vela" brands, incumbent LLM-calendar integration threat (Google/Microsoft/Apple), narrow initial vertical concentration in recruiting |
| Founder Reach | Gobhanu Korisepati: Twitter @GobhanuK (count not retrievable), LinkedIn linkedin.com/in/gobhanu. Saatvik Korisepati: Twitter not found, LinkedIn linkedin.com/in/saatviksk. Company: Twitter @try_vela_ai (count not retrievable), LinkedIn linkedin.com/company/tryvela |
| Distribution Signals | Product Hunt #7 Day Rank, 136 upvotes (~Feb 2025); YC featured tweet from @ycombinator (Feb 2026); active hiring for India-based engineers (YC jobs page) |
| Emails | contact@tryvela.ai (company website), founders@tryvela.ai (YC page) |
