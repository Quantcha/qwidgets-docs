---
title: Trade screener
parent: Options
permalink: /options/trade-screener/
nav_order: 8
section: options
description: Pick a strategy and scan the whole US option market for trades that fit.
---

# Trade screener

The **Trade Screener** searches the whole US option market for trades of one strategy, ranked by the measure you choose. Open it from **Trade Screener** in the left-hand menu. No account is needed.

{% include shot.html id="trade-screener" alt="The Options Trade Screener set to Iron Condor, with Days out, Window, Rank by, and Source controls above result cards showing each trade's return, payoff, credit, risk, win in range, legs, and Greeks." %}

## Set up the screen

- **Strategy:** Covered Call, Secured Put, Bull Call Spread, Bear Call Spread, Bull Put Spread, Bear Put Spread, Long Call, Long Put, Long Straddle, Long Strangle, Iron Butterfly, Iron Condor, Collar, Protective Put, Protective Call, Synthetic Long Stock, Synthetic Short Stock, Forward Conversion, or Reverse Conversion.
- **Days out** and **Window:** the range of expirations to search, starting a number of days from today.
- **Rank by:** **Flat return**, **Average return**, **Average annualized**, **Highest potential**, **Highest annualized potential**, **Minimum risk**, **Minimum annualized risk**, or **Profit probability**.
- **Add filter:** about 40 filters in groups for liquidity, the underlying (price, market cap, industry, and more), volatility, the position, returns, Greeks, and events such as earnings and dividends before expiration.

The screen always runs on the delayed feed, whichever source you pick.

## The results

Switch between **Cards** and **Table**. Each result shows the underlying and its price, the strategy's return from the screen, a payoff sketch, the cost or credit, the risk, **win in range**, the legs, and the Greeks.

- **Analyze** opens the trade in [Trade analysis]({{ '/options/trade-analysis/' | relative_url }}) with live prices.
- The block icon keeps that underlying out of the screen.
- **Save screen** keeps your setup when you're signed in.

Results are as of the last screen, and prices move. The results note how many rows have moved since.
