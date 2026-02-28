# Inviscid AI

> Real-time Building Simulations to Optimize Energy and Operational?

| Field | Value |
|-------|-------|
| Website | https://inviscidai.com/ |
| YC Page | https://www.ycombinator.com/companies/inviscid-ai |
| Batch | Winter 2026 |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 2 |
| Location | San Francisco, CA, USA; Remote |
| Tags | Warehouse Management Tech, IoT, Sustainability, Proptech |

## The Idea

**Problem:** Commercial buildings and data centers consume substantial energy through HVAC systems, with suboptimal airflow creating dead zones, uneven thermal distribution, and excessive mechanical load. Facilities managers currently rely on rule-based building management systems (BMS) or purely data-driven approaches that optimize against historical patterns rather than physics-based understanding. Traditional computational fluid dynamics (CFD) simulations—the gold standard for airflow modeling—take weeks to complete, making real-time operational optimization infeasible.

**Approach:** Inviscid AI uses physics-informed neural networks (PINNs) to accelerate CFD simulations by orders of magnitude—claiming 1000x faster processing with 95%+ accuracy compared to traditional methods (inviscidai.com). The platform ingests real-time IoT sensor data, combines it with CFD modeling to create digital twins of buildings, and autonomously optimizes HVAC operations. The system simulates airflow patterns, ventilation strategies, and thermal dynamics to optimize energy consumption, reduce cooling costs, and predict equipment maintenance needs. Case studies on the website cite 240x faster HVAC vent optimization with 40% improved airflow, 150+ design iterations for coastal infrastructure with 13% stress reduction, and 600x faster storm surge forecasting with 3x accuracy improvement (inviscidai.com).

**Differentiation:** The "physics-first" approach distinguishes Inviscid AI from purely data-driven HVAC optimization platforms (e.g., BrainBox AI, 75F) that rely on historical patterns and sensor correlations. Unlike rule-based BMS systems from incumbents like Johnson Controls or Honeywell, the physics-informed neural network approach can model novel conditions the building has not previously encountered. Compared to traditional CFD consulting (e.g., SimScale), the speed advantage (1000x claimed) enables real-time operational use rather than periodic design studies.

**Business Model:** No public pricing page found on inviscidai.com. [Inferred]: Most likely monetization path is SaaS subscription per building or per square footage, potentially with a professional services component for initial digital twin setup, given the enterprise nature of the customer and the need for per-building calibration.

**TAM/SAM:** The AI-powered digital twin HVAC tuner market was valued at $1.09 billion in 2024, growing to $1.34 billion in 2025 at a 23.1% CAGR (The Business Research Company, 2025 via search snippet). The broader building digital twin market reached $3.30 billion in 2024, projected to $21.85 billion by 2032 at 26.95% CAGR (DataM Intelligence, 2025 via search snippet). The overall digital twin market was valued at $13.6 billion in 2024 with 41.4% CAGR through 2034 (GM Insights, 2025 via search snippet).

**GTM / Distribution:** [Inferred]: Most likely distribution path is direct enterprise sales to facilities managers and building operations teams at large commercial real estate portfolios and data center operators. The Singapore origin (noted on Extruct AI and GitHub organization location) and San Francisco presence suggest a dual APAC/US go-to-market. The contact email on the website (kabir@inviscidai.com) and phone number suggest direct founder-led sales at this stage.

## Defensibility

The core technical moat is in physics-informed neural networks applied to building CFD—a niche requiring combined expertise in computational physics, machine learning, and building science. The company's approach requires training neural networks that respect physical laws (conservation of mass, energy, momentum), which is a specialized skill set at the intersection of numerical methods and deep learning.

Data advantage could develop over time as the platform accumulates building performance data across deployments, improving model accuracy and reducing calibration time for new installations. Each building's digital twin represents switching costs once integrated with the building's BMS and IoT infrastructure.

**Market structure:** Traditional BMS incumbents (Honeywell, Johnson Controls, Siemens) sell hardware-bundled control systems. Offering physics-based AI optimization that replaces or augments their control logic creates a sales channel conflict—incumbents would need to acknowledge their existing control algorithms are suboptimal. However, Trane Technologies' acquisition of BrainBox AI (December 2024) (BetaKit via search snippet) signals incumbents are willing to acquire rather than build AI capabilities, which reduces the structural barrier. PassiveLogic has attracted Johnson Controls as an investor in its $74M Series C (PRNewswire, September 2025 via search snippet), further suggesting incumbents prefer partnership/investment to internal development.

