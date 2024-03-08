/* Initialize interface properties, which here pass a 
function argument back to the parent App for navigation */
interface Props {
  onClick: (button: string) => void;
}

/* Define the layout and functionality of this ButtonGroup component such that
users can navigate backward & forward through all the trivia questions or 
skip to the end without any impact on the "score" or "count" variables */
const ButtonGroup = ({ onClick }: Props) => {
  return (
    <>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onClick("back")}
        >
          <strong>BACK</strong>
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => onClick("end")}
        >
          <em>End Game</em>
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => onClick("next")}
        >
          <strong>NEXT</strong>
        </button>
      </div>
    </>
  );
};

/* Export this component for use within the program */
export default ButtonGroup;

/* BOOTSTRAP HTML:
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
*/
