import React from 'react'
import { NavLink } from 'react-router-dom';

export default function NAV() {
  return (
    <nav className="nav">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Home</NavLink>
        {/* <div>
          <NavLink to="/leagues">All Leagues</NavLink>
          <NavLink to="/">Add league</NavLink>
        </div> */}
      </div>
    </nav>
  )
}
