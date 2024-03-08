const colors = ["info", "secondary", "success"];
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

export default trivia;

/*

{
  id: "",
  color: colors[],
  heading: headings[],
  question: "",
  allAnswers: ["0", "1", "2", "3", "4"],
  correctAnwer: ,
  interrogative: interrogativeWords[],
},


* Tech 
* When
* Q: In what year was the first iPhone released, usherig in a new age of mobile phones favoring touchscren technology over button-based bricks?
* A: 2007
* Others:
1983 (frist brick cell), 
2001 (iPod released), 
2005, 
2012, 

* Culture
* Where
* Q: Since its inception in 1999, which boasted headliners Beck, Tool, and Rage Against the Machine, the Coachella Music Festival has been held annually in which US county?
* A: Riverside County, California
* Others: 
Clark County, Nevada (EDC, Vegas, began 1991/1997), 
Coffee County, Tennessee (Bonnaroo, Manchester, began 2002)
Cook County, Illinois (Lollapalooza, Chicago, began 1991/2005)
Travis County, Texas (SXSW, Austin, began 1987), 
/// Pershing County, Nevada (Burning Man, Black Rock Desert, began 1986)

* Entertainment
* What
* Q: Hitting the box office in 1999, which action-packed cyber-punk thriller had audiences questioning whether to take the "red pill" or the "blue pill"?
* A: The Matrix
* Others:
Blade Runner
John Wick (also Keanu)
Terminator
V for Vendetta (also Wachowskis)

* Culture
* Int?
* Q: ?
Gotta Catch 'Em All!
* A: Pokemon Trading Card Game (TCG) released US 1999
* Others:
Magic: The Gathering, released 1993
Marvel Champions (2019)
Settlers of Catan (1996)
Yugioh TCG released US 2002

* Culture
* Dunkaroos (birthday cake oreos hehe)
* Squeezits (twist off plastic cap, squeeze sugary juice outta tube!)
* Hubba Bubba Bubbletape - From its catchy name to its clever packaging, Hubba Bubba Bubbletape definitely gave '90s kids something to chew about. It came in a pink tape dispenser-inspired packaging with over 72 feet of bubble gum — that's more than two school buses in length. Kids would chew to their heart's content, and in fact, thanks to Hubba Bubba, "bubble gum face" was a pretty common occurrence. Time-tested and chewed, Hubba Bubba is still one of the most popular bubble gum brands in the world.
* Butterfinger BB's - These tiny balls of crunchy, buttery, goodness made the '90s all the more sweet for kids. During their peak, Butterfinger BBs nearly joined the ranks of candy heavyweights. They packed all of the delicious flavor of Butterfinger bars yet were more movie, road trip, and share-friendly. Having the ”'90s cartoon kid idol Bart Simpson as the mascot didn't hurt either. Sadly, Butterfinger BBs had a tendency to melt easily and were discontinued back in 2006.
* Hi-C Ecto Cooler - Every now and then, a food product helps solidify a film's cultural impact. Inspired by the paranormal classic "Ghostbusters," Ecto Cooler was released by beverage brand Hi-C in the late '80s and gained popularity in the '90s. Much to the disappointment of many who enjoyed its citrusy tangerine flavor, Ecto Cooler was discontinued in 2001. It made a brief return with the release of 2021's "Ghostbusters: Afterlife," yet wasn't actually sold in stores.
* Ring Pops - Iconic is an understatement when it comes to this nifty '90s candy. Ring Pop took the mobile-friendliness of lollipops and made them fashionable. Rather than holding a stick, kids could wear their favorite Ring Pop flavor. In fact, the massive success of Ring Pop was mostly due to its novelty. They're actually pretty messy and have a tendency to run down your hand. Ring Pop is still widely available, yet not nearly as popular as they once were.
* Fun Dip
* Baby Bottle Pop
* src: https://www.tastingtable.com/1301205/popular-nineties-food-trends-ranked/

* TECH
*Y2K
*mac color desktops // see thru electronics
*Discman / walkman
*Blockbuster
*Skip-It 

* ENTERTAINMENT
*good burger
*mtv
*TGIF on TV
*X Files

* CULTURE
*Gelly Roll pens
*Beanie Babies
*chokers
*slap bracelets
*pogs!!!
*frosted tips
*puka shell necklaces
*chain wallets
*bedazzled / spiked clothes/belts
*Jncos
*Beanie Babies
*neon, patent leather, vinyl
*platform shoes & flip-flops
*overalls, esp with one strap unbuckled




* Q: Which of the following was *not* a popular email trend among teenagers in the early 2000s?
chain mail

*/

/*

{
  id: "",
  color: colors[],
  heading: headings[],
  question: "",
  allAnswers: ["0", "1", "2", "3", "4"],
  correctAnwer: ,
  interrogative: interrogativeWords[],
},

*/

// // // // // // // // // // // // // // //

/* 
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

// move i give up into a new button in the app 

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
      id: "last",
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

let questions = [
  {
    id: "c-01",
    color: colors[0],
    heading: headings[0],
    question:
      "Which portable pet, released in the US in 1997, would literally die in the palm of your hands if not fed and cleaned throughout day?",
          // trivia[0].question to access this
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

*/
