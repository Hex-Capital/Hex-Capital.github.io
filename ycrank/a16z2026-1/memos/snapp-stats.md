# Snapp Stats

> 24/7 AI Agent for Sports. From sports content to action, instantly. Built by the founder of Caviar

| Field | Value |
|-------|-------|
| Website | https://trysnapp.ai |
| YC Page | https://speedrun.a16z.com/companies/snapp-stats |
| Batch | a16z Speedrun (specific cohort not listed; not a Y Combinator company — founder Shawn Tsao was YC S11 with prior startup Munch On Me) |
| Industry | AI, B2C, B2B / Sports, Computer Vision, Analytics, Conversational AI, Generative AI (Built In SF) |
| Team Size | 6 |
| Location | San Francisco, California, United States of America |
| Tags | AI, B2C, B2B |
| YC Partner | Not listed |
| Emails | shawn@snappstats.com, andrew@snappstats.com, alex@snappstats.com, recruiting@snappstats.com (a16z Speedrun page, Built In SF job posting) |

## The Idea

**Problem:** Coaches and athletes spend hours reviewing game film manually. Extracting actionable insights requires scrubbing through video, cross-referencing stats, and tab-hopping between tools (Built In SF company profile). On the consumer side, sports fans lack a single personalized feed that combines content, news, highlights, and analytics in real time (a16z Speedrun company description).

**Approach:** Snapp builds a sports Large Visual Memory Model (LVMM) using agentic systems and multimodal encoding that processes visual, audio, and contextual information for "human-like understanding of sports content" (Built In SF job posting). The platform enables semantic search, content retrieval, and multi-video analysis across unlimited sports footage with persistent, searchable memory. Tech stack includes Python, TensorFlow, LangChain, Crew.AI on AWS/GCP/Azure with React/Next.js frontend and PostgreSQL/MongoDB databases (Built In SF company profile).

**Differentiation:**
- vs. WSC Sports (AI highlight generation for broadcasters/leagues): Snapp targets coaches, athletes, and fans directly rather than media rights holders; offers agentic Q&A and multi-video analysis rather than automated clip creation (Built In SF, WSC Sports website).
- vs. CoachNow/Onform (video analysis coaching platforms): Snapp uses an LVMM with persistent memory across unlimited footage rather than single-clip annotation tools (Built In SF, CoachNow website).
- vs. Sportradar/Stats Perform/Genius Sports (structured data providers): Snapp processes raw video multimodally rather than distributing structured statistics feeds (search results via Tracxn, CB Insights).

**Business Model:** No public pricing page found (both trysnapp.ai and snappstats.com returned 403 at time of research). [Inferred]: Most likely monetization path is a SaaS subscription for coaches/teams (B2B) alongside a freemium consumer sports feed (B2C), given the dual positioning described in company materials.

**TAM/SAM:**
- TAM: AI in Sports market valued at $10.61B in 2025, projected to reach $49.92B by 2033 at 21.6% CAGR (Grand View Research via search snippet). Alternative estimate: $2.29B in 2024, projected to $18.90B by 2033 at 26.4% CAGR (Strategic Revenue Insights via search snippet).
- SAM: No public SAM data found for Snapp's specific segment (AI-powered sports video analysis for coaches/athletes/fans).

**GTM / Distribution:** The company "closed a new customer, finished their week at a16z speedrun and 10x their customer pipeline in helping sports companies" (a16z Speedrun search snippet). Target customers include "athletes and colleges" (Built In SF). [Inferred]: Most likely distribution path is direct sales to college athletic programs and sports organizations, leveraging a16z network and founder reputation from Caviar.

## Defensibility

- **Data moat potential:** Persistent, searchable memory across analyzed sports footage could create a compounding data advantage as more video is ingested (Built In SF job posting describes "persistent, searchable memory"). This advantage does not exist today at pre-seed but could develop over time.
- **Technical complexity:** Building a multimodal LVMM for sports requires domain-specific training data and expertise in video understanding, agentic orchestration, and retrieval systems (Built In SF job requirements).
- [Inferred]: No network effects are evident at this stage; switching costs are low without deep integration into coaching workflows.

**Market structure:** WSC Sports, Sportradar, and Genius Sports serve media rights holders and sportsbooks — their business models are built on licensing structured data and automated highlight clips to broadcasters, not on agentic video Q&A for coaches and athletes. [Inferred]: Serving the coach/athlete segment directly would require these incumbents to build new sales channels and products outside their core monetization loop, creating a business model conflict.

