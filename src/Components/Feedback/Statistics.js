import s from './Feedback.module.css';
import PropTypes from 'prop-types';

function Statistics(props) {
  const { state, total, posFeedback } = props;
  const stateFieldsArr = Object.keys(state);
  return (
    <>
      {stateFieldsArr.map(el => {
        return (
          <p className={s.statistics_item} key={el}>
            {el}:<span>{state[el]}</span>
          </p>
        );
      })}
      <p>
        Total:<span>{total}</span>
      </p>
      <p>
        Positive feedback:<span>{posFeedback}%</span>
      </p>
    </>
  );
}
export default Statistics;
Statistics.propTypes = {
  state: PropTypes.object,
  total: PropTypes.number.isRequired,
  posFeedback: PropTypes.number.isRequired,
};
