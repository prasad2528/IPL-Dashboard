// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails
  return (
    <Link to={`/team-matches/${id}`} className="blog-item-link">
      <li className="teamList">
        <img src={teamImageUrl} alt={name} className="image" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}
export default TeamCard
