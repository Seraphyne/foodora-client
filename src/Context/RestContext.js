import React from 'react';

const RestContext = React.createContext({
    restList: [],
    error: null,
    loading: false,
    saveRestName: () => {},
    setRestList: () => {},
    setError: () => {},
    clearError: () => {},
    onRegistrationSuccess: () => {},
    removeRest: () => {},
    setLoadingTrue: () => {},
    setLoadingFalse: () => {},
    handleRegSubmit: () => {},
});

export default RestContext;

export class RestContextProvider extends React.Component{
    state = {
        restList: [],
        error: null,
        loading: false,
    }; 

    saveRestName = (name) => {
      this.setState({ name, });
    };

    handleRegisteredState = (isRegistered) => {
      this.setState({ isRegistered, });
    };

    setRestList = (restList) => {
        this.setState({ restList });
    };

  setError = (error) => {
      console.lof(error);
      this.setState({ error });
  };
      
  clearError = () => {
    this.setState({ error: null });
  };

  removeRest = (id) => {
    const newRest = this.state.restList.filter((event) => event.id !== id);
    this.setState({ restList: newRest });
  };

  setLoadingTrue = () => {
      this.setState({ loading: true });
  };

  setLoadingFalse = () => {
      this.setState({ loading: false });
  };

  render(){
      const value ={
          restList: this.state.restList,
          error: this.state.error,
          setRestList: this.setRestList,
          setError: this.setError,
          clearError: this.clearError,
          removeRest: this.removeRest,
          setLoadingTrue: this.setLoadingTrue,
          setLoadingFalse: this.setLoadingFalse,
          saveRestName: this.saveRestName,
          handleRegisteredState: this.handleRegisteredState,
      }

    return (
        <RestContext.Provider value={value}>
          {this.props.children}
        </RestContext.Provider>
    );
  };
}