// needs to inherit PREVIOUS & NEXT functions

const ButtonGroup = () => {
  return (
    <>
      <div className="btn-group">
        <button type="button" className="btn btn-secondary">
          <strong>BACK</strong>
        </button>
        <button type="button" className="btn btn-outline-secondary">
          <em>End Game</em>
        </button>
        <button type="button" className="btn btn-secondary">
          <strong>NEXT</strong>
        </button>
      </div>
    </>
  );
};

export default ButtonGroup;

/*
<div class="btn-group" role="group" aria-label="Basic mixed styles example">
  <button type="button" class="btn btn-danger">Left</button>
  <button type="button" class="btn btn-warning">Middle</button>
  <button type="button" class="btn btn-success">Right</button>
</div>
*/
