import "./LearningPage.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

export default function LearningPage() {
  const language = useSelector((state) => state.language.value);


  return (
    <div className="learning-page">
      <div className="learing-page__header">
        <div className="header__info">
          <div className="info__language">
            <img src={language.img} className="info__language-img" />
          </div>
        </div>
        <div className="header__unit-badge">
          <h1 className="unit-badge__number">SECTION 1, UNIT 1</h1>
          <h3 className="unit-badge__name">Form basic sentences</h3>
        </div>
      </div>
    </div>
  );
}
