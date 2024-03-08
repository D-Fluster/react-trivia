/* Import all components and necessary React functionality */
import { useState } from "react";
import trivia from "./trivia.js";
import ButtonGroup from "./components/ButtonGroup";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Score from "./components/Score";

/* Define the layout of this topmost parent component */
function App() {
  /* Declare all trivia information */
  const colors = ["info", "warning", "success"];
  const headings = ["Pop Culture", "Entertainment", "Technology"];
  const interrogativeWords = ["Who", "What", "When", "Where"];
  const myTrivia = trivia;

  /* Initialize use states */
  const [index, setIndex] = useState(0);
  const lastIndex = myTrivia.length - 1;
  const hasNext = index < lastIndex;
  const triviaQ = myTrivia[index];
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  /* Initialize null variables for user actions */
  let userAnswer;
  let button;
  let back;
  let next;
  let end;

  /* Create functions for handling user input */

  /* Update trivia information displayed, count, and score
  based on user interaction with the Dropdown component */
  function handleNextClick(userAnswer) {
    if (userAnswer === triviaQ.correctAnswer) {
      setScore(score + 1);
    }
    if (hasNext) {
      setCount(count + 1);
      setIndex(index + 1);
    } else {
      setCount(0);
      setIndex(0);
      setScore(0);
    }
  }

  /* Update only trivia information displayed based on 
  user interaction with the ButtonGroup compnent */
  function handleButtonClick(button) {
    if (button === "back" && index === 0) {
      setIndex(0);
    } else if (button === "back" && index > 0) {
      setIndex(index - 1);
    } else if (button === "next" && index < lastIndex) {
      setIndex(index + 1);
    } else {
      setIndex(lastIndex);
    }
  }

  /* As this is the topmost parent component, it returns
  the entire display with each component laid out as desired */
  return (
    <>
      <div>
        <Header />
      </div>
      <Card
        key={triviaQ.id}
        color={triviaQ.color}
        heading={triviaQ.heading}
        question={triviaQ.question}
      >
        <Dropdown
          color={triviaQ.color}
          allAnswers={triviaQ.allAnswers}
          correctAnswer={triviaQ.correctAnswer}
          interrogative={triviaQ.interrogative}
          onClick={handleNextClick}
        />
        <ButtonGroup onClick={handleButtonClick} />
      </Card>
      <div>
        <Score count={count} score={score} />
      </div>
    </>
  );
}

/* Export this component for use within the program */
export default App;
