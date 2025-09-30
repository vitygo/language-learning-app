import "./LevelPage.css";
import { useSelector, useDispatch } from "react-redux";
import { startGame } from "../store/gameSlice";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { decrement } from "../store/heartSlice";
import toast, { Toaster } from "react-hot-toast";

export default function LevelPage() {
  const game = useSelector((state) => state.game.value);
  const heart = useSelector((state) => state.heart.value);
  const [progresBar, setProgresBar] = useState(0);
  const [currentQ, setCurrentQ] = useState(0);

  if (!game) {
    return <p>Loading lesson...</p>;
  }

  const currentQuestion = game.lessonQuestions[currentQ];

  return (
    <div className="level-container">
      <div className="level__header">
        <div className="header__button">
          <Link to="/dashboard">
            <IoClose size="30px" color="grey" />
          </Link>
        </div>
        <div className="header__level-complete">
          <div
            className="level-complete__line"
            style={{ width: `${progresBar}%` }}
          ></div>
        </div>
        <div className="header__heart">
          <img src="../heart.png" className="heart__img" />
          <p className="elements__data data--heart">{heart}</p>
        </div>
      </div>
      <div className="level__body">
        <h1 className="body__question">{currentQuestion.question}</h1>
        <div className="body__answer-grid">
          {currentQuestion.AnswerOptions.map((option, index) => (
            <Option
              key={index}
              text={option}
              progresBar={progresBar}
              setProgresBar={setProgresBar}
              setCurrentQ={setCurrentQ}
              correctAnswer={currentQuestion.correctAnswer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Option({
  text,
  correctAnswer,
  progresBar,
  setProgresBar,
  setCurrentQ,
}) {
  const heart = useSelector((state) => state.heart.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function checkAnswer() {
    if (text === correctAnswer) {
      toast.custom(
        (t) => (
          <div
            style={{
              top: "80px",
              position: "relative",
              padding: "8px 16px",
              borderRadius: "8px",
              color: "yellow",
              fontWeight: "bold",
              fontSize: "18px",
              background: "transparent", // no background
              fontFamily: "Poppins",
            }}
          >
            + 10 to your score!
          </div>
        ),
        {
          duration: 500,
        }
      );

      const nextProgress = progresBar + 25; // calculate next progress
      setProgresBar(nextProgress);

      if (nextProgress >= 100) {
        navigate("/dashboard"); // navigate if finished
      } else {
        setCurrentQ((prev) => prev + 1); // go to next question
      }
    } else {
      dispatch(decrement());
      if (heart === 1) {
        navigate("/dashboard");
      }
    }
  }

  return (
    <div className="option-card" onClick={() => checkAnswer()}>
      <h2>{text}</h2>
    </div>
  );
}
