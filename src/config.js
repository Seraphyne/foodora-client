let BASE_URL;

if(process.env.NODE_ENV === 'development'){
  BASE_URL='http://localhost:8000';
}
else if(process.env.NODE_ENV === 'production'){
  BASE_URL=process.env.REACT_APP_BASE_URL
}

export default BASE_URL;
export const API_KEY=process.env.REACT_APP_BASE_URL;
export const TOKEN_KEY = 'token';
export const REST_ID_KEY = 'rest_id'; //identity';
export const REST_NAME_KEY = 'rest_name'; //food';
