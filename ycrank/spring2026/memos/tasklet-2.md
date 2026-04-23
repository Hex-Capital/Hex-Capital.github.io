# Tasklet

> The cloud agent operating system for knowledge work

| Field | Value |
|-------|-------|
| Website | https://tasklet.ai |
| YC Page | https://www.ycombinator.com/companies/tasklet-2 |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Productivity |
| Team Size | 8 |
| Location | San Francisco, CA |
| Tags |  |
| YC Partner | Andrew Miklas |
| Emails | sales@shortwave.com (Shortwave blog); no Tasklet-specific email found |

## The Idea

**Problem:** Knowledge workers spend most of their day switching between dozens of SaaS apps, manually stitching together workflows (YC page). Existing AI chatbots can answer questions but cannot take actions across tools, are not connected to enterprise systems, and stop running when the browser tab closes (YC page).

**Approach:** Tasklet provides a chat interface where users describe tasks in natural language, and an AI agent executes them autonomously. The agent connects via thousands of built-in integrations through Pipedream, any HTTP API, MCP servers, or a full cloud browser using Ubuntu VMs on Google Cloud with computer vision (The New Stack, Apr 2026). It runs 24/7 in the cloud with triggers (schedules, emails, Slack messages, webhooks) and can write/execute code in a sandboxed Linux environment (YC Launch page). When a UI is needed, the agent generates dashboards, forms, and visualizations on demand (YC Launch page).

**Differentiation:**
- vs. Zapier/Make: Those require explicit workflow construction via drag-and-drop; Tasklet uses natural language and agent reasoning to determine steps (The New Stack, Apr 2026). CEO Andrew Lee: "what if the workflow goes away? And you just let the agent reason about what to do" (The New Stack).
- vs. Lindy AI: Lindy focuses on pre-built AI assistants for specific tasks; Tasklet emphasizes a general-purpose agent runtime with code execution and browser automation (The New Stack).
- vs. Relevance AI: Relevance targets multi-agent orchestration for teams; Tasklet positions as a single-agent "operating system" with persistent cloud execution (YC page).

**Business Model:** Tiered SaaS subscription (The New Stack, Oct 2025):
- Free: limited daily usage, no computer access, data sharing required
- $35/month: higher limits, one computer instance, data-sharing opt-out
- $100/month and $250/month: progressively higher limits, future advanced model access

CEO acknowledged high operational costs: "it is super expensive to run...we just charge a lot" (The New Stack).

**TAM/SAM:** Global AI agents market estimated at $7.63B in 2025, projected to reach $182.97B by 2033 at 49.6% CAGR (Grand View Research, 2025 via search snippet). Near-term growth from $8.29B to $12.06B in 2026 at 45.5% CAGR (Grand View Research via search snippet). No specific SAM estimate found for the knowledge-work agent subsegment.

**GTM / Distribution:** [Inferred]: Product-led growth via free tier and self-serve subscription, supplemented by direct sales for higher tiers. Job postings include Growth Marketing Lead and Customer Success roles (YC page), indicating investment in both PLG and account expansion motions.

## Defensibility

- **Context engineering and agent runtime:** The company cites "cloud-native agent runtime, best-in-class context engineering, a universal connections layer, and multi-model support" as technical infrastructure (YC page). The team has deep infrastructure experience from building Firebase's real-time database and Google Cloud Firestore (YC Launch page).
- **Integration breadth:** Thousands of integrations via Pipedream, plus HTTP API and MCP server support, create switching costs as users build workflows dependent on the platform (YC page).
- **Pivot from Shortwave:** Technology and context engineering originally developed for Shortwave's AI email features were redeployed into Tasklet (Shortwave blog, Oct 2025).

**Market structure:** [Inferred]: Zapier and Make face business model cannibalization risk — their revenue depends on per-workflow/per-operation pricing tied to explicit automation construction. Shifting to an agent-first model that abstracts away workflow building would undermine their existing revenue streams and confuse their established user base.

