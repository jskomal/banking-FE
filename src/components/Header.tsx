import { useState } from 'react'
import React from 'react'
import reactLogo from '../assets/react.svg'
import bell from '../assets/bell.svg'
import { Outlet, Link } from 'react-router-dom'
import './Header.css'

import { TUser } from '../assets/data'

type HeaderProps = {
  userInfo: TUser
  handleNotifications: () => void
}

function Header({ userInfo, handleNotifications }: HeaderProps) {
  const { firstName, lastName, notificationCount, memberSince } = userInfo

  const initals = firstName[0].toUpperCase() + lastName[0].toUpperCase()

  return (
    <header>
      <div className='header'>
        <div className='logo'>
          <img src={reactLogo} alt='Fake Bank Logo' />
          <div>
            <h1>REACT</h1>
            <p>Credit Union</p>
          </div>
        </div>
        <Link to={'/'}>My Accounts {'\u2304'}</Link>
        <Link to={'transfer'}>Move Money {'\u2304'}</Link>
        <Link to={'analytics'}>Analytics {'\u2304'}</Link>
        <div className='notification'>
          <img src={bell} alt='notification' />
          <p>{notificationCount}</p>
        </div>
        <div className='user'>
          <h2 className='initials'>{initals}</h2>
          <div className='user-details'>
            <h3>
              {firstName.toUpperCase()} {lastName.toUpperCase()}
            </h3>
            <p>Member Since {memberSince}</p>
          </div>
        </div>
      </div>
      <hr />
    </header>
  )
}

export default Header
