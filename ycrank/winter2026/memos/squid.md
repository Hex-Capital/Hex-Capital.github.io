# Squid

> AI-powered grid planning in your browser 🦑 (squid.energy)

| Field | Value |
|-------|-------|
| Website | https://squid.energy |
| YC Page | https://www.ycombinator.com/companies/squid |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 2 |
| Location | London / San Francisco (squid.energy website) |
| Tags | |
| YC Partner | Gustaf Alstromer |
| Emails | hello@squid.energy |

## The Idea

**Problem:** Electricity grid planning decisions are currently made across emails, spreadsheets, PDFs, GIS exports, and conflicting model versions (YC company page). The teams planning and operating distribution networks lack a single source of truth for the network model, making planning inconsistent, assumptions opaque, and progress lost in static reports (squid.energy). The customer segment is distribution network operators (DNOs) and utilities—organizations like National Grid DSO and Octopus Energy. Current workflows rely on fragmented tools that do not scale to the pace of electrification and grid modernization.

**Approach:** Squid provides a browser-native workspace built around a live, versioned grid model—a map of substations and lines with evidence attached to each decision point (YC company page). The platform unifies grid data into one coherent model, versions all changes so they are trackable and comparable, and enables repeatable planning workflows for connections, capacity, and policy (squid.energy). AI capabilities are embedded for grid stress testing and policy simulation (squid.energy).

**Differentiation:** Unlike incumbent tools such as GE Vernova's PlanOS (desktop-based, enterprise-licensed power systems analysis suites) or IQGeo's Adaptive Grid (GIS-centric network design), Squid is browser-native and designed around a versioned, collaborative model rather than static network snapshots. Compared to Envelio (now E.ON-owned), which provides a digital twin SaaS for grid planning, Squid emphasizes accessibility ("built so everyone can understand the grid") and appears to target a lighter-weight, faster deployment model. Compared to Camus Energy ($25M raised), which focuses on real-time grid orchestration and operations, Squid is focused upstream on the planning and network modeling layer.

**Business Model:** The pricing page on squid.energy shows "Coming Soon" with a $0 price point displayed, suggesting a freemium or free-tier entry planned (squid.energy, Feb 2026). [Inferred]: The most likely monetization path is SaaS licensing to utilities and grid operators, potentially per-seat or per-network-region, given the enterprise customer base (National Grid, Octopus Energy) and the hiring of a Founding Engineer at £80K-£140K with 1.0%-2.5% equity (YC company page).

**TAM/SAM:** The global smart grid software market was valued at $3.762 billion in 2025 and is projected to reach $5.844 billion by 2030 at a 9.21% CAGR (Knowledge Sourcing Research, 2025 via search snippet). The broader grid software market was valued at $10 billion in 2024, projected to reach $30 billion by 2032 at a 15% CAGR (FutureDataStats, 2024 via search snippet). No public SAM estimate specific to grid planning software was found.

**GTM / Distribution:** Squid lists National Grid and Octopus Energy as customers on its website ("Trusted by" section, squid.energy). National Grid DSO launched an interactive FlexPortal in February 2026, with the YC company page describing this as "powered by Squid" (YC company page; Energy Live News, Feb 12, 2026; Utility Week, Feb 2026). The company is seeking "design partners at grid operators" in areas including planning, connections, modelling, GIS, and asset strategy (YC company page). [Inferred]: The GTM appears to be direct sales to distribution network operators, leveraging existing relationships from the founders' time at National Grid and Octopus Energy, starting in the UK market.

## Defensibility

The founders previously co-founded VoltQuant, which served National Grid and Octopus Energy as customers (kolokotron.is). These same organizations now appear as customers of Squid (squid.energy), suggesting relationship-based switching costs and embedded domain trust. Squid holds SOC 2 Type II, ISO 27001, and GDPR certifications (squid.energy), which create compliance-based barriers to entry in the utility sector. The versioned network model, once adopted as the single source of truth by a utility's planning teams, would create data lock-in and workflow switching costs.

**Market structure:** Grid planning software procurement in utilities is characterized by long sales cycles and high regulatory compliance requirements (SOC 2, ISO 27001). Incumbent software vendors like GE Vernova sell planning tools as part of broader enterprise suites alongside control systems and SCADA, meaning a standalone planning replacement could be adopted without requiring a full platform swap. [Inferred]: The structural barrier for incumbents like GE Vernova is that their grid planning tools are bundled within large enterprise software suites sold alongside hardware—unbundling and offering a lightweight, browser-native planning layer would cannibalize their existing high-margin enterprise contracts.

