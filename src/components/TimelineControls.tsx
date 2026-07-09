import type { BattleDefinition } from '../types'
import { formatTime } from '../engine/timeline'

interface Props {
  battle: BattleDefinition
  t: number
  playing: boolean
  speed: number
  onSeek: (t: number) => void
  onTogglePlay: () => void
  onSpeed: (s: number) => void
}

const SPEEDS = [0.5, 1, 2, 4]

export default function TimelineControls({
  battle,
  t,
  playing,
  speed,
  onSeek,
  onTogglePlay,
  onSpeed,
}: Props) {
  return (
    <div className="controls">
      <button className="play-btn" onClick={onTogglePlay}>
        {playing ? '⏸' : '▶'}
      </button>
      <span className="clock">{formatTime(t, battle.durationHours)}</span>
      <input
        type="range"
        min={0}
        max={battle.durationHours}
        step={battle.durationHours / 800}
        value={t}
        onChange={(e) => onSeek(Number(e.target.value))}
        className="scrubber"
      />
      <span className="clock dim">{formatTime(battle.durationHours, battle.durationHours)}</span>
      <div className="speeds">
        {SPEEDS.map((s) => (
          <button
            key={s}
            className={s === speed ? 'speed-btn active' : 'speed-btn'}
            onClick={() => onSpeed(s)}
          >
            {s}×
          </button>
        ))}
      </div>
    </div>
  )
}
