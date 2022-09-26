import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { user, checkingAccount, savingsAccount } from './assets/data'
function App() {
  const [userInfo, setUserInfo] = useState(user)
  const [checking, setChecking] = useState(checkingAccount)
  const [savings, setSavings] = useState(savingsAccount)

  const handleNotifications = () => {}

  return (
    <div className='app'>
      <Header userInfo={userInfo} handleNotifications={handleNotifications} />
    </div>
  )
}

export default App
