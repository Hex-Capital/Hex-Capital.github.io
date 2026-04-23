# Standard Signal

> Hedge fund where AI researches and executes every trade

| Field | Value |
|-------|-------|
| Website | https://standardsignal.com |
| YC Page | https://www.ycombinator.com/companies/standard-signal |
| Batch | Spring 2026 |
| Industry | Fintech / Asset Management |
| Team Size | 1 |
| Location | New York, NY, USA |
| Tags | Finance, AI |
| YC Partner | Pete Koomen |
| Emails | founders@standardsignal.com |

## The Idea

**Problem:** Hedge funds rely on human portfolio managers and analysts to generate alpha, creating bottlenecks in research throughput, reaction time, and the number of trading pairs that can be monitored simultaneously. Traditional quantitative funds use statistical models but still depend on human-designed signals and strategies. [Inferred]: The target customer segment is institutional and high-net-worth limited partners seeking uncorrelated, market-neutral returns with AI-driven alpha generation.

**Approach:** Standard Signal trains and deploys proprietary financial LLM models that operate with full trading autonomy within strict risk parameters (standardsignal.com). The system uses chain-of-thought reasoning for multi-step analysis, monitors 2,847+ trading pairs in real-time, and executes trades at 12ms latency (standardsignal.com). The fund runs a market-neutral strategy and provides fully explainable decision-making with audit trails (standardsignal.com). The minimum LP investment is $100,000 (standardsignal.com).

**Differentiation:** Unlike traditional quant funds (Renaissance Technologies, Two Sigma) that rely on human-designed statistical signals, Standard Signal uses LLM-based reasoning models to autonomously generate and act on fundamental insights (standardsignal.com). Unlike Numerai, which crowdsources signals from thousands of external data scientists (Numerai blog, Nov 2025), Standard Signal trains proprietary models in-house. Unlike legacy AI trading efforts such as Sentient Technologies ($143M raised, dissolved 2019; Wikipedia), Standard Signal leverages the current generation of frontier LLMs rather than evolutionary computation.

**Business Model:** Structured as an LP hedge fund with a $100,000 minimum investment (standardsignal.com). [Inferred]: Most likely monetization follows the industry-standard 2-and-20 model (2% management fee, 20% performance fee), though specific fee structure is not publicly disclosed.

**TAM/SAM:** The global hedge fund industry held approximately $5.7 trillion in AUM in 2026, projected to reach $8.83 trillion by 2031 at a 9.12% CAGR (Mordor Intelligence, 2026). [Inferred]: The SAM would be the subset of hedge fund AUM allocated to systematic/quantitative strategies, which is a growing share but no public breakout specific to "AI-autonomous" funds was found.

**GTM / Distribution:** Job postings on the website list ML Research Engineer (NYC or SF) and Quantitative Researcher (NYC) roles with equity, profit sharing, and benefits (standardsignal.com). [Inferred]: Distribution likely follows institutional LP fundraising — direct outreach to family offices, endowments, and fund-of-funds, leveraging YC network and the founder's prior visibility from Phind.

## Defensibility

- **Proprietary model training:** Standard Signal trains custom financial LLMs in-house rather than using off-the-shelf models (standardsignal.com). [Inferred]: Proprietary training data pipelines and model architecture tuned to financial signals could constitute a compounding data/model moat if performance is sustained.
- **Performance track record:** The website claims a Sharpe ratio of 2.0+ (standardsignal.com). If verified over time, an audited track record is a significant barrier — institutional LPs weight multi-year track records heavily in allocation decisions.
- **Explainability:** The system provides audit trails for every trade decision (standardsignal.com). [Inferred]: This could be a regulatory advantage, as SEC scrutiny of AI-driven funds increases.

