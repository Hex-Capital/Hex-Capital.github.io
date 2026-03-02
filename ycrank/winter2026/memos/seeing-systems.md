# Seeing Systems

> AI Drone Systems for Defence

| Field | Value |
|-------|-------|
| Website | https://www.seeing-systems.com |
| YC Page | https://www.ycombinator.com/companies/seeing-systems |
| Batch | Winter 2026 |
| Industry | Industrials / Industrials -> Defense |
| Team Size | 2 |
| Location | London, UK (LinkedIn company page); founders originally from Guernsey (Guernsey Press, Feb 2026) |
| Tags | Hardware, Swarm AI, Robotics |
| YC Partner | Ankit Gupta |
| Emails | founders@seeing-systems.com (YC page) |

## The Idea

**Problem:** Modern warfare is evolving faster than traditional defense procurement can keep pace with. Drone systems become obsolete within weeks of deployment due to rapidly shifting electronic warfare (EW) countermeasures and evolving tactics (Seeing Systems website). Current military drone platforms require full replacement when components are outdated, creating high lifecycle costs and slow upgrade cycles. Operators face steep learning curves and high cognitive loads managing autonomous systems in contested environments.

**Approach:** Seeing Systems builds modular, autonomous strike drones with swappable payloads, sensors, compute, and communications subsystems. Rather than replacing entire platforms, operators swap individual modules to keep systems current. The company's agentic AI control system (branded "Aerie AI") automates navigation and coordination across multiple drones, reducing cognitive load so operators with minimal training can deploy the systems. The company claims a 2x+ reduction in lifecycle cost compared to traditional platforms (YC company description). Their product line includes:
- **Bandit:** Budget FPV platform for training and one-way strike missions (35+ km range, 1.5 kg max payload, 115 km/h) (company website)
- **Banshee:** Battle-hardened FPV platform for EW-heavy environments with IPX7 waterproofing and a fibre-optic guided variant for jamming immunity (40+ km range, 35+ min flight time, 100+ km/h) (company website)
- **Aerie AI:** Swarm coordination software for multi-platform operations (in development) (company website)
- **Operator Training:** Modern conflict-focused training programs (company website)

The company also employs Forward Deployed Engineers embedded with each military unit for real-time feedback integration (Fondo blog).

**Differentiation:** Unlike large-platform defense primes (e.g., General Atomics, Northrop Grumman), Seeing Systems targets the low-cost, expendable strike drone segment where modularity and rapid iteration matter more than platform longevity. Compared to Anduril, which builds larger autonomous systems across land, sea, and air domains, Seeing Systems focuses specifically on inexpensive, modular FPV-class strike drones with swarm capability. Compared to Stark (German combat drone startup), Seeing Systems emphasizes modularity and lifecycle cost reduction rather than scale manufacturing of fixed-design loitering munitions. The fibre-optic guided variant of Banshee addresses EW jamming—a growing battlefield challenge that RF-dependent competitors face.

**Business Model:** No public pricing page found. [Inferred]: Most likely monetization path is hardware sales of drone platforms (Bandit, Banshee) to military customers with recurring revenue from software licensing (Aerie AI swarm software), spare modules/parts, maintenance, and operator training programs. Defense contracts with NATO forces and the UK MoD would be the primary revenue channel.

**TAM/SAM:** The global military drone market exceeded $18.2 billion in 2025, with a projected CAGR of 13.8% from 2026 to 2035 (GM Insights, 2025). An alternative estimate sizes the market at $47.38 billion in 2025, projected to reach $98.24 billion by 2033 at 8.9% CAGR (Grand View Research, 2025 via search snippet). The U.S. DoD funded $1.8 billion in FY2025 for autonomous unmanned systems development, a 24% increase from 2024 (Grand View Research, 2025 via search snippet). No specific SAM estimate found for the low-cost modular strike drone sub-segment. [Inferred]: The SAM would be a fraction of the overall military drone TAM, focused on NATO and allied forces' expendable/attritable drone procurement programs.

