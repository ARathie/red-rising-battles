import type { BattleDefinition, Character, Selection } from '../types'
import { FACTION_COLORS } from '../types'
import {
  strengthAt,
  formatStrength,
  characterPhaseAt,
  characterPositionAt,
  charactersWithUnit,
  formatTime,
  isActive,
} from '../engine/timeline'

interface Props {
  battle: BattleDefinition
  t: number
  selected: Selection | null
  followId: string | null
  onSelect: (sel: Selection | null) => void
  onFollow: (id: string | null) => void
  /** Override for the "← battle overview" button (mobile sheet keeps itself open). */
  onBack?: () => void
}

function statusIcon(battle: BattleDefinition, c: Character, t: number): string {
  const phase = characterPhaseAt(c, t)
  if (phase.status === 'dead') return '☠'
  if (phase.status === 'captured') return '⛓'
  if (phase.status === 'withdrawn') return '↩'
  return characterPositionAt(c, battle, t) ? '●' : '○'
}

function CharacterChips({
  battle,
  t,
  chars,
  onSelect,
}: {
  battle: BattleDefinition
  t: number
  chars: Character[]
  onSelect: (sel: Selection) => void
}) {
  return (
    <div className="roster">
      {chars.map((c) => (
        <button
          key={c.id}
          className="char-chip"
          style={{ borderColor: FACTION_COLORS[c.faction] + '88' }}
          onClick={() => onSelect({ type: 'character', id: c.id })}
          title={c.role}
        >
          <span className="char-status">{statusIcon(battle, c, t)}</span>
          {c.name}
        </button>
      ))}
    </div>
  )
}

export default function InfoPanel({ battle, t, selected, followId, onSelect, onFollow, onBack }: Props) {
  const backBtn = (
    <button className="back-btn" onClick={onBack ?? (() => onSelect(null))}>
      ← battle overview
    </button>
  )

  // ————— character view —————
  if (selected?.type === 'character') {
    const c = battle.characters.find((x) => x.id === selected.id)
    if (c) {
      const phase = characterPhaseAt(c, t)
      const pos = characterPositionAt(c, battle, t)
      const unit = phase.unitId ? battle.units.find((u) => u.id === phase.unitId) : undefined
      const following = followId === c.id

      let whereabouts: React.ReactNode
      if (phase.status === 'dead') {
        whereabouts = <p className="whereabouts dead">☠ {phase.note ?? 'Killed in action.'}</p>
      } else if (phase.status === 'captured') {
        whereabouts = <p className="whereabouts captured">⛓ {phase.note ?? 'Taken prisoner.'}</p>
      } else if (phase.status === 'withdrawn') {
        whereabouts = <p className="whereabouts">↩ {phase.note ?? 'Withdrawn from the field.'}</p>
      } else if (pos) {
        whereabouts = (
          <p className="whereabouts">
            ● On the field with{' '}
            <button className="link-btn" onClick={() => onSelect({ type: 'unit', id: pos.unit.id })}>
              {pos.unit.name}
            </button>
            {phase.note ? ` — ${phase.note}` : ''}
          </p>
        )
      } else if (unit && !isActive(unit, t)) {
        whereabouts = (
          <p className="whereabouts offmap">
            ○ Their formation ({unit.name}) is no longer on the field.
            {phase.note ? ` ${phase.note}` : ''}
          </p>
        )
      } else if (phase.status === 'active') {
        // on the battlefield, but deliberately hidden / not attached to a drawn unit
        whereabouts = <p className="whereabouts">◌ {phase.note ?? 'In position, location concealed.'}</p>
      } else {
        whereabouts = (
          <p className="whereabouts offmap">
            ○ Not on this battlefield — {phase.note ?? 'whereabouts unknown at this hour.'}
          </p>
        )
      }

      return (
        <div className="info-panel">
          {backBtn}
          <h3>
            <span className="chip" style={{ background: FACTION_COLORS[c.faction] }} />
            {c.name}
          </h3>
          <p className="meta">{c.role}</p>
          {whereabouts}
          <button
            className={following ? 'follow-btn active' : 'follow-btn'}
            onClick={() => onFollow(following ? null : c.id)}
          >
            {following ? '★ Following — click to stop' : '☆ Follow through the battle'}
          </button>
          <p>{c.description}</p>
          <p className="dim small">
            Following highlights them on the map as they move between formations, and flags battle-log
            events they take part in.
          </p>
        </div>
      )
    }
  }

  // ————— feature view —————
  if (selected?.type === 'feature') {
    const f = battle.map.features.find((x) => x.id === selected.id)
    if (f) {
      return (
        <div className="info-panel">
          {backBtn}
          <h3>{f.name}</h3>
          <p className="meta">{f.kind}</p>
          <p>{f.description ?? 'No further information.'}</p>
        </div>
      )
    }
  }

  // ————— unit view —————
  if (selected?.type === 'unit') {
    const unit = battle.units.find((u) => u.id === selected.id)
    if (unit) {
      const s = strengthAt(unit, t)
      const riders = charactersWithUnit(battle, unit.id, t)
      return (
        <div className="info-panel">
          {backBtn}
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
          {riders.length > 0 && (
            <>
              <h4 className="section-head">With this formation now</h4>
              <CharacterChips battle={battle} t={t} chars={riders} onSelect={onSelect} />
            </>
          )}
        </div>
      )
    }
  }

  // ————— battle overview —————
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
      {battle.characters.length > 0 && (
        <>
          <h4 className="section-head">
            Characters <span className="dim">(click one to inspect &amp; follow · {formatTime(t, battle.durationHours)})</span>
          </h4>
          <CharacterChips battle={battle} t={t} chars={battle.characters} onSelect={onSelect} />
        </>
      )}
      <p className="fidelity">{battle.fidelityNote}</p>
    </div>
  )
}
