import React, { Component } from 'react';
import Nav from '../Nav';
import Icon from '../../assets/HapLogoIcon.png';
import 'react-bulma-components/dist/react-bulma-components.min.css'

// EXS <a href> added to the following lines of code: 12, 17, 31, 34, 36, 38, 40
// RK added ='bulma stuff' after blank href tags to remove errors
class Header extends Component {
  render () {
    return (
      <>
        <nav className='navbar' role='navigation' aria-label='main navigation'>
          <div className='navbar-brand'>
            <a href='bulma stuff' className='navbar-item' href='localhost:3000/home'>
              <img src={Icon} alt='LogoIcon' />
            </a>
            <a
              href='bulma stuff'
              className='navbar-burger burger'
              role='button'
              aria-label='menu'
              aria-expanded='false'
              data-target='navbarBasicExample'
            >
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
              <span aria-hidden='true'></span>
            </a>
          </div>
          <div className='navbar-menu'>
            <div className='navbar-end'>
              <a href='bulma stuff' className='navbar-item'>
                Home
              </a>
              <a href='bulma stuff' className='navbar-item'>
                Friends
              </a>
              <div className='navbar-item has-dropdown is-hoverable'>
                <a href='bulma stuff' className='navbar-link'>
                  Account
                </a>
                <div className='navbar-dropdown'>
                  <a href='bulma stuff' className='navbar-item'>
                    Settings
                  </a>
                  <hr className='navbar-divider'></hr>
                  <a href='bulma stuff' className='navbar-item'>
                    Contact
                  </a>
                  <hr className='navbar-divider'></hr>
                  <a href='bulma stuff' className='navbar-item'>
                    Logout
                  </a>
                </div>

                <div className='navbar-menu'>
                    <div className='navbar-end'>
                        <a className='navbar-item'>
                            Home
                            </a>
                        <a className='navbar-item'>
                            Friends
                            </a>
                        <div className='navbar-item has-dropdown is-hoverable'>
                            <a className='navbar-link'>
                                Account
                                </a>
                            <div className='navbar-dropdown'>
                                <a className='navbar-item'>
                                    Settings
                                    </a>
                                <hr className='navbar-divider'></hr>
                                <a className='navbar-item'>
                                    Contact
                                    </a>
                                <hr className='navbar-divider'></hr>
                                <a className='navbar-item'>
                                    Logout
                                    </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

        )
    }
}

export default Header;