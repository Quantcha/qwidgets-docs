---
title: Coverage Matrix
parent: Reference
permalink: /reference/coverage/
nav_order: 1
section: reference
description: Every brokerage, exchange, and data source Qwidgets integrates with, and what each one supports.
---

# Coverage Matrix

Everything Qwidgets connects to today, and what each connection supports. [Getting Started]({{ '/getting-started/' | relative_url }}#connect-a-brokerage-or-kalshi-account) walks through connecting.

## Brokerages

Connect a brokerage to see your positions, balances, and orders, trade from Qwidgets, and track performance. Quotes for connected accounts refresh about every 15 seconds.

| | Schwab | E\*TRADE | Tradier |
|---|---|---|---|
| Positions, balances, orders | Yes | Yes | Yes |
| Trading: shares, options, multi-leg, shares with an option | Yes | Yes | Yes |
| Order preview before placing | No | Yes | Yes |
| Transaction history for performance tracking | Full history, updated during the day | Last 3 years, updated during the day | Full history, updated nightly |
| Price history charts | Yes | No | Yes |
| How often you reconnect | Every 7 days | Every day (access ends at midnight Eastern) | Not needed |

Positions from several brokerage accounts appear side by side in Qwidgets.

### Order entry

From a trade ticket you can place:

- **Shares:** Buy, Sell, Sell short, Buy to cover.
- **Options, one contract:** Buy to open, Sell to open, Buy to close, Sell to close.
- **Multi-leg:** two to four option legs as one order.
- **Shares with an option:** such as a covered call or a buy-write.

Single orders can be limit, market, stop, or stop limit. Multi-leg and combined orders are priced as a net debit, net credit, even, or market. Orders can be day, good until canceled, fill or kill, or immediate or cancel. You can change or cancel an order while it's working. Each brokerage applies its own rules to what it accepts, so what a given account can trade varies by brokerage.

## Market data without a brokerage

Without a connected brokerage, stock and option data comes from a delayed feed that refreshes about once a minute. It includes:

- Quotes for US stocks and ETFs
- Option chains with Greeks
- The option trade screener and the stock screener. The screeners always run on this feed, even when a brokerage is connected.

Price history charts need a brokerage that provides them.

## Prediction markets

| | Kalshi | Polymarket | PredictIt | Manifold |
|---|---|---|---|---|
| Events, markets, and price history | Yes | Yes | Yes | Yes |
| Order book | Yes | Yes | — | — |
| Live quote updates | With a connected Kalshi account | Yes | — | — |
| Account connection: portfolio, orders, settlements, trading | Yes | — | — | — |

PredictIt and Manifold don't have order books. Manifold prices markets with an automated market maker, and PredictIt runs its own exchange format.

### Kalshi trading

The Kalshi trade ticket places limit orders to buy or sell Yes or No, at prices between $0.01 and $0.99. Orders can be good until canceled, immediate or cancel, or fill or kill, and you can change or cancel resting orders. Qwidgets never moves money in or out of your Kalshi account.

## AI compute

[AI compute]({{ '/compute/' | relative_url }}) reads Kalshi's binary markets on GPU rental prices for the H200, B200, H100, A100, and RTX 5090, along with the index those markets settle against. Everything built from them is derived. No account is needed.

## News and AI

- **News:** the Link List and Article widgets can show the latest articles from TipRanks.
- **AI:** the [AI Prompt widget]({{ '/widgets/ai-prompt/' | relative_url }}) works with your own Anthropic (Claude) or Google (Gemini) API key, added as an integration.
