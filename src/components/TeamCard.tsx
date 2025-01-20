import { Team } from '../types';

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
    return (
        <div className="team-card">
          <h3>{team.name}</h3>
          <h4>{team.owner}</h4>
          <p>Total Points: {team.totalPoints}</p>
        </div>
      );
}

export default TeamCard
