# qomplement

> AI Agents for Document Filling

| Field | Value |
|-------|-------|
| Website | https://qomplement.com/ |
| YC Page | https://www.ycombinator.com/companies/qomplement |
| Batch | Spring 2026 |
| Industry | B2B / B2B |
| Team Size | 4 |
| Location | San Francisco, CA, USA |
| Tags | Documents, B2B, AI |
| YC Partner | Tom Blomfield |
| Emails | No public data found |

## The Idea

**Problem:** Enterprises—particularly in transportation, healthcare, and financial services—rely on legacy software systems that were not designed for AI integration (Expansión, Sep 2025). Routine document-processing tasks such as invoice entry, purchase order management, and report generation are performed manually within these systems, creating cost and error burdens. A cited logistics customer processed 5,000 invoices monthly by hand (Expansión, Sep 2025). 50% of Mexican companies use AI agents, but only 17% have them "deeply integrated" (Google Cloud, cited in Expansión, Sep 2025). Current alternatives require cloud data transfer, API access, or system replacement—barriers for regulated industries and companies on older tech stacks.

**Approach:** qomplement builds an OS-level AI agent using a Computer Using Agent (CUA) model that mimics human desktop actions—clicks, menu navigation, keyboard inputs—to automate repetitive workflows inside legacy applications without requiring APIs or system modifications (Semilla Ventures; Startups Latam). The system runs a proprietary language model locally on user machines (compatible with 8–16 GB RAM), with optional cloud connectivity via AWS for training and maintenance (Expansión, Sep 2025). Users record routines and the agent learns to execute them autonomously with error-retry capability (Expansión, Sep 2025). The current YC-era framing emphasizes turning invoices and POs into system-ready structured data (X/Twitter bio; YC page).

**Differentiation:**
- **vs. BrowserUse / Comet (Perplexity):** qomplement operates at the OS/desktop level rather than browser-only, enabling automation across any legacy desktop application (Startups Latam).
- **vs. Rossum / Extend AI:** These platforms require API integrations or cloud document upload; qomplement processes data on-device without transmitting it externally (Expansión, Sep 2025).
- **vs. cloud-based AI agents:** qomplement claims agents are 15x less expensive than cloud-based alternatives, contrasting with "$3 per interaction" for large cloud models (Expansión, Sep 2025; Startups Latam).

**Business Model:** No public pricing page found. The company website returned only a company name with no product or pricing content at time of research. [Inferred]: Most likely monetization path is per-seat or per-agent SaaS subscription targeting enterprise departments, given the B2B SaaS positioning described on the Semilla Ventures profile.

**TAM/SAM:** The intelligent document processing (IDP) market was valued at $3.22B in 2025, projected to reach $43.92B by 2034 at a 33.68% CAGR (Precedence Research, 2025). [Inferred]: The serviceable segment for OS-level desktop automation of document workflows in legacy systems is a subset of this market, likely narrower than full IDP TAM, but no specific SAM estimate exists publicly.

**GTM / Distribution:** Early adopters are in highly regulated sectors—transportation, healthcare, and financial services—with current deployments in accounting, HR, and sales departments (Startups Latam; Semilla Ventures). Pre-seed funding came from investors in San Francisco and Latin America (Milenio). The company participated in AWS GAIA 2025, a Latin American founder accelerator (LinkedIn/AWS GAIA). [Inferred]: Initial GTM likely leverages LatAm enterprise networks, expanding to US market via YC S26 batch presence in San Francisco.

## Defensibility

- **Proprietary model:** qomplement trained a custom language model over 30+ days at a cost of $200,000, using curated public and private data (Expansión, Sep 2025). This represents a non-trivial investment at the pre-seed stage.
- **Local-first architecture:** On-device processing creates a privacy-oriented positioning for regulated industries where cloud data transfer is restricted (Startups Latam).
- **Switching costs:** [Inferred]: Once enterprise workflows are recorded and automated via the agent, migrating to another system requires re-recording all routines, creating moderate switching friction.

**Market structure:** [Inferred]: Large cloud AI providers (Google, Microsoft, OpenAI) are optimized for cloud-first architectures with per-API-call economics. A local-first, OS-level automation approach conflicts with their cloud revenue models, creating a potential structural misalignment that may slow direct competitive response. However, no structural barrier is definitively proven at this stage.

