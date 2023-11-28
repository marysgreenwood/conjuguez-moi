import Heading from "./components/Heading.jsx";
import { StartBoard } from "./components/StartBoard.jsx";
import GameBoard from "./components/GameBoard.jsx";
import { ScoreBoard } from "./components/ScoreBoard.jsx";
export default function Home() {
  return (
    <main>
      <Heading />
      <StartBoard />
      <GameBoard />
      <ScoreBoard />
    </main>
  );
}

//src/app/components/Heading.jsx
//src/app/page.js
