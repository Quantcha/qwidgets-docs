---
title: Kalshi account
parent: Accounts and connections
permalink: /accounts/kalshi/
nav_order: 5
section: accounts
description: Your Kalshi portfolio, orders, settlements, and trading from Qwidgets, plus perps and Kalshi's demo exchange.
---

# Kalshi account

Connect a Kalshi account to see your event contract portfolio, orders, and settlements, and to trade, beside the markets you're following. Kalshi is the one prediction market exchange Qwidgets connects to as an account. Qwidgets never moves money in or out of it. See [Getting Started]({{ '/getting-started/' | relative_url }}#connect-a-brokerage-or-kalshi-account) to connect one.

Once connected, **Accounts** under **Predictions** in the left-hand menu lists it.

## Portfolio

The account's page shows **Cash**, **Positions**, and **Total**, then your positions grouped by event. Each position shows its side (**Yes** or **No**), quantity, average price, the market's bid and ask, cost basis, change, and market value. An event's name opens the event; a market's name opens a ticket for it.

**Orders** and **Settlements** open the account's other pages.

## Orders

**Orders** lists your orders, **Active** or **All**, with their status (resting, executed, or cancelled), how much has filled, the limit price, the notional value, and when each was placed and expires.

Open an order to see its details. While it's resting you can change its quantity or price and select **Update**, or **Cancel** it after confirming.

## Trade

**Trade via** your account, on a market's page, or a **Trade** link in an event's market table, opens the ticket:

- **Action:** **Buy** or **Sell**.
- **Side:** **Yes** or **No**. Clicking the bid or ask fills in the side and price.
- **Quantity** and the price in **Cents**, from 1 to 99. The ticket shows the debit or credit.

**Place Order** sends a limit order that rests until it fills or you cancel it.

The **Prediction Trade Ticket** widget does the same on a workspace, with a choice of how long the order stays open, and asks you to confirm before sending.

## Settlements

**Settlements** lists markets that have resolved: your side and quantity, total cost, fees, revenue, and when each settled. **Load More** reaches further back.

## Perps

The same Kalshi connection covers perps, once Kalshi has enabled them for your account. Perps are enabled by Kalshi, not in Qwidgets; until they are, the perps pages say so. With perps on, **Accounts** under **Perps** in the left-hand menu lists the account. See [Your perps portfolio]({{ '/perps/portfolio/' | relative_url }}) and [Trade perps]({{ '/perps/trading/' | relative_url }}).

The perps portfolio shows the same account's prediction market cash, and the prediction market portfolio links to the perps one. Moving money between them happens at Kalshi.

## Kalshi Demo Account

Kalshi runs a demo exchange with play money. Connect it as a **Kalshi Demo Account**, with an API key created at demo.kalshi.co, to practice prediction market and perps trading from Qwidgets. A key from your real Kalshi account doesn't work there, and a demo key doesn't work on the real exchange.

The demo exchange has its own prices and order books, separate from Kalshi's real exchange, even where a market has the same ticker. Pages reached through a demo account are marked as demo, and its trade confirmations say the order goes to the demo exchange. You can connect both a Kalshi account and a Kalshi Demo Account, and [Perps Markets]({{ '/perps/' | relative_url }}#perps-markets) then switches between the two exchanges.
