import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.list}>
      <li className={css.items}>Good: {good}</li>
      <li className={css.items}>Neutral: {neutral}</li>
      <li className={css.items}>Bad: {bad}</li>
      <li className={css.items}>Total: {total}</li>
      <li className={css.items}>Positive feedback: {positivePercentage} %</li>
    </ul>
  );
};

export default Statistics;
