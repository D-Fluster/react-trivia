// import React from "react";

interface Props {
  color: string;
  allAnswers: string[];
  correctAnswer: number;
  interrogative: string;
  onClick: (userAnswer: number) => void;
}

const Dropdown = ({
  color,
  allAnswers,
  correctAnswer,
  interrogative,
  onClick,
}: Props) => {
  return (
    <>
      <div className="btn-group" id="btn-dropdown">
        <button
          type="button"
          className={"btn dropdown-toggle btn-" + color}
          data-bs-toggle="dropdown"
        >
          {interrogative} Am I?
        </button>
        <ul className="dropdown-menu">
          {allAnswers.map((answerOption, answerIndex) => (
            <li
              key={answerIndex}
              id={"a" + answerIndex}
              className="dropdown-item"
              onClick={() => onClick(answerIndex)}
            >
              {answerOption}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Dropdown;

//, {answerIndex === correctAnswer ? "Yep!" : "Nope!"}

// userAnswer: number;
// onClick: (userAnswer: number) => void;

// {/* setCorrect={handleCorrect} */}
// setCorrect: boolean;

/* 3/26/24 1:30pm - display is working as expected!
but not DRY nor functional, and I think one can lead to the other here

interface Props {
  color: string;
  allAnswers: string[];
  correctAnswer: number;
  interrogative: string;
}

const Dropdown = ({
  color,
  allAnswers,
  correctAnswer,
  interrogative,
}: Props) => {
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className={"btn dropdown-toggle btn-" + color}
          data-bs-toggle="dropdown"
        >
          {interrogative} Am I?
        </button>
        <ul className="dropdown-menu">
          <li className="dropdown-item" id="a0">
            {allAnswers[0]},{" "}
            {allAnswers[0] === allAnswers[correctAnswer] ? "Yep!" : "Nope!"}
          </li>
          <li>
            <a className="dropdown-item" id="a1" href="#">
              {allAnswers[1]},{" "}
              {allAnswers[1] === allAnswers[correctAnswer] ? "Yep!" : "Nope!"}
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="a2" href="#">
              {allAnswers[2]},{" "}
              {allAnswers[2] === allAnswers[correctAnswer] ? "Yep!" : "Nope!"}
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="a3" href="#">
              {allAnswers[3]},{" "}
              {allAnswers[3] === allAnswers[correctAnswer] ? "Yep!" : "Nope!"}
            </a>
          </li>
          <li>
            <a className="dropdown-item" id="a4" href="#">
              {allAnswers[4]},{" "}
              {allAnswers[4] === allAnswers[correctAnswer] ? "Yep!" : "Nope!"}
            </a>
          </li>
          <li>
            <hr className="dropdown-divider" />
          </li>
          <li>
            <a className="dropdown-item" id="done" href="#">
              I give up!
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Dropdown;
*/

/*
      <div>
        <strong>color:</strong> {color} <br />
        <strong>allAnswers:</strong> {allAnswers} <br />
        <strong>correctAnswer:</strong> {correctAnswer} <br />
        <strong>interrogative:</strong> {interrogative}
      </div>

// interface Props {
//   color:
//     | "info" // categories[0] / Pop Culture / blue
//     | "secondary" // categories[1] / Entertainment / gray
//     | "success"; // categories[2] / Technology / green
//   interrogative: "Who" | "What?" | "When?" | "Where";
// }

<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
*/
