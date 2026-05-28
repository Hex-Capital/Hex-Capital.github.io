# matforge

> AI scientists to discover semiconductor materials

| Field | Value |
|-------|-------|
| Website | https://matforge.ai/ |
| YC Page | https://www.ycombinator.com/companies/matforge |
| Batch | Spring 2026 |
| Industry | Industrials / Industrials -> Energy |
| Team Size | 2 |
| Location | San Francisco, CA, USA |
| Tags | Artificial Intelligence, Advanced Materials, Semiconductors, AI |
| YC Partner | Aaron Epstein (YC company page) |
| Emails | No public data found |

## The Idea

- **Problem:** Semiconductor fabs and datacenters need novel materials (e.g., post-copper interconnects, thermal materials) as AI chip power/heat doubles yearly, but conventional lab discovery takes 10+ years (matforge.ai, YC page).
- **Approach:** A swarm of AI agents automates the materials-discovery workflow to compress 10+ year lab cycles into months, building on first-principles screening of compound metals demonstrated in Ramdas's PhD work that screened 15,000+ candidates (Wiley, Small, 2024).
- **Differentiation:** [Inferred]: Versus Citrine Informatics (materials informatics platform sold to enterprise R&D) and Orbital Materials (cleantech catalysts/sorbents, Orbital site), matforge targets the semiconductor interconnect/thermal vertical specifically; versus CuspAI (generative search engine across materials, SiliconAngle, Sep 2025), matforge claims an agentic-swarm architecture (matforge.ai).
- **Business Model:** No public data found on pricing; [Inferred]: enterprise contracts or co-development agreements with fabs/IDMs (e.g., Intel, TSMC), given Ramdas's prior materials adoption by both (YC page).
- **TAM/SAM:** Semiconductor materials market $80.79B in 2025 growing to $101.89B by 2030 at 4.75% CAGR (Mordor Intelligence); semiconductor interconnect sub-segment $9.17B in 2025 (Verified Market Reports); next-generation interconnect market $19.84B in 2024 → $54.10B by 2030 at 18.2% CAGR (NextMSC).
- **GTM / Distribution:** [Inferred]: Direct sales/co-development with fab customers (Intel, TSMC) leveraging Ramdas's existing roadmap relationships from his Stanford research (YC page).

## Defensibility

