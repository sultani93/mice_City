import './header.css'
import logo from '../../components/images/logo.PNG'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <nav className='navbar'>
        <NavLink to='/' exact>
          <img src={logo} alt='logo' />
        </NavLink>
        <div className='nav_menu'>
          <ul className='nav_list'>
            <li className='nav_item'>
              <NavLink to='/' exact>
                Home
              </NavLink>
            </li>
            <li className='nav_item'>
              <NavLink to='/about'> About </NavLink>
            </li>
            <li className='nav_item'>
              <NavLink to='/services'> Services </NavLink>
            </li>
            <li className='nav_item'>
              <NavLink to='/ourTeam'> Our Team </NavLink>
            </li>
            <li className='nav_item galleryNav'>
              <NavLink> Gallery</NavLink>

              <ul className='galleryDrop'>
                <li>
                  <NavLink to='/portfolio'> Portfolio</NavLink>
                </li>
                <li>
                  <NavLink to='/mice'> MICE плоъщадки</NavLink>
                </li>
                <li>
                  <NavLink to='/dostoprimitelstvo'>
                    Достопримечательности
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='nav_item'>
              <NavLink to='/contact'> Contact</NavLink>
            </li>
          </ul>
          <div className='languagePart'>
            <span>
              <svg
                id='Layer_1'
                data-name='Layer 1'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 21.78 21.78'
              >
                <path
                  class='langIcon'
                  d='M21.78,10.89c0,6.01-4.89,10.9-10.9,10.89C4.88,21.77,0,16.89,0,10.89,0,4.88,4.89,0,10.9,0c6,0,10.88,4.89,10.88,10.89ZM7.26,6.75c-.23,1.15-.38,2.32-.39,3.51H14.91c-.02-1.2-.16-2.37-.4-3.51-1.23,.03-2.43,.08-3.63,.08-1.2,0-2.4-.05-3.62-.08Zm7.65,4.77H6.87c.02,1.19,.16,2.36,.4,3.53,2.42-.16,4.83-.15,7.24,0,.24-1.18,.38-2.34,.4-3.53Zm-.7,4.74c-2.24-.14-4.43-.14-6.64,0,.02,.09,.03,.15,.05,.21,.27,.97,.68,1.89,1.27,2.71,.24,.35,.54,.67,.87,.93,.79,.62,1.61,.59,2.36-.07,1.13-1,1.65-2.35,2.09-3.78Zm0-10.75c-.2-.76-.47-1.45-.83-2.11-.33-.61-.67-1.21-1.23-1.65-.34-.27-.7-.5-1.15-.52-.61-.03-1.09,.25-1.51,.66-1,.99-1.51,2.24-1.89,3.56,0,.02,.01,.04,.02,.07,2.19,.14,4.37,.14,6.59,0Zm-8.23,1.13c-1.02-.13-2.05-.26-3.09-.39-.47-.06-.47-.06-.68,.37-.56,1.14-.88,2.34-.96,3.63H5.59c.13-1.21,.26-2.41,.39-3.61ZM15.8,15.15c.07,.01,.15,.02,.23,.03,.95,.11,1.91,.22,2.86,.34,.46,.06,.46,.06,.67-.35,.57-1.15,.89-2.36,.98-3.65h-4.34c-.13,1.21-.26,2.41-.4,3.63Zm4.72-4.88c0-1.12-.55-3.06-1.13-3.95-.04-.06-.18-.1-.27-.09-.71,.08-1.42,.18-2.13,.27-.41,.05-.82,.09-1.19,.13,.13,1.22,.26,2.42,.4,3.63h4.33Zm-14.93,1.26H1.25c.1,1.4,.47,2.69,1.11,3.91,.07,.14,.16,.14,.29,.12,.87-.11,1.73-.22,2.6-.33,.26-.03,.51-.06,.73-.08-.13-1.23-.26-2.42-.39-3.62Zm8.2,8.58c1.94-.63,3.54-1.75,4.8-3.38-.06-.02-.09-.04-.12-.04-.96-.11-1.91-.21-2.87-.33-.15-.02-.16,.07-.19,.17-.23,.65-.44,1.31-.72,1.94-.25,.56-.59,1.08-.89,1.63ZM3.19,5.05c.06,.02,.09,.04,.12,.04,.96,.11,1.91,.21,2.87,.33,.16,.02,.16-.08,.19-.17,.23-.65,.44-1.31,.72-1.94,.25-.56,.59-1.08,.89-1.63-1.94,.63-3.53,1.74-4.8,3.38Zm15.41,.02c-1.28-1.65-2.87-2.77-4.86-3.41,.16,.24,.3,.45,.43,.65,.55,.89,.93,1.86,1.21,2.87,.05,.18,.11,.26,.32,.23,.53-.07,1.06-.11,1.59-.17,.42-.05,.85-.11,1.31-.17Zm-10.6,15.05s0-.05-.01-.06c-.78-1.07-1.26-2.27-1.63-3.53-.04-.12-.08-.16-.21-.15-.57,.06-1.14,.11-1.71,.17-.41,.05-.82,.11-1.27,.17,1.28,1.65,2.87,2.77,4.83,3.4Z'
                />
              </svg>
            </span>
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
        </div>
      </nav>
    </header>
  )
}

export default Header
