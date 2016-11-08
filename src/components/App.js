import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'

class App extends Component {
  // TODO: computed values from state should be done in another way
  // maybe use Reselect?
  calcTotal() {
    //TODO
    let total = 0
    this.props.items.forEach(it => {
      total += it.get('facial') * it.get('count')
    })
    return total
  }
  
  handleCountChange(facial, count) {
    this.props.setItemCount(facial, count)
  }
  
  render() {
    // for each item, render facial and count
    return (
      <div>
        <ul>
            {this.props.items.map(it => {
              const facial = it.get('facial')
              return (
                <li key={facial}>
                  <h3>{facial} €</h3>
                  <input value={it.get('count')}
                    onChange={(e) =>
                      this.handleCountChange(facial, e.target.value)}
                    type="number" min="0" step="1"
                  />
                </li>
              )
            })}
        </ul>
        <p>Total : {this.calcTotal()} €</p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    items: state.get('items')
  }
}

const AppContainer = connect(mapStateToProps, actionCreators)(App)

export {App, AppContainer}
