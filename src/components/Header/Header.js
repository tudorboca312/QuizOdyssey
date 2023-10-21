import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to={"/"} className="title">
        QuizOdyssey
      </Link>
      <hr className="divider" />
    </div>
  );
}
