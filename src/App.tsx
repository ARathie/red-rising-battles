import { useEffect, useRef, useState } from 'react'
import { ladon } from './data/ladon'
import MapCanvas from './components/MapCanvas'
import TimelineControls from './components/TimelineControls'
import EventLog from './components/EventLog'
import InfoPanel from './components/InfoPanel'

const battle = ladon
/** Battle-hours advanced per real second at 1× speed. */
const BASE_RATE = 1.2

export default function App() {
  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const frame = useRef<number>(0)
  const lastTime = useRef<number | null>(null)

  useEffect(() => {
    if (!playing) {
      lastTime.current = null
      return
    }
    const tick = (now: number) => {
      if (lastTime.current !== null) {
        const dt = (now - lastTime.current) / 1000
        setT((prev) => {
          const next = prev + dt * BASE_RATE * speed
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
  }, [playing, speed])

  return (
    <div className="app">
      <header>
        <h1>
          Red Rising <span className="accent">Battles</span>
        </h1>
        <span className="subtitle">
          {battle.name} — {battle.date}
        </span>
      </header>
      <div className="main">
        <div className="map-wrap">
          <MapCanvas battle={battle} t={t} selectedId={selectedId} onSelect={setSelectedId} />
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
          <InfoPanel battle={battle} t={t} selectedId={selectedId} onClear={() => setSelectedId(null)} />
          <EventLog
            battle={battle}
            t={t}
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
