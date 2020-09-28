import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<Main />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <Main />
        </BrowserRouter>,
      );
    });
  });