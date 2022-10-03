import React from 'react'
import AccountPreview from './AccountPreview'
import QuickActions from './QuickActions'

import type { TAccount } from '../assets/data'

type HomeProps = {
  checking: TAccount
  savings: TAccount
}

function Home({ checking, savings }: HomeProps) {
  return (
    <main id='main'>
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
