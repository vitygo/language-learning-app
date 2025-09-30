import "./LearningPage.css";
import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TbSwords } from "react-icons/tb";
import { Link } from "react-router-dom";
import LevelPage from "./LevelPage";
import { Outlet } from "react-router-dom";
import { startGame } from "../store/gameSlice";

const lessons = [
  {
    lessonNumber: 1,
    lessonSubject: "basic",
    lessonQuestions: [
      {
        id: 1,
        question: "Which one of these is “the man”?",
        correctAnswer: "czlowiek",
        AnswerOptions: ["dziewczyna", "czlowiek", "jablko", "maupa"],
      },
      {
        id: 2,
        question: "Which one of these is “the woman”?",
        correctAnswer: "dziewczyna",
        AnswerOptions: ["dziewczyna", "czlowiek", "maupa", "jablko"],
      },
      {
        id: 3,
        question: "Which one of these is “the apple”?",
        correctAnswer: "jablko",
        AnswerOptions: ["czlowiek", "jablko", "dziewczyna", "maupa"],
      },
      {
        id: 4,
        question: "Which one of these is “the monkey”?",
        correctAnswer: "maupa",
        AnswerOptions: ["jablko", "dziewczyna", "maupa", "czlowiek"],
      },
    ],
  },
  {
    lessonNumber: 2,
    lessonSubject: "animals",
    lessonQuestions: [
      {
        id: 1,
        question: "Which one of these is “the cat”?",
        correctAnswer: "kot",
        AnswerOptions: ["pies", "kot", "krowa", "mysz"],
      },
      {
        id: 2,
        question: "Which one of these is “the dog”?",
        correctAnswer: "pies",
        AnswerOptions: ["kot", "pies", "krowa", "mysz"],
      },
      {
        id: 3,
        question: "Which one of these is “the cow”?",
        correctAnswer: "krowa",
        AnswerOptions: ["kot", "pies", "krowa", "mysz"],
      },
    ],
  },
  {
    lessonNumber: 3,
    lessonSubject: "fruits",
    lessonQuestions: [
      {
        id: 1,
        question: "Which one of these is “banana”?",
        correctAnswer: "banan",
        AnswerOptions: ["jablko", "banan", "pomarancza", "gruszka"],
      },
      {
        id: 2,
        question: "Which one of these is “orange”?",
        correctAnswer: "pomarancza",
        AnswerOptions: ["banan", "jablko", "pomarancza", "gruszka"],
      },
      {
        id: 3,
        question: "Which one of these is “pear”?",
        correctAnswer: "gruszka",
        AnswerOptions: ["jablko", "banan", "gruszka", "pomarancza"],
      },
    ],
  },
  {
    lessonNumber: 4,
    lessonSubject: "colors",
    lessonQuestions: [
      {
        id: 1,
        question: "Which one of these is “red”?",
        correctAnswer: "czerwony",
        AnswerOptions: ["niebieski", "zielony", "czerwony", "zolty"],
      },
      {
        id: 2,
        question: "Which one of these is “blue”?",
        correctAnswer: "niebieski",
        AnswerOptions: ["niebieski", "czerwony", "zolty", "zielony"],
      },
      {
        id: 3,
        question: "Which one of these is “yellow”?",
        correctAnswer: "zolty",
        AnswerOptions: ["zielony", "czerwony", "zolty", "niebieski"],
      },
    ],
  },
  {
    lessonNumber: 5,
    lessonSubject: "numbers",
    lessonQuestions: [
      {
        id: 1,
        question: "Which one of these is “one”?",
        correctAnswer: "jeden",
        AnswerOptions: ["jeden", "dwa", "trzy", "cztery"],
      },
      {
        id: 2,
        question: "Which one of these is “two”?",
        correctAnswer: "dwa",
        AnswerOptions: ["trzy", "cztery", "dwa", "jeden"],
      },
      {
        id: 3,
        question: "Which one of these is “three”?",
        correctAnswer: "trzy",
        AnswerOptions: ["jeden", "trzy", "dwa", "cztery"],
      },
    ],
  },
];

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
      {lessons.map((lesson) => (
        <Level key={lesson.lessonNumber} lesson={lesson} />
      ))}
    </div>
  );
}

export function Level({ lesson }) {
  const game = useSelector((state) => state.game.value);

  const badgeRef = useRef(null);
  const [levelBadgeOpen, setLevelBadgeOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (badgeRef.current && !badgeRef.current.contains(event.target)) {
        setLevelBadgeOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const dispatch = useDispatch();

  return (
    <div className="level" ref={badgeRef}>
      <div className="level__button" onClick={() => setLevelBadgeOpen(true)}>
        <TbSwords size="40px" color="rgba(0, 0, 0, 0.254)" />
      </div>
      <div className={`level__badge ${levelBadgeOpen ? "active" : ""}`}>
        <h3 className="badge__text__title">{lesson.lessonSubject}</h3>
        <p className="badge__text">{`${lesson.lessonNumber}`}</p>
        <Link
          to="/dashboard/level"
          className="badge__button"
          onClick={() => dispatch(startGame(lesson))}
        >
          START
        </Link>
      </div>
    </div>
  );
}
