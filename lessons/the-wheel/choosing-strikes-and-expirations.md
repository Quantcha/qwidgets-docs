---
title: Choosing strikes and expirations
parent: The Wheel
grand_parent: Lessons
permalink: /lessons/the-wheel/choosing-strikes-and-expirations/
nav_order: 2
section: lessons
description: "A strike closer to the price pays more premium and is assigned more often. What delta tells you about that trade-off, and how the expiration changes it."
---

# Choosing strikes and expirations

**Works as a guest.**

Every cash-secured put in a Wheel is two choices: which strike, and which expiration. Neither has a right answer. Each trades one thing you want against another, and this lesson shows the trade-offs side by side.

## The strike: premium against assignment

A put with its strike close to the current price pays more premium than one further below it, and it's more likely to finish in the money, so you're more likely to be assigned. A put far below the price pays little, and you usually keep it.

The option chain's **Greeks** view gives a quick way to compare strikes. A put's **delta** is a rough stand-in for the chance it finishes in the money: a put with a delta of −0.30 is, very roughly, a 30% chance of assignment at expiration.

{% include shot.html id="wheel-chain-greeks" alt="The option chain on the Greeks view for one expiration, with the puts' delta falling in size from the strikes near the current price to those further below it." %}

Delta isn't exactly that probability, and Qwidgets works out the chance of profit a different way. [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}) explains both. For choosing among strikes, the rough reading is enough.

Here are three puts in the same expiration, at deltas near −0.15, −0.30, and −0.45:

{% include shot.html id="wheel-strike-ladder" alt="Three cash-secured puts in Trade analysis, one above the other, at strikes progressively closer to the current price: each shows its credit, breakeven, and payoff chart, with the modeled outcomes below." %}

Read down the three:

- **Credit** grows as the strike gets closer to the price.
- **Breakeven** rises with it. The put nearest the price starts losing after a smaller fall.
- **Win in range**, with the forecast set wide, falls as the strike gets closer. You keep the premium less often.
- **Expected Value** weighs the two. Read it with care.

The premium comes from market prices, and the chances come from a model that uses one volatility for every strike. The market doesn't: it usually prices puts further below the current price at higher implied volatilities than those near it, a pattern called the skew. Where the model and the market disagree, **Expected Value** shows the disagreement, not a free edge. [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}) explains why.

What you're really choosing is a pattern of outcomes. A strike further out wins more often and wins less. A strike closer in wins less often, wins more, and leaves you owning the shares more often. Choose the pattern you'd rather live with, on a stock you'd be comfortable owning.

## The expiration: premium per day against flexibility

An option's premium doesn't grow in step with its time to expiration. Under the usual pricing models it grows closer to the square root of the time, so a 30-day option is worth noticeably more than half of a 60-day one at the same delta. Selling shorter expirations collects more premium for each day you hold the position.

What you give up:

- **Faster moves in your position.** A short-dated option's value reacts more sharply to the share price as expiration approaches, so a fall late in its life turns into a loss quickly.
- **More decisions.** Each expiration is another choice of strike, another fill across the bid-ask spread, and another chance to get it wrong.
- **What's on the calendar.** The longer the expiration, the more likely it spans an earnings report or a scheduled economic announcement. [Check the calendar before you sell]({{ '/lessons/the-wheel/check-the-calendar/' | relative_url }}) covers that.

Many traders who run the Wheel sell expirations a few weeks to a couple of months out, which keeps a reasonable premium without a decision every few days. Whatever you choose, compare the same delta across expirations rather than the same strike, so you're comparing like with like.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/wheel-strike-ladder): the chain and all three puts on today's delayed prices. Switch the chain to a later expiration and see how the premium at the same delta changes.

{% include quiz.html id="wheel-strike-trade-off" %}

## What's next

- [Screen for cash-secured puts]({{ '/tutorials/screen-for-secured-puts/' | relative_url }}): search the whole market for puts in the delta and expiration range you want.
- [Where the premium comes from]({{ '/lessons/the-wheel/where-the-premium-comes-from/' | relative_url }}): the next lesson in the path.
- [Option chain]({{ '/options/option-chain/' | relative_url }}): the **Pricing**, **Greeks**, and **Value** views.
