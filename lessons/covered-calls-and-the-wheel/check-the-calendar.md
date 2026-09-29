---
title: Check the calendar before you sell
parent: Covered calls and the Wheel
grand_parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/check-the-calendar/
redirect_from:
  - /lessons/the-wheel/check-the-calendar/
nav_order: 9
section: lessons
description: "A put that expires after a scheduled announcement carries its risk. How options and event contracts each describe that risk, and what to check before you sell."
---

# Check the calendar before you sell

Some of the biggest moves in a stock or a fund happen on days you can see coming: an earnings report, a central bank's rate decision, an inflation or jobs release. An option you sell that expires after one of those days carries its risk, whatever else you think about the trade. This lesson looks at how to see that risk before you sell.

## What the options already tell you

Option prices know the calendar. Implied volatility usually rises into a scheduled announcement and drops after it, because the market expects a larger move that day. That's why a put expiring just after earnings can pay noticeably more than one expiring just before. The extra premium isn't a gift: it's the price of carrying the announcement.

What option prices tell you is **how large** a move the market expects. They don't tell you which outcome of the announcement it expects, or how likely each outcome is.

## What event contracts add

Event contracts are markets on the outcome itself: whether a rate decision is a cut, a hold, or a hike, or which range an inflation figure lands in. Each contract's price is an **implied probability** for its outcome.

{% include shot.html id="catalyst-event-chart" alt="The event chart for an upcoming economic announcement, showing the implied probability of each outcome as a bar." %}

Put the two together and you have both halves of the question: how likely each outcome is, from the event contracts, and how much a surprise would matter, from the options.

{% include shot.html id="catalyst-put" alt="Trade analysis of a cash-secured put on a broad fund, expiring after the announcement, with its credit, breakeven, and payoff chart." %}

Before selling a put that spans an announcement, ask:

- **Which outcome would move this underlying most?** For a fund of bank stocks, a surprise in rates. For a single company, its own earnings.
- **How likely do the event contracts say that outcome is?** An outcome priced at a small implied probability is a surprise if it happens, and surprises are what move prices.
- **Is the premium worth carrying it?** The extra premium from the announcement is what the market charges for exactly this risk.

The same questions apply to a covered call, in the other direction: a call that expires after an announcement caps a good surprise. If the announcement is the reason you own the shares, selling a call through it gives away the outcome you were waiting for.

{: .note }
This lesson uses event contracts as information about an announcement. They aren't a hedge for the put, and whether to take a position in them is a separate decision.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/wheel-catalyst-check): the next scheduled announcement's event contracts, a countdown to it, and a put that expires after it, on today's prices.

## For single stocks: earnings

For a single company, the announcement that matters most is usually its own earnings report. The [Trade Screener]({{ '/options/trade-screener/' | relative_url }}) has filters for events before expiration, including earnings, so you can leave those options out of a screen or look only at them. [Screen for covered calls and cash-secured puts]({{ '/tutorials/screen-for-covered-calls/' | relative_url }}) uses one.

## Dividends and early assignment

A covered call has one date of its own to watch: the stock's **ex-dividend date**. Whoever owns the shares the day before it collects the dividend. If your call is in the money and the dividend is larger than the time value left in the call, its owner may exercise early to collect the dividend, and your shares are called away before expiration, taking the dividend with them.

It isn't a loss beyond what the covered call already allowed: you sell at the strike, as agreed. But it can end a position earlier than planned, just before a payment you were counting on. The [Trade Screener]({{ '/options/trade-screener/' | relative_url }}) can filter on **Dividend before expiration**.

{% include quiz.html id="wheel-calendar-sources" %}

## What's next

- [Follow a Wheel in the Campaign Journal]({{ '/tutorials/follow-a-wheel-campaign/' | relative_url }}): the next piece in the path.
- [Events and markets]({{ '/prediction-markets/events-and-markets/' | relative_url }}): how to read an event's page and its chart.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): not investment advice.
