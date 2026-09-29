---
title: Analyze a covered call
parent: Tutorials
permalink: /tutorials/analyze-a-covered-call/
nav_order: 2
section: tutorials
description: "Add a short call to 100 shares in Trade analysis, value it at expiration, and read what the premium pays and what it caps."
---

# Analyze a covered call

A covered call adds one decision to shares you own: which call to sell against them. In this tutorial you'll build one in Trade analysis, value it at the call's expiration, read what it risks and returns, and see what a higher strike changes.

You don't need an account, or shares, to try this: Trade analysis models the position on delayed data. The screenshots follow a covered call on XLF, the Financial Select Sector SPDR Fund, about five weeks from expiration. It's an illustration, not a recommendation.

## 1. Open Trade analysis

Select **Stocks & Options** in the left-hand menu, search for the symbol, and open its page. Then select the **Analyze** tab. It opens with 100 shares, which is the first half of a covered call.

{% include shot.html id="covered-call-analyze-shares" alt="The Analyze tab opened with 100 shares: the debit, amount at risk, and breakeven above a straight-line payoff chart, and the shares row in the legs table." %}

## 2. Add the call

1. Select **+ Option** below the legs table.
2. On the new row, select **Buy** to switch it to **Sell**. Leave it on **Call**. The quantity is already 1, which covers the 100 shares.
3. Pick an **Expiration** about 30 to 45 days out, then a **Strike** above the current price.
4. Read the row's **Delta**. It shows the position's delta per 100 shares, so a short call whose contract delta is 0.30 reads about **−30**. Try strikes until it's near −30.
5. Set the date above the chart to the call's expiration; expiration dates are marked in the calendar.

{% include shot.html id="covered-call-leg" alt="Trade analysis of 100 shares with a short call, valued at the call's expiration: the payoff rises with the shares up to the strike, then goes flat." %}

The chart is the covered call's shape: rising with the shares up to the strike, then flat, because above the strike the shares are called away.

## 3. Widen the forecast

Drag both ends of the forecast range under the chart out to the ends of its track, so **Probability**, under **Modeling for…**, reaches nearly 100%. **Win in range** is then, in effect, the chance the position makes money at all. [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}) explains why.

{% include shot.html id="covered-call-wide-forecast" alt="The same covered call with the forecast range stretched across the whole chart, and Probability near 100 percent." %}

## 4. Read the trade

- **Debit** is what the position costs: the shares, less the premium the call pays.
- **At risk** is the most it can lose, if the shares went to zero: the same debit. The call doesn't reduce the risk beyond its premium.
- **Breakeven** is today's price less the premium per share (and any dividend due before expiration), at expiration.
- **Highest** is the most the position can make: the gain up to the strike, plus the premium. Rises past the strike don't add to it.

{% include shot.html id="covered-call-figures" alt="The covered call's summary figures and modeled outcomes: debit, at risk, breakeven, and Highest with the forecast set wide." %}

## 5. Try a higher strike

Pick a **Strike** two or three steps higher.

{% include shot.html id="covered-call-higher-strike" alt="The same covered call at a higher strike: a larger debit because the call pays less, a higher cap on the payoff, and a different Win in range." %}

The call pays less, so the debit rises and the breakeven with it. The flat part of the chart starts further out, so you keep more of a rally. That's the trade-off behind every covered call: more premium now, or more room to rise. [Choosing strikes and expirations]({{ '/lessons/covered-calls-and-the-wheel/choosing-strikes-and-expirations/' | relative_url }}) looks at it in more depth.

{% include quiz.html id="covered-call-highest" %}

## What's next

- [Covered calls and the Wheel]({{ '/lessons/covered-calls-and-the-wheel/' | relative_url }}): the learning path this tutorial belongs to.
- [Trade analysis]({{ '/options/trade-analysis/' | relative_url }}): every setting on the page.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): these are models, not forecasts, and not investment advice.
