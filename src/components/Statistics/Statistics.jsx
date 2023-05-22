import Notification from '../Notification/Notification';
import Wrapper from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <Wrapper>
      <h2>Statistics</h2>
      {total ? (
        <>
          <div>Good: {good}</div>
          <div>Neutral: {neutral}</div>
          <div>Bad: {bad}</div>
          <div>Total: {total}</div>
          <div>Positive feedback: {positivePercentage}</div>
        </>
      ) : (
        <Notification message='No feedback!' />
      )}
    </Wrapper>
  );
};

export default Statistics;
