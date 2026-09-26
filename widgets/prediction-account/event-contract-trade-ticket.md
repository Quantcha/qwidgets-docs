---
title: Prediction Trade Ticket
parent: Prediction Account widgets
grand_parent: Widgets
permalink: /widgets/event-contract-trade-ticket/
nav_order: 5
widget_key: EventContractTradeTicket
section: widgets
description: "Place a limit order on a Kalshi market from a workspace."
---

# Prediction Trade Ticket

Place a limit order on one market. It needs a connected Kalshi account; see [Kalshi account]({{ '/accounts/kalshi/' | relative_url }}).

{% include shot.html id="event-contract-trade-ticket" alt="A Kalshi ticket to buy 10 Yes contracts in an inflation market at 45 cents, showing the market price and the debit and credit." %}

## Placing an order

1. Choose the **Action**, **Buy** or **Sell**, and the **Side**, **Yes** or **No**. Clicking the bid or ask fills in the side and price.
2. Enter the **Quantity** and the price in **Cents**. The ticket shows the **Debit / Credit**.
3. Select **Place**, check the summary, and select **Confirm and send**. **Back** returns to the ticket.

The order rests until it fills or you cancel it, and the ticket becomes a [Prediction Order]({{ '/widgets/event-contract-order/' | relative_url }}) widget watching it. If Kalshi turns it down, the ticket says why.

## Settings

**Configure** sets the **Integration** and **Market ID**. Most tickets open from a **Trade via** or **Close Position** menu item, already filled in.

## Actions

**⋮** opens the market, its event, and your account's widgets.
