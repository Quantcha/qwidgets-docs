---
title: Why it doesn't carry over to event contracts
parent: Covered calls and the Wheel
grand_parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/event-contracts/
redirect_from:
  - /lessons/the-wheel/event-contracts/
nav_order: 10
section: lessons
description: "Selling event contracts can look like selling options for premium. Why it isn't: an event contract's price is a probability, and there's no volatility premium to collect."
---

# Why it doesn't carry over to event contracts

Once covered calls and the Wheel make sense, it's tempting to look for the same thing elsewhere. Event contracts seem like a natural place. A contract on an unlikely outcome might trade at 10 cents and settle at zero most of the time. Selling it looks a lot like selling a put far below the price: small, frequent gains, and a rare large loss.

The payoff shape is similar. The reason to expect a profit isn't.

## What the premium is paid for

[Where the premium comes from]({{ '/lessons/covered-calls-and-the-wheel/where-the-premium-comes-from/' | relative_url }}) makes the case that option sellers have been paid, over long periods, because implied volatility has tended to run above the volatility that followed. Option buyers pay extra for protection against sharp moves, and sellers collect it. The question a seller is really answering is whether implied volatility is too high.

## What an event contract's price is

An event contract's price is an implied probability: 10 cents means the market puts the outcome at about 10%. There's no volatility in that price to be too high or too low. The only question is whether the probability is right.

Time passing does change some contracts. A contract on whether something happens by a date loses value as the days go by without it happening. But that's the probability falling as the window closes, and the market already prices it. It isn't time value eroding on a schedule for a seller to collect.

So selling a 10-cent contract makes money on average only if the true probability is below 10%. That's a judgment about the event itself: better information, or better analysis, than the market's. It's a real way to trade, and it's a completely different one from selling options.

## Two different questions

| | Selling options | Selling event contracts |
|---|---|---|
| **The price reflects** | How large a move the market expects | How likely the outcome is |
| **You profit on average if** | Implied volatility is too high | The implied probability is too high |
| **A structural premium to collect** | Historically, yes: the volatility risk premium | No equivalent |

This is why Qwidgets treats options and event contracts with different tools, even in the same workspace. Strategies built to collect option premium, such as the Wheel, covered calls, and credit spreads, belong to options. On event contracts, the work is estimating probabilities, and the tools are built for that: comparing prices across exchanges, and reading the implied probability of every outcome in an event.

{% include quiz.html id="wheel-event-contract-edge" %}

## What's next

- [Covered calls and the Wheel]({{ '/lessons/covered-calls-and-the-wheel/' | relative_url }}): back to the start of the path.
- [Events and markets]({{ '/prediction-markets/events-and-markets/' | relative_url }}): reading an event's implied probabilities.
- [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}): not investment advice.
