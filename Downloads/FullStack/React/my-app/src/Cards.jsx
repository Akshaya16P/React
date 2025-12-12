import React from 'react';
import './Cards.css';

const Cards = ({ items, title }) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
      <div className="parent">
        {items.map((card, index) => (
          <div key={index} className="card">
            <div className="logo">
              <img src={card.image} alt={card.name} />
            </div>
            <div className="info">
              <div className="name">{card.name}</div>
              <div className="dept">{card.dept}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
