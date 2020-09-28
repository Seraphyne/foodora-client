import React from "react";
import PropTypes from "prop-types";
import './DishCheckbox.css';

//SKELETON OF DISH CHECKBOXES 
const DishCheckbox = ({ name, checked = false, onChange }) => (
  <input type="checkbox" name={name} checked={checked} onChange={onChange} className='chk-box' />
);

DishCheckbox.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

export default DishCheckbox;
