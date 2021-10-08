import PropTypes from 'prop-types';
import s from './Section.module.css';
function Section(props) {
  return (
    <section className={s.section}>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}
export default Section;
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.any,
};
