# Drip -- Paul Graham Evaluation

Mike Levin built the metered billing platform team at GitHub before starting Drip, which is the kind of biographical detail that makes me lean in before I've even read the product description. The way to get startup ideas is not to try to think of startup ideas; it's to live in the future and notice what's missing. Mike spent his last job inside one of the largest metered-billing systems in the developer economy, and Drip is, almost too tidily, the product he wishes had existed. That's organic problem discovery in the form I trust most.

Drip's pitch -- a single API for metering, entitlement, and prepaid settlement, batching thousands of micro-charges into one card pull -- is the schlep version of the obvious idea. Stripe Billing maxes out at ~1,000 events/sec while AI companies need 100,000+ (Lago blog). The metering part everyone sees. The settlement part -- holding customer float, dodging per-transaction card fees, almost certainly tripping into money-transmitter territory state by state -- is the part that repels people. Drip looks like Stripe in miniature: payments infrastructure where the moat is willingness to do regulatory work other founders flinch from. That's the parallel that matters here -- not Patrick's age, but Patrick's appetite for PCI compliance and bank integrations when no one else wanted them.

Stripe paid roughly $1B for Metronome in January 2026, and that fact cuts both ways for Drip. The bull case Drip would make: this is a $1B comp three months old in their exact category, validating that high-throughput metering is a real venture outcome, and Stripe+Metronome won't ship a prepaid-balance settlement product that cannibalizes Stripe's per-transaction take rate. The bear case is that the idea no longer sits in the "seems like a bad idea / is a good idea" intersection. Three years ago, usage-based billing for AI was contrarian. Today it's a Schematic blog post and four YC-funded entrants (Lago, Flexprice, Zenskar, Drip itself). When everyone agrees the space is hot, the return premium has been competed away. Drip is no longer a black swan; it's a horse race.

Lucas He, the listed CTO, is the part of Drip that I'd want twenty minutes in a room to resolve. The dossier could not verify his background -- a TikTok ML engineer profile surfaced but couldn't be confirmed as the same person. I don't fund solo founders, and a co-founder who is functionally a question mark in public sources is a soft version of the same problem. If Lucas turns out to be a strong systems engineer who has shipped high-throughput infrastructure, Drip looks like a real two-founder bet. If he's a friend Mike recruited at UCLA with no relevant chops, then Drip is effectively Mike alone trying to outbuild Stripe+Metronome on the schlep dimension, and that's a much worse bet. The dossier doesn't let me tell.

Drip shows no traction signals -- team size 0, 0 jobs, drippay.dev returns 403, no Product Hunt, no funding announcement, no customer logos. At pre-seed I don't penalize that as such; the YC profile literally lists launch year as 2026. But absence of stories is itself mildly informative for resourcefulness. The Airbnb cereal-box anecdote is the kind of thing that surfaces even in a one-paragraph bio when it exists, and Drip's dossier surfaces nothing of the kind for either founder. I default toward the middle on this dimension and wait for the conversation.

Bear case in full: Drip is building consensus infrastructure in a category Stripe just bought into for a billion dollars; the metering primitive is being commoditized by an open-source YC peer (Lago); the differentiator -- prepaid float -- is the regulatory hairball that will either be Drip's moat or its tombstone, and there's no evidence in the dossier that Mike has thought through state-level money-transmitter licensing; one of the two founders is unverified; the brand collides with at least three other "Drip"-named companies including a YC alum. The bull case rests almost entirely on Mike's GitHub experience translating into product taste no Metronome PM has, plus a genuinely novel settlement model.

The one verifiable thing that would flip Drip from neutral to invest for me: confirmation that Lucas He is a serious infrastructure engineer with shipping experience -- and a half-hour conversation with Mike where he talks about money-transmitter law the way Patrick Collison used to talk about Visa interchange. Without that, Drip is a competent founder in a now-crowded market doing a real schlep, which lands in neutral territory rather than the conviction zone. The two dimensions locking my tier are organic problem discovery (Mike's GitHub billing role is the strongest single fact in this dossier) and idea-that-repels (Stripe's $1B Metronome deal punctures the contrarian premium). One pulls Drip up, the other pulls it back down.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Founder Resourcefulness Under Constraint | 14/30 |
| Organic Problem Discovery | 20/25 |
| Idea That Repels Before It Attracts | 9/20 |
| Founder Learning Rate | 8/15 |
| Earnest Builder Identity | 5/10 |
| **Total** | **56/100** |

**Total Score: 56/100** (Neutral)
