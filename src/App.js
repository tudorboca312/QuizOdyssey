import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import Header from "../src/components/Header/Header";
import Homepage from "./components/Homepage/Homepage";
import Game from "./components/Game/Game";
import Results from "./components/Results/Results";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const fetchQuestions = async (category = "", difficulty = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    setQuestions(data.results);
  };
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<Navigate to="/QuizOdyssey" replace />} />

          <Route
            path="/QuizOdyssey"
            element={
              <Homepage
                name={name}
                setName={setName}
                fetchQuestions={fetchQuestions}
                setScore={setScore}
              />
            }
          />
          <Route
            path="/game"
            element={
              <Game
                name={name}
                questions={questions}
                score={score}
                setQuestions={setQuestions}
                setScore={setScore}
              />
            }
          />
          <Route
            path="/results"
            element={<Results score={score} setScore={setScore} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
