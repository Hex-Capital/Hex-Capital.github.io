# Linzumi

> Direct your AI engineering team from one team chat

| Field | Value |
|-------|-------|
| Website | https://linzumi.com |
| YC Page | https://www.ycombinator.com/companies/linzumi |
| Batch | Spring 2026 (YC page) |
| Industry | B2B / B2B -> Engineering, Product and Design |
| Team Size | 3 |
| Location | San Francisco, CA, USA |
| Tags | Developer Tools, Chat, AI |
| YC Partner | Garry Tan (YC page) |
| Emails | hello@linzumi.com (linzumi.com) |

## The Idea

- **Problem:** Engineering teams running multiple AI coding agents in parallel lack shared visibility and control; current alternatives are local terminal agents (e.g., Claude Code) or cloud sandboxes (e.g., Devin) where work is siloed per developer (linzumi.com).
- **Approach:** Linzumi puts a fleet of coding agents inside team chat channels, where teammates kick off, review, ship, and unblock agents from mobile or desktop, with directory-level permissions, session-scoped port forwarding, human gates for sensitive ops, and audit logs (linzumi.com).
- **Differentiation:** Versus Devin/Cognition (cloud sandbox, per-user) and Cursor/Claude Code (IDE/terminal, single-developer), Linzumi positions as multi-player chat with shared visibility; the product also "compiles" team decisions into a source-of-truth spec that generates and verifies agent work via "deliberative alignment" (linzumi.com, YC page).
- **Business Model:** $100/month for unlimited agents and team members (pricing on linzumi.com).
- **TAM/SAM:** No public TAM/SAM data found for this specific segment.
- **GTM / Distribution:** [Inferred]: Founder-led developer distribution via Sean Grove's public profile (OpenAI "New Code" talks, AI Engineer World's Fair 2025 keynote) and YC network; LinkedIn page shows "coming soon" / waitlist status as of Q1 2026 (linkedin.com/company/linzumi).

## Defensibility

- **Moat today:** No defensibility signals found in public sources beyond founder reputation and seed-investor syndicate (linzumi.com lists Matrix, SV Angel, Decibel, Pioneer Fund, Axiom Partners, YC).
- **Future moat:** [Inferred]: The "decisions compile into a source of truth" mechanism (YC page) could create switching costs as a team's accumulated spec becomes its operating manual for agents; unproven because the product is pre-launch / waitlist (linkedin.com/company/linzumi).
- **Market structure:** [Inferred]: Chat-native, multi-player workflow may be structurally awkward for incumbents like Cognition/Devin and Cursor whose surfaces are per-user (cloud task UI or IDE) and whose pricing is per-seat; no public confirmation of this thesis.
- **Commoditization risk:** Slack/Teams bots wrapping Claude Code, Devin, or Codex could replicate the chat surface; Cognition's Devin already ships a Slack integration referenced in its product docs (cognition.ai) — barrier is execution on the spec/alignment layer, not the chat layer.

## Market & Traction

- **Traction signals:**
  - Company X/Twitter handle @linzumi_ai exists; follower count not retrievable (account fetch returned HTTP 402).
  - LinkedIn company page: 79 followers, status "coming soon" / waitlist phase (linkedin.com/company/linzumi).
  - GitHub org github.com/Linzumi exists with no public members listed (github.com/Linzumi via search snippet).
  - YC page lists 0 open jobs (ycombinator.com/companies/linzumi).
  - No Product Hunt launch found (Product Hunt search returned no Linzumi result).
  - No press coverage found in TechCrunch, Bloomberg, or other named outlets.
  - Seed-stage backers named on website: Y Combinator, Matrix, SV Angel, Decibel, Pioneer Fund, Axiom Partners (linzumi.com); no disclosed round size.
