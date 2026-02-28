# Jinba

> Automate any enterprise workflow through chat

| Field | Value |
|-------|-------|
| Website | https://jinba.io |
| YC Page | https://www.ycombinator.com/companies/jinba |
| Batch | Winter 2026 |
| Industry | B2B / B2B |
| Team Size | 4 |
| Location | Remote (hiring in San Francisco and Tokyo) |
| Tags | |
| YC Partner | Ankit Gupta |
| Emails | No public data found (contact form at jinba.io/contact-sales) |

## The Idea

**Problem:** Enterprise teams need to automate internal workflows — loan screening, claims processing, contract review, procurement, HR intake — but existing tools require either engineering resources (custom code) or rigid drag-and-drop builders that non-technical users find difficult to adopt. Regulated industries (banking, insurance, manufacturing) face additional constraints around permissions, audit logging, and on-premises deployment. Current alternatives include no-code workflow platforms (Zapier, Make) that lack enterprise security controls, and enterprise automation suites (Workato, Tray.io) that require significant technical implementation effort.

**Approach:** Jinba converts natural language descriptions into deployed AI workflows. The product has two components: Jinba Flow (a builder where users describe workflows in chat or refine them in a visual editor) and Jinba App (an execution environment where end users interact with deployed workflows). Workflows can be deployed as APIs, webhooks, MCP servers, Slack bots, or scheduled jobs. The platform supports 100+ integrations and multiple AI model backends (OpenAI, Azure OpenAI, Meta Llama 3, AWS Bedrock) (jinba.io). Enterprise features include SOC II compliance (in progress), SSO, RBAC, audit logging, and on-premises/private cloud deployment (jinba.io).

**Differentiation:** Compared to drag-and-drop workflow builders (Zapier, Make, n8n), Jinba emphasizes natural language workflow creation that non-technical users can adopt without training. Compared to enterprise iPaaS platforms (Workato, Tray.io), Jinba offers AI-native workflow generation rather than traditional integration mapping. A customer testimonial from Bloomo's COO describes three interaction modes: "Developers use YAML, designers use visual interface, managers use natural language" (jinba.io). Compared to AI agent platforms (StackAI), Jinba positions specifically for regulated enterprise environments with on-prem deployment and audit logging.

**Business Model:** Tiered SaaS pricing (jinba.io/pricing):
- Free: $0/mo — 2 team members, 100 API credits
- Standard: $39/mo — 5 team members, 800 API credits
- Pro: $399/mo — 15 team members, 10,000 API credits
- Enterprise: Custom pricing — unlimited workflows, custom credits, dedicated success manager

Credits are consumed per workflow execution. Pricing is per-plan (not per-seat), with fixed team member caps per tier.

**TAM/SAM:** The global workflow automation market was valued at $23.77 billion in 2025, projected to reach $40.77 billion by 2031 at a 9.41% CAGR (Mordor Intelligence, 2025 via search snippet). Alternate estimates range up to $87.7 billion by 2032 at 16.6% CAGR (Coherent Market Insights via search snippet). No specific SAM estimate found for the AI-native enterprise workflow automation sub-segment.

**GTM / Distribution:** The company serves 40,000 enterprise users at Fortune Global 500 companies in banking, insurance, and regulated industries (YC page, jinba.io). Named customers include Suntory and Bloomo (jinba.io). Active job postings include a Chief of Staff ($100K-$150K), Founding Engineer ($150K-$250K), and Founding Design Engineer ($150K-$250K), all in San Francisco (YC page). [Inferred]: GTM is likely direct enterprise sales, given the focus on Fortune Global 500 financial institutions and the on-prem deployment offering. The Japanese origin of the founding team and early customers (Suntory is a Japanese conglomerate) suggests initial traction was built in the Japanese enterprise market before expanding via YC.

## Defensibility

The company claims 40,000 enterprise users at major financial institutions (YC page). If accurate, this represents embedded workflow data and organizational knowledge that creates switching costs — enterprises would need to rebuild and re-validate workflows in a new tool, which is particularly costly in regulated environments where audit trails matter.

On-premises deployment capability in a market where most AI workflow tools are cloud-only is a differentiator for regulated industries. SOC II compliance (in application) and RBAC/audit logging add to enterprise readiness.

**Market structure:** Enterprise workflow automation incumbents (Workato, Tray.io) have built their products around traditional integration-mapping paradigms. Shifting to an AI-native, natural language-first interface would require rearchitecting their core product experience and retraining their customer base. Additionally, horizontal automation tools (Zapier, Make) primarily serve SMBs and would need to add enterprise security infrastructure (on-prem deployment, RBAC, audit logging) to compete in regulated industries — a different sales motion and product investment.

