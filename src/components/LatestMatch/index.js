// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    result,
    secondInnings,
    umpires,
    venue,
  } = latestMatchData
  return (
    <div className="latest-Match-container">
      <div className="first-row">
        <p className="team-name">{competingTeam}</p>
        <p className="date">{date}</p>
        <p className="venue">{venue}</p>
        <p className="result">{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        alt={`latest match ${competingTeam}`}
        className="main-logo"
      />
      <div className="second-row">
        <h2 className="innings">First Innings</h2>
        <p className="value">{firstInnings}</p>
        <h2 className="innings">second Innings</h2>
        <p className="value">{secondInnings}</p>
        <h2 className="innings">Man Of The Match</h2>
        <p className="value">{manOfTheMatch}</p>
        <h2 className="innings">umpires</h2>
        <p className="value">{umpires}</p>
      </div>
    </div>
  )
}
export default LatestMatch
