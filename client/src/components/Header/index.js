
import React from 'react'
import { Link } from 'react-router-dom';
// import Nav from '../Nav'; EXS 19th July 2020 - commented out as unused at this time

// import Nav from '../Nav';
import Icon from '../../assets/HapLogoIcon.png';
import 'react-bulma-components/dist/react-bulma-components.min.css'
// import LocationSearch from '../LocationSearch/locSearch';

// EXS <a href> added to the following lines of code: 12, 17, 31, 34, 36, 38, 40
// RK added ='bulma stuff' after blank href tags to remove errors
const Header = () => {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/feed'>
          <img src={Icon} alt='LogoIcon' />
        </a>
        <a
          href='feed'
          className='navbar-burger burger'
          role='button'
          aria-label='menu'
          aria-expanded='false'
          data-target='navbar-menu'
        >
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
          <span aria-hidden='true'></span>
        </a>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-end'>
          <a href='feed' className='navbar-item'>
            Home
              </a>
          <a href='friends' className='navbar-item'>
            Friends
              </a>
          <div className='navbar-item has-dropdown is-hoverable'>
            <a href='feed' className='navbar-link'>
              Account
                </a>
            <div className='navbar-dropdown'>
              <Link to="/settings" className='navbar-item'>
                Settings
              </Link>
              <hr className='navbar-divider'></hr>
              <a href='contact' className='navbar-item'>
                Contact
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;