---
title: "Covered calls: what you're selling"
parent: Covered calls and the Wheel
grand_parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/covered-calls/
nav_order: 1
section: lessons
description: "A covered call trades the upside above the strike for premium today, and keeps nearly all of the downside. The payoff chart shows exactly what changes hands."
---

# Covered calls: what you're selling

A covered call is usually described as extra income on shares you already own. You hold 100 shares, sell a call against them, and collect the premium. If the shares finish below the strike, the call expires and you keep both. If they finish above it, the shares are called away at the strike, and you keep the premium.

That's all true. What the description leaves out is what you gave up to get the premium, and a payoff chart shows it directly. This lesson puts a covered call and the same shares side by side in Trade analysis.

## The shares on their own

Start with what you already have: 100 shares, valued on the call's expiration date.

{% include shot.html id="covered-call-shares" alt="Trade analysis of 100 shares on their own: a straight payoff line rising from lower left to upper right, with the breakeven at today's price." %}

It's a straight line. Every dollar the shares rise, you make $100; every dollar they fall, you lose $100.

## The same shares with a covered call

Now sell one call against them, at a strike above today's price.

{% include shot.html id="covered-call-payoff" alt="Trade analysis of 100 shares with a short call above today's price: the payoff rises with the shares up to the strike, then goes flat." %}

Compare the two charts:

- **Below the strike,** the line has the same slope as the shares alone, shifted up by the premium. You still take every dollar of a fall; the premium softens it slightly.
- **Above the strike,** the line goes flat. However far the shares rise past the strike, you're paid the strike, not the market price.
- **Breakeven** is today's price less the premium per share, and less any dividend due before expiration.

So the trade is this: you sell the upside above the strike, and the premium is its price. The downside stays with you, almost unchanged.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/covered-call): both positions on today's delayed prices. Try a higher strike on the covered call and watch the premium shrink and the flat part of the line move out.

## Why people sell it anyway

Giving up the upside sounds like a bad trade, but it isn't necessarily one. You're paid for it up front, every time. Most stocks, most months, don't rise past a strike set above today's price, so most of the time the premium is extra return and the call expires. The months you regret it are the ones where the shares jump.

[Where the premium comes from]({{ '/lessons/covered-calls-and-the-wheel/where-the-premium-comes-from/' | relative_url }}) looks at why option sellers have tended to be paid for this over long periods. [When the stock falls]({{ '/lessons/covered-calls-and-the-wheel/when-the-stock-falls/' | relative_url }}) and [When the stock rises]({{ '/lessons/covered-calls-and-the-wheel/when-the-stock-rises/' | relative_url }}) look at the two ways it goes wrong.

## What "covered" means

The call is covered because you own the shares you'd have to deliver. If it's assigned, your shares go to the buyer at the strike, and nothing more is owed. That's why brokers allow covered calls at their lowest options approval level: the most you can lose is what you'd lose owning the shares anyway, less the premium.

A few mechanics worth knowing from the start:

- **One contract covers 100 shares.** Owning 250 shares covers two calls, not three.
- **Assignment can come early.** A call that's in the money can be exercised before expiration, most often just before the stock goes ex-dividend. [Check the calendar before you sell]({{ '/lessons/covered-calls-and-the-wheel/check-the-calendar/' | relative_url }}) covers it.
- **Being called away is a sale.** It can realize a taxable gain on shares you've held a long time. That's a question for a tax professional, and it matters most to people selling calls on shares they mean to keep.

{% include quiz.html id="covered-call-what-you-sell" %}

## What's next

- [Analyze a covered call]({{ '/tutorials/analyze-a-covered-call/' | relative_url }}): build one yourself and read its figures.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): these are models, not forecasts, and not investment advice.
