// 3/6/24 12:30pm - Trivia object mapping working, but shows all questions

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

// // // // // // // // // // // // // // // // // // //

/*
// import { useState } from "react";

// Within function:
// // const [count, setCount] = useState(0);

import Card from "./components/Card";

function App() {
  let colors = ["info", "secondary", "success"];
  let headings = ["Pop Culture", "Entertainment", "Technology"];
  let words = ["Who", "What", "When", "Where"];

  const items = [
    { name: "Apple", price: 2.99, test: "algo", arr: ["abc", 123] },
    { name: "Banana", price: 1.59, test: "nada", arr: ["123"] },
    { name: "Orange", price: 3.29, test: "quisas", arr: [456, "def"] },
    // item[2].arr[1] to get "def"
  ];

  // can only call {item.arr[index#] if *all* objects have an array}
  // instead of map can use object. (?)

  let trivia = [
    {
      id: "c-01",
      color: colors[0],
      heading: headings[0],
      question:
        "Which portable pet, released in the US in 1997, would literally die in the palm of your hands if not fed and cleaned throughout day?",
      // trivia[0].question to access this
      allAnswers: ["Chia Pet", "Furby", "Pikachu", "Tamagotchi", "Yugioh"],
      correctAnswer: 3, // Tamagotchi // maybe just store the index here?
      interrogative: words[1],
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
      interrogative: words[0],
    },
    {
      id: "t-01",
      color: colors[2],
      heading: headings[2],
      question:
        "Launched in 2003, which social media platform is considered the first to have attracted a worldwide audience?",
      allAnswers: ["Facebook", "Friendster", "MySpace", "Twitter", "YouTube"],
      correctAnswer: 2, // MySpace
      interrogative: words[1],
    },
  ];

  //   <Card
  //   color={colors[0]}
  //   heading={headings[0]}
  //   question={questions[0]}
  //   allAnswers={answers[0]}
  //   correctAnswer={correctAnswers[0]}
  //   interrogative={interrogatives[0]}
  // />

  return (
    <>
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
        <p>
          <strong>items (test):</strong>
        </p>

        {items.map((item, index) => (
          <p key={item}>
            {index} @ {item.name}: ${item.price} & "{item.test}" plus {item.arr}
            <br />y {item.arr[1]}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
*/

//   <div>
//   {trivia.map((triviaQ) => (
//     <Card key={triviaQ.id}
//     color = {triviaQ.color}
//     heading = {triviaQ.heading}
//     question= {triviaQ.question}
//     allAnswers = {triviaQ.allAnswers}
//     correctAnswer= {triviaQ.correctAnswer}
//     interrogative = {triviaQ.interrogative}>
//   ))}
// </div>

// // // // //

// return (
//   <>
//     <div>
//       <br />
//       {trivia.map((triviaQ) => (
//         <p key={triviaQ.id}>
//           <strong>id:</strong> {triviaQ.id} <br />
//           <strong>color:</strong> {triviaQ.color} <br />
//           <strong>heading:</strong> {triviaQ.heading} <br />
//           <strong>question:</strong> {triviaQ.question} <br />
//           <strong>allAnswers:</strong> {triviaQ.allAnswers} <br />
//           <strong>correctAnswer:</strong> {triviaQ.correctAnswer}
//           <br />
//           <strong>interrogative: </strong> {triviaQ.interrogative}
//         </p>
//       ))}
//     </div>
//     <div>
//       <p>
//         <strong>items (test):</strong>
//       </p>

//       {items.map((item, index) => (
//         <p key={item}>
//           {index} @ {item.name}: ${item.price} & "{item.test}" plus {item.arr}
//           <br />y {item.arr[1]}
//         </p>
//       ))}
//     </div>
//     <h1>
//       <br />
//       Hello, World
//       <strong>
//         <em>!</em>
//       </strong>
//       <br />
//     </h1>
//     <div>
//       <p>
//         <strong>colors:</strong> {colors}
//       </p>
//       <p>
//         <strong>headings:</strong> {headings}
//       </p>
//       <p>
//         <strong>words:</strong> {words}
//       </p>
//     </div>
//   </>
// );
// }

// // // // // //

// Can't print just {item}
// Can print {item.arr} but not {item.arr[0]} or {item.arr[index]}

// import trivia from "./trivia.js";
// import background from "./assets/brAInbowXL.jpg";
// <div style={{ backgroundImage: `url(${background})` }}>

// import Card from "./components/Card";
// import Header from "./components/Header";
// import Score from "./components/Score";

// function App() {
//   let colors = ["info", "secondary", "success"];

//   let headings = ["Pop Culture", "Entertainment", "Technology"];

//   let words = ["Who", "What", "When", "Where"];

//   // Without a dictionary for testing purposes only

//   let questions = [
//     "Which portable pet, released in the US in 1997, would literally die in the palm of your hands if not fed and cleaned throughout day?",
//     'Which CrazySexyCool girl-power group warned us not to go chasing "Waterfalls" in 1995?',
//     "Launched in 2003, which social media platform is considered as the first to have attracted a worldwide audience?",
//   ];

//   let answers = [
//     ["Chia Pet", "Furby", "Pikachu", "Tamagotchi", "Yugioh"],
//     ["Blaque", "Destiny's Child", "En Vogue", "The Spice Girls", "TLC"],
//     ["Facebook", "Friendster", "MySpace", "Twitter", "YouTube"],
//   ];

//   let correctAnswers = [3, 4, 2];

//   let interrogatives = [words[1], words[0], words[1]];

//   return (
//     <>
//       <div>
//         <Header />
//       </div>
//       <div>
//         <Card
//           color={colors[0]}
//           heading={headings[0]}
//           question={questions[0]}
//           allAnswers={answers[0]}
//           correctAnswer={correctAnswers[0]}
//           interrogative={interrogatives[0]}
//         />
//         <Card
//           color={colors[1]}
//           heading={headings[1]}
//           question={questions[1]}
//           allAnswers={answers[1]}
//           correctAnswer={correctAnswers[1]}
//           interrogative={interrogatives[1]}
//         />
//         <Card
//           color={colors[2]}
//           heading={headings[2]}
//           question={questions[2]}
//           allAnswers={answers[2]}
//           correctAnswer={correctAnswers[2]}
//           interrogative={interrogatives[2]}
//         />
//       </div>
//       <div>
//         <Score />
//       </div>
//     </>
//   );
// }

// export default App;

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
