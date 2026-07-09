import { useEffect, useMemo, useRef } from 'react'
import type { BattleDefinition, Character, MapFeature, Selection, Unit } from '../types'
import { FACTION_COLORS } from '../types'
import { isActive, positionAt, strengthAt, characterPositionAt } from '../engine/timeline'

interface Props {
  battle: BattleDefinition
  t: number
  selected: Selection | null
  followId: string | null
  onSelect: (sel: Selection | null) => void
}

/** Point-like feature kinds that can be clicked when they carry a description. */
const CLICKABLE_FEATURES = new Set(['city', 'landmark', 'planet', 'moon', 'station'])

function unitRadius(unit: Unit, strength: number): number {
  if (unit.kind === 'hazard') return 30 + strength * 16
  if (unit.kind === 'ship') return Math.min(16, 8 + 2 * Math.log10(Math.max(strength, 1)))
  if (unit.kind === 'stormgod') return 8
  return Math.min(20, 4 + 3 * Math.log10(Math.max(strength, 2)))
}

function drawPolygon(ctx: CanvasRenderingContext2D, pts: Array<{ x: number; y: number }>) {
  ctx.beginPath()
  pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)))
  ctx.closePath()
}

/** Deterministic PRNG so the starfield is stable per battle. */
function mulberry32(seed: number) {
  return () => {
    seed |= 0
    seed = (seed + 0x6d2b79f5) | 0
    let z = Math.imul(seed ^ (seed >>> 15), 1 | seed)
    z = (z + Math.imul(z ^ (z >>> 7), 61 | z)) ^ z
    return ((z ^ (z >>> 14)) >>> 0) / 4294967296
  }
}

function hashString(s: string): number {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return h >>> 0
}