**GTM / Distribution:** The company's current GTM is direct engagement with military end-users through embedded Forward Deployed Engineers (Fondo blog). Current customers and partners include the UK Royal Marine Commandos, several other UK military units, and 4 NATO forces, with prototypes being shipped to Ukraine for iterative feedback (YC company description; LinkedIn post). [Inferred]: Distribution likely follows a land-and-expand pattern starting with UK forces (where existing relationships exist), then expanding to other NATO allies through operational demonstrations and word-of-mouth among military units.

## Defensibility

The company's modularity architecture—swappable payloads, sensors, compute, and comms—creates potential switching costs once a military unit standardizes on the platform and trains operators on the system. The Aerie AI swarm software, if proven in operational environments, could create a data and algorithmic advantage as it learns from real-world deployments across multiple NATO forces. The Forward Deployed Engineer model creates tight feedback loops and relationship lock-in with military customers. Existing relationships with UK Royal Marine Commandos and 4 NATO forces represent early-stage institutional trust, which is difficult to replicate in defense procurement.

**Market structure:** Defense procurement processes create structural barriers once a vendor is qualified and integrated into a force's logistics and training pipeline. Re-qualifying a new vendor involves testing, certification, and retraining—costs that defense organizations avoid unless necessary. Larger incumbents (e.g., General Atomics, BAE Systems) are optimized for high-value, long-lifecycle platforms where margins are tied to platform complexity. Moving to low-cost, expendable, modular drones would cannibalize their existing revenue models and conflict with established procurement relationships built around expensive, multi-year contracts.

**Commoditization risk:** The FPV strike drone segment is inherently at risk of commoditization. Ukraine's drone industry now produces 4 million drones annually (Euromaidan Press, Nov 2025), and numerous startups globally are entering the market. Hardware designs for basic FPV strike drones are widely available. The key differentiators would be the modularity architecture, the Aerie AI swarm software, and the fibre-optic jamming-immune variant—these are harder to replicate but not impossible for well-funded competitors. Stark, with $100 million raised (Tech.eu, Aug 2025), and Shield AI, at $5.6 billion valuation (Fortune, Dec 2025), have substantially more resources to develop competing capabilities.

## Market & Traction

**Traction signals:**
- Customers and partners include UK Royal Marine Commandos, multiple other UK military units, and 4 NATO forces (YC company description)
- Currently shipping prototypes to Ukraine for iterative feedback (YC company description; LinkedIn announcement)
- Operations documented: Operation Kull (Estonian Military/European Armed Forces training) and Operation Osprey (UK elite personnel testing) (company website)
- $500,000 funding from Y Combinator, announced January 10, 2026 (Nordic9, Jan 2026)
- LinkedIn: 1,069 followers, 3 employees listed (LinkedIn company page, accessed Mar 2026)
- Twitter/X: @S2_INC (handle confirmed; follower count not retrievable due to JavaScript rendering)
- Matthew Le Maitre personal Twitter: @matthewlemaitre, 2 followers (via search snippet)
- Company Twitter: @S2_INC (YC page)
- Featured in Guernsey Press: "Their acceptance rate is less than 1% – it's harder than Harvard" (Guernsey Press, Feb 11, 2026)
- No Product Hunt listing found
- No public GitHub repositories found
- No app store listings (hardware product)
- No Discord/Slack community found

**Competitive landscape:**

1. **Anduril Industries** — $30.5 billion valuation (Tracxn, 2026 via search snippet). Builds large-scale autonomous systems across air, land, sea, and space domains. Differentiator vs. Seeing Systems: Anduril targets the full-spectrum defense market with high-end platforms (e.g., Fury autonomous jet, Ghost UAS), while Seeing Systems focuses on low-cost, modular, expendable strike drones. Revenue unknown publicly at granular level.

2. **Shield AI** — $5.6 billion valuation; raised $240 million in March 2025 (TechCrunch, Mar 2025). Develops Hivemind AI platform that pilots autonomous vehicles. Hivemind made up ~30% of revenue in the 12 months ending March 2025 (Fortune, Dec 2025). Differentiator vs. Seeing Systems: Shield AI focuses on AI pilot software for larger autonomous aircraft (including the X-BAT VTOL fighter jet), while Seeing Systems targets smaller, cheaper FPV-class drones with modular hardware.

