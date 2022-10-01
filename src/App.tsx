import { useState } from 'react'
import { user, checkingAccount, savingsAccount } from './assets/data'

import Header from './components/Header'
import AccountPreview from './components/AccountPreview'
import './App.css'

function App() {
  const [userInfo, setUserInfo] = useState(user)
  const [checking, setChecking] = useState(checkingAccount)
  const [savings, setSavings] = useState(savingsAccount)

  const handleNotifications = () => {}

  return (
    <div className='app'>
      <Header userInfo={userInfo} handleNotifications={handleNotifications} />
      <main>
        <div>
          <h2 className='title'>My Accounts</h2>
          <AccountPreview account={checking} />
          <AccountPreview account={savings} />
        </div>
        <div>
          <h3>Quick Transfer</h3>
          <p>Transfer Component</p>
          <p>Quick Actions Component</p>
        </div>
      </main>
    </div>
  )
}

export default App
