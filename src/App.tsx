import React, { useState } from "react";
import Dashboard from "./components/Dashboard";
import LeagueControls from "./components/LeagueControls";
import { LeagueMetadata, Team, Queen } from "./types";

const App = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      name: "Feeling the Fantasy",
      owner: "Chloe",
      totalPoints: 0,
      picks: {
        1: [],
      },
    },
    {
      name: "Fantasy Queens",
      owner: "Noah",
      totalPoints: 0,
      picks: {
        1: [],
      },
    },
    {
      name: "Silly Sluts",
      owner: "Julia",
      totalPoints: 0,
      picks: {
        1: [],
      },
    },
  ]);
  const [queens, setQueens] = useState<Queen[]>([
    {
      id: "1",
      name: "Acacia Forgot",
      points: 0,
    },
    {
      id: "2",
      name: "Arrietty",
      points: 0,
    },
    {
      id: "3",
      name: "Crystal Envy",
      points: 0,
    },
    {
      id: "4",
      name: "Hormona Lisa",
      points: 0,
    },
    {
      id: "5",
      name: "Jewels Sparkles",
      points: 0,
    },
    {
      id: "6",
      name: "Joella",
      points: 0,
    },
    {
      id: "7",
      name: "Kori King",
      points: 0,
    },
    {
      id: "8",
      name: "Lana Ja'Rae",
      points: 0,
    },
    {
      id: "9",
      name: "Lexi Love",
      points: 0,
    },
    {
      id: "10",
      name: "Lucky Starzzz",
      points: 0,
    },
    {
      id: "11",
      name: "Lydia B Kollins",
      points: 0,
    },
    {
      id: "12",
      name: "Onya Nurve",
      points: 0,
    },
    {
      id: "13",
      name: "Sam Star",
      points: 0,
    },
    {
      id: "14",
      name: "Suzie Toot",
      points: 0,
    },
  ]);
  const [metadata, setMetadata] = useState<LeagueMetadata>({
    currentWeek: 1,
    eliminatedQueens: [],
  });

  return (
    <div style={{margin: "10px"}}>
      <h1>RuPaul's Drag Race Fantasy League</h1>
      <Dashboard teams={teams} />
      <LeagueControls metadata={metadata} setMetadata={setMetadata} />
    </div>
  );
};

export default App;
