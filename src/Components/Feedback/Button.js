import s from './Feedback.module.css';
function Button(props) {
  return (
    <button
      className={s.button}
      type="button"
      name={props.name}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
}
export default Button;
