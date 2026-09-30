---
title: Analyze a cash-secured put
parent: Tutorials
permalink: /tutorials/analyze-a-secured-put/
nav_order: 4
section: tutorials
description: "Build a cash-secured put in Trade analysis, widen the forecast to read its chance of profit, and see what a closer strike changes."
---

# Analyze a cash-secured put

A cash-secured put is the first phase of the Wheel, and nearly the same position as a covered call ([Cash-secured puts: the same position from the other side]({{ '/lessons/covered-calls-and-the-wheel/cash-secured-puts/' | relative_url }}) explains why). It's the trade most Wheel decisions come down to: which strike, which expiration, and whether the premium is worth the risk. In this tutorial you'll build one in Trade analysis, set the forecast wide enough to read its chance of profit, and see what moving the strike changes.

You don't need an account; everything here works as a guest, on delayed data. The screenshots follow a put on XLF, the Financial Select Sector SPDR Fund, about five weeks from expiration. It's an illustration, not a recommendation.

## 1. Open Trade analysis

Select **Stocks & Options** in the left-hand menu, search for the symbol, and open its page. Then select the **Analyze** tab. It opens with 100 shares and a forecast one standard deviation either side of the current price, so there's already a chart to replace.

{% include shot.html id="secured-put-analyze-empty" alt="The Analyze tab for a fund, opened with 100 shares: the debit, amount at risk, and breakeven above a straight-line payoff chart, and a legs table with the shares row." %}

## 2. Replace the shares with a put

1. Select the trash icon at the end of the shares row to remove them.
2. Select **+ Option** below the legs table.
3. On the new row, select **Buy** to switch it to **Sell**, and **Call** to switch it to **Put**. The quantity is already 1.
4. Pick an **Expiration** about 30 to 45 days out, then a **Strike** below the current price.
5. Read the row's **Delta**. It shows the position's delta, per 100 shares, so a short put whose contract delta is −0.30 reads about **30**. Try strikes until it's near 30.
6. Set the date above the chart to the put's expiration: select the next-expiration button to the right of the date, or pick it in the calendar, where expiration dates are marked. Until you do, the chart values the trade 30 days out, which may be before the put expires.

{% include shot.html id="secured-put-leg" alt="Trade analysis with one short put, valued at its expiration: the credit, amount at risk, and breakeven above a payoff chart that's flat to the right of the strike and falls to the left." %}

The chart takes the shape of every short put at expiration: flat to the right of the strike, where you keep the premium, and falling to the left, where you'd be assigned on shares worth less than the strike.

## 3. Widen the forecast

Drag both ends of the forecast range under the chart out to the ends of its track. The track spans three standard deviations either side of the price, so **Probability**, under **Modeling for…**, reaches nearly 100%.

{% include shot.html id="secured-put-wide-forecast" alt="The same put with the forecast range stretched across the whole chart, and Probability near 100 percent in the modeled outcomes." %}

With the range covering nearly every outcome, **Win in range** is, in effect, the chance the trade makes money at all. [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}) explains why, and what the model assumes.

## 4. Read the trade

Read the figures above the chart and under **Modeling for…**:

- **Credit** is the premium you collect.
- **At risk** is the most the trade can lose: the strike times 100, less the credit, if the shares went to zero. It's close to the cash you'd set aside to secure the put.
- **Breakeven** is where the payoff crosses zero on the date you set. At expiration, that's the strike less the premium per share. Below it, the trade loses.
- **Win in range** is the chance of profit, with the range this wide.

{% include shot.html id="secured-put-figures" alt="The put's summary figures and modeled outcomes: credit, at risk, breakeven, and Win in range with the forecast set wide." %}

Compare the credit with the amount at risk. That ratio, and how often you'd keep it, is the whole trade.

## 5. Try a closer strike

Pick the next **Strike** up, closer to the current price.

{% include shot.html id="secured-put-closer-strike" alt="The same put one strike closer to the current price: a larger credit, a higher breakeven, and a lower Win in range." %}

The credit rises, the breakeven rises with it, and **Win in range** falls. You're paid more because you're more likely to be assigned. [Choosing strikes and expirations]({{ '/lessons/covered-calls-and-the-wheel/choosing-strikes-and-expirations/' | relative_url }}) looks at that trade-off in more depth.

{% include quiz.html id="secured-put-win-in-range" %}

## What's next

- [Covered calls and the Wheel]({{ '/lessons/covered-calls-and-the-wheel/' | relative_url }}): the learning path this tutorial belongs to.
- [Trade analysis]({{ '/options/trade-analysis/' | relative_url }}): every setting on the page.
- [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}): the model behind **Win in range**.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): these are models, not forecasts, and not investment advice.
