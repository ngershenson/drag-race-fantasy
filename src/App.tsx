import { useState } from "react";
import Dashboard from "./components/Dashboard";
import LeagueControls from "./components/LeagueControls";
import QueenAssignmentBoard from "./components/QueenAssignmentBoard";
import PointsTable from "./components/PointsTable";
import { LeagueMetadata, Team, Queen } from "./types";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [teams, setTeams] = useState<Team[]>([
    {
      id: 1,
      name: "Feeling the Fantasy",
      owner: "Chloe",
      totalPoints: 0,
      picks: {
        1: [],
      },
    },
    {
      id: 2,
      name: "Ru's Ruse",
      owner: "Noah",
      totalPoints: 0,
      picks: {
        1: [],
      },
    },
    {
      id: 3,
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
      id: 1,
      name: "Acacia Forgot",
      points: 0,
    },
    {
      id: 2,
      name: "Arrietty",
      points: 0,
    },
    {
      id: 3,
      name: "Crystal Envy",
      points: 0,
    },
    {
      id: 4,
      name: "Hormona Lisa",
      points: 0,
    },
    {
      id: 5,
      name: "Jewels Sparkles",
      points: 0,
    },
    {
      id: 6,
      name: "Joella",
      points: 0,
    },
    {
      id: 7,
      name: "Kori King",
      points: 0,
    },
    {
      id: 8,
      name: "Lana Ja'Rae",
      points: 0,
    },
    {
      id: 9,
      name: "Lexi Love",
      points: 0,
    },
    {
      id: 10,
      name: "Lucky Starzzz",
      points: 0,
    },
    {
      id: 11,
      name: "Lydia B Kollins",
      points: 0,
    },
    {
      id: 12,
      name: "Onya Nurve",
      points: 0,
    },
    {
      id: 13,
      name: "Sam Star",
      points: 0,
    },
    {
      id: 14,
      name: "Suzie Toot",
      points: 0,
    },
  ]);
  const [isSelectionPhase, setIsSelectionPhase] = useState(true);
  const [metadata, setMetadata] = useState<LeagueMetadata>({
    currentWeek: 1,
    eliminatedQueens: [],
  });

  const endSelectionPhase = () => {
    setIsSelectionPhase(false);
  };

  const assignQueenToTeam = (
    queenId: number,
    teamIndex: number,
    multiplier: number
  ) => {
    setTeams((prevTeams) => {
      return prevTeams.map((team) => {
        if (team.id === teamIndex) {
          team.picks[metadata.currentWeek] = [
            ...team.picks[metadata.currentWeek],
            {
              queen: queens.find((queen) => queen.id === queenId)!,
              multiplier: multiplier,
            },
          ];
        }
        return team;
      });
    });
  };

  const handleAssignQueen = (queenId: number, teamIndex: number) => {
    assignQueenToTeam(queenId, teamIndex, 1);
    console.log(`${teams[teamIndex].name} picked ${queens[queenId].name}`);
  };

  return (
    <>
      <h1 className="display-2">Ru Paul's Drag Race Fantasy</h1>

      <div className="queen-selection-phase-container">
        {isSelectionPhase ? (
          <>
            <QueenAssignmentBoard
              queens={queens}
              teams={teams}
              handleClick={handleAssignQueen}
            />
            <button id="assign-queens" className="btn btn-danger" onClick={endSelectionPhase}>
              Finish Selection
            </button>
          </>
        ) : (
          <div>
            <h2 className="display-4">Submit Points for the Week</h2>
            <PointsTable data={teams} />
          </div>
        )}
      </div>
      <Dashboard teams={teams} />
      {!isSelectionPhase && (
        <LeagueControls
          metadata={metadata}
          setMetadata={setMetadata}
          setIsSelectionPhase={setIsSelectionPhase}
        />
      )}
    </>
  );
};

export default App;
