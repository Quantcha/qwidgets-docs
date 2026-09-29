---
title: When the stock falls
parent: Covered calls and the Wheel
grand_parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/when-the-stock-falls/
redirect_from:
  - /lessons/the-wheel/when-the-wheel-breaks/
nav_order: 4
section: lessons
description: "In a sharp fall, a covered call loses nearly as much as owning the shares. What the premium does and doesn't cover."
---

# When the stock falls

A covered call is easy to like in a quiet market: calls expire and the premium adds up. This lesson looks at the case that decides whether it works for you: the shares fall sharply.

## A sharp fall, with and without the premium

Here are 100 shares with a covered call, with the forecast range set to a fall of 25% to 35% by expiration:

{% include shot.html id="breaks-call-phase" alt="Trade analysis of 100 shares with a covered call, with the forecast range shaded over a fall of 25 to 35 percent: the Lowest and Highest outcomes in that range are both large losses." %}

And the same 100 shares on their own, over the same range:

{% include shot.html id="breaks-shares" alt="Trade analysis of 100 shares alone over the same forecast range: Lowest and Highest are losses only slightly larger than the covered call's." %}

Compare **Lowest** and **Highest** in the two. The difference between them is the premium, and against a fall this size it's small. In a sharp fall, a covered call loses nearly as much as simply owning the stock. In a sharp rise, it gains much less. That's the trade: steadier results in calm markets, in exchange for giving up the big rallies and keeping nearly all of the big falls.

Now read **Probability**, the model's chance of a fall this large. It's tiny, often small enough to show as 0%, and it's too low. The model assumes a lognormal distribution with one volatility, and real markets fall this far more often than that assumes. [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}#probabilities) says so directly. Rare isn't the same as won't happen, and over years of selling calls, it's likely to happen at least once.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/covered-call-when-it-falls): both positions on today's delayed prices. Drag the forecast range to other outcomes and compare them.

## After the fall

After a fall like this, the hard question is what call to sell next. [Three ways to run it]({{ '/lessons/covered-calls-and-the-wheel/three-ways-to-run-it/' | relative_url }}#after-a-sharp-fall) compares the choices on today's prices.

## Questions to answer before you start

None of these has a right answer, and none of them is advice. Each is easier to answer before the fall than during it.

- **Would I be comfortable holding these shares through a fall of a third?** If not, a covered call doesn't change that; it's still the shares' downside.
- **What will I do with the calls after a fall?** Sell at my cost, sell nearer the price, or close the position.
- **How much of my account is in it?** Every covered call rides on 100 shares, and every cash-secured put commits the strike times 100. Several at once, on stocks that fall together, is one large position.

With a brokerage connected, the [stress tester]({{ '/options/stress-testing/' | relative_url }}) can put a sharp fall to your whole account at once, across every position you hold.

{% include quiz.html id="covered-call-cushion" %}

## What's next

- [When the stock rises]({{ '/lessons/covered-calls-and-the-wheel/when-the-stock-rises/' | relative_url }}): the next lesson in the path.
- [Cash-secured puts: the same position from the other side]({{ '/lessons/covered-calls-and-the-wheel/cash-secured-puts/' | relative_url }}): why a short put carries the same downside.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): what the probabilities assume. They're models, not forecasts, and not investment advice.
