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

No test suite yet. **Verification standard:** `npm run build` must pass, and for any change touching rendering or data, drive the app in a real browser — load it, press play, scrub to a mid-battle timestamp, and confirm units move, hazards render, and the battle log populates. In Claude Code remote environments, Chromium is preinstalled at `/opt/pw-browsers/chromium`; use `playwright-core` with `executablePath: '/opt/pw-browsers/chromium'` (never `playwright install`). Watch the console: zero errors expected.

## Architecture

```
src/types.ts             BattleDefinition schema — the contract for everything
src/data/<battle>.ts     One battle = one data file (ilium, luna, ladon, phobos)
src/data/index.ts        Battle registry (imported by App's selector) — add new battles here
src/engine/timeline.ts   Pure functions: position/strength of any unit, whereabouts of any character, at time t
src/components/          MapCanvas (canvas map), TimelineControls, EventLog, InfoPanel
src/App.tsx              Shell + playback loop + battle selector + selection/follow state
docs/                    Research knowledge base (see below)
```

- Units have **waypoint paths** and **strength timelines**; both are linearly interpolated by `engine/timeline.ts`. Hazards (storms, waves, nukes) are units with `kind: 'hazard'` and an intensity 1–5 as "strength".
- Maps have two modes: `terrain` (default) and `space` (`map.mode: 'space'` — starfield background; feature kinds `planet`/`moon`/`station`/`orbit` with `radius`/`color`).
- **Characters** (`battle.characters`) have time-phased whereabouts (`phases`: from-hour + unitId or off-map note + status active/off-map/dead/captured/withdrawn). They render as initial-letter badges fanned above their unit, are clickable, and can be **followed** (gold reticle + starred events via `event.characterIds`). Characters relevant to the story but absent from the battlefield get `status: 'off-map'` phases with a note — the UI tells the user where they are instead.
- Map features with a `description` are clickable (kinds: city, landmark, planet, moon, station).
- `MapCanvas` renders features by `kind`, then hazards, then units, then character badges, then event pulses. Playback rate auto-scales so any battle plays in ~35 s at 1×; clocks switch to Day N · HHh for battles > 72 h.
- Known TODO: pan/zoom; casualty graphs; unit filtering.

## Adding a battle

1. Read `docs/red-rising-military-reference.md` §17 (battle compendium) — pick battles rated high "sim value" and copy their canon beats.
2. Create `src/data/<battle>.ts` exporting a `BattleDefinition`. Follow `ladon.ts` as the template.
3. Import it in `App.tsx`.

## Canon fidelity policy (non-negotiable)

- **Canon:** named formations, commanders, casualty figures, event sequence, hard measurements. Source these; don't invent.
- **Reconstruction:** map coordinates, movement paths, exact hour offsets between canon beats, strengths the books don't give. These are allowed — the books narrate moments, not grid coordinates — but must be marked: append **"(est.)"** to `strengthUnit`, say "reconstructed" in `notes` where positioning is guessed.
- Every battle file MUST have a `fidelityNote` and a `sources` array of wiki URLs.
- **No book text.** This is an unofficial fan project (see README "Legal"). Summarize; never quote the novels.

## Research workflow

- Primary source: the **Red Rising Wiki** (red-rising.fandom.com). Direct page fetches are blocked (402/403) from most environments — use the **MediaWiki API instead**: `https://red-rising.fandom.com/api.php?action=parse&page=<TITLE>&prop=wikitext&format=json`.
- The wiki's dates are fan-reconstructed and occasionally internally inconsistent. Known discrepancies (flagged in the reference doc): Mercury Iron Rain July vs Aug 753 (prefer July); Rat War start 748 vs 749; Battle of Ceres "750" is an explicit estimate; Battle of Luna infobox says "8th Legion" where body text says Eleventh (prefer Eleventh).
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
6. Engine: unit filtering, casualty graphs, pan/zoom
7. More battles by sim value (§17): Battle of Caliban, the Long Night, Lion's Rain, Battle of Deimos
