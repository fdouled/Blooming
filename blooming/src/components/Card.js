import React from 'react';

export function Card(props) {
  const card = props.card;
  const imgPath = card.image;
  return (
    <div className="card">
      <img className="index-img" src={imgPath} alt={card.alt}/>
      <h2>{card.name}</h2>
      <p>{card.shortDesc}</p>
    </div>
  );
}