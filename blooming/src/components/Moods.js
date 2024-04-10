import React from 'react';

export function Moods(props) {
  // take csv file and map array of csv objects into Card components
  // similar to rendering senator rows in problem set 7 problem a
  const topicsList = ["Work", "School","Sleep", "Weather", "Art", "News", "Finances", "Hormones", "Food", "Friends", "Health", "Hobbies"];
  // console.log(props);
  // console.log(cardInfo);
  const topics = topicsList.map((topic) => {
    return <button className='moods'>{topic}</button>
  });

  return (
    <div className='flex-container'>
      {topics}
    </div>
  );
}