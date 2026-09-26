---
title: Orders
parent: Equities Account widgets
grand_parent: Widgets
permalink: /widgets/equity-orders/
nav_order: 4
widget_key: EquityOrders
section: widgets
description: "A brokerage account's orders, and cancelling those still working."
---

# Orders

A brokerage account's orders. It needs a connected brokerage account; see [Brokerage accounts]({{ '/accounts/brokerage/' | relative_url }}).

{% include shot.html id="equity-orders" alt="A Schwab orders list with one working order to buy back two SPY calls at a limit price." %}

## What it shows

The number working in the top bar, then each order's legs, **Filled**, **Price**, and **Status**. A dot marks orders still working.

## Settings

**All**, **Active**, or **Working** in the top bar:

- **All:** every order, including those cancelled, rejected, or expired.
- **Active:** orders still working, plus those that filled.
- **Working:** only orders that can still fill.

**Configure** sets the **Brokerage** and **Account**.

## Actions

- An order's **⋮** opens **Open Order**, the symbol in other widgets, and, while it's working, **Cancel Order**, which asks you to confirm.
- The top bar's **⋮** opens **Open Balances** and **Open Portfolio**.
