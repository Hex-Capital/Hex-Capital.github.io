# Korso

> The Intelligence Layer for Manufacturing.

| Field | Value |
|-------|-------|
| Website | https://korsoai.com/ |
| YC Page | https://www.ycombinator.com/companies/korso |
| Batch | Spring 2026 |
| Industry | B2B / B2B -> Operations |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | SaaS, Manufacturing, AI |
| YC Partner | Andrew Miklas |
| Emails | support@korsoai.com |

## The Idea

**Problem:** Manufacturers handle critical operational workflows—RFQ processing, quote generation, supplier follow-ups, purchase order tracking, and exception management—through manual effort in email, WhatsApp, and spreadsheets layered over ERP/CRM systems (korsoai.com). The company frames this as: "the great inefficiency of modern manufacturing is not on the shop floor, it's in the office" (korsoai.com/thesis). Information delays, manual data retrieval, and knowledge loss when employees depart compound the problem (korsoai.com/thesis). Existing solutions are either full ERP replacements (high switching cost) or brittle RPA tools that break at the ERP integration layer (YC page).

**Approach:** Korso deploys AI agents that plug into existing ERP and CRM systems to autonomously triage incoming RFQs, extract line items, generate quotes, chase delayed orders, notify customers, and escalate only when human judgment is needed (YC page). The system uses verification layers, scoped tool access, dry-run validation, and secondary review before critical operations, with full audit trails (YC page). Long-running workflow orchestration with checkpointing handles multi-week manufacturing processes (YC page). Two named products exist: "Atlas" (the platform, described as built on frontier AI research) and "Hermes" (no public details) (korsoai.com).

**Differentiation:** Unlike RPA-based procurement tools (e.g., Turian), Korso's agents are built for multi-week manufacturing workflows with checkpointing, not discrete transaction automation (YC page). Unlike CPQ platforms (e.g., Tacton, Paperless Parts), Korso acts autonomously across the full quote-to-order cycle rather than providing a configure-price-quote interface for human operators (YC page). Unlike ERP-native AI features (e.g., Epicor Prism), Korso is ERP-agnostic and sits as a layer across systems (YC page). SOC 2 Type 1 and ISO 27001 certifications are in progress, signaling enterprise-readiness intent (korsoai.com).

**Business Model:** No pricing page is public (korsoai.com). A "Contact Sales" option is available (korsoai.com). [Inferred]: Most likely monetization path is SaaS subscription (per-seat or per-workflow) sold via direct sales to mid-market manufacturers, based on the enterprise positioning and "Contact Sales" flow.

**TAM/SAM:** The global AI in manufacturing market was valued at $34.18B in 2025 and is projected to reach $155.04B by 2030 at 35.3% CAGR (MarketsandMarkets, 2025 via search snippet). An alternative estimate values the market at $7.6B in 2025 growing to $128.81B by 2034 at 37.90% CAGR (Fortune Business Insights, 2025 via search snippet). No public SAM data specific to AI-powered manufacturing operations/quoting automation was found.

**GTM / Distribution:** The founders "spent time traveling across Asia, talking directly to clients and fine-tuning products" shortly after YC acceptance (LinkedIn/Alex Liu via search snippet). [Inferred]: Most likely distribution path is founder-led direct sales to small and mid-market manufacturers, leveraging Martin Pan's General Motors network and Daichi Hiraoka's engineering background for domain credibility.

## Defensibility

- **Switching costs:** Once integrated with a manufacturer's ERP/CRM and trained on their workflows, pricing history, and supplier relationships, switching to a competitor would require re-integration and re-training (YC page). The system converts "tribal knowledge into data" (korsoai.com/thesis), creating a proprietary data layer.
- **Technical complexity:** Long-running workflow orchestration with checkpointing across messy ERP systems is architecturally non-trivial (YC page). Multi-week stateful workflows with audit trails require purpose-built infrastructure.
- **Data advantage:** [Inferred]: As agents process more RFQs and supplier interactions for a customer, accumulated context (pricing history, supplier patterns, customer preferences) creates a compounding data moat per account.

