import React from "react";
import { Switch, Route } from "react-router-dom";
import AddDish from "../AddDish/AddDish";
import Search from '../Search/Search';
import RestaurantLanding from '../RestaurantLanding/RestaurantLanding';
import RestaurantEdit from "../RestaurantLanding/RestaurantEdit";

export default function MainRouter() {
  return (
    //ROUTES FOR RESTAURANT HOME, EDIT AND DELETE RESTAURANT INFO AND SEARCH DISH
    <div>
      <Switch>
        <Route exact path='/restaurant-home'>
          <RestaurantLanding />
          <AddDish />
        </Route>
        <Route exact path='/restaurant-home/edit'>
          <RestaurantEdit />
        </Route>
        <Route exact path='/'>
          <Search />
        </Route>
      </Switch>
    </div>
  );
}
