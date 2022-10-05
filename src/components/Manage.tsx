import React from 'react'
import { TUser } from '../assets/data'

import './Manage.css'

type ManageProps = {
  userInfo: TUser
  setUserInfo: React.Dispatch<React.SetStateAction<TUser>>
}

function Manage({ userInfo, setUserInfo }: ManageProps) {
  return <div>Manage</div>
}

export default Manage
