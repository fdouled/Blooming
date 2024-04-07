import React from 'react';

export function Topics(props) {
  // take csv file and map array of csv objects into Card components
  // similar to rendering senator rows in problem set 7 problem a
  const topicsList = ["Endometreosis", "STI prevention", "Breast health", "Menstrual cycle"];
  // console.log(props);
  // console.log(cardInfo);
  const topics = topicsList.map((topic) => {
    return <button>{topic}</button>
  });

  return (
    <div className='flex-container'>
      {topics}
    </div>
  );
}