import { useState, useEffect } from 'react';
import { getLeagues } from "../services/leagues.js";
import Leagues from '../components/Leagues.jsx';

export default function Home() {
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    const fetchLeagues = async () => {
      const allLeagues = await getLeagues()
      setLeagues(allLeagues)
    }

    fetchLeagues()
  }, [])

  if(!leagues) return "...loading"

  return (
      <Leagues leaguesData={leagues} /> 
  )
}
