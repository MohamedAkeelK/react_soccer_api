import {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import { getLeagues } from '../services/leagues';
import  Logo from "../logo.jpg"

export default function NAV() {
  const [country, setCountry] = useState([])

  useEffect(() => {
    const fetchCountry = async () => {
      const allLeagues = await getLeagues()
      setCountry(allLeagues)
    }

    fetchCountry()
  }, [])

  if (!country) return "...loading"

  return (
    <nav className="nav">
      <div>
        <img src={Logo} alt="" width="150px" className='logo'/>
        <div>
          {country.map(({ country }, i) => {
            if (i === 0) {
              return <NavLink to={`/`} key={i}>{country}</NavLink>
            } else {
              return <NavLink to={`/${country}`} key={i}>{country}</NavLink>            
            }
        })}
        </div>
      </div>
    </nav>
  )
}
