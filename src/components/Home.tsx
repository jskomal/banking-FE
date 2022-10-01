import React from 'react'
import { useOutletContext } from 'react-router-dom'
import AccountPreview from './AccountPreview'
import QuickActions from './QuickActions'

import type { TAccount } from '../assets/data'

type HomeOutletProps = {
  checking: TAccount
  setChecking: React.Dispatch<React.SetStateAction<TAccount>>
  savings: TAccount
  setSavings: React.Dispatch<React.SetStateAction<TAccount>>
}

function Home() {
  const { checking, setChecking, savings, setSavings }: HomeOutletProps =
    useOutletContext()

  return (
    <main>
      <div>
        <h2 className='title'>My Accounts</h2>
        <AccountPreview account={checking} />
        <AccountPreview account={savings} />
      </div>
      <div>
        <QuickActions />
      </div>
    </main>
  )
}

export default Home