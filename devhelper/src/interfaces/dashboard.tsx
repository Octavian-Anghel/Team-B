import React, { useState } from 'react';
import { Resource } from "./Resource";

const Dashboard: React.FC = () => {
 
    //put in actual sources (not done yet)
  const resources: Resource[] = [
    new Resource('Official Documentation', { type: 'documentation', url: 'https://docs.example.com' }),
    new Resource('Community Forum', { type: 'forum', url: 'https://community.example.com' }),
    new Resource('Tutorials', { type: 'tutorial', url: 'https://tutorials.example.com' })
  ];

  // State for the goal setting feature
  const [goal, setGoal] = useState('');
  const [goalType, setGoalType] = useState<'long-term' | 'short-term'>('long-term');
  const [currentGoal, setCurrentGoal] = useState('');

  // Function to handle goal type change
  const handleGoalTypeChange = (type: 'long-term' | 'short-term') => {
    setGoalType(type);
  };

  // Function to handle goal change
  const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(event.target.value);
  };

  // Function to handle form submit
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCurrentGoal(goal);
    setGoal('');
  };

  return (
    <div className="dashboard">
      <h1>Resources</h1>
      <ul>
        {resources.map((resource, index) => (
          <li key={index}>
            <a href={resource.link.url} target="_blank" rel="noopener noreferrer">
              {resource.name}
            </a>
          </li>
        ))}
      </ul>

      <h2>Set Your Goal</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="checkbox"
            id="short-term"
            checked={goalType === 'short-term'}
            onChange={() => handleGoalTypeChange('short-term')}
          />
          <label htmlFor="short-term">Short-term</label>

          <input
            type="checkbox"
            id="long-term"
            checked={goalType === 'long-term'}
            onChange={() => handleGoalTypeChange('long-term')}
          />
          <label htmlFor="long-term">Long-term</label>
        </div>

        <div>
          <input
            type="text"
            value={goal}
            onChange={handleGoalChange}
            placeholder="Type your goal here"
          />
        </div>

        <button type="submit">Set Goal</button>
      </form>

      {currentGoal && (
        <div>
          <h3>Your Current Goal:</h3>
          <p>{currentGoal} ({goalType})</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
