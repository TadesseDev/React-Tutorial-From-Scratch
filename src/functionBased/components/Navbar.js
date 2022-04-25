import React from 'react'

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
  return (
    <nav className="navBar">
      <ul>
        {links.map(link => {
          return <li key={link.id}>{link.text}</li>
        })}
      </ul>
    </nav>
  )
}
