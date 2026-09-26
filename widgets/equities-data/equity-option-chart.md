---
title: Option Chart
parent: Equities Data widgets
grand_parent: Widgets
permalink: /widgets/equity-option-chart/
nav_order: 4
widget_key: EquityOptionChart
section: widgets
description: "Plot option contracts against each other across expirations."
---

# Option Chart

Plot listed contracts against each other, across several expirations, with an optional fitted curve: the volatility smile, delta by strike, and more. It works on the delayed feed with no account, and on real-time data from a connected brokerage. Choose the source as the **Provider** in the widget's settings. See [Option charting]({{ '/options/option-charting/' | relative_url }}).

{% include shot.html id="equity-option-chart" alt="SPY implied volatility against strike for three expirations, calls and puts, with fitted curves." %}

## Settings

The top bar, saved as you change it:

- What to plot against what: **Implied Volatility**, **Mid Price**, **Delta**, **Gamma**, **Theta**, **Vega**, **Rho**, or **Theoretical Price**, against **Strike**, **Delta**, or **Mid Price**.
- Which **Expirations**.
- **Calls**, **Puts**, **Both**, or **Combined**.
- **Fitted** or **Points only**, where a fit applies.

**Configure** sets the **Provider** and **Symbol**.

## Actions

Click a point to open that contract in an [Option]({{ '/widgets/equity-option/' | relative_url }}) widget. **⋮** opens **Open Quote**, **Open Price Chart**, and **Open Option Chain**.
