---
title: Prediction Order
parent: Prediction Account widgets
grand_parent: Widgets
permalink: /widgets/event-contract-order/
nav_order: 4
widget_key: EventContractOrder
section: widgets
description: "Watch one Kalshi order, and change or cancel it while it rests."
---

# Prediction Order

Watch one order, and change or cancel it while it rests. It needs a connected Kalshi account; see [Kalshi account]({{ '/accounts/kalshi/' | relative_url }}).

{% include shot.html id="event-contract-order" alt="A resting Kalshi order: quantity, limit price, status, action, side, and the market bid and ask, with Quantity and Cents fields and Update and Cancel buttons." %}

## What it shows

The order's **Quantity** filled, **Order Price**, **Status**, **Action**, **Side**, and the market's current price for that side.

While the order rests, change its **Quantity** or price in **Cents** and select **Update**. Clicking the bid or ask fills in that price. **Cancel** asks you to confirm. Once the order is done, the widget says how it ended.

## Settings

**Configure** sets the **Integration** and **Order ID**. The usual way in is **Open Order** from the [Prediction Orders]({{ '/widgets/event-contract-orders/' | relative_url }}) widget, or placing an order from a [Prediction Trade Ticket]({{ '/widgets/event-contract-trade-ticket/' | relative_url }}), which becomes this widget.

## Actions

**⋮** opens the market (**Open Market**, **Open Market Candles**, **Open Order Book**), its event, and your **Open Orders**, **Open Account**, **Open Portfolio**, and **Open Settlements**.
