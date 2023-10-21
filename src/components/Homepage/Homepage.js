import { MenuItem, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Categories from "./Categories";
import ErrorMessage from "./ErrorMessage";
import "./Homepage.css";
import imageLogo from "./imag001.svg";

export default function Homepage({ name, setName, fetchQuestions, setScore }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    if (!name || !category || !difficulty) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      setScore(0);
      navigate("/game");
    }
  }

  return (
    <div className="homepage">
      <div className="left--side">
        <img src={imageLogo} alt="quizLogo" className="photo--homepage" />
      </div>
      <div className="right--side">
        <h2 className="quiz--title">Quiz Settings</h2>

        <section className="settings">
          {error && <ErrorMessage />}
          <TextField
            label="Enter your name"
            variant="outlined"
            className="name"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Choose Category"
            className="category"
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => {
              return (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            select
            label="Difficulty"
            className="difficulty"
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            className="btn"
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Game
          </Button>
        </section>
      </div>
    </div>
  );
}
