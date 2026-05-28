# Standard Signal

> Hedge fund where AI researches and executes every trade

| Field | Value |
|-------|-------|
| Website | https://standardsignal.com |
| YC Page | https://www.ycombinator.com/companies/standard-signal |
| Batch | Spring 2026 (P26) |
| Industry | Fintech / Fintech -> Asset Management |
| Team Size | 1 |
| Location | New York, NY, USA |
| Tags | Finance, AI |
| YC Partner | Pete Koomen (YC page) |
| Emails | founders@standardsignal.com (company website) |

## The Idea

- **Problem:** Discretionary and traditional quant hedge funds cannot process the breadth of real-time fundamental signals (geopolitical, macro, multi-asset) in time to act on them; LP-investors currently access this via human-managed or rule-based quant funds (standardsignal.com).
- **Approach:** Frontier financial LLMs trained for chain-of-thought reasoning over equities, commodities, forex and derivatives, with autonomous execution within risk constraints and full decision audit trails; the site cites coverage of "2,847+ asset pairs" and "12ms latency on signal detection" (standardsignal.com).
- **Differentiation:** Numerai crowdsources predictions from external data scientists and ensembles them, whereas Standard Signal centralizes a proprietary LLM stack with end-to-end autonomous execution (cbinsights.com; standardsignal.com); QuantConnect and the former Quantopian provided tooling/platforms for human quants rather than running a fund themselves (cbinsights.com).
- **Business Model:** LP investment into a hedge fund vehicle, $100,000 minimum, market-neutral strategy targeting Sharpe 2.0+ (standardsignal.com); [Inferred]: standard hedge-fund management + performance fees, though specific fee terms not disclosed publicly.
- **TAM/SAM:** No public TAM/SAM data found for this specific segment; for reference, Numerai secured "half a billion dollars in capacity from JPMorgan" indicating institutional appetite for AI-run strategies (ainvest.com, 2026).
- **GTM / Distribution:** [Inferred]: Direct LP outreach to accredited/qualified investors via founder network and YC channels, given $100K minimum and LP fund structure (standardsignal.com).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond proprietary model training claims; founder cites prior experience training "top coding LLMs (2023-2024)" through Phind (standardsignal.com).
- **Future moat:** [Inferred]: Proprietary trading data and model fine-tuning loop from live execution could compound; unproven now because the fund has no disclosed live track record.
- **Market structure:** [Inferred]: Traditional discretionary funds face talent and culture conflict adopting autonomous LLM execution; large quant funds (Renaissance, Two Sigma) have established model stacks unlikely to be displaced — no public evidence of a structural lock-in for Standard Signal.
- **Commoditization risk:** Open-weight financial LLMs and frameworks (e.g., FinGPT) plus quant platforms (QuantConnect) lower the barrier for other AI-native funds; Alinea raised $22.5M in Feb 2026 in adjacent AI-finance space (tracxn.com via search snippet).

## Market & Traction

- **Traction signals:**
  - Y Combinator Spring 2026 (P26) batch participant (ycombinator.com)
  - Solo team of 1, no disclosed AUM or live performance (ycombinator.com; standardsignal.com)
  - Twitter launch post by founder announcing @StandardSignal (x.com/MichaelRoyzen/status/2039801841253564837; follower count not retrievable, fetch returned 402)
  - Two open roles posted: ML Research Engineer (NYC/SF), Quantitative Researcher (NYC) (standardsignal.com)
  - No Product Hunt launch, press coverage, or Crunchbase funding round found (search results, May 2026)
- **Competitors:**
  - Numerai ($42.8M raised across 6 rounds, revenue undisclosed): crowdsourced data-scientist ensemble vs. Standard Signal's centralized proprietary LLM; reported 25%+ net returns 2024 and $500M JPMorgan capacity (tracxn.com; ainvest.com)
  - QuantConnect (revenue unknown, funding not specified in snippets): algorithmic trading platform for human quants, not an AI-run fund (cbinsights.com)
  - Alinea ($22.5M raised Feb 2026, revenue unknown): consumer AI-finance product, adjacent rather than directly competitive on hedge-fund vehicle (tracxn.com via search snippet)
  - Quantopian (shut down 2020): historical comparable that closed due to weak returns, illustrating execution risk in algorithmic funds (cbinsights.com)
- **Why now:** [Inferred]: Reasoning-capable LLMs and long-context models reached a threshold in 2024-2025 enabling multi-asset chain-of-thought analysis at sub-second latency; YC explicitly issued a "AI-Native Hedge Funds" Request for Startups in Spring 2026 (modelence.com).

## Founders & Team

- **Michael Royzen (Founder & CEO):**
  - Background: UT Austin Turing Scholar '22; co-founder & CEO at Phind (YC S22), an AI search engine for developers that reached "150M+ searches" per founder's site (linkedin.com/in/michaelroyzen; standardsignal.com; aws.amazon.com case study); prior ML roles at Lyft, Cloudflare, Microsoft (linkedin.com); Microsoft Research intern at age 17 (humanloop.com)
  - Twitter/X: @MichaelRoyzen (joined Feb 2015; count not retrievable — direct fetch failed with 402)
  - LinkedIn: "Founder & CEO at Standard Signal (YC P26)" (linkedin.com/in/michaelroyzen)
  - GitHub: @michaelroyzen, 24 followers, 10 repos (mostly forks: onnx, popper, neural); no original repo with notable star count visible (github.com/michaelroyzen)
