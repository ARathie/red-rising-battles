# Red Rising Battles

Interactive digital recreations of the major battles of Pierce Brown's **Red Rising** saga.

Each battle is a **data file** (typed TypeScript, no engine changes needed) replayed by a shared viewer: a tactical map (terrain **or deep space**) with animated unit movements, a scrubbable timeline, an annotated battle log, clickable units/characters/places, and a **character-follow mode** that tracks a named commander through the fight — and tells you when someone pivotal isn't on this battlefield at all.

> **Spoilers through *Light Bringer*.**

## The battles

Pick one from the selector in the header:

- **Battle of Ilium** — Aug 19, 743 PCE, Jupiter (*Morning Star*). The best-documented fleet battle in the series: 112+ vs 80+ capital ships, the *Pax* sacrificed as a reactor-bomb fireship, clawDrills burrowing into the *Colossus*, Sevro's ambush from Thebe, and the secret run to the Ganymede Dockyards.
- **The Fall of Luna** — Nov 4, 743 PCE (*Morning Star*). The Red Armada over Luna, the four-person infiltration of Octavia's bunker, the duel with Aja, the Jackal's 30-megaton bombs, and the *Lion of Mars* coming down on the Hysperia Gardens.
- **The Battle of the Ladon** — Jan 5–6, 754 PCE, Mercury (*Dark Age*). The richest engagement in canon: the Ash Rain (~30M vs ~9–10M), Operation Tartarus and the weaponized Storm Gods, Drachenjäger vs Titan on the Plains of Caduceus, the drowning of Tyche, the Knights of Elysium's stand.
- **Siege of Phobos** — Nov 20 – Dec 3, 754 PCE, Mars orbit (*Light Bringer*). A 13-day station siege: rail slugs fired from Earth a week in advance, empty destroyers used as battering rams, 200+ clawDrills, Virginia's escape through Bastion One, and a negotiated surrender.

## Following the battle

- **Click anything**: units, the character badges orbiting them, cities, moons, stations, landmarks — the info panel explains what you clicked at the current hour.
- **Follow a character**: open any character (roster in the overview panel, or click their badge on the map) and hit *Follow*. A gold reticle tracks them between formations, and battle-log events they take part in get starred.
- Characters who matter to the story but **aren't on this battlefield** (Virginia during the Ladon, Darrow during Phobos…) appear in the roster with an off-map note explaining where they are instead.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
```

## How it works

```
src/
├── types.ts              # BattleDefinition schema: units, characters, waypoints, strengths, events, map features
├── data/                 # one file per battle: ilium, luna, ladon, phobos (+ index.ts registry)
├── engine/timeline.ts    # interpolation: position/strength of units & whereabouts of characters at time t
└── components/
    ├── MapCanvas.tsx     # canvas map: terrain or space mode, units, hazards, character badges, follow reticle
    ├── TimelineControls.tsx  # play/pause/speed/scrub (day-aware clock for multi-day sieges)
    ├── EventLog.tsx      # annotated battle log (click to jump; stars followed-character events)
    └── InfoPanel.tsx     # overview / unit / character / place detail, follow toggle, off-map notices
```

A battle = one `BattleDefinition` object: map features (seas, deserts, mountains, cities, routes), units with **waypoint paths** and **strength timelines** (linearly interpolated), and timestamped **events**. The viewer is battle-agnostic — recreating the next battle means writing one new data file.

## Canon fidelity

Events, named formations, commanders, and casualty figures follow canon, verified against the [Red Rising Wiki](https://red-rising.fandom.com). Map coordinates, movement paths, exact hour offsets between canon beats, and strengths marked **"(est.)"** are reconstructions — the books narrate moments, not grid coordinates. Every battle file carries a `fidelityNote` and `sources`.

The research backbone lives in `docs/`:

- [`docs/red-rising-military-reference.md`](docs/red-rising-military-reference.md) — verified reference: weapons, armor, ships, fleets, legions, the Solar War chronology, and a compendium of **every named battle** from the Burning of Rhea (701 PCE) to the Kalyke Massacre (755 PCE), each rated for "simulation value."
- [`docs/red-rising-wiki.md`](docs/red-rising-wiki.md) — broader lore: the Colors, factions, key characters and fates, worlds gazetteer, master timeline, and open research gaps.

Contributor/agent instructions (build, verify, fidelity policy, research workflow) are in [`CLAUDE.md`](CLAUDE.md).

## Roadmap

- [x] Battle viewer engine + Battle of the Ladon
- [x] **Battle of Ilium** (Aug 743) + space-battle map mode
- [x] **The Fall of Luna** (Nov 743) — fleet + citadel assault
- [x] **Siege of Phobos** (Nov–Dec 754) — 13-day station siege
- [x] Battle selector, clickable characters/places, character-follow mode, off-map character notices
- [ ] Unit filtering, casualty graphs over time, phase chapters
- [ ] Camera pan/zoom on the map
- [ ] More battles from the compendium: Battle of Caliban, the Long Night, Lion's Rain, Battle of Deimos…

## Legal

An unofficial, non-commercial fan project. *Red Rising* and all characters, places, and events are © Pierce Brown. This project contains no text from the books; battle data is compiled from community-wiki summaries with sources cited per battle.
