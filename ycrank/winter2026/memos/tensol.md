# Tensol

> AI Employees for your Business, Powered by OpenClaw

| Field | Value |
|-------|-------|
| Website | https://www.tensol.ai |
| YC Page | https://www.ycombinator.com/companies/tensol |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Infrastructure |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, B2B, Productivity, Enterprise Software |

## The Idea

**Problem:** Businesses use dozens of SaaS tools (Slack, GitHub, Sentry, CRM, email) that generate a constant stream of information requiring human monitoring, triage, and action. Most existing AI assistants are reactive chatbots that require manual prompting and lack organizational context. Deploying autonomous agents that can act across these tools requires managing credentials, file systems, sandboxed environments, and integrations -- a complex infrastructure problem. The company's website cites 23 minutes of context-switching loss per interruption, 67% of company context going undocumented, and 6 hours average before critical bugs are noticed (tensol.ai).

**Approach:** Tensol deploys autonomous AI agents ("AI employees") that run 24/7 in isolated VMs, each with full company context. Built on OpenClaw, an open-source AI agent framework with 180,000+ GitHub stars (github.com/openclaw/openclaw). These agents proactively monitor tools -- correlating Sentry errors with Linear tickets, auto-logging sales calls to CRM, drafting follow-ups, alerting on issues -- without requiring prompts. Each agent gets its own dedicated identity, sandboxed environment, and one-click OAuth integrations with 40+ tools including Slack, GitHub, Sentry, Linear, HubSpot, Gmail, Notion, Jira, Salesforce, and Datadog (tensol.ai). The platform uses a progressive autonomy model: agents start with supervised approvals and gradually increase independence (tensol.ai).

**Differentiation:** Unlike general-purpose agent builders such as Lindy or Relevance AI that require users to design workflows, Tensol provides pre-configured role-based AI employees (engineering, sales, support, marketing) deployable in minutes with one-click integrations (tensol.ai). Compared to vertical AI SDR tools like 11x or Artisan AI that focus on a single function (outbound sales), Tensol spans multiple departments. The OpenClaw foundation gives access to a rapidly evolving open-source agent runtime rather than a proprietary framework.

**Business Model:** No pricing is publicly listed on tensol.ai. The site offers a free trial with 10+ templates and a "Book a demo" flow, with enterprise inquiries directed to founders@tensol.ai (YC Launch post, Feb 2026). [Inferred]: Most likely monetization path is per-agent or per-seat SaaS pricing with enterprise tiers, based on the audit trail, SSO, and enterprise security features prominently listed on the website.

**TAM/SAM:** The global AI agents market is valued at $7.84 billion in 2025 and projected to reach $52.62 billion by 2030, at a 46.3% CAGR (MarketsandMarkets, 2025). The broader agentic AI market is projected to reach $199.05 billion by 2034 (Precedence Research, 2025). No public SAM data found specific to the "AI employee" subsegment.

**GTM / Distribution:** The YC Launch post (194 upvotes, Feb 2026) serves as an initial distribution channel. The company's Twitter account (@tensol_ai) has 697 followers (X.com). The website emphasizes a self-serve onboarding flow with "5-minute setup" and one-click OAuth (tensol.ai). [Inferred]: Most likely distribution path is bottom-up product-led growth targeting startup and mid-market engineering and sales teams, supplemented by the YC network and founder-led enterprise sales via the demo booking flow.

## Defensibility

No strong defensibility signals found in public sources at this stage.

**Platform lock-in potential:** Each AI employee accumulates company-specific context over time -- learning codebase patterns, customer histories, and team workflows. This creates switching costs as organizations invest in training and configuring agents. However, this moat is nascent and unproven at pre-seed.

**OpenClaw dependency:** Tensol's core runtime is built on OpenClaw, an open-source project with 180,000+ stars (github.com/openclaw/openclaw). This provides rapid access to a state-of-the-art agent framework, but it also means the underlying technology is available to all competitors. OpenClaw's creator was recently acqui-hired by OpenAI (InfoWorld, Feb 2026), which introduces uncertainty about the project's governance and direction, though it has transitioned to an independent open-source foundation (LLM Rumors, Feb 2026).

**Market structure:** No structural barrier identified at this stage. The AI employee category is being pursued by well-funded competitors (11x at $74M, Lindy at $49.9M, Artisan at $25M). Large incumbents like Salesforce (Agentforce), Microsoft (Copilot), and ServiceNow are building agent capabilities into existing platforms. The structural challenge for incumbents is that cross-tool agent orchestration requires neutral positioning across competing SaaS ecosystems, which incumbent platform vendors cannot easily achieve without favoring their own stack. However, this is a weak structural barrier.

