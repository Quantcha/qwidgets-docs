# Qwidgets Docs — Repository Guide

This repo is the public source of `docs.qwidgets.com`: a Jekyll site on the Just the Docs theme, built by GitHub Pages from `main`. Everything here is public. Don't add internal notes, source-code paths from the app, strategy, or anything about how screenshots are produced.

## Pages

Every page sets front matter explicitly. URLs never depend on file names.

```yaml
---
title: Book management          # nav label and <title>
parent: Options                 # parent page's title (grand_parent for a third level)
permalink: /options/book-management/
nav_order: 3
section: options                # screenshot folder: assets/images/<section>/
placeholder: true               # until the page has content: adds noindex
sitemap: false                  # until the page has content: keeps it out of the sitemap
---
```

- When a page gets real content, remove `placeholder` and `sitemap: false`.
- Widget pages live at `/widgets/<registry-key-in-kebab-case>/` and carry `widget_key` with the registry key. Their URLs are permanent; a widget rename changes the title, never the permalink.
- Link into the app with `{{ site.app_url }}`, never a hardcoded host.
- Screenshots: `{% include shot.html id="<shot-id>" alt="…" caption="…" %}`. The image is `assets/images/<section>/<shot-id>.png`. Alt text describes what the screenshot shows. Diagrams are SVGs in the same folder, included with `ext="svg"`.
- Optional quizzes: `{% include quiz.html id="<quiz-id>" %}` with data in `_data/quizzes/<quiz-id>.yml` (`question`, and `choices` each with `text`, `correct`, `explanation`). Every choice explains itself, right or wrong.
- Callouts: `{: .note }`, `{: .tip }`, `{: .important }`, `{: .warning }` on the line before a paragraph.

## Tutorials

A tutorial walks one reader through one task, start to finish, with a screenshot at each step. The reference example is [Stress test a multi-expiration book](tutorials/stress-test-multi-expiration-book.md). New tutorials follow its shape.

**Choosing a topic**
- One task a real reader does, ending at a result they can act on: a number they read, a decision they can make, an order they could place. "Roll a short call that's being tested" is a tutorial; "a tour of the option chain" is a landing page.
- It uses what ships today, across one or two pages or widgets. A task that needs five features probably wants two tutorials.
- It teaches one idea worth checking with a question. If there's nothing to ask about, it's probably a how-to paragraph on a landing page instead.
- Say what it needs: guest, signed in, or a connected brokerage or Kalshi account. Prefer topics a guest can follow, and don't imply a connection is needed when it isn't.

**The page**
1. **Front matter:** `parent: Tutorials`, `permalink: /tutorials/<task-in-kebab-case>/`, `section: tutorials`, the next `nav_order`, and a `description` that states the task and its result in one sentence.
2. **Title:** the task as an imperative, sentence case ("Stress test a multi-expiration book").
3. **Opening, two short paragraphs:** why the task matters and what you'll do; then what you need, linked to where to get it, and what the screenshots follow ("The screenshots follow an SPY call calendar…").
4. **Numbered steps,** each an `## N. Imperative heading`. Name every control with its exact label in bold, and say where it is. One screenshot per step, after the text it illustrates, showing the result of the step.
5. **What to look for,** in prose after a screenshot: which figure or marker to read and why it matters. Never quote a figure from a screenshot.
6. **One quiz** near the end, on the idea the tutorial teaches, not on where a button is. Four choices, one right, each with an explanation that teaches something whether it's picked or not. The quiz ID names the idea (`stress-test-short-leg-price`).
7. **What's next:** two to four links, to the landing pages the tutorial used, the explainer behind it, and Disclosures & Model Limits when it models outcomes.

**Consistency**
- Every screenshot in a tutorial comes from one session, so the same positions and prices carry through every step. Figures in one step must agree with the next.
- Steps follow the fastest real route through the app. Mention an alternative route only if it's how most readers will arrive.
- Add the tutorial to the list on the Tutorials index (`tutorials/index.md`) with a one-line description.
- Link to the tutorial from the landing pages it teaches, where it helps a reader who's already there.