**Commoditization risk:** General-purpose multimodal LLMs (GPT-4o, Gemini) could add sports video understanding. Sports-specific startups like SportsVisio and VueMotion are building adjacent products (SportsVisio website, VueMotion website). The core technical differentiator — the sports-specific LVMM with persistent memory — requires significant domain-specific training, but the barrier is not structural.

## Market & Traction

**Traction signals:**
- Closed at least one customer during a16z Speedrun participation; 10x pipeline growth reported (a16z Speedrun search snippet, date not specified)
- Active hiring: Founding AI Engineer, $200K–$250K salary + 0.5%–2% equity (Built In SF, retrieved April 2026)
- Also listed on startup.jobs with open positions (startup.jobs/company/snapp-stats)
- Twitter/X: @SnappStats — handle exists, follower count not retrievable
- LinkedIn: linkedin.com/company/snappstats — page exists, follower count not retrievable
- Website: trysnapp.ai and snappstats.com both returned 403/error at time of research
- No Product Hunt launch found
- No app store listings found
- No public revenue figures found
- No Discord/Slack community found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Snapp |
|-----------|---------|-------------|------------------------------|
| WSC Sports | $136M total, $100M Series D (Crunchbase) | "Tens of millions" (Sportcal) | Automated highlight generation for 450+ broadcasters/leagues; does not offer agentic video Q&A |
| Genius Sports | Public (NYSE: GENI) | ~$670M revenue, 2025 (Genius Sports IR) | Structured data feeds and integrity monitoring for sportsbooks/leagues; does not serve coach/athlete segment |
| Sportradar | Public (NASDAQ: SRAD) | >$1B annual revenue (CB Insights) | Exclusive league data partnerships (e.g., MLB through 2032); focused on betting data, not video analysis |
| SportsVisio | No public data found | No public data found | AI stat-tracking and highlights from game video; closest direct competitor in video analysis for teams |
| CoachNow | No public data found | No public data found | Video annotation and coaching communication platform; lacks AI-driven multimodal analysis |

