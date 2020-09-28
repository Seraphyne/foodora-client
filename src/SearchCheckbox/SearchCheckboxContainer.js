import React from "react";
import SearchCheckbox from "../SearchCheckbox/SearchCheckbox";
import SearchAPIService from "../Service/SearchAPIService";
import './SearchCheckbox.css';

export default class SearchCheckboxContainer extends React.Component {
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

  //SHOW ALL SEARCH TAGS FROM API
  async componentDidMount() {
    await SearchAPIService.getAllTags().then((tags) => {
      this.setState({ tags: tags });
    });

    
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
          <label key={tag.id} className="search-tag-list chk-container">
            {tag.tag}
            {/* DISPLAYING SEARCH TAGS ON THE PAGE USING THE COMPONENT */}
            <SearchCheckbox
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

