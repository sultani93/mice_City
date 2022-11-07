import React from 'react'
import './header.css'
import { Link } from 'react-scroll'
import logo from '../../components/images/logo.PNG'

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <Link>
          <img src={logo} alt='logo' />
        </Link>
        <div className='nav_menu'>
          <ul>
            <li className='nav_item'>
              <Link>Home</Link>
            </li>
            <li className='nav_item'>
              <Link>About</Link>
            </li>
            <li className='nav_item'>
              <Link>Services</Link>
            </li>
            <li className='nav_item'>
              <Link>Our Team</Link>
            </li>
            <li className='nav_item'>
              <Link>Gallery</Link>
            </li>
            <li className='nav_item'>
              <Link>Contact</Link>
            </li>
          </ul>
          <select
            className='select_language'
            name='select_language'
            id='languages'
          >
            <option value='Eng'>Eng</option>
            <option value='Aze'>Aze</option>
            <option value='Rus'>Rus</option>
          </select>
        </div>
      </nav>
    </header>
  )
}

export default Header
