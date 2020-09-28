import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Search from './Search';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Search />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Search />
      </BrowserRouter>,
    );
  });
});