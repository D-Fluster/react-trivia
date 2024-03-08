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
      'Dubbed the "millennium bug," this fearsome computer glitch that never actually happened was expected to topple systems and infrastructures across the globe when the ball dropped on New Year\'s Day 2000.',
    allAnswers: ["2G2B4G", "G2G", "L8R", "SK8R", "Y2K"],
    correctAnswer: 4, // Y2K
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
    correctAnswer: 0, // Conan O'Brien
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
    correctAnswer: 2, // Beanie Babies
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
    correctAnswer: 2, // The Heartbreak Hotel
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
    correctAnswer: 4, // TGIF
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
    correctAnswer: 1, // 1998
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
    correctAnswer: 0, // Blockbuster
    interrogative: interrogativeWords[3],
  },
  {
    // index 8
    id: "e-04",
    color: colors[1],
    heading: headings[1],
    question:
      'At this time, on the dot, Usher was cruisin\' the streets in his drop-top in his 1997 release "Nice & Slow."',
    allAnswers: [
      "Six O'Clock",
      "Seven O'Clock",
      "Eight O'Clock",
      "Nine O'Clock",
      "Eleven O'Clock",
    ],
    correctAnswer: 1, // Seven O'Clock
    interrogative: interrogativeWords[2],
  },
  {
    // index 9
    id: "c-03",
    color: colors[0],
    heading: headings[0],
    question:
      'Which turn-of-the-20th-century children\'s game "milked" a worldwide resurgence at the turn of the 21st century before being "capped" into obscurity yet again?',
    allAnswers: ["Jacks", "Pips", "Pogo Sticks", "Pogs", "Slammers"],
    correctAnswer: 3, // Pogs
    interrogative: interrogativeWords[1],
  },
  {
    // index 10
    id: "t-04",
    color: colors[2],
    heading: headings[2],
    question:
      "In what year did Nintendo revolutionize the video game industry with the release of its first handheld Game Boy system?",
    allAnswers: ["1985", "1989", "1998", "2001", "2004"],
    correctAnswer: 1, // 1989
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
    correctAnswer: 1, // Bubble Tape
    interrogative: interrogativeWords[1],
  },
  {
    // index 12
    id: "e-05",
    color: colors[1],
    heading: headings[1],
    question:
      'Launched in 1981 primarily to air music videos, by the mid 1990s this cable channel had largely eschewed longer veejay-hosted blocks in favor of animated series like "Daria" and shorter-form music shows like "TRL."',
    allAnswers: ["BET", "CMT", "MTV", "VH1", "VHS"],
    correctAnswer: 2, // MTV
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
      "In what year was the first iPhone released, ushering in a new age of mobile phones favoring touchscreen technology over button-based bricks?",
    allAnswers: ["1983", "2001", "2005", "2007", "2012"],
    correctAnswer: 3, // 2007
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
      "Since its inception in 1999, which boasted headliners Beck, Tool, and Rage Against the Machine, the Coachella Music Festival has been held annually in which county?",
    allAnswers: [
      "Clark County, NV",
      "Coffee County, TN",
      "Cook County, IL",
      "Riverside County, CA",
      "Travis County, TX",
    ],
    correctAnswer: 3, // Riverside County, CA
    interrogative: interrogativeWords[3],
  },
  {
    // index 17
    id: "t-06",
    color: colors[2],
    heading: headings[2],
    question:
      "In the days after cassette tapes and before digital streaming, which music format could be played using a Discman?",
    allAnswers: ["8-Track", "Blu-Ray", "CD", "DVD", "MP3"],
    correctAnswer: 2, // CD
    interrogative: interrogativeWords[1],
  },
  {
    // index 18
    id: "c-07",
    color: colors[0],
    heading: headings[0],
    question:
      'Which trading card game, debuting in the US in 1999, aptly popularized the slogan "Gotta Catch \'Em All!"?',
    allAnswers: [
      "Magic: The Gathering",
      "Marvel Champions",
      "Pokémon",
      "Settlers of Catan",
      "Yugioh",
    ],
    correctAnswer: 2, // Pokémon
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
    correctAnswer: 3, // The Matrix
    interrogative: interrogativeWords[1],
  },
  {
    // index 20
    id: "end",
    color: "warning",
    heading: "THE END",
    question:
      "You did it! Check your score below to see if you're the bomb dot com or if you just got moted. But don't worry 'cuz it's not the End of Ze World!",
    allAnswers: [
      "¡ Play Again !",
      "¡ Play Again !",
      "¡ Play Again !",
      "¡ Play Again !",
      "¡ Play Again !",
    ],
    correctAnswer: null,
    interrogative: "Done!",
  },
];

export default trivia;
