import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className="statistics">
      <ul className="items">
        <li className="item">
          <p>Good: {good}</p>
        </li>
        <li className="item">
          <p>Neutral: {neutral}</p>
        </li>
        <li className="item">
          <p>Bad: {bad}</p>
        </li>
        <li className="item">
          <p>Total: {total}</p>
        </li>
        <li className="item">
          <p>Positive feedback: {positivePercentage}%</p>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
