
import _ from 'lodash';
import PropTypes from 'prop-types';

const ChunkedArray = ({ arr, chunkSize }) => {
  const chunked = _.chunk(arr, chunkSize);  // Chunking array into sub-arrays

  return (
    <div>
      <h3>Chunked Array:</h3>
      <ul>
        {chunked.map((chunk, index) => (
          <li key={index}>
            {JSON.stringify(chunk)}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Define PropTypes
ChunkedArray.propTypes = {
  arr: PropTypes.array.isRequired,      // Ensure arr is an array and required
  chunkSize: PropTypes.number.isRequired, // Ensure chunkSize is a number and required
};

export default ChunkedArray;
