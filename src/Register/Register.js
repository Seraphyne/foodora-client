import React from "react";
import RestContext from '../Context/RestContext';
import AuthAPIService from "../Service/AuthAPIService";
import TokenService from '../Service/TokenService';
import ScaleLoader from "react-spinners/ScaleLoader";

export default class Register extends React.Component {
  state = {
    username: "",
    password: "",
    name: "",
    phone: "",
    error: null,
    loading: false,
  };

  static defaultProps = {
    onRegistrationSuccess: () => {},
  };

  static contextType = RestContext;

  //CHANGE THE FIELD FORMS WITHOUT HAVING TO REWRITE EVERY TIME
  handleRegChange = (event) =>
    this.setState({
      [event.target.name]: event.target.value,
    });

  //FUNCTION THAT TALKS TO THE API TO SUBMIT THE RESTAURANT INFO
  //USERNAME, PASSWORD, NAME AND PHONE
  //THIS FUNCTION TALKS TO THE API, AUTHENTICATION AND CONTEXT
  handleRegSubmit = (event) => {
    event.preventDefault();

    this.setState({
      loading: true,
    });

    AuthAPIService.postRest({
      username: this.state.username,
      password: this.state.password,
      name: this.state.name,
      phone: this.state.phone,
    }).then((data) => {
      this.setState({
        loading: false,
        username: '',
        password: '',
        name: '',
        phone: '',
      })      
      TokenService.saveAuthToken(data.authToken);
      TokenService.saveRestId(data.restaurant_id);
      this.context.saveRestName(data.name);
      this.props.onRegistrationSuccess();
      this.context.handleRegisteredState(true);
      this.props.history.push('/restaurant-home');
    }).catch((res) => {
      this.setState({ error: res.error, loading: null });
    });
  };

  render() {
    const { error, loading } = this.state;
    return (
      <div>
        <div id="register">
          {/* DISPLAY OF THE FORM WITH THE FIELDS TO BE REGISTERED */}
          <h3>Restaurant Register</h3>
          <form className="register-form" onSubmit={this.handleRegSubmit}>
            <div role="alert">
              {/* ERROR SHOWING ON SCREEN */}
              {error && <p className="error">{error}</p>}
            </div>
            <div className="username">
              <label htmlFor="register-form-username">Username:</label>
              <input
                type="text"
                name="username"
                id="register-form-username"
                value={this.state.username}
                onChange={this.handleRegChange}
              ></input>
            </div>
            <div className="password">
              <label htmlFor="register-form-password">Password:</label>
              <input
                type="password"
                name="password"
                id="register-form-password"
                value={this.state.password}
                onChange={this.handleRegChange}
              ></input>
            </div>
            <div className="restname">
              <label htmlFor="register-form-restname">Name:</label>
              <input
                type="text"
                name="name"
                id="register-form-restname"
                value={this.state.name}
                onChange={this.handleRegChange}
              ></input>
            </div>
            <div className="phone">
              <label htmlFor="register-form-phone">Phone:</label>
              <input
                type="text"
                name="phone"
                id="register-form-phone"
                value={this.state.phone}
                onChange={this.handleRegChange}
              ></input>
            </div>
            <button className="button" onSubmit={this.handleRegSubmit}>
              Register
            </button>

            {/* UTILIZING A REACT SPINNER ON LOADING */}
            {loading && (
          <div className="loading-screen">
            <ScaleLoader size={35} color={"#ae2027"} loading={loading} />
          </div>
        )}
          </form>
        </div>
      </div>
    );
  }
}
