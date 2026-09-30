---
title: "Cash-secured puts: the same position from the other side"
parent: Covered calls and the Wheel
grand_parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/cash-secured-puts/
redirect_from:
  - /lessons/the-wheel/one-position-two-phases/
nav_order: 6
section: lessons
description: "A cash-secured put and a covered call at the same strike have nearly the same payoff. Why, and why it's the idea behind the Wheel."
---

# Cash-secured puts: the same position from the other side

A **cash-secured put** sells a put and sets aside enough cash to buy 100 shares at the strike if it's assigned. You collect the premium up front. It's usually described as getting paid to wait to buy a stock at a price you like, which makes it sound like the opposite of a covered call: one is about buying shares, the other about selling them.

Put both into Trade analysis, though, and they turn out to be nearly the same position.

## Side by side

A covered call and a cash-secured put, at the same strike and expiration:

{% include shot.html id="csp-call-payoff" alt="Trade analysis of 100 shares with a short call: a payoff flat to the right of the strike and falling to the left." %}

{% include shot.html id="csp-put-payoff" alt="Trade analysis of a short put at the same strike and expiration: a payoff with the same shape, flat to the right of the strike and falling to the left." %}

Same shape. To the right of the strike, both are flat: you keep a fixed amount however far the shares rise. To the left, both fall with the shares, with only the premium as a cushion.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/covered-call-and-put): both trades on today's delayed prices, one above the other.

## Why they match

Try it with round numbers. A stock is at $50, and you can sell either a $50 call or a $50 put for about $1.50.

- **The covered call:** you own the shares and sell the call. At $55, the shares are called away at $50 and you keep $1.50. At $45, the shares are down $5, less the $1.50, is $3.50.
- **The put:** at $55, it expires and you keep $1.50. At $45, you're assigned at $50 on shares worth $45: a $5 loss, less the $1.50, is $3.50.

Same outcome at every price. Owning the shares and selling a call leaves you with the stock's losses below the strike and a fixed amount above it, and that's exactly what selling a put gives you. The premiums differ slightly in practice, because the cash behind a put earns interest and the shares behind a call collect any dividend, but the positions behave nearly the same.

In the live workspace, the strike is below the current price, so the call is in the money and its premium is larger: it includes the amount the shares are already above the strike. That extra is paid back when the shares are called away at the strike, and the charts still line up.

## Why this matters

**Assignment doesn't change your exposure.** Hold a cash-secured put, get assigned, then sell a covered call at the same strike, and your exposure to the stock barely changes. What changes is what you hold: cash and a short put, or shares and a short call.

That's the idea behind **the Wheel**: sell cash-secured puts; if one is assigned, sell covered calls on the shares; when they're called away, go back to puts. It looks like switching between two strategies. It's really holding one position and changing its form. [Three ways to run it]({{ '/lessons/covered-calls-and-the-wheel/three-ways-to-run-it/' | relative_url }}) compares the Wheel with the other common styles.

Some real differences remain. A cash-secured put ties up cash equal to the strike times 100; a covered call ties up the shares. The shareholder collects dividends. Some brokers approve cash-secured puts at a higher options level than covered calls. And the tax treatment of the two can differ, which is a question for a tax professional.

{% include quiz.html id="wheel-same-position" %}

## What's next

- [Analyze a cash-secured put]({{ '/tutorials/analyze-a-secured-put/' | relative_url }}): build the put side yourself.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): not investment advice.
