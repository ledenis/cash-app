import React, { Component } from 'react';
import {connect} from 'react-redux'
import './App.css';

class App extends Component {
  render() {
    return (
      <ul>
          {this.props.items.map(it => {
            return (
              <li>
                <h3>{it.get('facial')} €</h3>
                <p>{it.get('count')}</p>
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

const AppContainer = connect(mapStateToProps)(App)

export {App, AppContainer}
