import React from "react";
import "./Card.css";

const Card = ({ title, imageSrc, description }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <h2 className="card-title">{title}</h2>
      <p className="card-description">
        <a
          href="https://forms.gle/duYHgYfZt1nPqdCy6"
          style={{ color: "yellow" }}
        >
          {description}
        </a>
      </p>
    </div>
  );
};

export default Card;
