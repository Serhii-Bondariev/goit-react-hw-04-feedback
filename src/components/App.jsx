import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleFeedback = type => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total ? (feedback.good / total) * 100 : 0;

  return (
    <ScopedCssBaseline>
      <Section title="Please leave feedback">
        <FeedbackOptions options={feedback} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
      </Section>
    </ScopedCssBaseline>
  );
};
