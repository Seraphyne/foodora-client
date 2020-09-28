import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RestaurantLanding from './RestaurantLanding';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<RestaurantLanding />', () => {
    it('renders without crashing', () => {
        mount(
        <BrowserRouter>
            <RestaurantLanding />
        </BrowserRouter>,
        );
    });
});