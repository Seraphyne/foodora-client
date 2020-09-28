import BASE_URL from "../config";
import { API_KEY } from "../config";

const DishAPIService = {
  //USED TO POST A NEW DISH BY A LOGGED RESTAURANT - AddDish.js
  async postDish(dish) {    
    const res = await fetch(`${BASE_URL}/dish`, {
      method: "POST",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(dish),
    })
    return (!res.ok)
        ? res.json().then((event) => Promise.reject(event))
        : res.json()
  },

  //GETTING ALL TAGS FROM THE BACKEND TO DISPLAY - DishCheckboxContainer.js
  getAllTags() {
    return fetch(`${BASE_URL}/tag`, {
      method: "GET",
      headers: {
        'Authorization': `Bearer ${API_KEY}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    }).then((res) =>
      !res.ok ? res.json().then((event) => Promise.reject(event)) : res.json()
    );
  },
};

export default DishAPIService;