**Commoditization risk:** The core technology — LLM-driven workflow generation — is replicable by any team with access to foundation models. n8n, which raised $180M at a $2.5B valuation (VentureBurn, 2025 via search snippet), is actively building AI workflow capabilities. Microsoft Power Automate has a large installed base in enterprises and is integrating Copilot AI features. The barrier to entry for the underlying technology is low; the barrier is in enterprise distribution, compliance certifications, and embedded customer workflows.

## Market & Traction

**Traction signals:**
- 40,000 enterprise users across Fortune Global 500 companies in banking, insurance, and regulated industries (YC page, jinba.io)
- Named customers: Suntory (Japanese conglomerate) and Bloomo (jinba.io)
- $500K seed funding (Tracxn, Jan 2026 via search snippet)
- 3 active job postings in San Francisco (YC page)
- Shoya Matsumori Twitter/X: 1,875 followers (@pineforesta) (X.com via search snippet)
- Takuya Norisugi Twitter/X: 774 followers (@Gozengogo_) (X.com via search snippet)
- Sina Meraji Twitter/X: 902 followers (@sinasanm) (X.com via search snippet)
- LinkedIn company page: Jinba (YC W26) — follower count not retrievable (linkedin.com/company/jinba)
- No Product Hunt launch found
- No press coverage in named publications found
- No Discord/Slack community found

**Prior product context:** The company operates under the legal entity Carnot Inc. (LinkedIn: "Carnot Inc (Jinba)"). An earlier product called "Jinbaflow" was described as a "flow-style data analytics platform" for data cleansing, analysis, and visualization in English (LinkedIn post by Shoya Matsumori). The current product — enterprise AI workflow automation via chat — appears to be an evolution or pivot from the data analytics focus. Traction figures (40,000 users) are attributed to the current enterprise workflow product per the YC page description.

**Competitive landscape:**

| Competitor | Funding | Revenue/ARR | Key Differentiator vs. Jinba |
|-----------|---------|-------------|------------------------------|
| n8n | $253M total; $180M Series C at $2.5B valuation (VentureBurn, Oct 2025 via search snippet) | $40M ARR (GetLatka, Jul 2025 via search snippet) | Open-source, self-hostable, developer-centric with visual node editor; less focused on natural language generation |
| Workato | $415M total; Series E at $5.7B valuation (Crunchbase via search snippet) | $150M revenue in 2023 (GetLatka via search snippet) | Mature enterprise iPaaS with 11K customers; traditional integration-mapping approach, not AI-native |
| Tray.io | ~$164M total (Crunchbase via search snippet) | $70.9M revenue in 2024 (GetLatka via search snippet) | Visual automation platform for ops teams; less focused on AI/NLP workflow creation |
| StackAI (YC) | $16.6M total; $16.1M Series A (Finsmes, May 2025 via search snippet) | Revenue unknown | No-code AI agent builder; broader AI agent focus vs. Jinba's enterprise workflow specialization |
| Make (Integromat) | Significant funding (exact total not retrieved) | Revenue unknown | Visual scenario builder with branching logic; SMB-focused, less enterprise security infrastructure |

**Why now:** [Inferred]: The emergence of capable, cost-effective large language models (GPT-4, Claude, Llama 3) in 2023-2024 crossed a quality threshold that makes natural language workflow generation viable for enterprise use cases. Previously, workflow automation required either manual drag-and-drop configuration or custom code. LLMs now enable a "describe and deploy" paradigm. Simultaneously, the Model Context Protocol (MCP) standard, emerging in late 2024, provides a standardized way for AI systems to interact with enterprise tools, reducing integration friction.

## Founders & Team

**Shoya Matsumori** — Co-founder & CEO
- Ph.D. in Computer Science (deep learning, Vision & Language), Keio University, 2022 (shoya.me/profile)
- Previously: CEO of BLUEM Inc. (2019-2020); Lead ML Engineer at PGV Inc. (2018-2022); Lead Engineer at STANDARD Inc. (2020-2022); JSPS Research Fellow (2021-2022) (shoya.me/profile)
- Research published at ICCV 2021 (UniQer) (GitHub)
- Awards: WIRED INTERSPACE UTOKYO-IIS Award (2022); Grand Prize at WBA Hackathon (2017) (shoya.me/profile)
- Twitter/X: @pineforesta — 1,875 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/smatsumori
- GitHub: github.com/smatsumori — LatteGAN (6 stars), UniQer (1 star) (GitHub via search snippet)

**Takuya Norisugi** — Co-founder & COO
- MBA, INSEAD (LinkedIn via search snippet)
- B.A., Keio University (LinkedIn via search snippet)
- Previously: Manager at McKinsey & Company (LinkedIn)
- Twitter/X: @Gozengogo_ — 774 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/takuya-norisugi-284790100 — "Founder @ Jinba (YC W26) Enterprise Workflow Automation | ex McKinsey"
- GitHub: No public repos found

