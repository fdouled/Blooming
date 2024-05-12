import React, { useState } from 'react';

export function Moods(props) {
  const [selectedMood, setSelectedMood] = useState(null);

  const topicsList = ["Work", "School", "Sleep", "Weather", "Art", "News", "Finances", "Hormones", "Food", "Friends", "Health", "Hobbies"];
  
  const handleMoodClick = (mood) => {
    setSelectedMood(mood);
  };

  const topics = topicsList.map((topic) => (
    <button key={topic} className={selectedMood === topic ? 'moods selected' : 'moods'} onClick={() => handleMoodClick(topic)}>
      {topic}
    </button>
  ));

  return (
    <div className='flex-container'>
      {topics}
    </div>
  );
}
