import {fromJS} from 'immutable'
import {Map} from 'immutable'
import reducer from './reducer'

describe('reducer', () => {
  it('handles SET_ITEM_COUNT', () => {
    // given
    const state = Map({
      items: Map([[
        500, Map({
          facial: 500,
          count: 2
        })
      ]])
    })
    
    // when
    const newState = reducer(state, {type: 'SET_ITEM_COUNT', facial: 500, count: 54})
    
    // then
    const count = state.getIn(['items', 500, 'count'])
    const newCount = newState.getIn(['items', 500, 'count'])
    
    expect(count).toBe(2)
    expect(newCount).toBe(54)
  })
})