## Content rules

**Mission**
- The docs help people use and evaluate Qwidgets. Organize by what people are trying to do and by feature. List every integration where that's useful.
- **Home and Getting Started** are what evaluators read first. Lead with what you can do (plan, track, and manage investments), not a list of instruments. Name brokers as "Schwab, E\*TRADE, and more" and exchanges as "Kalshi, Polymarket, and more," in separate clauses. Don't feature AI compute there.
- **The Coverage Matrix** is the one page that lists every integration exactly. Other pages name two and link to it.
- **AI compute** gets full reference coverage in its own section, after the others.

**Describe what exists**
- Cover the features Qwidgets has. Don't list what it doesn't support unless it's critically important. For order entry, list the supported order types and note that they vary by brokerage.
- Don't mention earlier products or features that weren't carried over. Roadmap only where it earns its place.
- Don't list unreleased integrations.
- **The AI Prompt widget** gets a plain reference page: what it does and its limits. No promotion, and no mention on Home or Getting Started.
- **Tracking, reporting, and journaling** (Campaign Journal, Performance, Transactions) are for brokerage accounts. Don't imply them for event contracts.

**Access tiers** — keep them distinct everywhere:
- **Guest:** most of the functionality; nothing is kept between sessions.
- **Signed in to Qwidgets:** adds saved workspaces, copies of shared workspaces, and other saved items.
- **Integrations:** each adds what its kind provides. A brokerage adds positions, balances, orders, trading, tracking and journaling, and real-time data. Kalshi adds the event contract portfolio and trading.
- Never imply a sign-in or connection is needed to try Qwidgets. Say early what signing in and connecting add. Features that rest on your positions say they need a connection.
- **Getting Started** order: what you can do right away, then what signing in and connecting add, then signing in, then connecting a brokerage or Kalshi.

**UI wording**
- Describe the UI literally; the app's labels are authoritative. A shared workspace is copied with **Copy To My Workspaces**, and prose says "copy." "Clone" is the widget-menu action that duplicates a widget in place.
- Name pages by what they do. Don't coin a collective term for the pages that aren't workspaces.
- Screenshots show live prices from when they were captured and change whenever they're refreshed. Don't quote figures that appear in a screenshot; tell the reader what to look for.

**Style**
- American spelling, punctuation, and date formats.
- Em dashes have no spaces (word—word).
- "prediction market" and "insider trading" are never hyphenated.
- The product is **Qwidgets**. Never "Qwidgets for Prediction Markets" or "Qwidgets for Options."
- Never "bets," "odds," "wagers," or "predictions" as something users do. Say positions, contracts, implied probabilities.

**What Qwidgets is and isn't**
- Workspaces travel by **link** ("share," "link"), never "embed." No iframes of the app on this site.
- Don't frame Qwidgets as a prediction markets tool or an options tool.
- Say **free**, never "always free."
- Positions from several accounts appear side by side; don't imply a combined cross-account model.

**Asset-class scoping**
- **Greeks** are documented on options (chains and position Greeks). They aren't offered for prediction market contracts. Don't claim Greeks "across your whole book" when it includes event contracts, and don't say Greeks are meaningless on binaries.
- **Delta hedging** doesn't apply to categorical event contracts (elections, awards, rulings). Don't say it's meaningless on binaries generally.
- **Income strategies** (covered calls, iron condors, credit spreads) are options content only.
- **AI compute:** the Kalshi binaries are the only tradable instruments, and "price," "quote," "bid," and "ask" apply only to them. Futures, options, perpetuals, the forward curve, and volatility are derived: call them **implied cost** or **model value**. No implied volatility is used as an input. Any quoted figure names its capture date. Refer to third-party compute futures listings only generically.

**Launch language and advice**
- No "launch," "introducing," or "new" language.
- Not investment advice. Explainers link to Disclosures & Model Limits and state their model assumptions honestly.
