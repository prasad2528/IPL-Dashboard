import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

class TeamMatches extends Component {
  state = {teamMatchesData: [], isLoading: true}

  componentDidMount() {
    this.getFullData()
  }

  getFormattedData = data => ({
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    date: data.date,
    firstInnings: data.first_innings,
    id: data.id,
    manOfTheMatch: data.man_of_the_match,
    matchStatus: data.match_status,
    result: data.result,
    secondInnings: data.second_innings,
    umpires: data.umpires,
    venue: data.venue,
  })

  getFullData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachData =>
        this.getFormattedData(eachData),
      ),
    }
    console.log(updatedData)
    this.setState({teamMatchesData: updatedData, isLoading: false})
  }

  renderRecentMatches = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData
    return (
      <ul className="matches-list">
        {recentMatches.map(eachData => (
          <MatchCard key={eachData.id} teamDetails={eachData} />
        ))}
      </ul>
    )
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatchDetails} = teamMatchesData
    return (
      <div className="latestMatches">
        <img src={teamBannerUrl} alt="team banner" className="banner" />
        <h2 className="latestMatch-heading">Latest Matches</h2>
        <LatestMatch latestMatchData={latestMatchDetails} />
        {this.renderRecentMatches()}
      </div>
    )
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader">
      <Loader type="Oval" color="#ffffff" height={80} />
    </div>
  )

  renderColorsClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'sh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className={`main-match-container ${this.renderColorsClassName()}`}>
        <div className="card-container">
          {isLoading ? this.renderLoader() : this.renderTeamMatches()}
        </div>
      </div>
    )
  }
}
export default TeamMatches
