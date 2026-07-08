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

export interface MapFeature {
  id: string
  name: string
  kind: 'sea' | 'desert' | 'mountains' | 'city' | 'plains' | 'landmark' | 'route'
  points: Array<{ x: number; y: number }>
  labelAt?: { x: number; y: number }
}

export interface BattleEvent {
  t: number
  title: string
  description: string
  at?: { x: number; y: number }
  kind: 'strategic' | 'combat' | 'catastrophe' | 'heroic'
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
  map: { width: number; height: number; features: MapFeature[] }
  factions: Record<Exclude<Faction, 'environment'>, FactionMeta>
  units: Unit[]
  events: BattleEvent[]
  summary: string
  outcome: string
  /** Shown in the UI: what is canon vs. reconstruction. */
  fidelityNote: string
  sources: string[]
}

export const FACTION_COLORS: Record<Faction, string> = {
  republic: '#e63946',
  society: '#d4af37',
  environment: '#4cc9f0',
}