function drawFeature(ctx: CanvasRenderingContext2D, f: MapFeature, space: boolean) {
  ctx.save()
  switch (f.kind) {
    case 'sea':
      drawPolygon(ctx, f.points)
      ctx.fillStyle = '#123047'
      ctx.fill()
      break
    case 'desert':
      drawPolygon(ctx, f.points)
      ctx.fillStyle = 'rgba(160, 120, 60, 0.22)'
      ctx.fill()
      ctx.strokeStyle = 'rgba(200, 160, 90, 0.35)'
      ctx.setLineDash([6, 6])
      ctx.stroke()
      break
    case 'plains':
      drawPolygon(ctx, f.points)
      ctx.fillStyle = 'rgba(110, 140, 90, 0.14)'
      ctx.fill()
      break
    case 'mountains':
      ctx.strokeStyle = '#6b7280'
      ctx.fillStyle = '#4b5563'
      for (const p of f.points) {
        ctx.beginPath()
        ctx.moveTo(p.x - 9, p.y + 6)
        ctx.lineTo(p.x, p.y - 8)
        ctx.lineTo(p.x + 9, p.y + 6)
        ctx.closePath()
        ctx.fill()
      }
      break
    case 'city': {
      const p = f.points[0]
      ctx.fillStyle = '#e5e7eb'
      ctx.fillRect(p.x - 5, p.y - 5, 10, 10)
      ctx.strokeStyle = '#9ca3af'
      ctx.strokeRect(p.x - 5, p.y - 5, 10, 10)
      break
    }
    case 'landmark': {
      const p = f.points[0]
      ctx.strokeStyle = '#9ca3af'
      ctx.beginPath()
      ctx.moveTo(p.x - 5, p.y)
      ctx.lineTo(p.x + 5, p.y)
      ctx.moveTo(p.x, p.y - 5)
      ctx.lineTo(p.x, p.y + 5)
      ctx.stroke()
      break
    }
    case 'route':
      ctx.strokeStyle = 'rgba(156, 163, 175, 0.5)'
      ctx.setLineDash([3, 7])
      ctx.lineWidth = 2
      ctx.beginPath()
      f.points.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)))
      ctx.stroke()
      break
    case 'planet': {
      const p = f.points[0]
      const r = f.radius ?? 80
      const color = f.color ?? '#c8956c'
      const grad = ctx.createRadialGradient(p.x - r * 0.35, p.y - r * 0.35, r * 0.1, p.x, p.y, r)
      grad.addColorStop(0, color)
      grad.addColorStop(1, '#141a24')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = color + '44'
      ctx.lineWidth = 1.5
      ctx.stroke()
      break
    }
    case 'moon': {
      const p = f.points[0]
      const r = f.radius ?? 12
      const grad = ctx.createRadialGradient(p.x - r * 0.3, p.y - r * 0.3, r * 0.15, p.x, p.y, r)
      grad.addColorStop(0, f.color ?? '#b8bec9')
      grad.addColorStop(1, '#3a4250')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = 'rgba(200, 208, 220, 0.35)'
      ctx.stroke()
      break
    }
    case 'station': {
      const p = f.points[0]
      const r = f.radius ?? 9
      ctx.strokeStyle = f.color ?? '#e5e7eb'
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(p.x, p.y - r)
      ctx.lineTo(p.x + r, p.y)
      ctx.lineTo(p.x, p.y + r)
      ctx.lineTo(p.x - r, p.y)
      ctx.closePath()
      ctx.stroke()
      ctx.beginPath()
      ctx.moveTo(p.x - r * 0.5, p.y)
      ctx.lineTo(p.x + r * 0.5, p.y)
      ctx.stroke()
      break
    }
    case 'orbit': {
      const p = f.points[0]
      ctx.strokeStyle = 'rgba(148, 163, 184, 0.22)'
      ctx.setLineDash([2, 8])
      ctx.beginPath()
      ctx.arc(p.x, p.y, f.radius ?? 100, 0, Math.PI * 2)
      ctx.stroke()
      break
    }
  }
  ctx.restore()

  // label
  if (f.kind === 'orbit') return
  const at = f.labelAt ?? f.points[0]
  ctx.save()
  ctx.font = '11px system-ui, sans-serif'
  ctx.fillStyle = f.kind === 'sea' ? '#7dd3fc' : space ? '#aeb8c8' : '#d1d5db'
  ctx.globalAlpha = 0.85
  const dx = f.kind === 'city' || f.kind === 'landmark' || f.kind === 'station' ? 9 : 0
  ctx.fillText(f.name, at.x + dx, at.y + (f.kind === 'city' ? 4 : 0))
  ctx.restore()
}

interface CharMarker {
  id: string
  x: number
  y: number
}

