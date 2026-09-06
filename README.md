# Ahmad Abuadas, personal site

A scroll-driven personal site for Ahmad Jamal Abuadas, data and AI engineer.

Scrolling the hero plays a generated film frame by frame: a descent through a shaft of falling data that sorts itself into lanes and settles on one bright horizon. The page comes to rest exactly where the film does, and the real site begins there.

The previous React version of this site lives on the `old-website` branch.

## Running it

There is no build step, no framework and no npm install. The repository root is the website.

Open `index.html` directly and you get the still-image hero. That is by design: browsers block file loading from a plain file path, so the video loader falls back, and that fallback state is exactly what phone visitors see.

For the full scroll journey, serve the folder:

```
npx http-server
```

or

```
python -m http.server
```

Then open the address it prints, in a real browser.

## Deploying

Upload the contents of this repository, `index.html` with `assets/` beside it, to any static host. The zip's top level must be `index.html` itself, not a folder containing it, or the host serves a directory listing instead of the site.

One thing to patch at deploy time: `index.html` carries a `<!-- DEPLOY STEP -->` comment above the `og:image` and `og:url` tags. Those need the live absolute URL before link previews will work.

## Layout

```
index.html                 the whole site: markup, styles and script
assets/
  hero-scrub.mp4           the scroll-scrubbed hero film
  hero-poster.jpg          first frame, painted before the film arrives
  hero-ending.jpg          last frame, also the phone and reduced-motion hero
  shot-chaos.jpg           section stills, all cut from the same film
  shot-lanes.jpg
  shot-settle.jpg
  portrait.jpg
  logos/                   company and university marks
  ahmad-abuadas-resume.pdf
review/
  design-package.md        every design decision, written before the build
```

## How the hero works

- The film is fetched as a Blob behind a progress ring, so seeking works even on hosts without partial-download support.
- Scroll progress drives the film's time through a smoothing loop that goes idle once it settles and while the hero is off-screen.
- Seeks are gated and coalesced so they never overlap, which is what keeps scrubbing smooth in Chrome.
- Every scroll-driven style is written only when it actually changes.
- Each caption sits over a shade whose depth was tuned against the worst frame behind that caption, measured at 5.57:1 contrast or better.
- Phones, portrait tablets, landscape phones and reduced-motion visitors get a composed still hero instead, and download neither the film nor the poster.
- The page is complete and readable if the film never loads at all.

## Credits

The hero film and the section imagery are generated abstract art, not photographs of real systems or real data. Every claim about the work comes from the resume.
