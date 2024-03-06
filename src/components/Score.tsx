// import React from "react";

interface Props {
  score: number;
}

const Score = ({ score }: Props) => {
  return <h1 id="score">MyScore:&emsp;{score}</h1>;
};

export default Score;

// Counter tutorial @ https://react.dev/learn
