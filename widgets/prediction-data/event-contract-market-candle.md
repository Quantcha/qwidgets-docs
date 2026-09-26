---
title: Prediction Market Candle
parent: Prediction Data widgets
grand_parent: Widgets
permalink: /widgets/event-contract-market-candle/
nav_order: 6
widget_key: EventContractMarketCandle
section: widgets
description: "A candlestick chart of one market's trading history."
---

# Prediction Market Candle

A market's price history as candles: where it opened, traded, and closed in each interval.

{% include shot.html id="event-contract-market-candle" alt="Hourly Yes candles for a Kalshi inflation market over several days, with the last price in the top bar and a range navigator below." %}

## What it shows

A candlestick chart of the market's trades, with the last price in the top bar and a navigator for zooming in. Kalshi and Polymarket publish candles; other providers don't, and the widget says so.

## Settings

- **Yes** or **No** chooses the side.
- **1m**, **1h**, or **1d** sets the candle interval.
- **Configure** sets the **Provider** and **Market ID**.

## Actions

**⋮** opens the market's event, **Open Market**, **Open Order Book**, and **Trade via** your Kalshi account.
