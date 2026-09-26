---
title: Prediction Event History
parent: Prediction Data widgets
grand_parent: Widgets
permalink: /widgets/event-contract-event-history/
nav_order: 3
widget_key: EventContractEventHistory
section: widgets
description: "How the odds of every market in an event have moved over time."
---

# Prediction Event History

How the odds of an event's markets have moved, one line per market.

{% include shot.html id="event-contract-event-history" alt="A line chart of each market in a Kalshi inflation event over four days, from near 0% to near 100%, with a range navigator below." %}

## What it shows

A line for each of the event's top markets by current value, over time, with a navigator for zooming in on a stretch. Clicking a point opens a menu for that market.

## Settings

- **1m**, **1h**, or **1d** in the top bar sets the interval between points.
- **−** and **+** set how many markets are drawn, up to **All**.
- **Configure** sets the **Provider**, **Event ID**, and **Market Count**.

## Actions

**⋮** opens **Open Event Chart**, **Open Event Table**, and **Open Related Events**, and the [Distribution Builder]({{ '/widgets/event-contract-portfolio-optimizer/' | relative_url }}) when you can trade the event.
