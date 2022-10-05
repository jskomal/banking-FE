import AccountPreview from './AccountPreview'
import QuickActions from './QuickActions'

import type { TAccount, TUser } from '../assets/data'

type HomeProps = {
  checking: TAccount
  savings: TAccount
  userInfo: TUser
}

function Home({ checking, savings, userInfo }: HomeProps) {
  return (
    <main id='main'>
      <div>
        <h2 className='title'>My Accounts</h2>
        {userInfo.settings.isCheckingShown && <AccountPreview account={checking} />}
        {userInfo.settings.isSavingsShown && <AccountPreview account={savings} />}
      </div>
      <div>
        <QuickActions />
      </div>
    </main>
  )
}

export default Home