**Sina Meraji** — Head of Growth (not listed as co-founder on YC page)
- CS and AI graduate (LinkedIn via search snippet)
- Previously: Founder & CEO at LearningLoop.com (founder community in APAC); Founder in Residence at Entrepreneur First; PM at Mindvalley (LinkedIn via search snippet)
- Twitter/X: @sinasanm — 902 followers (X.com via search snippet)
- LinkedIn: linkedin.com/in/sinameraji
- GitHub: No public repos found

**Co-founder relationship:** Both Shoya Matsumori and Takuya Norisugi attended Keio University — Matsumori for his Ph.D. and Norisugi for his undergraduate degree (shoya.me/profile, LinkedIn). This shared university affiliation is a plausible connection point.

**Founder-market fit:** Matsumori brings deep technical expertise in ML/AI (Ph.D. in deep learning, published at ICCV, multiple ML engineering roles) and prior startup founding experience (BLUEM Inc.). Norisugi brings enterprise consulting experience from McKinsey, which is directly relevant to selling into and understanding the workflows of large financial institutions. Meraji adds growth and community-building experience from Entrepreneur First and Mindvalley. The combination of AI research depth, enterprise consulting, and growth expertise aligns with selling AI workflow automation to large regulated enterprises.

## Key Risks

**Commoditization from well-funded competitors:** n8n ($253M raised, $2.5B valuation) is actively adding AI-native workflow capabilities to its open-source platform. Microsoft Power Automate is integrating Copilot AI features into its installed base of enterprise customers. Jinba's natural-language-to-workflow approach is technically replicable, and these competitors have existing distribution and customer relationships. Mitigation: Jinba's on-prem deployment and regulated-industry focus may serve as a niche defense.

**Concentration risk in Japanese enterprise market:** Named customers (Suntory, Bloomo) and the founding team's background suggest initial traction is concentrated in Japanese enterprises. Expanding to Western enterprise customers involves different sales cycles, compliance requirements, and competitive dynamics. The San Francisco job postings and YC participation signal intent to expand, but execution risk remains.

**Prior product pivot uncertainty:** The company evolved from Jinbaflow (data analytics) to Jinba (enterprise workflow automation). The 40,000-user figure is self-reported on the YC page and company website, without third-party verification. It is unclear whether these users are active on the current product iteration or include legacy Jinbaflow users.

**Enterprise sales cycle vs. burn rate:** With $500K in seed funding and 3 San Francisco hires planned at $100K-$250K salary ranges, the company faces a tight runway against potentially long enterprise sales cycles in banking and insurance. No additional funding rounds have been announced.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $23.77B workflow automation market in 2025, projected $40.77B by 2031 at 9.41% CAGR (Mordor Intelligence via search snippet) |
| SAM | No public data found |
| Traction | 40,000 enterprise users at Fortune Global 500 companies (YC page, jinba.io); named customers: Suntory, Bloomo (jinba.io) |
| Revenue Signal | Pricing: Free/$39/$399/Custom per month; credit-based consumption model (jinba.io/pricing). No revenue figures disclosed. |
| Founders | Shoya Matsumori (CEO): Ph.D. CS Keio, ex-BLUEM CEO, ICCV 2021 publication. Takuya Norisugi (COO): MBA INSEAD, ex-McKinsey Manager. Sina Meraji (Head of Growth): CS/AI grad, ex-Entrepreneur First, ex-Mindvalley. |
| Competitors | n8n ($253M raised, $40M ARR, open-source visual workflow); Workato ($415M raised, $150M rev, mature iPaaS); Tray.io (~$164M raised, $70.9M rev, visual automation); StackAI ($16.6M raised, revenue unknown, AI agent builder); Make (significant funding, visual scenario builder) |
| Moat Signals | 40,000 claimed enterprise users creating switching costs; on-prem deployment for regulated industries; SOC II compliance in progress |
| Risk Factors | Commoditization from well-funded AI workflow competitors (n8n, Microsoft), concentration in Japanese enterprise market, prior product pivot with unverified user migration |
| Founder Reach | Shoya Matsumori: Twitter 1.9k, LinkedIn profile active, GitHub 7 stars total. Takuya Norisugi: Twitter 774, LinkedIn active, GitHub not found. Sina Meraji: Twitter 902, LinkedIn active, GitHub not found. |
| Distribution Signals | No Product Hunt launch found; no press coverage found; no app store or extension presence; 3 active job postings in San Francisco (YC page) |
| Emails | No public data found |
