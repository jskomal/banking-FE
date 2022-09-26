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
      <main>
        <div>
          <h2>My Accounts</h2>
          <p>Checking Component</p>
          <p>Savings Component</p>
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
