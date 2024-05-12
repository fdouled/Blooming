import React, { useState } from 'react';
import '../components/topics.css';
import topicsData from '../components/modules.json';

export function Topics({ setSelectedTopics, selectedTopics }) {
  const topicsList = topicsData.map(topic => topic.title);
  const [selectedOption, setSelectedOption] = useState("");

  const handleTopicClick = (topic) => {
    setSelectedTopics((prevSelectedTopics) => {
      if (prevSelectedTopics.includes(topic)) {
        return prevSelectedTopics.filter((selectedTopic) => selectedTopic !== topic);
      } else {
        return [...prevSelectedTopics, topic];
      }
    });
  };

  const handleAddTopicsClick = () => {
    setSelectedOption("");
    setSelectedTopics([...selectedTopics, selectedOption]);
  };

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='flex-container'>
      {selectedTopics.map((topic) => ( 
        <span
          key={topic}
          className={`topic selected`}
          onClick={() => handleTopicClick(topic)}
        >
          {topic}
        </span>
      ))}
      <div className='add-topic'>
        <select value={selectedOption} onChange={handleSelectChange}>
          <option value="" >Select a topic</option>
          {topicsList.map((topic) => (
            <option key={topic} value={topic}>{topic}</option>
          ))}
        </select>
        <button className='add-button' onClick={handleAddTopicsClick} style={{borderRadius: '6px'}}>Add Topic</button>
      </div>
    </div>
  );
}
