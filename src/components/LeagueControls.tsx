import { LeagueMetadata } from "../types";

interface LeagueControlsProps {
    metadata: LeagueMetadata;
    setMetadata: (metadata: LeagueMetadata) => void;
    setIsSelectionPhase: (b: boolean) => void;
}
const LeagueControls = ( { metadata, setMetadata, setIsSelectionPhase }: LeagueControlsProps) => {
    return (
        <button onClick={() => {
            setIsSelectionPhase(true);
            metadata.currentWeek++;
            console.log(`Advancing from week ${metadata.currentWeek} to ${metadata.currentWeek + 1}` )
        }}>
            Advance to week {metadata.currentWeek + 1}
        </button>
  )
}

export default LeagueControls
