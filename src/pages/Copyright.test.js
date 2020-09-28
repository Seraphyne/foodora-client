import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Copyright from './Copyright';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<Copyright />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <Copyright />
        </BrowserRouter>,
      );
    });
  });