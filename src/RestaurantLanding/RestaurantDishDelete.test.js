import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RestaurantDishDelete from './RestaurantDishDelete';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<RestaurantDishDelete />', () => {
    it('renders without crashing', () => {
        mount(
        <BrowserRouter>
            <RestaurantDishDelete />
        </BrowserRouter>,
        );
    });
});