- **Co-founder relationship:** Solo founder — no co-founder (ycombinator.com; standardsignal.com).
- **Founder-market fit:** [Inferred]: Founder has demonstrated LLM productization through Phind (YC-backed, Paul Graham-backed per humanloop.com) but no public hedge-fund, trading, or quantitative finance employment history found in search results — fit is on the AI/ML side rather than the asset-management side.

## Key Risks

- **No live performance track record:** The site advertises 87.3%-94.2% "confidence levels" and Sharpe 2.0+ target but no realized returns, AUM, or backtest methodology is publicly disclosed (standardsignal.com); LP fundraising at $100K minimums typically requires audited performance, and Quantopian shut in 2020 over "weak returns" (cbinsights.com).
- **Regulatory and structural risk for autonomous trading:** Operating a hedge fund where AI executes trades autonomously requires SEC/CFTC registration, qualified custodian arrangements, and compliance infrastructure; no public evidence of registrations or legal/compliance team (standardsignal.com lists only ML/quant roles); no mitigation found.
- **Solo founder with no disclosed quant-finance background:** Founder's prior experience is in AI search (Phind) and ML engineering at Lyft/Cloudflare/Microsoft, not portfolio management or trading (linkedin.com); hedge-fund operations typically require complementary trading/risk/ops expertise.
- **Technical feasibility of LLM alpha generation:** Public claims of LLM-driven alpha at scale are largely unverified industry-wide; Numerai's reported 25% 2024 net returns used ensembled crowdsourced models, not a single proprietary LLM (ainvest.com), and no published research validates the specific chain-of-thought trading approach Standard Signal markets.
- **Name disambiguation:** Multiple unrelated entities use "Signal" in fund/finance contexts (Signal volatility fund per hedgeweek.com; SIGNAL Beacon Strategy per thehedgefundjournal.com; Signals VC per crunchbase.com) — third-party metrics for "Signal" should not be attributed to Standard Signal.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | YC Spring 2026 batch participant (ycombinator.com); 2 open roles posted (standardsignal.com); founder launch tweet via @MichaelRoyzen (x.com, 2026); no Product Hunt, press, or Crunchbase funding entry found |
| Revenue Signal | $100,000 LP minimum, market-neutral strategy targeting Sharpe 2.0+ (standardsignal.com); fee structure not disclosed |
| Founders | Michael Royzen (Founder & CEO): co-founder Phind YC S22, UT Austin Turing Scholar '22, prior ML at Lyft/Cloudflare/Microsoft |
| Competitors | Numerai ($42.8M raised across 6 rounds, 25%+ net returns 2024, $500M JPMorgan capacity, crowdsourced ensemble vs. proprietary LLM); QuantConnect (funding unknown, revenue unknown, platform for human quants); Alinea ($22.5M Feb 2026, revenue unknown, adjacent consumer AI-finance); Quantopian (shut down 2020, comparable cautionary case) |
| Moat Signals | No public data found beyond founder's prior LLM-training experience at Phind (standardsignal.com) |
| Risk Factors | No live performance track record, regulatory/compliance overhead for autonomous trading, solo founder without prior quant-finance experience |
| Founder Reach | Michael Royzen: Twitter @MichaelRoyzen (count not retrievable, fetch 402), LinkedIn "Founder & CEO at Standard Signal (YC P26)" (linkedin.com/in/michaelroyzen), GitHub @michaelroyzen 24 followers, 10 repos mostly forked (github.com/michaelroyzen) |
| Distribution Signals | No public data found |
| Emails | founders@standardsignal.com (standardsignal.com) |

Sources:
- [Standard Signal — AI Hedge Fund](https://standardsignal.com/)
- [Standard Signal | Y Combinator](https://www.ycombinator.com/companies/standard-signal)
- [Michael Royzen on X — launch announcement](https://x.com/MichaelRoyzen/status/2039801841253564837)
- [Michael Royzen — LinkedIn](https://www.linkedin.com/in/michaelroyzen/)
- [michaelroyzen — GitHub](https://github.com/michaelroyzen)
- [Phind | Y Combinator](https://www.ycombinator.com/companies/phind)
- [Phind AWS case study](https://aws.amazon.com/solutions/case-studies/phind-case-study/)
- [Building the First LLM Search Engine — Humanloop](https://humanloop.com/blog/building-the-first-llm-search-engine)
- [Numerai — Tracxn](https://tracxn.com/d/companies/numerai/__QqHEMPOebJQQh8_uR7F5JoWQO4xt2RpgUfTSEhzgWLc)
- [Top Numerai Alternatives — CB Insights](https://www.cbinsights.com/company/numerai/alternatives-competitors)
- [Top Quantopian Alternatives — CB Insights](https://www.cbinsights.com/company/quantopian/alternatives-competitors)
- [Hedge Fund Innovation and AI-Driven Alpha in 2026 — Ainvest](https://www.ainvest.com/news/hedge-fund-innovation-ai-driven-alpha-2026-numerai-coatue-reshaping-industry-2512/)
- [AI-Native Hedge Funds — YC RFS Spring 2026](https://modelence.com/yc-rfs-spring-2026/ai-native-hedge-funds)
