import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Home from './components/Home'
import Transfer from './components/Transfer'
import Analytics from './components/Analytics'

import './App.css'
import { user, checkingAccount, savingsAccount } from './assets/data'

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
      <Routes>
        <Route path='/' element={<Home checking={checking} savings={savings} />} />
        <Route path='/transfer' element={<Transfer />} />
        <Route path='/analytics' element={<Analytics />} />
      </Routes>
    </div>
  )
}

export default App
