import * as constants from 'reducers/objects/objects.constants'
import * as visibleConstants from 'reducers/visible/visible.constants'
import * as timelineConstants from 'reducers/timeline/timeline.constants'
import { take, call, race } from 'redux-saga/effects'

import { canvas } from 'canvas/container'

export default function * () {
  while (true) {
    yield race({
      [constants.ADD_OBJ]: take(constants.ADD_OBJ),
      [constants.REMOVE_OBJ]: take(constants.REMOVE_OBJ),
      [constants.OBJ_PROPS_SETTED]: take(constants.OBJ_PROPS_SETTED),

      [visibleConstants.VISIBLE_FRAMES_UPDATED]: take(visibleConstants.VISIBLE_FRAMES_UPDATED),

      [timelineConstants.TIMELINE_FRAME_SETTED]: take(timelineConstants.TIMELINE_FRAME_SETTED)
    })
    yield call([canvas, canvas.renderCurrentFrame])
  }
}
