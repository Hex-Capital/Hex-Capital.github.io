# Alike

> The Agent Collaboration Layer for Enterprises

| Field | Value |
|-------|-------|
| Website | https://alike.work |
| YC Page | https://speedrun.a16z.com/companies/alike |
| Batch | No public data found (listed on a16z Speedrun portal, not confirmed as a YC batch company; the Speedrun page returned 404 at time of research) |
| Industry | AI, Deep Tech, B2B |
| Team Size | 4 |
| Location | San Francisco, California, United States of America |
| Tags | AI, Deep Tech, B2B |
| YC Partner | Not listed |
| Emails | addi@alike.work, max@alike.work, danial@alike.work, hello@alike.work, talent@alike.work (a16z Speedrun portal; alike.work) |

## The Idea

**Problem:** Enterprise teams lose significant time to coordination overhead — meetings, check-ins, status updates, and cross-functional alignment threads. The company positions this as "coordination fatigue" (alike.work). As AI agents proliferate across enterprise tools, a secondary problem emerges: agents built on different frameworks cannot natively communicate with each other, creating fragmented automation silos (a16z Speedrun portal description: "autonomous agent to agent communication").

**Approach:** Alike runs coordination in the background by automating threads, check-ins, and status updates across existing tools (calendar, email, messages, meeting notes) without requiring migration (alike.work). The system learns team coordination patterns and adapts, with all actions logged, traceable, and accompanied by documented reasoning. Granular privacy controls are set per person and per channel (alike.work). The company describes itself as building "autonomous agent to agent communication" to replace Slack-style messaging (a16z Speedrun portal).

**Differentiation:** Unlike multi-agent orchestration frameworks (CrewAI, LangGraph) that focus on developer-facing workflow construction, Alike targets end-user-facing coordination automation — replacing the coordination layer of messaging tools like Slack rather than building agent pipelines. Unlike Google's A2A protocol (launched April 2025, now under Linux Foundation governance), which is an open interoperability standard, Alike appears to be a full product layer with its own coordination intelligence (alike.work). Unlike Dust ($21.5M raised), which connects agents to company data for knowledge retrieval, Alike focuses specifically on inter-agent and inter-human coordination (a16z Speedrun portal).

**Business Model:** No pricing page found on alike.work. [Inferred]: Most likely monetization is a per-seat SaaS model targeting enterprise teams, given the B2B positioning and design-partner-driven go-to-market approach.

**TAM/SAM:** The AI agents market is projected at $8.29B in 2025 growing to $12.06B in 2026 at 45.5% CAGR (The Business Research Company via search snippet). The multi-agent systems market is projected to reach $8.5B by 2026 and $35B by 2030 (Gartner via search snippet). The AI orchestration platform market was $11.1B in 2025, projected to reach $82.15B by 2035 at 22.16% CAGR (Precedence Research via search snippet). No SAM estimate specific to agent-to-agent coordination layers was found.

**GTM / Distribution:** The company reports 20 signed design partners, 10 live team deployments, and 100 companies on the waitlist from word of mouth (a16z Speedrun portal). Named design partners include Exus Renewables ($1B backing from Partners Group), K-ID ($51M raised from Lightspeed and a16z), and NewtonX ($47M raised, trusted by Microsoft and TikTok) (a16z Speedrun portal). [Inferred]: Initial distribution is founder-led sales through Oxford/a16z networks, transitioning to product-led growth as the tool integrates into daily workflows.

## Defensibility

- **Data/workflow moat potential:** As the system learns team coordination patterns over time (alike.work), switching costs increase with accumulated organizational knowledge. This moat does not exist today but could develop with sustained usage.
- **Academic IP:** CTO Max Van Kleek has 25+ years of research in human-AI interaction and privacy-preserving systems at MIT, PARC, Nokia, IBM, and Oxford, with 9,012 Google Scholar citations (Google Scholar). This represents deep domain expertise in the specific intersection of AI, privacy, and collaboration.
- **Privacy architecture:** Per-person, per-channel granular privacy controls with full traceability (alike.work) may serve as a differentiator in regulated enterprise environments.

**Market structure:** Slack (Salesforce) announced 30 new AI agent features and will auto-provision AI-powered Slack for every new Salesforce customer (Slack blog, via search snippet). However, [Inferred]: Salesforce's incentive is to deepen Slack usage as a messaging layer, not to replace it with autonomous agent-to-agent coordination that would reduce message volume — a potential business model conflict for the incumbent.

**Commoditization risk:** Google's open-source A2A protocol (April 2025, Linux Foundation) provides free agent-to-agent interoperability with 50+ technology partner contributions including Atlassian, Salesforce, SAP, and Workday (Google Developers Blog). CrewAI ($18M raised, Insight Partners) and Dust ($21.5M raised, Sequoia) offer overlapping multi-agent coordination capabilities with significant head starts. The core coordination automation layer could be replicated by well-funded competitors or built as a feature within existing platforms.