- **Competitors:**
  - Cognition (Devin) ($2B+ raised cumulatively; $1B round at $26B post-money May 2026 led by Lux/General Catalyst/8VC, $492M ARR — TechCrunch, Bloomberg, May 2026): autonomous cloud agent, per-seat IDE+cloud product; not chat-native multi-player.
  - Factory.ai ($215M+ raised; $150M Series C April 2026 at $1.5B valuation led by Khosla, revenue "doubling MoM" — TechCrunch, Apr 2026): enterprise "Droids" used by Nvidia, Adobe, Adyen; IDE/CLI-anchored vs. chat-anchored.
  - Cursor (Anysphere) (revenue/funding unknown in this query; pricing $20–$200/mo per seat — buildbetter.ai/marktechpost, 2026): IDE-native single-developer agent.
  - Claude Code (Anthropic; revenue not separately disclosed): terminal-based single-developer agent (blink.new/blog 2026).
  - Windsurf (acquired by Cognition July 2025, financial terms undisclosed — techcrunch.com 2026): agentic IDE, now folded into Devin.
- **Why now:** [Inferred]: Cognition's reported usage growth (50% MoM for six months per TechCrunch May 2026) and Factory's "double MoM revenue" (factory.ai/news/series-c) indicate enterprise teams are running multiple agents in parallel, surfacing a coordination gap that chat-native tooling targets.

## Founders & Team

- **Sean Grove (Founder):**
  - Background: Founded OneGraph (YC W19; acquired by Netlify 2021), then Principal Architect at Netlify; team at Global Illumination/OpenAI association per riseos.com and LinkedIn; spent time at OpenAI on post-training, alignment reasoning, model-spec infrastructure, and "deliberative alignment" (aisummitseoul.com, the-decoder.com, 2025); keynoted AI Engineer World's Fair 2025 ("The New Code") (linkedin.com posts, Jul 2025).
  - Twitter/X: @sgrove, ~5,565 followers (per search snippet, 2026).
  - LinkedIn: "Thinker at Linzumi🐭" (linkedin.com/in/segrove).
  - GitHub: @sgrove, 489 followers (search snippet); no Linzumi-attributed public repo with star count found.
- **Other co-founders (2 of 3 unidentified):** YC page lists only Sean Grove publicly; one search snippet mentioned "Assil Halimi and Drew Walker" in connection with a launch but neither could be confirmed as a Linzumi co-founder — the only public "Assil Halimi" with traceable footprint is an MIT nuclear-engineering PhD/Apollo Atomics CEO (mit.edu, rocketreach.co), almost certainly unrelated; no public Drew Walker LinkedIn matches Linzumi. No public data found on the other two team members.
- **Co-founder relationship:** No public data on co-founder history.
- **Founder-market fit:** Sean Grove's stack of OneGraph (developer tooling, acquired by Netlify) plus OpenAI model-spec / deliberative-alignment work (the-decoder.com, 2025) maps directly to Linzumi's pitch of "deliberative alignment, repurposed from aligning LLMs to aligning companies" (YC page); YC Group Partner is Garry Tan (YC page).

## Key Risks

- **Incumbent substitution by Cognition/Factory:** Devin already integrates with Slack and Cognition's revenue is at $492M ARR growing 50% MoM (TechCrunch, May 2026); Factory's enterprise base includes Nvidia/Adobe/Adyen (factory.ai, Apr 2026). A chat layer is a feature these incumbents can ship; mitigation evidence not public.
- **Pre-launch traction gap:** LinkedIn company page describes "coming soon" / waitlist (linkedin.com/company/linzumi, 79 followers); no Product Hunt launch, no press coverage, no disclosed user counts — execution risk is unhedged by public traction.
- **Team opacity:** Only 1 of 3 team members is publicly identifiable (YC page, LinkedIn); two co-founder names surfaced in one search snippet ("Assil Halimi," "Drew Walker") could not be verified and the most prominent public bearer of the first name is in an unrelated field (mit.edu), creating diligence ambiguity.
- **Technical-feasibility risk on "deliberative alignment for companies":** The mechanism — auto-compiling team decisions into a spec that generates and verifies agent work (YC page) — is novel and depends on LLM reliability at extracting durable decisions from chat; no public benchmark or customer-reported accuracy figures.
- **Pricing/ARPU compression:** $100/month flat for unlimited seats and agents (linzumi.com) is below per-seat competitor pricing (Cursor Teams $40/user/mo, Devin Teams $80/mo — buildbetter.ai, 2026), which caps ARPU growth and may force a pricing change if compute costs scale with agent count.

