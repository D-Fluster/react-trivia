// Couldn't get this to import correctly unless it was in TSX format

// ** note correctAnwer on the new ones

const colors = ["info", "secondary", "success"];
const headings = ["Pop Culture", "Entertainment", "Technology"];
const interrogativeWords = ["Who", "What", "When", "Where"];

const trivia = [
  {
    // index 0
    id: "t-01",
    color: colors[2],
    heading: headings[2],
    question:
      'Dubbed the "millennium bug," this fearsome computer glitch that never actually happened was expected o topple systems and infrastructures across the globe when the ball dropped on New Year\'s Day 2000.',
    allAnswers: ["2G2B4G", "G2G", "L8R", "SK8R", "Y2K"],
    correctAnwer: 4,
    interrogative: interrogativeWords[1],
  },
  {
    // index 1
    id: "e-01",
    color: colors[1],
    heading: headings[1],
    question:
      'Beginning in 1997 and ironically continuing well past the year 2000, this late-night talk show host and a guest would take turns presenting humorous predictions of what would happen "In the Year 2000."',
    allAnswers: [
      "Conan O'Brien",
      "David Letterman",
      "Jay Leno",
      "Jimmy Kimmel",
      "Johnny Carson",
    ],
    correctAnwer: 0, // Conan O'Brien
    interrogative: interrogativeWords[0],
  },
  {
    // index 2
    id: "c-01",
    color: colors[0],
    heading: headings[0],
    question:
      "Since their conception in 1993, these toys have graduated to become collectible investments, in part due to their deliberate scarcity.",
    allAnswers: [
      "American Girl Dolls ",
      "Barbies",
      "Beanie Babies",
      "Cabbage Patch Kids",
      "Teddy Bears",
    ],
    correctAnwer: 2, // Beanie Babies
    interrogative: interrogativeWords[1],
  },
  {
    // index 3
    id: "e-02",
    color: colors[1],
    heading: headings[1],
    question:
      "According to the 1998 song of the same name, where was Whitney Houston when she sang \"Since you're not around for me to tell you, baby, face to face... I'm writing you this letter, and this is what I have to say...\"?",
    allAnswers: [
      "In Rhythm Nation",
      "The Black Parade",
      "The Heartbreak Hotel",
      "The Heartbroken Hostel",
      "The Lonely Hearts Club",
    ],
    correctAnwer: 2, // The Heartbreak Hotel
    interrogative: interrogativeWords[3],
  },
  {
    // index 4
    id: "t-02",
    color: colors[2],
    heading: headings[2],
    question:
      "Launched in 2003, which social media platform is considered the first to have attracted a worldwide audience?",
    allAnswers: ["Facebook", "Friendster", "MySpace", "Twitter", "YouTube"],
    correctAnswer: 2, // MySpace
    interrogative: interrogativeWords[1],
  },
  {
    // index 5
    id: "e-03",
    color: colors[1],
    heading: headings[1],
    question:
      'The ABC network enjoyed huge success with this prime-time television block that aired the likes of "Family Matters," "Full House," and "Step by Step."',
    allAnswers: ["FOMO", "GOAT", "JNCO", "OMFG", "TGIF"],
    correctAnwer: 4, // TGIF
    interrogative: interrogativeWords[1],
  },
  {
    // index 6
    id: "c-02",
    color: colors[0],
    heading: headings[0],
    question:
      'Released in this year, Baby Bottle Pop\'s original jingle came complete with consumption instructions: "Just lick the bottle, dip it, and shake it! And lick it again!"',
    allAnswers: ["1995", "1998", "2001", "2008", "2010"],
    correctAnwer: 1, // 1998
    interrogative: interrogativeWords[2],
  },
  {
    // index 7
    id: "t-03",
    color: colors[2],
    heading: headings[2],
    question:
      "Before the streaming era, commercial movies could either be watched in theatres or rented for home viewing from places like this popular brick-and-mortar chain, which first opened in 1985.",
    allAnswers: [
      "Blockbuster",
      "Family Video",
      "GameStop",
      "Netflix",
      "Redbox",
    ],
    correctAnwer: 0, // Blockbuster
    interrogative: interrogativeWords[3],
  },
  {
    // index 8
    id: "e-04",
    color: colors[1],
    heading: headings[1],
    question:
      'At this time, on the dot, Usher was cruisin\' the streets in his drop top in his 1997 release "Nice & Slow."',
    allAnswers: [
      "Six O'Clock",
      "Seven O'Clock",
      "Eight O'Clock",
      "Nine O'Clock",
      "Eleven O'Clock",
    ],
    correctAnwer: 1, // Seven O'Clock
    interrogative: interrogativeWords[2],
  },
  {
    // index 9
    id: "c-03",
    color: colors[0],
    heading: headings[0],
    question:
      'Which turn-of-the-20th-century children\'s game "milked" a worldwide resurgence at the turn of the 21st century before being "capped" into obsucurity yet again?',
    allAnswers: ["Jacks", "Pips", "Pogo Sticks", "Pogs", "Slammers"],
    correctAnwer: 3, // Pogs
    interrogative: interrogativeWords[1],
  },
  {
    // index 10
    id: "t-04",
    color: colors[2],
    heading: headings[2],
    question:
      "In what year did Nintendo revolutionize the video game industry with the US release of its first handheld Game Boy system?",
    allAnswers: ["1985", "1989", "1998", "2001", "2004"],
    correctAnwer: 1, // 1989
    interrogative: interrogativeWords[2],
  },
  {
    // index 11
    id: "c-04",
    color: colors[0],
    heading: headings[0],
    question:
      "What bubblegum fad, introduced in 1988, enticed kids with over six feet of flavor and fun?",
    allAnswers: [
      "Bubble Loops",
      "Bubble Tape",
      "Footlongs",
      "Loop Bubbles",
      "Tape Bubble",
    ],
    correctAnwer: 1, // Bubble Tape
    interrogative: interrogativeWords[1],
  },
  {
    // index 12
    id: "e-05",
    color: colors[1],
    heading: headings[1],
    question:
      'Originally launched in 1981 primarily to air music videos, by the mid 1990s this cable channel had largely eschewed longer veejay-hosted blocks in favor of animated series like "Daria" and shorter-form music shows like "TRL."',
    allAnswers: ["BET", "CMT", "MTV", "VH1", "VHS"],
    correctAnwer: 2, // MTV
    interrogative: interrogativeWords[1],
  },
  {
    // index 13
    id: "c-05",
    color: colors[0],
    heading: headings[0],
    question:
      "Which portable pet, released in the US in 1997, would literally die in the palm of your hands if not fed and cleaned throughout day?",
    allAnswers: ["Chia Pet", "Furby", "Pikachu", "Tamagotchi", "Yugioh"],
    correctAnswer: 3, //    Tamagotchi
    interrogative: interrogativeWords[1],
  },
  {
    // index 14
    id: "t-05",
    color: colors[2],
    heading: headings[2],
    question:
      "In what year was the first iPhone released, usherig in a new age of mobile phones favoring touchscren technology over button-based bricks?",
    allAnswers: ["1983", "2001", "2005", "2007", "2012"],
    correctAnwer: 3, // 2007
    interrogative: interrogativeWords[2],
  },
  {
    // index 15
    id: "e-06",
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
    // index 16
    id: "c-06",
    color: colors[0],
    heading: headings[0],
    question:
      "Since its inception in 1999, which boasted headliners Beck, Tool, and Rage Against the Machine, the Coachella Music Festival has been held annually in which US county?",
    allAnswers: [
      "Clark County, NV",
      "Coffee County, TN",
      "Cook County, IL",
      "Riverside County, CA",
      "Travis County, T",
    ],
    correctAnwer: 3, // Riverside County, CA
    interrogative: interrogativeWords[3],
  },
  {
    // index 17
    id: "t-06",
    color: colors[2],
    heading: headings[2],
    question:
      "In the days after casette tapes and before digital streaming, which music format could be played using a Discman?",
    allAnswers: ["8-Track", "Blu-Ray", "CD", "DVD", "MP3"],
    correctAnwer: 2, // CD
    interrogative: interrogativeWords[1],
  },
  {
    // index 18
    id: "c-07",
    color: colors[0],
    heading: headings[0],
    question:
      'Which trading card game, debuting in the US in 1999, aptly uses the slogan "Gotta Catch \'Em All!"?',
    allAnswers: [
      "Magic: The Gathering",
      "Marvel Champions",
      "Pokémon",
      "Settlers of Catan",
      "Yugioh",
    ],
    correctAnwer: 2, // Pokémon
    interrogative: interrogativeWords[1],
  },
  {
    // index 19
    id: "e-07",
    color: colors[1],
    heading: headings[1],
    question:
      'Hitting the box office in 1999, which action-packed cyber-punk thriller had audiences questioning whether to take the "red pill" or the "blue pill"?',
    allAnswers: [
      "Blade Runner",
      "John Wick",
      "Terminator",
      "The Matrix",
      "V for Vendetta",
    ],
    correctAnwer: 3, // The Matrix
    interrogative: interrogativeWords[1],
  },
  {
    // index 20
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

popularized

{
  // index #
  id: "",
  color: colors[],
  heading: headings[],
  question: "",
  allAnswers: ["0", "1", "2", "3", "4"],
  correctAnwer: ,
  interrogative: interrogativeWords[],
},

* 4
* Tech (or could be Culture)
* When
* Q: In what year was the first iPhone released, usherig in a new age of mobile phones favoring touchscren technology over button-based bricks?
* A: 2007
* Others:
1983 (frist brick cell), 
2001 (iPod released), 
2005, 
2012, 

* 5
* Culture (or could be Entertainment)
* Where
* Q: Since its inception in 1999, which boasted headliners Beck, Tool, and Rage Against the Machine, the Coachella Music Festival has been held annually in which US county?
* A: Riverside County, California
* Others: 
Clark County, Nevada (EDC, Vegas, began 1991/1997), 
Coffee County, Tennessee (Bonnaroo, Manchester, began 2002)
Cook County, Illinois (Lollapalooza, Chicago, began 1991/2005)
Travis County, Texas (SXSW, Austin, began 1987), 
/// Pershing County, Nevada (Burning Man, Black Rock Desert, began 1986)

* 6
* Entertainment (or could be Culture)
* What
* Q: Hitting the box office in 1999, which action-packed cyber-punk thriller had audiences questioning whether to take the "red pill" or the "blue pill"?
* A: The Matrix
* Others:
Blade Runner
John Wick (also Keanu)
Terminator
V for Vendetta (also Wachowskis)

* 7
* Tech (or could be Culture or Entertainment)
* When
* Q: In what year did Nintendo revolutionize the video game industry with the US release of its first handheld Game Boy system? 
* A: 1989 (all NA + JP)
* Others:
* 1985 (Super Mario released JP/NA)
* 1998 (Game Boy Color worldwide)
* 2001 (Game Boy Advance worldwide)
* 2004 (Nintendo DS JP/NA)
* Original released EU 1990, Korea 1991, South Africa 1992
* They previously had a "Game & Watch" (which was a game... and a watch!) but only played 1 game at a time (not interchangeable)

* 8
* Culture (or could be Entertainment)
* What
* Q: Which trading card game, debuting in the US in 1999, aptly uses the slogan "Gotta Catch 'Em All!"?
* A: Pokémon Trading Card Game (TCG) released US 1999
* Others:
Magic: The Gathering, released 1993
Marvel Champions (2019)
Settlers of Catan (1996)
Yugioh TCG released US 2002

* 9
* Culture (or could be Entertainment?)
* What
* Q: Which turn-of-the-20th-century children's game "milked" a worldwide resurgence at the turn of the 21st century before being "capped" into obsucurity yet again?
(Because it's also called a game of "MILK caps" based on its history)
* A: Pogs
* Others:
Jacks
Pips
Pogo Sticks (actually have a similar history but not milk caps)
Slammers (what the heavy pieces were called)

* 10
* Culture
* What
* Q: What bubblegum fad, introduced in 1988, enticed kids with over six feet of flavor and fun?
* A: Bubble Tape
* Others:
* Bubble Loops
* Footlongs
* Loop Bubbles
* Tape Bubble

* 11
* Tech (or could be Culture or Entertainment)
* What
* In the days after casette tapes and before digital streaming, which music format could be played using a Discman?
* A: CD / Compact Disc 
* Others:
* 8-Track
* Blu-Ray
* DVD
* MP3

* 12
* Culture
* When
* Q: Released in this year, Baby Bottle Pop's original jingle came complete with consumption instructions: "Just lick the bottle, dip it, and shake it! And lick it again!"
* A: 1998
* 1995
* 2001 (2D Max type)
* 2008 (jingle redone by Jonas Bros)
* 2010 (Crunch type)

* 13
* Entertainment
* When
* Q: At this time, on the dot, Usher was cruisin' the streets in his drop top in his 1997 release "Nice & Slow."
* A: Seven O'Clock
* Others: 
* Six O'Clock
* Eight O'Clock
* Nine O'Clock
* Eleven O'Clock
It's seven o' clock on the dot
I'm in my drop top, cruisin' the streets, oh yeah
I gotta real pretty, pretty little thang that's waiting for me

* 14
* Entertainment
* Where
* Q: According to the 1998 song of the same name, where was Whitney Houston when she sang "Since you're not around for me to tell you, baby, face to face... I'm writing you this letter, and this is what I have to say..."?
* A: The Heartbreak Hotel
* Others:
* In Rhythm Nation (Janet Jackson, 1989)
* The Black Parade (My Chemical Romance, 2006)
* The Lonely Hearts Club
* The Heartbroken Hostel
Since you're not around for me
To tell you, baby, face to face
I'm writing you this letter
And this is what I have to say

* 15 
* Technology (or Entertainment or Culture)
* Where
* Q: Before the streaming era, commercial movies could either be watched in theatres or rented for home viewing from places like this popular brick-and-mortar chain, which first opened in 1985.
* A: Blockbuster (or Blockbuster Video)
* Others:
* Family Video (founded 1978)
* GameStop (founded 1984 but not for movies)
* Netflix
* Redbox

* 16
* Entertainment (or Culture)
* What
* Q: The ABC network enjoyed huge success with this prime-time television block that aired the likes of "Family Matters," "Full House," and "Step by Step."
* A: TGIF
* Others:
* FOMO
* GOAT
* JNCO
* OMFG
/// Originally ran 1989 thru 2000

* 17
* Culture
* What
* Q: Since their conception in 1993, these toys have graduated to become collectible investments, in part due to their deliberate scarcity.
* A: Beanie Babies (introduced 1993 with larger-scale manufacturing 1994-1999, then resurged in 2000)
* Others:
* American Girl Dolls (released 1986)
* Barbies (introduced 1959)
* Cabbage Patch Kids (first 1992, Hasbro 1988, Mattel 1994, etc.)
* Teddy Bears (conceived circa 1902)

* 18
* Entertainment 
* What
* Q: Originally launched in 1981 primarily to air music videos, by the mid 1990's this cable channel had largely eschewed longer veejay-hosted blocks in favor of animated series like "Daria" and shorter-form music shows like "TRL."
* A: MTV (lauched 1981)
* Others:
* BET (Black Entertainment Television, launched 1980)
* CMT (Country Music Television, launched 1993)
* VH1 (Video Hits One, launched 1985)
* VHS (just no ^_^)

* 19
* Technology (or Culture)
* What
* Q: Dubbed the "millennium bug," this potential computer glitch that never actually happened was expected o topple systems and infrastructures across the globe when the ball dropped on New Year's Day 2000.
* A: Y2K
* Others:
* 2G2B4G
* G2G
* L8R
* SK8R
//// 
* M38
* SOLO
* YOLO
* 2000OMG

* 20
* Entertainment (or Culture)
* Who
* Q: Beginning in 1997 and ironically continuing well past the year 2000, this late-night talk show host and a guest would take turns presenting humorous predictions of what would happen "In the Year 2000."
* A: Conan O'Brien
* Others:
* David Letterman
* Jay Leno
* Jimmy Kimmel
* Johnny Carson

* Q: 
* A: Frosted Tips
* Others: 
* The Rachel


* Culture
* Dunkaroos (birthday cake oreos hehe)
* Squeezits (twist off plastic cap, squeeze sugary juice outta tube!)
* Butterfinger BB's - These tiny balls of crunchy, buttery, goodness made the '90s all the more sweet for kids. During their peak, Butterfinger BBs nearly joined the ranks of candy heavyweights. They packed all of the delicious flavor of Butterfinger bars yet were more movie, road trip, and share-friendly. Having the ”'90s cartoon kid idol Bart Simpson as the mascot didn't hurt either. Sadly, Butterfinger BBs had a tendency to melt easily and were discontinued back in 2006.
* Hi-C Ecto Cooler - Every now and then, a food product helps solidify a film's cultural impact. Inspired by the paranormal classic "Ghostbusters," Ecto Cooler was released by beverage brand Hi-C in the late '80s and gained popularity in the '90s. Much to the disappointment of many who enjoyed its citrusy tangerine flavor, Ecto Cooler was discontinued in 2001. It made a brief return with the release of 2021's "Ghostbusters: Afterlife," yet wasn't actually sold in stores.
* Ring Pops - Iconic is an understatement when it comes to this nifty '90s candy. Ring Pop took the mobile-friendliness of lollipops and made them fashionable. Rather than holding a stick, kids could wear their favorite Ring Pop flavor. In fact, the massive success of Ring Pop was mostly due to its novelty. They're actually pretty messy and have a tendency to run down your hand. Ring Pop is still widely available, yet not nearly as popular as they once were.
* Fun Dip
* src: https://www.tastingtable.com/1301205/popular-nineties-food-trends-ranked/

* TECH
*Y2K
*mac color desktops // see thru electronics
*Skip-It 
* Typing in T9
* Messages on pagers -- 143, 911
* Chain mail? // Which of the following was *not* a popular email trend among teenagers in the early 2000s?
chain mail

* ENTERTAINMENT
*good burger
*X Files
* The Little Mermaid
* Car trends
* Boy bands

* CULTURE
*Gelly Roll pens
*chokers
*slap bracelets
*frosted tips
*puka shell necklaces
*chain wallets
*bedazzled / spiked clothes/belts
*neon, patent leather, vinyl
*platform shoes & flip-flops
*overalls, esp with one strap unbuckled



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
