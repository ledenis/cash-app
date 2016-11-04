import {fromJS} from 'immutable'
import reducer from './reducer'

describe('reducer', () => {
  it('handles SET_ITEM_COUNT', () => {
    const state = fromJS({
      items: {
        500: {
          count: 0
        }
      }
    })
    
    const newState = reducer(state, {type: 'SET_ITEM_COUNT', facial: '500', count: 2})
    
    console.log(newState)
    
    expect(newState.getIn(['items', '500', 'count'])).toBe(2)
  })
})