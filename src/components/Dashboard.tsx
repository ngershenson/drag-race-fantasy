import TeamCard from './TeamCard';
import { Team } from '../types';

interface DashboardProps {
  teams: Team[];
}

const Dashboard = ({ teams }: DashboardProps) => {
    return (
        <div>
          <h2>Teams</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {teams.map((team) => (
              <TeamCard key={team.name} team={team} />
            ))}
          </div>
        </div>
      );
}

export default Dashboard
