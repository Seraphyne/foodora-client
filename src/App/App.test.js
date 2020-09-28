import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<App />', () => {
  it('renders without crashing', () => {
    mount(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
  });
});