import { useState } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

const SearchComponent = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // This function now updates the state immediately and debounces the onSearch logic
  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchQuery(value);  // Update the state immediately

    // Debounce the search logic to reduce the frequency of the actual search call
    _.debounce(() => onSearch(value), 500)();
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}  // Controlled input
        onChange={handleSearchChange}
        placeholder="Search"
      />
    </div>
  );
};

SearchComponent.propTypes = {
  onSearch: PropTypes.func.isRequired,  // PropTypes validation for onSearch function
};

export default SearchComponent;