**Commoditization risk:** The core technology (LLM-based agent with tool integrations) is reproducible. Multiple well-funded competitors (Lindy at ~$50M raised, Relevance AI at $37M) are building similar products. Foundation model providers (OpenAI, Anthropic, Google) could integrate agent capabilities directly. The barrier is execution quality in context engineering, reliability, and integration depth rather than unique IP.

## Market & Traction

**Traction signals:**
- $5M ARR (YC page, Apr 2026)
- >1,200% growth since January 1, 2026 (YC page, Apr 2026)
- By January 2026, Tasklet was adding more monthly revenue than Shortwave had accumulated in its first 4 years (search snippet citing YC/Shortwave sources)
- $20M Series A at $175M valuation from USV, Lightspeed, Jeff Dean, Patrick & John Collison (YC page)
- 11 open positions with salaries $125K–$350K and equity 0.10%–0.70%, $20K referral bonus (YC page)
- Twitter/X: @TaskletAI, 2,238 followers, joined June 2025 (X.com)
- LinkedIn: linkedin.com/company/taskletai/ (follower count not retrieved)
- Press: "Tasklet Is IFTTT for the Agentic Age" (The New Stack, Apr 2026)
- Podcast: "Always Bet on the Models" (Cognitive Revolution podcast)
- Investor endorsement: Nick Grossman (USV GP) tweeted "Tasklet just keeps getting better...Fully addictive once you get going" (X.com)
- Product Hunt launch: No public data found

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Tasklet |
|-----------|---------|-------------|-------------------------------|
| Zapier | ~$1.3B valuation ($5B est.) | $310M (2024, Getlatka) | 7,000+ integrations, 100K+ paying customers; explicit workflow builder, not agent-first |
| Lindy AI | ~$50M total (Tracxn) | $5.1M (2024, Getlatka) | Pre-built AI assistants for specific use cases; more task-specific vs. Tasklet's general-purpose agent |
| Relevance AI | $37M total, $24M Series B (TechCrunch, May 2025) | Revenue unknown | Multi-agent orchestration for teams; 40K agents registered Jan 2025 |
| Make (Celonis) | Acquired >$100M (Celonis, 2020) | Not separately disclosed | Visual workflow builder; subsidiary of $11B+ Celonis |

**Why now:** [Inferred]: Foundation model capabilities crossed a reliability threshold in 2024-2025 enabling autonomous multi-step task execution. MCP (Model Context Protocol) standardized tool connectivity for agents. IDC projects AI copilots embedded in ~80% of enterprise workplace apps by 2026 (IDC via search snippet). The confluence of reliable reasoning, standardized integrations, and enterprise readiness created the opening for an agent OS.

## Founders & Team

**Andrew Lee** — Co-founder & CEO
- BS Computer Science & Electrical Engineering, Rose-Hulman Institute of Technology, 2006 (startupandrew.com)
- Co-founded Firebase (YC S11), served as CTO; Firebase acquired by Google in 2014; became engineering lead for Firebase at Google (startupandrew.com, GCP Podcast)
- Firebase is now used by ~15% of all developers (search snippet)
- Co-founded Shortwave (2020), AI email client, with ex-Firebase team (AI Summer)
- Twitter/X: @startupandrew (follower count not retrieved)
- LinkedIn: linkedin.com/in/startupandrew/
- Blog: startupandrew.com
- GitHub: No public repos found under this identity

**Jonny Dimond** — Co-founder
- Education: Karlsruhe Institute of Technology (search snippet)
- Early Firebase employee; technical lead for Google Cloud Firestore (YC Launch page)
- Co-founded Shortwave (Shortwave about page)
- Twitter/X: @JonnyDiamond (handle found; follower count not retrieved — note: handle may be a different person, unconfirmed match)
- LinkedIn: linkedin.com/in/jonnydimond/
- GitHub: github.com/jdimond — 13 public repos; notable: "firehose" (Haskell Firebase clone). Star counts not retrieved.

