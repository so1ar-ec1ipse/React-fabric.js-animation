import Immutable from 'seamless-immutable'

export default Immutable({
  list: [
    {
      name: 'Group',
      type: 'group'
    },
    {
      name: 'Rect',
      type: 'rect',
      params: {
        width: 50,
        height: 50,
        fill: '#000000'
      }
    },
    {
      name: 'Text',
      type: 'textbox',
      params: {
        text: 'Text',
        fontFamily: 'Arial',
        width: 150,
        fontSize: 20,
        fontWeight: 400,
        fill: '#000000'
      }
    },
    {
      name: 'Image',
      type: 'img'
    }]
})