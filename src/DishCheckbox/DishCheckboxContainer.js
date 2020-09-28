import React from "react";
import DishCheckbox from '../DishCheckbox/DishCheckbox';
import DishAPIService from "../Service/DishAPIService";
import './DishCheckbox.css';

export default class DishCheckboxContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedItems: new Map(),
      tags: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

//CHECKS IF CHECKBOX IS CHECKED OR NOT
  async handleChange(event) {
    const item = event.target.name;
    const isChecked = event.target.checked;
    await this.setState((prevState) => ({
      checkedItems: prevState.checkedItems.set(item, isChecked),
    }));

    let itemID = this.state.tags.filter(tag => tag.tag === item)[0].id;
    this.props.checkboxCallback(itemID, isChecked);
  }

  //SHOW ALL DISH TAGS FROM API
  async componentDidMount() {
    await DishAPIService.getAllTags().then((tags) => {
      this.setState({ tags: tags });
    });

    //INITIALIZE CHECKED ITEMS MAP WITH FALSE FOR ALL TAGS
    this.state.tags.forEach((e) => {
      this.setState((prevState) => ({
        checkedItems: prevState.checkedItems.set(e.tag, false),
      }));
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.tags.map((tag) => (
          <label key={tag.id} className="dish-tag-list chk-container">
            {tag.tag}
            {/* DISPLAYING DISH TAGS ON THE PAGE USING THE COMPONENT */}
            <DishCheckbox
              name={tag.tag}
              checked={this.state.checkedItems.get(tag.tag)}
              onChange={this.handleChange}
            />
          </label>
        ))}
      </React.Fragment>
    );
  }
}
