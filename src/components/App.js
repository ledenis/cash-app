import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as actionCreators from '../action_creators'

class App extends Component {
  // TODO: computed values from state should be done in another way
  // maybe use Reselect?
  calcTotal() {
    let total = 0
    this.props.items.forEach(it => {
      total += it.get('facial') * it.get('count')
    })
    return total
  }
  
  calcTotalByType(type) {
    let total = 0
    this.getItemsByType(type).forEach(it => {
      total += it.get('facial') * it.get('count')
    })
    return total
  }
  
  getItemsByType(type) {
    return this.props.items.filter(it => it.get('type') === type)
  }
  
  handleCountChange(facial, count) {
    this.props.setItemCount(facial, count)
  }
  
  renderItemsTable(type) {
    // for each item, render facial, and count (input)
    return (
      <table>
        <thead>
          <tr>
            <th>Facial value</th>
            <th>Count</th>
          </tr>
        </thead>
          <tbody>
            {this.getItemsByType(type).map(it => {
              const facial = it.get('facial')
              const countJsx = <input value={it.get('count')}
                    onChange={(e) =>
                      this.handleCountChange(facial, e.target.value)}
                    type="number" min="0" step="1"
                  />
              return (
                <tr key={facial}>
                  <td>{facial} €</td>
                  <td>{countJsx}</td>
                </tr>
              )
            })}
          </tbody>
      </table>
    )
  }
  
  render() {
    return (
      <div>
        <h4>Bills</h4>
        {this.renderItemsTable('BILL')}
        <p>Total : {this.calcTotalByType('BILL').toFixed(2)} €</p>
        <h4>Coins</h4>
        {this.renderItemsTable('COIN')}
        <p>Total : {this.calcTotalByType('COIN').toFixed(2)} €</p>
        <p><strong>TOTAL : {this.calcTotal().toFixed(2)} €</strong></p>
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
