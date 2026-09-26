---
title: AI compute
permalink: /compute/
nav_order: 7
section: compute
description: Kalshi's GPU rental markets, and the futures, options, and perpetuals Qwidgets derives from them.
---

# AI compute

Kalshi lists binary markets on the hourly rental price of GPU compute: yes-or-no contracts on whether a published rental index for a GPU finishes above a strike. A full ladder of them gives the market's distribution for that GPU. From that distribution, Qwidgets derives futures, options, and perpetuals, with no volatility input anywhere.

The binaries are real, tradable markets. **Everything derived from them is labeled derived wherever it appears, and none of it can be traded.** No account is needed. Find it under **AI Compute** in the left-hand menu.

{% include shot.html id="compute-index" alt="The GPU Compute Price Markets page: an explanation of what is traded and what is derived, and a table of GPUs with each one's realized index, even-odds level, near tenor, quoting grade, and 24-hour volume." %}

## Live and derived

Every figure carries a badge:

| Badge | Means |
|---|---|
| **Live** | A real quote on a listed Kalshi market, or the published index itself |
| **Derived** | Computed from live quotes; not listed on any exchange |
| **Indicative** | Computed from live quotes, and depending heavily on a part of the ladder nobody quotes |

Only live figures are called a price or a quote. A derived figure is an **implied cost**, a **model value**, an **implied level**, or a **model mark**.

## The underlyings

The index page lists each GPU: the NVIDIA H200, B200, H100, A100, and RTX 5090. For each one:

- **Realized index now:** where the published rental index stands.
- **Market's even-odds level:** the level the market treats as equally likely to be exceeded or not, from its nearest ladder. Derived.
- **Near tenor:** the settlement date of that ladder.
- **Quoted:** how well the ladder is quoted: **Deep**, **Adequate**, **Thin**, or **Unusable**, with how many rungs are quoted on both sides. Hover over the grade for the reason. Thin and unusable ladders are left off the forward curve.
- **Traded (24h):** the volume in the last day. Quoting and trading often disagree.

A few terms: a **tenor** is one settlement date, a single Kalshi event. A **rung** is one binary in a ladder, at one strike. A rung is **two-sided** when it can be bought and sold right now.

## A GPU's page

Each GPU's page builds from the listed binaries up to the derived stack:

- **The binaries:** a matrix of every quoted strike by tenor, shaded by the chance of settling above each strike or within each band. Click a cell to open that Kalshi market.
- **The distribution:** for one tenor, the chance of settling above each price and in each band, in dollars per GPU-hour, including the share of the distribution above the highest quoted strike, which nobody quotes.
- **The forward curve:** the even-odds level and the middle 50% of the distribution across monthly tenors, next to the realized index.
- **The stack:** one strike valued every way at once. The listed Yes and No binaries sit at the top; below them, derived dated and perpetual futures, calls, and puts. **How the dated values are calculated** breaks each figure down.

A tenor's own page lists every rung with its chance of settling above, its call and put model values, and the implied volatility you'd need to reproduce those values. That volatility is an output, never an input.

{% include shot.html id="compute-underlying" alt="A GPU's page: a note that only the binaries are live Kalshi markets, the realized index and even-odds level with Live and Derived badges, and the matrix of binaries by strike and tenor." %}

## Perpetuals

The perpetuals page values a perpetual future and a chain of perpetual options as a funding-weighted blend of every quoted monthly tenor. **Every perpetual figure is a model value. None of it is a quote.**

- **Anchor tenor** sets how long a roll the perpetual stands in for, from 1 to 18 months. It's a specification, not a market view.
- The chain shows each strike's call and put mark and the funding it throws off per month.
- Select a mark to see the tenors it blends and their weights.
- The page flags how much of the weight falls past the longest quoted tenor, where the ladder says nothing.

## Keep in mind

- Quoting changes daily, so which GPU is best quoted, and how many tenors can be drawn, changes too.
- Any figure you quote from these pages should name the date you captured it.
- The modeling choices behind all of this are on [Disclosures & Model Limits]({{ '/reference/disclosures/' | relative_url }}#ai-compute).
