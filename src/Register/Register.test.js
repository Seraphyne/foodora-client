import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Register from './Register';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Register />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Register />
      </BrowserRouter>,
    );
  });
});