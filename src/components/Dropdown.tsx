/* Initialize interface properties to be displayed within this component
and/or pass a function argument back to the parent App for navigation */
interface Props {
  color: string;
  allAnswers: string[];
  correctAnswer: number;
  interrogative: string;
  onClick: (userAnswer: number) => void;
}

/* Define the layout and functionality of this Dropdown component such that
users will not be able to see the answer options without clicking on the button,
and upon doing so will be presented with all the answer options; choosing any
answer navigates them to the next question and increments the "count" variable,
while choosing the correct answer additionally increments the "score" variable */
const Dropdown = ({
  color,
  allAnswers,
  correctAnswer,
  interrogative,
  onClick,
}: Props) => {
  return (
    <>
      <div className="btn-group" id="btn-dropdown">
        <button
          type="button"
          className={"btn dropdown-toggle btn-" + color}
          data-bs-toggle="dropdown"
        >
          {interrogative} Am I?&ensp;
        </button>
        <ul className="dropdown-menu">
          {allAnswers.map((answerOption, answerIndex) => (
            <li
              key={answerIndex}
              id={"a" + answerIndex}
              className="dropdown-item"
              onClick={() => onClick(answerIndex)}
            >
              {answerOption}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

/* Export this component for use within the program */
export default Dropdown;

/* BOOTSTRAP HTML:
<div class="btn-group">
  <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Action
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
*/
