import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Footer />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
  });
});