---
title: Options
permalink: /options/
nav_order: 4
has_children: true
section: options
description: Option chains, trade analysis, search, and screening, and managing the positions you hold.
---

# Options

Qwidgets' options tools cover a trade from the idea to managing it once you hold it. Every tool works on delayed data without an account. Connect a brokerage for fresher quotes, and to trade, manage your book, and stress test your account. See the [Coverage Matrix]({{ '/reference/coverage/' | relative_url }}).

## Find a trade

- [Option chain]({{ '/options/option-chain/' | relative_url }}): calls and puts by strike for one expiration, with Greeks, and where the market's open interest and volume sit.
- [Option charting]({{ '/options/option-charting/' | relative_url }}): plot contracts against each other across expirations, such as implied volatility by strike.
- [Option search]({{ '/options/option-search/' | relative_url }}): give a view and a forecast for one symbol, and search 24 strategies for the trades that fit it best.
- [Calendar search]({{ '/options/calendar-search/' | relative_url }}): search calendar and diagonal spreads across pairs of expirations.
- [Trade screener]({{ '/options/trade-screener/' | relative_url }}): pick a strategy and scan the whole US option market for trades.

## Understand it

- [Trade analysis]({{ '/options/trade-analysis/' | relative_url }}): payoff, breakevens, probabilities, and Greeks for any trade of shares and option legs. Every search and screen hands its results here.

## Hold it

- [Book management]({{ '/options/book-management/' | relative_url }}): what one underlying's positions are worth now and at a target date, and how a change would alter that.
- [Stress testing]({{ '/options/stress-testing/' | relative_url }}): reprice the whole account under the prices and volatility you set.

Book management and stress testing work on your positions, so they need a connected brokerage.

## Getting around

Search **Stocks & Options** in the left-hand menu for a symbol. Its page has tabs for **Overview**, **Chain**, **Charts**, **Analyze**, **Search**, and **Calendar**, a price panel above the tool, and a **Source** picker for where the data comes from: the delayed feed or a connected brokerage.

From **Trade analysis**, **Trade** opens a ticket in your brokerage account, and **Model in book** adds the trade to an account's book as pending changes. With a brokerage connected, the other tools have a **Trade** menu too. Without one, it reads **Connect a brokerage to trade**.

The analyzer, the calendar search, and the screener can save your work when you're signed in: **Save trade**, **Save search**, and **Save screen**.

Model assumptions for everything here are on [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}).
