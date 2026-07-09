import type { BattleDefinition } from '../types'

/**
 * The Fall of Luna ("The Fall") — November 4, 743 PCE, Luna orbit and surface.
 * (Pierce Brown, *Morning Star*.)
 *
 * Canon beats (named ships, commanders, the infiltration sequence, the bunker duel,
 * the Jackal's bombing, casualty names) are sourced from the Red Rising Wiki.
 * Map coordinates, movement paths, hour offsets between canon beats, and fleet
 * strengths the books don't give are RECONSTRUCTIONS to make the replay work —
 * anything estimated is marked "(est.)". The books give no clean duration; the
 * 18-hour window is itself an estimate.
 */
export const luna: BattleDefinition = {
  id: 'luna',
  name: 'The Fall of Luna',
  date: 'November 4, 743 PCE (~18 hours — duration est.; the books give no clean figure)',
  location: 'Luna orbit, the Citadel of Light, and the Sovereign\'s bunker',
  durationHours: 18,

  map: {
    width: 1000,
    height: 700,
    mode: 'space',
    features: [
      {
        id: 'luna',
        name: 'Luna',
        kind: 'planet',
        points: [{ x: 500, y: 660 }],
        radius: 170,
        color: '#9ca3af',
        description:
          'Capital moon of the Society: seat of the Morning Throne, home to Hyperion and half a billion people. The Jackal\'s Syndicate agents have seeded its surface with 500 stolen 30-megaton warheads — a fact almost no one on either fleet knows as the battle opens.',
      },
      {
        id: 'luna-orbit',
        name: 'Luna near-orbit',
        kind: 'orbit',
        points: [{ x: 500, y: 660 }],
        radius: 265,
        description:
          'Congested near-Luna space. Despite three days\' warning of the Red Armada\'s approach, countless civilian vessels still crowd the orbital lanes as the rebel fleet arrives — the Society put remarkably little effort into clearing them.',
      },
      {
        id: 'earth',
        name: 'Earth',
        kind: 'planet',
        points: [{ x: 95, y: 85 }],
        radius: 26,
        color: '#3b82f6',
        description:
          'Earth, a quarter-million klicks sunward. Its grain ships run constantly to feed Luna — and the Rising\'s false intel claims ten thousand Martian Obsidians were smuggled to the moon in their holds. (Distance compressed for the map.)',
      },
      {
        id: 'hyperion',
        name: 'Hyperion',
        kind: 'city',
        points: [{ x: 455, y: 500 }],
        description:
          'Capital city of the Society and of Luna. The Senate convenes here at the Sovereign\'s summons — which is itself the Jackal\'s doing. After the battle its liberation curdles into looting some will call the "Rape of Hyperion."',
      },
      {
        id: 'citadel',
        name: 'Citadel of Light',
        kind: 'landmark',
        points: [{ x: 500, y: 491 }],
        description:
          'Octavia au Lune\'s seat of power in Hyperion, garrisoned by the Praetorian Guard and Legio XIII Dracones — some 30,000 Gray Dragoons — plus Olympic Knights and Obsidian retainers. Darrow\'s opening missile is aimed here, and shot down.',
      },
      {
        id: 'dragon-maw',
        name: 'Dragon Maw gravLift',
        kind: 'landmark',
        points: [{ x: 516, y: 496 }],
        description:
          'A mythical ancient gravLift beneath the Citadel, descending a full kilometer to a pre-Conquering bunker under the moon\'s crust — the Sovereign\'s last refuge, and the stage for the endgame of the Rising.',
      },
      {
        id: 'mare-serenitatis',
        name: 'Mare Serenitatis',
        kind: 'landmark',
        points: [{ x: 390, y: 530 }],
        description:
          'The Sea of Serenity. The first of the Jackal\'s stolen 30-megaton warheads detonates on its southern reach — his proof of leverage, and the opening blow of the bombing of Luna.',
      },
      {
        id: 'hysperia-gardens',
        name: 'Hysperia Gardens',
        kind: 'landmark',
        points: [{ x: 558, y: 506 }],
        description:
          'Where the burning dreadnought Lion of Mars — the Jackal\'s flagship and his bomb-command platform — finally comes down, driven from the sky by the guns of both fleets.',
      },
      {
        id: 'endymion',
        name: 'Endymion',
        kind: 'city',
        points: [{ x: 622, y: 540 }],
        description:
          'Manufacturing city of Luna. It survives the battle but not the peace: in the reconstruction that follows, the money flows to Hyperion while Endymion\'s districts are left to rot.',
      },
      {
        id: 'approach-route',
        name: 'Red Armada approach vector',
        kind: 'route',
        points: [
          { x: 960, y: 45 },
          { x: 845, y: 130 },
          { x: 710, y: 245 },
          { x: 620, y: 345 },
        ],
        labelAt: { x: 800, y: 165 },
        description:
          'The Red Armada\'s inbound track from the Jovian sphere, after two months and three weeks of hard burn and a disinformation campaign that pointed the Society at Mars. (Vector reconstructed.)',
      },
    ],
  },

  factions: {
    republic: {
      name: 'The Rising — Red Armada + Augustus coalition',
      color: '#e63946',
      commanders: [
        'Darrow of Lykos (the Reaper)',
        'Virginia au Augustus',
        'Sevro au Barca (Ares)',
        'Orion xe Aquarii (Navarch, Morning Star)',
        'Victra au Julii',
        'Kavax au Telemanus',
        'Sefi Volarus',
        'Holiday ti Nakamura',
      ],
      totalStrength:
        '160+ capital ships: the moonBreaker Morning Star, 4+ dreadnoughts (Persephone\'s Howl, Pandora, Dejah Thoris, Reynard), 60+ torchShips, corvettes, ripWings — not yet a Republic, still a rebellion',
    },
    society: {
      name: 'The Society — Scepter Armada + the Jackal\'s fleet',
      color: '#d4af37',
      commanders: [
        'Octavia au Lune (Sovereign)',
        'Magnus au Grimmus, the Ash Lord (ArchImperator)',
        'Adrius au Augustus, the Jackal',
        'Aja au Grimmus (Protean Knight)',
        'Lilath au Faran (Boneriders)',
        'Apollonius au Valii-Rath',
        'Tharsus au Valii-Rath',
      ],
      totalStrength:
        'Scepter Armada (several dreadnoughts incl. the Annihilo) + the Jackal\'s House Augustus fleet (Lion of Mars) + 5th Garrison Fleet; ~30,000 Gray Dragoons, 6 Olympic Knights, 30 Boneriders, hundreds of Obsidians',
    },
  },

  units: [
    // ————— The Rising —————
    {
      id: 'red-armada',
      name: 'Red Armada — main body (Morning Star)',
      faction: 'republic',
      kind: 'ship',
      path: [
        { t: 0, x: 920, y: 60 },
        { t: 1, x: 800, y: 175 },
        { t: 9, x: 760, y: 215 },
        { t: 10.5, x: 680, y: 300 },
        { t: 12, x: 625, y: 355 },
      ],
      strength: [
        { t: 0, value: 100 },
        { t: 13, value: 100 },
        { t: 15, value: 140 },
      ],
      strengthUnit: 'capital ships (est.)',
      notes:
        'The main body of the rebel fleet, led by the captured and renamed moonBreaker Morning Star — Darrow\'s flagship. The full coalition musters 160+ capital ships (canon figure; the split between squadrons here is reconstructed). It holds off Luna during the infiltration, then closes once the bombs start falling. The late strength rise is the defection of dozens of Gold-owned warships after Virginia\'s crowning (count estimated).',
    },
    {
      id: 'julii-squadron',
      name: 'House Julii squadron (Victra)',
      faction: 'republic',
      kind: 'ship',
      path: [
        { t: 0, x: 945, y: 140 },
        { t: 1.5, x: 820, y: 265 },
        { t: 9.3, x: 780, y: 300 },
        { t: 10.2, x: 620, y: 430 },
        { t: 12, x: 590, y: 445 },
      ],
      strength: [{ t: 0, value: 20 }],
      strengthUnit: 'capital ships (est.)',
      notes:
        'Victra au Julii\'s ships, including the recaptured family flagship Pandora. When Darrow\'s order comes up from the bunker, it is Victra who takes the Red Armada\'s guns onto the Lion of Mars. (Squadron size and station reconstructed.)',
    },
    {
      id: 'telemanus-arcos',
      name: 'Telemanus & Arcos squadrons',
      faction: 'republic',
      kind: 'ship',
      path: [
        { t: 0, x: 865, y: 45 },
        { t: 1.5, x: 720, y: 130 },
        { t: 10.5, x: 655, y: 235 },
        { t: 12, x: 620, y: 270 },
      ],
      strength: [{ t: 0, value: 40 }],
      strengthUnit: 'capital ships (est.)',
      notes:
        'The House Telemanus and House Arcos contingents of Virginia\'s coalition, folded into one formation for the replay (composition and size reconstructed). Kavax au Telemanus commands here, and the dreadnought Dejah Thoris — Virginia\'s own flagship — sails with them while she goes down the Dragon Maw in chains.',
    },
    {
      id: 'infiltration',
      name: 'Infiltration party (the ruse)',
      faction: 'republic',
      kind: 'specops',
      appearsAt: 2,
      path: [
        { t: 2, x: 770, y: 205 },
        { t: 3, x: 330, y: 600 },
        { t: 4.5, x: 330, y: 600 },
        { t: 5.2, x: 500, y: 491 },
        { t: 5.8, x: 516, y: 496 },
        { t: 12, x: 516, y: 496 },
        { t: 13, x: 455, y: 500 },
      ],
      strength: [
        { t: 2, value: 5 },
        { t: 7, value: 5 },
        { t: 7.1, value: 4 },
      ],
      strengthUnit: 'people',
      notes:
        'Cassius au Bellona "escapes" the rebel fleet with the captured Darrow and Virginia and the "corpse" of Sevro au Barca, accompanied by the escaped Society Praetor Antonia au Severus-Julii. The ruse carries them through the Society lines, aboard the Lion of Mars, down to the Citadel, and through the Dragon Maw into the Sovereign\'s bunker. Antonia is executed there; the other four walk out to the Senate. (Shuttle track and timings reconstructed.)',
    },

    // ————— The Society —————
    {
      id: 'scepter-armada',
      name: 'Scepter Armada (Magnus au Grimmus)',
      faction: 'society',
      kind: 'ship',
      path: [
        { t: 0, x: 500, y: 415 },
        { t: 9.8, x: 470, y: 430 },
        { t: 16, x: 440, y: 400 },
        { t: 17, x: 300, y: 300 },
        { t: 18, x: 120, y: 190 },
      ],
      strength: [
        { t: 0, value: 80 },
        { t: 13, value: 80 },
        { t: 15, value: 40 },
      ],
      strengthUnit: 'capital ships (est.)',
      notes:
        'ArchImperator Magnus au Grimmus, the Ash Lord, arrays the Scepter Armada around Luna\'s darkside in a defensive formation — several dreadnoughts including his flagship Annihilo, destroyers, ripWings, and corvettes (canon lists composition but not counts; figures reconstructed, and the darkside formation is compressed onto the visible disc). The 5th Garrison Fleet is folded in here. After Octavia\'s death it fires on the Lion of Mars alongside the rebels, bleeds defectors, and finally withdraws to Mercury with the loyalist core.',
    },
    {
      id: 'jackal-fleet',
      name: 'House Augustus fleet — the Jackal (hidden)',
      faction: 'society',
      kind: 'ship',
      path: [{ t: 0, x: 312, y: 638 }],
      strength: [
        { t: 0, value: 20 },
        { t: 13, value: 20 },
        { t: 14.5, value: 8 },
      ],
      strengthUnit: 'capital ships (est.)',
      notes:
        'Adrius au Augustus\'s personal fleet, stationed on the far side of Luna in coordination with the Sovereign as a trap for the rebel armada (canon). Shown tucked behind the western limb — the far-side position is compressed onto the map. Its strength is not given in canon (est.), and canon does not detail its fate after the Lion of Mars is destroyed; the late decline stands for ships defecting or standing down (reconstructed).',
    },
    {
      id: 'lion-of-mars',
      name: 'Lion of Mars (dreadnought)',
      faction: 'society',
      kind: 'ship',
      vanishesAt: 11,
      path: [
        { t: 0, x: 330, y: 600 },
        { t: 9.5, x: 330, y: 600 },
        { t: 10.3, x: 435, y: 545 },
        { t: 11, x: 558, y: 506 },
      ],
      strength: [
        { t: 0, value: 1 },
        { t: 10.8, value: 1 },
        { t: 11, value: 0 },
      ],
      strengthUnit: 'dreadnought',
      notes:
        'The Jackal\'s flagship, an old House Augustus dreadnought — and the command platform from which Lilath au Faran detonates the stolen warheads. Once the bombing begins, BOTH fleets turn their guns on it; Apollonius au Valii-Rath is the first Martian Gold on the Society side to fire. It burns down through the sky and crashes into the Hysperia Gardens.',
    },
    {
      id: 'praetorian-garrison',
      name: 'Praetorian Guard / Legio XIII Dracones (Citadel)',
      faction: 'society',
      kind: 'infantry',
      path: [{ t: 0, x: 500, y: 491 }],
      strength: [{ t: 0, value: 30_000 }],
      strengthUnit: 'Gray Dragoons',
      notes:
        'Approximately 30,000 Gray Dragoons of the Praetorian Guard garrison the Citadel of Light, with at least 40 Praetors, 6 Olympic Knights, 30 Boneriders, and hundreds of Obsidians. The false Sefi intel pulls most of the bunker detail up to the surface — exactly as the rebels intend. At least 21 Praetorians, the Truth and Joy Knights, and 19 Boneriders die below.',
    },
    {
      id: 'orbital-platforms',
      name: 'Orbital defense platforms',
      faction: 'society',
      kind: 'ship',
      path: [{ t: 0, x: 645, y: 470 }],
      strength: [{ t: 0, value: 12 }],
      strengthUnit: 'platforms (est.)',
      notes:
        'Luna\'s fixed orbital defenses — the guns that swat down Darrow\'s opening long-range missile aimed at the Hyperion Citadel. Number and stations are not given in canon (est.); shown as a single static marker.',
    },

    // ————— Environment: the Jackal's bombs —————
    {
      id: 'nuke-serenitatis',
      name: 'Detonation — southern Mare Serenitatis',
      faction: 'environment',
      kind: 'hazard',
      appearsAt: 9,
      vanishesAt: 10.5,
      color: '#f87171',
      path: [{ t: 9, x: 390, y: 530 }],
      strength: [
        { t: 9, value: 5 },
        { t: 10.5, value: 3 },
      ],
      strengthUnit: 'intensity (1–5)',
      notes:
        'The first of the Jackal\'s stolen 30-megaton warheads, detonated on the southern Mare Serenitatis as proof of his leverage. Location is canon; the blast footprint is illustrative.',
    },
    {
      id: 'nuke-west',
      name: 'Detonations — western maria',
      faction: 'environment',
      kind: 'hazard',
      appearsAt: 9.7,
      vanishesAt: 11.3,
      color: '#f87171',
      path: [{ t: 9.7, x: 350, y: 575 }],
      strength: [
        { t: 9.7, value: 5 },
        { t: 11.3, value: 3 },
      ],
      strengthUnit: 'intensity (1–5)',
      notes:
        'Lilath keeps detonating as the fleets close on the Lion of Mars. This marker stands for several of the 12+ 30-megaton detonations confirmed by the time the ship goes down; individual sites beyond Mare Serenitatis are not named in canon (positions reconstructed).',
    },
    {
      id: 'nuke-east',
      name: 'Detonations — eastern rim',
      faction: 'environment',
      kind: 'hazard',
      appearsAt: 10.1,
      vanishesAt: 11.6,
      color: '#f87171',
      path: [{ t: 10.1, x: 655, y: 585 }],
      strength: [
        { t: 10.1, value: 5 },
        { t: 11.6, value: 3 },
      ],
      strengthUnit: 'intensity (1–5)',
      notes:
        'Further detonations east of Hyperion — another stand-in marker for the spread of the 12+ blasts that leave large sections of several cities in ruins and radiation drifting across the moon (positions reconstructed).',
    },
    {
      id: 'nuke-stable',
      name: 'Detonation — Grimmus breeding stable',
      faction: 'environment',
      kind: 'hazard',
      appearsAt: 10.4,
      vanishesAt: 12,
      color: '#f87171',
      path: [{ t: 10.4, x: 410, y: 512 }],
      strength: [
        { t: 10.4, value: 5 },
        { t: 12, value: 3 },
      ],
      strengthUnit: 'intensity (1–5)',
      notes:
        'One blast destroys the House Grimmus breeding stable where 200 Obsidian children were bred from the seed of Ragnar Volarus. All but one die: the sole survivor is Volga Fjorgan, whose story detonates a decade later in the Dark Age era. The stable\'s destruction is canon; its map position is reconstructed.',
    },
  ],

  characters: [
    {
      id: 'darrow',
      name: 'Darrow of Lykos',
      faction: 'republic',
      role: 'The Reaper — leader of the Rising',
      description:
        'Architect of the whole gambit: hold the fleet at arm\'s length while he, Virginia, Cassius, and a "dead" Sevro ride a staged betrayal all the way into Octavia\'s bunker. He pays for the cover story with his hand, kills the Sovereign with a knife hidden in his own restraints, and tears out the Jackal\'s tongue when the bombs start falling.',
      phases: [
        { from: 0, unitId: 'red-armada', note: 'Aboard the Morning Star; orders the missile fired at the Hyperion Citadel, then rebuffs Sejanus\'s envoy.' },
        { from: 2, unitId: 'infiltration', note: 'Playing the prisoner in Cassius\'s "escape" shuttle. His hand is cut off aboard the Lion of Mars to hold the cover.' },
        { from: 7.5, unitId: 'infiltration', note: 'Springs the trap at his own staged execution; fatally stabs Octavia; orders Victra to destroy the Lion of Mars.' },
        { from: 13, unitId: 'infiltration', note: 'In the Senate chamber as Virginia is crowned Sovereign.' },
      ],
    },
    {
      id: 'virginia',
      name: 'Virginia au Augustus (Mustang)',
      faction: 'republic',
      role: 'Head of House Augustus — Sovereign by battle\'s end',
      description:
        'Enters the battle a "captured" rebel and leaves it Sovereign of the Society\'s successor state. In the bunker she sells the false Sefi intel with Cassius, survives the duel, opens coms to the Society fleet to stop her twin\'s bombs — and presents Octavia\'s head to the Senate.',
      phases: [
        { from: 0, unitId: 'red-armada', note: 'With the fleet command; her flagship Dejah Thoris sails with the Telemanus/Arcos squadrons.' },
        { from: 2, unitId: 'infiltration', note: 'Playing Cassius\'s prisoner alongside Darrow.' },
        { from: 9.5, unitId: 'infiltration', note: 'Opens direct com channels to the Society fleet and, with Lysander, persuades its Praetors to help stop Lilath.' },
        { from: 13, unitId: 'infiltration', note: 'Presents Octavia\'s head in the Senate and is crowned Sovereign.' },
      ],
    },
    {
      id: 'cassius',
      name: 'Cassius au Bellona',
      faction: 'republic',
      role: 'Olympic Knight turned double agent',
      description:
        'The lynchpin of the ruse: his staged "escape" with the captured rebels is what opens every door between the fleet and the bunker. Once the blank fires, he kills the remaining Praetorians, frees Darrow and Virginia, and cuts down the Truth and Joy Knights before turning to Aja.',
      phases: [
        { from: 0, unitId: 'red-armada', note: 'A prisoner of the Rising since Ilium — in truth, already turned.' },
        { from: 2, unitId: 'infiltration', note: 'Playing the loyal escapee delivering Darrow and Virginia to the Sovereign.' },
        { from: 7.6, unitId: 'infiltration', note: 'Kills the remaining Praetorians in the bunker, then the Truth and Joy Knights; fights Aja three-on-one.' },
        { from: 13, unitId: 'infiltration', note: 'At the Senate; afterward takes the boy Lysander under his protection and disappears.' },
      ],
    },
    {
      id: 'sevro',
      name: 'Sevro au Barca',
      faction: 'republic',
      role: 'Ares — Howler prime',
      description:
        'The battle\'s best corpse. His faked death — sold to the fleet and the Society alike — gets his "body" carried into the Sovereign\'s bunker, gun and all. Revived mid-duel by Holiday\'s snakebite recipe, he ends the fight by stabbing and decapitating Aja au Grimmus.',
      phases: [
        { from: 0, unitId: 'red-armada', note: '"Killed" in front of witnesses — the death is staged, the grief aboard the fleet is not all feigned.' },
        { from: 2, unitId: 'infiltration', note: 'Sealed in a body bag, playing dead: the party\'s ticket, and its hidden weapon, through every checkpoint.' },
        { from: 8.2, unitId: 'infiltration', note: 'Revived with Holiday ti Nakamura\'s snakebite recipe in the middle of the duel.' },
        { from: 8.5, unitId: 'infiltration', note: 'Stabs and decapitates Aja au Grimmus.' },
      ],
    },
    {
      id: 'antonia',
      name: 'Antonia au Severus-Julii',
      faction: 'society',
      role: 'Escaped Society Praetor — the ruse\'s unwitting seal',
      description:
        'Victra\'s treacherous sister, taken at Ilium. Her "escape" alongside Cassius lends the ruse its credibility — a real Society Praetor vouching for the prize. Octavia has her executed in the bunker anyway, for deserting the Sword Armada at Ilium.',
      phases: [
        { from: 0, unitId: 'red-armada', status: 'captured', note: 'Held prisoner aboard the rebel fleet since the Battle of Ilium.' },
        { from: 2, unitId: 'infiltration', note: 'Accompanies the escape shuttle — under duress, and useful exactly once.' },
        { from: 7, status: 'dead', note: 'Executed in the bunker for deserting the Sword Armada at Ilium.' },
      ],
    },
    {
      id: 'octavia',
      name: 'Octavia au Lune',
      faction: 'society',
      role: 'Sovereign of the Society',
      description:
        'Ruler of the Society for six decades — and, since March, the Jackal\'s blackmail victim, having agreed to abdicate to him once the Rising is crushed. She stages Darrow\'s live execution to break the rebel fleet\'s morale, and dies of a knife he hid in his own restraints. Her last words beg her enemies to stop Adrius.',
      phases: [
        { from: 0, unitId: 'praetorian-garrison', note: 'In the Citadel of Light, having convened the Senate at the Jackal\'s hidden insistence.' },
        { from: 5.5, unitId: 'praetorian-garrison', note: 'In the pre-Conquering bunker a kilometer down, receiving her "captured" enemies.' },
        { from: 7.5, unitId: 'praetorian-garrison', note: 'Stabbed in the abdomen by Darrow as the trap springs; dying through the duel.' },
        { from: 8.6, status: 'dead', note: 'Dies after Aja falls, begging her enemies to stop Adrius.' },
      ],
    },
    {
      id: 'aja',
      name: 'Aja au Grimmus',
      faction: 'society',
      role: 'Protean Knight — the Sovereign\'s blade',
      description:
        'The deadliest sword in the Society and Octavia\'s guardian since childhood. She personally escorts the "prisoners" down the Dragon Maw — and when the trap springs, holds a three-on-one duel against Darrow, Cassius, and Virginia until the dead man in the corner gets up.',
      phases: [
        { from: 0, unitId: 'praetorian-garrison', note: 'At the Citadel; escorts the infiltration party down the Dragon Maw from hour ~4.5.' },
        { from: 7.6, unitId: 'praetorian-garrison', note: 'Fights Darrow, Cassius, and Virginia three-on-one in the bunker.' },
        { from: 8.5, status: 'dead', note: 'Stabbed, then decapitated, by the revived Sevro au Barca.' },
      ],
    },
    {
      id: 'adrius',
      name: 'Adrius au Augustus, the Jackal',
      faction: 'society',
      role: 'ArchGovernor of Mars — blackmailer of the Sovereign',
      description:
        'The battle\'s third side wearing the second\'s colors. He stole Octavia\'s 500-warhead Rhea contingency, mined Luna with it, and blackmailed her into a promised abdication. In the bunker he claims the executioner\'s role — and fires Sevro\'s gun, loaded with a blank. When his sister and Darrow refuse his terms, he starts detonating the moon.',
      phases: [
        { from: 0, unitId: 'lion-of-mars', note: 'Aboard his flagship, hidden with his fleet on Luna\'s far side as the Sovereign\'s trap.' },
        { from: 4.5, unitId: 'praetorian-garrison', note: 'Down to the bunker to preside over the execution he negotiated for himself (timing reconstructed).' },
        { from: 9.3, unitId: 'infiltration', status: 'captured', note: 'Darrow tears out his tongue. Held by the rebels — his execution comes later, on Luna.' },
      ],
    },
    {
      id: 'lilath',
      name: 'Lilath au Faran',
      faction: 'society',
      role: 'Bonerider — the Jackal\'s trigger finger',
      description:
        'The Jackal\'s most loyal Bonerider, left aboard the Lion of Mars with the detonation codes. She fires the first warhead on Mare Serenitatis on his order and keeps detonating — twelve and more — until both fleets burn the ship out from under her.',
      phases: [
        { from: 0, unitId: 'lion-of-mars', note: 'Aboard the flagship with the Boneriders and the bomb command uplink.' },
        { from: 9, unitId: 'lion-of-mars', note: 'Detonating warheads across Luna at Adrius\'s order.' },
        { from: 11, status: 'dead', note: 'Dies in the Lion of Mars\'s crash into the Hysperia Gardens.' },
      ],
    },
    {
      id: 'magnus',
      name: 'Magnus au Grimmus, the Ash Lord',
      faction: 'society',
      role: 'ArchImperator — Scepter Armada',
      description:
        'Burner of Rhea and the Society\'s senior commander, holding the Scepter Armada in a defensive formation around Luna\'s darkside. After Octavia dies and the bombs fall, his own captains help destroy the Lion of Mars — then he gathers the loyalist core and withdraws to Mercury to start the Solar War. Both his daughters die in this battle\'s orbit: Aja in the bunker, and the bombing takes the family\'s breeding stable.',
      phases: [
        { from: 0, unitId: 'scepter-armada', note: 'Commanding the darkside defensive formation from the Annihilo.' },
        { from: 9.8, unitId: 'scepter-armada', note: 'His fleet joins the rebels in firing on the Lion of Mars to stop the bombing.' },
        { from: 17, status: 'withdrawn', note: 'Retreats to Mercury with the loyalist core of the fleet, leaving whole legions marooned on Luna. Returns in January with the Battle of Luna.' },
      ],
    },
    {
      id: 'apollonius',
      name: 'Apollonius au Valii-Rath, the Minotaur',
      faction: 'society',
      role: 'Praetor, Scepter Armada',
      description:
        'The flamboyant Valii-Rath war-hero, serving with the Scepter Armada alongside his brother Tharsus. When Virginia\'s com call comes through, he is the first Martian Gold on the Society side to open fire on the Lion of Mars — a choice of principle he will spend the Solar War paying for and boasting about in equal measure.',
      phases: [
        { from: 0, unitId: 'scepter-armada', note: 'With the darkside formation.' },
        { from: 9.8, unitId: 'scepter-armada', note: 'First Martian Gold on the Society side to fire on the Lion of Mars.' },
      ],
    },
    {
      id: 'victra',
      name: 'Victra au Julii',
      faction: 'republic',
      role: 'Commander, House Julii squadron',
      description:
        'Commands the Julii ships with the Red Armada. When Darrow\'s voice comes up from a kilometer beneath the moon ordering the Lion of Mars destroyed, she executes without hesitation — the target being her own sister\'s last refuge notwithstanding; Antonia is already dead below.',
      phases: [
        { from: 0, unitId: 'julii-squadron', note: 'With the Julii squadron off the main body.' },
        { from: 9.3, unitId: 'julii-squadron', note: 'Receives Darrow\'s order and leads the fleet\'s fire onto the Lion of Mars.' },
      ],
    },
    {
      id: 'orion',
      name: 'Orion xe Aquarii',
      faction: 'republic',
      role: 'Navarch — helm of the Morning Star',
      description:
        'The Blue navarch who has flown Darrow\'s flagships since the Pax. She holds the Morning Star and the fleet\'s discipline through the long standoff — the hardest order being the one to wait while her commander walks into the enemy bunker as a prisoner.',
      phases: [
        { from: 0, unitId: 'red-armada', note: 'At the helm of the Morning Star throughout.' },
      ],
    },
    {
      id: 'sefi',
      name: 'Sefi Volarus, the Quiet',
      faction: 'republic',
      role: 'Obsidian war-leader — the name in the false intel',
      description:
        'Ragnar\'s sister leads the fleet\'s Obsidians. She never lands: her role in this battle is as a ghost. The rebels\' false intel — ten thousand Martian Obsidians smuggled in on Earth\'s grain ships, a ground assault on the Citadel under her command — is what empties Octavia\'s bunker of Praetorians.',
      phases: [
        { from: 0, unitId: 'red-armada', note: 'With the fleet. The "Sefi ground assault" exists only in the intel the Society is meant to believe.' },
      ],
    },
    {
      id: 'lysander',
      name: 'Lysander au Lune',
      faction: 'society',
      role: 'Heir of House Lune, age ten',
      description:
        'Octavia\'s grandson, present in the Citadel and then the bunker as his world is unmade. It is Lysander who suggests calling the Ash Lord to stop Lilath\'s bombs, and who helps Virginia persuade the Society Praetors over the coms. Cassius takes the boy under his protection when it is over — an act with a decade of consequences.',
      phases: [
        { from: 0, unitId: 'praetorian-garrison', note: 'In the Citadel of Light with his grandmother.' },
        { from: 5.5, unitId: 'praetorian-garrison', note: 'In the bunker through the duel and Octavia\'s death.' },
        { from: 9.5, unitId: 'praetorian-garrison', note: 'Suggests calling the Ash Lord; helps persuade the Society Praetors to stop Lilath.' },
        { from: 13, unitId: 'infiltration', note: 'Goes up with the victors to the Senate; afterward taken — protected — by Cassius aboard the Archimedes.' },
      ],
    },
    {
      id: 'holiday',
      name: 'Holiday ti Nakamura',
      faction: 'republic',
      role: 'Gray legionnaire, Sons of Ares',
      description:
        'Listed among the Rising\'s commanders for The Fall. Her contribution reaches the bunker without her: the snakebite recipe the party carries is hers, and it is what brings Sevro back from his very convincing death in the middle of the duel.',
      phases: [
        { from: 0, unitId: 'red-armada', note: 'Aboard the fleet. Her snakebite recipe revives Sevro in the bunker at hour ~8.2.' },
      ],
    },
    {
      id: 'kavax',
      name: 'Kavax au Telemanus',
      faction: 'republic',
      role: 'Head of House Telemanus',
      description:
        'The great bear of House Telemanus, carried off a prisoner aboard the Pandora when Antonia fled Ilium — and rescued days later by Victra\'s pursuit. The wiki lists him among the coalition\'s commanders at The Fall; he commands the Telemanus ships in Virginia\'s coalition here.',
      phases: [
        { from: 0, unitId: 'telemanus-arcos', note: 'Commanding the Telemanus contingent of the coalition fleet.' },
      ],
    },
    {
      id: 'romulus',
      name: 'Romulus au Raa',
      faction: 'society',
      role: 'Sovereign of the Rim Dominion — neutral',
      description:
        'Not present, and that absence is the point: the price of the Rim\'s help at Ilium was independence, not alliance. Per the accord, the Dominion\'s armadas stay at Jupiter while the Core decides its own fate. (Listed under Society colors only because the schema requires a side; the Rim is party to neither fleet.)',
      phases: [
        { from: 0, status: 'off-map', note: 'On Io. The Rim Dominion sits out The Fall per the Ilium accord, its independence already won.' },
      ],
    },
  ],

  events: [
    {
      t: 0.2,
      title: 'Hail at one million klicks',
      kind: 'strategic',
      at: { x: 900, y: 80 },
      characterIds: ['darrow', 'orion'],
      description:
        'Luna Defense Command hails the incoming fleet and demands its intentions. Darrow answers with a long-range missile from the Morning Star aimed at the Hyperion Citadel — shot down by the orbital defense platforms. The intention is understood.',
    },
    {
      t: 1,
      title: 'Sejanus\'s envoy rebuffed',
      kind: 'strategic',
      at: { x: 800, y: 175 },
      characterIds: ['darrow'],
      description:
        'ArchLegate Lucius au Sejanus of the Praetorian Guard requests docking clearance to relay the Sovereign and Senate\'s terms as a diplomatic envoy. Darrow informs him that any Society ship approaching the fleet will be fired upon.',
    },
    {
      t: 2,
      title: 'The ruse — Cassius "escapes"',
      kind: 'strategic',
      at: { x: 770, y: 205 },
      characterIds: ['cassius', 'darrow', 'virginia', 'sevro', 'antonia'],
      description:
        'Cassius au Bellona flees the rebel fleet with the captured Darrow and Virginia and the body of Sevro au Barca — every part of it staged. With the escaped Praetor Antonia au Severus-Julii aboard to vouch for the prize, the shuttle makes for the Society lines.',
    },
    {
      t: 3.2,
      title: 'The hand, for the cover',
      kind: 'heroic',
      at: { x: 330, y: 600 },
      characterIds: ['darrow', 'cassius', 'adrius'],
      description:
        'The shuttle lands aboard the Jackal\'s hidden flagship, the Lion of Mars, where Darrow\'s hand is cut off to maintain the ruse. The prisoners are now beyond retrieval — exactly as planned.',
    },
    {
      t: 4.5,
      title: 'Descent to the Citadel',
      kind: 'strategic',
      at: { x: 500, y: 491 },
      characterIds: ['aja', 'darrow', 'virginia', 'cassius'],
      description:
        'The party descends from the Lion of Mars to the Citadel of Light, where the Protean Knight Aja au Grimmus herself takes custody and escorts them onward.',
    },
    {
      t: 5.5,
      title: 'The Dragon Maw',
      kind: 'strategic',
      at: { x: 516, y: 496 },
      characterIds: ['aja', 'darrow', 'virginia', 'cassius', 'sevro', 'octavia'],
      description:
        'Down the mythical ancient gravLift — the Dragon Maw — to a pre-Conquering bunker a kilometer beneath Luna\'s surface. The Sovereign\'s last sanctum, and the rebels are carried into it as trophies.',
    },
    {
      t: 6.5,
      title: 'The Sefi ruse empties the bunker',
      kind: 'strategic',
      at: { x: 516, y: 496 },
      characterIds: ['cassius', 'virginia', 'octavia', 'sefi'],
      description:
        'Cassius and Virginia feed Octavia false intel: ten thousand Martian Obsidians smuggled to Luna aboard Earth\'s grain ships, poised to storm the Citadel under Sefi Volarus. Octavia sends most of the bunker\'s Praetorians to the surface, keeping only her three Olympic Knights below.',
    },
    {
      t: 7,
      title: 'Antonia executed',
      kind: 'combat',
      at: { x: 516, y: 496 },
      characterIds: ['antonia', 'octavia'],
      description:
        'With the bunker cleared, Octavia has Antonia au Severus-Julii executed for deserting the Sword Armada at the Battle of Ilium. The ruse\'s guarantor is discarded first.',
    },
    {
      t: 7.5,
      title: 'A blank in the gun',
      kind: 'heroic',
      at: { x: 516, y: 496 },
      characterIds: ['darrow', 'adrius', 'octavia', 'cassius', 'virginia'],
      description:
        'Octavia broadcasts Darrow\'s execution live on the HC to demoralize the rebel fleet — and Adrius claims the trigger, using his deal to fire Sevro\'s gun himself rather than yield to an Olympic Knight. It fires a blank. Cassius kills the remaining Praetorians and frees the prisoners, and Darrow drives a knife hidden in his restraint harness into the Sovereign\'s abdomen.',
    },
    {
      t: 7.6,
      title: 'The Truth and Joy Knights fall',
      kind: 'combat',
      at: { x: 516, y: 496 },
      characterIds: ['cassius'],
      description:
        'Cassius au Bellona cuts down the Truth Knight and the Joy Knight, Marcus au Saud, in quick succession — leaving one Olympic Knight standing.',
    },
    {
      t: 8.2,
      title: 'Sevro rises',
      kind: 'heroic',
      at: { x: 516, y: 496 },
      characterIds: ['sevro', 'holiday'],
      description:
        'Mid-duel, the corpse gets up: Sevro au Barca is revived with Holiday ti Nakamura\'s snakebite recipe, and the bunker\'s arithmetic changes.',
    },
    {
      t: 8.5,
      title: 'Aja falls',
      kind: 'combat',
      at: { x: 516, y: 496 },
      characterIds: ['aja', 'sevro', 'darrow', 'cassius', 'virginia'],
      description:
        'The violence condenses into a three-on-one duel — Darrow, Cassius, and Virginia against the Protean Knight — that only ends when the revived Sevro stabs and then decapitates Aja au Grimmus. The dying Octavia\'s last words beg her enemies to stop Adrius.',
    },
    {
      t: 9,
      title: 'The bombs revealed — Mare Serenitatis burns',
      kind: 'catastrophe',
      at: { x: 390, y: 530 },
      characterIds: ['adrius', 'lilath', 'darrow', 'virginia'],
      description:
        'With Octavia dead, Adrius reveals his year of work: 500 stolen 30-megaton warheads seeded across Luna by the Syndicate, and the abdication he blackmailed out of the Sovereign. Lilath detonates the first on the southern Mare Serenitatis; he threatens the rest unless Darrow surrenders.',
    },
    {
      t: 9.3,
      title: 'The tongue, and the destroy order',
      kind: 'combat',
      at: { x: 516, y: 496 },
      characterIds: ['darrow', 'adrius', 'victra'],
      description:
        'Darrow\'s answer is to tear out Adrius\'s tongue — then contact Victra and order the Red Armada to destroy the Lion of Mars, the ship the detonation commands come from.',
    },
    {
      t: 9.8,
      title: 'Both fleets fire on the Lion of Mars',
      kind: 'combat',
      at: { x: 400, y: 570 },
      characterIds: ['virginia', 'lysander', 'apollonius', 'magnus', 'victra', 'lilath'],
      description:
        'Lilath keeps detonating. On Lysander\'s suggestion, Virginia opens direct coms to the Society fleet, and with the boy\'s help persuades its Praetors to turn their guns on their own side\'s dreadnought. Apollonius au Valii-Rath is the first Martian Gold among them to fire. Rebel and Scepter batteries pound the Lion of Mars together.',
    },
    {
      t: 10.8,
      title: 'Twelve bombs and a generation',
      kind: 'catastrophe',
      at: { x: 410, y: 512 },
      characterIds: ['lilath', 'adrius'],
      description:
        'More than twelve warheads detonate before the ship dies. One erases the House Grimmus breeding stable and 199 of the 200 Obsidian children bred there from Ragnar Volarus\'s seed — the lone survivor, Volga Fjorgan, will shake the worlds a decade later. Radiation, ruin, and riots will haunt Luna for years.',
    },
    {
      t: 11,
      title: 'The Lion of Mars falls',
      kind: 'catastrophe',
      at: { x: 558, y: 506 },
      characterIds: ['lilath'],
      description:
        'Burning from both fleets\' guns, the Jackal\'s flagship drops out of the sky and crashes into the Hysperia Gardens, killing Lilath au Faran and silencing the detonation uplink.',
    },
    {
      t: 13,
      title: 'A head, a crown, and the fleet fractures',
      kind: 'strategic',
      at: { x: 455, y: 500 },
      characterIds: ['virginia', 'darrow', 'cassius', 'sevro', 'lysander'],
      description:
        'Virginia, Darrow, Cassius, Sevro, and Lysander reach the Senate chamber, where Virginia presents Octavia\'s head and is crowned Sovereign. In the hours after her speech, dozens of Gold-owned warships defect to the Rising, fracturing the Society\'s navy.',
    },
    {
      t: 17,
      title: 'The Ash Lord withdraws',
      kind: 'strategic',
      at: { x: 300, y: 300 },
      characterIds: ['magnus'],
      description:
        'Magnus au Grimmus takes command of the loyalists and retreats to Mercury with the core of his fleet, marooning whole legions of Octavia\'s faithful on Luna. He will be back in January — the Battle of Luna, and the Solar War, are two months away.',
    },
  ],

  summary:
    'The endgame of the Rising: the Red Armada — 160+ capital ships behind the captured moonBreaker Morning Star — arrives over Luna and holds at the edge of the Scepter Armada\'s darkside formation while Darrow, Virginia, Cassius, and a "dead" Sevro ride a staged betrayal into Octavia\'s bunker a kilometer beneath the surface. The Sovereign dies at her own broadcast execution of Darrow; the Jackal answers with twelve-plus of the 500 stolen 30-megaton warheads he mined the moon with, until both fleets together shoot his flagship out of the sky. Virginia presents Octavia\'s head to the Senate and is crowned Sovereign of a state that is not yet the Republic.',
  outcome:
    'Rising victory: Octavia au Lune, Aja au Grimmus, the Truth and Joy Knights, and Lilath au Faran are dead; Adrius is captured; the Society government falls and Virginia is crowned Sovereign. But 12+ nuclear detonations leave Luna irradiated and rioting, the Grimmus breeding stable dies with all but one of its 200 children, and the Ash Lord escapes to Mercury with the loyalist fleet core — the Solar War begins in two months.',
  fidelityNote:
    'Named ships, commanders, the infiltration and bunker sequence, the bombing, and named casualties follow canon (Red Rising Wiki, *Morning Star*). Map coordinates, movement paths, hour offsets between canon beats (including the 18-hour total), squadron splits, and all strengths marked "(est.)" are reconstructions; the darkside/far-side positions are compressed onto the visible disc, and the four hazard markers stand in for the 12+ detonations. The project\'s battle compendium mentions a leechCraft boarding of the dreadnought *Warchild* at this battle; the wiki\'s The Fall page does not include it, so it is omitted here.',
  sources: [
    'https://red-rising.fandom.com/wiki/The_Fall',
    'https://red-rising.fandom.com/wiki/Octavia_au_Lune',
    'https://red-rising.fandom.com/wiki/Adrius_au_Augustus',
    'https://red-rising.fandom.com/wiki/Aja_au_Grimmus',
    'https://red-rising.fandom.com/wiki/Lion_of_Mars',
    'https://red-rising.fandom.com/wiki/Scepter_Armada',
    'https://red-rising.fandom.com/wiki/Morning_Star_(ship)',
    'https://red-rising.fandom.com/wiki/Volga_Fjorgan',
    'https://red-rising.fandom.com/wiki/Lysander_au_Lune',
  ],
}
