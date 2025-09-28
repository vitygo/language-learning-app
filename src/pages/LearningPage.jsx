import "./LearningPage.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function LearningPage() {
  const language = useSelector((state) => state.language.value);
  const coins = useSelector((state) => state.coin.value);
  const hearts = useSelector((state) => state.heart.value);
  const score = useSelector((state) => state.score.value);

  return (
    <div className="learning-page">
      <div className="learing-page__header">
        <div className="header__info">
          <div className="info__elements elements--language">
            <img src={language.img} className="elements__img img--language" />
            <p className="elements__data"></p>
          </div>
          <div className="info__elements elements--coins">
            <img src="./coin.png" className="elements__img" />
            <p className="elements__data data--coins">{coins}</p>
          </div>
          <div className="info__elements elements--score">
            <img src="./cup.png" className="elements__img" />
            <p className="elements__data data--score">{score}</p>
          </div>
          <div className="info__elements elements--heart">
            <img src="./heart.png" className="elements__img" />
            <p className="elements__data data--heart">{hearts}</p>
          </div>
        </div>
        <div className="header__unit-badge">
          <h1 className="unit-badge__number">SECTION 1, UNIT 1</h1>
          <h3 className="unit-badge__name">Form basic sentences</h3>
        </div>
      </div>
      <LevelBlock />
    </div>
  );
}

export function LevelBlock() {
  return (
    <div className="level-block">
      <Level />
      <Level moveLeft={"110px"} />
      <Level moveLeft={"10px"} />
      <Level moveLeft={"60px"} />
      <Level moveLeft={"10px"} />
    </div>
  );
}

export function Level({ moveLeft }) {
  return (
    <div className="level">
      <div className="level__button" style={{ left: moveLeft }}></div>
    </div>
  );
}
