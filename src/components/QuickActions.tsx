import { Link } from 'react-router-dom'
import { List, Title } from './styledComponents'

function QuickActions() {
  return (
    <>
      <Title className='title'>Quick Actions</Title>
      <List>
        <Link to='/manage' className='link'>
          Manage Account
        </Link>
        <Link to='/findus' className='link'>
          Find Us
        </Link>
        <Link to='/contact' className='link'>
          Contact us
        </Link>
      </List>
    </>
  )
}

export default QuickActions
