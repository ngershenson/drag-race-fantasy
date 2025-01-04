// Represents a single queen
export interface Queen {
    id: number; // Unique identifier for the queen
    name: string;
    points: number; // Points earned this week
  }

  // Represents weekly picks with multipliers
  export interface WeeklyPick {
    queen: Queen;
    multiplier: number; // e.g., 3x, 2x, etc.
  }

  // Represents a team
  export interface Team {
    name: string;
    id: number;
    owner: string;
    totalPoints: number; // Cumulative points for the team
    picks: {
      [week: number]: WeeklyPick[];
    };
  }

  // Metadata for the league
  export interface LeagueMetadata {
    currentWeek: number; // Current week in the competition
    eliminatedQueens: string[]; // IDs of eliminated queens
  }
