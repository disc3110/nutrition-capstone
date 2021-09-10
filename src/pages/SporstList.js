import { useParams } from "react-router-dom"
import { useSelector } from 'react-redux';
import SportsByCategory from "../components/SportsByCategory";
import decatlonLogo from '../assets/Decathlon_Group-Logo.wine.svg'
import '../style/categories.css'

const SportsList = () => {
  const { slug } = useParams();
  const sports = useSelector((state) => state.sports.entities)
  const groups = useSelector((state) => state.groups.entities)
  const currentGroup = groups.filter(group => group.attributes.slug === slug)
  const thisSports = currentGroup[0].relationships.sports.data.map((sport)=> sports.filter(allsport => allsport.id === sport.id)[0])
  console.log(currentGroup)
  const renderSports = ( sportsCollection ) => sportsCollection.map(sportsInfo => (
    <SportsByCategory 
      key={sportsInfo.id}
      icon={sportsInfo.attributes.icon}
      title={sportsInfo.attributes.name}
    />
  ))

  return (
    <>
    <img src={decatlonLogo} alt="Decathon Logo" className=" w-100 decathon-logo"/>
    <p className="subtitle"> { `LIST OF ${currentGroup[0].attributes.name.toUpperCase()}` } </p>
    <div> {renderSports(thisSports)} </div>
    </>
  )

}

export default SportsList