import type { BattleDefinition } from '../types'
import { FACTION_COLORS } from '../types'
import { strengthAt, formatStrength } from '../engine/timeline'

interface Props {
  battle: BattleDefinition
  t: number
  selectedId: string | null
  onClear: () => void
}

export default function InfoPanel({ battle, t, selectedId, onClear }: Props) {
  const unit = battle.units.find((u) => u.id === selectedId)

  if (!unit) {
    return (
      <div className="info-panel">
        <h3>{battle.name}</h3>
        <p className="meta">
          {battle.date} · {battle.location}
        </p>
        <p>{battle.summary}</p>
        {(['republic', 'society'] as const).map((f) => (
          <div key={f} className="faction-block">
            <h4>
              <span className="chip" style={{ background: battle.factions[f].color }} />
              {battle.factions[f].name}
            </h4>
            <p className="dim">{battle.factions[f].totalStrength}</p>
            <p className="commanders">{battle.factions[f].commanders.join(' · ')}</p>
          </div>
        ))}
        <p className="fidelity">{battle.fidelityNote}</p>
      </div>
    )
  }

  const s = strengthAt(unit, t)
  return (
    <div className="info-panel">
      <button className="back-btn" onClick={onClear}>
        ← battle overview
      </button>
      <h3>
        <span className="chip" style={{ background: FACTION_COLORS[unit.faction] }} />
        {unit.name}
      </h3>
      <p className="meta">
        {unit.kind} ·{' '}
        <strong>
          {formatStrength(s)} {unit.strengthUnit}
        </strong>{' '}
        at current time
      </p>
      <p>{unit.notes}</p>
    </div>
  )
}
