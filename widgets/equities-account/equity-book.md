---
title: Book
parent: Equities Account widgets
grand_parent: Widgets
permalink: /widgets/equity-book/
nav_order: 3
widget_key: EquityBook
section: widgets
description: "One underlying's positions in an account, and their profit and loss now and at a target date."
---

# Book

One underlying's positions in an account, and what they're worth now and at a target date. It needs a connected brokerage account; see [Brokerage accounts]({{ '/accounts/brokerage/' | relative_url }}). See [Book management]({{ '/options/book-management/' | relative_url }}) for the book page, where you edit it.

{% include shot.html id="equity-book" alt="An SPY book of a call calendar: profit and loss at the front expiration across prices, what it holds now, profit and loss now and at the target, the chance of a gain, and the two legs." %}

## What it shows

- A profit and loss curve at the target date.
- **Held now**, and, when you've staged changes on the book page, the **Pending book**: **Value**, **P&L now**, **P&L at target**, and **Chance of gain**.
- The positions, with what's held and pending.

## Settings

- The top bar sets the **target date**; the buttons either side jump between the expirations of positions held or pending, or step a week either way.
- With pending changes, the ticket button trades them and the reset button returns to what you hold.
- The link button opens the book page to edit positions and exit assumptions.
- **Configure** sets the **Brokerage**, **Account**, and **Underlying**.

## Actions

**⋮** opens **Open Portfolio**, **Open Orders**, and the underlying in other widgets.
