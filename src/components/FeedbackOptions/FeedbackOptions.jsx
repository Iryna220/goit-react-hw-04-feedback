import css from './FeedbackOptions.module.css';
const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={css.buttons}>
      {options.map(option => {
        return (
          <button
            className={css.btn}
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            <span>{option}</span>
          </button>
        );
      })}
    </div>
  );
};

export default FeedbackOptions;
