---
title: Follow a Wheel in the Campaign Journal
parent: Tutorials
permalink: /tutorials/follow-a-wheel-campaign/
nav_order: 4
section: tutorials
description: "See a Wheel's put, assignment, and covered call as one campaign, read how each leg did, and review all your Wheels together."
---

# Follow a Wheel in the Campaign Journal

A Wheel isn't one trade. It's a put, maybe an assignment, shares, a call or several, and finally the shares called away. Judged trade by trade, it can look like a string of small wins and one large loss, or the other way around. The Campaign Journal puts the whole thing on one timeline, so you can see what the Wheel actually made. In this tutorial you'll find a Wheel in your account's campaigns, read its timeline and how each leg did, and filter to all your Wheels at once.

You'll need a connected brokerage account with a Wheel in its history; see [Connect a brokerage]({{ '/getting-started/' | relative_url }}#connect-a-brokerage-or-kalshi-account). The screenshots follow a Wheel on one fund: a cash-secured put that was assigned, then a covered call that was called away.

## 1. Open Performance

Open your brokerage account and select **Performance**. If it asks first, select **Load all transactions**. The campaign list is below the summary figures and charts.

{% include shot.html id="wheel-campaign-performance" alt="The Performance page for a brokerage account: realized profit and loss, win rate, and expectancy above the cumulative realized P&L chart, with the list of campaigns below." %}

## 2. Find the Wheel

In the filters above the list, set **Status** to **Closed**. If the Wheel started before this year, set **Opened** to **All** too.

Qwidgets recognizes a Wheel on its own: a campaign that starts with a short put, is assigned, and goes on to a covered call is titled **Wheel** in the list. A campaign runs from flat to flat in one underlying, so the whole Wheel, from the first put to the shares being called away, is one campaign.

{% include shot.html id="wheel-campaign-list" alt="The closed campaigns list, with a campaign titled Wheel in one fund, spanning from the put's opening to the shares being called away." %}

## 3. Read the timeline

Select the campaign. Its timeline opens beneath it.

{% include shot.html id="wheel-campaign-timeline" alt="The Wheel's timeline: a Short Put phase that opens with the sold put, then a Covered Call phase that holds the call sold and the put's assignment on the same day, and ends when the call is assigned and the shares are called away, above the leg performance table." %}

The timeline is split into phases, each headed by the strategy the campaign held: first **Short Put**, then **Covered Call**. Within them, each action shows the cash it moved:

- **Opened** is the put you sold.
- The second phase starts on the day the put was assigned. It lists **Assigned**, where the put was exercised and you bought 100 shares at the strike, and **Adjusted**, the call you sold on those shares. Actions on the same day aren't necessarily listed in the order they happened.
- **Assigned** again at the end: the call was exercised and your shares were called away. That leaves you flat, so the campaign ends there.

Assignment appears in the middle of the campaign, not at its end, which is how the Wheel works.

## 4. Read how each leg did

Scroll to **Leg performance during the campaign**.

{% include shot.html id="wheel-campaign-legs" alt="The leg performance table: the short put, the shares, and the covered call, each with its own result over the campaign." %}

Compare the premiums from the put and the call with the result on the shares. In a Wheel that went well, the shares roughly broke even and the premiums are the profit. In one that went badly, the shares' loss dwarfs the premiums. Either way, the campaign's total is what the Wheel made.

## 5. Note what you learned, and review your Wheels together

Select **Annotate** and write a **Note** on why you opened it and what you'd do differently. **Tags, separated by commas** lets you group campaigns your own way, for example by why you chose the stock. Then select **Save**.

{% include shot.html id="wheel-campaign-annotate" alt="The Annotate panel on the Wheel campaign, with a note and a tag filled in, above the Save and Cancel buttons." %}

To see every Wheel together, set the **Patterns** filter above the list to **Wheel**. The win rate, expectancy, and charts at the top of the page then cover only your Wheels.

{% include quiz.html id="wheel-one-campaign" %}

## What's next

- [Campaign Journal]({{ '/accounts/brokerage/campaign-journal/' | relative_url }}): everything on the timeline, and correcting a cost basis or merging campaigns.
- [Performance]({{ '/accounts/brokerage/performance/' | relative_url }}): win rate, expectancy, and the equity curve.
- [When the Wheel breaks]({{ '/lessons/the-wheel/when-the-wheel-breaks/' | relative_url }}): what a campaign that went badly usually looks like, and why.
