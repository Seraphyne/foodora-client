import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Contact from './Contact';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<Contact />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <Contact />
        </BrowserRouter>,
      );
    });
  });