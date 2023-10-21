// import React from "react";
import "./Questions.css";
import { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Error from "./Error";

const Questions = ({
  questions,
  questionNumber,
  setQuestionNumber,
  correct,
  options,
  score,
  setScore,
  setQuestions,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleSelected = (i) => {
    if (i === selected && i === correct) {
      return "correct";
    } else if (i === selected && i !== correct) {
      return "wrong";
    } else if (i === correct) return "correct";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) {
      setScore(score + 1);
    }
    setError(false);
  };
  const handleSubmit = () => {
    if (questionNumber > 8) {
      navigate("/results");
    } else if (selected) {
      setQuestionNumber(questionNumber + 1);
      setSelected();
    } else {
      setError("Please select and option first!");
    }
  };
  const handleQuit = () => {
    setQuestionNumber(0);
    setQuestions();
  };
  return (
    <div className="container">
      <h2 className="question">
        {error && <Error>{error}</Error>}

        {questions[questionNumber].question
          .replace(/&#039;/g, "'")
          .replace(/&quot;/g, '"')}
      </h2>
      <section className="answers">
        {options &&
          options.map((i) => (
            <button
              onClick={() => handleCheck(i)}
              key={i}
              disabled={selected}
              className={selected && handleSelected(i)}
            >
              {i}
            </button>
          ))}
      </section>
      <section className="down--section">
        <section className="buttons">
          <Button
            className="btns quit"
            variant="contained"
            color="primary"
            size="large"
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            className="btns next"
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            {questionNumber > 8 ? "Submit" : "Next Question"}
          </Button>
        </section>

        <p className="question--number">
          <span className="number">{questionNumber + 1}</span> / 10
        </p>
      </section>
    </div>
  );
};

export default Questions;
