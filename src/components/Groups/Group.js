import { NavLink } from 'react-router-dom';

const Group = (props) => {
  const { name, number, slug } = props

  return (
    <NavLink className="links p-3 min-h-5 group" to={`/sports/${slug}`} >
        <h2 className="text-end no-select fw-bold">{name.toUpperCase()}</h2>
        <p className="text-end no-select">{`${number} sports`}</p>
    </NavLink>
  )
}

export default Group