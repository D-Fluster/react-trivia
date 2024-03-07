// import React from "react";

interface Props {
  count: number;
  score: number;
}

const Score = ({ count, score }: Props) => {
  return (
    <h1 id="score">
      <em>
        <strong>MyScore:</strong>
      </em>
      &emsp;{score}&emsp;out of&emsp;{count}
    </h1>
  );
};

export default Score;

// Counter tutorial @ https://react.dev/learn
