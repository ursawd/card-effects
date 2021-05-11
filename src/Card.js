import React from "react";
const Card = ({ image, cardsLeft }) => {
  return (
    <div>
      <img src={image} alt="random card" />
      <p>Cards remaining {cardsLeft}</p>
    </div>
  );
};
export default Card;
