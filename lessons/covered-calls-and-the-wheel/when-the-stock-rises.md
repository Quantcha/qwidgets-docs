---
title: When the stock rises
parent: Covered calls and the Wheel
grand_parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/when-the-stock-rises/
nav_order: 5
section: lessons
description: "When the shares rise past your strike, a covered call caps the gain. Letting them go, rolling up and out, and what each choice costs."
---

# When the stock rises

The failure people expect from a covered call is a fall. The one that surprises them is a rise. The shares jump past the strike, the call is now deep in the money, and the gain you were counting on belongs to someone else above the strike. This lesson looks at that moment and the two usual answers to it: let the shares go, or roll the call up and out.

## What the cap looks like

Here's a covered call after the shares have risen past its strike, with the forecast range set to a further rise:

{% include shot.html id="rises-called-away" alt="Trade analysis of 100 shares with a call whose strike is now below the share price: the payoff is flat across the whole shaded forecast range above the current price." %}

Across the whole range, the line is flat. However much further the shares rise, this position makes the same amount: the strike, plus the premium. That's the trade working as designed. It just doesn't feel that way when the shares keep going.

## Choice 1: let them go

If the call is in the money at expiration, the shares are called away at the strike. You keep the premium and the gain up to the strike, and you're back to cash.

That's a fine outcome if you'd have been happy to sell at the strike, which is what selling the call said. It's the normal end of a cycle in [the Wheel]({{ '/lessons/covered-calls-and-the-wheel/three-ways-to-run-it/' | relative_url }}), where you'd go back to selling puts. It's a worse outcome if you meant to keep the shares, because being called away is a sale: you'd have to buy back in at a higher price, and the sale may realize a taxable gain.

## Choice 2: roll up and out

To keep the shares, you can buy back the call and sell another one at a higher strike ("up") and a later expiration ("out"). The new call's strike is above today's price again, so you're back to keeping the gain up to it.

{% include shot.html id="rises-rolled" alt="Trade analysis of 100 shares with a call at a higher strike and a later expiration: the payoff keeps rising through much of the forecast range before it flattens." %}

Compare the two positions:

- **The cap moves up.** The flat part of the line starts at the new, higher strike.
- **It usually costs something.** The call you buy back is in the money and expensive; the new one is further out and pays less. Compare **Debit** on the two trades: the difference is roughly what the roll costs, before the bid-ask spread.
- **You're committed for longer,** and the same thing can happen again at the new strike.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/covered-call-when-it-rises): both positions on today's delayed prices. Try another strike or expiration on the rolled call and watch the cost of the roll change.

## Which one?

There's no right answer, and traders disagree about it; [When to roll, and the arguments about it]({{ '/lessons/covered-calls-and-the-wheel/when-to-roll/' | relative_url }}) goes through the camps. Two questions settle most of it:

- **Did you want to sell at the strike?** If so, letting the shares go is the plan working. Rolling to avoid it is paying to change your mind.
- **Are these shares you mean to keep?** If so, choose strikes further above the price from the start, and accept less premium for a lower chance of being called away. Rolling repeatedly to avoid assignment can cost more than the calls ever paid.

{% include quiz.html id="covered-call-roll-up-and-out" %}

## What's next

- [Cash-secured puts: the same position from the other side]({{ '/lessons/covered-calls-and-the-wheel/cash-secured-puts/' | relative_url }}): the next lesson in the path.
- [Book management]({{ '/options/book-management/' | relative_url }}): try a roll against the positions in a connected brokerage account before you trade it.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): not investment advice.
