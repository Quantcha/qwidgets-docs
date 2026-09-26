---
title: Event Chart
parent: Prediction Data widgets
grand_parent: Widgets
permalink: /widgets/event-contract-event-chart/
nav_order: 4
widget_key: EventContractEventChart
section: widgets
description: "The distribution of outcomes the market implies for an event."
---

# Event Chart

The distribution of outcomes the market implies for one event, drawn to suit the kind of event it is.

{% include shot.html id="event-contract-event-chart" alt="The strike chart for a Kalshi inflation event: a bar per threshold showing the chance of inflation above it, falling from near 100% at 3.0% to near 0% above 4%." %}

## What it shows

The chart follows the event's type:

- **Ladders of thresholds** ("above 3.5%", "over 42.5 points") show a bar per threshold, the chance the outcome lands above it. **Over** and **Under** flip the view.
- **Ranges** show the chance of each range, with **Exactly** and **Not**.
- **Spreads** show each side's chance, and switch between the two sides.
- **Scalar** events show the expected payout across outcomes, or its inverse.
- **Single** markets show a gauge.
- **Anything else**, such as a list of candidates, shows each outcome's chance as bars or a pie, **Yes** or **No**, with **−** and **+** for how many.

Clicking a bar opens a menu for that market.

## Settings

The top bar holds the view toggles above. **Configure** sets the **Provider** and **Event ID**.

## Actions

**⋮** opens **Open Event Table**, **Open Event History**, and **Open Related Events**, and the [Distribution Builder]({{ '/widgets/event-contract-portfolio-optimizer/' | relative_url }}) when you can trade the event.
