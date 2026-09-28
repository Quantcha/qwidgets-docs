---
title: Glossary
parent: Reference
permalink: /reference/glossary/
nav_order: 2
section: reference
description: Terms used in Qwidgets and these docs.
---

# Glossary

Terms as Qwidgets uses them, in the app and in these docs.

## Workspaces and access

Copy To My Workspaces
: The button on a shared or guest workspace that makes it your own workspace, with every widget. Needs a sign-in.

Favorite
: A workspace you've marked to appear on the home page and in the left-hand menu.

Guest workspace
: A workspace you can build without signing in. It's kept only in the browser tab you built it in.

Integration
: A connection to a brokerage, an exchange account, or another service, managed under **Integrations** in your profile.

Shared workspace
: A workspace with sharing turned on. Anyone with its link can open it in a browser, no account needed. Owners can also ask to list it in the public catalog.

Widget
: One tile on a workspace, such as an option chain, a chart, or an order book. Add one with **Add Widget**.

Workspace
: A canvas where you compose widgets into one view you return to.

## Options and equities

Assignment
: When the holder of an option you sold exercises it. On a short put, you buy 100 shares per contract at the strike; on a short call, you sell them. Usually happens at expiration to contracts that finish in the money, and can happen earlier.

At expiration
: How the book handles a contract that expires before the target date: **Cash-settle**, **Always exercise**, or **Exercise if covered**.

Book
: Everything held in one underlying in one brokerage account, valued together. The book page shows it **Held now** and as a **Pending book** with your edits.

Campaign
: One span of a position in an underlying, from flat to flat. Campaigns are what the Campaign Journal and Performance report on.

Cash-secured put
: A short put with enough cash set aside to buy the shares at the strike if it's assigned. The Trade Screener calls it a **Secured Put**.

Covered call
: A short call on shares you own, 100 per contract. If it's assigned, you deliver the shares you hold.

Days to expiration
: The calendar days left until an option expires, often written DTE.

Exit rate
: The interest rate the book assumes at the target date.

Exit volatility
: The volatility the book assumes when it values contracts still open at the target date. **Current market** keeps each contract's own implied volatility.

Fill assumption
: Where between the bid and the ask you expect to trade, from **Taker** (you cross the spread) to **Maker** (you're filled at your side).

Greeks
: Delta, gamma, theta, vega, and rho: how an option's value responds to the underlying's price, time, volatility, and interest rates. Shown on option chains and for positions.

House multiplier
: A factor the stress tester applies on top of the exchange-minimum margin to approximate a brokerage's own rules. **1** means the minimum.

Implied volatility (IV)
: The volatility that makes an option's model price match its market price.

Leg
: One contract or share line in a trade or position.

Moneyness
: Where a strike sits relative to the underlying's price: below, at, or above the money. The option chain can filter by it.

Pending book
: The book with changes you're considering: quantities, expirations, strikes, or rights edited in place. Changes are kept while you're in the app.

Premium
: The price of an option. A seller collects it up front and keeps it whatever happens next.

Price path
: How the book moves the underlying from today to the target date: **Price sweep** or **Monte Carlo**.

Requirement basis
: How the stress tester estimates the account's requirement: **Margin (Reg T)** or **Cash-secured**.

Stress test
: Repricing every position in an account under prices and volatility you choose. It's a scenario, not a forecast.

Target date
: The date the book or stress test values positions at.

Volatility risk premium
: The tendency, over long periods, for implied volatility to be higher than the volatility that follows. It's why option sellers have tended to be paid over time, and it's not guaranteed.

Wheel
: A strategy that sells cash-secured puts, sells covered calls on the shares if a put is assigned, and starts again with puts once the shares are called away. See [The Wheel]({{ '/lessons/the-wheel/' | relative_url }}).

## Prediction markets

Event
: A real-world question, such as a rate decision or an election, made up of one or more markets.

Implied probability
: A market's price read as the chance its outcome happens.

Market
: One tradable outcome within an event, with Yes and No sides.

Order book
: The resting orders to buy and sell a market at each price. Kalshi and Polymarket have them.

Prediction Distribution Builder
: A widget that turns the probabilities you assign across related markets into positions, using a sizing method such as Kelly.

Settlement
: The payout when a market resolves.

## AI compute

Derived
: Computed from Kalshi's GPU-price binaries rather than quoted by anyone. Every derived figure is labeled that way and can't be traded.

Implied cost
: A derived price for compute, such as a future's level. Not a quote.

Model value
: A derived value for an instrument that isn't listed, such as an option or the perpetual. Not a quote.

Perpetual
: A derived blend of every quoted month, weighted toward the nearest. Not a published spot price.

Tenor
: A settlement date. Each tenor is one Kalshi event whose markets all settle on that date.

Underlying
: The GPU a compute ladder prices, such as the NVIDIA H200.
