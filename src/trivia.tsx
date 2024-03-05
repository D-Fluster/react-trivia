let categories = ["Pop Culture", "Entertainment", "Technology"];

let questions = [
  {
    id: "c-01",
    category: categories[0],
    question:
      "Which portable pet, released in the US in 1997, would literally die in the palm of your hands if not fed and cleaned throughout day?",
    answers: ["Chia Pet", "Furby", "Pikachu", "Tamagotchi", "Yugioh"],
    correctAnswer: this.answers[3], // Tamagotchi
  },
  {
    id: "e-01",
    categories: categories[1],
    question:
      'Which CrazySexyCool girl-power group warned us not to go chasing "Waterfalls" in 1995?',
    answers: [
      "Blaque",
      "Destiny's Child",
      "En Vogue",
      "The Spice Girls",
      "TLC",
    ],
    correctAnswer: this.answers[4], // TLC
  },
  {
    id: "t-01",
    categories: categories[2],
    question:
      "Launched in 2003, which social media platform is considered as the first to have attracted a worldwide audience?",
    answers: ["Facebook", "Friendster", "MySpace", "Twitter", "YouTube"],
    correctAnswer: this.answers[2], // MySpace
  },
];

// August 6th, 1991: The worldwide web is unleashed upon an unsuspecting public. Dial-up noises ensue.
