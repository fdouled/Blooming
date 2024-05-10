import React from 'react';
// import articles from './articles.json';

export function Topics(props) {
  // take csv file and map array of csv objects into Card components
  // similar to rendering senator rows in problem set 7 problem a
  const topicsList = ["Endometreosis", "STI prevention", "Breast health", "Menstrual cycle", "PCOS", "Sexual health education"];
  // const topicsList = articles.map(article => article.tag);
  // console.log(props);
  // console.log(cardInfo);
  const topics = topicsList.map((topic) => {
    return <span className='topic'>{topic}</span>
  });
  // const topics = topicsList.map((topic, index) => (
  //   <span key={index} className='topic'>{topic}</span>
  // ));

  return (
    <div className='flex-container'>
      {topics}
    </div>
  );
}