**Commoditization risk:** The technical complexity of building accurate network models with versioning, evidence tracking, and AI-powered stress testing is moderate. Envelio (E.ON-owned), Plexigrid, and Camus Energy have overlapping capabilities. However, the specific combination of browser-native delivery, collaborative versioning, and AI-powered planning in a single lightweight product is not currently replicated by the identified competitors.

## Market & Traction

**Traction signals:**
- National Grid and Octopus Energy listed under "Trusted by" on squid.energy (squid.energy, Feb 2026)
- National Grid DSO launched an interactive FlexPortal described as "powered by Squid" (YC company page, Feb 2026), covered in Utility Week and Energy Live News (Feb 12, 2026)
- Customer testimonial: "For too long flex data lived in spreadsheets. Not anymore!" — Doerte Schneemann, Head of Flexibility Markets, National Grid DSO (squid.energy)
- Featured in Utility Week, The Energyst, and Energy Live News (squid.energy)
- Company Twitter/X: @SquidEnergy handle exists but appears to belong to a different entity (a Nigerian solar company); no confirmed Twitter account for Squid (squid.energy) was found
- LinkedIn: Squid (YC W26) company page exists at linkedin.com/company/squid-energy (LinkedIn search result)
- Actively hiring: 1 Founding Engineer role in London, £80K-£140K, 1.0%-2.5% equity (YC company page)
- Compliance certifications: SOC 2 Type II, ISO 27001, GDPR (squid.energy)

**Competitive landscape:**

| Competitor | Funding | Key Differentiator vs. Squid |
|------------|---------|------------------------------|
| Envelio (E.ON) | ~€7M pre-acquisition; majority-acquired by E.ON in Dec 2021 (HTGF, via search snippet) | Digital twin SaaS for grid planning; now owned by E.ON, limiting independence; serves major European utilities (Westnetz, Enel, Iberdrola) |
| Camus Energy | $25M Series A (ESG Today, Feb 2024) | Focused on grid orchestration and real-time operations rather than upstream planning; serves US utilities covering 2.9M end consumers; 500% ARR growth since mid-2021 (BusinessWire, Feb 2024) |
| Plexigrid | ~$11.6M total including €6.5M EIC Accelerator (Silicon Canals, 2024 via search snippet) | Grid visibility, analytics, and flexibility management; Spain/Sweden-based; won Iberdrola challenge (Iberdrola press release via search snippet) |
| IQGeo (LSE: IQG) | Publicly traded; acquired Adaptive Grid (IQGeo website) | GIS-centric geospatial network management for utilities and telcos; broader scope beyond grid planning |
| GE Vernova | Division of GE (~$33B revenue company) | PlanOS suite for grid planning; incumbent with integrated hardware + software offering; enterprise sales model |

**Why now:**
- Electrification acceleration: Rapid growth of EV charging, heat pumps, and distributed energy resources is creating unprecedented demand for grid capacity planning (industry-wide trend)
- [Inferred]: The AI capability threshold has crossed a point where browser-native stress testing and scenario modeling can compete with desktop engineering tools. Simultaneously, the UK's distribution network operators are under regulatory pressure (Ofgem RIIO-ED2 framework, 2023-2028) to modernize planning processes and increase transparency, creating a procurement window for new software.

## Founders & Team

**Conor Jones** — Co-Founder & CEO
- Previously at Octopus Energy, BCG, and National Grid (YC company page)
- Co-founded VoltQuant (LinkedIn search result, Feb 2023), a grid intelligence platform for project developers that raised ~£400K seed from industry angels, £200K via SAFE from Cambridge Enterprise, and ~£330K in InnovateUK grants (kolokotron.is); VoltQuant's customers included National Grid and Octopus Energy (kolokotron.is)
- Described as "2nd Time Energy/CleanTech Founder" (YC company page search snippet)
- Twitter/X: No confirmed account found
- LinkedIn: linkedin.com/in/conor-jones-aa6590141 (LinkedIn search result)
- GitHub: No public repos found

**George Kolokotronis** — Co-Founder & CTO
- MPhil in Engineering from University of Cambridge; BEng in Engineering from Loughborough University (kolokotron.is)
- Former Head of Technology at Octopus Energy; previously Senior Software Engineer at Octopus Energy (kolokotron.is)
- AI/Data GTM Lead at Amazon Web Services (kolokotron.is)
- Co-founded VoltQuant as CTO (Geovation profile; kolokotron.is)
- Runs EnergyDebrief, a daily energy newsletter (kolokotron.is)
- Twitter/X: @kolokotron_is (kolokotron.is); follower count not retrievable
- LinkedIn: linkedin.com/in/george-kolokotronis (LinkedIn search result)
- GitHub: gkolokotronis (GitHub Pages personal website found via search); star count not retrievable