**Commoditization risk:** High. The OpenClaw framework is open-source and available to anyone. Multiple well-funded startups and large platform vendors are building similar agent infrastructure. The integration layer (OAuth connectors to common SaaS tools) is replicable. Differentiation would need to come from proprietary context models, superior agent reliability, or deep enterprise trust -- none of which are publicly demonstrated at this stage.

## Market & Traction

**Traction signals:**
- YC Launch post: 194 upvotes (YC Launches, Feb 2026)
- Twitter/X: @tensol_ai, 697 followers (X.com)
- LinkedIn: Company page exists at linkedin.com/company/tensolai; follower count not retrievable
- Backed by Y Combinator and Aforevec (X.com bio)
- YC Primary Partner: Gustaf Alstromer (YC page)
- GitHub organization: github.com/Solstis-AI (GitHub)
- No public revenue, user count, or customer data found
- No Product Hunt launch found
- No app store presence found
- No Discord/Slack community found

**Product pivot note:** The company was previously known as Solstis. Evidence: the GitHub organization is named "Solstis-AI" (github.com/Solstis-AI), the LinkedIn company page was originally "Solstis (YC W26)" (LinkedIn), a separate @solstis_ai Twitter handle exists (X.com), and solstis.ai redirects to tensol.ai. Co-founder Pratik Satija won $50,000 first place at the 2025 McGinnis Venture Competition (Graduate Track) at Carnegie Mellon with "Solstis," described as an AI-powered platform using natural language to create workflow automations (CMU Swartz Center, 2025). The current Tensol product -- AI employees built on OpenClaw -- appears to be a repositioning from the prior Solstis workflow automation focus.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Tensol |
|-----------|---------|-------------|-------------------------------|
| **Lindy AI** | $49.9M total (Clay) | $5.1M revenue (Latka, Oct 2024) | General-purpose AI agent builder with drag-and-drop workflow design; broader use-case flexibility vs. Tensol's pre-configured role-based agents |
| **11x** | $74M total ($24M Series A from Benchmark, $50M Series B from a16z) | Revenue unknown | Vertical AI SDR focus (Alice for outbound, Mike for inbound); deeper sales specialization vs. Tensol's cross-functional approach |
| **Artisan AI** | $25M Series A (Glade Brook Capital, Apr 2025) | $5M ARR, 250 customers (TechCrunch, Apr 2025) | AI sales employee (Ava) with integrated outbound sales stack; no-integration-required platform vs. Tensol's integration-dependent model |
| **Relevance AI** | $37M total ($24M Series B, Bessemer, May 2025) | Revenue unknown; 40K AI agents registered (Jan 2025) (TechCrunch, May 2025) | AI agent "operating system" for building custom agent teams; more developer-oriented platform vs. Tensol's no-code deployment |

**Why now:** OpenClaw's explosive growth (0 to 180,000+ GitHub stars in under two months, late 2025 to early 2026) created a new open-source foundation for building production-grade AI agents (GitHub, LLM Rumors). Simultaneously, LLM capabilities crossed a reliability threshold for autonomous multi-step tool use, making "set and forget" agents feasible for business workflows. [Inferred]: The convergence of a mature open-source agent runtime (OpenClaw) with enterprise-grade LLM reliability enables a startup to build a deployment and management layer without needing to build the core agent infrastructure from scratch.

## Founders & Team

**Oliviero Pinotti** -- Co-founder
- Italian-Swiss-German founder; dropped out of NUS (National University of Singapore) Computer Science Master's program to pursue Tensol (YC page, olivieropinotti.com search results)
- Previously engineer at Stacksync (YC W24), where he built the Workflows product, described as "now used by Fortune 500s" (YC Launch post). Stacksync provides real-time two-way sync between CRMs and databases (stacksync.com)
- At age 19, incorporated his first ed-tech startup (StudyBud tutoring marketplace) (olivieropinotti.com search results)
- Built Kerno, a tool to incorporate Swiss companies in minutes; raised government funding and won startup competitions (olivieropinotti.com search results)
- Won SwissHacks 2024 1st place (GitHub pinned repo)
- Twitter/X: @olivieropinotti; follower count not retrievable
- LinkedIn: linkedin.com/in/olivieropinotti -- 500+ connections
- GitHub: github.com/olivieropinotti -- 22 repos, 14 followers. Pinned repos include SwissHacks 2024 winner project and Stacksync workflows-cdk (2 stars) (GitHub)

**Pratik Satija** -- Co-founder
- MS in Artificial Intelligence in Engineering, Carnegie Mellon University (LinkedIn, CMU)
- Former Mechatronics Engineer; worked at Rivian and Magna International on hybrid powertrain systems (YC page, search results)
- Also worked at DFCI (Harvard University) (LinkedIn search results)
- Won $50,000 first place at CMU's 2025 McGinnis Venture Competition (Graduate Track) with Solstis (CMU Swartz Center for Entrepreneurship, Mar 2025)
- Developed investment strategies for 99Tartans' Emerging Markets division at CMU, connecting CMU alumni startups with investors (search results)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/pratik-satija -- 500+ connections
- GitHub: github.com/satijapratik -- 11 repos, 5 followers. Pinned repos include Network-Attack-Predictor and CMU course projects (GitHub)