**Market structure:** [Inferred]: Large incumbent quant funds (Renaissance, Two Sigma, Citadel) have massive existing data infrastructure and talent, but their strategies are built on traditional statistical methods. Transitioning to LLM-based autonomous trading would require rearchitecting core investment processes, creating organizational inertia. However, no structural barrier (regulatory, business model cannibalization) prevents incumbents from adopting similar approaches — the barrier is primarily speed-of-adoption.

**Commoditization risk:** Open-source AI hedge fund frameworks exist (e.g., virattt/ai-hedge-fund on GitHub). Frontier LLMs are increasingly accessible. [Inferred]: The core risk is that well-funded quant funds or new entrants could replicate the LLM-based trading approach. The moat depends on proprietary training data, model performance, and accumulated track record rather than on the concept itself.

## Market & Traction

**Traction signals:**
- No AUM, investor count, or return data publicly disclosed (standardsignal.com, as of April 2026)
- Website claims Sharpe ratio of 2.0+ and coverage of 2,847+ trading pairs (standardsignal.com)
- Founder announced Standard Signal on X in April 2026 (x.com/MichaelRoyzen)
- Company Twitter/X: @StandardSignal (follower count not retrievable)
- Founder Twitter/X: @MichaelRoyzen — approximately 1,706 followers (X.com via search snippet)
- LinkedIn company page: not found in search results
- Job openings listed on website: ML Research Engineer, Quantitative Researcher (standardsignal.com)
- No Product Hunt listing found
- No press coverage in named publications found beyond the YC listing

**Competitive landscape:**

| Competitor | Funding | Differentiator vs. Standard Signal |
|---|---|---|
| **Numerai** | $30M Series C at $500M valuation (Numerai blog, Nov 2025); ~$550M AUM; 25.45% net return in 2024 | Crowdsources signals from thousands of external data scientists; uses encrypted tournament structure rather than proprietary in-house LLMs |
| **Rebellion Research** | Undisclosed | One of the first AI-only funds; uses Bayesian algorithms rather than LLMs; established track record since ~2007 |
| **Earthian AI** | Funding undisclosed (Tracxn, 2025) | Positions as "AI-native hedge fund" using autonomous reasoning models; more focused on climate/ESG data integration |
| **Renaissance Technologies** | Self-funded; ~$130B AUM | Gold standard quant fund; uses statistical/mathematical models, not LLMs; closed to new outside investors |

**Why now:**
- Frontier LLM capabilities crossed a threshold in 2024-2025, enabling multi-step reasoning chains that can perform financial analysis previously requiring human analysts (standardsignal.com references chain-of-thought reasoning).
- [Inferred]: The cost of LLM inference has dropped significantly (10-100x reduction in per-token costs over 2023-2025), making continuous autonomous trading across thousands of pairs economically viable for the first time.
- The hedge fund industry entered 2026 with the highest inflows in almost two decades (Barclays, 2026 Hedge Fund Outlook via search snippet), and institutional allocators are increasingly receptive to AI-native strategies.

## Founders & Team

**Michael Royzen** — Founder & CEO
- **Education:** UT Austin Turing Scholar, Class of 2022 (YC page, standardsignal.com)
- **Prior company:** Co-founder & CEO of Phind (YC S22), an AI search engine for developers that processed 150M+ searches (standardsignal.com). Phind raised $10.9M total, including a $10.4M round reported by Axios in December 2025 (Axios, Dec 2025 via search snippet). Phind grew 5-10% week-over-week in DAUs (Axios, Dec 2025 via search snippet). Co-founded with Justin Wei.
- **Industry experience:** NLP researcher at UT Austin; ML roles at Lyft, Cloudflare, and Microsoft (YC page, GeekWire)
- **Early career:** Built iOS apps from age 12; founded Mlab Technologies as a teen; created SmartLens (computer vision startup) in 2017; featured in GeekWire as "Geek of the Week" at age 16 (GeekWire, 2017); profiled by Wharton Global Youth Program (Wharton Global Youth)
- **Notable media:** Featured on Latent Space podcast ("Beating GPT-4 with Open Source LLMs," latent.space); AWS case study on Phind (aws.amazon.com)
- **Twitter/X:** @MichaelRoyzen — ~1,706 followers (X.com via search snippet)
- **LinkedIn:** linkedin.com/in/michaelroyzen — headline references Standard Signal (LinkedIn via search snippet)
- **GitHub:** github.com/michaelroyzen — 10 public repos (all forks), 24 followers (GitHub)

