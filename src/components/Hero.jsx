import "./Hero.css";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__left-side">
        <img className="right-side__image" src="./bunnys.png" />
      </div>
      <div className="hero__right-side">
        <h1>English Made Simple Practice Every Day</h1>
        <div className="hero__buttons">
          <button className="buttons__btn">
            <Link className='btn__link' to="/language">GET STARTED</Link>
          </button>
          <button className="buttons__btn buttons__btn--white">SOME BUTTON</button>
        </div>
      </div>
    </div>
  );
}