**Co-founder relationship:** Both were associated with YC-backed companies (Oliviero at Stacksync YC W24, Pratik at Solstis/Tensol). The Solstis venture competition entry at CMU (Mar 2025) and subsequent YC W26 acceptance with the same team suggest they connected through the YC/startup ecosystem in 2024-2025. No shared prior employer or university found.

**Founder-market fit:** Oliviero brings prior experience building integration and workflow infrastructure at Stacksync (YC W24), directly relevant to Tensol's multi-tool agent orchestration layer. Pratik brings formal AI/ML training from Carnegie Mellon and hands-on engineering experience in complex systems (automotive/robotics). The combination covers the two core competencies needed: SaaS integration infrastructure and AI agent development.

## Key Risks

**OpenClaw platform dependency:** Tensol's core agent runtime is built on OpenClaw, an open-source project whose creator was acqui-hired by OpenAI in February 2026 (InfoWorld, Feb 2026). The project transitioned to an independent foundation, but governance, maintenance velocity, and strategic direction remain uncertain. If OpenClaw development stagnates or fragments, Tensol would need to fork and maintain the runtime independently, diverting engineering resources from product development.

**Crowded and well-capitalized competitive field:** Direct competitors have raised $74M (11x), $49.9M (Lindy), $37M (Relevance AI), and $25M (Artisan) -- collectively over $185M in funding. Large platform vendors (Salesforce Agentforce, Microsoft Copilot) are adding agent capabilities natively. Tensol's 2-person team with standard YC funding faces a significant resource asymmetry in sales, engineering, and go-to-market against these incumbents.

**Product pivot uncertainty:** The company rebranded from Solstis (AI-powered workflow automations) to Tensol (AI employees on OpenClaw). The prior Solstis product won a $50K CMU venture competition in March 2025 (CMU Swartz Center). The pivot to an OpenClaw-based architecture represents a fundamental technology shift. It is unclear how much prior Solstis IP, customer learnings, or codebase carries over to the current product.

**Agent reliability and trust barrier:** Autonomous agents that modify CRM records, create tickets, draft customer communications, and interact with production systems require high reliability. Enterprise buyers typically require extensive testing, compliance reviews, and gradual rollout before granting autonomous systems write access to production tools. The company claims "progressive autonomy" (tensol.ai), but no public case studies or customer testimonials demonstrate this in practice.

**Brand disambiguation:** "Tensol" shares naming proximity with Tensol Rail SA (a French railway company with its own LinkedIn presence) and Tensol Energías (a Spanish solar energy company on X). This could create confusion in search results and brand building.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.84B AI agents market in 2025, projected $52.62B by 2030 at 46.3% CAGR (MarketsandMarkets, 2025) |
| SAM | No public data found |
| Traction | 194 upvotes on YC Launch post (YC Launches, Feb 2026); 697 Twitter followers (@tensol_ai, X.com); backed by YC and Aforevec |
| Revenue Signal | No public data found |
| Founders | Oliviero Pinotti (Co-founder): NUS CS dropout, ex-Stacksync (YC W24) engineer, SwissHacks 2024 winner. Pratik Satija (Co-founder): MS AI Engineering CMU, ex-Rivian/Magna, $50K McGinnis Venture Competition winner (2025) |
| Competitors | Lindy AI ($49.9M raised, $5.1M revenue, general-purpose agent builder vs. pre-configured roles); 11x ($74M raised, revenue unknown, vertical AI SDR vs. cross-functional); Artisan AI ($25M raised, $5M ARR, integrated sales stack vs. multi-department); Relevance AI ($37M raised, revenue unknown, developer-oriented agent OS vs. no-code deployment) |
| Moat Signals | No public data found. Potential switching costs via accumulated company context in agents (unproven) |
| Risk Factors | OpenClaw platform dependency (creator acqui-hired by OpenAI), well-capitalized competitors ($185M+ combined), product pivot from Solstis, enterprise trust barrier for autonomous agents |
| Founder Reach | Oliviero Pinotti: Twitter @olivieropinotti (count not retrievable), LinkedIn 500+, GitHub 22 repos/14 followers. Pratik Satija: Twitter not found, LinkedIn 500+, GitHub 11 repos/5 followers |
| Distribution Signals | YC Launch 194 upvotes (Feb 2026); @tensol_ai 697 Twitter followers; no Product Hunt, app store, or Chrome extension presence found |