3. **Stark** — $100 million total raised; reached unicorn valuation after German armed forces contract worth €2.4 billion (Sifted, 2025; Tech.eu, Aug 2025). Founded in 2024 by Quantum Systems founder Florian Seibel. Builds kamikaze/loitering munition drones. Differentiator vs. Seeing Systems: Stark focuses on mass-manufactured fixed-design combat drones at scale, while Seeing Systems emphasizes modularity and upgradability. Stark failed all four strikes in UK military trials in October 2025 (DroneXL, Oct 2025).

4. **Quantum Systems** — €160 million Series C at €1 billion+ valuation; Germany's first defense tech unicorn (Sifted, 2025). Primarily builds reconnaissance UAVs for civilian and military use. Differentiator vs. Seeing Systems: Quantum Systems focuses on ISR rather than strike missions.

5. **Tekever** — Valuation over £1 billion; won UK RAF surveillance drone contract; investing £400 million in UK manufacturing (Sifted, 2025 via search snippet). Portuguese drone company focused on long-endurance surveillance drones. Differentiator vs. Seeing Systems: Tekever focuses on ISR/surveillance rather than strike.

**Why now:** The Russia-Ukraine conflict, entering its fourth year, has fundamentally demonstrated the operational centrality of low-cost drones in modern warfare. Ukraine produces 4 million drones annually (Euromaidan Press, Nov 2025), and NATO forces are scrambling to develop similar capabilities. Defense tech VC funding jumped to $49.1 billion in 2025 from $27.2 billion in 2024 (Defense News, Jan 2026). The European defence-specific venture segment grew 132% year-on-year (search snippet via earlier results). [Inferred]: Electronic warfare countermeasures are advancing rapidly, making the RF-dependent drone designs of 2022-2023 increasingly vulnerable—creating demand for jamming-immune solutions like Seeing Systems' fibre-optic guided variant. The UK government has specifically increased drone procurement budgets, as evidenced by programs like Project OCTOPUS and Tekever's £400M UK investment.

## Founders & Team

**Matthew Le Maitre** — Co-Founder, Software (age 28, per Guernsey Press, Feb 2026)
- BA Physics (First Class) and MEng Computer Science from Christ's College, University of Cambridge (LinkedIn via search snippet; YC page)
- Researcher at University of Cambridge Mobile Robotics Lab, working on autonomous systems and context-aware drones; final-year dissertation on simulating autonomous vehicle traffic (LinkedIn via search snippet)
- Technical Analyst at Farsight Consulting, public and private sector roles (LinkedIn via search snippet)
- Software Engineer at Jane Street (ZoomInfo; YC page)
- Originally from Guernsey (Guernsey Press, Feb 2026)
- Twitter/X: @matthewlemaitre — 2 followers (via search snippet); company account @S2_INC — count not retrievable
- LinkedIn: linkedin.com/in/mattlemaitre — 500+ connections (via search snippet)
- GitHub: No public repos found

**Alexander Le Maitre** — Co-Founder, Hardware (age 25, per Guernsey Press, Feb 2026)
- Education: Elizabeth College, Guernsey (LinkedIn via search snippet)
- Self-taught in embedded electronics, firmware, and PCB design (YC page)
- Previously designed Explosive Ordnance Disposal (EOD) training and diagnostic hardware for military users (YC page)
- Led projects with national-security implications (YC page)
- Originally from Guernsey (Guernsey Press, Feb 2026)
- Twitter/X: No personal public account found
- LinkedIn: linkedin.com/in/alexander-le-maitre (via search snippet)
- GitHub: No public repos found

**Co-founder relationship:** Alexander and Matthew Le Maitre are brothers (Guernsey Press, Feb 2026; YC page), both originally from Guernsey.

