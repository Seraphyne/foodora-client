import React from "react";
import LoginContext from "../Context/LoginContext";
import ScaleLoader from "react-spinners/ScaleLoader";
import AuthAPIService from "../Service/AuthAPIService";
import TokenService from "../Service/TokenService";
import { Redirect } from "react-router-dom";


export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
    loading: false,
  };

  static defaultProps = {
    onLoginSuccess: () => {},
  };

  static contextType = LoginContext;

  handleRestChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  handleRestSubmit = (event) => {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    AuthAPIService.postLogin({
      username: this.state.username,
      password: this.state.password,
    }).then((data) => {
      this.setState({
        loading: false,
        username: "",
        password: "",
      });
      TokenService.saveAuthToken(data.authToken);
      TokenService.saveRestId(data.restaurant_id);
      TokenService.saveRestName(data.name);
      this.props.loginAction(data.restaurant_id, data.name);
    }).catch((res) => {
      this.setState({ error: res.error, loading: null });
    });
  };

  render() {
    const { error, loading } = this.state;
    if (this.props.currentUserId != null) {
      return <Redirect to="/" />;
    }
    
    return (
      <div id="login" className="tabContent">
          <h3>Restaurant Login</h3>
          <form className="login-form" onSubmit={this.handleRestSubmit}>
            <div role="alert">{error && <p className="error">{error}</p>}</div>
            <div className="username">
              <label htmlFor="login-form-username">Username: </label>
              <input
                type="text"
                name="username"
                id="login-form-username"
                value={this.state.username}
                onChange={this.handleRestChange}
              ></input>
            </div>
            <div className="password">
              <label htmlFor="login-form-password">Password: </label>
              <input
                type="password"
                name="password"
                id="login-form-password"
                value={this.state.password}
                onChange={this.handleRestChange}
              ></input>
            </div>
            <button 
            className='button' 
            onSubmit={this.handleRestSubmit}
            >
              Login
            </button>
            {loading && (
              <div className="loading-screen">
                <ScaleLoader size={35} color={"#ae2027"} loading={loading} />
              </div>
            )}
          </form>
          <div className='mockCred'>
              <h2><em>Mock Credentials</em></h2>
              <h4>Username: admin</h4>
              <h4> Password: Password1</h4>
          </div>
        </div>
    );
  }
}
