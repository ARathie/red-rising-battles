import type { Unit, Waypoint, StrengthPoint, Character, CharacterPhase, BattleDefinition } from '../types'

export function isActive(unit: Unit, t: number): boolean {
  const from = unit.appearsAt ?? 0
  const to = unit.vanishesAt ?? Infinity
  return t >= from && t <= to
}

function lerp(a: number, b: number, f: number): number {
  return a + (b - a) * f
}

export function positionAt(unit: Unit, t: number): { x: number; y: number } {
  const path = unit.path
  if (path.length === 0) return { x: 0, y: 0 }
  if (t <= path[0].t) return { x: path[0].x, y: path[0].y }
  const last = path[path.length - 1]
  if (t >= last.t) return { x: last.x, y: last.y }
  for (let i = 0; i < path.length - 1; i++) {
    const a: Waypoint = path[i]
    const b: Waypoint = path[i + 1]
    if (t >= a.t && t <= b.t) {
      const f = b.t === a.t ? 0 : (t - a.t) / (b.t - a.t)
      return { x: lerp(a.x, b.x, f), y: lerp(a.y, b.y, f) }
    }
  }
  return { x: last.x, y: last.y }
}

export function strengthAt(unit: Unit, t: number): number {
  const pts = unit.strength
  if (pts.length === 0) return 0
  if (t <= pts[0].t) return pts[0].value
  const last = pts[pts.length - 1]
  if (t >= last.t) return last.value
  for (let i = 0; i < pts.length - 1; i++) {
    const a: StrengthPoint = pts[i]
    const b: StrengthPoint = pts[i + 1]
    if (t >= a.t && t <= b.t) {
      const f = b.t === a.t ? 0 : (t - a.t) / (b.t - a.t)
      return lerp(a.value, b.value, f)
    }
  }
  return last.value
}

/** The phase a character is in at battle hour `t` (clamped to the first phase before it starts). */
export function characterPhaseAt(c: Character, t: number): CharacterPhase {
  let cur = c.phases[0]
  for (const p of c.phases) {
    if (t >= p.from) cur = p
    else break
  }
  return cur
}

/**
 * Where a character is drawn at time `t`, or null if they are not on the map
 * (off the battlefield, dead, captured, or their unit is gone).
 */
export function characterPositionAt(
  c: Character,
  battle: BattleDefinition,
  t: number,
): { x: number; y: number; unit: Unit } | null {
  const phase = characterPhaseAt(c, t)
  if (!phase.unitId) return null
  if (phase.status === 'dead' || phase.status === 'captured' || phase.status === 'off-map') return null
  const unit = battle.units.find((u) => u.id === phase.unitId)
  if (!unit || !isActive(unit, t) || strengthAt(unit, t) <= 0) return null
  const pos = positionAt(unit, t)
  return { x: pos.x, y: pos.y, unit }
}

/** All characters riding with `unitId` at time `t`. */
export function charactersWithUnit(battle: BattleDefinition, unitId: string, t: number): Character[] {
  return battle.characters.filter((c) => {
    const p = characterPhaseAt(c, t)
    return p.unitId === unitId && p.status !== 'dead' && p.status !== 'captured' && p.status !== 'off-map'
  })
}

export function formatHour(t: number): string {
  const h = Math.floor(t)
  const m = Math.floor((t - h) * 60)
  return `H+${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

/** Hour clock for short battles, day+hour clock for multi-day sieges. */
export function formatTime(t: number, durationHours: number): string {
  if (durationHours <= 72) return formatHour(t)
  const day = Math.floor(t / 24) + 1
  const h = Math.floor(t % 24)
  return `Day ${day} · ${String(h).padStart(2, '0')}h`
}

export function formatStrength(n: number): string {
  const v = Math.round(n)
  if (v >= 1_000_000) return `${(v / 1_000_000).toFixed(v >= 10_000_000 ? 0 : 1)}M`
  if (v >= 10_000) return `${Math.round(v / 1000)}k`
  return v.toLocaleString('en-US')
}
