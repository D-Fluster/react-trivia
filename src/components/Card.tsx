// import React, { ReactNode } from "react";

import Dropdown from "./Dropdown";

interface Props {
  color:
    | "info" // categories[0] / Pop Culture / blue
    | "secondary" // categories[1] / Entertainment / gray
    | "success"; // categories[2] / Technology / green
  heading: "Pop Culture" | "Entertainment" | "Technology";
  question: string;
  allAnswers: string[];
  correctAnswer: number;
  interrogative: string;
}

const Card = ({
  color,
  heading,
  question,
  allAnswers,
  correctAnswer,
  interrogative,
}: Props) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className={"card-title text-bg-" + color}>{heading}</h5>
          <p className="card-text">{question}</p>
        </div>
        <Dropdown
          color={color}
          allAnswers={allAnswers}
          correctAnswer={correctAnswer}
          interrogative={interrogative}
        />
      </div>
    </>
  );
};

export default Card;

/*
  let colors = ["info", "secondary", "success"];
  let ints = ["Who", "What", "When", "Where"];

            <p>
            <strong>color:</strong> {color} <br />
            <strong>heading:</strong> {heading} <br />
            <strong>question:</strong> {question} <br />
            <strong>allAnswers:</strong> {allAnswers} <br />
            <strong>correctAnswer:</strong> {correctAnswer} <br />
            <strong>interrogative:</strong> {interrogative}
          </p>

// children: ReactNode;

// interface Props {
//   color:
//     | "info" // categories[0] / Pop Culture / blue
//     | "secondary" // categories[1] / Entertainment / gray
//     | "success"; // categories[2] / Technology / green
// }

// { color }: Props

// {"card-title text-bg-" + color}


// children: string;
  // onClick: () => void;

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>

*/
