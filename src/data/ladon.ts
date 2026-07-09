import type { BattleDefinition } from '../types'

/**
 * The Battle of the Ladon — January 5–6, 754 PCE, continent of Helios, Mercury.
 * (Pierce Brown, *Dark Age*.)
 *
 * Canon beats (events, named units, casualty figures, sequence) are sourced from the
 * Red Rising Wiki. Map coordinates, exact hour offsets between canon beats, movement
 * paths, and some formation strengths are RECONSTRUCTIONS to make the replay work —
 * anything estimated is marked "(est.)".
 */
export const ladon: BattleDefinition = {
  id: 'ladon',
  name: 'The Battle of the Ladon',
  date: 'January 5–6, 754 PCE (~39 hours)',
  location: 'Continent of Helios, Mercury',
  durationHours: 39,

  map: {
    width: 1000,
    height: 700,
    features: [
      {
        id: 'sycorax',
        name: 'Sycorax Sea',
        kind: 'sea',
        points: [
          { x: 0, y: 0 }, { x: 430, y: 0 }, { x: 400, y: 90 }, { x: 330, y: 150 },
          { x: 260, y: 205 }, { x: 150, y: 260 }, { x: 0, y: 300 },
        ],
        labelAt: { x: 130, y: 120 },
      },
      {
        id: 'caliban-sea',
        name: 'Bay of Sirens / Caliban Sea',
        kind: 'sea',
        points: [
          { x: 300, y: 700 }, { x: 1000, y: 700 }, { x: 1000, y: 645 },
          { x: 760, y: 615 }, { x: 560, y: 655 }, { x: 380, y: 675 },
        ],
        labelAt: { x: 800, y: 678 },
      },
      {
        id: 'ladon-waste',
        name: 'Waste of Ladon',
        kind: 'desert',
        points: [
          { x: 360, y: 300 }, { x: 470, y: 235 }, { x: 600, y: 230 }, { x: 690, y: 300 },
          { x: 680, y: 400 }, { x: 580, y: 450 }, { x: 450, y: 440 }, { x: 370, y: 380 },
        ],
        labelAt: { x: 520, y: 340 },
      },
      {
        id: 'caduceus',
        name: 'Plains of Caduceus',
        kind: 'plains',
        points: [
          { x: 300, y: 400 }, { x: 400, y: 420 }, { x: 430, y: 500 },
          { x: 340, y: 540 }, { x: 270, y: 470 },
        ],
        labelAt: { x: 345, y: 470 },
      },
      {
        id: 'hesperides',
        name: 'Hesperides Mts.',
        kind: 'mountains',
        points: [
          { x: 400, y: 570 }, { x: 445, y: 530 }, { x: 490, y: 500 }, { x: 530, y: 470 },
        ],
        labelAt: { x: 430, y: 555 },
      },
      {
        id: 'aigle',
        name: 'Aigle Mts.',
        kind: 'mountains',
        points: [
          { x: 640, y: 640 }, { x: 700, y: 615 }, { x: 760, y: 635 },
        ],
        labelAt: { x: 705, y: 605 },
      },
      { id: 'tyche', name: 'Tyche', kind: 'city', points: [{ x: 285, y: 185 }], description: 'The richest city on Mercury and capital of Helios, on the Sycorax coast. Breached by the Ash Legions at H+12; a third of the city drowns under the kilometer-high tidal wave at H+14. Of the oceanfront, only the Water Colossus is left standing.' },
      { id: 'heliopolis', name: 'Heliopolis', kind: 'city', points: [{ x: 560, y: 600 }], description: 'The City of the Sun — 20 million people behind a Storm Wall between the Hesperides and Aigle mountains. The anvil of the whole battle: X Pardus breaches it at H+24 and is butchered against its wall. It is all the Republic will hold on Helios two weeks from now.' },
      { id: 'red-reach', name: 'Red Reach (base)', kind: 'city', points: [{ x: 720, y: 240 }], description: 'Republic Second Army base. Erased at H+2 by an omega-atomic fired from orbit — one million soldiers gone in a flash. (Canon figure.)' },
      { id: 'talarian', name: 'Talarian Peninsula', kind: 'landmark', points: [{ x: 350, y: 140 }], description: 'The land bridge the Ash Legions storm to assault Tyche — and the shore the tidal wave rolls over when Orion exceeds the primary horizon.' },
      {
        id: 'gravloop',
        name: 'gravLoop (subterranean)',
        kind: 'route',
        description:
          'The subterranean maglev artery under the Hesperides linking Tyche to Heliopolis. 83,423+ civilians escape the drowning city through it while the Knights of Elysium hold the terminus.',
        points: [
          { x: 285, y: 185 }, { x: 380, y: 330 }, { x: 470, y: 480 }, { x: 560, y: 600 },
        ],
        labelAt: { x: 395, y: 355 },
      },
    ],
  },

  factions: {
    republic: {
      name: 'Solar Republic — Free Legions',
      color: '#e63946',
      commanders: [
        'Darrow of Lykos (ArchImperator, stripped of rank)',
        'Orion xe Aquarii (Navarch — Storm Gods)',
        'Cadus Harnassus (ArchLegate)',
        'Thraxa au Telemanus',
        'Alexandar au Arcos (Knights of Elysium)',
        'Colloway xe Char (ace pilot)',
      ],
      totalStrength: '~9–10 million troops, 5,700+ Drachenjägers, 7 Storm Gods, the Morning Star',
    },
    society: {
      name: 'Society Remnant — Ash Legions',
      color: '#d4af37',
      commanders: [
        'Atalantia au Grimmus (Dictator, from the Annihilo)',
        'Ajax au Grimmus (Legio X Pardus)',
        'Atlas au Raa (Gorgons)',
        'Scorpio & Cicero au Votum',
        'Lysander au Lune',
        'Seraphina au Raa (Rim observer)',
      ],
      totalStrength: '~30 million troops in 40+ legions, delivered by the Ash Armada',
    },
  },

  units: [
    // ————— Republic —————
    {
      id: 'hq-heliopolis',
      name: 'Free Legions — Heliopolis garrison',
      faction: 'republic',
      kind: 'infantry',
      path: [{ t: 0, x: 560, y: 600 }],
      strength: [
        { t: 0, value: 3_000_000 },
        { t: 24, value: 2_800_000 },
        { t: 39, value: 2_600_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        'The core of the Free Legions holds Heliopolis — the "City of the Sun," pop. 20M, shielded by its Storm Wall between the Hesperides and Aigle mountains. This is the anvil the Ash Legions break against.',
    },
    {
      id: 'second-army',
      name: 'Second Army — Red Reach',
      faction: 'republic',
      kind: 'infantry',
      vanishesAt: 2.5,
      path: [{ t: 0, x: 720, y: 240 }],
      strength: [
        { t: 0, value: 1_000_000 },
        { t: 2.0, value: 1_000_000 },
        { t: 2.2, value: 0 },
      ],
      strengthUnit: 'troops',
      notes:
        'One million troops of the Republic Second Army, garrisoning the Red Reach base — vaporized by an omega-atomic in the opening hours of the Ash Rain. (Canon figure.)',
    },
    {
      id: 'tyche-garrison',
      name: 'Free Legions — Tyche garrison',
      faction: 'republic',
      kind: 'infantry',
      vanishesAt: 24,
      path: [
        { t: 0, x: 285, y: 185 },
        { t: 16, x: 285, y: 185 },
        { t: 23, x: 560, y: 600 },
      ],
      strength: [
        { t: 0, value: 1_500_000 },
        { t: 12, value: 1_400_000 },
        { t: 15, value: 1_000_000 },
        { t: 23, value: 900_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        'Defends Tyche, the capital of Helios, against the Talarian assault; survivors withdraw down the gravLoop to Heliopolis with the civilian evacuation after the tidal wave.',
    },
    {
      id: 'legion-15',
      name: 'Armored 15th Legion — Drachenjägers',
      faction: 'republic',
      kind: 'mech',
      path: [
        { t: 0, x: 560, y: 600 },
        { t: 5, x: 440, y: 480 },
        { t: 8, x: 385, y: 445 },
        { t: 20, x: 420, y: 470 },
        { t: 26, x: 525, y: 560 },
      ],
      strength: [
        { t: 0, value: 5_700 },
        { t: 10, value: 5_300 },
        { t: 39, value: 4_600 },
      ],
      strengthUnit: 'Drachenjägers',
      notes:
        "The Republic's first armored-cavalry legion: 40-meter, six-armed mechs with elbow particle cannons and ion cleavers. With the customary Gold landfall fortifications incomplete, they ambush and massacre Scorpio au Votum's landing on the Plains of Caduceus.",
    },
    {
      id: 'knights-elysium',
      name: 'Knights of Elysium',
      faction: 'republic',
      kind: 'knights',
      vanishesAt: 22,
      path: [
        { t: 0, x: 560, y: 600 },
        { t: 13, x: 560, y: 600 },
        { t: 15, x: 285, y: 185 },
      ],
      strength: [
        { t: 0, value: 203 },
        { t: 15, value: 203 },
        { t: 20, value: 9 },
      ],
      strengthUnit: 'knights',
      notes:
        'Alexandar au Arcos and 203 knights ride the gravLoop to hold the Tyche terminus so the civilians can escape. 194 of 203 die. Alexandar is among the nine survivors (he falls a month later, in the Long Night).',
    },
    {
      id: 'tyche-evacuation',
      name: 'Tyche civilian evacuation',
      faction: 'republic',
      kind: 'civilian',
      appearsAt: 15,
      vanishesAt: 24,
      path: [
        { t: 15, x: 285, y: 185 },
        { t: 23, x: 560, y: 600 },
      ],
      strength: [{ t: 15, value: 83_423 }],
      strengthUnit: 'civilians',
      notes:
        '83,423+ civilians evacuated from drowning Tyche through the subterranean gravLoop under the Hesperides, shielded by the Knights of Elysium. (Canon figure.)',
    },
    {
      id: 'storm-gods-sycorax',
      name: 'Storm Gods — Operation Tartarus',
      faction: 'republic',
      kind: 'stormgod',
      path: [{ t: 0, x: 185, y: 115 }],
      strength: [
        { t: 0, value: 6 },
      ],
      strengthUnit: 'machines',
      notes:
        'Six of the seven Storm Gods excavated from Mercury\'s polar ice, repositioned over the Sycorax Sea and crewed by Navarch Orion xe Aquarii and her Blues. Intended to run at the lowest setting — scrambling Society comms and grounding aircraft. Orion takes them above the primary horizon at H+14.',
    },
    {
      id: 'storm-god-ladon',
      name: 'Storm God — Waste of Ladon',
      faction: 'republic',
      kind: 'stormgod',
      vanishesAt: 20.5,
      path: [{ t: 0, x: 515, y: 320 }],
      strength: [
        { t: 0, value: 1 },
        { t: 20, value: 1 },
        { t: 20.3, value: 0 },
      ],
      strengthUnit: 'machine',
      notes:
        'The Storm God driving the desert sandstorm (position reconstructed). Destroyed by Lysander au Lune — the action in which Seraphina au Raa is killed by a railgun round.',
    },
    {
      id: 'morning-star',
      name: 'Morning Star (moonBreaker)',
      faction: 'republic',
      kind: 'ship',
      appearsAt: 28,
      path: [
        { t: 28, x: 950, y: 60 },
        { t: 30, x: 610, y: 520 },
      ],
      strength: [{ t: 28, value: 1 }],
      strengthUnit: 'moonBreaker (8 km)',
      notes:
        'The 8-kilometer Republic flagship descends through the storm as a stormbreaker to relieve the assault on Heliopolis.',
    },

    // ————— Society —————
    {
      id: 'ash-armada',
      name: 'Ash Armada / Annihilo (low orbit)',
      faction: 'society',
      kind: 'ship',
      path: [{ t: 0, x: 500, y: 28 }],
      strength: [{ t: 0, value: 1 }],
      strengthUnit: 'armada (flagship Annihilo)',
      notes:
        "Atalantia au Grimmus commands the Ash Rain from the dreadnought Annihilo. The armada delivers 40+ legions and fires the omega-atomic that erases Red Reach. Fleet composition at the Ladon is not enumerated in canon.",
    },
    {
      id: 'ash-wave-1',
      name: 'Ash Rain — first wave',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 1,
      path: [
        { t: 1, x: 490, y: 80 },
        { t: 3, x: 520, y: 330 },
      ],
      strength: [
        { t: 1, value: 8_000_000 },
        { t: 3, value: 7_500_000 },
        { t: 4.5, value: 3_500_000 },
        { t: 8, value: 1_500_000 },
        { t: 39, value: 1_200_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        'The first landing waves descend into the Waste of Ladon — straight into the Storm Gods\' sandstorm. Sixty transports are destroyed in the first minute; sand abrasion and hurricane winds annihilate the formations. (Wave sizes estimated from the ~30M total.)',
    },
    {
      id: 'ash-wave-2',
      name: 'Ash Rain — second wave',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 4,
      path: [
        { t: 4, x: 580, y: 80 },
        { t: 6, x: 640, y: 380 },
        { t: 12, x: 620, y: 480 },
      ],
      strength: [
        { t: 4, value: 6_000_000 },
        { t: 6, value: 5_200_000 },
        { t: 12, value: 4_300_000 },
        { t: 39, value: 3_800_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        'Follow-on waves adjust their descent corridors east of the worst of the storm and grind south toward Heliopolis.',
    },
    {
      id: 'x-pardus',
      name: 'Legio X Pardus — Iron Leopards',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 5,
      path: [
        { t: 5, x: 700, y: 120 },
        { t: 8, x: 690, y: 450 },
        { t: 20, x: 610, y: 560 },
        { t: 24, x: 567, y: 588 },
        { t: 39, x: 560, y: 585 },
      ],
      strength: [
        { t: 5, value: 100_000 },
        { t: 24, value: 80_000 },
        { t: 30, value: 55_000 },
        { t: 34, value: 15_000 },
        { t: 39, value: 8_000 },
      ],
      strengthUnit: 'troops',
      notes:
        "Ajax au Grimmus's double-strength (100,000) elite assault legion. Breaches Heliopolis's walls at roughly hour 24 — then is trapped and butchered against the Storm Wall as the defense holds and the Morning Star arrives.",
    },
    {
      id: 'xx-fulminata',
      name: 'Legio XX Fulminata — Thunderbolts',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 5,
      path: [
        { t: 5, x: 770, y: 140 },
        { t: 10, x: 730, y: 500 },
        { t: 24, x: 630, y: 585 },
      ],
      strength: [
        { t: 5, value: 50_000 },
        { t: 30, value: 35_000 },
        { t: 39, value: 20_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes: 'Supports the Iron Leopards\' drive on Heliopolis from the east.',
    },
    {
      id: 'scorpion-legion',
      name: 'Scorpion Legion + Titans (Scorpio au Votum)',
      faction: 'society',
      kind: 'mech',
      appearsAt: 5.5,
      path: [
        { t: 5.5, x: 400, y: 120 },
        { t: 7, x: 385, y: 445 },
      ],
      strength: [
        { t: 5.5, value: 250_000 },
        { t: 8, value: 120_000 },
        { t: 11, value: 45_000 },
        { t: 39, value: 40_000 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        "Scorpio au Votum's landing on the Plains of Caduceus, spearheaded by 60-meter Titan war machines. His Titan halts two charging Drachenjägers with its gravity gun before starShell-armored Golds swarm the mechs — but the 15th Legion's ambush massacres the landing, and Darrow cuts Scorpio in half.",
    },
    {
      id: 'tyche-assault',
      name: 'Ash Legions — Talarian assault on Tyche',
      faction: 'society',
      kind: 'infantry',
      appearsAt: 9,
      vanishesAt: 15.5,
      path: [
        { t: 9, x: 400, y: 90 },
        { t: 11, x: 340, y: 150 },
        { t: 12, x: 295, y: 180 },
      ],
      strength: [
        { t: 9, value: 2_000_000 },
        { t: 12, value: 1_900_000 },
        { t: 14, value: 1_500_000 },
        { t: 14.6, value: 100_000 },
        { t: 15, value: 0 },
      ],
      strengthUnit: 'troops (est.)',
      notes:
        'Ash Legions storm Tyche across the Talarian Peninsula and breach the city — then Orion takes the Storm Gods above the primary horizon, and a kilometer-high tidal wave drowns attackers and a third of the city alike. Ovidius and Porcia au Votum are among the dead.',
    },
    {
      id: 'gorgons',
      name: 'Legio Zero Pavor Nocturnus — Gorgons (Atlas au Raa)',
      faction: 'society',
      kind: 'specops',
      path: [{ t: 0, x: 460, y: 505 }],
      strength: [{ t: 0, value: 5_000 }],
      strengthUnit: 'operatives (est.)',
      notes:
        "Atlas au Raa's black-operations legion, operating from hidden bases in the Hesperides since the Iron Rain. Their sabotage — overloading hard-lined city reactors — collapsed the northern shield chain and opened Helios to the Ash Rain.",
    },

    // ————— Environment —————
    {
      id: 'hypercanes',
      name: 'Hypercanes ×5 (Sycorax Sea)',
      faction: 'environment',
      kind: 'hazard',
      appearsAt: 3,
      color: '#4cc9f0',
      path: [{ t: 3, x: 250, y: 140 }],
      strength: [
        { t: 3, value: 2 },
        { t: 14, value: 5 },
        { t: 16, value: 5 },
        { t: 39, value: 4 },
      ],
      strengthUnit: 'intensity (1–5)',
      notes:
        'Five hypercanes conjured over the Sycorax Sea by the Storm Gods. After Orion exceeds the primary horizon they surge — the source of the tidal wave that drowns Tyche. They rage on after the machines are shut down: the circulation is self-sustaining.',
    },
    {
      id: 'sandstorm',
      name: 'Sandstorm (Waste of Ladon)',
      faction: 'environment',
      kind: 'hazard',
      appearsAt: 3,
      color: '#e0a458',
      path: [{ t: 3, x: 520, y: 330 }],
      strength: [
        { t: 3, value: 3 },
        { t: 6, value: 5 },
        { t: 20, value: 4 },
        { t: 39, value: 2 },
      ],
      strengthUnit: 'intensity (1–5)',
      notes:
        'A continent-scale sandstorm over the Waste of Ladon: sand abrasion lethal to exposed soldiers, transports swatted from the sky, comms and sensors blinded. It guts the first Society landing waves.',
    },
    {
      id: 'tidal-wave',
      name: 'Kilometer-high tidal wave',
      faction: 'environment',
      kind: 'hazard',
      appearsAt: 14,
      vanishesAt: 16,
      color: '#90e0ef',
      path: [
        { t: 14, x: 250, y: 140 },
        { t: 14.5, x: 290, y: 183 },
      ],
      strength: [{ t: 14, value: 5 }],
      strengthUnit: 'intensity (1–5)',
      notes:
        'The wave that drowns a third of Tyche and the Ash Legions inside it. Of the oceanfront, only the Water Colossus is left standing.',
    },
  ],

  characters: [
    // ————— Republic —————
    {
      id: 'darrow',
      name: 'Darrow of Lykos',
      faction: 'republic',
      role: 'ArchImperator (stripped of rank), Free Legions',
      description:
        'The Reaper commands the defense of Helios in defiance of the Senate that stripped his rank. He authorizes Operation Tartarus, leads the Drachenjäger ambush on the Plains of Caduceus where he cuts Scorpio au Votum in half, and makes the war\'s hardest call: using Glirastes\'s failsafe to kill Orion and stop a planetary extinction. Suffers a heart attack as victory lands.',
      phases: [
        { from: 0, unitId: 'hq-heliopolis', note: 'directing the defense from Heliopolis' },
        { from: 5, unitId: 'legion-15', note: 'riding with the 15th to the Caduceus ambush' },
        { from: 10, unitId: 'hq-heliopolis', note: 'back at the Heliopolis command — where he will kill Orion by remote failsafe at H+15' },
      ],
    },
    {
      id: 'orion',
      name: 'Orion xe Aquarii',
      faction: 'republic',
      role: 'Navarch — mistress of the Storm Gods',
      description:
        'The Republic\'s greatest naval mind, broken by three weeks of Gorgon torture after the Battle of Caliban. She crews the Storm Gods over the Sycorax Sea — then drives them past the primary horizon toward an output that would scour Mercury clean. Darrow disconnects her with the failsafe; the disconnection kills her.',
      phases: [
        { from: 0, unitId: 'storm-gods-sycorax', note: 'crewing the Storm Gods with her Blues' },
        { from: 15, status: 'dead', note: 'killed at H+15 when Darrow triggers Glirastes\'s kill-switch to stop the storm surge' },
      ],
    },
    {
      id: 'alexandar',
      name: 'Alexandar au Arcos',
      faction: 'republic',
      role: 'Knight of Elysium — grandson of Lorn au Arcos',
      description:
        'Leads the 203 Knights of Elysium down the gravLoop to hold the Tyche terminus while 83,000+ civilians escape the drowned city. One of only nine knights to survive the stand. He falls a month later in the Long Night, in single combat with Lysander.',
      phases: [
        { from: 0, unitId: 'knights-elysium', note: 'with the knights at Heliopolis' },
        { from: 22, unitId: 'hq-heliopolis', note: 'among the nine surviving knights, withdrawn to Heliopolis' },
      ],
    },
    {
      id: 'harnassus',
      name: 'Cadus Harnassus',
      faction: 'republic',
      role: 'ArchLegate — Orange, Darrow\'s second',
      description:
        'The Free Legions\' senior engineer-general. Runs the Heliopolis defense grid, the Storm Wall, and the logistics of ten million stranded troops through all 39 hours.',
      phases: [{ from: 0, unitId: 'hq-heliopolis' }],
    },
    {
      id: 'thraxa',
      name: 'Thraxa au Telemanus',
      faction: 'republic',
      role: 'Legate — Armored 15th Legion',
      description:
        'Telemanus muscle with a mech-jockey\'s heart. Fights the Caduceus ambush with the Drachenjägers and survives to escape Mercury after the Long Night.',
      phases: [{ from: 0, unitId: 'legion-15' }],
    },
    {
      id: 'colloway',
      name: 'Colloway xe Char',
      faction: 'republic',
      role: 'Ace pilot — the Republic\'s deadliest stick',
      description:
        'Flies cover over Heliopolis through the hypercane. The books track his kill-count mythology rather than his sorties here; his squadron\'s movements are not given, so he is pinned to the Heliopolis garrison (reconstructed).',
      phases: [{ from: 0, unitId: 'hq-heliopolis', note: 'flying combat air patrol over the Storm Wall (position reconstructed)' }],
    },
    {
      id: 'glirastes',
      name: 'Glirastes the Master Maker',
      faction: 'republic',
      role: 'Orange master engineer of Heliopolis (civilian)',
      description:
        'The greatest living Orange. Excavated and refit the Storm Gods for Operation Tartarus — and quietly built a kill-switch failsafe into the network, which is the only reason Darrow can stop Orion at H+15. His loyalties will curdle before the Long Night.',
      phases: [{ from: 0, unitId: 'hq-heliopolis', note: 'in his workshops in Heliopolis' }],
    },
    // ————— Society —————
    {
      id: 'atalantia',
      name: 'Atalantia au Grimmus',
      faction: 'society',
      role: 'Dictator of the Society Remnant',
      description:
        'The Ash Lord\'s surviving daughter commands the Ash Rain from the dreadnought Annihilo in low orbit — 30 million troops thrown at a continent. She fights the entire battle from orbit and never sets foot on Helios.',
      phases: [{ from: 0, unitId: 'ash-armada', note: 'aboard the Annihilo' }],
    },
    {
      id: 'ajax',
      name: 'Ajax au Grimmus',
      faction: 'society',
      role: 'Legate — Legio X Pardus, Atalantia\'s favorite',
      description:
        'Storm Knight of the Society and commander of the double-strength Iron Leopards. Breaches the walls of Heliopolis at roughly hour 24 — then watches his elite legion be trapped and butchered against the Storm Wall when the Morning Star descends.',
      phases: [
        { from: 0, unitId: 'ash-armada', note: 'staging aboard the armada' },
        { from: 5, unitId: 'x-pardus' },
      ],
    },
    {
      id: 'atlas',
      name: 'Atlas au Raa',
      faction: 'society',
      role: 'Fear Knight — Legio Zero Pavor Nocturnus',
      description:
        'The architect of the door: his Gorgons spent months infiltrating Helios from hidden Hesperides bases, and their reactor sabotage collapses the northern shield chain at H-hour. He also holds Orion\'s torture on his ledger — the cruelty that becomes the tidal wave.',
      phases: [{ from: 0, unitId: 'gorgons', note: 'running the Gorgon shadow war from the Hesperides' }],
    },
    {
      id: 'lysander',
      name: 'Lysander au Lune',
      faction: 'society',
      role: 'Heir of the House Lune — fighting to be believed',
      description:
        'Grandson of the last Sovereign, landing with the Ash Rain to prove himself. Survives the storm-shredded drop, crosses the Waste, and destroys the desert Storm God at H+20 — the feat that makes him a legend in the Society and costs Seraphina au Raa her life.',
      phases: [
        { from: 0, unitId: 'ash-armada', note: 'in the landing queues of the Ash Armada' },
        { from: 1, unitId: 'ash-wave-1', note: 'down with the first wave, into the sandstorm' },
        { from: 20.5, unitId: 'ash-wave-2', note: 'feted across Society comms after killing the Storm God' },
      ],
    },
    {
      id: 'seraphina',
      name: 'Seraphina au Raa',
      faction: 'society',
      role: 'Rim observer — daughter of Romulus',
      description:
        'On Mercury as the Rim\'s eyes on the Core\'s war. Rides with Lysander\'s push against the desert Storm God and is killed by a railgun round in the assault — a death that will drag the Rim toward war.',
      phases: [
        { from: 0, unitId: 'ash-armada', note: 'observing for the Rim Dominion' },
        { from: 1, unitId: 'ash-wave-1', note: 'in the Waste with Lysander' },
        { from: 20.3, status: 'dead', note: 'killed by a railgun round in the assault on the desert Storm God (H+20)' },
      ],
    },
    {
      id: 'scorpio',
      name: 'Scorpio au Votum',
      faction: 'society',
      role: 'Legate — Scorpion Legion, heir of House Votum',
      description:
        'Lands his Titan-spearheaded legion on the Plains of Caduceus expecting incomplete fortifications — and finds the Armored 15th waiting. His Titan stops two charging Drachenjägers with its gravity gun before Darrow cuts him in half.',
      phases: [
        { from: 0, unitId: 'ash-armada', note: 'staging aboard the armada' },
        { from: 5.5, unitId: 'scorpion-legion' },
        { from: 8.2, status: 'dead', note: 'bisected by Darrow in the Caduceus ambush (H+8)' },
      ],
    },
    {
      id: 'cicero',
      name: 'Cicero au Votum',
      faction: 'society',
      role: 'Legate — House Votum',
      description:
        'Scorpio\'s brother, commanding Votum forces in the follow-on waves. Loses two siblings in one day — Scorpio to Darrow\'s razor, Ovidius and Porcia to the drowning of Tyche — and survives to carry the House.',
      phases: [
        { from: 0, unitId: 'ash-armada', note: 'staging aboard the armada' },
        { from: 4, unitId: 'ash-wave-2', note: 'with the follow-on waves east of the storm' },
      ],
    },
    // ————— relevant but not on this battlefield —————
    {
      id: 'virginia',
      name: 'Virginia au Augustus',
      faction: 'republic',
      role: 'Sovereign of the Solar Republic',
      description:
        'The Sovereign is 200 million kilometers away on Luna, fighting the Senate and the Vox Populi for the reinforcements Mercury never gets. Within two weeks of this battle, the Day of Red Doves coup will take her capital out from under her.',
      phases: [{ from: 0, status: 'off-map', note: 'on Luna, holding a fracturing Republic together — no relief fleet is coming' }],
    },
    {
      id: 'sevro',
      name: 'Sevro au Barca',
      faction: 'republic',
      role: 'Imperator — the Howlers',
      description:
        'Goblin is not on Mercury: after the Venus raid that killed the Ash Lord, he chose his family over the war and sailed for Luna with the Howlers. His absence from this battle is one of its quiet wounds.',
      phases: [{ from: 0, status: 'off-map', note: 'returning to Luna with Victra and the Howlers — he chose home over Mercury' }],
    },
    {
      id: 'victra',
      name: 'Victra au Barca',
      faction: 'republic',
      role: 'Imperator — House Julii',
      description:
        'Sevro\'s wife and the Julii war-machine. Not at the Ladon — she extracted with Sevro toward Luna after Venus. Her absence, like his, is felt in every hour the Free Legions fight alone.',
      phases: [{ from: 0, status: 'off-map', note: 'en route to Luna with Sevro — the Julii fleets are not in Mercury\'s sky' }],
    },
  ],

  events: [
    {
      t: 0,
      title: 'The shield chain falls',
      characterIds: ['atlas'],
      kind: 'strategic',
      at: { x: 620, y: 300 },
      description:
        "Atlas au Raa's Gorgons overload hard-lined city reactors across northern Helios. The shield chain collapses — the continent is open to orbital assault.",
    },
    {
      t: 1,
      title: 'The Ash Rain begins',
      characterIds: ['atalantia'],
      kind: 'strategic',
      at: { x: 500, y: 80 },
      description:
        'Atalantia au Grimmus commits ~30 million troops in 40+ legions — the largest orbital assault since Darrow\'s own Iron Rain took this planet six months earlier.',
    },
    {
      t: 2.1,
      title: 'Omega-atomic erases Red Reach',
      characterIds: ['atalantia'],
      kind: 'catastrophe',
      at: { x: 720, y: 240 },
      description:
        'An omega-atomic fired from orbit vaporizes the Red Reach base and one million soldiers of the Republic Second Army.',
    },
    {
      t: 3,
      title: 'Operation Tartarus',
      characterIds: ['darrow', 'orion', 'glirastes'],
      kind: 'strategic',
      at: { x: 185, y: 115 },
      description:
        'Darrow unleashes the seven Storm Gods excavated from Mercury\'s polar ice. Five hypercanes rise over the Sycorax Sea; a sandstorm swallows the Waste of Ladon. Society comms scramble, aircraft are grounded.',
    },
    {
      t: 3.5,
      title: 'Landing waves shredded',
      characterIds: ['lysander', 'seraphina'],
      kind: 'combat',
      at: { x: 520, y: 330 },
      description:
        'Sixty Society transports are destroyed in the first minute of the storm. The first and second waves are annihilated in the Waste of Ladon.',
    },
    {
      t: 7.5,
      title: 'Ambush on the Plains of Caduceus',
      characterIds: ['darrow', 'thraxa', 'scorpio'],
      kind: 'combat',
      at: { x: 385, y: 445 },
      description:
        "The customary Gold landfall fortifications were never finished — and the Armored 15th Legion's Drachenjägers are waiting. Scorpio au Votum's landing is massacred.",
    },
    {
      t: 8.2,
      title: 'Titan versus Drachenjäger',
      characterIds: ['darrow', 'scorpio'],
      kind: 'combat',
      at: { x: 385, y: 445 },
      description:
        "Scorpio's 60-meter Titan halts two charging Drachenjägers with its gravity gun before starShell-armored Golds swarm the mechs and kill their pilots. Darrow cuts Scorpio in half.",
    },
    {
      t: 12,
      title: 'Tyche breached',
      kind: 'combat',
      at: { x: 295, y: 180 },
      description:
        'Ash Legions storm across the Talarian Peninsula and breach the richest city on Mercury.',
    },
    {
      t: 14,
      title: 'Orion exceeds the primary horizon',
      characterIds: ['orion'],
      kind: 'catastrophe',
      at: { x: 250, y: 140 },
      description:
        'Broken by three weeks of Gorgon torture, Orion xe Aquarii drives the Storm Gods above the primary horizon toward Level Four — an output that would scour the surface of the planet.',
    },
    {
      t: 14.3,
      title: 'The drowning of Tyche',
      characterIds: ['cicero'],
      kind: 'catastrophe',
      at: { x: 290, y: 183 },
      description:
        'A kilometer-high tidal wave buries a third of Tyche, drowning defenders, civilians, and the Ash Legions inside the walls. Ovidius and Porcia au Votum die with their troops. Only the Water Colossus still stands on the waterfront.',
    },
    {
      t: 15,
      title: 'Darrow kills Orion',
      characterIds: ['darrow', 'orion', 'glirastes'],
      kind: 'strategic',
      at: { x: 185, y: 115 },
      description:
        "Using the kill-switch failsafe Glirastes built into the Storm God network, Darrow forcibly disconnects Orion — killing his oldest naval comrade to stop a planetary extinction. The storms rage on regardless.",
    },
    {
      t: 16,
      title: 'Evacuation under the Hesperides',
      kind: 'heroic',
      at: { x: 395, y: 355 },
      description:
        '83,423+ civilians flee drowning Tyche through the subterranean gravLoop toward Heliopolis.',
    },
    {
      t: 20,
      title: 'The Knights of Elysium hold the line',
      characterIds: ['alexandar'],
      kind: 'heroic',
      at: { x: 295, y: 180 },
      description:
        'Alexandar au Arcos and the Knights of Elysium hold the Tyche gravLoop terminus until the last civilian is through. 194 of 203 knights die.',
    },
    {
      t: 20.3,
      title: 'Lysander destroys the desert Storm God',
      characterIds: ['lysander', 'seraphina'],
      kind: 'combat',
      at: { x: 515, y: 320 },
      description:
        'Lysander au Lune brings down the Storm God over the Waste of Ladon. Seraphina au Raa is killed by a railgun round in the assault — a death that will echo through the Rim.',
    },
    {
      t: 24,
      title: 'X Pardus breaches Heliopolis',
      characterIds: ['ajax'],
      kind: 'combat',
      at: { x: 567, y: 588 },
      description:
        "At roughly hour 24, Ajax au Grimmus's Iron Leopards breach the walls of Heliopolis.",
    },
    {
      t: 29.5,
      title: 'The Morning Star descends',
      kind: 'heroic',
      at: { x: 610, y: 520 },
      description:
        'The 8-kilometer moonBreaker Morning Star drops through the hypercane as a stormbreaker, its batteries relieving the assault on Heliopolis.',
    },
    {
      t: 34,
      title: 'Slaughter at the Storm Wall',
      characterIds: ['ajax'],
      kind: 'combat',
      at: { x: 560, y: 585 },
      description:
        'Trapped between the Storm Wall and the reinvigorated defense, the Iron Leopards are butchered. Ajax\'s assault breaks.',
    },
    {
      t: 39,
      title: 'Victory — at a price',
      characterIds: ['darrow', 'harnassus'],
      kind: 'strategic',
      at: { x: 560, y: 600 },
      description:
        "The Ash Rain is broken: ~4 million Republic casualties against ~8 million Society — the Republic's greatest statistical victory. Darrow suffers a heart attack as the guns fall silent. Within two weeks, the Free Legions will hold nothing on Helios but Heliopolis itself.",
    },
  ],

  summary:
    'Atalantia au Grimmus\'s counter-invasion of Mercury: ~30 million Society troops rain onto the continent of Helios against ~9–10 million stranded Free Legions. Darrow answers with Operation Tartarus — seven ancient terraforming Storm Gods turned into weapons — and a Drachenjäger ambush that becomes the marquee mech engagement of the series. The Republic wins the field and loses the war for Mercury anyway.',
  outcome:
    'Tactical Republic victory (~4M Republic vs ~8M Society casualties), but the Free Legions lose all of Helios except Heliopolis within two weeks — and the city falls a month later to the uprising of the Long Night.',
  fidelityNote:
    'Events, named formations, commanders, and casualty figures follow canon (Red Rising Wiki, *Dark Age*). Map coordinates, movement paths, hour offsets between canon beats, and strengths marked "(est.)" are reconstructions.',
  sources: [
    'https://red-rising.fandom.com/wiki/The_Battle_of_the_Ladon',
    'https://red-rising.fandom.com/wiki/Storm_God',
    'https://red-rising.fandom.com/wiki/The_Siege_of_Mercury',
    'https://red-rising.fandom.com/wiki/Battle_of_Caliban',
    'https://red-rising.fandom.com/wiki/Tyche',
    'https://red-rising.fandom.com/wiki/Heliopolis',
    'https://red-rising.fandom.com/wiki/Legio_X_Pardus',
    'https://red-rising.fandom.com/wiki/Orion_xe_Aquarii',
  ],
}
