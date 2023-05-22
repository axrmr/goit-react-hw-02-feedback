const FEEDBACK_TYPES = {
  good: 'good',
  neutral: 'neutral',
  bad: 'bad',
};

const FeedbackOptions = ({ onClick }) => {
  return (
    <div>
      <button onClick={() => onClick(FEEDBACK_TYPES.good)}>Good</button>
      <button onClick={() => onClick(FEEDBACK_TYPES.neutral)}>Neutral</button>
      <button onClick={() => onClick(FEEDBACK_TYPES.bad)}>Bad</button>
    </div>
  );
};

export default FeedbackOptions;
