import { useState } from "react";

import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
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
    {
      id: "end",
      color: "warning",
      heading: "End of Game!",
      question:
        "You did it! Take a look at your score and celebrate with a trip to Hot Topic!",
      allAnswers: [
        "Play Again",
        "Play Again",
        "Play Again",
        "Play Again",
        "Play Again",
      ],
      correctAnswer: null,
      interrogative: "Done!",
    },
  ];

  const [index, setIndex] = useState(0);
  const hasNext = index < trivia.length - 1;
  let triviaQ = trivia[index];
  let [score, setScore] = useState(0);
  let userAnswer;

  function handleNextClick(userAnswer) {
    if (userAnswer === triviaQ.correctAnswer) {
      setScore(score + 1);
    }
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setScore(0);
      setIndex(0);
    }
  }

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
      </Card>
      <div>
        <Score score={score} />
      </div>
    </>
  );
}

export default App;

// // // // // //

// can only call {item.arr[index#] if *all* objects have an array}
// // or {items[index].arr[index#]} would hard-code th object at "index"

// instead of map can use Object.entries (?)
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries

// Can't print just {item}
// Can print {item.arr} but not {item.arr[0]} or {item.arr[index]}

// import trivia from "./trivia.js";
// import background from "./assets/brAInbowXL.jpg";
// <div style={{ backgroundImage: `url(${background})` }}>

// <button onClick={handleNextClick}>Next Question</button> {/* WORKS! */}

// else --> setIndex(0); // setIndex(trivia.length - 1); // create last element of "check your score" or something and put it here

// // //

// let [isCorrect, setCorrect] = useState(false);
// let correctAnswerIndex = triviaQ.correctAnswer;
//  let isCorrect = index === triviaQ.correctAnswer;
// // Currently, this is counting if the index of the question *object*
// // is the same as the index of the correct answer, *NOT* what we want!
// let correctAnswerIndex = triviaQ.correctAnswer;
// console.log(correctAnswerIndex); // yes, logs index value
// console.log(isCorrect);  // initially false
// function handleNextClick( answerIndex: number) { }
