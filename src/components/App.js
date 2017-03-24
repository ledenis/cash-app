import React, {Component} from 'react'
import {connect} from 'react-redux'
import {PageHeader, Panel, Form, FormGroup, Row, Col, ControlLabel, FormControl, Well} from 'react-bootstrap'
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
      <Form horizontal>
        {this.getItemsByType(type).map(it => {
          const facial = it.get('facial')
          const countJsx = (
            <FormControl
              type="number"
              min="0"
              step="1"
              value={it.get('count')}
              onChange={(e) =>
                this.handleCountChange(facial, e.target.value)}
            />
          )
          return (
            <FormGroup>
              <Col componentClass={ControlLabel} sm={6}>
                {facial} €
              </Col>
              <Col sm={6}>
                {countJsx}
              </Col>
            </FormGroup>
          )
        })}
        <FormGroup>
          <Col componentClass={ControlLabel} sm={6}>Total</Col>
          <Col sm={6}>
            <FormControl.Static>
            {this.calcTotalByType(type).toFixed(2)} €
            </FormControl.Static>
          </Col>
        </FormGroup>
      </Form>
    )
  }
  
  render() {
    return (
      <div style={{maxWidth: 800, margin: 10}}>
        <PageHeader>Cash counter</PageHeader>
        <Row>
          <Col sm={4}>
            <Panel header="Bills">
              {this.renderItemsTable('BILL')}
            </Panel>
          </Col>

          <Col sm={4}>
            <Panel header="Coins">
              {this.renderItemsTable('COIN')}
            </Panel>
          </Col>
        
          <Col sm={4}>
            <Well>
              <FormGroup>
                <ControlLabel>
                  TOTAL
                </ControlLabel>
                <FormControl.Static>
                  {this.calcTotal().toFixed(2)} €
                </FormControl.Static>
              </FormGroup>
            </Well>
          </Col>
        </Row>
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
