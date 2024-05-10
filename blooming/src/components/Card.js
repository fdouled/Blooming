import React from 'react';
import { Link } from 'react-router-dom';
import image1 from  "../img/module1image.jpg";
// import image2 from  "../img/contraceptive.jpg";
// import image3 from  "../img/module3image.jpg";

export function Card(props) {
  const card = props.module;
  return (
    <div className="card" style={{backgroundColor: "#faf6ea", border: "1px solid #e9e2cf"}}>
      <img className="card-img-top" src={image1} alt="Card image cap"/>
      <div className="card-body">
        <h5 className="card-title">{card.title}</h5>
        <p className="card-text">{card.desc}</p>
        <Link to="/module-preview" state={card}> <button className='button'>Start Module</button></Link>
      </div>
    </div>
  );
}