---
title: Trade Ticket
parent: Equities Account widgets
grand_parent: Widgets
permalink: /widgets/equity-trade-ticket/
nav_order: 6
widget_key: EquityTradeTicket
section: widgets
description: "Build and place a stock or option order."
---

# Trade Ticket

Build and place a stock or option order, with the legs and price in front of you. It needs a connected brokerage account; see [Brokerage accounts]({{ '/accounts/brokerage/' | relative_url }}). See [Brokerage accounts]({{ '/accounts/brokerage/' | relative_url }}) for what each brokerage supports.

{% include shot.html id="equity-trade-ticket" alt="A Schwab ticket to buy one SPY call to open as a Day limit order at the mid price, showing the taker, mid, and maker prices, the debit, and the maximum risk." %}

## Placing an order

1. Choose **Equity**, **Option**, **Multileg**, or **Combo** in the top bar, and the account on the right.
2. Set each leg's side, quantity, and contract.
3. Choose the **Duration** and **Type**, and a **Price**; **Taker**, **Mid**, and **Maker** fill it in. The ticket shows the debit or credit and the maximum risk.
4. Select **Place order**. Where the brokerage can preview orders, you see its preview first.

Once placed, the ticket becomes an [Order]({{ '/widgets/equity-order/' | relative_url }}) widget watching the new order.

## Settings

**Configure** sets the **Brokerage**, **Account**, and **Underlying**. Most tickets open already filled in, from a position's **Close Position** or **Roll Position**, a chain's bid or ask, or a trade's **Trade**.
