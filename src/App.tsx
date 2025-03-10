import { useState, useEffect } from "react";
import Dashboard from "./components/Dashboard";
import LeagueControls from "./components/LeagueControls";
import QueenAssignmentBoard from "./components/QueenAssignmentBoard";
import PointsTable from "./components/PointsTable";
import { LeagueMetadata, Team, Queen } from "./types";
import {ORIGINAL_QUEENS, ORIGINAL_TEAMS} from "../CONSTANTS.ts"
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [queens, setQueens] = useState<Queen[]>([]);
  const [isSelectionPhase, setIsSelectionPhase] = useState(true);
  const [metadata, setMetadata] = useState<LeagueMetadata>({
    currentWeek: 1,
    eliminatedQueens: [],
  });

  useEffect(() => {
    setTeams(ORIGINAL_TEAMS)
    setQueens(ORIGINAL_QUEENS)
  }, [])

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

      <div className="queen-cards-container">
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
