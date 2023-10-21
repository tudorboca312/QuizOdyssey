import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Game.css";
import Questions from "./GameComponents/Questions";

const Game = ({ name, questions, score, setQuestions, setScore }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [options, setOptions] = useState();

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[questionNumber]?.correct_answer,
          ...questions[questionNumber]?.incorrect_answers,
        ])
    );
  }, [questionNumber, questions]);
  const handleShuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
  };

  const chooseDifficulty = () => {
    if (questions[questionNumber].difficulty === "easy") {
      return "easy";
    } else if (questions[questionNumber].difficulty === "medium") {
      return "medium";
    } else {
      return "hard";
    }
  };
  const chooseScoreColor = () => {
    if (score < 3) {
      return "hard";
    } else if (score >= 3 && score < 7) {
      return "medium";
    } else {
      return "easy";
    }
  };

  return (
    <div className="quiz--game">
      {questions ? (
        <>
          <div className="upper--side">
            <span style={{ color: "#6c63ff" }}>
              Category: {questions[questionNumber].category}
            </span>
            <span
              className={`${chooseDifficulty()} yes`}
              style={{ textTransform: "capitalize" }}
            >
              Difficulty: {questions[questionNumber].difficulty}
            </span>
            <span className={`${chooseScoreColor()}`}>Score: {score}</span>
          </div>
          <Questions
            questions={questions}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            correct={questions[questionNumber]?.correct_answer}
            options={options}
            score={score}
            setScore={setScore}
            setQuestions={setQuestions}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};
export default Game;
