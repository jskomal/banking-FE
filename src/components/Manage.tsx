import React from 'react'
import { TUser } from '../assets/data'

import './Manage.css'

type ManageProps = {
  userInfo: TUser
  setUserInfo: React.Dispatch<React.SetStateAction<TUser>>
}

function Manage({ userInfo, setUserInfo }: ManageProps) {
  const handleCheckingVisibility = () => {
    setUserInfo((prev) => {
      prev.settings.isCheckingShown = !prev.settings.isCheckingShown
      return { ...prev }
    })
  }

  const handleSavingsVisibility = () => {
    setUserInfo((prev) => {
      prev.settings.isSavingsShown = !prev.settings.isSavingsShown
      return { ...prev }
    })
  }

  return (
    <div className='manage-view'>
      <div className='manage-container'>
        <h2>Manage Account Visibility</h2>
        <div className='input-pair'>
          <span>Show Checking Account</span>
          <input
            className='checkbox'
            type='checkbox'
            checked={userInfo.settings.isCheckingShown}
            onChange={handleCheckingVisibility}
          />
        </div>
        <div className='input-pair'>
          <span>Show Savings Account</span>
          <input
            className='checkbox'
            type='checkbox'
            checked={userInfo.settings.isSavingsShown}
            onChange={handleSavingsVisibility}
          />
        </div>
      </div>
    </div>
  )
}

export default Manage
