import { useEffect, useRef } from 'react'
import type { BattleDefinition } from '../types'
import { formatHour } from '../engine/timeline'

interface Props {
  battle: BattleDefinition
  t: number
  onJump: (t: number) => void
}

const KIND_ICON: Record<string, string> = {
  strategic: '◈',
  combat: '⚔',
  catastrophe: '☢',
  heroic: '★',
}

export default function EventLog({ battle, t, onJump }: Props) {
  const listRef = useRef<HTMLDivElement>(null)
  const occurred = battle.events.filter((e) => e.t <= t)
  const latest = occurred[occurred.length - 1]

  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [occurred.length])

  return (
    <div className="event-log">
      <h3>Battle log</h3>
      <div className="event-list" ref={listRef}>
        {occurred.length === 0 && <p className="dim">H-hour approaches…</p>}
        {occurred.map((ev) => (
          <button
            key={`${ev.t}-${ev.title}`}
            className={`event ${ev.kind} ${ev === latest ? 'latest' : ''}`}
            onClick={() => onJump(ev.t)}
          >
            <span className="event-head">
              <span className="event-icon">{KIND_ICON[ev.kind]}</span>
              <span className="event-time">{formatHour(ev.t)}</span>
              <span className="event-title">{ev.title}</span>
            </span>
            {ev === latest && <span className="event-desc">{ev.description}</span>}
          </button>
        ))}
      </div>
    </div>
  )
}
