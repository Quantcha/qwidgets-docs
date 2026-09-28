---
title: Check the calendar before you sell
parent: The Wheel
grand_parent: Lessons
permalink: /lessons/the-wheel/check-the-calendar/
nav_order: 5
section: lessons
description: "A put that expires after a scheduled announcement carries its risk. How options and event contracts each describe that risk, and what to check before you sell."
---

# Check the calendar before you sell

**Works as a guest.**

Some of the biggest moves in a stock or a fund happen on days you can see coming: an earnings report, a central bank's rate decision, an inflation or jobs release. A cash-secured put that expires after one of those days carries its risk, whatever else you think about the trade. This lesson looks at how to see that risk before you sell.

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

{: .note }
This lesson uses event contracts as information about an announcement. They aren't a hedge for the put, and whether to take a position in them is a separate decision.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/wheel-catalyst-check): the next scheduled announcement's event contracts, a countdown to it, and a put that expires after it, on today's prices.

## For single stocks: earnings

For a single company, the announcement that matters most is usually its own earnings report. The [Trade Screener]({{ '/options/trade-screener/' | relative_url }}) has filters for events before expiration, including earnings, so you can leave those puts out of a screen or look only at them. [Screen for cash-secured puts]({{ '/tutorials/screen-for-secured-puts/' | relative_url }}) uses one.

{% include quiz.html id="wheel-calendar-sources" %}

## What's next

- [Follow a Wheel in the Campaign Journal]({{ '/tutorials/follow-a-wheel-campaign/' | relative_url }}): the next piece in the path.
- [Events and markets]({{ '/prediction-markets/events-and-markets/' | relative_url }}): how to read an event's page and its chart.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): not investment advice.
