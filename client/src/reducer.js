import {fromJS} from 'immutable'

const billFacials = [500, 200, 100, 50, 20, 10, 5]
const coinFacials = [2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
let items  = []
billFacials.forEach(facial => {
  items.push({
    facial,
    count: 0,
    type: 'BILL'
  })
})
coinFacials.forEach(facial => {
  items.push({
    facial,
    count: 0,
    type: 'COIN'
  })
})

/*
state is of the form: {
  items: [
    {
      facial: 500,
      count: 0,
      type: 'BILL'
    },
    ...
  ]
}
*/

const INITIAL_STATE = fromJS({items})

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'SET_ITEM_COUNT':
    const facial = action.facial
    const count = action.count
    
    const ind = state.get('items').findIndex(it => {
      return it.get('facial') === facial
    })
    
    return state.setIn(['items', ind, 'count'], count)
    
  default:
    return state
  }
}
