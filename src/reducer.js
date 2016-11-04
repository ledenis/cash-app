import {fromJS} from 'immutable'

let facials = ['500', '200', '100', '50', '20', '10', '5',
  '2', '1','0.5', '0.2', '0.1', '0.05', '0.02', '0.01']
let items  = {}
facials.forEach(facial => {
  items[facial] = {
    count: 0
  }
})

const INITIAL_STATE = fromJS({items})

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ITEM_COUNT':
    const facial = '' + action.facial
    return state.setIn(['items', facial, 'count'], action.count)
    
  default:
    return state
  }
}