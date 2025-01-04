import { LeagueMetadata } from "../types";

interface LeagueControlsProps {
    metadata: LeagueMetadata;
    setMetadata: (metadata: LeagueMetadata) => void;
}
const LeagueControls = ( { metadata, setMetadata }: LeagueControlsProps) => {
    return (
    <>
        <div>LeagueControls</div>
        <div>{metadata.currentWeek}</div>
    </>
  )
}

export default LeagueControls
