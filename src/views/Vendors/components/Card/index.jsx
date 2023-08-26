import React from "react";

import { transformDescription } from "../../utils";

import "./Card.scss";

function Card({
  title,
  backgroundImage,
  logo,
  description,
  deliveryFee,
  rate,
}) {
  return (
    <div className="card">
      <header className="card__header">
        <img
          className="card__background-image"
          src={backgroundImage}
          alt={title}
        />
        <div className="card__logo-container">
          <img className="card__logo" src={logo} alt={title} />
        </div>
      </header>
      <div className="card__text-container">
        <div className="card__top-container">
          <div className="card__title">{title}</div>
          <div className="card__rate">{rate}</div>
        </div>
        <div className="card__description">
          {transformDescription(description)}
        </div>
        <div className="card__bottom-container">
          <div className="card__delivery-type">ارسال اکسپرس</div>
          <div className="card__delivery-price">{deliveryFee} تومان</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
