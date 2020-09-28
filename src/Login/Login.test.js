import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Login from './Login';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<Login />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <Login />
      </BrowserRouter>,
    );
  });
});
