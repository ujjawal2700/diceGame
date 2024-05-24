import MainScreen from "./components/MainScreen";
import StartGame from "./components/StartGame";
import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const toggleGame = () => {
    setIsGameStarted((prev) => !prev);
  };

  

  return (
    <div>
      {isGameStarted ? <MainScreen exitGame = {toggleGame} /> : <StartGame click={() => toggleGame()} />}
    </div>
  );
}

export default App;
