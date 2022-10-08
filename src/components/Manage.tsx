import React from 'react'
import { TUser } from '../assets/data'

import { InputPair, ManageContainer, ManageView } from './styledComponents'

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
    <ManageView>
      <ManageContainer>
        <h2>Manage Account Visibility</h2>
        <InputPair>
          <span>Show Checking Account</span>
          <input
            className='checkbox'
            type='checkbox'
            checked={userInfo.settings.isCheckingShown}
            onChange={handleCheckingVisibility}
          />
        </InputPair>
        <InputPair>
          <span>Show Savings Account</span>
          <input
            className='checkbox'
            type='checkbox'
            checked={userInfo.settings.isSavingsShown}
            onChange={handleSavingsVisibility}
          />
        </InputPair>
      </ManageContainer>
    </ManageView>
  )
}

export default Manage
