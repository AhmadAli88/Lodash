/*eslint-disable*/
import { useState } from 'react';
import _ from 'lodash';

const SearchInput = () => {
  const [query, setQuery] = useState('');

  const handleChange = _.debounce((e) => {
    setQuery(e.target.value);
  }, 500);
console.log("query", query)
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};
export default SearchInput