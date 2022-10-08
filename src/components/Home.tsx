import AccountPreview from './AccountPreview'
import QuickActions from './QuickActions'

import type { TAccount, TUser } from '../assets/data'
import { Link } from 'react-router-dom'

import { Main, Title } from '../components/styledComponents'

type HomeProps = {
  checking: TAccount
  savings: TAccount
  userInfo: TUser
}

function Home({ checking, savings, userInfo }: HomeProps) {
  return (
    <Main id='main'>
      <div>
        <Title className='title'>My Accounts</Title>
        {userInfo.settings.isCheckingShown && <AccountPreview account={checking} />}
        {userInfo.settings.isSavingsShown && <AccountPreview account={savings} />}
        {!userInfo.settings.isCheckingShown && !userInfo.settings.isSavingsShown && (
          <p>
            No Accounts Shown, check the{' '}
            <Link className='link' to='/manage'>
              Manage Accounts page
            </Link>{' '}
            to display an account
          </p>
        )}
      </div>
      <div>
        <QuickActions />
      </div>
    </Main>
  )
}

export default Home
