import { TOKEN_KEY, REST_ID_KEY, REST_NAME_KEY } from "../config";
import jsonwebtoken from "jsonwebtoken";

const TokenService = {

  //SAVES REST ID, RESTNAME AND TOKEN AT LOCAL STORAGE
  debugStorage() {
    return 'restId=[' + window.localStorage.getItem(REST_ID_KEY) + '], restName=[' + window.localStorage.getItem(REST_NAME_KEY) + '], token=[' + window.localStorage.getItem(TOKEN_KEY) + ']';
  },

  //SAVES TOKEN KEY
  saveAuthToken(token) {
    window.localStorage.setItem(TOKEN_KEY, token);
  },

  //SAVES RESTAURANT ID KEY
  saveRestId(restId) {
    window.localStorage.setItem(REST_ID_KEY, restId);
  },

  //SAVES RESTAURANT NAME
  saveRestName(restName) {
    window.localStorage.setItem(REST_NAME_KEY, restName);
  },

  //GETS THE TOKEN FROM LOCAL STORAGE
  getAuthToken() {
    return window.localStorage.getItem(TOKEN_KEY);
  },

  //DOES AUTH
  getAuthData() {
    let token = this.getAuthToken();
    let data = jsonwebtoken.decode(token, { complete: true });
    return data;
  },

  //GETS RESTAURANT ID FROM LOCAL STORAGE
  getRestID() {
    return window.localStorage.getItem(REST_ID_KEY);
  },

  //GETS RESTAURANT NAME FROM LOCAL STORAGE
  getRestName() {
    return window.localStorage.getItem(REST_NAME_KEY);
  },

  //REMOVES AUTH TOKEN  FROM LOCAL STORAGE
  clearAuthToken() {
    window.localStorage.removeItem(TOKEN_KEY);
  },

  //REMOVES RESTAURANT ID FROM LOCAL STORAGE
  clearRestId() {
    window.localStorage.removeItem(REST_ID_KEY);
  },

  //REMOVES RESTAURANT NAME FROM LOCAL STORAGE
  clearRestName() {
    window.localStorage.removeItem(REST_NAME_KEY);
  },

  //CHECKS THE AUTHENTICITY OF TOKEN
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },

  //RETURNING USER LOGIN AUTH
  makeBasicAuthToken(username, password) {
    return window.btoa(`${username}:${password}`);
  },
};

export default TokenService;
