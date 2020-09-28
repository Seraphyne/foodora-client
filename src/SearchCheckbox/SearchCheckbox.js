import React from "react";
import PropTypes from "prop-types";
import './SearchCheckbox.css';

//SKELETON OF SEARCH CHECKBOXES
const SearchCheckbox = ({ name, checked = false, onChange }) => (
  <input type="checkbox" name={name} checked={checked} onChange={onChange} className='chk-box'/>
);

SearchCheckbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default SearchCheckbox;
