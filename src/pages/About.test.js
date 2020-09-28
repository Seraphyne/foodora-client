import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import About from './About';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<About />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <About />
        </BrowserRouter>,
      );
    });
  });