---
title: When to roll, and the arguments about it
parent: Covered calls and the Wheel
grand_parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/when-to-roll/
nav_order: 8
section: lessons
description: "Close early or hold to expiration, roll at 21 days, roll only for a credit, roll or take assignment: the decision points, and what each camp argues."
---

# When to roll, and the arguments about it

Ask a room of option sellers when to roll and you'll get several confident, incompatible answers. That isn't because some of them don't understand options. The choices trade one thing for another, and traders weigh those things differently. This lesson goes through the common decision points and what each side argues. It doesn't pick a winner, and none of it is advice.

One idea from [Cash-secured puts]({{ '/lessons/covered-calls-and-the-wheel/cash-secured-puts/' | relative_url }}) runs through all of it: **a roll changes what you hold, not what you're exposed to.** Rolling a tested put out a month is nearly the same exposure as taking assignment and selling a call at the same strike for next month. Keep that in mind when a rule promises that rolling makes a risk go away.

## Close early, or hold to expiration?

**Hold to expiration.** The option is sold to be kept. Closing early means paying the bid-ask spread twice and giving up the premium that's left. For the Wheel, expiration is where assignment happens, and assignment is the plan.

**Close early at a profit target,** often about half the premium. The argument is about what's left: near the end of an option's life, the premium remaining is small, but the position still carries the full risk of a sharp move. Closing and selling a fresh option puts that capital back to work where the premium is larger for the risk taken.

Both have a point. The trade-off is fewer transactions and costs against less time spent holding a small reward for a large risk.

## Roll at a fixed time, such as 21 days out?

A rule popularized by several trading educators is to manage positions at about 21 days to expiration: close or roll, whatever the price. The reasoning is the same as closing early: the last weeks carry the fastest-moving risk. Critics answer that a fixed day ignores what's actually happening, and that the number is a rule of thumb, not a property of options.

## Roll only for a credit?

"Never roll for a debit" is a common rule, especially for tested puts. The appeal is that every roll adds premium. The criticism is that a credit can hide what's happening: rolling a losing put down and out for a small credit extends a losing position and makes it last longer, and the credit is small next to the loss it defers. A roll is worth judging on the new position you'd hold, not on whether it pays.

## A tested put: roll, or take assignment?

- **Take assignment,** the Wheel's answer. You sold the put because you'd be glad to own the stock at the strike. Owning it now is the plan, and selling calls on it is the next step.
- **Roll out, or down and out,** the put seller's answer. It avoids tying up cash in shares and collects more premium.

Given that rolling out is nearly the same exposure as being assigned and selling a call, the choice is less dramatic than it sounds. The practical differences are costs, whether you'd rather hold cash or shares, dividends, and taxes.

## A tested covered call: let the shares go, or roll up and out?

Covered in [When the stock rises]({{ '/lessons/covered-calls-and-the-wheel/when-the-stock-rises/' | relative_url }}). If you wanted to sell at the strike, letting them go is the plan working. If you meant to keep the shares, rolling up and out keeps them at a cost, and repeated rolls can cost more than the calls paid.

## After a sharp fall

Covered in [Three ways to run it]({{ '/lessons/covered-calls-and-the-wheel/three-ways-to-run-it/' | relative_url }}#after-a-sharp-fall): calls at your cost, calls near today's price, calls further out in time, or closing the position.

## Where Qwidgets helps

In [Trade analysis]({{ '/options/trade-analysis/' | relative_url }}), build the position you'd hold after the roll and compare it with the one you hold now: the premium, the breakeven, and where the cap sits. With a brokerage connected, [Book management]({{ '/options/book-management/' | relative_url }}) lets you try the roll against your actual positions as a pending change before you trade it.

When you're ready, and with a brokerage connected, **Roll Position** on an option in your account's Portfolio opens an order ticket with both halves of the roll, closing the current contract and opening its replacement, for you to edit before you send it.

{% include quiz.html id="roll-changes-what-you-hold" %}

## What's next

- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): not investment advice.
