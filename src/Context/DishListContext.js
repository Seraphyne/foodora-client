import React from "react";

const DishContext = React.createContext({
  name: '',
  price: 'price',
  tag_id: [],
  loading: false,
  error: null,
  saveDishName: () => {},
  savePrice: () => {},
  saveTagList: () => {},
  handleLoginState: () => {},
  removeDish: () => {},
  setError: () => {},
  clearError: () => {},
  setDishAddTrue: () => {},
  setDishAddFalse: () => {},
});

export default DishContext;

export class DishProvider extends React.Component {
  state = {
    name: '',
    price: '',
    tag_id: [],
    loading: false,
    error: null,
  };

  saveDishName = (name) => {
    this.setState({ name, });
  };

  savePrice = (price) => {
    this.setState({ price, });
  };

  saveTagList = (tagList) => {
    this.setState({ tagList, });
  };

  handleLoginState = (isLogged) => {
    this.setState({ isLogged, });
  };

  remoteDish = (id) => {
    const remDish = this.state.saveDishName.filter((event)=> event.id !== id);
    this.setState({ name: remDish});
  };

  setError = (error) => {
    console.log(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  setDishAddTrue = () => {
    this.setState({ dishAdd: true });
  };

  setDishAddFalse = () => {
    this.setState({ dishAdd: false });
  };

  render() {
    const value = {
      name: this.state.name,
      price: this.state.price,
      tag_id: this.state.tag_id,
      error: this.state.error,
      saveDishName: this.saveDishName,
      savePrice: this.savePrice,
      saveTagList: this.saveTagList,
      handleLoginState: this.handleLoginState,
      removeDish: this.remoteDish,
      setError: this.setError,
      clearError: this.clearError,
      setDishAddTrue: this.setDishAddTrue,
      setDishAddFalse: this.setDishAddFalse,
    };
    return (
      <DishContext.Provider value={value}>
        {this.props.children}
      </DishContext.Provider>
    );
  }
}

