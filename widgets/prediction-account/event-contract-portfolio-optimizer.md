---
title: Prediction Distribution Builder
parent: Prediction Account widgets
grand_parent: Widgets
permalink: /widgets/event-contract-portfolio-optimizer/
nav_order: 7
widget_key: EventContractPortfolioOptimizer
section: widgets
description: "Turn your own view of an event's outcome into a Kalshi portfolio."
---

# Prediction Distribution Builder

Say what you think the outcome of an event will be, and see the portfolio that bets on your view. It needs a connected Kalshi account; see [Kalshi account]({{ '/accounts/kalshi/' | relative_url }}). See [Distribution Builder]({{ '/prediction-markets/distribution-builder/' | relative_url }}) for how it works.

{% include shot.html id="event-contract-portfolio-optimizer" alt="The Distribution Builder for a Kalshi inflation event: projected profit and loss by outcome range above a slider per range setting a distribution of your own, peaked a step above where the market centers." %}

## What it shows

- **A chart** of your profit and loss if the outcome lands in each range: **Current P&L** for what you hold, and **Projected P&L** for the optimal portfolio.
- **Your Prediction Distribution:** a slider per outcome range, with the market's own odds beneath each. **Reset To 0** and **Reset To Market** start over.
- **Optimal Portfolio:** for each market, what you hold, what the optimal portfolio holds, and the trade between them, with a button to open a ticket for it.
- **Current** and **Optimal Portfolio Analysis:** exposure, cost basis, expected value, expected profit, and expected return on exposure.

## Settings

The top bar:

- **Sizing:** **Match My View**, **Kelly Criterion**, **Maximize Edge**, **Equal Weight**, or **Risk Parity**.
- **Exposure:** how much to put at risk.
- **Taker** to **Maker:** whether trades are priced at the market or rest at your price.
- A market group, for events with more than one.

**Configure** sets the **Integration**, **Event ID**, and an optional **Market Group**. It works with ladders, ranges, spreads, scalar, and multiple-outcome events, but not a single yes-or-no market.
