import { Team } from '../types';

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', width: '200px' }}>
          <h3>{team.name}</h3>
          <h4>{team.owner}</h4>
          <p>Total Points: {team.totalPoints}</p>
        </div>
      );
}

export default TeamCard
