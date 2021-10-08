import s from './Feedback.module.css';
function Statistics(props) {
  const array = Object.keys(props.state);
  return (
    <>
      {array.map(ar => {
        return (
          <p className={s.statistics_item} key={ar}>
            {ar}:<span>{props.state[ar]}</span>
          </p>
        );
      })}
      <p>
        Total:<span>{props.total}</span>
      </p>
      <p>
        Positive feedback:<span>{props.posFeedback}%</span>
      </p>
    </>
  );
}
export default Statistics;
