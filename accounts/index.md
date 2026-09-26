---
title: Accounts and connections
permalink: /accounts/
nav_order: 8
has_children: true
section: accounts
description: Signing in, connecting a brokerage or Kalshi account, and what each connection adds.
---

# Accounts and connections

Most of Qwidgets works without an account. Signing in lets you keep your work, and connecting a brokerage or Kalshi account brings your own positions and trading into the same place you plan.

- [Access and sign-in]({{ '/accounts/access/' | relative_url }}): what a guest, a signed-in user, and a connected account each get.
- [Brokerage accounts]({{ '/accounts/brokerage/' | relative_url }}): your portfolio, orders, trading, and transaction history, with [Performance]({{ '/accounts/brokerage/performance/' | relative_url }}), the [Campaign Journal]({{ '/accounts/brokerage/campaign-journal/' | relative_url }}), and [Transactions]({{ '/accounts/brokerage/transactions/' | relative_url }}).
- [Kalshi account]({{ '/accounts/kalshi/' | relative_url }}): your event contract portfolio, orders, settlements, and trading.

## Managing your connections

**Integrations**, under **Profile** in the left-hand menu, lists every connection you've made, with its type, its status, and when you made it.

{% include shot.html id="integrations" alt="The Manage Your Integrations page listing a Schwab and a Kalshi connection with their status." %}

- **Create** adds a connection. See [Getting Started]({{ '/getting-started/' | relative_url }}#connect-a-brokerage-or-kalshi-account).
- A connection's name opens its page, where you can rename it and see its status.
- The trash can removes a connection, after you confirm.

Some brokerages need you to approve access again from time to time; the [Coverage Matrix]({{ '/reference/coverage/' | relative_url }}#brokerages) lists how often. When one does, its status reads **Reconnect**, and anything that depends on it shows **Reconnection required** with a **Reconnect** button. Reconnecting takes you through the brokerage's approval again and keeps the connection's place in your workspaces.
