# Red Rising Battles — project instructions

Interactive digital recreations of major battles from Pierce Brown's **Red Rising** series. A battle-agnostic React/TypeScript viewer replays each battle as an animated, scrubbable tactical-map timeline; each battle is **pure data** (one TypeScript file), so adding a battle never requires engine changes.

**Spoilers through *Light Bringer* everywhere in this repo.**

## Commands

```bash
npm install
npm run dev        # Vite dev server
npm run build      # tsc --strict type-check + production build (this is the CI gate)
npm run preview    # serve the production build
```

**Deployment:** every push to `main` auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` → https://arathie.github.io/red-rising-battles/. The workflow builds with `VITE_BASE=/red-rising-battles/` (local dev stays at `/`). The site is an installable PWA (`vite-plugin-pwa`, manifest + icons in `public/`); the service worker precaches the bundle, so bump nothing — updates roll out automatically on deploy.

No test suite yet. **Verification standard:** `npm run build` must pass, and for any change touching rendering or data, drive the app in a real browser — load it, press play, scrub to a mid-battle timestamp, and confirm units move, hazards render, and the battle log populates. In Claude Code remote environments, Chromium is preinstalled at `/opt/pw-browsers/chromium`; use `playwright-core` with `executablePath: '/opt/pw-browsers/chromium'` (never `playwright install`). Watch the console: zero errors expected.

**Browser-verification recipe** (used for every change so far; scripts lived in the session scratchpad, so rewrite as needed):
1. `npm run build && npm run preview -- --port 4173 --strictPort` (background), then a `playwright-core` script against `http://localhost:4173`.
2. Desktop (1440×900): all 4 battles appear in `.battle-select`; per battle: play ~1 s, scrub to ~55% via the `.scrubber` input (set value + dispatch `input`/`change`), assert `.event` log entries > 0, click a `.char-chip`, click `.follow-btn`, click the canvas to exercise hit-testing.
3. Mobile (390×844, `isMobile: true, hasTouch: true`) and small (360×640): no inline `.info-panel`; `.roster-panel` below `.event-log`; zero horizontal overflow (`scrollWidth − clientWidth ≤ 1`); map stays sticky when scrolled (fill the log first — at t=0 there's nothing to scroll); tap map/chip → `.info-sheet` opens; `.follow-btn` closes the sheet; `.info-btn` opens the overview sheet; `.back-btn` navigates *within* the sheet.
4. Collect `console`/`pageerror` events for the whole run and fail on any. Take screenshots and actually look at them.
5. Gotchas: `npm install` is needed in every fresh container; install `playwright-core` in the scratchpad dir, not the project. Don't `pkill -f` a pattern that appears in your own shell command line — it kills your own shell (exit 144).

## Architecture

```
src/types.ts             BattleDefinition schema — the contract for everything
src/data/<battle>.ts     One battle = one data file (ilium, luna, ladon, phobos)
src/data/index.ts        Battle registry (imported by App's selector) — add new battles here
src/engine/timeline.ts   Pure functions: position/strength of any unit, whereabouts of any character, at time t
src/components/          MapCanvas (canvas map), TimelineControls, EventLog, InfoPanel, CharacterRoster
src/App.tsx              Shell + playback loop + battle selector + selection/follow state
docs/                    Research knowledge base (see below)
```

- Units have **waypoint paths** and **strength timelines**; both are linearly interpolated by `engine/timeline.ts`. Hazards (storms, waves, nukes) are units with `kind: 'hazard'` and an intensity 1–5 as "strength".
- Maps have two modes: `terrain` (default) and `space` (`map.mode: 'space'` — starfield background; feature kinds `planet`/`moon`/`station`/`orbit` with `radius`/`color`).
- **Characters** (`battle.characters`) have time-phased whereabouts (`phases`: from-hour + unitId or off-map note + status active/off-map/dead/captured/withdrawn). They render as initial-letter badges fanned above their unit, are clickable, and can be **followed** (gold reticle + starred events via `event.characterIds`). Characters relevant to the story but absent from the battlefield get `status: 'off-map'` phases with a note — the UI tells the user where they are instead.
- Map features with a `description` are clickable (kinds: city, landmark, planet, moon, station).
- `MapCanvas` renders features by `kind`, then hazards, then units, then character badges, then event pulses. Playback rate auto-scales so any battle plays in ~35 s at 1×; clocks switch to Day N · HHh for battles > 72 h.
- **Layout:** desktop = map + player left, with the InfoPanel (overview/selection detail) below the player; sticky right sidebar = battle log + CharacterRoster. Mobile (≤900px — keep in sync with `MOBILE_QUERY` in App.tsx) = sticky map/player on top, log + roster scrolling beneath, InfoPanel in a slide-up sheet (ⓘ header button opens the overview).
- Known TODO: pan/zoom; casualty graphs; unit filtering.

## Adding a battle

1. Read `docs/red-rising-military-reference.md` §17 (battle compendium) — pick battles rated high "sim value" and copy their canon beats.
2. Fetch the battle's wiki page via the MediaWiki API (see Research workflow) for progression detail beyond the compendium.
3. Create `src/data/<battle>.ts` exporting a `BattleDefinition`. Follow `ladon.ts` as the template; match its density (map features with clickable `description`s, 10–20 units, 12–22 events with `characterIds`, 12–20 time-phased characters INCLUDING off-map ones with notes, `fidelityNote` + `sources`).
4. Register it in `src/data/index.ts` (chronological order) — the App selector picks it up automatically.
5. Battles > 72 h get the Day N clock automatically; use `durationHours` = real span (Phobos = 312).

## Git & delivery workflow (owner's preference)

- **Commit identity:** commits must be authored as `Ash Rathie <ashwin.rathie@gmail.com>`, never as Claude — the owner rewrote the repo history to fix this. A SessionStart hook in `.claude/settings.json` sets repo-local `user.name`/`user.email`; if your session started before the repo was cloned/hook ran, apply it manually (`git config user.name 'Ash Rathie' && git config user.email 'ashwin.rathie@gmail.com'`). Don't add AI attribution trailers to commits.
- Develop on `claude/red-rising-battles-setup-k3ynog`, push it, then **fast-forward merge to `main` and push main directly** — the owner explicitly prefers direct merges over PRs ("just merge it to main"). Pushing `main` triggers the Pages deploy.
- **Fetch before you start:** other sessions (and the owner) also push here; history has been force-rewritten once. Reconcile with `origin` before committing, and keep the feature branch and `main` pointing at the same commit after each delivery.
- Verify (build + browser) BEFORE committing; commit messages describe what was verified.

## Canon fidelity policy (non-negotiable)

- **Canon:** named formations, commanders, casualty figures, event sequence, hard measurements. Source these; don't invent.
- **Reconstruction:** map coordinates, movement paths, exact hour offsets between canon beats, strengths the books don't give. These are allowed — the books narrate moments, not grid coordinates — but must be marked: append **"(est.)"** to `strengthUnit`, say "reconstructed" in `notes` where positioning is guessed.
- Every battle file MUST have a `fidelityNote` and a `sources` array of wiki URLs.
- **No book text.** This is an unofficial fan project (see README "Legal"). Summarize; never quote the novels.

## Research workflow

- Primary source: the **Red Rising Wiki** (red-rising.fandom.com). Direct page fetches are blocked (402/403) from most environments — use the **MediaWiki API instead**: `https://red-rising.fandom.com/api.php?action=parse&page=<TITLE>&prop=wikitext&format=json`.
- Wiki page titles that resolve (others 404 via `missingtitle`): `Battle_of_Ilium`, `The_Fall` (= Fall of Luna), `The_Siege_of_Phobos`, `The_Battle_of_the_Ladon`. When a title misses, use `action=opensearch&search=<term>` to find the real one.
- The wiki's dates are fan-reconstructed and occasionally internally inconsistent. Known discrepancies (flagged in the reference doc): Mercury Iron Rain July vs Aug 753 (prefer July); Rat War start 748 vs 749; Battle of Ceres "750" is an explicit estimate; Battle of Luna infobox says "8th Legion" where body text says Eleventh (prefer Eleventh).
- **Infobox vs prose:** when a wiki page's infobox and body text disagree, prefer the prose (e.g. Ilium: infobox "115+ ships / 7 dreadnoughts" vs prose "112 / 4" — prose used). Disclose the choice in the battle file's `fidelityNote`.
- Discrepancies resolved while authoring the current battles (each disclosed in the relevant `fidelityNote`): the §17 compendium's *Warchild* boarding at The Fall is NOT on the wiki's The Fall page (omitted); the *Lightbringer* at Phobos is the captured, rebuilt *Morning Star*, not a new Venus hull (the nine EMPTY ram-destroyers are the new builds); Valdir's freed deserters are 63→11 per the wiki (not the reference doc's "30"); Kavax was captured at Ilium aboard the *Pandora* by Antonia and rescued by Victra days later.
- The books give no clean durations for Ilium (~12 h) or The Fall (~18 h) — both are estimates flagged in the `date` string. Phobos is canon-shaped: Nov 20 – Dec 3 = 312 h, day 1 dense, then attrition, then the parley.
- Known **unverified** terms — do not present as canon: "alpha-omega nukes" (canon: nuclear warheads; an *omega*-atomic is attested at the Ladon), "burner" as a firearm class, "frigate" as a sized class rung, "stormWing", "ion engines / inertial dampeners / blackmatter".

