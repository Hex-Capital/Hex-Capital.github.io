# FullSeam

> FullSeam is an AI employee for finance and accounting teams.

| Field | Value |
|-------|-------|
| Website | https://fullseam.com |
| YC Page | https://www.ycombinator.com/companies/fullseam |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Finance and Accounting |
| Team Size | 3 |
| Location | No public data found |
| Tags | Artificial Intelligence, FinOps, Fintech, SaaS |

## The Idea

**Problem:** Finance and accounting teams at companies spend significant time on routine, manual tasks — sending invoice follow-ups, entering vendor bills, matching invoices to purchase orders, categorizing expenses, and reconciling bank statements against general ledger entries. These tasks require logging into multiple systems (ERP, billing, banking, CRM) and executing repetitive workflows. The founding team experienced this firsthand at TaxProper, where their own accounting department was burdened by manual AR/AP processes (YC Launch post, Feb 2026). Today, these teams typically rely on a patchwork of legacy automation tools (rule-based workflows in Bill.com, Tipalti, etc.) or manual effort.

**Approach:** FullSeam deploys AI agents that log into a company's existing accounting, billing, banking, and CRM tools and autonomously complete tasks. For AR teams, agents handle customer payment follow-ups, documentation generation, invoice entry, and AP portal updates. For AP teams, agents ingest invoices from multiple sources, match invoices to POs and contracts, follow up with vendors, categorize expenses, and update GL entries. The system also handles cash application (AI-powered payment matching across invoices, including partial payments and splits) and reconciliation (bank statement and GL matching with variance flagging) (fullseam.com). All agent actions are logged and auditable, with configurable approval workflows and exception routing to human teams (fullseam.com). The platform integrates with QuickBooks, Stripe, Xero, HubSpot, Bill, Sage, NetSuite, PandaDoc, and Salesforce (fullseam.com). Implementation is described as deployable "in days, not months" (fullseam.com).

**Differentiation:** FullSeam positions itself as an "AI employee" rather than a workflow automation tool or dashboard. The founding team's core insight is: "Accounting teams don't need another dashboard — they need teammates" (YC Launch post, Feb 2026). This contrasts with incumbent tools like Bill.com and Tipalti, which automate specific payment workflows but still require significant human orchestration across systems. FullSeam's agents operate across the full AR/AP cycle and multiple integrated tools, rather than automating a single step. Compared to newer entrants like LedgerUp (which focuses on contract-to-cash for B2B SaaS), FullSeam targets broader finance operations (AR, AP, cash application, reconciliation) across industries.

**Business Model:** No pricing page or pricing details are publicly visible on fullseam.com. [Inferred]: Most likely monetization path is SaaS subscription pricing, potentially tiered by volume of transactions processed or number of integrated tools, given the B2B finance automation category norms and the company's SaaS tag.

**TAM/SAM:** The global accounts receivable automation market was estimated at $3.40B in 2025, projected to reach $6.57B by 2031 at 11.6% CAGR (MarketsandMarkets via search snippet). The global accounts payable automation market was estimated at $3.07B in 2023, projected to reach $7.1B by 2030 at 12.5% CAGR (Grand View Research via search snippet). The combined AR/AP automation market was valued at $3.64B in 2025, expected to reach $8.95B by 2034 at 10.51% CAGR (Market Growth Reports via search snippet). No public SAM estimate specific to AI-agent-based accounting automation was found.

**GTM / Distribution:** The YC Launch post directs prospects to contact tom@fullseam.com or book a demo (YC Launch post, Feb 2026). Customer testimonials reference CEOs of two companies (Deferred and Belfry Software), suggesting an early sales-led or founder-led motion targeting SMB/mid-market companies (fullseam.com). [Inferred]: Most likely distribution path is founder-led sales to mid-market finance teams, leveraging the founders' existing network from TaxProper and Opendoor and the YC network, potentially expanding into channel partnerships with accounting firms.

## Defensibility

The founding team brings direct operational experience: all three founders previously built and sold TaxProper (YC S19), a property tax SaaS that processed more than $1 billion per year in property tax payments and serviced portfolios of over 115,000 properties worth $35B+ before its acquisition by Opendoor in 2022 (YC Launch post, Feb 2026; thetomdowling.com). This provides domain expertise in building financial operations software and navigating enterprise procurement. Switching costs increase as FullSeam embeds into a company's financial workflow across multiple connected tools — once approval workflows, GL mappings, and vendor communication templates are configured, migrating away requires re-implementing these configurations. [Inferred]: Potential data moat could develop as agents learn company-specific patterns (vendor behaviors, payment norms, GL categorization rules), but this is unproven at this stage.

