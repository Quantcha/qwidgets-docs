---
title: When the Wheel breaks
parent: The Wheel
grand_parent: Lessons
permalink: /lessons/the-wheel/when-the-wheel-breaks/
nav_order: 4
section: lessons
description: "In a sharp fall, the Wheel loses nearly as much as owning the shares. What the premium does and doesn't cover, and the trap of selling calls below your cost."
---

# When the Wheel breaks

**Works as a guest.**

The Wheel is easy to like in a quiet market: puts expire, calls expire, and the premium adds up. This lesson looks at the case that decides whether it works for you: the shares fall sharply, and keep falling after you're assigned.

## A sharp fall, with and without the premium

Here's the call phase of a Wheel, 100 shares with a covered call, with the forecast range set to a fall of 25% to 35% by expiration:

{% include shot.html id="breaks-call-phase" alt="Trade analysis of 100 shares with a covered call, with the forecast range shaded over a fall of 25 to 35 percent: the Lowest and Highest outcomes in that range are both large losses." %}

And the same 100 shares on their own, over the same range:

{% include shot.html id="breaks-shares" alt="Trade analysis of 100 shares alone over the same forecast range: Lowest and Highest are losses only slightly larger than the covered call's." %}

Compare **Lowest** and **Highest** in the two. The difference between them is the premium, and against a fall this size it's small. In a sharp fall, the Wheel loses nearly as much as simply owning the stock. In a sharp rise, it gains much less. That's the trade: steadier results in calm markets, in exchange for giving up the big rallies and keeping nearly all of the big falls.

Now read **Probability**, the model's chance of a fall this large. It's tiny, often small enough to show as 0%, and it's too low. The model assumes a lognormal distribution with one volatility, and real markets fall this far more often than that assumes. [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}#probabilities) says so directly. Rare isn't the same as won't happen, and over years of running a Wheel, it's likely to happen at least once.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/wheel-when-it-breaks): both positions on today's delayed prices. Drag the forecast range to other outcomes and compare them.

## The trap: selling calls below your cost

After a fall, the Wheel faces a hard choice. Say you were assigned at $50 and the shares are now at $35.

- **Sell calls at $50,** your cost. They're far above the price, so they pay very little. You wait, collecting small premiums, for a recovery that may take a long time or never come.
- **Sell calls near $35** to collect a meaningful premium. If the shares recover past the strike, they're called away there, and the $15 loss becomes permanent, less what the calls paid.

Neither is wrong in every case, but many Wheel traders don't decide in advance which they'd choose, and end up choosing under pressure. The premium makes the strategy feel like income. After a fall like this, it's a stock position that has lost money.

## Questions to answer before you start

None of these has a right answer, and none of them is advice. Each is easier to answer before the fall than during it.

- **Would I be comfortable holding these shares through a fall of a third?** If not, the Wheel on this stock is a position you don't want.
- **What will I do with the calls after a fall?** Hold them at my cost, lower them, or close the position.
- **How much of my account is committed?** Every cash-secured put commits the strike times 100. Several at once, on stocks that fall together, is one large position.

With a brokerage connected, the [stress tester]({{ '/options/stress-testing/' | relative_url }}) can put a sharp fall to your whole account at once, across every position you hold.

{% include quiz.html id="wheel-calls-below-cost" %}

## What's next

- [Check the calendar before you sell]({{ '/lessons/the-wheel/check-the-calendar/' | relative_url }}): the next lesson in the path.
- [The Wheel: one position in two phases]({{ '/lessons/the-wheel/one-position-two-phases/' | relative_url }}): why both phases carry the same downside.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): what the probabilities assume. They're models, not forecasts, and not investment advice.
