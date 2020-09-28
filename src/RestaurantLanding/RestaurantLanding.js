import React from "react";
import RestaurantLandingAPIDishes from "../Service/RestaurantAPIDishes";
import TokenService from "../Service/TokenService";
import RestaurantDishDelete from './RestaurantDishDelete';

export default class RestaurantLanding extends React.Component {
  constructor (props){
    super(props);
  
    this.state = {
    dishes: [],
    error: null,
    loading: false,
    restaurant_id: TokenService.getRestID(),
  }
  this.delete = this.delete.bind(this);
};

//GETS THE LIST OF ALL DISHES FROM THE RESTAURANT LOGGED
 getListDishesRestaurant = (event) => {
      event.preventDefault();
  };

  async componentDidMount(){
     let gotDishes = await RestaurantLandingAPIDishes.getAllDishesFromRestaurantID(
        this.state.restaurant_id,
    )

    this.setState({
        dishes: gotDishes,
    })
  }

  //DELETE THAT CALLS API TO DELETE THE DISHES FROM RESTAURANT
  delete = (id) => {
    RestaurantLandingAPIDishes
    .deleteDishFromRestaurant(id, this.state.restaurant_id)
    this.setState(prevState => ({
        dishes: prevState.dishes.filter(
        e => e.id !== id
    )}));
  };

  render(){
      return(
          <div>
      {/* SECOND PART - (restaurant-home) - DISPLAY ALL DISHES FROM RESTAURANT LOGGED*/}

            <h3 className='color'>List of Dishes: </h3>
              <div className='dishes-results'>
          {this.state.dishes.map((result) => (
            <div className='results-rest' key={result.id}>
              <label>
                <h4 className='rest-name'>
                  Name: <em>{result.name}</em>
                </h4>

                <h5>$ {result.price}</h5>
                <h5>
                  {result.tag_names.map((e) => {
                      return <div key={e} className="tag-names">#{e}</div>
                  })}
                </h5>
              

        {/* THIRD PART -  (restaurant-home) - CALLS THE COMPONENT TO ADD THE DELETE BUTTON- */}
                <RestaurantDishDelete 
                delete={this.delete}
                dish={result}/>
              </label>
            </div>
          ))}
        </div>
          </div>
      );
  }
}