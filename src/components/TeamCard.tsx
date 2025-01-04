import { Team } from '../types';

interface TeamCardProps {
  team: Team;
}

const TeamCard = ({ team }: TeamCardProps) => {
    return (
        <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
          <h3>{team.name}</h3>
          <p>Owner: {team.owner}</p>
          <p>Total Points: {team.totalPoints}</p>
        </div>
      );
}

export default TeamCard
