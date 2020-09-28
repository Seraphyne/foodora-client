import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import RestaurantEdit from './RestaurantEdit';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({adapter: new Adapter()});
describe('<RestaurantEdit />', () => {
    it('renders without crashing', () => {
        mount(
        <BrowserRouter>
            <RestaurantEdit />
        </BrowserRouter>,
        );
    });
});