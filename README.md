# Qwidgets Docs

Source for [docs.qwidgets.com](https://docs.qwidgets.com), the documentation for [Qwidgets](https://predictions.qwidgets.com). It's a [Jekyll](https://jekyllrb.com/) site using the [Just the Docs](https://just-the-docs.com/) theme, published by GitHub Pages from `main`.

## Preview locally

### With Ruby

Requires Ruby 3.x and Bundler. On Windows, [RubyInstaller](https://rubyinstaller.org/) with the DevKit works.

```bash
bundle install
bundle exec jekyll serve
```

Then open <http://localhost:4000>. The `github-pages` gem matches what GitHub Pages builds with.

### With Docker

```bash
docker run --rm -it -p 4000:4000 -v "$PWD":/srv/jekyll -w /srv/jekyll ruby:3.3 sh -c "bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

## Writing pages

See [CLAUDE.md](CLAUDE.md) for page front matter, the screenshot and quiz includes, and the content rules.

## Publishing

GitHub Pages builds `main` from the repository root with its native Jekyll build; there's no Actions workflow. `CNAME` sets the custom domain, `docs.qwidgets.com`. Anything merged to `main` is live within minutes.
