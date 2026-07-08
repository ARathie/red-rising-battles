import { useEffect, useRef } from 'react'
import type { BattleDefinition, MapFeature, Unit } from '../types'
import { FACTION_COLORS } from '../types'
import { isActive, positionAt, strengthAt } from '../engine/timeline'

interface Props {
  battle: BattleDefinition
  t: number
  selectedId: string | null
  onSelect: (id: string | null) => void
}

function unitRadius(unit: Unit, strength: number): number {
  if (unit.kind === 'hazard') return 30 + strength * 16
  if (unit.kind === 'ship') return 9
  if (unit.kind === 'stormgod') return 8
  return Math.min(20, 4 + 3 * Math.log10(Math.max(strength, 2)))
}

function drawPolygon(ctx: CanvasRenderingContext2D, pts: Array<{ x: number; y: number }>) {
  ctx.beginPath()
  pts.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)))
  ctx.closePath()
}

function drawFeature(ctx: CanvasRenderingContext2D, f: MapFeature) {
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
  }
  ctx.restore()

  // label
  const at = f.labelAt ?? f.points[0]
  ctx.save()
  ctx.font = '11px system-ui, sans-serif'
  ctx.fillStyle = f.kind === 'sea' ? '#7dd3fc' : '#d1d5db'
  ctx.globalAlpha = 0.85
  const dx = f.kind === 'city' || f.kind === 'landmark' ? 9 : 0
  ctx.fillText(f.name, at.x + dx, at.y + (f.kind === 'city' ? 4 : 0))
  ctx.restore()
}

export default function MapCanvas({ battle, t, selectedId, onSelect }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const { width, height } = battle.map

    ctx.clearRect(0, 0, width, height)
    ctx.fillStyle = '#0d1117'
    ctx.fillRect(0, 0, width, height)

    for (const f of battle.map.features) drawFeature(ctx, f)

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

      if (unit.id === selectedId) {
        ctx.strokeStyle = '#ffffff'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(pos.x, pos.y, r + 4, 0, Math.PI * 2)
        ctx.stroke()
      }
      ctx.restore()
    }

    // event pulses (events within the last 1.5 battle-hours)
    for (const ev of battle.events) {
      if (!ev.at || t < ev.t || t > ev.t + 1.5) continue
      const age = (t - ev.t) / 1.5
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
  }, [battle, t, selectedId])

  function handleClick(e: React.MouseEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current
    if (!canvas) return
    const rect = canvas.getBoundingClientRect()
    const x = (e.clientX - rect.left) * (battle.map.width / rect.width)
    const y = (e.clientY - rect.top) * (battle.map.height / rect.height)

    let best: { id: string; d: number } | null = null
    for (const unit of battle.units) {
      if (!isActive(unit, t) || strengthAt(unit, t) <= 0) continue
      const pos = positionAt(unit, t)
      const d = Math.hypot(pos.x - x, pos.y - y)
      const r = Math.max(14, unitRadius(unit, strengthAt(unit, t)))
      if (d <= r && (!best || d < best.d)) best = { id: unit.id, d }
    }
    onSelect(best ? best.id : null)
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
