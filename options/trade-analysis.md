---
title: Trade analysis
parent: Options
permalink: /options/trade-analysis/
nav_order: 2
section: options
description: Payoff, breakevens, probabilities, and Greeks for any trade of option legs and shares.
---

# Trade analysis

The **Analyze** tab models any trade on one underlying: shares, option legs, or both. Every search and screen in Qwidgets opens its results here.

{% include shot.html id="trade-analysis" alt="Trade Analysis for a SPY call calendar: the target date, fill assumption, debit, amount at risk, and breakevens above a payoff chart, the forecast range slider, the modeling results, and the two legs with their Greeks." %}

## Build the trade

The legs table at the bottom holds the trade:

- The **shares** row: **Buy** or **Sell** and a quantity.
- Each **option** row: **Buy** or **Sell**, a quantity, an expiration, **Call** or **Put**, and a strike. Its bid/ask and Greeks show alongside, and the **Trade** row totals the Greeks.
- **+ Option** adds a leg; the trash can removes one.

## Set the assumptions

- **Date:** the date the trade is valued at. Dates a leg expires are bold.
- **Fill assumption:** where between the bid and the ask you expect to trade, from **Taker** to **Maker**. The midpoint is the default.
- **Forecast:** drag the range under the chart, or across the chart itself, to say where you think the underlying will be.
- **Size to a budget** (the icon next to **At risk**): enter **Most I want at risk** and the trade is scaled to fit.

## Read the results

- **Debit** or **Credit**, **At risk**, and **Breakeven** summarize the trade.
- The **chart** shows profit and loss across prices at the date, green above zero and red below, with standard-deviation marks and your forecast range shaded.
- Under **Modeling for…**, for the forecast range:
  - **Lowest** and **Highest**: the worst and best outcome inside the range.
  - **Expected Value**: profit or loss, weighted by probability.
  - **Probability**: the chance the underlying lands in the range.
  - **Win in range**: the chance the trade is profitable, *given* it lands in the range.

These come from a model with stated assumptions; see [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}) and [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}#probabilities). For walkthroughs, see [Analyze a covered call]({{ '/tutorials/analyze-a-covered-call/' | relative_url }}) and [Analyze a cash-secured put]({{ '/tutorials/analyze-a-secured-put/' | relative_url }}).

## Take it further

- **Trade** opens an order ticket in your brokerage account with these legs. It needs a connected brokerage ([why?]({{ '/accounts/why-connect/' | relative_url }})).
- **Model in book** adds the trade to an account's book as pending changes and opens [Book management]({{ '/options/book-management/' | relative_url }}). It needs a connected brokerage ([why?]({{ '/accounts/why-connect/' | relative_url }})).
- **Save trade** keeps the trade in your saved trades, when you're signed in ([why?]({{ '/accounts/why-sign-in/' | relative_url }})).
- The page's address updates as you edit, so you can bookmark or share a trade.
