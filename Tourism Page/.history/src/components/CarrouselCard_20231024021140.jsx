import React from "react";

function CarrouselCard({ img, title, text, close }) {
  return (
    <figure>
      <button>{close}</button>
      <img src={img} alt={`${title} example`} />
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </figure>
  );
}

export default CarrouselCard;
