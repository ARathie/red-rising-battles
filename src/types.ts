export type Faction = 'republic' | 'society' | 'environment'

export type UnitKind =
  | 'infantry'
  | 'mech'
  | 'knights'
  | 'ship'
  | 'stormgod'
  | 'civilian'
  | 'specops'
  | 'hazard'

/** A position on the battle map at battle-time `t` (hours since H-hour). */
export interface Waypoint {
  t: number
  x: number
  y: number
}

/** Unit strength at battle-time `t`; values between points are linearly interpolated. */
export interface StrengthPoint {
  t: number
  value: number
}

export interface Unit {
  id: string
  name: string
  faction: Faction
  kind: UnitKind
  /** Battle hour the unit enters the map (default 0). */
  appearsAt?: number
  /** Battle hour the unit leaves the map (destroyed, withdrawn, or merged). */
  vanishesAt?: number
  path: Waypoint[]
  strength: StrengthPoint[]
  /** Label for the strength number, e.g. "troops", "mechs". Append "(est.)" for non-canon estimates. */
  strengthUnit: string
  /** Hazards may override the render color. */
  color?: string
  notes: string
}

export type MapFeatureKind =
  // terrain battles
  | 'sea'
  | 'desert'
  | 'mountains'
  | 'city'
  | 'plains'
  | 'landmark'
  | 'route'
  // space battles
  | 'planet'
  | 'moon'
  | 'station'
  | 'orbit'

export interface MapFeature {
  id: string
  name: string
  kind: MapFeatureKind
  points: Array<{ x: number; y: number }>
  labelAt?: { x: number; y: number }
  /** Render radius for planet / moon / station / orbit kinds (map units). */
  radius?: number
  /** Render color override (mainly planets/moons). */
  color?: string
  /** If set, the feature is clickable and this text is shown in the info panel. */
  description?: string
}

export interface BattleEvent {
  t: number
  title: string
  description: string
  at?: { x: number; y: number }
  kind: 'strategic' | 'combat' | 'catastrophe' | 'heroic'
  /** Characters directly involved — used to spotlight events while following a character. */
  characterIds?: string[]
}

/**
 * One span of a character's whereabouts, starting at battle hour `from`.
 * Spans are sorted by `from`; a span lasts until the next span begins.
 */
export interface CharacterPhase {
  from: number
  /** Unit the character is embedded with; omit when they are not on the battlefield. */
  unitId?: string
  /** Where they are / what they are doing — REQUIRED when off the map, optional color otherwise. */
  note?: string
  status?: 'active' | 'off-map' | 'dead' | 'captured' | 'withdrawn'
}

export interface Character {
  id: string
  name: string
  faction: Exclude<Faction, 'environment'>
  /** Short role line, e.g. "ArchImperator, Republic" */
  role: string
  /** A couple of sentences of who they are in THIS battle. No book quotes. */
  description: string
  phases: CharacterPhase[]
}

export interface FactionMeta {
  name: string
  color: string
  commanders: string[]
  totalStrength: string
}

export interface BattleDefinition {
  id: string
  name: string
  date: string
  location: string
  durationHours: number
  map: {
    width: number
    height: number
    /** 'terrain' (default) or 'space' — controls background & feature rendering. */
    mode?: 'terrain' | 'space'
    features: MapFeature[]
  }
  factions: Record<Exclude<Faction, 'environment'>, FactionMeta>
  units: Unit[]
  /** Named people to follow through the battle (clickable on map & roster). */
  characters: Character[]
  events: BattleEvent[]
  summary: string
  outcome: string
  /** Shown in the UI: what is canon vs. reconstruction. */
  fidelityNote: string
  sources: string[]
}

/** What is currently selected in the UI. */
export type Selection =
  | { type: 'unit'; id: string }
  | { type: 'character'; id: string }
  | { type: 'feature'; id: string }

export const FACTION_COLORS: Record<Faction, string> = {
  republic: '#e63946',
  society: '#d4af37',
  environment: '#4cc9f0',
}
