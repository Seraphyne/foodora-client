import React from 'react';
import TokenService from "../Service/TokenService";
import { Route, Switch, useHistory} from 'react-router-dom';
import Register from '../Register/Register';
import Nav from "../Nav/Nav";
import Login from './Login';
import LoginContext from '../Context/LoginContext';


export default class FullLogin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          loggedInRestaurantId: null,
          loggedInRestaurantName: null,
          login: this.doLogin,
          logout: this.doLogout,
        };
      }
    
      //MAKE LOGIN
      doLogin = (restId, restName) => {
        this.setState({
          loggedInRestaurantId: restId,
          loggedInRestaurantName: restName,
        }, 
        );
      };
    
      //MAKE LOGOUT
      doLogout = () => {
        TokenService.clearAuthToken();
        TokenService.clearRestId();
        TokenService.clearRestName();
        this.setState({
          loggedInRestaurantId: null,
          loggedInRestaurantName: null,
        }, this.debugStuff);
      };
    
      componentDidMount(){
        this.setState({
          loggedInRestaurantId: TokenService.getRestID(),
          loggedInRestaurantName: TokenService.getRestName()
        }, this.debugStuff);
      }
      render() {
          return(
            // INVOLVING CONTEXT AND ROUTES TO THE RESPECTIVE PATHS 
        <LoginContext.Provider value={this.state}>
          <nav>
            <div>
              <Switch>
                <Route exact path="/">
                  <Nav />
                </Route>
                    <Route exact path="/login">
                      <Login
                        currentUserId={this.state.loggedInRestaurantId}
                        loginAction={this.doLogin}
                        history={useHistory}
                      />
                    </Route>
                  <Route exact path="/register" component={Register} />
              </Switch>
            </div>
          </nav>
        </LoginContext.Provider>
        );
      }
}