**Commoditization risk:** Physics-informed neural networks for fluid dynamics are an active academic research area. PhysicsX (London, ~$170M total funding) applies similar physics-AI techniques to engineering simulation broadly. PassiveLogic ($125M+ total funding) builds physics-based digital twins specifically for building autonomy. Large simulation software companies (ANSYS, Siemens Digital Industries) have resources to incorporate PINNs into existing CFD tools. The technical barrier is moderate—the method is published in academic literature—but productizing it for real-time building operations with BMS integration adds applied-engineering complexity.

## Market & Traction

**Traction signals:** No public revenue, customer count, or user metrics found. The company website lists three case studies with performance claims (240x faster HVAC optimization, 150+ design iterations, 600x faster storm surge forecasting) but does not name specific customers (inviscidai.com). No Product Hunt listing found. No press coverage in named publications found. Company LinkedIn page exists at linkedin.com/company/inviscid-ai (follower count not retrievable). GitHub organization (github.com/InviscidAI) has 1 public repository—a fork of PyMesh (geometry processing library), with 0 original repos and no star activity (GitHub). No Discord or Slack community found. No app store presence found. No active job postings found (YC page, 0 jobs listed). The company was founded in 2025 (YC page).

**Competitive landscape:**

- **PassiveLogic** ($125M+ raised, $15M annual revenue as of July 2025 per Tracxn via search snippet): Builds generalized autonomy platform for buildings using physics-based digital twins, includes proprietary hardware (Sense Nano sensors) and mobile app for creating digital twins. Broader scope than HVAC-only; focuses on full building autonomy. Key differentiator vs. Inviscid AI: hardware+software integrated stack and larger feature set covering all building systems.

- **BrainBox AI** ($103M raised, acquired by Trane Technologies December 2024, ~€1.06M revenue FY2023 per Tracxn via search snippet): AI-powered HVAC optimization for commercial real estate using cloud-based predictive control. Purely data-driven (not physics-based). Key differentiator vs. Inviscid AI: now integrated into Trane's global distribution and hardware ecosystem; Inviscid AI's physics-informed approach claims ability to handle novel conditions that data-driven methods cannot.

- **75F** ($81.3M raised, ~₹59.1 Cr / ~$7M revenue FY2024 per Tracxn via search snippet): IoT-based smart building automation with AI-driven HVAC optimization. Deployed across 1,800+ installations in nine countries (GlobeNewsWire, February 2025 via search snippet). Key differentiator vs. Inviscid AI: established install base and own IoT hardware; Inviscid AI differentiates on physics-based simulation depth.

- **PhysicsX** (~$170M raised, revenue "more than quadrupled over two years" per company press release June 2025): Physics-informed AI for engineering simulation across aerospace, automotive, and manufacturing. Does not focus specifically on buildings/HVAC. Key differentiator vs. Inviscid AI: broader industrial scope rather than building-specific; Inviscid AI is more vertically focused on building operations.

**Why now:** [Inferred]: Several converging factors: (1) Physics-informed neural networks have matured as a research field, with foundational papers (Raissi et al., 2019) now well-established and production-quality implementations emerging; (2) IoT sensor costs have continued declining, making dense building instrumentation economically viable; (3) Energy costs and ESG/sustainability regulations are tightening globally, increasing building operators' ROI from HVAC optimization; (4) Data center construction has surged due to AI workload demand, creating a high-value new customer segment where cooling represents 30-40% of total energy costs; (5) NVIDIA's investment in physics AI (NVentures investing in both PhysicsX and PassiveLogic) validates the category.

## Founders & Team

**Kabir Jain** — Co-founder
- Student at NUS High School (Singapore). Gold medalist in the Scientific Round of the inaugural International Olympiad in Artificial Intelligence (IOAI), held in Burgas, Bulgaria, August 2024 — one of two gold-winning Singapore teams out of 40+ competing teams (NTU Singapore news release, August 2024). Described as 19 years old (Instagram post via search snippet). Contact email on company website: kabir@inviscidai.com.
- Twitter/X: @kabirj_ found via search; follower count not retrievable due to JavaScript rendering.
- LinkedIn: sg.linkedin.com/in/kabir-jain-inviscid-ai-yc (profile content not accessible).
- GitHub: No personal public repos found.

