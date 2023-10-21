import React from "react";
import "./Results.css";
import { Button } from "@mui/material";
import Feedback from "./Feedback";
import { useNavigate } from "react-router-dom";

export default function Results({ score, setScore }) {
  const navigate = useNavigate();
  const percentage = (score / 10) * 100;
  const handleColor = (score) => {
    if (score > 0 && score <= 3) {
      return "low";
    } else if (score >= 4 && score <= 7) {
      return "medium-color";
    }
  };
  const handleResetScore = () => {
    navigate("/");
    return setScore(0);
  };
  return (
    <section className="container">
      <div className="loading-bar">
        <div
          className={`loading-bar-fill ${handleColor(score)}`}
          style={{ width: `${percentage}%` }}
        />
        <span className="loading-bar-label">{percentage}%</span>
      </div>
      <section className="downside">
        <Feedback className="feedback" score={score} />
        <Button
          className="homepage--btn"
          variant="contained"
          color="primary"
          size="large"
          onClick={handleResetScore}
        >
          Go to Homepage
        </Button>
      </section>
    </section>
  );
}
