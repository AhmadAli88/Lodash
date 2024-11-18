import _ from 'lodash';

const LodashExample = () => {
  const data = [1, 2, 3, 4, 5, 6];

  const result = _.chain(data)
    .map((x) => x * 2)
    .filter((x) => x > 5)
    .value();

  return (
    <div>
      <h3>Processed Data:</h3>
      <ul>
        {result.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default LodashExample;