**Co-founder relationship:** Both Conor Jones and George Kolokotronis previously co-founded VoltQuant together (LinkedIn search results; Geovation profile). Both also worked at Octopus Energy and had experience with National Grid prior to founding Squid (YC company page; kolokotron.is).

**Founder-market fit:** Both founders have direct operational experience inside the organizations they are now selling to—National Grid and Octopus Energy. George Kolokotronis brings technical depth from Cambridge engineering studies, AWS AI/ML experience, and building VoltQuant's grid intelligence platform. Conor Jones brings BCG consulting background and energy sector operating experience. Their prior startup VoltQuant served National Grid and Octopus Energy as customers, and these same organizations appear as Squid's first customers, indicating strong domain networks and customer trust carried from their previous venture.

## Key Risks

**Brand and domain confusion:** Multiple unrelated entities share the "Squid" name, including Squid Energy Limited (squidenergy.net, a Nigerian solar company), Squid AI (LinkedIn), and the @SquidEnergy Twitter handle (belonging to the Nigerian entity). This creates SEO competition and potential customer confusion, particularly as the company scales internationally.

**Incumbent platform bundling:** GE Vernova offers grid planning (PlanOS) bundled with broader control systems, SCADA, and hardware. Utilities with existing GE Vernova or Siemens infrastructure may face contractual or integration barriers to adopting a standalone planning tool, or may receive planning capabilities as part of existing contract renewals.

**E.ON/Envelio competitive threat:** Envelio, acquired by E.ON in 2021, provides an overlapping digital twin SaaS for grid planning and already serves major European utilities (Westnetz, Enel, Iberdrola, Vattenfall). E.ON's distribution and balance sheet could accelerate Envelio's reach into Squid's target market.

**Customer concentration:** Two named customers (National Grid, Octopus Energy) are both organizations where the founders previously worked. Revenue diversification beyond the founders' personal networks is undemonstrated at this stage.

**Regulatory and procurement cycles:** Utility software procurement typically involves 6-18 month sales cycles and compliance requirements. Squid's existing SOC 2 Type II and ISO 27001 certifications mitigate the compliance barrier, but long sales cycles constrain growth velocity for a 2-person team.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $3.76B smart grid software market (Knowledge Sourcing Research, 2025 via search snippet, 9.21% CAGR); $10B broader grid software market (FutureDataStats, 2024 via search snippet, 15% CAGR) |
| SAM | No public data found |
| Traction | National Grid and Octopus Energy listed as customers (squid.energy, Feb 2026); National Grid DSO FlexPortal "powered by Squid" (YC page, Feb 2026); press in Utility Week, The Energyst, Energy Live News (squid.energy) |
| Revenue Signal | No public data found (pricing page shows "Coming Soon") |
| Founders | Conor Jones (CEO): ex-Octopus Energy, BCG, National Grid; 2nd-time energy founder (VoltQuant). George Kolokotronis (CTO): Cambridge MPhil Engineering, ex-Head of Tech Octopus Energy, ex-AWS AI/Data GTM; VoltQuant co-founder |
| Competitors | Envelio (~€7M raised pre-E.ON acquisition, revenue unknown, digital twin SaaS for grid planning); Camus Energy ($25M raised, 500% ARR growth, grid orchestration focus vs. Squid's planning focus); Plexigrid (~$11.6M raised, revenue unknown, grid analytics/visibility); IQGeo (public, acquired Adaptive Grid, GIS-centric); GE Vernova (incumbent, bundled PlanOS suite) |
| Moat Signals | SOC 2 Type II + ISO 27001 + GDPR certifications (squid.energy); embedded customer relationships from prior venture (VoltQuant → National Grid, Octopus Energy) |
| Risk Factors | Brand/domain confusion with multiple "Squid" entities, E.ON/Envelio competitive threat with overlapping product and incumbent distribution, customer concentration in founders' prior employer network |
| Founder Reach | Conor Jones: Twitter not found, LinkedIn linkedin.com/in/conor-jones-aa6590141. George Kolokotronis: Twitter @kolokotron_is (count not retrievable), LinkedIn linkedin.com/in/george-kolokotronis, GitHub gkolokotronis (count not retrievable) |
| Distribution Signals | National Grid DSO FlexPortal launch powered by Squid (Utility Week, Energy Live News, Feb 2026); press coverage in 3 energy trade publications; 1 active job posting (Founding Engineer, London) |
| Emails | hello@squid.energy (squid.energy website) |
