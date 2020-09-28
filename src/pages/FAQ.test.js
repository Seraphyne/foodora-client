import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FAQ from './FAQ';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});
describe('<FAQ />', () => {
    it('renders without crashing', () => {
      mount(
        <BrowserRouter>
          <FAQ />
        </BrowserRouter>,
      );
    });
  });