## Market & Traction

**Traction signals:**
- 10 companies with live team deployments (a16z Speedrun portal, self-reported)
- 100 companies on waitlist from word of mouth (a16z Speedrun portal, self-reported)
- 20 signed design partners (a16z Speedrun portal, self-reported)
- Won Magdalen College Grand Prize at OX1 Incubator Demo Day (June 2025): £10,000 equity-free grant + £5,000 office space, competing against 50+ Oxford startups before 250+ attendees (LMH news, June 18, 2025)
- Danial Hussain describes himself as "Stealth Startup Founder backed by a16z" on X (@DanialHussain_)
- Website published April 2, 2026 (alike.work footer)
- No Product Hunt launch found
- No app store listings found
- No public Twitter/X company account found (the @AlikeWork handle belongs to Workalike.com, a different company)
- No LinkedIn company page found
- No Discord/Slack community found
- No revenue or pricing data found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Alike |
|-----------|---------|-------------|------------------------------|
| **Dust** | $21.5M (Sequoia-led Series A, June 2024) (TechCrunch) | $7.3M ARR (July 2025) (GetLatka) | Connects agents to company data/knowledge for retrieval; broader platform vs. Alike's coordination-specific focus |
| **CrewAI** | $18M Series A (Insight Partners, Oct 2024) (GlobeNewswire) | Revenue not disclosed; 1.4B agentic automations (Insight Partners) | Developer-facing multi-agent orchestration framework; Alike targets end-user coordination rather than developer workflow building |
| **Moveworks** | $315M raised; acquired by ServiceNow for $2.85B (March 2025) (Everest Group) | $100M+ ARR (Sept 2024) (Moveworks press release) | Enterprise IT/HR copilot; Alike focuses on cross-team coordination rather than IT service management |
| **Slack (Salesforce)** | N/A (public company) | N/A | Incumbent messaging platform adding AI agent features natively; Alike positions as a replacement for Slack's coordination function |
| **Google A2A Protocol** | Open-source (Linux Foundation) | N/A | Open interoperability standard; Alike is a product layer, not a protocol |

**Why now:**
- Google launched the A2A (Agent-to-Agent) protocol in April 2025, establishing a standard for inter-agent communication and signaling market readiness for agent interoperability (Google Developers Blog).
- Gartner reported a 1,445% surge in multi-agent system inquiries from Q1 2024 to Q2 2025 (via search snippet).
- Gartner predicts 40% of enterprise apps will embed task-specific AI agents by 2026, up from <5% in 2025 (Gartner press release, August 2025).
- [Inferred]: The simultaneous proliferation of enterprise AI agents across different frameworks and vendors creates an urgent coordination problem that did not exist 18 months ago, as agents increasingly need to interact with each other rather than just with humans.

## Founders & Team

**Addi Haran Diman** — Co-founder & CEO
- PhD in Political Science/Social Data Science from University of Oxford (completed at age 21; started university at age 13) (a16z Speedrun portal; Times Higher Education)
- Master's degree from Hebrew University of Jerusalem (search snippet, via THE article)
- Oxford scholar and tutor; taught 100+ students on advanced quantitative methods (LinkedIn)
- Oxford Students' Union President (2024–2025) (Facebook, The Oxford Student)
- Led OULGBTQ+ Society (~3,000 members), quadrupled events to 300/year (search snippet)
- Twitter/X: @AddiHD02, ~1,254 followers (X via search snippet); account has protected posts
- LinkedIn: linkedin.com/in/addihd/ — "Stealth AI startup CEO / Previously an Oxford scholar and tutor, and Oxford Students' Union President"
- GitHub: No public repos found

**Max Van Kleek** — CTO
- Associate Professor of Computer Science (HCI), University of Oxford (Oxford CS department page)
- PhD in Computer Science from MIT CSAIL (2011) (a16z Speedrun portal)
- 25+ years research at MIT, PARC, Nokia, and IBM (a16z Speedrun portal)
- Research focus: human-AI interaction, privacy-preserving systems, AI ethics and safety (a16z Speedrun portal)
- 9,012 Google Scholar citations (Google Scholar via search snippet)
- Twitter/X: @emax; follower count not retrievable
- Mastodon: @emax@hci.social
- LinkedIn: Not directly retrieved
- GitHub: No dedicated profile found; associated with TrackerControl project (GitHub via search snippet)

