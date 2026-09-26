---
title: Prediction Portfolio
parent: Prediction Account widgets
grand_parent: Widgets
permalink: /widgets/event-contract-portfolio/
nav_order: 2
widget_key: EventContractPortfolio
section: widgets
description: "Your Kalshi positions, grouped by event, with cost, change, and market value."
---

# Prediction Portfolio

Your Kalshi positions, grouped by event. It needs a connected Kalshi account; see [Kalshi account]({{ '/accounts/kalshi/' | relative_url }}).

{% include shot.html id="event-contract-portfolio" alt="A Kalshi portfolio: an inflation event with a Yes and a No position, each with quantity, average price, bid and ask, cost basis, change, and market value, and totals." %}

## What it shows

Account value and available cash in the top bar, then a row per event and a row per position under it: **Side**, **Quantity**, **Avg** price, the **Market** bid and ask, **Cost Basis**, **Change**, and **Market Value**, with totals.

## Settings

**Configure** sets the **Integration**: your Kalshi account.

## Actions

- The top bar's **⋮** opens **Open Account**, **Open Orders**, and **Open Settlements**.
- An event's **⋮** opens the event, and the [Distribution Builder]({{ '/widgets/event-contract-portfolio-optimizer/' | relative_url }}).
- A position's **⋮** opens **Open Market** and **Open Market Candles**, and a ticket to **Increase Position** or **Close Position**.
