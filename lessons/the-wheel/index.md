---
title: The Wheel
parent: Lessons
permalink: /lessons/the-wheel/
nav_order: 1
has_children: true
section: lessons
description: "A path for newer option traders: what the Wheel is, where its premium comes from, how it goes wrong, and how to find, check, and track one."
---

# The Wheel

The Wheel is one of the first option strategies many traders learn. You sell a cash-secured put. If it's assigned, you own the shares and sell covered calls on them. If the shares are called away, you're back to cash, and you start again.

It's popular because it's simple and because the premium arrives up front. This path looks at it closely: what position you actually hold, where the premium comes from, what it costs you when markets fall, and how to find, check, and track a Wheel in Qwidgets.

Read it in order. The lessons make the argument, the tutorials put it to work, and the explainer covers the model behind the figures. Everything works as a guest except the Campaign Journal tutorial, which follows a Wheel in a connected brokerage account.

## The path

1. **Lesson:** [The Wheel: one position in two phases]({{ '/lessons/the-wheel/one-position-two-phases/' | relative_url }}). Why the put phase and the call phase are nearly the same trade.
2. **Tutorial:** [Analyze a cash-secured put]({{ '/tutorials/analyze-a-secured-put/' | relative_url }}). Build one in Trade analysis and read its payoff, breakeven, and chance of profit.
3. **Explainer:** [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}). What **Probability**, **Win in range**, and **Expected Value** assume.
4. **Lesson:** [Choosing strikes and expirations]({{ '/lessons/the-wheel/choosing-strikes-and-expirations/' | relative_url }}). Trading premium against the chance of assignment.
5. **Tutorial:** [Screen for cash-secured puts]({{ '/tutorials/screen-for-secured-puts/' | relative_url }}). Search the whole market for candidates with the Trade Screener.
6. **Lesson:** [Where the premium comes from]({{ '/lessons/the-wheel/where-the-premium-comes-from/' | relative_url }}). What option sellers are paid for, and what they give up.
7. **Lesson:** [When the Wheel breaks]({{ '/lessons/the-wheel/when-the-wheel-breaks/' | relative_url }}). A sharp fall, and what the premium does and doesn't protect.
8. **Lesson:** [Check the calendar before you sell]({{ '/lessons/the-wheel/check-the-calendar/' | relative_url }}). Scheduled announcements, and what event contracts say about them.
9. **Tutorial:** [Follow a Wheel in the Campaign Journal]({{ '/tutorials/follow-a-wheel-campaign/' | relative_url }}). Each put, assignment, and call on one timeline. Needs a connected brokerage.
10. **Lesson:** [Why the Wheel doesn't carry over to event contracts]({{ '/lessons/the-wheel/event-contracts/' | relative_url }}). The same idea on a different instrument, and why it doesn't work there.

## Live workspaces

Four lessons link to a shared workspace that shows the same idea on today's prices. They open in the app with no account, and anything you change stays in your tab.

- [The Wheel, on today's prices]({{ site.app_url }}/shared/workspace/wheel-strategy)
- [Choosing a strike for the put]({{ site.app_url }}/shared/workspace/wheel-strike-ladder)
- [When the Wheel breaks]({{ site.app_url }}/shared/workspace/wheel-when-it-breaks)
- [Check the calendar before you sell]({{ site.app_url }}/shared/workspace/wheel-catalyst-check)

Each workspace uses an underlying chosen to illustrate the idea, not as a recommendation. Its contracts are chosen again every week, so they're always about five weeks from expiration.