**Market structure:** Large incumbents like Bill.com ($1.5B FY25 revenue; investor.bill.com) and Intuit (QuickBooks) have built their businesses around specific workflow tools and payment processing revenue. [Inferred]: An AI-agent approach that operates across multiple existing tools (including competitors' own platforms) is structurally difficult for these incumbents to replicate, as it would cannibalize their own platform lock-in strategy — Bill.com's business model depends on customers conducting transactions within its ecosystem, not on an agent that automates across multiple platforms including Bill.com itself.

**Commoditization risk:** The underlying LLM capabilities powering AI agents are widely available, and multiple well-funded startups and incumbents are pursuing AI-powered accounting automation. Bill.com launched "BILL AI Agents" for touchless B2B transactions (search snippet, 2025). Tipalti secured $200M in growth financing specifically to invest in AI capabilities (Tipalti press release, Sept 2025). Building reliable, production-grade integrations across the dozen+ accounting/billing/banking tools — and handling the edge cases in invoice matching, partial payments, and GL coding — provides some technical complexity, but is replicable by well-resourced competitors.

## Market & Traction

**Traction signals:**
- YC Launch post published approximately February 17, 2026 (YC Launch post). No upvote count retrievable.
- Customer testimonial: CEO of Deferred stated FullSeam "scale[d] with us without disrupting our existing processes" (fullseam.com).
- Customer testimonial: Jordan Wallach, CEO of Belfry Software, described moving from "people interpreting contracts to a system that actually understands them," improving billing confidence (fullseam.com).
- LinkedIn company page exists at linkedin.com/company/fullseam; follower count not retrievable.
- No Product Hunt listing found.
- No public revenue, user count, or growth metrics disclosed.
- No public app store listing, Chrome extension, or Discord/Slack community found.
- No active job postings found (company is not currently hiring per YC profile).

**Competitive landscape:**

1. **Bill.com (NYSE: BILL)** — $1.5B FY25 total revenue, 13% YoY growth; ~500K SMBs and 9,000 accounting firms on platform (investor.bill.com, Aug 2025). Public company, $326M raised pre-IPO (Tracxn via search snippet). Focused on SMB payment automation with integrated payment processing. Recently launched BILL AI Agents. Key difference vs. FullSeam: Bill.com is a payment-processing platform; FullSeam is a cross-platform AI agent that operates within Bill.com and other tools rather than replacing them.

2. **Tipalti** — $200M+ ARR, $200M growth financing from Hercules Capital (Tipalti press release, Sept 2025). Processes $75B+ in annualized payment volume across 5,000+ global customers (Tipalti press release, Sept 2025). Focused on mid-market/enterprise AP automation and global payments. Key difference vs. FullSeam: Tipalti is primarily AP-focused with own payment rails; FullSeam spans AR, AP, cash application, and reconciliation as an agent layer.

3. **Versapay** — ~$42M revenue (Latka, 2024 via search snippet), 47K customers (Latka via search snippet). Acquired by Great Hill Partners for $95.6M in 2019 (Crunchbase via search snippet). Focused on collaborative AR automation with buyer-facing payment portals. Key difference vs. FullSeam: Versapay emphasizes the buyer-supplier collaboration portal; FullSeam automates the back-office agent workflow.

4. **Billtrust** — ~$96.4M revenue (Latka, July 2025 via search snippet), $477M raised (PitchBook via search snippet). Focused on enterprise AR automation and order-to-cash. Key difference vs. FullSeam: Billtrust targets larger enterprises with dedicated order-to-cash infrastructure; FullSeam positions as an AI agent for mid-market teams using existing tools.

5. **LedgerUp** — $1M revenue, 5-person team (Latka, June 2024 via search snippet), $500K YC funding (Tracxn via search snippet). AI-native contract-to-cash platform for B2B SaaS. Key difference vs. FullSeam: LedgerUp focuses specifically on SaaS revenue lifecycle; FullSeam targets broader finance operations across industries.

**Why now:** [Inferred]: The enabling change is the rapid improvement in LLM capabilities through 2024-2025, which crossed a performance threshold making it feasible for AI agents to reliably interpret unstructured financial documents (invoices, contracts, POs), make GL coding decisions, and compose contextual follow-up communications — tasks that previously required human judgment. Simultaneously, the proliferation of cloud-based accounting tools with API access (QuickBooks Online, Stripe, Xero, NetSuite) created the integration surface that an agent-based approach requires.

## Founders & Team

**Thomas Dowling** — Co-founder (listed first on YC Launch post; contact listed as tom@fullseam.com)
- BA Political Science & History, University of Illinois at Urbana-Champaign (2014-2018); MSc Social Policy, University of Oxford (Rhodes Scholar, 2018-2019) (history.illinois.edu; thetomdowling.com)
- Former municipal finance advisor to Chicago Mayor Lori Lightfoot (thetomdowling.com)
- Commissioner, Illinois Student Assistance Commission, appointed by Governor Pritzker; oversaw expansion of annual student assistance from $450M+ to $600M+ (thetomdowling.com)
- Co-founder & CEO of TaxProper (YC S19); grew to service 115,000+ properties worth $35B+, processing >$1B/year in property tax payments; raised $2M+ from Khosla Ventures and YC; acquired by Opendoor (NASDAQ: OPEN) Nov 4, 2022 (thetomdowling.com; taxproper.com)
- Twitter/X: @thetomdowling (x.com/thetomdowling); follower count not retrievable
- LinkedIn: linkedin.com/in/thomas-dowling-2a3aabb7
- GitHub: No public repos found

**Geoff Segal** — Co-founder
- BS Statistics & Economics, University of Illinois at Urbana-Champaign (2014-2016); MS Statistics, UIUC (Crunchbase via search snippet; Topionetworks via search snippet)
- Former actuarial statistician and research analyst at State Farm (Crunchbase via search snippet)
- Co-founder of TaxProper (YC S19); acquired by Opendoor (NASDAQ: OPEN) in 2022 (Crunchbase via search snippet)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/geoff-segal-744407ba
- GitHub: No public repos found

**Aaron Coppa** — Co-founder
- University of Illinois at Urbana-Champaign (LinkedIn via search snippet); Stanford GSB MBA mentioned (LinkedIn via search snippet)
- Head of Product at TaxProper (LinkedIn via search snippet)
- Co-founder of FullSeam (YC W26)
- Twitter/X: No public account found
- LinkedIn: linkedin.com/in/aaron-coppa-451a1955
- GitHub: No public repos found

**Co-founder relationship:** All three founders attended the University of Illinois at Urbana-Champaign and co-founded TaxProper together (YC S19). Dowling and Segal co-founded TaxProper in 2019; Coppa served as Head of Product (LinkedIn via search snippet; Crunchbase via search snippet). The team worked together through TaxProper's growth, fundraise, and acquisition by Opendoor, then continued together at Opendoor post-acquisition before launching FullSeam.

**Founder-market fit:** The team built and operated TaxProper, a financial operations SaaS that processed >$1B/year in property tax payments at scale, giving them direct experience with the pain of managing high-volume financial workflows, integrating across real estate and tax systems, and building enterprise-grade financial software. Segal's background in statistics and actuarial science provides quantitative rigor relevant to financial data processing and matching algorithms. Dowling's experience in municipal finance policy and advising city leadership provides domain understanding of financial operations. The team has a prior successful exit together and two YC batches (S19, W26). Brad Flora is the YC Partner (YC page).

## Key Risks

**Incumbent AI response:** Bill.com has already launched "BILL AI Agents" for touchless B2B transactions, and Tipalti raised $200M specifically for AI investment (Tipalti press release, Sept 2025). Both have existing customer bases of thousands of companies, established integrations, and resources to iterate quickly on AI features. FullSeam must demonstrate meaningfully better automation depth before incumbents close the gap.

**Integration brittleness:** FullSeam's value depends on maintaining reliable API connections with 9+ third-party platforms (QuickBooks, Stripe, Xero, NetSuite, Salesforce, etc.). Any API change, deprecation, or rate-limiting by these platforms could disrupt agent functionality. There is no public evidence of formal partnerships with these platform providers.

**Trust barrier for autonomous financial agents:** Finance teams handle sensitive data and are subject to audit requirements. Convincing controllers and CFOs to delegate autonomous actions (sending follow-ups, entering GL entries, processing invoices) to an AI agent may face organizational resistance, especially in regulated industries. The company addresses this partially with logged/auditable actions and configurable approval workflows (fullseam.com), but adoption friction remains a risk for the category.

**Crowded AI-agent category:** Multiple startups are pursuing AI agents for finance operations (LedgerUp, and others emerging from recent YC batches and other accelerators), while enterprise incumbents are adding AI capabilities. The specific framing of "AI employee for accounting" is becoming common, reducing differentiation at the positioning level.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.40B AR automation market in 2025, 11.6% CAGR to $6.57B by 2031 (MarketsandMarkets via search snippet); $3.07B AP automation in 2023, 12.5% CAGR to $7.1B by 2030 (Grand View Research via search snippet) |
| SAM | No public data found |
| Traction | YC Launch post (Feb 2026); customer testimonials from Deferred and Belfry Software CEOs (fullseam.com); no public user or revenue metrics |
| Revenue Signal | No public data found |
| Founders | Thomas Dowling: Rhodes Scholar (Oxford), ex-Mayor's office Chicago, co-founded TaxProper (acq. by Opendoor 2022). Geoff Segal: MS Statistics UIUC, ex-State Farm, co-founded TaxProper. Aaron Coppa: UIUC, Stanford GSB, Head of Product TaxProper. |
| Competitors | Bill.com ($1.5B FY25 revenue, public, broad SMB payment platform); Tipalti ($200M+ ARR, $200M growth financing, mid-market AP); Versapay (~$42M revenue, AR collaboration portal); Billtrust (~$96.4M revenue, $477M raised, enterprise AR); LedgerUp ($1M revenue, $500K YC seed, SaaS contract-to-cash) |
| Moat Signals | Prior exit together (TaxProper → Opendoor); cross-tool integration surface; configurable workflow embedding increases switching costs over time |
| Risk Factors | Incumbent AI response (Bill.com AI Agents, Tipalti $200M AI investment), integration brittleness across 9+ third-party APIs, trust barrier for autonomous financial agents |
| Founder Reach | Thomas Dowling: Twitter @thetomdowling (count not retrievable), LinkedIn 500+. Geoff Segal: Twitter not found, LinkedIn present. Aaron Coppa: Twitter not found, LinkedIn present. |
| Distribution Signals | No public data found |
