// import { useState } from "react";

// Within function:
// // const [count, setCount] = useState(0);

import Card from "./components/Card";
import Header from "./components/Header";
import Score from "./components/Score";

function App() {
  let colors = ["info", "secondary", "success"];
  let headings = ["Pop Culture", "Entertainment", "Technology"];
  let interrogativeWords = ["Who", "What", "When", "Where"];

  let trivia = [
    {
      id: "c-01",
      color: colors[0],
      heading: headings[0],
      question:
        "Which portable pet, released in the US in 1997, would literally die in the palm of your hands if not fed and cleaned throughout day?",
      // trivia[0].question to access this
      allAnswers: ["Chia Pet", "Furby", "Pikachu", "Tamagotchi", "Yugioh"],
      correctAnswer: 3, // Tamagotchi
      interrogative: interrogativeWords[1],
    },
    {
      id: "e-01",
      color: colors[1],
      heading: headings[1],
      question:
        'Which CrazySexyCool girl-power group warned us not to go chasing "Waterfalls" in 1995?',
      allAnswers: [
        "Blaque",
        "Destiny's Child",
        "En Vogue",
        "The Spice Girls",
        "TLC",
      ],
      correctAnswer: 4, // TLC
      interrogative: interrogativeWords[0],
    },
    {
      id: "t-01",
      color: colors[2],
      heading: headings[2],
      question:
        "Launched in 2003, which social media platform is considered the first to have attracted a worldwide audience?",
      allAnswers: ["Facebook", "Friendster", "MySpace", "Twitter", "YouTube"],
      correctAnswer: 2, // MySpace
      interrogative: interrogativeWords[1],
    },
  ];

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {trivia.map((triviaQ) => (
          <Card
            key={triviaQ.id}
            color={triviaQ.color}
            heading={triviaQ.heading}
            question={triviaQ.question}
            allAnswers={triviaQ.allAnswers}
            correctAnswer={triviaQ.correctAnswer}
            interrogative={triviaQ.interrogative}
          />
        ))}
      </div>
      <div>
        <Score />
      </div>
    </>
  );
}

export default App;

// // // // // //

// can only call {item.arr[index#] if *all* objects have an array}
// // or {items[index].arr[index#]} would hard-code th object at "index"
// instead of map can use object. (?)
// Can't print just {item}
// Can print {item.arr} but not {item.arr[0]} or {item.arr[index]}

// import trivia from "./trivia.js";
// import background from "./assets/brAInbowXL.jpg";
// <div style={{ backgroundImage: `url(${background})` }}>
