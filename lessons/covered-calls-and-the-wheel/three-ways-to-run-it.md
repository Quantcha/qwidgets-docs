---
title: Three ways to run it
parent: Covered calls and the Wheel
grand_parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/three-ways-to-run-it/
nav_order: 7
section: lessons
description: "Covered calls on shares you keep, the Wheel, and selling puts without taking the shares: the same position with three different rules, and what each does after a sharp fall."
---

# Three ways to run it

[The last lesson]({{ '/lessons/covered-calls-and-the-wheel/cash-secured-puts/' | relative_url }}) showed that a covered call and a cash-secured put at the same strike are nearly the same position: the stock's downside, with a capped upside, for a premium. Traders who sell them regularly tend to fall into three styles. They hold that same exposure. What differs is the rule each follows when the option is tested or assignment arrives.

| | Covered calls on shares you keep | The Wheel | Selling puts |
|---|---|---|---|
| **You start with** | Shares you already own and mean to hold | Cash, selling puts | Cash, selling puts |
| **Assignment is** | Something to avoid | The plan | Something to avoid |
| **When the option is tested** | Roll the call up and out | Let it be assigned | Roll the put out, often down |
| **It goes wrong when** | The stock keeps rising and every roll costs more | The stock falls a long way after assignment | The stock keeps falling and every roll adds to a losing position |

## Covered calls on shares you keep

This is the most common style. You own shares for the long term and sell calls well above today's price to earn something from them in the meantime. Being called away isn't the goal: it would end a holding you wanted and could realize a taxable gain. So these traders sell strikes far enough out that assignment is unlikely, and roll up and out when a strike is threatened. [When the stock rises]({{ '/lessons/covered-calls-and-the-wheel/when-the-stock-rises/' | relative_url }}) covers the trade-off.

## The Wheel

The Wheel treats assignment as part of the plan. Sell cash-secured puts on a stock you'd be glad to own. If one is assigned, own the shares and sell covered calls on them. When the shares are called away, go back to selling puts. The rule that holds it together is that you're content to own the stock at the put's strike and to sell it at the call's. If assignment is something you'd do anything to avoid, you're running a different strategy.

## Selling puts

Some traders sell puts and never intend to take the shares. When a put is threatened, they roll it: buy it back and sell a later one, often at a lower strike, usually for a net credit. It's a real strategy, and it's often called the Wheel, but it isn't: without assignment, there's no call phase. The risk is in the habit. Each roll can defer a loss while making the position longer or larger.

## After a sharp fall

Every style meets the same moment eventually: the stock falls a long way, and you hold shares (or a put) well above today's price. Say you were assigned at a price well above where the shares are now.

{: .note }
Trade analysis values the shares from today's price, not from what you paid. The loss you're already carrying isn't on these charts; keep it in mind as you compare them.

Here are three covered calls you could sell from there:

{% include shot.html id="after-fall-at-cost" alt="Trade analysis of 100 shares with a call at a strike far above today's price: the credit is tiny and the payoff rises across the forecast range from today's price up to that strike." %}

{% include shot.html id="after-fall-near" alt="Trade analysis of 100 shares with a call near today's price: a larger credit, and a payoff that goes flat just above today's price." %}

{% include shot.html id="after-fall-months-out" alt="Trade analysis of 100 shares with a call at the original cost, several months out: a larger credit than the near-term call at the same strike, and a payoff that keeps rising toward that strike." %}

- **A call at your cost** keeps the whole recovery, but pays almost nothing. You wait, collecting little, for a recovery that may take a long time.
- **A call near today's price** pays real premium. If the shares recover past that strike, they're called away there, and the loss is locked in, less what the calls paid.
- **A call at your cost, months out,** pays more than the near-term one at the same strike, because it has more time. You keep the recovery and collect something for waiting, but you're committed for longer. This is rolling out in time.

The forecast range on these trades runs from today's price up to your cost, so **Highest** shows how much of a recovery to your cost each call lets you keep.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/wheel-after-the-fall): all three on today's delayed prices.

None of these is right in every case, and there's a fourth: close the position and move on. What the Wheel's rule suggests is to decide which you'd choose before you start, not in the middle of a loss.

### Rolling and approval levels

Rolling a covered call or a cash-secured put means closing one covered option and opening another, and each half is allowed wherever covered calls and cash-secured puts are. Entering both halves as a single order is sometimes treated as a spread, which some brokers approve at a higher level. Brokers set their own levels, so check yours.

One roll deserves a warning: rolling a losing put **down and out** for a credit, to avoid being assigned. It collects a little more premium and pushes the decision later, while the position gets longer and, often, larger. It's the same trap as selling calls below your cost, from the other side.

{% include quiz.html id="three-ways-assignment" %}

## What's next

- [When to roll, and the arguments about it]({{ '/lessons/covered-calls-and-the-wheel/when-to-roll/' | relative_url }}): the next lesson in the path.
- [Follow a Wheel in the Campaign Journal]({{ '/tutorials/follow-a-wheel-campaign/' | relative_url }}): what a whole Wheel looks like in a connected account.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): not investment advice.
