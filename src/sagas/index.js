import { sagaMiddleware } from '../store'

import play from './play.saga'
import setVisibleFrame from './objects/setVisibleFrame.saga'
import setKeyframe from './objects/setKeyframe.saga'
import { prevKeyframe, nextKeyframe } from './objects/toKeyFrame.saga'
import initialKeyFrame from './objects/initialKeyFrame.saga'
import objClone from './objects/objClone.saga'

import cloneAsMask from './masks/cloneAsMask.saga'

import toolSelected from './control/toolSelected.saga'

sagaMiddleware.run(play)
sagaMiddleware.run(setVisibleFrame)
sagaMiddleware.run(setKeyframe)
sagaMiddleware.run(prevKeyframe)
sagaMiddleware.run(nextKeyframe)
sagaMiddleware.run(initialKeyFrame)
sagaMiddleware.run(objClone)
sagaMiddleware.run(cloneAsMask)
sagaMiddleware.run(toolSelected)