**Commoditization risk:** BrowserUse (50,000+ GitHub stars; TechCrunch, Mar 2025) offers open-source browser automation. As CUA/desktop agent capabilities mature in frontier models (e.g., OpenAI's GPT-5, Anthropic's computer use), the core automation mechanism could become commoditized. The proprietary model's cost advantage ($200K training investment) may erode as open-weight models improve (Expansión, Sep 2025).

## Market & Traction

**Traction signals:**
- Customer testimonial: A transportation company automated 10,000+ monthly invoices, reducing monthly costs by $15,000 (Expansión, Sep 2025; Startups Latam).
- Product deployed in accounting, HR, and sales departments at undisclosed number of companies (Semilla Ventures).
- Early adopters in transportation, healthcare, and financial services (Startups Latam).
- Pre-seed round raised from San Francisco and Latin America-based investors; amount undisclosed (Milenio).
- Investor: Semilla Ventures (portfolio listing).
- AWS infrastructure spend: ~$60,000/month for model training and maintenance (Expansión, Sep 2025).
- Twitter/X: @qomplementai — 16 followers, joined April 2025, no posts visible (X.com via search snippet).
- LinkedIn: linkedin.com/company/qomplement — listed as "YC P26" (LinkedIn via search snippet).
- Press coverage: Expansión (Sep 2025), Milenio, Startups Latam — all Spanish-language Mexican tech press.
- No Product Hunt launch found. No GitHub public repos found. No app store listings found. No Discord/Slack community found.
- Website: Minimal/placeholder page with only company name at time of research.
- Job postings: 0 (YC page).

**Competitive landscape:**

| Competitor | Key Differentiator vs. qomplement | Funding | Revenue/ARR |
|---|---|---|---|
| **Rossum** | Cloud-native IDP platform with API integrations; serves 450+ enterprises including PepsiCo, Bosch, Siemens | $114.5M (Series A, Oct 2021; VentureBeat) | $44.9M in 2024 (GetLatka) |
| **Extend AI** | Full-stack LLM document processing cloud with developer primitives; customers include Brex, Square, Checkr | $17M (Series A; BusinessWire, Jun 2025) | Multi-millions ARR, cash-flow positive (Extend blog) |
| **BrowserUse** | Open-source browser automation (50K+ GitHub stars); browser-only vs. qomplement's OS-level scope | $17M seed (TechCrunch, Mar 2025) | Revenue unknown |
| **Turian** | AI agents for supply chain/sales order processing with ERP/CRM integrations; Berlin-based | $3.78M seed (Tracxn) | Revenue unknown |
| **Docugami** | Document AI with agentic "System of Action"; founded by ex-Microsoft engineers | $13.2M (Crunchbase) | Revenue unknown |

**Why now:**
- The emergence of Computer Using Agent (CUA) capabilities in frontier LLMs—models that can interpret and interact with graphical user interfaces—crossed a practical performance threshold in 2024–2025 (Startups Latam). [Inferred]: This technology shift made OS-level automation viable without requiring per-application API development, opening legacy software to AI-driven workflows for the first time.
- [Inferred]: Declining costs of local inference hardware and smaller, efficient language models enable on-device execution that was not feasible two years prior.

## Founders & Team

**Kerim Taray** — Co-founder & CEO
- Education: Tecnológico de Monterrey (degree field not publicly specified) (LinkedIn; Expansión, Sep 2025).
- Background: Described as "former CTO from high-growth startups" (Semilla Ventures). Self-describes as "engineer, techno-optimist, contrarian" (personal website kerimtaray.com).
- Participated in AWS GAIA 2025 cohort for LatAm founders (LinkedIn).
- Twitter/X: No personal public account found.
- LinkedIn: linkedin.com/in/kerim-taray — 500+ connections (LinkedIn via search snippet).
- GitHub: No public repos found.

**Andrés Fernando Garza García** — Co-founder & CTO
- Education: Tecnológico de Monterrey (degree field not publicly specified) (Expansión, Sep 2025).
- Background: Described as "former CTO from high-growth startups" (Semilla Ventures). Recently graduated engineer at time of founding (Milenio).
- Twitter/X: No personal public account found.
- LinkedIn: Not definitively identified due to common name.
- GitHub: No public repos found.

