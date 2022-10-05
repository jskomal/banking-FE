import { Link } from 'react-router-dom'
import './QuickActions.css'

function QuickActions() {
  return (
    <div className='quick-container'>
      <h2 className='title'>Quick Actions</h2>
      <section className='quick-actions-container'>
        <div className='list'>
          <Link to='/manage' className='link'>
            Manage Account
          </Link>
          <Link to='/findus' className='link'>
            Find Us
          </Link>
          <Link to='/contact' className='link'>
            Contact us
          </Link>
        </div>
      </section>
    </div>
  )
}

export default QuickActions
