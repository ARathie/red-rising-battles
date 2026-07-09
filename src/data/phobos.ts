import type { BattleDefinition } from '../types'

/**
 * The Siege of Phobos — November 20 – December 3, 754 PCE, Mars orbit.
 * (Pierce Brown, *Light Bringer*.)
 *
 * Canon beats (named formations, commanders, ship names, casualty figures, event
 * sequence) are sourced from the Red Rising Wiki. Map coordinates, movement paths,
 * exact hour offsets between canon beats, and most formation strengths are
 * RECONSTRUCTIONS to make the replay work — anything estimated is marked "(est.)".
 * The books narrate the first day in detail, then a two-week attrition fight, then
 * the parley; hour placement within that shape is reconstructed throughout.
 */
export const phobos: BattleDefinition = {
  id: 'phobos',
  name: 'The Siege of Phobos',
  date: 'November 20 – December 3, 754 PCE (13 days)',
  location: 'Phobos, in orbit over Mars',
  durationHours: 312,

  map: {
    width: 1000,
    height: 700,
    mode: 'space',
    features: [
      {
        id: 'mars',
        name: 'Mars',
        kind: 'planet',
        points: [{ x: 140, y: 585 }],
        radius: 150,
        color: '#b8452c',
        labelAt: { x: 140, y: 585 },
        description:
          'The last core world of the Solar Republic. Operation Polyphemus aims to take Phobos as the staging area for an Iron Rain onto the planet in December.',
      },
      {
        id: 'phobos-moon',
        name: 'Phobos',
        kind: 'moon',
        points: [{ x: 500, y: 350 }],
        radius: 55,
        color: '#8d8478',
        labelAt: { x: 500, y: 418 },
        description:
          'Mars\'s inner moon: a hollowed-out fortress-city and shipyard complex, honeycombed with sectors, bastions, tramways, and the Julii-Sun Dockyards. Sixty-three Obsidian deserters sit in its brig. The prize of the whole campaign.',
      },
      {
        id: 'deimos',
        name: 'Deimos',
        kind: 'moon',
        points: [{ x: 880, y: 110 }],
        radius: 14,
        color: '#6f6a61',
        description: 'Mars\'s outer moon. Background only — no fighting is attested here during the siege.',
      },
      {
        id: 'obc-ring',
        name: 'Orbital Battle-station Complex',
        kind: 'orbit',
        points: [{ x: 500, y: 350 }],
        radius: 90,
        description:
          '~200 orbital battle stations ringing Phobos, each with its own commander. Their guns exact a heavy toll on the Rim\'s pounce and on Lysander\'s ram-destroyer run. (Ring position schematic.)',
      },
      {
        id: 'bastion-one',
        name: 'Bastion One — the Nucleus',
        kind: 'station',
        points: [{ x: 485, y: 300 }],
        description:
          'The command fortress of Sector One, wrapped in a ten-deck security layer. At its heart sits the Nucleus — Virginia\'s mobile command room, staffed by 500 officers and technicians and guarded by thirty Lionguard, designed to drop like a lifeboat into the Hollows if the Bastion falls.',
      },
      {
        id: 'the-hive',
        name: 'The Hive',
        kind: 'landmark',
        points: [{ x: 535, y: 390 }],
        description:
          'A dense starscraper district. Lysander\'s last empty ram-destroyer impacts here after Virginia drops the shield — shearing the tops off a hundred towers, gouging a crater four kilometers across, and sending whole buildings and monuments floating up into zero gravity.',
      },
      {
        id: 'the-hollows',
        name: 'The Hollows',
        kind: 'landmark',
        points: [{ x: 490, y: 372 }],
        description:
          'The deep interior of the moon: the Republic\'s fallback command center and the anchor of its defense after Bastion One falls. Virginia reaches it via a sewage line; Niobe lands here mid-siege; the front holds here to the end.',
      },
      {
        id: 'julii-sun',
        name: 'Julii-Sun Dockyards',
        kind: 'station',
        points: [{ x: 552, y: 358 }],
        description:
          'Phobos\'s great repair and shipbuilding yards. Apollonius ensconces himself in the main citadel here after breaking off his hunt for Virginia; taking the yards intact is why Lysander offers terms instead of scorching the moon. Repairs to the Lightbringer begin here before the fourteenth day.',
      },
      {
        id: 'sector-two',
        name: 'Sector Two',
        kind: 'landmark',
        points: [{ x: 450, y: 330 }],
        description:
          'Adjoining sector west of Sector One. Horatia au Votum and the Minotaur legions grind against Red Legion I here for two weeks; it falls to Lysander by the end of the second week.',
      },
      {
        id: 'sector-seven',
        name: 'Sector Seven',
        kind: 'landmark',
        points: [{ x: 548, y: 335 }],
        description:
          'Ajax au Grimmus cuts down the last Republic starShells guarding its bulkheads, letting Lysander\'s troops pour in from Sector Eight. (Placement on the rim reconstructed.)',
      },
      {
        id: 'sector-eight',
        name: 'Sector Eight',
        kind: 'landmark',
        points: [{ x: 458, y: 385 }],
        description:
          'Fallback sector for the Sector One withdrawal. Diomedes floods a subterranean water cistern to drown a reactor and kill Bastion Eight\'s power. (Placement reconstructed.)',
      },
      {
        id: 'north-polar-station',
        name: 'North polar fleet station',
        kind: 'landmark',
        points: [{ x: 150, y: 420 }],
        description:
          'Task Force Spear\'s picket over Mars\'s north pole — exactly where the Twins of South Pacifica\'s rail slugs, fired from Earth a week earlier, are due to arrive. (Marker position schematic.)',
      },
      {
        id: 'south-polar-station',
        name: 'South polar fleet station',
        kind: 'landmark',
        points: [{ x: 248, y: 672 }],
        description: 'Niobe au Telemanus\'s household fleet holds station over Mars\'s south pole. (Marker position schematic.)',
      },
      {
        id: 'eros-approach',
        name: 'Coalition approach (from Eros)',
        kind: 'route',
        points: [
          { x: 985, y: 140 }, { x: 820, y: 200 }, { x: 660, y: 270 }, { x: 580, y: 315 },
        ],
        labelAt: { x: 800, y: 185 },
        description:
          'The invasion route from the Mars-crosser asteroid Eros, where the Core fleets of Votum, Valii-Rath, and Lune rendezvoused with the Rim\'s Dust and Dragon Armadas before sailing on Mars.',
      },
      {
        id: 'twins-stream',
        name: 'Rail-slug stream (Twins of South Pacifica)',
        kind: 'route',
        points: [
          { x: 15, y: 55 }, { x: 80, y: 230 }, { x: 150, y: 405 },
        ],
        labelAt: { x: 60, y: 130 },
        description:
          'Rail slugs forged from Republic wrecks downed on Mercury, fired from Earth\'s Twins of South Pacifica orbital railgun a week before the battle — aimed at the empty point in space where Mars\'s north pole would be when they arrived. The Republic had been assured the Twins could not be repaired.',
      },
    ],
  },

  factions: {
    republic: {
      name: 'The Solar Republic',
      color: '#e63946',
      commanders: [
        'Virginia au Augustus (Sovereign, from the Nucleus)',
        'Oro Sculpturus (Navarch)',
        'Kavax au Telemanus',
        'Victra au Barca (Task Force Spear)',
        'Niobe au Telemanus',
        'Colloway xe Char (Augustan fleet)',
        'Cadus Harnassus (the Hollows)',
        'Thraxa au Telemanus',
      ],
      totalStrength:
        '250,000+ legionnaires (Red Legion I, Hawk & Haemanthus Legions, 7th & Rat Legions, 4,030 Lionguard), ~200 orbital battle stations, hundreds of warships in Ecliptic Guard task forces Spear/Fox/Warlock (dreadnoughts Dejah Thoris, Reynard, Pandemonia), thousands of ripWings',
    },
    society: {
      name: 'Society Remnant + Rim Dominion coalition',
      color: '#d4af37',
      commanders: [
        'Lysander au Lune (Operation Polyphemus, from the Lightbringer)',
        'Helios au Lux & Dido au Raa (Rim: Dust + Dragon Armadas)',
        'Diomedes au Raa',
        'Apollonius au Valii-Rath',
        'Cicero & Horatia au Votum',
        'Julia au Bellona',
        'Ajax au Grimmus',
        'Rhone ti Flavinius (Praetorian Dux)',
      ],
      totalStrength:
        'An alliance of convenience between the Remnant houses and the Rim Dominion: 2 moonBreakers (Lightbringer, Dustmaker), several dreadnoughts (Shadow Dragon, Dragon Song), 10+ destroyers, 150,000+ legionnaires, 200+ clawDrills with Helldiver crews, the Praetorian Guard — plus the Twins of South Pacifica railgun firing from Earth',
    },
  },

  units: [
    // ————— Republic —————
    {
      id: 'tf-spear',
      name: 'Task Force Spear (flagship Pandemonia)',
      faction: 'republic',
      kind: 'ship',
      path: [{ t: 0, x: 160, y: 410 }],
      strength: [
        { t: 0, value: 90 },
        { t: 3.9, value: 90 },
        { t: 4.2, value: 45 },
        { t: 312, value: 40 },
      ],
      strengthUnit: 'warships (est.)',
      notes:
        "The main strength of the Republic Ecliptic Guard, under Victra au Barca, stationed over Mars's north pole — precisely where the Twins of South Pacifica's rail slugs arrive four hours in. Roughly half the task force survives the strike, including the dreadnought Pandemonia. Hull count estimated ('hundreds of warships' across all three task forces); the halving is canon.",
    },
    {
      id: 'telemanus-fleet',
      name: 'Telemanus household fleet (Niobe)',
      faction: 'republic',
      kind: 'ship',
      path: [
        { t: 0, x: 250, y: 665 },
        { t: 5, x: 250, y: 665 },
        { t: 6.5, x: 235, y: 520 },
        { t: 24, x: 240, y: 480 },
        { t: 116, x: 380, y: 440 },
        { t: 120, x: 475, y: 420 },
      ],
      strength: [
        { t: 0, value: 45 },
        { t: 312, value: 36 },
      ],
      strengthUnit: 'warships (est.)',
      notes:
        "Niobe au Telemanus's house fleet, holding Mars's south pole. Ordered north with Colloway to save what remains of Task Force Spear at any cost. Days into the siege it fights through and lands troops to support Virginia in the Hollows (hour placement reconstructed).",
    },
    {
      id: 'augustan-fleet',
      name: 'Augustan fleet (Colloway xe Char)',
      faction: 'republic',
      kind: 'ship',
      path: [
        { t: 0, x: 570, y: 260 },
        { t: 5, x: 570, y: 260 },
        { t: 6.5, x: 240, y: 380 },
        { t: 312, x: 260, y: 360 },
      ],
      strength: [
        { t: 0, value: 50 },
        { t: 312, value: 40 },
      ],
      strengthUnit: 'warships (est.)',
      notes:
        "The House Augustus fleet — including Virginia's 4-km dreadnought Dejah Thoris — stationed around Phobos under the ace Colloway xe Char. Stripped away from the moon to shield Victra's survivors in the north-pole dead zone: the sacrifice that leaves Phobos open to the Lightbringer.",
    },
    {
      id: 'obc',
      name: 'Orbital Battle-station Complex',
      faction: 'republic',
      kind: 'ship',
      path: [{ t: 0, x: 500, y: 255 }],
      strength: [
        { t: 0, value: 200 },
        { t: 24, value: 175 },
        { t: 312, value: 140 },
      ],
      strengthUnit: 'battle stations',
      notes:
        '~200 orbital battle stations ringing Phobos, each with its own commander. Their guns bleed the Rim pounce, obliterate four of the nine ram-destroyers, and — under Oro Sculpturus — knock a fifth off course. After the hardline sync to the Nucleus is cut, on-site manual redundancy crews keep trading fire with the Lightbringer. (200 is canon; the attrition curve is reconstructed.)',
    },
    {
      id: 'bastion-garrison',
      name: 'Phobos garrison + Lionguard (Bastion One)',
      faction: 'republic',
      kind: 'infantry',
      path: [
        { t: 0, x: 485, y: 300 },
        { t: 16, x: 478, y: 325 },
        { t: 40, x: 475, y: 345 },
        { t: 312, x: 473, y: 355 },
      ],
      strength: [
        { t: 0, value: 250_000 },
        { t: 24, value: 235_000 },
        { t: 120, value: 215_000 },
        { t: 290, value: 190_000 },
        { t: 312, value: 186_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        "Over 250,000 legionnaires of all Colors (canon floor): Bastion One's three reserve legions — Red Legion I under Legate Dunlo, plus Hawk and Haemanthus Legions from Bastions Two and Eight — the 7th and Rat Legions of the Expeditionary Force, and 4,030 Lionguard staged in the hangars. Red Legion I plugs the clawDrill breaches at heavy cost; the Lionguard are fed into the shield-generator shafts five hundred at a time. Attrition curve reconstructed; canon losses include 500 Nucleus staff, 300+ of Red Legion, and over 1,000 Lionguard.",
    },
    {
      id: 'hollows-command',
      name: 'The Hollows — fallback command (Harnassus)',
      faction: 'republic',
      kind: 'infantry',
      path: [{ t: 0, x: 490, y: 372 }],
      strength: [
        { t: 0, value: 15_000 },
        { t: 312, value: 12_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        "The Republic's deep-interior redoubt, run by Cadus Harnassus and Screwface. When Cicero's vanguard overextends chasing Virginia, Harnassus leads the counterattack up from the Hollows that Lysander feared. Virginia and Niobe anchor the Republic front here for the rest of the siege. Strength reconstructed — canon does not enumerate the reserve.",
    },
    {
      id: 'drachenjager',
      name: 'Drachenjäger sortie (Kavax au Telemanus)',
      faction: 'republic',
      kind: 'mech',
      appearsAt: 9,
      vanishesAt: 13.8,
      path: [
        { t: 9, x: 487, y: 308 },
        { t: 10, x: 508, y: 318 },
        { t: 12, x: 518, y: 328 },
        { t: 13.6, x: 520, y: 330 },
      ],
      strength: [
        { t: 9, value: 50 },
        { t: 13.6, value: 32 },
      ],
      strengthUnit: 'Drachenjägers (est.)',
      notes:
        'Waves of Drachenjägers pour from the garages of Bastion One under Kavax, hitting the landing zones just as the House Lune second wave touches down. They clear a third of the breaches in minutes and come within an hour of eradicating the Praetorian Guard — until the shield falls, the Minotaur legions land on top of them, and Apollonius breaks Kavax\'s back. The sortie dies with its commander\'s capture. (Mech count reconstructed from "several"/"waves".)',
    },
    {
      id: 'pegasus',
      name: 'Pegasus Legion (Victra\'s counter-drop)',
      faction: 'republic',
      kind: 'infantry',
      appearsAt: 17,
      path: [
        { t: 17, x: 538, y: 308 },
        { t: 280, x: 540, y: 312 },
        { t: 282, x: 548, y: 345 },
        { t: 294, x: 490, y: 372 },
      ],
      strength: [
        { t: 17, value: 5_000 },
        { t: 294, value: 4_200 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        "The famous Pegasus Legion, dropped behind coalition lines by the Pandemonia after it punches through the blockade — with Victra, weeks from term, commanding in person alongside Thraxa. Entrenched behind the enemy for nearly two weeks, the legion is the thorn that keeps the campaign from becoming a clean conquest; 150 of its Obsidians spring the hauler-shaft ambush that kills Ajax au Grimmus. Strength reconstructed.",
    },
    {
      id: 'valdir-deserters',
      name: 'Valdir\'s Obsidian deserters',
      faction: 'republic',
      kind: 'specops',
      appearsAt: 18,
      path: [
        { t: 18, x: 486, y: 305 },
        { t: 18.8, x: 480, y: 318 },
        { t: 20, x: 490, y: 372 },
      ],
      strength: [
        { t: 18, value: 63 },
        { t: 19.5, value: 11 },
      ],
      strengthUnit: 'Obsidian braves',
      notes:
        "Sixty-three Volk deserters — too guilty and too high-profile to pardon — imprisoned in Bastion One's brig since refusing to follow Volsung Fá, Sefi's widower Valdir among them. Virginia arms them with ghostCloaks, razors, and nightOptics and offers freedom for a corridor. Using Rat War tactics they drive off the Minotaur and Cicero at the cost of all but eleven of their number. The survivors are inducted into the Howlers. (63 and 11 are canon.)",
    },

    // ————— Society Remnant + Rim coalition —————
    {
      id: 'rim-fleet',
      name: 'Rim battle groups — Dust + Dragon Armadas',
      faction: 'society',
      kind: 'ship',
      path: [
        { t: 0, x: 965, y: 175 },
        { t: 3, x: 700, y: 250 },
        { t: 4.6, x: 330, y: 330 },
        { t: 6, x: 275, y: 355 },
        { t: 24, x: 300, y: 335 },
        { t: 312, x: 310, y: 330 },
      ],
      strength: [
        { t: 0, value: 120 },
        { t: 5.5, value: 104 },
        { t: 312, value: 95 },
      ],
      strengthUnit: 'warships (est.)',
      notes:
        "The Rim Dominion's Dust and Dragon Armadas under Helios au Lux and Dido au Raa, with Diomedes commanding the Lightning Phalanx (flagship Charybdis; the 6-km moonBreaker Dustmaker and dreadnoughts Shadow Dragon and Dragon Song sail here). After the rail slugs hit, they pounce into the dead zone over the north pole to finish Victra — taking heavy losses to the battle-station guns on the way in. Hull counts reconstructed.",
    },
    {
      id: 'core-fleet',
      name: 'Core battle groups — Votum, Valii-Rath, Lune & Bellona fleets',
      faction: 'society',
      kind: 'ship',
      path: [
        { t: 0, x: 965, y: 235 },
        { t: 3, x: 750, y: 300 },
        { t: 12, x: 640, y: 310 },
        { t: 12.8, x: 590, y: 330 },
        { t: 13.5, x: 565, y: 330 },
        { t: 312, x: 570, y: 325 },
      ],
      strength: [
        { t: 0, value: 80 },
        { t: 13, value: 72 },
        { t: 312, value: 66 },
      ],
      strengthUnit: 'warships (est.)',
      notes:
        "The Society Remnant house fleets under Cicero au Votum, Apollonius au Valii-Rath, and Julia au Bellona. When the Lightbringer draws off the Republic artillery, they plunge into no-man's-land and park just short of the moon's shields, waiting for them to fall — then hurl their legions at the surface the moment they do. Hull counts reconstructed.",
    },
    {
      id: 'lightbringer',
      name: 'Lightbringer (moonBreaker, ex-Morning Star)',
      faction: 'society',
      kind: 'ship',
      path: [
        { t: 0, x: 965, y: 115 },
        { t: 3, x: 750, y: 290 },
        { t: 5.5, x: 645, y: 350 },
        { t: 7, x: 618, y: 372 },
        { t: 7.8, x: 560, y: 262 },
        { t: 312, x: 545, y: 252 },
      ],
      strength: [{ t: 0, value: 1 }],
      strengthUnit: 'moonBreaker (8 km)',
      notes:
        "Lysander's flagship and floater fleet core: the 8-km Morning Star, captured in February 754 and rebuilt and rechristened at the Venus Dockyards. After the crash of the last ram-destroyer fouls the planned landing zone, Captain Pytha xe Virgus rotates the great hull as it sails north to Sector One — hiding the battle damage and presenting fresh guns by the time it arrives. Its mass blinds Republic sensors to the reinforcements sailing behind it.",
    },
    {
      id: 'ram-destroyers',
      name: 'Empty ram-destroyers ×9 (Venus Dockyards)',
      faction: 'society',
      kind: 'ship',
      appearsAt: 5,
      vanishesAt: 7.25,
      path: [
        { t: 5, x: 655, y: 355 },
        { t: 6.4, x: 600, y: 368 },
        { t: 7, x: 560, y: 375 },
        { t: 7.15, x: 535, y: 390 },
      ],
      strength: [
        { t: 5, value: 9 },
        { t: 6.35, value: 9 },
        { t: 6.45, value: 5 },
        { t: 6.6, value: 4 },
        { t: 7.0, value: 1 },
        { t: 7.15, value: 1 },
      ],
      strengthUnit: 'empty destroyers',
      notes:
        "Nine newly finished, crewless destroyers from the Venus Dockyards, spent as battering rams against Phobos's shields — an imitation, at obscene scale, of Darrow's clawDrill boarding of the Colossus at Ilium. Four are obliterated by the battle-station guns, one is knocked off course under Oro's direction, three slam the main shield and melt four generator nexuses — and the last shears The Hive after Virginia drops the shield to save the grid.",
    },
    {
      id: 'praetorians',
      name: 'Praetorian assault — clawDrills & spitTubes',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 8.2,
      path: [
        { t: 8.2, x: 505, y: 285 },
        { t: 8.6, x: 505, y: 310 },
        { t: 12, x: 496, y: 320 },
        { t: 278, x: 468, y: 335 },
        { t: 300, x: 480, y: 328 },
      ],
      strength: [
        { t: 8.2, value: 15_000 },
        { t: 10, value: 12_000 },
        { t: 24, value: 10_000 },
        { t: 312, value: 8_500 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        "Lysander's first wave: 200+ clawDrills — Gamma-clan Helldivers in the cabins, capsules of Obsidian berserkers and Gold commanders bolted above — plus the Praetorian Guard and Legio XIII Dracones spitTubed from the Lightbringer, Lysander, Ajax, and Rhone ti Flavinius among them. Half the drills are shot down before landfall; the rest breach the moon's skin and vent its levels to space. Outnumbered everywhere, the Praetorians refuse to rout, rallying in the cityscape again and again. Troop total reconstructed; 100+ drills lost and several hundred Praetorian dead are canon.",
    },
    {
      id: 'lune-second-wave',
      name: 'House Lune legions — assault shuttles',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 9,
      path: [
        { t: 9, x: 520, y: 295 },
        { t: 24, x: 512, y: 310 },
        { t: 312, x: 505, y: 315 },
      ],
      strength: [
        { t: 9, value: 20_000 },
        { t: 312, value: 16_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        "Two House Lune legions in at least two waves of assault shuttles from the Lightbringer's hangars — the last of them making landfall in the closing seconds before Murani Legard's crews restore the shield, cutting the beachhead off from orbit. They hit the surface just as Kavax's Drachenjäger charge arrives. Strength reconstructed.",
    },
    {
      id: 'gold-second-wave',
      name: 'Second-wave landings — Minotaur, Votum & Rim legions',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 13.1,
      path: [
        { t: 13.1, x: 545, y: 320 },
        { t: 15, x: 498, y: 312 },
        { t: 20, x: 525, y: 338 },
        { t: 278, x: 472, y: 336 },
        { t: 312, x: 478, y: 332 },
      ],
      strength: [
        { t: 13.1, value: 50_000 },
        { t: 312, value: 41_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        "The moment the shield generator falls to Lysander and Ajax's two hundred, Apollonius's ships launch men at the surface, then Cicero's, then Diomedes's. Minotaur legions fall on Kavax's division; Votum clawDrills bore into Bastion One itself while Apollonius and Cicero hunt the Sovereign through its dark corridors. Recalled from the overextension by Lysander, Apollonius holes up in the Julii-Sun Dockyards' citadel. Strength reconstructed within the coalition's 150,000+ legionnaires.",
    },
    {
      id: 'julia-reinforcements',
      name: 'Bellona reinforcement landings (Julia au Bellona)',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 100,
      path: [
        { t: 100, x: 620, y: 250 },
        { t: 104, x: 515, y: 300 },
        { t: 312, x: 500, y: 308 },
      ],
      strength: [
        { t: 100, value: 25_000 },
        { t: 312, value: 22_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        'Over the two weeks of attrition, Julia au Bellona lands fresh troops to reinforce Lysander and his allies on the ground — the manpower behind the sector-by-sector squeeze into Sectors Two and Three. Timing and strength reconstructed.',
    },
    {
      id: 'rail-slugs',
      name: 'Rail slugs — Twins of South Pacifica',
      faction: 'society',
      kind: 'hazard',
      appearsAt: 3.2,
      vanishesAt: 4.4,
      color: '#c084fc',
      path: [
        { t: 3.2, x: 25, y: 65 },
        { t: 4.0, x: 158, y: 402 },
      ],
      strength: [{ t: 3.2, value: 5 }],
      strengthUnit: 'intensity (1–5)',
      notes:
        "The killing stroke of Operation Polyphemus: rail slugs forged from the Republic wrecks of Caliban, fired from Earth's Twins of South Pacifica a week before the fleets ever arrived, aimed at empty space — the point where Mars's north pole, and Task Force Spear, would be. The battle groups spend four hours probing simply to hold Victra in the impact box. Half her task force dies in moments.",
    },
  ],

  characters: [
    {
      id: 'virginia',
      name: 'Virginia au Augustus',
      faction: 'republic',
      role: 'Sovereign of the Solar Republic',
      description:
        'The POV anchor of the siege. She fights the battle from the Nucleus with her Crown feeding her every engagement — trading common soldiers to save uncommon ones — then survives the fall of Bastion One through lifts, running firefights, a brig full of deserters, and a sewage line, and still ends the siege negotiating her army off the moon intact.',
      phases: [
        { from: 0, unitId: 'bastion-garrison', note: 'In the Nucleus of Bastion One, coordinating the entire defense through her Crown.' },
        { from: 14.5, unitId: 'bastion-garrison', note: 'The Nucleus is lost — fleeing through Bastion One with twenty-eight Lionguard, hunted by Apollonius and Cicero.' },
        { from: 20, unitId: 'hollows-command', note: 'Commanding from the fallback center in the Hollows; visits the wounded every morning and night.' },
        { from: 304, unitId: 'hollows-command', note: 'Negotiates the parley: Phobos surrendered unsabotaged for safe passage to Mars; Kavax for Cicero, Ajax\'s head, and two Oracles.' },
      ],
    },
    {
      id: 'kavax',
      name: 'Kavax au Telemanus',
      faction: 'republic',
      role: 'Republic war leader, House Telemanus',
      description:
        'Virginia\'s father-figure. He says goodbye to his fox Sophocles in the Nucleus, leads the Drachenjäger charge that nearly annihilates the Praetorian Guard, and is broken — not killed — by Apollonius, who then answers his Drachenjäger\'s comm to taunt Virginia. Traded back at the parley.',
      phases: [
        { from: 0, unitId: 'bastion-garrison', note: 'In the Nucleus at Virginia\'s side, Sophocles on his shoulder.' },
        { from: 9, unitId: 'drachenjager', note: 'Leading the Drachenjäger charge across Sector One\'s surface.' },
        { from: 13.6, status: 'captured', note: 'Back broken by Apollonius au Valii-Rath; prisoner of war behind coalition lines.' },
        { from: 304, unitId: 'hollows-command', status: 'active', note: 'Freed at the parley — exchanged for Cicero, Ajax\'s head, and two Oracles; evacuated to Mars.' },
      ],
    },
    {
      id: 'victra',
      name: 'Victra au Barca',
      faction: 'republic',
      role: 'Imperator, Task Force Spear',
      description:
        'Commands the Republic\'s best ships over the north pole and survives the rail slugs aboard the Pandemonia — then drops with the Pegasus Legion behind enemy lines, heavily pregnant, and stays entrenched for two weeks before killing Ajax au Grimmus and capturing Cicero.',
      phases: [
        { from: 0, unitId: 'tf-spear', note: 'Aboard the dreadnought Pandemonia over the north pole.' },
        { from: 17, unitId: 'pegasus', note: 'Dropped behind coalition lines with the Pegasus Legion; the Pandemonia withdraws.' },
        { from: 283, unitId: 'pegasus', note: 'Springs the hauler-shaft ambush with Thraxa: Ajax dead, Cicero taken.' },
        { from: 294, unitId: 'pegasus', note: 'Arrives in the Hollows with Cicero and Ajax\'s head.' },
      ],
    },
    {
      id: 'thraxa',
      name: 'Thraxa au Telemanus',
      faction: 'republic',
      role: 'Republic commander, House Telemanus',
      description:
        'Kavax\'s daughter, fighting at Victra\'s side through the counter-drop and the two weeks behind the lines. She shares the kill on Ajax au Grimmus in the hauler-shaft ambush.',
      phases: [
        { from: 0, unitId: 'tf-spear', note: 'With Victra aboard Task Force Spear (placement reconstructed).' },
        { from: 17, unitId: 'pegasus', note: 'Behind enemy lines with the Pegasus Legion.' },
        { from: 283, unitId: 'pegasus', note: 'Kills Ajax alongside Victra and 150 Pegasus Obsidians.' },
      ],
    },
    {
      id: 'niobe',
      name: 'Niobe au Telemanus',
      faction: 'republic',
      role: 'Imperator, Telemanus household fleet',
      description:
        'Holds the south polar station, is thrown north to save Victra\'s survivors, and days later fights her fleet through to land at the Hollows — where she and Virginia run the defense of the Republic front together.',
      phases: [
        { from: 0, unitId: 'telemanus-fleet', note: 'Commanding the household fleet over Mars\'s south pole.' },
        { from: 120, unitId: 'telemanus-fleet', note: 'Breaks through and lands to support Virginia in the Hollows.' },
      ],
    },
    {
      id: 'colloway',
      name: 'Colloway xe Char',
      faction: 'republic',
      role: 'Imperator, Augustan fleet',
      description:
        'The Republic\'s legendary ace, escaped from Mercury with 2,011 Free Legions survivors in a hijacked torchShip. He commands the Augustan fleet around Phobos — and is ordered to abandon the moon\'s coverage to save Victra\'s ships, then helps punch the warning about the Gold reinforcements through the jamming.',
      phases: [
        { from: 0, unitId: 'augustan-fleet', note: 'Commanding the House Augustus fleet, including the Dejah Thoris.' },
      ],
    },
    {
      id: 'oro',
      name: 'Oro Sculpturus',
      faction: 'republic',
      role: 'Navarch of the Republic Navy',
      description:
        'Runs the naval battle from the Nucleus and personally directs the battle-station guns that knock a ram-destroyer off course. He dies horribly when enemy particle beams superheat the Nucleus — his burnt skin sloughs off in Holiday\'s arms as she tries to pull him into the lift.',
      phases: [
        { from: 0, unitId: 'bastion-garrison', note: 'Navarch\'s station in the Nucleus, Bastion One.' },
        { from: 14.5, status: 'dead', note: 'Killed in the fall of the Nucleus; Holiday could not pull him clear.' },
      ],
    },
    {
      id: 'holiday',
      name: 'Holiday ti Nakamura',
      faction: 'republic',
      role: 'Chief of the Lionguard',
      description:
        'Virginia\'s shadow throughout — she holds the shield operator at gunpoint so the shield drops in time, refuses to leave the Sovereign\'s side after her failure on the Day of Red Doves, secures Sophocles, and fights the whole running retreat from the Nucleus to the Hollows.',
      phases: [
        { from: 0, unitId: 'bastion-garrison', note: 'At Virginia\'s side in the Nucleus.' },
        { from: 14.5, unitId: 'bastion-garrison', note: 'Fighting the Lionguard rearguard through Bastion One.' },
        { from: 20, unitId: 'hollows-command', note: 'With Virginia in the Hollows.' },
      ],
    },
    {
      id: 'harnassus',
      name: 'Cadus Harnassus',
      faction: 'republic',
      role: 'ArchLegate, the Hollows command',
      description:
        'The Orange engineer-general who survived Mercury, running the Republic\'s fallback command in the Hollows. When the coalition vanguard overextends chasing Virginia, he leads the counterattack up that turns the hunters around.',
      phases: [
        { from: 0, unitId: 'hollows-command', note: 'Running the fallback command center in the Hollows.' },
        { from: 19, unitId: 'hollows-command', note: 'Leads the counterattack up from the Hollows to harry Virginia\'s pursuers.' },
      ],
    },
    {
      id: 'valdir',
      name: 'Valdir',
      faction: 'republic',
      role: 'Obsidian warlord, imprisoned deserter',
      description:
        'Sefi\'s former spouse, jailed on Phobos with sixty-two other Volk deserters who refused to follow Volsung Fá — too guilty and too high-profile to pardon. Freed by Virginia mid-escape, he leads the braves in Rat War tactics that carve her a corridor; eleven survive to be inducted into the Howlers.',
      phases: [
        { from: 0, unitId: 'bastion-garrison', status: 'captured', note: 'In Bastion One\'s brig with 62 fellow Obsidian deserters — imprisoned since before the siege began.' },
        { from: 18, unitId: 'valdir-deserters', status: 'active', note: 'Freed and armed by Virginia; clearing her escape route.' },
        { from: 20, unitId: 'valdir-deserters', note: 'One of eleven survivors, inducted into the Howlers in the Hollows.' },
      ],
    },
    {
      id: 'lysander',
      name: 'Lysander au Lune',
      faction: 'society',
      role: 'Heir of House Lune, architect of Operation Polyphemus',
      description:
        'Plans and wins the siege: the Twins\' rail-slug trap, the nine empty ram-destroyers, the clawDrill rain. His own drill lands short and burns through an apartment block. He takes the moon sector by sector, offers Virginia honorable terms, and times his honors ceremony to the last Republic ship leaving — then is poisoned at his own victory gala by Rhone, on Atlas au Raa\'s orders.',
      phases: [
        { from: 0, unitId: 'lightbringer', note: 'Commanding the floater fleet from the rebuilt Lightbringer.' },
        { from: 8.6, unitId: 'praetorians', note: 'On the surface — his clawDrill landed half a klick short, atop an apartment complex.' },
        { from: 278, unitId: 'praetorians', note: 'Holds Sectors One, Two, and Eight; seventy thousand Republic troops encircled in Sector Three.' },
        { from: 304, unitId: 'praetorians', note: 'Grants parley: safe passage for the Republic in exchange for Phobos, unsabotaged. Victorious — and days from being poisoned by his own Dux.' },
      ],
    },
    {
      id: 'ajax',
      name: 'Ajax au Grimmus',
      faction: 'society',
      role: 'Storm Knight, defector to Lysander',
      description:
        'Atalantia\'s heir, sworn to Lysander after learning she murdered his friend\'s parents. He cuts down the last starShells at Sector Seven\'s bulkheads and volunteers to lead fifty Golds against Victra to keep the campaign from becoming a second Rat War — and dies in her hauler-shaft ambush, his head carried to the Hollows.',
      phases: [
        { from: 0, unitId: 'lightbringer', note: 'With Lysander\'s floater fleet.' },
        { from: 8.3, unitId: 'praetorians', note: 'Fighting with the Praetorian vanguard; breaks Sector Seven\'s bulkheads.' },
        { from: 283, status: 'dead', note: 'Ambushed and killed by Victra, Thraxa, and 150 Pegasus Legion Obsidians in a hauler shaft.' },
      ],
    },
    {
      id: 'apollonius',
      name: 'Apollonius au Valii-Rath',
      faction: 'society',
      role: 'The Minotaur — Imperator, House Valii-Rath',
      description:
        'Lands the moment the shield falls, breaks Kavax\'s spine, and answers the captured Drachenjäger\'s comm to promise Virginia he is coming for her. He hunts her through Bastion One with traps, stasis fields, and horn-first violence — then covers his own retreat with Cicero\'s stand and ensconces himself in the Julii-Sun Dockyards.',
      phases: [
        { from: 0, unitId: 'core-fleet', note: 'Commanding the Valii-Rath battle group.' },
        { from: 13.1, unitId: 'gold-second-wave', note: 'Lands with the Minotaur legions; breaks Kavax; hunts Virginia through Bastion One.' },
        { from: 20, unitId: 'gold-second-wave', note: 'Recalled by Lysander; ensconced in the citadel of the Julii-Sun Dockyards.' },
      ],
    },
    {
      id: 'cicero',
      name: 'Cicero au Votum',
      faction: 'society',
      role: 'Imperator, House Votum fleet',
      description:
        'Commands a Core battle group and joins Apollonius\'s hunt for the Sovereign — even broadcasting a surrender appeal over Bastion One\'s intercom. When the Republic counterattacks, he stands his ground rather than run, covering Apollonius\'s retreat; two weeks later Victra takes him alive, and he becomes the coin that buys Kavax back.',
      phases: [
        { from: 0, unitId: 'core-fleet', note: 'Commanding the Votum battle group.' },
        { from: 13.1, unitId: 'gold-second-wave', note: 'On the surface; hunting Virginia through Bastion One with Apollonius.' },
        { from: 283, status: 'captured', note: 'Captured by Victra\'s Pegasus Legion after Ajax\'s ambush fails.' },
        { from: 304, status: 'active', note: 'Returned to Lysander at the parley in exchange for Kavax.' },
      ],
    },
    {
      id: 'diomedes',
      name: 'Diomedes au Raa',
      faction: 'society',
      role: 'The Storm Knight of the Rim, Lightning Phalanx',
      description:
        'Dido\'s son, fighting for the Rim\'s vengeance. He lands in the third wave, drowns a reactor by blowing a water cistern to kill Bastion Eight\'s power, then leapfrogs ahead with the Lightning Phalanx to raise chaos in Sector Six behind Republic lines.',
      phases: [
        { from: 0, unitId: 'rim-fleet', note: 'With the Dragon Armada; flagship Charybdis.' },
        { from: 13.2, unitId: 'gold-second-wave', note: 'On the surface: floods Bastion Eight\'s reactor, raids Sector Six with the Lightning Phalanx.' },
        { from: 283, unitId: 'gold-second-wave', note: 'After Ajax\'s death, recalls his forces to consolidate Sectors One and Eight.' },
      ],
    },
    {
      id: 'rhone',
      name: 'Rhone ti Flavinius',
      faction: 'society',
      role: 'Dux of the Praetorian Guard',
      description:
        'Lysander\'s Gray right hand, commanding the Praetorians and Legio XIII Dracones through the drop and the interior grind. He brings Lysander the news of Victra\'s counter-drop — and after the victory, poisons him at his own gala on Atlas au Raa\'s orders.',
      phases: [
        { from: 0, unitId: 'lightbringer', note: 'Marshalling the Praetorian Guard aboard the Lightbringer.' },
        { from: 8.3, unitId: 'praetorians', note: 'On the surface and in the levels with the Praetorian vanguard.' },
        { from: 311, unitId: 'praetorians', note: 'Days from poisoning Lysander at the victory gala, on Atlas au Raa\'s orders.' },
      ],
    },
    {
      id: 'darrow',
      name: 'Darrow O\'Lykos',
      faction: 'republic',
      role: 'ArchImperator (believed dead)',
      description:
        'Not on this battlefield. The Reaper is aboard the Archimedes with Sevro and Cassius, limping home past Mars — while the Republic he built believes he died on Mercury. The surrender of Phobos closes the door home and forces the Archimedes onward.',
      phases: [
        {
          from: 0,
          status: 'off-map',
          note: 'Aboard the Archimedes beyond Mars. The fall of Phobos forces him, Sevro, and Cassius to sail on toward the Asteroid Belt in search of Quicksilver.',
        },
      ],
    },
    {
      id: 'sevro',
      name: 'Sevro au Barca',
      faction: 'republic',
      role: 'Imperator, the Howlers (believed lost)',
      description:
        'Not on this battlefield. Victra\'s husband — she drops into the siege believing him lost — escaped the Venus Dockyards on his own and flies with Darrow aboard the Archimedes.',
      phases: [
        {
          from: 0,
          status: 'off-map',
          note: 'Aboard the Archimedes with Darrow and Cassius, bound past Mars for the Belt — unaware Victra is fighting on Phobos.',
        },
      ],
    },
    {
      id: 'cassius',
      name: 'Cassius au Bellona',
      faction: 'republic',
      role: 'The Morning Knight, exile',
      description:
        'Not on this battlefield. The last Bellona flies with Darrow aboard the Archimedes — even as his mother Julia lands legions on Phobos for the other side.',
      phases: [
        {
          from: 0,
          status: 'off-map',
          note: 'Aboard the Archimedes with Darrow and Sevro. His mother, Julia au Bellona, commands coalition reinforcements in this battle.',
        },
      ],
    },
    {
      id: 'atalantia',
      name: 'Atalantia au Grimmus',
      faction: 'society',
      role: 'Dictator of the Society Remnant',
      description:
        'Not on this battlefield — deliberately. She keeps her Ash Armada besieging Luna rather than risk it against the Ecliptic Guard, fearing the vultures of the Two Hundred would depose her the moment the Republic fell. Lysander\'s Mars campaign proceeds without her; both he and Virginia negotiate the parley with her inevitable arrival in mind.',
      phases: [
        {
          from: 0,
          status: 'off-map',
          note: 'Besieging Luna with the Society Remnant\'s main armada, letting Lysander, the Rim, and the Republic bleed one another.',
        },
      ],
    },
  ],

  events: [
    {
      t: 0,
      title: 'Seven battle groups make Mars orbit',
      kind: 'strategic',
      at: { x: 760, y: 240 },
      characterIds: ['lysander', 'diomedes', 'apollonius', 'cicero'],
      description:
        'The coalition arrives from its Eros staging point and splits into seven battle groups: Helios au Lux, Dido, and Diomedes leading the Rim armadas; Cicero, Apollonius, and Julia au Bellona the Core fleets; Lysander his own floater fleet — the Lightbringer and nine empty destroyers. The Republic had only six days\' warning.',
    },
    {
      t: 4,
      title: 'The Twins gut Task Force Spear',
      kind: 'catastrophe',
      at: { x: 158, y: 405 },
      characterIds: ['victra', 'thraxa'],
      description:
        'Four hours of "probing" were a shepherd\'s trick: rail slugs fired from Earth\'s Twins of South Pacifica a week ago arrive at the empty point in space where Mars\'s north pole — and Victra\'s fleet — now sit. Half of Task Force Spear dies in moments. The Pandemonia survives.',
    },
    {
      t: 4.8,
      title: 'Virginia sacrifices Phobos\'s fleet coverage',
      kind: 'strategic',
      at: { x: 290, y: 355 },
      characterIds: ['virginia', 'niobe', 'colloway', 'victra'],
      description:
        'The Rim armadas pounce into the dead zone the Twins carved over the north pole, taking heavy losses to the battle-station guns but closing to finish Victra. Virginia orders Niobe and Colloway to defend the surviving warships at all costs — stripping the fleet screen away from Phobos itself.',
    },
    {
      t: 6.3,
      title: 'The ram-destroyer run',
      kind: 'combat',
      at: { x: 605, y: 366 },
      characterIds: ['lysander', 'oro'],
      description:
        'Lysander spends his nine empty Venus-built destroyers as blockers and battering rams, racing them ahead of the Lightbringer into the anti-ship guns. Four are obliterated before the Republic understands the plan; under Oro Sculpturus the guns knock a fifth off course. Four keep coming.',
    },
    {
      t: 7.1,
      title: 'The shield drops — The Hive is sheared',
      kind: 'catastrophe',
      at: { x: 535, y: 390 },
      characterIds: ['virginia', 'holiday'],
      description:
        'Three destroyers slam the main shield; four generator nexuses melt through their inhibitor-shells. Rather than lose the whole grid, Virginia orders the shield lowered — Holiday holds the operator at gunpoint until he complies. The last destroyer strikes The Hive: a hundred starscrapers decapitated, a crater four kilometers wide, whole buildings floating up into zero gravity.',
    },
    {
      t: 7.8,
      title: 'Lightbringer shifts north',
      kind: 'strategic',
      at: { x: 560, y: 265 },
      characterIds: ['lysander'],
      description:
        'The crash has buried Lysander\'s planned landing zone in debris, forcing him north toward Sector One — and Virginia. Captain Pytha xe Virgus rotates the 8-km hull as it sails, hiding the battle damage and presenting fresh guns by the time it arrives over the new zone.',
    },
    {
      t: 8.3,
      title: 'ClawDrills and spitTubes',
      kind: 'combat',
      at: { x: 505, y: 292 },
      characterIds: ['lysander', 'ajax', 'rhone'],
      description:
        'Fighters flood from the Lightbringer\'s hangars; Bastions One, Two, and Eight answer. Then the clawDrills fall — Virginia orders every squadron onto them, and half are destroyed before landfall — followed by the Praetorian Guard in spitTubes, railgun fire slashing furrows through the descending ranks. Lysander\'s own drill lands half a klick short, atop an apartment complex, burning through the residents as it bores into the moon.',
    },
    {
      t: 9,
      title: 'Kavax says farewell to Sophocles',
      kind: 'heroic',
      at: { x: 487, y: 306 },
      characterIds: ['kavax'],
      description:
        'With the shield down and the second wave inbound, Kavax tells the shield Legate that war demands monstrous choices — then hands his fox Sophocles into safekeeping, leaves the Nucleus, and leads the Drachenjägers down from Bastion One\'s garages into the landing zones.',
    },
    {
      t: 9.3,
      title: 'Murani Legard\'s ten minutes',
      kind: 'heroic',
      at: { x: 483, y: 297 },
      characterIds: ['virginia', 'kavax'],
      description:
        'With the shield reactor drowned in lethal radiation, Centurion Murani Legard promises her crew will restore the shields within ten minutes — at the cost of their own lives. They keep the promise: the shield snaps back on just after the last Lune shuttles land, cutting the invaders off from their orbital support.',
    },
    {
      t: 12,
      title: 'The grind — and a spearpoint',
      kind: 'combat',
      at: { x: 490, y: 312 },
      characterIds: ['virginia', 'lysander', 'ajax'],
      description:
        'Inside the moon it is melee chaos: Republic numbers against Praetorian armor, Virginia micromanaging engagements through her Crown, Red Legion I plugging breaches while Hawk and Haemanthus grid the invaders in. Then two hundred soldiers under Lysander and Ajax destroy two clawDrill interceptor forces and break for Sector One\'s reactor and shield generator — annihilating every unit Virginia throws at them, the Lionguard committed five hundred at a time.',
    },
    {
      t: 13,
      title: 'The shield falls',
      kind: 'catastrophe',
      at: { x: 560, y: 330 },
      characterIds: ['apollonius', 'cicero', 'diomedes'],
      description:
        'Three minutes before the last Lionguard reserves arrive, Lysander\'s two hundred break through Virgilus\'s unit and take the shield generator. The shield dies — and the Votum, Valii-Rath, and Rim ships parked in no-man\'s-land hurl their legions at the surface: Apollonius first, then Cicero, then Diomedes.',
    },
    {
      t: 13.6,
      title: 'Kavax broken',
      kind: 'catastrophe',
      at: { x: 518, y: 328 },
      characterIds: ['kavax', 'apollonius', 'virginia'],
      description:
        'The Minotaur legions fall on Kavax\'s exposed division; Virginia\'s retreat order never gets through the jamming. Apollonius breaks Kavax\'s back and takes him prisoner — and when a call comes into the Nucleus from Kavax\'s own Drachenjäger, it is Apollonius\'s voice on the line, promising Virginia he is coming for her next.',
    },
    {
      t: 14.5,
      title: 'The Nucleus falls',
      kind: 'catastrophe',
      at: { x: 485, y: 300 },
      characterIds: ['virginia', 'oro', 'holiday'],
      description:
        'Particle beams compromise the Nucleus\'s thermal wall before it can drop to the Hollows; the escape shaft is locked. Only the armored survive the heat. Navarch Oro Sculpturus\'s burnt skin sloughs off in Holiday\'s arms as the lift doors seal. Five hundred Nucleus officers and technicians die. Virginia\'s odyssey begins: a blocked lift shaft, a blown elevator, running firefights in the dark with twenty-eight Lionguard.',
    },
    {
      t: 17,
      title: 'Pegasus Legion drops behind the lines',
      kind: 'strategic',
      at: { x: 538, y: 306 },
      characterIds: ['victra', 'thraxa'],
      description:
        'The Pandemonia smashes through the coalition ships in orbit and drops the famous Pegasus Legion behind enemy lines — Victra commanding in person, weeks from term — before withdrawing. Rhone brings Lysander the news; the legion will haunt the coalition rear for the rest of the siege.',
    },
    {
      t: 18,
      title: 'Sixty-three deserters, one offer',
      kind: 'heroic',
      at: { x: 486, y: 305 },
      characterIds: ['virginia', 'valdir'],
      description:
        'Cornered near the brig with the shafts trapped and Apollonius closing, Virginia frees Valdir and the sixty-three Obsidian deserters and offers freedom for a corridor. Armed with ghostCloaks, razors, and nightOptics, the braves fight Rat War-style in the dark — driving off the Minotaur and Cicero. Eleven survive.',
    },
    {
      t: 20,
      title: 'The sewage line to the Hollows',
      kind: 'heroic',
      at: { x: 490, y: 372 },
      characterIds: ['virginia', 'holiday', 'valdir', 'harnassus'],
      description:
        'Virginia, her Lionguard, and the surviving Obsidians ride the sewage line to the fertilizer plant and descend to the Hollows, Harnassus\'s counterattack covering the last stretch. Apollonius turns back at Lysander\'s recall; Cicero stands his ground. The eleven Obsidian survivors are inducted into the Howlers.',
    },
    {
      t: 96,
      title: 'The meat straws',
      kind: 'combat',
      at: { x: 478, y: 335 },
      characterIds: ['lysander', 'diomedes'],
      description:
        'The siege settles into days of attrition: canyon attacks daring the warships\' guns near the surface, and level-by-level meat grinders within — both sides feeding men in to take or hold a single section of a sector. Julia au Bellona lands fresh troops to keep the coalition\'s pressure on. (Timing within the two weeks reconstructed.)',
    },
    {
      t: 120,
      title: 'Niobe lands at the Hollows',
      kind: 'strategic',
      at: { x: 490, y: 372 },
      characterIds: ['niobe', 'virginia'],
      description:
        'The Republic fleet holds its ground in orbit well enough for Niobe to break through and make landfall. She joins Virginia in the Hollows, repelling Lysander\'s assaults on the Republic front while Virginia visits the wounded every morning and night.',
    },
    {
      t: 278,
      title: 'Sector Two falls',
      kind: 'combat',
      at: { x: 452, y: 330 },
      characterIds: ['lysander'],
      description:
        'By the end of the second week Lysander\'s forces secure Sector Two and press into Sector Three, encircling seventy thousand Republic troops. A third of the moon is coalition-held, and — with the Dockyards partly secured by Apollonius — repairs to the Lightbringer have already begun.',
    },
    {
      t: 283,
      title: 'Ajax dies in a hauler shaft',
      kind: 'heroic',
      at: { x: 548, y: 345 },
      characterIds: ['victra', 'thraxa', 'ajax', 'cicero'],
      description:
        'Warned by scouts or drones, Victra ambushes Ajax\'s fifty-Gold strike force with Thraxa and 150 Pegasus Obsidians a kilometer from the main battle. Ajax au Grimmus is killed by Victra and Thraxa; Cicero, coordinating for him, is taken prisoner — though his drones relay the footage to the whole coalition. Diomedes and Lysander pull back to Sectors One and Eight.',
    },
    {
      t: 304,
      title: 'The parley',
      kind: 'strategic',
      at: { x: 500, y: 435 },
      characterIds: ['virginia', 'lysander', 'kavax', 'cicero'],
      description:
        'With Cicero in her custody and Atalantia\'s arrival hanging over both armies, Virginia offers parley. The terms: every Republic soldier gets safe passage to Mars; Phobos and its Dockyards are surrendered intact — no sabotage, no stay-behind assassins. Lysander returns Kavax in exchange for Cicero, Ajax\'s head, and two Oracles, and shares his intent to unseat Atalantia for murdering his parents.',
    },
    {
      t: 311,
      title: 'Five days down the well',
      kind: 'strategic',
      at: { x: 350, y: 480 },
      characterIds: ['virginia', 'lysander'],
      description:
        'The evacuation begins: for five days the Republic withdraws to Mars, its capital ships arrayed as an umbrella over the descending transports. Lysander times the awarding of battle honors so the ceremony begins the moment the last Republic ship leaves Phobos — salt, precisely measured.',
    },
  ],

  summary:
    'Operation Polyphemus: the Society Remnant and the Rim Dominion — an alliance of convenience — strike Mars\'s inner moon to destroy the Ecliptic Guard and seize a staging area for an Iron Rain on the planet. Lysander opens with a week-old railgun ambush fired from Earth, spends nine empty destroyers as battering rams, and rains clawDrills on the moon; Virginia loses her Navarch, her Nucleus, and nearly herself in a running escape through Bastion One, yet holds the Hollows for two weeks and ends the siege at a parley table, trading a captured Imperator and a rival\'s head for her father-figure and her army\'s safe passage home.',
  outcome:
    'Negotiated Republic surrender of Phobos: the coalition gains its staging ground and the Julii-Sun Dockyards intact, but the Republic evacuates its entire surviving force to Mars under its own guns. Ajax au Grimmus is dead; Kavax is recovered; half the Republic fleet is gone. Within days Lysander is poisoned at his own victory gala, and the Volk invasion of Ilium strips away half the siege forces — the seams of the Gold alliance splitting exactly as Virginia gambled they would.',
  fidelityNote:
    'Named formations, commanders, ships, casualty figures (63→11 Obsidians, 4,030 Lionguard, ~200 battle stations, 9 ram-destroyers, the 4-km Hive crater), and the event sequence follow canon (Red Rising Wiki, *Light Bringer*). The Lightbringer is the captured, rebuilt Morning Star — not a new hull; the nine empty destroyers are the new Venus Dockyards builds. Map coordinates, movement paths, sector placement on the moon, hour offsets (the detailed first day is compressed into hours 0–20; the Ajax ambush is placed on day ~12–13 per Victra\'s day-13 arrival in the Hollows), and all strengths marked "(est.)" are reconstructions.',
  sources: [
    'https://red-rising.fandom.com/wiki/The_Siege_of_Phobos',
    'https://red-rising.fandom.com/wiki/Phobos',
    'https://red-rising.fandom.com/wiki/Virginia_au_Augustus',
    'https://red-rising.fandom.com/wiki/Kavax_au_Telemanus',
    'https://red-rising.fandom.com/wiki/Ajax_au_Grimmus',
    'https://red-rising.fandom.com/wiki/Twins_of_South_Pacifica',
    'https://red-rising.fandom.com/wiki/Morning_Star_(ship)',
    'https://red-rising.fandom.com/wiki/Apollonius_au_Valii-Rath',
    'https://red-rising.fandom.com/wiki/Valdir',
    'https://red-rising.fandom.com/wiki/Lysander_au_Lune',
  ],
}
