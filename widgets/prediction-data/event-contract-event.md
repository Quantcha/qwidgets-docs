---
title: Prediction Event
parent: Prediction Data widgets
grand_parent: Widgets
permalink: /widgets/event-contract-event/
nav_order: 2
widget_key: EventContractEvent
section: widgets
description: "Every market in a prediction event, with Yes and No quotes, volume, and open interest."
---

# Prediction Event

Every market in one prediction event, quoted side by side.

{% include shot.html id="event-contract-event" alt="The markets of a Kalshi inflation event, each with its status, Yes and No bid and ask, 24-hour volume, volume, and open interest." %}

## What it shows

A table of the event's markets: **Market**, **Status**, the **Yes** and **No** bid and ask, **Volume (24h)**, **Volume**, and **Open Interest**. The top bar shows when the event is expected to settle.

## Settings

**All** or **Active** in the top bar shows or hides markets that have resolved. **Configure** sets the **Provider** and **Event ID**.

## Actions

- The top bar's **⋮** opens **Open Event Chart**, **Open Event History**, and **Open Related Events**, and, with a Kalshi account connected, the [Distribution Builder]({{ '/widgets/event-contract-portfolio-optimizer/' | relative_url }}) for the event.
- Each market's **⋮** opens **Open Order Book**, **Open Market**, and **Open Market Candles**, and **Trade via** your Kalshi account, which opens a ticket to buy Yes at the ask.
