---
title: Why connect a brokerage?
parent: Accounts and connections
permalink: /accounts/why-connect/
nav_order: 3
section: accounts
description: "What connecting a brokerage adds: your positions, real-time quotes, trading, and tracking, and what stays private."
---

# Why connect a brokerage?

Qwidgets analyzes trades on market data anyone can see. Some things depend on data only your brokerage has, and those need a connection.

## What a connection adds

- **Your positions and balances.** They live at your brokerage. [Book management]({{ '/options/book-management/' | relative_url }}), the [stress tester]({{ '/options/stress-testing/' | relative_url }}), and the Portfolio work from them, so they need to read them.
- **Real-time quotes.** Without a connection, stock and option data comes from a delayed feed, at least 20 minutes behind the market. With one, quotes come through your brokerage and refresh about every 15 seconds. See [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}#data).
- **Trading.** Orders you place in Qwidgets go to your brokerage, which holds your account and your money. Qwidgets never holds either.
- **Tracking how it went.** Transactions, [Performance]({{ '/accounts/brokerage/performance/' | relative_url }}), and the [Campaign Journal]({{ '/accounts/brokerage/campaign-journal/' | relative_url }}) are built from your brokerage's history.

## How connecting works

You connect from Qwidgets by signing in at your brokerage and approving access; you come back to Qwidgets, which confirms the connection. Some brokerages ask you to approve again from time to time. [Getting Started]({{ '/getting-started/' | relative_url }}#connect-a-brokerage-or-kalshi-account) walks through it, and the [Coverage Matrix]({{ '/reference/coverage/' | relative_url }}) lists every supported brokerage.

When you connect a brokerage, you sign in on the brokerage's own site, so Qwidgets never sees your brokerage password. It keeps only the access tokens your brokerage issues, encrypted, and deletes them when you disconnect. To end access completely, also remove Qwidgets in your brokerage's settings.

## What stays private

Your connections are yours alone. They're never shared, not even in a workspace you share by link: before anyone else sees a shared workspace, Qwidgets removes every widget's account connection and account number, and widgets that use your brokerage show delayed data to other people. See [Sharing by link]({{ '/workspaces/sharing/' | relative_url }}#what-people-see).

## Kalshi

Connecting Kalshi adds your event contract portfolio, orders, settlements, and trading. You connect with an API key and its private key from your Kalshi profile, which Qwidgets stores encrypted. You never give Qwidgets your Kalshi password, and a read-only key is enough to see your portfolio. See [Kalshi account]({{ '/accounts/kalshi/' | relative_url }}).
