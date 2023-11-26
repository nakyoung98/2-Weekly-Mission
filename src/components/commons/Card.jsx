import React from "react";
import "./Card.css";

const Card = ({ classNames }) => {
  return (
    <article className={`${classNames.join(" ")}`}>
      <CardImage />
      <CardInfo />
    </article>
  );
};

export default Card;

function CardImage() {
  return (
    <div className="card__image-container">
      <img
        className={"card__image"}
        src="https://picsum.photos/200/300"
        alt="random"
      />
    </div>
  );
}

function CardInfo() {
  return (
    <div className="card__info">
      <p className="card__created-before">10 minutess ago</p>
      <p className="card__content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quae.
      </p>
      <p className="card__created-at">2023.3.15</p>
    </div>
  );
}