**Danial Hussain** — Chief Commercial Officer
- Oxford University, LMH, PPE (2021 entry) (LMH news)
- Oxford Students' Union President (2023–2024); first from foundation year background and Pakistani heritage to hold the position (X, @DanialHussain_)
- Growth experience at a Sequoia-backed startup (a16z Speedrun portal)
- Led national viral marketing campaigns (a16z Speedrun portal)
- Twitter/X: @DanialHussain_, follower count not retrievable
- LinkedIn: linkedin.com/in/danial-hussain-598733190/ — "Stealth AI Startup"
- GitHub: No public repos found

**Co-founder relationship:** All three founders are connected through the University of Oxford. Addi and Danial served as consecutive Oxford SU Presidents (Danial 2023–24, Addi 2024–25). Max is a faculty member in Oxford's CS department. The team describes themselves as "best friends" (a16z Speedrun portal). They competed together at the OX1 Incubator Demo Day and won the top prize (LMH news, June 2025).

**Founder-market fit:** The team combines academic research depth in human-AI interaction and privacy (Max, 25+ years), quantitative social network analysis and group behavior research (Addi, PhD), and large-scale community leadership and growth marketing (Danial, 30,000-member constituency; Addi, 3,000-member society). The CEO's PhD specifically studied group behavior and social networks analytically, directly relevant to building coordination automation. The CTO's long research career in privacy-preserving systems and human-AI interaction at tier-1 institutions provides technical credibility for an enterprise product handling sensitive workplace communications.

## Key Risks

**Incumbent platform risk:** Salesforce is positioning Slack as an "agentic OS" for enterprise, with 30 new AI features and auto-provisioning for all new Salesforce customers (Slack blog, Salesforce). Slack's installed base of millions of daily active users creates a distribution moat that is difficult for a startup to overcome. If Slack's native AI agent features prove sufficient for coordination, the value proposition for a standalone layer diminishes.

**Open protocol commoditization:** Google's A2A protocol (April 2025), now under Linux Foundation governance with 50+ partners including Salesforce, SAP, and Workday, provides free, standardized agent-to-agent communication (Google Developers Blog). This could commoditize the interoperability layer that Alike is building, forcing differentiation to higher-level coordination intelligence that is harder to defend.

**Academic-to-startup transition:** The CTO maintains a full-time Associate Professor role at Oxford while serving as CTO (Oxford CS department page). Dual academic-startup commitment could constrain execution speed during a critical scaling phase when well-funded competitors (Dust, CrewAI) are accelerating.

**Name ambiguity and discoverability:** "Alike" is a common English word, and the @AlikeWork Twitter handle belongs to a different company (Workalike.com). No company LinkedIn page or dedicated Twitter/X account was found. This creates SEO and brand discovery challenges in a crowded AI agent market.

**Design-partner-to-revenue conversion:** All reported traction (10 live teams, 20 design partners, 100 waitlist) is self-reported via the a16z Speedrun portal with no independent verification. No pricing or revenue data is public. Conversion from unpaid design partnerships to paying contracts is unproven.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | AI agents market: $8.29B in 2025, $12.06B in 2026 at 45.5% CAGR (The Business Research Company via search snippet); multi-agent systems: $8.5B by 2026, $35B by 2030 (Gartner via search snippet) |
| SAM | No public data found |
| Traction | 10 live team deployments, 100 waitlist companies, 20 signed design partners (a16z Speedrun portal, self-reported); OX1 Incubator Grand Prize winner — £10K + £5K office space (LMH news, June 2025) |
| Revenue Signal | No public data found |
| Founders | Addi Haran Diman (CEO): Oxford PhD at 21, social data scientist, Oxford SU President. Max Van Kleek (CTO): Oxford Assoc. Prof CS, MIT PhD, 9,012 Google Scholar citations. Danial Hussain (CCO): Oxford SU President, Sequoia-backed startup growth experience. |
| Competitors | Dust ($21.5M raised, $7.3M ARR, enterprise agent platform); CrewAI ($18M raised, revenue unknown, multi-agent orchestration); Moveworks ($315M raised, $100M+ ARR, acquired by ServiceNow for $2.85B, IT/HR copilot); Slack/Salesforce (incumbent, adding native agent features) |
| Moat Signals | CTO's 9,012 Google Scholar citations in HCI/privacy (Google Scholar via search snippet); learned coordination patterns create switching costs over time (alike.work) |
| Risk Factors | Slack/Salesforce incumbent platform risk, Google A2A open-protocol commoditization, name ambiguity and discoverability |
| Founder Reach | Addi: X @AddiHD02 ~1,254 followers (X via search snippet). Max: X @emax, count not retrievable. Danial: X @DanialHussain_, count not retrievable. |
| Distribution Signals | No Product Hunt launch found; no app store listings; no company social media accounts found |
| Emails | addi@alike.work, max@alike.work, danial@alike.work, hello@alike.work, talent@alike.work (a16z Speedrun portal; alike.work) |
