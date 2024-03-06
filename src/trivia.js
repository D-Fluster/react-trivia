let colors = ["info", "secondary", "success"];
let headings = ["Pop Culture", "Entertainment", "Technology"];
let words = ["Who", "What", "When", "Where"];

// interface Props {
//   color:
//     | "info" // categories[0] / Pop Culture / blue
//     | "secondary" // categories[1] / Entertainment / gray
//     | "success"; // categories[2] / Technology / green
//   heading: "Pop Culture" | "Entertainment" | "Technology";
//   question: string;
//   allAnswers: string[];
//   correctAnswer: number;
//   interrogative: string;
// }

let questions = [
  {
    id: "c-01",
    color: colors[0],
    heading: headings[0],
    question:
      "Which portable pet, released in the US in 1997, would literally die in the palm of your hands if not fed and cleaned throughout day?",
    allAnswers: ["Chia Pet", "Furby", "Pikachu", "Tamagotchi", "Yugioh",],
    correctAnswer: this.allAnswers[3], // Tamagotchi 
      // ***** maybe just store the index here? ******
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
    correctAnswer: this.allAnswers[4], // TLC
    interrogative: words[0],
  },
  {
    id: "t-01",
    color: colors[2],
    heading: headings[2],
    question:
      "Launched in 2003, which social media platform is considered the first to have attracted a worldwide audience?",
    allAnswers: ["Facebook", "Friendster", "MySpace", "Twitter", "YouTube",],
    correctAnswer: this.allAnswers[2], // MySpace
    interrogative: words[1],
  },
];

// August 6th, 1991: The worldwide web is unleashed upon an unsuspecting public. Dial-up noises ensue.
