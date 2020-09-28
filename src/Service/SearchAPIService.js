import BASE_URL from "../config";
import { API_KEY } from "../config";

const SearchAPIService = {

  //API THAT GETS THE NAME, PRICE AND TAG OR ALL DISHES TO SEARCH - Search.js
  getSearchResult(anObj) {
    return fetch(`${BASE_URL}/dishSearchResults?price=${anObj.price}&name=${anObj.name}&tag=[${anObj.tag}]`, {
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

  //API THAT DISPLAY ALL THE TAGS ON SCREEN - SearchCheckboxContainer.js
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

export default SearchAPIService;
