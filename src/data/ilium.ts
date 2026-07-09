import type { BattleDefinition } from '../types'

/**
 * The Battle of Ilium — August 19, 743 PCE, Jupiter orbit.
 * (Pierce Brown, *Morning Star*.)
 *
 * A pure space battle: the combined Rising + Rim Dominion fleets versus the Society's
 * Sword Armada under Imperator Roque au Fabii. Canon beats (named ships, commanders,
 * force totals, casualty figures, event sequence) are sourced from the Red Rising Wiki.
 * The books give no battle duration and no positional grid — the ~12-hour clock, all map
 * coordinates, movement paths, and fleet-split strengths are RECONSTRUCTIONS; anything
 * estimated is marked "(est.)".
 */
export const ilium: BattleDefinition = {
  id: 'ilium',
  name: 'The Battle of Ilium',
  date: 'August 19, 743 PCE (~12 hours, est.)',
  location: 'Jupiter orbit, near the pole of Io',
  durationHours: 12,

  map: {
    width: 1000,
    height: 700,
    mode: 'space',
    features: [
      {
        id: 'jupiter',
        name: 'Jupiter',
        kind: 'planet',
        points: [{ x: 95, y: 350 }],
        radius: 110,
        color: '#d9a066',
        description:
          'The gas giant anchoring the Rim Dominion\'s inner sphere. As the battle turns, the beaten Rising and Moon Lord battle groups fall back toward Jupiter — drawing the pursuing Sword Armada straight past the inner moon Thebe.',
      },
      {
        id: 'thebe-orbit',
        name: 'Orbit of Thebe',
        kind: 'orbit',
        points: [{ x: 95, y: 350 }],
        radius: 165,
      },
      {
        id: 'io-orbit',
        name: 'Orbit of Io',
        kind: 'orbit',
        points: [{ x: 95, y: 350 }],
        radius: 540,
      },
      {
        id: 'thebe',
        name: 'Thebe',
        kind: 'moon',
        points: [{ x: 250, y: 300 }],
        radius: 12,
        color: '#8d8577',
        description:
          'The fourth-innermost moon of Jupiter — barren, unremarkable, and the hinge of the whole battle. On the eve of the fight, teams of Red Helldivers melted caverns into its surface and packed them with hidden leechCraft and starShells: ~50,000 Obsidians and ~40,000 Reds under Sevro au Barca, waiting for the Sword Armada to sail past.',
      },
      {
        id: 'io',
        name: 'Io',
        kind: 'moon',
        points: [{ x: 620, y: 230 }],
        radius: 30,
        color: '#e0c060',
        description:
          'Volcanic seat of House Raa and one of the last two unconquered moons of Ilium. Romulus au Raa hosted the war council at his estate in the Waste of Karrack the night before — where Virginia\'s falsified communiques about belt-stored 50-megaton warheads turned the Moon Lords against Roque. The fleets meet near Io\'s pole.',
      },
      {
        id: 'ganymede',
        name: 'Ganymede',
        kind: 'moon',
        points: [{ x: 830, y: 560 }],
        radius: 36,
        color: '#a99a8a',
        description:
          'Largest moon in the system and, with Io, the last holdout of the Second Moon Lord Rebellion. Ten million of its people will die under the wreckage Darrow sends into its sky.',
      },
      {
        id: 'ganymede-dockyards',
        name: 'Ganymede Dockyards',
        kind: 'station',
        points: [{ x: 862, y: 505 }],
        radius: 10,
        color: '#c9c2b8',
        description:
          'The Rim\'s great shipworks — builder of the very moonBreaker Roque stole as his flagship. In the battle\'s final hour Darrow, still masquerading as Roque, parks the captured Colossus alongside and destroys the Dockyards with thirty missiles and a full port broadside: 150,000+ lowColor workers die in the yards, and 10M+ Ganymedi are killed by wreckage falling through the atmosphere. The secret of who gave the order later brings the Rim into the Solar War.',
      },
      {
        id: 'sinope',
        name: 'Sinope (staging)',
        kind: 'moon',
        points: [{ x: 955, y: 55 }],
        radius: 7,
        color: '#7d7268',
        description:
          'A far outer moon of Jupiter. The Rising fleet hid here under Orion xe Aquarii on August 18 while Darrow, Virginia, Sevro, Sefi, and Holiday went down to Io to win over the Moon Lords.',
      },
      {
        id: 'approach',
        name: 'Red Armada approach',
        kind: 'route',
        points: [
          { x: 955, y: 55 }, { x: 870, y: 120 }, { x: 770, y: 200 }, { x: 690, y: 260 },
        ],
        labelAt: { x: 855, y: 105 },
        description:
          'The Rising fleet\'s attack vector from its hiding place at Sinope down onto the Sword Armada near Io — three-quarters of the fleet in clustered spheres under Orion, with the Pax and her sixteen-torchShip escort tucked at the rear. (Path reconstructed.)',
      },
    ],
  },

  factions: {
    republic: {
      name: 'The Rising + Rim Dominion (allied — not yet the Republic)',
      color: '#e63946',
      commanders: [
        'Darrow of Lykos (the Reaper, aboard the Pax)',
        'Virginia au Augustus (Dejah Thoris)',
        'Orion xe Aquarii (Persephone\'s Howl — fleet command)',
        'Romulus au Raa (Moon Lords of the Rim)',
        'Sevro au Barca (Thebe ambush force)',
        'Sefi Volarus (the Valkyrie)',
        'Kavax & Daxo au Telemanus',
      ],
      totalStrength:
        '115+ capital ships (112 Rising incl. 4–7 dreadnoughts, ~50 torchShips, ~50 destroyers; plus the Rim fleet), thousands of ripWings, 3,600+ leechCraft, 6,000+ starShells, 4 clawDrills, 100,000+ Obsidians, 40,000+ Reds',
    },
    society: {
      name: 'The Society — Sword Armada',
      color: '#d4af37',
      commanders: [
        'Roque au Fabii (Imperator, aboard the Colossus)',
        'Antonia au Severus-Julii (Pandora)',
        'Scipio & Scipia au Falthe',
        'Cyriana au Tanus',
        'Drusus',
      ],
      totalStrength:
        '~80+ capital ships incl. the moonBreaker Colossus and dreadnought Pandora; ~2 million personnel (3,000 Golds, 200,000 Grays, 10,000 Obsidians)',
    },
  },

  units: [
    // ————— The Rising + Rim —————
    {
      id: 'orion-main-fleet',
      name: 'Rising main fleet — Orion (Persephone\'s Howl)',
      faction: 'republic',
      kind: 'ship',
      path: [
        { t: 0, x: 800, y: 155 },
        { t: 1.5, x: 700, y: 240 },
        { t: 3, x: 630, y: 290 },
        { t: 5.5, x: 500, y: 310 },
        { t: 8, x: 395, y: 325 },
        { t: 9, x: 520, y: 390 },
        { t: 11, x: 560, y: 360 },
      ],
      strength: [
        { t: 0, value: 84 },
        { t: 3, value: 80 },
        { t: 5.5, value: 74 },
        { t: 8, value: 70 },
        { t: 12, value: 66 },
      ],
      strengthUnit: 'capital ships (est.)',
      notes:
        'Three-quarters of the 112-ship Rising fleet, clustered in spheres under Navarch Orion xe Aquarii from the dreadnought Persephone\'s Howl. Orion opens the battle by charging the Sword Armada, fires the chaff corridor that shields Darrow\'s spear-thrust, is driven off the poles of Io back toward Jupiter — the retreat that baits Roque past Thebe — then thrusts into the flank Antonia vacates when she flees. (Split of the 112 between Orion, Virginia, and Darrow is estimated; movement reconstructed.)',
    },
    {
      id: 'augustus-squadron',
      name: 'Augustan squadron — Virginia (Dejah Thoris)',
      faction: 'republic',
      kind: 'ship',
      path: [
        { t: 0, x: 790, y: 300 },
        { t: 1, x: 720, y: 430 },
        { t: 2.5, x: 660, y: 450 },
        { t: 5.5, x: 630, y: 450 },
        { t: 9, x: 630, y: 450 },
        { t: 11, x: 640, y: 430 },
      ],
      strength: [
        { t: 0, value: 11 },
        { t: 5.5, value: 10 },
        { t: 9, value: 7 },
        { t: 12, value: 7 },
      ],
      strengthUnit: 'capital ships (est.)',
      notes:
        'House Augustus ships under Virginia, flagship the 4-km dreadnought Dejah Thoris. Charges the Sword Armada\'s engines from the southern edge of the formation (relative to Io\'s pole) — blunted when ten Society squadrons pivot their broadside railguns onto her bows. Later, as she tries to lead her group toward Thebe, Roque EMPs the engines of half her ships, leaving them slugging it out in place at half gun strength while the Colossus and three escort destroyers pound the Dejah Thoris. Virginia escapes the burning flagship by pod, bound for the Echo of Ismenia. (Ship count and paths reconstructed.)',
    },
    {
      id: 'rim-fleet',
      name: 'Rim Dominion fleet — Romulus au Raa',
      faction: 'republic',
      kind: 'ship',
      path: [
        { t: 0, x: 810, y: 340 },
        { t: 1, x: 740, y: 420 },
        { t: 2.5, x: 660, y: 300 },
        { t: 5.5, x: 520, y: 340 },
        { t: 8, x: 410, y: 350 },
        { t: 9.5, x: 500, y: 370 },
        { t: 11, x: 555, y: 385 },
      ],
      strength: [
        { t: 0, value: 25 },
        { t: 8, value: 22 },
        { t: 12, value: 20 },
      ],
      strengthUnit: 'capital ships (est.)',
      notes:
        'The Moon Lords\' fleet — House Raa with Telemanus and Arcos allies — pledged to Darrow only the night before, after Romulus declared blood feud on Roque over the belt nuke depot. Opens alongside Virginia\'s southern charge, then peels away to link with Orion. In the endgame the Raa and Telemanus ships pinch in from the flanks; Romulus\'s own ship is boarded, and his son Aeneas is killed at his side. Kavax boards the Pandora to strike at Antonia. (Rim ship count is not given in canon — estimated.)',
    },
    {
      id: 'darrow-strike',
      name: 'Darrow\'s strike force — the Pax + escort',
      faction: 'republic',
      kind: 'ship',
      vanishesAt: 7.5,
      path: [
        { t: 0, x: 830, y: 190 },
        { t: 1.8, x: 700, y: 270 },
        { t: 2.4, x: 655, y: 300 },
        { t: 3.5, x: 630, y: 322 },
        { t: 4, x: 642, y: 330 },
        { t: 7.5, x: 655, y: 335 },
      ],
      strength: [
        { t: 0, value: 17 },
        { t: 2.7, value: 16 },
        { t: 3.1, value: 13 },
        { t: 3.3, value: 4 },
        { t: 3.5, value: 3 },
        { t: 3.7, value: 1 },
        { t: 7.4, value: 1 },
        { t: 7.5, value: 0 },
      ],
      strengthUnit: 'ships',
      notes:
        'The 5-km dreadnought Pax (ex-Vanguard, 80+ railguns) and sixteen torchShips — the "hidden spear" that accelerates out of Orion\'s front into the 50-km no-man\'s-land, aimed at the Colossus. The Pax sails with a skeleton Blue crew: her spitTubes pre-loaded with EMPTY starShells, her hangars secretly packed with 4 clawDrills, 30 heavy assault shuttles, and 3,000 Obsidians, and her reactor slaved to Darrow\'s datapad. The escort is whittled to three ships, then to the Pax alone; abandoned with her coolant flow reversed, she ends the run as a reactor-bomb a kilometer off the Colossus. (Hour offsets reconstructed.)',
    },
    {
      id: 'clawdrill-force',
      name: 'ClawDrill boarding force (Obsidians + the Valkyrie)',
      faction: 'republic',
      kind: 'specops',
      appearsAt: 4.9,
      vanishesAt: 7.3,
      path: [
        { t: 4.9, x: 642, y: 331 },
        { t: 5.4, x: 660, y: 334 },
        { t: 7, x: 700, y: 344 },
      ],
      strength: [
        { t: 4.9, value: 3000 },
        { t: 7, value: 2500 },
      ],
      strengthUnit: 'troops (est. losses)',
      notes:
        'Four weaponized mining clawDrills piloted by Darrow and Red Helldivers, thirty heavy assault shuttles, and 3,000 Obsidian warriors including Sefi\'s Valkyrie, with Victra and Holiday. The drills melt OUT through the Pax\'s own decks, cross the gap amid Roque\'s own leechCraft swarm (his gunBlues cannot fire — the vessel class doesn\'t register), and burrow INTO the Colossus, carving tunnels the shuttles then land in. One drill is lost to a ripWing\'s chain guns. The force fights deck by deck to the bridge; merges into the captured Colossus once it falls. (Casualty curve estimated.)',
    },
    {
      id: 'thebe-ambush',
      name: 'Thebe ambush — Sevro\'s hidden boarders',
      faction: 'republic',
      kind: 'specops',
      appearsAt: 8,
      path: [
        { t: 8, x: 255, y: 302 },
        { t: 8.6, x: 390, y: 330 },
        { t: 10, x: 430, y: 335 },
      ],
      strength: [
        { t: 8, value: 90000 },
        { t: 12, value: 78000 },
      ],
      strengthUnit: 'troops (est. losses)',
      notes:
        'The battle\'s masterstroke: ~50,000 Obsidians and ~40,000 Reds in leechCraft and starShells, hidden inside Helldiver-melted caverns on Thebe since before the fight. When the Sword Armada sweeps past the little moon in pursuit of Orion\'s "retreat," Sevro launches everything — and collapses the tunnel mouths behind the launch so the Rising boarders get a head start on prize-taking over the Moon Lords. A third of the Sword Armada is boarded within the hour. (Loss figures estimated.)',
    },
    {
      id: 'captured-colossus',
      name: 'Colossus — under the Reaper\'s hand',
      faction: 'republic',
      kind: 'ship',
      appearsAt: 7,
      path: [
        { t: 7, x: 700, y: 345 },
        { t: 9.5, x: 700, y: 345 },
        { t: 10.5, x: 790, y: 470 },
        { t: 11, x: 838, y: 528 },
        { t: 12, x: 838, y: 528 },
      ],
      strength: [{ t: 7, value: 1 }],
      strengthUnit: 'moonBreaker (8 km)',
      notes:
        'The same hull as the Society unit "Colossus" — shown as a new unit from the moment Darrow\'s force takes the bridge at ~hour 7. Its capture is never broadcast: Holiday wipes the video memory, outbound signals are silenced, and the ship runs for Ganymede still squawking as Roque\'s flagship. Rim interceptors that give chase are shot down. At Ganymede it destroys the Dockyards; watching them burn, Sefi renames the ship Morning Star.',
    },

    // ————— The Society —————
    {
      id: 'colossus',
      name: 'Colossus — Roque\'s flagship (moonBreaker)',
      faction: 'society',
      kind: 'ship',
      vanishesAt: 7,
      path: [
        { t: 0, x: 662, y: 330 },
        { t: 3.5, x: 680, y: 336 },
        { t: 7, x: 700, y: 345 },
      ],
      strength: [{ t: 0, value: 1 }],
      strengthUnit: 'moonBreaker (8 km)',
      notes:
        'The 8-km, 90-deck moonBreaker built by the Ganymede Dockyards as Octavia\'s gift for Lysander — hijacked by Roque in 742 as his flagship. As the Pax bores in, the Colossus retreats at exactly the pace Darrow advances, denying the ram while punishing the dreadnought with superior weight of fire. Roque strips her of infantry to board the Pax — and loses her to four clawDrills. This unit vanishes at hour 7, when the bridge falls; the hull continues as the Rising unit "Colossus — under the Reaper\'s hand."',
    },
    {
      id: 'sword-armada-main',
      name: 'Sword Armada — main body',
      faction: 'society',
      kind: 'ship',
      path: [
        { t: 0, x: 655, y: 320 },
        { t: 3, x: 640, y: 325 },
        { t: 5.5, x: 520, y: 330 },
        { t: 8, x: 405, y: 330 },
        { t: 9.5, x: 450, y: 345 },
        { t: 12, x: 470, y: 350 },
      ],
      strength: [
        { t: 0, value: 67 },
        { t: 5, value: 64 },
        { t: 7.5, value: 60 },
        { t: 8, value: 58 },
        { t: 9, value: 35 },
        { t: 10.5, value: 18 },
        { t: 12, value: 8 },
      ],
      strengthUnit: 'capital ships (est.)',
      notes:
        'The Society\'s premier offensive fleet — ~80+ capital ships and 2 million personnel under Imperator Roque au Fabii (count here excludes the Colossus and Antonia\'s squadron, shown separately; split estimated). Fights with Roque\'s trademark invisible-hand precision until his bridge is boarded — then the squadron commanders, used to being guided, are blind. Pursues the "retreating" Rising fleet past Thebe into Sevro\'s ambush; three destroyers are crushed by the Pax\'s detonation; the rest are boarded, destroyed, or flee for the Core in ragged bands.',
    },
    {
      id: 'pandora-squadron',
      name: 'Julii squadron — Antonia (Pandora)',
      faction: 'society',
      kind: 'ship',
      vanishesAt: 10,
      path: [
        { t: 0, x: 645, y: 395 },
        { t: 2.5, x: 630, y: 370 },
        { t: 3.5, x: 635, y: 355 },
        { t: 5.5, x: 490, y: 380 },
        { t: 8.5, x: 480, y: 395 },
        { t: 9.2, x: 700, y: 480 },
        { t: 10, x: 1010, y: 600 },
      ],
      strength: [
        { t: 0, value: 12 },
        { t: 9, value: 11 },
      ],
      strengthUnit: 'capital ships (est.)',
      notes:
        'The House Julii fleet under Antonia au Severus-Julii, flagship the dreadnought Pandora, sent out in June 743 with the 5th and 6th Legions to reinforce Roque. Antonia does the battle\'s dirtiest work — burning Darrow\'s torchShip escorts one by one and machine-gunning the escape pods that launch from them — then leads the pursuit toward Jupiter. When Thebe springs and the tide turns, she abandons the Sword Armada and runs for the Core with Kavax au Telemanus a prisoner aboard. Victra hunts her down days later. (Squadron size estimated.)',
    },
    {
      id: 'society-boarders',
      name: 'Society boarding wave — leechCraft onto the Pax',
      faction: 'society',
      kind: 'specops',
      appearsAt: 4.4,
      vanishesAt: 7.5,
      path: [
        { t: 4.4, x: 676, y: 336 },
        { t: 5, x: 648, y: 332 },
        { t: 7.5, x: 655, y: 335 },
      ],
      strength: [
        { t: 4.4, value: 15000 },
        { t: 6, value: 13000 },
        { t: 7.4, value: 12000 },
        { t: 7.5, value: 0 },
      ],
      strengthUnit: 'boarders',
      notes:
        'More than fifteen thousand soldiers launched by leechCraft from the Colossus and her escorts to take the Reaper alive — leaving their own ships nearly empty of infantry, which is precisely what Darrow wanted. Some die when Roque fires through his own leechCraft at the clawDrills; a breaching party is obliterated by a point-blank railgun shot from Victra\'s shuttle; the rest are still swarming a near-empty dreadnought when its reactor detonates.',
    },
  ],

  characters: [
    {
      id: 'darrow',
      name: 'Darrow of Lykos',
      faction: 'republic',
      role: 'The Reaper — commander, the Rising',
      description:
        'Architect of the entire trap: the empty flagship, the clawDrills, the Thebe ambush, and the lie that follows. He plays the brash Reaper Roque expects, sails the Pax into the heart of the Sword Armada, and drills out of his own ship to take the enemy\'s.',
      phases: [
        {
          from: 0,
          unitId: 'darrow-strike',
          note: 'Commands the Pax at the rear of Orion\'s charge, her reactor slaved to his datapad.',
        },
        {
          from: 4.9,
          unitId: 'clawdrill-force',
          note: 'Pilots one of the four clawDrills out through the Pax\'s decks and into the Colossus.',
        },
        {
          from: 7,
          unitId: 'captured-colossus',
          note: 'Takes the Colossus bridge; detonates the Pax; masquerades as Roque on the fleet coms.',
        },
        {
          from: 9.5,
          unitId: 'captured-colossus',
          note: 'Runs silent for Ganymede, lying to Romulus\'s face while ordering the Dockyards\' destruction.',
        },
      ],
    },
    {
      id: 'virginia',
      name: 'Virginia au Augustus',
      faction: 'republic',
      role: 'Mustang — commander, Augustan squadron',
      description:
        'Brought the Moon Lords to the table and broke Roque\'s case with forged communiques about the belt nuke depot. In the battle she leads the Augustan charge on the Society engines from the Dejah Thoris and absorbs the Colossus\'s wrath while Darrow boards it.',
      phases: [
        {
          from: 0,
          unitId: 'augustus-squadron',
          note: 'Leads the charge on the Sword Armada\'s engines from the southern flank.',
        },
        {
          from: 5.5,
          unitId: 'augustus-squadron',
          note: 'Half her ships\' engines EMP-dead; slugging it out in place as the Colossus pounds the Dejah Thoris.',
        },
        {
          from: 8.5,
          unitId: 'augustus-squadron',
          note: 'Abandons the burning Dejah Thoris by escape pod, headed for the Echo of Ismenia.',
        },
      ],
    },
    {
      id: 'orion',
      name: 'Orion xe Aquarii',
      faction: 'republic',
      role: 'Navarch — Rising fleet command (Persephone\'s Howl)',
      description:
        'The Blue navarch who commands three-quarters of the Rising navy from the Persephone\'s Howl. Her clustered spheres, chaff corridor, and disciplined fighting retreat toward Jupiter are what walk the Sword Armada past Thebe.',
      phases: [
        { from: 0, unitId: 'orion-main-fleet', note: 'Commands the main fleet\'s charge and the chaff corridor shielding Darrow\'s spear.' },
        { from: 5.5, unitId: 'orion-main-fleet', note: 'Driven off the poles of Io — a retreat that is also the bait.' },
        { from: 9, unitId: 'orion-main-fleet', note: 'Thrusts her capital ships into the flank Antonia abandoned.' },
      ],
    },
    {
      id: 'sevro',
      name: 'Sevro au Barca',
      faction: 'republic',
      role: 'Ares — commander, Thebe ambush force',
      description:
        'Son of the first Ares, leader of the Howlers, and the man who spends most of the battle buried inside a moon. When the Sword Armada sails past Thebe, he launches ninety thousand hidden boarders and collapses the tunnels behind them.',
      phases: [
        {
          from: 0,
          note: 'Hidden inside Helldiver-melted caverns on Thebe with ~90,000 boarders in leechCraft and starShells — dark, silent, waiting.',
          status: 'active',
        },
        { from: 8, unitId: 'thebe-ambush', note: 'Springs the ambush into the passing Sword Armada.' },
        { from: 9, unitId: 'thebe-ambush', note: 'Fighting through the halls of the Society\'s secondary flagship.' },
      ],
    },
    {
      id: 'romulus',
      name: 'Romulus au Raa',
      faction: 'republic',
      role: 'Sovereign of the Rim Dominion — Moon Lord fleet',
      description:
        'Lord of the Dragon and master of Io, who pledged the Rim to Darrow\'s cause the night before over Octavia\'s hidden nukes. He fights for his moons\' independence and is deceived at the moment of victory — begging Darrow to save the Dockyards that Darrow is sailing to destroy.',
      phases: [
        { from: 0, unitId: 'rim-fleet', note: 'Commands the Moon Lord fleet; opens with Virginia, then links with Orion.' },
        {
          from: 9.5,
          unitId: 'rim-fleet',
          note: 'His own ship boarded, he calls Darrow mid-firefight to beg him to save the Dockyards. His son Aeneas is killed at his side moments later.',
        },
      ],
    },
    {
      id: 'victra',
      name: 'Victra au Julii',
      faction: 'republic',
      role: 'Boarding commander — Darrow\'s strike force',
      description:
        'Antonia\'s loyal sister, fighting for the Rising. She mines the Pax\'s bridge on the way out, vaporizes a boarding party with a point-blank railgun shot, assumes command of the captured Colossus bridge — and takes the weight of the Dockyards order onto her own shoulders.',
      phases: [
        { from: 0, unitId: 'darrow-strike', note: 'Aboard the Pax with the hidden boarding force.' },
        { from: 4.9, unitId: 'clawdrill-force', note: 'Leads the assault shuttles into the clawDrill tunnels; her railgun shot erases the Society breach of the auxiliary hangar.' },
        {
          from: 7,
          unitId: 'captured-colossus',
          note: 'Assumes command of the Colossus bridge; later gives the Dockyards fire order in Darrow\'s stead.',
        },
      ],
    },
    {
      id: 'sefi',
      name: 'Sefi Volarus',
      faction: 'republic',
      role: 'The Quiet — leader of the Valkyrie',
      description:
        'Ragnar\'s sister, who overthrew her own mother to bring the Valkyrie to the Rising. She storms the Colossus bridge armory squad with her Valkyrie, and it is she who gives the captured moonBreaker its new name: Morning Star.',
      phases: [
        { from: 0, unitId: 'darrow-strike', note: 'With the Valkyrie among the 3,000 Obsidians hidden aboard the Pax.' },
        { from: 4.9, unitId: 'clawdrill-force', note: 'Boards the Colossus with the shuttle wave; leads the Valkyrie deck by deck.' },
        { from: 7, unitId: 'captured-colossus', note: 'Charges the tactical squad by the bridge armory.' },
        { from: 11, unitId: 'captured-colossus', note: 'Watching the Dockyards burn, she renames the ship Morning Star.' },
      ],
    },
    {
      id: 'holiday',
      name: 'Holiday ti Nakamura',
      faction: 'republic',
      role: 'Gray commando — Darrow\'s strike force',
      description:
        'Ex-Society legionnaire turned Rising commando. Her team picks off the Grays firing across the Colossus command pit, and afterward she keeps the capture secret — wiping the ship\'s video memory and silencing any outbound signal.',
      phases: [
        { from: 0, unitId: 'darrow-strike', note: 'Aboard the Pax with the boarding force.' },
        { from: 4.9, unitId: 'clawdrill-force', note: 'Rides the shuttle wave into the Colossus.' },
        { from: 7, unitId: 'captured-colossus', note: 'Her commandos clear the command pit; she wipes the ship\'s video memory for the silent run.' },
      ],
    },
    {
      id: 'kavax',
      name: 'Kavax au Telemanus',
      faction: 'republic',
      role: 'Primus of House Telemanus — Rim-allied fleet',
      description:
        'The bear-hearted Telemanus patriarch, fighting with the Moon Lord pinch. In the endgame he boards the Pandora to strike at Antonia — and is trapped aboard when she flees the battle, carried off as a prisoner toward the Core.',
      phases: [
        { from: 0, unitId: 'rim-fleet', note: 'Telemanus ships fight alongside the Raa in the flanking pinch.' },
        { from: 8.6, unitId: 'pandora-squadron', note: 'Boards the Pandora with his daughters to strike at Antonia.' },
        {
          from: 9.2,
          status: 'captured',
          note: 'Captured aboard the fleeing Pandora. Victra rescues him days later.',
        },
      ],
    },
    {
      id: 'roque',
      name: 'Roque au Fabii',
      faction: 'society',
      role: 'Imperator — Sword Armada (Colossus)',
      description:
        'The poet of Deimos, Darrow\'s former friend and the finest fleet mind of his generation — conqueror of the Rim campaign of 742–743. He reads every feint but the last one, loses his flagship to four mining drills, and chooses death over capture.',
      phases: [
        { from: 0, unitId: 'colossus', note: 'Dictates the entire armada\'s movements from the Colossus bridge — the invisible hand.' },
        {
          from: 7,
          unitId: 'captured-colossus',
          note: 'His bridge taken; his blinded fleet falls into chaos as Thebe springs.',
          status: 'captured',
        },
        {
          from: 9.2,
          unitId: 'captured-colossus',
          note: 'Refuses to be taken prisoner; takes his own life on the bridge he lost.',
          status: 'dead',
        },
      ],
    },
    {
      id: 'antonia',
      name: 'Antonia au Severus-Julii',
      faction: 'society',
      role: 'Commander, House Julii squadron (Pandora)',
      description:
        'Victra\'s treacherous sister, commanding the Julii fleet from the dreadnought Pandora. She destroys Darrow\'s escorts, shoots the survivors\' escape pods, and — when the battle turns — abandons the Sword Armada to save herself.',
      phases: [
        { from: 0, unitId: 'pandora-squadron', note: 'Guards the southern reaches; butchers Darrow\'s torchShip escorts and their escape pods.' },
        {
          from: 8.8,
          unitId: 'pandora-squadron',
          note: 'Abandons the Sword Armada and runs for the Core, Kavax a prisoner aboard.',
          status: 'withdrawn',
        },
        {
          from: 10,
          status: 'withdrawn',
          note: 'Fled the battlespace toward the Core. Victra captures the Julii ships days later.',
        },
      ],
    },
    {
      id: 'cassius',
      name: 'Cassius au Bellona',
      faction: 'society',
      role: 'Olympic Knight — prisoner of the Rising',
      description:
        'The Morning Knight, captured by the Rising on Mars weeks earlier. It was his information about Octavia\'s secret nuclear depot in the belt that armed Virginia\'s decisive gambit at the Io war council. He is technically present — held aboard the Rising fleet — but takes no part in the fighting.',
      phases: [
        {
          from: 0,
          status: 'off-map',
          note: 'A prisoner aboard the Rising fleet — present in the battlespace but not a combatant.',
        },
      ],
    },
    {
      id: 'adrius',
      name: 'Adrius au Augustus (the Jackal)',
      faction: 'society',
      role: 'ArchGovernor of Mars',
      description:
        'The patricide ArchGovernor whose Triumph Massacre ignited both the Rim rebellion and the alliance now destroying the Sword Armada. His raid on Octavia\'s secret nuclear depot supplied the evidence that turned the Moon Lords — and the warheads he will use over Luna.',
      phases: [
        {
          from: 0,
          status: 'off-map',
          note: 'On Mars, consolidating power and hoarding his stolen nuclear warheads. Not at this battle.',
        },
      ],
    },
    {
      id: 'octavia',
      name: 'Octavia au Lune',
      faction: 'society',
      role: 'Sovereign of the Society',
      description:
        'The Sovereign whose burning of Rhea in 701 and secret 50-megaton depot in the belt cost her the Rim\'s loyalty at the Io war council. She loses her finest armada and her best Imperator here without ever leaving her Citadel.',
      phases: [
        {
          from: 0,
          status: 'off-map',
          note: 'On Luna, in the Citadel. Not at this battle — but her hidden nukes decided it.',
        },
      ],
    },
  ],

  events: [
    {
      t: 0,
      title: 'The Red Armada charges',
      kind: 'strategic',
      at: { x: 760, y: 220 },
      characterIds: ['darrow', 'orion'],
      description:
        'Three-quarters of the Rising fleet drives at the Sword Armada in clustered spheres under Orion, the Pax and sixteen torchShips tucked at the rear. Both sides open with long-range missiles — swiftly eaten by miniature computer-guided countermeasures.',
    },
    {
      t: 1,
      title: 'Southern flank blunted; ripWings swarm',
      kind: 'combat',
      at: { x: 700, y: 440 },
      characterIds: ['virginia', 'romulus'],
      description:
        'Virginia and Romulus charge the Society engines from the southern edge relative to Io\'s pole — until ten Society squadrons pivot their broadside railguns onto the Augustan and Moon Lord bows. After the salvo, both sides launch thousands of ripWings and one-man fighters. Romulus peels away to link with Orion; Virginia keeps driving for the heart.',
    },
    {
      t: 2,
      title: 'Three hundred kilometers — the spear flies',
      kind: 'combat',
      at: { x: 655, y: 300 },
      characterIds: ['darrow', 'orion'],
      description:
        'The fleets close to 300 km and the mid-range railguns open up. On Orion\'s signal, Darrow\'s strike force accelerates out of the center of her front — a hidden spear-tip driving into the fifty-kilometer no-man\'s-land, sheathed in a corridor of protective chaff, aimed at the Colossus.',
    },
    {
      t: 3,
      title: 'The Pandora butchers the escorts',
      kind: 'catastrophe',
      at: { x: 632, y: 360 },
      characterIds: ['antonia', 'darrow'],
      description:
        'Antonia burns a torchShip until its engine core goes nuclear. The Pax answers a destroyer with eighty railguns fired into its bridge — but Hope of Tinos and Cry of Thebes are disabled, the Thebes\' reactor going critical. Darrow orders them to ram the Pandora; Antonia simply reverses course and lets them drift past until the Thebes detonates. The Dancer of Faran dies next, then the last two escorts — and the Pandora machine-guns their escape pods.',
    },
    {
      t: 3.5,
      title: 'The Colossus gives ground — and punishes',
      kind: 'combat',
      at: { x: 678, y: 336 },
      characterIds: ['roque', 'darrow'],
      description:
        'Alone in the heart of the enemy sphere, the Pax bears in on the Colossus — and the moonBreaker retreats at exactly the pace Darrow advances, denying the ram while its superior batteries hammer the dreadnought. Darrow throws every forward gun at the Colossus\'s railguns and topside missile launchers.',
    },
    {
      t: 4.1,
      title: 'The decoy wave is annihilated',
      kind: 'combat',
      at: { x: 655, y: 333 },
      characterIds: ['darrow', 'roque'],
      description:
        'A kilometer out, Darrow fires every leechCraft and starShell on the Pax at the Colossus — all of them EMPTY, remotely piloted by the skeleton crew. Low-yield nuclear warheads wipe the wave before it crosses half the gap. Roque calls to ask for the Reaper\'s surrender. Darrow declines.',
    },
    {
      t: 4.4,
      title: 'Fifteen thousand boarders',
      kind: 'strategic',
      at: { x: 668, y: 335 },
      characterIds: ['roque'],
      description:
        'Convinced the Reaper has spent his assault, Roque orders every leechCraft in his group launched at the Pax to take Darrow alive — more than fifteen thousand soldiers, leaving the Colossus and her escorts nearly empty of infantry. The trap\'s jaws are now open.',
    },
    {
      t: 4.8,
      title: 'Abandon ship — coolant reversed',
      kind: 'strategic',
      at: { x: 642, y: 330 },
      characterIds: ['darrow', 'victra'],
      description:
        'The Blue bridge crew escapes in armored shuttles hidden beneath the bridge; Victra leaves a mine behind for the boarders. Darrow reverses the coolant flow on the Pax\'s reactor and heads for the auxiliary hangar on level negative three, where the clawDrills are powering up. A Society breach via the bridge gravLift is erased by a point-blank railgun shot from Victra\'s shuttle.',
    },
    {
      t: 5.3,
      title: 'Drilling out, drilling in',
      kind: 'heroic',
      at: { x: 652, y: 332 },
      characterIds: ['darrow', 'victra', 'sefi', 'holiday', 'roque'],
      description:
        'Four clawDrills melt out through the Pax\'s own decks and hurl themselves at the Colossus through Roque\'s own leechCraft swarm. His gunBlues cannot fire — their computers won\'t classify the vessels — so Roque fires through his own boarders. One drill is lost to a ripWing\'s chain guns; three burrow into the moonBreaker\'s hull, and thirty assault shuttles land in the tunnels to pour 3,000 Obsidians aboard.',
    },
    {
      t: 6,
      title: 'The Reaper\'s speech',
      kind: 'heroic',
      at: { x: 690, y: 340 },
      characterIds: ['darrow', 'virginia'],
      description:
        'Darrow\'s pre-recorded address — cut with Virginia the night before and carried by every boarding party in the fleet — plays over the Colossus\'s general coms. LowColors across the ship begin opening bulkheads for the boarders, saving the Sons long minutes of melting through blast doors.',
    },
    {
      t: 6.6,
      title: 'Gravity games',
      kind: 'combat',
      at: { x: 695, y: 342 },
      characterIds: ['roque', 'sefi'],
      description:
        'Seeing that Darrow\'s Obsidians have no zero-G training, Roque kills the ship\'s artificial gravity; Society Grays pick off floundering warriors. A Sons boarding team restores it — dialed to one-sixth Earth standard, so the armored Obsidians move like they were born to it.',
    },
    {
      t: 7,
      title: 'The bridge falls',
      kind: 'heroic',
      at: { x: 700, y: 345 },
      characterIds: ['darrow', 'victra', 'sefi', 'holiday', 'roque', 'virginia'],
      description:
        'A custom double-thick bulkhead guards the bridge, security teams closing in behind the drill — until Roque\'s Pink valet opens the doors from within. Sefi\'s Valkyrie storm the armory squad, Holiday\'s commandos clear the command pit, one Praetorian dies and the other surrenders. Outside, the Colossus and three escort destroyers are still pounding the half-EMPed Dejah Thoris; inside, the invisible hand that steered eighty capital ships has just been cut off.',
    },
    {
      t: 7.5,
      title: 'The Pax detonates',
      kind: 'catastrophe',
      at: { x: 655, y: 335 },
      characterIds: ['darrow', 'roque'],
      description:
        'Roque refuses to stand his fleet down — so Darrow, from Roque\'s own bridge, raises the output on the Pax\'s overheating reactor. The dreadnought that was Orion\'s pride goes up in a nuclear inferno that crumples three escort destroyers and smashes them into each other, taking the Society boarding wave with it.',
    },
    {
      t: 8,
      title: 'Thebe springs the trap',
      kind: 'strategic',
      at: { x: 255, y: 300 },
      characterIds: ['sevro'],
      description:
        'The Sword Armada, pursuing the "beaten" Rising fleet toward Jupiter, sweeps past the barren little moon of Thebe — and Sevro launches every hidden leechCraft and starShell: ~50,000 Obsidians and ~40,000 Reds erupting from Helldiver-cut caverns into the Society hulls. The tunnel mouths are collapsed behind the launch so the Rising\'s prize-crews get a head start on the Moon Lords. Within the hour a third of the armada is boarded.',
    },
    {
      t: 8.8,
      title: 'Antonia flees; Kavax taken',
      kind: 'strategic',
      at: { x: 560, y: 430 },
      characterIds: ['antonia', 'kavax', 'victra'],
      description:
        'With the battle collapsing, Antonia abandons the Sword Armada and runs for the Core — carrying off Kavax au Telemanus, captured aboard the Pandora after boarding it with his daughters to strike at her. Victra begs for pursuit, but no ships can be spared; Orion instead thrusts her capital ships into the flank Antonia vacated, turning defeat into rout.',
    },
    {
      t: 9.2,
      title: 'Roque\'s suicide',
      kind: 'catastrophe',
      at: { x: 700, y: 345 },
      characterIds: ['roque', 'darrow', 'victra'],
      description:
        'His armada destroyed, Roque refuses Darrow\'s offer of surrender and takes his own life on his captured bridge. Victra assumes command and offers the Blue crew a choice: serve or be prisoners. Seven stand from their posts. Darrow orders that the ship\'s capture NOT be broadcast.',
    },
    {
      t: 10,
      title: 'The silent run to Ganymede',
      kind: 'strategic',
      at: { x: 770, y: 450 },
      characterIds: ['darrow', 'romulus', 'holiday'],
      description:
        'Still flying Roque\'s colors, the Colossus carves out of the debris field toward Ganymede. Romulus — boarded, fighting in his own corridors — calls to beg Darrow to capture the ship before "Roque" can destroy the Dockyards; Darrow pretends to still be running through the halls. Holiday wipes the video memory and silences outbound signals. Moments after the call, Aeneas au Raa is killed at his father\'s side. The fastest Rim interceptors give chase and are shot down.',
    },
    {
      t: 11,
      title: 'The Dockyards burn — Morning Star',
      kind: 'catastrophe',
      at: { x: 852, y: 512 },
      characterIds: ['darrow', 'victra', 'sefi'],
      description:
        'Parked parallel to the Ganymede Dockyards, Darrow hesitates over the order — and Victra gives it in his stead. Thirty missiles and the full port batteries gut the Rim\'s shipworks: 150,000+ lowColor workers die in the yards, and the wreckage falling through Ganymede\'s sky will kill more than ten million below. As the Dockyards burn, Sefi renames the stolen moonBreaker: Morning Star.',
    },
  ],

  summary:
    'The decisive fleet battle of *Morning Star*: Darrow\'s Rising fleet, Virginia\'s Augustans, and Romulus au Raa\'s Moon Lords versus Roque au Fabii\'s Sword Armada over Jupiter. Darrow feeds Roque the headstrong Reaper he expects — an empty flagship on a suicide run — then takes the Colossus from the inside with mining clawDrills while ninety thousand boarders hidden inside the moon Thebe gut the pursuing armada. It ends with the Rim free, Roque dead by his own hand, and Darrow committing the war\'s darkest secret at Ganymede.',
  outcome:
    'Annihilation of the Sword Armada: ~70 capital ships captured by the Rising and more than half the rest destroyed, against 25+ Rising capital ships lost (the Pax, Cry of Thebes, Hope of Tinos, Dancer of Faran, 14+ torchShips). Roque au Fabii and 47+ Praetorians dead; Aeneas au Raa killed; Kavax captured, then rescued. The Rim Dominion wins full independence — but Darrow\'s secret destruction of the Ganymede Dockyards kills 150,000+ workers and 10M+ Ganymedi under falling wreckage, and the lie, exposed a decade later, brings the Rim into the Solar War against his Republic.',
  fidelityNote:
    'Named ships, commanders, force totals, casualty figures, and the event sequence follow canon (Red Rising Wiki, *Morning Star*; aftermath figures from *Iron Gold* / *Light Bringer*). The books give no battle duration — the ~12-hour clock is an estimate — and no positional data: all coordinates, movement paths, hour offsets, and fleet-split strengths marked "(est.)" are reconstructions. Where the wiki is internally inconsistent (115+ ships / 7 dreadnoughts in the infobox vs 112 / 4 in the prose; ~100,000 total Obsidians vs the 50,000 + 3,000 scene figures), the prose and per-scene figures are preferred.',
  sources: [
    'https://red-rising.fandom.com/wiki/Battle_of_Ilium',
    'https://red-rising.fandom.com/wiki/Morning_Star_(ship)',
    'https://red-rising.fandom.com/wiki/Pax_(Ship)',
    'https://red-rising.fandom.com/wiki/Pandora_(Ship)',
    'https://red-rising.fandom.com/wiki/Dejah_Thoris',
    'https://red-rising.fandom.com/wiki/Roque_au_Fabii',
    'https://red-rising.fandom.com/wiki/Ganymede_Dockyards',
    'https://red-rising.fandom.com/wiki/Sword_Armada',
    'https://red-rising.fandom.com/wiki/Romulus_au_Raa',
    'https://red-rising.fandom.com/wiki/ClawDrill',
  ],
}
