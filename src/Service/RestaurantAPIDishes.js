import BASE_URL from "../config";
import { API_KEY } from "../config";

const RestaurantLandingAPIDishes = {

  //GET THE DISHES FROM THAT SPECIFIC RESTAURANT - RestaurantLanding.js
  getAllDishesFromRestaurantID(id) {
    return fetch(`${BASE_URL}/restaurant-dish-list/${id}`, {
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
    }).then(res =>
      (!res.ok) 
      ? res.json().then((event) => Promise.reject(event)) 
      : res.json()
    );
  },

  //TO DELETE A SPECIFIC DISH FROM THE SPECIFIC RESTAURANT - RestaurantLanding.js
  deleteDishFromRestaurant(dish_id, restaurant_id){
    return fetch(`${BASE_URL}/restaurant-dish-list/${restaurant_id}?dish_id=${dish_id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
    })
  },

  

  // TO UPDATE RESTAURANT PROFILE - RestaurantEdit.js
  async updateRestaurant(restaurant_id, rest) {
    const res = await  fetch(`${BASE_URL}/restaurant/${restaurant_id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(rest),
    }) 
    if(res.status === 204){
      return {}
    }
    else {
      const json = await res.json();
      return({ error: json.error }) 
    }
  },

};

export default RestaurantLandingAPIDishes;
