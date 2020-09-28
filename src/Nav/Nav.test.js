import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Nav from './Nav';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Nav />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Nav />
      </BrowserRouter>,
    );
  });
});