import React from "react";

function LocationCard({ img, title, description }) {
  return (
    <figure>
      <img src={img} alt={`${title} image`} />
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </figure>
  );
}

export default LocationCard;
