---
title: Stress testing
parent: Options
permalink: /options/stress-testing/
nav_order: 5
section: options
description: Reprice a whole brokerage account under the prices and volatility you set.
---

# Stress testing

{% include needs.html tier="brokerage" scope="page" %}

The stress tester reprices every position in a brokerage account at prices and volatility you choose for each underlying, and shows what the account would be worth on a target date. It's on the **Stress Test** tab of a brokerage account, so it needs a connected brokerage.

{% include shot.html id="stress-testing" alt="The stress tester for a brokerage account: the assumptions bar, a summary sentence of what the account would be worth, the requirement estimate, and the table of positions with target prices, target volatility, and changes." %}

## Set the scenario

- **Target date:** defaults to the next expiration the account holds.
- **Target rate:** leave it blank to use the published rate curve.
- **At expiration:** **Cash-settle**, **Always exercise**, or **Exercise if covered**.
- **Requirement basis:** **Margin (Reg T)** or **Cash-secured**, with a **House multiplier** for margin.
- **Target price** and **Target IV** for each underlying, in its row of the table. The reset button next to each returns it to the market.

**Seed every name** fills in every underlying at once: move every price up or down two standard deviations or 10%, or double or halve every volatility. **Reset to market** starts over.

## Read the results

- **The summary sentence** says what the account would be worth on the target date, split into positions and cash, and the change. It's a scenario, not a forecast.
- **The requirement box** estimates the account's requirement now and at the target, next to what your brokerage reports, and the equity and excess or shortfall at the target. Select the multiple next to your brokerage's figure to adopt it as the house multiplier.
- **The table** shows each position's value now and at the target, and the change. Legs that expire before the target date are marked settled, expired, or exercised, with the price they settled at.

**Manage book** on a name opens its [book]({{ '/options/book-management/' | relative_url }}).

What the stress tester assumes, including how interim expirations settle and how requirements are estimated, is on [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}#stress-test).

How interim expirations are reached on the way to the prices you set is in [Price paths for multi-expiration books]({{ '/explainers/price-paths/' | relative_url }}#the-stress-testers-paths).

For a walkthrough, see [Stress test a multi-expiration book]({{ '/tutorials/stress-test-multi-expiration-book/' | relative_url }}).
