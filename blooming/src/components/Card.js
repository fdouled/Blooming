import React from 'react';
import { Link } from 'react-router-dom';
import module1Image from '../img/module1image.jpg';
import module2Image from '../img/module2image.jpg';
import module3Image from '../img/module3image.jpg';
import "../components/learn.css";


export function Card(props) {
  const card = props.module;
  let imageSource;

  if (card.title === "Menstrual Cycle") {
    imageSource = module1Image;
  } else if (card.title === "Contraception") {
    imageSource = module2Image;
  } else if (card.title === "Sexually Transmitted Infections/Diseases") {
    imageSource = module3Image;
  }

  return (
    <div className="card" style={{backgroundColor: "#faf6ea", border: "1px solid #e9e2cf"}}>
      <div className="card-img-top-container">
        <img className="card-img-top" src={imageSource} alt="Card image cap"/>
      </div>
      <div className="card-body">
        <h5 className="card-mod-title">{card.title}</h5>
        <p className="card-desc">{card.desc}</p>
        <Link to="/module-preview" state={card}> <button className='button-learn'>Start Module</button></Link>
      </div>
    </div>
  );
}
