import "./LanguageOption.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../store/languageSlice";

export default function LanguageOption() {
  const languages = {
    english: { languageName: "english", img: "./eng-flag.png" },
    polish: { languageName: "polish", img: "./pl-flag.png" },
    ukrainian: { languageName: "ukrainian", img: "./ua-flag.png" },
  };
  return (
    <div className="language-options">
      <h1>Choose language</h1>
      <div className="language-options__grid">
        {Object.entries(languages).map(([key, lang]) => (
          <LanguageCard key={key} languageProp={lang} />
        ))}
      </div>
    </div>
  );
}

export function LanguageCard({ languageProp }) {
  const language = useSelector((state) => state.language);
  const dispatch = useDispatch();

  return (
    <div className="language-card">
      <Link
        to="/dashboard"
        className=""
        onClick={() => dispatch(changeLanguage(languageProp))}
      >
        <img
          src={languageProp.img}
          className="language-card__flag-img"
          alt=""
        />
        <h2>{languageProp.languageName}</h2>
      </Link>
    </div>
  );
}
