import React from 'react';
import "./NavBar.css"

export default function Navbar() {
  return (
    <nav className="nav">
        <a href="/" className='site-title'>Site Name</a>
        <ul>
            <li>
                <a href="/player">Your Player</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
        </ul>
    </nav>
  )
}
