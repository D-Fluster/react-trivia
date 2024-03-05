import React, { ReactNode } from "react";

import Dropdown from "./Dropdown";

interface Props {
  color:
    | "info" // categories[0] / Pop Culture / blue
    | "secondary" // categories[1] / Entertainment / gray
    | "success"; // categories[2] / Technology / green
  heading: "Pop Culture" | "Entertainment" | "Technology";
  question: string;
  answers: string[];
}

const Card = ({ color, heading, question, answers }: Props) => {
  let colors = ["info", "secondary", "success"];
  let ints = ["Who", "What", "When", "Where"];

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className={"card-title text-bg-" + color}>{heading}</h5>
          <p className="card-text">{question}</p>
        </div>
        <Dropdown color={colors[0]} interrogative={ints[2]} />
      </div>
    </>
  );
};

export default Card;

/*
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
