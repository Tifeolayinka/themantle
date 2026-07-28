# The Mantle — landing page

Built from the Figma design (node `42:126`) for the 44th Annual Holy Ghost
Convention's "The Mantle" track. React + Vite + Tailwind CSS v4.

## Run it

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Structure

```
src/
  components/
    Navbar.jsx        nav bar overlaid on the hero
    Hero.jsx           full-bleed hero, "Mantle" wordmark, event detail bar
    Mission.jsx          mission statement section
    Ministers.jsx          "Meet the Ministers" section + speaker grid
    MinisterCard.jsx          single speaker card
  data/
    assets.js           image URLs
    ministers.js         speaker roster (currently 8x the same placeholder,
                          matching the source design — replace with real names/photos)
```

## Before you deploy: swap the image URLs

The images in `src/data/assets.js` currently point at Figma's temporary
asset-export URLs. **These expire about 7 days after export.** Before
shipping, download each one and point the constants at your own hosted
copies (e.g. drop them in `/public` and reference `/your-image.jpg`, or
upload to a CDN):

- `heroBackground` — night crowd/stage shot behind the hero and ministers section
- `videoThumbnail` — small looping clip preview next to the event details
- `logo` — Holy Ghost Convention crest in the nav bar
- `speakerPhoto` — placeholder minister portrait

## Notes / things worth deciding next

- All 8 minister cards currently show the same placeholder name and photo
  ("Bishop Felix Adejumo") — that's what the source design had. Fill in
  `src/data/ministers.js` with the real roster once available.
- The "Accept Invitation" button links to `#invitation` — point it at a real
  registration form/page when one exists.
- Fonts: the design specs "Bodoni 72" (Book/Bold), which isn't available as
  a free web font, so this uses **Bodoni Moda** from Google Fonts as the
  closest open equivalent. Swap the `--font-display` value in `src/index.css`
  if you have a licensed copy of Bodoni 72.
# themantle
