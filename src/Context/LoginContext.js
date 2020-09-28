import React from "react";

const LoginContext = React.createContext({
  loggedInRestaurantId: null,
  loggedInRestaurantName: null,
  login: () => {},
  logout: () => {},
});

export default LoginContext;
