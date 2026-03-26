import React from "react";
import "./Card.css";

const Card = ({ title, img }) => {
  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={img} />
      </div>
    </div>
  );
};

export default Card;
