---
title: Prediction Orders
parent: Prediction Account widgets
grand_parent: Widgets
permalink: /widgets/event-contract-orders/
nav_order: 3
widget_key: EventContractOrders
section: widgets
description: "Your Kalshi orders, working or all, with fills, prices, and expiration."
---

# Prediction Orders

Your Kalshi orders. It needs a connected Kalshi account; see [Kalshi account]({{ '/accounts/kalshi/' | relative_url }}).

{% include shot.html id="event-contract-orders" alt="A resting Kalshi order to buy Yes in an inflation market, with its quantity filled, limit and market price, notional value, when it was placed, and GTC expiration." %}

## What it shows

Each order's event and market, what it does (such as "Buy Yes"), its **Status** (resting, executed, or cancelled), **Quantity** filled of the total, the **Limit** and **Market** prices, **Notional** value, when it was **Placed**, and its **Expiration** (**GTC** when it has none).

## Settings

**All** or **Active** in the top bar. **Configure** sets the **Integration**.

## Actions

- The top bar's **⋮** opens **Open Account**, **Open Portfolio**, and **Open Settlements**.
- An order's **⋮** opens **Open Event Table**, **Open Market**, and **Open Order**, which watches that order in its own widget.
