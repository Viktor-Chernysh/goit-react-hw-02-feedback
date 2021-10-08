import Section from '../Section/Section';
function Notification(props) {
  return (
    <div>
      <Section title={props.message} />
    </div>
  );
}
export default Notification;