**Co-founder relationship:** Solo founder. No co-founder relationship applicable.

**Founder-market fit:** Royzen is a second-time YC founder who built and scaled an AI product (Phind) to 150M+ searches, demonstrating ability to train and deploy production LLMs at scale. His ML research background (UT Austin NLP, Microsoft, Lyft, Cloudflare) and experience training "the best-performing coding LLMs of 2023-2024" (standardsignal.com) provide direct technical credibility for building proprietary financial LLMs. The transition from developer-focused AI search to financial AI represents a domain shift, however — no prior hedge fund or quantitative finance experience is documented in public sources.

## Key Risks

**Solo founder with domain transition risk:** Royzen's background is in NLP/search (Phind), not quantitative finance. Building a hedge fund requires expertise in risk management, portfolio construction, regulatory compliance (SEC registration, LP reporting), and institutional fundraising — all distinct from building a consumer AI product. No co-founder or senior hire with quant finance background has been publicly announced. The website lists open roles (ML Research Engineer, Quantitative Researcher) that would address this gap, but these are unfilled at time of research (standardsignal.com).

**Regulatory and compliance burden:** Operating a hedge fund in the US requires SEC registration, compliance with the Investment Advisers Act, LP reporting obligations, and potentially CFTC oversight depending on instruments traded. An autonomous AI making all trading decisions introduces novel regulatory questions around fiduciary duty and algorithmic accountability. No compliance team or legal counsel is publicly listed.

**Performance verification:** The website claims a Sharpe ratio of 2.0+ but provides no time period, auditor, or context for this figure (standardsignal.com). Institutional LPs typically require third-party audited track records of 12-24+ months before allocating capital. Simulated or short-window results may not translate to live performance.

**Name collision and discoverability:** "Standard Signal" shares semantic overlap with multiple existing financial entities ("Signal Capital," "Signal Securities," "Signal Fund Services") found in LinkedIn search results. This could create brand confusion in institutional fundraising.

**Phind departure context unclear:** The circumstances of Royzen's departure from Phind (an active company that raised $10.4M in December 2025) to launch Standard Signal in Spring 2026 are not publicly documented. LPs may scrutinize this transition during due diligence.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | $5.7T global hedge fund AUM in 2026, projected $8.83T by 2031 at 9.12% CAGR (Mordor Intelligence, 2026) |
| SAM | No public data found |
| Traction | No public data found |
| Revenue Signal | $100,000 minimum LP investment (standardsignal.com); fee structure not disclosed |
| Founders | Michael Royzen (Founder & CEO): UT Austin Turing Scholar '22, previously co-founder & CEO of Phind (YC S22, $10.9M raised, 150M+ searches), ML at Lyft/Cloudflare/Microsoft |
| Competitors | Numerai ($30M raised, $500M valuation, $550M AUM, crowdsourced AI signals), Rebellion Research (undisclosed funding, Bayesian AI-only fund), Earthian AI (undisclosed funding, AI-native hedge fund), Renaissance Technologies (self-funded, ~$130B AUM, statistical/math models) |
| Moat Signals | No public data found |
| Risk Factors | Solo founder with no documented quant finance background, unaudited performance claims, Phind departure context unclear |
| Founder Reach | Michael Royzen: Twitter/X ~1,706 followers, LinkedIn profile active, GitHub 24 followers (X.com, LinkedIn, GitHub via search) |
| Distribution Signals | No public data found |
| Emails | founders@standardsignal.com (standardsignal.com) |