- **Moat today:** Founder-specific domain IP — peer-reviewed multi-objective screening method for post-Cu interconnects with CoPt validated ab initio and experimentally (Wiley, Small, 2024) and prior discoveries adopted into Intel/TSMC roadmaps (YC page).
- **Future moat:** [Inferred]: Proprietary training data from agent-run simulations and any lab-validated outputs could form a data moat; unproven now because the company is two months into YC with no announced experimental pipeline (YC page, matforge.ai).
- **Market structure:** [Inferred]: Fabs are conservative qualifying new materials and tie roadmaps to multi-year process-development partnerships, which raises switching costs once a vendor's material enters a node roadmap (general industry context; no public matforge contracts confirmed).
- **Commoditization risk:** Well-funded incumbents (CuspAI $130M total, Sifted/SiliconAngle 2025; Citrine $81.3M total, Tracxn; Orbital Materials ~$21M Series A + reported $200M Series B, Nordic9/salestools) already deploy generative materials models, and frontier labs (DeepMind's GNoME) publish in the same area.

## Market & Traction

- **Traction signals:**
  - No public revenue, user counts, paying customers, or press coverage found as of May 2026.
  - LinkedIn post by co-founder Advaith Sridhar tagged #ai #science #yc received 134 comments (LinkedIn activity 7449849011907485696).
  - Co-founder Akash Ramdas published peer-reviewed interconnect work in Small (Wiley, Apr 2024) and is indexed on Google Scholar.
  - No Product Hunt launch found (Product Hunt search, May 2026).
- **Competitors:**
  - CuspAI (~$130M raised incl. $100M Series A Sep 2025 co-led by NEA and Temasek, with NVentures/Samsung Ventures/Hyundai; revenue unknown, SiliconAngle, Sep 2025): general-purpose AI materials search engine across molecules/materials, not semiconductor-vertical-focused.
  - Orbital Materials ($16M Series A led by Radical Ventures + Toyota Ventures, Nordic9; reported $200M Series B at $1.2B valuation, Sep 2025, salestools.io; revenue unknown): focuses on cleantech (carbon sorbents, catalysts, water), not semiconductor interconnects.
  - Citrine Informatics ($81.3M total over 12 rounds, Tracxn; $20M Series B led by Prelude Ventures, BusinessWire, Oct 2019; revenue unknown): horizontal materials-informatics SaaS platform serving chemicals/materials enterprises, not vertically integrated for fab adoption.
  - Google DeepMind GNoME (internal Alphabet research, not a startup): published 2.2M crystal-structure predictions; competes on raw model capability but does not sell to fabs.
  - [Inferred]: Direct competitive set focused specifically on semiconductor interconnect/thermal materials is small; closest adjacents are horizontal materials-AI platforms above.
- **Why now:** AI chip power consumption and heat release reportedly doubling annually (matforge.ai, founder statement), combined with copper interconnects breaking down below 10 nm (Ramdas et al., Small, 2024), creates demand for post-Cu materials at exactly the moment that LLM-driven autonomous agents have become viable for long-horizon scientific workflows (co-founder Sridhar's prior work on long-horizon agents at Persona/Luma, LinkedIn).

## Founders & Team

- **Akash Ramdas (Co-founder & CEO):**
  - Background: Masters, PhD, and postdoc at Stanford in materials discovery for semiconductors (Stanford Profiles; Stanford PULSE Institute); first author on Wiley Small paper on multi-objective optimization for novel compound metals for interconnects, validating CoPt experimentally (Small, Apr 2024); discoveries reportedly adopted into Intel and TSMC roadmaps (YC page).
  - Twitter/X: No public account found.
  - LinkedIn: "Building Matforge | Stanford University" (linkedin.com/in/akashramdas).
  - GitHub: No public repos found.
- **Advaith Sridhar (Co-founder & CTO):**
  - Background: B.Tech IIT-Madras (Best Outgoing Student, matforge.ai); MS in Artificial Intelligence and Innovation, Carnegie Mellon University (msaii.cs.cmu.edu; LTI alumni 2024); founding applied scientist at Persona AI (acquired by Luma Labs early 2026), then research engineer at Luma Labs working on agent harnesses and frontier models (LinkedIn).
  - Twitter/X: No public account found.
  - LinkedIn: "Cofounder at matforge.ai (YC P26)" (linkedin.com/in/advaith-sridhar).
  - GitHub: No public repos found.
- **Co-founder relationship:** Founders state they have known each other for 11 years and co-authored a book (YC page).
- **Founder-market fit:** Ramdas brings published semiconductor-interconnect research adopted by Intel/TSMC roadmaps (YC page; Small, 2024) and Sridhar brings production experience building long-horizon autonomous agents at Persona AI/Luma Labs (LinkedIn) — pairing domain depth with agent-system engineering directly relevant to the stated approach; no advisors, board members, or named investors beyond YC found in public sources.

## Key Risks

- **Technical feasibility:** Compressing 10+ year materials qualification into months requires not just computational discovery but physical synthesis, characterization, and fab qualification; the public Ramdas et al. (Small, Apr 2024) work shows screening + single-compound experimental validation, not the full agentic end-to-end pipeline the company markets. No mitigation disclosed.
- **Well-capitalized competition:** CuspAI raised ~$130M including a $100M Series A in Sep 2025 (SiliconAngle) and Orbital Materials reportedly closed a $200M Series B at $1.2B valuation (salestools.io, Sep 2025), giving incumbents materially larger lab/compute budgets than a 2-person pre-seed team.
- **Long enterprise sales cycle:** Fab/IDM material qualification typically spans multiple node generations; converting Ramdas's Intel/TSMC roadmap relationships (YC page) into paying contracts may take years, straining runway against pre-seed capitalization (no funding disclosed beyond YC standard).
- **Key-person concentration:** Domain credibility is anchored in one founder's PhD research (Ramdas, Stanford/Small 2024); loss or distraction of that founder removes the primary published moat.
- **Name disambiguation:** "matforge" is a generic term; Phase 2 search returned no false-positive companies, but the YC company and matforge.ai domain are the only confirmed referents (verified against founder names and YC URL).

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | Semiconductor materials $80.79B in 2025, $101.89B by 2030, 4.75% CAGR (Mordor Intelligence, 2025) |
| SAM | Semiconductor interconnect $9.17B in 2025 (Verified Market Reports); next-gen interconnect $19.84B (2024) → $54.10B (2030) at 18.2% CAGR (NextMSC) |
| Traction | LinkedIn YC announcement post 134 comments (LinkedIn activity 7449849011907485696, 2026); founder publication in Small (Wiley, Apr 2024); no revenue, users, or press coverage found |
| Revenue Signal | No public data found |
| Founders | Akash Ramdas (CEO): Stanford PhD/postdoc in semiconductor materials, first-author Small (Wiley, 2024), discoveries in Intel/TSMC roadmaps. Advaith Sridhar (CTO): CMU MSAII, IIT-Madras Best Outgoing Student, founding applied scientist Persona AI (acquired Luma Labs 2026). |
| Competitors | CuspAI (~$130M raised, $100M Series A Sep 2025, revenue unknown; horizontal materials search, SiliconAngle). Orbital Materials ($16M Series A + reported $200M Series B at $1.2B valuation, revenue unknown; cleantech focus, Nordic9/salestools). Citrine Informatics ($81.3M total, revenue unknown; horizontal materials-informatics SaaS, Tracxn). DeepMind GNoME (Alphabet internal). |
| Moat Signals | Founder-published post-Cu interconnect screening method, CoPt experimentally validated (Small, Wiley, Apr 2024); prior materials adopted into Intel/TSMC roadmaps (YC page) |
| Risk Factors | Technical feasibility of agentic end-to-end discovery, well-funded competitors (CuspAI $130M, Orbital ~$216M), long fab qualification cycles |
| Founder Reach | Akash Ramdas: Twitter not found, LinkedIn count not retrievable, GitHub not found. Advaith Sridhar: Twitter not found, LinkedIn count not retrievable, GitHub not found. |
| Distribution Signals | No public data found (no Product Hunt launch, no press coverage, no app store presence as of May 2026) |
| Emails | No public data found |

Sources:
- [matforge — AI Scientists for Material Discovery](https://matforge.ai/)
- [matforge | Y Combinator](https://www.ycombinator.com/companies/matforge)
- [Multi-Objective Optimization for Rapid Identification of Novel Compound Metals for Interconnect Applications (Wiley, Small, 2024)](https://onlinelibrary.wiley.com/doi/abs/10.1002/smll.202308784)
- [Akash Ramdas — Stanford Profiles](https://profiles.stanford.edu/akash-ramdas)
- [Advaith Sridhar — CMU MSAII](https://msaii.cs.cmu.edu/people/222215978/advaith-sridhar)
- [Advaith Sridhar — LinkedIn](https://www.linkedin.com/in/advaith-sridhar/)
- [Akash Ramdas — LinkedIn](https://www.linkedin.com/in/akashramdas/)
- [CuspAI raises $100M Series A (SiliconAngle, Sep 2025)](https://siliconangle.com/2025/09/10/cuspai-raises-100m-build-ai-search-engine-transform-materials-science/)
- [CuspAI in talks to raise $200M at $1B+ valuation (TFN)](https://techfundingnews.com/cuspai-200m-unicorn-valuation-materials-ai/)
- [Citrine Informatics funding (Tracxn)](https://tracxn.com/d/companies/citrine-informatics/__OVyUkPfdQiRY9SN1pP739S6CyJuGZZOKcSBuZbZuKgA/funding-and-investors)
- [Orbital Materials $16M Series A (Nordic9)](https://nordic9.com/news/orbital-materials-raised-16-million-in-a-series-a-round-led-by-radical-ventures-and-compound-vc-with-participation-from-toyota-ventures-fly-vc/)
- [Orbital Materials $200M Series B (salestools.io)](https://salestools.io/en/blog/orbital-materials-raises-200m-series-b)
- [Semiconductor Materials Market — Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/semiconductor-materials-market)
- [Semiconductor Interconnect Market — Verified Market Reports](https://www.verifiedmarketreports.com/product/semiconductor-interconnect-market/)
- [Next-Generation Interconnect Market — NextMSC](https://www.nextmsc.com/report/next-generation-interconnect-market-se3849)
