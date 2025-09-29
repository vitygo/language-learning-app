import "./LevelPage.css";
import { useSelector, useDispatch } from "react-redux";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function LevelPage() {
  const heart = useSelector((state) => state.heart.value);

  return (
    <div className="level">
      <div className="level__header">
        <div className="header__button">
          <Link to="/dashboard">
            <IoClose size="30px" color="grey" />
          </Link>
        </div>
        <div className="header__level-complete">
          <div className="level-complete__line"></div>
        </div>
        <div className="header__heart">
          <img src="../heart.png" className="heart__img" />
          <p className="elements__data data--heart">{heart}</p>
        </div>
      </div>
    </div>
  );
}
