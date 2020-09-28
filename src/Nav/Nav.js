import React from "react";
import { Link } from "react-router-dom";
import LoginContext from "../Context/LoginContext";

export default class Nav extends React.Component {
  static contextType = LoginContext;

//RENDERS ON THE FIRST PAGE THE NAME OF THE RESTAURANT ONCE IT'S LOGGED IN. CLICKABLE TO SEE IT'S INFO
  renderRestName(restName) {
    return <div>{`Welcome, '${restName}'!`}</div>;
  }

//RESTAURANT ACTIONS THAT WILL BE MOVE
  renderRestActions(){
    return(
      <div>
        <Link to={'/restaurant-home/edit'}>
          <button className="button">Update</button>
        </Link>
      </div>
    );
  }

  render() {
    return (
      <nav>
        <div className="welcome">
          <h3 className='rest-title'>Restaurant
    {/* INVOLVING CONTEXT AROUND THE LOGGING LINKS */}
          <LoginContext.Consumer>
            {({ loggedInRestaurantId, loggedInRestaurantName, logout }) => {
              if (loggedInRestaurantId == null) {
                // ACTUAL LINKS/PATH LOGIN AND LOGOUT
                return (
                  <Link className="welcome" to={"/login"}>
                    <div>Login</div>
                  </Link>
                );
              } else {
                return (
                  <Link className="welcome" onClick={logout} to={"/"}>
                    <div>Logout</div>
                  </Link>
                );
              }
            }}
          </LoginContext.Consumer>

          {/* LINK/PATH TO REGISTER A NEW RESTAURANT */}
          <LoginContext.Consumer>
          {({ loggedInRestaurantId }) => {
              if (loggedInRestaurantId == null) {
                // ACTUAL LINKS/PATH RATHER IT WILL SHOW REGISTER OR NOT
                return (
                <Link className="welcome" to={"/register"}>
                  <div>Register</div>
                </Link>
                );
              } else {
                return (
                  <div></div>
                );
              }
            }}
          </LoginContext.Consumer>


          {/* CHECK IF RESTAURANT IS LOGGED IN, IN ORDER TO SHOW THE WELCOME MESSAGE */}
          <LoginContext.Consumer>
            {({ loggedInRestaurantId, loggedInRestaurantName }) => {
              if (loggedInRestaurantId != null) {
                return (
                  <div>
                  <Link className="welcome" to={"/restaurant-home"}>
                    {this.renderRestName(loggedInRestaurantName)}
                  </Link>
                  {this.renderRestActions()}
                  </div>
                );
              } else {
                return <div />;
              }
            }}
          </LoginContext.Consumer>
          </h3>
        </div>
      </nav>
    );
  }
}
