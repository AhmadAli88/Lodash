
import _ from 'lodash';
import PropTypes from 'prop-types';

const DeepCloneComponent = ({ user }) => {
  // Deep cloning the user object
  const clonedUser = _.cloneDeep(user);

  return (
    <div>
      <h3>Original User:</h3>
      <pre>{JSON.stringify(user, null, 2)}</pre>

      <h3>Cloned User:</h3>
      <pre>{JSON.stringify(clonedUser, null, 2)}</pre>
    </div>
  );
};

// Define PropTypes
DeepCloneComponent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    address: PropTypes.shape({
      city: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default DeepCloneComponent;