**Ziming Qiu** — Co-founder
- 5th-year PhD student in Electrical and Computer Engineering (ECE) at NYU Tandon School of Engineering (NYU Tandon website; personal website ziming-qiu.github.io). Research interests in computer vision, machine learning, and image analysis. Published research on camera pose estimation (arXiv:2111.14741) and medical image segmentation (IEEE). Google Scholar profile: scholar.google.com/citations?user=qaCIB_QAAAAJ.
- Twitter/X: No public account found.
- LinkedIn: linkedin.com/in/qiu-ziming and sg.linkedin.com/in/qiu-ziming-1b746a276 (profile content not accessible).
- GitHub: github.com/ziming-qiu — 8 public repos, 0 stars, 1 follower. Repos focus on ultrasound image segmentation and NLP projects (GitHub).

**Co-founder relationship:** No shared employer or university overlap identified from available data. Kabir Jain attended NUS High School in Singapore; Ziming Qiu is a PhD student at NYU. The GitHub organization for Inviscid AI lists its location as Singapore, suggesting they may have connected through Singapore-based networks.

**Founder-market fit:** Ziming Qiu brings PhD-level expertise in machine learning and neural networks, relevant to the core physics-informed AI technology. His research on medical image segmentation involves numerical methods transferable to CFD neural networks. Kabir Jain's IOAI gold medal demonstrates strong AI/ML competition performance. However, neither founder has documented prior experience in building science, HVAC systems, or facilities management. The YC page lists Ankit Gupta as the "Primary Partner" (YC group partner), but no advisors with building science domain expertise were identified in public sources.

## Key Risks

**Domain expertise gap:** Neither founder has documented background in building science, HVAC engineering, or facilities management. The product requires deep knowledge of building mechanical systems, BMS protocols (BACnet, Modbus), and HVAC controls. Without a domain expert on the team or advisory board, customer credibility and product-market fit development may be slower.

**Late-stage competition with funded incumbents:** PassiveLogic ($125M+), BrainBox AI (acquired by Trane Technologies), 75F ($81.3M), and PhysicsX (~$170M) are well-capitalized competitors in overlapping spaces. PassiveLogic and PhysicsX specifically use physics-based approaches. Trane Technologies' acquisition of BrainBox AI gives that technology access to a global HVAC distribution channel that a 2-person pre-seed startup cannot match.

**Case study provenance unclear:** The three case studies on the website (HVAC vent optimization, coastal infrastructure, storm surge forecasting) span disparate domains (buildings, coastal engineering, meteorology). The coastal infrastructure and storm surge use cases are not aligned with the stated building/data center focus. This may indicate these are academic or pre-company demonstrations rather than commercial deployments, and the current building-focused product may be earlier stage than the case studies suggest.

**Enterprise sales cycle vs. team capacity:** Building HVAC optimization requires integration with existing BMS infrastructure, on-site sensor deployment, and calibration—all requiring enterprise sales, technical implementation, and ongoing support. A 2-person team handling product development, sales, deployment, and support simultaneously faces significant bandwidth constraints for enterprise deals.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $1.09B AI-powered digital twin HVAC tuner market in 2024, 23.1% CAGR (The Business Research Company, 2025 via search snippet); $3.30B building digital twin market in 2024, 26.95% CAGR (DataM Intelligence, 2025 via search snippet) |
| SAM | No public data found |
| Traction | No public data found. Three case studies on website without named customers (inviscidai.com) |
| Revenue Signal | No public data found |
| Founders | Kabir Jain (Co-founder): NUS High School, IOAI Gold Medalist 2024. Ziming Qiu (Co-founder): NYU ECE PhD candidate, ML/CV researcher |
| Competitors | PassiveLogic ($125M+ raised, $15M ARR, physics-based building autonomy platform with hardware); BrainBox AI ($103M raised, acquired by Trane Dec 2024, data-driven HVAC AI); 75F ($81.3M raised, ~$7M revenue, IoT smart building automation with 1,800+ deployments); PhysicsX (~$170M raised, revenue unknown, broader physics-AI for engineering) |
| Moat Signals | Specialized physics-informed neural network approach for building CFD; potential data moat from per-building digital twins over time |
| Risk Factors | No documented building/HVAC domain expertise on founding team, well-funded competitors in overlapping space (PassiveLogic, PhysicsX), case studies span non-building domains suggesting early product stage |
| Founder Reach | Kabir Jain: Twitter @kabirj_ (count not retrievable), LinkedIn (not accessible), GitHub not found. Ziming Qiu: Twitter not found, LinkedIn (not accessible), GitHub 0 stars |
| Distribution Signals | No public data found |
