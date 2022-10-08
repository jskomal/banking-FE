import { useState } from 'react'
import dayjs from 'dayjs'
import { Link, useLocation } from 'react-router-dom'

import bell from '../assets/bell.svg'
import reactLogo from '../assets/react.svg'
import NotificationModal from './NotificationModal'

import { TUser } from '../assets/data'
import './Header.css'

import {
  HeaderComp,
  HiddenLink,
  Initials,
  Logo,
  Notification,
  User,
  UserDetails
} from '../components/styledComponents'

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
    <>
      <HiddenLink href='#main'>Skip to main</HiddenLink>
      <HeaderComp>
        <Logo>
          <img src={reactLogo} alt='Fake Bank Logo' />
          <div>
            <h1>REACT</h1>
            <p>Credit Union</p>
          </div>
        </Logo>
        <Link to={'/'} className={pathname === '/' ? 'active' : ''}>
          My Accounts {'\u2304'}
        </Link>
        <Link to={'transfer'} className={pathname === '/transfer' ? 'active' : ''}>
          Move Money {'\u2304'}
        </Link>
        <Link to={'analytics'} className={pathname === '/analytics' ? 'active' : ''}>
          Analytics {'\u2304'}
        </Link>
        <Notification onClick={() => setIsNotificationOpen((prev) => !prev)}>
          <img src={bell} alt='notification' />
          <p>{userInfo.notifications.length}</p>
        </Notification>
        <User>
          <Initials>{initals}</Initials>
          <UserDetails>
            <h3>
              {firstName.toUpperCase()} {lastName.toUpperCase()}
            </h3>
            <p>Member Since {dayjs(memberSince).format('MMM D, YYYY')}</p>
          </UserDetails>
        </User>
      </HeaderComp>
      <hr />
      {isNotificationOpen && userInfo.notifications.length > 0 && (
        <NotificationModal
          notifications={userInfo.notifications}
          markNotificationAsRead={markNotificationAsRead}
        />
      )}
    </>
  )
}

export default Header
