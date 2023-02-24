import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <div className="buttons">
      {options.map(element => (
        <button
          key={element}
          className="btn"
          type="button"
          onClick={() => onLeaveFeedback(element)}
        >
          {element}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
