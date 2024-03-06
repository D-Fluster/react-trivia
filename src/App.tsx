// import { useState } from "react";

// Within function:
// // const [count, setCount] = useState(0);

// import background from "./assets/brAInbowXL.jpg";
// <div style={{ backgroundImage: `url(${background})` }}>

import Card from "./components/Card";
import Header from "./components/Header";
import Score from "./components/Score";

function App() {
  let colors = ["info", "secondary", "success"];

  let headings = ["Pop Culture", "Entertainment", "Technology"];

  let words = ["Who", "What", "When", "Where"];

  // Without a dictionary for testing purposes only

  let questions = [
    "Which portable pet, released in the US in 1997, would literally die in the palm of your hands if not fed and cleaned throughout day?",
    'Which CrazySexyCool girl-power group warned us not to go chasing "Waterfalls" in 1995?',
    "Launched in 2003, which social media platform is considered as the first to have attracted a worldwide audience?",
  ];

  let answers = [
    ["Chia Pet", "Furby", "Pikachu", "Tamagotchi", "Yugioh"],
    ["Blaque", "Destiny's Child", "En Vogue", "The Spice Girls", "TLC"],
    ["Facebook", "Friendster", "MySpace", "Twitter", "YouTube"],
  ];

  let correctAnswers = [3, 4, 2];

  let interrogatives = [words[1], words[0], words[1]];

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Card
          color={colors[0]}
          heading={headings[0]}
          question={questions[0]}
          allAnswers={answers[0]}
          correctAnswer={correctAnswers[0]}
          interrogative={interrogatives[0]}
        />
        <Card
          color={colors[1]}
          heading={headings[1]}
          question={questions[1]}
          allAnswers={answers[1]}
          correctAnswer={correctAnswers[1]}
          interrogative={interrogatives[1]}
        />
        <Card
          color={colors[2]}
          heading={headings[2]}
          question={questions[2]}
          allAnswers={answers[2]}
          correctAnswer={correctAnswers[2]}
          interrogative={interrogatives[2]}
        />
      </div>
      <div>
        <Score />
      </div>
    </>
  );
}

export default App;

/*

        <Card
          color={colors[1]}
          heading={headings[1]}
          question={questions[1]}
          answers={answers[1]}
        >
          <Dropdown color={colors[0]} interrogative={ints[2]} />
        </Card>
        <Card
          color={colors[2]}
          heading={headings[2]}
          question={questions[2]}
          answers={answers[2]}
        >
          <Dropdown color={colors[0]} interrogative={ints[2]} />
        </Card>

*/
