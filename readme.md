# Y2K Party Design System

A loud, art-first design system for a party / nightlife website, pitched at the year 2000: exploding vector shard art, white pages with blood-red accent type, crimson night grounds, Bauhaus-orange navigation blocks, typo-collage layouts with dashed crop lines, Win2000 buttons and windows, a chrome CRT television, and constant motion (explosions, glitch tears, CRT switch-on/off, flicker).

There is **no company brand, logo, or product** behind this system. "Y2K Party" is descriptive. Wherever a mark would go, use the placeholder wordmarks `your>party` (Jost) or `Your Party.` (Archivo 900).

## Sources
All art direction comes from user-supplied screenshots in `uploads/` (no codebase, Figma, fonts or icons were provided):
- Round 1 (`10.29.13`, `10.29.30`, `10.29.45`, `10.30.07`, `10.33.07`): Flash-portfolio collages, flash party photography, night crowd. **The cyan/pink/navy palette from these was rejected by the user and removed.** The flash photos remain as imagery.
- Round 2 (`11.02.20`, `11.02.36`, `11.02.48`): red/orange exploding vector shards on grey with a right-aligned numbered menu; black-crimson digital abstract with tall tracked caps; chrome-blue 3D (blue later rejected).
- Round 3 (`11.13.15`, `11.13.32`, `11.17.28`, `11.17.48`, `11.18.43`, `11.18.54`): retro CRT TV product shot ("pre>loaded"), Bauhaus-Archiv orange thumbnail nav, typo5 collage ("typo dESIGN", magenta script M, "ATTENTION!!", grey join/drop buttons), typo5 white page with bold caps headings, underscore link lists and a news column.

User direction, verbatim in spirit: no corny "AI" look; artistic, vectored, wild; keep the big bold fonts; nothing 70s; **no pink, no blue, no pixel fonts, no scrolling ticker**; white with red accent text; crazy animation; think 2000.

## CONTENT FUNDAMENTALS
- **Voice:** a friend who runs the door. Short, dry, second person. We = hosts.
- **Casing:** mega headlines in sentence case with a red full stop ("Saturday. Night."). Nav/buttons in compressed CAPS. Tiny notes in bold CAPS. Mixed-case slant wordmarks in the typo5 style: `party dESIGN`.
- **2000-web conventions:** underscore-prefixed lines and links (`_the address goes out at 9PM`, `_NYC_A (600 PIXELS) (1200)`, `_VERSION2000`); dotted dates as headers (`28.AUGUST.00:`); lowercase meta (`updated: 08.28.00`); bracket notes (`[ NEW URL: YOURPARTY.NET ]`, `[ BEST VIEWED AT 1024×768 ]`); `ATTENTION!!`; `click here`.
- **Numbers:** menus numbered `01 02 03` in huge red compressed type; dates `8/28`; times `23:30`.
- **No emoji. No pixel fonts.** Unicode glyphs only (↘ ▲ ◆ ✕ ＋ > _).