## Key Facts

| Dimension | Data |
|-----------|------|
| TAM | No public data found |
| SAM | No public data found |
| Traction | LinkedIn 79 followers, "coming soon" waitlist (linkedin.com/company/linzumi, 2026); 0 open jobs (YC page); no Product Hunt launch found; no press coverage found |
| Revenue Signal | $100/month flat for unlimited agents and team members (linzumi.com pricing, 2026); no disclosed ARR or customer count |
| Founders | Sean Grove (Founder): OneGraph→Netlify acquisition, Principal Architect at Netlify, OpenAI alignment/model-spec researcher. Two other co-founders not publicly identified. |
| Competitors | Cognition/Devin (>$2B raised, $26B post-money, $492M ARR — TechCrunch May 2026; cloud autonomous agent, not chat-native multi-player). Factory.ai ($215M+ raised, $1.5B val Apr 2026, revenue undisclosed but "doubling MoM" — TechCrunch; enterprise droids in IDE/CLI). Cursor/Anysphere (revenue unknown in search; IDE-native single-developer). Claude Code/Anthropic (revenue not separately disclosed; terminal agent). Windsurf (acquired by Cognition Jul 2025, terms undisclosed — TechCrunch). |
| Moat Signals | No public data found |
| Risk Factors | Incumbent substitution by Cognition/Factory chat integrations; pre-launch with no public traction; flat $100/mo pricing vs. per-seat competitor pricing |
| Founder Reach | Sean Grove: Twitter @sgrove ~5,565 followers (search snippet 2026), LinkedIn "Thinker at Linzumi🐭" (linkedin.com/in/segrove), GitHub @sgrove 489 followers (search snippet); other two co-founders: No public data found |
| Distribution Signals | LinkedIn company page 79 followers (linkedin.com/company/linzumi, 2026); X account @linzumi_ai exists, follower count not retrievable; no Product Hunt presence found |
| Emails | hello@linzumi.com (linzumi.com) |

Sources:
- [Linzumi website](https://linzumi.com)
- [YC company page](https://www.ycombinator.com/companies/linzumi)
- [Sean Grove LinkedIn](https://www.linkedin.com/in/segrove/)
- [Linzumi LinkedIn](https://www.linkedin.com/company/linzumi)
- [Sean Grove personal site](https://www.riseos.com/)
- [AI Summit Seoul — Sean Grove](https://www.aisummitseoul.com/sean-grove)
- [Cognition $1B raise — TechCrunch May 2026](https://techcrunch.com/2026/05/27/ai-coding-startup-cognition-raises-1b-at-25b-pre-money-valuation/)
- [Factory $150M Series C — TechCrunch Apr 2026](https://techcrunch.com/2026/04/16/factory-hits-1-5b-valuation-to-build-ai-coding-for-enterprises/)
- [Factory Series C announcement](https://factory.ai/news/series-c)
- [The Decoder on Sean Grove](https://the-decoder.com/code-is-just-a-lossy-projection-of-intent-according-to-openai-researcher-sean-grove/)
- [Devin alternatives — buildbetter.ai 2026](https://blog.buildbetter.ai/best-devin-alternatives-in-2026-10-ai-coding-tools-for-engineering-teams/)
- [OpenAI acquires Global Illumination](https://openai.com/index/openai-acquires-global-illumination/)
