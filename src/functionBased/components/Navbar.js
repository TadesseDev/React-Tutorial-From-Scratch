import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/about",
      text: "About",
    },
  ]
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(prev => !prev)
  }
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
        {links.map(link => {
          return <li key={link.id}>
            <NavLink to={link.path}>{link.text}</NavLink>
          </li>
        })}
      </ul>
    </nav>
  )
}
