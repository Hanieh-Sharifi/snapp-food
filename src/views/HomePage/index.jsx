import React from "react";
import { useNavigate } from "react-router-dom";

import { VENDORS_PATH } from "../../configs/paths";

import "./HomePage.scss";

function HomePage() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate(VENDORS_PATH);
  }

  return (
    <button type="button" className="home-page__button" onClick={handleButtonClick}>
      HomePage
    </button>
  );
}

export default HomePage;
