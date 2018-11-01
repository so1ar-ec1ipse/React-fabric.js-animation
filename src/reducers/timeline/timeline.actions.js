import { store } from 'store/'
import * as constants from './timeline.constants'

const { dispatch } = store

export const play = () => dispatch({ type: constants.TIMELINE_PLAY })
export const pause = () => dispatch({ type: constants.TIMELINE_PAUSE })

