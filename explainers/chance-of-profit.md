---
title: How Qwidgets estimates the chance of profit
parent: Explainers
permalink: /explainers/chance-of-profit/
nav_order: 2
section: explainers
description: "What Probability, Win in range, and Expected Value in Trade analysis measure, the model behind them, and how they relate to delta."
---

# How Qwidgets estimates the chance of profit

[Trade analysis]({{ '/options/trade-analysis/' | relative_url }}) reports three figures about the future for any trade: **Probability**, **Win in range**, and **Expected Value**. They come from one model of where the underlying might finish. This page explains what each figure measures, what the model assumes, and how the figures relate to an option's delta, which is often used as a shortcut for the same question.

## Three figures, one range

All three are worked out for the **forecast range**: the band of prices you set with the slider under the payoff chart.

- **Probability** is the chance the underlying finishes inside the range at the target date.
- **Win in range** is the chance the trade is profitable, *given* the underlying finishes inside the range. It isn't the chance of profit overall.
- **Expected Value** is the trade's average profit or loss if the underlying finishes inside the range, weighting each price by how likely it is. It describes the range, not every outcome: it isn't scaled down by **Probability**.

**To read the chance of profit overall,** widen the range until **Probability** is close to 100%. Then **Win in range** is, in effect, the chance the trade makes money at all. The live workspaces in the [Wheel lessons]({{ '/lessons/the-wheel/' | relative_url }}) set the range to three standard deviations either side of the current price for exactly this reason.

**To ask a what-if question,** narrow it. A range over a sharp fall shows how bad that fall would be (**Lowest** and **Highest**) and how likely the model thinks it is (**Probability**).

## The model

The chances come from a distribution of the underlying's price at the target date:

- **Lognormal, with one volatility.** Prices are assumed to follow a lognormal distribution, using a single volatility rather than a separate one for each strike: the at-the-money implied volatility of the expirations the trade uses, carried to the target date. When those aren't available, it uses the underlying's 30-day implied volatility.
- **Drift at the risk-free rate.** The model doesn't forecast returns. It centers the distribution on today's price grown at the risk-free rate, with no view on where the price will go.
- **Options still open are valued with the same inputs.** If the target date is before a leg's expiration, that leg is valued at the target date with the same volatility and rate, allowing for any dividends before it expires.
- **Premiums from the market.** The trade's credit or debit comes from the quotes, at the fill you choose with the slider between **Taker** and **Maker**.

## What it assumes, and where it stops being reliable

- **Large falls are more likely than the model says.** Real markets fall sharply more often than a lognormal distribution allows. **Probability** for a range far below the price is too low, and **Win in range** for a trade that loses in a fall is too high.
- **The market prices strikes differently; the model doesn't.** Options further below the current price usually trade at higher implied volatilities than those near it, a pattern called the skew, which is the market pricing exactly the large falls the model understates. Because the model uses one volatility, **Expected Value** can show a trade that sells those options as better than even. That's the model and the market disagreeing, not a free edge.
- **No forecast.** Because the model drifts at the risk-free rate, it has no view on direction. Any view you have goes into the forecast range, not the model.
- **The spread counts.** A fill nearer **Taker** costs more to open and lowers **Expected Value** for any trade.

## Delta as a shortcut

Traders often read an option's **delta** as the chance it finishes in the money: a put with a delta of −0.30 is "about 30%." It's a useful rough guide, and the [Wheel lessons]({{ '/lessons/the-wheel/choosing-strikes-and-expirations/' | relative_url }}) use it that way to compare strikes. But it isn't the same number.

- Delta measures how much the option's price moves for a small move in the underlying. The delta on the chain comes from the market-data provider, with the contract's implied volatility.
- The chance of finishing in the money depends on the same inputs but isn't the same formula. At the same volatility, a put's delta is a little smaller than its chance of finishing in the money, and a call's a little larger. The gap grows with volatility and time to expiration.
- But delta uses each contract's own implied volatility, and Trade analysis uses one volatility for every strike. For puts below the current price, the contract's own implied volatility is usually higher, because of the skew. So for the puts a Wheel sells, delta is often **larger** than the model's chance of finishing in the money, sometimes by a lot.

For comparing strikes quickly, delta is fine. For the chance a specific trade makes money, use **Win in range** with a wide range, and remember what it assumes.

## What's next

- [Trade analysis]({{ '/options/trade-analysis/' | relative_url }}): every figure and setting on the page.
- [Analyze a cash-secured put]({{ '/tutorials/analyze-a-secured-put/' | relative_url }}): read these figures on a real trade.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}#probabilities): the model's limits across the whole product.
