import React from 'react';
// import articles from './articles.json';

export function Topics({ setSelectedTopics, selectedTopics }) {
  const topicsList = ["Endometreosis", "STI prevention", "Breast health", "Menstrual cycle", "PCOS", "Sexual health education"];

  const handleTopicClick = (topic) => {
    setSelectedTopics((prevSelectedTopics) => {
      if (prevSelectedTopics.includes(topic)) {
        return prevSelectedTopics.filter((selectedTopic) => selectedTopic !== topic);
      } else {
        return [...prevSelectedTopics, topic];
      }
    });
  };

  const topics = topicsList.map((topic) => (
    <span
      key={topic}
      className={`topic ${selectedTopics.includes(topic) ? "selected" : ""}`}
      onClick={() => handleTopicClick(topic)}
    >
      {topic}
    </span>
  ));

  return (
    <div className='flex-container'>
      {topics}
    </div>
  );
}