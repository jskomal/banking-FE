import { useState } from 'react'
import { user, checkingAccount, savingsAccount } from './assets/data'

import Header from './components/Header'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  const [userInfo, setUserInfo] = useState(user)
  const [checking, setChecking] = useState(checkingAccount)
  const [savings, setSavings] = useState(savingsAccount)

  const markNotificationAsRead = (id: number) => {
    setUserInfo((prev) => {
      const indexToRemove = prev.notifications.findIndex((item) => item.id === id)
      prev.notifications.splice(indexToRemove, 1)
      return { ...prev }
    })
  }

  return (
    <div className='app'>
      <Header userInfo={userInfo} markNotificationAsRead={markNotificationAsRead} />
      <Outlet context={{ checking, setChecking, savings, setSavings }} />
    </div>
  )
}

export default App
