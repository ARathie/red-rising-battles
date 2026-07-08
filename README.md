# Red Rising Battles

Interactive digital recreations of the major battles of Pierce Brown's **Red Rising** saga.

Each battle is a **data file** (typed TypeScript, no engine changes needed) replayed by a shared viewer: a tactical map with animated unit movements, a scrubbable ~39-hour timeline, an annotated battle log, and per-unit detail drawn from canon.

> **Spoilers through *Light Bringer*.**

## First battle: The Battle of the Ladon

January 5–6, 754 PCE, continent of Helios, Mercury (*Dark Age*) — the richest engagement in the series:

- Atalantia au Grimmus's **Ash Rain**: ~30 million troops in 40+ legions vs ~9–10 million stranded Free Legions
- **Operation Tartarus** — seven ancient terraforming Storm Gods weaponized: five hypercanes, a continent-scale sandstorm, and the drowning of Tyche
- The marquee **Drachenjäger vs Titan** mech engagement on the Plains of Caduceus
- The Knights of Elysium's stand at the Tyche gravLoop, the *Morning Star*'s stormbreaker descent, and the slaughter at the Storm Wall

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
```

## How it works

```
src/
├── types.ts              # BattleDefinition schema: units, waypoints, strengths, events, map features
├── data/ladon.ts         # The Battle of the Ladon as data (add new battles here)
├── engine/timeline.ts    # interpolation: position/strength of every unit at time t
└── components/
    ├── MapCanvas.tsx     # canvas tactical map: terrain, units, hazards, event pulses
    ├── TimelineControls.tsx  # play/pause/speed/scrub
    ├── EventLog.tsx      # annotated battle log (click to jump)
    └── InfoPanel.tsx     # battle overview / selected-unit detail
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
- [ ] **Battle of Ilium** (Aug 743) — the great fleet battle: 115 vs 80 capital ships, the *Pax* fireship, clawDrill boarding (needs a space-battle map mode)
- [ ] **The Fall of Luna** (Nov 743) — fleet + citadel assault
- [ ] **Siege of Phobos** (Nov–Dec 754) — multi-Iron-Rain station siege
- [ ] Unit filtering, casualty graphs over time, phase chapters
- [ ] Camera pan/zoom on the map

## Legal

An unofficial, non-commercial fan project. *Red Rising* and all characters, places, and events are © Pierce Brown. This project contains no text from the books; battle data is compiled from community-wiki summaries with sources cited per battle.
