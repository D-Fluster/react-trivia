# Joy of Coding Bootcamp 2024

## Part 03 -- Web Dev Internship Training

### Trello Ticket 04-b - First Solo React Project
* AKA React Trivia App
* AKA #react-trivia

DKF Completed @ 2024-03-07

## [millennial-trivia.vercel.app](millennial-trivia.vercel.app)

---

# App Map

* **[/src/App.css](https://github.com/LAdanimo/react-trivia/blob/main/src/App.css)**
  * Custom CSS built on top of the Bootstrap framework
* **[/src/App.tsx](https://github.com/LAdanimo/react-trivia/blob/main/src/App.tsx)**
  * Topmost parent component
* **[/src/trivia.tsx](https://github.com/LAdanimo/react-trivia/blob/main/src/trivia.tsx)**
  * Trivia data (questions, answers, etc.)
* **[/src/assets/brAInbow.ico](https://github.com/LAdanimo/react-trivia/blob/main/src/assets/brAInbow.ico)**
  * Page ico of a "brain rainbow" created by AI
* **[/src/components/ButtonGroup.tsx](https://github.com/LAdanimo/react-trivia/blob/main/src/components/ButtonGroup.tsx)**
  * Child component of Card; used for the "Back," "Next," and "End Game" buttons
* **[/src/components/Card.tsx](https://github.com/LAdanimo/react-trivia/blob/main/src/components/Card.tsx)**
  * Direct child component of App; used as the central container in the body to display each question and its associated information
* **[/src/components/Dropdown.tsx](https://github.com/LAdanimo/react-trivia/blob/main/src/components/Dropdown.tsx)**
  * Child component of Card; used to hold the answer options
* **[/src/components/Header.tsx](https://github.com/LAdanimo/react-trivia/blob/main/src/components/Header.tsx)**
  * Direct child component of App; used for the header element
* **[/src/components/Score.tsx](https://github.com/LAdanimo/react-trivia/blob/main/src/components/Score.tsx)**
  * Direct child component of App; used for the footer element

---

## Prompt:

Now that you have some basic React under your belt, you’re ready to put your new knowledge into use! You’re going to create your first solo project from scratch. We hope you enjoy trivia because your next assignment is to create a trivia app in React!

**React Trivia Requirements:**
* At least 20 questions and answers
* 1 or more Buttons for interactivity
* Show one question or answer at a time
* Move forward or back through the trivia questions
* When moving forward or back through cards the new card should show the question and not the answer
* _Bonus:_ Keep score
