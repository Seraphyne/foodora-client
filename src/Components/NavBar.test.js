import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<NavBar />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <NavBar />
      </BrowserRouter>,
    );
  });
});