## Knowledge base (docs/)

- `docs/red-rising-military-reference.md` — **verified & enriched military reference**: weapons, armor, mechs, ship classes with sizes, fleets, legions/ranks, Solar War chronology, Storm Gods/Lovelocks, §17 battle compendium (every named battle 701–755 PCE with orders of battle + sim-value ratings), §18 named-ship registry, §19 sources. This is the project's research backbone — check it before re-researching anything.
- `docs/red-rising-wiki.md` — broader lore: Colors, factions/polities, key characters with roles and fates, worlds gazetteer, master timeline, open research gaps.

## Roadmap (agreed with the owner)

1. ✅ Viewer engine + **Battle of the Ladon** (Jan 754, Mercury)
2. ✅ **Battle of Ilium** (Aug 743, Jupiter) + space-battle map mode
3. ✅ **The Fall of Luna** (Nov 743) — fleet + citadel assault
4. ✅ **Siege of Phobos** (Nov–Dec 754) — 13-day station siege
5. ✅ Engine: battle selector, clickable characters/features, character-follow mode, off-map notices
6. ✅ UI: battle log + CharacterRoster in a sticky right sidebar; InfoPanel below the player; mobile layout (sticky map, slide-up info sheet)
7. ✅ Published: GitHub Pages auto-deploy on push to main + installable PWA (see Deployment note under Commands)
8. Engine: unit filtering, casualty graphs, pan/zoom
9. More battles by sim value (§17): Battle of Caliban, the Long Night, Lion's Rain, Battle of Deimos