**Market structure:** ERP incumbents (SAP, Epicor, Oracle) face business model conflict: their revenue depends on seat-based licensing for manual workflows; automating those workflows cannibalizes their own user-seat economics. Epicor has launched Prism as a native AI agent for RFQ workflows (search snippet, 2026), indicating incumbents are responding but within the constraints of their existing platform architecture. [Inferred]: ERP vendors are structurally incentivized to add AI as a feature upsell rather than build a standalone autonomous agent layer that reduces the need for their core product seats.

**Commoditization risk:** The core capability—LLM-based document parsing, email triage, and ERP API integration—uses generally available AI infrastructure. Turian (Berlin, 17 employees) already offers agentic AI for procurement workflows (turian.ai). Paperless Parts has launched AI-supported quoting (paperlessparts.com). Leverage AI provides AI-driven purchase order automation ($14.9M raised) (search snippet). The barrier is not the AI model but the ERP integration depth and manufacturing domain specificity. Multiple funded startups could converge on this space.

## Market & Traction

**Traction signals:**
- No public revenue, user counts, or growth metrics found.
- No Product Hunt launch found.
- No press coverage in named publications found.
- No company Twitter/X account found.
- LinkedIn company page: linkedin.com/company/korsoai/ (follower count not retrievable).
- No Discord or Slack community found.
- 0 job postings listed on YC page (YC page).
- No app store or Chrome Web Store presence found.

**Competitive landscape:**

| Competitor | Founded | Funding | Key Differentiator vs. Korso |
|-----------|---------|---------|------------------------------|
| Paperless Parts | 2017, Boston | $45.5–51.1M total, $30M Series B (OpenView, 2021) (Startup Savant; Crunchbase via search snippet) | CPQ tool for job shops; human-operated quoting interface vs. Korso's autonomous agents |
| Turian | 2022, Berlin | Not publicly disclosed; 17 employees (PitchBook via search snippet) | Agentic AI for procurement/sales/compliance across industries vs. Korso's manufacturing-specific focus |
| Leverage AI | Chicago | $14.9M total from 26 investors (Crunchbase via search snippet) | AI-driven PO drafting and vendor cost updates for manufacturers/distributors; narrower scope than Korso's full quote-to-order workflow |
| Tacton | 1998, Stockholm | $12M+ (GRO Capital, 2017); strategic PE investment from Rubicon Technology Partners (2023) (Nordic 9; Tacton press release via search snippet) | Established CPQ platform for complex configured products; rule-based vs. Korso's AI-agent approach |

**Why now:** [Inferred]: The convergence of two factors opened this window: (1) frontier LLMs crossed the capability threshold for reliably parsing unstructured manufacturing documents (RFQs, POs, technical drawings) and maintaining multi-step reasoning across complex workflows—capabilities unavailable before 2024-era models; (2) 80% of CPOs now name AI a top priority (search snippet, 2026), indicating buyer readiness in industrial procurement that did not exist 24 months ago.

## Founders & Team

**Daichi Hiraoka** — Co-founder
- Electrical Engineering, University of Pennsylvania (LinkedIn).
- Electrical Hardware Engineer at Penn Electric Racing: led redesign of accumulator charger system, improving safety features by 150%; designed circuits/PCBs in Altium with $3,300 budget (LinkedIn via search snippet).
- Developed ML model for radiotherapy treatment planning, reducing dose prediction discrepancies by 97% and planning time by 35% (LinkedIn via search snippet).
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/daichihiraoka/ — "Electrical Hardware Engineer - Penn Electric Racing," 240 connections (LinkedIn via search snippet).
- GitHub: No confirmed public repos found.

**Alex Liu** — Co-founder
- UC Irvine (search snippet). Previous experience at Notre Dame Research and Gatekeeper Systems, Inc. (RocketReach via search snippet).
- Based in Irvine, CA (RocketReach via search snippet).
- Twitter/X: No public account confirmed.
- LinkedIn: linkedin.com/in/alexdliu7/ — "Korso (YC P26)" (LinkedIn).
- GitHub: No confirmed public repos found.

