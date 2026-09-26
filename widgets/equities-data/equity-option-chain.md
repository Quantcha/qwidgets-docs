---
title: Option Chain
parent: Equities Data widgets
grand_parent: Widgets
permalink: /widgets/equity-option-chain/
nav_order: 3
widget_key: EquityOptionChain
section: widgets
description: "Calls and puts by strike for one expiration."
---

# Option Chain

Calls and puts by strike for one expiration. It works on the delayed feed with no account, and on real-time data from a connected brokerage. Choose the source as the **Provider** in the widget's settings. See [Option chain]({{ '/options/option-chain/' | relative_url }}) for the page.

{% include shot.html id="equity-option-chain" alt="An SPY option chain for one expiration: calls on the left and puts on the right of the strikes, with bid and ask, volume, open interest, and implied volatility." %}

## What it shows

Calls on the left and puts on the right of the strike column. The at-the-money strike is highlighted and in-the-money cells are shaded.

## Settings

The top bar sets the expiration, the columns (**Pricing**, **Greeks**, or **Value**), which strikes (near, below, or above the money, or all), how many, and a minimum open interest. **Configure** sets the **Provider**, **Underlying**, **Expiration**, **Strikes**, **Maximum strikes**, and **Columns**.

## Actions

- Click a strike for **Open Call** or **Open Put**, which opens that contract in an [Option]({{ '/widgets/equity-option/' | relative_url }}) widget.
- Click a bid or ask to **Sell via** or **Buy via** a connected brokerage, which opens a [Trade Ticket]({{ '/widgets/equity-trade-ticket/' | relative_url }}) with that contract, side, and price.
- **⋮** opens **Open Quote**, **Open Price Chart**, and **Open Option Chart**.