export default function MapCanvas({ battle, t, selected, followId, onSelect }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const markersRef = useRef<CharMarker[]>([])
  const space = battle.map.mode === 'space'

  const stars = useMemo(() => {
    const rand = mulberry32(hashString(battle.id))
    return Array.from({ length: 150 }, () => ({
      x: rand() * battle.map.width,
      y: rand() * battle.map.height,
      r: 0.4 + rand() * 1.1,
      a: 0.25 + rand() * 0.6,
    }))
  }, [battle])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const { width, height } = battle.map

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = space ? '#080b12' : '#0d1117'
    ctx.fillRect(0, 0, width, height)

    if (space) {
      ctx.save()
      ctx.fillStyle = '#e6edf3'
      for (const s of stars) {
        ctx.globalAlpha = s.a
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.restore()
    }

    for (const f of battle.map.features) drawFeature(ctx, f, space)

    // selected-feature ring
    if (selected?.type === 'feature') {
      const f = battle.map.features.find((x) => x.id === selected.id)
      if (f && f.points.length > 0) {
        const p = f.points[0]
        ctx.save()
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 1.5
        ctx.setLineDash([4, 4])
        ctx.beginPath()
        ctx.arc(p.x, p.y, Math.max(12, (f.radius ?? 0) + 6), 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()
      }
    }

    // hazards first (under units)
    for (const unit of battle.units) {
      if (unit.kind !== 'hazard' || !isActive(unit, t)) continue
      const pos = positionAt(unit, t)
      const s = strengthAt(unit, t)
      const r = unitRadius(unit, s)
      const grad = ctx.createRadialGradient(pos.x, pos.y, r * 0.15, pos.x, pos.y, r)
      const color = unit.color ?? FACTION_COLORS.environment
      grad.addColorStop(0, color + '55')
      grad.addColorStop(1, color + '08')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2)
      ctx.fill()
      ctx.strokeStyle = color + '66'
      ctx.setLineDash([4, 6])
      ctx.stroke()
      ctx.setLineDash([])
    }

    // units
    for (const unit of battle.units) {
      if (unit.kind === 'hazard' || !isActive(unit, t)) continue
      const s = strengthAt(unit, t)
      if (s <= 0) continue
      const pos = positionAt(unit, t)
      const r = unitRadius(unit, s)
      const color = FACTION_COLORS[unit.faction]

      ctx.save()
      if (unit.kind === 'ship') {
        ctx.fillStyle = color
        ctx.beginPath()
        ctx.moveTo(pos.x, pos.y - r)
        ctx.lineTo(pos.x + r, pos.y)
        ctx.lineTo(pos.x, pos.y + r)
        ctx.lineTo(pos.x - r, pos.y)
        ctx.closePath()
        ctx.fill()
      } else if (unit.kind === 'stormgod') {
        ctx.fillStyle = color
        ctx.beginPath()
        for (let i = 0; i < 6; i++) {
          const a = (Math.PI / 3) * i - Math.PI / 6
          const px = pos.x + r * Math.cos(a)
          const py = pos.y + r * Math.sin(a)
          i === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
        }
        ctx.closePath()
        ctx.fill()
      } else {
        ctx.fillStyle = color + (unit.kind === 'civilian' ? '99' : 'dd')
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, r, 0, Math.PI * 2)
        ctx.fill()
        if (unit.kind === 'mech' || unit.kind === 'knights' || unit.kind === 'specops') {
          ctx.strokeStyle = '#0d1117'
          ctx.lineWidth = 1.5
          ctx.beginPath()
          ctx.arc(pos.x, pos.y, r * 0.45, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      if (selected?.type === 'unit' && unit.id === selected.id) {
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, r + 4, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.restore()
    }

    // character markers, fanned out above their unit
    const markers: CharMarker[] = []
    const byUnit = new Map<string, Array<{ c: Character; x: number; y: number; r: number }>>()
    for (const c of battle.characters) {
      const pos = characterPositionAt(c, battle, t)
      if (!pos) continue
      const r = unitRadius(pos.unit, strengthAt(pos.unit, t))
      const list = byUnit.get(pos.unit.id) ?? []
      list.push({ c, x: pos.x, y: pos.y, r })
      byUnit.set(pos.unit.id, list)
    }
    for (const group of byUnit.values()) {
      const n = group.length
      group.forEach((g, i) => {
        const spread = 0.55
        const angle = -Math.PI / 2 + (i - (n - 1) / 2) * spread
        const d = g.r + 11
        const mx = g.x + d * Math.cos(angle)
        const my = g.y + d * Math.sin(angle)
        markers.push({ id: g.c.id, x: mx, y: my })

        const isSel = selected?.type === 'character' && selected.id === g.c.id
        const isFollowed = followId === g.c.id
        ctx.save()
        ctx.beginPath()
        ctx.arc(mx, my, 6.5, 0, Math.PI * 2)
        ctx.fillStyle = '#0d1117'
        ctx.fill()
        ctx.lineWidth = isSel || isFollowed ? 2 : 1.25
        ctx.strokeStyle = isFollowed ? '#fbbf24' : isSel ? '#ffffff' : FACTION_COLORS[g.c.faction]
        ctx.stroke()
        ctx.fillStyle = '#e6edf3'
        ctx.font = 'bold 8px system-ui, sans-serif'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(g.c.name.charAt(0), mx, my + 0.5)
        ctx.restore()

        if (isFollowed) {
          // follow reticle + name tag
          const pulse = 2 + 1.5 * Math.abs(Math.sin(t * 2.5))
          ctx.save()
          ctx.strokeStyle = '#fbbf24'
          ctx.lineWidth = 1.5
          ctx.setLineDash([5, 4])
          ctx.beginPath()
          ctx.arc(g.x, g.y, g.r + 9 + pulse, 0, Math.PI * 2)
          ctx.stroke()
          ctx.setLineDash([])
          ctx.font = 'bold 10px system-ui, sans-serif'
          ctx.textAlign = 'center'
          ctx.fillStyle = '#fbbf24'
          ctx.fillText(g.c.name, g.x, g.y - g.r - 22)
          ctx.restore()
        }
      })
    }
    markersRef.current = markers

    // event pulses (events within the last 1.5 battle-hours; scaled for long sieges)
    const pulseWindow = battle.durationHours > 72 ? battle.durationHours / 26 : 1.5
    for (const ev of battle.events) {
      if (!ev.at || t < ev.t || t > ev.t + pulseWindow) continue
      const age = (t - ev.t) / pulseWindow
      ctx.save()
      ctx.strokeStyle =
        ev.kind === 'catastrophe' ? '#f87171' : ev.kind === 'heroic' ? '#a7f3d0' : '#fbbf24'
      ctx.globalAlpha = 1 - age
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(ev.at.x, ev.at.y, 8 + age * 26, 0, Math.PI * 2)
      ctx.stroke()
      ctx.restore()
    }
  }, [battle, t, selected, followId, space, stars])

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (battle.map.width / rect.width)
    const y = (e.clientY - rect.top) * (battle.map.height / rect.height)

    // 1. character markers (smallest, drawn on top)
    let bestChar: { id: string; d: number } | null = null
    for (const m of markersRef.current) {
      const d = Math.hypot(m.x - x, m.y - y)
      if (d <= 9 && (!bestChar || d < bestChar.d)) bestChar = { id: m.id, d }
    }
    if (bestChar) {
      onSelect({ type: 'character', id: bestChar.id })
      return
    }

    // 2. units
    let bestUnit: { id: string; d: number } | null = null
    for (const unit of battle.units) {
      if (!isActive(unit, t) || strengthAt(unit, t) <= 0) continue
      const pos = positionAt(unit, t)
      const d = Math.hypot(pos.x - x, pos.y - y)
      const r = Math.max(14, unitRadius(unit, strengthAt(unit, t)))
      if (d <= r && (!bestUnit || d < bestUnit.d)) bestUnit = { id: unit.id, d }
    }
    if (bestUnit) {
      onSelect({ type: 'unit', id: bestUnit.id })
      return
    }

    // 3. described point features (cities, landmarks, moons, stations, planets)
    let bestFeature: { id: string; d: number; r: number } | null = null
    for (const f of battle.map.features) {
      if (!CLICKABLE_FEATURES.has(f.kind) || !f.description || f.points.length === 0) continue
      const p = f.points[0]
      const d = Math.hypot(p.x - x, p.y - y)
      const r = Math.max(13, f.radius ?? 0)
      // prefer the smallest feature that contains the click (a city on a planet wins)
      if (d <= r && (!bestFeature || r < bestFeature.r)) bestFeature = { id: f.id, d, r }
    }
    if (bestFeature) {
      onSelect({ type: 'feature', id: bestFeature.id })
      return
    }

    onSelect(null)
  }

  return (
    <canvas
      ref={canvasRef}
      width={battle.map.width}
      height={battle.map.height}
      className="map-canvas"
      onClick={handleClick}
    />
  )
}