**Founder-market fit:** Matthew brings autonomous systems research from the Cambridge Mobile Robotics Lab directly applicable to drone AI and swarm coordination, combined with software engineering rigor from Jane Street. Alexander brings hands-on hardware expertise in embedded electronics and PCB design, with prior experience building EOD training hardware for military end-users—giving the team direct familiarity with military procurement processes and operational requirements. The combination covers the full hardware-software stack required for autonomous drone development.

## Key Risks

**Electronic warfare obsolescence cycle:** The rapid evolution of EW countermeasures in the Ukraine conflict means that drone designs can become operationally irrelevant within weeks. While Seeing Systems' modularity is designed to address this, the fibre-optic guided variant (Banshee) is one specific counter—future EW advances may require entirely new approaches that modular swaps cannot address.

**Defense procurement timelines vs. startup runway:** NATO defense procurement is notoriously slow, with qualification and contracting processes often taking years. With a 2-person team and $500K in YC funding, the company must secure additional funding or revenue before procurement cycles close. The company is currently shipping prototypes, not production units, to military partners.

**Well-funded competitor pressure:** Stark ($100M raised, unicorn valuation, €2.4B German armed forces contract), Shield AI ($5.6B valuation), and Anduril ($30.5B valuation) operate in overlapping segments with orders of magnitude more capital. Stark specifically targets the same expendable combat drone segment and has already secured large-scale national contracts, though it failed UK military trials in October 2025 (DroneXL, Oct 2025).

**ITAR/export control complexity:** Operating across multiple NATO forces (UK, and 4 others) with prototypes shipped to Ukraine involves navigating complex export control regimes (ITAR, UK Export Control Act, EU dual-use regulations). Compliance at scale requires legal infrastructure that a 2-person team may struggle to maintain.

**Hardware manufacturing scale-up:** Transitioning from prototype shipping to volume production of modular drone hardware requires manufacturing partnerships, supply chain management, and quality control—capabilities that typically require significant capital and operational expertise beyond software-centric teams.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $18.2B in 2025 for global military drones, 13.8% CAGR to 2035 (GM Insights, 2025); alternative estimate: $47.38B in 2025, 8.9% CAGR to 2033 (Grand View Research, 2025 via search snippet) |
| SAM | No public data found for low-cost modular strike drone sub-segment |
| Traction | UK Royal Marine Commandos + multiple UK units + 4 NATO forces as customers/partners (YC page); shipping prototypes to Ukraine (YC page); Operations Kull and Osprey documented (company website); 1,069 LinkedIn followers (LinkedIn, Mar 2026) |
| Revenue Signal | No public data found |
| Founders | Matthew Le Maitre (Software): Cambridge MEng CS, Jane Street SWE, Cambridge Mobile Robotics Lab. Alexander Le Maitre (Hardware): Self-taught embedded electronics, prior EOD hardware for military. |
| Competitors | Anduril ($30.5B valuation, revenue unknown, full-spectrum defense autonomy); Shield AI ($5.6B valuation, $240M raised Mar 2025, AI pilot software for larger aircraft); Stark ($100M raised, unicorn valuation, expendable combat drones, €2.4B German contract); Quantum Systems (€1B+ valuation, €160M Series C, ISR drones); Tekever (£1B+ valuation, UK RAF contract, surveillance drones) |
| Moat Signals | Modular hardware architecture; Aerie AI swarm software (in development); Forward Deployed Engineer model; existing relationships with UK Royal Marines and NATO forces |
| Risk Factors | Well-funded competitors in same segment, defense procurement timeline vs. startup runway, ITAR/export control complexity |
| Founder Reach | Matthew: Twitter @matthewlemaitre 2 followers, LinkedIn 500+ connections; Alexander: LinkedIn active, no personal Twitter found; Company: Twitter @S2_INC (count not retrievable), LinkedIn 1,069 followers |
| Distribution Signals | Direct military engagement via Forward Deployed Engineers (Fondo blog); Guernsey Press coverage (Feb 2026); Y Combinator W26 Launch Day (Feb 2026); no Product Hunt listing |
| Emails | founders@seeing-systems.com (YC page) |
