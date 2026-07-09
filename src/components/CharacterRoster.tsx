import type { BattleDefinition, Character, Selection } from '../types'
import { FACTION_COLORS } from '../types'
import { characterPhaseAt, characterPositionAt } from '../engine/timeline'

export function statusIcon(battle: BattleDefinition, c: Character, t: number): string {
  const phase = characterPhaseAt(c, t)
  if (phase.status === 'dead') return '☠'
  if (phase.status === 'captured') return '⛓'
  if (phase.status === 'withdrawn') return '↩'
  return characterPositionAt(c, battle, t) ? '●' : '○'
}

export function CharacterChips({
  battle,
  t,
  chars,
  followId,
  onSelect,
}: {
  battle: BattleDefinition
  t: number
  chars: Character[]
  followId?: string | null
  onSelect: (sel: Selection) => void
}) {
  return (
    <div className="roster">
      {chars.map((c) => (
        <button
          key={c.id}
          className={followId === c.id ? 'char-chip following' : 'char-chip'}
          style={{ borderColor: followId === c.id ? '#fbbf24' : FACTION_COLORS[c.faction] + '88' }}
          onClick={() => onSelect({ type: 'character', id: c.id })}
          title={c.role}
        >
          <span className="char-status">{followId === c.id ? '★' : statusIcon(battle, c, t)}</span>
          {c.name}
        </button>
      ))}
    </div>
  )
}

interface Props {
  battle: BattleDefinition
  t: number
  followId: string | null
  onSelect: (sel: Selection) => void
}

/** Sidebar panel: every character in the battle, clickable, with live status icons. */
export default function CharacterRoster({ battle, t, followId, onSelect }: Props) {
  if (battle.characters.length === 0) return null
  return (
    <div className="roster-panel">
      <h3>
        Characters <span className="roster-hint">· tap to inspect &amp; follow</span>
      </h3>
      <CharacterChips
        battle={battle}
        t={t}
        chars={battle.characters}
        followId={followId}
        onSelect={onSelect}
      />
    </div>
  )
}
