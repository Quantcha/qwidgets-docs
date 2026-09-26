---
title: Portfolio
parent: Equities Account widgets
grand_parent: Widgets
permalink: /widgets/equity-positions/
nav_order: 2
widget_key: EquityPositions
section: widgets
description: "A brokerage account's holdings, grouped by underlying."
---

# Portfolio

A brokerage account's holdings, grouped by underlying. It needs a connected brokerage account; see [Brokerage accounts]({{ '/accounts/brokerage/' | relative_url }}).

{% include shot.html id="equity-positions" alt="A Schwab portfolio: a QQQ iron condor and an SPY call calendar, each leg with quantity, cost, change, bid and ask, and value, grouped under its underlying, with totals." %}

## What it shows

Market value and today's change in the top bar, then a row per underlying with its price and upcoming earnings and dividends, and a row per position: **Qty**, **Cost**, **Change**, **Bid/Ask**, and **Value**, with a **Total**.

## Settings

**Configure** sets the **Brokerage** and **Account**.

## Actions

- An underlying's **⋮** opens **Open Book**, the symbol in other widgets, and **Trade**.
- A position's **⋮** opens a [Trade Ticket]({{ '/widgets/equity-trade-ticket/' | relative_url }}) to **Close Position**, **Increase Position**, or, for options, **Roll Position**, already filled in.
- The top bar's **⋮** opens **Open Balances** and **Open Orders**.
