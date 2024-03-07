import { useState } from "react";

import ButtonGroup from "./components/ButtonGroup";
import Card from "./components/Card";
import Dropdown from "./components/Dropdown";
import Header from "./components/Header";
import Score from "./components/Score";

function App() {
  const colors = ["info", "warning", "success"];
  const headings = ["Pop Culture", "Entertainment", "Technology"];
  const interrogativeWords = ["Who", "What", "When", "Where"];

  const trivia = [
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
      color: "secondary",
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
  const triviaQ = trivia[index];
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  let userAnswer;

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
        <ButtonGroup />
      </Card>
      <div>
        <Score count={count} score={score} />
      </div>
    </>
  );
}

export default App;
