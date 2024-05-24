import styled from "styled-components";
import Gameplay from "./Gameplay";
import { useState } from "react";

function MainScreen({ exitGame }) {
  const [showInfo, setShowInfo] = useState(false);
  const [showRule] = useState(["Show Rules", "Hide Rules"]);
  const [currentDice, setCurrentDice] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [score, setScore] = useState(0);

  const toggleInfo = () => {
    setShowInfo((prev) => !prev);
  };

  const resetScore = () => {
    setScore(0);
  };

  const handleDiceRoll = () => {
    if (selectedNumber === 0) return alert("Please select a number");
    else {
      const diceNumber = Math.floor(Math.random() * 6) + 1;
      setCurrentDice(diceNumber);
      if (selectedNumber === diceNumber) {
        setScore((prev) => prev + diceNumber);
      } else {
        setScore((prev) => prev - 2);
      }
    }
  };

  return (
    <>
      <Gameplay
        score={score}
        selectedNumber={selectedNumber}
        setSelectedNumber={setSelectedNumber}
      />
      <Main>
        <img
          onClick={handleDiceRoll}
          src={`./images/dice_${currentDice}.png`}
          alt="dice image"
        />
        <p>Click on Dice to roll</p>
        <Button onClick={resetScore} className="secondary">
          Reset Score
        </Button>
        <Button onClick={exitGame} className="secondary">
          Exit
        </Button>
        <Button onClick={toggleInfo} className="primary">
          {showInfo ? showRule[1] : showRule[0]}
        </Button>
        {showInfo ? (
          <GameInfo>
            <h3>How to play Dice Game</h3>
            <ul>
              <li>Select any number</li>
              <li>Click on Dice Image</li>
              <li>
                after click on dice if selected number is equal to dice number
                you will get same point as dice
              </li>
              <li>if you get wrong guess then 2 point will be dedcuted</li>
            </ul>
          </GameInfo>
        ) : null}
      </Main>
    </>
  );
}

const GameInfo = styled.div`
  background-color: #fbf1f1;
  padding: 10px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding-top: 30px;

  img {
    width: 150px;
    cursor: POINTER;
  }
  p {
    font-size: 24px;
  }
  .primary {
    background-color: black;
    color: white;
    border: none;
  }
  .secondary {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
`;

export default MainScreen;
