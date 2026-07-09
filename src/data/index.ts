import type { BattleDefinition } from '../types'
import { ilium } from './ilium'
import { luna } from './luna'
import { ladon } from './ladon'
import { phobos } from './phobos'

/** All battles, chronological. */
export const battles: BattleDefinition[] = [ilium, luna, ladon, phobos]
