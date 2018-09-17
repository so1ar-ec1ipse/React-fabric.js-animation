import { canvas } from '../container'

import rect from './rect'

export default (obj, props) => {
  obj.id = props.id
  obj.update = ({ params }, oldProps, type) => {
    if (type === 'rect') rect(obj, params, oldProps.params)
    obj.angle = params.angle
    obj.left = params.left
    obj.top = params.top
    obj.scaleX = params.scaleX
    obj.scaleY = params.scaleY
    obj.flipX = params.flipX
    obj.originX = params.originX
    obj.originY = params.originY
    obj.width = params.width
    obj.height = params.height
    obj.setCoords()
    canvas.renderAll()
  }
  return obj
}
