---
title: Distribution builder
parent: Prediction markets
permalink: /prediction-markets/distribution-builder/
nav_order: 3
section: prediction-markets
description: Turn your own probabilities across an event's outcomes into positions, sized the way you choose.
---

# Distribution builder

The **Prediction Distribution Builder** is a widget that takes your view of an event, the probability you give each outcome, and works out the positions that express it, next to what you already hold. It works on events whose outcomes form a distribution: ladders of thresholds, sets of ranges, spreads, and numeric outcomes.

It needs a connected Kalshi account. Open it from an event's context menu (**Open Portfolio Optimizer with** your account), or add it to a workspace and choose the account and event in its settings.

## Set your view

Under **Your Prediction Distribution**, each outcome has a slider. Set how likely you think each one is; next to each, in gray, is what the market implies. **Reset To Market** starts from the market's view, and **Reset To 0** clears it.

Then choose:

- **Sizing:** how positions are sized.
  - **Match My View:** payoffs proportional to your probabilities.
  - **Kelly Criterion:** maximize long-run growth.
  - **Maximize Edge:** only where your view exceeds the market's price.
  - **Equal Weight:** the same size in every outcome you've chosen.
  - **Risk Parity:** the same risk in every outcome.
- **Exposure:** how much, in dollars, to put behind the view.
- **Taker** to **Maker:** how far into the spread orders are priced.

## Read the result

- **The chart** compares your current profit and loss across outcomes with the projected one.
- **Optimal Portfolio** lists each market with its bid and ask, what you hold now, the optimal position, and the order that gets you there, with its price and cost.
- **Current Portfolio Analysis** and **Optimal Portfolio Analysis** compare exposure, cost basis, expected value, expected profit, and expected return.

A row's **Trade** button opens a Kalshi trade ticket filled in with that order. Nothing is sent until you place it on the ticket and confirm.

The output follows from the probabilities you enter, so it's only as good as they are. See [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}#prediction-markets).