**Why now:** [Inferred]: The convergence of three factors creates the opening: (1) multimodal AI models crossed a performance threshold in 2024–2025 enabling real-time video understanding at scale; (2) agentic AI frameworks (LangChain, Crew.AI — both in Snapp's stack per Built In SF) matured to support multi-step reasoning over video corpora; (3) college sports saw a shift with NCAA NIL rules driving increased demand for athlete performance analytics and scouting tools.

## Founders & Team

**Shawn Tsao** — Co-founder & CEO
- UC Berkeley, BA Architecture, Minor in Sustainable Design, Class of 2011 (UC Berkeley CED)
- Co-founded Munch On Me (YC S11), a daily deals food startup; raised $180K via YC (CNBC)
- Co-founded Caviar in 2012; acquired by Square in 2014 for >$100M (all-stock), then sold by Square to DoorDash in 2019 for $410M (CNBC, NBC)
- Partner at Beluga Capital; founding partner of Umai Hospitality Group (invested in The Halal Guys, Rooster & Rice) (a16z Speedrun page)
- Investor in The Town FC (Oakland soccer club) (The Town FC press release)
- Senior Advisor at Grishin Robotics (Grishin Robotics blog)
- Twitter/X: No public personal account found
- LinkedIn: linkedin.com/in/shawn-tsao — "Co-founder of Snapp, Caviar, Restaurateur" (LinkedIn)
- GitHub: No public repos found

**Andrew Tamura** — Co-founder & CTO
- UC Berkeley, BS Electrical Engineering and Computer Science (RocketReach, Crunchbase)
- Co-founded Rosie AI (AI agent for Excel modeling); previously engineering leadership at Karat, Scoop, Mixmax, Smarking, Parkify (RocketReach, Rosie AI about page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/andrewtamura — "Rosie AI" (LinkedIn; may not yet reflect Snapp role)
- GitHub: andrewtamura.com personal site exists (andrewtamura.com); public repos not confirmed

**Alex Marshall** — Co-founder & Chief AI Officer
- Ohio University, Statistics, Physics, and Business (F6S)
- Lead Data Scientist at Genentech (2019–2021) (LinkedIn, F6S)
- Built AI model used by US Air Force HQ to allocate $160B annually across major functions (Medium/Blue Startups)
- Founded Taltrics (2021), AI workforce management platform, backed by SkyDeck Fund, Great Oaks VC, Intuition Capital, Blue Startups (Crunchbase, Medium)
- 2x founder (a16z Speedrun page)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/alex1marshall — "Snapp AI" (LinkedIn)
- GitHub: No public repos found

**Min Park** — Co-founder, CFO/COO
- UC Berkeley (LinkedIn search snippet)
- Limited public background data available
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/minpark86 — "Snapp AI" (LinkedIn)
- GitHub: No public repos found

**Co-founder relationship:** Shawn Tsao and Andrew Tamura both attended UC Berkeley, suggesting a shared university network. Min Park also attended UC Berkeley (LinkedIn search snippets). No additional shared employer data found.

**Founder-market fit:** Shawn Tsao brings repeat founder credentials with a $410M exit (Caviar) and deep operational experience in consumer marketplaces. Alex Marshall brings domain-specific AI expertise from Genentech and US DoD applications, plus a prior AI startup (Taltrics). Andrew Tamura provides engineering leadership across multiple startups. The team combines consumer product, AI/ML, and repeat founding experience. The company is described as "led by co-founders of Caviar and Luxe" (Built In SF); the Luxe co-founder connection was not confirmed for any of the four listed founders.

## Key Risks

**Dual-positioning ambiguity:** Company materials describe two distinct products — a consumer "personalized sports feed" (a16z Speedrun description) and a B2B "Superhuman Sports AI Teammate" for coaches/athletes (Built In SF). Serving both segments simultaneously at pre-seed with a 5–6 person team risks diluted focus. No mitigation found.

**Name collision and brand confusion:** "Snapp" overlaps with Snapp! (Iranian ride-hailing, >70M downloads), Snap Inc. (NYSE: SNAP), and multiple other entities. Web searches return significant noise. The primary domain (trysnapp.ai) and snappstats.com both returned errors at time of research, limiting discoverability.

**Incumbent expansion threat:** Major sports data companies (Genius Sports with GeniusIQ, WSC Sports with generative AI features launched in 2024) are actively integrating AI video analysis into their platforms (Genius Sports IR, Sportico). The English Premier League's AI Companion partnership with Microsoft (2025) demonstrates willingness by leagues to build AI features with large tech partners rather than startups.

**CTO continuity uncertainty:** Andrew Tamura's LinkedIn still lists Rosie AI as his current role (LinkedIn, retrieved April 2026). His involvement at Snapp is confirmed by company materials (a16z Speedrun page, Built In SF) but the parallel commitment to Rosie AI is unclear.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $10.61B in 2025, projected $49.92B by 2033, 21.6% CAGR (Grand View Research via search snippet) |
| SAM | No public data found |
| Traction | At least 1 customer closed during a16z Speedrun, 10x pipeline growth (a16z Speedrun search snippet, undated); Founding AI Engineer role open (Built In SF, April 2026) |
| Revenue Signal | No public data found |
| Founders | Shawn Tsao (CEO): Caviar co-founder ($410M exit to DoorDash), YC S11 alum. Andrew Tamura (CTO): UC Berkeley EECS, Rosie AI co-founder. Alex Marshall (CAIO): Genentech, Pentagon AI, Taltrics founder. Min Park (CFO/COO): UC Berkeley. |
| Competitors | WSC Sports ($136M raised, revenue "tens of millions" (Sportcal), AI highlight automation for broadcasters); Genius Sports (public, ~$670M revenue (IR 2025), structured sports data for sportsbooks); Sportradar (public, >$1B revenue (CB Insights), league data partnerships); SportsVisio (funding unknown, revenue unknown, AI stat-tracking from game video) |
| Moat Signals | No public data found |
| Risk Factors | Dual B2C/B2B positioning ambiguity, brand name collision, incumbent AI expansion |
| Founder Reach | Shawn Tsao: Twitter not found, LinkedIn 500+ (LinkedIn). Andrew Tamura: Twitter not found, LinkedIn 500+ (LinkedIn). Alex Marshall: Twitter not found, LinkedIn profile exists (LinkedIn). Min Park: Twitter not found, LinkedIn profile exists (LinkedIn). |
| Distribution Signals | No public data found |
| Emails | shawn@snappstats.com, andrew@snappstats.com, alex@snappstats.com, recruiting@snappstats.com (a16z Speedrun page, Built In SF) |