**Co-founder relationship:** Both Andrew Lee and Jonny Dimond worked together at Firebase, then at Google post-acquisition, then co-founded Shortwave in 2020, and now co-founded Tasklet — over a decade of shared working history (YC Launch page, Shortwave about page).

**Founder-market fit:** Andrew Lee built Firebase, one of the most widely adopted developer platforms, through YC S11 to Google acquisition — directly relevant experience in building infrastructure platforms with massive integration surfaces. Jonny Dimond led Google Cloud Firestore, giving deep cloud infrastructure expertise. The team includes people from Firebase, Google, Amazon, and OpenAI (YC Launch page). The pivot from Shortwave to Tasklet demonstrates pattern recognition: seeing agent demand emerge from their own user base.

## Key Risks

**LLM cost and margin pressure:** CEO explicitly stated "it is super expensive to run" (The New Stack). At $35–$250/month price points with compute-intensive agent execution (Ubuntu VMs, browser automation, code sandboxes), unit economics may be challenging. Mitigation: tiered pricing and model cost declines over time.

**Platform dependency on Pipedream:** Integrations are built through Pipedream's infrastructure (The New Stack). If Pipedream changes terms, pricing, or is acquired, Tasklet's integration layer faces disruption. Mitigation: HTTP API and MCP server support provide alternative connectivity paths.

**Agent reliability and trust:** Autonomous agents taking real actions (updating CRMs, sending emails, processing data) carry execution risk. A single agent error in a business-critical workflow could cause customer churn and reputational damage. No public data on error rates or guardrails found.

**Shortwave legacy and focus dilution:** Tasklet and Shortwave remain distinct products with an integration between them (Shortwave blog). Running two products with an 8-9 person team risks splitting engineering focus. The Shortwave email address (sales@shortwave.com) is still the listed contact.

**Foundation model provider competition:** Google (Gemini + Workspace), Microsoft (Copilot + M365), and OpenAI (Operator) are building agent capabilities integrated with incumbent productivity suites that have hundreds of millions of existing users.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $7.63B in 2025, projected $182.97B by 2033 at 49.6% CAGR (Grand View Research via search snippet) |
| SAM | No public data found |
| Traction | $5M ARR (YC page, Apr 2026); >1,200% growth since Jan 1, 2026 (YC page); 2,238 Twitter followers (X.com, Apr 2026); 11 open roles (YC page) |
| Revenue Signal | Free/$35/$100/$250 per month tiers (The New Stack, Oct 2025); $5M ARR (YC page, Apr 2026) |
| Founders | Andrew Lee (CEO): Firebase co-founder/CTO (YC S11, acq. by Google 2014), Shortwave co-founder. Jonny Dimond (Co-founder): Firebase early employee, Google Cloud Firestore tech lead, Shortwave co-founder. |
| Competitors | Zapier ($5B est. valuation, $310M revenue, workflow builder not agent-first); Lindy AI (~$50M raised, $5.1M revenue, task-specific assistants); Relevance AI ($37M raised, revenue unknown, multi-agent orchestration); Make (Celonis subsidiary, >$100M acq., visual workflow builder) |
| Moat Signals | Decade+ infrastructure engineering pedigree (Firebase/Google); integration layer via Pipedream + MCP + HTTP APIs (YC page); context engineering from Shortwave AI development (Shortwave blog) |
| Risk Factors | LLM cost pressure on margins, Pipedream platform dependency, foundation model provider competition |
| Founder Reach | Andrew Lee: @startupandrew (X.com, count not retrieved), LinkedIn 500+ (LinkedIn). Jonny Dimond: LinkedIn (linkedin.com/in/jonnydimond/), GitHub jdimond 13 repos (GitHub) |
| Distribution Signals | The New Stack coverage (Apr 2026); Cognitive Revolution podcast appearance; USV GP public endorsement on X.com; 11 job postings including Growth Marketing Lead (YC page) |
| Emails | sales@shortwave.com (Shortwave blog); no Tasklet-specific address found |
