---
title: Widgets
permalink: /widgets/
nav_order: 9
has_children: true
section: widgets
description: "Every widget you can put on a workspace, grouped the way the Add Widget dialog groups them."
---

# Widgets

Widgets are the pieces you compose into a workspace: a quote, a chart, an option chain, an order book, your portfolio, a note. Each one does one job, and most open others with the same symbol, event, or account from their **⋮** menu, so a workspace grows from whatever you start with. See [Composing widgets]({{ '/workspaces/composing/' | relative_url }}) for adding them, and [The canvas]({{ '/workspaces/canvas/' | relative_url }}) for moving, resizing, and configuring them.

## What every widget has

- **A title bar** with a **☰** menu for configuring, duplicating, and removing the widget. Titles are generated from what the widget shows, such as "SPY · 1M · Schwab", unless you set your own.
- **Configure**, which sets the widget's source and subject, plus its colors and an optional title of your own. Settings you tune against what you see, like a chart's range or a table's filter, sit in the widget's top bar instead, and are saved as you change them.
- **A ⋮ menu** on most widgets, and on the rows inside them, for opening related widgets beside it.

## What they need

Most widgets work as a guest. Quotes and charts use a delayed feed until you connect a brokerage for real-time data. Account widgets need the matching connection: a brokerage for the Equities Account widgets and a Kalshi account for the Prediction Account widgets. The AI Prompt widget uses your own AI provider key. See [Accounts and connections]({{ '/accounts/' | relative_url }}).

## Groups

- [Prediction Data]({{ '/widgets/groups/prediction-data/' | relative_url }}): events, markets, charts, and order books from every prediction market provider.
- [Prediction Account]({{ '/widgets/groups/prediction-account/' | relative_url }}): your Kalshi balance, portfolio, orders, and trading, and the Distribution Builder.
- [Equities Data]({{ '/widgets/groups/equities-data/' | relative_url }}): quotes, charts, option chains, the trade screener, and trade analysis.
- [Equities Account]({{ '/widgets/groups/equities-account/' | relative_url }}): your brokerage balances, portfolio, books, orders, trading, and performance.
- [News]({{ '/widgets/groups/news/' | relative_url }}): news feeds and links you choose.
- [AI]({{ '/widgets/groups/ai/' | relative_url }}): one-shot prompts to your own AI model.
- [Utilities]({{ '/widgets/groups/utilities/' | relative_url }}): notes, Markdown, countdowns, and clocks.
