import styled from "styled-components";

const Container = styled.div`
  max-width: 1180px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 100vh;
  .content {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;
    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #000;
  border-radius: 5px;
  color: white;
  min-width: 220px;
  border: none;
  fontsize: 16px;
  curser: pointer;
  border: 1px solid transparent;

  &:hover {
    background-color: white;
    color: #000;
    border: 1px solid #000;
  }
`;

function StartGame({click}) {
  return (
    <Container>
      <img src="./images/dices 1.png" alt="dice image" />
      <div className="content">
        <h1>Dice Game</h1>
        <Button onClick={click}>Start Game</Button>
      </div>
    </Container>
  );
}

export default StartGame;
