---
title: Where the premium comes from
parent: The Wheel
grand_parent: Lessons
permalink: /lessons/the-wheel/where-the-premium-comes-from/
nav_order: 3
section: lessons
description: "Option sellers are paid for carrying the risk of sharp moves. Why that has tended to pay over long periods, and why it isn't free money."
---

# Where the premium comes from

**Works as a guest.**

The Wheel's appeal is the premium: cash up front, every expiration. It's fair to ask why anyone pays it. The buyer of your put isn't being generous. This lesson looks at what sets the premium, why sellers have tended to come out ahead over long periods, and what they give up for it.

## Implied volatility sets the price

An option's premium depends mostly on how far the market thinks the underlying might move before expiration. That expectation, backed out of the option's price, is its **implied volatility**. The higher it is, the more every option on that underlying costs, and the more premium a seller collects.

{% include shot.html id="premium-chain-iv" alt="The option chain on the Pricing view, with the implied volatility column for calls and puts at each strike, higher on the puts further below the current price." %}

On the chain's **Pricing** view, each contract shows its implied volatility. Two things are usually visible. Puts further below the current price carry higher implied volatilities than those near it: the market charges more for protection against a sharp fall. And implied volatility rises into scheduled events such as earnings, then drops once they've passed.

## Why sellers have tended to be paid

If implied volatility were exactly right on average, selling options would earn nothing over time, less the bid-ask spread. It hasn't been exactly right. Over long periods, implied volatility on broad US stock indexes has more often than not been higher than the volatility that actually followed. The gap is called the **volatility risk premium**.

The usual explanation is insurance. Many investors want protection against a sharp fall and will pay more than its expected cost to have it, the way homeowners pay more for insurance than their expected losses. Someone has to sell that protection, and they ask to be paid for carrying the risk. A cash-secured put is, in effect, that kind of protection, sold on one stock.

## What it costs

Insurance pays its sellers steadily and then, occasionally, all at once in the other direction. Option selling has the same pattern:

- **Small, frequent gains; rare, large losses.** Most expirations, the premium is kept. When the market falls sharply, one expiration can give back many months of premium.
- **The losses come together.** A sharp fall hits most stocks at once, so running the Wheel on several of them doesn't spread the risk as much as it seems to.
- **It isn't guaranteed.** The premium has varied widely over time and across underlyings, and there have been long stretches where it was small or negative. A single stock can move for reasons no index would.

The premium is payment for carrying risk. It's not an inefficiency waiting to be collected.

## What Qwidgets can and can't show you

Qwidgets' probabilities are built from implied volatility, the market's own figure. So they can't tell you whether that figure is too high. The volatility risk premium is a claim about how implied volatility has compared with what happened next, and no payoff chart built from today's prices can show it. What the tools can show you is the size of the risk you're being paid to carry: the breakeven, the loss in a sharp fall, and how much the premium does or doesn't cover. [When the Wheel breaks]({{ '/lessons/the-wheel/when-the-wheel-breaks/' | relative_url }}) does exactly that.

{% include quiz.html id="wheel-premium-source" %}

## What's next

- [When the Wheel breaks]({{ '/lessons/the-wheel/when-the-wheel-breaks/' | relative_url }}): the next lesson in the path.
- [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}): what the model assumes about volatility.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): not investment advice, and what the models simplify.
