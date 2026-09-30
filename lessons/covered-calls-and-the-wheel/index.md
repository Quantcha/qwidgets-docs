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

{% include path_steps.html path="covered-calls-and-the-wheel" %}

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
