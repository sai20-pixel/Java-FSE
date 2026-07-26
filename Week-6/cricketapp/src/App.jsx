import "./App.css";

import { ListofPlayers, ScoreBelow70 } from "./ListofPlayers";

import {
  IndianTeam,
  OddPlayers,
  EvenPlayers,
  IndianPlayers,
  ListofIndianPlayers,
} from "./IndianPlayers";

function App() {
  const players = [
    { name: "Jack", score: 50 },
    { name: "Michael", score: 70 },
    { name: "John", score: 40 },
    { name: "Ann", score: 61 },
    { name: "Elizabeth", score: 61 },
    { name: "Sachin", score: 95 },
    { name: "Dhoni", score: 100 },
    { name: "Virat", score: 84 },
    { name: "Jadeja", score: 64 },
    { name: "Raina", score: 75 },
    { name: "Rohit", score: 80 },
  ];

  const flag = true; // Change to false

  if (flag) {
    return (
      <>
        <ListofPlayers players={players} />
        <hr />
        <ScoreBelow70 players={players} />
      </>
    );
  }

  return (
    <>
      <h1>Indian Team</h1>

      <h2>Odd Players</h2>
      <OddPlayers {...[IndianTeam]} />

      <hr />

      <h2>Even Players</h2>
      <EvenPlayers {...[IndianTeam]} />

      <hr />

      <ListofIndianPlayers IndianPlayers={IndianPlayers} />
    </>
  );
}

export default App;