**Co-founder relationship:** Both founders attended Tecnológico de Monterrey and are described as "ingenieros regiomontanos" (engineers from Monterrey) (Milenio). [Inferred]: University overlap and shared regional origin strongly suggest prior acquaintance before co-founding.

**Founder-market fit:** Both founders have direct experience with the inefficiencies of Latin American enterprise systems and legacy software environments (Expansión, Sep 2025). Their background at Tec de Monterrey—Mexico's top private engineering university—and described prior CTO experience at high-growth startups (Semilla Ventures) provides technical credibility for building an AI agent product. Their LatAm network (AWS GAIA 2025, Semilla Ventures) positions them for initial traction in a region with high legacy-system prevalence.

## Key Risks

**CUA technology commoditization:** OpenAI, Anthropic, and open-source projects (BrowserUse, 50K+ GitHub stars) are actively developing computer-use agent capabilities (TechCrunch, Mar 2025). qomplement's core automation mechanism—an agent that mimics desktop actions—may become a commodity feature of frontier model APIs. Mitigation: The proprietary model trained for $200K on curated data may offer domain-specific accuracy advantages in the near term (Expansión, Sep 2025).

**Infrastructure cost sustainability:** The company spends ~$60,000/month on AWS infrastructure for model training and maintenance (Expansión, Sep 2025). At pre-seed with undisclosed funding, this burn rate requires near-term revenue or additional capital. Standard YC deal ($500K) would provide approximately 8 months of infrastructure runway alone.

**Product-market positioning ambiguity:** Public descriptions vary across sources: "OS-level AI agent for legacy software automation" (Semilla Ventures), "AI Agents for Document Filling" (YC page), "Turn invoices and POs into system-ready data" (X/Twitter). The company website contains no product information. This variation may indicate an evolving product focus or early-stage experimentation with positioning.

**Local-first scaling constraints:** The local-execution model (8–16 GB RAM requirement) limits deployment to adequately provisioned machines and creates support complexity at scale (Expansión, Sep 2025). Enterprise customers with thin clients or locked-down IT environments may face adoption barriers.

**Well-funded direct competition:** Extend AI ($17M, cash-flow positive) and BrowserUse ($17M, YC-backed) operate in adjacent spaces with significantly more capital and established customer bases including Fortune 500 companies (BusinessWire; TechCrunch).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.22B in 2025, projected $43.92B by 2034 at 33.68% CAGR (Precedence Research, 2025) |
| SAM | No public data found |
| Traction | Customer testimonial: 10K+ invoices/month automated, $15K/month savings for one logistics customer (Expansión, Sep 2025); deployments in accounting, HR, sales departments (Semilla Ventures); press in Expansión, Milenio, Startups Latam (all Sep 2025) |
| Revenue Signal | No public data found |
| Founders | Kerim Taray (CEO): Tec de Monterrey, former CTO at high-growth startups. Andrés Fernando Garza García (CTO): Tec de Monterrey, former CTO at high-growth startups. |
| Competitors | Rossum ($114.5M raised, $44.9M ARR 2024, cloud IDP platform); Extend AI ($17M raised, multi-millions ARR, document processing cloud); BrowserUse ($17M raised, revenue unknown, open-source browser agent); Turian ($3.78M raised, revenue unknown, supply chain AI agents); Docugami ($13.2M raised, revenue unknown, document AI) |
| Moat Signals | Proprietary model ($200K training cost) (Expansión, Sep 2025); local-first architecture for regulated industries (Startups Latam) |
| Risk Factors | CUA commoditization from frontier AI providers, $60K/month infrastructure burn, product positioning ambiguity across sources |
| Founder Reach | Company Twitter @qomplementai: 16 followers (X.com via search snippet); Kerim Taray LinkedIn: 500+ connections (LinkedIn via search snippet); Andrés Garza García: not definitively identified on social platforms |
| Distribution Signals | Press coverage in Expansión, Milenio, Startups Latam (all Sep 2025, Spanish-language); AWS GAIA 2025 cohort participant (LinkedIn); Semilla Ventures portfolio company (semilla.ventures) |
| Emails | No public data found |
