---
title: Option
parent: Equities Data widgets
grand_parent: Widgets
permalink: /widgets/equity-option/
nav_order: 7
widget_key: EquityOption
section: widgets
description: "A quote for one option contract with its greeks."
---

# Option

A quote for one option contract, with its greeks. It works on the delayed feed with no account, and on real-time data from a connected brokerage. Choose the source as the **Provider** in the widget's settings.

{% include shot.html id="equity-option" alt="An SPY call quote: mid price with bid and ask, implied volatility, open interest, delta, gamma, theta, vega, intrinsic and extrinsic value, moneyness, and the underlying price." %}

## What it shows

The midpoint, bid, and ask; **IV** and **Open interest**; **Delta**, **Gamma**, **Theta**, and **Vega**; **Intrinsic** and **Extrinsic** value, **Moneyness**, and the **Underlying** price; and upcoming earnings and ex-dividend dates.

## Settings

**Configure** sets the **Provider** and **Contract**. Most Option widgets open from an [Option Chain]({{ '/widgets/equity-option-chain/' | relative_url }}) or [Option Chart]({{ '/widgets/equity-option-chart/' | relative_url }}).

## Actions

**⋮** opens the same symbol in other widgets: **Open Quote**, **Open Price Chart**, **Open Option Chain**, and **Open Option Chart** for the underlying.
