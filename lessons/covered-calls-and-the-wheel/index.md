---
title: Covered calls and the Wheel
parent: Lessons
permalink: /lessons/covered-calls-and-the-wheel/
redirect_from:
  - /lessons/the-wheel/
nav_order: 1
has_children: true
section: lessons
description: "A path for newer option traders: what a covered call sells, where its premium comes from, what happens when the stock falls or rises, and how the Wheel and other variants build on it."
---

# Covered calls and the Wheel

A covered call is the first option trade many investors make: you own 100 shares, and you sell someone the right to buy them from you at a set price. You collect the premium up front, and in exchange you give up any gain above that price.

This path starts there, and you can work through all of it without an account, except the Campaign Journal tutorial, which follows a Wheel in a connected brokerage account. It looks at what you're actually selling, where the premium comes from, and what happens when the stock falls or rises. Then it shows that a cash-secured put is nearly the same position from the other side, which is where the Wheel comes in: sell puts until you're assigned, then covered calls until the shares are called away. Some traders run covered calls on shares they mean to keep, some run the Wheel, and some sell puts and never take the shares. The last lessons compare those styles, and the arguments about when to roll.

Read it in order. The lessons make the argument, the tutorials put it to work, and the explainer covers the model behind the figures.

## The path

1. **Lesson:** [Covered calls: what you're selling]({{ '/lessons/covered-calls-and-the-wheel/covered-calls/' | relative_url }}). Shares with a short call, and the upside you trade for the premium.
2. **Tutorial:** [Analyze a covered call]({{ '/tutorials/analyze-a-covered-call/' | relative_url }}). Build one in Trade analysis and read what it risks and returns.
3. **Explainer:** [How Qwidgets estimates the chance of profit]({{ '/explainers/chance-of-profit/' | relative_url }}). What **Probability**, **Win in range**, and **Expected Value** assume.
4. **Lesson:** [Choosing strikes and expirations]({{ '/lessons/covered-calls-and-the-wheel/choosing-strikes-and-expirations/' | relative_url }}). Premium against the chance your shares are called away.
5. **Tutorial:** [Screen for covered calls and cash-secured puts]({{ '/tutorials/screen-for-covered-calls/' | relative_url }}). Search the whole market with the Trade Screener.
6. **Lesson:** [Where the premium comes from]({{ '/lessons/covered-calls-and-the-wheel/where-the-premium-comes-from/' | relative_url }}). What option sellers are paid for, and what they give up.
7. **Lesson:** [When the stock falls]({{ '/lessons/covered-calls-and-the-wheel/when-the-stock-falls/' | relative_url }}). What the premium does and doesn't protect.
8. **Lesson:** [When the stock rises]({{ '/lessons/covered-calls-and-the-wheel/when-the-stock-rises/' | relative_url }}). Getting called away, and rolling up and out.
9. **Lesson:** [Cash-secured puts: the same position from the other side]({{ '/lessons/covered-calls-and-the-wheel/cash-secured-puts/' | relative_url }}). Why a short put and a covered call nearly match.
10. **Tutorial:** [Analyze a cash-secured put]({{ '/tutorials/analyze-a-secured-put/' | relative_url }}). The put side in Trade analysis.
11. **Lesson:** [Three ways to run it]({{ '/lessons/covered-calls-and-the-wheel/three-ways-to-run-it/' | relative_url }}). Covered calls on shares you keep, the Wheel, and selling puts, including what to do after a sharp fall.
12. **Lesson:** [When to roll, and the arguments about it]({{ '/lessons/covered-calls-and-the-wheel/when-to-roll/' | relative_url }}). The decision points, and what each camp says.
13. **Lesson:** [Check the calendar before you sell]({{ '/lessons/covered-calls-and-the-wheel/check-the-calendar/' | relative_url }}). Earnings, dividends, and scheduled announcements.
14. **Tutorial:** [Follow a Wheel in the Campaign Journal]({{ '/tutorials/follow-a-wheel-campaign/' | relative_url }}). A whole Wheel on one timeline.
15. **Lesson:** [Why it doesn't carry over to event contracts]({{ '/lessons/covered-calls-and-the-wheel/event-contracts/' | relative_url }}). The same idea on a different instrument, and why it doesn't work there.

## Live workspaces

Several lessons link to a shared workspace that shows the same idea on today's prices. They open in the app, and anything you change stays in your tab.

- [A covered call, on today's prices]({{ site.app_url }}/shared/workspace/covered-call)
- [Choosing a strike for the call]({{ site.app_url }}/shared/workspace/covered-call-strikes)
- [When the stock falls]({{ site.app_url }}/shared/workspace/covered-call-when-it-falls)
- [When the stock rises]({{ site.app_url }}/shared/workspace/covered-call-when-it-rises)
- [A covered call and a cash-secured put]({{ site.app_url }}/shared/workspace/covered-call-and-put)
- [After the fall]({{ site.app_url }}/shared/workspace/wheel-after-the-fall)
- [Check the calendar before you sell]({{ site.app_url }}/shared/workspace/wheel-catalyst-check)

Each workspace uses an underlying chosen to illustrate the idea, not as a recommendation. Its contracts are chosen again every week.
