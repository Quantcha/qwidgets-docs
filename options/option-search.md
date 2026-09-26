---
title: Option search
parent: Options
permalink: /options/option-search/
nav_order: 6
section: options
description: Give a view and a forecast for one symbol, and search strategies for the trades that fit.
---

# Option search

The **Search** tab takes your view on one symbol and a price forecast, builds trades from 24 strategies, and ranks them by how they'd do if you're right.

{% include shot.html id="option-search" alt="Option Search for SPY with a Bullish view: the expiration, forecast range, approval level, search depth, and ranking controls above the forecast chart." %}

## Describe what you expect

- **View:** **Very bearish**, **Bearish**, **Neutral**, **Broadly neutral**, **Bullish**, or **Very bullish**. Each sets a forecast range; editing the range yourself makes it a custom one.
- **Expiration:** which expiration to trade.
- **Forecast:** the low and high of where you expect the price to be. The chart below shows the range against the distribution the market implies, and how likely the market thinks it is.
- **Approval level:** the options approval your account has, from **Level 1 — Covered positions** to **Level 4 — Uncovered (everything)**. It limits which strategies are searched.
- **Search depth:** how many contracts near your forecast to build from. More is slower.
- **Rank by:** **Average return**, **Best case return**, **Worst case return**, **Win in range**, **Expected profit**, **Capital at risk**, or **Cost to open**.
- **Fill assumption:** from **Taker** to **Maker**.

**Add filter** narrows the results by liquidity (open interest, volume, spread), by the position (cost, capital at risk, delta), by returns, or by Greeks.

## The strategies

| Group | Strategies |
|---|---|
| Single legs | Long Call, Long Put, Short Call, Short Put |
| With shares | Covered Call, Covered Put, Protective Put, Collar |
| Verticals | Bull Call Spread, Bear Call Spread, Bull Put Spread, Bear Put Spread |
| Straddles and strangles | Long Straddle, Short Straddle, Long Strangle, Short Strangle |
| Butterflies | Long Call Butterfly, Long Put Butterfly |
| Iron structures | Iron Butterfly, Reverse Iron Butterfly, Iron Condor, Reverse Iron Condor |
| Backspreads | Call Backspread, Put Backspread |

Which ones are searched depends on your approval level and view; range-bound structures aren't searched for a directional view.

## The results

Each result card shows the strategy, its average return across your forecast, a payoff sketch, its potential and minimum, the cost or credit, capital at risk, **win in range**, the legs, and the Greeks. **Analyze** opens it in [Trade analysis]({{ '/options/trade-analysis/' | relative_url }}) with your forecast and fill assumption carried over.

The page's address keeps your search, so you can bookmark or share it.