## VISUAL FOUNDATIONS
- **Color:** white paper (`--paper`) is the default page. Accents: `--blood-600` #c41e2a (primary: index numbers, links, full stops, actions), `--ember-500` #d04a22, `--orange-500` #ff6600 (solid Bauhaus blocks), salmon for shard faces. Dark grounds: `--crimson-950` → `--oxblood-600`, `--ink`. Grey-800 top strips. Win2000 greys for OS chrome. **No pink, cyan, navy or chrome blue anywhere.**
- **Type:** Archivo 900 mega (−0.07em, LH .82) with red full stop; Archivo 900 *italic condensed* (`font-stretch:62%`) for `party dESIGN` slants; Anton compressed for headings/nav/index numbers; Six Caps ultra-tall tracked +0.3–0.42em for one-word section heads; Jost lowercase for Bauhaus labels and the TV wordmark; Pinyon Script as giant red ornament letters only (never words); Verdana 12 for body/news; Tahoma 11 for OS controls; Archivo 800 9px caps for tiny notes; JetBrains Mono for times.
- **Vector art:** `ShardBurst` — seeded explosions (extruded shards, slab planes, flickering hairline rays) in ember / paper / crimson / orange / ink. Full-bleed heroes, or transparent overlays with `mix-blend-mode: screen` (dark) / `multiply` (light).
- **Objects:** `RetroTV` — silver/black CRT on a white studio floor (`--grad-floor`), glossy red screen.
- **Layout:** typo5-style collage: absolutely placed fragments, dashed crop lines that overshoot corners by 16px, thin oxblood vertical bars, small caps notes scattered. Editorial pages: white, bold caps headings, underscore link lists in red, Verdana news columns, dashed column rules.
- **Backgrounds:** paper, bone, shard art, crimson abstract imagery, solid orange blocks with a grey-800 strip. Hard splits, no soft pastel gradients.
- **Corners:** square or cut (45° clipped buttons/tags, parallelogram tabs). Only exceptions: the TV object and radio dots.
- **Cards:** square, dashed crop-line frame, bold caps title, red code top-right. paper / bone / crimson / ink.
- **Shadows:** hard offsets (`--shadow-hard-ink`, `--shadow-hard-blood`), Win2000 bevels (`--shadow-bevel-out/in`), one soft `--shadow-object` for the TV only.
- **Imagery:** direct-flash party photos. Treatments: `--filter-mono` (thumbnails, gallery at rest), `--filter-duotone-red` (TV screen, glitch ghosts), `--filter-flash` (hover). Scanline overlay on frames.
- **Transparency/blur:** none (2000 had no blur). Scrims are flat ink at 55%.
- **Motion (loud):** shards explode in with stagger (`y2k-shard-in`, 1100ms ease-out), layers drift and parallax with the cursor, click re-detonates; headlines tear into red/ink slices + skew-shake every ~3s (`y2k-slice-a/b`, `y2k-shake`); CRT switch-off/on page transitions (`y2k-tv-off/on`); TV static noise + rolling bar on channel change; flicker on "ATTENTION!!"; white strobe on submit; red crosshair cursor with coordinates. Stepped/glitch timing over smooth fades.
- **Hover:** buttons lift off their echo and glitch; links turn red and jitter; index entries slide and their numbers glitch continuously; thumbnails jump up, color in and get an ink offset; photo frames zoom and red RGB-split shake; set rows flash red and skew.
- **Press:** slab buttons drop onto their echo; classic buttons invert bevel.

## ICONOGRAPHY
No icon set in the sources. Unicode glyphs set in Anton / Archivo: ↘ ↗ → ▲ ▼ ◆ ✕ ＋ > _ [ ] !!. Win2000 title bar uses `_ □ ✕`. No emoji, icon fonts or PNG icons. If a real set is ever needed, Lucide (CDN) at 2px stroke is the nearest match — **substitution, not from source**.

## Typography substitution (flag)
No font files supplied. Google Fonts in `tokens/fonts.css`: Archivo, Anton, Six Caps, Jost (Futura stand-in), Pinyon Script, JetBrains Mono. Verdana/Tahoma are system fonts. Send licensed files (e.g. real Futura, Helvetica Black Condensed) to replace them.

## Index
- `styles.css` → `tokens/fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css` (all keyframes live here).
- `guidelines/` — foundation cards (Colors, Type, Spacing, Effects, Brand).
- `assets/imagery/` — 21 flash photos `flash-01…21.png`, `street-crowd-night.png`, `houseparty-title-collage.png`. `assets/art/` — `ember-shard-burst.png`, `crimson-abstract.png`, `crimson-flare.png` (screenshot crops; mock use only).
- `components/` — primitives, one card per folder.
- `ui_kits/party-site/` — click-through site: Home, Lineup, Gallery, RSVP.
- `thumbnail.html`, `SKILL.md`.

## Components
- actions: **Button** (incl. `classic` Win2000), **IconButton**
- forms: **Input** (incl. `classic`), **Select**, **Checkbox**, **Radio**, **Switch**
- display: **Card**, **Polaroid**, **Badge**, **Tag**
- navigation: **NavLink**, **IndexLink**, **Tabs**, **ThumbNav**
- feedback: **Dialog** (Win2000 window), **Toast**, **Tooltip**
- art: **ShardBurst**, **GlitchText**, **RetroTV**

### Intentional additions
No source defined components; this is a standard set sized for an event site plus brand pieces drawn from the references: ShardBurst, GlitchText, RetroTV, ThumbNav, IndexLink, Polaroid. Marquee was removed at the user's request.
