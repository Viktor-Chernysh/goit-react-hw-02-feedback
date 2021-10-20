import { Component } from 'react';
import Section from '../Section/Section';
import Notification from './Notification';
import Button from './Button';
import Statistics from './Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const { name } = e.target;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  totalElements = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  positiveFeedback = () => {
    return Math.round((this.state.good / this.totalElements()) * 100);
  };
  render() {
    const { handleClick, positiveFeedback, totalElements } = this;

    return (
      <>
        <Section title="Please leave feedback">
          <Button name="good" onClick={handleClick} />
          <Button name="neutral" onClick={handleClick} />
          <Button name="bad" onClick={handleClick} />
        </Section>
        {totalElements() > 0 ? (
          <Section title="Statistics">
            <Statistics
              state={this.state}
              total={totalElements()}
              posFeedback={positiveFeedback()}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </>
    );
  }
}
export default Feedback;
