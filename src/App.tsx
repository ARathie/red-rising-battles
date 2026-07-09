import { useEffect, useRef, useState } from 'react'
import type { Selection } from './types'
import { battles } from './data'
import MapCanvas from './components/MapCanvas'
import TimelineControls from './components/TimelineControls'
import EventLog from './components/EventLog'
import InfoPanel from './components/InfoPanel'

/** Every battle plays end-to-end in ~35 real seconds at 1× speed. */
const PLAYTHROUGH_SECONDS = 35

/** Matches the CSS mobile breakpoint in styles.css. */
const MOBILE_QUERY = '(max-width: 900px)'

function useIsMobile(): boolean {
  const [mobile, setMobile] = useState(() => window.matchMedia(MOBILE_QUERY).matches)
  useEffect(() => {
    const mq = window.matchMedia(MOBILE_QUERY)
    const onChange = (e: MediaQueryListEvent) => setMobile(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])
  return mobile
}

export default function App() {
  const [battleId, setBattleId] = useState(battles[0].id)
  const battle = battles.find((b) => b.id === battleId) ?? battles[0]

  const [t, setT] = useState(0)
  const [playing, setPlaying] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [selected, setSelected] = useState<Selection | null>(null)
  const [followId, setFollowId] = useState<string | null>(null)
  /** Mobile only: the info panel lives in a slide-up sheet. */
  const [sheetOpen, setSheetOpen] = useState(false)
  const isMobile = useIsMobile()
  const frame = useRef<number>(0)
  const lastTime = useRef<number | null>(null)

  function switchBattle(id: string) {
    setBattleId(id)
    setT(0)
    setPlaying(false)
    setSelected(null)
    setFollowId(null)
    setSheetOpen(false)
  }

  function handleSelect(sel: Selection | null) {
    setSelected(sel)
    if (isMobile) setSheetOpen(sel !== null)
  }

  function follow(id: string | null) {
    setFollowId(id)
    if (id) {
      setSelected({ type: 'character', id })
      // on mobile, drop the sheet so the reticle is immediately visible
      if (isMobile) setSheetOpen(false)
    }
  }

  function openOverviewSheet() {
    setSelected(null)
    setSheetOpen(true)
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

  const infoPanel = (
    <InfoPanel
      battle={battle}
      t={t}
      selected={selected}
      followId={followId}
      onSelect={handleSelect}
      onFollow={follow}
      onBack={isMobile ? () => setSelected(null) : undefined}
    />
  )

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
        <button className="info-btn" onClick={openOverviewSheet}>
          ⓘ Info &amp; characters
        </button>
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
            onSelect={handleSelect}
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
          <EventLog
            battle={battle}
            t={t}
            followId={followId}
            onJump={(v) => {
              setT(v)
              setPlaying(false)
            }}
          />
          {!isMobile && infoPanel}
        </aside>
      </div>
      {isMobile && sheetOpen && (
        <>
          <div className="sheet-backdrop" onClick={() => setSheetOpen(false)} />
          <div className="info-sheet" role="dialog" aria-label="Battle information">
            <button className="sheet-close" onClick={() => setSheetOpen(false)}>
              ✕ close
            </button>
            {infoPanel}
          </div>
        </>
      )}
      <footer>
        An unofficial fan project. Red Rising © Pierce Brown — this recreation contains no book text;
        battle data compiled from the community wiki. Reconstructed positions/timing noted in-app.
      </footer>
    </div>
  )
}
