---
title: Stress test a multi-expiration book
parent: Tutorials
permalink: /tutorials/stress-test-multi-expiration-book/
nav_order: 1
section: tutorials
description: "Value a calendar spread past its short leg's expiration, then see what a two-standard-deviation fall would do to it."
---

# Stress test a multi-expiration book

A calendar spread sells a near-term option and buys a later one, so its value on any date after the near leg expires depends on what happened when it did. In this tutorial you'll value one past that date in Book management, then see what a sharp fall would do to it in the stress tester.

You'll need a brokerage account with positions in more than one expiration; see [Connect a brokerage]({{ '/getting-started/' | relative_url }}#connect-a-brokerage-or-kalshi-account). The screenshots follow an SPY call calendar: short two calls in one month, long two of the same strike the next.

## 1. Open the book

In your brokerage account's **Portfolio**, select **Manage book** next to the underlying. The book page opens with the **Target date** set to the next expiration the book holds, which for a calendar is the short leg's.

{% include shot.html id="book-overview" alt="The SPY book page: the assumptions bar with the target date at the short call's expiration, the Held now and Pending book cards, and the chart of the book's change in value across outcomes." %}

## 2. Read it at the short leg's expiration

The chart shows how much the book gains or loses, against where SPY finishes on the target date. At the short leg's expiration it's the familiar calendar shape: the most gained near the strike, where the short call expires worthless and the long call keeps the most time value, and losses further out on either side.

{% include shot.html id="book-projection" alt="The book's change in value at the short call's expiration: a peak near the strike, falling into losses on either side." %}

## 3. Move past the short leg's expiration

Select **›** beside the target date to step forward a week. The short call now expires before the target, and the positions table marks it **settles first**.

{% include shot.html id="book-projection-past-front" alt="The same book a week past the short call's expiration: losses below the strike level off, and the change in value rises to the right." %}

The shape changes. The short call has settled at the price SPY reached on its own expiration date, on the way to the target, and what's left is the long call. If SPY keeps rising after the short call settles, the long call keeps gaining; if SPY falls, both calls end up worth little. [Price paths for multi-expiration books]({{ '/explainers/price-paths/' | relative_url }}) explains how each path settles the short call.

Try **At expiration** too: **Always exercise** assigns the short call if it finishes in the money, instead of settling it for cash, and shows what the shares would do to the book.

## 4. Stress test the account

The book page shows a range of outcomes. The stress tester answers one: what if this specific thing happens?

1. Select the **Stress Test** tab. Its **Target date** also starts at the next expiration.
2. Set **Target date** a week later, past the short call's expiration, using the calendar.
3. Select **Seed every name**, then **Down two standard deviations**. Every underlying's **Target price** moves down by two of its own standard deviations to that date.

{% include shot.html id="stress-test-results" alt="The stress tester a week past the short call's expiration, with every name seeded down two standard deviations: SPY's short call marked expired at the price reached on its expiration date, the long call's value at target, and the account's change." %}

## 5. Read the short leg's row

Look at the short call's row. It's tagged with what happened to it, **expired** or **settled**, and the price and date it happened at. That price isn't your target price. Each name moves along a path from today's price to its target, and a contract that expires on the way settles at the price the path reached on its expiration date. Most of the move falls where the market expects the most volatility.

Change SPY's **Target price** or **Target IV** on its row to try other outcomes. **Manage book** returns to the book page, and **Reset to market** starts over.

{% include quiz.html id="stress-test-short-leg-price" %}

## What's next

- [Book management]({{ '/options/book-management/' | relative_url }}): try changes to the book, such as rolling the short call, before you trade them.
- [Stress testing]({{ '/options/stress-testing/' | relative_url }}): every setting in the stress tester, including margin requirements at the target.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): what these projections assume. They're models of what could happen, not forecasts, and not investment advice.
