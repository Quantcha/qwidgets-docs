---
title: Disclosures & Model Limits
parent: Reference
permalink: /reference/disclosures/
nav_order: 3
section: reference
description: What Qwidgets is and isn't, where its data comes from, and the assumptions behind its models.
---

# Disclosures & Model Limits

## Not investment advice

Qwidgets is an analysis tool. Nothing in Qwidgets or in these docs is investment, tax, or legal advice, or a recommendation to buy or sell anything. Qwidgets doesn't manage money or make decisions for you, and it never holds your account or your funds. Your brokerage and Kalshi hold those; Qwidgets reads from them and sends the orders you place.

Every figure Qwidgets computes is a model output. Models simplify, and the sections below say how. Check anything that matters against your brokerage before you act on it.

## Data

- **Delayed data.** Without a connected brokerage, stock and option data comes from a delayed feed that refreshes about once a minute. Don't treat it as a live price.
- **Brokerage data.** With a connected brokerage, quotes refresh about every 15 seconds, account data about every 30 seconds, and orders about every 10 seconds. Balances, positions, and orders are what your brokerage reports.
- **Market hours.** Stock quotes and account data refresh during regular trading hours on weekdays, and pause outside them. Early closes aren't accounted for, so data may keep refreshing after an early close.
- **Prediction markets.** Market data refreshes every few seconds to every few minutes depending on the view, and streams live where the exchange supports it. See the [Coverage Matrix]({{ '/reference/coverage/' | relative_url }}).
- **Screeners** refresh about every five minutes and always use the delayed feed.

## Option pricing

- **Model.** Options are priced as American options on a binomial tree, and their Greeks come from the same tree. Qwidgets also estimates the chance an option is exercised early.
- **Dividends.** Dividends are projected from the company's declared ex-dividend date and its usual cadence, assuming evenly spaced payments. When the cadence is unknown or irregular, future dividends aren't projected.
- **Volatility.** Implied volatility comes from the option chain. Where the market doesn't imply a volatility for a contract, Qwidgets models its Greeks and says so. When no volatility can be read at all, Qwidgets says so rather than guess.
- **Interest rates** come from a published risk-free rate curve.

## Probabilities

- **Distribution.** Probabilities for stocks and options assume prices follow a lognormal distribution with a single volatility. Real markets fall sharply more often than that, so these probabilities **understate the chance of large downward moves**.
- **Drift.** Prices are assumed to drift at the risk-free rate, not at any forecast of returns.
- **Win in range** is the chance a trade is profitable *given* the price lands inside the forecast range you set. It isn't the chance of profit overall. **Probability** is the chance of landing in the range at all.
- **Implied distribution.** The option chain can compare the distribution implied by option prices with the lognormal one. The two often differ, and that difference is information, not an error.

## Book projection

[Book management]({{ '/options/book-management/' | relative_url }}) values an underlying's positions now and at a target date.

- **Path dependence.** The book walks through every expiration before the target date, so what happens to an expiring leg affects the value at the target. You choose how expiring contracts are handled: cash-settled, always exercised, or exercised only when covered.
- **Price path.** **Price sweep** moves the price smoothly across a range of outcomes around the forward price. **Monte Carlo** samples random paths. Both are models of how the price might move, not forecasts of how it will.
- **Exit volatility.** **Current market** keeps each contract's own implied volatility, including skew. A custom value scales every contract's volatility together.
- **Dividends** paid before the target date lower the modeled share price and are counted as cash.

## Stress test

[Stress testing]({{ '/options/stress-testing/' | relative_url }}) reprices every position in an account at prices and volatility you set for each underlying. Its presets (up or down two standard deviations, up or down 10%, double, halve) are starting points to edit.

- **It's a scenario, not a forecast.** It shows what the account would be worth if those prices happened, not how likely they are.
- **Interim expirations.** Contracts that expire before the target date settle at the price modeled for their own expiration date, on the way to your target price, not at the target price.
- **Cash** is held flat: it earns no interest and pays none.
- **Dividends** aren't modeled at the account level. The book page for a single underlying does model them.

## Margin estimates

The stress tester estimates the account's requirement two ways:

- **Margin (Reg T)** uses exchange-minimum maintenance requirements, times a house multiplier you set.
- **Cash-secured** assumes every obligation is fully covered by cash.

These are estimates from Qwidgets' own prices. Your brokerage applies its own house rules above the minimum, and portfolio margin accounts use a different method entirely. Your brokerage's figure is the one that counts; the stress tester shows it beside the estimate. The maximum loss on a trade ticket isn't a margin requirement either; a brokerage will typically hold more.

## Prediction markets

- **Implied probabilities** are read from each market's midpoint price. Within an event whose outcomes are mutually exclusive, they're scaled to add up to 100%.
- **The Prediction Distribution Builder** sizes positions from probabilities you assign, using a method you choose, such as Kelly. Its output follows from your probabilities, so it's only as good as they are.

## AI compute

Kalshi lists binary markets on GPU rental prices. Those binaries are real, tradable markets. Everything [AI compute]({{ '/compute/' | relative_url }}) builds from them is **derived**: futures, options, the perpetual, the forward curve, and volatility. They're computed from the binaries' prices, aren't listed anywhere, and can't be traded. Derived figures are called an **implied cost** or a **model value**, never a price or a quote.

- **Distribution.** Each ladder of binaries is read as a probability distribution from its midpoint prices, with gaps and inconsistencies repaired inside the bid and ask.
- **No volatility input.** No implied volatility is used to price anything. Volatility is shown only as an output of the derived prices.
- **Tails.** Above the top strike, value comes from fitted tail models and is shown as a range, with the tail's share of the value disclosed.
- **The perpetual** is a blend of every quoted month, weighted toward the nearest, and ends at the longest quoted month. Perpetual figures published elsewhere use different methods and aren't expected to match.
- **Liquidity.** Ladders are graded on spread, two-sided quoting, and staleness, and thin ladders are marked.
- **Dates.** Any compute figure quoted outside Qwidgets should name the date it was captured. The ladders change daily.
