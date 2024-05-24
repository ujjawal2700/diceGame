import styled from "styled-components";
import { useState } from "react";

function Gameplay({ score, selectedNumber, setSelectedNumber }) {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const handleSelect = (number) => {
    setSelectedNumber(number);
    console.log(number);
  };

  return (
    <GameDetail>
      <ScoreContainer>
        <h1>{score}</h1>
        <p>Total score</p>
      </ScoreContainer>
      <div className="select-numbers">
        <p>Select a Number:</p>
        {arrayNumber.map((number) => (
          <Box
            isSelected={number === selectedNumber}
            onClick={() => {
              handleSelect(number);
            }}
            key={number}
          >
            {number}
          </Box>
        ))}
      </div>
    </GameDetail>
  );
}

const ScoreContainer = styled.div`
  text-align: center;
  max-width: 200px;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }
  p {
    font-size: 24px;
    font-weight: 500;
  }
`;

const Box = styled.div`
  display: grid;
  place-items: center;
  height: 72px;
  width: 72px;
  border: 1px solid black;
  font-weight: 700;
  fontsize: 24px;

  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};

  &:hover {
    background-color: grey;
    cursor: pointer;
    color: black;
  }
`;

const GameDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20vh;

  .select-numbers {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    
  }
`;

export default Gameplay;