**Martin Pan** — Co-founder
- University of Michigan College of Engineering; UC Irvine (RocketReach via search snippet).
- Previous experience at General Motors and Penn Electric Racing (YC page; RocketReach via search snippet).
- Based in Irvine, CA (RocketReach via search snippet).
- Twitter/X: No public account found.
- LinkedIn: Not directly found; referenced via RocketReach directory listing.
- GitHub: No confirmed public repos found.

**Co-founder relationship:** Daichi Hiraoka and Martin Pan were both members of Penn Electric Racing at the University of Pennsylvania (LinkedIn via search snippet; RocketReach via search snippet). Alex Liu and Martin Pan both attended UC Irvine (search snippets). These overlaps indicate prior acquaintance before founding Korso.

**Founder-market fit:** Martin Pan's experience at General Motors provides direct domain exposure to automotive manufacturing operations and supply chain workflows. Daichi Hiraoka's electrical engineering and hardware background at Penn Electric Racing gives hands-on experience with manufacturing processes and technical documentation. Alex Liu's research background (Notre Dame Research) and systems experience (Gatekeeper Systems) contribute technical depth. [Inferred]: The team combines manufacturing domain experience (Pan/GM) with engineering execution capability, though none of the founders appear to have prior startup founding experience or enterprise software sales backgrounds.

## Key Risks

**ERP integration fragmentation:** Manufacturing ERP systems (SAP, Epicor, Oracle, JobBOSS, etc.) have heterogeneous APIs, data models, and customization layers. Each customer deployment may require significant integration engineering. The company acknowledges this difficulty: "Most AI automation breaks down at the ERP integration layer" (YC page). Mitigation: Korso claims purpose-built orchestration for "messy" manufacturing systems (YC page), but no public evidence of specific ERP integrations completed.

**Incumbent response velocity:** Epicor has already launched Prism, an AI agent for automating RFQ workflows within its ERP (search snippet, 2026). SAP and Oracle have active AI agent roadmaps. Incumbents with existing ERP installations have a distribution advantage and can bundle AI features at marginal cost. Mitigation: Korso's ERP-agnostic positioning could appeal to manufacturers on legacy or multi-ERP environments where incumbents' native tools don't reach.

**Name collision / discoverability:** "Korso" is a common word in Finnish (a Helsinki suburb, a K-supermarket chain) and appears as a character name across media. Multiple unrelated Twitter/X accounts, companies, and search results share the name (search results). This creates SEO/brand competition and complicates inbound discovery.

**No visible traction or market validation:** No public customers, revenue signals, user metrics, press coverage, or community presence were found despite the product being described as functional (korsoai.com). [Inferred]: The company is very early, even by pre-seed standards, and may still be in pilot or pre-launch phase. The risk is that the product's enterprise-safety architecture (verification layers, dry-run validation) may slow time-to-first-customer relative to less cautious competitors.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $34.18B in 2025, projected $155.04B by 2030 at 35.3% CAGR (MarketsandMarkets, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | No public data found |
| Founders | Daichi Hiraoka (Co-founder): UPenn EE, Penn Electric Racing, ML research. Alex Liu (Co-founder): UC Irvine, Notre Dame Research, Gatekeeper Systems. Martin Pan (Co-founder): U Michigan, UC Irvine, General Motors, Penn Electric Racing. |
| Competitors | Paperless Parts ($45.5–51.1M raised, revenue unknown, CPQ quoting tool vs. autonomous agents) (Crunchbase via search snippet); Turian (funding undisclosed, revenue unknown, cross-industry agentic AI vs. manufacturing-specific) (PitchBook via search snippet); Leverage AI ($14.9M raised, revenue unknown, PO/RFQ automation for manufacturers) (Crunchbase via search snippet); Tacton ($12M+, revenue unknown, established CPQ platform vs. AI-agent approach) (Nordic 9 via search snippet) |
| Moat Signals | ERP integration depth + per-account data accumulation + long-running workflow state (YC page; korsoai.com/thesis) |
| Risk Factors | ERP integration fragmentation, incumbent AI feature launches (Epicor Prism), name collision / discoverability |
| Founder Reach | No public data found |
| Distribution Signals | No public data found |
| Emails | support@korsoai.com (korsoai.com) |
