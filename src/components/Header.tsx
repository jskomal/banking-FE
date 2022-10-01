import { useState } from 'react'
import dayjs from 'dayjs'
import reactLogo from '../assets/react.svg'
import bell from '../assets/bell.svg'
import { Link, useLocation } from 'react-router-dom'
import './Header.css'

import { TUser } from '../assets/data'
import NotificationModal from './NotificationModal'

type HeaderProps = {
  userInfo: TUser
  markNotificationAsRead: (id: number) => void
}

function Header({ userInfo, markNotificationAsRead }: HeaderProps) {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false)
  const { pathname } = useLocation()
  const { firstName, lastName, memberSince } = userInfo
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
        <Link to={'/'} className={pathname === '/' ? 'active' : ''}>
          My Accounts {'\u2304'}
        </Link>
        <Link to={'transfer'} className={pathname === '/transfer' ? 'active' : ''}>
          Move Money {'\u2304'}
        </Link>
        <Link to={'analytics'} className={pathname === '/analytics' ? 'active' : ''}>
          Analytics {'\u2304'}
        </Link>
        <div
          className='notification'
          onClick={() => setIsNotificationOpen((prev) => !prev)}
        >
          <img src={bell} alt='notification' />
          <p>{userInfo.notifications.length}</p>
        </div>
        <div className='user'>
          <h2 className='initials'>{initals}</h2>
          <div className='user-details'>
            <h3>
              {firstName.toUpperCase()} {lastName.toUpperCase()}
            </h3>
            <p>Member Since {dayjs(memberSince).format('MMM D, YYYY')}</p>
          </div>
        </div>
      </div>
      <hr />
      {isNotificationOpen && userInfo.notifications.length > 0 && (
        <NotificationModal
          notifications={userInfo.notifications}
          markNotificationAsRead={markNotificationAsRead}
        />
      )}
    </header>
  )
}

export default Header
