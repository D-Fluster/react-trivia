/* Initialize interface properties to be displayed within this component */
interface Props {
  count: number;
  score: number;
}

/* Define the layout of this Score component */
const Score = ({ count, score }: Props) => {
  return (
    <>
      <div id="score-wrapper">
        <h1 id="score">
          <em>
            <strong>MyScore:</strong>
          </em>
          &emsp;{score}&emsp;out of&emsp;{count}
        </h1>
        <h5>
          Wow, I'm {count === 0 ? 0 : Math.ceil((score / count) * 100)}%
          Millennial&nbsp;
          <em>
            <strong>!</strong>
          </em>
          &emsp; Can you beat that&nbsp;
          <em>
            <strong>?</strong>
          </em>
        </h5>
      </div>
    </>
  );
};

/* Export this component for use within the program */
export default Score;
