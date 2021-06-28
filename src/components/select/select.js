import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Select = ({ handleOnChange }) => {
  const [items] = useState([
    { label: 'Choose an option', value: 'default' },
    { label: 'Highest to lowest', value: 'highest-to-lowest' },
    { label: 'Lowest to highest', value: 'lowest-to-highest' },
  ]);

  return (
    <div className="gf-select-component">
      <label htmlFor="sort" className="gf-select-label gf-h3">Sort by price:</label>
      <select 
        name="sort" 
        id="sort" 
        value={items.value} 
        onChange={(e) => handleOnChange(e.currentTarget.value)}
        className="gf-select-element"
      >
        {items.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
};

export default Select;
