---
title: "The Wheel: one position in two phases"
parent: The Wheel
grand_parent: Lessons
permalink: /lessons/the-wheel/one-position-two-phases/
nav_order: 1
section: lessons
description: "The Wheel's put phase and call phase look like two different trades. Their payoffs show they're nearly the same position."
---

# The Wheel: one position in two phases

**Works as a guest.** No account needed for anything on this page.

The Wheel is usually told as a story in two parts. First you sell a cash-secured put, and you're "paid to wait" to buy a stock at a price you like. If the put is assigned, you own the shares and sell covered calls on them, and now you're "paid to own" it. If the shares are called away, you're back to cash, and you start again.

Told that way, it sounds like two different trades, with assignment as the moment you switch from one to the other. This lesson puts both phases into Trade analysis, and shows that they're nearly the same position.

## The put phase

A **cash-secured put** sells a put and sets aside enough cash to buy 100 shares at the strike if you're assigned. You collect the premium up front.

{% include shot.html id="wheel-put-payoff" alt="Trade analysis of a cash-secured put: the credit, amount at risk, and breakeven above a payoff chart that is flat to the right of the strike and falls to the left of it." %}

Look at the shape of the chart. To the right of the strike, the line is flat: the put expires worthless and you keep the premium, and that's the most you can make however far the shares rise. To the left, the line falls with the share price. You're buying shares at the strike that are worth less than that, and the premium only covers part of the difference. The **Breakeven** is where the two meet: the strike, less the premium.

## The same position, from shares and a call

Now build the other phase's position at the same strike: own 100 shares and sell a call at the same strike and expiration. This is a **covered call**.

{% include shot.html id="wheel-call-payoff" alt="Trade analysis of 100 shares with a covered call at the same strike and expiration: a payoff chart with the same shape as the cash-secured put's, flat to the right of the strike and falling to the left." %}

It's the same shape. To the right of the strike, the shares are called away at the strike and your gain stops there. To the left, you hold shares that are falling, and the premium you collected is the only cushion.

## Why they match

Try it with round numbers. A stock is at $50, and you can sell either a $50 put or a $50 call for about $1.50.

- **The put:** if the stock finishes at $55, the put expires and you keep $1.50. At $45, you're assigned at $50 on shares worth $45: a $5 loss, less the $1.50, is $3.50.
- **The covered call:** you buy at $50 and sell the call. At $55, the shares are called away at $50 and you keep $1.50. At $45, the shares are down $5, less the $1.50, is $3.50.

Same outcome at every price. That isn't a coincidence of the numbers. Owning the shares and selling a call leaves you with the stock's losses below the strike and a fixed amount above it, and that's exactly what selling a put gives you. The premiums differ slightly in practice, because the cash behind a put earns interest and the shares behind a call collect any dividend, but the positions behave nearly the same.

In the workspace for this lesson, the strike is below the current price. The call is in the money there, so its premium is larger: it includes the amount the shares are already above the strike. That extra is paid back when the shares are called away at the strike, and the two charts still line up. In a real Wheel, the call comes after assignment, when the price has fallen to the strike or below, so it's usually sold at or out of the money. [When the Wheel breaks]({{ '/lessons/the-wheel/when-the-wheel-breaks/' | relative_url }}) shows that version.

{: .tip }
[Open the live version]({{ site.app_url }}/shared/workspace/wheel-strategy): both trades on today's delayed prices, one above the other. Change the expiration on either one, then move its date to match, and compare them again.

## What this means for the Wheel

**Assignment doesn't change your risk.** Before assignment you're exposed to the stock falling, with your gain capped at the premium. After assignment you're exposed to the stock falling, with your gain capped at the premium. What changes is what you hold: cash and a short put, or shares and a short call.

That changes how to think about the whole strategy:

- **The Wheel is a decision to carry a stock's downside in exchange for premium.** Run it only on something you'd be comfortable owning at the strike, because in both phases, that's the risk you hold.
- **The premium is the whole upside.** However far the stock rises, you keep the premium and not much more. [Where the premium comes from]({{ '/lessons/the-wheel/where-the-premium-comes-from/' | relative_url }}) looks at why option sellers are paid it, and [When the Wheel breaks]({{ '/lessons/the-wheel/when-the-wheel-breaks/' | relative_url }}) at what it costs when the stock falls.

Some real differences remain between the phases. A cash-secured put ties up cash equal to the strike times 100; a covered call ties up the shares. The shareholder collects dividends. A short option can be assigned before its expiration. And the tax treatment of the two can differ, which is a question for a tax professional.

{% include quiz.html id="wheel-same-position" %}

## What's next

- [Analyze a cash-secured put]({{ '/tutorials/analyze-a-secured-put/' | relative_url }}): build the put phase yourself and read its figures.
- [Choosing strikes and expirations]({{ '/lessons/the-wheel/choosing-strikes-and-expirations/' | relative_url }}): the next lesson in the path.
- [Trade analysis]({{ '/options/trade-analysis/' | relative_url }}): every setting on the page these charts come from.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): what these figures assume. They're models, not forecasts, and not investment advice.
