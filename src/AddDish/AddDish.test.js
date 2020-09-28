import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AddDish from './AddDish';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<AddDish />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <AddDish />
      </BrowserRouter>,
    );
  });
});