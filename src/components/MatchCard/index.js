// Write your code here
import './index.css'

const MatchCard = props => {
  const {teamDetails} = props
  const {competingTeam, competingTeamLogo, matchStatus, result} = teamDetails
  const isMatchWon = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="teamLogo"
      />
      <p className="teamName">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={isMatchWon}>{matchStatus}</p>
    </li>
  )
}
export default MatchCard
