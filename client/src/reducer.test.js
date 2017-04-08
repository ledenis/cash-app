import {fromJS} from 'immutable'
import reducer from './reducer'

describe('reducer', () => {
  it('handles SET_ITEM_COUNT', () => {
    // given
    const state = fromJS({
      items: [{
        facial: 500,
        count: 2
      }]
    })
    
    // when
    const newState = reducer(state, {type: 'SET_ITEM_COUNT', facial: 500, count: 54})
    
    // then
    let ind = state.get('items')
        .findIndex(i => i.facial === 500)
    const count = state.getIn(['items', ind, 'count'])
    
    ind = newState.get('items')
        .findIndex(i => i.facial === 500)
    const newCount = newState.getIn(['items', ind, 'count'])
    
    expect(count).toBe(2)
    expect(newCount).toBe(54)
  })
})