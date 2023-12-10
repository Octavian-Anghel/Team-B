import React, { useState } from 'react';

interface Goal {
  id: number;
  name: string;
  type: 'short-term' | 'long-term';
  progress: number;
}

interface SkillLog {
  id: number;
  skillName: string;
  practiceDate: string;
}

const CodingGoalsComponent: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [skillsLog, setSkillsLog] = useState<SkillLog[]>([]);
  const [newGoal, setNewGoal] = useState<string>('');
  const [newSkill, setNewSkill] = useState<string>('');

  const addGoal = (type: 'short-term' | 'long-term') => {
    if (newGoal.trim() === '') return;
    const newGoalObject: Goal = {
      id: goals.length + 1,
      name: newGoal,
      type,
      progress: 0,
    };
    setGoals([...goals, newGoalObject]);
    setNewGoal('');
  };

  const addSkillLog = () => {
    if (newSkill.trim() === '') return;
    const newSkillLog: SkillLog = {
      id: skillsLog.length + 1,
      skillName: newSkill,
      practiceDate: new Date().toLocaleDateString(),
    };
    setSkillsLog([...skillsLog, newSkillLog]);
    setNewSkill('');
  };

  return (
    <div>
      <h1>Coding Goals</h1>
      <div>
        <h2>Goals</h2>
        <div>
          <input
            type="text"
            placeholder="Enter a coding goal"
            value={newGoal}
            onChange={(e) => setNewGoal(e.target.value)}
          />
          <button onClick={() => addGoal('short-term')}>Add Short-term Goal</button>
          <button onClick={() => addGoal('long-term')}>Add Long-term Goal</button>
        </div>
        <ul>
          {goals.map((goal) => (
            <li key={goal.id}>
              {goal.name} ({goal.type}) - Progress: {goal.progress}%
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Skill Log</h2>
        <div>
          <input
            type="text"
            placeholder="Enter a skill you practiced"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
          />
          <button onClick={addSkillLog}>Add Skill Log</button>
        </div>
        <ul>
          {skillsLog.map((log) => (
            <li key={log.id}>
              {log.skillName} - Practiced on {log.practiceDate}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CodingGoalsComponent;

