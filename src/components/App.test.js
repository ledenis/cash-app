import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {fromJS} from 'immutable'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App items={fromJS([])} />, div);
});
