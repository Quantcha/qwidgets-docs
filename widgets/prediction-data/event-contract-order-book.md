---
title: Prediction Order Book
parent: Prediction Data widgets
grand_parent: Widgets
permalink: /widgets/event-contract-order-book/
nav_order: 7
widget_key: EventContractOrderBook
section: widgets
description: "The bids and asks resting on one prediction market."
---

# Prediction Order Book

The depth of one market: who's bidding and asking, and at what price.

{% include shot.html id="event-contract-order-book" alt="The Yes order book for a Kalshi inflation market, cumulative by volume: bids on the left and asks on the right by price." %}

## What it shows

Bids on the left and asks on the right, by price. Kalshi and Polymarket publish order books; other providers don't.

## Settings

The top bar:

- **Yes** or **No**: which side's book.
- **Cumulative** or **Levels**: running totals, or each price level on its own.
- **Volume** or **Dollars**: contracts, or their value.
- **−** and **+**: how many levels, up to **All**.

**Configure** sets the **Provider** and **Market ID**.

## Actions

**⋮** opens the market's event, **Open Market**, **Open Market Candles**, and **Trade via** your Kalshi account.
