import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'

class App extends Component {
  handleCountChange(facial, count) {
    this.props.setItemCount(facial, count)
  }
  
  render() {
    // for each item, render facial and count
    return (
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
