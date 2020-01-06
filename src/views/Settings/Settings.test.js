import React from 'react';
import ReactDOM from 'react-dom';
import Setings from './Setings';

jest.mock('react-chartjs-2', () => ({
  Line: () => null,
}));

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Setings />, div);
  ReactDOM.unmountComponentAtNode(div);
})