import { useEffect, useRef, useState } from 'react'
import type { Selection } from './types'
import { battles } from './data'
import MapCanvas from './components/MapCanvas'
import TimelineControls from './components/TimelineControls'
import EventLog from './components/EventLog'
import InfoPanel from './components/InfoPanel'

/** Every battle plays end-to-end in ~35 real seconds at 1× speed. */
const PLAYTHROUGH_SECONDS = 35

export default function App() {
  const [battleId, setBattleId] = useState(battles[0].id)
  const battle = battles.find((b) => b.id === battleId) ?? battles[0]

  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [selected, setSelected] = useState<Selection | null>(null)
  const [followId, setFollowId] = useState<string | null>(null)
  const frame = useRef<number>(0)
  const lastTime = useRef<number | null>(null)

  function switchBattle(id: string) {
    setBattleId(id)
    setT(0)
    setPlaying(false)
    setSelected(null)
    setFollowId(null)
  }

  function follow(id: string | null) {
    setFollowId(id)
    if (id) setSelected({ type: 'character', id })
  }

  useEffect(() => {
    if (!playing) {
      lastTime.current = null
      return
    }
    const rate = battle.durationHours / PLAYTHROUGH_SECONDS
    const tick = (now: number) => {
      if (lastTime.current !== null) {
        const dt = (now - lastTime.current) / 1000
        setT((prev) => {
          const next = prev + dt * rate * speed
          if (next >= battle.durationHours) {
            setPlaying(false)
            return battle.durationHours
          }
          return next
        })
      }
      lastTime.current = now
      frame.current = requestAnimationFrame(tick)
    }
    frame.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame.current)
  }, [playing, speed, battle])

  return (
    <div className="app">
      <header>
        <h1>
          Red Rising <span className="accent">Battles</span>
        </h1>
        <select
          className="battle-select"
          value={battleId}
          onChange={(e) => switchBattle(e.target.value)}
          aria-label="Choose battle"
        >
          {battles.map((b) => (
            <option key={b.id} value={b.id}>
              {b.name}
            </option>
          ))}
        </select>
        <span className="subtitle">
          {battle.date} — {battle.location}
        </span>
      </header>
      <div className="main">
        <div className="map-wrap">
          <MapCanvas
            battle={battle}
            t={t}
            selected={selected}
            followId={followId}
            onSelect={setSelected}
          />
          <TimelineControls
            battle={battle}
            t={t}
            playing={playing}
            speed={speed}
            onSeek={(v) => setT(v)}
            onTogglePlay={() => setPlaying((p) => (t >= battle.durationHours ? (setT(0), true) : !p))}
            onSpeed={setSpeed}
          />
        </div>
        <aside className="sidebar">
          <InfoPanel
            battle={battle}
            t={t}
            selected={selected}
            followId={followId}
            onSelect={setSelected}
            onFollow={follow}
          />
          <EventLog
            battle={battle}
            t={t}
            followId={followId}
            onJump={(v) => {
              setT(v)
              setPlaying(false)
            }}
          />
        </aside>
      </div>
      <footer>
        An unofficial fan project. Red Rising © Pierce Brown — this recreation contains no book text;
        battle data compiled from the community wiki. Reconstructed positions/timing noted in-app.
      </footer>
    </div>
  )
}
