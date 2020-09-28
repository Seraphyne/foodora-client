import React from "react";
import SearchAPIService from "../Service/SearchAPIService";
import SearchCheckboxContainer from "../SearchCheckbox/SearchCheckboxContainer";
import { withRouter } from "react-router-dom";
import './Search.css';

class Search extends React.Component {
  state = {
    tag: [],
    price: "0",
    name: "",
    searchResults: [],
    showFiveTagsMsg: false,
  };

  checkboxChecked = (itemID, itemChecked) => {
    let tempArray = this.state.tag;

    if (itemChecked) {
      tempArray.push(itemID);
    } else {
      tempArray = tempArray.filter((tagID) => tagID !== itemID);
    }

    this.setState({
      tag: tempArray,
      showFiveTagsMsg: tempArray.length > 5,
    });
  };

  renderSearchButton(){
    if(this.state.showFiveTagsMsg){
      return <button className="button" disabled>Search</button>
    }else{
      return <button className="button" onClick={this.handleSearchSubmit}>Search</button>
    }
  }

  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidUpdate() {

  }

  handleSearchSubmit = (event) => {

    event.preventDefault();

    this.setState({
    });

    SearchAPIService.getSearchResult({
      tag: this.state.tag,
      price: this.state.price,
      name: this.state.name,
    }).then((json) => {
      this.setState({
        searchResults: json,
      });
      this.props.history.push("/");
    });
  };

  tagValidation() {
    if(this.state.showFiveTagsMsg){
      return 'Tags can only be up to 5.';
    }else{
      return '';
    }
  }


  render() {
    return (
      <div className='search-container'>
        <h2 className='search-title'>Search for your dish</h2>
        <h4 className='search-title'>Choose the tags: (up to 5)</h4>
        <div className="error-tags">
          <span>{this.tagValidation()}</span>
        </div>
        <div className='search-chkbox'>
          <SearchCheckboxContainer checkboxCallback={this.checkboxChecked} />
        </div>

        <h4 className='search-title'>Choose a price range:</h4>
        <div className='search-range-price-form'> 
        <form id="search" onSubmit={this.handleSearchSubmit}>
            <fieldset>
                <legend />
              <div className='radio-button'> 
                <div className='radio-button-ch'>
                <input
                  type="radio"
                  id="0"
                  name="price"
                  value="0"
                  checked={this.state.price === "0"}
                  onChange={this.handleSearchChange}
                />
                <label htmlFor="0" className='radio-button-ch'> Any price</label>
                </div>

                <div className='radio-button-ch'>
                <input
                  type="radio"
                  id="1"
                  name="price"
                  value="1"
                  checked={this.state.price === "1"}
                  onChange={this.handleSearchChange}
                />
                <label htmlFor="1" className='radio-button-ch'> $1 - $10</label>
                </div>

                <div className='radio-button-ch'>
                <input
                  type="radio"
                  id="2"
                  name="price"
                  value="2"
                  checked={this.state.price === "2"}
                  onChange={this.handleSearchChange}
                />
                <label htmlFor="2" className='radio-button-ch'> $11 - $40</label>
                </div>

                <div className='radio-button-ch'>
                <input
                  type="radio"
                  id="3"
                  name="price"
                  value="3"
                  checked={this.state.price === "3"}
                  onChange={this.handleSearchChange}
                />
                <label htmlFor="3" className='radio-button-ch'> $41 - $60</label>
                </div>

                <div className='radio-button-ch'>
                <input
                  type="radio"
                  id="4"
                  name="price"
                  value="4"
                  checked={this.state.price === "4"}
                  onChange={this.handleSearchChange}
                />
                <label htmlFor="4" className='radio-button-ch'> $61 - $80</label>
                </div>

                <div className='radio-button-ch'>
                <input
                  type="radio"
                  id="5"
                  name="price"
                  value="5"
                  checked={this.state.price === "5"}
                  onChange={this.handleSearchChange}
                />
                <label htmlFor="5" className='radio-button-ch'> $81 or above</label>
                </div>
                </div>
            </fieldset>
          </form>
          </div>
                    {/* DISH NAME */}
          <h4 className='search-title'>Search for the dish's name:</h4>
          <form>
            <label htmlFor="search-crit" className='last-search-title'>n</label> 
            <input
              type="text"
              id="search-crit"
              name="name"
              value={this.state.name}
              onChange={this.handleSearchChange}
            />
          {/* SUBMIT BUTTON  */}
          {this.renderSearchButton()}
        </form>
        <div className="search-results">
          {this.state.searchResults.map((result) => (
            <div className='indiv-dish' key={result.id}>
            <label>
              <h4 className='dish-title'>
                <em>Name:</em> {result.name}
              </h4>

              <h5 className="rest-name">
                <em>Restaurant:</em> {result.restaurantname} 
              </h5>

              <h5>
                <em>Phone:</em> {result.phone}
              </h5>

              <h5>$ {result.price}</h5>

              <h5>
                {result.tag_names.map((e) => {
                  return <div key={e} className="tag-names">#{e}</div>
                })}
              </h5>
            </label>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withRouter(Search);