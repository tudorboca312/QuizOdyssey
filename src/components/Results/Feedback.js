import React from "react";

export default function Feedback({ score }) {
  function getFeedback(score) {
    switch (score) {
      case 0:
        return "Don't worry, everyone has to start somewhere. Keep practicing and learning, and you'll see improvement.";
      case 1:
      case 2:
        return "You're off to a good start, but there's plenty of room for improvement. Keep at it!";
      case 3:
      case 4:
        return "Not bad, but you can definitely do better. Keep practicing and studying the material.";
      case 5:
      case 6:
        return "Nice job! You have a solid foundation, but keep pushing yourself to improve.";
      case 7:
        return "Great job! You have a strong grasp of the material, but there's still room for improvement.";
      case 8:
        return "Excellent work! You have a deep understanding of the material and a knack for the subject.";
      case 9:
        return "Outstanding! You're an expert in this topic and have a sharp mind for details.";
      case 10:
        return "Perfect score! You've truly mastered this subject and should be proud of your achievement.";
      default:
    }
  }

  return <p style={{ fontSize: "1.4rem" }}> {getFeedback(score)}</p>;
}
