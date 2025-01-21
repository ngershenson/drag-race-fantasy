import { Queen, Team } from "../types";
interface QueenAssignmentBoardProps {
  queens: Queen[];
  teams: Team[];
  handleClick: (queenId: number, teamIndex: number) => void;
}
const QueenAssignmentBoard = ({
  queens,
  teams,
  handleClick,
}: QueenAssignmentBoardProps) => {
  return (
    <>
      <div className="queen-assignment-board">
        <h2 className="display-4">Select Your Queens</h2>

        <div className="queen-assignment-container">
          {queens.map((queen) => {
            return (
              <div className="card queen-assignment-card">
                <div className="card-body">
                  <div className="card-title display-6">{queen.name}</div>
                  {/* <p className="card-text">She slays this week</p> */}
                  <div className="queen-assignment-buttons">
                    {teams.map((team) => {
                      return (
                        <button
                          className="btn btn-sm btn-outline-secondary queen-assignment-button"
                          onClick={() => handleClick(queen.id - 1, team.id - 1)}
                        >
                          {team.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default QueenAssignmentBoard;
