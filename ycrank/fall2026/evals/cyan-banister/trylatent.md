# Latent -- Cyan Banister Evaluation

Six years forward, I can imagine a clinician letting software handle more work because it knows when to stop and ask for help. Latent would belong in that world if reading a model’s internal state became a dependable way to interrupt dangerous answers. But that requires two transitions: detection must survive changes in models and clinical tasks, and stopping an answer must reliably produce a safer next action. The dossier establishes neither transition. Activation access is an interesting starting point; I cannot yet connect it to that future without supplying the missing evidence myself.

What catches my attention is the decision to look inside generation. Latent’s vLLM plugin and customer-specific calibration fit my preference for concealed infrastructure beneath visible applications. There is actual engineering here. However, direct activation access works with open-weight models on vLLM; API deployments require a separate reader, bringing Latent back toward the evaluator architecture already offered by Patronus and Vectara. The company controls its integration and calibration machinery, but the dossier does not establish control over a scarce dependency. Even the deployment tradeoff matters: sharing a GPU with the sidecar reportedly slowed serving by approximately one fifth.

Why do teams sample answers in the first place? Checking everything consumes money and time. Latent addresses that specific operating constraint and gives teams policies for withholding or rerouting answers. That returns some control to the people responsible for production failures. Yet the economics remain unproven: $299 monthly for 100,000 scored answers is a price list, while the relevant result is the cost of safely catching consequential errors at full coverage. The reported 96% flag precision does not tell me how many dangerous answers escape. A rubric that permits omissions also leaves room for an answer to pass the detector while failing the user.

The strongest argument against passing is Vedant Gaur’s research overlap with the product. Reasoning, evaluation and interpretability publications at ACL, EMNLP and NeurIPS are substantive evidence beyond school and employer names. Pair that background with a distributed SDK and reported detection results, and there could be a serious technical founder building an enabling layer early. My pre-revenue exceptions make that possibility worth taking seriously. But those exceptions require affirmative substitutes for revenue: a sustained record of obsession, demanding prototype use, or concrete customer commitments. This dossier documents relevant research without establishing that longer personal arc, and it documents product availability without repeated user behavior. Launch coverage supplies neither.

I would pass with my own money today. Latent has an interesting technical foothold, but too much of the investment case still depends on inferring the future, the founder’s obsession and customer dependence from that same foothold. The security documentation adds a specific concern: cleartext bearer-token transport requires customers to supply TLS or tunneling, particularly consequential around healthcare and financial information. That is an architecture question to resolve, not evidence that a privacy violation occurred; the solo-founder structure also supplies no affirmative governance red flag. My one verifiable flip condition is a named regulated customer’s documented 90-day deployment showing repeated reliance on activation-based blocking, measured missed-error rates and total serving cost, with encrypted transport in use. That would show whether Latent changes what someone can safely entrust to a machine.

### Dimension Scores

| Criterion | Score |
|-----------|-------|
| Dossier Maps a Six-Year Future to One Present-Day Leak | 7/31 |
| Founder Biography Shows Pre-Company Obsession and First-Believer Proof | 13/24 |
| Dossier Names a Broken Rule, Its Rent, and the Agency Returned | 8/19 |
| Working Artifact Elicits Costly or Weird User Behavior | 4/15 |
| Product Sits Beneath Today?s Hype as an Enabling Layer | 7/11 |
| **Total** | **39/100** |

**Total Score: 39/100** (Pass)
